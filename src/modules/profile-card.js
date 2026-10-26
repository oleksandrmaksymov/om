/* ======================================================
   PROFILE CARD — square WebGL2 photo effect (Info page)
   Webflow: <div id="profile-card" style="width:100%;height:100%;position:relative;"></div>
            inside the 1:1 custom-code block.
   Based on the "om-2" scene (same blur / duotone / render pipeline):
     pass 1 (half resolution): photo on black → noise blur (blur direction from animated noise derivatives)
     pass 2 (full resolution): exactly STRIPES vertical pixel stripes (edges always on stripe borders) → duotone + overlay
   Canvas = block size × dpi (max 1.5), 60 fps. No cursor / touch reaction — the image just floats.
   Rendering pauses off-screen; cleanup frees the WebGL context (Barba).
   ====================================================== */

const IMAGE_SRC = 'https://cdn.prod.website-files.com/609cc71571f11228bb986695/6ad8527f9a59edc53a03cfc6_profile.avif';

const FPS = 60;
const DPI = Math.min(1.5, window.devicePixelRatio || 1);
const BLUR_DOWNSAMPLE = 0.5;   // blur pass resolution
const BLUR_SPEED = 0.26;       // scene "speed": time step per frame at 60 fps
const BLUR_AMOUNT = 0.59;      // scene "amount": blur length
const BLUR_SCALE = 0.15;       // scene "scale": noise field size
const BLUR_SKEW = 0.8;         // scene "skew": noise stretched along x (0.5 = even)
const BLUR_ANGLE = 0.3139;     // scene "angle": noise field rotation, turns
const STRIPES = 20;            // stripes across the card (grid starts at the edge → no cut stripes)

const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

/* ———— pass 1: photo + noise blur ———— */
const FRAG_BLUR = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uImage;
uniform vec2 uImageSize;
uniform vec2 uResolution;
uniform float uTime;
uniform float uAmount;
uniform float uScale;
uniform float uSkew;
uniform float uAngle;

/* OpenSimplex2 (BCC lattice) noise with derivatives — based on K.jpg (KdotJPG), public domain
   https://github.com/KdotJPG/OpenSimplex2 */
vec4 permute(vec4 t) { return t * (t * 34.0 + 133.0); }
vec3 grad(float hash) {
  vec3 cube = mod(floor(hash / vec3(1.0, 2.0, 4.0)), 2.0) * 2.0 - 1.0;
  vec3 cuboct = cube;
  /* cuboct component masks exactly as in the om-2 scene */
  float index0 = step(0.0, 1.0 - floor(hash / 16.0));
  float index1 = step(0.0, floor(hash / 16.0) - 1.0);
  cuboct.x *= 1.0 - index0;
  cuboct.y *= 1.0 - index1;
  cuboct.z *= 1.0 - (1.0 - index0 - index1);
  float type = mod(floor(hash / 8.0), 2.0);
  vec3 rhomb = (1.0 - type) * cube + type * (cuboct + cross(cube, cuboct));
  vec3 g = cuboct * 1.22474487139 + rhomb;
  g *= (1.0 - 0.042942436724648037 * type) * 3.5946317686139184;
  return g;
}
vec4 bccNoiseDerivativesPart(vec3 X) {
  vec3 b = floor(X);
  vec4 i4 = vec4(X - b, 2.5);
  vec3 v1 = b + floor(dot(i4, vec4(.25)));
  vec3 v2 = b + vec3(1, 0, 0) + vec3(-1, 1, 1) * floor(dot(i4, vec4(-.25, .25, .25, .35)));
  vec3 v3 = b + vec3(0, 1, 0) + vec3(1, -1, 1) * floor(dot(i4, vec4(.25, -.25, .25, .35)));
  vec3 v4 = b + vec3(0, 0, 1) + vec3(1, 1, -1) * floor(dot(i4, vec4(.25, .25, -.25, .35)));
  vec4 hashes = permute(mod(vec4(v1.x, v2.x, v3.x, v4.x), 289.0));
  hashes = permute(mod(hashes + vec4(v1.y, v2.y, v3.y, v4.y), 289.0));
  hashes = mod(permute(mod(hashes + vec4(v1.z, v2.z, v3.z, v4.z), 289.0)), 48.0);
  vec3 d1 = X - v1; vec3 d2 = X - v2; vec3 d3 = X - v3; vec3 d4 = X - v4;
  vec4 a = max(0.75 - vec4(dot(d1, d1), dot(d2, d2), dot(d3, d3), dot(d4, d4)), 0.0);
  vec4 aa = a * a; vec4 aaaa = aa * aa;
  vec3 g1 = grad(hashes.x); vec3 g2 = grad(hashes.y);
  vec3 g3 = grad(hashes.z); vec3 g4 = grad(hashes.w);
  vec4 extrapolations = vec4(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));
  vec3 derivative = -8.0 * mat4x3(d1, d2, d3, d4) * (aa * a * extrapolations)
    + mat4x3(g1, g2, g3, g4) * aaaa;
  return vec4(derivative, dot(aaaa, extrapolations));
}
vec4 bccNoiseDerivatives_XYBeforeZ(vec3 X) {
  mat3 orthonormalMap = mat3(
    0.788675134594813, -0.211324865405187, -0.577350269189626,
    -0.211324865405187, 0.788675134594813, -0.577350269189626,
    0.577350269189626, 0.577350269189626, 0.577350269189626);
  X = orthonormalMap * X;
  vec4 result = bccNoiseDerivativesPart(X) + bccNoiseDerivativesPart(X + 144.5);
  return vec4(result.xyz * orthonormalMap, result.w);
}

/* photo, cover-fit, on black (clamped at the edges like a render target) */
vec3 photo(vec2 uv) {
  uv = clamp(uv, 0.0, 1.0);
  float imageAspect = uImageSize.x / uImageSize.y;
  float canvasAspect = uResolution.x / uResolution.y;
  vec2 fit = canvasAspect < imageAspect
    ? vec2(imageAspect / canvasAspect, 1.0)
    : vec2(1.0, canvasAspect / imageAspect);
  vec2 iuv = (uv - 0.5) / fit + 0.5;
  vec4 c = texture(uImage, iuv);
  return c.rgb * c.a * c.a;
}

mat2 rot(float a) { return mat2(cos(a), -sin(a), sin(a), cos(a)); }

void main() {
  vec2 dir = vec2(uSkew, 1.0 - uSkew) * (5.0 * uScale);
  vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
  vec2 noiseUv = rot(uAngle * -6.28318530718) * (vUv * aspect - 0.5 * aspect) * dir;
  vec4 noise = bccNoiseDerivatives_XYBeforeZ(vec3(noiseUv, uTime * 0.025));
  vec2 offset = (noise.xy - 0.5) * (uAmount + 0.01) * 0.25;
  float jitter = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5;
  vec3 color = vec3(0.0);
  for (int i = 0; i < 12; i++) {
    float t = (float(i) - 6.0 + jitter) / 12.0;
    color += photo(vUv + offset * t);
  }
  fragColor = vec4(color / 12.0, 1.0);
}`;

/* ———— pass 2: pixel stripes + duotone ———— */
const FRAG_FINAL = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uBlur;
uniform float uStripes;

/* each stripe shows the color of its center column; the grid starts at the card edge */
vec2 stripes(vec2 uv) {
  return vec2((floor(uv.x * uStripes) + 0.5) / uStripes, uv.y);
}

vec3 duotone(vec3 c) {
  float gray = dot(c, vec3(0.299, 0.587, 0.114));
  vec3 d = mix(vec3(0.08235294117647059), vec3(0.7176470588235294), gray);
  return vec3(
    d.x <= 0.5 ? 2.0 * c.x * d.x : 1.0 - 2.0 * (1.0 - d.x) * (1.0 - c.x),
    d.y <= 0.5 ? 2.0 * c.y * d.y : 1.0 - 2.0 * (1.0 - d.y) * (1.0 - c.y),
    d.z <= 0.5 ? 2.0 * c.z * d.z : 1.0 - 2.0 * (1.0 - d.z) * (1.0 - c.z));
}

void main() {
  vec3 color = texture(uBlur, stripes(vUv)).rgb;
  fragColor = vec4(duotone(color), 1.0);
}`;

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('[profile-card]', gl.getShaderInfoLog(sh));
  return sh;
}

function createProgram(gl, vsSrc, fsSrc) {
  const vs = compile(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.bindAttribLocation(program, 0, 'aPos');
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  return program;
}

function createTexture(gl) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return tex;
}

export function runProfileCard(container) {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;background:#000;';
  container.appendChild(canvas);

  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, powerPreference: 'high-performance' });
  if (!gl) {
    /* no WebGL2 → plain photo */
    canvas.remove();
    const img = document.createElement('img');
    img.src = container.dataset.image || IMAGE_SRC;
    img.alt = '';
    img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(1);';
    container.appendChild(img);
    return function() { img.remove(); };
  }

  const blurProgram = createProgram(gl, VERT, FRAG_BLUR);
  const finalProgram = createProgram(gl, VERT, FRAG_FINAL);
  const ub = {
    image: gl.getUniformLocation(blurProgram, 'uImage'),
    imageSize: gl.getUniformLocation(blurProgram, 'uImageSize'),
    resolution: gl.getUniformLocation(blurProgram, 'uResolution'),
    time: gl.getUniformLocation(blurProgram, 'uTime'),
    amount: gl.getUniformLocation(blurProgram, 'uAmount'),
    scale: gl.getUniformLocation(blurProgram, 'uScale'),
    skew: gl.getUniformLocation(blurProgram, 'uSkew'),
    angle: gl.getUniformLocation(blurProgram, 'uAngle'),
  };
  const uf = {
    blur: gl.getUniformLocation(finalProgram, 'uBlur'),
    stripes: gl.getUniformLocation(finalProgram, 'uStripes'),
  };

  /* fullscreen triangle */
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  /* photo texture (black until loaded) */
  const imageTex = createTexture(gl);
  let imageW = 1, imageH = 1;
  let destroyed = false;
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    if (destroyed) return;
    imageW = img.naturalWidth;
    imageH = img.naturalHeight;
    gl.bindTexture(gl.TEXTURE_2D, imageTex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  };
  img.src = container.dataset.image || IMAGE_SRC;

  /* half-resolution render target for the blur pass */
  const blurTex = createTexture(gl);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, blurTex, 0);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  let width = 0, height = 0, blurW = 0, blurH = 0;
  function resize() {
    width = Math.max(1, Math.round(container.offsetWidth * DPI));
    height = Math.max(1, Math.round(container.offsetHeight * DPI));
    blurW = Math.max(1, Math.round(width * BLUR_DOWNSAMPLE));
    blurH = Math.max(1, Math.round(height * BLUR_DOWNSAMPLE));
    canvas.width = width;
    canvas.height = height;
    gl.bindTexture(gl.TEXTURE_2D, blurTex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, blurW, blurH, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  }
  resize();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);

  /* render only while visible (like Axion card) */
  let visible = true;
  const observer = new IntersectionObserver(function(entries) {
    visible = entries[0].isIntersecting;
  }, { threshold: 0 });
  observer.observe(container);

  let time = 0;
  let last = 0;
  let rafId = null;
  function frame(now) {
    rafId = requestAnimationFrame(frame);
    if (!visible) return;
    if (now - last < 1000 / FPS - 1) return; // 60 fps cap
    last = now;

    time += BLUR_SPEED;

    /* pass 1 → half-res target */
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.viewport(0, 0, blurW, blurH);
    gl.useProgram(blurProgram);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, imageTex);
    gl.uniform1i(ub.image, 0);
    gl.uniform2f(ub.imageSize, imageW, imageH);
    gl.uniform2f(ub.resolution, width, height);
    gl.uniform1f(ub.time, time);
    gl.uniform1f(ub.amount, BLUR_AMOUNT);
    gl.uniform1f(ub.scale, BLUR_SCALE);
    gl.uniform1f(ub.skew, BLUR_SKEW);
    gl.uniform1f(ub.angle, BLUR_ANGLE);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    /* pass 2 → screen */
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, width, height);
    gl.useProgram(finalProgram);
    gl.bindTexture(gl.TEXTURE_2D, blurTex);
    gl.uniform1i(uf.blur, 0);
    gl.uniform1f(uf.stripes, STRIPES);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  rafId = requestAnimationFrame(frame);

  return function() {
    destroyed = true;
    cancelAnimationFrame(rafId);
    observer.disconnect();
    resizeObserver.disconnect();
    gl.deleteTexture(imageTex);
    gl.deleteTexture(blurTex);
    gl.deleteFramebuffer(fbo);
    gl.deleteBuffer(buffer);
    gl.deleteProgram(blurProgram);
    gl.deleteProgram(finalProgram);
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    canvas.remove();
  };
}

/* ———— Profile Card — Info page ———— */
export function initProfileCard(scope) {
  const container = scope.querySelector('#profile-card');
  if (!container) return;
  return runProfileCard(container);
}

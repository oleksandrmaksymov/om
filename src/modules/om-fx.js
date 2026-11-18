/* ======================================================
   OM FX — WebGL2 port of the Unicorn Studio scene "om" (CzPe3IO6BeSNueiPOmXP)
   Shaders: the scene's compiled GLSL, unchanged (om-fx-shaders.js).
   Webflow: <div data-om-fx> inside a square block (size = block); desktop only (tablet/phone: video).
   Layers (as in Unicorn, same order and resolution per pass):
     1. black bg + photo (cover) — static, drawn once per resize
     2. noise blur — ½ res, animated, seamless loop (period 312)
     3. 24 vertical stripes — full res, grid from the block edge (no cut stripes)
     4. duotone #151515 → #b7b7b7 → screen
   Site addition: the blur reacts to the cursor — while the mouse moves over the block the swirl runs
   faster (time step grows with the cursor speed, eased in and out); at rest it is Unicorn's speed 0.26.
   Cursor via core/pointer.js (move + scroll under a still cursor).
   Rendering: canvas = block × DPI (max 1.5, scene dpi), 60 fps cap, paused off screen,
   full cleanup (WebGL context released) on page leave. No WebGL2 → the plain photo.
   ====================================================== */
import * as S from './om-fx-shaders.js';
import { watchPointer } from '../core/pointer.js';

const IMAGE_SRC = 'https://cdn.prod.website-files.com/609cc71571f11228bb986695/6ad8527f9a59edc53a03cfc6_profile.avif';
const FPS = 60;
const DPI_MAX = 1.5;          // scene option dpi
const SPEED = 0.26;           // noise blur layer "speed" (time step per frame at 60 fps)
const CURSOR_BOOST = 6;       // extra speed at full cursor speed (×SPEED)
const CURSOR_FULL = 1.5;      // cursor speed (block widths per second) that gives the full boost
const CURSOR_EASE = 0.06;     // how fast the boost follows the cursor (per 60 fps frame)

const IDENTITY = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

export function initOmFx(scope) {
  const container = scope.querySelector('[data-om-fx]');
  if (!container) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return; // desktop / touchpad only

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.appendChild(canvas);

  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: false });
  if (!gl) {
    canvas.remove();
    const img = document.createElement('img');
    img.src = IMAGE_SRC; img.alt = '';
    Object.assign(img.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' });
    container.appendChild(img);
    return () => img.remove();
  }

  /* ——— programs ——— */
  const programs = [];
  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('[om-fx] shader', gl.getShaderInfoLog(sh));
    return sh;
  }
  function program(fs, vs = S.VERT_TM) {
    const p = gl.createProgram();
    const v = compile(gl.VERTEX_SHADER, vs);
    const f = compile(gl.FRAGMENT_SHADER, fs);
    gl.attachShader(p, v); gl.attachShader(p, f);
    gl.bindAttribLocation(p, 0, 'aVertexPosition');
    gl.bindAttribLocation(p, 1, 'aTextureCoord');
    gl.linkProgram(p);
    gl.deleteShader(v); gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) console.error('[om-fx]', gl.getProgramInfoLog(p));
    const loc = {};
    const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; i++) {
      const info = gl.getActiveUniform(p, i);
      loc[info.name] = gl.getUniformLocation(p, info.name);
    }
    const prog = { p, loc };
    programs.push(prog);
    return prog;
  }
  const P = {
    image: program(S.IMAGE, S.IMAGE_VERT),
    blur: program(S.NOISE_BLUR),
    stripes: program(S.STRIPES),
    duotone: program(S.DUOTONE),
  };

  /* ——— fullscreen quad ——— */
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  const pos = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, pos);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, 1, 1, 0]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
  const uvb = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, uvb);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(1);
  gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 0, 0);

  /* ——— photo texture (flipped on upload: the scene's shader flips v back, as in Unicorn) ——— */
  const photo = { tex: gl.createTexture(), ready: false };
  gl.bindTexture(gl.TEXTURE_2D, photo.tex);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
  const image = new Image();
  image.crossOrigin = 'anonymous';
  image.decoding = 'async';
  image.onload = () => {
    if (!photo.tex) return;
    gl.bindTexture(gl.TEXTURE_2D, photo.tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    photo.ready = true;
    buildBase();
    frame();
  };
  image.src = IMAGE_SRC;

  /* ——— render targets ——— */
  const targets = [];
  function target(w, h) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    const t = { tex, fb, w, h };
    targets.push(t);
    return t;
  }
  function freeTargets() {
    targets.forEach((t) => { gl.deleteTexture(t.tex); gl.deleteFramebuffer(t.fb); });
    targets.length = 0;
  }

  const mouse = { x: 0.5, y: 0.5 };
  function pass(prog, out, textures, uniforms) {
    gl.useProgram(prog.p);
    const w = out ? out.w : canvas.width;
    const h = out ? out.h : canvas.height;
    gl.bindFramebuffer(gl.FRAMEBUFFER, out ? out.fb : null);
    gl.viewport(0, 0, w, h);
    const L = prog.loc;
    if (L.uMVMatrix) gl.uniformMatrix4fv(L.uMVMatrix, false, IDENTITY);
    if (L.uPMatrix) gl.uniformMatrix4fv(L.uPMatrix, false, IDENTITY);
    if (L.uTextureMatrix) gl.uniformMatrix4fv(L.uTextureMatrix, false, IDENTITY);
    if (L.uResolution) gl.uniform2f(L.uResolution, w, h);
    if (L.uArtboardResolution) gl.uniform2f(L.uArtboardResolution, 1920, 1920);
    if (L.uAspectRatio) gl.uniform1f(L.uAspectRatio, 1);
    if (L.uMousePos) gl.uniform2f(L.uMousePos, mouse.x, mouse.y);
    if (L.uIsMask) gl.uniform1i(L.uIsMask, 0);
    if (L.uParentTrackMouse) gl.uniform1f(L.uParentTrackMouse, 0);
    let unit = 0;
    Object.keys(textures).forEach((name) => {
      if (!L[name]) return;
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, textures[name].tex);
      gl.uniform1i(L[name], unit);
      unit++;
    });
    Object.keys(uniforms || {}).forEach((name) => { if (L[name]) gl.uniform1f(L[name], uniforms[name]); });
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  /* ——— size ——— */
  let T = null;
  function build() {
    freeTargets();
    const dpr = Math.min(DPI_MAX, window.devicePixelRatio || 1);
    const W = Math.max(1, Math.round(container.clientWidth * dpr));
    const H = Math.max(1, Math.round(container.clientHeight * dpr));
    canvas.width = W; canvas.height = H;
    T = {
      bg: target(W, H),
      base: target(W, H),
      blur: target(Math.max(1, Math.round(W * 0.5)), Math.max(1, Math.round(H * 0.5))),
      stripes: target(W, H),
    };
    buildBase();
  }
  /* static: black bg + photo (no cursor offset in the scene) */
  function buildBase() {
    if (!T) return;
    pass(P.image, T.base, { uBgTexture: T.bg, uSourceImage: photo });
  }

  let time = 0;
  function frame() {
    if (!T) return;
    pass(P.blur, T.blur, { uTexture: T.base }, { uTime: time });
    pass(P.stripes, T.stripes, { uTexture: T.blur });
    pass(P.duotone, null, { uTexture: T.stripes });
  }

  /* ——— cursor speed → swirl speed (eased) ——— */
  let boost = 0, cursorSpeed = 0;
  let lastPt = null;
  const onPointer = (clientX, clientY) => {
    const r = canvas.getBoundingClientRect();
    if (!r.width) return;
    mouse.x = (clientX - r.left) / r.width;
    mouse.y = 1 - (clientY - r.top) / r.height;
    const inside = mouse.x >= 0 && mouse.x <= 1 && mouse.y >= 0 && mouse.y <= 1;
    const now = performance.now();
    if (inside && lastPt) {
      const dt = Math.max(8, now - lastPt.t) / 1000;
      const v = Math.hypot(mouse.x - lastPt.x, mouse.y - lastPt.y) / dt;   // block widths / s
      cursorSpeed = Math.max(cursorSpeed, Math.min(1, v / CURSOR_FULL));
    }
    lastPt = inside ? { x: mouse.x, y: mouse.y, t: now } : null;
  };
  const stopWatch = watchPointer(onPointer);

  /* ——— loop: 60 fps cap, only while on screen ——— */
  let raf = null, last = 0, visible = false;
  function loop(now) {
    raf = requestAnimationFrame(loop);
    if (now - last < 1000 / FPS - 1) return;
    const k = last ? Math.min(now - last, 100) / (1000 / FPS) : 1;
    last = now;
    boost += (cursorSpeed - boost) * (1 - Math.pow(1 - CURSOR_EASE, k));
    cursorSpeed *= Math.pow(0.85, k);              // the cursor's push fades when it stops
    time += SPEED * (1 + CURSOR_BOOST * boost) * k;
    frame();
  }
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !raf) { last = 0; raf = requestAnimationFrame(loop); }
    if (!visible && raf) { cancelAnimationFrame(raf); raf = null; }
  });
  io.observe(container);

  let resizeTimer = null;
  const ro = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { build(); frame(); }, 60);
  });
  ro.observe(container);
  build();
  frame();

  return function cleanup() {
    if (raf) cancelAnimationFrame(raf);
    raf = null;
    clearTimeout(resizeTimer);
    io.disconnect();
    ro.disconnect();
    stopWatch();
    image.onload = null;
    freeTargets();
    gl.deleteTexture(photo.tex); photo.tex = null;
    programs.forEach((pr) => gl.deleteProgram(pr.p));
    gl.deleteBuffer(pos); gl.deleteBuffer(uvb); gl.deleteVertexArray(vao);
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    canvas.remove();
  };
}

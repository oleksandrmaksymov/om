/* ======================================================
   CUBE GL — Info profile block
   Webflow: .profile (1:1) → .cube-gl[data-cube-gl] (absolute, inset 0)
   Black cube with M / O faces (logo SVG paths), plain WebGL (no library), one mesh → no seams.
   At rest the front face (M) covers the block exactly (front face lies on the block plane).
   One 90° turn over the first half screen of page scroll (ScrollTrigger scrub):
   M goes up, the bottom face (O) comes to the front; scrolling back turns it back.
   Draws only when the turn or the size changes — no render loop.
   Init after the page transition (initPageLayout) — scroll is at the top by then.
   ====================================================== */
const TURN_DISTANCE = '+=50%';  // scroll for the 90° turn: half the screen height
const PERSPECTIVE = 100 / 15;   // camera distance / cube size (CSS example: perspective 100em, cube 15em)
const MAX_DPR = 2;

const M_PATH = 'M0 170V0H44.2974L84.884 137.641L125.935 0H170V170H143.329V24.1517L98.7995 170H71.2005L26.6712 24.1517V170H0Z';
const O_PATH = 'M83 180C32.2911 180 0 142.85 0 89.8802C0 37.1505 32.2911 0 83 0C133.709 0 166 37.1505 166 89.8802C166 142.85 133.709 180 83 180ZM83 156.751C113.378 156.751 137.536 133.262 137.536 89.8802C137.536 46.7377 113.378 23.249 83 23.249C52.6225 23.249 28.464 46.7377 28.464 89.8802C28.464 133.262 52.6225 156.751 83 156.751Z';

const VERT = `
attribute vec3 aPos;
attribute vec2 aUv;
uniform mat4 uMatrix;
varying vec2 vUv;
void main() {
  vUv = aUv;
  gl_Position = uMatrix * vec4(aPos, 1.0);
}`;
const FRAG = `
precision mediump float;
uniform sampler2D uTex;
varying vec2 vUv;
void main() { gl_FragColor = texture2D(uTex, vUv); }`;

/* Cube of size 1, center (0, 0, -0.5) → front face on z = 0 (the block plane).
   Faces around X: front M, top O, back M, bottom O; each upright when it faces the camera.
   Texture atlas 2×2: M | O / M | O. Vertex order per face: bottom-left, bottom-right, top-right, top-left. */
function cubeGeometry() {
  const h = 0.5, f = 0, b = -1;
  const faces = [
    [[-h, -h, f], [h, -h, f], [h, h, f], [-h, h, f]],     // front (M)
    [[-h, h, f], [h, h, f], [h, h, b], [-h, h, b]],       // top (O)
    [[-h, h, b], [h, h, b], [h, -h, b], [-h, -h, b]],     // back (M)
    [[-h, -h, b], [h, -h, b], [h, -h, f], [-h, -h, f]],   // bottom (O) — the one that turns to the front
  ];
  const cells = [[0, 0], [0.5, 0], [0, 0.5], [0.5, 0.5]];
  const pos = [], uv = [], idx = [];
  faces.forEach(function(face, i) {
    const u = cells[i][0], v = cells[i][1];
    face.forEach(function(p) { pos.push(p[0], p[1], p[2]); });
    uv.push(u, v + 0.5, u + 0.5, v + 0.5, u + 0.5, v, u, v);
    const k = i * 4;
    idx.push(k, k + 1, k + 2, k, k + 2, k + 3);
  });
  return { pos: new Float32Array(pos), uv: new Float32Array(uv), idx: new Uint16Array(idx) };
}

/* How far the turning cube reaches outside the block (in cube units), from the projection:
   corners at radius √½ around the center; the canvas gets exactly this margin */
function turnMargins() {
  const r = Math.SQRT1_2;
  let maxY = 0.5, maxZ = 0;
  for (let a = 0; a <= 90; a += 0.25) {
    for (const start of [45, 135, 225, 315]) {
      const t = (start + a) * Math.PI / 180;
      const y = r * Math.sin(t), z = -0.5 + r * Math.cos(t);
      maxY = Math.max(maxY, Math.abs(y) * PERSPECTIVE / (PERSPECTIVE - z));
      maxZ = Math.max(maxZ, z);
    }
  }
  const maxX = 0.5 * PERSPECTIVE / (PERSPECTIVE - maxZ);
  return { x: maxX - 0.5, y: maxY - 0.5 };
}

function perspective(fovY, aspect, near, far) {
  const f = 1 / Math.tan(fovY / 2), nf = 1 / (near - far);
  return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
}
function multiply(a, b) {
  const o = new Array(16);
  for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) {
    o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
  }
  return o;
}

/* face texture: black square, white letter in M's scale (M = 170 units = half the face) */
function drawFace(ctx, size, path, w, h) {
  const scale = (size * 0.5) / 170;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, size, size);
  ctx.save();
  ctx.translate((size - w * scale) / 2, (size - h * scale) / 2);
  ctx.scale(scale, scale);
  ctx.fillStyle = '#fff';
  ctx.fill(new Path2D(path));
  ctx.restore();
}

export function initCubeGL(scope) {
  const wrap = scope.querySelector('[data-cube-gl]');
  if (!wrap) return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.display = 'block';
  wrap.appendChild(canvas);
  const gl = canvas.getContext('webgl', { antialias: true, alpha: true });
  if (!gl) { canvas.remove(); return; }

  const prog = gl.createProgram();
  const shaders = [[gl.VERTEX_SHADER, VERT], [gl.FRAGMENT_SHADER, FRAG]].map(function(s) {
    const sh = gl.createShader(s[0]);
    gl.shaderSource(sh, s[1]);
    gl.compileShader(sh);
    gl.attachShader(prog, sh);
    return sh;
  });
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const geo = cubeGeometry();
  function buffer(type, data) {
    const buf = gl.createBuffer();
    gl.bindBuffer(type, buf);
    gl.bufferData(type, data, gl.STATIC_DRAW);
    return buf;
  }
  const buffers = [buffer(gl.ARRAY_BUFFER, geo.pos)];
  const aPos = gl.getAttribLocation(prog, 'aPos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);
  buffers.push(buffer(gl.ARRAY_BUFFER, geo.uv));
  const aUv = gl.getAttribLocation(prog, 'aUv');
  gl.enableVertexAttribArray(aUv);
  gl.vertexAttribPointer(aUv, 2, gl.FLOAT, false, 0, 0);
  buffers.push(buffer(gl.ELEMENT_ARRAY_BUFFER, geo.idx));
  const uMatrix = gl.getUniformLocation(prog, 'uMatrix');

  gl.enable(gl.DEPTH_TEST);
  gl.enable(gl.CULL_FACE);
  gl.clearColor(0, 0, 0, 0);

  const texture = gl.createTexture();
  const margin = turnMargins();
  let facePx = 0;
  let angle = 0;
  let proj = null;

  function render() {
    if (!proj) return;
    const s = Math.sin(angle), c = Math.cos(angle);
    /* rotate around X about the cube center (0, 0, -0.5), camera at distance PERSPECTIVE from the block plane;
       negative angle: front goes up, bottom comes forward */
    const model = [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, -0.5 * s, -0.5 + 0.5 * c - PERSPECTIVE, 1];
    gl.uniformMatrix4fv(uMatrix, false, new Float32Array(multiply(proj, model)));
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, 24, gl.UNSIGNED_SHORT, 0);
  }

  /* canvas = block + the exact turn margins; the z = 0 plane fills it → front face = the block */
  function resize() {
    const block = wrap.clientWidth;
    if (!block) return;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    /* margins in whole CSS pixels → the canvas starts on a pixel, the face edges land exactly on the block edges */
    const mx = Math.ceil(block * margin.x), my = Math.ceil(block * margin.y);
    const viewW = (block + 2 * mx) / block, viewH = (block + 2 * my) / block;
    canvas.style.width = block + 2 * mx + 'px';
    canvas.style.height = block + 2 * my + 'px';
    canvas.style.left = -mx + 'px';
    canvas.style.top = -my + 'px';
    canvas.width = Math.round((block + 2 * mx) * dpr);
    canvas.height = Math.round((block + 2 * my) * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    proj = perspective(2 * Math.atan(viewH / 2 / PERSPECTIVE), viewW / viewH, 0.1, PERSPECTIVE * 4);

    /* face texture at the face's real pixel size (power of 2 for mipmaps, max 1024) */
    const face = Math.min(1024, Math.pow(2, Math.ceil(Math.log2(block * dpr))));
    if (face !== facePx) {
      facePx = face;
      const atlas = document.createElement('canvas');
      atlas.width = atlas.height = face * 2;
      const ctx = atlas.getContext('2d');
      [[0, 0, M_PATH, 170, 170], [face, 0, O_PATH, 166, 180], [0, face, M_PATH, 170, 170], [face, face, O_PATH, 166, 180]]
        .forEach(function(a) { ctx.save(); ctx.translate(a[0], a[1]); drawFace(ctx, face, a[2], a[3], a[4]); ctx.restore(); });
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    render();
  }

  const turn = ScrollTrigger.create({
    start: 0,
    end: TURN_DISTANCE,
    onUpdate: function(self) {
      angle = -self.progress * Math.PI / 2;
      render();
    },
  });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(wrap);
  resize();

  return function() {
    turn.kill();
    resizeObserver.disconnect();
    gl.deleteTexture(texture);
    buffers.forEach(function(buf) { gl.deleteBuffer(buf); });
    shaders.forEach(function(sh) { gl.deleteShader(sh); });
    gl.deleteProgram(prog);
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    canvas.remove();
  };
}

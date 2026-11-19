/* ======================================================
   SUN FX — WebGL2 port of the Unicorn Studio scene "sun-2"
   Shaders: the scene's compiled GLSL, unchanged (sun-fx-shaders.js).
   Webflow: <div class="sun" data-sun-fx> inside a square block (size = block); desktop only (tablet/phone: video).
   Layers (as in Unicorn, same order and resolution per pass):
     1. black bg + ocean (full res) + grain — static (the layers don't animate), drawn once per resize
     2. spotlight — follows the cursor (53%): blur H/V ½ res → point-light composite
     3. bloom — threshold ½ → diagonal blur ¼ ×2 → blur ½ ×2 → composite 1
     4. chromatic aberration → 5. progressive blur (½ ×3 → composite) → 6. coloration (grey) → screen
   Rendering: canvas = block × DPI (max 1.5, scene dpi); frames are drawn only when the cursor moves
   (move + scroll under a still cursor, core/pointer.js) — the scene is static otherwise; paused off
   screen; 8-bit buffers like Unicorn; full cleanup (WebGL context released) on page leave.
   ====================================================== */
import * as S from './sun-fx-shaders.js';
import { watchPointer } from '../core/pointer.js';

const DPI_MAX = 1.5;          // scene option dpi
const CONTRAST = 2.0;         // Coloration layer "contrast" (scene: 1.0) — darks darker, lights lighter

const IDENTITY = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

export function initSunFx(scope) {
  const container = scope.querySelector('[data-sun-fx]');
  if (!container) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return; // desktop / touchpad only

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.appendChild(canvas);

  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: false });
  if (!gl) { canvas.remove(); return; }

  /* ——— programs ——— */
  const programs = [];
  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('[sun-fx] shader', gl.getShaderInfoLog(sh));
    return sh;
  }
  function program(fs, vs) {
    const p = gl.createProgram();
    const v = compile(gl.VERTEX_SHADER, vs);
    const f = compile(gl.FRAGMENT_SHADER, fs);
    gl.attachShader(p, v); gl.attachShader(p, f);
    gl.bindAttribLocation(p, 0, 'aVertexPosition');
    gl.bindAttribLocation(p, 1, 'aTextureCoord');
    gl.linkProgram(p);
    gl.deleteShader(v); gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) console.error('[sun-fx]', gl.getProgramInfoLog(p));
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
    bg: program(S.BG, S.VERT),
    ocean: program(S.OCEAN, S.OCEAN_VERT),
    grain: program(S.GRAIN, S.GRAIN_VERT),
    spot: S.SPOT.map((fs) => program(fs, S.SPOT_VERT)),
    bloom: S.BLOOM.map((fs) => program(fs, S.BLOOM_VERT)),
    chromab: program(S.CHROMAB, S.CHROMAB_VERT),
    pblur: S.PBLUR.map((fs) => program(fs, S.PBLUR_VERT)),
    /* Coloration with our contrast: the scene's contrast line (1.0000 = off) gets CONTRAST —
       the same value as the layer's Contrast slider in Unicorn */
    color: program(S.COLORATION.replace('1.0000 * (color.rgb - 0.5) + 0.5', CONTRAST.toFixed(4) + ' * (color.rgb - 0.5) + 0.5'), S.COLOR_VERT),
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

  /* ——— render targets (8-bit, like Unicorn) ——— */
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
  const STATIC_MOUSE = { x: 0.5, y: 0.5 };   // the static layers (ocean) don't follow the cursor
  function pass(prog, out, textures, m = mouse) {
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
    if (L.uMousePos) gl.uniform2f(L.uMousePos, m.x, m.y);
    if (L.uTime) gl.uniform1f(L.uTime, 0);          // no layer of the scene animates
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
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  /* ——— size: targets + the static base (bg → ocean → grain) ——— */
  let T = null;
  function build() {
    freeTargets();
    const dpr = Math.min(DPI_MAX, window.devicePixelRatio || 1);
    const W = Math.max(1, Math.round(container.clientWidth * dpr));
    const H = Math.max(1, Math.round(container.clientHeight * dpr));
    canvas.width = W; canvas.height = H;
    const s = (k) => [Math.max(1, Math.round(W * k)), Math.max(1, Math.round(H * k))];
    T = {
      a: target(W, H), b: target(W, H),
      spot1: target(...s(0.5)), spot2: target(...s(0.5)), spot: target(W, H),
      bth: target(...s(0.5)), bd1: target(...s(0.25)), bd2: target(...s(0.25)),
      bs1: target(...s(0.5)), bs2: target(...s(0.5)), bloom: target(W, H),
      chromab: target(W, H),
      pb0: target(...s(0.5)), pb1: target(...s(0.5)), pb2: target(...s(0.5)), pblur: target(W, H),
    };
    pass(P.bg, T.a, {}, STATIC_MOUSE);
    pass(P.ocean, T.b, {}, STATIC_MOUSE);
    pass(P.grain, T.a, { uTexture: T.b }, STATIC_MOUSE);
    T.base = T.a;
  }

  /* ——— per frame: everything after the static base ——— */
  function frame() {
    if (!T) return;
    const base = T.base;
    /* spotlight */
    pass(P.spot[0], T.spot1, { uTexture: base });
    pass(P.spot[1], T.spot2, { uTexture: T.spot1 });
    pass(P.spot[2], T.spot, { uTexture: T.spot2, uBgTexture: base });
    /* bloom */
    const sc = T.spot;
    pass(P.bloom[0], T.bth, { uTexture: sc });
    pass(P.bloom[1], T.bd1, { uTexture: T.bth });
    pass(P.bloom[2], T.bd2, { uTexture: T.bd1, uBgTexture: sc });
    pass(P.bloom[3], T.bs1, { uTexture: T.bd2 });
    pass(P.bloom[4], T.bs2, { uTexture: T.bs1, uBgTexture: sc });
    pass(P.bloom[5], T.bloom, { uTexture: T.bs2, uBgTexture: sc });
    /* chromatic aberration */
    pass(P.chromab, T.chromab, { uTexture: T.bloom });
    /* progressive blur */
    const pb = T.chromab;
    pass(P.pblur[0], T.pb0, { uTexture: pb });
    pass(P.pblur[1], T.pb1, { uTexture: T.pb0 });
    pass(P.pblur[2], T.pb2, { uTexture: T.pb1 });
    pass(P.pblur[3], T.pblur, { uTexture: T.pb2, uBgTexture: pb });
    /* coloration → screen */
    pass(P.color, null, { uTexture: T.pblur });
  }

  /* ——— cursor: draw one frame per move (the scene has no animation of its own) ——— */
  let raf = null, visible = false, pending = false;
  function request() {
    if (!visible || raf) return;
    raf = requestAnimationFrame(() => { raf = null; if (pending) { pending = false; frame(); } });
  }
  const onPointer = (clientX, clientY) => {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    mouse.x = (clientX - r.left) / r.width;
    mouse.y = 1 - (clientY - r.top) / r.height;
    pending = true;
    request();
  };
  const stopWatch = watchPointer(onPointer);

  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && pending) request();
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
    freeTargets();
    programs.forEach((pr) => gl.deleteProgram(pr.p));
    gl.deleteBuffer(pos); gl.deleteBuffer(uvb); gl.deleteVertexArray(vao);
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    canvas.remove();
  };
}

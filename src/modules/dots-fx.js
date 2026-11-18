/* ======================================================
   DOTS FX — WebGL2 port of the Unicorn Studio scene "Dots" (mGux9n50lQTbANMjhAfs)
   Shaders: the scene's compiled GLSL, unchanged (dots-fx-shaders.js).
   Webflow: <div data-dots-fx> inside a square block (size = block).
   Layers (as in Unicorn, same order and resolution per pass):
     1. bg (black) + 6 shapes (circles 160px on a 1920 artboard) — static, drawn once per resize
     2. mouse trail — ping-pong simulation (half-float, ½ res) + composite over the scene;
        reacts and glows only near the circles (masks in the scene's shader)
     3. blur — 4 passes (0.25, 0.25, 0.5, 0.5)
     4. bloom — threshold 0.5 → diamond blur 0.25 ×2 → blur 0.5 ×2 → composite 1.0
     5. gradient map → screen
   Rendering: canvas = block × DPI (max 1.5, scene dpi), 60 fps cap, paused off screen,
   full cleanup (WebGL context released) on page leave.
   Site changes vs the Unicorn runtime (look unchanged, quality / load only):
   — blur + bloom passes run at full canvas resolution (Unicorn: 0.25 / 0.5). Their blur sizes are in
     UV units, so the look is the same, but the gradient map no longer thresholds a bilinear-upscaled
     low-res image → the circles stay round with a clean edge (Unicorn's own 2160px export looks like this);
   — buffers 8-bit like Unicorn (only the trail simulation is half-float): the passes' dither can go
     slightly below 0, and a float buffer keeps it → pow() of a negative value is NaN on Apple GPUs
     and the whole frame turns black; an 8-bit buffer clamps it to 0;
   — the scene is static without the cursor, so frames are drawn only while the cursor moves and
     150 frames after (the trail fades out in ~40) — no GPU work at rest.
   ====================================================== */
import * as S from './dots-fx-shaders.js';

const FPS = 60;
const DPI_MAX = 1.5;          // scene option dpi
const TRAIL_SPEED = 1;        // mouse trail layer "speed"
const IDLE_FRAMES = 150;      // frames drawn after the last cursor move (the trail fades out in ~40)

const IDENTITY = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);

export function initDotsFx(scope) {
  const container = scope.querySelector('[data-dots-fx]');
  if (!container) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return; // reacts to the cursor: desktop only

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
  if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
  container.appendChild(canvas);

  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false, premultipliedAlpha: false });
  if (!gl) { canvas.remove(); return; }
  const halfFloat = !!gl.getExtension('EXT_color_buffer_float');

  /* ——— programs ——— */
  function compile(type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) console.error('[dots-fx] shader', gl.getShaderInfoLog(sh));
    return sh;
  }
  const programs = [];
  function program(fs, vs = S.VERT_TM) {
    const p = gl.createProgram();
    const v = compile(gl.VERTEX_SHADER, vs);
    const f = compile(gl.FRAGMENT_SHADER, fs);
    gl.attachShader(p, v); gl.attachShader(p, f);
    gl.bindAttribLocation(p, 0, 'aVertexPosition');
    gl.bindAttribLocation(p, 1, 'aTextureCoord');
    gl.linkProgram(p);
    gl.deleteShader(v); gl.deleteShader(f);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) console.error('[dots-fx]', gl.getProgramInfoLog(p));
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
    shapes: S.SHAPES.map((fs) => program(fs, S.SHAPE_VERT)),
    trailSim: program(S.TRAIL_SIM, S.VERT),
    trail: program(S.TRAIL),
    blur: S.BLUR.map((fs) => program(fs)),
    bloom: S.BLOOM.map((fs) => program(fs)),
    gmap: program(S.GMAP, S.VERT),
  };

  /* ——— fullscreen quad: clip space + texture coords 0..1 ——— */
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

  /* ——— render targets ——— */
  const targets = [];
  function target(w, h, float = false) {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    if (float && halfFloat) gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    else gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
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

  /* one pass: program, output target (null = screen), textures by uniform name, extra uniforms */
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
    Object.keys(uniforms || {}).forEach((name) => {
      if (!L[name]) return;
      const v = uniforms[name];
      if (Array.isArray(v)) gl.uniform2f(L[name], v[0], v[1]);
      else gl.uniform1f(L[name], v);
    });
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  /* ——— state ——— */
  const mouse = { x: 0.5, y: 0.5 };
  const prevMouse = { x: 0.5, y: 0.5 };
  let time = 0;
  let T = null;        // targets for the current size
  let ppRead = 0;

  function build() {
    freeTargets();
    const dpr = Math.min(DPI_MAX, window.devicePixelRatio || 1);
    const W = Math.max(1, Math.round(container.clientWidth * dpr));
    const H = Math.max(1, Math.round(container.clientHeight * dpr));
    canvas.width = W; canvas.height = H;
    const s = (k) => [Math.max(1, Math.round(W * k)), Math.max(1, Math.round(H * k))];
    T = {
      a: target(W, H), b: target(W, H),                 // scene ping (bg + shapes)
      pp: [target(...s(0.5), true), target(...s(0.5), true)],   // mouse trail simulation (half-float, ½ res as in the scene)
      trail: target(W, H),
      blur1: target(...s(1)), blur2: target(...s(1)), blur3: target(...s(1)), blur4: target(...s(1)),
      bth: target(...s(1)), bd1: target(...s(1)), bd2: target(...s(1)),
      bs1: target(...s(1)), bs2: target(...s(1)), bloom: target(W, H),
    };
    /* static base: bg + 6 shapes (they ignore the mouse: offsets × 0) */
    pass(P.bg, T.a, {});
    let src = T.a, dst = T.b;
    P.shapes.forEach((prog) => {
      pass(prog, dst, { uBgTexture: src });
      const t = src; src = dst; dst = t;
    });
    T.base = src;
    ppRead = 0;
  }

  function frame() {
    if (!T) return;
    /* 2. mouse trail */
    const ppIn = T.pp[ppRead], ppOut = T.pp[1 - ppRead];
    pass(P.trailSim, ppOut, { uPingPongTexture: ppIn }, {
      uTime: time, uPreviousMousePos: [prevMouse.x, prevMouse.y],
    });
    ppRead = 1 - ppRead;
    pass(P.trail, T.trail, { uTexture: T.base, uPingPongTexture: ppOut });
    /* 3. blur */
    pass(P.blur[0], T.blur1, { uTexture: T.trail });
    pass(P.blur[1], T.blur2, { uTexture: T.blur1 });
    pass(P.blur[2], T.blur3, { uTexture: T.blur2 });
    pass(P.blur[3], T.blur4, { uTexture: T.blur3 });
    const scene = T.blur4;
    /* 4. bloom */
    pass(P.bloom[0], T.bth, { uTexture: scene });
    pass(P.bloom[1], T.bd1, { uTexture: T.bth });
    pass(P.bloom[2], T.bd2, { uTexture: T.bd1, uBgTexture: scene });
    pass(P.bloom[3], T.bs1, { uTexture: T.bd2 });
    pass(P.bloom[4], T.bs2, { uTexture: T.bs1, uBgTexture: scene });
    pass(P.bloom[5], T.bloom, { uTexture: T.bs2, uBgTexture: scene });
    /* 5. gradient map → screen (layer not animating: time 0) */
    pass(P.gmap, null, { uTexture: T.bloom }, { uTime: 0 });

    prevMouse.x = mouse.x; prevMouse.y = mouse.y;
  }

  /* ——— cursor: position in texture coords (y up), kept while outside ——— */
  let idle = IDLE_FRAMES;   // frames since the last cursor move
  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    mouse.x = (e.clientX - r.left) / r.width;
    mouse.y = 1 - (e.clientY - r.top) / r.height;
    idle = 0;
    start();
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  /* ——— loop: 60 fps cap, only while on screen and while the cursor moved recently ——— */
  let raf = null, last = 0, visible = false;
  function loop(now) {
    if (!visible || idle >= IDLE_FRAMES) { raf = null; return; }
    raf = requestAnimationFrame(loop);
    if (now - last < 1000 / FPS - 1) return;
    const dt = last ? Math.min(now - last, 100) : 1000 / FPS;
    last = now;
    time += TRAIL_SPEED * (dt / (1000 / FPS));
    frame();
    idle++;
  }
  function start() {
    if (visible && !raf) { last = 0; raf = requestAnimationFrame(loop); }
  }
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else if (raf) { cancelAnimationFrame(raf); raf = null; }
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
    window.removeEventListener('pointermove', onMove);
    freeTargets();
    programs.forEach((pr) => gl.deleteProgram(pr.p));
    gl.deleteBuffer(pos); gl.deleteBuffer(uvb); gl.deleteVertexArray(vao);
    const lose = gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
    canvas.remove();
  };
}

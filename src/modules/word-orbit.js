/* ======================================================
   WORD ORBIT — words on a 3D orbit + cursor push
   Rebuilt 1:1 from the Cavalry scene info-1.cv (comp 1920×2400, 30 fps, seamless loop).
   Webflow: block (aspect-ratio 4/5, font) → Embed with
     <div id="word-orbit-light" style="width:100%;height:100%;position:relative;"></div>  — Duplicator Point ×55
     <div id="word-orbit-dark" style="width:100%;height:100%;position:relative;"></div>   — Duplicator Random, rect 500×500, ×50, seed 1000
   Colors come from the scene (LAYOUTS below); the font is inherited from the block.
   Each word is a DOM element moved with CSS transform and defocused with CSS filter: blur()
   (standard CSS, like one Cavalry layer each) — nothing is pre-rendered, nothing heavy on load.
   Orbit: 3D Matrix driven by 2 oscillators (X sine −900…900, Z cosine −180…900),
          layer at (−429.263, 125.907) rotated 70°, words counter-rotated → always horizontal.
   Depth of field: words sharp in front, defocused at the back (Gaussian 16), fixed in the frame.
   Cursor: words near the cursor are pushed away and spring back; the closer a word is
           to the viewer, the stronger and wider the push.
   Pauses off-screen; static frame with reduced motion.
   ====================================================== */

const WORDS = ['Typography', 'Space', 'AI', 'Color', 'Function', 'Composition', 'Form', 'Identity', 'Light', 'Mathematics',
  'Time', 'Minimalism', 'Architecture', 'Motion', 'Interaction', 'Visual Systems', 'Three.js', 'Digital Matter', 'WebGL', 'Meditation'];

/* ———— orbit (from the .cv) ———— */
const COMP = { w: 1920, h: 2400 };
const FPS = 30;
const LOOP_FRAMES = 2 * Math.PI * 10 / 0.2;   // one turn = 314.16 frames = comp length
const OFFSET = 20 * Math.PI / 55;             // oscillator offset (expression reads the Point count, 55)
const STAGGER = OFFSET;
const FREQUENCY = 10;
const TIME_SPEED = -0.2;                      // Frame node strength −20%
const X_RANGE = [-900, 900];
const Z_RANGE = [-180, 900];
const LAYER = { x: -429.263, y: 125.907, rot: 70 * Math.PI / 180 };
const MATRIX_Y = 240;
const TEXT_OFFSET = { x: 63.401, y: -435.45 };
const FONT_SIZE = 72;
const LETTER_SPACING = -5;
const FOCAL = 630;
const BLUR = 16;                              // Gaussian Blur amount (CSS blur = BLUR / 2)
const FOCUS_START = 0.35;                     // depth (0 = front, 1 = back) where defocus starts
const FOCUS_END = 0.65;                       // depth where defocus is full
const STATIC_FRAME = 134;                     // frame shown with reduced motion

const LAYOUTS = {
  point: { count: 55, background: '#BBC0C8', color: '#FFFFFF' },                         // light
  random: { count: 50, size: 500, seed: 1000, background: '#000000', color: '#BBC0C8' },  // dark
};

/* ———— cursor (comp px) ———— */
const CURSOR_RADIUS = 380;                    // reach of the push for the nearest word
const CURSOR_PUSH = 170;                      // max push for the nearest word
const DEPTH_MIN = 0.08;                       // share of the push left for the farthest word
const SPRING = 90;                            // pull back to the orbit
const DAMPING = 11;                           // lower = more bounce when it settles

const S_MIN = FOCAL / (FOCAL + Z_RANGE[1]);   // scale of the farthest word
const S_MAX = FOCAL / (FOCAL + Z_RANGE[0]);   // scale of the nearest word

function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function smoothstep(a, b, v) {
  const t = Math.min(1, Math.max(0, (v - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function runWordOrbit(block, layout) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* stage: scene background, words inherit the block font */
  const stage = document.createElement('div');
  stage.setAttribute('aria-hidden', 'true');
  stage.style.cssText = 'position:absolute;inset:0;overflow:hidden;pointer-events:none;'
    + 'background:' + layout.background + ';color:' + layout.color + ';';
  block.appendChild(stage);

  const rand = mulberry32(layout.seed || 1);
  const copies = [];
  for (let i = 0; i < layout.count; i++) {
    const el = document.createElement('span');
    el.textContent = WORDS[i % WORDS.length];
    el.style.cssText = 'position:absolute;left:0;top:0;white-space:pre;line-height:1;'
      + 'font-size:' + FONT_SIZE + 'px;letter-spacing:' + LETTER_SPACING + 'px;'
      + 'transform-origin:0 0;will-change:transform,filter;';
    stage.appendChild(el);
    copies.push({
      el: el, i: i, w: 0,
      px: layout.size ? (rand() - 0.5) * layout.size : 0,
      py: layout.size ? (rand() - 0.5) * layout.size : 0,
      ox: 0, oy: 0, vx: 0, vy: 0,
      filter: '', z: -1,
    });
  }

  /* word widths (comp px at scale 1) — measured once, again when the font is ready */
  function measure() { copies.forEach(function(c) { c.w = c.el.offsetWidth; }); }
  measure();
  const style = getComputedStyle(block);
  if (document.fonts && document.fonts.load) {
    /* FontFaceSet.load: resolves once this face is loaded (or right away if it already is) */
    document.fonts.load((style.fontWeight || '400') + ' ' + FONT_SIZE + 'px ' + style.fontFamily).then(measure, function() {});
  }

  /* size: composition fitted inside the block (contain, centred) */
  let k = 1, offX = 0, offY = 0;
  function resize() {
    const w = block.clientWidth, h = block.clientHeight;
    if (!w || !h) return;
    k = Math.min(w / COMP.w, h / COMP.h);
    offX = (w - COMP.w * k) / 2;
    offY = (h - COMP.h * k) / 2;
  }
  resize();

  /* ———— cursor: client coords + cached block rect (rect refreshed on pointer move / scroll only) ———— */
  let pointer = null;
  let rect = null;
  function updateRect() { rect = block.getBoundingClientRect(); }
  function onPointerMove(e) {
    pointer = { x: e.clientX, y: e.clientY };
    updateRect();
  }
  function onScroll() { if (pointer) updateRect(); }
  function onPointerLeave() { pointer = null; }
  if (!reduceMotion) {
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
  }

  function cursorInComp() {
    if (!pointer || !rect) return null;
    const x = pointer.x - rect.left, y = pointer.y - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) return null;
    return { x: (x - offX) / k, y: (y - offY) / k };
  }

  /* ———— frame ———— */
  const cos = Math.cos(LAYER.rot), sin = Math.sin(LAYER.rot);
  const xMid = (X_RANGE[0] + X_RANGE[1]) / 2, xAmp = (X_RANGE[1] - X_RANGE[0]) / 2;
  const zMid = (Z_RANGE[0] + Z_RANGE[1]) / 2, zAmp = (Z_RANGE[1] - Z_RANGE[0]) / 2;

  function render(frame, dt) {
    const time = TIME_SPEED * frame;
    const cursor = cursorInComp();

    for (const c of copies) {
      const angle = (OFFSET + STAGGER * c.i + time) / FREQUENCY;
      const x = xMid + xAmp * Math.sin(angle);
      const z = zMid + zAmp * Math.cos(angle);
      const s = FOCAL / (FOCAL + z);

      /* layer space → rotate 70° → comp px (y down, origin top-left) */
      const lx = (c.px + x + TEXT_OFFSET.x) * s;
      const ly = (c.py + MATRIX_Y + TEXT_OFFSET.y) * s;
      const left = LAYER.x + lx * cos - ly * sin + COMP.w / 2;
      const top = COMP.h / 2 - (LAYER.y + lx * sin + ly * cos);

      /* cursor push, scaled by closeness to the viewer */
      const near = DEPTH_MIN + (1 - DEPTH_MIN) * (s - S_MIN) / (S_MAX - S_MIN);
      let tx = 0, ty = 0;
      if (cursor) {
        const dx = left + c.ox + c.w * s / 2 - cursor.x;
        const dy = top + c.oy + FONT_SIZE * s / 2 - cursor.y;
        const d = Math.hypot(dx, dy) || 0.001;
        const radius = CURSOR_RADIUS * (0.5 + 0.5 * near);
        if (d < radius) {
          const f = 1 - d / radius;
          const push = CURSOR_PUSH * near * f * f;
          tx = dx / d * push;
          ty = dy / d * push;
        }
      }
      if (dt > 0) {
        c.vx += (SPRING * (tx - c.ox) - DAMPING * c.vx) * dt;
        c.vy += (SPRING * (ty - c.oy) - DAMPING * c.vy) * dt;
        c.ox += c.vx * dt;
        c.oy += c.vy * dt;
      }

      /* depth of field: CSS blur is applied before the scale → divide by s to keep it in comp px */
      const depth = (z - Z_RANGE[0]) / (Z_RANGE[1] - Z_RANGE[0]);
      const blur = Math.round((BLUR / 2) * smoothstep(FOCUS_START, FOCUS_END, depth) / s * 10) / 10;
      const filter = blur > 0 ? 'blur(' + blur + 'px)' : 'none';

      c.el.style.transform = 'translate3d(' + (offX + (left + c.ox) * k) + 'px,' + (offY + (top + c.oy) * k) + 'px,0) scale(' + (s * k) + ')';
      if (filter !== c.filter) { c.el.style.filter = filter; c.filter = filter; }
      const zi = Math.round(1000 - z);
      if (zi !== c.z) { c.el.style.zIndex = zi; c.z = zi; }
    }
  }

  /* ———— loop: only while visible ———— */
  let frame = 0, last = 0, rafId = 0, visible = false, destroyed = false;
  function tick(now) {
    rafId = 0;
    if (destroyed || !visible) return;
    const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 0;
    last = now;
    frame = (frame + dt * FPS) % LOOP_FRAMES;
    render(frame, dt);
    rafId = requestAnimationFrame(tick);
  }
  function start() {
    if (reduceMotion || rafId || destroyed) return;
    last = 0;
    rafId = requestAnimationFrame(tick);
  }

  const visibilityObserver = new IntersectionObserver(function(entries) {
    visible = entries[0].isIntersecting;
    if (visible) start();
  });
  visibilityObserver.observe(block);

  const resizeObserver = new ResizeObserver(function() {
    resize();
    render(frame, 0);
  });
  resizeObserver.observe(block);

  render(reduceMotion ? STATIC_FRAME : 0, 0);

  return function() {
    destroyed = true;
    if (rafId) cancelAnimationFrame(rafId);
    visibilityObserver.disconnect();
    resizeObserver.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('scroll', onScroll);
    document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    stage.remove();
  };
}

/* ———— Word Orbit — #word-orbit-light (Point) / #word-orbit-dark (Random), any page ———— */
export function initWordOrbit(scope) {
  const cleanups = [];
  const light = scope.querySelector('#word-orbit-light');
  const dark = scope.querySelector('#word-orbit-dark');
  if (light) cleanups.push(runWordOrbit(light, LAYOUTS.point));
  if (dark) cleanups.push(runWordOrbit(dark, LAYOUTS.random));
  return function() { cleanups.forEach(function(fn) { fn(); }); };
}

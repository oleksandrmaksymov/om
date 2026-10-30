/* ======================================================
   WORD ORBIT — words on a 3D orbit + cursor push
   Rebuilt 1:1 from the Cavalry scene info-1.cv (comp 1920×2400, 30 fps, seamless loop).
   Webflow: any block [data-word-orbit="point" | "random"] (position: relative; aspect-ratio 4/5 recommended).
     point  — Duplicator Point ×55 (light variant)
     random — Duplicator Random, rectangle 500×500, ×50, seed 1000 (dark variant)
   Colors and font come from the block in Webflow: background = block background,
   words = block text color, font family / weight = block font.
   Orbit: 3D Matrix driven by 2 oscillators (X sine −900…900, Z cosine −180…900),
          layer at (−429.263, 125.907) rotated 70°, words counter-rotated → always horizontal.
   Depth of field: words sharp in front, defocused at the back (Gaussian 16), fixed in the frame.
   Cursor: words near the cursor are pushed away and spring back; the closer a word is
           to the viewer, the stronger and wider the push.
   Canvas 2D: every word is pre-rendered once into sprites with 5 blur levels, each frame only
   draws sprites (no CSS filters). Pauses off-screen; static frame with reduced motion.
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
const BLUR = 16;                              // Gaussian Blur amount (sigma = BLUR / 2)
const FOCUS_START = 0.35;                     // depth (0 = front, 1 = back) where defocus starts
const FOCUS_END = 0.65;                       // depth where defocus is full
const STATIC_FRAME = 134;                     // frame shown with reduced motion

const LAYOUTS = {
  point: { count: 55 },
  random: { count: 50, size: 500, seed: 1000 },
};

/* ———— cursor (comp px) ———— */
const CURSOR_RADIUS = 380;                    // reach of the push for the nearest word
const CURSOR_PUSH = 170;                      // max push for the nearest word
const DEPTH_MIN = 0.08;                       // share of the push left for the farthest word
const SPRING = 90;                            // pull back to the orbit
const DAMPING = 11;                           // lower = more bounce when it settles

/* ———— sprites ———— */
const BLUR_LEVELS = 5;
const MAX_DPR = 2;
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

/* Gaussian approximation: 3 box blur passes on one channel */
function boxBlur(src, tmp, w, h, r) {
  if (r < 1) return;
  const div = 2 * r + 1;
  for (let y = 0; y < h; y++) {
    const row = y * w;
    let sum = 0;
    for (let x = -r; x <= r; x++) sum += src[row + Math.min(w - 1, Math.max(0, x))];
    for (let x = 0; x < w; x++) {
      tmp[row + x] = sum / div;
      sum += src[row + Math.min(w - 1, x + r + 1)] - src[row + Math.max(0, x - r)];
    }
  }
  for (let x = 0; x < w; x++) {
    let sum = 0;
    for (let y = -r; y <= r; y++) sum += tmp[Math.min(h - 1, Math.max(0, y)) * w + x];
    for (let y = 0; y < h; y++) {
      src[y * w + x] = sum / div;
      sum += tmp[Math.min(h - 1, y + r + 1) * w + x] - tmp[Math.max(0, y - r) * w + x];
    }
  }
}
function gaussianBlur(alpha, w, h, sigma) {
  if (sigma < 0.3) return;
  const tmp = new Float32Array(alpha.length);
  const r = Math.max(1, Math.round((Math.sqrt(4 * sigma * sigma + 1) - 1) / 2));  // 3 passes ≈ sigma
  for (let p = 0; p < 3; p++) boxBlur(alpha, tmp, w, h, r);
}

function runWordOrbit(block) {
  const layout = LAYOUTS[block.getAttribute('data-word-orbit')] || LAYOUTS.point;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;';
  block.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  /* copies: word index + random point (Random layout) + cursor spring state */
  const rand = mulberry32(layout.seed || 1);
  const copies = [];
  for (let i = 0; i < layout.count; i++) {
    copies.push({
      i: i,
      word: i % WORDS.length,
      px: layout.size ? (rand() - 0.5) * layout.size : 0,
      py: layout.size ? (rand() - 0.5) * layout.size : 0,
      ox: 0, oy: 0, vx: 0, vy: 0,
      s: 1, z: 0, left: 0, top: 0, level: 0,
    });
  }

  /* size: composition fitted inside the block (contain, centred) */
  let width = 0, height = 0, dpr = 1, k = 1, offX = 0, offY = 0;
  let sprites = null;               // [word][level] → { canvas, pad, w (local width) }
  let sigmaMax = 1;                 // blur of the top level, sprite px
  let spriteScale = 1;              // sprite px per comp px at word scale 1

  function buildSprites() {
    const style = getComputedStyle(block);
    const color = style.color;
    const font = (style.fontStyle || 'normal') + ' ' + (style.fontWeight || '400') + ' ';
    const family = style.fontFamily;
    spriteScale = S_MAX * k * dpr;
    sigmaMax = (BLUR / 2) * k * dpr * S_MAX / (FOCAL / (FOCAL + Z_RANGE[1]));
    const pad = Math.ceil(sigmaMax * 3) + 2;
    const fontPx = FONT_SIZE * spriteScale;
    const spacing = LETTER_SPACING * spriteScale;

    const measure = document.createElement('canvas').getContext('2d');
    measure.font = font + fontPx + 'px ' + family;
    const hasSpacing = 'letterSpacing' in measure;

    sprites = WORDS.map(function(text) {
      /* text width with letter spacing */
      let textW;
      if (hasSpacing) {
        measure.letterSpacing = spacing + 'px';
        textW = measure.measureText(text).width;
      } else {
        textW = 0;
        for (const ch of text) textW += measure.measureText(ch).width + spacing;
      }
      const w = Math.ceil(textW) + pad * 2;
      const h = Math.ceil(fontPx * 1.25) + pad * 2;

      /* sharp alpha mask */
      const base = document.createElement('canvas');
      base.width = w; base.height = h;
      const bctx = base.getContext('2d');
      bctx.font = measure.font;
      bctx.textBaseline = 'top';
      bctx.fillStyle = '#fff';
      if (hasSpacing) {
        bctx.letterSpacing = spacing + 'px';
        bctx.fillText(text, pad, pad);
      } else {
        let x = pad;
        for (const ch of text) { bctx.fillText(ch, x, pad); x += measure.measureText(ch).width + spacing; }
      }
      const src = bctx.getImageData(0, 0, w, h).data;
      const sharp = new Float32Array(w * h);
      for (let p = 0; p < sharp.length; p++) sharp[p] = src[p * 4 + 3];

      /* blur levels, tinted with the block text color */
      const levels = [];
      for (let l = 0; l < BLUR_LEVELS; l++) {
        const alpha = sharp.slice();
        gaussianBlur(alpha, w, h, sigmaMax * l / (BLUR_LEVELS - 1));
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        const cctx = c.getContext('2d');
        cctx.fillStyle = color;
        cctx.fillRect(0, 0, 1, 1);
        const rgb = cctx.getImageData(0, 0, 1, 1).data;
        const img = cctx.createImageData(w, h);
        for (let p = 0; p < alpha.length; p++) {
          img.data[p * 4] = rgb[0];
          img.data[p * 4 + 1] = rgb[1];
          img.data[p * 4 + 2] = rgb[2];
          img.data[p * 4 + 3] = alpha[p] * rgb[3] / 255;
        }
        cctx.putImageData(img, 0, 0);
        levels.push(c);
      }
      return { levels: levels, pad: pad, w: textW / spriteScale };
    });
  }

  function resize() {
    const w = block.clientWidth, h = block.clientHeight;
    if (!w || !h) return false;
    const newDpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    if (w === width && h === height && newDpr === dpr && sprites) return false;
    width = w; height = h; dpr = newDpr;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    k = Math.min(w / COMP.w, h / COMP.h);
    offX = (w - COMP.w * k) / 2;
    offY = (h - COMP.h * k) / 2;
    buildSprites();
    return true;
  }

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
  const order = copies.slice();

  function render(frame, dt) {
    if (!sprites) return;
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
      c.left = LAYER.x + lx * cos - ly * sin + COMP.w / 2;
      c.top = COMP.h / 2 - (LAYER.y + lx * sin + ly * cos);
      c.s = s;
      c.z = z;

      /* cursor push, scaled by closeness to the viewer */
      const near = DEPTH_MIN + (1 - DEPTH_MIN) * (s - S_MIN) / (S_MAX - S_MIN);
      let tx = 0, ty = 0;
      if (cursor) {
        const dx = c.left + c.ox + sprites[c.word].w * s / 2 - cursor.x;
        const dy = c.top + c.oy + FONT_SIZE * s / 2 - cursor.y;
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

      /* depth of field → sprite blur level (sprite px) */
      const depth = (z - Z_RANGE[0]) / (Z_RANGE[1] - Z_RANGE[0]);
      const sigma = (BLUR / 2) * smoothstep(FOCUS_START, FOCUS_END, depth) * k * dpr * S_MAX / s;
      c.level = Math.min(BLUR_LEVELS - 1, sigma / sigmaMax * (BLUR_LEVELS - 1));
    }

    /* far → near */
    order.sort(function(a, b) { return b.z - a.z; });
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const c of order) {
      const sprite = sprites[c.word];
      const scale = c.s / S_MAX;                        // sprite px → device px
      const x = (offX + (c.left + c.ox) * k) * dpr - sprite.pad * scale;
      const y = (offY + (c.top + c.oy) * k) * dpr - sprite.pad * scale;
      const lo = Math.floor(c.level);
      const a = c.level - lo;
      ctx.setTransform(scale, 0, 0, scale, x, y);
      ctx.globalAlpha = 1 - a;
      ctx.drawImage(sprite.levels[lo], 0, 0);
      if (a > 0.001 && lo + 1 < BLUR_LEVELS) {
        ctx.globalAlpha = a;
        ctx.drawImage(sprite.levels[lo + 1], 0, 0);
      }
    }
    ctx.globalAlpha = 1;
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
    if (resize() && reduceMotion) render(STATIC_FRAME, 0);
  });
  resizeObserver.observe(block);

  /* the block font must be ready before the sprites are drawn; rebuild if it arrives later */
  function fontReady() {
    if (destroyed) return;
    sprites = null;
    width = 0;
    resize();
    if (reduceMotion) render(STATIC_FRAME, 0);
  }
  const family = getComputedStyle(block).fontFamily;
  const weight = getComputedStyle(block).fontWeight || '400';
  if (document.fonts && document.fonts.load) {
    Promise.race([
      document.fonts.load(weight + ' ' + FONT_SIZE + 'px ' + family),
      new Promise(function(r) { setTimeout(r, 3000); }),
    ]).then(fontReady, fontReady);
    document.fonts.addEventListener('loadingdone', fontReady);
  } else {
    fontReady();
  }

  return function() {
    destroyed = true;
    if (rafId) cancelAnimationFrame(rafId);
    visibilityObserver.disconnect();
    resizeObserver.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('scroll', onScroll);
    document.documentElement.removeEventListener('pointerleave', onPointerLeave);
    if (document.fonts && document.fonts.removeEventListener) document.fonts.removeEventListener('loadingdone', fontReady);
    sprites = null;
    canvas.remove();
  };
}

/* ———— Word Orbit — any page, one or more blocks ———— */
export function initWordOrbit(scope) {
  const blocks = scope.querySelectorAll('[data-word-orbit]');
  if (!blocks.length) return function() {};
  const cleanups = Array.from(blocks).map(runWordOrbit);
  return function() { cleanups.forEach(function(fn) { fn(); }); };
}

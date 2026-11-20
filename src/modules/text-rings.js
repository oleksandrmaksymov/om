/* ======================================================
   TEXT RINGS — rings of uppercase text that breathe (Figma "circles", node 5303-685)
   The CodePen he sent, 1:1 in behaviour:
   — every ring's letter spacing goes wide → tight (40–60% of a 5 s cycle) → wide, ease-in-out;
     rings are out of phase, so a wave runs across them;
   — text that doesn't fit on its circle is not drawn (as a textPath does): wide spacing shows only
     the start of the text, tightening pulls the rest in;
   — the whole circle turns once per 20 s, ease-in-out.
   Design (1920 frame, from his SVG export): 5 concentric rings, center 960/960, baselines r 650 → 550
   (step 25), Suisse Intl 24px uppercase white on #BBC0C8, each ring = the sentence ×3 from its own start
   angle; at the tight point the text is 3363px long = exactly the Figma frame.
   Drawn on a 2D canvas: positions come from cached glyph widths and every letter is a pre-rendered
   sprite (one atlas of the distinct characters, drawn once per size) placed with drawImage — no text layout and
   no glyph rasterisation per frame. (m118 animated SVG textLength → ~1350 glyphs re-laid out per
   frame; m119 used fillText → every glyph re-rasterised at a new angle each frame: both made the page lag.)
   Webflow: Embed / Div [data-text-rings] [data-text="…"] (100% × 100% of a square block).
   Paused off screen (ScrollTrigger onToggle); cleanup on page leave (Barba).
   ====================================================== */

const VIEW = 1920;                      // design frame
const C = 960;                          // rings' center
const BG = '#BBC0C8';
const COLOR = '#FFFFFF';
const FONT_SIZE = 24;
const FONT = '"Suisseintl Book", Arial, sans-serif';
const LENGTH = 3363;                    // design (tight) length of each ring's text, px in the 1920 frame
/* rings from the outside in: baseline radius, start angle of the text (deg, clockwise from 3 o'clock) */
const RINGS = [
  { r: 650, start: -47.2 },
  { r: 625, start: -2.2 },
  { r: 600, start: 147.8 },
  { r: 575, start: -32.2 },
  { r: 550, start: 27.8 },
];
const REPEAT = 3;                       // the sentence ×3 per ring (design)
const SPREAD = 1.325;                   // extra letter spacing at the wide point, em (pen: 2.65px on a 2px font)
const BREATH = 5;                       // s, one cycle (pen)
const PHASE = 0.4;                      // s, delay between neighbouring rings (pen: 0.1 s × 20 rings ≈ a 2 s wave)
const TURN = 20;                        // s, one full turn (pen)
const DPR_MAX = 2;

export function initTextRings(scope) {
  const blocks = scope.querySelectorAll('[data-text-rings]');
  if (!blocks.length) return;

  const cleanups = [];
  const easeInOut = gsap.parseEase('power1.inOut');   // CSS ease-in-out ≈ power1.inOut

  /* pen keyframes: 0% wide → 40% tight → 60% tight → 100% wide; returns 0 (tight) … 1 (wide) */
  const breath = (t) => {
    const p = ((t % BREATH) + BREATH) % BREATH / BREATH;
    if (p < 0.4) return 1 - easeInOut(p / 0.4);
    if (p < 0.6) return 0;
    return easeInOut((p - 0.6) / 0.4);
  };

  blocks.forEach((block) => {
    const sentence = (block.getAttribute('data-text') || '').trim();
    if (!sentence) return;
    const chars = Array.from(Array(REPEAT).fill(sentence).join(' ').toUpperCase());
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    Object.assign(canvas.style, { display: 'block', width: '100%', height: '100%' });
    block.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    /* glyph widths at the design size + one sprite per distinct character at the canvas resolution
       (rebuilt on resize and when the web font arrives) */
    let widths = [], tight = 0, sprites = new Map();
    const PAD = 2;   // design px around each glyph in its sprite
    function measure() {
      ctx.font = `${FONT_SIZE}px ${FONT}`;
      widths = chars.map((ch) => ctx.measureText(ch).width);
      const natural = widths.reduce((a, b) => a + b, 0);
      tight = (LENGTH - natural) / (chars.length - 1);   // design spacing (fits the text to 3363px)
    }
    let atlas = null;
    function buildSprites() {
      sprites = new Map();
      ctx.font = `${FONT_SIZE}px ${FONT}`;
      const asc = FONT_SIZE, desc = FONT_SIZE * 0.35;   // room for caps, commas and the period
      const list = [...new Set(chars)].filter((ch) => ch !== ' ').map((ch) => ({ ch, w: ctx.measureText(ch).width }));
      /* one atlas canvas, glyphs side by side → every drawImage reads the same texture */
      const cellH = Math.ceil((asc + desc + PAD * 2) * scale);
      let x = 0;
      list.forEach((g) => { g.sx = x; g.sw = Math.ceil((g.w + PAD * 2) * scale); x += g.sw + 2; });
      atlas = document.createElement('canvas');
      atlas.width = Math.max(1, x); atlas.height = Math.max(1, cellH);
      const g2 = atlas.getContext('2d');
      g2.font = `${FONT_SIZE * scale}px ${FONT}`;
      g2.fillStyle = COLOR;
      g2.textBaseline = 'alphabetic';
      list.forEach((g) => {
        g2.fillText(g.ch, g.sx + PAD * scale, (PAD + asc) * scale);
        sprites.set(g.ch, { sx: g.sx, sw: g.sw, x: -g.w / 2 - PAD, y: -asc - PAD, w: g.sw / scale, h: cellH / scale });
      });
    }

    let scale = 1;
    function resize() {
      const dpr = Math.min(DPR_MAX, window.devicePixelRatio || 1);
      const size = block.clientWidth;
      canvas.width = Math.max(1, Math.round(size * dpr));
      canvas.height = Math.max(1, Math.round(block.clientHeight * dpr));
      scale = canvas.width / VIEW;
    }

    let time = 0;
    function draw() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const turn = reduce ? 0 : easeInOut((time % TURN) / TURN) * Math.PI * 2;
      RINGS.forEach((ring, i) => {
        const inner = RINGS.length - 1 - i;              // pen order: small ring first
        const wide = reduce ? 0 : breath(time - BREATH + inner * PHASE);
        const spacing = tight + wide * SPREAD * FONT_SIZE;
        const circ = 2 * Math.PI * ring.r;
        const a0 = (ring.start * Math.PI) / 180 + turn;
        let s = 0;
        for (let k = 0; k < chars.length; k++) {
          const w = widths[k];
          if (s + w > circ) break;                        // past the end of the circle: not drawn (textPath)
          const sp = sprites.get(chars[k]);
          if (sp) {
            const a = a0 + (s + w / 2) / ring.r;          // glyph middle on the circle
            const cos = Math.cos(a), sin = Math.sin(a);
            ctx.setTransform(
              -sin * scale, cos * scale, -cos * scale, -sin * scale,
              (C + ring.r * cos) * scale, (C + ring.r * sin) * scale
            );
            ctx.drawImage(atlas, sp.sx, 0, sp.sw, atlas.height, sp.x, sp.y, sp.w, sp.h);
          }
          s += w + spacing;
        }
      });
    }

    const tick = (t, dt) => { time += dt / 1000; draw(); };
    let running = false;
    const start = () => { if (!running && !reduce) { running = true; gsap.ticker.add(tick); } };
    const stop = () => { if (running) { running = false; gsap.ticker.remove(tick); } };

    const ro = new ResizeObserver(() => { resize(); buildSprites(); draw(); });
    ro.observe(block);
    resize();
    measure();
    buildSprites();
    draw();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); buildSprites(); draw(); });

    const st = ScrollTrigger.create({
      trigger: block,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => (self.isActive ? start() : stop()),
    });
    if (st.isActive) start();

    cleanups.push(() => {
      stop();
      st.kill();
      ro.disconnect();
      canvas.remove();
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

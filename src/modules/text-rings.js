/* ======================================================
   TEXT RINGS — 5 rings of uppercase text that breathe (Figma "circles", node 5303-685)
   Based on the CodePen he sent: every ring's letter spacing tightens and opens again
   (5 s, ease-in-out, rings out of phase → a wave runs across them) and the whole circle turns (20 s).
   Design (1920 frame, from his SVG export): 5 concentric rings, center 960/960, baselines r 650 → 550
   (step 25), Suisse Intl 24px uppercase white on #BBC0C8; each ring = the sentence ×3, starting at its
   own angle; at rest every ring's text is 3363px long (the design spacing).
   Spacing: SVG textLength (lengthAdjust="spacing") — the text is fitted to an exact length, so the
   design spacing is matched whatever the font metrics; the animation tweens that length. Works the
   same in every browser (animated letter-spacing on textPath is unreliable in Safari).
   Webflow: Embed / Div [data-text-rings] [data-text="…"] (100% × 100% of a square block) — text editable there.
   Paused off screen (ScrollTrigger onToggle); cleanup on page leave (Barba).
   ====================================================== */

const NS = 'http://www.w3.org/2000/svg';
const VIEW = 1920;
const C = 960;                          // rings' center
const BG = '#BBC0C8';
const COLOR = '#FFFFFF';
const FONT_SIZE = 24;
const LENGTH = 3363;                    // design length of each ring's text (px in the 1920 frame)
/* rings from the outside in: baseline radius, start angle of the text (deg, clockwise from 3 o'clock) */
const RINGS = [
  { r: 650, start: -47.2 },
  { r: 625, start: -2.2 },
  { r: 600, start: 147.8 },
  { r: 575, start: -32.2 },
  { r: 550, start: 27.8 },
];
const REPEAT = 3;                       // the sentence ×3 per ring (design)
const SQUEEZE = 0.06;                   // how much a ring's text tightens (share of its length) — the design spacing is already tight
const BREATH = 5;                       // s, one tighten-and-open cycle (pen)
const PHASE = 0.1;                      // s, delay between neighbouring rings (pen)
const TURN = 20;                        // s, one full turn of the circle (pen)

let uid = 0;

const el = (tag, attrs) => {
  const node = document.createElementNS(NS, tag);
  Object.keys(attrs).forEach((k) => node.setAttribute(k, attrs[k]));
  return node;
};

/* full circle, clockwise (screen), starting at the given angle */
function circlePath(r, startDeg) {
  const a = (startDeg * Math.PI) / 180;
  const x1 = C + r * Math.cos(a), y1 = C + r * Math.sin(a);
  const x2 = C - r * Math.cos(a), y2 = C - r * Math.sin(a);
  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 1 1 ${x2.toFixed(2)} ${y2.toFixed(2)} A ${r} ${r} 0 1 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

export function initTextRings(scope) {
  const blocks = scope.querySelectorAll('[data-text-rings]');
  if (!blocks.length) return;

  const cleanups = [];

  blocks.forEach((block) => {
    const sentence = (block.getAttribute('data-text') || '').trim();
    if (!sentence) return;
    const id = 'text-rings-' + (++uid);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const svg = el('svg', { class: 'text-rings__svg', viewBox: `0 0 ${VIEW} ${VIEW}`, 'aria-hidden': 'true' });
    svg.style.cssText = 'display:block;width:100%;height:100%;';
    const defs = el('defs', {});
    const bg = el('rect', { width: VIEW, height: VIEW, fill: BG });
    const group = el('g', {});
    const text = el('text', {
      fill: COLOR,
      'font-size': FONT_SIZE,
      'font-family': '"Suisseintl Book", Arial, sans-serif',
    });
    text.style.textTransform = 'uppercase';

    const content = Array(REPEAT).fill(sentence).join(' ');
    const paths = RINGS.map((ring, i) => {
      const pid = `${id}-ring-${i}`;
      defs.appendChild(el('path', { id: pid, d: circlePath(ring.r, ring.start) }));
      const tp = el('textPath', { href: `#${pid}`, textLength: LENGTH, lengthAdjust: 'spacing' });
      tp.textContent = content;
      text.appendChild(tp);
      return tp;
    });
    group.appendChild(text);
    svg.append(defs, bg, group);
    block.appendChild(svg);

    /* breathing (pen: spacing tightens at 40–60% of the cycle) + slow turn */
    const tweens = [];
    if (!reduce) {
      const order = paths.slice().reverse();   // inner ring first, like the pen (small → large)
      order.forEach((tp, i) => {
        const tl = gsap.timeline({ repeat: -1, paused: true });
        tl.to(tp, { attr: { textLength: LENGTH * (1 - SQUEEZE) }, duration: BREATH * 0.4, ease: 'sine.inOut' })
          .to(tp, { attr: { textLength: LENGTH }, duration: BREATH * 0.4, ease: 'sine.inOut' }, `+=${BREATH * 0.2}`);
        tl.progress(((BREATH - i * PHASE) % BREATH) / BREATH);   // pen: animation-delay -5s + i × 0.1s
        tweens.push(tl);
      });
      tweens.push(gsap.to(group, { rotation: 360, svgOrigin: `${C} ${C}`, duration: TURN, ease: 'sine.inOut', repeat: -1, paused: true }));
    }

    /* run only while on screen */
    const st = ScrollTrigger.create({
      trigger: block,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => tweens.forEach((t) => (self.isActive ? t.play() : t.pause())),
    });
    if (st.isActive) tweens.forEach((t) => t.play());

    cleanups.push(() => {
      st.kill();
      tweens.forEach((t) => t.kill());
      svg.remove();
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

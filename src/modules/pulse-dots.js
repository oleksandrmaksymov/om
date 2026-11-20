/* ———— Pulse Dots — liquid dots in a circle (Research) ————
   Based on the CodePen he sent (inspired by pinterest.com/pin/10062799163180124): a 20×20 grid,
   every cell has two dots that flow into the next cell (CSS keyframes in Site Head);
   random delay + random rotation (the direction of the flow); the pen's SVG "liquid" filter
   (feGaussianBlur + feColorMatrix alpha threshold) merges the dots.
   Built as ONE SVG that fills the block (like the house): grey background rect, dots as <circle>s,
   the filter inside the SVG — everything is in viewBox units, so dots, gaps and blur scale together
   and look the same in every browser (an SVG filter on HTML content ran weaker in Safari on phones).
   Changes to the pen:
   — the dots form a circle (63% of the block): only cells whose center is inside
     the circle get dots; a cell may only flow into a neighbour that is also inside → round edge;
   — the pug template (random delays / rotations) is done here in JS;
   — built after the page transition (layout stage), starts paused, runs only while on screen
     (ScrollTrigger onToggle); cleanup on page leave (Barba).
   Webflow: Div.pulse-dots [data-pulse-dots] (100% × 100%) — the SVG is built inside. */

const NS = 'http://www.w3.org/2000/svg';
const VIEW = 1000;              // viewBox 1000 × 1000 (the block is square)
const RANGE = 20;               // cells per side (as in the pen)
const GRID = VIEW * 0.63;       // the circle: 63% of the block (60% + 5% radius)
const GAP = GRID * 0.00625;     // pen: gap 0.5vmin on an 80vmin grid
const STEP = GRID / RANGE;      // cell step = dot + gap (the distance a dot flows)
const DOT = STEP - GAP;         // pen: grid / range − gap
const OFFSET = (VIEW - GRID) / 2;
const BLUR = DOT * 0.15;        // pen: 4px blur on a ~27px dot
const BG = '#AFAFAF';
const COLOR = '#000000';
const MAX_DELAY = 5000;         // ms, as in the pen
/* rotation → direction of the flow (0 right, 90 down, 180 left, 270 up) */
const DIRS = [
  { deg: 0, dx: 1, dy: 0 },
  { deg: 90, dx: 0, dy: 1 },
  { deg: 180, dx: -1, dy: 0 },
  { deg: 270, dx: 0, dy: -1 },
];

let uid = 0;

const inside = (col, row) => {
  if (col < 0 || row < 0 || col >= RANGE || row >= RANGE) return false;
  const half = RANGE / 2;
  return Math.hypot(col + 0.5 - half, row + 0.5 - half) <= half;
};

const el = (tag, attrs) => {
  const node = document.createElementNS(NS, tag);
  Object.keys(attrs).forEach((k) => node.setAttribute(k, attrs[k]));
  return node;
};

export function initPulseDots(scope) {
  const blocks = scope.querySelectorAll('[data-pulse-dots]');
  if (!blocks.length) return;

  const cleanups = [];

  blocks.forEach((block) => {
    const id = 'pulse-dots-liquid-' + (++uid);   // unique: two pages exist during a Barba transition
    block.setAttribute('data-pulse-dots-paused', '');   // start paused, run when on screen

    const svg = el('svg', {
      class: 'pulse-dots__svg',
      viewBox: `0 0 ${VIEW} ${VIEW}`,
      'aria-hidden': 'true',
    });
    svg.style.setProperty('--pd-step', `${STEP}px`);   // px in SVG CSS transforms = viewBox units

    /* the pen's filter, in viewBox units */
    const filter = el('filter', {
      id,
      filterUnits: 'userSpaceOnUse',
      x: 0, y: 0, width: VIEW, height: VIEW,
    });
    filter.append(
      el('feGaussianBlur', { in: 'SourceGraphic', stdDeviation: BLUR.toFixed(2) }),
      el('feColorMatrix', { values: '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10' })
    );
    const defs = el('defs', {});
    defs.appendChild(filter);

    const bg = el('rect', { width: VIEW, height: VIEW, fill: BG });
    const dots = el('g', { filter: `url(#${id})`, fill: COLOR });

    for (let row = 0; row < RANGE; row++) {
      for (let col = 0; col < RANGE; col++) {
        if (!inside(col, row)) continue;
        const allowed = DIRS.filter((d) => inside(col + d.dx, row + d.dy));
        const dir = allowed[Math.floor(Math.random() * allowed.length)];
        const cx = OFFSET + col * STEP + DOT / 2;
        const cy = OFFSET + row * STEP + DOT / 2;
        const cell = el('g', { transform: `rotate(${dir.deg} ${cx} ${cy})` });
        cell.style.setProperty('--anim-delay', `-${Math.floor(Math.random() * MAX_DELAY)}ms`);
        cell.append(
          el('circle', { class: 'pulse-dots__dot is--first', cx, cy, r: DOT / 2 }),
          el('circle', { class: 'pulse-dots__dot is--last', cx, cy, r: DOT / 2 })
        );
        dots.appendChild(cell);
      }
    }

    svg.append(defs, bg, dots);
    block.appendChild(svg);

    /* run only while on screen */
    const st = ScrollTrigger.create({
      trigger: block,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => block.toggleAttribute('data-pulse-dots-paused', !self.isActive),
    });
    block.toggleAttribute('data-pulse-dots-paused', !st.isActive);

    cleanups.push(() => {
      st.kill();
      block.removeAttribute('data-pulse-dots-paused');
      svg.remove();
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

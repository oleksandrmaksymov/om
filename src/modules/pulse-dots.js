/* ———— Pulse Dots — liquid dots in a circle (Research) ————
   Based on the CodePen he sent (inspired by pinterest.com/pin/10062799163180124): a 20×20 grid,
   every cell has two dots (::before / ::after, CSS keyframes in Site Head) that flow into the next
   cell; random delay + random rotation (the direction of the flow); SVG "liquid" filter
   (feGaussianBlur + feColorMatrix alpha threshold) merges the dots.
   Changes for the site:
   — the dots form a circle, not a square: only cells whose center is inside the circle get dots;
     a cell may only flow into a neighbour that is also inside → the edge always stays round;
   — the pug template (random delays / rotations) is done here in JS;
   — sizes from the block (container units in Site Head), blur scaled to the dot size
     (the pen's 4px was for 80vmin; filter units are px, so it is set from the measured dot);
   — paused while the block is off screen (ScrollTrigger onToggle), cleanup on page leave (Barba).
   Webflow: Div.pulse-dots [data-pulse-dots] (grey #AFAFAF, flex center) — the grid is built inside. */

const RANGE = 20;            // cells per side (as in the pen)
const MAX_DELAY = 5000;      // ms, as in the pen
const BLUR_RATIO = 0.15;     // pen: 4px blur on a ~27px dot
const NS = 'http://www.w3.org/2000/svg';
/* rotation → direction of the flow (rotate() in CSS: 0 right, 90 down, 180 left, 270 up) */
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

export function initPulseDots(scope) {
  const blocks = scope.querySelectorAll('[data-pulse-dots]');
  if (!blocks.length) return;

  const cleanups = [];

  blocks.forEach((block) => {
    const id = 'pulse-dots-liquid-' + (++uid);   // unique: two pages exist during a Barba transition

    /* filter (the pen's svg#liquid) */
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'pulse-dots__filter');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML =
      `<filter id="${id}"><feGaussianBlur in="SourceGraphic" stdDeviation="4"/>` +
      '<feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"/></filter>';
    const blur = svg.querySelector('feGaussianBlur');

    /* grid */
    const grid = document.createElement('div');
    grid.className = 'pulse-dots__grid';
    grid.setAttribute('aria-hidden', 'true');
    grid.style.filter = `url(#${id})`;
    const frag = document.createDocumentFragment();
    for (let row = 0; row < RANGE; row++) {
      for (let col = 0; col < RANGE; col++) {
        const cell = document.createElement('span');
        if (inside(col, row)) {
          const dirs = DIRS.filter((d) => inside(col + d.dx, row + d.dy));
          const dir = dirs[Math.floor(Math.random() * dirs.length)];
          cell.style.setProperty('--anim-delay', `-${Math.floor(Math.random() * MAX_DELAY)}ms`);
          cell.style.transform = `rotate(${dir.deg}deg)`;
        } else {
          cell.className = 'is--empty';
        }
        frag.appendChild(cell);
      }
    }
    grid.appendChild(frag);
    block.append(svg, grid);

    /* blur follows the dot size (filter values are px) */
    const setBlur = () => {
      const dot = grid.offsetWidth / RANGE;
      if (dot) blur.setAttribute('stdDeviation', (dot * BLUR_RATIO).toFixed(2));
    };
    const ro = new ResizeObserver(setBlur);
    ro.observe(grid);
    setBlur();

    /* run only while on screen */
    const st = ScrollTrigger.create({
      trigger: block,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => block.toggleAttribute('data-pulse-dots-paused', !self.isActive),
    });
    block.toggleAttribute('data-pulse-dots-paused', !st.isActive);

    cleanups.push(() => {
      ro.disconnect();
      st.kill();
      block.removeAttribute('data-pulse-dots-paused');
      svg.remove();
      grid.remove();
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

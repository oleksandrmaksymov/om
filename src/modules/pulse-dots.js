/* ———— Pulse Dots — liquid dots in a circle (Research) ————
   Based on the CodePen he sent (inspired by pinterest.com/pin/10062799163180124): a 20×20 grid,
   every cell has two dots (::before / ::after, CSS keyframes in Site Head) that flow into the next
   cell; random delay + random rotation (the direction of the flow).
   Changes for the site:
   — the dots form a circle, not a square: only cells whose center is inside the circle get dots;
     a cell may only flow into a neighbour that is also inside → the edge always stays round;
   — the pug template (random delays / rotations) is done here in JS;
   — "liquid" merge with CSS filter: blur() contrast() in Site Head instead of the pen's SVG filter
     (CSS px in every browser — Safari on phones ran the SVG blur ~3× weaker; GPU instead of CPU);
   — built after the page transition (layout stage), starts paused, runs only while on screen
     (ScrollTrigger onToggle); cleanup on page leave (Barba).
   Webflow: Div.pulse-dots [data-pulse-dots] (grey #AFAFAF, flex center) — the grid is built inside. */
const RANGE = 20;            // cells per side (as in the pen)
const MAX_DELAY = 5000;      // ms, as in the pen
/* rotation → direction of the flow (rotate() in CSS: 0 right, 90 down, 180 left, 270 up) */
const DIRS = [
  { deg: 0, dx: 1, dy: 0 },
  { deg: 90, dx: 0, dy: 1 },
  { deg: 180, dx: -1, dy: 0 },
  { deg: 270, dx: 0, dy: -1 },
];

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
    block.setAttribute('data-pulse-dots-paused', '');   // start paused, run when on screen

    /* grid */
    const grid = document.createElement('div');
    grid.className = 'pulse-dots__grid';
    grid.setAttribute('aria-hidden', 'true');
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
    block.appendChild(grid);

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
      grid.remove();
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

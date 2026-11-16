/* ———— Scramble Hover — letters flash colors / random characters / size labels on hover ————
   Source: the CodePen-style GSAP snippet he sent (SplitText lines + chars, mouseenter per line),
   same timing, colors and effects.
   Webflow: [data-scramble-hover] on the list container (Research: .experiment-item_card-full-50%);
   the items inside keep [data-split] for the scroll reveal.
   Site adaptations:
   — the reveal already splits each item into lines, so letters are split only for the hover
     (SplitText on the line, reverted when the effect ends) — the reveal split is never touched;
   — the yoyo goes back to the text's own color (black on this page) instead of #fff;
   — cleanup on page leave (Barba). CSS for .detail-size in Site Head. */

const COLORS = ['#85AF00', '#FFCC00', '#FB9CFD', '#A19BFF', '#FF4C00'];
const GLYPHS = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '<', '>', '%', '&', '@', '!', '#', '$', '^', '*', '(', ')', '-',
  '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"',
  '?', '/', '~', '`',
];

export function initScrambleHover(scope) {
  const items = scope.querySelectorAll('[data-scramble-hover] [data-split]');
  if (!items.length) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cleanups = [];

  items.forEach((item) => {
    let split = null;      // letters split, only while the effect runs
    let running = 0;       // letters still animating

    const finish = () => {
      if (--running > 0) return;
      if (split) { split.revert(); split = null; }
    };

    const onEnter = () => {
      // the line created by the reveal (fallback: the item itself before/without the reveal)
      const line = item.querySelector('.text-line') || item.firstElementChild || item;
      if (!split) split = SplitText.create(line, { type: 'chars' });
      const chars = split.chars;
      const base = getComputedStyle(item).color;
      const middleIndex = (chars.length - 1) / 2;

      chars.forEach((char, index) => {
        if (!char.dataset.orig) char.dataset.orig = char.textContent;
        const distanceFromCenter = Math.abs(index - middleIndex);
        running++;

        gsap.fromTo(char, { color: base }, {
          color: gsap.utils.random(COLORS),
          ease: 'power3.out',
          duration: 0.3,
          delay: distanceFromCenter * 0.03,
          repeat: 1,
          yoyo: true,
          overwrite: 'auto',

          onStart: () => {
            const randomNum = gsap.utils.random(['0', '1']);
            const randomNumThree = gsap.utils.random(['0', '1', '2']);
            // alternative characters
            if (randomNum == 1) char.textContent = gsap.utils.random(GLYPHS);
            // size details
            if (randomNumThree == 1) {
              const detail = document.createElement('span');
              detail.classList.add('detail-size');
              detail.textContent = `△x = ${char.clientWidth}px`;
              char.appendChild(detail);
            }
            // borders
            if (randomNumThree == 1) {
              char.style.border = `1px solid ${gsap.utils.random(COLORS)}`;
            }
          },

          onComplete: () => {
            char.textContent = char.dataset.orig;
            char.style.border = 'none';
            finish();
          },
          onInterrupt: finish,
        });
      });
    };

    item.addEventListener('mouseenter', onEnter);
    cleanups.push(() => {
      item.removeEventListener('mouseenter', onEnter);
      if (split) { gsap.killTweensOf(split.chars); split.revert(); split = null; }
      running = 0;
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

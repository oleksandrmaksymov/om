/* ———— Scramble Hover — letters change color / character / get a size label while hovered ————
   Based on the GSAP snippet he sent (stagger from the line center 0.03s, 0.3s power3.out,
   random characters, 1px frame (size labels removed)), with:
   — hold: the effect stays while the cursor is on the item and goes back when it leaves
     (same center stagger); the snippet's yoyo flashed and reverted on its own;
   — letters change width/size with the replacement character and the 1px border, as in the snippet;
     the line masks are opened while hovered, so nothing is cut;
   — the scroll reveal ([data-split], mask: lines) is never touched: letters are split once
     inside the revealed line, never reverted mid-animation; re-split when the reveal re-splits;
   — grey palette; back to the text's own color.
   Webflow: [data-scramble-hover] on the list container (Research: .experiment-item_card-full-50%).
   CSS for .detail-size in Site Head. Desktop pointer only. Cleanup on page leave (Barba). */

const COLORS = ['#555555', '#727272', '#838383', '#B1B1B1', '#D3D3D3', '#E5E5E5'];
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
const HOVER_COLOR = '#FFFFFF'; // letters while hovered (COLORS stay for the frames)
const DURATION = 0.3;
const EASE = 'power3.out';
const STAGGER = 0.03;

export function initScrambleHover(scope) {
  const items = scope.querySelectorAll('[data-scramble-hover] [data-split]');
  if (!items.length) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cleanups = [];

  items.forEach((item) => {
    let splits = [];   // letter splits inside the revealed lines
    let chars = [];
    let masks = [];    // { el, overflow } — line masks of the reveal, opened while hovered

    /* letters inside the lines made by the reveal (mask → line); once, not reverted */
    function prepare() {
      if (chars.length && chars[0].isConnected) return;
      const lines = item.querySelectorAll(':scope > div > div');
      const targets = lines.length ? [...lines] : [item];
      splits = targets.map((line) => SplitText.create(line, { type: 'chars' }));
      chars = splits.flatMap((s) => s.chars);
      masks = lines.length ? [...item.children].map((el) => ({ el, overflow: el.style.overflow })) : [];
      chars.forEach((c) => { c.dataset.orig = c.textContent; });
    }

    function restore(char) {
      char.textContent = char.dataset.orig;   // also removes the size label
      char.style.border = '';
    }

    const onEnter = () => {
      prepare();
      masks.forEach((m) => { m.el.style.overflow = 'visible'; });   // let labels show below the letters
      const middle = (chars.length - 1) / 2;
      chars.forEach((char, index) => {
        gsap.to(char, {
          color: HOVER_COLOR,
          ease: EASE,
          duration: DURATION,
          delay: Math.abs(index - middle) * STAGGER,
          overwrite: 'auto',
          onStart: () => {
            const randomNum = gsap.utils.random(['0', '1']);
            const randomNumThree = gsap.utils.random(['0', '1', '2']);
            if (randomNum == 1) char.textContent = gsap.utils.random(GLYPHS);
            if (randomNumThree == 1) {
              char.style.border = `1px solid ${gsap.utils.random(COLORS)}`;
            }
          },
        });
      });
    };

    const onLeave = () => {
      if (!chars.length) return;
      const base = getComputedStyle(item).color;
      const middle = (chars.length - 1) / 2;
      masks.forEach((m) => { m.el.style.overflow = m.overflow; });
      chars.forEach((char, index) => {
        gsap.to(char, {
          color: base,
          ease: EASE,
          duration: DURATION,
          delay: Math.abs(index - middle) * STAGGER,
          overwrite: 'auto',
          onStart: () => restore(char),
        });
      });
    };

    item.addEventListener('mouseenter', onEnter);
    item.addEventListener('mouseleave', onLeave);
    cleanups.push(() => {
      item.removeEventListener('mouseenter', onEnter);
      item.removeEventListener('mouseleave', onLeave);
      gsap.killTweensOf(chars);
      splits.forEach((s) => s.revert());
      splits = []; chars = []; masks = [];
    });
  });

  return () => cleanups.forEach((fn) => fn());
}

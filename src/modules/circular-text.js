/* ———— Circular Text Scroll Reveal ———— */
/* Osmo Sticky Title Scroll Effect (reveal only) on SVG textPath rings.
   Webflow: section [data-circular-text="wrap"] → Embed svg [data-circular-text="svg"] (viewBox = Figma frame,
            scales natively like the Osmo SVG; font sizes from Webflow classes in viewBox units)
            → <text data-circular-text="line" data-at="0 | 0.5"> (data-at = start, share of a line reveal).
   Page content is pinned while the block is held, letters appear one by one (steps), scrubbed both ways. */

const REVEAL_DURATION = 0.7; // stagger amount per line
const PIN_DISTANCE = '150%';  // how long the block is held (share of the screen height)

/* SplitText can't split SVG textPath — split chars into tspans, keep spaces */
function splitLine(line) {
  const chars = [];
  line.querySelectorAll('textPath').forEach(function(tp) {
    const str = tp.textContent;
    tp.textContent = '';
    for (const ch of str) {
      if (ch === ' ') { tp.append(' '); continue; }
      const t = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
      t.textContent = ch;
      tp.append(t);
      chars.push(t);
    }
  });
  return chars;
}

/* split state per page container (content stage → layout stage) */
const splits = new WeakMap();

/* Content stage (with the page transition): split letters, hide them — no ScrollTrigger yet */
export function initCircularText(scope) {
  const wrap = scope.querySelector('[data-circular-text="wrap"]');
  if (!wrap) return function() {};
  const lines = Array.from(wrap.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));
  if (!lines.length) return function() {};

  /* keep original text to restore on cleanup */
  const originals = lines.map(function(line) {
    return Array.from(line.querySelectorAll('textPath')).map(function(tp) { return tp.textContent; });
  });

  const lineChars = lines.map(splitLine);
  lineChars.forEach(function(chars) { gsap.set(chars, { autoAlpha: 0 }); });
  splits.set(scope, { wrap: wrap, lines: lines, lineChars: lineChars });

  return function() {
    splits.delete(scope);
    lines.forEach(function(line, i) {
      line.querySelectorAll('textPath').forEach(function(tp, j) { tp.textContent = originals[i][j]; });
    });
  };
}

/* Layout stage (after the transition, page in its real position — like Flip):
   pin + scroll-scrubbed reveal (GSAP docs: create pins when the layout is final) */
export function initCircularTextScroll(scope) {
  const state = splits.get(scope);
  if (!state) return function() {};

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: state.wrap,
      start: 'bottom bottom', // block's bottom edge (line with the next block) meets the screen bottom
      end: '+=' + PIN_DISTANCE,
      /* the whole page content stops while the letters appear, then the page scrolls on */
      pin: scope.querySelector('[data-circular-text="pin"]') || state.wrap,
      scrub: true,
    },
  });

  state.lines.forEach(function(line, i) {
    const chars = state.lineChars[i];
    if (!chars.length) return;
    tl.fromTo(chars, { autoAlpha: 0 }, {
      autoAlpha: 1,
      stagger: { amount: REVEAL_DURATION, from: 'start' },
      duration: REVEAL_DURATION / chars.length,
      ease: 'steps(1)',
    }, (parseFloat(line.dataset.at) || 0) * REVEAL_DURATION);
  });

  return function() {
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
  };
}

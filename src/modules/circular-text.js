/* ———— Circular Text Scroll Reveal ———— */
/* Osmo Sticky Title Scroll Effect (reveal only) on SVG textPath rings.
   Webflow: section [data-circular-text="wrap"] → Embed svg [data-circular-text="svg"] (viewBox = Figma frame,
            scales natively like the Osmo SVG; font sizes from Webflow classes in viewBox units)
            → <text data-circular-text="line" data-at="0 | 0.5"> (data-at = start, share of a line reveal).
   The block is pinned while the letters appear one by one (steps), scrubbed both ways.
   Letters switch with fill-opacity (SVG paint property, works on tspan, no text re-layout);
   autoAlpha set opacity (not applied to tspan by the SVG spec) + visibility (re-lays out the text path). */

const REVEAL_DURATION = 0.7; // stagger amount per line
const PIN_DISTANCE = '150%';  // how long the block is held (share of the screen height)
export const REVEAL_SCROLL = 1.5;  // the same, as screens — for a block that plays the reveal in its own timeline

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
  lineChars.forEach(function(chars) { gsap.set(chars, { fillOpacity: 0 }); });
  splits.set(scope, { wrap: wrap, lines: lines, lineChars: lineChars });

  return function() {
    splits.delete(scope);
    lines.forEach(function(line, i) {
      line.querySelectorAll('textPath').forEach(function(tp, j) { tp.textContent = originals[i][j]; });
    });
  };
}

/* The reveal itself: each line's letters switch on one by one (steps), lines starting at their data-at */
function buildReveal(state, tl) {
  state.lines.forEach(function(line, i) {
    const chars = state.lineChars[i];
    if (!chars.length) return;
    tl.fromTo(chars, { fillOpacity: 0 }, {
      fillOpacity: 1,
      stagger: { amount: REVEAL_DURATION, from: 'start' },
      duration: REVEAL_DURATION / chars.length,
      ease: 'steps(1)',
    }, (parseFloat(line.dataset.at) || 0) * REVEAL_DURATION);
  });
  return tl;
}

/* For a block that plays the circular text inside its own pinned timeline (the scroll-driven block, when the
   circular-text section sits inside it): the reveal as a plain timeline, to be added to that block's timeline */
export function circularTextReveal(scope, host) {
  const state = splits.get(scope);
  return state && host.contains(state.wrap) ? buildReveal(state, gsap.timeline()) : null;
}

/* Layout stage (after the transition, page in its real position — like Flip):
   pin + scroll-scrubbed reveal (GSAP docs: create pins when the layout is final).
   Inside the scroll-driven block it makes no pin of its own: that block's timeline plays the reveal. */
export function initCircularTextScroll(scope) {
  const state = splits.get(scope);
  if (!state || state.wrap.closest('[data-scroll-driven="wrap"]')) return function() {};

  const tl = buildReveal(state, gsap.timeline({
    scrollTrigger: {
      trigger: state.wrap,
      start: 'top top', // the block is one screen high (100svh) on every screen — pinned with the circle centered, like creativewebmanual
      end: '+=' + PIN_DISTANCE,
      pin: true, // the circular-text block itself
      scrub: true,
    },
  }));

  return function() {
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
  };
}

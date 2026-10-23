/* ———— Circular Text Scroll Reveal ———— */
/* Osmo Sticky Title Scroll Effect (reveal only) on SVG textPath rings.
   Webflow: section [data-circular-text="wrap"] → Embeds (desktop / mobile) svg [data-circular-text="svg"]
            → <text data-circular-text="line" data-at="0 | 0.5"> (data-at = start, share of a line reveal).
   Page content is pinned while the square is in the screen center, letters appear one by one (steps), scrubbed both ways. */

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

export function initCircularText(scope) {
  const wrap = scope.querySelector('[data-circular-text="wrap"]');
  if (!wrap) return function() {};
  /* desktop + mobile SVG variants (Webflow shows one per breakpoint) — both animate together */
  const lines = Array.from(wrap.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));
  if (!lines.length) return function() {};

  /* keep original text to restore on cleanup */
  const originals = lines.map(function(line) {
    return Array.from(line.querySelectorAll('textPath')).map(function(tp) { return tp.textContent; });
  });

  const lineChars = lines.map(splitLine);

  function buildTimeline(scrollTrigger) {
    const tl = gsap.timeline({ scrollTrigger: scrollTrigger });
    lines.forEach(function(line, i) {
      const chars = lineChars[i];
      if (!chars.length) return;
      tl.from(chars, {
        autoAlpha: 0,
        stagger: { amount: REVEAL_DURATION, from: 'start' },
        duration: REVEAL_DURATION / chars.length,
        ease: 'steps(1)',
      }, (parseFloat(line.dataset.at) || 0) * REVEAL_DURATION);
    });
    return tl;
  }

  /* When the square reaches the screen center the whole page content stops (GSAP pin on
     [data-circular-text="pin"]), letters appear while it is held, then the page scrolls on. */
  const pinTarget = scope.querySelector('[data-circular-text="pin"]') || wrap;
  const tl = buildTimeline({
    trigger: wrap,
    start: 'center center',
    end: '+=' + PIN_DISTANCE,
    pin: pinTarget,
    scrub: true,
  });

  return function() {
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
    lines.forEach(function(line, i) {
      line.querySelectorAll('textPath').forEach(function(tp, j) { tp.textContent = originals[i][j]; });
    });
  };
}

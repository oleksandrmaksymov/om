/* ———— Circular Text Scroll Reveal ———— */
/* Osmo Sticky Title Scroll Effect (reveal only) on SVG textPath rings.
   Webflow: section [data-circular-text="wrap"] → Embed svg [data-circular-text="svg"]
            → <text data-circular-text="line" data-at="0 | 0.5"> (data-at = start, share of a line reveal).
   Letters appear one by one (steps), scrubbed both ways. */

const REVEAL_DURATION = 0.7; // stagger amount per line

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
  const svg = wrap.querySelector('[data-circular-text="svg"]');
  if (!svg) return function() {};
  const lines = Array.from(svg.querySelectorAll('[data-circular-text="line"]'));
  if (!lines.length) return function() {};

  /* keep original text to restore on cleanup */
  const originals = lines.map(function(line) {
    return Array.from(line.querySelectorAll('textPath')).map(function(tp) { return tp.textContent; });
  });

  const lineChars = lines.map(splitLine);
  gsap.set(svg, { visibility: 'visible' });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });

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

  return function() {
    if (tl.scrollTrigger) tl.scrollTrigger.kill();
    tl.kill();
    lines.forEach(function(line, i) {
      line.querySelectorAll('textPath').forEach(function(tp, j) { tp.textContent = originals[i][j]; });
    });
  };
}

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
  }

  const mm = gsap.matchMedia();

  /* Desktop / tablet: section is pinned (CSS sticky), reveal runs while it stays */
  mm.add('(min-width: 480px)', function() {
    buildTimeline({ trigger: wrap, start: 'top top', end: 'bottom bottom', scrub: true });
  });

  /* Phone: plain square in flow, reveal while it scrolls in up to the screen center */
  mm.add('(max-width: 479px)', function() {
    buildTimeline({ trigger: svg, start: 'top bottom', end: 'center center', scrub: true });
  });

  return function() {
    mm.revert();
    lines.forEach(function(line, i) {
      line.querySelectorAll('textPath').forEach(function(tp, j) { tp.textContent = originals[i][j]; });
    });
  };
}

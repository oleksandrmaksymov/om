/* ———— Circular Text Scroll Reveal ———— */
/* Osmo Sticky Title Scroll Effect (reveal only) on SVG textPath rings.
   Webflow: section [data-circular-text="wrap"] → Embed svg [data-circular-text="svg"] (font sizes from Webflow classes)
            → <path data-circular-text="path" data-cx data-cy data-r data-start> (share of the block width, start angle)
            → <text data-circular-text="line" data-at="0 | 0.5" font-size="px"> (data-at = start, share of a line reveal).
   Fonts keep their px size, rings follow the block width.
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

/* Full clockwise circle starting at startDeg */
function circlePath(cx, cy, r, startDeg) {
  const a = startDeg * Math.PI / 180;
  const b = a + Math.PI;
  const x1 = cx + r * Math.cos(a), y1 = cy + r * Math.sin(a);
  const x2 = cx + r * Math.cos(b), y2 = cy + r * Math.sin(b);
  return 'M' + x1 + ',' + y1 + ' A' + r + ',' + r + ' 0 1,1 ' + x2 + ',' + y2 +
         ' A' + r + ',' + r + ' 0 1,1 ' + x1 + ',' + y1;
}

/* SVG units = real px of the block (fonts stay px), rings = share of the block width */
function layoutSvg(svg) {
  const size = svg.getBoundingClientRect().width;
  if (!size) return; // hidden variant (display: none)
  svg.setAttribute('viewBox', '0 0 ' + size + ' ' + size);
  svg.querySelectorAll('[data-circular-text="path"]').forEach(function(p) {
    p.setAttribute('d', circlePath(
      size * parseFloat(p.dataset.cx),
      size * parseFloat(p.dataset.cy),
      size * parseFloat(p.dataset.r),
      parseFloat(p.dataset.start)
    ));
  });
}

export function initCircularText(scope) {
  const wrap = scope.querySelector('[data-circular-text="wrap"]');
  if (!wrap) return function() {};
  const svgs = Array.from(wrap.querySelectorAll('[data-circular-text="svg"]'));

  const lines = Array.from(wrap.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));
  if (!svgs.length || !lines.length) return function() {};

  /* rings follow the block size (also when the visible variant switches on resize) */
  svgs.forEach(layoutSvg);
  const ro = new ResizeObserver(function(entries) {
    entries.forEach(function(entry) { layoutSvg(entry.target); });
  });
  svgs.forEach(function(svg) { ro.observe(svg); });

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

  /* When the block's bottom edge reaches the screen bottom the whole page content stops (GSAP pin on
     [data-circular-text="pin"]), letters appear while it is held, then the page scrolls on. */
  const pinTarget = scope.querySelector('[data-circular-text="pin"]') || wrap;
  const tl = buildTimeline({
    trigger: wrap,
    /* block's bottom edge (line with the next block) meets the bottom of the visible area.
       documentElement.clientHeight = viewport with the mobile browser bars shown (constant),
       so the block stays fully visible whether the bars are shown or hidden */
    start: function() { return 'bottom ' + document.documentElement.clientHeight + 'px'; },
    end: '+=' + PIN_DISTANCE,
    pin: pinTarget,
    scrub: true,
  });

  return function() {
    ro.disconnect();
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
    lines.forEach(function(line, i) {
      line.querySelectorAll('textPath').forEach(function(tp, j) { tp.textContent = originals[i][j]; });
    });
  };
}

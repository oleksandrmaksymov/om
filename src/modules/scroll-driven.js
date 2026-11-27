/* ———— Scroll-driven block (Research) ———— */
/* An 8 × 4 module grid (module 170 design units). The black line (top-left, half the width — always on screen,
   it continues the image above) slides down into a square, the square's rows slide right into the "OM" figure,
   then the "O" scrolls away up and, once it is off the screen, the "M" closes up into a square on the right;
   then (experiment) a white circle grows from that square's centre until the stage is white; inside it the O and M
   appear and the circular text's rings reveal (its section sits inside this block, centred on the same point) —
   one pin, one scrubbed timeline.
   Webflow: [data-scroll-driven="wrap"] (no paddings, 100svh; hidden on mobile) → [data-scroll-driven="stage"]
            (the whole screen: full width × 100svh — a row is 25% of the height, a column 12.5% of the width)
            + the circular-text section after the stage, combo .circular-text.is--overlay (absolute, inset 0, so it
            lies over the stage at the same size); its O and M paragraphs carry [data-scroll-driven="om"].
   Method (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt every frame):
   - Blocks are module squares that never change size and move only along the grid: down a column, right along
     a row. Each block's position is a plain object {x, y}, tweened by GSAP (GSAP docs: tween any numeric property
     of any object); the timeline's onUpdate rebuilds the geometry.
   - All blocks are ONE <path> (a square subpath each, same winding): overlapping blocks simply fill, and the
     browser anti-aliases the whole path at once, so touching blocks meet with no hairline seam.
   - Moves ease in and out (sine.inOut); timeline time = design units, and the pin is as long as the timeline in
     screen pixels (ScrollTrigger.create with the timeline as its animation; functional end, re-measured on refresh).
   - viewBox = the Figma frames (1360 × 680): the data is the design's coordinates. preserveAspectRatio="none"
     maps the grid onto the stage's real box, so the modules take the screen's proportions. */

const M = 170;                          // module, design units

/* Every block is one module square that keeps its size; it slides only along the grid — down a column or right
   along a row — except the "O", which leaves upwards with the scroll.
   Stages: 0 nothing (the blocks wait above the stage) · 1 line · 2 square left · 3 "OM" · then the "O" scrolls away up while the "M" (the right part) closes up
   (4: its first column moves one place right, under its top block) and fills (5: the square on the right).
   Each block: [row, columns] — at stage 1 every block sits in row 0 of its stage-2 column (stacked under the line)
   and slides down to its row; then it takes the next column of its list at each stage.
   O blocks: [row, [col 2, col 3]] (they leave up after 3). M blocks: [row, [col 2, col 3, col 4, col 5]].
   Where a row has fewer places than blocks, blocks share a place (they overlap, the shape is the same).
   Blocks only ever move right along their row. */
const BLOCKS = [
  [0, [0, 1]], [0, [1, 1]], [0, [2, 4, 4, 4]], [0, [3, 6, 6, 6]], [0, [2, 4, 4, 5]], [0, [3, 6, 6, 7]],
  [1, [0, 0]], [1, [1, 2]], [1, [2, 3, 4, 4]], [1, [3, 5, 5, 5]], [1, [3, 7, 7, 7]], [1, [3, 5, 5, 6]],
  [2, [0, 0]], [2, [1, 2]], [2, [2, 3, 4, 4]], [2, [3, 5, 5, 5]], [2, [3, 7, 7, 7]], [2, [3, 5, 5, 6]],
  [3, [0, 1]], [3, [1, 3, 4, 4]], [3, [2, 5, 5, 5]], [3, [3, 7, 7, 7]], [3, [2, 5, 5, 6]],
];
const EASE = 'sine.inOut';
const DOWN = { duration: 680, stagger: 40 };    // 1 → 2: the blocks slide down from above the stage (row -1), column by column
/* the moves along the rows: from the start of the move, each row's own [delay, duration] — a little different
   for every row, in no order, so the rows arrive one by one at random; a row moves as a whole, so its blocks
   never pass each other */
const MOVES = [
  { at: 680, rows: [[60, 560], [0, 620], [110, 520], [30, 600]] },    // 2 → 3: the square slides right into "OM"
];
/* the M closing up (3 → 4: its first column one place right; 4 → 5: the gaps fill), from the moment the "O" is
   off the screen: every block on its own — its own delay and duration, from a seeded random (the same every
   time). Blocks that move here never share a row segment, so they can't pass each other. */
const CLOSE = { delay: [0, 240], duration: [360, 560] };
const WIPE = { duration: 935, ease: 'sine.in' };   // experiment: a white circle grows from the square's centre and covers the stage
const OM = { at: 0.6, duration: 170, stagger: 40, ease: 'expo.out' };   // O and M rise at 60% of the circle's growth (the site's text reveal), tied to the scroll
const RINGS_AFTER = 100;   // the rings start right after the O and M are up (as when the circular text came on its own)
const OUT = 1360;   // the "O" starts leaving here (as "OM" is complete), at the scroll's own speed

import { circularTextReveal, REVEAL_SCROLL } from './circular-text.js';

const NS = 'http://www.w3.org/2000/svg';
const builds = new WeakMap();

/* Content stage (with the page transition): build the SVG, line hidden — no ScrollTrigger yet */
export function initScrollDriven(scope) {
  const wrap = scope.querySelector('[data-scroll-driven="wrap"]');
  const stage = wrap && wrap.querySelector('[data-scroll-driven="stage"]');
  if (!stage || getComputedStyle(wrap).display === 'none') return function() {};   // hidden on mobile: never built

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 1360 680');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.cssText = 'display:block;width:100%;height:100%;overflow:visible';   // the "O" is drawn above the stage as it leaves
  const path = document.createElementNS(NS, 'path');
  path.setAttribute('fill', 'currentColor');
  svg.appendChild(path);
  stage.appendChild(svg);
  /* the white circle (experiment): a white layer over the stage, shown through a CSS clip-path circle centred on
     the right square (75% across, 50% down) — its radius is set from GSAP every frame */
  const wipe = document.createElement('div');
  wipe.style.cssText = 'position:absolute;inset:0;background:#fff;pointer-events:none;clip-path:circle(0px at 75% 50%)';
  stage.appendChild(wipe);

  /* every block's position (top-left corner), design units; at first every block waits above the stage (row -1);
     lift = how far the "O" has gone up */
  const blocks = BLOCKS.map(([, cols]) => ({ x: cols[0] * M, y: -M, o: cols.length === 2 }));
  const lift = { v: 0 }, white = { v: 0 };   // white: the circle, 0 = a point, 1 = past the stage's farthest corner

  /* one path, a module square per block; blocks are cut at the stage's top edge (they slide in from above it),
     except the "O" once it leaves — it goes up past the stage */
  function render() {
    let d = '';
    for (let i = 0; i < blocks.length; i++) {
      const bl = blocks[i], leaving = bl.o && lift.v > 0;
      const y0 = leaving ? bl.y - lift.v : Math.max(bl.y, 0), y1 = (leaving ? bl.y - lift.v : bl.y) + M;
      if (y1 - y0 < 0.01) continue;
      d += 'M' + bl.x.toFixed(2) + ' ' + y0.toFixed(2) + 'H' + (bl.x + M).toFixed(2) + 'V' + y1.toFixed(2) + 'H' + bl.x.toFixed(2) + 'Z';
    }
    path.setAttribute('d', d);
    const r = white.v * Math.hypot(stage.clientWidth * 0.75, stage.clientHeight * 0.5) * 1.01;
    wipe.style.clipPath = 'circle(' + r.toFixed(1) + 'px at 75% 50%)';
  }
  render();
  /* O and M of the circular text (when its section sits inside this block): masked lines (SplitText, as the site's
     text reveal), hidden below their mask until the circle reaches them */
  const om = Array.from(wrap.querySelectorAll('[data-scroll-driven="om"]')).map(function(el) {
    return SplitText.create(el, { type: 'lines', mask: 'lines' });
  });
  const omLines = om.flatMap(function(split) { return split.lines; });
  gsap.set(omLines, { yPercent: 110 });

  builds.set(scope, { wrap: wrap, stage: stage, blocks: blocks, lift: lift, white: white, omLines: omLines, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(blocks.concat(lift, white, omLines));
    svg.remove();
    wipe.remove();
    om.forEach(function(split) { split.revert(); });
  };
}

/* Layout stage (after the transition, page in its real position): entrance trigger + pinned scroll timeline
   (GSAP docs: create pins when the layout is final) */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};

  /* the timeline: time = design units, one fromTo per block per move (explicit values, immediateRender off, so
     scrubbing back and forth is exact), then driven by its pinned ScrollTrigger */
  const tl = gsap.timeline({ paused: true, onUpdate: b.render });
  /* 1 → 2: down its column, from above the stage to its row; columns one after another, left to right */
  BLOCKS.forEach(function([row, cols], i) {
    tl.fromTo(b.blocks[i], { y: -M }, { y: row * M, duration: DOWN.duration - 3 * DOWN.stagger, ease: EASE, immediateRender: false }, cols[0] * DOWN.stagger);
  });
  /* 2 → 3 (MOVES): right along its row; a whole row moves together, each row with its own timing */
  MOVES.forEach(function(move, n) {
    BLOCKS.forEach(function([row, cols], i) {
      if (cols.length < n + 2 || cols[n] === cols[n + 1]) return;
      const [delay, duration] = move.rows[row];
      tl.fromTo(b.blocks[i], { x: cols[n] * M }, { x: cols[n + 1] * M, duration: duration, ease: EASE, immediateRender: false }, move.at + delay);
    });
  });
  /* the M closing up (3 → 4 → 5), on its own timeline placed where the "O" is gone: every block with its own timing */
  const closeUp = gsap.timeline();
  const seq = [   // a fixed shuffled sequence (the same timing on every visit)
    0.62, 0.15, 0.88, 0.41, 0.07, 0.73, 0.33, 0.95, 0.24, 0.57, 0.81, 0.11, 0.49, 0.68, 0.02, 0.36];
  let k = 0;
  const pick = ([a, z]) => a + (z - a) * seq[k++ % seq.length];
  BLOCKS.forEach(function([, cols], i) {
    [1, 2].forEach(function(n) {
      if (cols.length < n + 2 || cols[n] === cols[n + 1]) return;
      closeUp.fromTo(b.blocks[i], { x: cols[n] * M }, { x: cols[n + 1] * M, duration: pick(CLOSE.duration), ease: EASE, immediateRender: false }, pick(CLOSE.delay));
    });
  });

  /* the "O" leaves up at the scroll's own speed (ease none, 1 unit of time = 1 unit of distance) until it is past
     the top of the screen; then the M closes up. The distance depends on the space above the pinned stage, so both
     are placed again whenever ScrollTrigger re-measures (refreshInit, GSAP docs), before the pin's end is worked out */
  let out, circle, omIn, st;
  const rings = circularTextReveal(scope, b.wrap);
  function makeOut() {
    const box = b.stage.getBoundingClientRect(), sx = box.width / 1360, sy = box.height / 680;   // screen px per unit
    const distance = 4 * M + Math.max(0, window.innerHeight - box.height) / sy + 20;   // grid height + space above
    const duration = distance * sy / sx;
    if (out) tl.remove(out);
    tl.remove(closeUp);
    out = tl.fromTo(b.lift, { v: 0 }, { v: distance, duration: duration, ease: 'none', immediateRender: false }, OUT);
    tl.add(closeUp, OUT + duration);
    if (circle) tl.remove(circle);
    const circleAt = OUT + duration + closeUp.duration();
    circle = tl.fromTo(b.white, { v: 0 }, { v: 1, duration: WIPE.duration, ease: WIPE.ease, immediateRender: false }, circleAt);
    /* the O and M: they rise out of their masks (yPercent 110 → 0) as part of the timeline, tied to the scroll like
       the circle — so however fast the scroll goes back, they leave with the circle, never after it */
    if (omIn) tl.remove(omIn);
    if (b.omLines.length) omIn = tl.fromTo(b.omLines, { yPercent: 110 }, { yPercent: 0, duration: OM.duration, stagger: OM.stagger, ease: OM.ease, immediateRender: false }, circleAt + OM.at * WIPE.duration);
    /* then the circular text's rings, as long in scroll as on their own (REVEAL_SCROLL screens) */
    if (rings) {
      tl.remove(rings);
      rings.duration(REVEAL_SCROLL * window.innerHeight / sx);   // sets its timeScale (GSAP docs)
      tl.add(rings, circleAt + OM.at * WIPE.duration + RINGS_AFTER);
    }
  }
  makeOut();
  ScrollTrigger.addEventListener('refreshInit', makeOut);

  st = ScrollTrigger.create({
    animation: tl,
    trigger: b.wrap,
    start: 'top top',         // the stage is the whole screen
    end: () => '+=' + tl.duration() * (b.stage.clientWidth / 1360),   // 1 screen px of movement per px of scroll
    pin: true,
    scrub: true,
  });

  return function() {
    ScrollTrigger.removeEventListener('refreshInit', makeOut);
    st.kill(true);
    tl.kill();
  };
}

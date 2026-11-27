/* ———— Scroll-driven block (Research) ———— */
/* An 8 × 4 module grid (module 170 design units). The black line (top-left, half the width — always on screen,
   it continues the image above) slides down into a square, the square's rows slide right into the "OM" figure,
   then the "O" scrolls away up and, once it is off the screen, the "M" closes up into a square on the right;
   then (experiment) a white circle grows from that square's centre until the stage is white; inside it the O and M
   appear and the circular text's rings reveal (its section sits inside this block, centred on the same point) —
   one pin, one scrubbed timeline.
   Webflow: [data-scroll-driven="wrap"] (no paddings, 100svh; on every screen) → [data-scroll-driven="stage"]
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
   Stages: 0 nothing (the blocks wait above the stage; they slide in as the stage reaches the top) · 1 line · 2 square left · 3 "OM" · then the "O" scrolls away up while the "M" (the right part) closes up
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
/* where the timeline starts (stage top on the screen): desktop — while the photo above still shows its last 25%;
   tablet and phone — as soon as the stage comes in at the bottom, so the blocks come out of the photo all the way up */
const ENTER = { desktop: 0.25, mobile: 1 };   // the stage top's place on the screen (share of its height, from the top)
const DOWN = { duration: 510, stagger: 40 };    // 0 → 2: the columns slide in from above and unfold (after the scroll before the pin)
/* the moves along the rows: from the start of the move, each row's own [delay, duration] — a little different
   for every row, in no order, so the rows arrive one by one at random; a row moves as a whole, so its blocks
   never pass each other */
const MOVES = [
  { at: 510, rows: [[60, 560], [0, 620], [110, 520], [30, 600]] },    // 2 → 3: the square slides right into "OM"
  { at: 0, rows: [[20, 500], [80, 440], [0, 520], [50, 470]] },       // 3 → 4: the M's first column, one place right
  { at: 0, rows: [[20, 500], [80, 440], [0, 520], [50, 470]] },       // 4 → 5: at the same time, the gaps fill
];   // 3 → 4 and 4 → 5 run together, row by row, from the moment the "O" is off the screen
const WIPE = { duration: 935, ease: 'sine.in' };   // experiment: a white circle grows from the square's centre and covers the stage
const OM = { at: 0.6, duration: 170, stagger: 40, ease: 'expo.out' };   // O and M rise at 60% of the circle's growth (the site's text reveal), tied to the scroll
const RINGS_AFTER = 100;   // the rings start right after the O and M are up (as when the circular text came on its own)
const OUT = 1190;   // "OM" is complete here: then the ending (desktop: the "O" leaves at the scroll's own speed)

/* The ending depends on the screen (gsap.matchMedia, GSAP docs):
   desktop (≥ 992px) — the "O" scrolls away up, the "M" closes into the rectangle on the right, the circle grows
   from its centre; tablet and phone (≤ 991px) — nothing leaves: the "OM" fills the whole grid into one black
   block, every gap filled by a block sliding one module along its row out of its neighbour, then the circle grows.
   FILL: those extra blocks — [the block they come out of, columns to move (−1 left, +1 right)]. They lie under
   that block until then, and are drawn only on tablet and phone. */
const SCREENS = { desktop: '(min-width: 992px)', mobile: '(max-width: 991px)' };
const FILL = [
  [0, -1], [1, +1], [2, -1], [4, +1], [5, +1],     // row 1: cells 1, 3, 4, 6, 8
  [6, +1], [8, +1], [9, +1],                       // row 2: cells 2, 5, 7
  [12, +1], [14, +1], [15, +1],                    // row 3: cells 2, 5, 7
  [18, -1], [18, +1], [19, +1], [20, +1],          // row 4: cells 1, 3, 5, 7
];
const FILL_ROWS = [[20, 500], [80, 440], [0, 520], [50, 470]];   // each row's [delay, duration] for the fill

import { circularTextReveal, REVEAL_SCROLL } from './circular-text.js';

const NS = 'http://www.w3.org/2000/svg';
const builds = new WeakMap();

/* Content stage (with the page transition): build the SVG, line hidden — no ScrollTrigger yet */
export function initScrollDriven(scope) {
  const wrap = scope.querySelector('[data-scroll-driven="wrap"]');
  const stage = wrap && wrap.querySelector('[data-scroll-driven="stage"]');
  if (!stage || getComputedStyle(wrap).display === 'none') return function() {};   // hidden in Webflow: never built

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
  /* the fill blocks (tablet and phone): each follows its block, offset by dx along the row (0 until the fill) */
  const fills = FILL.map(([parent]) => ({ parent: blocks[parent], dx: 0 }));
  const view = { full: false, cx: 0.75, cy: 0.5 };   // full: draw the fill blocks; cx, cy: the circle's centre (share of the stage)
  const lift = { v: 0 }, white = { v: 0 };   // white: the circle, 0 = a point, 1 = past the stage's farthest corner

  /* one path, a module square per block; blocks are cut at the stage's top edge (they slide in from above it),
     except the "O" once it leaves — it goes up past the stage */
  function render() {
    let d = '';
    const square = function(x, top, bottom) {
      if (bottom - top < 0.01) return;
      d += 'M' + x.toFixed(2) + ' ' + top.toFixed(2) + 'H' + (x + M).toFixed(2) + 'V' + bottom.toFixed(2) + 'H' + x.toFixed(2) + 'Z';
    };
    for (let i = 0; i < blocks.length; i++) {
      const bl = blocks[i], leaving = bl.o && lift.v > 0;
      square(bl.x, leaving ? bl.y - lift.v : Math.max(bl.y, 0), (leaving ? bl.y - lift.v : bl.y) + M);
    }
    if (view.full) fills.forEach(function(f) { square(f.parent.x + f.dx, Math.max(f.parent.y, 0), f.parent.y + M); });
    path.setAttribute('d', d);
    const w = stage.clientWidth, h = stage.clientHeight;
    const r = white.v * Math.hypot(Math.max(view.cx, 1 - view.cx) * w, Math.max(view.cy, 1 - view.cy) * h) * 1.01;
    wipe.style.clipPath = 'circle(' + r.toFixed(1) + 'px at ' + (view.cx * 100).toFixed(2) + '% ' + (view.cy * 100).toFixed(2) + '%)';
  }
  render();
  /* O and M of the circular text (when its section sits inside this block): masked lines (SplitText, as the site's
     text reveal), hidden below their mask until the circle reaches them */
  const om = Array.from(wrap.querySelectorAll('[data-scroll-driven="om"]')).map(function(el) {
    return SplitText.create(el, { type: 'lines', mask: 'lines' });
  });
  const omLines = om.flatMap(function(split) { return split.lines; });
  gsap.set(omLines, { yPercent: 110 });

  builds.set(scope, { wrap: wrap, stage: stage, blocks: blocks, fills: fills, view: view, lift: lift, white: white, omLines: omLines, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(blocks.concat(fills, lift, white, omLines));
    svg.remove();
    wipe.remove();
    om.forEach(function(split) { split.revert(); });
  };
}

/* Layout stage (after the transition, page in its real position): the scroll timeline and its two ScrollTriggers
   (GSAP docs: create pins when the layout is final), made per screen with gsap.matchMedia (reverted and made again
   when the screen crosses 992px). The timeline starts before the pin — while the photo above is still on screen
   (stage top at ENTER) — so the columns slide in and unfold in one move, no stop when the pin starts: one
   ScrollTrigger pins the block (from 'top top'), another scrubs the timeline (from ENTER); both ends come from the
   same timeline, so they finish together. */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};
  const rings = circularTextReveal(scope, b.wrap);
  const mm = gsap.matchMedia();

  mm.add(SCREENS, function(context) {
    const desktop = context.conditions.desktop;
    b.view.full = !desktop;
    const enter = desktop ? ENTER.desktop : ENTER.mobile;
    /* the timeline: time = design units, one fromTo per block per move (explicit values, immediateRender off, so
       scrubbing back and forth is exact) */
    const tl = gsap.timeline({ paused: true, onUpdate: b.render });
    let pre = 0, s = 1;   // pre: the scroll before the pin, in units; s: screen px of scroll per unit

    /* (re)built whenever ScrollTrigger re-measures (refreshInit, GSAP docs): several lengths depend on the screen */
    function build() {
      const box = b.stage.getBoundingClientRect(), sx = box.width / 1360, sy = box.height / 680;   // px per unit
      /* the pace: by the width on desktop; by the height on tablet and phone (a tall, narrow screen would
         otherwise run through the animation much faster) */
      s = desktop ? sx : sy;
      pre = enter * window.innerHeight / s;   // the scroll from ENTER to the pin, in units
      /* the circle grows from the circular text's centre (on desktop that is the right rectangle's centre) */
      const ring = b.wrap.querySelector('[data-circular-text="svg"]');
      if (ring) {
        const r = ring.getBoundingClientRect();
        b.view.cx = (r.left + r.width / 2 - box.left) / box.width;
        b.view.cy = (r.top + r.height / 2 - box.top) / box.height;
      }
      tl.clear();

      /* 0 → 2: each column slides in from above the stage and unfolds down to its rows — one move per block,
         columns one after another, left to right */
      BLOCKS.forEach(function([row, cols], i) {
        tl.fromTo(b.blocks[i], { y: -M }, { y: row * M, duration: pre + DOWN.duration - 3 * DOWN.stagger, ease: EASE, immediateRender: false }, cols[0] * DOWN.stagger);
      });

      /* the moves along the rows (MOVES): right along its row; a whole row moves together, each row with its own
         timing. 2 → 3 ("OM") here; the M's moves (3 → 4 → 5, desktop) on their own timeline, after the "O" is gone */
      const closeUp = gsap.timeline();
      MOVES.forEach(function(move, n) {
        if (n && !desktop) return;
        BLOCKS.forEach(function([row, cols], i) {
          if (cols.length < n + 2 || cols[n] === cols[n + 1]) return;
          const [delay, duration] = move.rows[row];
          (n ? closeUp : tl).fromTo(b.blocks[i], { x: cols[n] * M }, { x: cols[n + 1] * M, duration: duration, ease: EASE, immediateRender: false }, (n ? 0 : pre) + move.at + delay);
        });
      });

      let circleAt;
      if (desktop) {
        /* the "O" leaves up at the scroll's own speed (ease none, 1 unit of time = 1 unit of distance) until it is
           past the top of the screen; then the M closes up */
        const distance = 4 * M + Math.max(0, window.innerHeight - box.height) / sy + 20;   // grid height + space above
        const outFor = distance * sy / sx;
        tl.fromTo(b.lift, { v: 0 }, { v: distance, duration: outFor, ease: 'none', immediateRender: false }, pre + OUT);
        tl.add(closeUp, pre + OUT + outFor);
        circleAt = pre + OUT + outFor + closeUp.duration();
      } else {
        /* the fill: every extra block slides one module out of its block, each row with its own timing */
        b.lift.v = 0;
        FILL.forEach(function([parent, step], k) {
          const [delay, duration] = FILL_ROWS[BLOCKS[parent][0]];
          tl.fromTo(b.fills[k], { dx: 0 }, { dx: step * M, duration: duration, ease: EASE, immediateRender: false }, pre + OUT + delay);
        });
        circleAt = pre + OUT + Math.max.apply(null, FILL_ROWS.map(function([d, t]) { return d + t; }));
      }

      /* the white circle, then the O and M rise out of their masks (yPercent 110 → 0), tied to the scroll like the
         circle — however fast the scroll goes back, they leave with it */
      tl.fromTo(b.white, { v: 0 }, { v: 1, duration: WIPE.duration, ease: WIPE.ease, immediateRender: false }, circleAt);
      if (b.omLines.length) tl.fromTo(b.omLines, { yPercent: 110 }, { yPercent: 0, duration: OM.duration, stagger: OM.stagger, ease: OM.ease, immediateRender: false }, circleAt + OM.at * WIPE.duration);

      /* then the circular text's rings, as long in scroll as on their own (REVEAL_SCROLL screens) */
      if (rings) {
        rings.duration(REVEAL_SCROLL * window.innerHeight / s);   // sets its timeScale (GSAP docs)
        tl.add(rings, circleAt + OM.at * WIPE.duration + RINGS_AFTER);
      }
    }
    build();
    ScrollTrigger.addEventListener('refreshInit', build);

    /* the pin: from the stage at the top of the screen to the timeline's end */
    ScrollTrigger.create({
      trigger: b.wrap,
      start: 'top top',         // the stage is the whole screen
      end: () => '+=' + (tl.duration() - pre) * s,
      pin: true,
    });
    /* the scrub: from the stage top at ENTER of the screen (before the pin) to the same end */
    ScrollTrigger.create({
      animation: tl,
      trigger: b.wrap,
      start: 'top ' + enter * 100 + '%',   // 'top 25%' / 'top 100%'
      end: () => '+=' + tl.duration() * s,   // 1 screen px of movement per px of scroll (per unit × s)
      scrub: true,
    });

    /* matchMedia reverts the ScrollTriggers and tweens made here by itself; this undoes the rest */
    return function() {
      ScrollTrigger.removeEventListener('refreshInit', build);
      tl.kill();
    };
  });

  return function() { mm.revert(); };
}

/* ———— Scroll-driven block (Research) ———— */
/* An 8 × 4 module grid (module 170 design units). The black line (top-left, half the width — always on screen,
   it continues the image above) slides down into a square, the square's rows slide right into the "OH" figure,
   and the rows slide on into a square on the right — while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (no paddings, height = the stage; hidden on mobile)
            → [data-scroll-driven="stage"] (full width; 2:1 unless the screen is too low, then max-height wins and
            the modules get a little wider than tall).
   Method (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt every frame):
   - Blocks are module squares that never change size and move only along the grid: down a column, right along
     a row. Each block's position is a plain object {x, y}, tweened by GSAP (GSAP docs: tween any numeric property
     of any object); the timeline's onUpdate rebuilds the geometry.
   - All blocks are ONE <path> (a square subpath each, same winding): overlapping blocks simply fill, and the
     browser anti-aliases the whole path at once, so touching blocks meet with no hairline seam.
   - Moves ease in and out (sine.inOut); timeline time = design units, and the pin is as long as the timeline in
     screen pixels (ScrollTrigger.create with the timeline as its animation; functional end, re-measured on refresh).
   - viewBox = the Figma frames (1360 × 680): the data is the design's coordinates. preserveAspectRatio="none"
     maps the grid onto the stage's real box, so on a low screen the modules widen instead of side margins appearing. */

const M = 170;                          // module, design units

/* Every block is one module square that keeps its size; it only ever slides along the grid — down a column or
   right along a row. Rows of a stage, as columns: 1 line · 2 square left · 3 "OH" · 4 square right.
   Each block: [row, [column at 2, column at 3, column at 4]] — at stage 1 every block sits in row 0 of its
   stage-2 column (the blocks of a column stacked under the line), then slides down to its row.
   Where a row has fewer places than blocks, blocks share a place (they overlap, the shape is the same);
   so 18 blocks make 4, 16, 17 and 16 squares. Columns only grow left to right (blocks only move right). */
const BLOCKS = [
  [0, [0, 1, 4]], [0, [1, 1, 5]], [0, [2, 4, 6]], [0, [3, 6, 7]],
  [1, [0, 0, 4]], [1, [1, 2, 5]], [1, [2, 3, 6]], [1, [3, 5, 7]], [1, [3, 7, 7]],
  [2, [0, 0, 4]], [2, [1, 2, 5]], [2, [2, 3, 6]], [2, [3, 5, 7]], [2, [3, 7, 7]],
  [3, [0, 1, 4]], [3, [1, 3, 5]], [3, [2, 5, 6]], [3, [3, 7, 7]],
];
const DOWN = { duration: 510, stagger: 40 };    // 1 → 2: the blocks slide down out of the line, column by column
const ACROSS = { duration: 680, stagger: 60 };  // 2 → 3 and 3 → 4: each row slides right, top row first

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
  svg.style.cssText = 'display:block;width:100%;height:100%';
  const path = document.createElementNS(NS, 'path');
  path.setAttribute('fill', 'currentColor');
  svg.appendChild(path);
  stage.appendChild(svg);

  /* every block's position (top-left corner), design units; stage 1: the line, always on screen */
  const blocks = BLOCKS.map(([, cols]) => ({ x: cols[0] * M, y: 0 }));

  /* one path, a module square per block */
  function render() {
    let d = '';
    for (let i = 0; i < blocks.length; i++) {
      const x0 = blocks[i].x.toFixed(2), y0 = blocks[i].y.toFixed(2);
      d += 'M' + x0 + ' ' + y0 + 'h' + M + 'v' + M + 'h-' + M + 'Z';
    }
    path.setAttribute('d', d);
  }
  render();
  builds.set(scope, { wrap: wrap, stage: stage, blocks: blocks, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(blocks);
    svg.remove();
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
  const ease = 'sine.inOut';
  /* 1 → 2: down its column, from row 0 to its row; columns one after another, left to right */
  BLOCKS.forEach(function([row, cols], i) {
    if (!row) return;
    tl.fromTo(b.blocks[i], { y: 0 }, { y: row * M, duration: DOWN.duration - 3 * DOWN.stagger, ease: ease, immediateRender: false }, cols[0] * DOWN.stagger);
  });
  /* 2 → 3 and 3 → 4: right along its row; a whole row moves together, rows one after another, top first */
  [0, 1].forEach(function(n) {
    const at = DOWN.duration + n * ACROSS.duration;
    BLOCKS.forEach(function([row, cols], i) {
      if (cols[n] === cols[n + 1]) return;
      tl.fromTo(b.blocks[i], { x: cols[n] * M }, { x: cols[n + 1] * M, duration: ACROSS.duration - 3 * ACROSS.stagger, ease: ease, immediateRender: false }, at + row * ACROSS.stagger);
    });
  });

  const st = ScrollTrigger.create({
    animation: tl,
    trigger: b.wrap,
    start: 'top top',
    end: () => '+=' + tl.duration() * (b.stage.clientWidth / 1360),   // 1 screen px of movement per px of scroll
    pin: true,
    scrub: true,
  });

  return function() {
    st.kill(true);
    tl.kill();
  };
}

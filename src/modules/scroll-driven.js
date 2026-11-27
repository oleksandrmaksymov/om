/* ———— Scroll-driven block (Research) ———— */
/* An 8 × 4 module grid (module 170 design units). Four squares in a line (top-left, half the width) grow down into
   a black square, the square stretches to the right into the "OH" figure, and the figure gathers into a square on
   the right — while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh; padding 58px top = 20px under the 38px nav, 20px bottom;
            hidden on mobile) → [data-scroll-driven="stage"] (full width; 2:1 unless the screen is too low, then
            max-height wins and the modules get a little wider than tall).
   Method (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt every frame):
   - The figure is 9 rectangles ("pieces"): one per column of the "OH" figure (column 1 has two: its top and its
     bottom). Each piece is a plain object {x, y, w, h} in design units, tweened by GSAP from stage to stage
     (GSAP docs: tween any numeric property of any object); the timeline's onUpdate rebuilds the geometry.
     Where a stage has fewer shapes than pieces, the spare pieces sit inside a neighbour or have zero width,
     so they grow out of the shape instead of popping in.
   - All pieces are ONE <path> (a rectangle subpath each, same winding): overlaps simply fill, and the browser
     anti-aliases the whole path at once, so touching pieces meet with no hairline seam.
   - Each stage change is one tween per piece (sine.inOut), the pieces setting off a little after each other from
     left to right; timeline time = design units, and the pin is as long as the timeline in screen pixels
     (ScrollTrigger.create with the timeline as its animation; functional end, re-measured on refresh).
   - viewBox = the Figma frames (1360 × 680): the stage data is the design's coordinates. preserveAspectRatio="none"
     maps the grid onto the stage's real box, so on a low screen the modules widen instead of side margins appearing.
   - Entrance: the first line is revealed left to right like the Practice block (highlight-marker: 0.8s expo.out),
     once the stage top reaches 60% of the screen; scrolling back up hides it again, right to left
     (toggleActions 'play none none reverse'). */

const M = 170;                          // module, design units
const ENTER = { duration: 0.8, ease: 'expo.out', start: 'top 60%' };
const LINE = 4 * M;                     // the first line: four squares, half the width

/* Each piece's rectangle per stage, in modules: [column, row, width, height].
   Pieces: 0 col 0 · 1 col 1 top · 2 col 1 bottom · 3 col 2 · 4 col 3 · 5 col 4 · 6 col 5 · 7 col 6 · 8 col 7 (in "OH").
   1 line · 2 square left · 3 "OH" · 4 square right. */
const STAGES = [
  [[0,0,1,1],[1,0,1,1],[1,0,1,1],[2,0,1,1],[3,0,1,1],[4,0,0,1],[4,0,0,1],[4,0,0,1],[4,0,0,1]],
  [[0,0,1,4],[1,0,1,2],[1,2,1,2],[2,0,1,4],[3,0,1,4],[4,0,0,4],[4,0,0,4],[4,0,0,4],[4,0,0,4]],
  [[0,1,1,2],[1,0,1,1],[1,3,1,1],[2,1,1,2],[3,1,1,3],[4,0,1,1],[5,1,1,3],[6,0,1,1],[7,1,1,3]],
  [[4,0,1,4],[5,0,1,2],[5,2,1,2],[6,0,1,4],[7,0,1,4],[4,0,1,4],[5,0,1,4],[6,0,1,4],[7,0,1,4]],
];
const MOVES = [
  { duration: 510, stagger: 30 },       // 1 → 2: the line grows down into the square
  { duration: 680, stagger: 30 },       // 2 → 3: the square stretches right into "OH"
  { duration: 680, stagger: 30 },       // 3 → 4: "OH" gathers into the square on the right
];
const box = ([c, r, w, h]) => ({ x: c * M, y: r * M, w: w * M, h: h * M });

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

  /* every piece's rectangle, and how much of the first line is revealed, left to right (entrance) */
  const pieces = STAGES[0].map(box);
  const reveal = { v: 0 };

  /* one path, a rectangle per piece; during the entrance only the revealed part (left of reveal × the line) */
  function render() {
    const edge = reveal.v >= 1 ? Infinity : reveal.v * LINE;
    let d = '';
    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i], right = Math.min(p.x + p.w, edge);
      if (right - p.x < 0.01 || p.h < 0.01) continue;
      const x0 = p.x.toFixed(2), x1 = right.toFixed(2);
      d += 'M' + x0 + ' ' + p.y.toFixed(2) + 'H' + x1 + 'V' + (p.y + p.h).toFixed(2) + 'H' + x0 + 'Z';
    }
    path.setAttribute('d', d);
  }
  render();
  builds.set(scope, { wrap: wrap, stage: stage, pieces: pieces, reveal: reveal, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(pieces.concat(reveal));
    svg.remove();
  };
}

/* Layout stage (after the transition, page in its real position): entrance trigger + pinned scroll timeline
   (GSAP docs: create pins when the layout is final) */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};

  /* entrance: the line revealed left to right; hidden again right to left when scrolling back up */
  const entrance = gsap.to(b.reveal, {
    v: 1,
    duration: ENTER.duration,
    ease: ENTER.ease,
    paused: true,
    onUpdate: b.render,
  });
  const enterTrigger = ScrollTrigger.create({
    trigger: b.stage,
    start: ENTER.start,
    animation: entrance,
    toggleActions: 'play none none reverse',
  });

  /* the timeline: time = design units, one fromTo per piece per stage change (explicit values, immediateRender
     off, so scrubbing back and forth is exact), then driven by its pinned ScrollTrigger */
  const tl = gsap.timeline({ paused: true, onUpdate: b.render });
  let at = 0;
  MOVES.forEach(function(move, n) {
    b.pieces.forEach(function(p, i) {
      const from = box(STAGES[n][i]), to = box(STAGES[n + 1][i]);
      const delay = STAGES[n + 1][i][0] * move.stagger;   // left to right
      tl.fromTo(p, from, { ...to, duration: move.duration - 7 * move.stagger, ease: 'sine.inOut', immediateRender: false }, at + delay);
    });
    at += move.duration;
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
    enterTrigger.kill();
    entrance.kill();
    st.kill(true);
    tl.kill();
  };
}

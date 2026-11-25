/* ———— Scroll-driven block (Research) ———— */
/* Four squares on an 8 × 4 module grid break into 20 strips (a fifth of a module wide) and fall,
   stage by stage, from the top-left to the bottom-right while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh, hidden on mobile like circular-text)
            → [data-scroll-driven="stage"] (2:1). The SVG inside the stage is built here.
   Method — as on tresmarescapital.com (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt every frame):
   - GSAP tweens plain numbers — each strip's four edges (x0, x1, y0, y1) in design units — and the timeline's
     onUpdate rebuilds the geometry from them (GSAP docs: tween any numeric property of any object; onUpdate).
   - All 20 strips are ONE <path> (a rectangle subpath each). The browser anti-aliases one path as a whole,
     so strips side by side meet with no hairline seam — a square is just its five strips touching.
   - A strip doesn't slide as a block: its leading edge moves first and the trailing edge follows a moment later,
     so it stretches toward where it goes and draws itself in — the elastic feel of their red shapes (clearly on the
     short falls, barely on the long moves across).
   - viewBox = the Figma frames (1360 × 680; module 170, strip 34 × 170): the stage data is the design's coordinates.
   - Entrance: like the Practice block (highlight-marker: 0.8s expo.out, 0.08s stagger, at 'top 90%', once) —
     the four squares rise into the first row, each as one block.
   - Every strip only ever moves down; moves follow the grid lines. */

const SW = 34, SH = 170;                // strip size, design units
const PIN_DISTANCE = '600%';            // how long the block is held (share of the screen height)
const EDGE = { duration: 1, ease: 'power2.inOut' };
const TRAIL = { y: 0.3, x: 0.06 };      // the trailing edge starts this much later: a clear stretch on the short falls,
                                        // barely any on the long moves across (a strip must not smear into a wide bar)
const HOLD = 0.2;
const ENTER = { duration: 0.8, ease: 'expo.out', stagger: 0.08, start: 'top 90%' };   // = Practice (highlight-marker)

/* Each strip's [column, row]: 40 strip columns (8 modules × 5), 4 rows. Strip i = strip floor(i / 4) of square i % 4.
   1 line · 2 checker · 3 strips · 4 spread · 5 strips right · 6 checker right · 7 line right.
   From the Figma frames, with three rules: every strip only moves down; the strips never change their left-to-right
   order (the first stays first); no two strips stand side by side in a row (they would read as one wide strip).
   So: four strips of stage 3 sit in another row than in Figma; stage 4 spreads the strips across the full width in
   their order with random gaps; stage 5 puts them, in order, in the 20 columns of the right half — each right square
   is built from the strips of the same left square; stages 6 and 7 keep each strip's column. */
const STAGES = [[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,1],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[31,1],[2,1],[13,1],[20,1],[33,3],[4,2],[15,2],[25,2],[35,2],[5,0],[16,1],[27,0],[37,3],[6,2],[17,3],[29,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,1],[31,1],[36,3],[22,2],[27,3],[32,2],[37,2],[23,0],[28,1],[33,1],[38,3],[24,2],[29,3],[34,2],[39,2]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]];

const NS = 'http://www.w3.org/2000/svg';
const builds = new WeakMap();

/* Content stage (with the page transition): build the SVG, squares hidden — no ScrollTrigger yet */
export function initScrollDriven(scope) {
  const wrap = scope.querySelector('[data-scroll-driven="wrap"]');
  const stage = wrap && wrap.querySelector('[data-scroll-driven="stage"]');
  if (!stage || getComputedStyle(wrap).display === 'none') return function() {};   // hidden on mobile: never built

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 1360 680');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'display:block;width:100%;height:100%';
  const path = document.createElementNS(NS, 'path');
  path.setAttribute('fill', 'currentColor');
  svg.appendChild(path);
  stage.appendChild(svg);

  /* the edges of every strip, and how far each square has risen in (entrance) */
  const edges = STAGES[0].map(([c, r]) => ({ x0: c * SW, x1: (c + 1) * SW, y0: r * SH, y1: (r + 1) * SH }));
  const rise = [0, 1, 2, 3].map(() => ({ v: 0 }));

  /* one path, a rectangle per strip; before / during the entrance a strip shows only the risen part of its square */
  function render() {
    let d = '';
    for (let i = 0; i < edges.length; i++) {
      const e = edges[i], top = e.y1 - (e.y1 - e.y0) * rise[i % 4].v;
      if (e.y1 - top < 0.01) continue;
      d += 'M' + e.x0.toFixed(2) + ' ' + top.toFixed(2) + 'H' + e.x1.toFixed(2) + 'V' + e.y1.toFixed(2) + 'H' + e.x0.toFixed(2) + 'Z';
    }
    path.setAttribute('d', d);
  }
  render();
  builds.set(scope, { wrap: wrap, stage: stage, edges: edges, rise: rise, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(edges.concat(rise));
    svg.remove();
  };
}

/* Layout stage (after the transition, page in its real position): entrance trigger + pinned scroll timeline
   (GSAP docs: create pins when the layout is final) */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};

  /* entrance: square by square */
  const entrance = gsap.to(b.rise, {
    v: 1,
    duration: ENTER.duration,
    ease: ENTER.ease,
    stagger: ENTER.stagger,
    paused: true,
    onUpdate: b.render,
  });
  const enterTrigger = ScrollTrigger.create({
    trigger: b.stage,
    start: ENTER.start,
    once: true,
    onEnter: function() { entrance.play(); },
  });

  const tl = gsap.timeline({
    onUpdate: b.render,
    scrollTrigger: {
      trigger: b.wrap,
      start: 'top top',
      end: '+=' + PIN_DISTANCE,
      pin: true,
      scrub: true,
    },
  });

  /* where every strip stands while the timeline is built */
  const pos = STAGES[0].map((p) => p.slice());

  /* Moves every strip to stage n along one axis, starting at `at` (+ its delay). Leading edge first, trailing edge
     TRAIL later; explicit fromTo values (immediateRender off), so scrubbing back and forth is exact. */
  function move(n, axis, at, delay) {
    const size = axis ? SH : SW, k0 = axis ? 'y0' : 'x0', k1 = axis ? 'y1' : 'x1', lag = axis ? TRAIL.y : TRAIL.x;
    let end = at;
    b.edges.forEach(function(e, i) {
      const from = pos[i][axis] * size, to = STAGES[n][i][axis] * size;
      if (from === to) return;
      const fwd = to > from, lead = fwd ? k1 : k0, trail = fwd ? k0 : k1;
      const t = at + delay(i);
      tl.fromTo(e, { [lead]: from + (fwd ? size : 0) }, { [lead]: to + (fwd ? size : 0), duration: EDGE.duration, ease: EDGE.ease, immediateRender: false }, t);
      tl.fromTo(e, { [trail]: from + (fwd ? 0 : size) }, { [trail]: to + (fwd ? 0 : size), duration: EDGE.duration, ease: EDGE.ease, immediateRender: false }, t + lag);
      pos[i][axis] = STAGES[n][i][axis];
      end = Math.max(end, t + lag + EDGE.duration);
    });
    return end + HOLD;
  }
  /* squares move square by square, each with its five strips together. Free strips start in a small wave from the
     right (the side they move to), so the right ones clear the way and no strip overtakes another. */
  const bySquare = (n) => (i) => Math.floor(STAGES[n][i][0] / 5) * 0.12;
  const rank = STAGES[2].map((p) => p[0]);   // left-to-right order, the same at every stage
  const wave = () => (i) => (19 - rank[i]) * 0.015;

  let t = HOLD;
  t = move(1, 1, t, bySquare(0));     // 1 → 2: squares 1 and 3 step down
  t = move(2, 1, t, bySquare(1));     // 2 → 3: the squares split into strips and fall
  t = move(3, 0, t, wave());          // 3 → 4: spread across the width
  t = move(4, 0, t - HOLD, wave());   // 4 → 5: across the row …
  t = move(4, 1, t - HOLD, wave());   //        … then down the column
  t = move(5, 1, t, bySquare(4));     // 5 → 6: the strips gather into the right squares
  t = move(6, 1, t, bySquare(5));     // 6 → 7: squares 0 and 2 step down into the last row
  tl.to({}, { duration: 0 }, t);      // keep the last hold

  return function() {
    enterTrigger.kill();
    entrance.kill();
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
  };
}

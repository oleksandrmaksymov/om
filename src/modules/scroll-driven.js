/* ———— Scroll-driven block (Research) ———— */
/* Four squares on an 8 × 4 module grid break into 20 strips (a fifth of a module wide) and fall,
   stage by stage, from the top-left to the bottom-right while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh, hidden on mobile like circular-text)
            → [data-scroll-driven="stage"] (2:1). The SVG inside the stage is built here.
   - One SVG, viewBox = the Figma frames (1360 × 680; module 170, strip 34 × 170), so the stage data is the
     design's own coordinates. Edges stay anti-aliased, so everything glides at sub-pixel positions.
   - A whole square is one rect, not five strips side by side (anti-aliased neighbours would show hairline
     seams): 4 squares for stages 1–2, 4 for stages 6–7, 20 strips in between. The timeline swaps them with
     tl.set (autoAlpha) at the moment a square splits or the strips have gathered, where both look the same.
   - Entrance: like the Practice block (highlight-marker: 0.8s expo.out, 0.08s stagger, at 'top 90%', once) —
     the four squares rise into the first row, each as one block (each rect grows: attr y / height).
   - Scroll: ScrollTrigger pin + scrub, created after the page transition (layout stage). One timeline,
     function-based x / y per move. scrub: 0.6 lets the shapes catch up with the scroll over 0.6s (GSAP docs),
     smoothing uneven wheel / trackpad steps; gentle sine easing and a long pin keep the motion calm.
     Every strip only ever moves down; moves follow the grid lines. */

const SW = 34, SH = 170;                // strip size, design units
const PIN_DISTANCE = '600%';            // how long the block is held (share of the screen height)
const SCRUB = 0.6;                      // seconds the shapes take to catch up with the scroll
const MOVE = 1, HOLD = 0.15, EASE = 'sine.inOut';
const ENTER = { duration: 0.8, ease: 'expo.out', stagger: 0.08, start: 'top 90%' };   // = Practice (highlight-marker)

/* Each strip's [column, row]: 40 strip columns (8 modules × 5), 4 rows. Strip i = strip floor(i / 4) of square i % 4.
   1 line · 2 checker · 3 strips · 4 spread · 5 strips right · 6 checker right · 7 line right.
   From the Figma frames, with what "only down" needs: three strips of stage 3 sit lower than in Figma (those in the
   squares that stepped down); stage 5 is matched to stage 4 by short moves along the grid that keep falling, with
   no two strips side by side in a row; stages 6 and 7 keep each strip's column. */
const STAGES = [[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,3],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[0,3],[14,0],[25,1],[4,1],[18,1],[19,3],[30,3],[2,2],[15,2],[22,2],[34,2],[9,0],[12,1],[20,0],[39,3],[10,2],[9,3],[24,2],[39,1]],[[34,0],[27,3],[21,0],[35,1],[32,1],[22,1],[25,3],[36,3],[20,2],[26,2],[31,2],[38,2],[28,0],[24,1],[30,0],[39,3],[23,2],[29,3],[33,2],[37,1]],[[34,2],[27,3],[21,2],[35,3],[32,2],[22,2],[25,3],[36,3],[20,2],[26,3],[31,2],[38,3],[28,3],[24,2],[30,2],[39,3],[23,2],[29,3],[33,2],[37,3]],[[34,3],[27,3],[21,3],[35,3],[32,3],[22,3],[25,3],[36,3],[20,3],[26,3],[31,3],[38,3],[28,3],[24,3],[30,3],[39,3],[23,3],[29,3],[33,3],[37,3]]];

/* rows of the squares: stage 2 (left squares 1 and 3 step down) and stage 6 (right squares 0, 2 in row 2; 1, 3 in row 3) */
const L2 = [0, 1, 0, 1], R6 = [2, 3, 2, 3];

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
  const layer = document.createElementNS(NS, 'g');
  layer.setAttribute('fill', 'currentColor');
  svg.appendChild(layer);

  /* a group per shape, moved along the grid (x / y); a rect inside it */
  function shape(w) {
    const g = document.createElementNS(NS, 'g');
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('width', w);
    r.setAttribute('height', SH);
    g.appendChild(r);
    layer.appendChild(g);
    return g;
  }
  const strips = STAGES[0].map(() => shape(SW));
  const left = [0, 1, 2, 3].map(() => shape(SH));    // squares of stages 1–2 (square k = strips i % 4 === k)
  const right = [0, 1, 2, 3].map(() => shape(SH));   // squares of stages 6–7 (square k = columns 20 + 5k … +4)
  stage.appendChild(svg);

  gsap.set(strips, { x: (i) => STAGES[0][i][0] * SW, y: (i) => STAGES[0][i][1] * SH, autoAlpha: 0 });
  gsap.set(left, { x: (k) => k * SH, y: 0 });
  gsap.set(right, { x: (k) => (4 + k) * SH, y: (k) => R6[k] * SH, autoAlpha: 0 });
  const leftRects = left.map((g) => g.firstChild);
  gsap.set(leftRects, { attr: { y: SH, height: 0 } });
  builds.set(scope, { wrap: wrap, stage: stage, strips: strips, left: left, right: right, leftRects: leftRects });

  const b = builds.get(scope);
  return function() {
    builds.delete(scope);
    gsap.killTweensOf(b.strips.concat(b.left, b.right, b.leftRects));
    svg.remove();
  };
}

/* Layout stage (after the transition, page in its real position): entrance trigger + pinned scroll timeline
   (GSAP docs: create pins when the layout is final) */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};
  const at = (n, axis) => (i) => STAGES[n][i][axis] * (axis ? SH : SW);

  /* entrance: square by square */
  const entrance = gsap.to(b.leftRects, {
    attr: { y: 0, height: SH },
    duration: ENTER.duration,
    ease: ENTER.ease,
    stagger: ENTER.stagger,
    paused: true,
  });
  const enterTrigger = ScrollTrigger.create({
    trigger: b.stage,
    start: ENTER.start,
    once: true,
    onEnter: function() { entrance.play(); },
  });

  /* Squares move square by square. When a square splits (2 → 3) or gathers (5 → 6), its five strips move together,
     so strips only touch at the swap itself (touching anti-aliased strips show hairline seams); in the free moves
     between (3 → 4, 4 → 5) they start in a small wave by column. Hidden strips keep moving with their squares,
     so a swap never jumps. */
  const wave = (n) => (i) => STAGES[n][i][0] * 0.01;
  const bySquare = (n) => (i) => Math.floor(STAGES[n][i][0] / 5) * 0.06;
  const squareStep = (k) => k * 0.06;

  const tl = gsap.timeline({
    defaults: { duration: MOVE, ease: EASE },
    scrollTrigger: {
      trigger: b.wrap,
      start: 'top top',
      end: '+=' + PIN_DISTANCE,
      pin: true,
      scrub: SCRUB,
    },
  });
  tl.to({}, { duration: HOLD });
  /* 1 → 2: squares 1 and 3 step down */
  tl.addLabel('s12')
    .to(b.left, { y: (k) => L2[k] * SH, stagger: squareStep }, 's12')
    .to(b.strips, { y: at(1, 1), stagger: bySquare(0) }, 's12')
    .to({}, { duration: HOLD });
  /* 2 → 3: the squares split into strips and fall */
  tl.set(b.left, { autoAlpha: 0 }).set(b.strips, { autoAlpha: 1 }, '<');
  tl.to(b.strips, { y: at(2, 1), stagger: bySquare(1) }).to({}, { duration: HOLD });
  tl.to(b.strips, { x: at(3, 0), stagger: wave(2) }).to({}, { duration: HOLD });
  /* 4 → 5 along the grid only: across the row first, then down the column */
  tl.to(b.strips, { x: at(4, 0), stagger: wave(3) });
  tl.to(b.strips, { y: at(4, 1), duration: MOVE * 0.7, stagger: wave(4) }).to({}, { duration: HOLD });
  /* 5 → 6: the strips gather into the right squares */
  tl.to(b.strips, { y: at(5, 1), stagger: bySquare(4) });
  tl.set(b.strips, { autoAlpha: 0 }).set(b.right, { autoAlpha: 1 }, '<').to({}, { duration: HOLD });
  /* 6 → 7: squares 0 and 2 step down into the last row */
  tl.addLabel('s67')
    .to(b.right, { y: 3 * SH, stagger: squareStep }, 's67')
    .to(b.strips, { y: at(6, 1), stagger: bySquare(5) }, 's67')
    .to({}, { duration: HOLD });

  return function() {
    enterTrigger.kill();
    entrance.kill();
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
  };
}

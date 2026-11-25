/* ———— Scroll-driven block (Research) ———— */
/* Four squares on an 8 × 4 module grid break into 20 strips (a fifth of a module wide) and fall,
   stage by stage, from the top-left to the bottom-right while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh, hidden on mobile like circular-text)
            → [data-scroll-driven="stage"] (2:1). The SVG inside the stage is built here.
   - One SVG, viewBox = the Figma frames (1360 × 680; module 170, strip 34 × 170), so the stage data is the
     design's own coordinates. shape-rendering="crispEdges" (SVG attribute) keeps the strips of a square
     edge to edge, no hairline seams.
   - Entrance: like the Practice block (highlight-marker: 0.8s expo.out, 0.08s stagger, at 'top 90%', once) —
     the four squares rise into the first row, each as one block. A solid block rising from under a mask looks
     the same as its top edge rising from the bottom of its box, so each rect grows (attr y / height); no
     mask (masks soften edges and show seams between strips).
   - Scroll: like circular-text — ScrollTrigger pin + scrub, created after the page transition (layout stage).
     One timeline, a tween of all 20 strips per move (function-based x / y), short holds between stages.
     Every strip only ever moves down; moves follow the grid lines. */

const SW = 34, SH = 170;                // strip size, design units
const PIN_DISTANCE = '350%';            // how long the block is held (share of the screen height)
const MOVE = 1, HOLD = 0.3, EASE = 'power1.inOut';
const ENTER = { duration: 0.8, ease: 'expo.out', stagger: 0.08, start: 'top 90%' };   // = Practice (highlight-marker)

/* Each strip's [column, row]: 40 strip columns (8 modules × 5), 4 rows. Strip i = strip floor(i / 4) of square i % 4.
   1 line · 2 checker · 3 strips · 4 spread · 5 strips right · 6 checker right · 7 line right.
   From the Figma frames, with what "only down" needs: three strips of stage 3 sit lower than in Figma (those in the
   squares that stepped down); stage 5 is matched to stage 4 by short moves along the grid that keep falling, with
   no two strips side by side in a row; stages 6 and 7 keep each strip's column. */
const STAGES = [[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,3],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[0,3],[14,0],[25,1],[4,1],[18,1],[19,3],[30,3],[2,2],[15,2],[22,2],[34,2],[9,0],[12,1],[20,0],[39,3],[10,2],[9,3],[24,2],[39,1]],[[34,0],[27,3],[21,0],[35,1],[32,1],[22,1],[25,3],[36,3],[20,2],[26,2],[31,2],[38,2],[28,0],[24,1],[30,0],[39,3],[23,2],[29,3],[33,2],[37,1]],[[34,2],[27,3],[21,2],[35,3],[32,2],[22,2],[25,3],[36,3],[20,2],[26,3],[31,2],[38,3],[28,3],[24,2],[30,2],[39,3],[23,2],[29,3],[33,2],[37,3]],[[34,3],[27,3],[21,3],[35,3],[32,3],[22,3],[25,3],[36,3],[20,3],[26,3],[31,3],[38,3],[28,3],[24,3],[30,3],[39,3],[23,3],[29,3],[33,3],[37,3]]];

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
  const strips = document.createElementNS(NS, 'g');
  strips.setAttribute('fill', 'currentColor');
  strips.setAttribute('shape-rendering', 'crispEdges');
  svg.appendChild(strips);

  /* a group per strip, moved along the grid (x / y); its rect is only changed by the entrance */
  const groups = [], rects = [];
  STAGES[0].forEach(function() {
    const g = document.createElementNS(NS, 'g');
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('width', SW);
    r.setAttribute('height', SH);
    g.appendChild(r);
    strips.appendChild(g);
    groups.push(g); rects.push(r);
  });
  stage.appendChild(svg);

  gsap.set(groups, { x: (i) => STAGES[0][i][0] * SW, y: (i) => STAGES[0][i][1] * SH });
  gsap.set(rects, { attr: { y: SH, height: 0 } });
  builds.set(scope, { wrap: wrap, stage: stage, groups: groups, rects: rects });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(groups.concat(rects));
    svg.remove();
  };
}

/* Layout stage (after the transition, page in its real position): entrance trigger + pinned scroll timeline
   (GSAP docs: create pins when the layout is final) */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};
  const at = (n, axis) => (i) => STAGES[n][i][axis] * (axis ? SH : SW);

  /* entrance: square by square (strip i belongs to square i % 4), its five strips together */
  const entrance = gsap.to(b.rects, {
    attr: { y: 0, height: SH },
    duration: ENTER.duration,
    ease: ENTER.ease,
    stagger: (i) => (i % 4) * ENTER.stagger,
    paused: true,
  });
  const enterTrigger = ScrollTrigger.create({
    trigger: b.stage,
    start: ENTER.start,
    once: true,
    onEnter: function() { entrance.play(); },
  });

  /* where the squares are whole (1 → 2, 6 → 7) they move square by square; where they split or gather,
     the strips start in a small wave by column */
  const wave = (n) => (i) => STAGES[n][i][0] * 0.01;
  const bySquare = (n) => (i) => Math.floor(STAGES[n][i][0] / 5) * 0.06;

  const tl = gsap.timeline({
    defaults: { duration: MOVE, ease: EASE },
    scrollTrigger: {
      trigger: b.wrap,
      start: 'top top',
      end: '+=' + PIN_DISTANCE,
      pin: true,
      scrub: true,
    },
  });
  tl.to({}, { duration: HOLD });
  tl.to(b.groups, { y: at(1, 1), stagger: bySquare(0) }).to({}, { duration: HOLD });
  tl.to(b.groups, { y: at(2, 1), stagger: wave(1) }).to({}, { duration: HOLD });
  tl.to(b.groups, { x: at(3, 0), stagger: wave(2) }).to({}, { duration: HOLD });
  /* 4 → 5 along the grid only: across the row first, then down the column */
  tl.to(b.groups, { x: at(4, 0), stagger: wave(3) });
  tl.to(b.groups, { y: at(4, 1), duration: MOVE * 0.7, stagger: wave(4) }).to({}, { duration: HOLD });
  tl.to(b.groups, { y: at(5, 1), stagger: wave(4) }).to({}, { duration: HOLD });
  tl.to(b.groups, { y: at(6, 1), stagger: bySquare(5) }).to({}, { duration: HOLD });

  return function() {
    enterTrigger.kill();
    entrance.kill();
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
  };
}

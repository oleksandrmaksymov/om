/* ———— Scroll-driven block (Research) ———— */
/* Four squares on an 8 × 4 module grid break into 20 strips (a fifth of a module wide) and fall,
   stage by stage, from the top-left to the bottom-right while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh; padding 58px top = 20px under the 38px nav, 20px bottom;
            hidden on mobile like circular-text) → [data-scroll-driven="stage"] (2:1, as wide as fits).
   Method — as on tresmarescapital.com (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt every frame):
   - GSAP tweens plain numbers — each strip's position (x, y) in design units — and the timeline's onUpdate
     rebuilds the geometry from them (GSAP docs: tween any numeric property of any object; onUpdate).
     A strip is rigid: it never changes its size.
   - All 20 strips are ONE <path> (a rectangle subpath each). The browser anti-aliases one path as a whole,
     so strips side by side meet with no hairline seam — a square is just its five strips touching.
   - viewBox = the Figma frames (1360 × 680; module 170, strip 34 × 170): the stage data is the design's coordinates.
   - Entrance: like the Practice block (highlight-marker: 0.8s expo.out, 0.08s stagger, at 'top 90%', once) —
     the four squares rise into the first row, each as one block.
   - Whole squares move as blocks. Strips move each with its own delay and duration (fixed random values below),
     so neighbours slide past each other; they never change their left-to-right order and never move up. */

const SW = 34, SH = 170;                // strip size, design units
const PIN_DISTANCE = '600%';            // how long the block is held (share of the screen height)
const EASE = 'power2.inOut';
const HOLD = 0.25;
const ENTER = { duration: 0.8, ease: 'expo.out', stagger: 0.08, start: 'top 90%' };   // = Practice (highlight-marker)

/* Each strip's [column, row]: 40 strip columns (8 modules × 5), 4 rows. Strip i = strip floor(i / 4) of square i % 4.
   1 line · 2 checker · 3 strips · 4 spread · 5 strips right · 6 checker right · 7 line right.
   From the Figma frames, with two rules: a strip only moves down, and the strips keep their left-to-right order.
   Stage 3 = Figma, four strips one row lower or higher. Stage 4 = Figma's columns handed out in strip order.
   Stage 5 = the strips in order in the 20 columns of the right half (each right square is made of the strips of the
   same left square), rows as close to Figma as "only down" allows. Stages 6 and 7 keep each strip's column. */
const STAGES = [[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,2],[16,1],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[25,1],[0,1],[10,1],[19,2],[30,1],[2,2],[12,2],[20,2],[34,2],[4,0],[14,1],[22,0],[39,3],[9,2],[15,3],[24,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,3],[31,2],[36,3],[22,2],[27,2],[32,2],[37,2],[23,2],[28,1],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]];

/* Each strip's delay and duration in a move (timeline units), random, picked once and checked: in the moves
   across, strips of a row never overlap or pass each other (sampled at 200 points); in the falls each strip has
   its own column. The check uses GSAP's power2.inOut (cubic in-out). */
const TIMING = {
  fall23: {"delay":[0.113,0.053,0.228,0.025,0.188,0.128,0.02,0.178,0.013,0.152,0.024,0.032,0.149,0.289,0.043,0.078,0.22,0.332,0.202,0.139],"duration":[1.191,0.819,1.143,0.916,0.858,0.847,0.923,1.126,0.872,1.033,1.056,0.949,1.019,0.825,0.824,0.882,1.072,0.971,0.926,1.034]},
  across34: {"delay":[0.185,0.205,0.295,0.315,0.309,0.128,0.332,0.148,0.107,0.033,0.179,0.054,0.096,0.214,0.272,0.263,0.03,0.021,0.089,0.193],"duration":[1.136,1.12,1.174,1.036,1.055,0.917,0.926,0.882,1.014,1.043,1.029,0.957,0.97,0.899,1.126,1.032,1.099,1.125,0.912,0.847]},
  across45: {"delay":[0.329,0.12,0.154,0.335,0.326,0.137,0.155,0.319,0.243,0.195,0.004,0.266,0.219,0.119,0.059,0.001,0.057,0.049,0.137,0.244],"duration":[1.126,0.852,1.175,0.973,1.075,1.016,1.127,0.913,1.041,0.844,1.056,0.961,1.062,1.034,1.031,1.159,1.185,0.894,0.852,1.19]},
  fall45: {"delay":[0.159,0.105,0.278,0.245,0.085,0.201,0.184,0.306,0.255,0.101,0.343,0.041,0.146,0.265,0.053,0.171,0.014,0.234,0.268,0.201],"duration":[1.15,0.925,1.078,1.038,1.032,0.982,1.136,1.178,0.99,1.066,0.824,1.081,1.059,1.197,1.129,0.914,0.954,1.067,0.809,0.985]},
  fall56: {"delay":[0.059,0.041,0.021,0.269,0.045,0.087,0.137,0.305,0.028,0.157,0.192,0.309,0.287,0.302,0.097,0.145,0.126,0.309,0.335,0.053],"duration":[0.87,0.893,0.893,0.994,1.036,0.905,0.802,0.968,0.948,1.027,1.181,1.076,1.006,1.047,1.07,0.822,1.16,1.112,1.15,1.119]},
};

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

  /* every strip's position, and how far each square has risen in (entrance) */
  const strips = STAGES[0].map(([c, r]) => ({ x: c * SW, y: r * SH }));
  const rise = [0, 1, 2, 3].map(() => ({ v: 0 }));

  /* one path, a rectangle per strip; during the entrance a strip shows only the risen part of its square */
  function render() {
    let d = '';
    for (let i = 0; i < strips.length; i++) {
      const s = strips[i], h = SH * rise[i % 4].v;
      if (h < 0.01) continue;
      const x0 = s.x.toFixed(2), x1 = (s.x + SW).toFixed(2), y1 = (s.y + SH).toFixed(2);
      d += 'M' + x0 + ' ' + (s.y + SH - h).toFixed(2) + 'H' + x1 + 'V' + y1 + 'H' + x0 + 'Z';
    }
    path.setAttribute('d', d);
  }
  render();
  builds.set(scope, { wrap: wrap, stage: stage, strips: strips, rise: rise, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(strips.concat(rise));
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

  /* Moves the strips to stage n along one axis from `at`, each with its own delay / duration (a function of i).
     Explicit fromTo values (immediateRender off), so scrubbing back and forth is exact. Returns when the last ends. */
  function move(n, axis, at, delay, duration) {
    const key = axis ? 'y' : 'x', size = axis ? SH : SW;
    let end = at;
    b.strips.forEach(function(s, i) {
      const from = pos[i][axis] * size, to = STAGES[n][i][axis] * size;
      if (from === to) return;
      tl.fromTo(s, { [key]: from }, { [key]: to, duration: duration(i), ease: EASE, immediateRender: false }, at + delay(i));
      pos[i][axis] = STAGES[n][i][axis];
      end = Math.max(end, at + delay(i) + duration(i));
    });
    return end + HOLD;
  }
  const square = (i) => Math.floor(pos[i][0] / 5) * 0.12;   // whole squares: one after another, five strips together
  const one = () => 1;
  const rnd = (t) => [(i) => t.delay[i], (i) => t.duration[i]];

  let t = HOLD;
  t = move(1, 1, t, square, one);                    // 1 → 2: squares 1 and 3 step down
  t = move(2, 1, t, ...rnd(TIMING.fall23));          // 2 → 3: the squares come apart, the strips slide down
  t = move(3, 0, t, ...rnd(TIMING.across34));        // 3 → 4: they spread across the width
  t = move(4, 0, t - HOLD, ...rnd(TIMING.across45)); // 4 → 5: across to the right half …
  t = move(4, 1, t - HOLD, ...rnd(TIMING.fall45));   //        … and down their columns
  t = move(5, 1, t, ...rnd(TIMING.fall56));          // 5 → 6: they slide down into the right squares
  t = move(6, 1, t, square, one);                    // 6 → 7: squares 0 and 2 step down into the last row
  tl.to({}, { duration: 0 }, t);                     // keep the last hold

  return function() {
    enterTrigger.kill();
    entrance.kill();
    if (tl.scrollTrigger) tl.scrollTrigger.kill(true);
    tl.kill();
  };
}

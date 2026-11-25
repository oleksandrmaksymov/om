/* ———— Scroll-driven block (Research) ———— */
/* Four squares on an 8 × 4 module grid break into 20 strips (a fifth of a module wide) and fall,
   stage by stage, from the top-left to the bottom-right while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh; padding 58px top = 20px under the 38px nav, 20px bottom;
            hidden on mobile like circular-text) → [data-scroll-driven="stage"] (full width; 2:1 unless the screen is
            too low, then max-height wins and the modules get a little wider than tall).
   Method — the motion measured on tresmarescapital.com (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt
   every frame): linear motion (ease "none"), constant speed, no stops, about 1 screen pixel of movement per pixel of
   scroll.
   - GSAP tweens plain numbers — each strip's position (x, y) in design units — and the timeline's onUpdate
     rebuilds the geometry from them (GSAP docs: tween any numeric property of any object; onUpdate).
     A strip is rigid: it never changes its size.
   - Timeline time = design units travelled: every move lasts as long as its distance, so every shape moves at the
     same speed (a strip falling three rows takes three times as long as one falling one row). The pin is as long
     as the timeline in screen pixels (ScrollTrigger.create with the timeline as its animation; functional end,
     re-measured on refresh).
   - All 20 strips are ONE <path> (a rectangle subpath each). The browser anti-aliases one path as a whole,
     so strips side by side meet with no hairline seam — a square is just its five strips touching.
   - viewBox = the Figma frames (1360 × 680; module 170, strip 34 × 170): the stage data is the design's coordinates.
     preserveAspectRatio="none" (SVG attribute) maps the grid onto the stage's real box, so on a low screen the
     modules widen in proportion instead of the block getting side margins.
   - Entrance: like the Practice block (highlight-marker: 0.8s expo.out, 0.08s stagger, at 'top 90%', once) —
     the four squares rise into the first row, each as one block.
   - Whole squares move as blocks, one after another. Strips start each with its own delay (fixed random values
     below), so neighbours slide past each other; they never overlap, never change their left-to-right order and
     never move up. */

const SW = 34, SH = 170;                // strip size, design units
const ENTER = { duration: 0.8, ease: 'expo.out', stagger: 0.08, start: 'top 90%' };   // = Practice (highlight-marker)
const SQUARE_STEP = 40;                 // whole squares start one after another, this far apart (design units)

/* Each strip's [column, row]: 40 strip columns (8 modules × 5), 4 rows. Strip i = strip floor(i / 4) of square i % 4.
   1 line · 2 checker · 3 strips · 4 spread · 5 strips right · 6 checker right · 7 line right.
   From the Figma frames, with three rules: a strip only moves down; the strips keep their left-to-right order;
   at every stage no two strips touch — side by side in a row or one above the other in a column.
   Stage 3 = Figma, six strips one row off. Stage 4 = one column per strip, as close to Figma's spread as the rules
   allow. Stage 5 = the strips in order in the 20 columns of the right half (each right square is made of the strips
   of the same left square), neighbours in different rows, as close to Figma as "only down" allows.
   Stages 6 and 7 keep each strip's column. */
const STAGES = [[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,1],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[25,1],[1,1],[10,1],[19,1],[30,3],[2,2],[12,2],[20,2],[34,2],[4,0],[14,1],[22,0],[38,3],[8,2],[15,3],[24,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,1],[31,1],[36,3],[22,2],[27,2],[32,2],[37,2],[23,1],[28,1],[33,1],[38,3],[24,2],[29,3],[34,2],[39,2]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]];

/* The moves, in order: [from stage, to stage, axis (0 x, 1 y), whole squares?]. 4 → 5 goes across first, then down. */
const MOVES = [[0, 1, 1, true], [1, 2, 1, false], [2, 3, 0, false], [3, 4, 0, false], [4, 4, 1, false], [4, 5, 1, false], [5, 6, 1, true]];
/* Each strip's start delay in every move (design units = time), random, picked once and checked over the whole
   timeline (every 4 units): no two strips ever overlap and the left-to-right order never changes (moving
   neighbours may brush past each other; at rest they never touch). */
const DELAYS = [[47,80,28,50,58,48,2,72,56,81,47,49,53,28,65,79,4,1,40,22],[42,25,14,5,54,90,9,44,76,25,33,0,9,29,65,14,62,65,72,90],[77,4,59,25,65,20,58,50,43,39,48,44,27,15,29,70,69,49,3,55],[86,15,54,54,59,17,27,38,65,23,22,68,85,4,23,33,41,38,53,73],[53,15,20,59,37,85,20,31,18,3,81,53,9,24,82,60,28,29,1,73],[26,87,48,89,13,20,61,27,56,53,58,46,74,41,61,27,9,38,50,82],[73,69,24,32,82,30,44,84,33,76,57,86,15,46,70,68,9,51,73,2]];

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
  svg.setAttribute('preserveAspectRatio', 'none');
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

  /* the timeline: time = distance; built paused, then driven by its pinned ScrollTrigger */
  const tl = gsap.timeline({ paused: true, onUpdate: b.render });
  const pos = STAGES[0].map((p) => p.slice());   // where every strip stands while the timeline is built
  let t = 0;
  MOVES.forEach(function([from, to, axis, squares], m) {
    const key = axis ? 'y' : 'x', size = axis ? SH : SW;
    let end = t;
    b.strips.forEach(function(s, i) {
      const a = pos[i][axis] * size, z = STAGES[to][i][axis] * size;
      if (a === z) return;
      const start = t + (squares ? Math.floor(STAGES[from][i][0] / 5) * SQUARE_STEP : DELAYS[m][i]);
      const dist = Math.abs(z - a);
      tl.fromTo(s, { [key]: a }, { [key]: z, duration: dist, ease: 'none', immediateRender: false }, start);
      pos[i][axis] = STAGES[to][i][axis];
      end = Math.max(end, start + dist);
    });
    t = end;
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

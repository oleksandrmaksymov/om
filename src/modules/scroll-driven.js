/* ———— Scroll-driven block (Research) ———— */
/* Four squares on an 8 × 4 module grid break into 20 strips (a fifth of a module wide) and fall,
   stage by stage, from the top-left to the bottom-right while the block is pinned and scrubbed.
   Webflow: [data-scroll-driven="wrap"] (100svh; padding 58px top = 20px under the 38px nav, 20px bottom;
            hidden on mobile like circular-text) → [data-scroll-driven="stage"] (full width; 2:1 unless the screen is
            too low, then max-height wins and the modules get a little wider than tall).
   Method (GSAP + ScrollTrigger scrub + Lenis, SVG geometry rebuilt every frame):
   - GSAP tweens plain numbers — each strip's position (x, y) in design units — and the timeline's onUpdate
     rebuilds the geometry from them (GSAP docs: tween any numeric property of any object; onUpdate).
     A strip is rigid: it never changes its size.
   - Every move eases in and out (sine.inOut), lasts as long as its distance (same pace for every strip), and the
     stages overlap a little — a strip sets off on its next move while others are still arriving, so there is no
     moment where everything stops. 4 → 5 goes across and down at once (a smooth diagonal, no grid corners).
   - Timeline time = design units; the pin is as long as the timeline in screen pixels (ScrollTrigger.create with
     the timeline as its animation; functional end, re-measured on refresh).
   - All 20 strips are ONE <path> (a rectangle subpath each). The browser anti-aliases one path as a whole,
     so strips side by side meet with no hairline seam — a square is just its five strips touching.
   - viewBox = the Figma frames (1360 × 680; module 170, strip 34 × 170): the stage data is the design's coordinates.
     preserveAspectRatio="none" (SVG attribute) maps the grid onto the stage's real box, so on a low screen the
     modules widen in proportion instead of the block getting side margins.
   - Entrance: the whole first block (the four squares, half the width) is revealed left to right like the Practice
     block (highlight-marker: 0.8s expo.out, at 'top 90%'); scrolling back up hides it again, right to left
     (toggleActions 'play none none reverse').
   - Whole squares move as blocks, one after another. In the falls strips start at random moments, so neighbours
     slide past each other; across, they all move together. They never overlap, never change their left-to-right
     order and never move up. */

const SW = 34, SH = 170;                // strip size, design units
const ENTER = { duration: 0.8, ease: 'expo.out', start: 'top 60%' };   // Practice's reveal, fired once the stage is well in view
const LINE = 4 * 170;                   // the first block: four squares, half the width

/* Each strip's [column, row]: 40 strip columns (8 modules × 5), 4 rows. Strip i = strip floor(i / 4) of square i % 4.
   1 line · 2 checker · 3 strips · 4 spread · 5 strips right · 6 checker right · 7 line right.
   From the Figma frames, with three rules: a strip only moves down; the strips keep their left-to-right order;
   at every stage no two strips touch — side by side in a row or one above the other in a column.
   Stage 3 = Figma, six strips one row off. Stage 4 = one column per strip, as close to Figma's spread as the rules
   allow. Stage 5 = the strips in order in the 20 columns of the right half (each right square is made of the strips
   of the same left square), neighbours in different rows, as close to Figma as "only down" allows.
   Stages 6 and 7 keep each strip's column. */
const STAGES = [[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,1],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[25,1],[1,1],[10,1],[19,1],[30,3],[2,2],[12,2],[20,2],[34,2],[4,0],[14,1],[22,0],[38,3],[8,2],[15,3],[24,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,1],[31,1],[36,3],[22,2],[27,2],[32,2],[37,2],[23,1],[28,1],[33,1],[38,3],[24,2],[29,3],[34,2],[39,2]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]];

/* Every move of the animation, planned once from the stages above and checked over the whole timeline (every 3
   units): no two strips ever overlap, the left-to-right order never changes, nothing moves up.
   Three phases that never mix, each one continuous move per strip (array keyframes, no stop at the middle stage):
   down 1 → 2 → 3 (squares stay whole to 2, each square a little later), across only 3 → 4 → 5, down 5 → 6 → 7.
   'yk' / 'xk' = [strip, kind, [three values], start, duration]; 'x' / 'y' = [strip, 'x' | 'y', from, to, start, duration] — design units; time = design units (same pace everywhere). */
const TWEENS = [[1,"yk",[0,170,510],40,560],[3,"yk",[0,170,170],120,480],[4,"yk",[0,0,170],0,600],[5,"yk",[0,170,170],40,560],[6,"yk",[0,0,170],80,520],[7,"yk",[0,170,510],120,480],[8,"yk",[0,0,340],0,600],[9,"yk",[0,170,340],40,560],[10,"yk",[0,0,340],80,520],[11,"yk",[0,170,340],120,480],[13,"yk",[0,170,170],40,560],[15,"yk",[0,170,510],120,480],[16,"yk",[0,0,340],0,600],[17,"yk",[0,170,510],40,560],[18,"yk",[0,0,340],80,520],[19,"yk",[0,170,170],120,480],[0,"xk",[0,0,680],600,1200],[1,"xk",[170,306,850],600,1200],[2,"xk",[340,612,1020],600,1200],[3,"xk",[510,850,1190],600,1200],[4,"xk",[34,34,714],600,1200],[5,"xk",[204,340,884],600,1200],[6,"xk",[374,646,1054],600,1200],[7,"xk",[544,1020,1224],600,1200],[8,"xk",[68,68,748],600,1200],[9,"xk",[238,408,918],600,1200],[10,"xk",[408,680,1088],600,1200],[11,"xk",[578,1156,1258],600,1200],[12,"xk",[102,136,782],600,1200],[13,"xk",[272,476,952],600,1200],[14,"xk",[442,748,1122],600,1200],[15,"xk",[612,1292,1292],600,1200],[16,"xk",[136,272,816],600,1200],[17,"xk",[306,510,986],600,1200],[18,"xk",[476,816,1156],600,1200],[19,"xk",[646,1326,1326],600,1200],[0,"yk",[0,340,510],1800,600],[2,"yk",[0,340,510],1880,600],[3,"yk",[170,510,510],1920,600],[4,"yk",[170,340,510],1800,600],[5,"yk",[170,510,510],1840,600],[6,"yk",[170,340,510],1880,600],[8,"yk",[340,340,510],1800,600],[9,"yk",[340,510,510],1840,600],[10,"yk",[340,340,510],1880,600],[11,"yk",[340,510,510],1920,600],[12,"yk",[0,340,510],1800,600],[13,"yk",[170,510,510],1840,600],[14,"yk",[0,340,510],1880,600],[16,"yk",[340,340,510],1800,600],[18,"yk",[340,340,510],1880,600],[19,"yk",[170,510,510],1920,600]];

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

  /* every strip's position, and how much of the first block is revealed, left to right (entrance) */
  const strips = STAGES[0].map(([c, r]) => ({ x: c * SW, y: r * SH }));
  const reveal = { v: 0 };

  /* one path, a rectangle per strip; during the entrance only the revealed part (left of reveal × the first block) */
  function render() {
    const edge = reveal.v >= 1 ? Infinity : reveal.v * LINE;
    let d = '';
    for (let i = 0; i < strips.length; i++) {
      const s = strips[i], right = Math.min(s.x + SW, edge);
      if (right - s.x < 0.01) continue;
      const x0 = s.x.toFixed(2), x1 = right.toFixed(2);
      d += 'M' + x0 + ' ' + s.y.toFixed(2) + 'H' + x1 + 'V' + (s.y + SH).toFixed(2) + 'H' + x0 + 'Z';
    }
    path.setAttribute('d', d);
  }
  render();
  builds.set(scope, { wrap: wrap, stage: stage, strips: strips, reveal: reveal, render: render });

  return function() {
    builds.delete(scope);
    gsap.killTweensOf(strips.concat(reveal));
    svg.remove();
  };
}

/* Layout stage (after the transition, page in its real position): entrance trigger + pinned scroll timeline
   (GSAP docs: create pins when the layout is final) */
export function initScrollDrivenScroll(scope) {
  const b = builds.get(scope);
  if (!b) return function() {};

  /* entrance: the first block revealed left to right; hidden again right to left when scrolling back up */
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

  /* the timeline: time = design units, built paused from TWEENS, then driven by its pinned ScrollTrigger.
     Explicit fromTo values (immediateRender off), so scrubbing back and forth is exact. */
  const tl = gsap.timeline({ paused: true, onUpdate: b.render });
  TWEENS.forEach(function(t) {
    if (t[1] === 'xk' || t[1] === 'yk') {   // one move through three stages (GSAP array keyframes): no stop at the middle stage
      const [i, kind, vals, start, duration] = t;
      tl.to(b.strips[i], { keyframes: { [kind[0]]: vals, easeEach: 'none' }, duration: duration, ease: 'sine.inOut', immediateRender: false }, start);   // an array keyframe's first value is where it starts
      return;
    }
    const [i, key, from, to, start, duration] = t;
    tl.fromTo(b.strips[i], { [key]: from }, { [key]: to, duration: duration, ease: 'sine.inOut', immediateRender: false }, start);
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

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
const ENTER = { duration: 0.8, ease: 'expo.out', start: 'top 90%' };   // = Practice (highlight-marker)
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
   [strip, 'x' | 'y', from, to, start, duration] — design units; time = design units (same pace everywhere). */
const TWEENS = [[1,"y",0,170,40,170.0],[3,"y",0,170,120,170.0],[5,"y",0,170,40,170.0],[7,"y",0,170,120,170.0],[9,"y",0,170,40,170.0],[11,"y",0,170,120,170.0],[13,"y",0,170,40,170.0],[15,"y",0,170,120,170.0],[17,"y",0,170,40,170.0],[19,"y",0,170,120,170.0],[1,"y",170,510,295.89,340],[4,"y",0,170,286.37,170],[6,"y",0,170,249.26,170],[7,"y",170,510,290.0,340],[8,"y",0,340,259.24,340],[9,"y",170,340,247.54,170],[10,"y",0,340,289.22,340],[11,"y",170,340,290.0,170],[15,"y",170,510,290.0,340],[16,"y",0,340,267.17,340],[17,"y",170,510,302.89,340],[18,"y",0,340,258.52,340],[0,"x",0,0,510.92,680],[1,"x",170,306,510.92,680],[2,"x",340,612,510.92,680],[3,"x",510,850,510.92,680],[4,"x",34,34,510.92,680],[5,"x",204,340,510.92,680],[6,"x",374,646,510.92,680],[7,"x",544,1020,510.92,680],[8,"x",68,68,510.92,680],[9,"x",238,408,510.92,680],[10,"x",408,680,510.92,680],[11,"x",578,1156,510.92,680],[12,"x",102,136,510.92,680],[13,"x",272,476,510.92,680],[14,"x",442,748,510.92,680],[15,"x",612,1292,510.92,680],[16,"x",136,272,510.92,680],[17,"x",306,510,510.92,680],[18,"x",476,816,510.92,680],[19,"x",646,1326,510.92,680],[0,"x",0,680,1190.92,680],[0,"y",0,340,1082.75,340],[1,"x",306,850,1190.92,680],[2,"x",612,1020,1190.92,680],[3,"x",850,1190,1190.92,680],[4,"x",34,714,1190.92,680],[5,"x",340,884,1190.92,680],[6,"x",646,1054,1190.92,680],[7,"x",1020,1224,1190.92,680],[8,"x",68,748,1190.92,680],[9,"x",408,918,1190.92,680],[10,"x",680,1088,1190.92,680],[11,"x",1156,1258,1190.92,680],[12,"x",136,782,1190.92,680],[12,"y",0,170,1372.38,170],[13,"x",476,952,1190.92,680],[14,"x",748,1122,1190.92,680],[14,"y",0,170,1302.29,170],[15,"x",1292,1292,1190.92,680],[16,"x",272,816,1190.92,680],[17,"x",510,986,1190.92,680],[18,"x",816,1156,1190.92,680],[19,"x",1326,1326,1190.92,680],[19,"y",170,340,1114.68,170],[2,"y",0,340,1705.8,340],[3,"y",170,510,1713.83,340],[4,"y",170,340,1694.85,170],[5,"y",170,510,1704.96,340],[6,"y",170,340,1639.84,170],[9,"y",340,510,1686.01,170],[11,"y",340,510,1704.6,170],[12,"y",170,340,1680.96,170],[13,"y",170,510,1657.66,340],[14,"y",170,340,1616.8,170],[19,"y",340,510,1653.48,170],[0,"y",340,510,2079.4,170.0],[2,"y",340,510,2159.4,170.0],[4,"y",340,510,2079.4,170.0],[6,"y",340,510,2159.4,170.0],[8,"y",340,510,2079.4,170.0],[10,"y",340,510,2159.4,170.0],[12,"y",340,510,2079.4,170.0],[14,"y",340,510,2159.4,170.0],[16,"y",340,510,2079.4,170.0],[18,"y",340,510,2159.4,170.0]];

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
  TWEENS.forEach(function([i, key, from, to, start, duration]) {
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

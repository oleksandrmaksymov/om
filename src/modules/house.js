import { watchPointer } from '../core/pointer.js';

/* ———— House (Research hero) — p5 sketch rebuilt as SVG + GSAP ————
   Webflow: inside the 16:9 block put an empty Div [data-house] (100% × 100%).
   The module draws an SVG with viewBox 1920×1080 — it scales to the block by itself, crisp on any screen.
   At rest the house matches the design (Figma house.svg, 40px grid): break at x 1280 / y 360,
     door 1/4 × 2/3 of the left wall (centered, on the ground), window 1/2 × 1/3 of the right wall
     (centered) — window top always aligned with the door top.
   The break point sits right under the cursor while the cursor is over the house (easing 0.1 per frame),
     kept 10–90% inside the block; on touch it follows the finger (page still scrolls);
     otherwise it slowly wanders around the design point (return easing 0.03).
   p5 noise() → GSAP: endless sine.inOut tweens to random points (gsap.utils.random).
   One loop for everything: gsap.ticker; paused while the block is off screen (ScrollTrigger onToggle). */

const W = 1920;
const H = 1080;
const LIGHT = '#E5E5E5';
const DARK = '#000000';
const NS = 'http://www.w3.org/2000/svg';

export function initHouse(scope) {
  const host = scope.querySelector('[data-house]');
  if (!host) return;

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.cssText = 'display:block;width:100%;height:100%;';

  const make = (tag, fill) => {
    const el = document.createElementNS(NS, tag);
    el.setAttribute('fill', fill);
    svg.appendChild(el);
    return el;
  };
  const roofLeft = make('polygon', LIGHT);
  const roofRight = make('polygon', DARK);
  const wallLeft = make('rect', DARK);
  const door = make('rect', LIGHT);
  const wallRight = make('rect', LIGHT);
  const win = make('rect', DARK);
  /* SVG spec (MDN shape-rendering): crisp pixel edges for the straight shapes — no half-transparent
     bottom row when the block height is fractional (no seam with a block of the same color below).
     Roof triangles keep anti-aliasing so the slopes stay smooth */
  [wallLeft, door, wallRight, win].forEach((el) => el.setAttribute('shape-rendering', 'crispEdges'));
  host.appendChild(svg);

  const setRect = (el, x, y, w, h) => {
    el.setAttribute('x', x);
    el.setAttribute('y', y);
    el.setAttribute('width', Math.max(0, w));
    el.setAttribute('height', Math.max(0, h));
  };

  /* The break point (where both roofs and both walls meet) in viewBox units.
     Rest = design point (2/3 width, 1/3 height); always kept 10–90% inside the block */
  const REST = { x: W * (2 / 3), y: H * (1 / 3) };
  const MIN = 0.1, MAX = 0.9;
  const anchor = { x: REST.x, y: REST.y };
  const mouse = { x: REST.x, y: REST.y };
  const auto = { x: REST.x, y: REST.y };
  let inside = false;

  /* Wandering point without a cursor (instead of p5 noise): around the design point,
     the same range as before (x 33–81%, y 19–67%); x slower than y, like noise(t*0.1) / noise(t*0.2) */
  const wanderX = () => gsap.to(auto, {
    x: gsap.utils.random(W * 0.327, W * 0.807),
    duration: gsap.utils.random(4, 7),
    ease: 'sine.inOut',
    onComplete: wanderX,
  });
  const wanderY = () => gsap.to(auto, {
    y: gsap.utils.random(H * 0.193, H * 0.673),
    duration: gsap.utils.random(2, 4),
    ease: 'sine.inOut',
    onComplete: wanderY,
  });
  wanderX();
  wanderY();

  function draw() {
    const lw = gsap.utils.clamp(W * MIN, W * MAX, anchor.x);
    const rw = W - lw;
    const th = gsap.utils.clamp(H * MIN, H * MAX, anchor.y);
    const bh = H - th;

    roofLeft.setAttribute('points', `0,${th} ${lw},0 ${lw},${th}`);
    roofRight.setAttribute('points', `${W},${th} ${lw},0 ${lw},${th}`);
    setRect(wallLeft, 0, th, lw, bh);
    const dw = lw * 0.25, dh = bh * (2 / 3);
    setRect(door, lw / 2 - dw / 2, th + bh - dh, dw, dh);
    setRect(wallRight, lw, th, rw, bh);
    const ww = rw * 0.5, wh = bh / 3;
    setRect(win, lw + rw / 2 - ww / 2, th + bh / 2 - wh / 2, ww, wh);
  }

  /* Easing per 60fps frame: 0.1 while following the cursor, 0.03 when it returns after the cursor
     leaves (and while wandering) — a slower, smoother return. Same speed on 120Hz screens
     (GSAP docs: ticker.deltaRatio) */
  const FOLLOW = 0.1;
  const RETURN = 0.03;
  function tick() {
    const ease = inside ? FOLLOW : RETURN;
    const k = 1 - Math.pow(1 - ease, gsap.ticker.deltaRatio(60));
    const t = inside ? mouse : auto;
    anchor.x += (t.x - anchor.x) * k;
    anchor.y += (t.y - anchor.y) * k;
    draw();
  }

  /* Cursor / finger over the block → its position in viewBox units (kept inside the block) */
  const setPoint = (clientX, clientY) => {
    const r = host.getBoundingClientRect();
    if (!r.width || !r.height) return;
    mouse.x = gsap.utils.clamp(0, W, ((clientX - r.left) / r.width) * W);
    mouse.y = gsap.utils.clamp(0, H, ((clientY - r.top) / r.height) * H);
    inside = true;
  };
  const onLeave = () => { inside = false; };
  /* Cursor: on move and on scroll with the last cursor position (core/pointer.js) —
     the house also reacts when it scrolls under a still cursor */
  const onPointer = (x, y) => {
    const r = host.getBoundingClientRect();
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) setPoint(x, y);
    else onLeave();
  };
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const stopWatch = hasHover ? watchPointer(onPointer) : null;

  /* Touch: the house follows the finger, the page keeps scrolling (passive listeners never block
     scroll); finger lifted → smooth return like the cursor leaving */
  const onTouch = (e) => { const t = e.touches[0]; if (t) setPoint(t.clientX, t.clientY); };
  const touchOpts = { passive: true };
  host.addEventListener('touchstart', onTouch, touchOpts);
  host.addEventListener('touchmove', onTouch, touchOpts);
  host.addEventListener('touchend', onLeave, touchOpts);
  host.addEventListener('touchcancel', onLeave, touchOpts);

  /* Run only while the block is on screen */
  let running = false;
  const start = () => { if (!running) { running = true; gsap.ticker.add(tick); } };
  const stop = () => { if (running) { running = false; gsap.ticker.remove(tick); } };
  const st = ScrollTrigger.create({
    trigger: host,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => (self.isActive ? start() : stop()),
  });

  draw();
  start();

  return function() {
    stop();
    st.kill();
    gsap.killTweensOf(auto);
    if (stopWatch) stopWatch();
    host.removeEventListener('touchstart', onTouch, touchOpts);
    host.removeEventListener('touchmove', onTouch, touchOpts);
    host.removeEventListener('touchend', onLeave, touchOpts);
    host.removeEventListener('touchcancel', onLeave, touchOpts);
    svg.remove();
  };
}

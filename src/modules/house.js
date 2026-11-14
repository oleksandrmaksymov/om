/* ———— House (Research hero) — p5 sketch rebuilt as SVG + GSAP ————
   Webflow: inside the 16:9 block put an empty Div [data-house] (100% × 100%).
   The module draws an SVG with viewBox 1920×1080 — it scales to the block by itself, crisp on any screen.
   At rest the house matches the design (Figma house.svg, 40px grid): break at x 1280 / y 360,
     door 1/4 × 2/3 of the left wall (centered, on the ground), window 1/2 × 1/3 of the right wall
     (centered) — window top always aligned with the door top.
   The break point follows the cursor over the block (easing 0.1 per frame), 0.1–0.9 of the block;
     without the cursor (and on touch) the anchor slowly wanders on its own.
   p5 noise() → GSAP: endless sine.inOut tweens to random points (gsap.utils.random).
   One loop for everything: gsap.ticker; paused while the block is off screen (ScrollTrigger onToggle). */

const W = 1920;
const H = 1080;
const LIGHT = '#E5E5E5';
const DARK = '#1B1B1B';
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
  host.appendChild(svg);

  const setRect = (el, x, y, w, h) => {
    el.setAttribute('x', x);
    el.setAttribute('y', y);
    el.setAttribute('width', Math.max(0, w));
    el.setAttribute('height', Math.max(0, h));
  };

  const anchor = { x: W / 2, y: H / 2 };
  const mouse = { x: W / 2, y: H / 2 };
  const auto = { x: W / 2, y: H / 2 };
  let inside = false;

  /* Wandering point (instead of p5 noise): x slower than y, like noise(t*0.1) / noise(t*0.2) */
  const wanderX = () => gsap.to(auto, {
    x: gsap.utils.random(W * 0.2, W * 0.8),
    duration: gsap.utils.random(4, 7),
    ease: 'sine.inOut',
    onComplete: wanderX,
  });
  const wanderY = () => gsap.to(auto, {
    y: gsap.utils.random(H * 0.2, H * 0.8),
    duration: gsap.utils.random(2, 4),
    ease: 'sine.inOut',
    onComplete: wanderY,
  });
  wanderX();
  wanderY();

  /* Block center → design proportions (2/3 width, 1/3 height); edges → 0.1 / 0.9 as in the sketch */
  const REST_X = 2 / 3, REST_Y = 1 / 3;
  const xLeft = gsap.utils.mapRange(0, W / 2, 0.1, REST_X), xRight = gsap.utils.mapRange(W / 2, W, REST_X, 0.9);
  const yTop = gsap.utils.mapRange(0, H / 2, 0.9, REST_Y), yBottom = gsap.utils.mapRange(H / 2, H, REST_Y, 0.1);
  const mapX = (x) => (x <= W / 2 ? xLeft(x) : xRight(x));
  const mapY = (y) => (y <= H / 2 ? yTop(y) : yBottom(y));

  function draw() {
    const lw = W * mapX(anchor.x);
    const rw = W - lw;
    const th = H * mapY(anchor.y);
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

  /* Easing 0.1 per 60fps frame, same speed on 120Hz screens (GSAP docs: ticker.deltaRatio) */
  function tick() {
    const k = 1 - Math.pow(0.9, gsap.ticker.deltaRatio(60));
    const t = inside ? mouse : auto;
    anchor.x += (t.x - anchor.x) * k;
    anchor.y += (t.y - anchor.y) * k;
    draw();
  }

  /* Cursor over the block → its position in viewBox units */
  const onMove = (e) => {
    const r = host.getBoundingClientRect();
    if (!r.width || !r.height) return;
    mouse.x = ((e.clientX - r.left) / r.width) * W;
    mouse.y = ((e.clientY - r.top) / r.height) * H;
    inside = true;
  };
  const onLeave = () => { inside = false; };
  const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (hasHover) {
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
  }

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
    if (hasHover) {
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    }
    svg.remove();
  };
}

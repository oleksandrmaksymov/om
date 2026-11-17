/* ———— Cursor Label — a text label that follows the cursor inside its area (Research → cursor-experiment) ————
   Replaces the Osmo Stacking Image Trail (made for a stack of images) with a single label:
   — follows the cursor with gsap.quickTo on x / y (GSAP's documented way for cursor followers: transforms,
     no layout per frame);
   — one line (white-space: nowrap in Webflow), kept fully inside the area: at the edges it lines up
     with the edge instead of going out;
   — on enter it starts right under the cursor; the text appears like the Practice text — the area sends
     'cursorlabel:enter' / 'cursorlabel:leave' and highlight-marker.js grows / shrinks its bar;
   — cursor via core/pointer.js (move + scroll); desktop pointer only; cleanup on page leave (Barba).
   Webflow: area [data-cursor-label] (.cursor-label, absolute cover of its block)
            → item [data-cursor-label-item] (.cursor-label__item, absolute top-left, nowrap)
            → text [data-highlight-marker-reveal="dark"]. */
import { watchPointer } from '../core/pointer.js';

const FOLLOW = { duration: 0.5, ease: 'power3' };

export function initCursorLabel(scope) {
  const areas = scope.querySelectorAll('[data-cursor-label]');
  if (!areas.length) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cleanups = [];

  areas.forEach((area) => {
    const item = area.querySelector('[data-cursor-label-item]');
    if (!item) return;

    const xTo = gsap.quickTo(item, 'x', FOLLOW);
    const yTo = gsap.quickTo(item, 'y', FOLLOW);
    let w = 0;
    let h = 0;
    let inside = false;

    /* label size (cached, updated when it changes) */
    const ro = new ResizeObserver(() => { w = item.offsetWidth; h = item.offsetHeight; });
    ro.observe(item);
    w = item.offsetWidth;
    h = item.offsetHeight;

    const onPointer = (clientX, clientY) => {
      const r = area.getBoundingClientRect();
      const isIn = clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;

      if (!isIn) {
        if (inside) {
          inside = false;
          area.dispatchEvent(new CustomEvent('cursorlabel:leave'));
        }
        return;
      }

      /* label centered on the cursor, kept inside the area */
      const x = gsap.utils.clamp(0, Math.max(0, r.width - w), clientX - r.left - w / 2);
      const y = gsap.utils.clamp(0, Math.max(0, r.height - h), clientY - r.top - h / 2);

      if (!inside) {
        inside = true;
        xTo(x, x);   // start right under the cursor (quickTo start value) — no flight from the last exit
        yTo(y, y);
        area.dispatchEvent(new CustomEvent('cursorlabel:enter'));
        return;
      }
      xTo(x);
      yTo(y);
    };

    const stopWatch = watchPointer(onPointer);
    const onLeaveWindow = () => {
      if (!inside) return;
      inside = false;
      area.dispatchEvent(new CustomEvent('cursorlabel:leave'));
    };
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);

    cleanups.push(() => {
      stopWatch();
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
      ro.disconnect();
      gsap.killTweensOf(item);
      gsap.set(item, { clearProps: 'transform' });
    });
  });

  if (!cleanups.length) return;
  return () => cleanups.forEach((fn) => fn());
}

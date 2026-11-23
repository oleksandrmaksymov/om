/* ———— whenNear — create a below-the-first-screen block when it comes near the viewport ————
   IntersectionObserver (MDN) with a one-screen margin: init() runs once, when the element is within
   one screen of the viewport, so the block is ready before it scrolls into view. A block on the first
   screen is near at once and is created right away, as before. During the page transition the new page
   starts one screen below, so blocks further down are not created at landing at all — no landing work
   and no garbage for blocks the visitor never scrolls to. An element that is not rendered
   (display: none, e.g. a hidden card) never intersects, so it is never created.
   Returns a cleanup for the page lifecycle (Barba): stops watching and runs init's own cleanup. */
export function whenNear(el, init, margin = '100% 0px') {
  if (!el) return;
  let done = false;
  let cleanup = null;
  const io = new IntersectionObserver((entries) => {
    if (done || !entries.some((e) => e.isIntersecting)) return;
    done = true;
    io.disconnect();
    cleanup = init();
  }, { rootMargin: margin });
  io.observe(el);
  return () => {
    io.disconnect();
    if (typeof cleanup === 'function') cleanup();
  };
}

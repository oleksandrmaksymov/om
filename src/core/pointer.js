/* ———— Pointer tracking shared by cursor effects ————
   The browser sends pointer events only when the mouse moves. When the page scrolls under a still
   cursor, elements pass under it without any pointer event — so effects keep the last known cursor
   position and re-check it on every scroll (window 'scroll', fired by Lenis too).
   watchPointer(fn): fn(clientX, clientY) on pointer move and on scroll (once the cursor position is
   known). Returns a cleanup. */

const last = { x: 0, y: 0, known: false };

window.addEventListener('pointermove', (e) => {
  last.x = e.clientX;
  last.y = e.clientY;
  last.known = true;
}, { passive: true });

export function watchPointer(fn) {
  const onMove = (e) => fn(e.clientX, e.clientY);
  const onScroll = () => { if (last.known) fn(last.x, last.y); };
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  return function() {
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('scroll', onScroll);
  };
}

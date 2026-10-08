/* ———— Cursor Image ———— */
export function initCursorImageEffect(scope) {
  const followDuration = 0.4;

  const cursor = scope.querySelector('[data-cursor-image-status]');
  if (!cursor) return;
  const img = cursor.querySelector('[data-cursor-image-target]');
  const triggers = scope.querySelectorAll('[data-cursor-image]');
  if (!triggers.length) return;

  const xTo = gsap.quickTo(cursor, 'x', { duration: followDuration, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: followDuration, ease: 'power3' });

  const onMove = e => { xTo(e.clientX); yTo(e.clientY); };
  window.addEventListener('pointermove', onMove, { passive: true });

  triggers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const src = el.getAttribute('data-cursor-image');
      if (img && src) img.src = src;
      cursor.setAttribute('data-cursor-image-status', 'active');
    });

    el.addEventListener('mouseleave', () => {
      cursor.setAttribute('data-cursor-image-status', 'not-active');
    });
  });

  return function() {
    window.removeEventListener('pointermove', onMove);
    gsap.killTweensOf(cursor);
  };
}

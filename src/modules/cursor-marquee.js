/* ———— Cursor Marquee ———— */
export function initCursorMarqueeEffect(scope) {
  const hoverOutDelay = 0.4;
  const followDuration = 0.4;
  const speedMultiplier = 5;

  const cursor = scope.querySelector('[data-cursor-marquee-status]');
  if (!cursor) return;
  const textTargets = cursor.querySelectorAll('[data-cursor-marquee-text-target]');
  const triggers = scope.querySelectorAll('[data-cursor-marquee-text]');
  if (!triggers.length) return;

  const xTo = gsap.quickTo(cursor, 'x', { duration: followDuration, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: followDuration, ease: 'power3' });

  let pauseTimeout = null;

  const onMove = e => { xTo(e.clientX); yTo(e.clientY); };
  window.addEventListener('pointermove', onMove, { passive: true });

  triggers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (pauseTimeout) clearTimeout(pauseTimeout);
      const text = el.getAttribute('data-cursor-marquee-text') || '';
      const sec = (text.length || 1) / speedMultiplier;
      textTargets.forEach(t => {
        t.textContent = text;
        t.style.animationPlayState = 'running';
        t.style.animationDuration = sec + 's';
      });
      cursor.setAttribute('data-cursor-marquee-status', 'active');
    });

    el.addEventListener('mouseleave', () => {
      cursor.setAttribute('data-cursor-marquee-status', 'not-active');
      if (pauseTimeout) clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        textTargets.forEach(t => { t.style.animationPlayState = 'paused'; });
      }, hoverOutDelay * 1000);
    });
  });

  cursor.setAttribute('data-cursor-marquee-status', 'not-active');

  return function() {
    window.removeEventListener('pointermove', onMove);
    clearTimeout(pauseTimeout);
    gsap.killTweensOf(cursor);
  };
}

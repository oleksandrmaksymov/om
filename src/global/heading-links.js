/* ———— Heading Link swap underline (delegated) ———— */
export function initHeadingLinks() {
  if (!window.matchMedia('(hover: hover)').matches) return;

  document.addEventListener('mouseenter', function(e) {
    var el = e.target.closest && e.target.closest('.heading-link');
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)';
  }, true);

  document.addEventListener('mouseleave', function(e) {
    var el = e.target.closest && e.target.closest('.heading-link');
    if (!el) return;
    el.style.animation = 'none';
    void el.offsetHeight;
    el.style.animation = 'heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)';
  }, true);
}

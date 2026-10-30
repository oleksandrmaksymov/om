/* ———— Profile Pin — Info: the reel block stays on screen where it is at load ————
   Webflow: .profile[data-profile-pin] (in .title-6, first screen) → .profile-reel (video).
   ScrollTrigger pin from scroll 0 → the block keeps its first-screen position while the page
   scrolls under it (pinSpacing: false — layout unchanged), until its bottom meets the top of
   the footer block (.footer-instagram); then it leaves with the page.
   Only ≥768px (gsap.matchMedia creates / reverts it when the width crosses the breakpoint).
   Init after the page transition (initPageLayout) — real layout, scroll at the top. */
const PIN_MEDIA = '(min-width: 768px)';

export function initProfilePin(scope) {
  const block = scope.querySelector('[data-profile-pin]');
  const footer = scope.querySelector('.footer-instagram');
  if (!block || !footer) return;

  const mm = gsap.matchMedia();
  mm.add(PIN_MEDIA, function() {
    ScrollTrigger.create({
      trigger: block,
      pin: true,
      pinSpacing: false,
      start: 0,
      endTrigger: footer,
      /* the block's bottom on screen at scroll 0 (pins are reverted during refresh) */
      end: function() {
        return 'top ' + (block.getBoundingClientRect().bottom + window.scrollY) + 'px';
      },
    });
  });

  return function() { mm.revert(); };
}

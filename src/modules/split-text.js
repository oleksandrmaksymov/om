/* ———— SplitText Masked Text Reveal ———— */

/* Synchronous — same approach as the loader (no async font wait).
   Above fold: direct animation. Below fold: ScrollTrigger. */
export function initMaskTextScrollReveal(scope) {
  var splits = [];

  scope.querySelectorAll('[data-split]').forEach(function(el) {
    var split = SplitText.create(el, { type: 'lines', mask: 'lines' });
    gsap.set(el, { autoAlpha: 1 });

    var animVars = {
      yPercent: 110,
      duration: 2.0,
      stagger: 0.08,
      ease: 'expo.out',
    };

    if (el.getBoundingClientRect().top >= window.innerHeight) {
      animVars.scrollTrigger = {
        trigger: el,
        start: 'top 80%',
        once: true,
      };
    }

    gsap.from(split.lines, animVars);
    splits.push(split);
  });

  ScrollTrigger.refresh();

  return function() {
    splits.forEach(function(s) { s.revert(); });
  };
}

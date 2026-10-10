/* ———— Global Parallax Setup (osmo) ————
 * Webflow: data-parallax="trigger" on the parallax wrapper
 *          data-parallax="target" on the element to move (optional, defaults to trigger)
 *          data-parallax-direction="vertical|horizontal" (default: vertical)
 *          data-parallax-start / data-parallax-end — y/x pixel values (default: 20 / -20)
 *          data-parallax-scrub — scrub value (default: true)
 *          data-parallax-scroll-start / data-parallax-scroll-end — ScrollTrigger positions
 *          data-parallax-disable="mobile|mobileLandscape|tablet" — disable on breakpoint
 */
export function initParallax(scope) {
  const triggers = scope.querySelectorAll('[data-parallax="trigger"]');
  if (!triggers.length) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isMobile: '(max-width:479px)',
      isMobileLandscape: '(max-width:767px)',
      isTablet: '(max-width:991px)',
      isDesktop: '(min-width:992px)',
    },
    function (context) {
      var conditions = context.conditions;
      var isMobile = conditions.isMobile;
      var isMobileLandscape = conditions.isMobileLandscape;
      var isTablet = conditions.isTablet;

      var ctx = gsap.context(function () {
        triggers.forEach(function (trigger) {
          var disable = trigger.getAttribute('data-parallax-disable');
          if (
            (disable === 'mobile' && isMobile) ||
            (disable === 'mobileLandscape' && isMobileLandscape) ||
            (disable === 'tablet' && isTablet)
          ) {
            return;
          }

          var target = trigger.querySelector('[data-parallax="target"]') || trigger;

          var direction = trigger.getAttribute('data-parallax-direction') || 'vertical';
          var prop = direction === 'horizontal' ? 'x' : 'y';

          var scrubAttr = trigger.getAttribute('data-parallax-scrub');
          var scrub = scrubAttr ? parseFloat(scrubAttr) : true;

          var startAttr = trigger.getAttribute('data-parallax-start');
          var startVal = startAttr !== null ? parseFloat(startAttr) : 20;

          var endAttr = trigger.getAttribute('data-parallax-end');
          var endVal = endAttr !== null ? parseFloat(endAttr) : -20;

          var scrollStartRaw = trigger.getAttribute('data-parallax-scroll-start') || 'top bottom';
          var scrollStart = 'clamp(' + scrollStartRaw + ')';

          var scrollEndRaw = trigger.getAttribute('data-parallax-scroll-end') || 'bottom top';
          var scrollEnd = 'clamp(' + scrollEndRaw + ')';

          gsap.fromTo(
            target,
            { [prop]: startVal },
            {
              [prop]: endVal,
              ease: 'none',
              scrollTrigger: {
                trigger: trigger,
                start: scrollStart,
                end: scrollEnd,
                scrub: scrub,
              },
            }
          );
        });
      });

      return function () {
        ctx.revert();
      };
    }
  );

  return function () {
    mm.revert();
  };
}

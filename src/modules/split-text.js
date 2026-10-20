/* ———— SplitText Masked Text Reveal ———— */
export const SPLIT_DELAY = 0.25;
export const SPLIT_LINES = { duration: 0.8, yPercent: 110, stagger: 0.08, ease: 'expo.out' };

/* extraDelay: extra wait (sec) for text already on screen — e.g. while the new page fades in */
export function initMaskTextScrollReveal(scope, extraDelay = 0) {
  const splits = [];
  scope.querySelectorAll('[data-split]').forEach(el => {

    const isInView = el.getBoundingClientRect().top < window.innerHeight;

    splits.push(SplitText.create(el, {
      type: 'lines',
      autoSplit: true,
      mask: 'lines',
      onSplit(instance) {
        gsap.set(el, { autoAlpha: 1 });

        /* gsap.fromTo — explicit start and end values so the tween
           always knows its destination, even after an autoSplit re-split
           (GSAP docs: fromTo is safer than from when the natural CSS
           value might be affected by other transforms or re-renders) */
        const toVars = {
          yPercent: 0,
          duration: SPLIT_LINES.duration,
          stagger: SPLIT_LINES.stagger,
          ease: SPLIT_LINES.ease,
          delay: SPLIT_DELAY + (isInView ? extraDelay : 0),
        };

        if (!isInView) {
          toVars.scrollTrigger = {
            trigger: el,
            start: 'clamp(top 80%)',
            once: true,
          };
        }

        return gsap.fromTo(instance.lines,
          { yPercent: SPLIT_LINES.yPercent },
          toVars
        );
      }
    }));
  });
  return function() { splits.forEach(function(s) { s.revert(); }); };
}

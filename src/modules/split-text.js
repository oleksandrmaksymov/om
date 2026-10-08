/* ———— SplitText Masked Text Reveal ———— */
export const SPLIT_DELAY = 0.25;
export const SPLIT_LINES = { duration: 0.8, yPercent: 110, stagger: 0.08, ease: 'expo.out' };

export function initMaskTextScrollReveal(scope) {
  const splits = [];
  scope.querySelectorAll('[data-split]').forEach(el => {

    const isInView = el.getBoundingClientRect().top < window.innerHeight;

    splits.push(SplitText.create(el, {
      type: 'lines',
      autoSplit: true,
      mask: 'lines',
      onSplit(instance) {
        gsap.set(el, { autoAlpha: 1 });

        const vars = {
          yPercent: SPLIT_LINES.yPercent,
          duration: SPLIT_LINES.duration,
          stagger: SPLIT_LINES.stagger,
          ease: SPLIT_LINES.ease,
          delay: SPLIT_DELAY,
        };

        if (!isInView) {
          vars.scrollTrigger = {
            trigger: el,
            start: 'clamp(top 80%)',
            once: true,
          };
        }

        return gsap.from(instance.lines, vars);
      }
    }));
  });
  return function() { splits.forEach(function(s) { s.revert(); }); };
}

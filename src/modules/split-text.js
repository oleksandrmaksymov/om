/* ———— SplitText Masked Text Reveal ———— */
export const SPLIT_DELAY = 0.25;
export const SPLIT_LINES = { duration: 0.8, yPercent: 110, stagger: 0.08, ease: 'expo.out' };

/* Site text font — lines are measured only once it is loaded (SplitText docs: split after fonts load).
   FontFaceSet.load() waits for this one font only; resolves at once when it is already loaded. */
const SPLIT_FONT = '1em "Suisseintl Book"';

/* extraDelay: extra wait (sec) for text already on screen — e.g. while the new page fades in */
export function initMaskTextScrollReveal(scope, extraDelay = 0) {
  const splits = [];
  let cancelled = false;

  document.fonts.load(SPLIT_FONT).catch(function() {}).then(function() {
    if (cancelled) return;
    scope.querySelectorAll('[data-split]').forEach(el => {

      const isInView = el.getBoundingClientRect().top < window.innerHeight;
      let revealed = false;

      splits.push(SplitText.create(el, {
        type: 'lines',
        autoSplit: true,
        mask: 'lines',
        onSplit(instance) {
          gsap.set(el, { autoAlpha: 1 });

          /* Re-split after font swap: only rebuild lines, don't re-animate */
          if (revealed) return;

          const vars = {
            yPercent: SPLIT_LINES.yPercent,
            duration: SPLIT_LINES.duration,
            stagger: SPLIT_LINES.stagger,
            ease: SPLIT_LINES.ease,
            delay: SPLIT_DELAY + (isInView ? extraDelay : 0),
            onComplete: function() { revealed = true; },
          };

          if (!isInView) {
            /* text inside the page content pinned by circular-text: GSAP docs — pinnedContainer
               (the pin itself is created later, in initPageLayout) */
            vars.scrollTrigger = {
              trigger: el,
              start: 'clamp(top 80%)',
              once: true,
              pinnedContainer: el.closest('[data-circular-text="pin"]') || undefined,
            };
            vars.onComplete = function() { revealed = true; };
          }

          return gsap.from(instance.lines, vars);
        }
      }));
    });

  });

  return function() {
    cancelled = true;
    splits.forEach(function(s) { s.revert(); });
  };
}

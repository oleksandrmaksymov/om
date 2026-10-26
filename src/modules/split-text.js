/* ———— SplitText Masked Text Reveal ———— */
export const SPLIT_DELAY = 0.25;
export const SPLIT_LINES = { duration: 0.8, yPercent: 110, stagger: 0.08, ease: 'expo.out' };

/* extraDelay: extra wait (sec) for text already on screen — e.g. while the new page fades in */
export function initMaskTextScrollReveal(scope, extraDelay = 0) {
  const splits = [];
  let cancelled = false;

  function create(el, isInView) {
    let revealed = false;

    splits.push(SplitText.create(el, {
      type: 'lines',
      autoSplit: true,
      mask: 'lines',
      onSplit(instance) {
        gsap.set(el, { autoAlpha: 1 });

        /* Re-split after font swap / resize: only rebuild lines, don't re-animate */
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
  }

  /* Split once, after the browser has painted a frame with the web font.
     Double rAF guarantees at least one completed paint cycle — with font-display:swap
     (and on a restored tab) lines measured earlier use the fallback font (fixed 21.10).
     One split → the reveal starts once and is never restarted. */
  /* in view or not — measured now, before the page-enter animation moves the container (as before) */
  const items = Array.from(scope.querySelectorAll('[data-split]')).map(function(el) {
    return { el: el, isInView: el.getBoundingClientRect().top < window.innerHeight };
  });

  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      if (cancelled) return;
      items.forEach(function(item) { create(item.el, item.isInView); });
    });
  });

  return function() {
    cancelled = true;
    splits.forEach(function(s) { s.revert(); });
  };
}

/* ———— SplitText Masked Text Reveal (osmo documented approach) ———— */

const splitConfig = {
  lines: { duration: 0.8, stagger: 0.08 },
  words: { duration: 0.6, stagger: 0.06 },
  chars: { duration: 0.4, stagger: 0.01 }
};

/* End time (global timeline) of the first-screen reveal, per page container */
var introEnd = new WeakMap();

export function initMaskTextScrollReveal(scope) {
  introEnd.set(scope, 0);
  var splits = [];
  scope.querySelectorAll('[data-split]').forEach(function(heading) {
    var type = heading.dataset.splitReveal || 'lines';
    var typesToSplit =
      type === 'lines' ? 'lines' :
      type === 'words' ? 'lines, words' :
      'lines, words, chars';

    splits.push(SplitText.create(heading, {
      type: typesToSplit,
      mask: 'lines',
      autoSplit: true,
      onSplit: function(instance) {
        gsap.set(heading, { autoAlpha: 1 });
        var config = splitConfig[type];
        var animVars = {
          yPercent: 110,
          duration: config.duration,
          stagger: config.stagger,
          ease: 'expo.out',
        };

        if (heading._splitInVP === undefined) {
          heading._splitInVP = ScrollTrigger.isInViewport(heading);
        }

        if (heading._splitInVP) {
          animVars.delay = 0.5;
        } else {
          animVars.scrollTrigger = {
            trigger: heading,
            start: 'clamp(top 75%)',
            once: true,
          };
        }

        var tween = gsap.from(instance[type], animVars);
        if (heading._splitInVP) {
          /* GSAP docs: endTime() — when this tween finishes on the global timeline */
          introEnd.set(scope, Math.max(introEnd.get(scope) || 0, tween.endTime()));
        }
        return tween;
      }
    }));
  });

  /* Page cleanup (Barba leave): GSAP docs — revert() restores the text, stops autoSplit
     and kills the animation returned by onSplit (with its ScrollTrigger) */
  return function() {
    splits.forEach(function(split) { split.revert(); });
  };
}

/* Resolves when the first-screen text of this container has finished revealing
   (immediately if there is none). Used to start heavy layout work after the intro. */
export function afterIntroText(scope) {
  var wait = Math.max(0, (introEnd.get(scope) || 0) - gsap.globalTimeline.time());
  return new Promise(function(resolve) { gsap.delayedCall(wait, resolve); });
}

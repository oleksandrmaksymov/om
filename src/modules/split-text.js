/* ———— SplitText Masked Text Reveal (osmo documented approach) ———— */

const splitConfig = {
  lines: { duration: 0.8, stagger: 0.08 },
  words: { duration: 0.6, stagger: 0.06 },
  chars: { duration: 0.4, stagger: 0.01 }
};

export function initMaskTextScrollReveal(scope) {
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

        return gsap.from(instance[type], animVars);
      }
    }));
  });

  /* Page cleanup (Barba leave): GSAP docs — revert() restores the text, stops autoSplit
     and kills the animation returned by onSplit (with its ScrollTrigger) */
  return function() {
    splits.forEach(function(split) { split.revert(); });
  };
}

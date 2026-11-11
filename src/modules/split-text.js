/* ———— SplitText Masked Text Reveal (osmo documented approach) ———— */

const splitConfig = {
  lines: { duration: 0.8, stagger: 0.08 },
  words: { duration: 0.6, stagger: 0.06 },
  chars: { duration: 0.4, stagger: 0.01 }
};

export function initMaskTextScrollReveal(scope) {
  scope.querySelectorAll('[data-split]').forEach(function(heading) {
    var type = heading.dataset.splitReveal || 'lines';
    var typesToSplit =
      type === 'lines' ? 'lines' :
      type === 'words' ? 'lines, words' :
      'lines, words, chars';

    SplitText.create(heading, {
      type: typesToSplit,
      mask: 'lines',
      autoSplit: true,
      onSplit: function(instance) {
        gsap.set(heading, { autoAlpha: 1 });
        var config = splitConfig[type];

        return gsap.from(instance[type], {
          yPercent: 110,
          duration: config.duration,
          stagger: config.stagger,
          ease: 'expo.out',
          delay: 0.5,
          scrollTrigger: {
            trigger: heading,
            start: 'clamp(top 80%)',
            once: true,
          },
        });
      }
    });
  });
}

/* ———— Highlight Marker Text Reveal (osmo component) ———— */

const defaults = {
  direction: 'right',
  theme: '--color-dark',
  scrollStart: 'top 90%',
  staggerStart: 'start',
  stagger: 100,
  barDuration: 0.6,
  barEase: 'power3.inOut',
};

const directionMap = {
  right: { prop: 'scaleX', origin: 'right center' },
  left:  { prop: 'scaleX', origin: 'left center' },
  up:    { prop: 'scaleY', origin: 'center top' },
  down:  { prop: 'scaleY', origin: 'center bottom' },
};

function resolveColor(value) {
  if (value.startsWith('--')) {
    return getComputedStyle(document.body).getPropertyValue(value).trim() || value;
  }
  return value;
}

function createBar(color, origin) {
  const bar = document.createElement('div');
  bar.className = 'highlight-marker-bar';
  Object.assign(bar.style, {
    backgroundColor: color,
    transformOrigin: origin,
  });
  return bar;
}

export function initHighlightMarkerTextReveal(scope) {
  const elements = scope.querySelectorAll('[data-highlight-marker-reveal]');
  if (!elements.length) return function() {};

  const instances = [];

  elements.forEach(function(el) {
    const direction    = el.getAttribute('data-marker-direction')    || defaults.direction;
    const theme        = el.getAttribute('data-marker-theme')        || defaults.theme;
    const scrollStart  = el.getAttribute('data-marker-scroll-start') || defaults.scrollStart;
    const staggerStart = el.getAttribute('data-marker-stagger-start') || defaults.staggerStart;
    const staggerOffset = (parseFloat(el.getAttribute('data-marker-stagger')) || defaults.stagger) / 1000;

    const color     = resolveColor(theme);
    const dirConfig = directionMap[direction] || directionMap.right;

    const instance = { timeline: null, scrollTrigger: null, split: null };

    const split = SplitText.create(el, {
      type: 'lines',
      linesClass: 'highlight-marker-line',
      autoSplit: true,
      onSplit: function(self) {
        /* Teardown previous build (re-split on font swap) */
        if (instance.timeline)      { instance.timeline.kill(); }
        if (instance.scrollTrigger) { instance.scrollTrigger.kill(); }
        el.querySelectorAll('.highlight-marker-bar').forEach(function(bar) { bar.remove(); });

        /* Build bars and timeline */
        var lines = self.lines;
        var tl = gsap.timeline({ paused: true });

        lines.forEach(function(line, i) {
          gsap.set(line, { position: 'relative', overflow: 'hidden' });

          var bar = createBar(color, dirConfig.origin);
          line.appendChild(bar);

          var staggerIndex = staggerStart === 'end' ? lines.length - 1 - i : i;

          tl.to(bar, {
            [dirConfig.prop]: 0,
            duration: defaults.barDuration,
            ease: defaults.barEase,
          }, staggerIndex * staggerOffset);
        });

        /* Reveal parent — bars are covering the text */
        gsap.set(el, { autoAlpha: 1 });

        /* ScrollTrigger */
        var st = ScrollTrigger.create({
          trigger: el,
          start: scrollStart,
          once: true,
          onEnter: function() { tl.play(); },
        });

        instance.timeline = tl;
        instance.scrollTrigger = st;
      },
    });

    instance.split = split;
    instances.push(instance);
  });

  /* Cleanup for Barba page leave */
  return function() {
    instances.forEach(function(inst) {
      if (inst.timeline)      { inst.timeline.kill(); }
      if (inst.scrollTrigger) { inst.scrollTrigger.kill(); }
      if (inst.split)         { inst.split.revert(); }
    });
  };
}

/* ———— Highlight Marker Text Reveal (osmo component) ———— */
/* Default: bars COVER text on scroll; hover reveals individual lines.
   Background variants — the bar slides in UNDER the text (same timing), hover takes it away:
     data-highlight-marker-reveal="dark"  → white text on a black bar, hover: no bar, black text
     data-highlight-marker-reveal="light" → black text on a grey bar,  hover: no bar, black text */

const MARKER_COVER = { duration: 0.8, ease: 'expo.out' };
const MARKER_STAGGER = 0.08;

/* Background variants: space between the text and the edge of its bar (px, all sides).
   The line is an inline-block aligned to the top (vertical-align: top), so its parent grows to
   exactly line + padding and stacked items meet edge to edge on any screen */
const BG_PADDING = 4;

const BG_VARIANTS = {
  dark:  { bar: '#000000', text: '#FFFFFF', hoverText: '#000000' },
  light: { bar: '#E5E5E5', text: '#000000', hoverText: '#000000' },
};

const directionMap = {
  right: { prop: 'scaleX', origin: 'left center' },
  left:  { prop: 'scaleX', origin: 'right center' },
  up:    { prop: 'scaleY', origin: 'center bottom' },
  down:  { prop: 'scaleY', origin: 'center top' },
};

function createBar(color, origin) {
  var bar = document.createElement('div');
  bar.className = 'highlight-marker-bar';
  Object.assign(bar.style, {
    backgroundColor: color,
    transformOrigin: origin,
  });
  return bar;
}

export function initHighlightMarkerTextReveal(scope) {
  var elements = scope.querySelectorAll('[data-highlight-marker-reveal]');
  if (!elements.length) return function() {};

  var instances = [];

  elements.forEach(function(el) {
    var direction   = el.getAttribute('data-marker-direction') || 'right';
    var theme       = el.getAttribute('data-marker-theme') || '#000000';
    var scrollStart = el.getAttribute('data-marker-scroll-start') || 'top 90%';

    var color = theme.startsWith('--')
      ? (getComputedStyle(document.body).getPropertyValue(theme).trim() || theme)
      : theme;
    var dirConfig = directionMap[direction] || directionMap.right;
    var variant = BG_VARIANTS[el.getAttribute('data-highlight-marker-reveal')] || null;
    if (variant) color = variant.bar;

    var instance = { timeline: null, scrollTrigger: null, split: null, listeners: [] };
    var covered = false;

    var split = SplitText.create(el, {
      type: 'lines',
      linesClass: 'highlight-marker-line',
      autoSplit: true,
      onSplit: function(self) {
        /* Teardown previous build (re-split on font swap) */
        if (instance.timeline)      { instance.timeline.kill(); }
        if (instance.scrollTrigger) { instance.scrollTrigger.kill(); }
        el.querySelectorAll('.highlight-marker-bar').forEach(function(b) { b.remove(); });
        instance.listeners.forEach(function(l) { l.el.removeEventListener(l.type, l.fn); });
        instance.listeners = [];
        covered = false;

        var lines = self.lines;
        var tl = gsap.timeline({
          paused: true,
          onComplete: function() { covered = true; },
        });

        lines.forEach(function(line, i) {
          gsap.set(line, { position: 'relative', overflow: 'hidden' });

          var bar = createBar(color, dirConfig.origin);
          gsap.set(bar, { [dirConfig.prop]: 0 });
          line.appendChild(bar);

          /* Background variant: bar under the text (line = own layer), text in its variant color */
          if (variant) {
            gsap.set(line, { zIndex: 0, color: variant.text, padding: BG_PADDING, verticalAlign: 'top' });
            gsap.set(bar, { zIndex: -1 });
          }

          /* Bar covers text on scroll */
          tl.to(bar, {
            [dirConfig.prop]: 1,
            duration: MARKER_COVER.duration,
            ease: MARKER_COVER.ease,
          }, i * MARKER_STAGGER);

          /* Hover: reveal on enter, cover on leave */
          var onEnter = function() {
            if (!covered) return;
            gsap.to(bar, { [dirConfig.prop]: 0, duration: MARKER_COVER.duration, ease: MARKER_COVER.ease });
            if (variant) gsap.to(line, { color: variant.hoverText, duration: MARKER_COVER.duration, ease: MARKER_COVER.ease });
          };
          var onLeave = function() {
            if (!covered) return;
            gsap.to(bar, { [dirConfig.prop]: 1, duration: MARKER_COVER.duration, ease: MARKER_COVER.ease });
            if (variant) gsap.to(line, { color: variant.text, duration: MARKER_COVER.duration, ease: MARKER_COVER.ease });
          };

          line.addEventListener('mouseenter', onEnter);
          line.addEventListener('mouseleave', onLeave);
          instance.listeners.push(
            { el: line, type: 'mouseenter', fn: onEnter },
            { el: line, type: 'mouseleave', fn: onLeave }
          );
        });

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
      inst.listeners.forEach(function(l) { l.el.removeEventListener(l.type, l.fn); });
      if (inst.split)         { inst.split.revert(); }
    });
  };
}

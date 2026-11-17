/* ======================================================
   STACKED IMAGE TRAIL — Osmo
   Webflow: [data-stacked-trail-area] → [data-stacked-trail-item] (Research: .stacked-image-trail in .cursor-experiment);
   CSS (scale / clip-path reveal on [data-stacked-trail-area="hover"]) in Site Head, as in Osmo.
   Osmo logic and settings unchanged (leadEase 0.25, trailEase 0.16, pathFollow 1).
   Site adaptations: runs per page container (Barba) with a cleanup; the frame loop runs only while
   the area is on screen (Osmo runs it always); cursor move + scroll via core/pointer.js
   (Osmo does the same with document mousemove + window scroll);
   each item is kept fully inside the area: its target is clamped by half its own size, so at the
   area edges it lines up with the edge instead of going out (Research: one text item, one line);
   on enter the items start right under the cursor (no flight from the last exit point);
   the area also tells its content when the cursor enters / leaves it (CustomEvent 'stackedtrail:enter'
   / 'stackedtrail:leave') — the text inside appears like the Practice text (highlight-marker.js).
   ====================================================== */
import { watchPointer } from '../core/pointer.js';

export function initStackedImageTrail(scope) {
  var areas = Array.from(scope.querySelectorAll('[data-stacked-trail-area]'));
  if (!areas.length) return;

  var leadEase = 0.25;
  var trailEase = 0.16;
  var pathFollow = 1;

  var cleanups = [];

  areas.forEach(function (area) {
    var cards = Array.from(area.querySelectorAll('[data-stacked-trail-item]'));
    if (!cards.length) return;

    var mouseX = 50;
    var mouseY = 50;
    var lastClientX = null;
    var lastClientY = null;
    var isHovering = false;

    var states = cards.map(function (card, index) {
      card.style.zIndex = cards.length - index;
      return { el: card, x: 50, y: 50, hx: 0, hy: 0 };
    });

    /* sizes for the edge clamp (layout size, not affected by the hover scale) — cached, updated on resize */
    function measure() {
      var aw = area.offsetWidth;
      var ah = area.offsetHeight;
      if (!aw || !ah) return;
      states.forEach(function (state) {
        state.hx = Math.min(50, (state.el.offsetWidth / 2 / aw) * 100);
        state.hy = Math.min(50, (state.el.offsetHeight / 2 / ah) * 100);
      });
    }
    var ro = new ResizeObserver(measure);
    ro.observe(area);
    cards.forEach(function (card) { ro.observe(card); });
    measure();

    function getPercentFromClient(clientX, clientY) {
      var rect = area.getBoundingClientRect();
      var x = ((clientX - rect.left) / rect.width) * 100;
      var y = ((clientY - rect.top) / rect.height) * 100;
      if (x < 0) x = 0;
      if (x > 100) x = 100;
      if (y < 0) y = 0;
      if (y > 100) y = 100;
      return { x: x, y: y };
    }

    function updateFromPointer() {
      if (lastClientX === null || lastClientY === null) return;

      var rect = area.getBoundingClientRect();
      var inside =
        lastClientX >= rect.left &&
        lastClientX <= rect.right &&
        lastClientY >= rect.top &&
        lastClientY <= rect.bottom;

      if (!inside) {
        if (isHovering) {
          isHovering = false;
          area.setAttribute('data-stacked-trail-area', '');
          area.dispatchEvent(new CustomEvent('stackedtrail:leave'));
        }
        return;
      }

      var pos = getPercentFromClient(lastClientX, lastClientY);
      mouseX = pos.x;
      mouseY = pos.y;

      if (!isHovering) {
        isHovering = true;
        /* site: the items start right under the cursor — no flight from where the cursor left last time */
        states.forEach(function (state) { state.x = mouseX; state.y = mouseY; });
        area.setAttribute('data-stacked-trail-area', 'hover');
        area.dispatchEvent(new CustomEvent('stackedtrail:enter'));
      }
    }

    /* move + scroll with the last cursor position */
    var stopWatch = watchPointer(function (x, y) {
      lastClientX = x;
      lastClientY = y;
      updateFromPointer();
    });

    if (area.matches(':hover')) {
      isHovering = true;
      area.setAttribute('data-stacked-trail-area', 'hover');
      area.dispatchEvent(new CustomEvent('stackedtrail:enter'));
    }

    function step() {
      states.forEach(function (state, index) {
        var targetX;
        var targetY;

        if (index === 0) {
          targetX = mouseX;
          targetY = mouseY;
        } else {
          var prev = states[index - 1];
          targetX = prev.x * pathFollow + mouseX * (1 - pathFollow);
          targetY = prev.y * pathFollow + mouseY * (1 - pathFollow);
        }

        targetX = Math.min(100 - state.hx, Math.max(state.hx, targetX));
        targetY = Math.min(100 - state.hy, Math.max(state.hy, targetY));

        var ease = index === 0 ? leadEase : trailEase;
        state.x += (targetX - state.x) * ease;
        state.y += (targetY - state.y) * ease;

        state.el.style.left = state.x + '%';
        state.el.style.top = state.y + '%';
      });
    }

    /* frame loop only while the area is on screen */
    var raf = null;
    function animate() {
      step();
      raf = requestAnimationFrame(animate);
    }
    var st = ScrollTrigger.create({
      trigger: area,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: function (self) {
        if (self.isActive && !raf) animate();
        else if (!self.isActive && raf) { cancelAnimationFrame(raf); raf = null; }
      },
    });
    if (st.isActive && !raf) animate();

    cleanups.push(function () {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
      stopWatch();
      ro.disconnect();
      st.kill();
      area.setAttribute('data-stacked-trail-area', '');
      states.forEach(function (s) { s.el.style.left = ''; s.el.style.top = ''; s.el.style.zIndex = ''; });
    });
  });

  if (!cleanups.length) return;
  return function () { cleanups.forEach(function (fn) { fn(); }); };
}

/* ———— Services Block: Bar Cover + Hover Reveal with Color Inversion ———— */
/*
 * Flow:
 *   1. Items visible in original Figma colors
 *   2. Scroll → bars (same color as item bg) slide in, hiding text
 *   3. Hover → colors invert via CSS class + bar retreats (wipe reveal)
 *   4. Leave → bar covers back + class removed when bar fully covers
 *
 * data-services-item  — each service block
 * data-services-theme — 'dark' (#000 bg, #FFF text) or 'light' (#FFF bg, #000 text)
 */

var COVER = { duration: 0.8, ease: 'expo.out' };
var STAGGER = 0.06;

export function initServicesReveal(scope) {
  var container = scope.querySelector('[data-services-reveal]');
  if (!container) return function() {};

  var items = container.querySelectorAll('[data-services-item]');
  if (!items.length) return function() {};

  var cleanups = [];

  items.forEach(function(item, i) {
    var theme = item.getAttribute('data-services-theme'); // 'dark' or 'light'
    /* Bar color = original bg → blends in when covering */
    var barColor = theme === 'dark' ? '#000000' : '#FFFFFF';

    /* Create bar overlay */
    var bar = document.createElement('div');
    bar.className = 'services-bar';
    bar.style.backgroundColor = barColor;
    bar.style.transformOrigin = 'left center';
    item.appendChild(bar);

    /* Bar starts hidden, animates to scaleX(1) on scroll */
    gsap.set(bar, { scaleX: 0 });

    var covered = false;

    /* Cover timeline */
    var tl = gsap.timeline({ paused: true });
    tl.to(bar, {
      scaleX: 1,
      duration: COVER.duration,
      ease: COVER.ease,
      onComplete: function() { covered = true; },
    });

    /* ScrollTrigger — one for the whole container, staggered per item */
    var st = ScrollTrigger.create({
      trigger: container,
      start: 'top 70%',
      once: true,
      onEnter: function() {
        gsap.delayedCall(i * STAGGER, function() { tl.play(); });
      },
    });

    /* Hover handlers */
    var onEnter = function() {
      if (!covered) return;
      /* Invert colors via CSS, then wipe-reveal */
      item.classList.add('is-hovered');
      gsap.to(bar, {
        scaleX: 0,
        duration: COVER.duration,
        ease: COVER.ease,
      });
    };

    var onLeave = function() {
      if (!covered) return;
      /* Bar covers back, then reset colors */
      gsap.to(bar, {
        scaleX: 1,
        duration: COVER.duration,
        ease: COVER.ease,
        onComplete: function() {
          item.classList.remove('is-hovered');
        },
      });
    };

    item.addEventListener('mouseenter', onEnter);
    item.addEventListener('mouseleave', onLeave);

    cleanups.push(function() {
      tl.kill();
      st.kill();
      item.removeEventListener('mouseenter', onEnter);
      item.removeEventListener('mouseleave', onLeave);
      bar.remove();
      item.classList.remove('is-hovered');
    });
  });

  return function() {
    cleanups.forEach(function(fn) { fn(); });
  };
}

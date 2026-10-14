/* ======================================================
   BARBA — Overlapping Parallax page transition (Osmo)
   New page slides up over the current one; current page
   drifts up slower and darkens under [data-transition-dark].
   ====================================================== */
import { PAGE_EASE, PAGE_DURATION } from '../core/motion.js';

const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Длительность и плавность — в src/core/motion.js (общие с лоадером) */
const DURATION = PAGE_DURATION;

/* Когда начинает выезжать текст новой страницы (сек от начала перехода) */
export const TEXT_DELAY = 0.35;

/* Current page drifts up and darkens */
export function runPageLeaveAnimation(current) {
  const wrap = document.querySelector('[data-transition-wrap]');
  const dark = wrap && wrap.querySelector('[data-transition-dark]');

  const tl = gsap.timeline({
    onComplete: () => {
      current.remove();
      if (wrap) gsap.set(wrap, { clearProps: 'zIndex' });
    }
  });

  if (reducedMotionMQ.matches || !dark) {
    return tl.set(current, { autoAlpha: 0 });
  }

  tl.set(wrap, { zIndex: 2 });

  tl.fromTo(dark, { autoAlpha: 0 }, {
    autoAlpha: 0.8,
    duration: DURATION,
    ease: PAGE_EASE,
  }, 0);

  tl.fromTo(current, { y: '0vh' }, {
    y: '-25vh',
    duration: DURATION,
    ease: PAGE_EASE,
  }, 0);

  tl.set(dark, { autoAlpha: 0 });

  return tl;
}

/* New page slides up from the bottom over the current one.
   curtain — mobile menu curtain (if the menu was open): its bottom edge
   follows the new page's top edge every frame, so together they always
   cover the screen with no strip of the old page between them. */
export function runPageEnterAnimation(next, onReady, curtain) {
  const tl = gsap.timeline();

  if (reducedMotionMQ.matches) {
    tl.set(next, { autoAlpha: 1 });
  } else {
    tl.set(next, { zIndex: 3 }, 0);

    tl.fromTo(next, { y: '100vh' }, {
      y: '0vh',
      duration: DURATION,
      ease: PAGE_EASE,
      onUpdate: curtain ? function() {
        const c = curtain.getBoundingClientRect();
        const edge = next.getBoundingClientRect().top - c.top;
        const cut = Math.max(0, c.height - Math.max(0, edge));
        curtain.style.clipPath = 'inset(0px 0px ' + cut + 'px 0px)';
      } : null,
    }, 0);
  }

  tl.add('pageReady');
  tl.call(function() {
    gsap.set(next, { clearProps: 'zIndex' });
    onReady(next);
  }, null, 'pageReady');

  return new Promise(resolve => {
    tl.call(resolve, null, 'pageReady');
  });
}

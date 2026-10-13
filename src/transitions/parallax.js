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

/* New page slides up from the bottom over the current one */
/* opts.zIndex — layer of the new page during the transition
   (above the nav when it slides over the open mobile menu) */
export function runPageEnterAnimation(next, onReady, opts) {
  const zIndex = (opts && opts.zIndex) || 3;
  const tl = gsap.timeline();

  if (reducedMotionMQ.matches) {
    tl.set(next, { autoAlpha: 1 });
  } else {
    tl.set(next, { zIndex: zIndex }, 0);

    tl.fromTo(next, { y: '100vh' }, {
      y: '0vh',
      duration: DURATION,
      ease: PAGE_EASE,
    }, 0);
  }

  tl.add('pageReady');
  tl.call(function() {
    onReady(next);
    gsap.set(next, { clearProps: 'zIndex' });
  }, null, 'pageReady');

  return new Promise(resolve => {
    tl.call(resolve, null, 'pageReady');
  });
}

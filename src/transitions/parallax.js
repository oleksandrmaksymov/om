/* ======================================================
   BARBA — Overlapping Parallax page transition (Osmo)
   New page slides up over the current one; current page
   drifts up slower and darkens under [data-transition-dark].
   ====================================================== */
const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

CustomEase.create('parallax', '0.7, 0.05, 0.13, 1');

/* Длительность перехода (сек) */
const DURATION = 1.2;

/* Когда начинает выезжать текст новой страницы (сек от начала перехода) */
export const TEXT_DELAY = 0.5;

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
    ease: 'parallax',
  }, 0);

  tl.fromTo(current, { y: '0vh' }, {
    y: '-25vh',
    duration: DURATION,
    ease: 'parallax',
  }, 0);

  tl.set(dark, { autoAlpha: 0 });

  return tl;
}

/* New page slides up from the bottom over the current one */
export function runPageEnterAnimation(next, onReady) {
  const tl = gsap.timeline();

  if (reducedMotionMQ.matches) {
    tl.set(next, { autoAlpha: 1 });
  } else {
    tl.set(next, { zIndex: 3 }, 0);

    tl.fromTo(next, { y: '100vh' }, {
      y: '0vh',
      duration: DURATION,
      ease: 'parallax',
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

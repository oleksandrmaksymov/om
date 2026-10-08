/* ======================================================
   BARBA — Cross Fade page transition (Osmo)
   Nav lives outside the Barba container, so it stays put.
   ====================================================== */
const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Current page fades out (runs in parallel with enter — sync mode) */
export function runPageLeaveAnimation(current) {
  const tl = gsap.timeline({
    onComplete: () => { current.remove(); }
  });

  if (reducedMotionMQ.matches) {
    return tl.set(current, { autoAlpha: 0 });
  }

  tl.to(current, {
    autoAlpha: 0,
    ease: 'power1.in',
    duration: 0.4,
  }, 0);

  return tl;
}

/* New page fades in over the current one; resolves when it's ready */
export function runPageEnterAnimation(next, onReady) {
  const tl = gsap.timeline();

  if (reducedMotionMQ.matches) {
    tl.set(next, { autoAlpha: 1 });
  } else {
    tl.fromTo(next, {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      ease: 'power1.inOut',
      duration: 0.65,
    }, 0);
  }

  tl.add('pageReady');
  tl.call(onReady, [next], 'pageReady');

  return new Promise(resolve => {
    tl.call(resolve, null, 'pageReady');
  });
}

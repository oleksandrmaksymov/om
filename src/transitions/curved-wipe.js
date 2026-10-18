/* ======================================================
   BARBA — Curved Wipe page transition (Osmo)
   Webflow: [data-transition-wrap] block sits next to the nav,
   outside the Barba container, on every page.
   ====================================================== */
const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

/* Когда начинает открываться новая страница (сек).
   До этого момента панель закрывает экран и показывается логотип.
   Текст новой страницы начинает выезжать в этот же момент. */
export const ENTER_DELAY = 1.35;
export const TEXT_DELAY = ENTER_DELAY;

function getParts() {
  const wrap = document.querySelector('[data-transition-wrap]');
  if (!wrap) return null;
  return {
    panel: wrap.querySelector('[data-transition-panel]'),
    panelTop: wrap.querySelector('[data-transition-panel-top]'),
    panelBottom: wrap.querySelector('[data-transition-panel-bottom]'),
    logo: wrap.querySelector('[data-transition-logo]'),
    logoPaths: wrap.querySelectorAll('path'),
  };
}

/* Panel rises from below and covers the screen; current page drifts up */
export function runPageLeaveAnimation(current, next) {
  const parts = getParts();

  const tl = gsap.timeline({
    onComplete: () => { current.remove(); }
  });

  if (reducedMotionMQ.matches || !parts) {
    return tl.set(current, { autoAlpha: 0 });
  }

  const { panel, panelTop, panelBottom, logo, logoPaths } = parts;

  tl.set(panel, { autoAlpha: 1 }, 0);
  tl.set(panelTop, { scaleY: 0, height: '15vw' }, 0);
  tl.set(panelBottom, { scaleY: 1, height: '20vw' }, 0);
  tl.set(logo, { autoAlpha: 1 }, 0);
  tl.set(logoPaths, { yPercent: 105 }, 0);
  tl.set(next, { autoAlpha: 0 }, 0);

  tl.fromTo(panel, { yPercent: 0 }, {
    yPercent: -100,
    duration: 1,
    ease: 'osmo',
  }, 0);

  tl.fromTo(panelTop, { scaleY: 0 }, {
    scaleY: 1,
    duration: 1,
    ease: 'osmo',
  }, '<');

  tl.fromTo(logoPaths, { yPercent: 105 }, {
    yPercent: 0,
    duration: 0.8,
    ease: 'expo.out',
    stagger: { amount: 0.06 },
  }, '<+=0.4');

  tl.fromTo(current, { y: '0vh' }, {
    y: '-15dvh',
    duration: 1,
    ease: 'osmo',
  }, 0);

  return tl;
}

/* Panel continues up and reveals the new page rising from below */
export function runPageEnterAnimation(next, onReady) {
  const parts = getParts();
  const tl = gsap.timeline();

  if (reducedMotionMQ.matches || !parts) {
    tl.set(next, { autoAlpha: 1 });
  } else {
    const { panel, panelBottom, logoPaths } = parts;

    tl.add('startEnter', ENTER_DELAY);

    tl.set(next, { autoAlpha: 1 }, 'startEnter');

    tl.fromTo(panel, { yPercent: -100 }, {
      yPercent: -200,
      duration: 1,
      ease: 'osmo',
      overwrite: 'auto',
      immediateRender: false,
    }, 'startEnter');

    tl.fromTo(panelBottom, { scaleY: 1 }, {
      scaleY: 0,
      duration: 1,
      ease: 'osmo',
    }, '<');

    tl.set(panel, { autoAlpha: 0 }, '>');

    tl.to(logoPaths, {
      yPercent: -130,
      duration: 1.2,
      ease: 'expo.inOut',
      stagger: { amount: -0.06 },
    }, 'startEnter-=0.4');

    tl.from(next, {
      y: '25dvh',
      duration: 1,
      ease: 'osmo',
    }, 'startEnter');
  }

  tl.add('pageReady');
  tl.call(onReady, [next], 'pageReady');

  return new Promise(resolve => {
    tl.call(resolve, null, 'pageReady');
  });
}

/* First load (Barba once): no intro for this transition — just hide the
   black [data-transition-dark] (opaque by default in Site Head CSS) */
export function runPageOnceAnimation(next, onReady) {
  const dark = document.querySelector('[data-transition-dark]');
  if (dark) gsap.set(dark, { autoAlpha: 0 });
  onReady(next);
  return Promise.resolve();
}

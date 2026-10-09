import { addCleanup } from './core/lifecycle.js';
import { initAxion } from './modules/axion.js';
import { initLogoRevealLoader } from './modules/loader.js';
import { initTextFitToWidth } from './modules/text-fit.js';
import { initGrids } from './modules/pixel-grid.js';
import { initMaskTextScrollReveal } from './modules/split-text.js';
import { initCursorMarqueeEffect } from './modules/cursor-marquee.js';
import { initCursorImageEffect } from './modules/cursor-image.js';
import { initClock } from './modules/clock.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { playVideos } from './modules/videos.js';
import { initFlipOnScroll } from './modules/flip.js';

/* ======================================================
   PAGE INIT — content (before transition) + layout (after)
   ====================================================== */
export function initPageContent(container, isFirstLoad, textDelay = 0) {
  let splitHandled = false;

  /* Home: Axion + Loader */
  addCleanup(initAxion(container));

  const loaderWrap = document.querySelector('[data-load-wrap]');
  if (loaderWrap) {
    const loaderTl = (isFirstLoad && !sessionStorage.getItem('visited'))
      ? initLogoRevealLoader(container)
      : null;
    if (loaderTl) {
      splitHandled = true;
      addCleanup(function() { loaderTl.kill(); });
    } else {
      gsap.set(loaderWrap, { display: 'none' });
      gsap.set('[data-load-reset]', { autoAlpha: 1 });
    }
  }

  /* Axion page */
  addCleanup(initTextFitToWidth(container));

  /* Info page */
  addCleanup(initGrids(container));

  /* Shared */
  if (!splitHandled) addCleanup(initMaskTextScrollReveal(container, textDelay));
  addCleanup(initCursorMarqueeEffect(container));
  addCleanup(initCursorImageEffect(container));
  addCleanup(initClock(container));
  initCopyEmailClipboard(container);
  playVideos(container);
}

export function initPageLayout(container) {
  /* Home: Flip needs real page layout (no 3D transforms) */
  if (container.querySelector('[data-flip-element]') && window.innerWidth > 991) {
    addCleanup(initFlipOnScroll(container));
  }
}

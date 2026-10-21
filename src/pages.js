import { addCleanup } from './core/lifecycle.js';
import { initAxion, initAxionCard } from './modules/axion.js';
import { initLogoRevealLoader } from './modules/loader.js';
import { initTextFitToWidth } from './modules/text-fit.js';
import { initMaskTextScrollReveal } from './modules/split-text.js';
import { initHighlightMarkerTextReveal } from './modules/highlight-marker.js';
import { initCursorMarqueeEffect } from './modules/cursor-marquee.js';
import { initClock } from './modules/clock.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { playVideos } from './modules/videos.js';
import { initFlipOnScroll } from './modules/flip.js';


/* ======================================================
   PAGE INIT — content (before transition) + layout (after)
   ====================================================== */
export function initPageContent(container, isFirstLoad, textDelay = 0) {
  let splitHandled = false;
  let loaderTl = null;

  /* Home: Axion + Loader */
  addCleanup(initAxion(container));

  /* Logotypes grid: square spin-only Axion card */
  addCleanup(initAxionCard(container));

  const loaderWrap = document.querySelector('[data-load-wrap]');
  if (loaderWrap) {
    loaderTl = (isFirstLoad && !sessionStorage.getItem('visited'))
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

  /* Shared */
  if (!splitHandled) addCleanup(initMaskTextScrollReveal(container, textDelay));
  addCleanup(initHighlightMarkerTextReveal(container));
  addCleanup(initCursorMarqueeEffect(container));
  addCleanup(initClock(container));
  initCopyEmailClipboard(container);
  playVideos(container);

  /* Home loader timeline (first visit), so Barba once can add the page enter to it */
  return loaderTl;
}

export function initPageLayout(container) {
  /* Home: Flip needs real page layout (no 3D transforms) */
  if (container.querySelector('[data-flip-element]') && window.innerWidth > 991) {
    addCleanup(initFlipOnScroll(container));
  }
}

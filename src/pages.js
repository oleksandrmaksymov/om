import { addCleanup } from './core/lifecycle.js';
import { initAxion, initAxionCard } from './modules/axion.js';
import { initLogoRevealLoader } from './modules/loader.js';
import { initTextFitToWidth } from './modules/text-fit.js';
import { initHighlightMarkerTextReveal } from './modules/highlight-marker.js';
import { initCursorMarqueeEffect } from './modules/cursor-marquee.js';
import { initClock } from './modules/clock.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { playVideos } from './modules/videos.js';
import { initFlipOnScroll } from './modules/flip.js';
import { initCircularText, initCircularTextScroll } from './modules/circular-text.js';
import { initScatterText } from './modules/scatter-text.js';
import { initShowreel } from './modules/showreel.js';



/* ======================================================
   PAGE INIT — content (before transition) + layout (after)
   ====================================================== */
/* Text reveal (initMaskTextScrollReveal) is NOT called here — the caller
   decides when to init text, after the page is in its final position.
   Loader path: loader.js calls it at the 'hideContent' label.
   Transition path: main.js calls it in afterEnter (after resetPage).
   First load without loader: main.js calls it after runPageOnceAnimation. */
export function initPageContent(container, isFirstLoad) {
  let loaderTl = null;

  /* Home: Axion + Loader */
  addCleanup(initAxion(container));


  /* Logotypes grid: square spin-only Axion card */
  addCleanup(initAxionCard(container));

  /* Info: profile reel — Osmo Mini Showreel + Bunny HLS Player (preview plays before the page comes in) */
  addCleanup(initShowreel(container));

  const loaderWrap = document.querySelector('[data-load-wrap]');
  if (loaderWrap) {
    loaderTl = (isFirstLoad && !sessionStorage.getItem('visited'))
      ? initLogoRevealLoader(container)
      : null;
    if (loaderTl) {
      addCleanup(function() { loaderTl.kill(); });
    } else {
      gsap.set(loaderWrap, { display: 'none' });
      gsap.set('[data-load-reset]', { autoAlpha: 1 });
    }
  }

  /* Axion page */
  addCleanup(initTextFitToWidth(container));

  /* Shared */
  addCleanup(initHighlightMarkerTextReveal(container));
  addCleanup(initCursorMarqueeEffect(container));
  addCleanup(initClock(container));
  initCopyEmailClipboard(container);
  playVideos(container);

  /* Home loader timeline (first visit), so Barba once can add the page enter to it */
  return loaderTl;
}

export function initPageLayout(container) {
  /* Research: circular text — split + pin (below the fold, so init after transition) */
  addCleanup(initCircularText(container));
  addCleanup(initCircularTextScroll(container));

  /* Home: Flip needs real page layout (no 3D transforms) */
  if (container.querySelector('[data-flip-element]') && window.innerWidth > 991) {
    addCleanup(initFlipOnScroll(container));
  }

  /* Info: scatter text ([data-scatter] → [data-scatter-target]) — measures real layout */
  addCleanup(initScatterText(container));
}

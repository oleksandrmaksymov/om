import { addCleanup } from './core/lifecycle.js';
import { initAxion, initAxionCard } from './modules/axion.js';
import { initProfileCard } from './modules/profile-card.js';
import { initLogoRevealLoader } from './modules/loader.js';
import { initTextFitToWidth } from './modules/text-fit.js';
import { initMaskTextScrollReveal } from './modules/split-text.js';
import { initHighlightMarkerTextReveal } from './modules/highlight-marker.js';
import { initCursorMarqueeEffect } from './modules/cursor-marquee.js';
import { initClock } from './modules/clock.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { playVideos } from './modules/videos.js';
import { initFlipOnScroll } from './modules/flip.js';
import { initWavyAccordion } from './modules/wavy-accordion.js';
import { initCircularText, initCircularTextScroll } from './modules/circular-text.js';


/* ======================================================
   PAGE INIT — content (before transition) + layout (after)
   ====================================================== */
export function initPageContent(container, isFirstLoad, textDelay = 0) {
  let splitHandled = false;
  let loaderTl = null;

  /* Home: Axion + Loader */
  addCleanup(initAxion(container));

  /* Info: circular text — split letters (pin + reveal are created in initPageLayout) */
  addCleanup(initCircularText(container));

  /* Logotypes grid: square spin-only Axion card */
  addCleanup(initAxionCard(container));

  /* Info: profile card — WebGL photo effect in the 1:1 custom-code block */
  addCleanup(initProfileCard(container));

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
  addCleanup(initWavyAccordion(container));
  initCopyEmailClipboard(container);
  playVideos(container);

  /* Home loader timeline (first visit), so Barba once can add the page enter to it */
  return loaderTl;
}

export function initPageLayout(container) {
  /* Info: circular text pin needs real page layout (after the transition, scroll at top) */
  addCleanup(initCircularTextScroll(container));

  /* Home: Flip needs real page layout (no 3D transforms) */
  if (container.querySelector('[data-flip-element]') && window.innerWidth > 991) {
    addCleanup(initFlipOnScroll(container));
  }
}

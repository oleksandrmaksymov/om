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
import { afterIntroText } from './modules/split-text.js';
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

  /* Research: circular text — split letters (pin + reveal are created in initPageLayout) */
  addCleanup(initCircularText(container));

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
  /* Research: circular text pin needs real page layout (after the transition, scroll at top) */
  addCleanup(initCircularTextScroll(container));

  /* Home: Flip needs real page layout (no 3D transforms) */
  if (container.querySelector('[data-flip-element]') && window.innerWidth > 991) {
    addCleanup(initFlipOnScroll(container));
  }

  /* Scatter text ([data-scatter] → [data-scatter-target]) — measures real layout.
     Heavy (per-letter DOM + tweens), and static until the first scroll — created after
     the first-screen text has revealed, so it doesn't drop frames during the intro */
  var cancelled = false, scatterCleanup;
  addCleanup(function() { cancelled = true; if (scatterCleanup) scatterCleanup(); });
  afterIntroText(container).then(function() {
    if (cancelled) return;
    scatterCleanup = initScatterText(container);
    if (scatterCleanup) ScrollTrigger.sort();
  });

  /* Layout modules are created after the text reveals (out of page order), and a pin
     shifts everything below it — refresh ScrollTriggers top-to-bottom
     (GSAP docs: ScrollTrigger.sort() — by refreshPriority, then start) */
  ScrollTrigger.sort();
}

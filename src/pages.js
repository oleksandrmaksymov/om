import { addCleanup } from './core/lifecycle.js';
import { whenNear } from './core/when-near.js';
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
import { initScrollDriven, initScrollDrivenScroll } from './modules/scroll-driven.js';
import { initShowreel } from './modules/showreel.js';
import { initHouse } from './modules/house.js';
import { initPulseDots } from './modules/pulse-dots.js';
import { initDotsFx } from './modules/dots-fx.js';
import { initTextRings } from './modules/text-rings.js';
import { initTypeField } from './modules/type-field.js';
import { initCursorLabel } from './modules/cursor-label.js';
import { initScrambleHover } from './modules/scramble-hover.js';


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

  /* Research: house (SVG + GSAP) in the hero block — light, drawn before the page comes in */
  addCleanup(initHouse(container));

  /* Research: scramble hover on the interests list ([data-scramble-hover]) */
  addCleanup(initScrambleHover(container));

  /* Research: scroll-driven block — SVG strips built, squares hidden (pin + entrance in initPageLayout) */
  addCleanup(initScrollDriven(container));

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
  addCleanup(playVideos(container));

  /* Home loader timeline (first visit), so Barba once can add the page enter to it */
  return loaderTl;
}

export function initPageLayout(container) {
  /* Research: scroll-driven pin — above circular text, same pattern (after the transition, scroll at top) */
  addCleanup(initScrollDrivenScroll(container));

  /* Research: circular text pin needs real page layout (after the transition, scroll at top) */
  addCleanup(initCircularTextScroll(container));

  /* Home: Flip needs real page layout (no 3D transforms) */
  if (container.querySelector('[data-flip-element]') && window.innerWidth > 991) {
    addCleanup(initFlipOnScroll(container));
  }

  /* Research: cursor experiment — type field (sticky, cursor rows) + cursor label (text follows the cursor).
     Both measure the real layout, so they are created after the transition, like Flip.
     Type field (~2500 letters) is below the first screen → created when it comes near (core/when-near.js) */
  addCleanup(whenNear(container.querySelector('[data-type-field]'), () => initTypeField(container)));
  addCleanup(initCursorLabel(container));

  /* Research: pulse dots — below the first screen, built when it comes near (~950 SVG nodes + CSS animations),
     paused off screen */
  addCleanup(whenNear(container.querySelector('[data-pulse-dots]'), () => initPulseDots(container)));

  /* Research: Dots FX — WebGL2 port of the Unicorn scene "Dots" (test block under the video), after the transition */
  addCleanup(initDotsFx(container));

  /* Research: Text Rings — 5 breathing rings of text (Figma "circles"), after the transition */
  addCleanup(initTextRings(container));

  /* Layout modules are created after the text reveals (out of page order), and a pin
     shifts everything below it — refresh ScrollTriggers top-to-bottom
     (GSAP docs: ScrollTrigger.sort() — by refreshPriority, then start) */
  ScrollTrigger.sort();
}

/* ======================================================
   PAGE INTRO — first visit to any page except Home
   (Home has its own loader). The finale of the loader,
   without the logo: a black screen slides up and the page
   rides up with it, edge to edge. Same speed and ease as
   the loader and page transitions.

   Site Head marks the first visit before first paint:
   <html class="is-first-load"> + CSS keeps
   [data-transition-dark] black above everything,
   so the page never flashes before the intro.
   ====================================================== */
import { lenis } from '../core/setup.js';
import { PAGE_EASE, PAGE_DURATION } from '../core/motion.js';

/* Когда начинает выезжать текст страницы (сек от начала интро) */
export const INTRO_TEXT_DELAY = 0.35;

const FIRST_LOAD_CLASS = 'is-first-load';

/* Intro runs on a first visit to a page that has no loader */
export function hasPageIntro() {
  return document.documentElement.classList.contains(FIRST_LOAD_CLASS)
    && !document.querySelector('[data-load-wrap]');
}

export function runPageIntro(container) {
  const root = document.documentElement;
  const wrap = document.querySelector('[data-transition-wrap]');
  const dark = wrap && wrap.querySelector('[data-transition-dark]');

  if (!hasPageIntro() || !dark) {
    root.classList.remove(FIRST_LOAD_CLASS);
    return;
  }

  /* Hand the covered state from CSS over to inline styles */
  gsap.set(wrap, { zIndex: 101 });
  gsap.set(dark, { autoAlpha: 1 });
  root.classList.remove(FIRST_LOAD_CLASS);
  lenis.stop();

  gsap.to(dark, {
    yPercent: -100,
    duration: PAGE_DURATION,
    ease: PAGE_EASE,
    onUpdate: function() {
      gsap.set(container, { y: Math.max(0, dark.getBoundingClientRect().bottom) });
    },
    onComplete: function() {
      /* transform must not stay on the container — breaks position:fixed children */
      gsap.set(container, { clearProps: 'transform' });
      gsap.set(dark, { autoAlpha: 0, clearProps: 'transform' });
      gsap.set(wrap, { clearProps: 'zIndex' });
      lenis.start();
    },
  });
}

import { lenis } from '../core/setup.js';
import { addCleanup } from '../core/lifecycle.js';
import { initMaskTextScrollReveal } from './split-text.js';
import { PAGE_EASE, PAGE_DURATION } from '../core/motion.js';

/* ———— Logo Reveal Loader ———— */
export function initLogoRevealLoader(container) {
  const wrap = document.querySelector('[data-load-wrap]');
  if (!wrap) return null;

  lenis.stop();

  const bg = wrap.querySelector('[data-load-bg]');
  const progressBar = wrap.querySelector('[data-load-progress]');
  const logo = wrap.querySelector('[data-load-logo]');
  const logoContainer = wrap.querySelector('[data-load-container]');
  const textElements = Array.from(wrap.querySelectorAll('[data-load-text]'));

  const resetTargets = Array.from(wrap.querySelectorAll('[data-load-reset]:not([data-load-text])'));

  const loadTimeline = gsap
    .timeline({
      defaults: {
        ease: 'loader',
        duration: 3,
      },
    })
    .set(wrap, { display: 'block' })
    .to(progressBar, { scaleX: 1 })
    .to(logo, { clipPath: 'inset(0% 0% 0% 0%)' }, '<')
    .to(wrap.querySelector('.loader__text-wrap'), { autoAlpha: 0, duration: 0.5 })
    .to(progressBar, { scaleX: 0, transformOrigin: 'right center', duration: 0.5 }, '<')
    .add('hideContent', '<')
    /* Whole logo (grey base + white top) fades together — fading only the
       white top used to uncover the grey base for a moment */
    .to(logoContainer || logo, { autoAlpha: 0, duration: 0.3, ease: 'power1.out' }, 'hideContent')
    /* Text starts before the page is moved (positions must be measured untransformed);
       extra 0.3s delay keeps the same timing as before */
    .call(() => { addCleanup(initMaskTextScrollReveal(container, 0.3)); }, null, 'hideContent')
    /* Black background slides up — same speed and ease as the page transition.
       The page rides up with it: its top edge follows the background's bottom
       edge every frame (like the mobile menu curtain), so there is no gap. */
    .to(bg, {
      yPercent: -100,
      duration: PAGE_DURATION,
      ease: PAGE_EASE,
      onUpdate: function() {
        gsap.set(container, { y: Math.max(0, bg.getBoundingClientRect().bottom) });
      },
      onComplete: function() {
        /* transform must not stay on the container — breaks position:fixed children */
        gsap.set(container, { clearProps: 'transform' });
      },
    }, 'hideContent')
    .set(wrap, { display: 'none' })
    .call(() => { lenis.start(); })
    .call(() => { sessionStorage.setItem('visited', '1'); });

  if (resetTargets.length) {
    loadTimeline.set(resetTargets, { autoAlpha: 1 }, 0);
  }

  if (textElements.length >= 2) {
    const firstWord = new SplitText(textElements[0], { type: 'lines,chars', mask: 'lines' });
    const secondWord = new SplitText(textElements[1], { type: 'lines,chars', mask: 'lines' });

    gsap.set([firstWord.chars, secondWord.chars], { autoAlpha: 0, yPercent: 125 });
    gsap.set(textElements, { autoAlpha: 1 });

    loadTimeline.to(firstWord.chars, { autoAlpha: 1, yPercent: 0, duration: 0.6, stagger: { each: 0.02 } }, 0);
    loadTimeline.to(firstWord.chars, { autoAlpha: 0, yPercent: -125, duration: 0.4, stagger: { each: 0.02 } }, '>+=0.4');
    loadTimeline.to(secondWord.chars, { autoAlpha: 1, yPercent: 0, duration: 0.6, stagger: { each: 0.02 } }, '<');
    loadTimeline.to(secondWord.chars, { autoAlpha: 0, yPercent: -125, duration: 0.4, stagger: { each: 0.02 } }, 'hideContent-=0.5');
  }

  return loadTimeline;
}

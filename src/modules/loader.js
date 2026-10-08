import { lenis } from '../core/setup.js';
import { addCleanup } from '../core/lifecycle.js';
import { initMaskTextScrollReveal } from './split-text.js';

/* ———— Logo Reveal Loader ———— */
export function initLogoRevealLoader(container) {
  const wrap = document.querySelector('[data-load-wrap]');
  if (!wrap) return null;

  lenis.stop();

  const bg = wrap.querySelector('[data-load-bg]');
  const progressBar = wrap.querySelector('[data-load-progress]');
  const logo = wrap.querySelector('[data-load-logo]');
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
    .to(bg, { yPercent: -101, duration: 1 }, 'hideContent')
    .to(logo, { autoAlpha: 0, duration: 0.5 }, 'hideContent+=0.5')
    .call(() => { addCleanup(initMaskTextScrollReveal(container)); }, null, 'hideContent+=0.3')
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

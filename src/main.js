/* ======================================================
   OLEKSANDR MAKSYMOV — SITE SCRIPTS (entry)
   Webflow Site Footer must load before this bundle:
   gsap, Flip, ScrollTrigger, SplitText, CustomEase, Lenis, Barba
   ====================================================== */
import { lenis } from './core/setup.js';
import { detachPage } from './core/lifecycle.js';
import { initMobileMenu, closeMobileMenu, closeMenuCurtain } from './global/mobile-menu.js';
import { initHeadingLinks } from './global/heading-links.js';
import { updateCurrentLinks } from './global/nav-current.js';
import { resetWebflow } from './global/webflow.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { initClock } from './modules/clock.js';
import { initPageContent, initPageLayout } from './pages.js';
/* Active page transition — swap the file to switch:
   './transitions/parallax.js', './transitions/curved-wipe.js' or './transitions/crossfade.js' */
import { runPageOnceAnimation, runPageLeaveAnimation, runPageEnterAnimation, TEXT_DELAY } from './transitions/parallax.js';

let destroyPrevPage = null;
let menuWasOpen = false;

/* New page back into normal flow, scroll to top */
function resetPage(container) {
  /* transform must not stay on the container — it would break position:fixed children (cursors) */
  gsap.set(container, { clearProps: 'position,top,left,right,transform' });
  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true, force: true });
  lenis.resize();
  /* layout is final now (no transform) — re-measure every ScrollTrigger (GSAP docs: refresh after layout changes) */
  ScrollTrigger.refresh();
}

/* Page change hooks — shared by the 'default' and 'self' transitions */
const pageTransition = {
  sync: true,

  /* Open mobile menu: links close now, the curtain stays up and closes
     in enter() together with the page (same timeline start, duration, ease) */
  beforeLeave() {
    menuWasOpen = closeMobileMenu({ keepCurtain: true });
    lenis.stop();
    if (!destroyPrevPage) destroyPrevPage = detachPage();
  },

  beforeEnter(data) {
    if (!destroyPrevPage) destroyPrevPage = detachPage();
    /* New page sits on top of the current one while they cross-fade */
    gsap.set(data.next.container, { position: 'fixed', top: 0, left: 0, right: 0 });
    updateCurrentLinks();
    /* Text starts when the new page begins to appear */
    initPageContent(data.next.container, false, TEXT_DELAY);
  },

  leave(data) {
    return runPageLeaveAnimation(data.current.container, data.next.container);
  },

  enter(data) {
    if (menuWasOpen) {
      closeMenuCurtain();
      menuWasOpen = false;
    }
    return runPageEnterAnimation(data.next.container, resetPage);
  },

  afterLeave() {
    if (destroyPrevPage) {
      destroyPrevPage();
      destroyPrevPage = null;
    }
  },

  afterEnter(data) {
    resetWebflow(data);
    initPageLayout(data.next.container);
    lenis.start();
    ScrollTrigger.refresh();
  }
};

document.addEventListener('DOMContentLoaded', function() {
  barba.init({
    preventRunning: true,
    timeout: 7000,
    /* Links with #hash to the current page keep native anchor behaviour
       (otherwise Barba would treat them as the 'self' transition) */
    prevent: function({ el }) {
      if (!el || !el.href) return false;
      const url = new URL(el.href, location.href);
      return !!url.hash && url.pathname === location.pathname;
    },
    transitions: [{
      name: 'default',
      ...pageTransition,

      once(data) {
        const nav = document.querySelector('[data-menu-status]');
        initMobileMenu();
        initHeadingLinks();
        if (nav) {
          initCopyEmailClipboard(nav);
          initClock(nav);
        }
        if (!document.querySelector('[data-load-wrap]')) sessionStorage.setItem('visited', '1');

        const next = data.next.container;
        const loaderTl = initPageContent(next, true, TEXT_DELAY);
        initPageLayout(next);

        /* First load: page enters like in a transition. With the Home loader
           it starts when the loader background leaves, from the loader's height */
        if (loaderTl) {
          loaderTl.call(function() {
            const loaderBg = document.querySelector('[data-load-bg]');
            runPageOnceAnimation(next, resetPage, loaderBg ? loaderBg.offsetHeight : undefined);
          }, null, 'hideContent');
        } else {
          lenis.stop();
          runPageOnceAnimation(next, resetPage).then(function() { lenis.start(); });
        }
      }
    }, {
      /* Link to the current page (menu, nav): Barba loads it again
         and plays the same transition (Barba docs: 'self' transition) */
      name: 'self',
      ...pageTransition,
    }]
  });
});

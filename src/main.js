/* ======================================================
   OLEKSANDR MAKSYMOV — SITE SCRIPTS (entry)
   Webflow Site Footer must load before this bundle:
   gsap, Flip, ScrollTrigger, SplitText, CustomEase, Lenis, Barba
   ====================================================== */
import { lenis } from './core/setup.js';
import { addCleanup, detachPage } from './core/lifecycle.js';
import { initMobileMenu, closeMobileMenu, closeMenuCurtain } from './global/mobile-menu.js';
import { initHeadingLinks } from './global/heading-links.js';
import { updateCurrentLinks } from './global/nav-current.js';
import { resetWebflow } from './global/webflow.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { initClock } from './modules/clock.js';
import { initPageContent, initPageLayout } from './pages.js';
import { initMaskTextScrollReveal } from './modules/split-text.js';
/* Active page transition — swap the file to switch:
   './transitions/parallax.js', './transitions/curved-wipe.js' or './transitions/crossfade.js' */
import { runPageOnceAnimation, runPageLeaveAnimation, runPageEnterAnimation } from './transitions/parallax.js';

let destroyPrevPage = null;
let menuWasOpen = false;

/* New page back into normal flow, scroll to top */
function resetPage(container) {
  /* transform must not stay on the container — it would break position:fixed children (cursors) */
  gsap.set(container, { clearProps: 'position,top,left,right,transform' });
  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true, force: true });
  lenis.resize();
  /* ScrollTrigger.refresh() is NOT called here — it runs once in afterEnter,
     after old triggers are killed (afterLeave) and new layout triggers are created
     (initPageLayout). Lenis is stopped, so no scroll events fire in between. */
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
    /* Content modules (no text — text waits for afterEnter when page is in normal flow) */
    initPageContent(data.next.container, false);
  },

  leave(data) {
    return runPageLeaveAnimation(data.current.container, data.next.container);
  },

  enter(data) {
    if (menuWasOpen) {
      closeMenuCurtain();
      menuWasOpen = false;
    }
    initMaskTextScrollReveal(data.next.container);
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
        const loaderTl = initPageContent(next, true);
        /* initPageLayout is deferred to onReady (after resetPage) so that
           ScrollTrigger pins measure the final layout, not the mid-animation one.
           This fixes the Research page jerk on direct load. */

        /* First load: page enters like in a transition. With the Home loader
           it starts when the loader background leaves, from the loader's height */
        if (loaderTl) {
          loaderTl.call(function() {
            const loaderBg = document.querySelector('[data-load-bg]');
            initMaskTextScrollReveal(next);
            runPageOnceAnimation(next, function(container) {
              resetPage(container);
              initPageLayout(container);
              lenis.start();
              ScrollTrigger.refresh();
            }, loaderBg ? loaderBg.offsetHeight : undefined);
          }, null, 'hideContent');
        } else {
          lenis.stop();
          initMaskTextScrollReveal(next);
          runPageOnceAnimation(next, function(container) {
            resetPage(container);
            initPageLayout(container);
            lenis.start();
            ScrollTrigger.refresh();
          });
        }
      }
    }, {
      /* Link to the current page (menu, nav): Barba loads it again
         and plays the same transition (Barba docs: 'self' transition) */
      name: 'self',
      ...pageTransition,
    }]
  });

  /* bfcache: browser back/forward restores the page without DOMContentLoaded.
     ScrollTrigger positions may be stale — refresh them (GSAP docs). */
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      ScrollTrigger.refresh();
    }
  });
});

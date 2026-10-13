/* ======================================================
   OLEKSANDR MAKSYMOV — SITE SCRIPTS (entry)
   Webflow Site Footer must load before this bundle:
   gsap, Flip, ScrollTrigger, SplitText, CustomEase, Lenis, Barba
   ====================================================== */
import { lenis } from './core/setup.js';
import { detachPage } from './core/lifecycle.js';
import { initMobileMenu, closeMobileMenu, isMobileMenuOpen, resetMobileMenu, PAGE_OVER_MENU } from './global/mobile-menu.js';
import { initHeadingLinks } from './global/heading-links.js';
import { updateCurrentLinks } from './global/nav-current.js';
import { resetWebflow } from './global/webflow.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { initClock } from './modules/clock.js';
import { initPageContent, initPageLayout } from './pages.js';
/* Active page transition — swap the file to switch:
   './transitions/parallax.js', './transitions/curved-wipe.js' or './transitions/crossfade.js' */
import { runPageLeaveAnimation, runPageEnterAnimation, TEXT_DELAY } from './transitions/parallax.js';

let destroyPrevPage = null;
let overMenu = false; /* current transition slides over the open mobile menu */

/* New page back into normal flow, scroll to top */
function resetPage(container) {
  /* New page now covers the screen — close the menu under it, no animation */
  if (overMenu) { resetMobileMenu(); overMenu = false; }
  /* transform must not stay on the container — it would break position:fixed children (cursors) */
  gsap.set(container, { clearProps: 'position,top,left,right,transform' });
  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true, force: true });
  lenis.resize();
}

document.addEventListener('DOMContentLoaded', function() {
  barba.init({
    preventRunning: true,
    timeout: 7000,
    transitions: [{
      name: 'default',
      sync: true,

      once(data) {
        const nav = document.querySelector('[data-menu-status]');
        initMobileMenu();
        initHeadingLinks();
        if (nav) {
          initCopyEmailClipboard(nav);
          initClock(nav);
        }
        if (!document.querySelector('[data-load-wrap]')) sessionStorage.setItem('visited', '1');
        initPageContent(data.next.container, true);
        initPageLayout(data.next.container);
      },

      /* If the mobile menu is open, wait until its curtain has fully closed,
         then start the page transition */
      beforeLeave() {
        overMenu = PAGE_OVER_MENU && isMobileMenuOpen();
        const menuDone = overMenu ? Promise.resolve() : closeMobileMenu();
        return menuDone.then(function() {
          lenis.stop();
          if (!destroyPrevPage) destroyPrevPage = detachPage();
        });
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
        /* nav z-index is 100 — go above it when sliding over the open menu */
        return runPageEnterAnimation(data.next.container, resetPage, overMenu ? { zIndex: 101 } : null);
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
    }]
  });
});

/* ======================================================
   OLEKSANDR MAKSYMOV — SITE SCRIPTS (entry)
   Webflow Site Footer must load before this bundle:
   gsap, Flip, ScrollTrigger, SplitText, CustomEase, Lenis, Barba
   ====================================================== */
import { lenis } from './core/setup.js';
import { detachPage } from './core/lifecycle.js';
import { initMobileMenu, closeMobileMenu } from './global/mobile-menu.js';
import { initHeadingLinks } from './global/heading-links.js';
import { updateCurrentLinks } from './global/nav-current.js';
import { resetWebflow } from './global/webflow.js';
import { initCopyEmailClipboard } from './modules/copy-email.js';
import { initClock } from './modules/clock.js';
import { initPageContent, initPageLayout } from './pages.js';
import { runPageLeaveAnimation } from './transitions/cube.js';

let destroyPrevPage = null;

document.addEventListener('DOMContentLoaded', function() {
  barba.init({
    preventRunning: true,
    timeout: 7000,
    transitions: [{
      name: 'cube',
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

      beforeLeave() {
        closeMobileMenu();
        lenis.stop();
        if (!destroyPrevPage) destroyPrevPage = detachPage();
      },

      beforeEnter(data) {
        if (!destroyPrevPage) destroyPrevPage = detachPage();
        gsap.set(data.next.container, { position: 'fixed', top: 0, left: 0, right: 0 });
        updateCurrentLinks();
        initPageContent(data.next.container, false);
      },

      leave(data) {
        return runPageLeaveAnimation(data.current.container, data.next.container);
      },

      enter() {
        return Promise.resolve();
      },

      afterLeave() {
        if (destroyPrevPage) {
          destroyPrevPage();
          destroyPrevPage = null;
        }
      },

      afterEnter(data) {
        lenis.scrollTo(0, { immediate: true, force: true });
        resetWebflow(data);
        initPageLayout(data.next.container);
        lenis.resize();
        lenis.start();
        ScrollTrigger.refresh();
      }
    }]
  });
});

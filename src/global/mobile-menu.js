import { lenis } from '../core/setup.js';
import { PAGE_EASE, PAGE_DURATION, PAGE_DARK } from '../core/motion.js';

/* ———— Mobile burger menu ———— */
/* Curtain (.nav-bg) is animated by GSAP only. CSS sets just its closed start
   state — GSAP docs: no CSS transitions on properties GSAP animates.
   Links, burger lines, colors stay on CSS ([data-menu-status]). */
const CURTAIN_OPEN = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
const CURTAIN_CLOSED = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';

let curtain = null;

/* Closes the menu. keepCurtain: true — curtain stays up so the page
   transition can close it (closeMenuCurtain). Returns true if it was open. */
export let closeMobileMenu = function() { return false; };

/* Curtain closes with the same duration/ease as the page transition,
   darkening like the old page. Started together with the enter animation. */
export function closeMenuCurtain() {
  if (!curtain) return;
  gsap.timeline()
    .to(curtain, { clipPath: CURTAIN_CLOSED, duration: PAGE_DURATION, ease: PAGE_EASE, overwrite: true }, 0)
    .fromTo(curtain, { filter: 'brightness(1)' }, {
      filter: 'brightness(' + (1 - PAGE_DARK) + ')',
      duration: PAGE_DURATION,
      ease: PAGE_EASE,
    }, 0)
    .set(curtain, { clearProps: 'filter' });
}

export function initMobileMenu() {
  const btn = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-menu-status]');
  if (!btn || !nav) return;

  curtain = nav.querySelector('.nav-bg');

  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-controls', 'mobile-navigation');
  nav.setAttribute('id', 'mobile-navigation');
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  function setOpen(open) {
    nav.dataset.menuStatus = open ? 'open' : 'closed';
    btn.setAttribute('aria-expanded', open);
    if (open) { lenis.stop(); document.body.style.overflow = 'hidden'; }
    else { lenis.start(); document.body.style.overflow = ''; }
  }

  function animateCurtain(open) {
    if (!curtain) return;
    gsap.to(curtain, {
      clipPath: open ? CURTAIN_OPEN : CURTAIN_CLOSED,
      duration: PAGE_DURATION,
      ease: PAGE_EASE,
      overwrite: true,
    });
  }

  btn.addEventListener('click', function() {
    const open = nav.dataset.menuStatus !== 'open';
    setOpen(open);
    animateCurtain(open);
  });

  closeMobileMenu = function(options) {
    if (nav.dataset.menuStatus !== 'open') return false;
    setOpen(false);
    if (!(options && options.keepCurtain)) animateCurtain(false);
    return true;
  };
}

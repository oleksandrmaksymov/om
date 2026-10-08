import { lenis } from '../core/setup.js';

/* ———— Mobile burger menu ———— */
export let closeMobileMenu = function() {};

export function initMobileMenu() {
  const btn = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-menu-status]');
  if (!btn || !nav) return;

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

  btn.addEventListener('click', function() {
    setOpen(nav.dataset.menuStatus !== 'open');
  });

  closeMobileMenu = function() {
    if (nav.dataset.menuStatus === 'open') setOpen(false);
  };
}

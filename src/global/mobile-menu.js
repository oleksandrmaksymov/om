import { lenis } from '../core/setup.js';

/* ———— Mobile burger menu ———— */
/* Closes the menu with its CSS curtain animation (link to the current page) */
export let closeMobileMenu = function() {};

/* Page transition from the open menu: closes the menu (links, burger),
   but holds the curtain open so the transition can close it in sync
   with the new page. Returns the curtain element, or null if the menu
   wasn't open. */
export let takeMenuCurtain = function() { return null; };

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

  takeMenuCurtain = function() {
    if (nav.dataset.menuStatus !== 'open') return null;
    const curtain = nav.querySelector('.nav-bg');
    /* Inline styles beat the CSS closed state: curtain stays fully open */
    if (curtain) gsap.set(curtain, { transition: 'none', clipPath: 'inset(0px 0px 0px 0px)' });
    setOpen(false);
    return curtain;
  };

  /* Link to the page you're already on: don't navigate, just close the menu */
  const norm = function(p) { return p.replace(/\/$/, '') || '/'; };
  nav.addEventListener('click', function(e) {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin || url.hash) return;
    if (norm(url.pathname) !== norm(location.pathname)) return;
    e.preventDefault();
    e.stopPropagation();
    closeMobileMenu();
  });
}

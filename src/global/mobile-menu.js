import { lenis } from '../core/setup.js';

/* ———— Mobile burger menu ———— */
/* Must match the .nav-bg clip-path transition in Site Head (0.7s) */
const MENU_CLOSE_DURATION = 400;

/* Returns a promise that resolves once the menu has fully closed
   (resolves immediately if it wasn't open) */
export let closeMobileMenu = function() { return Promise.resolve(); };

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
    if (nav.dataset.menuStatus !== 'open') return Promise.resolve();
    setOpen(false);
    return new Promise(function(resolve) { setTimeout(resolve, MENU_CLOSE_DURATION); });
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

/* ———— Current nav link after Barba navigation ———— */
export function updateCurrentLinks() {
  const norm = function(p) { return p.replace(/\/$/, '') || '/'; };
  const path = norm(location.pathname);
  document.querySelectorAll('[data-menu-status] a[href]').forEach(function(a) {
    const url = new URL(a.href, location.href);
    const current = url.origin === location.origin && norm(url.pathname) === path && !url.hash;
    a.classList.toggle('w--current', current);
    if (current) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
}

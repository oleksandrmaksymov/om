/* ======================================================
   UNICORN STUDIO — WebGL scene (Research page)
   Webflow (Research):
     .unicorn-embed[data-us-project-src]
   SDK loaded dynamically, init auto-discovers data-us-* divs.
   Cleanup destroys all scenes on page leave (Barba).
   ====================================================== */
import { loadScript } from '../core/load-script.js';

const SDK_SRC = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.5.2/dist/unicornStudio.umd.js';

export function initUnicorn(scope) {
  if (!scope.querySelector('[data-us-project-src]')) return;

  let destroyed = false;

  if (window.UnicornStudio) {
    UnicornStudio.init();
  } else {
    loadScript(SDK_SRC).then(function() {
      if (destroyed) return;
      if (window.UnicornStudio) UnicornStudio.init();
    }).catch(function(err) {
      console.error('Unicorn Studio SDK failed to load:', err);
    });
  }

  return function() {
    destroyed = true;
    if (window.UnicornStudio && typeof UnicornStudio.destroy === 'function') {
      UnicornStudio.destroy();
    }
  };
}

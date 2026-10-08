/* Page lifecycle: every page module returns a cleanup function */
export let pageCleanups = [];
export function addCleanup(fn) {
  if (typeof fn === 'function') pageCleanups.push(fn);
}

/* Detach current page (cleanups + ScrollTriggers) → returns destroy() to run later */
export function detachPage() {
  const cleanups = pageCleanups;
  const triggers = ScrollTrigger.getAll();
  pageCleanups = [];
  return function destroy() {
    cleanups.forEach(function(fn) {
      try { fn(); } catch (e) { console.error(e); }
    });
    triggers.forEach(function(t) { t.kill(); });
    window._flipProgress = 0;
  };
}

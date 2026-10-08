export const scriptCache = {};
export function loadScript(src) {
  if (!scriptCache[src]) {
    scriptCache[src] = new Promise(function(resolve, reject) {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return scriptCache[src];
}

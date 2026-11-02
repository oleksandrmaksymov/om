/* ———— Clock ———— */
export function initClock(scope) {
  const clockEl = scope.querySelector('[data-clock]');
  if (!clockEl) return;
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Kyiv',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    const short = now.toLocaleString('en-GB', {
      timeZone: 'Europe/Kyiv',
      timeZoneName: 'short'
    });
    const tz = short.split(' ').pop();
    clockEl.textContent = time + ' ' + tz;
  }
  updateClock();
  const id = setInterval(updateClock, 1000);
  return function() { clearInterval(id); };
}

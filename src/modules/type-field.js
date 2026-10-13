/* ———— Type Field — cursor-reactive typography column (Home → cases-grid) ————
   Webflow: div.type-field [data-type-field] [data-text="…"], first child of the
   section it sticks in (position: sticky set in Webflow). Desktop only (≥992px).
   Rows are generated here; reveal uses the same motion as [data-split] text. */
import { lenis } from '../core/setup.js';
import { SPLIT_DELAY, SPLIT_LINES } from './split-text.js';

const TF = {
  radius: 4,          // rows above/below the cursor row (4 + 1 + 4 = 9)
  ease: 0.12,         // how fast a row grows/shrinks to its target length
  followEase: 0.2,    // how fast the shape follows the cursor
  ragged: 0.6,        // length variation of the side rows (0 = even steps)
  maxSide: 0.85,      // side rows never longer than this share of the phrase
  revealAmount: 0.7,  // total stagger of the row reveal (sec)
};

const hash = (n) => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
const vnoise = (x) => { const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f); return hash(i) * (1 - u) + hash(i + 1) * u; };

export function initTypeField(scope) {
  const root = scope.querySelector('[data-type-field]');
  if (!root || !window.matchMedia('(min-width: 992px)').matches) return;
  const text = root.getAttribute('data-text');
  if (!text) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const section = root.parentElement;

  let rows = [];          // { chars, cur, drawn }
  let split = null;
  let revealed = false;
  let padTop = 0, lineH = 18, blockH = 0;
  let sectionTop = 0, sectionBottom = 0;   // absolute page coords, cached on refresh
  let mouseY = -1e5, peak = -1e5;
  let ticking = false;

  /* ——— build rows + SplitText ——— */
  function build() {
    if (split) split.revert();
    root.textContent = '';

    const cs = getComputedStyle(root);
    padTop = parseFloat(cs.paddingTop);
    lineH  = parseFloat(cs.lineHeight);
    blockH = root.offsetHeight;
    const count = Math.max(1, Math.floor((blockH - padTop - parseFloat(cs.paddingBottom)) / lineH));

    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const row = document.createElement('div');
      row.className = 'type-field__row';
      row.textContent = text;
      frag.appendChild(row);
    }
    root.appendChild(frag);
    root.setAttribute('aria-hidden', 'true');

    split = SplitText.create(root.children, {
      type: 'lines,chars',
      linesClass: 'text-line',            // mask → .text-line-mask (descender fix already in Site Head)
      charsClass: 'type-field__char',
      mask: 'lines',
      aria: 'hidden',
      autoSplit: true,
      onSplit(self) {
        rows = [...root.children].map((row, i) => ({
          chars: row.querySelectorAll('.type-field__char'),
          cur: rows[i] ? rows[i].cur : 1,
          drawn: 1,
        }));
        // already shown (resize/font re-split) or reduced motion → no replay
        if (reduceMotion || revealed) { revealed = true; return; }
        return gsap.from(self.lines, {
          yPercent: SPLIT_LINES.yPercent,
          duration: SPLIT_LINES.duration,
          ease: SPLIT_LINES.ease,
          stagger: { amount: TF.revealAmount },
          delay: SPLIT_DELAY,
          scrollTrigger: { trigger: root, start: 'clamp(top 80%)', once: true },
          onComplete() { revealed = true; },
        });
      },
    });
  }

  /* ——— show the first n letters of a row (letters switch on/off, no fades) ——— */
  function draw(row) {
    const n = Math.max(1, Math.min(row.chars.length, Math.round(row.cur)));
    if (n === row.drawn) return;
    const lo = Math.min(n, row.drawn), hi = Math.max(n, row.drawn);
    for (let j = lo; j < hi; j++) row.chars[j].style.visibility = j < n ? 'visible' : 'hidden';
    row.drawn = n;
  }

  /* ——— per-frame: longest row opposite the cursor, shorter up/down ——— */
  function tick(time, deltaTime) {
    if (!revealed || !rows.length) return;
    const k = Math.min(deltaTime, 50) / 16.667;
    const f = (e) => 1 - Math.pow(1 - e, k);

    // sticky position from cached section bounds — no layout reads per frame
    const s = lenis.scroll;
    const blockTop = Math.min(Math.max(sectionTop - s, 0), sectionBottom - s - blockH);

    peak += (mouseY - blockTop - padTop - peak) * f(TF.followEase);
    const center = Math.floor(peak / lineH);
    const phase = s * 0.004;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const L = row.chars.length;
      const dist = Math.abs(i - center);
      let target = 1;
      if (dist === 0) {
        target = L;
      } else if (dist <= TF.radius) {
        const base = 1 - dist / (TF.radius + 1);
        const p = Math.min(TF.maxSide, base * (1 - TF.ragged / 2 + TF.ragged * vnoise(i * 1.3 + phase)));
        target = 1 + p * (L - 1);
      }
      row.cur += (target - row.cur) * f(TF.ease);
      draw(row);
    }
  }

  function start() { if (!ticking && !reduceMotion) { gsap.ticker.add(tick); ticking = true; } }
  function stop()  { if (ticking) { gsap.ticker.remove(tick); ticking = false; } }

  const onMove = (e) => {
    if (peak < -1e4) peak = e.clientY;   // first move: no sweep from off-screen
    mouseY = e.clientY;
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  build();

  /* ——— run only while the section is on screen; cache its bounds on refresh ——— */
  const st = ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    onRefresh(self) {
      sectionTop = self.start + window.innerHeight;  // 'top bottom' → section top
      sectionBottom = self.end;                      // 'bottom top' → section bottom
    },
    onToggle(self) { self.isActive ? start() : stop(); },
  });
  if (st.isActive) start();

  /* ——— row count follows the block height ——— */
  let resizeTimer;
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const count = Math.floor((root.offsetHeight - padTop - parseFloat(getComputedStyle(root).paddingBottom)) / lineH);
      if (count !== rows.length) { build(); ScrollTrigger.refresh(); }
    }, 150);
  };
  window.addEventListener('resize', onResize);

  return function() {
    stop();
    clearTimeout(resizeTimer);
    window.removeEventListener('pointermove', onMove);
    window.removeEventListener('resize', onResize);
    st.kill();
    if (split) split.revert();
    root.textContent = '';
    root.removeAttribute('aria-hidden');
  };
}

/* ———— Scatter Text — letters drift from one text to another while scrolling ————
   Webflow:
     source  [data-scatter="name"]          e.g. .transparent-text_1 (mirrored, transparent)
     target  [data-scatter-target="name"]   e.g. .type-motion-1 (normal text, final place)
   Both must contain the same text. Position, mirror, opacity, font are set in Webflow;
   the module only measures them (Range API returns the real, already mirrored glyph boxes).
   Before the start the source is shown, after the end the target — the letters layer
   (position: fixed, created here) is visible only while the effect runs.
   Settings (optional, on the source):
     data-scatter-mid-opacity   letters in the cloud               (= opacity of the source)
     data-scatter-overflow      cloud beyond the screen edges      (0.8)
     data-scatter-swap          where on its path a letter turns from mirrored to normal (0.5)
     data-scatter-swap-length   length of that cross-fade          (0.16)
     data-scatter-spread        uneven start/arrival               (0.04)
     data-scatter-seed          scatter variant                    (42)
   Layout is measured on every ScrollTrigger refresh (resize, page transitions);
   while scrolling, each letter only gets its position/opacity (gsap.quickSetter).
   Desktop only (≥992px). */

const REVEAL_SCREENS = 0.5; // letters gather into full opacity over the last half screen

function seededRandom(seed) { // sfc32 + splitmix32
  let s = seed >>> 0;
  const sm = () => {
    s = (s + 0x9e3779b9) | 0;
    let t = s ^ (s >>> 16); t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15); t = Math.imul(t, 0x735a2d97);
    return (t ^ (t >>> 15)) >>> 0;
  };
  let a = sm(), b = sm(), c = sm(), d = sm();
  const r = () => {
    a |= 0; b |= 0; c |= 0; d |= 0;
    const t = (a + b | 0) + d | 0; d = d + 1 | 0;
    a = b ^ (b >>> 9); b = c + (c << 3) | 0;
    c = (c << 21) | (c >>> 11); c = c + t | 0;
    return (t >>> 0) / 4294967296;
  };
  for (let i = 0; i < 12; i++) r();
  return r;
}

/* every visible character of an element with its on-screen box (Range API) */
function measureChars(el) {
  const out = [];
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const text = node.textContent;
    for (let i = 0; i < text.length; i++) {
      if (/\s/.test(text[i])) continue;
      const range = document.createRange();
      range.setStart(node, i); range.setEnd(node, i + 1);
      const b = range.getBoundingClientRect();
      out.push({ ch: text[i], x: b.left, y: b.top + window.scrollY, w: b.width, h: b.height });
    }
  }
  return out;
}

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a, b, t) => a + (b - a) * t;

function initPair(source, target, scope) {
  const d = source.dataset;
  const n = (v, def) => (v === undefined || v === '' || isNaN(+v) ? def : +v);
  const P = {
    midOpacity: n(d.scatterMidOpacity, null), // null → keep the source opacity the whole way
    overflow:   n(d.scatterOverflow, 0.8),
    swap:       n(d.scatterSwap, 0.5),
    swapLength: n(d.scatterSwapLength, 0.16),
    spread:     n(d.scatterSpread, 0.04),
    seed:       n(d.scatterSeed, 42),
  };

  const layer = document.createElement('div');
  layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;overflow:hidden;visibility:hidden;';
  scope.prepend(layer); // first in the container → under later positioned content (cards, video)

  const sineInOut = gsap.parseEase('sine.inOut');
  const sineIn = gsap.parseEase('sine.in');

  let st = null, letters = [], restOnLayer = false, destroyed = false;

  // which of the three is visible: source (before), layer (during), target (after).
  // When the range starts at scroll 0 (source on the first screen), the letters layer
  // replaces the source right away — same glyphs, same place — so it is already painted
  // before the first scroll
  const show = (state) => {
    if (state === 'before' && restOnLayer) state = 'during';
    source.style.visibility = state === 'before' ? '' : 'hidden';
    layer.style.visibility = state === 'during' ? 'visible' : 'hidden';
    target.style.visibility = state === 'after' ? '' : 'hidden';
  };

  // position + opacity of every letter at progress p (0–1 of the scroll range).
  // Plain math + gsap.quickSetter (GSAP docs: for values updated very often)
  function render(p) {
    for (let i = 0; i < letters.length; i++) {
      const L = letters[i];
      const u = sineInOut(clamp01((p - L.t0) / L.span));
      if (u !== L.u) {
        L.u = u;
        const x = (1 - u) * (1 - u) * L.A.x + 2 * u * (1 - u) * L.C.x + u * u * L.B.x;
        const y = (1 - u) * (1 - u) * L.A.y + 2 * u * (1 - u) * L.C.y + u * u * L.B.y;
        L.lx(x); L.ly(y); L.gx(x); L.gy(y);
      }
      // ghost (mirrored): source opacity → cloud opacity → fades out at the swap
      let go = L.from;
      if (p > L.t0) go = lerp(L.from, L.mid, sineInOut(clamp01((p - L.t0) / L.fade)));
      if (p > L.swapAt) go = lerp(L.mid, 0, sineInOut(clamp01((p - L.swapAt) / L.swapDur)));
      // letter (normal): fades in at the swap → full opacity while gathering
      let lo = 0;
      if (p > L.swapAt) lo = lerp(0, L.mid, sineInOut(clamp01((p - L.swapAt) / L.swapDur)));
      if (p > L.revealAt) lo = lerp(L.mid, 1, sineIn(clamp01((p - L.revealAt) / L.revealDur)));
      if (go !== L.go) { L.go = go; L.go_(go); }
      if (lo !== L.lo) { L.lo = lo; L.lo_(lo); }
    }
  }

  // letters from the CURRENT layout. Runs on every ScrollTrigger refresh
  // (creation, resize, ScrollTrigger.refresh() after page transitions)
  function build(self) {
    if (destroyed) return;
    letters = [];
    layer.textContent = '';

    // measure with source/target in their normal state
    const sv = source.style.visibility, tv = target.style.visibility;
    source.style.visibility = ''; target.style.visibility = '';
    const from = measureChars(source);
    const to = measureChars(target);
    source.style.visibility = sv; target.style.visibility = tv;
    if (!from.length || from.length !== to.length) {
      console.warn('[scatter-text] source and target text differ', source, target);
      return;
    }

    const S0 = self.start, S1 = self.end, range = Math.max(1, S1 - S0);
    const vw = window.innerWidth, vh = window.innerHeight;
    const reveal = Math.max(0.5, 1 - (REVEAL_SCREENS * vh) / range); // gather starts half a screen before the end
    restOnLayer = S0 <= 0;

    const srcStyle = getComputedStyle(source);
    const tgtStyle = getComputedStyle(target);
    const fromOpacity = parseFloat(srcStyle.opacity);
    const midOpacity = P.midOpacity === null ? fromOpacity : P.midOpacity;
    const font = `font-family:${tgtStyle.fontFamily};font-size:${tgtStyle.fontSize};font-weight:${tgtStyle.fontWeight};letter-spacing:${tgtStyle.letterSpacing};color:${tgtStyle.color};`;

    const r = seededRandom(P.seed);
    const frag = document.createDocumentFragment();

    to.forEach((t, i) => {
      const f = from[i];
      // on-screen positions: source at the start of the range, target at its end
      const A = { x: f.x, y: f.y - S0 };
      const B = { x: t.x, y: t.y - S1 };
      const M = { // one cloud spot, on screen and beyond its edges
        x: (-P.overflow + r() * (1 + P.overflow * 2)) * vw,
        y: (-P.overflow + r() * (1 + P.overflow * 2)) * vh,
      };
      const C = { x: 2 * M.x - (A.x + B.x) / 2, y: 2 * M.y - (A.y + B.y) / 2 }; // curve passes through M

      const t0 = r() * P.spread;
      const t1 = 1 - r() * P.spread * 0.5;
      const span = t1 - t0;

      // two copies on the same path: mirrored (first half) → normal (second half)
      const make = () => {
        const s = document.createElement('span');
        s.textContent = t.ch;
        s.style.cssText = `position:absolute;left:0;top:0;width:${t.w}px;height:${t.h}px;line-height:${t.h}px;white-space:pre;will-change:transform,opacity;${font}`;
        frag.appendChild(s);
        return s;
      };
      const letter = make();
      const ghost = make();

      const swapAt = t0 + span * (P.swap - P.swapLength / 2);
      const swapDur = span * P.swapLength;
      const revealAt = Math.max(reveal, swapAt + swapDur);
      letters.push({
        A, B, C, t0, span, swapAt, swapDur, revealAt,
        fade: span * 0.12, revealDur: Math.max(1e-6, t1 - revealAt),
        from: fromOpacity, mid: midOpacity,
        u: null, go: null, lo: null,
        letter, ghost,
      });
    });
    layer.appendChild(frag);

    // all reads first (quickSetter caches each element's current style), then all writes —
    // no read/write interleaving, so the browser recalculates styles once, not per letter
    letters.forEach((L) => {
      L.lx = gsap.quickSetter(L.letter, 'x', 'px'); L.ly = gsap.quickSetter(L.letter, 'y', 'px');
      L.gx = gsap.quickSetter(L.ghost, 'x', 'px');  L.gy = gsap.quickSetter(L.ghost, 'y', 'px');
      L.lo_ = gsap.quickSetter(L.letter, 'opacity'); L.go_ = gsap.quickSetter(L.ghost, 'opacity');
      L.gs = gsap.quickSetter(L.ghost, 'scaleX');
    });
    letters.forEach((L) => L.gs(-1)); // ghost = mirrored copy

    render(self.progress);
    show(self.progress <= 0 ? 'before' : self.progress >= 1 ? 'after' : 'during');
  }

  function create() {
    if (destroyed) return;
    // scroll range: from the first pixel the source is on screen to the target reaching the bottom
    st = ScrollTrigger.create({
      trigger: source,
      start: 'clamp(top bottom)',
      endTrigger: target,
      end: 'bottom bottom',
      onRefresh: build,
      onEnter: () => show('during'),
      onEnterBack: () => show('during'),
      onLeave: () => show('after'),
      onLeaveBack: () => show('before'),
      onUpdate: (self) => render(self.progress), // 1:1 with the (Lenis-smoothed) scroll
    });
    if (!letters.length) build(st);
  }

  // measure with the target's real font (FontFaceSet.load — only this font)
  const tgt = getComputedStyle(target);
  document.fonts.load(`${tgt.fontSize} ${tgt.fontFamily}`).then(create, create);

  return () => {
    destroyed = true;
    if (st) st.kill();
    letters = [];
    layer.remove();
    source.style.visibility = '';
    target.style.visibility = '';
  };
}

export function initScatterText(scope) {
  if (!window.matchMedia('(min-width: 992px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cleanups = [];
  scope.querySelectorAll('[data-scatter]').forEach((source) => {
    const name = source.getAttribute('data-scatter');
    const target = scope.querySelector(`[data-scatter-target="${name}"]`);
    if (target) cleanups.push(initPair(source, target, scope));
  });
  if (!cleanups.length) return;
  return () => cleanups.forEach((fn) => fn());
}

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
   Layout is measured on every ScrollTrigger refresh (resize, page transitions).
   Desktop only (≥992px). */

const STEPS = 24;        // samples of each letter curve
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

  let st = null, tl = null, destroyed = false;

  // which of the three is visible: source (before), layer (during), target (after)
  const show = (state) => {
    source.style.visibility = state === 'before' ? '' : 'hidden';
    layer.style.visibility = state === 'during' ? 'visible' : 'hidden';
    target.style.visibility = state === 'after' ? '' : 'hidden';
  };

  // letters + timeline from the CURRENT layout. Runs on every ScrollTrigger refresh
  // (creation, resize, ScrollTrigger.refresh() after page transitions)
  function build(self) {
    if (destroyed) return;
    if (tl) tl.kill();
    tl = null;
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

    const srcStyle = getComputedStyle(source);
    const tgtStyle = getComputedStyle(target);
    const fromOpacity = parseFloat(srcStyle.opacity);
    const midOpacity = P.midOpacity === null ? fromOpacity : P.midOpacity;
    const font = `font-family:${tgtStyle.fontFamily};font-size:${tgtStyle.fontSize};font-weight:${tgtStyle.fontWeight};letter-spacing:${tgtStyle.letterSpacing};color:${tgtStyle.color};`;

    const r = seededRandom(P.seed);
    const ease = gsap.parseEase('sine.inOut');
    const timeline = gsap.timeline({ paused: true });

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
      const bez = (u) => ({
        x: (1 - u) * (1 - u) * A.x + 2 * u * (1 - u) * C.x + u * u * B.x,
        y: (1 - u) * (1 - u) * A.y + 2 * u * (1 - u) * C.y + u * u * B.y,
      });
      const keyframes = { easeEach: 'none' };
      for (let k = 0; k <= STEPS; k++) keyframes[(k / STEPS * 100).toFixed(2) + '%'] = bez(ease(k / STEPS));

      const t0 = r() * P.spread;
      const t1 = 1 - r() * P.spread * 0.5;
      const span = t1 - t0;

      // two copies on the same path: mirrored (first half) → normal (second half)
      const make = (w, h) => {
        const s = document.createElement('span');
        s.textContent = t.ch;
        s.style.cssText = `position:absolute;left:0;top:0;width:${w}px;height:${h}px;line-height:${h}px;white-space:pre;will-change:transform,opacity;${font}`;
        layer.appendChild(s);
        return s;
      };
      const letter = make(t.w, t.h);
      const ghost = make(t.w, t.h);
      gsap.set(ghost, { x: A.x, y: A.y, scaleX: -1, opacity: fromOpacity });
      gsap.set(letter, { x: A.x, y: A.y, opacity: 0 });

      const fade = span * 0.12;
      const swapAt = t0 + span * (P.swap - P.swapLength / 2);
      const swapDur = span * P.swapLength;
      const revealAt = Math.max(reveal, swapAt + swapDur);
      timeline.to([letter, ghost], { keyframes, duration: span, ease: 'none' }, t0)
        .to(ghost, { opacity: midOpacity, duration: fade, ease: 'sine.inOut' }, t0)
        .to(ghost, { opacity: 0, duration: swapDur, ease: 'sine.inOut' }, swapAt)
        .to(letter, { opacity: midOpacity, duration: swapDur, ease: 'sine.inOut' }, swapAt)
        .to(letter, { opacity: 1, duration: t1 - revealAt, ease: 'sine.in' }, revealAt);
    });
    timeline.to({}, { duration: 1 - timeline.duration() + 0.0001 }); // exactly 0–1 of the range

    tl = timeline;
    tl.progress(self.progress);
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
      onUpdate: (self) => { if (tl) tl.progress(self.progress); }, // 1:1 with the (Lenis-smoothed) scroll
    });
    if (!tl) build(st);
  }

  // measure with the target's real font (FontFaceSet.load — only this font)
  const tgt = getComputedStyle(target);
  document.fonts.load(`${tgt.fontSize} ${tgt.fontFamily}`).then(create, create);

  return () => {
    destroyed = true;
    if (st) st.kill();
    if (tl) tl.kill();
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

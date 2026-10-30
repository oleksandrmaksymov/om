/* ======================================================
   SHOWREEL — Osmo "Mini Showreel Player" + Bunny HLS Player (Info profile reel)
   Webflow (Info):
     .profile[data-profile-pin] → .profile-reel[data-mini-showreel-player="reel"][data-mini-showreel-status="not-active"]
         → .bunny-player[data-bunny-player-init] (HLS, autoplay = muted loop, update-size cover)
         → .mini-showreel__click[data-mini-showreel-open="reel"]
     .mini-showreel-lightbox[data-mini-showreel-lightbox="reel"][data-mini-showreel-status="not-active"]
         → .mini-showreel-lightbox__dark[data-mini-showreel-close]
         → .mini-showreel-lightbox__safearea[data-mini-showreel-safearea] → .mini-showreel-lightbox__target[data-mini-showreel-target]
   Osmo logic unchanged (Flip, z-index 999, safearea fit, Esc / dark closes).
   Site adaptations:
   — timing = page transition (core/motion.js): PAGE_DURATION, PAGE_EASE; the dark overlay
     darkens like the leaving page: black, autoAlpha 0 → PAGE_DARK, same duration / ease (GSAP);
   — the reel lives in the pinned .profile (ScrollTrigger pin sets a transform on it, so position: fixed inside
     would be relative to it); while open the player is moved into the lightbox (outside the pin), Osmo then
     places it with position: fixed exactly as in the original; on close it flies back with Flip.fit to its
     slot and is put back there at the end;
   — closing returns to the preview: muted, still playing (Osmo pauses and rewinds);
   — Lenis is stopped while open; open / close only ≥768px (gsap.matchMedia);
   — hls.js is loaded only on pages with the player (Safari plays HLS natively);
   — everything is removed on page change (Barba).
   ====================================================== */
import { loadScript } from '../core/load-script.js';
import { lenis } from '../core/setup.js';
import { PAGE_EASE, PAGE_DURATION, PAGE_DARK } from '../core/motion.js';
import { runBunnyPlayer } from './bunny-player.js';

const HLS_SRC = 'https://cdn.jsdelivr.net/npm/hls.js@1.6.11';
const SHOWREEL_MEDIA = '(min-width: 768px)';

export function initShowreel(scope) {
  if (!scope.querySelector('[data-bunny-player-init]')) return;

  let destroyed = false;
  let stopPlayer = null;
  let stopShowreel = null;

  const ready = window.Hls ? Promise.resolve() : loadScript(HLS_SRC).catch(function() {});
  ready.then(function() {
    if (destroyed) return;
    stopPlayer = runBunnyPlayer(scope);
    stopShowreel = runMiniShowreel(scope);
  });

  return function() {
    destroyed = true;
    if (stopShowreel) stopShowreel();
    if (stopPlayer) stopPlayer();
  };
}

function runMiniShowreel(scope) {
  if (!scope.querySelector('[data-mini-showreel-open]')) return function() {};

  // Settings (Osmo; timing = page transition)
  var duration = PAGE_DURATION;
  var ease = PAGE_EASE;
  var zIndex = 999;

  let n = "", isOpen = false;
  let lb, pw, tg, dark, slot, slotNext, tween;
  let pwCss = "", lbZ = "", pwZ = "";

  const q = (sel, root = scope) => root.querySelector(sel);

  const getLB = (name) => q(`[data-mini-showreel-lightbox="${name}"]`);
  const getPW = (name) => q(`[data-mini-showreel-player="${name}"]`);

  const safe = (t) => t.closest("[data-mini-showreel-safearea]") || q("[data-mini-showreel-safearea]", t) || t;

  const fit = (b, a) => {
    let w = b.width, h = w / a;
    if (h > b.height) { h = b.height; w = h * a; }
    return {
      left: b.left + (b.width - w) / 2,
      top: b.top + (b.height - h) / 2,
      width: w,
      height: h
    };
  };

  const rectFor = (t) => {
    const b = safe(t).getBoundingClientRect();
    const r = t.getBoundingClientRect();
    const a = r.width > 0 && r.height > 0 ? r.width / r.height : 16 / 9;
    return fit(b, a);
  };

  const place = (el, r) =>
    gsap.set(el, {
      position: "fixed",
      left: r.left,
      top: r.top,
      width: r.width,
      height: r.height,
      margin: 0,
      x: 0,
      y: 0
    });

  function setStatus(status) {
    if (!n) return;
    scope.querySelectorAll(`[data-mini-showreel-lightbox="${n}"], [data-mini-showreel-player="${n}"]`).forEach((el) => el.setAttribute("data-mini-showreel-status", status));
  }

  function zOn() {
    lbZ = lb?.style.zIndex || "";
    pwZ = pw?.style.zIndex || "";
    if (lb) lb.style.zIndex = String(zIndex);
    if (pw) pw.style.zIndex = String(zIndex);
  }

  function zOff() {
    if (lb) lb.style.zIndex = lbZ;
    if (pw) pw.style.zIndex = pwZ;
  }

  function playFor(name) {
    const wrap = getPW(name);
    if (!wrap) return;

    const bunny = wrap.querySelector("[data-bunny-player-init]");
    const video = wrap.querySelector("video");
    if (!video) return;

    if (bunny) {
      const btn = bunny.querySelector('[data-player-control="play"], [data-player-control="playpause"]');
      if (btn && (video.paused || video.ended)) btn.click();
      return;
    }

    try { video.play(); } catch(_) {}
  }

  /* site: back to the preview — muted, keeps playing (Osmo's stopFor pauses and rewinds) */
  function previewFor(name) {
    const wrap = getPW(name);
    if (!wrap) return;

    const bunny = wrap.querySelector("[data-bunny-player-init]");
    const video = wrap.querySelector("video");
    if (!video) return;

    video.muted = true;
    if (bunny) bunny.setAttribute("data-player-muted", "true");
    if (video.paused || video.ended) playFor(name);
  }

  function reset() {
    zOff();
    n = "";
    isOpen = false;
    lb = pw = tg = dark = slot = slotNext = tween = null;
    pwCss = "";
    lbZ = "";
    pwZ = "";
    lenis.start();
  }

  function openBy(name) {
    if (!name || isOpen) return;

    lb = getLB(name);
    pw = getPW(name);
    if (!lb || !pw) return;

    tg = q("[data-mini-showreel-target]", lb);
    if (!tg) return;
    dark = q("[data-mini-showreel-close]", lb);

    n = name;
    isOpen = true;
    lenis.stop();

    pw.dataset.flipId = n;
    pwCss = pw.style.cssText || "";
    slot = pw.parentElement;
    slotNext = pw.nextSibling;

    zOn();
    setStatus("active");
    playFor(n);

    const state = Flip.getState(pw);
    const rect = rectFor(tg); // measured before the move (the player must not take part in the lightbox layout)
    lb.appendChild(pw); // site: out of the pinned (transformed) block
    place(pw, rect);

    tween = Flip.from(state, {
      duration: duration,
      ease: ease,
      absolute: true,
      scale: false
    });
    /* site: darkening as in the page transition */
    if (dark) gsap.to(dark, { autoAlpha: PAGE_DARK, duration: duration, ease: ease, overwrite: true });
  }

  function closeBy(nameOrEmpty) {
    if (!isOpen || !pw) return;
    if (nameOrEmpty && nameOrEmpty !== n) return;

    previewFor(n);
    setStatus("not-active");

    if (tween) tween.kill();
    if (dark) gsap.to(dark, { autoAlpha: 0, duration: duration, ease: ease, overwrite: true });
    /* site: fly back above the fading dark, into the slot's place; then back into the slot */
    tween = Flip.fit(pw, slot, {
      duration: duration,
      ease: ease,
      scale: false,
      onComplete: () => {
        slot.insertBefore(pw, slotNext);
        pw.style.cssText = pwCss;
        reset();
      }
    });
  }

  /* site: immediate close (breakpoint change, page leave) */
  function closeNow() {
    if (!isOpen || !pw) return;
    if (tween) tween.kill();
    if (dark) { gsap.killTweensOf(dark); gsap.set(dark, { autoAlpha: 0 }); }
    previewFor(n);
    setStatus("not-active");
    slot.insertBefore(pw, slotNext);
    pw.style.cssText = pwCss;
    reset();
  }

  function onResize() {
    if (!isOpen || !pw || !tg) return;
    place(pw, rectFor(tg));
  }

  function onOpenClick(e) {
    const btn = e.target.closest("[data-mini-showreel-open]");
    if (!btn) return;
    e.preventDefault();
    openBy(btn.getAttribute("data-mini-showreel-open") || "");
  }

  function onCloseClick(e) {
    const closeBtn = e.target.closest("[data-mini-showreel-close]");
    if (!closeBtn) return;
    e.preventDefault();
    closeBy(closeBtn.getAttribute("data-mini-showreel-close") || "");
  }

  function onKey(e) {
    if (e.key === "Escape") closeBy("");
  }

  const mm = gsap.matchMedia();
  mm.add(SHOWREEL_MEDIA, function() {
    scope.addEventListener("click", onOpenClick);
    document.addEventListener("click", onCloseClick);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return function() {
      closeNow();
      scope.removeEventListener("click", onOpenClick);
      document.removeEventListener("click", onCloseClick);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  });

  return function() {
    mm.revert();
    closeNow();
  };
}

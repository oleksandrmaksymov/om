/* ======================================================
   SHOWREEL — Click-to-zoom video (Info profile reel)
   Webflow (Info):
     .profile[data-profile-pin] → .profile-reel[data-mini-showreel-player="reel"][data-mini-showreel-status="not-active"]
         → video.showreel-video (autoplay, muted, loop, playsinline — mp4 direct)
     .mini-showreel-lightbox[data-mini-showreel-lightbox="reel"][data-mini-showreel-status="not-active"]
         → .mini-showreel-lightbox__dark[data-mini-showreel-close]
         → .mini-showreel-lightbox__safearea[data-mini-showreel-safearea] → .mini-showreel-lightbox__target[data-mini-showreel-target]
   Click video → GSAP Flip into lightbox; click dark overlay / Escape → Flip back.
   Lenis stopped while open; zoom only ≥768px (gsap.matchMedia).
   Video plays muted as preview; playVideos() handles autoplay after Barba transitions.
   ====================================================== */
import { lenis } from '../core/setup.js';

const SHOWREEL_MEDIA = '(min-width: 768px)';

export function initShowreel(scope) {
  if (!scope.querySelector('[data-mini-showreel-player]')) return;

  const stop = runMiniShowreel(scope);

  return function() {
    if (stop) stop();
  };
}

function runMiniShowreel(scope) {
  /* Need at least one player wrapper and one lightbox */
  if (!scope.querySelector('[data-mini-showreel-player]')) return function() {};

  // Settings (Osmo)
  var duration = 1;
  var ease = "expo.inOut";
  var zIndex = 999;

  let n = "", isOpen = false;
  let lb, pw, tg, slot, slotNext, tween;
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
    const video = wrap.querySelector("video");
    if (!video) return;
    try { video.play(); } catch(_) {}
  }

  function previewFor(name) {
    const wrap = getPW(name);
    if (!wrap) return;
    const video = wrap.querySelector("video");
    if (!video) return;
    video.muted = true;
    if (video.paused || video.ended) {
      try { video.play(); } catch(_) {}
    }
  }

  function reset() {
    zOff();
    n = "";
    isOpen = false;
    lb = pw = tg = slot = slotNext = tween = null;
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
    const rect = rectFor(tg);
    lb.appendChild(pw);
    place(pw, rect);

    tween = Flip.from(state, {
      duration: duration,
      ease: ease,
      absolute: true,
      scale: false
    });
  }

  function closeBy(nameOrEmpty) {
    if (!isOpen || !pw) return;
    if (nameOrEmpty && nameOrEmpty !== n) return;

    previewFor(n);
    setStatus("not-active");

    if (tween) tween.kill();
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

  function closeNow() {
    if (!isOpen || !pw) return;
    if (tween) tween.kill();
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

  /* Click on the player wrapper → open */
  function onOpenClick(e) {
    const player = e.target.closest("[data-mini-showreel-player]");
    if (!player) return;
    e.preventDefault();
    openBy(player.getAttribute("data-mini-showreel-player") || "");
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

/* ======================================================
   CLICK TO ZOOM (Basic) — osmo element, adapted for video (v7)
   Based on osmo Click to Zoom (Basic) documentation.
   Uses [data-click-zoom] on the video wrapper or element,
   [data-click-zoom-lightbox] as the fullscreen overlay.
   GSAP only (no Flip needed). Works with Barba page transitions.
   ====================================================== */

var CONFIG = {
  openDuration: 0.55,
  closeDuration: 0.45,
  openEase: "power3.out",
  closeEase: "power2.inOut",
  closeOnScroll: true,
  closeOnEscape: true,
  closeOnClick: true
};

export function initClickToZoom(scope) {
  var lightbox = scope.querySelector("[data-click-zoom-lightbox]");
  if (!lightbox) return;

  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-hidden", "true");

  var backdropColor = window.getComputedStyle(lightbox).backgroundColor;
  var transparent = "rgba(0, 0, 0, 0)";

  var cloneEl = null;
  var isOpen = false;
  var isAnimating = false;
  var openScrollY = 0;
  var openSourceRectDoc = null;

  function computeFlip(src, dst) {
    return {
      scaleX: src.width / dst.width,
      scaleY: src.height / dst.height,
      tx: (src.left + src.width / 2) - (dst.left + dst.width / 2),
      ty: (src.top + src.height / 2) - (dst.top + dst.height / 2)
    };
  }

  function open(media) {
    if (isOpen || isAnimating) return;

    isAnimating = true;
    openScrollY = window.scrollY;

    var srcRect = media.getBoundingClientRect();
    openSourceRectDoc = {
      top: srcRect.top + window.scrollY,
      left: srcRect.left,
      width: srcRect.width,
      height: srcRect.height
    };

    /* Clone: for <video> clone the node so it keeps playing */
    cloneEl = media.cloneNode(true);
    cloneEl.removeAttribute("data-click-zoom");

    var srcComputed = window.getComputedStyle(media);

    gsap.set(lightbox, { display: "flex", backgroundColor: transparent });

    var lightboxStyle = window.getComputedStyle(lightbox);
    var padX = parseFloat(lightboxStyle.paddingLeft) + parseFloat(lightboxStyle.paddingRight);
    var padY = parseFloat(lightboxStyle.paddingTop) + parseFloat(lightboxStyle.paddingBottom);
    var aspect = srcRect.width / srcRect.height;
    var maxW = lightbox.clientWidth - padX;
    var maxH = lightbox.clientHeight - padY;
    var w = maxW;
    var h = w / aspect;
    if (h > maxH) { h = maxH; w = h * aspect; }

    gsap.set(cloneEl, {
      width: w,
      height: h,
      display: "block",
      objectFit: srcComputed.objectFit || "cover",
      objectPosition: srcComputed.objectPosition || "center"
    });

    while (lightbox.firstChild) lightbox.removeChild(lightbox.firstChild);
    lightbox.appendChild(cloneEl);

    var dstRect = cloneEl.getBoundingClientRect();
    var flip = computeFlip(srcRect, dstRect);

    lightbox.setAttribute("aria-hidden", "false");
    document.documentElement.style.cursor = "zoom-out";

    var tl = gsap.timeline({
      onComplete: function() {
        isAnimating = false;
        isOpen = true;
        attachCloseListeners();
      }
    });

    tl.to(lightbox, {
      backgroundColor: backdropColor,
      duration: 0.3,
      ease: "none"
    }, 0);

    tl.fromTo(
      cloneEl,
      { x: flip.tx, y: flip.ty, scaleX: flip.scaleX, scaleY: flip.scaleY },
      { x: 0, y: 0, scaleX: 1, scaleY: 1, duration: CONFIG.openDuration, ease: CONFIG.openEase },
      0
    );
  }

  function close() {
    if (!isOpen || isAnimating) return;
    isAnimating = true;
    detachCloseListeners();
    document.documentElement.style.cursor = "";

    var dstRect = cloneEl.getBoundingClientRect();
    var startX = Number(gsap.getProperty(cloneEl, "x")) || 0;
    var startY = Number(gsap.getProperty(cloneEl, "y")) || 0;
    var startScaleX = Number(gsap.getProperty(cloneEl, "scaleX")) || 1;
    var startScaleY = Number(gsap.getProperty(cloneEl, "scaleY")) || 1;

    function currentSrcRect() {
      return {
        top: openSourceRectDoc.top - window.scrollY,
        left: openSourceRectDoc.left,
        width: openSourceRectDoc.width,
        height: openSourceRectDoc.height
      };
    }

    var lastFlip = computeFlip(currentSrcRect(), dstRect);

    var cleanup = function() {
      gsap.set(lightbox, { display: "none", clearProps: "backgroundColor" });
      if (cloneEl && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
      cloneEl = null;
      lightbox.setAttribute("aria-hidden", "true");
      openSourceRectDoc = null;
      isOpen = false;
      isAnimating = false;
    };

    var state = { t: 0 };

    gsap.to(state, {
      t: 1,
      duration: CONFIG.closeDuration,
      ease: CONFIG.closeEase,
      onUpdate: function() {
        lastFlip = computeFlip(currentSrcRect(), dstRect);
        var t = state.t;
        gsap.set(cloneEl, {
          x: startX + (lastFlip.tx - startX) * t,
          y: startY + (lastFlip.ty - startY) * t,
          scaleX: startScaleX + (lastFlip.scaleX - startScaleX) * t,
          scaleY: startScaleY + (lastFlip.scaleY - startScaleY) * t
        });
      },
      onComplete: cleanup
    });

    gsap.to(lightbox, {
      backgroundColor: transparent,
      duration: 0.3,
      ease: "power2.in",
      delay: CONFIG.closeDuration * 0.4
    });
  }

  function onDocumentClick(e) {
    /* Article mode: every descendant media in a wrapper is clickable */
    var article = e.target.closest("[data-click-zoom-article]");
    if (article) {
      var el = e.target.closest("img, video");
      if (el && article.contains(el)) {
        e.preventDefault();
        open(el);
        return;
      }
    }
    /* Explicit trigger on the element or a wrapper */
    var trigger = e.target.closest("[data-click-zoom]");
    if (!trigger) return;
    var media = (trigger.tagName === "IMG" || trigger.tagName === "VIDEO")
      ? trigger
      : trigger.querySelector("img, video");
    if (!media) return;
    e.preventDefault();
    open(media);
  }

  function onOverlayClick() { if (CONFIG.closeOnClick) close(); }
  function onKeyDown(e) { if (CONFIG.closeOnEscape && e.key === "Escape") close(); }
  function onScroll() {
    if (!CONFIG.closeOnScroll) return;
    if (Math.abs(window.scrollY - openScrollY) < 2) return;
    close();
  }

  function attachCloseListeners() {
    lightbox.addEventListener("click", onOverlayClick);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function detachCloseListeners() {
    lightbox.removeEventListener("click", onOverlayClick);
    document.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("scroll", onScroll);
  }

  scope.addEventListener("click", onDocumentClick);

  /* Cleanup for Barba page transitions */
  return function() {
    scope.removeEventListener("click", onDocumentClick);
    detachCloseListeners();
    if (isOpen) {
      gsap.set(lightbox, { display: "none", clearProps: "backgroundColor" });
      if (cloneEl && cloneEl.parentNode) cloneEl.parentNode.removeChild(cloneEl);
      cloneEl = null;
      lightbox.setAttribute("aria-hidden", "true");
      document.documentElement.style.cursor = "";
      isOpen = false;
      isAnimating = false;
    }
  };
}

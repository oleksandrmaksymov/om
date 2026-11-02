/* ———— Flip.fit scroll-scaling animation ———— */
export function initFlipOnScroll(scope) {
  let wrapperElements = scope.querySelectorAll("[data-flip-element='wrapper']");
  let targetEl = scope.querySelector("[data-flip-element='target']");
  if (wrapperElements.length < 2 || !targetEl) return;

  let tl;
  function flipTimeline() {
    if (tl) {
      tl.kill();
      gsap.set(targetEl, { clearProps: "all" });
    }

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperElements[0],
        start: "center center",
        endTrigger: wrapperElements[wrapperElements.length - 1],
        end: "center center",
        scrub: 0.25,
        onUpdate: function(self) { window._flipProgress = self.progress; }
      }
    });

    wrapperElements.forEach(function(element, index) {
      let nextIndex = index + 1;
      if (nextIndex < wrapperElements.length) {
        let nextWrapperEl = wrapperElements[nextIndex];
        let nextRect = nextWrapperEl.getBoundingClientRect();
        let thisRect = element.getBoundingClientRect();
        let nextDistance = nextRect.top + window.pageYOffset + nextWrapperEl.offsetHeight / 2;
        let thisDistance = thisRect.top + window.pageYOffset + element.offsetHeight / 2;
        let offset = nextDistance - thisDistance;
        tl.add(
          Flip.fit(targetEl, nextWrapperEl, {
            duration: offset,
            ease: "none"
          })
        );
      }
    });
  }

  flipTimeline();

  let resizeTimer;
  const onResize = function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      flipTimeline();
    }, 100);
  };
  window.addEventListener("resize", onResize);

  return function() {
    clearTimeout(resizeTimer);
    window.removeEventListener("resize", onResize);
    if (tl) tl.kill();
  };
}

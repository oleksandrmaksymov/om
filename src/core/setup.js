gsap.registerPlugin(ScrollTrigger, Flip, SplitText, CustomEase);
CustomEase.create('loader', '0.65, 0.01, 0.05, 0.99');
CustomEase.create('osmo', '0.625, 0.05, 0, 1');

/* Mobile: Safari's address bar showing/hiding changes the viewport height —
   don't recalculate every ScrollTrigger for that (GSAP docs: ignoreMobileResize) */
ScrollTrigger.config({ ignoreMobileResize: true });

export const lenis = new Lenis({
  lerp: 0.08,
  wheelMultiplier: 1,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });

/* Keep GSAP ticking in background tabs (official GSAP helper)
   https://gsap.com/docs/v3/HelperFunctions/helpers/tickGSAPWhileHidden */
function tickGSAPWhileHidden(value) {
  if (value === false) {
    document.removeEventListener("visibilitychange", tickGSAPWhileHidden.fn);
    return clearInterval(tickGSAPWhileHidden.id);
  }
  const onChange = () => {
    clearInterval(tickGSAPWhileHidden.id);
    if (document.hidden) {
      gsap.ticker.lagSmoothing(0);
      tickGSAPWhileHidden.id = setInterval(gsap.ticker.tick, 500);
    } else {
      gsap.ticker.lagSmoothing(500, 33);
    }
  };
  document.addEventListener("visibilitychange", onChange);
  tickGSAPWhileHidden.fn = onChange;
  onChange();
}
tickGSAPWhileHidden(true);

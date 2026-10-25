gsap.registerPlugin(ScrollTrigger, Flip, SplitText, CustomEase);
CustomEase.create('loader', '0.65, 0.01, 0.05, 0.99');
CustomEase.create('osmo', '0.625, 0.05, 0, 1');

/* Mobile: Safari's address bar showing/hiding changes the viewport height —
   don't recalculate every ScrollTrigger for that (GSAP docs: ignoreMobileResize) */
ScrollTrigger.config({ ignoreMobileResize: true });

/* Touch-only devices: scroll runs on the JS thread, so the browser bars don't show/hide
   mid-scroll and pinned blocks (circular-text) keep their position (GSAP docs: normalizeScroll) */
if (ScrollTrigger.isTouch === 1) ScrollTrigger.normalizeScroll(true);

export const lenis = new Lenis({
  lerp: 0.08,
  wheelMultiplier: 1,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

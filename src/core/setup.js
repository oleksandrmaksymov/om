gsap.registerPlugin(ScrollTrigger, Flip, SplitText, CustomEase);
CustomEase.create('loader', '0.65, 0.01, 0.05, 0.99');

export const lenis = new Lenis({
  lerp: 0.08,
  wheelMultiplier: 1,
});
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

/* ======================================================
   BARBA — 3D Cube page transition (Osmo)
   ====================================================== */
export const flipCubeDirection = false;
export const cubeX = flipCubeDirection ? 1 : -1;
export const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');

export function prepareForTransition(parent, current, next) {
  const stage = document.createElement('div');
  const cube = document.createElement('div');
  const wrapper = document.createElement('div');

  const scrollY = window.scrollY || 0;
  const viewportHeight = window.innerHeight;
  const cubeDepth = viewportHeight * 0.5;

  stage.className = 'page-transition__stage';
  cube.className = 'page-transition__cube';
  wrapper.className = 'page-transition__wrapper';

  parent.insertBefore(stage, current);

  stage.appendChild(cube);
  cube.appendChild(wrapper);
  wrapper.appendChild(current);
  cube.appendChild(next);

  window.scrollTo(0, 0);

  gsap.set(stage, {
    position: 'fixed',
    inset: 0,
    width: '100%',
    height: viewportHeight,
    perspective: '100vw',
    perspectiveOrigin: `50% ${cubeDepth}px`,
    overflow: 'hidden',
    zIndex: 99
  });

  gsap.set(cube, {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: viewportHeight,
    transformStyle: 'preserve-3d',
    transformOrigin: '50% 50%',
    willChange: 'transform',
    z: -cubeDepth,
    force3D: true
  });

  gsap.set(wrapper, {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: viewportHeight,
    overflow: 'hidden',
    transformStyle: 'preserve-3d',
    transform: `rotateX(0deg) translate3d(0, 0, ${cubeDepth}px)`,
    willChange: 'transform'
  });

  gsap.set(current, {
    position: 'absolute',
    top: -scrollY,
    left: 0,
    width: '100%',
    minHeight: viewportHeight,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    willChange: 'transform',
    force3D: true
  });

  gsap.set(next, {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: viewportHeight,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    transformOrigin: '50% 50%',
    transform: `rotateX(${-90 * cubeX}deg) translate3d(0, 0, ${cubeDepth + 0.5}px)`,
    autoAlpha: 1,
    willChange: 'transform',
    force3D: true
  });

  stage.offsetHeight;

  return { stage, cube, wrapper, scrollY };
}

export function runPageLeaveAnimation(current, next) {
  if (reducedMotionMQ.matches) {
    return gsap.timeline()
      .set(current, { autoAlpha: 0 })
      .call(function() { current.remove(); gsap.set(next, { clearProps: 'all' }); });
  }

  const parent = current.parentElement || document.body;
  const { stage, cube } = prepareForTransition(parent, current, next);

  const tl = gsap.timeline({
    onComplete: () => {
      parent.insertBefore(next, stage);
      stage.remove();
      gsap.set(next, { clearProps: 'all' });
    }
  });

  tl.to(cube, {
    z: -window.innerHeight * 0.8,
    duration: 0.8,
    ease: 'power2.inOut'
  }, '<');

  tl.to(cube, {
    rotateX: 90 * cubeX,
    duration: 1.2,
    ease: 'osmo'
  }, '<0.1');

  tl.to(cube, {
    z: -window.innerHeight * 0.5,
    duration: 1.2,
    ease: 'osmo',
    overwrite: 'auto'
  }, '<0.7');

  return tl;
}

/* ======================================================
   CUBE SCROLL — Info profile block
   Webflow: .profile → .cube-scene[data-cube-scroll] → .cube[data-cube]
            → 4 × .cube__face (--front M, --top O, --back M, --bottom O)
   3D (perspective, preserve-3d, face transforms, 0.5s ease) — Site Head CSS "CUBE SCROLL".
   Every STEP_DISTANCE of page scroll the cube turns 90° around X
   (front face goes down, top face comes to the front); scrolling back turns it back.
   Init after the page transition (initPageLayout) — scroll is at the top by then.
   ====================================================== */
const STEP_DISTANCE = 0.25; // scroll per 90° turn, share of the screen height

export function initCubeScroll(scope) {
  const cube = scope.querySelector('[data-cube-scroll] [data-cube]');
  if (!cube) return;
  let step = null;

  function update() {
    const next = Math.floor(window.scrollY / (window.innerHeight * STEP_DISTANCE));
    if (next === step) return;
    step = next;
    cube.style.transform = 'rotateX(' + (-90 * step) + 'deg)';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  return function() {
    window.removeEventListener('scroll', update);
    window.removeEventListener('resize', update);
  };
}

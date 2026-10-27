/* ======================================================
   CUBE SCROLL — Info profile block
   Webflow: .profile → .cube-scene[data-cube-scroll] → .cube[data-cube]
            → 4 × .cube__face (--front M, --top O, --back M, --bottom O)
   Desktop large (≥1280px, Webflow "large" and up): the cube turns with scroll.
   Below: static front face M (other faces display:none in Webflow, 3D CSS only ≥1280px).
   3D (perspective, preserve-3d, face transforms, 0.5s ease) — Site Head CSS "CUBE SCROLL".
   Every STEP_DISTANCE of page scroll the cube turns 90° around X
   (front face goes down, top face comes to the front); scrolling back turns it back.
   Init after the page transition (initPageLayout) — scroll is at the top by then.
   ====================================================== */
const STEP_DISTANCE = 0.25; // scroll per 90° turn, share of the screen height
const CUBE_MEDIA = '(min-width: 1280px)'; // Webflow "large" breakpoint and up

export function initCubeScroll(scope) {
  const cube = scope.querySelector('[data-cube-scroll] [data-cube]');
  if (!cube) return;
  const media = window.matchMedia(CUBE_MEDIA);
  let step = null;

  function update() {
    if (!media.matches) return;
    const next = Math.floor(window.scrollY / (window.innerHeight * STEP_DISTANCE));
    if (next === step) return;
    step = next;
    cube.style.transform = 'rotateX(' + (-90 * step) + 'deg)';
  }

  /* crossing the breakpoint: below — static front face, above — current scroll position */
  function onMediaChange() {
    step = null;
    cube.style.transform = '';
    update();
  }

  window.addEventListener('scroll', update, { passive: true });
  media.addEventListener('change', onMediaChange);
  update();

  return function() {
    window.removeEventListener('scroll', update);
    media.removeEventListener('change', onMediaChange);
  };
}

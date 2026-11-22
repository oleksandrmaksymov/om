/* ———— Autoplay videos inserted by Barba ————
   Every muted autoplay video of the page plays only while it is on screen (or about to be):
   IntersectionObserver plays it when it comes within one screen of the viewport and pauses it
   when it is further away — the browser doesn't decode videos nobody sees (lighter scrolling, esp. on phones).
   First-screen videos start right away, as before: the new page enters from one screen below
   (page transition), which is still inside that margin, so they load and play during the transition.
   Videos hidden with display:none (is--desktop-only / is--mobile-only) never play.
   Bunny player videos ([data-bunny-player-init]) are skipped — the player has its own in-view logic.
   Returns a cleanup (Barba page leave). */
export function playVideos(scope) {
  const videos = [...scope.querySelectorAll('video[autoplay]')]
    .filter((v) => !v.closest('[data-bunny-player-init]'));
  if (!videos.length) return;

  const play = (v) => {
    const p = v.play();
    if (p && p.catch) p.catch(function() {});
  };

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const v = entry.target;
      if (entry.isIntersecting) play(v);
      else if (!v.paused) v.pause();
    });
  }, { rootMargin: '100% 0px' });

  videos.forEach((v) => {
    v.muted = true;
    io.observe(v);
  });

  return () => io.disconnect();
}

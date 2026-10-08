/* ———— Autoplay videos inserted by Barba ———— */
export function playVideos(scope) {
  scope.querySelectorAll('video[autoplay]').forEach(function(v) {
    v.muted = true;
    const p = v.play();
    if (p && p.catch) p.catch(function() {});
  });
}

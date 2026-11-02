/* ———— Webflow re-init after Barba navigation ———— */
export function resetWebflow(data) {
  const dom = new DOMParser().parseFromString(data.next.html, 'text/html');
  const pageId = dom.documentElement.getAttribute('data-wf-page');
  if (pageId) document.documentElement.setAttribute('data-wf-page', pageId);
  if (window.Webflow) {
    window.Webflow.destroy();
    window.Webflow.ready();
    const ix2 = window.Webflow.require('ix2');
    if (ix2) ix2.init();
  }
}

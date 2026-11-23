/* ======================================================
   AXION — shared GL parts of the three Axion variants (Home, Axion case page, card)
   1. Logo points: the logo raster + random sampling of 80,000 points is done once per logo and kept
      (typed array, read only) — next visits reuse it: no raster, no sampling, no garbage.
   2. Renderer + materials kept between pages ("kit" per variant): Three.js docs recommend reusing the
      WebGLRenderer — a new WebGL context per page is slow and browsers limit their number. The particle
      ShaderMaterial and the dust PointsMaterial are kept too, so their compiled shader programs stay in the
      renderer (Three.js deletes a program when its last material is disposed) → no shader compile on the
      next visit. Geometries / scene are still created and disposed per page.
      While a kit is idle its drawing buffer is shrunk to 1×1 (frees GPU memory). One idle kit per variant;
      an extra one (e.g. the same page during its own transition) is fully disposed.
   Look, count, size and behaviour of the scenes are unchanged.
   ====================================================== */

/* ——— 1. logo points ——— */
const pointsCache = new Map();   // key: count + svg text → Promise<Float32Array> (x, y, z, a per point)

function samplePoints(svgText, count) {
  var size = 512, cvs = document.createElement('canvas');
  cvs.width = cvs.height = size;
  var ctx = cvs.getContext('2d');
  var doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
  var svgEl = doc.querySelector('svg');
  if (!svgEl) return new Float32Array(0);
  var vbW = parseFloat(svgEl.getAttribute('width') || 512);
  var vbH = parseFloat(svgEl.getAttribute('height') || 512);
  var vb = svgEl.getAttribute('viewBox');
  if (vb) { var p = vb.split(/[\s,]+/); vbW = +p[2]; vbH = +p[3]; }
  var sc = Math.min(size/vbW, size/vbH)*0.9;
  var offX = (size-vbW*sc)/2, offY = (size-vbH*sc)/2;
  ctx.save(); ctx.translate(offX, offY); ctx.scale(sc, sc);
  ctx.fillStyle = 'white';
  doc.querySelectorAll('path,rect,circle').forEach(function(el) {
    if (el.tagName==='path') { var d=el.getAttribute('d'); if(d) ctx.fill(new Path2D(d)); }
    else if (el.tagName==='rect') ctx.fillRect(+el.getAttribute('x')||0,+el.getAttribute('y')||0,+el.getAttribute('width')||0,+el.getAttribute('height')||0);
    else if (el.tagName==='circle') { ctx.beginPath(); ctx.arc(+el.getAttribute('cx')||0,+el.getAttribute('cy')||0,+el.getAttribute('r')||0,0,Math.PI*2); ctx.fill(); }
  });
  ctx.restore();
  /* filled pixels and sampled points in typed arrays (no per-point objects) */
  var px = ctx.getImageData(0,0,size,size).data;
  var filled = new Uint32Array(size*size), nFilled = 0;
  for (var j=0;j<size*size;j++) { if(px[j*4+3]>30) filled[nFilled++]=j; }
  if (!nFilled) return new Float32Array(0);
  var pts = new Float32Array(count*4);
  for (var i=0;i<count;i++) {
    var k=filled[Math.floor(Math.random()*nFilled)], ptx=k%size, pty=(k-ptx)/size, pta=px[k*4+3]/255, i4=i*4;
    pts[i4]=(ptx-size/2)*1.2+(Math.random()-0.5)*1.65;
    pts[i4+1]=-(pty-size/2)*1.2+(Math.random()-0.5)*1.65;
    pts[i4+2]=(Math.random()-0.5)*37*pta;
    pts[i4+3]=pta;
  }
  return pts;
}

export function sampleSVGPoints(svgText, count) {
  var key = count + '|' + svgText;
  if (!pointsCache.has(key)) {
    var pts;
    try { pts = samplePoints(svgText, count); } catch (e) { console.error(e); pts = new Float32Array(0); }
    if (!pts.length) return Promise.resolve(pts);
    if (pointsCache.size >= 4) pointsCache.delete(pointsCache.keys().next().value);   // only the site's logos + a few dropped ones
    pointsCache.set(key, Promise.resolve(pts));
  }
  return pointsCache.get(key);
}

/* ——— 2. renderer + materials per variant ——— */
const idle = {};   // variant → [kit]

export function acquireGL(variant, width, height) {
  var list = idle[variant] || (idle[variant] = []);
  var kit = null;
  while (list.length && !kit) {
    var k = list.pop();
    if (k.renderer.getContext().isContextLost()) disposeKit(k); else kit = k;
  }
  if (!kit) {
    kit = {
      renderer: new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' }),
      mat: null, dustMat: null,
    };
  }
  var r = kit.renderer;
  r.setPixelRatio(Math.min(devicePixelRatio, 2));
  r.setSize(width, height, false);
  r.setClearColor(0x000000, 1);
  r.toneMapping = THREE.ACESFilmicToneMapping;
  r.toneMappingExposure = 1.4;
  r.domElement.style.width = '100%';
  r.domElement.style.height = '100%';
  return kit;
}

export function releaseGL(variant, kit) {
  var r = kit.renderer;
  if (r.domElement.parentNode) r.domElement.parentNode.removeChild(r.domElement);
  r.renderLists.dispose();
  var list = idle[variant] || (idle[variant] = []);
  if (list.length >= 1) { disposeKit(kit); return; }
  r.setSize(1, 1, false);   // free the drawing buffer while idle
  list.push(kit);
}

function disposeKit(kit) {
  if (kit.mat) kit.mat.dispose();
  if (kit.dustMat) { if (kit.dustMat.map) kit.dustMat.map.dispose(); kit.dustMat.dispose(); }
  kit.renderer.dispose();
  kit.renderer.forceContextLoss();
}

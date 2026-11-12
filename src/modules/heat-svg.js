/* ======================================================
   HEAT SVG — thermal cursor effect on an SVG element
   Webflow (Research):
     [data-heat-svg] → svg (the logo)
   Ported from bencho.dev HeatWord (Canvas 2D, LUT palette).
   The SVG is rasterised with shadowBlur into a brightness
   field; every pixel is looked up in a 256-entry colour
   table. Around the cursor the heat map shows; away from
   it the shape is flat grey. Under the pointer a cooling
   gradient thins the strokes (the "melt").
   ====================================================== */

/* ── settings ──────────────────────────────────────────── */
var HEAT = 60;          /* 0..100  how much heat the cursor brings       */
var SOFT = 50;          /* 0..100  how soft / blurred the edges are      */
var AREA = 50;          /* 0..100  how big the heated patch is           */
var COLORS = 'Neon';    /* palette name                                  */
var FLOOR = 34;         /* brightness below which the pixel is invisible */

/* ── helpers ───────────────────────────────────────────── */
function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

/* ── palettes: rim (0) → core (1) ──────────────────────── */
var PALETTES = {
  Neon: [
    [0.0,  [255, 150, 225]],
    [0.1,  [255,  90, 190]],
    [0.2,  [255,  50,  60]],
    [0.32, [255, 150,  40]],
    [0.42, [255, 228, 100]],
    [0.54, [120, 215, 255]],
    [0.68, [ 40, 120, 245]],
    [0.84, [ 12,  44, 150]],
    [1.0,  [  6,  18,  80]]
  ],
  Fire: [
    [0.0,  [255, 238, 180]],
    [0.16, [255, 200,  80]],
    [0.34, [255, 130,  30]],
    [0.52, [228,  58,  28]],
    [0.72, [150,  18,  44]],
    [0.88, [ 74,   6,  42]],
    [1.0,  [ 30,   2,  24]]
  ],
  Sea: [
    [0.0,  [210, 255, 225]],
    [0.16, [110, 245, 175]],
    [0.34, [ 40, 215, 200]],
    [0.52, [ 40, 150, 235]],
    [0.72, [ 80,  70, 205]],
    [0.88, [ 60,  20, 130]],
    [1.0,  [ 24,   8,  60]]
  ],
  Pop: [
    [0.0,  [255, 225, 240]],
    [0.16, [255, 160, 210]],
    [0.34, [245, 110, 190]],
    [0.52, [180, 110, 255]],
    [0.72, [100, 150, 255]],
    [0.88, [ 40,  70, 190]],
    [1.0,  [ 20,  24, 100]]
  ]
};

/* build the 256-entry RGBA lookup table for a palette */
function buildLUT(stops) {
  var t = new Uint8ClampedArray(256 * 4);
  for (var i = 0; i < 256; i++) {
    if (i < FLOOR) { t[i * 4 + 3] = 0; continue; }
    var u = (i - FLOOR) / (255 - FLOOR);
    var k = 0;
    while (k < stops.length - 2 && u > stops[k + 1][0]) k++;
    var u0 = stops[k][0], c0 = stops[k][1];
    var u1 = stops[k + 1][0], c1 = stops[k + 1][1];
    var f = clamp((u - u0) / (u1 - u0), 0, 1);
    for (var c = 0; c < 3; c++) t[i * 4 + c] = c0[c] + (c1[c] - c0[c]) * f;
    /* rim fades in over the first stretch */
    t[i * 4 + 3] = 255 * clamp((i - FLOOR) / 26, 0, 1);
  }
  return t;
}

/* cache built tables */
var lutCache = {};
function getLUT(name) {
  if (!lutCache[name]) {
    lutCache[name] = buildLUT(PALETTES[name] || PALETTES.Neon);
  }
  return lutCache[name];
}

/* grey at rest */
var GREY = [150, 150, 154];
var GREY_A = new Uint8ClampedArray(256);
for (var gi = 0; gi < 256; gi++) GREY_A[gi] = 255 * clamp((gi - 70) / 45, 0, 1);

/* area multiplier */
function spread() { return 0.5 + clamp(AREA, 0, 100) / 100; }

/* ── serialise an SVG element into an Image ────────────── */
function svgToImage(svgEl) {
  return new Promise(function(resolve, reject) {
    var clone = svgEl.cloneNode(true);
    /* make sure the SVG has width/height so it rasterises at a known size */
    var box = svgEl.getBoundingClientRect();
    clone.setAttribute('width', box.width);
    clone.setAttribute('height', box.height);
    if (!clone.getAttribute('xmlns')) {
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    var xml = new XMLSerializer().serializeToString(clone);
    var blob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var img = new Image();
    img.onload = function() { URL.revokeObjectURL(url); resolve(img); };
    img.onerror = function() { URL.revokeObjectURL(url); reject(new Error('SVG rasterise failed')); };
    img.src = url;
  });
}

/* ── the module ────────────────────────────────────────── */
export function initHeatSvg(scope) {
  var wrap = scope.querySelector('[data-heat-svg]');
  if (!wrap) return;
  var svgEl = wrap.querySelector('svg');
  if (!svgEl) return;

  /* state — same structure as the React ref */
  var s = {
    base: null,       /* offscreen canvas: the blurred brightness field */
    work: null,       /* offscreen canvas: compositing workspace        */
    shown: null,      /* visible canvas overlaid on the SVG             */
    svgImg: null,     /* rasterised SVG as Image                        */
    px: 0.5, py: 0.5, /* current cursor (normalised)                   */
    tx: 0.5, ty: 0.5, /* target cursor                                 */
    power: 0,         /* how present the hand is (0..1)                 */
    want: 0,          /* target power                                   */
    grow: 1,          /* shape fade-in (always 1, no shape switching)   */
    raf: 0,
    ratio: 1,
    destroyed: false
  };

  /* create visible canvas */
  var canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';
  canvas.setAttribute('aria-hidden', 'true');
  s.shown = canvas;

  /* make sure the wrapper is positioned for the overlay */
  var wrapPos = window.getComputedStyle(wrap).position;
  if (wrapPos === 'static') wrap.style.position = 'relative';

  wrap.appendChild(canvas);

  /* ── build: rasterise SVG into the brightness field ──── */
  function build() {
    var r = Math.min(2, window.devicePixelRatio || 1);
    s.ratio = r;
    var rect = wrap.getBoundingClientRect();
    var w = Math.round(rect.width * r);
    var h = Math.round(rect.height * r);
    if (w < 1 || h < 1) return;

    var base = s.base || document.createElement('canvas');
    base.width = w; base.height = h;
    s.base = base;

    if (!s.work) s.work = document.createElement('canvas');
    s.work.width = w; s.work.height = h;

    canvas.width = w; canvas.height = h;

    field(w, h, r);
  }

  /* ── field: draw the SVG with shadowBlur ─────────────── */
  function field(w, h, r) {
    if (!s.svgImg || !s.base) return;
    var g = s.base.getContext('2d');
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.shadowColor = 'transparent';
    g.fillStyle = '#000';
    g.fillRect(0, 0, w, h);

    var blur = (6 + (clamp(SOFT, 0, 100) / 100) * 16) * r;
    var off = w * 3;

    g.shadowColor = '#fff';
    g.shadowBlur = blur;
    g.shadowOffsetX = off;

    /* draw SVG image offset so only the blurred shadow lands */
    g.drawImage(s.svgImg, -off, 0, w, h);
    /* draw twice so thick strokes saturate (same as original) */
    g.drawImage(s.svgImg, -off, 0, w, h);
  }

  /* ── paint: one frame — field + heat at cursor + LUT ─── */
  function paint() {
    var c = s.shown;
    if (!c || !s.base || !s.work) return;
    var w = c.width, h = c.height;
    if (w < 1 || h < 1) return;

    var g = s.work.getContext('2d', { willReadFrequently: true });
    g.globalCompositeOperation = 'source-over';
    g.globalAlpha = 1;
    g.fillStyle = '#000';
    g.fillRect(0, 0, w, h);

    /* draw the field */
    g.globalAlpha = s.grow;
    g.drawImage(s.base, 0, 0);
    g.globalAlpha = 1;

    /* cooling under cursor */
    if (s.power > 0.002) {
      var cx = s.px * w, cy = s.py * h;
      var rad = (60 + (HEAT / 100) * 50) * s.ratio * spread();
      var amt = s.power * (0.35 + (HEAT / 100) * 0.55);

      g.globalCompositeOperation = 'multiply';
      var cool = g.createRadialGradient(cx, cy, 0, cx, cy, rad);
      var v = function(k) { return Math.round(255 * (1 - amt * k)); };
      cool.addColorStop(0, 'rgb(' + v(1) + ',' + v(1) + ',' + v(1) + ')');
      cool.addColorStop(0.45, 'rgb(' + v(0.6) + ',' + v(0.6) + ',' + v(0.6) + ')');
      cool.addColorStop(1, 'rgb(255,255,255)');
      g.fillStyle = cool;
      g.fillRect(0, 0, w, h);
    }

    /* pixel-by-pixel LUT + grey/heat blending */
    var src = g.getImageData(0, 0, w, h).data;
    var LUT = getLUT(COLORS);
    var out = c.getContext('2d').createImageData(w, h);
    var d = out.data;

    var cx2 = s.px * w, cy2 = s.py * h;
    var R = (95 + (HEAT / 100) * 55) * s.ratio * spread();
    var R2 = R * R;
    var on = s.power;

    for (var y = 0, i = 0; y < h; y++) {
      var dy2 = (y - cy2) * (y - cy2);
      for (var x = 0; x < w; x++, i += 4) {
        var f = src[i];
        var vi = f * 4;
        var m = 0;
        if (on > 0.002) {
          var q = ((x - cx2) * (x - cx2) + dy2) / R2;
          if (q < 1) {
            var t = 1 - q;
            m = on * t * t * (3 - 2 * t);
          }
        }
        var ga = GREY_A[f];
        if (m <= 0) {
          d[i] = GREY[0]; d[i + 1] = GREY[1]; d[i + 2] = GREY[2]; d[i + 3] = ga;
          continue;
        }
        var k = 1 - m;
        d[i]     = GREY[0] * k + LUT[vi]     * m;
        d[i + 1] = GREY[1] * k + LUT[vi + 1] * m;
        d[i + 2] = GREY[2] * k + LUT[vi + 2] * m;
        d[i + 3] = ga       * k + LUT[vi + 3] * m;
      }
    }
    c.getContext('2d').putImageData(out, 0, 0);
  }

  /* ── animation loop — runs only while something moves ── */
  function run() {
    if (s.raf || s.destroyed) return;
    var prev = performance.now();
    function step(t) {
      if (s.destroyed) return;
      var dt = Math.min(0.05, (t - prev) / 1000);
      prev = t;
      var k = 1 - Math.pow(0.002, dt);
      s.px += (s.tx - s.px) * k;
      s.py += (s.ty - s.py) * k;
      s.power += (s.want - s.power) * (1 - Math.pow(0.01, dt));

      paint();

      var still = Math.abs(s.want - s.power) < 0.004
        && Math.abs(s.tx - s.px) < 0.001
        && Math.abs(s.ty - s.py) < 0.001;
      if (still && s.want === 0) s.power = 0;
      s.raf = still ? 0 : requestAnimationFrame(step);
      if (still) paint();
    }
    s.raf = requestAnimationFrame(step);
  }

  /* ── pointer events on the wrapper ──────────────────── */
  function aim(e) {
    var r = wrap.getBoundingClientRect();
    s.tx = (e.clientX - r.left) / r.width;
    s.ty = (e.clientY - r.top) / r.height;
  }

  function onEnter(e) { aim(e); s.px = s.tx; s.py = s.ty; s.want = 1; run(); }
  function onMove(e)  { aim(e); s.want = 1; run(); }
  function onLeave()  { s.want = 0; run(); }

  wrap.addEventListener('pointerenter', onEnter);
  wrap.addEventListener('pointermove', onMove);
  wrap.addEventListener('pointerleave', onLeave);

  /* ── resize handling ─────────────────────────────────── */
  var resizeTimer;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (s.destroyed) return;
      build();
      paint();
    }, 150);
  }
  window.addEventListener('resize', onResize);

  /* ── init: rasterise SVG then build ──────────────────── */
  svgToImage(svgEl).then(function(img) {
    if (s.destroyed) return;
    s.svgImg = img;
    /* hide original SVG — canvas takes over */
    svgEl.style.opacity = '0';
    build();
    paint();
  }).catch(function(err) {
    console.error('heat-svg: failed to rasterise SVG', err);
  });

  /* ── cleanup (Barba page leave) ─────────────────────── */
  return function() {
    s.destroyed = true;
    if (s.raf) { cancelAnimationFrame(s.raf); s.raf = 0; }
    wrap.removeEventListener('pointerenter', onEnter);
    wrap.removeEventListener('pointermove', onMove);
    wrap.removeEventListener('pointerleave', onLeave);
    window.removeEventListener('resize', onResize);
    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
    svgEl.style.opacity = '';
  };
}

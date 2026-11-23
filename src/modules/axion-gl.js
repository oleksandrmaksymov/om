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
  if (kit.sim) kit.sim.dispose();
  if (kit.mat) kit.mat.dispose();
  if (kit.dustMat) { if (kit.dustMat.map) kit.dustMat.map.dispose(); kit.dustMat.dispose(); }
  kit.renderer.dispose();
  kit.renderer.forceContextLoss();
}

/* ======================================================
   3. GPU particle simulation (stage 2)
   The same per-particle physics as the CPU loop in the variants (updateParticles), line for line,
   run in fragment shaders on float textures (render-to-texture ping-pong, core Three.js
   WebGLRenderTarget + a fullscreen quad). One texel = one particle:
     pos  (x, y, z)        — position          ┐ ping-pong render targets
     vel  (x, y, z)        — velocity          ┘
     tgt  (x, y, z, aPh)   — target (logo shape) + alpha phase (i*0.01 mod 2π)       ┐ static
     p1   (seed, seed*0.7, seed*2.3, seed*1.5) mod 2π   (seed = i*1.37)              │ data
     p2   (seed*1.1 mod 2π, ps, rs, ds)  — the CPU's integer hashes, computed in JS  ┘ textures
   (phases are reduced mod 2π in double precision on the CPU, so the GPU's sin() gets small arguments.)
   Each frame: pass 1 → new velocity, pass 2 → new position; the particle shader reads both
   textures and computes the alpha the CPU loop used to write.
   Needs WebGL2 + EXT_color_buffer_float (32-bit float render targets); otherwise gpuSim() returns
   null and the variant keeps its CPU loop. Kept in the kit (reused between pages).
   ====================================================== */
const SIM_GRAVITY = 0.03, SIM_FRICTION = 0.95, SIM_WIND = 0.005;   // = the variants' constants
const TAU = Math.PI * 2;

const SIM_VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';

const SIM_VEL = [
  'precision highp float; precision highp sampler2D;',
  'uniform sampler2D tPos, tVel, tTgt, tP1, tP2;',
  'uniform float time, gravity, wind, friction;',
  'uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;',
  'varying vec2 vUv;',
  'void main(){',
  '  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;',
  '  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);',
  '  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;',
  '  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;',
  '  v.z += sin(time*0.25 + b.x)*0.004;',
  '  v.y -= gravity*0.06;',
  '  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;',
  '  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;',
  '  if (mouseOn > 0.5) {',
  '    vec3 m = p - mousePos; float dsq = dot(m, m);',
  '    if (dsq < radius*radius && dsq > 0.25) {',
  '      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;',
  '      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;',
  '      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;',
  '      float mp = 0.02 + ps*0.06;',
  '      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;',
  '      float scc = pf*0.15;',
  '      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;',
  '    }',
  '  }',
  '  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);',
  '  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);',
  '  v += d*(rb*db);',
  '  v *= friction*(0.92 + b.w*0.06);',
  '  gl_FragColor = vec4(v, 1.0);',
  '}'
].join('\n');

const SIM_POS = [
  'precision highp float; precision highp sampler2D;',
  'uniform sampler2D tPos, tVel; varying vec2 vUv;',
  'void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }'
].join('\n');

const SIM_COPY = [
  'precision highp float; precision highp sampler2D;',
  'uniform sampler2D tSrc; varying vec2 vUv;',
  'void main(){ gl_FragColor = texture2D(tSrc, vUv); }'
].join('\n');

/* the particle shader of the variants, reading position / velocity from the simulation and computing
   the alpha the CPU loop wrote (0.15 + 0.55*(1 - min(d*0.005, 1)) + sin(time*1.5 + i*0.01)*0.05) */
const DRAW_VERT = [
  'precision highp sampler2D;',
  'attribute float size; attribute vec2 ref;',
  'uniform sampler2D tPos, tVel, tTgt; uniform float uTime;',
  'varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;',
  'void main() {',
  '  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);',
  '  float d2 = length(pos - T.xyz);',
  '  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;',
  '  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);',
  '  vDist = -mvPos.z;',
  '  vec3 velW = mat3(modelViewMatrix) * vel;',
  '  float spd = length(velW); vSpeed = min(spd*0.6,1.0);',
  '  float baseSize = size*(400.0/-mvPos.z);',
  '  gl_PointSize = baseSize*(1.0+vSpeed*2.5);',
  '  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);',
  '  gl_Position = projectionMatrix * mvPos;',
  '}'
].join('\n');

const DRAW_FRAG = [
  'varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;',
  'void main() {',
  '  vec2 c = gl_PointCoord-vec2(0.5);',
  '  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);',
  '  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));',
  '  if(dist>0.5) discard;',
  '  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);',
  '  float heat = 1.0+vSpeed*0.6;',
  '  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);',
  '  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));',
  '  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));',
  '}'
].join('\n');

function floatTexture(data, w) {
  var t = new THREE.DataTexture(data, w, w, THREE.RGBAFormat, THREE.FloatType);
  t.minFilter = t.magFilter = THREE.NearestFilter;
  t.needsUpdate = true;
  return t;
}

export function gpuSim(kit, maxParticles) {
  if (kit.sim !== undefined) return kit.sim;
  var renderer = kit.renderer;
  if (!renderer.capabilities.isWebGL2 || !renderer.extensions.get('EXT_color_buffer_float')) { kit.sim = null; return null; }

  var W = Math.ceil(Math.sqrt(maxParticles)), N = W * W;
  var rt = function() {
    return new THREE.WebGLRenderTarget(W, W, {
      type: THREE.FloatType, format: THREE.RGBAFormat,
      minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
      depthBuffer: false, stencilBuffer: false,
    });
  };
  var pos = [rt(), rt()], vel = [rt(), rt()], cur = 0;

  /* static per-index data: hashes exactly as the CPU loop computes them (JS integer math) */
  var p1 = new Float32Array(N * 4), p2 = new Float32Array(N * 4), ref = new Float32Array(maxParticles * 2);
  for (var i = 0; i < N; i++) {
    var seed = i * 1.37, i4 = i * 4;
    p1[i4] = seed % TAU; p1[i4+1] = (seed*0.7) % TAU; p1[i4+2] = (seed*2.3) % TAU; p1[i4+3] = (seed*1.5) % TAU;
    p2[i4] = (seed*1.1) % TAU;
    p2[i4+1] = ((i*2654435761)&0xFFFF)/65535;   // ps
    p2[i4+2] = ((i*48271)&0xFFFF)/65535;        // rs (also the second mouse scatter hash)
    p2[i4+3] = ((i*16807)&0xFFFF)/65535;        // ds
    if (i < maxParticles) { ref[i*2] = ((i % W) + 0.5) / W; ref[i*2+1] = (Math.floor(i / W) + 0.5) / W; }
  }
  var tP1 = floatTexture(p1, W), tP2 = floatTexture(p2, W);
  var tgtData = new Float32Array(N * 4), tTgt = floatTexture(tgtData, W);
  var initData = new Float32Array(N * 4), tInit = floatTexture(initData, W);

  var quadScene = new THREE.Scene(), quadCam = new THREE.Camera();
  var quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
  quad.frustumCulled = false;
  quadScene.add(quad);
  var simMat = function(frag, uniforms) {
    return new THREE.ShaderMaterial({ vertexShader: SIM_VERT, fragmentShader: frag, uniforms: uniforms,
      depthTest: false, depthWrite: false, blending: THREE.NoBlending, toneMapped: false });
  };
  var velMat = simMat(SIM_VEL, {
    tPos: { value: null }, tVel: { value: null }, tTgt: { value: tTgt }, tP1: { value: tP1 }, tP2: { value: tP2 },
    time: { value: 0 }, gravity: { value: SIM_GRAVITY }, wind: { value: SIM_WIND }, friction: { value: SIM_FRICTION },
    mouseOn: { value: 0 }, radius: { value: 120 }, mouseVelLen: { value: 0 },
    mousePos: { value: new THREE.Vector3() }, mouseVel: { value: new THREE.Vector2() },
  });
  var posMat = simMat(SIM_POS, { tPos: { value: null }, tVel: { value: null } });
  var copyMat = simMat(SIM_COPY, { tSrc: { value: null } });

  var drawMat = new THREE.ShaderMaterial({
    vertexShader: DRAW_VERT, fragmentShader: DRAW_FRAG,
    uniforms: { tPos: { value: null }, tVel: { value: null }, tTgt: { value: tTgt }, uTime: { value: 0 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, vertexColors: true,
  });

  function pass(mat, target) {
    quad.material = mat;
    renderer.setRenderTarget(target);
    renderer.render(quadScene, quadCam);
  }
  function publish() {
    drawMat.uniforms.tPos.value = pos[cur].texture;
    drawMat.uniforms.tVel.value = vel[cur].texture;
  }

  var sim = {
    material: drawMat,
    refAttribute: function() { return new THREE.BufferAttribute(ref, 2); },

    /* new logo points (x, y, z, a per point): start at target + 40 in y, velocity 0 (as applyPointsToParticles) */
    setPoints: function(pts, count) {
      initData.fill(0); tgtData.fill(0);
      for (var i = 0; i < count; i++) {
        var i4 = i * 4;
        initData[i4] = pts[i4]; initData[i4+1] = pts[i4+1] + 40; initData[i4+2] = pts[i4+2];
        tgtData[i4] = pts[i4]; tgtData[i4+1] = pts[i4+1]; tgtData[i4+2] = pts[i4+2];
        tgtData[i4+3] = (i * 0.01) % TAU;
      }
      tInit.needsUpdate = true; tTgt.needsUpdate = true;
      var prev = renderer.getRenderTarget();
      cur = 0;
      copyMat.uniforms.tSrc.value = tInit; pass(copyMat, pos[0]);
      renderer.setRenderTarget(vel[0]); renderer.clear(true, false, false);   // velocity 0 (clear colour rgb = 0)
      renderer.setRenderTarget(prev);
      publish();
    },

    /* one frame of physics; mouse: null or { pos: Vector3, vel: Vector3, radius } */
    step: function(time, mouse) {
      var prev = renderer.getRenderTarget();
      var u = velMat.uniforms;
      u.time.value = time;
      if (mouse) {
        u.mouseOn.value = 1; u.radius.value = mouse.radius;
        u.mousePos.value.copy(mouse.pos); u.mouseVel.value.set(mouse.vel.x, mouse.vel.y); u.mouseVelLen.value = mouse.vel.length();
      } else u.mouseOn.value = 0;
      var nxt = 1 - cur;
      u.tPos.value = pos[cur].texture; u.tVel.value = vel[cur].texture;
      pass(velMat, vel[nxt]);
      posMat.uniforms.tPos.value = pos[cur].texture; posMat.uniforms.tVel.value = vel[nxt].texture;
      pass(posMat, pos[nxt]);
      cur = nxt;
      renderer.setRenderTarget(prev);
      drawMat.uniforms.uTime.value = time;
      publish();
    },

    dispose: function() {
      pos.concat(vel).forEach(function(t) { t.dispose(); });
      [tP1, tP2, tTgt, tInit].forEach(function(t) { t.dispose(); });
      [velMat, posMat, copyMat, drawMat].forEach(function(m) { m.dispose(); });
      quad.geometry.dispose();
    },
  };
  kit.sim = sim;
  return sim;
}

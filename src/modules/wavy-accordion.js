/* ======================================================
   WAVY ACCORDION — osmo (WebGL slider, Home after Inspiration)
   Original osmo code; adapted: scoped to page container,
   returns cleanup (rAF, observers, listeners, WebGL dispose).
   Three.js r184 ES module — separate from global r128 (Axion).
   ====================================================== */
const THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.184.0/build/three.module.min.js';

const openSize = 6; // the open image is this many times wider than a closed one
const springStiffness = 160; // how hard the images pull towards their new size
const springDamping = 20; // lower lets the open image overshoot more
const bend = 1.6; // how far the edges bow while they move, 0 keeps them straight
const bendStiffness = 300;
const bendDamping = 40; // lower makes the edges wobble before they settle
const drag = 0.6; // how much of the image is pulled along with a moving edge
const dragReach = 90; // px over which that pull fades out
const closedDim = 0.15; // darkens the closed images, 0 to 1
const textureDetail = 1.25; // texture resolution over the size it is drawn at

const vertexShader = `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const fragmentShader = `
  precision highp float;

  uniform sampler2D uMaps[8];
  uniform vec2 uSizes[8];
  uniform float uEdges[9];
  uniform float uBows[9];
  uniform float uOpen[8];
  uniform int uCount;
  uniform vec2 uResolution;
  uniform float uDpr, uVertical, uOpenLength, uGap, uRadius, uDrag, uDragReach, uDim;

  vec3 sampleMap(int i, vec2 uv, vec2 gx, vec2 gy) {
    uv = clamp(uv, 0.0, 1.0);
    if (i == 0) return textureGrad(uMaps[0], uv, gx, gy).rgb;
    if (i == 1) return textureGrad(uMaps[1], uv, gx, gy).rgb;
    if (i == 2) return textureGrad(uMaps[2], uv, gx, gy).rgb;
    if (i == 3) return textureGrad(uMaps[3], uv, gx, gy).rgb;
    if (i == 4) return textureGrad(uMaps[4], uv, gx, gy).rgb;
    if (i == 5) return textureGrad(uMaps[5], uv, gx, gy).rgb;
    if (i == 6) return textureGrad(uMaps[6], uv, gx, gy).rgb;
    return textureGrad(uMaps[7], uv, gx, gy).rgb;
  }

  float edgeAt(int k, float bulge) {
    return uEdges[k] + uBows[k] * bulge;
  }

  float inset(int k) {
    if (k <= 0 || k >= uCount) return 0.0;
    return uGap > 0.0 ? 0.5 * uGap : -1.0;
  }

  void main() {
    vec2 p = vec2(gl_FragCoord.x, uResolution.y * uDpr - gl_FragCoord.y) / uDpr;
    bool vertical = uVertical > 0.5;
    float along = vertical ? p.y : p.x;
    float across = vertical ? p.x : p.y;
    float crossSize = vertical ? uResolution.x : uResolution.y;
    float bulge = sin(clamp(across / crossSize, 0.0, 1.0) * 3.14159265);

    int i = 0;
    for (int k = 1; k < 8; k++) {
      if (k >= uCount) break;
      if (along >= edgeAt(k, bulge)) i = k;
    }
    float start = edgeAt(i, bulge);
    float end = edgeAt(i + 1, bulge);

    float pull = uBows[i] * exp(-abs(along - start) / uDragReach) + uBows[i + 1] * exp(-abs(along - end) / uDragReach);
    vec2 offset = vec2(along - pull * bulge * uDrag - 0.5 * (start + end), across - 0.5 * crossSize);
    vec2 box = vec2(uOpenLength, crossSize);
    if (vertical) {
      offset = offset.yx;
      box = box.yx;
    }
    vec2 size = uSizes[i];
    vec2 perPixel = 1.0 / (size * max(box.x / size.x, box.y / size.y));
    vec2 uv = offset * perPixel + 0.5;
    uv.y = 1.0 - uv.y;
    vec3 color = sampleMap(i, uv, vec2(perPixel.x / uDpr, 0.0), vec2(0.0, perPixel.y / uDpr));
    color *= 1.0 - uDim * (1.0 - clamp(uOpen[i], 0.0, 1.0));

    float cardStart = start + inset(i);
    float cardEnd = end - inset(i + 1);
    vec2 halfSize = vec2(max(0.5 * (cardEnd - cardStart), 0.0), 0.5 * crossSize);
    float radius = min(uRadius, halfSize.x);
    vec2 corner = abs(vec2(along - 0.5 * (cardStart + cardEnd), across - 0.5 * crossSize)) - halfSize + radius;
    float shapeDistance = length(max(corner, 0.0)) + min(max(corner.x, corner.y), 0.0) - radius;
    float alpha = clamp(0.5 - shapeDistance * uDpr, 0.0, 1.0);

    gl_FragColor = vec4(color * alpha, alpha);
  }
`;

export function initWavyAccordion(scope) {
  const roots = scope.querySelectorAll('[data-wavy-accordion-init]');
  if (!roots.length) return;

  let destroyed = false;
  const instanceCleanups = [];

  import(THREE_URL).then((THREE) => {
    if (destroyed) return;
    roots.forEach((root) => {
      const cleanup = setupAccordion(THREE, root);
      if (cleanup) instanceCleanups.push(cleanup);
    });
  }).catch((e) => console.warn('Wavy Accordion: Three.js failed to load', e));

  return function() {
    destroyed = true;
    instanceCleanups.forEach((fn) => fn());
    instanceCleanups.length = 0;
  };
}

function setupAccordion(THREE, root) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canvas = root.querySelector('[data-wavy-accordion-canvas]');
  const list = root.querySelector('[data-wavy-accordion-list]');
  const items = [...root.querySelectorAll('[data-wavy-accordion-item]')];
  const count = items.length;
  if (!canvas || !list || !count) return null;
  if (count > 8) { console.warn('Wavy Accordion supports up to 8 items'); return null; }

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    uMaps: { value: Array(8).fill(null) },
    uSizes: { value: Array.from({ length: 8 }, () => new THREE.Vector2(1, 1)) },
    uEdges: { value: new Float32Array(9) },
    uBows: { value: new Float32Array(9) },
    uOpen: { value: new Float32Array(8) },
    uCount: { value: count },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uDpr: { value: 1 },
    uVertical: { value: 0 },
    uOpenLength: { value: 1 },
    uGap: { value: 0 },
    uRadius: { value: 0 },
    uDrag: { value: drag },
    uDragReach: { value: dragReach },
    uDim: { value: closedDim },
  };

  const geometry = new THREE.PlaneGeometry(2, 2);
  const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms, depthTest: false, depthWrite: false });
  scene.add(new THREE.Mesh(geometry, material));

  const weights = items.map((_, index) => (index === 0 ? openSize : 1));
  const weightVelocities = items.map(() => 0);
  const edges = new Float32Array(count + 1);
  const edgeVelocities = new Float32Array(count + 1);
  const bows = new Float32Array(count + 1);
  const bowVelocities = new Float32Array(count + 1);
  let active = 0;
  let width = 1;
  let height = 1;
  let vertical = false;
  let gap = 0;
  let resetVelocity = true;
  let needsRender = true;
  let visible = true;
  let loaded = 0;
  let frameId = 0;
  let last = 0;
  let destroyed = false;
  const sources = [];
  const textureScales = [];
  const listeners = [];

  function on(el, type, fn) {
    el.addEventListener(type, fn);
    listeners.push(() => el.removeEventListener(type, fn));
  }

  function openLength() {
    const available = Math.max((vertical ? height : width) - gap * (count - 1), 1);
    return (openSize / (openSize + count - 1)) * available;
  }

  function resize() {
    if (destroyed) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const listStyle = getComputedStyle(list);
    width = Math.max(root.clientWidth, 1);
    height = Math.max(root.clientHeight, 1);
    vertical = listStyle.flexDirection.startsWith('column');
    gap = parseFloat(vertical ? listStyle.rowGap : listStyle.columnGap) || 0;
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height, false);
    uniforms.uResolution.value.set(width, height);
    uniforms.uDpr.value = dpr;
    uniforms.uVertical.value = vertical ? 1 : 0;
    uniforms.uGap.value = gap;
    uniforms.uRadius.value = parseFloat(getComputedStyle(items[0]).borderTopLeftRadius) || 0;
    resetVelocity = true;
    needsRender = true;
    sources.forEach((_, index) => fitImage(index));
    wake();
  }

  function fitImage(index) {
    const image = sources[index];
    if (!image) return;
    const boxWidth = vertical ? width : openLength();
    const boxHeight = vertical ? openLength() : height;
    const scale = Math.min(Math.max(boxWidth / image.width, boxHeight / image.height) * uniforms.uDpr.value * textureDetail, 1);
    if (textureScales[index] && scale <= textureScales[index] * textureDetail) return;
    textureScales[index] = scale;
    let source = image;
    if (scale < 1) {
      source = document.createElement('canvas');
      source.width = Math.max(Math.round(image.width * scale), 1);
      source.height = Math.max(Math.round(image.height * scale), 1);
      source.getContext('2d').drawImage(image, 0, 0, source.width, source.height);
    }
    const texture = new THREE.Texture(source);
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.needsUpdate = true;
    uniforms.uMaps.value[index]?.dispose();
    uniforms.uMaps.value[index] = texture;
    needsRender = true;
    wake();
  }

  function activate(index) {
    if (index < 0) return;
    active = index;
    items.forEach((item, k) => item.setAttribute('data-wavy-accordion-item-status', k === index ? 'active' : 'inactive'));
    needsRender = true;
    wake();
  }

  function wake() {
    if (frameId || destroyed) return;
    last = performance.now();
    frameId = requestAnimationFrame(frame);
  }

  resize();
  activate(0);

  const loader = new THREE.ImageLoader();
  items.forEach((item, index) => {
    const img = item.querySelector('[data-wavy-accordion-image]');
    if (img) {
      loader.load(img.currentSrc || img.src, (image) => {
        if (destroyed) return;
        sources[index] = image;
        uniforms.uSizes.value[index].set(image.width, image.height);
        fitImage(index);
        loaded += 1;
        if (loaded === count) root.setAttribute('data-wavy-accordion-status', 'ready');
      }, undefined, () => console.warn('Wavy Accordion could not load', img.currentSrc || img.src));
    }

    on(item, 'pointerenter', (event) => {
      if (event.pointerType === 'mouse') activate(index);
    });
    on(item, 'focusin', () => activate(index));
    on(item, 'click', (event) => {
      if (index === active) return;
      event.preventDefault();
      activate(index);
    });
  });

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(root);
  const intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    wake();
  });
  intersectionObserver.observe(root);

  function frame(now) {
    frameId = 0;
    if (destroyed) return;
    const dt = Math.min((now - last) / 1000, 1 / 30) || 1 / 60;
    last = now;
    if (!visible) return;

    const snap = reduceMotion.matches;
    const bendAmount = snap ? 0 : bend;
    let total = 0;
    let motion = 0;
    weights.forEach((weight, i) => {
      const target = i === active ? openSize : 1;
      weightVelocities[i] = snap ? 0 : weightVelocities[i] + (springStiffness * (target - weight) - springDamping * weightVelocities[i]) * dt;
      weights[i] = snap ? target : Math.max(weight + weightVelocities[i] * dt, 0.05);
      total += weights[i];
      motion += Math.abs(weightVelocities[i]);
    });

    const available = Math.max((vertical ? height : width) - gap * (count - 1), 1);
    let position = 0;
    for (let k = 0; k <= count; k++) {
      const edge = k === 0 ? 0 : k === count ? position - gap : position - gap / 2;
      const inner = k > 0 && k < count;
      const speed = resetVelocity || !inner ? 0 : (edge - edges[k]) / dt / 60;
      edgeVelocities[k] = resetVelocity ? 0 : edgeVelocities[k] + (speed - edgeVelocities[k]) * 0.35;
      edges[k] = edge;
      const bowTarget = inner ? -edgeVelocities[k] * bendAmount : 0;
      bowVelocities[k] += (bendStiffness * (bowTarget - bows[k]) - bendDamping * bowVelocities[k]) * dt;
      bows[k] += bowVelocities[k] * dt;
      motion += Math.abs(bows[k]) + Math.abs(bowVelocities[k]);
      if (k < count) position += (weights[k] / total) * available + gap;
    }
    resetVelocity = false;

    if (motion < 0.002 && !needsRender) return;
    needsRender = false;

    items.forEach((item, i) => {
      item.style.flexGrow = weights[i];
      uniforms.uOpen.value[i] = (weights[i] - 1) / (openSize - 1);
    });
    uniforms.uEdges.value.set(edges);
    uniforms.uBows.value.set(bows);
    uniforms.uOpenLength.value = openLength();
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(frame);
  }

  /* Cleanup: stop loop, observers, listeners, free GPU */
  return function() {
    destroyed = true;
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
    listeners.forEach((off) => off());
    uniforms.uMaps.value.forEach((t) => t && t.dispose());
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  };
}

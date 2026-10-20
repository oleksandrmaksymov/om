(() => {
  // src/core/setup.js
  gsap.registerPlugin(ScrollTrigger, Flip, SplitText, CustomEase);
  CustomEase.create("loader", "0.65, 0.01, 0.05, 0.99");
  CustomEase.create("osmo", "0.625, 0.05, 0, 1");
  ScrollTrigger.config({ ignoreMobileResize: true });
  var lenis = new Lenis({
    lerp: 0.08,
    wheelMultiplier: 1
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1e3);
  });
  gsap.ticker.lagSmoothing(0);

  // src/core/lifecycle.js
  var pageCleanups = [];
  function addCleanup(fn) {
    if (typeof fn === "function") pageCleanups.push(fn);
  }
  function detachPage() {
    const cleanups = pageCleanups;
    const triggers = ScrollTrigger.getAll();
    pageCleanups = [];
    return function destroy() {
      cleanups.forEach(function(fn) {
        try {
          fn();
        } catch (e) {
          console.error(e);
        }
      });
      triggers.forEach(function(t) {
        t.kill();
      });
      window._flipProgress = 0;
    };
  }

  // src/core/motion.js
  var PAGE_BEZIER = "0.7, 0.05, 0.13, 1";
  var PAGE_DURATION = 0.9;
  CustomEase.create("parallax", PAGE_BEZIER);
  var PAGE_EASE = "parallax";
  var PAGE_DARK = 0.8;

  // src/global/mobile-menu.js
  var CURTAIN_OPEN = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
  var CURTAIN_CLOSED = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  var curtain = null;
  var closeMobileMenu = function() {
    return false;
  };
  function closeMenuCurtain() {
    if (!curtain) return;
    gsap.timeline().to(curtain, { clipPath: CURTAIN_CLOSED, duration: PAGE_DURATION, ease: PAGE_EASE, overwrite: true }, 0).fromTo(curtain, { filter: "brightness(1)" }, {
      filter: "brightness(" + (1 - PAGE_DARK) + ")",
      duration: PAGE_DURATION,
      ease: PAGE_EASE
    }, 0).set(curtain, { clearProps: "filter" });
  }
  function initMobileMenu() {
    const btn = document.querySelector("[data-menu-button]");
    const nav = document.querySelector("[data-menu-status]");
    if (!btn || !nav) return;
    curtain = nav.querySelector(".nav-bg");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "mobile-navigation");
    nav.setAttribute("id", "mobile-navigation");
    nav.setAttribute("role", "navigation");
    nav.setAttribute("aria-label", "Main navigation");
    function setOpen(open) {
      nav.dataset.menuStatus = open ? "open" : "closed";
      btn.setAttribute("aria-expanded", open);
      if (open) {
        lenis.stop();
        document.body.style.overflow = "hidden";
      } else {
        lenis.start();
        document.body.style.overflow = "";
      }
    }
    function animateCurtain(open) {
      if (!curtain) return;
      gsap.to(curtain, {
        clipPath: open ? CURTAIN_OPEN : CURTAIN_CLOSED,
        duration: PAGE_DURATION,
        ease: PAGE_EASE,
        overwrite: true
      });
    }
    btn.addEventListener("click", function() {
      const open = nav.dataset.menuStatus !== "open";
      setOpen(open);
      animateCurtain(open);
    });
    closeMobileMenu = function(options) {
      if (nav.dataset.menuStatus !== "open") return false;
      setOpen(false);
      if (!(options && options.keepCurtain)) animateCurtain(false);
      return true;
    };
  }

  // src/global/heading-links.js
  function initHeadingLinks() {
    if (!window.matchMedia("(hover: hover)").matches) return;
    document.addEventListener("mouseenter", function(e) {
      var el = e.target.closest && e.target.closest(".heading-link");
      if (!el) return;
      el.style.animation = "none";
      void el.offsetHeight;
      el.style.animation = "heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)";
    }, true);
    document.addEventListener("mouseleave", function(e) {
      var el = e.target.closest && e.target.closest(".heading-link");
      if (!el) return;
      el.style.animation = "none";
      void el.offsetHeight;
      el.style.animation = "heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)";
    }, true);
  }

  // src/global/nav-current.js
  function updateCurrentLinks() {
    const norm = function(p) {
      return p.replace(/\/$/, "") || "/";
    };
    const path = norm(location.pathname);
    document.querySelectorAll("[data-menu-status] a[href]").forEach(function(a) {
      const url = new URL(a.href, location.href);
      const current = url.origin === location.origin && norm(url.pathname) === path && !url.hash;
      a.classList.toggle("w--current", current);
      if (current) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  // src/global/webflow.js
  function resetWebflow(data) {
    const dom = new DOMParser().parseFromString(data.next.html, "text/html");
    const pageId = dom.documentElement.getAttribute("data-wf-page");
    if (pageId) document.documentElement.setAttribute("data-wf-page", pageId);
    if (window.Webflow) {
      window.Webflow.destroy();
      window.Webflow.ready();
      const ix2 = window.Webflow.require("ix2");
      if (ix2) ix2.init();
    }
  }

  // src/modules/copy-email.js
  function initCopyEmailClipboard(scope) {
    const buttons = scope.querySelectorAll(".copy-email-button");
    if (!buttons.length) return;
    const copyEmail = (button) => {
      const email = button.getAttribute("data-copy-email") || button.querySelector("[data-copy-email-element]").textContent.trim();
      if (email) {
        navigator.clipboard.writeText(email).then(() => {
          button.setAttribute("data-copy-button", "copied");
          button.setAttribute("aria-label", "Email copied to clipboard!");
        });
      }
    };
    const handleInteraction = (e) => {
      if (e.type === "click" || e.type === "keydown" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        copyEmail(e.currentTarget);
      }
    };
    buttons.forEach((button) => {
      button.addEventListener("click", handleInteraction);
      button.addEventListener("keydown", handleInteraction);
      button.addEventListener("mouseleave", () => {
        button.removeAttribute("data-copy-button");
        button.blur();
        button.setAttribute("aria-label", "Copy email to clipboard");
      });
      button.addEventListener("blur", () => {
        button.removeAttribute("data-copy-button");
        button.setAttribute("aria-label", "Copy email to clipboard");
      });
    });
  }

  // src/modules/clock.js
  function initClock(scope) {
    const clockEl = scope.querySelector("[data-clock]");
    if (!clockEl) return;
    function updateClock() {
      const now = /* @__PURE__ */ new Date();
      const time = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Kyiv",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      });
      const short = now.toLocaleString("en-GB", {
        timeZone: "Europe/Kyiv",
        timeZoneName: "short"
      });
      const tz = short.split(" ").pop();
      clockEl.textContent = time + " " + tz;
    }
    updateClock();
    const id = setInterval(updateClock, 1e3);
    return function() {
      clearInterval(id);
    };
  }

  // src/core/load-script.js
  var scriptCache = {};
  function loadScript(src) {
    if (!scriptCache[src]) {
      scriptCache[src] = new Promise(function(resolve, reject) {
        const s = document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    return scriptCache[src];
  }

  // src/modules/axion-case.js
  function runAxionCase(container) {
    var isTouchDevice = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 16 / 9, 1, 5e3);
    camera.position.set(0, 0, 700);
    var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(1920, 1080);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(2760464, 1));
    var pL1 = new THREE.PointLight(16107370, 3, 1400);
    pL1.position.set(300, 350, 400);
    scene.add(pL1);
    var pL2 = new THREE.PointLight(13931578, 2.4, 1200);
    pL2.position.set(-300, -100, 300);
    scene.add(pL2);
    var pL3 = new THREE.PointLight(5913114, 1.2, 900);
    pL3.position.set(0, 200, -300);
    scene.add(pL3);
    var rimLight = new THREE.PointLight(16750916, 1.3, 600);
    rimLight.position.set(0, -250, 200);
    scene.add(rimLight);
    var targetRotY = 0, currentRotY = 0, targetRotX = 0, currentRotX = 0;
    var isDragging = false, prevMX = 0, prevMY = 0;
    var spinSpeed = Math.PI * 2 / 6;
    var mouse2D = new THREE.Vector2(9999, 9999);
    var raycaster = new THREE.Raycaster();
    var repulsionRadius = 120;
    var mouseWorldPos = new THREE.Vector3(9999, 9999, 0);
    var prevMouseWorldPos = new THREE.Vector3(9999, 9999, 0);
    var mouseVelocity = new THREE.Vector3();
    var isMouseOverCanvas = false;
    var lastClientX = 0, lastClientY = 0;
    var PARTICLE_COUNT = 8e4;
    var gravity = 0.03, friction = 0.95, windStrength = 5e-3;
    var MAX_PARTICLES = 12e4;
    var particleSystem = null;
    var positions, velocities, targetPositions, colors, sizes, alphas;
    var particleCount = 0;
    var isSimulating = false;
    var time = 0;
    var duneColors = [
      new THREE.Color(13684943),
      new THREE.Color(13355977),
      new THREE.Color(14013908),
      new THREE.Color(13027013),
      new THREE.Color(14342873),
      new THREE.Color(12632255),
      new THREE.Color(12105911),
      new THREE.Color(13487564)
    ];
    function initParticleSystem() {
      var geo = new THREE.BufferGeometry();
      positions = new Float32Array(MAX_PARTICLES * 3);
      velocities = new Float32Array(MAX_PARTICLES * 3);
      targetPositions = new Float32Array(MAX_PARTICLES * 3);
      colors = new Float32Array(MAX_PARTICLES * 3);
      sizes = new Float32Array(MAX_PARTICLES);
      alphas = new Float32Array(MAX_PARTICLES);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
      geo.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
      geo.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
      var vert = "attribute float size; attribute float alpha; attribute vec3 velocity;\nvarying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\nvoid main() {\n  vColor = color; vAlpha = alpha;\n  vec4 mvPos = modelViewMatrix * vec4(position,1.0);\n  vDist = -mvPos.z;\n  vec3 velW = mat3(modelViewMatrix) * velocity;\n  float spd = length(velW); vSpeed = min(spd*0.6,1.0);\n  float baseSize = size*(400.0/-mvPos.z);\n  gl_PointSize = baseSize*(1.0+vSpeed*2.5);\n  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);\n  gl_Position = projectionMatrix * mvPos;\n}";
      var frag = "varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\nvoid main() {\n  vec2 c = gl_PointCoord-vec2(0.5);\n  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);\n  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));\n  if(dist>0.5) discard;\n  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);\n  float heat = 1.0+vSpeed*0.6;\n  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);\n  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));\n  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));\n}";
      var mat = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });
      particleSystem = new THREE.Points(geo, mat);
      scene.add(particleSystem);
    }
    function sampleSVGToPoints(svgText, count) {
      return new Promise(function(resolve) {
        try {
          var size = 512, cvs = document.createElement("canvas");
          cvs.width = cvs.height = size;
          var ctx = cvs.getContext("2d");
          var doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
          var svgEl = doc.querySelector("svg");
          if (!svgEl) {
            resolve([]);
            return;
          }
          var vbW = parseFloat(svgEl.getAttribute("width") || 512);
          var vbH = parseFloat(svgEl.getAttribute("height") || 512);
          var vb = svgEl.getAttribute("viewBox");
          if (vb) {
            var p = vb.split(/[\s,]+/);
            vbW = +p[2];
            vbH = +p[3];
          }
          var sc = Math.min(size / vbW, size / vbH) * 0.9;
          var offX = (size - vbW * sc) / 2, offY = (size - vbH * sc) / 2;
          ctx.save();
          ctx.translate(offX, offY);
          ctx.scale(sc, sc);
          ctx.fillStyle = "white";
          doc.querySelectorAll("path,rect,circle").forEach(function(el) {
            if (el.tagName === "path") {
              var d = el.getAttribute("d");
              if (d) ctx.fill(new Path2D(d));
            } else if (el.tagName === "rect") ctx.fillRect(+el.getAttribute("x") || 0, +el.getAttribute("y") || 0, +el.getAttribute("width") || 0, +el.getAttribute("height") || 0);
            else if (el.tagName === "circle") {
              ctx.beginPath();
              ctx.arc(+el.getAttribute("cx") || 0, +el.getAttribute("cy") || 0, +el.getAttribute("r") || 0, 0, Math.PI * 2);
              ctx.fill();
            }
          });
          ctx.restore();
          var px = ctx.getImageData(0, 0, size, size).data;
          var filled = [];
          for (var y = 0; y < size; y++) for (var x = 0; x < size; x++) {
            var i = (y * size + x) * 4;
            if (px[i + 3] > 30) filled.push({ x, y, a: px[i + 3] / 255 });
          }
          if (!filled.length) {
            resolve([]);
            return;
          }
          var pts = [];
          for (var i = 0; i < count; i++) {
            var pt = filled[Math.floor(Math.random() * filled.length)];
            pts.push({ x: (pt.x - size / 2) * 1.2 + (Math.random() - 0.5) * 1.65, y: -(pt.y - size / 2) * 1.2 + (Math.random() - 0.5) * 1.65, z: (Math.random() - 0.5) * 37 * pt.a, a: pt.a });
          }
          resolve(pts);
        } catch (e) {
          console.error(e);
          resolve([]);
        }
      });
    }
    function applyPointsToParticles(pts) {
      particleCount = pts.length;
      for (var i = 0; i < particleCount; i++) {
        var p = pts[i], i3 = i * 3;
        positions[i3] = p.x;
        positions[i3 + 1] = p.y + 40;
        positions[i3 + 2] = p.z;
        velocities[i3] = velocities[i3 + 1] = velocities[i3 + 2] = 0;
        targetPositions[i3] = p.x;
        targetPositions[i3 + 1] = p.y;
        targetPositions[i3 + 2] = p.z;
        var col = duneColors[Math.floor(Math.random() * duneColors.length)], b = 0.7 + Math.random() * 0.4;
        colors[i3] = col.r * b;
        colors[i3 + 1] = col.g * b;
        colors[i3 + 2] = col.b * b;
        sizes[i] = 1.8 + Math.random() * 3.8;
        alphas[i] = 0.3 + (p.a || 0.7) * 0.75;
      }
      particleSystem.geometry.setDrawRange(0, particleCount);
      ["position", "color", "size", "alpha"].forEach(function(a) {
        particleSystem.geometry.attributes[a].needsUpdate = true;
      });
      isSimulating = true;
    }
    function loadSVG(svgText) {
      return sampleSVGToPoints(svgText, Math.min(MAX_PARTICLES, PARTICLE_COUNT)).then(function(pts) {
        if (pts.length && particleSystem) applyPointsToParticles(pts);
      });
    }
    function updateParticles(dt) {
      if (!isSimulating || !particleCount) return;
      time += dt;
      for (var i = 0; i < particleCount; i++) {
        var i3 = i * 3;
        var seed = i * 1.37;
        velocities[i3] += Math.sin(time * 0.4 + seed) * 8e-3 + Math.sin(time * 1.1 + seed * 2.3) * 3e-3;
        velocities[i3 + 1] += Math.cos(time * 0.35 + seed * 0.7) * 8e-3 + Math.sin(time * 0.9 + seed * 1.5) * 4e-3;
        velocities[i3 + 2] += Math.sin(time * 0.25 + seed * 1.1) * 4e-3;
        velocities[i3 + 1] -= gravity * 0.06;
        velocities[i3] += Math.sin(time * 0.25 + positions[i3 + 1] * 8e-3) * windStrength * 0.6;
        velocities[i3 + 2] += Math.cos(time * 0.3 + positions[i3] * 8e-3) * windStrength * 0.3;
        if (isMouseOverCanvas) {
          var mx = positions[i3] - mouseWorldPos.x, my = positions[i3 + 1] - mouseWorldPos.y, mz = positions[i3 + 2] - mouseWorldPos.z;
          var mDistSq = mx * mx + my * my + mz * mz, rSq = repulsionRadius * repulsionRadius;
          if (mDistSq < rSq && mDistSq > 0.25) {
            var mDist = Math.sqrt(mDistSq), norm = mDist / repulsionRadius;
            var ps = (i * 2654435761 & 65535) / 65535, sens = 0.6 + ps * 0.8;
            var pf = Math.pow(1 - norm, 1.5 + ps), sp = 1 + Math.min(mouseVelocity.length() * 0.12, 1), f = pf * sens * 1.2 * sp, inv = 1 / mDist;
            velocities[i3] += mx * inv * f;
            velocities[i3 + 1] += my * inv * f;
            velocities[i3 + 2] += mz * inv * f * 0.2;
            var mp = 0.02 + ps * 0.06;
            velocities[i3] += mouseVelocity.x * pf * mp;
            velocities[i3 + 1] += mouseVelocity.y * pf * mp;
            var scc = pf * 0.15;
            velocities[i3] += (ps - 0.5) * scc;
            velocities[i3 + 1] += ((i * 48271 & 65535) / 65535 - 0.5) * scc;
          }
        }
        var tx2 = targetPositions[i3], ty2 = targetPositions[i3 + 1] + 40, tz2 = targetPositions[i3 + 2];
        var dx = tx2 - positions[i3], dy = ty2 - positions[i3 + 1], dz = tz2 - positions[i3 + 2];
        var dist2 = Math.sqrt(dx * dx + dy * dy + dz * dz);
        var rs = (i * 48271 & 65535) / 65535, rb = 3e-3 + rs * 3e-3, db = 1 + Math.min(dist2 * 2e-3, 0.5), rf = rb * db;
        velocities[i3] += dx * rf;
        velocities[i3 + 1] += dy * rf;
        velocities[i3 + 2] += dz * rf;
        var ds = (i * 16807 & 65535) / 65535, db2 = friction * (0.92 + ds * 0.06);
        velocities[i3] *= db2;
        velocities[i3 + 1] *= db2;
        velocities[i3 + 2] *= db2;
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        var d2 = Math.sqrt(Math.pow(positions[i3] - targetPositions[i3], 2) + Math.pow(positions[i3 + 1] - targetPositions[i3 + 1], 2) + Math.pow(positions[i3 + 2] - targetPositions[i3 + 2], 2));
        alphas[i] = 0.15 + 0.55 * (1 - Math.min(d2 * 5e-3, 1)) + Math.sin(time * 1.5 + i * 0.01) * 0.05;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.alpha.needsUpdate = true;
      particleSystem.geometry.attributes.velocity.needsUpdate = true;
    }
    var _invMatrix = new THREE.Matrix4();
    var _hitPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), new THREE.Vector3());
    var _hitPoint = new THREE.Vector3();
    function updateMouseWorldPos(cx, cy) {
      var rect = renderer.domElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse2D.set((cx - rect.left) / rect.width * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(mouse2D, camera);
      if (raycaster.ray.intersectPlane(_hitPlane, _hitPoint)) {
        prevMouseWorldPos.copy(mouseWorldPos);
        if (particleSystem) mouseWorldPos.copy(_hitPoint).applyMatrix4(_invMatrix.copy(particleSystem.matrixWorld).invert());
        mouseVelocity.subVectors(mouseWorldPos, prevMouseWorldPos);
        var mvLen = mouseVelocity.length();
        if (mvLen > 15) mouseVelocity.multiplyScalar(15 / mvLen);
      }
    }
    function isPointerInContainer(cx, cy) {
      var rect = container.getBoundingClientRect();
      return cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
    }
    var coordsEl = container.querySelector("#logo-coords");
    var dragLabel = container.querySelector("#logo-drag-label");
    var overlayRevealed = false;
    if (!isTouchDevice) {
      var onMouseMove = function(e) {
        lastClientX = e.clientX;
        lastClientY = e.clientY;
        var over = isPointerInContainer(e.clientX, e.clientY);
        if (over) {
          isMouseOverCanvas = true;
          updateMouseWorldPos(e.clientX, e.clientY);
          var rect = container.getBoundingClientRect();
          var lx = Math.round(e.clientX - rect.left);
          var ly = Math.round(e.clientY - rect.top);
          if (coordsEl) coordsEl.textContent = "X: " + lx + "PX    Y: " + ly + "PX";
        } else {
          isMouseOverCanvas = false;
          mouseWorldPos.set(9999, 9999, 0);
        }
        if (!isDragging) return;
        targetRotY += (e.clientX - prevMX) * 5e-3;
        targetRotX += (e.clientY - prevMY) * 5e-3;
        targetRotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotX));
        prevMX = e.clientX;
        prevMY = e.clientY;
      };
      var onMouseDown = function(e) {
        if (isPointerInContainer(e.clientX, e.clientY)) {
          isDragging = true;
          prevMX = e.clientX;
          prevMY = e.clientY;
        }
      };
      var onMouseUp = function() {
        isDragging = false;
        targetRotY = 0;
        targetRotX = 0;
        currentRotY = currentRotY % (Math.PI * 2);
        if (currentRotY > Math.PI) currentRotY -= Math.PI * 2;
        if (currentRotY < -Math.PI) currentRotY += Math.PI * 2;
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);
    }
    function createAmbientDust() {
      var count = 4e3, geo = new THREE.BufferGeometry();
      var pos = new Float32Array(count * 3), col = new Float32Array(count * 3);
      for (var i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 2200;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 1800;
        pos[i * 3 + 2] = -200 - Math.random() * 1800;
        var c = duneColors[Math.floor(Math.random() * duneColors.length)], b = 0.2 + Math.random() * 0.3;
        col[i * 3] = c.r * b;
        col[i * 3 + 1] = c.g * b;
        col[i * 3 + 2] = c.b * b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      var dc = document.createElement("canvas");
      dc.width = dc.height = 32;
      var dctx = dc.getContext("2d"), g = dctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.3, "rgba(255,255,255,0.6)");
      g.addColorStop(0.7, "rgba(255,255,255,0.15)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      dctx.fillStyle = g;
      dctx.fillRect(0, 0, 32, 32);
      var mat = new THREE.PointsMaterial({ size: 1.5, map: new THREE.CanvasTexture(dc), transparent: true, opacity: 0.15, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
      var dust = new THREE.Points(geo, mat);
      dust.userData = { positions: pos, count };
      scene.add(dust);
      return dust;
    }
    initParticleSystem();
    var ambientDust = isTouchDevice ? null : createAmbientDust();
    var defaultSVG = '<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';
    loadSVG(defaultSVG);
    var clock = new THREE.Clock();
    var isCanvasVisible = true;
    var visibilityObserver = new IntersectionObserver(function(entries) {
      isCanvasVisible = entries[0].isIntersecting;
      if (entries[0].isIntersecting && !overlayRevealed && !isTouchDevice) {
        overlayRevealed = true;
        if (coordsEl) coordsEl.style.transform = "translateY(0)";
        if (dragLabel) dragLabel.style.transform = "translateY(0)";
      }
    }, { threshold: 0.1 });
    visibilityObserver.observe(container);
    var isScrolling = false;
    var scrollTimer = null;
    var frameCount = 0;
    function onScroll() {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() {
        isScrolling = false;
      }, 150);
      if (!isTouchDevice) {
        var over = isPointerInContainer(lastClientX, lastClientY);
        if (over) {
          isMouseOverCanvas = true;
          updateMouseWorldPos(lastClientX, lastClientY);
        } else {
          isMouseOverCanvas = false;
          mouseWorldPos.set(9999, 9999, 0);
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    var rafId = null;
    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isCanvasVisible) return;
      frameCount++;
      var dt = Math.min(clock.getDelta(), 0.05);
      var t2 = clock.elapsedTime;
      if (isTouchDevice) {
        currentRotY += spinSpeed * dt;
      } else {
        var diffY = targetRotY - currentRotY;
        diffY = diffY % (Math.PI * 2);
        if (diffY > Math.PI) diffY -= Math.PI * 2;
        if (diffY < -Math.PI) diffY += Math.PI * 2;
        currentRotY += diffY * 0.12;
        currentRotX += (targetRotX - currentRotX) * 0.12;
      }
      if (particleSystem) {
        particleSystem.rotation.x = currentRotX;
        particleSystem.rotation.y = currentRotY;
        particleSystem.position.y = -15;
      }
      if (ambientDust) {
        var aPos = ambientDust.userData.positions;
        for (var i = 0; i < ambientDust.userData.count; i++) {
          aPos[i * 3 + 1] += Math.sin(t2 * 0.2 + i) * 0.05;
          aPos[i * 3] += Math.cos(t2 * 0.15 + i * 0.5) * 0.03;
        }
        ambientDust.geometry.attributes.position.needsUpdate = true;
        ambientDust.rotation.y += 1e-4;
        ambientDust.position.x = -currentRotY * 35 * 0.35;
        ambientDust.position.y = currentRotX * 28 * 0.35;
      }
      pL1.position.x = 300 + Math.sin(t2 * 0.3) * 100;
      pL1.position.y = 350 + Math.cos(t2 * 0.2) * 80;
      pL2.intensity = 2 + Math.sin(t2 * 0.5) * 0.4;
      rimLight.intensity = 0.8 + Math.sin(t2 * 0.4 + 1) * 0.3;
      if (isTouchDevice && isScrolling && frameCount % 4 !== 0) return;
      updateParticles(dt);
      renderer.render(scene, camera);
    }
    animate();
    return function() {
      cancelAnimationFrame(rafId);
      if (!isTouchDevice) {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
      }
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimer);
      visibilityObserver.disconnect();
      scene.traverse(function(obj) {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      particleSystem = null;
    };
  }

  // src/modules/axion-card.js
  function runAxionCard(container) {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 1, 1, 5e3);
    camera.position.set(0, 0, 700);
    var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(1080, 1080);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(2760464, 1));
    var pL1 = new THREE.PointLight(16107370, 3, 1400);
    pL1.position.set(300, 350, 400);
    scene.add(pL1);
    var pL2 = new THREE.PointLight(13931578, 2.4, 1200);
    pL2.position.set(-300, -100, 300);
    scene.add(pL2);
    var pL3 = new THREE.PointLight(5913114, 1.2, 900);
    pL3.position.set(0, 200, -300);
    scene.add(pL3);
    var rimLight = new THREE.PointLight(16750916, 1.3, 600);
    rimLight.position.set(0, -250, 200);
    scene.add(rimLight);
    var currentRotY = 0;
    var spinSpeed = Math.PI * 2 / 6;
    var PARTICLE_COUNT = 8e4;
    var gravity = 0.03, friction = 0.95, windStrength = 5e-3;
    var MAX_PARTICLES = 12e4;
    var particleSystem = null;
    var positions, velocities, targetPositions, colors, sizes, alphas;
    var particleCount = 0;
    var isSimulating = false;
    var time = 0;
    var duneColors = [
      new THREE.Color(13684943),
      new THREE.Color(13355977),
      new THREE.Color(14013908),
      new THREE.Color(13027013),
      new THREE.Color(14342873),
      new THREE.Color(12632255),
      new THREE.Color(12105911),
      new THREE.Color(13487564)
    ];
    function initParticleSystem() {
      var geo = new THREE.BufferGeometry();
      positions = new Float32Array(MAX_PARTICLES * 3);
      velocities = new Float32Array(MAX_PARTICLES * 3);
      targetPositions = new Float32Array(MAX_PARTICLES * 3);
      colors = new Float32Array(MAX_PARTICLES * 3);
      sizes = new Float32Array(MAX_PARTICLES);
      alphas = new Float32Array(MAX_PARTICLES);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
      geo.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
      geo.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
      var vert = "attribute float size; attribute float alpha; attribute vec3 velocity;\nvarying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\nvoid main() {\n  vColor = color; vAlpha = alpha;\n  vec4 mvPos = modelViewMatrix * vec4(position,1.0);\n  vDist = -mvPos.z;\n  vec3 velW = mat3(modelViewMatrix) * velocity;\n  float spd = length(velW); vSpeed = min(spd*0.6,1.0);\n  float baseSize = size*(400.0/-mvPos.z);\n  gl_PointSize = baseSize*(1.0+vSpeed*2.5);\n  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);\n  gl_Position = projectionMatrix * mvPos;\n}";
      var frag = "varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\nvoid main() {\n  vec2 c = gl_PointCoord-vec2(0.5);\n  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);\n  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));\n  if(dist>0.5) discard;\n  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);\n  float heat = 1.0+vSpeed*0.6;\n  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);\n  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));\n  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));\n}";
      var mat = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });
      particleSystem = new THREE.Points(geo, mat);
      scene.add(particleSystem);
    }
    function sampleSVGToPoints(svgText, count) {
      return new Promise(function(resolve) {
        try {
          var size = 512, cvs = document.createElement("canvas");
          cvs.width = cvs.height = size;
          var ctx = cvs.getContext("2d");
          var doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
          var svgEl = doc.querySelector("svg");
          if (!svgEl) {
            resolve([]);
            return;
          }
          var vbW = parseFloat(svgEl.getAttribute("width") || 512);
          var vbH = parseFloat(svgEl.getAttribute("height") || 512);
          var vb = svgEl.getAttribute("viewBox");
          if (vb) {
            var p = vb.split(/[\s,]+/);
            vbW = +p[2];
            vbH = +p[3];
          }
          var sc = Math.min(size / vbW, size / vbH) * 0.9;
          var offX = (size - vbW * sc) / 2, offY = (size - vbH * sc) / 2;
          ctx.save();
          ctx.translate(offX, offY);
          ctx.scale(sc, sc);
          ctx.fillStyle = "white";
          doc.querySelectorAll("path,rect,circle").forEach(function(el) {
            if (el.tagName === "path") {
              var d = el.getAttribute("d");
              if (d) ctx.fill(new Path2D(d));
            } else if (el.tagName === "rect") ctx.fillRect(+el.getAttribute("x") || 0, +el.getAttribute("y") || 0, +el.getAttribute("width") || 0, +el.getAttribute("height") || 0);
            else if (el.tagName === "circle") {
              ctx.beginPath();
              ctx.arc(+el.getAttribute("cx") || 0, +el.getAttribute("cy") || 0, +el.getAttribute("r") || 0, 0, Math.PI * 2);
              ctx.fill();
            }
          });
          ctx.restore();
          var px = ctx.getImageData(0, 0, size, size).data;
          var filled = [];
          for (var y = 0; y < size; y++) for (var x = 0; x < size; x++) {
            var i2 = (y * size + x) * 4;
            if (px[i2 + 3] > 30) filled.push({ x, y, a: px[i2 + 3] / 255 });
          }
          if (!filled.length) {
            resolve([]);
            return;
          }
          var pts = [];
          for (var i2 = 0; i2 < count; i2++) {
            var pt = filled[Math.floor(Math.random() * filled.length)];
            pts.push({ x: (pt.x - size / 2) * 1.2 + (Math.random() - 0.5) * 1.65, y: -(pt.y - size / 2) * 1.2 + (Math.random() - 0.5) * 1.65, z: (Math.random() - 0.5) * 37 * pt.a, a: pt.a });
          }
          resolve(pts);
        } catch (e) {
          console.error(e);
          resolve([]);
        }
      });
    }
    function applyPointsToParticles(pts) {
      particleCount = pts.length;
      for (var i2 = 0; i2 < particleCount; i2++) {
        var p = pts[i2], i3 = i2 * 3;
        positions[i3] = p.x;
        positions[i3 + 1] = p.y + 40;
        positions[i3 + 2] = p.z;
        velocities[i3] = velocities[i3 + 1] = velocities[i3 + 2] = 0;
        targetPositions[i3] = p.x;
        targetPositions[i3 + 1] = p.y;
        targetPositions[i3 + 2] = p.z;
        var col = duneColors[Math.floor(Math.random() * duneColors.length)], b2 = 0.7 + Math.random() * 0.4;
        colors[i3] = col.r * b2;
        colors[i3 + 1] = col.g * b2;
        colors[i3 + 2] = col.b * b2;
        sizes[i2] = 1.8 + Math.random() * 3.8;
        alphas[i2] = 0.3 + (p.a || 0.7) * 0.75;
      }
      particleSystem.geometry.setDrawRange(0, particleCount);
      ["position", "color", "size", "alpha"].forEach(function(a) {
        particleSystem.geometry.attributes[a].needsUpdate = true;
      });
      isSimulating = true;
    }
    function loadSVG(svgText) {
      return sampleSVGToPoints(svgText, Math.min(MAX_PARTICLES, PARTICLE_COUNT)).then(function(pts) {
        if (pts.length && particleSystem) applyPointsToParticles(pts);
      });
    }
    function updateParticles(dt) {
      if (!isSimulating || !particleCount) return;
      time += dt;
      for (var i2 = 0; i2 < particleCount; i2++) {
        var i3 = i2 * 3;
        var seed = i2 * 1.37;
        velocities[i3] += Math.sin(time * 0.4 + seed) * 8e-3 + Math.sin(time * 1.1 + seed * 2.3) * 3e-3;
        velocities[i3 + 1] += Math.cos(time * 0.35 + seed * 0.7) * 8e-3 + Math.sin(time * 0.9 + seed * 1.5) * 4e-3;
        velocities[i3 + 2] += Math.sin(time * 0.25 + seed * 1.1) * 4e-3;
        velocities[i3 + 1] -= gravity * 0.06;
        velocities[i3] += Math.sin(time * 0.25 + positions[i3 + 1] * 8e-3) * windStrength * 0.6;
        velocities[i3 + 2] += Math.cos(time * 0.3 + positions[i3] * 8e-3) * windStrength * 0.3;
        var tx2 = targetPositions[i3], ty2 = targetPositions[i3 + 1] + 40, tz2 = targetPositions[i3 + 2];
        var dx = tx2 - positions[i3], dy = ty2 - positions[i3 + 1], dz = tz2 - positions[i3 + 2];
        var dist2 = Math.sqrt(dx * dx + dy * dy + dz * dz);
        var rs = (i2 * 48271 & 65535) / 65535, rb = 3e-3 + rs * 3e-3, db = 1 + Math.min(dist2 * 2e-3, 0.5), rf = rb * db;
        velocities[i3] += dx * rf;
        velocities[i3 + 1] += dy * rf;
        velocities[i3 + 2] += dz * rf;
        var ds = (i2 * 16807 & 65535) / 65535, db2 = friction * (0.92 + ds * 0.06);
        velocities[i3] *= db2;
        velocities[i3 + 1] *= db2;
        velocities[i3 + 2] *= db2;
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        var d2 = Math.sqrt(Math.pow(positions[i3] - targetPositions[i3], 2) + Math.pow(positions[i3 + 1] - targetPositions[i3 + 1], 2) + Math.pow(positions[i3 + 2] - targetPositions[i3 + 2], 2));
        alphas[i2] = 0.15 + 0.55 * (1 - Math.min(d2 * 5e-3, 1)) + Math.sin(time * 1.5 + i2 * 0.01) * 0.05;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.alpha.needsUpdate = true;
      particleSystem.geometry.attributes.velocity.needsUpdate = true;
    }
    initParticleSystem();
    var dustCount = 4e3, dustGeo = new THREE.BufferGeometry();
    var dustPos = new Float32Array(dustCount * 3), dustCol = new Float32Array(dustCount * 3);
    for (var i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 2200;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 1800;
      dustPos[i * 3 + 2] = -200 - Math.random() * 1800;
      var c = duneColors[Math.floor(Math.random() * duneColors.length)], b = 0.2 + Math.random() * 0.3;
      dustCol[i * 3] = c.r * b;
      dustCol[i * 3 + 1] = c.g * b;
      dustCol[i * 3 + 2] = c.b * b;
    }
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    dustGeo.setAttribute("color", new THREE.BufferAttribute(dustCol, 3));
    var dc = document.createElement("canvas");
    dc.width = dc.height = 32;
    var dctx = dc.getContext("2d"), g = dctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.3, "rgba(255,255,255,0.6)");
    g.addColorStop(0.7, "rgba(255,255,255,0.15)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    dctx.fillStyle = g;
    dctx.fillRect(0, 0, 32, 32);
    var dustMat = new THREE.PointsMaterial({ size: 1.5, map: new THREE.CanvasTexture(dc), transparent: true, opacity: 0.15, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
    var ambientDust = new THREE.Points(dustGeo, dustMat);
    scene.add(ambientDust);
    var defaultSVG = '<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';
    loadSVG(defaultSVG);
    var clock = new THREE.Clock();
    var isCanvasVisible = true;
    var visibilityObserver = new IntersectionObserver(function(entries) {
      isCanvasVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    visibilityObserver.observe(container);
    var overlays = container.querySelectorAll("#logo-coords, #logo-drag-label");
    overlays.forEach(function(el) {
      el.parentElement.style.display = "none";
    });
    var rafId = null;
    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isCanvasVisible) return;
      var dt = Math.min(clock.getDelta(), 0.05);
      var t2 = clock.elapsedTime;
      currentRotY += spinSpeed * dt;
      if (particleSystem) {
        particleSystem.rotation.y = currentRotY;
        particleSystem.position.y = 5;
        particleSystem.scale.setScalar(0.85);
      }
      for (var i2 = 0; i2 < dustCount; i2++) {
        dustPos[i2 * 3 + 1] += Math.sin(t2 * 0.2 + i2) * 0.05;
        dustPos[i2 * 3] += Math.cos(t2 * 0.15 + i2 * 0.5) * 0.03;
      }
      dustGeo.attributes.position.needsUpdate = true;
      ambientDust.rotation.y += 1e-4;
      ambientDust.position.x = -currentRotY * 35 * 0.35;
      pL1.position.x = 300 + Math.sin(t2 * 0.3) * 100;
      pL1.position.y = 350 + Math.cos(t2 * 0.2) * 80;
      pL2.intensity = 2 + Math.sin(t2 * 0.5) * 0.4;
      rimLight.intensity = 0.8 + Math.sin(t2 * 0.4 + 1) * 0.3;
      updateParticles(dt);
      renderer.render(scene, camera);
    }
    animate();
    return function() {
      cancelAnimationFrame(rafId);
      visibilityObserver.disconnect();
      scene.traverse(function(obj) {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      particleSystem = null;
    };
  }

  // src/modules/axion.js
  var THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  function initAxion(scope) {
    const container = scope.querySelector("#logo-canvas-container");
    if (!container) return;
    let destroyed = false;
    let cleanup = null;
    loadScript(THREE_SRC).then(function() {
      if (destroyed) return;
      const isHome = !!container.closest('[data-flip-element="target"]');
      cleanup = isHome ? runAxion(container) : runAxionCase(container);
    });
    return function() {
      destroyed = true;
      if (cleanup) cleanup();
    };
  }
  function initAxionCard(scope) {
    const container = scope.querySelector("#axion-card");
    if (!container) return;
    let destroyed = false;
    let cleanup = null;
    loadScript(THREE_SRC).then(function() {
      if (destroyed) return;
      cleanup = runAxionCard(container);
    });
    return function() {
      destroyed = true;
      if (cleanup) cleanup();
    };
  }
  function runAxion(container) {
    var isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 16 / 9, 1, 5e3);
    camera.position.set(0, 0, 700);
    var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(1920, 1080);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(2760464, 1));
    var pL1 = new THREE.PointLight(16107370, 3, 1400);
    pL1.position.set(300, 350, 400);
    scene.add(pL1);
    var pL2 = new THREE.PointLight(13931578, 2.4, 1200);
    pL2.position.set(-300, -100, 300);
    scene.add(pL2);
    var pL3 = new THREE.PointLight(5913114, 1.2, 900);
    pL3.position.set(0, 200, -300);
    scene.add(pL3);
    var rimLight = new THREE.PointLight(16750916, 1.3, 600);
    rimLight.position.set(0, -250, 200);
    scene.add(rimLight);
    var targetRotY = 0, currentRotY = 0, targetRotX = 0, currentRotX = 0;
    var isDragging = false, prevMX = 0, prevMY = 0;
    var spinSpeed = Math.PI * 2 / 6;
    var mouse2D = new THREE.Vector2(9999, 9999);
    var raycaster = new THREE.Raycaster();
    var repulsionRadius = 120;
    var mouseWorldPos = new THREE.Vector3(9999, 9999, 0);
    var prevMouseWorldPos = new THREE.Vector3(9999, 9999, 0);
    var mouseVelocity = new THREE.Vector3();
    var isMouseOverCanvas = false;
    var lastClientX = 0, lastClientY = 0;
    var PARTICLE_COUNT = 8e4;
    var gravity = 0.03, friction = 0.95, windStrength = 5e-3;
    var MAX_PARTICLES = 12e4;
    var particleSystem = null;
    var positions, velocities, targetPositions, colors, sizes, alphas;
    var particleCount = 0;
    var isSimulating = false, isForming = false, formationProgress = 0;
    var time = 0;
    var rafId = null;
    var duneColors = [
      new THREE.Color(13684943),
      new THREE.Color(13355977),
      new THREE.Color(14013908),
      new THREE.Color(13027013),
      new THREE.Color(14342873),
      new THREE.Color(12632255),
      new THREE.Color(12105911),
      new THREE.Color(13487564)
    ];
    function initParticleSystem() {
      var geo = new THREE.BufferGeometry();
      positions = new Float32Array(MAX_PARTICLES * 3);
      velocities = new Float32Array(MAX_PARTICLES * 3);
      targetPositions = new Float32Array(MAX_PARTICLES * 3);
      colors = new Float32Array(MAX_PARTICLES * 3);
      sizes = new Float32Array(MAX_PARTICLES);
      alphas = new Float32Array(MAX_PARTICLES);
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
      geo.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
      geo.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));
      var vert = "attribute float size; attribute float alpha; attribute vec3 velocity;\nvarying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\nvoid main() {\n  vColor = color; vAlpha = alpha;\n  vec4 mvPos = modelViewMatrix * vec4(position,1.0);\n  vDist = -mvPos.z;\n  vec3 velW = mat3(modelViewMatrix) * velocity;\n  float spd = length(velW); vSpeed = min(spd*0.6,1.0);\n  float baseSize = size*(400.0/-mvPos.z);\n  gl_PointSize = baseSize*(1.0+vSpeed*2.5);\n  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);\n  gl_Position = projectionMatrix * mvPos;\n}";
      var frag = "varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\nvoid main() {\n  vec2 c = gl_PointCoord-vec2(0.5);\n  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);\n  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));\n  if(dist>0.5) discard;\n  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);\n  float heat = 1.0+vSpeed*0.6;\n  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);\n  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));\n  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));\n}";
      var mat = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });
      particleSystem = new THREE.Points(geo, mat);
      scene.add(particleSystem);
    }
    function sampleSVGToPoints(svgText, count) {
      return new Promise(function(resolve) {
        try {
          var size = 512, cvs = document.createElement("canvas");
          cvs.width = cvs.height = size;
          var ctx = cvs.getContext("2d");
          var doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
          var svgEl = doc.querySelector("svg");
          if (!svgEl) {
            resolve([]);
            return;
          }
          var vbW = parseFloat(svgEl.getAttribute("width") || 512);
          var vbH = parseFloat(svgEl.getAttribute("height") || 512);
          var vb = svgEl.getAttribute("viewBox");
          if (vb) {
            var p = vb.split(/[\s,]+/);
            vbW = +p[2];
            vbH = +p[3];
          }
          var sc = Math.min(size / vbW, size / vbH) * 0.9;
          var offX = (size - vbW * sc) / 2, offY = (size - vbH * sc) / 2;
          ctx.save();
          ctx.translate(offX, offY);
          ctx.scale(sc, sc);
          ctx.fillStyle = "white";
          doc.querySelectorAll("path,rect,circle").forEach(function(el) {
            if (el.tagName === "path") {
              var d = el.getAttribute("d");
              if (d) ctx.fill(new Path2D(d));
            } else if (el.tagName === "rect") ctx.fillRect(+el.getAttribute("x") || 0, +el.getAttribute("y") || 0, +el.getAttribute("width") || 0, +el.getAttribute("height") || 0);
            else if (el.tagName === "circle") {
              ctx.beginPath();
              ctx.arc(+el.getAttribute("cx") || 0, +el.getAttribute("cy") || 0, +el.getAttribute("r") || 0, 0, Math.PI * 2);
              ctx.fill();
            }
          });
          ctx.restore();
          var px = ctx.getImageData(0, 0, size, size).data;
          var filled = [];
          for (var y = 0; y < size; y++) for (var x = 0; x < size; x++) {
            var i = (y * size + x) * 4;
            if (px[i + 3] > 30) filled.push({ x, y, a: px[i + 3] / 255 });
          }
          if (!filled.length) {
            resolve([]);
            return;
          }
          var pts = [];
          for (var i = 0; i < count; i++) {
            var pt = filled[Math.floor(Math.random() * filled.length)];
            pts.push({ x: (pt.x - size / 2) * 1.2 + (Math.random() - 0.5) * 1.65, y: -(pt.y - size / 2) * 1.2 + (Math.random() - 0.5) * 1.65, z: (Math.random() - 0.5) * 37 * pt.a, a: pt.a });
          }
          resolve(pts);
        } catch (e) {
          console.error(e);
          resolve([]);
        }
      });
    }
    function applyPointsToParticles(pts) {
      particleCount = pts.length;
      for (var i = 0; i < particleCount; i++) {
        var p = pts[i], i3 = i * 3;
        positions[i3] = p.x;
        positions[i3 + 1] = p.y + 40;
        positions[i3 + 2] = p.z;
        velocities[i3] = velocities[i3 + 1] = velocities[i3 + 2] = 0;
        targetPositions[i3] = p.x;
        targetPositions[i3 + 1] = p.y;
        targetPositions[i3 + 2] = p.z;
        var col = duneColors[Math.floor(Math.random() * duneColors.length)], b = 0.7 + Math.random() * 0.4;
        colors[i3] = col.r * b;
        colors[i3 + 1] = col.g * b;
        colors[i3 + 2] = col.b * b;
        sizes[i] = 1.8 + Math.random() * 3.8;
        alphas[i] = 0.3 + (p.a || 0.7) * 0.75;
      }
      particleSystem.geometry.setDrawRange(0, particleCount);
      ["position", "color", "size", "alpha"].forEach(function(a) {
        particleSystem.geometry.attributes[a].needsUpdate = true;
      });
      isSimulating = true;
      isForming = false;
      formationProgress = 1;
    }
    function loadSVG(svgText) {
      return sampleSVGToPoints(svgText, Math.min(MAX_PARTICLES, PARTICLE_COUNT)).then(function(pts) {
        if (pts.length && particleSystem) applyPointsToParticles(pts);
      });
    }
    function updateParticles(dt) {
      if (!isSimulating || !particleCount) return;
      time += dt;
      for (var i = 0; i < particleCount; i++) {
        var i3 = i * 3;
        var seed = i * 1.37;
        velocities[i3] += Math.sin(time * 0.4 + seed) * 8e-3 + Math.sin(time * 1.1 + seed * 2.3) * 3e-3;
        velocities[i3 + 1] += Math.cos(time * 0.35 + seed * 0.7) * 8e-3 + Math.sin(time * 0.9 + seed * 1.5) * 4e-3;
        velocities[i3 + 2] += Math.sin(time * 0.25 + seed * 1.1) * 4e-3;
        velocities[i3 + 1] -= gravity * 0.06;
        velocities[i3] += Math.sin(time * 0.25 + positions[i3 + 1] * 8e-3) * windStrength * 0.6;
        velocities[i3 + 2] += Math.cos(time * 0.3 + positions[i3] * 8e-3) * windStrength * 0.3;
        if (isMouseOverCanvas && mode === "interactive") {
          var mx = positions[i3] - mouseWorldPos.x, my = positions[i3 + 1] - mouseWorldPos.y, mz = positions[i3 + 2] - mouseWorldPos.z;
          var mDistSq = mx * mx + my * my + mz * mz, rSq = repulsionRadius * repulsionRadius;
          if (mDistSq < rSq && mDistSq > 0.25) {
            var mDist = Math.sqrt(mDistSq), norm = mDist / repulsionRadius;
            var ps = (i * 2654435761 & 65535) / 65535, sens = 0.6 + ps * 0.8;
            var pf = Math.pow(1 - norm, 1.5 + ps), sp = 1 + Math.min(mouseVelocity.length() * 0.12, 1), f = pf * sens * 1.2 * sp, inv = 1 / mDist;
            velocities[i3] += mx * inv * f;
            velocities[i3 + 1] += my * inv * f;
            velocities[i3 + 2] += mz * inv * f * 0.2;
            var mp = 0.02 + ps * 0.06;
            velocities[i3] += mouseVelocity.x * pf * mp;
            velocities[i3 + 1] += mouseVelocity.y * pf * mp;
            var scc = pf * 0.15;
            velocities[i3] += (ps - 0.5) * scc;
            velocities[i3 + 1] += ((i * 48271 & 65535) / 65535 - 0.5) * scc;
          }
        }
        var tx2 = targetPositions[i3], ty2 = targetPositions[i3 + 1] + 40, tz2 = targetPositions[i3 + 2];
        var dx = tx2 - positions[i3], dy = ty2 - positions[i3 + 1], dz = tz2 - positions[i3 + 2];
        var dist2 = Math.sqrt(dx * dx + dy * dy + dz * dz);
        var rs = (i * 48271 & 65535) / 65535, rb = 3e-3 + rs * 3e-3, db = 1 + Math.min(dist2 * 2e-3, 0.5), rf = rb * db;
        velocities[i3] += dx * rf;
        velocities[i3 + 1] += dy * rf;
        velocities[i3 + 2] += dz * rf;
        var ds = (i * 16807 & 65535) / 65535, db2 = friction * (0.92 + ds * 0.06);
        velocities[i3] *= db2;
        velocities[i3 + 1] *= db2;
        velocities[i3 + 2] *= db2;
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];
        var d2 = Math.sqrt(Math.pow(positions[i3] - targetPositions[i3], 2) + Math.pow(positions[i3 + 1] - targetPositions[i3 + 1], 2) + Math.pow(positions[i3 + 2] - targetPositions[i3 + 2], 2));
        alphas[i] = 0.15 + 0.55 * (1 - Math.min(d2 * 5e-3, 1)) + Math.sin(time * 1.5 + i * 0.01) * 0.05;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.alpha.needsUpdate = true;
      particleSystem.geometry.attributes.velocity.needsUpdate = true;
    }
    var _invMatrix = new THREE.Matrix4();
    var _hitPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), new THREE.Vector3());
    var _hitPoint = new THREE.Vector3();
    function updateMouseWorldPos(cx, cy) {
      var rect = renderer.domElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse2D.set((cx - rect.left) / rect.width * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
      raycaster.setFromCamera(mouse2D, camera);
      if (raycaster.ray.intersectPlane(_hitPlane, _hitPoint)) {
        prevMouseWorldPos.copy(mouseWorldPos);
        if (particleSystem) mouseWorldPos.copy(_hitPoint).applyMatrix4(_invMatrix.copy(particleSystem.matrixWorld).invert());
        mouseVelocity.subVectors(mouseWorldPos, prevMouseWorldPos);
        var mvLen = mouseVelocity.length();
        if (mvLen > 15) mouseVelocity.multiplyScalar(15 / mvLen);
      }
    }
    var _flipTarget = null;
    function getFlipTarget() {
      if (!_flipTarget) _flipTarget = container.closest('[data-flip-element="target"]') || container;
      return _flipTarget;
    }
    function isPointerInContainer(cx, cy) {
      var rect = getFlipTarget().getBoundingClientRect();
      return cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
    }
    var coordsEl = container.querySelector("#logo-coords");
    var dragLabel = container.querySelector("#logo-drag-label");
    var overlayVisible = false;
    function onMouseMove(e) {
      lastClientX = e.clientX;
      lastClientY = e.clientY;
      if (isTouchDevice || mode !== "interactive") {
        isMouseOverCanvas = false;
        mouseWorldPos.set(9999, 9999, 0);
        return;
      }
      var over = isPointerInContainer(e.clientX, e.clientY);
      if (over) {
        isMouseOverCanvas = true;
        updateMouseWorldPos(e.clientX, e.clientY);
        var rect = getFlipTarget().getBoundingClientRect();
        var lx = Math.round(e.clientX - rect.left);
        var ly = Math.round(e.clientY - rect.top);
        if (coordsEl) coordsEl.textContent = "X: " + lx + "PX    Y: " + ly + "PX";
      } else {
        isMouseOverCanvas = false;
        mouseWorldPos.set(9999, 9999, 0);
      }
      if (!isDragging) return;
      targetRotY += (e.clientX - prevMX) * 5e-3;
      targetRotX += (e.clientY - prevMY) * 5e-3;
      targetRotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, targetRotX));
      prevMX = e.clientX;
      prevMY = e.clientY;
    }
    function onMouseDown(e) {
      if (isTouchDevice || mode !== "interactive") return;
      if (isPointerInContainer(e.clientX, e.clientY)) {
        isDragging = true;
        prevMX = e.clientX;
        prevMY = e.clientY;
      }
    }
    function onMouseUp() {
      if (isTouchDevice) return;
      isDragging = false;
      targetRotY = 0;
      targetRotX = 0;
      currentRotY = currentRotY % (Math.PI * 2);
      if (currentRotY > Math.PI) currentRotY -= Math.PI * 2;
      if (currentRotY < -Math.PI) currentRotY += Math.PI * 2;
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    function createAmbientDust() {
      var count = 4e3, geo = new THREE.BufferGeometry();
      var pos = new Float32Array(count * 3), col = new Float32Array(count * 3);
      for (var i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 2200;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 1800;
        pos[i * 3 + 2] = -200 - Math.random() * 1800;
        var c = duneColors[Math.floor(Math.random() * duneColors.length)], b = 0.2 + Math.random() * 0.3;
        col[i * 3] = c.r * b;
        col[i * 3 + 1] = c.g * b;
        col[i * 3 + 2] = c.b * b;
      }
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
      var dc = document.createElement("canvas");
      dc.width = dc.height = 32;
      var dctx = dc.getContext("2d"), g = dctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.3, "rgba(255,255,255,0.6)");
      g.addColorStop(0.7, "rgba(255,255,255,0.15)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      dctx.fillStyle = g;
      dctx.fillRect(0, 0, 32, 32);
      var mat = new THREE.PointsMaterial({ size: 1.5, map: new THREE.CanvasTexture(dc), transparent: true, opacity: 0.15, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
      var dust = new THREE.Points(geo, mat);
      dust.userData = { positions: pos, count };
      scene.add(dust);
      return dust;
    }
    initParticleSystem();
    var ambientDust = createAmbientDust();
    var defaultSVG = '<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';
    loadSVG(defaultSVG);
    var clock = new THREE.Clock();
    var mode = "spin";
    var _scalingExists = null;
    function updateMode() {
      if (isTouchDevice) {
        mode = "spin";
        return;
      }
      if (_scalingExists === null) {
        var sv = document.querySelector(".scaling-element-video");
        _scalingExists = sv && getComputedStyle(sv).display !== "none";
      }
      if (!_scalingExists) {
        mode = "spin";
        return;
      }
      var progress = window._flipProgress || 0;
      if (progress > 0.85) mode = "interactive";
      else if (progress > 0.7) mode = "transition";
      else mode = "spin";
    }
    var prevMode = "spin";
    var isCanvasVisible = true;
    var visibilityObserver = new IntersectionObserver(function(entries) {
      isCanvasVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    visibilityObserver.observe(container);
    var isScrolling = false;
    var scrollTimer = null;
    var frameCount = 0;
    function onScroll() {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() {
        isScrolling = false;
      }, 150);
      var over = isPointerInContainer(lastClientX, lastClientY);
      if (over) {
        isMouseOverCanvas = true;
        updateMouseWorldPos(lastClientX, lastClientY);
      } else {
        isMouseOverCanvas = false;
        mouseWorldPos.set(9999, 9999, 0);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isCanvasVisible) return;
      frameCount++;
      var dt = Math.min(clock.getDelta(), 0.05);
      var t2 = clock.elapsedTime;
      updateMode();
      if (prevMode === "interactive" && mode !== "interactive") {
        isMouseOverCanvas = false;
        mouseWorldPos.set(9999, 9999, 0);
        isDragging = false;
      }
      var shouldShow = mode === "transition" || mode === "interactive";
      if (shouldShow && !overlayVisible) {
        overlayVisible = true;
        if (dragLabel) dragLabel.style.transform = "translateY(0)";
        if (coordsEl) coordsEl.style.transform = "translateY(0)";
      } else if (!shouldShow && overlayVisible) {
        overlayVisible = false;
        if (dragLabel) dragLabel.style.transform = "translateY(100%)";
        if (coordsEl) coordsEl.style.transform = "translateY(100%)";
      }
      prevMode = mode;
      if (isMouseOverCanvas && !isPointerInContainer(lastClientX, lastClientY)) {
        isMouseOverCanvas = false;
        mouseWorldPos.set(9999, 9999, 0);
      }
      if (mode === "spin") {
        currentRotY += spinSpeed * dt;
        currentRotX += (0 - currentRotX) * 0.05;
      } else if (mode === "transition") {
        currentRotY = currentRotY % (Math.PI * 2);
        if (currentRotY > Math.PI) currentRotY -= Math.PI * 2;
        if (currentRotY < -Math.PI) currentRotY += Math.PI * 2;
        currentRotY += (0 - currentRotY) * 0.025;
        currentRotX += (0 - currentRotX) * 0.025;
      } else {
        var diffY = targetRotY - currentRotY;
        diffY = diffY % (Math.PI * 2);
        if (diffY > Math.PI) diffY -= Math.PI * 2;
        if (diffY < -Math.PI) diffY += Math.PI * 2;
        currentRotY += diffY * 0.12;
        currentRotX += (targetRotX - currentRotX) * 0.12;
      }
      if (particleSystem) {
        particleSystem.rotation.x = currentRotX;
        particleSystem.rotation.y = currentRotY;
        particleSystem.scale.setScalar(1);
        particleSystem.position.y = -15;
      }
      var aPos = ambientDust.userData.positions;
      for (var i = 0; i < ambientDust.userData.count; i++) {
        aPos[i * 3 + 1] += Math.sin(t2 * 0.2 + i) * 0.05;
        aPos[i * 3] += Math.cos(t2 * 0.15 + i * 0.5) * 0.03;
      }
      ambientDust.geometry.attributes.position.needsUpdate = true;
      ambientDust.rotation.y += 1e-4;
      ambientDust.position.x = -currentRotY * 35 * 0.35;
      ambientDust.position.y = currentRotX * 28 * 0.35;
      pL1.position.x = 300 + Math.sin(t2 * 0.3) * 100;
      pL1.position.y = 350 + Math.cos(t2 * 0.2) * 80;
      pL2.intensity = 2 + Math.sin(t2 * 0.5) * 0.4;
      rimLight.intensity = 0.8 + Math.sin(t2 * 0.4 + 1) * 0.3;
      if (isTouchDevice && isScrolling && frameCount % 4 !== 0) return;
      updateParticles(dt);
      renderer.render(scene, camera);
    }
    animate();
    return function() {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimer);
      visibilityObserver.disconnect();
      scene.traverse(function(obj) {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (obj.material.map) obj.material.map.dispose();
          obj.material.dispose();
        }
      });
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      particleSystem = null;
    };
  }

  // src/modules/split-text.js
  var SPLIT_DELAY = 0.25;
  var SPLIT_LINES = { duration: 0.8, yPercent: 110, stagger: 0.08, ease: "expo.out" };
  function initMaskTextScrollReveal(scope, extraDelay = 0) {
    const splits = [];
    scope.querySelectorAll("[data-split]").forEach((el) => {
      const isInView = el.getBoundingClientRect().top < window.innerHeight;
      splits.push(SplitText.create(el, {
        type: "lines",
        autoSplit: true,
        mask: "lines",
        onSplit(instance) {
          gsap.set(el, { autoAlpha: 1 });
          const toVars = {
            yPercent: 0,
            duration: SPLIT_LINES.duration,
            stagger: SPLIT_LINES.stagger,
            ease: SPLIT_LINES.ease,
            delay: SPLIT_DELAY + (isInView ? extraDelay : 0)
          };
          if (!isInView) {
            toVars.scrollTrigger = {
              trigger: el,
              start: "clamp(top 80%)",
              once: true
            };
          }
          return gsap.fromTo(
            instance.lines,
            { yPercent: SPLIT_LINES.yPercent },
            toVars
          );
        }
      }));
    });
    return function() {
      splits.forEach(function(s) {
        s.revert();
      });
    };
  }

  // src/modules/loader.js
  function initLogoRevealLoader(container) {
    const wrap = document.querySelector("[data-load-wrap]");
    if (!wrap) return null;
    lenis.stop();
    const bg = wrap.querySelector("[data-load-bg]");
    const progressBar = wrap.querySelector("[data-load-progress]");
    const logo = wrap.querySelector("[data-load-logo]");
    const textElements = Array.from(wrap.querySelectorAll("[data-load-text]"));
    const resetTargets = Array.from(wrap.querySelectorAll("[data-load-reset]:not([data-load-text])"));
    const loadTimeline = gsap.timeline({
      defaults: {
        ease: "loader",
        duration: 3
      }
    }).set(wrap, { display: "block" }).to(progressBar, { scaleX: 1 }).to(logo, { clipPath: "inset(0% 0% 0% 0%)" }, "<").to(wrap.querySelector(".loader__text-wrap"), { autoAlpha: 0, duration: 0.5 }).to(progressBar, { scaleX: 0, transformOrigin: "right center", duration: 0.5 }, "<").add("hideContent", "<").call(() => {
      addCleanup(initMaskTextScrollReveal(container, 0.3));
    }, null, "hideContent").fromTo(
      wrap,
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", duration: PAGE_DURATION, ease: PAGE_EASE },
      "hideContent"
    ).set(wrap, { display: "none" }).call(() => {
      lenis.start();
    }).call(() => {
      sessionStorage.setItem("visited", "1");
    });
    if (resetTargets.length) {
      loadTimeline.set(resetTargets, { autoAlpha: 1 }, 0);
    }
    if (textElements.length >= 2) {
      const firstWord = new SplitText(textElements[0], { type: "lines,chars", mask: "lines" });
      const secondWord = new SplitText(textElements[1], { type: "lines,chars", mask: "lines" });
      gsap.set([firstWord.chars, secondWord.chars], { autoAlpha: 0, yPercent: 125 });
      gsap.set(textElements, { autoAlpha: 1 });
      loadTimeline.to(firstWord.chars, { autoAlpha: 1, yPercent: 0, duration: 0.6, stagger: { each: 0.02 } }, 0);
      loadTimeline.to(firstWord.chars, { autoAlpha: 0, yPercent: -125, duration: 0.4, stagger: { each: 0.02 } }, ">+=0.4");
      loadTimeline.to(secondWord.chars, { autoAlpha: 1, yPercent: 0, duration: 0.6, stagger: { each: 0.02 } }, "<");
      loadTimeline.to(secondWord.chars, { autoAlpha: 0, yPercent: -125, duration: 0.4, stagger: { each: 0.02 } }, "hideContent-=0.5");
    }
    return loadTimeline;
  }

  // src/modules/text-fit.js
  function initTextFitToWidth(root) {
    const scope = root || document;
    const elements = [...scope.querySelectorAll("[data-fit-width]")];
    if (!elements.length) return;
    const groups = /* @__PURE__ */ new Map();
    elements.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      el.style.whiteSpace = "nowrap";
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });
    function availableWidth(parent) {
      const cs = getComputedStyle(parent);
      return parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    }
    function fit(el, available) {
      if (available <= 0) return;
      let size = parseFloat(getComputedStyle(el).fontSize) || 16;
      for (let i = 0; i < 5; i++) {
        const width = el.getBoundingClientRect().width;
        if (width <= 0) break;
        const ratio = available / width;
        if (Math.abs(ratio - 1) < 2e-3) break;
        size *= ratio;
        el.style.fontSize = size + "px";
      }
    }
    function refit() {
      groups.forEach((els, parent) => {
        const available = availableWidth(parent);
        els.forEach((el) => fit(el, available));
      });
    }
    let frame = null;
    function schedule() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        refit();
      });
    }
    let ro;
    if (window.ResizeObserver) {
      ro = new ResizeObserver(schedule);
      groups.forEach((els, parent) => ro.observe(parent));
    }
    window.addEventListener("resize", schedule);
    refit();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", schedule);
      elements.forEach((el) => {
        el.style.whiteSpace = "";
        el.style.fontSize = "";
      });
    };
  }

  // src/modules/cursor-marquee.js
  function initCursorMarqueeEffect(scope) {
    const hoverOutDelay = 0.4;
    const followDuration = 0.4;
    const speedMultiplier = 5;
    const cursor = scope.querySelector("[data-cursor-marquee-status]");
    if (!cursor) return;
    const textTargets = cursor.querySelectorAll("[data-cursor-marquee-text-target]");
    const triggers = scope.querySelectorAll("[data-cursor-marquee-text]");
    if (!triggers.length) return;
    const xTo = gsap.quickTo(cursor, "x", { duration: followDuration, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: followDuration, ease: "power3" });
    let pauseTimeout = null;
    const onMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    triggers.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (pauseTimeout) clearTimeout(pauseTimeout);
        const text = el.getAttribute("data-cursor-marquee-text") || "";
        const sec = (text.length || 1) / speedMultiplier;
        textTargets.forEach((t) => {
          t.textContent = text;
          t.style.animationPlayState = "running";
          t.style.animationDuration = sec + "s";
        });
        cursor.setAttribute("data-cursor-marquee-status", "active");
      });
      el.addEventListener("mouseleave", () => {
        cursor.setAttribute("data-cursor-marquee-status", "not-active");
        if (pauseTimeout) clearTimeout(pauseTimeout);
        pauseTimeout = setTimeout(() => {
          textTargets.forEach((t) => {
            t.style.animationPlayState = "paused";
          });
        }, hoverOutDelay * 1e3);
      });
    });
    cursor.setAttribute("data-cursor-marquee-status", "not-active");
    return function() {
      window.removeEventListener("pointermove", onMove);
      clearTimeout(pauseTimeout);
      gsap.killTweensOf(cursor);
    };
  }

  // src/modules/videos.js
  function playVideos(scope) {
    scope.querySelectorAll("video[autoplay]").forEach(function(v) {
      v.muted = true;
      const p = v.play();
      if (p && p.catch) p.catch(function() {
      });
    });
  }

  // src/modules/flip.js
  function initFlipOnScroll(scope) {
    let wrapperElements = scope.querySelectorAll("[data-flip-element='wrapper']");
    let targetEl = scope.querySelector("[data-flip-element='target']");
    if (wrapperElements.length < 2 || !targetEl) return;
    let tl;
    function flipTimeline() {
      if (tl) {
        tl.kill();
        gsap.set(targetEl, { clearProps: "all" });
      }
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperElements[0],
          start: "center center",
          endTrigger: wrapperElements[wrapperElements.length - 1],
          end: "center center",
          scrub: 0.25,
          onUpdate: function(self) {
            window._flipProgress = self.progress;
          }
        }
      });
      wrapperElements.forEach(function(element, index) {
        let nextIndex = index + 1;
        if (nextIndex < wrapperElements.length) {
          let nextWrapperEl = wrapperElements[nextIndex];
          let nextRect = nextWrapperEl.getBoundingClientRect();
          let thisRect = element.getBoundingClientRect();
          let nextDistance = nextRect.top + window.pageYOffset + nextWrapperEl.offsetHeight / 2;
          let thisDistance = thisRect.top + window.pageYOffset + element.offsetHeight / 2;
          let offset = nextDistance - thisDistance;
          tl.add(
            Flip.fit(targetEl, nextWrapperEl, {
              duration: offset,
              ease: "none"
            })
          );
        }
      });
    }
    flipTimeline();
    let resizeTimer;
    const onResize = function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        flipTimeline();
      }, 100);
    };
    window.addEventListener("resize", onResize);
    return function() {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      if (tl) tl.kill();
    };
  }

  // src/pages.js
  function initPageContent(container, isFirstLoad, textDelay = 0) {
    let splitHandled = false;
    let loaderTl = null;
    addCleanup(initAxion(container));
    addCleanup(initAxionCard(container));
    const loaderWrap = document.querySelector("[data-load-wrap]");
    if (loaderWrap) {
      loaderTl = isFirstLoad && !sessionStorage.getItem("visited") ? initLogoRevealLoader(container) : null;
      if (loaderTl) {
        splitHandled = true;
        addCleanup(function() {
          loaderTl.kill();
        });
      } else {
        gsap.set(loaderWrap, { display: "none" });
        gsap.set("[data-load-reset]", { autoAlpha: 1 });
      }
    }
    addCleanup(initTextFitToWidth(container));
    if (!splitHandled) addCleanup(initMaskTextScrollReveal(container, textDelay));
    addCleanup(initCursorMarqueeEffect(container));
    addCleanup(initClock(container));
    initCopyEmailClipboard(container);
    playVideos(container);
    return loaderTl;
  }
  function initPageLayout(container) {
    if (container.querySelector("[data-flip-element]") && window.innerWidth > 991) {
      addCleanup(initFlipOnScroll(container));
    }
  }

  // src/transitions/parallax.js
  var reducedMotionMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
  var DURATION = PAGE_DURATION;
  var TEXT_DELAY = 0.35;
  function runPageLeaveAnimation(current) {
    const wrap = document.querySelector("[data-transition-wrap]");
    const dark = wrap && wrap.querySelector("[data-transition-dark]");
    const tl = gsap.timeline({
      onComplete: () => {
        current.remove();
        if (wrap) gsap.set(wrap, { clearProps: "zIndex" });
      }
    });
    if (reducedMotionMQ.matches || !dark) {
      return tl.set(current, { autoAlpha: 0 });
    }
    tl.set(wrap, { zIndex: 2 });
    tl.fromTo(dark, { autoAlpha: 0 }, {
      autoAlpha: PAGE_DARK,
      duration: DURATION,
      ease: PAGE_EASE
    }, 0);
    tl.fromTo(current, { y: "0vh" }, {
      y: "-25vh",
      duration: DURATION,
      ease: PAGE_EASE
    }, 0);
    tl.set(dark, { autoAlpha: 0 });
    return tl;
  }
  function runPageEnterAnimation(next, onReady, fromY = "100vh") {
    const tl = gsap.timeline();
    if (reducedMotionMQ.matches) {
      tl.set(next, { autoAlpha: 1 });
    } else {
      tl.set(next, { zIndex: 3 }, 0);
      tl.fromTo(next, { y: fromY }, {
        y: "0vh",
        duration: DURATION,
        ease: PAGE_EASE
      }, 0);
    }
    tl.add("pageReady");
    tl.call(function() {
      gsap.set(next, { clearProps: "zIndex" });
      onReady(next);
    }, null, "pageReady");
    return new Promise((resolve) => {
      tl.call(resolve, null, "pageReady");
    });
  }
  function runPageOnceAnimation(next, onReady, fromY) {
    const wrap = document.querySelector("[data-transition-wrap]");
    const dark = wrap && wrap.querySelector("[data-transition-dark]");
    if (wrap) gsap.set(wrap, { zIndex: 2 });
    gsap.set(next, { position: "relative" });
    return runPageEnterAnimation(next, onReady, fromY).then(function() {
      if (dark) gsap.set(dark, { autoAlpha: 0 });
      if (wrap) gsap.set(wrap, { clearProps: "zIndex" });
    });
  }

  // src/main.js
  var destroyPrevPage = null;
  var menuWasOpen = false;
  function resetPage(container) {
    gsap.set(container, { clearProps: "position,top,left,right,transform" });
    window.scrollTo(0, 0);
    lenis.scrollTo(0, { immediate: true, force: true });
    lenis.resize();
    ScrollTrigger.refresh();
  }
  var pageTransition = {
    sync: true,
    /* Open mobile menu: links close now, the curtain stays up and closes
       in enter() together with the page (same timeline start, duration, ease) */
    beforeLeave() {
      menuWasOpen = closeMobileMenu({ keepCurtain: true });
      lenis.stop();
      if (!destroyPrevPage) destroyPrevPage = detachPage();
    },
    beforeEnter(data) {
      if (!destroyPrevPage) destroyPrevPage = detachPage();
      gsap.set(data.next.container, { position: "fixed", top: 0, left: 0, right: 0 });
      updateCurrentLinks();
      initPageContent(data.next.container, false, TEXT_DELAY);
    },
    leave(data) {
      return runPageLeaveAnimation(data.current.container, data.next.container);
    },
    enter(data) {
      if (menuWasOpen) {
        closeMenuCurtain();
        menuWasOpen = false;
      }
      return runPageEnterAnimation(data.next.container, resetPage);
    },
    afterLeave() {
      if (destroyPrevPage) {
        destroyPrevPage();
        destroyPrevPage = null;
      }
    },
    afterEnter(data) {
      resetWebflow(data);
      initPageLayout(data.next.container);
      lenis.start();
      ScrollTrigger.refresh();
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
    barba.init({
      preventRunning: true,
      timeout: 7e3,
      /* Links with #hash to the current page keep native anchor behaviour
         (otherwise Barba would treat them as the 'self' transition) */
      prevent: function({ el }) {
        if (!el || !el.href) return false;
        const url = new URL(el.href, location.href);
        return !!url.hash && url.pathname === location.pathname;
      },
      transitions: [{
        name: "default",
        ...pageTransition,
        once(data) {
          const nav = document.querySelector("[data-menu-status]");
          initMobileMenu();
          initHeadingLinks();
          if (nav) {
            initCopyEmailClipboard(nav);
            initClock(nav);
          }
          if (!document.querySelector("[data-load-wrap]")) sessionStorage.setItem("visited", "1");
          const next = data.next.container;
          const loaderTl = initPageContent(next, true, TEXT_DELAY);
          initPageLayout(next);
          if (loaderTl) {
            loaderTl.call(function() {
              const loaderBg = document.querySelector("[data-load-bg]");
              runPageOnceAnimation(next, resetPage, loaderBg ? loaderBg.offsetHeight : void 0);
            }, null, "hideContent");
          } else {
            lenis.stop();
            let enterDone = false;
            runPageOnceAnimation(next, resetPage).then(function() {
              enterDone = true;
              lenis.start();
            });
            setTimeout(function() {
              if (enterDone) return;
              enterDone = true;
              var darkEl = document.querySelector("[data-transition-dark]");
              if (darkEl) gsap.set(darkEl, { autoAlpha: 0 });
              gsap.killTweensOf(next);
              gsap.set(next, { y: 0, clearProps: "position,zIndex" });
              resetPage(next);
              document.querySelectorAll("[data-split]").forEach(function(el) {
                gsap.set(el, { autoAlpha: 1 });
                var innerDivs = el.querySelectorAll("div > div");
                gsap.killTweensOf(innerDivs);
                gsap.set(innerDivs, { clearProps: "transform" });
              });
              lenis.start();
              ScrollTrigger.refresh();
            }, 2e3);
          }
        }
      }, {
        /* Link to the current page (menu, nav): Barba loads it again
           and plays the same transition (Barba docs: 'self' transition) */
        name: "self",
        ...pageTransition
      }]
    });
  });
})();

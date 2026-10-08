/* ======================================================
   AXION CASE PAGE — Axion 3D (Three.js), standalone variant
   Desktop: interactive (drag + cursor repulsion) right away.
   Touch: auto-spin. Overlay labels slide up on first appear.
   ====================================================== */
export function runAxionCase(container) {
    var isTouchDevice = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, 16 / 9, 1, 5000);
    camera.position.set(0, 0, 700);

    var renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(1920, 1080);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 1);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x2a1f10, 1.0));
    var pL1 = new THREE.PointLight(0xf5c76a, 3.0, 1400); pL1.position.set(300, 350, 400); scene.add(pL1);
    var pL2 = new THREE.PointLight(0xd4943a, 2.4, 1200); pL2.position.set(-300, -100, 300); scene.add(pL2);
    var pL3 = new THREE.PointLight(0x5a3a1a, 1.2, 900); pL3.position.set(0, 200, -300); scene.add(pL3);
    var rimLight = new THREE.PointLight(0xff9944, 1.3, 600); rimLight.position.set(0, -250, 200); scene.add(rimLight);

    var targetRotY = 0, currentRotY = 0, targetRotX = 0, currentRotX = 0;
    var isDragging = false, prevMX = 0, prevMY = 0;
    var spinSpeed = (Math.PI * 2) / 6;

    var mouse2D = new THREE.Vector2(9999, 9999);
    var raycaster = new THREE.Raycaster();
    var repulsionRadius = 120;
    var mouseWorldPos = new THREE.Vector3(9999, 9999, 0);
    var prevMouseWorldPos = new THREE.Vector3(9999, 9999, 0);
    var mouseVelocity = new THREE.Vector3();
    var isMouseOverCanvas = false;
    var lastClientX = 0, lastClientY = 0;

    var PARTICLE_COUNT = 80000;
    var gravity = 0.03, friction = 0.95, windStrength = 0.005;
    var MAX_PARTICLES = 120000;
    var particleSystem = null;
    var positions, velocities, targetPositions, colors, sizes, alphas;
    var particleCount = 0;
    var isSimulating = false;
    var time = 0;

    var duneColors = [
      new THREE.Color(0xd0d0cf), new THREE.Color(0xcbcbc9),
      new THREE.Color(0xd5d5d4), new THREE.Color(0xc6c6c5),
      new THREE.Color(0xdadad9), new THREE.Color(0xc0c0bf),
      new THREE.Color(0xb8b8b7), new THREE.Color(0xcdcdcc)
    ];

    function initParticleSystem() {
      var geo = new THREE.BufferGeometry();
      positions = new Float32Array(MAX_PARTICLES * 3);
      velocities = new Float32Array(MAX_PARTICLES * 3);
      targetPositions = new Float32Array(MAX_PARTICLES * 3);
      colors = new Float32Array(MAX_PARTICLES * 3);
      sizes = new Float32Array(MAX_PARTICLES);
      alphas = new Float32Array(MAX_PARTICLES);
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geo.setAttribute('alpha', new THREE.BufferAttribute(alphas, 1));
      geo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

      var vert = 'attribute float size; attribute float alpha; attribute vec3 velocity;\n' +
        'varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\n' +
        'void main() {\n' +
        '  vColor = color; vAlpha = alpha;\n' +
        '  vec4 mvPos = modelViewMatrix * vec4(position,1.0);\n' +
        '  vDist = -mvPos.z;\n' +
        '  vec3 velW = mat3(modelViewMatrix) * velocity;\n' +
        '  float spd = length(velW); vSpeed = min(spd*0.6,1.0);\n' +
        '  float baseSize = size*(400.0/-mvPos.z);\n' +
        '  gl_PointSize = baseSize*(1.0+vSpeed*2.5);\n' +
        '  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);\n' +
        '  gl_Position = projectionMatrix * mvPos;\n' +
        '}';

      var frag = 'varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;\n' +
        'void main() {\n' +
        '  vec2 c = gl_PointCoord-vec2(0.5);\n' +
        '  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);\n' +
        '  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));\n' +
        '  if(dist>0.5) discard;\n' +
        '  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);\n' +
        '  float heat = 1.0+vSpeed*0.6;\n' +
        '  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);\n' +
        '  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));\n' +
        '  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));\n' +
        '}';

      var mat = new THREE.ShaderMaterial({
        vertexShader: vert, fragmentShader: frag,
        transparent: true, depthWrite: false,
        blending: THREE.AdditiveBlending, vertexColors: true
      });
      particleSystem = new THREE.Points(geo, mat);
      scene.add(particleSystem);
    }

    function sampleSVGToPoints(svgText, count) {
      return new Promise(function(resolve) {
        try {
          var size = 512, cvs = document.createElement('canvas');
          cvs.width = cvs.height = size;
          var ctx = cvs.getContext('2d');
          var doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
          var svgEl = doc.querySelector('svg');
          if (!svgEl) { resolve([]); return; }
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
          var px = ctx.getImageData(0,0,size,size).data;
          var filled = [];
          for (var y=0;y<size;y++) for (var x=0;x<size;x++) { var i=(y*size+x)*4; if(px[i+3]>30) filled.push({x:x,y:y,a:px[i+3]/255}); }
          if (!filled.length) { resolve([]); return; }
          var pts = [];
          for (var i=0;i<count;i++) {
            var pt=filled[Math.floor(Math.random()*filled.length)];
            pts.push({ x:(pt.x-size/2)*1.2+(Math.random()-0.5)*1.65, y:-(pt.y-size/2)*1.2+(Math.random()-0.5)*1.65, z:(Math.random()-0.5)*37*pt.a, a:pt.a });
          }
          resolve(pts);
        } catch(e) { console.error(e); resolve([]); }
      });
    }

    function applyPointsToParticles(pts) {
      particleCount = pts.length;
      for (var i=0;i<particleCount;i++) {
        var p=pts[i], i3=i*3;
        positions[i3]=p.x; positions[i3+1]=p.y+40; positions[i3+2]=p.z;
        velocities[i3]=velocities[i3+1]=velocities[i3+2]=0;
        targetPositions[i3]=p.x; targetPositions[i3+1]=p.y; targetPositions[i3+2]=p.z;
        var col=duneColors[Math.floor(Math.random()*duneColors.length)], b=0.7+Math.random()*0.4;
        colors[i3]=col.r*b; colors[i3+1]=col.g*b; colors[i3+2]=col.b*b;
        sizes[i]=1.8+Math.random()*3.8; alphas[i]=0.3+(p.a||0.7)*0.75;
      }
      particleSystem.geometry.setDrawRange(0, particleCount);
      ['position','color','size','alpha'].forEach(function(a){particleSystem.geometry.attributes[a].needsUpdate=true;});
      isSimulating=true;
    }

    function loadSVG(svgText) {
      return sampleSVGToPoints(svgText, Math.min(MAX_PARTICLES, PARTICLE_COUNT)).then(function(pts) {
        if (pts.length && particleSystem) applyPointsToParticles(pts);
      });
    }

    function updateParticles(dt) {
      if (!isSimulating || !particleCount) return;
      time += dt;

      for (var i=0;i<particleCount;i++) {
        var i3=i*3;
        var seed=i*1.37;
        velocities[i3]+= Math.sin(time*0.4+seed)*0.008+Math.sin(time*1.1+seed*2.3)*0.003;
        velocities[i3+1]+=Math.cos(time*0.35+seed*0.7)*0.008+Math.sin(time*0.9+seed*1.5)*0.004;
        velocities[i3+2]+=Math.sin(time*0.25+seed*1.1)*0.004;
        velocities[i3+1]-=gravity*0.06;
        velocities[i3]  +=Math.sin(time*0.25+positions[i3+1]*0.008)*windStrength*0.6;
        velocities[i3+2]+=Math.cos(time*0.3 +positions[i3]  *0.008)*windStrength*0.3;

        if (isMouseOverCanvas) {
          var mx=positions[i3]-mouseWorldPos.x, my=positions[i3+1]-mouseWorldPos.y, mz=positions[i3+2]-mouseWorldPos.z;
          var mDistSq=mx*mx+my*my+mz*mz, rSq=repulsionRadius*repulsionRadius;
          if (mDistSq<rSq && mDistSq>0.25) {
            var mDist=Math.sqrt(mDistSq), norm=mDist/repulsionRadius;
            var ps=((i*2654435761)&0xFFFF)/65535, sens=0.6+ps*0.8;
            var pf=Math.pow(1.0-norm,1.5+ps), sp=1+Math.min(mouseVelocity.length()*0.12,1), f=pf*sens*1.2*sp, inv=1/mDist;
            velocities[i3]  +=mx*inv*f; velocities[i3+1]+=my*inv*f; velocities[i3+2]+=mz*inv*f*0.2;
            var mp=0.02+ps*0.06;
            velocities[i3]  +=mouseVelocity.x*pf*mp; velocities[i3+1]+=mouseVelocity.y*pf*mp;
            var scc=pf*0.15;
            velocities[i3]  +=(ps-0.5)*scc; velocities[i3+1]+=(((i*48271)&0xFFFF)/65535-0.5)*scc;
          }
        }

        var tx2=targetPositions[i3], ty2=targetPositions[i3+1]+40, tz2=targetPositions[i3+2];
        var dx=tx2-positions[i3], dy=ty2-positions[i3+1], dz=tz2-positions[i3+2];
        var dist2=Math.sqrt(dx*dx+dy*dy+dz*dz);
        var rs=((i*48271)&0xFFFF)/65535, rb=0.003+rs*0.003, db=1+Math.min(dist2*0.002,0.5), rf=rb*db;
        velocities[i3]+=dx*rf; velocities[i3+1]+=dy*rf; velocities[i3+2]+=dz*rf;
        var ds=((i*16807)&0xFFFF)/65535, db2=friction*(0.92+ds*0.06);
        velocities[i3]*=db2; velocities[i3+1]*=db2; velocities[i3+2]*=db2;

        positions[i3]+=velocities[i3]; positions[i3+1]+=velocities[i3+1]; positions[i3+2]+=velocities[i3+2];

        var d2=Math.sqrt(Math.pow(positions[i3]-targetPositions[i3],2)+Math.pow(positions[i3+1]-targetPositions[i3+1],2)+Math.pow(positions[i3+2]-targetPositions[i3+2],2));
        alphas[i]=0.15+0.55*(1-Math.min(d2*0.005,1))+Math.sin(time*1.5+i*0.01)*0.05;
      }
      particleSystem.geometry.attributes.position.needsUpdate=true;
      particleSystem.geometry.attributes.alpha.needsUpdate=true;
      particleSystem.geometry.attributes.velocity.needsUpdate=true;
    }

    var _invMatrix = new THREE.Matrix4();
    var _hitPlane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1), new THREE.Vector3());
    var _hitPoint = new THREE.Vector3();

    function updateMouseWorldPos(cx, cy) {
      var rect = renderer.domElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      mouse2D.set(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
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

    /* UI overlay */
    var coordsEl = container.querySelector('#logo-coords');
    var dragLabel = container.querySelector('#logo-drag-label');
    var overlayRevealed = false;

    /* Desktop: mouse events */
    if (!isTouchDevice) {
      var onMouseMove = function(e) {
        lastClientX = e.clientX; lastClientY = e.clientY;
        var over = isPointerInContainer(e.clientX, e.clientY);
        if (over) {
          isMouseOverCanvas = true;
          updateMouseWorldPos(e.clientX, e.clientY);
          var rect = container.getBoundingClientRect();
          var lx = Math.round(e.clientX - rect.left);
          var ly = Math.round(e.clientY - rect.top);
          if (coordsEl) coordsEl.textContent = 'X: ' + lx + 'PX    Y: ' + ly + 'PX';
        } else {
          isMouseOverCanvas = false;
          mouseWorldPos.set(9999,9999,0);
        }
        if (!isDragging) return;
        targetRotY += (e.clientX - prevMX) * 0.005;
        targetRotX += (e.clientY - prevMY) * 0.005;
        targetRotX = Math.max(-Math.PI/2, Math.min(Math.PI/2, targetRotX));
        prevMX = e.clientX; prevMY = e.clientY;
      };

      var onMouseDown = function(e) {
        if (isPointerInContainer(e.clientX, e.clientY)) {
          isDragging = true; prevMX = e.clientX; prevMY = e.clientY;
        }
      };

      var onMouseUp = function() {
        isDragging = false;
        targetRotY = 0; targetRotX = 0;
        currentRotY = currentRotY % (Math.PI * 2);
        if (currentRotY > Math.PI) currentRotY -= Math.PI * 2;
        if (currentRotY < -Math.PI) currentRotY += Math.PI * 2;
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mouseup', onMouseUp);
    }

    function createAmbientDust() {
      var count=4000, geo=new THREE.BufferGeometry();
      var pos=new Float32Array(count*3), col=new Float32Array(count*3);
      for (var i=0;i<count;i++) {
        pos[i*3]=(Math.random()-0.5)*2200; pos[i*3+1]=(Math.random()-0.5)*1800; pos[i*3+2]=-200-Math.random()*1800;
        var c=duneColors[Math.floor(Math.random()*duneColors.length)],b=0.2+Math.random()*0.3;
        col[i*3]=c.r*b; col[i*3+1]=c.g*b; col[i*3+2]=c.b*b;
      }
      geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
      geo.setAttribute('color',   new THREE.BufferAttribute(col,3));
      var dc=document.createElement('canvas'); dc.width=dc.height=32;
      var dctx=dc.getContext('2d'), g=dctx.createRadialGradient(16,16,0,16,16,16);
      g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(0.3,'rgba(255,255,255,0.6)');
      g.addColorStop(0.7,'rgba(255,255,255,0.15)'); g.addColorStop(1,'rgba(255,255,255,0)');
      dctx.fillStyle=g; dctx.fillRect(0,0,32,32);
      var mat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(dc),transparent:true,opacity:0.15,vertexColors:true,blending:THREE.AdditiveBlending,depthWrite:false,sizeAttenuation:true});
      var dust=new THREE.Points(geo,mat);
      dust.userData={positions:pos,count:count};
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
      /* Slide-up overlay on first appear (desktop only) */
      if (entries[0].isIntersecting && !overlayRevealed && !isTouchDevice) {
        overlayRevealed = true;
        if (coordsEl) coordsEl.style.transform = 'translateY(0)';
        if (dragLabel) dragLabel.style.transform = 'translateY(0)';
      }
    }, { threshold: 0.1 });
    visibilityObserver.observe(container);

    var isScrolling = false;
    var scrollTimer = null;
    var frameCount = 0;
    /* Scroll: перепроверяем позицию курсора относительно контейнера */
    function onScroll() {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() { isScrolling = false; }, 150);
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
    window.addEventListener('scroll', onScroll, { passive: true });

    var rafId = null;
    function animate() {
      rafId = requestAnimationFrame(animate);
      if (!isCanvasVisible) return;
      frameCount++;
      var dt = Math.min(clock.getDelta(), 0.05);
      var t2 = clock.elapsedTime;

      if (isTouchDevice) {
        /* Touch: spin */
        currentRotY += spinSpeed * dt;
      } else {
        /* Desktop: interactive drag rotation */
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
        for (var i=0;i<ambientDust.userData.count;i++) {
          aPos[i*3+1]+=Math.sin(t2*0.2+i)*0.05;
          aPos[i*3]  +=Math.cos(t2*0.15+i*0.5)*0.03;
        }
        ambientDust.geometry.attributes.position.needsUpdate=true;
        ambientDust.rotation.y+=0.0001;
        ambientDust.position.x=-currentRotY*35*0.35;
        ambientDust.position.y= currentRotX*28*0.35;
      }

      pL1.position.x=300+Math.sin(t2*0.3)*100;
      pL1.position.y=350+Math.cos(t2*0.2)*80;
      pL2.intensity=2.0+Math.sin(t2*0.5)*0.4;
      rimLight.intensity=0.8+Math.sin(t2*0.4+1.0)*0.3;

      /* Touch: skip frames during scroll */
      if (isTouchDevice && isScrolling && frameCount % 4 !== 0) return;

      updateParticles(dt);
      renderer.render(scene, camera);
    }


  return function() {
    cancelAnimationFrame(rafId);
    if (!isTouchDevice) {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    }
    window.removeEventListener('scroll', onScroll);
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

(()=>{var vr=Object.create;var tn=Object.defineProperty;var fr=Object.getOwnPropertyDescriptor;var pr=Object.getOwnPropertyNames;var mr=Object.getPrototypeOf,hr=Object.prototype.hasOwnProperty;var gr=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var xr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of pr(n))!hr.call(r,o)&&o!==t&&tn(r,o,{get:()=>n[o],enumerable:!(e=fr(n,o))||e.enumerable});return r};var br=(r,n,t)=>(t=r!=null?vr(mr(r)):{},xr(n||!r||!r.__esModule?tn(t,"default",{value:r,enumerable:!0}):t,r));var tr=gr(($t,Kt)=>{(function(r,n){typeof $t=="object"&&typeof Kt!="undefined"?Kt.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})($t,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,l=s.root,c=l===void 0?document.body:l,E=s.timeout,x=E===void 0?2e3:E,u=s.limit,f=u===void 0?0:u;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=c,this.timeout=x,this.limit=f},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var l=s.target,c=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(l));e.toPrefetch.has(c)&&(e.observer.unobserve(l),e.barba.cache.has(c)?e.barba.cache.update(c,{action:"prefetch"}):e.barba.cache.set(c,e.barba.request(c,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(E){e.logger.error(E)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var l=s,c=e.barba.dom.getHref(l);e.barba.cache.has(c)||e.barba.prevent.checkHref(c)||e.barba.prevent.checkLink(l,{},c)||(e.observer.observe(s),e.toPrefetch.add(c))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var kt=[];function le(r){typeof r=="function"&&kt.push(r)}function It(){let r=kt,n=ScrollTrigger.getAll();return kt=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var yr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",yr);var Ve="parallax",xt=.8;var Pr="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",nn="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ke=null,Ht=function(){return!1};function rn(){Ke&&gsap.timeline().to(Ke,{clipPath:nn,duration:.9,ease:Ve,overwrite:!0},0).fromTo(Ke,{filter:"brightness(1)"},{filter:"brightness("+(1-xt)+")",duration:.9,ease:Ve},0).set(Ke,{clearProps:"filter"})}function on(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;Ke=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ke&&gsap.to(Ke,{clipPath:o?Pr:nn,duration:.9,ease:Ve,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),Ht=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function an(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function sn(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function ln(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function bt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let l=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){l();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},l)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function yt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),c=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+c}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function tt(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(l=>{e||!l.some(c=>c.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var je={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{je.x=r.clientX,je.y=r.clientY,je.known=!0},{passive:!0});function Pt(){return je}function We(r){let n=e=>r(e.clientX,e.clientY),t=()=>{je.known&&r(je.x,je.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var nt=new Map;function Er(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),l=s.querySelector("svg");if(!l)return new Float32Array(0);var c=parseFloat(l.getAttribute("width")||512),E=parseFloat(l.getAttribute("height")||512),x=l.getAttribute("viewBox");if(x){var u=x.split(/[\s,]+/);c=+u[2],E=+u[3]}var f=Math.min(t/c,t/E)*.9,v=(t-c*f)/2,i=(t-E*f)/2;o.save(),o.translate(v,i),o.scale(f,f),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(h){if(h.tagName==="path"){var z=h.getAttribute("d");z&&o.fill(new Path2D(z))}else h.tagName==="rect"?o.fillRect(+h.getAttribute("x")||0,+h.getAttribute("y")||0,+h.getAttribute("width")||0,+h.getAttribute("height")||0):h.tagName==="circle"&&(o.beginPath(),o.arc(+h.getAttribute("cx")||0,+h.getAttribute("cy")||0,+h.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var m=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),P=0,y=0;y<t*t;y++)m[y*4+3]>30&&(a[P++]=y);if(!P)return new Float32Array(0);for(var A=new Float32Array(n*4),D=0;D<n;D++){var W=a[Math.floor(Math.random()*P)],C=W%t,F=(W-C)/t,S=m[W*4+3]/255,M=D*4;A[M]=(C-t/2)*1.2+(Math.random()-.5)*1.65,A[M+1]=-(F-t/2)*1.2+(Math.random()-.5)*1.65,A[M+2]=(Math.random()-.5)*37*S,A[M+3]=S}return A}function ot(r,n){var t=n+"|"+r;if(!nt.has(t)){var e;try{e=Er(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);nt.size>=4&&nt.delete(nt.keys().next().value),nt.set(t,Promise.resolve(e))}return nt.get(t)}var wt={};function at(r,n,t){for(var e=wt[r]||(wt[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?cn(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var l=o.renderer;return l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(n,t,!1),l.setClearColor(0,1),l.toneMapping=THREE.ACESFilmicToneMapping,l.toneMappingExposure=1.4,l.domElement.style.width="100%",l.domElement.style.height="100%",o}function it(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=wt[r]||(wt[r]=[]);if(e.length>=1){cn(n);return}t.setSize(1,1,!1),e.push(n)}function cn(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var wr=.03,Sr=.95,Tr=.005,rt=Math.PI*2,Ar="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Cr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),Mr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),Rr=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Fr=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),zr=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function Et(r,n){var t=new THREE.DataTexture(r,n,n,THREE.RGBAFormat,THREE.FloatType);return t.minFilter=t.magFilter=THREE.NearestFilter,t.needsUpdate=!0,t}function st(r,n){if(r.sim!==void 0)return r.sim;var t=r.renderer;if(!t.capabilities.isWebGL2||!t.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(n)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},l=[s(),s()],c=[s(),s()],E=0,x=new Float32Array(o*4),u=new Float32Array(o*4),f=new Float32Array(n*2),v=0;v<o;v++){var i=v*1.37,m=v*4;x[m]=i%rt,x[m+1]=i*.7%rt,x[m+2]=i*2.3%rt,x[m+3]=i*1.5%rt,u[m]=i*1.1%rt,u[m+1]=(v*2654435761&65535)/65535,u[m+2]=(v*48271&65535)/65535,u[m+3]=(v*16807&65535)/65535,v<n&&(f[v*2]=(v%e+.5)/e,f[v*2+1]=(Math.floor(v/e)+.5)/e)}var a=Et(x,e),P=Et(u,e),y=new Float32Array(o*4),A=Et(y,e),D=new Float32Array(o*4),W=Et(D,e),C=new THREE.Scene,F=new THREE.Camera,S=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);S.frustumCulled=!1,C.add(S);var M=function(U,L){return new THREE.ShaderMaterial({vertexShader:Ar,fragmentShader:U,uniforms:L,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},h=M(Cr,{tPos:{value:null},tVel:{value:null},tTgt:{value:A},tP1:{value:a},tP2:{value:P},time:{value:0},gravity:{value:wr},wind:{value:Tr},friction:{value:Sr},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),z=M(Mr,{tPos:{value:null},tVel:{value:null}}),Y=M(Rr,{tSrc:{value:null}}),V=new THREE.ShaderMaterial({vertexShader:Fr,fragmentShader:zr,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:A},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function I(U,L){S.material=U,t.setRenderTarget(L),t.render(C,F)}function j(){V.uniforms.tPos.value=l[E].texture,V.uniforms.tVel.value=c[E].texture}var oe={material:V,refAttribute:function(){return new THREE.BufferAttribute(f,2)},setPoints:function(U,L){D.fill(0),y.fill(0);for(var w=0;w<L;w++){var d=w*4;D[d]=U[d],D[d+1]=U[d+1]+40,D[d+2]=U[d+2],y[d]=U[d],y[d+1]=U[d+1],y[d+2]=U[d+2],y[d+3]=w*.01%rt}W.needsUpdate=!0,A.needsUpdate=!0;var p=t.getRenderTarget();E=0,Y.uniforms.tSrc.value=W,I(Y,l[0]),t.setRenderTarget(c[0]),t.clear(!0,!1,!1),t.setRenderTarget(p),j()},step:function(U,L){var w=t.getRenderTarget(),d=h.uniforms;d.time.value=U,L?(d.mouseOn.value=1,d.radius.value=L.radius,d.mousePos.value.copy(L.pos),d.mouseVel.value.set(L.vel.x,L.vel.y),d.mouseVelLen.value=L.vel.length()):d.mouseOn.value=0;var p=1-E;d.tPos.value=l[E].texture,d.tVel.value=c[E].texture,I(h,c[p]),z.uniforms.tPos.value=l[E].texture,z.uniforms.tVel.value=c[p].texture,I(z,l[p]),E=p,t.setRenderTarget(w),V.uniforms.uTime.value=U,j()},dispose:function(){l.concat(c).forEach(function(U){U.dispose()}),[a,P,A,W].forEach(function(U){U.dispose()}),[h,z,Y,V].forEach(function(U){U.dispose()}),S.geometry.dispose()}};return r.sim=oe,oe}var Ut={};function ft(r){return Ut[r]||(Ut[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),Ut[r]}function un(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("case",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var E=new THREE.PointLight(13931578,2.4,1200);E.position.set(-300,-100,300),t.add(E);var x=new THREE.PointLight(5913114,1.2,900);x.position.set(0,200,-300),t.add(x);var u=new THREE.PointLight(16750916,1.3,600);u.position.set(0,-250,200),t.add(u);var f=0,v=0,i=0,m=0,a=!1,P=0,y=0,A=Math.PI*2/6,D=new THREE.Vector2(9999,9999),W=new THREE.Raycaster,C=120,F=new THREE.Vector3(9999,9999,0),S=new THREE.Vector3(9999,9999,0),M=new THREE.Vector3,h=!1,z=0,Y=0,V=8e4,I=.03,j=.95,oe=.005,U=12e4,L=null,w,d,p,b,X,N,k=0,q=!1,H=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var O=new THREE.BufferGeometry;w=new Float32Array(U*3),d=new Float32Array(U*3),p=new Float32Array(U*3),b=new Float32Array(U*3),X=new Float32Array(U),N=new Float32Array(U),O.setAttribute("position",new THREE.BufferAttribute(w,3)),O.setAttribute("color",new THREE.BufferAttribute(b,3)),O.setAttribute("size",new THREE.BufferAttribute(X,1)),O.setAttribute("alpha",new THREE.BufferAttribute(N,1)),O.setAttribute("velocity",new THREE.BufferAttribute(d,3));var $=`attribute float size; attribute float alpha; attribute vec3 velocity;
varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
void main() {
  vColor = color; vAlpha = alpha;
  vec4 mvPos = modelViewMatrix * vec4(position,1.0);
  vDist = -mvPos.z;
  vec3 velW = mat3(modelViewMatrix) * velocity;
  float spd = length(velW); vSpeed = min(spd*0.6,1.0);
  float baseSize = size*(400.0/-mvPos.z);
  gl_PointSize = baseSize*(1.0+vSpeed*2.5);
  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);
  gl_Position = projectionMatrix * mvPos;
}`,g=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
void main() {
  vec2 c = gl_PointCoord-vec2(0.5);
  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);
  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));
  if(dist>0.5) discard;
  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);
  float heat = 1.0+vSpeed*0.6;
  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);
  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));
  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));
}`;l=st(o,U),l&&O.setAttribute("ref",l.refAttribute());var K=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:$,fragmentShader:g,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));L=new THREE.Points(O,K),l&&(L.frustumCulled=!1),t.add(L)}function se(O,$){return ot(O,$)}function Z(O){k=O.length/4;for(var $=0;$<k;$++){var g=$*3,K=$*4,ie=O[K],Ce=O[K+1],Me=O[K+2],Re=O[K+3];w[g]=ie,w[g+1]=Ce+40,w[g+2]=Me,d[g]=d[g+1]=d[g+2]=0,p[g]=ie,p[g+1]=Ce,p[g+2]=Me;var R=ne[Math.floor(Math.random()*ne.length)],B=.7+Math.random()*.4;b[g]=R.r*B,b[g+1]=R.g*B,b[g+2]=R.b*B,X[$]=1.8+Math.random()*3.8,N[$]=.3+(Re||.7)*.75}l&&l.setPoints(O,k),L.geometry.setDrawRange(0,k),["position","color","size","alpha"].forEach(function(T){L.geometry.attributes[T].needsUpdate=!0}),q=!0}function Pe(O){return se(O,Math.min(U,V)).then(function($){$.length&&L&&Z($)})}function he(O){if(!(!q||!k)){if(H+=O,l){l.step(H,h?{pos:F,vel:M,radius:C}:null);return}for(var $=0;$<k;$++){var g=$*3,K=$*1.37;if(d[g]+=Math.sin(H*.4+K)*.008+Math.sin(H*1.1+K*2.3)*.003,d[g+1]+=Math.cos(H*.35+K*.7)*.008+Math.sin(H*.9+K*1.5)*.004,d[g+2]+=Math.sin(H*.25+K*1.1)*.004,d[g+1]-=I*.06,d[g]+=Math.sin(H*.25+w[g+1]*.008)*oe*.6,d[g+2]+=Math.cos(H*.3+w[g]*.008)*oe*.3,h){var ie=w[g]-F.x,Ce=w[g+1]-F.y,Me=w[g+2]-F.z,Re=ie*ie+Ce*Ce+Me*Me,R=C*C;if(Re<R&&Re>.25){var B=Math.sqrt(Re),T=B/C,ee=($*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-T,1.5+ee),ke=1+Math.min(M.length()*.12,1),we=fe*ve*1.2*ke,Fe=1/B;d[g]+=ie*Fe*we,d[g+1]+=Ce*Fe*we,d[g+2]+=Me*Fe*we*.2;var ye=.02+ee*.06;d[g]+=M.x*fe*ye,d[g+1]+=M.y*fe*ye;var Ge=fe*.15;d[g]+=(ee-.5)*Ge,d[g+1]+=(($*48271&65535)/65535-.5)*Ge}}var Oe=p[g],Rt=p[g+1]+40,et=p[g+2],ct=Oe-w[g],Xe=Rt-w[g+1],Ye=et-w[g+2],ht=Math.sqrt(ct*ct+Xe*Xe+Ye*Ye),gt=($*48271&65535)/65535,Ft=.003+gt*.003,zt=1+Math.min(ht*.002,.5),ut=Ft*zt;d[g]+=ct*ut,d[g+1]+=Xe*ut,d[g+2]+=Ye*ut;var dt=($*16807&65535)/65535,$e=j*(.92+dt*.06);d[g]*=$e,d[g+1]*=$e,d[g+2]*=$e,w[g]+=d[g],w[g+1]+=d[g+1],w[g+2]+=d[g+2];var vt=Math.sqrt(Math.pow(w[g]-p[g],2)+Math.pow(w[g+1]-p[g+1],2)+Math.pow(w[g+2]-p[g+2],2));N[$]=.15+.55*(1-Math.min(vt*.005,1))+Math.sin(H*1.5+$*.01)*.05}L.geometry.attributes.position.needsUpdate=!0,L.geometry.attributes.alpha.needsUpdate=!0,L.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(O,$){var g=s.domElement.getBoundingClientRect();if(!(g.width===0||g.height===0)&&(D.set((O-g.left)/g.width*2-1,-(($-g.top)/g.height)*2+1),W.setFromCamera(D,e),W.ray.intersectPlane(ze,Le))){S.copy(F),L&&F.copy(Le).applyMatrix4(be.copy(L.matrixWorld).invert()),M.subVectors(F,S);var K=M.length();K>15&&M.multiplyScalar(15/K)}}function Q(O,$){var g=r.getBoundingClientRect();return O>=g.left&&O<=g.right&&$>=g.top&&$<=g.bottom}var _=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!n){var Te=function(O){z=O.clientX,Y=O.clientY;var $=Q(O.clientX,O.clientY);if($){h=!0,te(O.clientX,O.clientY);var g=r.getBoundingClientRect(),K=Math.round(O.clientX-g.left),ie=Math.round(O.clientY-g.top);_&&(_.textContent="X: "+K+"PX    Y: "+ie+"PX")}else h=!1,F.set(9999,9999,0);a&&(f+=(O.clientX-P)*.005,i+=(O.clientY-y)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),P=O.clientX,y=O.clientY)},Ee=function(O){Q(O.clientX,O.clientY)&&(a=!0,P=O.clientX,y=O.clientY)},ce=function(){a=!1,f=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ce)}function me(){for(var O=4e3,$=new THREE.BufferGeometry,g=new Float32Array(O*3),K=new Float32Array(O*3),ie=0;ie<O;ie++){g[ie*3]=(Math.random()-.5)*2200,g[ie*3+1]=(Math.random()-.5)*1800,g[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}$.setAttribute("position",new THREE.BufferAttribute(g,3)),$.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var R=Re.getContext("2d"),B=R.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=B,R.fillRect(0,0,32,32);var T=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points($,T);return ee.userData={positions:g,count:O},t.add(ee),ee}re();var de=n?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var qe=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(O){Ae=O[0].isIntersecting,O[0].isIntersecting&&!xe&&!n&&(xe=!0,_&&(_.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,G=0;function J(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!n){var O=Pt();O.known&&(z=O.x,Y=O.y);var $=Q(z,Y);$?(h=!0,te(z,Y)):(h=!1,F.set(9999,9999,0))}}window.addEventListener("scroll",J,{passive:!0});var ae=null;function Ne(){if(ae=requestAnimationFrame(Ne),!!Ae){G++;var O=Math.min(qe.getDelta(),.05),$=qe.elapsedTime;if(n)v+=A*O;else{var g=f-v;g=g%(Math.PI*2),g>Math.PI&&(g-=Math.PI*2),g<-Math.PI&&(g+=Math.PI*2),v+=g*.12,m+=(i-m)*.12}if(L&&(L.rotation.x=m,L.rotation.y=v,L.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin($*.2+ie)*.05,K[ie*3]+=Math.cos($*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-v*35*.35,de.position.y=m*28*.35}c.position.x=300+Math.sin($*.3)*100,c.position.y=350+Math.cos($*.2)*80,E.intensity=2+Math.sin($*.5)*.4,u.intensity=.8+Math.sin($*.4+1)*.3,!(n&&ge&&G%4!==0)&&(he(O),s.render(t,e))}}return Ne(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",J),clearTimeout(Ue),He.disconnect(),t.traverse(function(O){O.geometry&&O.geometry.dispose()}),it("case",o),L=null}}function dn(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=at("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),n.add(c);var E=new THREE.PointLight(5913114,1.2,900);E.position.set(0,200,-300),n.add(E);var x=new THREE.PointLight(16750916,1.3,600);x.position.set(0,-250,200),n.add(x);var u=0,f=Math.PI*2/6,v=8e4,i=.03,m=.95,a=.005,P=12e4,y=null,A,D,W,C,F,S,M=0,h=!1,z=0,Y=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function V(){var te=new THREE.BufferGeometry;A=new Float32Array(P*3),D=new Float32Array(P*3),W=new Float32Array(P*3),C=new Float32Array(P*3),F=new Float32Array(P),S=new Float32Array(P),te.setAttribute("position",new THREE.BufferAttribute(A,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(F,1)),te.setAttribute("alpha",new THREE.BufferAttribute(S,1)),te.setAttribute("velocity",new THREE.BufferAttribute(D,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
void main() {
  vColor = color; vAlpha = alpha;
  vec4 mvPos = modelViewMatrix * vec4(position,1.0);
  vDist = -mvPos.z;
  vec3 velW = mat3(modelViewMatrix) * velocity;
  float spd = length(velW); vSpeed = min(spd*0.6,1.0);
  float baseSize = size*(400.0/-mvPos.z);
  gl_PointSize = baseSize*(1.0+vSpeed*2.5);
  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);
  gl_Position = projectionMatrix * mvPos;
}`,_=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
void main() {
  vec2 c = gl_PointCoord-vec2(0.5);
  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);
  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));
  if(dist>0.5) discard;
  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);
  float heat = 1.0+vSpeed*0.6;
  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);
  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));
  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));
}`;s=st(e,P),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:_,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));y=new THREE.Points(te,ue),s&&(y.frustumCulled=!1),n.add(y)}function I(te,Q){return ot(te,Q)}function j(te){M=te.length/4;for(var Q=0;Q<M;Q++){var _=Q*3,ue=Q*4,xe=te[ue],Te=te[ue+1],Ee=te[ue+2],ce=te[ue+3];A[_]=xe,A[_+1]=Te+40,A[_+2]=Ee,D[_]=D[_+1]=D[_+2]=0,W[_]=xe,W[_+1]=Te,W[_+2]=Ee;var me=Y[Math.floor(Math.random()*Y.length)],de=.7+Math.random()*.4;C[_]=me.r*de,C[_+1]=me.g*de,C[_+2]=me.b*de,F[Q]=1.8+Math.random()*3.8,S[Q]=.3+(ce||.7)*.75}s&&s.setPoints(te,M),y.geometry.setDrawRange(0,M),["position","color","size","alpha"].forEach(function(De){y.geometry.attributes[De].needsUpdate=!0}),h=!0}function oe(te){return I(te,Math.min(P,v)).then(function(Q){Q.length&&y&&j(Q)})}function U(te){if(!(!h||!M)){if(z+=te,s){s.step(z,null);return}for(var Q=0;Q<M;Q++){var _=Q*3,ue=Q*1.37;D[_]+=Math.sin(z*.4+ue)*.008+Math.sin(z*1.1+ue*2.3)*.003,D[_+1]+=Math.cos(z*.35+ue*.7)*.008+Math.sin(z*.9+ue*1.5)*.004,D[_+2]+=Math.sin(z*.25+ue*1.1)*.004,D[_+1]-=i*.06,D[_]+=Math.sin(z*.25+A[_+1]*.008)*a*.6,D[_+2]+=Math.cos(z*.3+A[_]*.008)*a*.3;var xe=W[_],Te=W[_+1]+40,Ee=W[_+2],ce=xe-A[_],me=Te-A[_+1],de=Ee-A[_+2],De=Math.sqrt(ce*ce+me*me+de*de),qe=(Q*48271&65535)/65535,Ae=.003+qe*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;D[_]+=ce*ge,D[_+1]+=me*ge,D[_+2]+=de*ge;var Ue=(Q*16807&65535)/65535,G=m*(.92+Ue*.06);D[_]*=G,D[_+1]*=G,D[_+2]*=G,A[_]+=D[_],A[_+1]+=D[_+1],A[_+2]+=D[_+2];var J=Math.sqrt(Math.pow(A[_]-W[_],2)+Math.pow(A[_+1]-W[_+1],2)+Math.pow(A[_+2]-W[_+2],2));S[Q]=.15+.55*(1-Math.min(J*.005,1))+Math.sin(z*1.5+Q*.01)*.05}y.geometry.attributes.position.needsUpdate=!0,y.geometry.attributes.alpha.needsUpdate=!0,y.geometry.attributes.velocity.needsUpdate=!0}}V();for(var L=4e3,w=new THREE.BufferGeometry,d=new Float32Array(L*3),p=new Float32Array(L*3),b=0;b<L;b++){d[b*3]=(Math.random()-.5)*2200,d[b*3+1]=(Math.random()-.5)*1800,d[b*3+2]=-200-Math.random()*1800;var X=Y[Math.floor(Math.random()*Y.length)],N=.2+Math.random()*.3;p[b*3]=X.r*N,p[b*3+1]=X.g*N,p[b*3+2]=X.b*N}w.setAttribute("position",new THREE.BufferAttribute(d,3)),w.setAttribute("color",new THREE.BufferAttribute(p,3));var k=document.createElement("canvas");k.width=k.height=32;var q=k.getContext("2d"),H=q.createRadialGradient(16,16,0,16,16,16);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.3,"rgba(255,255,255,0.6)"),H.addColorStop(.7,"rgba(255,255,255,0.15)"),H.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=H,q.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(k),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(w,ne);n.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var Z=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(Z.getDelta(),.05),Q=Z.elapsedTime;u+=f*te,y&&(y.rotation.y=u,y.position.y=5,y.scale.setScalar(.85));for(var _=0;_<L;_++)d[_*3+1]+=Math.sin(Q*.2+_)*.05,d[_*3]+=Math.cos(Q*.15+_*.5)*.03;w.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-u*35*.35,l.position.x=300+Math.sin(Q*.3)*100,l.position.y=350+Math.cos(Q*.2)*80,c.intensity=2+Math.sin(Q*.5)*.4,x.intensity=.8+Math.sin(Q*.4+1)*.3,U(te),o.render(n,t)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),it("card",e),y=null}}var vn="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function fn(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return ft(vn).then(function(){o||(s=t?Lr(n):un(n))}),function(){o=!0,s&&s()}}return t?e():tt(n,e)}function pn(r){let n=r.querySelector("#axion-card");if(n)return tt(n,function(){let t=!1,e=null;return ft(vn).then(function(){t||(e=dn(n))}),function(){t=!0,e&&e()}})}function Lr(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("home",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var E=new THREE.PointLight(13931578,2.4,1200);E.position.set(-300,-100,300),t.add(E);var x=new THREE.PointLight(5913114,1.2,900);x.position.set(0,200,-300),t.add(x);var u=new THREE.PointLight(16750916,1.3,600);u.position.set(0,-250,200),t.add(u);var f=0,v=0,i=0,m=0,a=!1,P=0,y=0,A=Math.PI*2/6,D=new THREE.Vector2(9999,9999),W=new THREE.Raycaster,C=120,F=new THREE.Vector3(9999,9999,0),S=new THREE.Vector3(9999,9999,0),M=new THREE.Vector3,h=!1,z=0,Y=0,V=8e4,I=.03,j=.95,oe=.005,U=12e4,L=null,w,d,p,b,X,N,k=0,q=!1,H=!1,ne=0,re=0,se=null,Z=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var R=new THREE.BufferGeometry;w=new Float32Array(U*3),d=new Float32Array(U*3),p=new Float32Array(U*3),b=new Float32Array(U*3),X=new Float32Array(U),N=new Float32Array(U),R.setAttribute("position",new THREE.BufferAttribute(w,3)),R.setAttribute("color",new THREE.BufferAttribute(b,3)),R.setAttribute("size",new THREE.BufferAttribute(X,1)),R.setAttribute("alpha",new THREE.BufferAttribute(N,1)),R.setAttribute("velocity",new THREE.BufferAttribute(d,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
void main() {
  vColor = color; vAlpha = alpha;
  vec4 mvPos = modelViewMatrix * vec4(position,1.0);
  vDist = -mvPos.z;
  vec3 velW = mat3(modelViewMatrix) * velocity;
  float spd = length(velW); vSpeed = min(spd*0.6,1.0);
  float baseSize = size*(400.0/-mvPos.z);
  gl_PointSize = baseSize*(1.0+vSpeed*2.5);
  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);
  gl_Position = projectionMatrix * mvPos;
}`,T=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
void main() {
  vec2 c = gl_PointCoord-vec2(0.5);
  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);
  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));
  if(dist>0.5) discard;
  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);
  float heat = 1.0+vSpeed*0.6;
  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);
  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));
  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));
}`;l=st(o,U),l&&R.setAttribute("ref",l.refAttribute());var ee=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:T,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));L=new THREE.Points(R,ee),l&&(L.frustumCulled=!1),t.add(L)}function he(R,B){return ot(R,B)}function be(R){k=R.length/4;for(var B=0;B<k;B++){var T=B*3,ee=B*4,ve=R[ee],fe=R[ee+1],ke=R[ee+2],we=R[ee+3];w[T]=ve,w[T+1]=fe+40,w[T+2]=ke,d[T]=d[T+1]=d[T+2]=0,p[T]=ve,p[T+1]=fe,p[T+2]=ke;var Fe=Z[Math.floor(Math.random()*Z.length)],ye=.7+Math.random()*.4;b[T]=Fe.r*ye,b[T+1]=Fe.g*ye,b[T+2]=Fe.b*ye,X[B]=1.8+Math.random()*3.8,N[B]=.3+(we||.7)*.75}l&&l.setPoints(R,k),L.geometry.setDrawRange(0,k),["position","color","size","alpha"].forEach(function(Ge){L.geometry.attributes[Ge].needsUpdate=!0}),q=!0,H=!1,ne=1}function ze(R){return he(R,Math.min(U,V)).then(function(B){B.length&&L&&be(B)})}function Le(R){if(!(!q||!k)){if(re+=R,l){l.step(re,h&&J==="interactive"?{pos:F,vel:M,radius:C}:null);return}for(var B=0;B<k;B++){var T=B*3,ee=B*1.37;if(d[T]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,d[T+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,d[T+2]+=Math.sin(re*.25+ee*1.1)*.004,d[T+1]-=I*.06,d[T]+=Math.sin(re*.25+w[T+1]*.008)*oe*.6,d[T+2]+=Math.cos(re*.3+w[T]*.008)*oe*.3,h&&J==="interactive"){var ve=w[T]-F.x,fe=w[T+1]-F.y,ke=w[T+2]-F.z,we=ve*ve+fe*fe+ke*ke,Fe=C*C;if(we<Fe&&we>.25){var ye=Math.sqrt(we),Ge=ye/C,Oe=(B*2654435761&65535)/65535,Rt=.6+Oe*.8,et=Math.pow(1-Ge,1.5+Oe),ct=1+Math.min(M.length()*.12,1),Xe=et*Rt*1.2*ct,Ye=1/ye;d[T]+=ve*Ye*Xe,d[T+1]+=fe*Ye*Xe,d[T+2]+=ke*Ye*Xe*.2;var ht=.02+Oe*.06;d[T]+=M.x*et*ht,d[T+1]+=M.y*et*ht;var gt=et*.15;d[T]+=(Oe-.5)*gt,d[T+1]+=((B*48271&65535)/65535-.5)*gt}}var Ft=p[T],zt=p[T+1]+40,ut=p[T+2],dt=Ft-w[T],$e=zt-w[T+1],vt=ut-w[T+2],ir=Math.sqrt(dt*dt+$e*$e+vt*vt),sr=(B*48271&65535)/65535,lr=.003+sr*.003,cr=1+Math.min(ir*.002,.5),Lt=lr*cr;d[T]+=dt*Lt,d[T+1]+=$e*Lt,d[T+2]+=vt*Lt;var ur=(B*16807&65535)/65535,Dt=j*(.92+ur*.06);d[T]*=Dt,d[T+1]*=Dt,d[T+2]*=Dt,w[T]+=d[T],w[T+1]+=d[T+1],w[T+2]+=d[T+2];var dr=Math.sqrt(Math.pow(w[T]-p[T],2)+Math.pow(w[T+1]-p[T+1],2)+Math.pow(w[T+2]-p[T+2],2));N[B]=.15+.55*(1-Math.min(dr*.005,1))+Math.sin(re*1.5+B*.01)*.05}L.geometry.attributes.position.needsUpdate=!0,L.geometry.attributes.alpha.needsUpdate=!0,L.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),_=new THREE.Vector3;function ue(R,B){var T=s.domElement.getBoundingClientRect();if(!(T.width===0||T.height===0)&&(D.set((R-T.left)/T.width*2-1,-((B-T.top)/T.height)*2+1),W.setFromCamera(D,e),W.ray.intersectPlane(Q,_))){S.copy(F),L&&F.copy(_).applyMatrix4(te.copy(L.matrixWorld).invert()),M.subVectors(F,S);var ee=M.length();ee>15&&M.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function Ee(R,B){var T=Te().getBoundingClientRect();return R>=T.left&&R<=T.right&&B>=T.top&&B<=T.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(R){if(z=R.clientX,Y=R.clientY,n||J!=="interactive"){h=!1,F.set(9999,9999,0);return}var B=Ee(R.clientX,R.clientY);if(B){h=!0,ue(R.clientX,R.clientY);var T=Te().getBoundingClientRect(),ee=Math.round(R.clientX-T.left),ve=Math.round(R.clientY-T.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else h=!1,F.set(9999,9999,0);a&&(f+=(R.clientX-P)*.005,i+=(R.clientY-y)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),P=R.clientX,y=R.clientY)}function qe(R){n||J!=="interactive"||Ee(R.clientX,R.clientY)&&(a=!0,P=R.clientX,y=R.clientY)}function Ae(){n||(a=!1,f=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",qe),window.addEventListener("mouseup",Ae);function He(){for(var R=4e3,B=new THREE.BufferGeometry,T=new Float32Array(R*3),ee=new Float32Array(R*3),ve=0;ve<R;ve++){T[ve*3]=(Math.random()-.5)*2200,T[ve*3+1]=(Math.random()-.5)*1800,T[ve*3+2]=-200-Math.random()*1800;var fe=Z[Math.floor(Math.random()*Z.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}B.setAttribute("position",new THREE.BufferAttribute(T,3)),B.setAttribute("color",new THREE.BufferAttribute(ee,3));var we=document.createElement("canvas");we.width=we.height=32;var Fe=we.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var Ge=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(we),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Oe=new THREE.Points(B,Ge);return Oe.userData={positions:T,count:R},t.add(Oe),Oe}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var G=new THREE.Clock,J="spin",ae=null;function Ne(){if(n){J="spin";return}if(ae===null){var R=document.querySelector(".scaling-element-video");ae=R&&getComputedStyle(R).display!=="none"}if(!ae){J="spin";return}var B=window._flipProgress||0;B>.85?J="interactive":B>.7?J="transition":J="spin"}var O="spin",$=!0,g=new IntersectionObserver(function(R){$=R[0].isIntersecting},{threshold:0});g.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var R=Pt();R.known&&(z=R.x,Y=R.y);var B=Ee(z,Y);B?(h=!0,ue(z,Y)):(h=!1,F.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!$){Ce++;var R=Math.min(G.getDelta(),.05),B=G.elapsedTime;Ne(),O==="interactive"&&J!=="interactive"&&(h=!1,F.set(9999,9999,0),a=!1);var T=J==="transition"||J==="interactive";if(T&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!T&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),O=J,h&&!Ee(z,Y)&&(h=!1,F.set(9999,9999,0)),J==="spin")v+=A*R,m+=(0-m)*.05;else if(J==="transition")v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2),v+=(0-v)*.025,m+=(0-m)*.025;else{var ee=f-v;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),v+=ee*.12,m+=(i-m)*.12}L&&(L.rotation.x=m,L.rotation.y=v,L.scale.setScalar(1),L.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(B*.2+fe)*.05,ve[fe*3]+=Math.cos(B*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-v*35*.35,ge.position.y=m*28*.35,c.position.x=300+Math.sin(B*.3)*100,c.position.y=350+Math.cos(B*.2)*80,E.intensity=2+Math.sin(B*.5)*.4,u.intensity=.8+Math.sin(B*.4+1)*.3,!(n&&K&&Ce%4!==0)&&(Le(R),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",qe),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),g.disconnect(),t.traverse(function(R){R.geometry&&R.geometry.dispose()}),it("home",o),L=null}}function mn(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),l=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),c=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ve},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(l.length&&c.set(l,{autoAlpha:1},0),s.length>=2){let E=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),x=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([E.chars,x.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),c.to(E.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),c.to(E.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),c.to(x.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),c.to(x.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return c}function hn(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(u=>{let f=u.parentElement;f&&(u.style.whiteSpace="nowrap",e.has(f)||e.set(f,[]),e.get(f).push(u))});function o(u){let f=getComputedStyle(u);return u.clientWidth-parseFloat(f.paddingLeft)-parseFloat(f.paddingRight)}function s(u,f){if(f<=0)return;let v=parseFloat(getComputedStyle(u).fontSize)||16;for(let i=0;i<5;i++){let m=u.getBoundingClientRect().width;if(m<=0)break;let a=f/m;if(Math.abs(a-1)<.002)break;v*=a,u.style.fontSize=v+"px"}}function l(){e.forEach((u,f)=>{let v=o(f);u.forEach(i=>s(i,v))})}let c=null;function E(){c||(c=requestAnimationFrame(()=>{c=null,l()}))}let x;return window.ResizeObserver&&(x=new ResizeObserver(E),e.forEach((u,f)=>x.observe(f))),window.addEventListener("resize",E),l(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(l),()=>{c&&cancelAnimationFrame(c),x&&x.disconnect(),window.removeEventListener("resize",E),t.forEach(u=>{u.style.whiteSpace="",u.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},_t=.08,Dr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},gn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function xn(r,n){var t=(1-n)*100+"%";return r==="left"?"inset(0% 0% 0% "+t+")":r==="up"?"inset("+t+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+t+" 0%)":"inset(0% "+t+" 0% 0%)"}function kr(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function bn(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",l=o.getAttribute("data-marker-theme")||"#000000",c=o.getAttribute("data-marker-scroll-start")||"top 90%",E=l.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(l).trim()||l,x=gn[s]||gn.right,u=Dr[o.getAttribute("data-highlight-marker-reveal")]||null;u&&(E=u.bar);var f=o.closest("[data-cursor-label]"),v={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,m=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){v.timeline&&v.timeline.kill(),v.scrollTrigger&&v.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(S){S.remove()}),v.listeners.forEach(function(S){S.el.removeEventListener(S.type,S.fn)}),v.listeners=[],i=!1;var P=a.lines,y=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(P.forEach(function(S,M){gsap.set(S,{position:"relative",overflow:"hidden"});var h=kr(E,x.origin);gsap.set(h,{[x.prop]:0}),S.appendChild(h),u&&(gsap.set(S,{zIndex:0,color:u.text}),gsap.set(h,{zIndex:-1})),y.to(h,{[x.prop]:1,duration:Se.duration,ease:Se.ease},M*_t);var z=function(){i&&(gsap.to(h,{[x.prop]:0,duration:Se.duration,ease:Se.ease}),u&&gsap.to(S,{color:u.hoverText,duration:Se.duration,ease:Se.ease}))},Y=function(){i&&(gsap.to(h,{[x.prop]:1,duration:Se.duration,ease:Se.ease}),u&&gsap.to(S,{color:u.text,duration:Se.duration,ease:Se.ease}))};!u&&e&&(S.addEventListener("mouseenter",z),S.addEventListener("mouseleave",Y),v.listeners.push({el:S,type:"mouseenter",fn:z},{el:S,type:"mouseleave",fn:Y}))}),v.timeline=y,f){y.kill();var A=o.querySelectorAll(".highlight-marker-bar");gsap.set(P,{clipPath:xn(s,0)});var D=function(S){gsap.to(A,{[x.prop]:S,duration:Se.duration,ease:Se.ease,stagger:_t,overwrite:!0}),gsap.to(P,{clipPath:xn(s,S),duration:Se.duration,ease:Se.ease,stagger:_t,overwrite:!0})},W=function(){D(1)},C=function(){D(0)};f.addEventListener("cursorlabel:enter",W),f.addEventListener("cursorlabel:leave",C),v.listeners.push({el:f,type:"cursorlabel:enter",fn:W},{el:f,type:"cursorlabel:leave",fn:C});return}var F=ScrollTrigger.create({trigger:o,start:c,once:!0,onEnter:function(){y.play()}});v.scrollTrigger=F}});v.split=m,t.push(v)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function yn(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),l=r.querySelectorAll("[data-cursor-marquee-text]");if(!l.length)return;let c=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),E=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),x=null,u=f=>{c(f.clientX),E(f.clientY)};return window.addEventListener("pointermove",u,{passive:!0}),l.forEach(f=>{f.addEventListener("mouseenter",()=>{x&&clearTimeout(x);let v=f.getAttribute("data-cursor-marquee-text")||"",i=(v.length||1)/e;s.forEach(m=>{m.textContent=v,m.style.animationPlayState="running",m.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),f.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),x&&clearTimeout(x),x=setTimeout(()=>{s.forEach(v=>{v.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",u),clearTimeout(x),gsap.killTweensOf(o)}}function Pn(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let l=s.target;s.isIntersecting?t(l):l.paused||l.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function En(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(c){window._flipProgress=c.progress}}}),n.forEach(function(c,E){let x=E+1;if(x<n.length){let u=n[x],f=u.getBoundingClientRect(),v=c.getBoundingClientRect(),i=f.top+window.pageYOffset+u.offsetHeight/2,m=v.top+window.pageYOffset+c.offsetHeight/2,a=i-m;e.add(Flip.fit(t,u,{duration:a,ease:"none"}))}})}o();let s,l=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",l),function(){clearTimeout(s),window.removeEventListener("resize",l),e&&e.kill()}}var Ir="150%";function Hr(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var Ot=new WeakMap;function wn(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(l){return l.textContent})}),o=t.map(Hr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),Ot.set(r,{wrap:n,lines:t,lineChars:o}),function(){Ot.delete(r),t.forEach(function(s,l){s.querySelectorAll("textPath").forEach(function(c,E){c.textContent=e[l][E]})})}}function Sn(r){let n=Ot.get(r);if(!n)return function(){};let t=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Ir,pin:!0,scrub:!0}});return n.lines.forEach(function(e,o){let s=n.lineChars[o];s.length&&t.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}var Ur="600%",pt={duration:1,ease:"power2.inOut"},Tn={y:.3,x:.06},St=.2,Tt={duration:.8,ease:"expo.out",stagger:.08,start:"top 90%"},lt=[[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,1],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[31,1],[2,1],[13,1],[20,1],[33,3],[4,2],[15,2],[25,2],[35,2],[5,0],[16,1],[27,0],[37,3],[6,2],[17,3],[29,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,1],[31,1],[36,3],[22,2],[27,3],[32,2],[37,2],[23,0],[28,1],[33,1],[38,3],[24,2],[29,3],[34,2],[39,2]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]],An="http://www.w3.org/2000/svg",Vt=new WeakMap;function Cn(r){let n=r.querySelector('[data-scroll-driven="wrap"]'),t=n&&n.querySelector('[data-scroll-driven="stage"]');if(!t||getComputedStyle(n).display==="none")return function(){};let e=document.createElementNS(An,"svg");e.setAttribute("viewBox","0 0 1360 680"),e.setAttribute("aria-hidden","true"),e.style.cssText="display:block;width:100%;height:100%";let o=document.createElementNS(An,"path");o.setAttribute("fill","currentColor"),e.appendChild(o),t.appendChild(e);let s=lt[0].map(([E,x])=>({x0:E*34,x1:(E+1)*34,y0:x*170,y1:(x+1)*170})),l=[0,1,2,3].map(()=>({v:0}));function c(){let E="";for(let x=0;x<s.length;x++){let u=s[x],f=u.y1-(u.y1-u.y0)*l[x%4].v;u.y1-f<.01||(E+="M"+u.x0.toFixed(2)+" "+f.toFixed(2)+"H"+u.x1.toFixed(2)+"V"+u.y1.toFixed(2)+"H"+u.x0.toFixed(2)+"Z")}o.setAttribute("d",E)}return c(),Vt.set(r,{wrap:n,stage:t,edges:s,rise:l,render:c}),function(){Vt.delete(r),gsap.killTweensOf(s.concat(l)),e.remove()}}function Mn(r){let n=Vt.get(r);if(!n)return function(){};let t=gsap.to(n.rise,{v:1,duration:Tt.duration,ease:Tt.ease,stagger:Tt.stagger,paused:!0,onUpdate:n.render}),e=ScrollTrigger.create({trigger:n.stage,start:Tt.start,once:!0,onEnter:function(){t.play()}}),o=gsap.timeline({onUpdate:n.render,scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Ur,pin:!0,scrub:!0}}),s=lt[0].map(f=>f.slice());function l(f,v,i,m){let a=v?170:34,P=v?"y0":"x0",y=v?"y1":"x1",A=v?Tn.y:Tn.x,D=i;return n.edges.forEach(function(W,C){let F=s[C][v]*a,S=lt[f][C][v]*a;if(F===S)return;let M=S>F,h=M?y:P,z=M?P:y,Y=i+m(C);o.fromTo(W,{[h]:F+(M?a:0)},{[h]:S+(M?a:0),duration:pt.duration,ease:pt.ease,immediateRender:!1},Y),o.fromTo(W,{[z]:F+(M?0:a)},{[z]:S+(M?0:a),duration:pt.duration,ease:pt.ease,immediateRender:!1},Y+A),s[C][v]=lt[f][C][v],D=Math.max(D,Y+A+pt.duration)}),D+St}let c=f=>v=>Math.floor(lt[f][v][0]/5)*.12,E=lt[2].map(f=>f[0]),x=()=>f=>(19-E[f])*.015,u=St;return u=l(1,1,u,c(0)),u=l(2,1,u,c(1)),u=l(3,0,u,x()),u=l(4,0,u-St,x()),u=l(4,1,u-St,x()),u=l(5,1,u,c(4)),u=l(6,1,u,c(5)),o.to({},{duration:0},u),function(){e.kill(),t.kill(),o.scrollTrigger&&o.scrollTrigger.kill(!0),o.kill()}}function Bt(r){var n=[];function t(i,m,a,P){i.addEventListener(m,a,P),n.push(function(){i.removeEventListener(m,a,P)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var m=i.getAttribute("data-player-src");if(!m)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(G){}try{a.removeAttribute("src"),a.load()}catch(G){}function P(G){i.getAttribute("data-player-status")!==G&&i.setAttribute("data-player-status",G)}function y(G){a.muted=!!G,i.setAttribute("data-player-muted",a.muted?"true":"false")}function A(G){i.setAttribute("data-player-fullscreen",G?"true":"false")}function D(G){i.setAttribute("data-player-activated",G?"true":"false")}i.hasAttribute("data-player-activated")||D(!1);var W=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),F=i.querySelector("[data-player-buffered]"),S=i.querySelector("[data-player-timeline-handle]"),M=i.querySelectorAll("[data-player-time-duration]"),h=i.querySelectorAll("[data-player-time-progress]"),z=i.getAttribute("data-player-update-size"),Y=i.getAttribute("data-player-lazy"),V=Y==="true",I=Y==="meta",j=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",U=!1;j?(y(!0),a.loop=!0):y(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var L=!!a.canPlayType("application/vnd.apple.mpegurl"),w=L&&"ManagedMediaSource"in window,d=!!(window.Hls&&Hls.isSupported())&&!w;if(z==="true"&&!I&&!V){var p=a.preload;a.preload="metadata";var b=function(){x(i,z,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",b),a.preload=p||""};t(a,"loadedmetadata",b,{once:!0}),a.src=m}function X(){v(m,d).then(function(G){G.width&&G.height&&x(i,z,G.width,G.height),M.length&&isFinite(G.duration)&&G.duration>0&&s(M,o(G.duration)),E(i,U)})}var N=!1,k=!1,q="";function H(){if(!N){if(N=!0,i._hls){try{i._hls.destroy()}catch(J){}i._hls=null}if(w)a.preload=V||I?"auto":a.preload,a.src=m,t(a,"loadedmetadata",function(){E(i,U),z==="true"&&x(i,z,a.videoWidth,a.videoHeight),M.length&&s(M,o(a.duration))},{once:!0});else if(d){var G=new Hls({maxBufferLength:10});G.attachMedia(a),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(m)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(E(i,U),z==="true"){var J=G.levels||[],ae=l(J);ae&&ae.width&&ae.height&&x(i,z,ae.width,ae.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(J,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&M.length&&s(M,o(ae.details.totalduration))}),i._hls=G}else a.src=m}}I?(X(),a.preload="none"):V?a.preload="none":H();function ne(){k=!0,a.paused||a.ended?((V||I)&&!N&&H(),U=!0,q="",P("loading"),c(a)):(q="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Z(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():Z()}t(document,"fullscreenchange",function(){A(se())}),t(document,"webkitfullscreenchange",function(){A(se())}),t(a,"webkitbeginfullscreen",function(){A(!0)}),t(a,"webkitendfullscreen",function(){A(!1)}),t(i,"click",function(G){var J=G.target.closest("[data-player-control]");if(!(!J||!i.contains(J))){var ae=J.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){M.length&&s(M,o(a.duration)),h.length&&s(h,o(a.currentTime))}t(a,"timeupdate",be),t(a,"loadedmetadata",function(){be(),u(i,z,a)}),t(a,"loadeddata",function(){u(i,z,a)}),t(a,"playing",function(){u(i,z,a)}),t(a,"durationchange",be);var ze;function Le(){if(a.duration){var G=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+G)+"%)"),S&&(S.style.left=G+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function Q(){if(!(!F||!a.duration||!a.buffered.length)){var G=a.buffered.end(a.buffered.length-1),J=G/a.duration*100;F.style.transform="translateX("+(-100+J)+"%)"}}if(t(a,"progress",Q),t(a,"loadedmetadata",Q),t(a,"durationchange",Q),t(a,"play",function(){D(!0),cancelAnimationFrame(ze),te(),P("playing")}),t(a,"playing",function(){U=!1,P("playing")}),t(a,"pause",function(){U=!1,cancelAnimationFrame(ze),Le(),P("paused")}),t(a,"waiting",function(){P("loading")}),t(a,"canplay",function(){E(i,U)}),t(a,"ended",function(){U=!1,cancelAnimationFrame(ze),Le(),P("paused"),D(!1)}),W){let G=function(g){ce||(ce=W.getBoundingClientRect());var K=(g-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},J=function(g){if(a.duration){var K=g*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),S&&(S.style.left=K+"%"),h.length&&s(h,o(g*a.duration))}},ae=function(g){a.duration&&(g-Te<Ee||(Te=g,a.currentTime=xe))},Ne=function(g){if(a.duration){_=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=W.getBoundingClientRect();var K=G(g.clientX);xe=K*a.duration,J(K),ae(performance.now()),W.setPointerCapture&&W.setPointerCapture(g.pointerId),window.addEventListener("pointermove",O,{passive:!1}),window.addEventListener("pointerup",$,{passive:!0}),g.preventDefault()}},O=function(g){if(_){var K=G(g.clientX);xe=K*a.duration,J(K),ae(performance.now()),g.preventDefault()}},$=function(){_&&(_=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?c(a):(Le(),be()),window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",$))};var _=!1,ue=!1,xe=0,Te=0,Ee=180,ce=null;t(window,"resize",function(){_||(ce=null)}),t(W,"pointerdown",Ne,{passive:!1}),S&&t(S,"pointerdown",Ne,{passive:!1})}var me,de=3e3;function De(G){i.getAttribute("data-player-hover")!==G&&i.setAttribute("data-player-hover",G)}function qe(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),qe()}t(i,"pointerdown",Ae),t(document,"fullscreenchange",Ae),t(document,"webkitfullscreenchange",Ae);var He=!1;function ge(G){var J=i.getBoundingClientRect();G.clientX>=J.left&&G.clientX<=J.right&&G.clientY>=J.top&&G.clientY<=J.bottom&&Ae()}if(t(i,"pointerenter",function(){Ae(),He||(He=!0,t(window,"pointermove",ge,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),j){var Ue=new IntersectionObserver(function(G){G.forEach(function(J){var ae=J.isIntersecting&&J.intersectionRatio>0;ae?((V||I)&&!N&&H(),a.paused?(q="",U=!0,P("loading"),c(a)):P("playing")):!a.paused&&!a.ended&&(q="io",a.pause(),P("paused"))})},{threshold:.1});Ue.observe(i)}n.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(G){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(G){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var m=Math.floor(i),a=Math.floor(m/3600),P=Math.floor(m%3600/60),y=m%60;return a>0?a+":"+e(P)+":"+e(y):e(P)+":"+e(y)}function s(i,m){i.forEach(function(a){a.textContent=m})}function l(i){return!i||!i.length?null:i.reduce(function(m,a){return(a.width||0)>(m.width||0)?a:m},i[0])}function c(i){var m=i.play();m&&typeof m.then=="function"&&m.catch(function(){})}function E(i,m){!m&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function x(i,m,a,P){if(!(m!=="true"||!a||!P)){var y=i.querySelector("[data-player-before]");y&&(y.style.paddingTop=P/a*100+"%")}}function u(i,m,a){if(m==="true"){var P=i.querySelector("[data-player-before]");if(P){var y=P.style.paddingTop&&P.style.paddingTop!=="0%";!y&&a.videoWidth&&a.videoHeight&&x(i,m,a.videoWidth,a.videoHeight)}}}function f(i,m){try{return new URL(m,i).toString()}catch(a){return m}}function v(i,m){return new Promise(function(a){if(m&&window.Hls&&Hls.isSupported())try{var P=new Hls,y={width:0,height:0,duration:NaN},A=!1,D=!1;P.on(Hls.Events.MANIFEST_PARSED,function(F,S){var M=S&&S.levels||P.levels||[],h=l(M);h&&h.width&&h.height&&(y.width=h.width,y.height=h.height,A=!0)}),P.on(Hls.Events.LEVEL_LOADED,function(F,S){S&&S.details&&isFinite(S.details.totalduration)&&(y.duration=S.details.totalduration,D=!0)}),P.on(Hls.Events.ERROR,function(){try{P.destroy()}catch(F){}a(y)}),P.on(Hls.Events.LEVEL_LOADED,function(){try{P.destroy()}catch(F){}a(y)}),P.loadSource(i);return}catch(F){a({width:0,height:0,duration:NaN});return}function W(F){for(var S=F.split(/\r?\n/),M=0,h=0,z=null,Y=null,V=0;V<S.length;V++){var I=S[V];if(I.indexOf("#EXT-X-STREAM-INF:")===0)Y=I;else if(Y&&I&&I[0]!=="#"){z||(z=I.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec(Y);if(j){var oe=parseInt(j[1],10),U=parseInt(j[2],10);oe>M&&(M=oe,h=U)}Y=null}}return{bestW:M,bestH:h,media:z}}function C(F){for(var S=0,M=/#EXTINF:([\d.]+)/g,h;h=M.exec(F);)S+=parseFloat(h[1]);return S}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(F){if(!F.ok)throw new Error("master");return F.text()}).then(function(F){var S=W(F);if(!S.media){a({width:S.bestW||0,height:S.bestH||0,duration:NaN});return}var M=f(i,S.media);return fetch(M,{credentials:"omit",cache:"no-store"}).then(function(h){if(!h.ok)throw new Error("media");return h.text()}).then(function(h){a({width:S.bestW||0,height:S.bestH||0,duration:C(h)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var _r="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Or="(min-width: 768px)";function Fn(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Bt(r),t=Rn(r);else{let e=!1;return ft(_r).catch(function(){}).then(function(){e||(n=Bt(r),t=Rn(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function Rn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,l,c,E,x,u,f,v="",i="",m="",a=(p,b=r)=>b.querySelector(p),P=p=>a(`[data-mini-showreel-lightbox="${p}"]`),y=p=>a(`[data-mini-showreel-player="${p}"]`),A=p=>p.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",p)||p,D=(p,b)=>{let X=p.width,N=X/b;return N>p.height&&(N=p.height,X=N*b),{left:p.left+(p.width-X)/2,top:p.top+(p.height-N)/2,width:X,height:N}},W=p=>{let b=A(p).getBoundingClientRect(),X=p.getBoundingClientRect(),N=X.width>0&&X.height>0?X.width/X.height:16/9;return D(b,N)},C=(p,b)=>gsap.set(p,{position:"fixed",left:b.left,top:b.top,width:b.width,height:b.height,margin:0,x:0,y:0});function F(p){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(b=>b.setAttribute("data-mini-showreel-status",p))}function S(){i=(l==null?void 0:l.style.zIndex)||"",m=(c==null?void 0:c.style.zIndex)||"",l&&(l.style.zIndex=String(e)),c&&(c.style.zIndex=String(e))}function M(){l&&(l.style.zIndex=i),c&&(c.style.zIndex=m)}function h(p){let b=y(p);if(!b)return;let X=b.querySelector("[data-bunny-player-init]"),N=b.querySelector("video");if(N){if(X){let k=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');k&&(N.paused||N.ended)&&k.click();return}try{N.play()}catch(k){}}}function z(p){let b=y(p);if(!b)return;let X=b.querySelector("[data-bunny-player-init]"),N=b.querySelector("video");N&&(N.muted=!0,X&&X.setAttribute("data-player-muted","true"),(N.paused||N.ended)&&h(p))}function Y(){M(),o="",s=!1,l=c=E=x=u=f=null,v="",i="",m="",pe.start()}function V(p){if(!p||s||(l=P(p),c=y(p),!l||!c)||(E=a("[data-mini-showreel-target]",l),!E))return;o=p,s=!0,pe.stop(),c.dataset.flipId=o,v=c.style.cssText||"",x=c.parentElement,u=c.nextSibling,S(),F("active"),h(o);let b=Flip.getState(c),X=W(E);l.appendChild(c),C(c,X),f=Flip.from(b,{duration:n,ease:t,absolute:!0,scale:!1})}function I(p){!s||!c||p&&p!==o||(z(o),F("not-active"),f&&f.kill(),f=Flip.fit(c,x,{duration:n,ease:t,scale:!1,onComplete:()=>{x.insertBefore(c,u),c.style.cssText=v,Y()}}))}function j(){!s||!c||(f&&f.kill(),z(o),F("not-active"),x.insertBefore(c,u),c.style.cssText=v,Y())}function oe(){!s||!c||!E||C(c,W(E))}function U(p){let b=p.target.closest("[data-mini-showreel-open]");b&&(p.preventDefault(),V(b.getAttribute("data-mini-showreel-open")||""))}function L(p){let b=p.target.closest("[data-mini-showreel-close]");b&&(p.preventDefault(),I(b.getAttribute("data-mini-showreel-close")||""))}function w(p){p.key==="Escape"&&I("")}let d=gsap.matchMedia();return d.add(Or,function(){return r.addEventListener("click",U),document.addEventListener("click",L),window.addEventListener("keydown",w),window.addEventListener("resize",oe),function(){j(),r.removeEventListener("click",U),document.removeEventListener("click",L),window.removeEventListener("keydown",w),window.removeEventListener("resize",oe)}}),function(){d.revert(),j()}}var Ie=1920,_e=1080,qt="#E5E5E5",Gt="#000000",zn="http://www.w3.org/2000/svg";function Ln(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(zn,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${_e}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(d,p)=>{let b=document.createElementNS(zn,d);return b.setAttribute("fill",p),t.appendChild(b),b},o=e("polygon",qt),s=e("polygon",Gt),l=e("rect",Gt),c=e("rect",qt),E=e("rect",qt),x=e("rect",Gt);[l,c,E,x].forEach(d=>d.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let u=(d,p,b,X,N)=>{d.setAttribute("x",p),d.setAttribute("y",b),d.setAttribute("width",Math.max(0,X)),d.setAttribute("height",Math.max(0,N))},f={x:Ie*(2/3),y:_e*(1/3)},v=.1,i=.9,m={x:f.x,y:f.y},a={x:f.x,y:f.y},P={x:f.x,y:f.y},y=!1,A=()=>gsap.to(P,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:A}),D=()=>gsap.to(P,{y:gsap.utils.random(_e*.193,_e*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:D});A(),D();function W(){let d=gsap.utils.clamp(Ie*v,Ie*i,m.x),p=Ie-d,b=gsap.utils.clamp(_e*v,_e*i,m.y),X=_e-b;o.setAttribute("points",`0,${b} ${d},0 ${Ie},${b} ${Ie},${_e} 0,${_e}`),s.setAttribute("points",`${Ie},${b} ${d},0 ${d},${b}`),u(l,0,b,d,X);let N=d*.25,k=X*(2/3);u(c,d/2-N/2,b+X-k,N,k),u(E,d,b,p,X);let q=p*.5,H=X/3;u(x,d+p/2-q/2,b+X/2-H/2,q,H)}let C=.1,F=.03;function S(){let p=1-Math.pow(1-(y?C:F),gsap.ticker.deltaRatio(60)),b=y?a:P;m.x+=(b.x-m.x)*p,m.y+=(b.y-m.y)*p,W()}let M=(d,p)=>{let b=n.getBoundingClientRect();!b.width||!b.height||(a.x=gsap.utils.clamp(0,Ie,(d-b.left)/b.width*Ie),a.y=gsap.utils.clamp(0,_e,(p-b.top)/b.height*_e),y=!0)},h=()=>{y=!1},z=(d,p)=>{let b=n.getBoundingClientRect();d>=b.left&&d<=b.right&&p>=b.top&&p<=b.bottom?M(d,p):h()},V=window.matchMedia("(hover: hover) and (pointer: fine)").matches?We(z):null,I=d=>{let p=d.touches[0];p&&M(p.clientX,p.clientY)},j={passive:!0};n.addEventListener("touchstart",I,j),n.addEventListener("touchmove",I,j),n.addEventListener("touchend",h,j),n.addEventListener("touchcancel",h,j);let oe=!1,U=()=>{oe||(oe=!0,gsap.ticker.add(S))},L=()=>{oe&&(oe=!1,gsap.ticker.remove(S))},w=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:d=>d.isActive?U():L()});return W(),U(),function(){L(),w.kill(),gsap.killTweensOf(P),V&&V(),n.removeEventListener("touchstart",I,j),n.removeEventListener("touchmove",I,j),n.removeEventListener("touchend",h,j),n.removeEventListener("touchcancel",h,j),t.remove()}}var Vr="http://www.w3.org/2000/svg";var Br=4.1343749999999995,qr="#AFAFAF",Gr="#000000",Wr=5e3,Nr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Xr=0,Dn=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Be=(r,n)=>{let t=document.createElementNS(Vr,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function kn(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Xr;e.setAttribute("data-pulse-dots-paused","");let s=Be("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let l=Be("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});l.append(Be("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Br.toFixed(2)}),Be("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let c=Be("defs",{});c.appendChild(l);let E=Be("rect",{width:1e3,height:1e3,fill:qr}),x=Be("g",{filter:`url(#${o})`,fill:Gr});for(let f=0;f<20;f++)for(let v=0;v<20;v++){if(!Dn(v,f))continue;let i=Nr.filter(A=>Dn(v+A.dx,f+A.dy)),m=i[Math.floor(Math.random()*i.length)],a=185+v*31.5+27.5625/2,P=185+f*31.5+27.5625/2,y=Be("g",{transform:`rotate(${m.deg} ${a} ${P})`});y.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Wr)}ms`),y.append(Be("circle",{class:"pulse-dots__dot is--first",cx:a,cy:P,r:27.5625/2}),Be("circle",{class:"pulse-dots__dot is--last",cx:a,cy:P,r:27.5625/2})),x.appendChild(y)}s.append(c,E,x),e.appendChild(s);let u=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:f=>e.toggleAttribute("data-pulse-dots-paused",!f.isActive)});e.toggleAttribute("data-pulse-dots-paused",!u.isActive),t.push(()=>{u.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var At=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,In=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Hn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;uniform vec2 uMousePos;const float PI = 3.14159265359;vec2 rotate(vec2 coord, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(
coord.x * c - coord.y * s,
coord.x * s + coord.y * c
);
}out vec4 fragColor;vec3 getBgColor(vec2 uv) {return vec3(0, 0, 0);
}void main() {vec2 uv = vTextureCoord;
vec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);
uv -= pos;
uv /= max(0.5000*2., 1e-5);
uv = rotate(uv, (0.0000 - 0.5) * 2. * PI);
vec4 color = vec4(getBgColor(uv), 1.0) * 1.0000;
fragColor = color;
}`,Un=[`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}vec2 getAnchorOffsets() {
return vec2(0.0, 0.5);
}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {
vec2 halfSize = elementSize * 0.5;
vec2 p = localPos - halfSize;return vec3(0.8156862745098039, 0.8156862745098039, 0.8156862745098039);
}float sdBox(vec2 p, vec2 b) {
vec2 d = abs(p) - b;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}float sdEllipse(vec2 p, vec2 ab) {
vec2 q = p / ab;
return (length(q) - 1.0) * min(ab.x, ab.y);
}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {
vec2 p = vec2(0.0);
vec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;
vec2 rel = canvasPosPx - centerPx;
vec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;
p = local - elementSizePx * 0.5;
halfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));
return sdBox(p, halfSize);
}vec4 sampleShape(vec2 canvasUV) {
vec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 160.0000;
float absHeight = 160.0000;
vec2 elementSizePx = vec2(absWidth, absHeight);
vec2 elementPosPx = vec2(0.2600, 0.5000) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);
float aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);
float uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));
float seamFactor = smoothstep(0.01, 0.03, uvGrad);
aa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);
fillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);
vec2 localPos;
localPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;
vec2 localSize;
localSize = elementSizePx;vec2 centerPx;
centerPx = elementPosPx + elementSizePx * 0.5;
float centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);
float maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;
vec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;
vec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);
vec4 col = stroke + fill * (1.0 - stroke.a);
return col;
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 getCompositeOutput(vec2 uv) {
vec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 pos = (uMousePos - 0.5) * 0.0000;uv -= pos;fragColor = getCompositeOutput(uv);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}vec2 getAnchorOffsets() {
return vec2(0.0, 1.0);
}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {
vec2 halfSize = elementSize * 0.5;
vec2 p = localPos - halfSize;return vec3(0.8156862745098039, 0.8156862745098039, 0.8156862745098039);
}float sdBox(vec2 p, vec2 b) {
vec2 d = abs(p) - b;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}float sdEllipse(vec2 p, vec2 ab) {
vec2 q = p / ab;
return (length(q) - 1.0) * min(ab.x, ab.y);
}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {
vec2 p = vec2(0.0);
vec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;
vec2 rel = canvasPosPx - centerPx;
vec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;
p = local - elementSizePx * 0.5;
halfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));
return sdBox(p, halfSize);
}vec4 sampleShape(vec2 canvasUV) {
vec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 160.0000;
float absHeight = 160.0000;
vec2 elementSizePx = vec2(absWidth, absHeight);
vec2 elementPosPx = vec2(0.3799, 0.6600) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);
float aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);
float uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));
float seamFactor = smoothstep(0.01, 0.03, uvGrad);
aa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);
fillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);
vec2 localPos;
localPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;
vec2 localSize;
localSize = elementSizePx;vec2 centerPx;
centerPx = elementPosPx + elementSizePx * 0.5;
float centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);
float maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;
vec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;
vec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);
vec4 col = stroke + fill * (1.0 - stroke.a);
return col;
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 getCompositeOutput(vec2 uv) {
vec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 pos = (uMousePos - 0.5) * 0.0000;uv -= pos;fragColor = getCompositeOutput(uv);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}vec2 getAnchorOffsets() {
return vec2(1.0, 1.0);
}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {
vec2 halfSize = elementSize * 0.5;
vec2 p = localPos - halfSize;return vec3(0.8156862745098039, 0.8156862745098039, 0.8156862745098039);
}float sdBox(vec2 p, vec2 b) {
vec2 d = abs(p) - b;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}float sdEllipse(vec2 p, vec2 ab) {
vec2 q = p / ab;
return (length(q) - 1.0) * min(ab.x, ab.y);
}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {
vec2 p = vec2(0.0);
vec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;
vec2 rel = canvasPosPx - centerPx;
vec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;
p = local - elementSizePx * 0.5;
halfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));
return sdBox(p, halfSize);
}vec4 sampleShape(vec2 canvasUV) {
vec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 160.0000;
float absHeight = 160.0000;
vec2 elementSizePx = vec2(absWidth, absHeight);
vec2 elementPosPx = vec2(0.6200, 0.6600) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);
float aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);
float uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));
float seamFactor = smoothstep(0.01, 0.03, uvGrad);
aa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);
fillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);
vec2 localPos;
localPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;
vec2 localSize;
localSize = elementSizePx;vec2 centerPx;
centerPx = elementPosPx + elementSizePx * 0.5;
float centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);
float maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;
vec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;
vec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);
vec4 col = stroke + fill * (1.0 - stroke.a);
return col;
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 getCompositeOutput(vec2 uv) {
vec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 pos = (uMousePos - 0.5) * 0.0000;uv -= pos;fragColor = getCompositeOutput(uv);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}vec2 getAnchorOffsets() {
return vec2(1.0, 0.5);
}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {
vec2 halfSize = elementSize * 0.5;
vec2 p = localPos - halfSize;return vec3(0.8156862745098039, 0.8156862745098039, 0.8156862745098039);
}float sdBox(vec2 p, vec2 b) {
vec2 d = abs(p) - b;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}float sdEllipse(vec2 p, vec2 ab) {
vec2 q = p / ab;
return (length(q) - 1.0) * min(ab.x, ab.y);
}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {
vec2 p = vec2(0.0);
vec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;
vec2 rel = canvasPosPx - centerPx;
vec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;
p = local - elementSizePx * 0.5;
halfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));
return sdBox(p, halfSize);
}vec4 sampleShape(vec2 canvasUV) {
vec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 160.0000;
float absHeight = 160.0000;
vec2 elementSizePx = vec2(absWidth, absHeight);
vec2 elementPosPx = vec2(0.7400, 0.4997) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);
float aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);
float uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));
float seamFactor = smoothstep(0.01, 0.03, uvGrad);
aa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);
fillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);
vec2 localPos;
localPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;
vec2 localSize;
localSize = elementSizePx;vec2 centerPx;
centerPx = elementPosPx + elementSizePx * 0.5;
float centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);
float maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;
vec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;
vec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);
vec4 col = stroke + fill * (1.0 - stroke.a);
return col;
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 getCompositeOutput(vec2 uv) {
vec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 pos = (uMousePos - 0.5) * 0.0000;uv -= pos;fragColor = getCompositeOutput(uv);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}vec2 getAnchorOffsets() {
return vec2(1.0, 0.0);
}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {
vec2 halfSize = elementSize * 0.5;
vec2 p = localPos - halfSize;return vec3(0.8156862745098039, 0.8156862745098039, 0.8156862745098039);
}float sdBox(vec2 p, vec2 b) {
vec2 d = abs(p) - b;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}float sdEllipse(vec2 p, vec2 ab) {
vec2 q = p / ab;
return (length(q) - 1.0) * min(ab.x, ab.y);
}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {
vec2 p = vec2(0.0);
vec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;
vec2 rel = canvasPosPx - centerPx;
vec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;
p = local - elementSizePx * 0.5;
halfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));
return sdBox(p, halfSize);
}vec4 sampleShape(vec2 canvasUV) {
vec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 160.0000;
float absHeight = 160.0000;
vec2 elementSizePx = vec2(absWidth, absHeight);
vec2 elementPosPx = vec2(0.6200, 0.3400) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);
float aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);
float uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));
float seamFactor = smoothstep(0.01, 0.03, uvGrad);
aa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);
fillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);
vec2 localPos;
localPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;
vec2 localSize;
localSize = elementSizePx;vec2 centerPx;
centerPx = elementPosPx + elementSizePx * 0.5;
float centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);
float maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;
vec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;
vec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);
vec4 col = stroke + fill * (1.0 - stroke.a);
return col;
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 getCompositeOutput(vec2 uv) {
vec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 pos = (uMousePos - 0.5) * 0.0000;uv -= pos;fragColor = getCompositeOutput(uv);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform vec2 uArtboardResolution;uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec2 rotate2D(vec2 p, float angle) {
float s = sin(angle);
float c = cos(angle);
return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}vec2 getAnchorOffsets() {
return vec2(0.0, 0.0);
}vec3 getFillColor(vec2 localPos, vec2 elementSize, float signedDist, float maxInset) {
vec2 halfSize = elementSize * 0.5;
vec2 p = localPos - halfSize;return vec3(0.8156862745098039, 0.8156862745098039, 0.8156862745098039);
}float sdBox(vec2 p, vec2 b) {
vec2 d = abs(p) - b;
return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}float sdEllipse(vec2 p, vec2 ab) {
vec2 q = p / ab;
return (length(q) - 1.0) * min(ab.x, ab.y);
}float sdShape(vec2 canvasPosPx, vec2 elementPosPx, vec2 elementSizePx, float rotationTurns) {
vec2 p = vec2(0.0);
vec2 halfSize = vec2(0.0);elementSizePx = abs(elementSizePx);vec2 centerPx = elementPosPx + elementSizePx * 0.5;
vec2 rel = canvasPosPx - centerPx;
vec2 local = rotate2D(rel, -rotationTurns * TAU) + elementSizePx * 0.5;
p = local - elementSizePx * 0.5;
halfSize = elementSizePx * 0.5;return sdEllipse(p, vec2(max(halfSize.x, 0.00001), max(halfSize.y, 0.00001)));
return sdBox(p, halfSize);
}vec4 sampleShape(vec2 canvasUV) {
vec2 canvasPosPx = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);float absWidth = 160.0000;
float absHeight = 160.0000;
vec2 elementSizePx = vec2(absWidth, absHeight);
vec2 elementPosPx = vec2(0.3800, 0.3400) * uArtboardResolution - getAnchorOffsets() * elementSizePx;float dist = sdShape(canvasPosPx, elementPosPx, elementSizePx, 0.0000);
float aa = max(length(vec2(dFdx(dist), dFdy(dist))), 0.75);
float uvGrad = max(length(dFdx(canvasUV)), length(dFdy(canvasUV)));
float seamFactor = smoothstep(0.01, 0.03, uvGrad);
aa = mix(aa, 0.75, seamFactor);float fillAlpha = 1.0 - smoothstep(mix(0.0, -150., 0.0000), mix(aa, 150., 0.0000), dist);
fillAlpha = mix(fillAlpha, step(dist, 0.0), seamFactor);
vec2 localPos;
localPos = rotate2D(canvasPosPx - (elementPosPx + elementSizePx * 0.5), 0.0000 * -TAU) + elementSizePx * 0.5;
vec2 localSize;
localSize = elementSizePx;vec2 centerPx;
centerPx = elementPosPx + elementSizePx * 0.5;
float centerDist = sdShape(centerPx, elementPosPx, elementSizePx, 0.0000);
float maxInset = max(-centerDist, 0.00001);vec3 fillRgb = getFillColor(localPos, localSize, dist, maxInset);float finalFillAlpha = fillAlpha * 1.0000;
vec4 fill = vec4(fillRgb * finalFillAlpha, finalFillAlpha);float strokeAlpha = 0.0;
vec4 stroke = vec4(vec3(0, 0, 0) * strokeAlpha, strokeAlpha);
vec4 col = stroke + fill * (1.0 - stroke.a);
return col;
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 getCompositeOutput(vec2 uv) {
vec4 background = vec4(0.0);background = texture(uBgTexture, vTextureCoord);vec4 color = sampleShape(uv);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 pos = (uMousePos - 0.5) * 0.0000;uv -= pos;fragColor = getCompositeOutput(uv);
}`],_n=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform vec2 uMousePos;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
float angleX = uMousePos.y * 0.5 - 0.25;
float angleY = (1.-uMousePos.x) * 0.5 - 0.25;mat4 rotateX = mat4(1.0, 0.0, 0.0, 0.0,
0.0, cos(angleX), -sin(angleX), 0.0,
0.0, sin(angleX), cos(angleX), 0.0,
0.0, 0.0, 0.0, 1.0);
mat4 rotateY = mat4(cos(angleY), 0.0, sin(angleY), 0.0,
0.0, 1.0, 0.0, 0.0,
-sin(angleY), 0.0, cos(angleY), 0.0,
0.0, 0.0, 0.0, 1.0);mat4 rotationMatrix = rotateX * rotateY;
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vVertexPosition = (rotationMatrix * vec4(aVertexPosition, 1.0)).xyz;
vTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,On=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform sampler2D uTexture;
uniform sampler2D uPingPongTexture;uniform sampler2D uMaskTexture;
uniform int uIsMask;
uniform vec2 uMousePos;
uniform float uParentTrackMouse;vec3 blend (int blendMode, vec3 src, vec3 dst) {if(blendMode == 0) {
return src;
}if(blendMode == 1) {
return src + dst;
}if(blendMode == 2) {
return src - dst;
}if(blendMode == 3) {
return src * dst;
}if(blendMode == 4) {
return 1. - (1. - src) * (1. - dst);
}if(blendMode == 5) {
return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}if(blendMode == 6) {
return min(src, dst);
}if(blendMode == 7) {
return max(src, dst);
}if(blendMode == 8) {
return vec3((src.x == 1.0) ? 1.0 : min(1.0, dst.x / (1.0 - src.x)), (src.y == 1.0) ? 1.0 : min(1.0, dst.y / (1.0 - src.y)), (src.z == 1.0) ? 1.0 : min(1.0, dst.z / (1.0 - src.z)));
}if(blendMode == 9) {
return vec3((src.x == 0.0) ? 0.0 : (1.0 - ((1.0 - dst.x) / src.x)), (src.y == 0.0) ? 0.0 : (1.0 - ((1.0 - dst.y) / src.y)), (src.z == 0.0) ? 0.0 : (1.0 - ((1.0 - dst.z) / src.z)));
}if(blendMode == 10) {
return (src + dst) - 1.0;
}if(blendMode == 11) {
return vec3((src.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - src.x) * (1.0 - dst.x)), (src.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - src.y) * (1.0 - dst.y)), (src.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - src.z) * (1.0 - dst.z)));
}if(blendMode == 12) {
return vec3((src.x <= 0.5) ? (dst.x - (1.0 - 2.0 * src.x) * dst.x * (1.0 - dst.x)) : (((src.x > 0.5) && (dst.x <= 0.25)) ? (dst.x + (2.0 * src.x - 1.0) * (4.0 * dst.x * (4.0 * dst.x + 1.0) * (dst.x - 1.0) + 7.0 * dst.x)) : (dst.x + (2.0 * src.x - 1.0) * (sqrt(dst.x) - dst.x))), (src.y <= 0.5) ? (dst.y - (1.0 - 2.0 * src.y) * dst.y * (1.0 - dst.y)) : (((src.y > 0.5) && (dst.y <= 0.25)) ? (dst.y + (2.0 * src.y - 1.0) * (4.0 * dst.y * (4.0 * dst.y + 1.0) * (dst.y - 1.0) + 7.0 * dst.y)) : (dst.y + (2.0 * src.y - 1.0) * (sqrt(dst.y) - dst.y))), (src.z <= 0.5) ? (dst.z - (1.0 - 2.0 * src.z) * dst.z * (1.0 - dst.z)) : (((src.z > 0.5) && (dst.z <= 0.25)) ? (dst.z + (2.0 * src.z - 1.0) * (4.0 * dst.z * (4.0 * dst.z + 1.0) * (dst.z - 1.0) + 7.0 * dst.z)) : (dst.z + (2.0 * src.z - 1.0) * (sqrt(dst.z) - dst.z))));
}if(blendMode == 13) {
return abs(dst - src);
}if(blendMode == 14) {
return src + dst - 2.0 * src * dst;
}if(blendMode == 15) {
return 2.0 * src + dst - 1.0;
}if(blendMode == 16) {
return vec3((src.x > 0.5) ? max(dst.x, 2.0 * (src.x - 0.5)) : min(dst.x, 2.0 * src.x), (src.y > 0.5) ? max(dst.y, 2.0 * (src.y - 0.5)) : min(dst.y, 2.0 * src.y), (src.z > 0.5) ? max(dst.z, 2.0 * (src.z - 0.5)) : min(dst.z, 2.0 * src.z));
}if(blendMode == 17) {
return vec3((src.x <= 0.5) ? (1.0 - (1.0 - dst.x) / max(2.0 * src.x, 0.0001)) : (dst.x / max(2.0 * (1.0 - src.x), 0.0001)), (src.y <= 0.5) ? (1.0 - (1.0 - dst.y) / max(2.0 * src.y, 0.0001)) : (dst.y / max(2.0 * (1.0 - src.y), 0.0001)), (src.z <= 0.5) ? (1.0 - (1.0 - dst.z) / max(2.0 * src.z, 0.0001)) : (dst.z / max(2.0 * (1.0 - src.z), 0.0001)));
}}uvec2 pcg2d(uvec2 v) {
v = v * 1664525u + 1013904223u;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
v ^= v >> 16;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
return v;
}float randFibo(vec2 p) {
uvec2 v = floatBitsToUint(p);
v = pcg2d(v);
uint r = v.x ^ v.y;
return float(r) / float(0xffffffffu);
}float deband() {
return (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;
}const float PI = 3.14159265359;out vec4 fragColor;vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}vec2 angleToDir(float angle) {
float rad = angle * 2.0 * PI;
return vec2(cos(rad), sin(rad));
}void main() {
vec2 uv = vTextureCoord;
vec2 pingpongUv = uv;vec3 mouseRgb = texture(uPingPongTexture, pingpongUv).rgb;
vec3 mouseTrail = rgb2hsv(mouseRgb);
float angle = mouseTrail.x;
float strength = mouseTrail.z * 0.6800 * 5.0;vec2 direction = angleToDir(angle);vec4 bg = texture(uTexture, uv - direction * 0.1 * strength * 0.0000);
vec4 color = vec4(0,0,0,1);float dither = deband();
color.rgb = vec3(strength * mix(mouseRgb, vec3(1, 1, 1), 1.0000)) + dither;vec3 blendedRgb = blend(1, color.rgb, bg.rgb);
color = vec4(mix(bg.rgb, blendedRgb, mouseTrail.z), 1.0);if(uIsMask == 1) {
vec2 maskPos = mix(vec2(0), (uMousePos - 0.5), uParentTrackMouse);
vec4 maskColor = texture(uMaskTexture, vTextureCoord - maskPos);
color = color * (maskColor.a * maskColor.a);
}fragColor = color;}`,Vn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uPingPongTexture;
uniform vec2 uPreviousMousePos;
uniform float uTime;uniform vec2 uMousePos;
uniform vec2 uResolution;const float PI = 3.14159265359;
const float TAU = 6.28318530718;out vec4 fragColor;vec3 toLinear(vec3 c) { return c * c; }
vec3 toGamma(vec3 c) { return sqrt(c); }vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}mat2 rot(float a) {
float s = sin(a), c = cos(a);
return mat2(c, -s, s, c);
}vec2 angleToDir(float angle) {
float rad = angle * 2.0 * PI;
return vec2(cos(rad), sin(rad));
}vec2 liquify(vec2 st, vec2 dir, float aspectRatio) {
st.x *= aspectRatio;
float amplitude = 0.004;
float freq = 6.;
for (float i = 1.0; i <= 3.0; i++) {
st = st * rot(i / 3.0 * PI * 2.0);
st += vec2(
amplitude * cos(i * freq * st.y + uTime * 0.02 * dir.x),
amplitude * sin(i * freq * st.x + uTime * 0.02 * dir.y)
);
}
st.x /= aspectRatio;
return st;
}float trailIntensity(vec2 segStart, vec2 correctedUv, vec2 scaledDir, float segLen, float aspectRatio, float radius, float bloomExp) {
vec2 posToUv = (correctedUv - segStart) * vec2(aspectRatio, 1.0);
float projection = clamp(dot(posToUv, scaledDir), 0.0, segLen);
vec2 closestPoint = segStart * vec2(aspectRatio, 1.0) + scaledDir * projection;float distToLine = length(correctedUv - closestPoint);
float s = (1.0 + radius) / (distToLine + radius) * radius;return s;
}float minDistToCircles(vec2 pos, float aspectRatio) {
vec2 scale = vec2(aspectRatio, 1.0);
vec2 p = pos * scale;
float d = distance(p, vec2(0.30167, 0.50) * scale);
d = min(d, distance(p, vec2(0.42167, 0.61833) * scale));
d = min(d, distance(p, vec2(0.57833, 0.61833) * scale));
d = min(d, distance(p, vec2(0.69833, 0.50) * scale));
d = min(d, distance(p, vec2(0.57833, 0.38167) * scale));
d = min(d, distance(p, vec2(0.42167, 0.38167) * scale));
return d;
}void main() {
float aspectRatio = uResolution.x / uResolution.y;
vec2 uv = vTextureCoord;
vec2 correctedUv = uv * vec2(aspectRatio, 1.0);vec3 lastFrameColor = texture(uPingPongTexture, uv).rgb;vec3 hsv = rgb2hsv(lastFrameColor);
float prevStrength = hsv.z * hsv.z;
vec2 prevDir = angleToDir(hsv.x);vec2 activeMousePos = uMousePos;
vec2 activePrevMousePos = uPreviousMousePos;vec2 mouseVec = activeMousePos - activePrevMousePos;
float mouseLen = length(mouseVec);
vec2 dir = mouseVec * vec2(aspectRatio, 1.0);
float dist = length(dir);float blurAmount = 0.03 * prevStrength;
uv = uv - prevDir * blurAmount;if(prevStrength > 0.0) {
uv = mix(uv, liquify(uv - prevDir * 0.005, prevDir, aspectRatio), (1.0 - prevStrength) * 0.2500);
}lastFrameColor = toLinear(texture(uPingPongTexture, uv).rgb);float clampedDist = 0.0;
vec3 trailColor = vec3(0.0);float interactionMask = 1.0;
float uvZoneMask = 1.0;
float interactionRadius = 0.4000 * 0.5;
float dCircles = minDistToCircles(activeMousePos, aspectRatio);
interactionMask = 1.0 - smoothstep(interactionRadius * 0.4, max(interactionRadius, 0.001), dCircles);
float dCirclesUv = minDistToCircles(uv, aspectRatio);
uvZoneMask = 1.0 - smoothstep(interactionRadius * 0.4, max(interactionRadius, 0.001), dCirclesUv);if (dist > 0.001 && interactionMask > 0.001) {
vec2 normDir = mouseVec / mouseLen;
vec2 scaledDir = normDir * vec2(aspectRatio, 1.0);float angle = atan(dir.y, dir.x);
if (angle < 0.0) angle += TAU;
vec3 pointColor = toLinear(hsv2rgb(vec3(angle / TAU, 1.0, 1.0)));
float bloomExp = abs(10.0 * (1.0 - 0.6300 + 0.1));int numPoints = int(max(6.0, dist * 24.0));
float speedFactor = clamp(dist, 0.7, 1.3);
float radius = mix(0.1, 0.7, 0.2800 * speedFactor);float segLenAspect = mouseLen * aspectRatio / float(numPoints);
float totalIntensity = 0.0;
int iter = min(numPoints, 16);totalIntensity += trailIntensity(activePrevMousePos, correctedUv, scaledDir, 0.0, aspectRatio, radius, bloomExp);for (int i = 1; i <= iter; i++) {
float t = float(i - 1) / float(numPoints);
vec2 segStart = mix(activePrevMousePos, activeMousePos, t);
totalIntensity += trailIntensity(segStart, correctedUv, scaledDir, segLenAspect, aspectRatio, radius, bloomExp);
}trailColor = pointColor * totalIntensity / float(min(numPoints, 50) + 1);
trailColor = pow(trailColor, vec3(bloomExp)) * uvZoneMask;
clampedDist = clamp(length(trailColor) * dist, 0.0, 1.0) * interactionMask * uvZoneMask;
}float blurRadius = 0.005;vec3 blurredLastFrame = lastFrameColor * 0.2;
blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(blurRadius, 0.0)).rgb) * 0.2;
blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(-blurRadius, 0.0)).rgb) * 0.2;
blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(0.0, blurRadius)).rgb) * 0.2;
blurredLastFrame += toLinear(texture(uPingPongTexture, uv + vec2(0.0, -blurRadius)).rgb) * 0.2;blurredLastFrame *= pow(abs(0.7500), 0.2);
vec3 draw = mix(blurredLastFrame, trailColor, clampedDist);
draw = toGamma(draw);
draw = max(draw - 0.01, vec3(0.0));fragColor = vec4(draw, 1.0);
}`,Bn=[`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;
float ease (int easingFunc, float t) {
return t;
}out vec4 fragColor;const int kernelSize = 36;
float getGaussianWeight(int index) {
switch(index) {
case 0: return 0.00094768;
case 1: return 0.00151965;
case 2: return 0.00237008;
case 3: return 0.00359517;
case 4: return 0.0053041;
case 5: return 0.00761097;
case 6: return 0.01062197;
case 7: return 0.01441804;
case 8: return 0.01903459;
case 9: return 0.0244409;
case 10: return 0.03052299;
case 11: return 0.03707432;
case 12: return 0.04379813;
case 13: return 0.05032389;
case 14: return 0.05623791;
case 15: return 0.06112521;
case 16: return 0.06461716;
case 17: return 0.06643724;
case 18: return 0.06643724;
case 19: return 0.06461716;
case 20: return 0.06112521;
case 21: return 0.05623791;
case 22: return 0.05032389;
case 23: return 0.04379813;
case 24: return 0.03707432;
case 25: return 0.03052299;
case 26: return 0.0244409;
case 27: return 0.01903459;
case 28: return 0.01441804;
case 29: return 0.01062197;
case 30: return 0.00761097;
case 31: return 0.0053041;
case 32: return 0.00359517;
case 33: return 0.00237008;
case 34: return 0.00151965;
case 35: return 0.00094768;
default: return 0.0;
}
}vec4 GaussianBlur(sampler2D tex, vec2 uv, vec2 direction) {
vec4 color = vec4(0.0);
vec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);
float inner = distance(uv, pos);
float outer = max(0., 1.-distance(uv, pos));float amt = 0 <= 1 ? 6. : 11.;
float amount = (0.2800 * amt) * ease(0, mix(inner, outer, 0.5000));
color += texture(tex, uv) * getGaussianWeight(0);
for (int i = 0; i < kernelSize; i++) {
float x = float(i - kernelSize / 2) * amount;
color += texture(tex, uv + vec2(x * 0.001) * direction * vec2(0.5000, 1. - 0.5000)) * getGaussianWeight(i);
}
return color;
}vec4 blur(vec2 uv, vec2 direction) {
return GaussianBlur(uTexture, uv, direction);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = vec4(0);
int dir = 0 % 2;
vec2 direction = dir == 1 ? vec2(0, uResolution.x/uResolution.y) : vec2(1, 0);color = blur(uv, direction);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;
float ease (int easingFunc, float t) {
return t;
}out vec4 fragColor;const int kernelSize = 36;
float getGaussianWeight(int index) {
switch(index) {
case 0: return 0.00094768;
case 1: return 0.00151965;
case 2: return 0.00237008;
case 3: return 0.00359517;
case 4: return 0.0053041;
case 5: return 0.00761097;
case 6: return 0.01062197;
case 7: return 0.01441804;
case 8: return 0.01903459;
case 9: return 0.0244409;
case 10: return 0.03052299;
case 11: return 0.03707432;
case 12: return 0.04379813;
case 13: return 0.05032389;
case 14: return 0.05623791;
case 15: return 0.06112521;
case 16: return 0.06461716;
case 17: return 0.06643724;
case 18: return 0.06643724;
case 19: return 0.06461716;
case 20: return 0.06112521;
case 21: return 0.05623791;
case 22: return 0.05032389;
case 23: return 0.04379813;
case 24: return 0.03707432;
case 25: return 0.03052299;
case 26: return 0.0244409;
case 27: return 0.01903459;
case 28: return 0.01441804;
case 29: return 0.01062197;
case 30: return 0.00761097;
case 31: return 0.0053041;
case 32: return 0.00359517;
case 33: return 0.00237008;
case 34: return 0.00151965;
case 35: return 0.00094768;
default: return 0.0;
}
}vec4 GaussianBlur(sampler2D tex, vec2 uv, vec2 direction) {
vec4 color = vec4(0.0);
vec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);
float inner = distance(uv, pos);
float outer = max(0., 1.-distance(uv, pos));float amt = 1 <= 1 ? 6. : 11.;
float amount = (0.2800 * amt) * ease(0, mix(inner, outer, 0.5000));
color += texture(tex, uv) * getGaussianWeight(0);
for (int i = 0; i < kernelSize; i++) {
float x = float(i - kernelSize / 2) * amount;
color += texture(tex, uv + vec2(x * 0.001) * direction * vec2(0.5000, 1. - 0.5000)) * getGaussianWeight(i);
}
return color;
}vec4 blur(vec2 uv, vec2 direction) {
return GaussianBlur(uTexture, uv, direction);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = vec4(0);
int dir = 1 % 2;
vec2 direction = dir == 1 ? vec2(0, uResolution.x/uResolution.y) : vec2(1, 0);color = blur(uv, direction);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;
float ease (int easingFunc, float t) {
return t;
}out vec4 fragColor;const int kernelSize = 36;
float getGaussianWeight(int index) {
switch(index) {
case 0: return 0.00094768;
case 1: return 0.00151965;
case 2: return 0.00237008;
case 3: return 0.00359517;
case 4: return 0.0053041;
case 5: return 0.00761097;
case 6: return 0.01062197;
case 7: return 0.01441804;
case 8: return 0.01903459;
case 9: return 0.0244409;
case 10: return 0.03052299;
case 11: return 0.03707432;
case 12: return 0.04379813;
case 13: return 0.05032389;
case 14: return 0.05623791;
case 15: return 0.06112521;
case 16: return 0.06461716;
case 17: return 0.06643724;
case 18: return 0.06643724;
case 19: return 0.06461716;
case 20: return 0.06112521;
case 21: return 0.05623791;
case 22: return 0.05032389;
case 23: return 0.04379813;
case 24: return 0.03707432;
case 25: return 0.03052299;
case 26: return 0.0244409;
case 27: return 0.01903459;
case 28: return 0.01441804;
case 29: return 0.01062197;
case 30: return 0.00761097;
case 31: return 0.0053041;
case 32: return 0.00359517;
case 33: return 0.00237008;
case 34: return 0.00151965;
case 35: return 0.00094768;
default: return 0.0;
}
}vec4 GaussianBlur(sampler2D tex, vec2 uv, vec2 direction) {
vec4 color = vec4(0.0);
vec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);
float inner = distance(uv, pos);
float outer = max(0., 1.-distance(uv, pos));float amt = 2 <= 1 ? 6. : 11.;
float amount = (0.2800 * amt) * ease(0, mix(inner, outer, 0.5000));
color += texture(tex, uv) * getGaussianWeight(0);
for (int i = 0; i < kernelSize; i++) {
float x = float(i - kernelSize / 2) * amount;
color += texture(tex, uv + vec2(x * 0.001) * direction * vec2(0.5000, 1. - 0.5000)) * getGaussianWeight(i);
}
return color;
}vec4 blur(vec2 uv, vec2 direction) {
return GaussianBlur(uTexture, uv, direction);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = vec4(0);
int dir = 2 % 2;
vec2 direction = dir == 1 ? vec2(0, uResolution.x/uResolution.y) : vec2(1, 0);color = blur(uv, direction);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;
float ease (int easingFunc, float t) {
return t;
}
uvec2 pcg2d(uvec2 v) {
v = v * 1664525u + 1013904223u;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
v ^= v >> 16;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
return v;
}float randFibo(vec2 p) {
uvec2 v = floatBitsToUint(p);
v = pcg2d(v);
uint r = v.x ^ v.y;
return float(r) / float(0xffffffffu);
}
float deband() {
return (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;
}out vec4 fragColor;const int kernelSize = 36;
float getGaussianWeight(int index) {
switch(index) {
case 0: return 0.00094768;
case 1: return 0.00151965;
case 2: return 0.00237008;
case 3: return 0.00359517;
case 4: return 0.0053041;
case 5: return 0.00761097;
case 6: return 0.01062197;
case 7: return 0.01441804;
case 8: return 0.01903459;
case 9: return 0.0244409;
case 10: return 0.03052299;
case 11: return 0.03707432;
case 12: return 0.04379813;
case 13: return 0.05032389;
case 14: return 0.05623791;
case 15: return 0.06112521;
case 16: return 0.06461716;
case 17: return 0.06643724;
case 18: return 0.06643724;
case 19: return 0.06461716;
case 20: return 0.06112521;
case 21: return 0.05623791;
case 22: return 0.05032389;
case 23: return 0.04379813;
case 24: return 0.03707432;
case 25: return 0.03052299;
case 26: return 0.0244409;
case 27: return 0.01903459;
case 28: return 0.01441804;
case 29: return 0.01062197;
case 30: return 0.00761097;
case 31: return 0.0053041;
case 32: return 0.00359517;
case 33: return 0.00237008;
case 34: return 0.00151965;
case 35: return 0.00094768;
default: return 0.0;
}
}vec4 GaussianBlur(sampler2D tex, vec2 uv, vec2 direction) {
vec4 color = vec4(0.0);
vec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);
float inner = distance(uv, pos);
float outer = max(0., 1.-distance(uv, pos));float amt = 3 <= 1 ? 6. : 11.;
float amount = (0.2800 * amt) * ease(0, mix(inner, outer, 0.5000));
color += texture(tex, uv) * getGaussianWeight(0);
for (int i = 0; i < kernelSize; i++) {
float x = float(i - kernelSize / 2) * amount;
color += texture(tex, uv + vec2(x * 0.001) * direction * vec2(0.5000, 1. - 0.5000)) * getGaussianWeight(i);
}
return color;
}vec4 blur(vec2 uv, vec2 direction) {
return GaussianBlur(uTexture, uv, direction);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = vec4(0);
int dir = 3 % 2;
vec2 direction = dir == 1 ? vec2(0, uResolution.x/uResolution.y) : vec2(1, 0);color = blur(uv, direction);float dither = deband();
color.rgb += dither;
fragColor = color;}`],qn=[`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;out vec4 fragColor;const float TAU = 6.28318530718;float luma(vec4 color) {
return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}vec4 thresholdPass(vec4 color) {
color.rgb = pow(color.rgb, vec3(1.0/2.2));
color.rgb = 1.2 * (color.rgb - 0.5) + 0.5;
vec4 bloom = color * smoothstep(1.0000 - 0.1, 1.0000, luma(color));
return vec4(bloom.rgb, color.a);
}vec4 getColor(vec4 color) {
return thresholdPass(color);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);
fragColor = getColor(color);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;out vec4 fragColor;const float TAU = 6.28318530718;float getExponentialWeight(int index) {
switch(index) {
case 0: return 1.0000000000;
case 1: return 0.7165313106;
case 2: return 0.5134171190;
case 3: return 0.3678794412;
case 4: return 0.2636050919;
case 5: return 0.1888756057;
case 6: return 0.1353352832;
case 7: return 0.0969670595;
case 8: return 0.0694877157;
default: return 0.0;
}
}vec4 blur(vec2 uv, bool vertical, float radius, bool diamond) {
vec4 color = vec4(0.0);
float total_weight = 0.0;
float aspectRatio = uResolution.x/uResolution.y;vec2 dir;
if (diamond) {
dir = vertical ? vec2(1, 1) : vec2(1, -1);
} else {
dir = vertical ? vec2(0, 1) : vec2(1, 0);
}
dir *= vec2(0.5000, 1. - 0.5000);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.5660;
for (int i = 1; i <= 8; i++) {
float weight = getExponentialWeight(i);
float offset = mix(0.015, 0.025, radius) * float(i)/8.;
vec4 sample1 = texture(uTexture, uv + offset * dir);
vec4 sample2 = texture(uTexture, uv - offset * dir);
color += (sample1 + sample2) * weight;
total_weight += 2.0 * weight;
}return color / total_weight;
}vec4 blurPass(vec2 uv, bool vertical, float radius, float intensity, bool diamond) {
return blur(uv, vertical, radius, diamond);
}vec4 getColor(vec4 color) {
return blurPass(vTextureCoord, false, 30., 1.25, true);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);
fragColor = getColor(color);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform sampler2D uBgTexture;uniform vec2 uResolution;out vec4 fragColor;const float TAU = 6.28318530718;float luma(vec4 color) {
return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}float getExponentialWeight(int index) {
switch(index) {
case 0: return 1.0000000000;
case 1: return 0.7165313106;
case 2: return 0.5134171190;
case 3: return 0.3678794412;
case 4: return 0.2636050919;
case 5: return 0.1888756057;
case 6: return 0.1353352832;
case 7: return 0.0969670595;
case 8: return 0.0694877157;
default: return 0.0;
}
}vec4 blur(vec2 uv, bool vertical, float radius, bool diamond) {
vec4 color = vec4(0.0);
float total_weight = 0.0;
float aspectRatio = uResolution.x/uResolution.y;vec2 dir;
if (diamond) {
dir = vertical ? vec2(1, 1) : vec2(1, -1);
} else {
dir = vertical ? vec2(0, 1) : vec2(1, 0);
}
dir *= vec2(0.5000, 1. - 0.5000);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.5660;
for (int i = 1; i <= 8; i++) {
float weight = getExponentialWeight(i);
float offset = mix(0.015, 0.025, radius) * float(i)/8.;
vec4 sample1 = texture(uTexture, uv + offset * dir);
vec4 sample2 = texture(uTexture, uv - offset * dir);
color += (sample1 + sample2) * weight;
total_weight += 2.0 * weight;
}return color / total_weight;
}vec4 thresholdPass(vec4 color) {
color.rgb = pow(color.rgb, vec3(1.0/2.2));
color.rgb = 1.2 * (color.rgb - 0.5) + 0.5;
vec4 bloom = color * smoothstep(1.0000 - 0.1, 1.0000, luma(color));
return vec4(bloom.rgb, color.a);
}vec4 blurCombinePass(vec2 uv, bool vertical, float radius, float intensity, bool diamond) {
vec4 blurred = blur(uv, vertical, radius, diamond);
return (thresholdPass(texture(uBgTexture, uv)) * 0.25 + blurred * intensity);
}vec4 getColor(vec4 color) {
return blurCombinePass(vTextureCoord, true, 30., 1.25, true);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);
fragColor = getColor(color);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;out vec4 fragColor;const float TAU = 6.28318530718;float getExponentialWeight(int index) {
switch(index) {
case 0: return 1.0000000000;
case 1: return 0.7165313106;
case 2: return 0.5134171190;
case 3: return 0.3678794412;
case 4: return 0.2636050919;
case 5: return 0.1888756057;
case 6: return 0.1353352832;
case 7: return 0.0969670595;
case 8: return 0.0694877157;
default: return 0.0;
}
}vec4 blur(vec2 uv, bool vertical, float radius, bool diamond) {
vec4 color = vec4(0.0);
float total_weight = 0.0;
float aspectRatio = uResolution.x/uResolution.y;vec2 dir;
if (diamond) {
dir = vertical ? vec2(1, 1) : vec2(1, -1);
} else {
dir = vertical ? vec2(0, 1) : vec2(1, 0);
}
dir *= vec2(0.5000, 1. - 0.5000);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.5660;
for (int i = 1; i <= 8; i++) {
float weight = getExponentialWeight(i);
float offset = mix(0.015, 0.025, radius) * float(i)/8.;
vec4 sample1 = texture(uTexture, uv + offset * dir);
vec4 sample2 = texture(uTexture, uv - offset * dir);
color += (sample1 + sample2) * weight;
total_weight += 2.0 * weight;
}return color / total_weight;
}vec4 blurPass(vec2 uv, bool vertical, float radius, float intensity, bool diamond) {
return blur(uv, vertical, radius, diamond);
}vec4 getColor(vec4 color) {
return blurPass(vTextureCoord, false, 10., 1., false);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);
fragColor = getColor(color);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;out vec4 fragColor;const float TAU = 6.28318530718;float getExponentialWeight(int index) {
switch(index) {
case 0: return 1.0000000000;
case 1: return 0.7165313106;
case 2: return 0.5134171190;
case 3: return 0.3678794412;
case 4: return 0.2636050919;
case 5: return 0.1888756057;
case 6: return 0.1353352832;
case 7: return 0.0969670595;
case 8: return 0.0694877157;
default: return 0.0;
}
}vec4 blur(vec2 uv, bool vertical, float radius, bool diamond) {
vec4 color = vec4(0.0);
float total_weight = 0.0;
float aspectRatio = uResolution.x/uResolution.y;vec2 dir;
if (diamond) {
dir = vertical ? vec2(1, 1) : vec2(1, -1);
} else {
dir = vertical ? vec2(0, 1) : vec2(1, 0);
}
dir *= vec2(0.5000, 1. - 0.5000);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.5660;
for (int i = 1; i <= 8; i++) {
float weight = getExponentialWeight(i);
float offset = mix(0.015, 0.025, radius) * float(i)/8.;
vec4 sample1 = texture(uTexture, uv + offset * dir);
vec4 sample2 = texture(uTexture, uv - offset * dir);
color += (sample1 + sample2) * weight;
total_weight += 2.0 * weight;
}return color / total_weight;
}vec4 blurPass(vec2 uv, bool vertical, float radius, float intensity, bool diamond) {
return blur(uv, vertical, radius, diamond);
}vec4 getColor(vec4 color) {
return blurPass(vTextureCoord, true, 10., 1., false);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);
fragColor = getColor(color);
}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform sampler2D uBgTexture;
uvec2 pcg2d(uvec2 v) {
v = v * 1664525u + 1013904223u;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
v ^= v >> 16;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
return v;
}float randFibo(vec2 p) {
uvec2 v = floatBitsToUint(p);
v = pcg2d(v);
uint r = v.x ^ v.y;
return float(r) / float(0xffffffffu);
}
float deband() {
return (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;
}out vec4 fragColor;const float TAU = 6.28318530718;float luma(vec4 color) {
return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}vec4 finalPass(vec4 bloomColor) {
float dither = deband();bloomColor.rgb *= vec3(1, 1, 1);
bloomColor.rgb += dither;
bloomColor.a = luma(bloomColor);
vec4 sceneColor = texture(uBgTexture, vTextureCoord);
vec4 finalColor = mix(sceneColor, sceneColor + bloomColor, 0.5000 * 1.9);
return finalColor;
}vec4 getColor(vec4 color) {
return finalPass(color);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);
fragColor = getColor(color);
}`],Gn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;uniform float uTime;vec3 getColor(int index) {
switch(index) {
case 0: return vec3(0, 0, 0);
case 1: return vec3(0.6235294117647059, 0.6235294117647059, 0.6235294117647059);
case 2: return vec3(0.16862745098039217, 0.16862745098039217, 0.16862745098039217);
case 3: return vec3(0.3333333333333333, 0.3333333333333333, 0.3333333333333333);
case 4: return vec3(0.8196078431372549, 0.8196078431372549, 0.8196078431372549);
default: return vec3(0.0);
}
}float getStop(int index) {
switch(index) {
case 0: return 0.3438;
case 1: return 0.4125;
case 2: return 0.5344;
case 3: return 0.6094;
case 4: return 0.6906;
default: return 0.0;
}
}uvec2 pcg2d(uvec2 v) {
v = v * 1664525u + 1013904223u;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
v ^= v >> 16;
v.x += v.y * v.y * 1664525u + 1013904223u;
v.y += v.x * v.x * 1664525u + 1013904223u;
return v;
}float randFibo(vec2 p) {
uvec2 v = floatBitsToUint(p);
v = pcg2d(v);
uint r = v.x ^ v.y;
return float(r) / float(0xffffffffu);
}float deband() {
return (randFibo(gl_FragCoord.xy) - 0.5) / 255.0;
}float luma(vec3 color) {
return dot(color, vec3(0.299, 0.587, 0.114));
}vec3 linear_from_srgb(vec3 rgb) {
return pow(max(rgb, vec3(0.0)), vec3(2.2));
}vec3 srgb_from_linear(vec3 lin) {
return pow(max(lin, vec3(0.0)), vec3(1.0/2.2));
}vec3 safeCbrt(vec3 v) {
return sign(v) * pow(abs(v), vec3(1.0/3.0));
}vec3 oklab_mix(vec3 lin1, vec3 lin2, float a) {
const mat3 kCONEtoLMS = mat3(
0.4121656120, 0.2118591070, 0.0883097947,
0.5362752080, 0.6807189584, 0.2818474174,
0.0514575653, 0.1074065790, 0.6302613616);
const mat3 kLMStoCONE = mat3(
4.0767245293, -1.2681437731, -0.0041119885,
-3.3072168827, 2.6093323231, -0.7034763098,
0.2307590544, -0.3411344290, 1.7068625689);
vec3 lms1 = safeCbrt(kCONEtoLMS*lin1);
vec3 lms2 = safeCbrt(kCONEtoLMS*lin2);
vec3 lms = mix(lms1, lms2, a);
lms *= 1.0 + 0.02 * a * (1.0 - a);
return kLMStoCONE*(lms*lms*lms);
}vec3 getGradientColor(float position) {
position = clamp(position, 0.0, 1.0);
int count = 5 - 1;
for (int i = 0; i < count; i++) {
float colorPosition = getStop(i);
float nextColorPosition = getStop(i + 1);
if (position <= nextColorPosition) {
float stopDelta = nextColorPosition - colorPosition;
float mixFactor = clamp(stopDelta > 0.0001 ? (position - colorPosition) / stopDelta : 0.0, 0.0, 1.0);
vec3 linStart = linear_from_srgb(getColor(i));
vec3 linEnd = linear_from_srgb(getColor(i + 1));
vec3 mixedLin = oklab_mix(linStart, linEnd, mixFactor);
return srgb_from_linear(mixedLin);
}
}
return getColor(count);
}out vec4 fragColor;void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);if(color.a > 0.001) {
float position = smoothstep(0., 1., luma(color.rgb)) * (0.3100 * 2.);
float posOffset = (dot(vec2(0.5, 0.7).x, vec2(0.5, 0.7).y) + 0.0000 + 0.0001) * 2.;
position -= (uTime*0.01 + posOffset);
float cycle = floor(position);
bool reverse = 1.0000 > 0.5 && int(cycle) % 2 == 0;
float animatedPos = reverse ? fract(-position) : fract(position);
animatedPos = reverse ? fract(-position) : fract(position);
animatedPos = clamp(animatedPos, 0.0, 1.0);vec3 gradientColor = getGradientColor(animatedPos);
gradientColor += deband();vec3 mixedColor = mix(color.rgb, gradientColor, 1.0000);color.rgb = mixedColor;
}
fragColor = color;
;
}`;var Wt=60,$r=1.5,Kr=1,Wn=150,Nt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Nn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function l(k,q){let H=e.createShader(k);return e.shaderSource(H,q),e.compileShader(H),H}let c=[];function E(k,q=In){let H=e.createProgram(),ne=l(e.VERTEX_SHADER,q),re=l(e.FRAGMENT_SHADER,k);e.attachShader(H,ne),e.attachShader(H,re),e.bindAttribLocation(H,0,"aVertexPosition"),e.bindAttribLocation(H,1,"aTextureCoord"),e.linkProgram(H);let se={p:H,v:ne,f:re,loc:{}};return c.push(se),se}function x(k){let{p:q,v:H,f:ne}=k;e.getProgramParameter(q,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(q),e.getShaderInfoLog(H),e.getShaderInfoLog(ne));let re=e.getProgramParameter(q,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let Z=e.getActiveUniform(q,se);k.loc[Z.name]=e.getUniformLocation(q,Z.name)}e.deleteShader(H),e.deleteShader(ne)}let u={bg:E(Hn,At),shapes:Un.map(k=>E(k,_n)),trailSim:E(Vn,At),trail:E(On),blur:Bn.map(k=>E(k)),bloom:qn.map(k=>E(k)),gmap:E(Gn,At)},f=e.createVertexArray();e.bindVertexArray(f);let v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let m=[];function a(k,q,H=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),H&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,k,q,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,k,q,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:k,h:q};return m.push(se),se}function P(){m.forEach(k=>{e.deleteTexture(k.tex),e.deleteFramebuffer(k.fb)}),m.length=0}function y(k,q,H,ne){e.useProgram(k.p);let re=q?q.w:t.width,se=q?q.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,q?q.fb:null),e.viewport(0,0,re,se);let Z=k.loc;Z.uMVMatrix&&e.uniformMatrix4fv(Z.uMVMatrix,!1,Nt),Z.uPMatrix&&e.uniformMatrix4fv(Z.uPMatrix,!1,Nt),Z.uTextureMatrix&&e.uniformMatrix4fv(Z.uTextureMatrix,!1,Nt),Z.uResolution&&e.uniform2f(Z.uResolution,re,se),Z.uArtboardResolution&&e.uniform2f(Z.uArtboardResolution,1920,1920),Z.uAspectRatio&&e.uniform1f(Z.uAspectRatio,1),Z.uMousePos&&e.uniform2f(Z.uMousePos,A.x,A.y),Z.uIsMask&&e.uniform1i(Z.uIsMask,0),Z.uParentTrackMouse&&e.uniform1f(Z.uParentTrackMouse,0);let Pe=0;Object.keys(H).forEach(he=>{Z[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,H[he].tex),e.uniform1i(Z[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!Z[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(Z[he],be[0],be[1]):e.uniform1f(Z[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let A={x:.5,y:.5},D={x:.5,y:.5},W=0,C=null,F=0;function S(){P();let k=Math.min($r,window.devicePixelRatio||1),q=Math.max(1,Math.round(n.clientWidth*k)),H=Math.max(1,Math.round(n.clientHeight*k));t.width=q,t.height=H;let ne=Z=>[Math.max(1,Math.round(q*Z)),Math.max(1,Math.round(H*Z))];C={a:a(q,H),b:a(q,H),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(q,H),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(q,H)},y(u.bg,C.a,{});let re=C.a,se=C.b;u.shapes.forEach(Z=>{y(Z,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,F=0}function M(){if(!C)return;let k=C.pp[F],q=C.pp[1-F];y(u.trailSim,q,{uPingPongTexture:k},{uTime:W,uPreviousMousePos:[D.x,D.y]}),F=1-F,y(u.trail,C.trail,{uTexture:C.base,uPingPongTexture:q}),y(u.blur[0],C.blur1,{uTexture:C.trail}),y(u.blur[1],C.blur2,{uTexture:C.blur1}),y(u.blur[2],C.blur3,{uTexture:C.blur2}),y(u.blur[3],C.blur4,{uTexture:C.blur3});let H=C.blur4;y(u.bloom[0],C.bth,{uTexture:H}),y(u.bloom[1],C.bd1,{uTexture:C.bth}),y(u.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:H}),y(u.bloom[3],C.bs1,{uTexture:C.bd2}),y(u.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:H}),y(u.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:H}),y(u.gmap,null,{uTexture:C.bloom},{uTime:0}),D.x=A.x,D.y=A.y}let h=Wn,Y=We((k,q)=>{let H=t.getBoundingClientRect();!H.width||!H.height||(A.x=(k-H.left)/H.width,A.y=1-(q-H.top)/H.height,h=0,U())}),V=null,I=0,j=!1;function oe(k){if(!j||h>=Wn){V=null;return}if(V=requestAnimationFrame(oe),k-I<1e3/Wt-1)return;let q=I?Math.min(k-I,100):1e3/Wt;I=k,W+=Kr*(q/(1e3/Wt)),M(),h++}function U(){p&&j&&!V&&(D.x=A.x,D.y=A.y,I=0,V=requestAnimationFrame(oe))}let L=new IntersectionObserver(([k])=>{j=k.isIntersecting,j?U():V&&(cancelAnimationFrame(V),V=null)});L.observe(n);let w=null,d=new ResizeObserver(()=>{clearTimeout(w),w=setTimeout(()=>{p&&(S(),M())},60)});d.observe(n);let p=!1,b=null;function X(){b=null,c.forEach(x),p=!0,S(),M()}function N(){c.every(k=>e.getProgramParameter(k.p,s.COMPLETION_STATUS_KHR))?X():b=requestAnimationFrame(N)}return s?b=requestAnimationFrame(N):X(),function(){b&&cancelAnimationFrame(b),V&&cancelAnimationFrame(V),V=null,clearTimeout(w),L.disconnect(),d.disconnect(),Y(),P(),c.forEach(H=>e.deleteProgram(H.p)),e.deleteBuffer(v),e.deleteBuffer(i),e.deleteVertexArray(f);let q=e.getExtension("WEBGL_lose_context");q&&q.loseContext(),t.remove()}}var Zr="#BBC0C8",jr="#FFFFFF";var Xt='"Suisseintl Book", Arial, sans-serif';var Xn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],Jr=3,Qr=1.325,mt=5,eo=.4,Yn=20,to=2;function $n(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let l=(s%mt+mt)%mt/mt;return l<.4?1-e(l/.4):l<.6?0:e((l-.6)/.4)};return n.forEach(s=>{let l=(s.getAttribute("data-text")||"").trim();if(!l)return;let c=Array.from(Array(Jr).fill(l).join(" ").toUpperCase()),E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=document.createElement("canvas");x.setAttribute("aria-hidden","true"),Object.assign(x.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(x);let u=x.getContext("2d"),f=[],v=0,i=new Map,m=2;function a(){u.font=`24px ${Xt}`,f=c.map(I=>u.measureText(I).width),v=(3363-f.reduce((I,j)=>I+j,0))/(c.length-1)}let P=null;function y(){i=new Map,u.font=`24px ${Xt}`;let V=24,I=24*.35,j=[...new Set(c)].filter(w=>w!==" ").map(w=>({ch:w,w:u.measureText(w).width})),oe=Math.ceil((V+I+m*2)*A),U=0;j.forEach(w=>{w.sx=U,w.sw=Math.ceil((w.w+m*2)*A),U+=w.sw+2}),P=document.createElement("canvas"),P.width=Math.max(1,U),P.height=Math.max(1,oe);let L=P.getContext("2d");L.font=`${24*A}px ${Xt}`,L.fillStyle=jr,L.textBaseline="alphabetic",j.forEach(w=>{L.fillText(w.ch,w.sx+m*A,(m+V)*A),i.set(w.ch,{sx:w.sx,sw:w.sw,x:-w.w/2-m,y:-V-m,w:w.sw/A,h:oe/A})})}let A=1;function D(){let V=Math.min(to,window.devicePixelRatio||1),I=s.clientWidth;x.width=Math.max(1,Math.round(I*V)),x.height=Math.max(1,Math.round(s.clientHeight*V)),A=x.width/1920}let W=0;function C(){u.setTransform(1,0,0,1,0,0),u.fillStyle=Zr,u.fillRect(0,0,x.width,x.height);let V=E?0:e(W%Yn/Yn)*Math.PI*2;Xn.forEach((I,j)=>{let oe=Xn.length-1-j,U=E?0:o(W-mt+oe*eo),L=v+U*Qr*24,w=2*Math.PI*I.r,d=I.start*Math.PI/180+V,p=0;for(let b=0;b<c.length;b++){let X=f[b];if(p+X>w)break;let N=i.get(c[b]);if(N){let k=d+(p+X/2)/I.r,q=Math.cos(k),H=Math.sin(k);u.setTransform(-H*A,q*A,-q*A,-H*A,(960+I.r*q)*A,(960+I.r*H)*A),u.drawImage(P,N.sx,0,N.sw,P.height,N.x,N.y,N.w,N.h)}p+=X+L}})}let F=(V,I)=>{W+=I/1e3,C()},S=!1,M=()=>{!S&&!E&&(S=!0,gsap.ticker.add(F))},h=()=>{S&&(S=!1,gsap.ticker.remove(F))},z=new ResizeObserver(()=>{D(),y(),C()});z.observe(s),D(),a(),y(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),y(),C()});let Y=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:V=>V.isActive?M():h()});Y.isActive&&M(),t.push(()=>{h(),Y.kill(),z.disconnect(),x.remove()})}),()=>t.forEach(s=>s())}var Je={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Kn=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},no=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return Kn(n)*(1-e)+Kn(n+1)*e};function Zn(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,l=0,c=18,E=0,x=0,u=0,f=-1e5,v=-1e5,i=!1,m=!1;function a(){s&&s.revert(),n.textContent="";let h=getComputedStyle(n);l=parseFloat(h.paddingTop),c=parseFloat(h.lineHeight),E=n.offsetHeight;let z=Math.max(1,Math.floor((E-l-parseFloat(h.paddingBottom))/c)),Y=document.createDocumentFragment();for(let V=0;V<z;V++){let I=document.createElement("div");I.className="type-field__row",I.textContent=t,Y.appendChild(I)}n.appendChild(Y),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((V,I)=>({chars:V.querySelectorAll(".type-field__char"),cur:o[I]?o[I].cur:0,drawn:0}))}})}function P(h){let z=Math.max(0,Math.min(h.chars.length,Math.round(h.cur)));if(z===h.drawn)return;let Y=Math.min(z,h.drawn),V=Math.max(z,h.drawn);for(let I=Y;I<V;I++)h.chars[I].style.visibility=I<z?"visible":"hidden";h.drawn=z}function y(h,z){if(!o.length)return;let Y=Math.min(z,50)/16.667,V=w=>1-Math.pow(1-w,Y),I=pe.scroll,j=Math.min(Math.max(x-I,0),u-I-E);v+=(f-j-l-v)*V(Je.followEase);let oe=Math.floor(v/c),U=I*.004,L=i&&f>=x-I&&f<=u-I;for(let w=0;w<o.length;w++){let d=o[w],p=d.chars.length,b=Math.abs(w-oe),X=0;if(L){if(b===0)X=p;else if(b<=Je.radius){let N=1-b/(Je.radius+1);X=1+Math.min(Je.maxSide,N*(1-Je.ragged/2+Je.ragged*no(w*1.3+U)))*(p-1)}}d.cur+=(X-d.cur)*V(Je.ease),P(d)}}function A(){m||(gsap.ticker.add(y),m=!0)}function D(){m&&(gsap.ticker.remove(y),m=!1)}let W=We((h,z)=>{v<-1e4&&(v=z),f=z,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let F=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(h){x=h.start+window.innerHeight,u=h.end},onToggle(h){h.isActive?A():D()}});F.isActive&&A();let S,M=()=>{clearTimeout(S),S=setTimeout(()=>{Math.floor((n.offsetHeight-l-parseFloat(getComputedStyle(n).paddingBottom))/c)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",M),function(){D(),clearTimeout(S),W(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",M),F.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var jn={duration:.5,ease:"power3"};function Jn(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",jn),l=gsap.quickTo(o,"y",jn),c=0,E=0,x=!1,u=new ResizeObserver(()=>{c=o.offsetWidth,E=o.offsetHeight});u.observe(o),c=o.offsetWidth,E=o.offsetHeight;let v=We((m,a)=>{let P=e.getBoundingClientRect();if(!(m>=P.left&&m<=P.right&&a>=P.top&&a<=P.bottom)){x&&(x=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let A=gsap.utils.clamp(0,Math.max(0,P.width-c),m-P.left-c/2),D=gsap.utils.clamp(0,Math.max(0,P.height-E),a-P.top-E/2);if(!x){x=!0,s(A,A),l(D,D),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(A),l(D)}),i=()=>{x&&(x=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{v(),document.documentElement.removeEventListener("mouseleave",i),u.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var ro=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],oo=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],ao="#FFFFFF";var Qn="power3.out";function er(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],l=[];function c(){if(s.length&&s[0].isConnected)return;let f=e.querySelectorAll(":scope > div > div");o=(f.length?[...f]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),l=f.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function E(f){f.textContent=f.dataset.orig,f.style.border=""}let x=()=>{c(),l.forEach(v=>{v.el.style.overflow="visible"});let f=(s.length-1)/2;s.forEach((v,i)=>{gsap.to(v,{color:ao,ease:Qn,duration:.3,delay:Math.abs(i-f)*.03,overwrite:"auto",onStart:()=>{let m=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);m==1&&(v.textContent=gsap.utils.random(oo)),a==1&&(v.style.border=`1px solid ${gsap.utils.random(ro)}`)}})})},u=()=>{if(!s.length)return;let f=getComputedStyle(e).color,v=(s.length-1)/2;l.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,m)=>{gsap.to(i,{color:f,ease:Qn,duration:.3,delay:Math.abs(m-v)*.03,overwrite:"auto",onStart:()=>E(i)})})};e.addEventListener("mouseenter",x),e.addEventListener("mouseleave",u),t.push(()=>{e.removeEventListener("mouseenter",x),e.removeEventListener("mouseleave",u),gsap.killTweensOf(s),o.forEach(f=>f.revert()),o=[],s=[],l=[]})}),()=>t.forEach(e=>e())}function Yt(r,n){let t=null;le(fn(r)),le(Ln(r)),le(er(r)),le(Cn(r)),le(wn(r)),le(pn(r)),le(Fn(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?mn(r):null,t?le(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(hn(r)),le(bn(r)),le(yn(r)),le(yt(r)),bt(r),le(Pn(r)),t}function Ct(r){le(Mn(r)),le(Sn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(En(r)),le(tt(r.querySelector("[data-type-field]"),()=>Zn(r))),le(Jn(r)),le(tt(r.querySelector("[data-pulse-dots]"),()=>kn(r))),le(Nn(r)),le($n(r)),ScrollTrigger.sort()}var io={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function Mt(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,reduceWhiteSpace:!1,onSplit:function(s){gsap.set(t,{autoAlpha:1});var l=io[e],c={yPercent:110,duration:l.duration,stagger:l.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?c.delay=.5:c.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],c)}}))}),function(){n.forEach(function(t){t.revert()})}}var ar=br(tr());var nr=window.matchMedia("(prefers-reduced-motion: reduce)"),Zt=.9;function rr(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return nr.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:xt,duration:Zt,ease:Ve},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Zt,ease:Ve},0),e.set(t,{autoAlpha:0}),e)}function jt(r,n,t="100vh"){let e=gsap.timeline();return nr.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:Zt,ease:Ve},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function Jt(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),jt(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var Qe=null,Qt=!1;function en(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var or={sync:!0,beforeLeave(){Qt=Ht({keepCurtain:!0}),pe.stop(),Qe||(Qe=It())},beforeEnter(r){Qe||(Qe=It()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),sn(),Yt(r.next.container,!1)},leave(r){return rr(r.current.container,r.next.container)},enter(r){return Qt&&(rn(),Qt=!1),le(Mt(r.next.container)),jt(r.next.container,en)},afterLeave(){Qe&&(Qe(),Qe=null)},afterEnter(r){ln(r),Ct(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(ar.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...or,once(r){let n=document.querySelector("[data-menu-status]");on(),an(),n&&(bt(n),yt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=Yt(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(Mt(t)),Jt(t,function(s){en(s),Ct(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(Mt(t)),Jt(t,function(o){en(o),Ct(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...or}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

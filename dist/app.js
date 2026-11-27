(()=>{var vr=Object.create;var en=Object.defineProperty;var fr=Object.getOwnPropertyDescriptor;var pr=Object.getOwnPropertyNames;var mr=Object.getPrototypeOf,hr=Object.prototype.hasOwnProperty;var gr=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var xr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of pr(n))!hr.call(r,o)&&o!==t&&en(r,o,{get:()=>n[o],enumerable:!(e=fr(n,o))||e.enumerable});return r};var br=(r,n,t)=>(t=r!=null?vr(mr(r)):{},xr(n||!r||!r.__esModule?en(t,"default",{value:r,enumerable:!0}):t,r));var tr=gr((Yt,$t)=>{(function(r,n){typeof Yt=="object"&&typeof $t!="undefined"?$t.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})(Yt,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,l=s.root,c=l===void 0?document.body:l,b=s.timeout,h=b===void 0?2e3:b,v=s.limit,p=v===void 0?0:v;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=c,this.timeout=h,this.limit=p},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var l=s.target,c=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(l));e.toPrefetch.has(c)&&(e.observer.unobserve(l),e.barba.cache.has(c)?e.barba.cache.update(c,{action:"prefetch"}):e.barba.cache.set(c,e.barba.request(c,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(b){e.logger.error(b)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var l=s,c=e.barba.dom.getHref(l);e.barba.cache.has(c)||e.barba.prevent.checkHref(c)||e.barba.prevent.checkLink(l,{},c)||(e.observer.observe(s),e.toPrefetch.add(c))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var Ft=[];function le(r){typeof r=="function"&&Ft.push(r)}function zt(){let r=Ft,n=ScrollTrigger.getAll();return Ft=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var yr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",yr);var Ve="parallax",ht=.8;var Pr="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",tn="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ke=null,Lt=function(){return!1};function nn(){Ke&&gsap.timeline().to(Ke,{clipPath:tn,duration:.9,ease:Ve,overwrite:!0},0).fromTo(Ke,{filter:"brightness(1)"},{filter:"brightness("+(1-ht)+")",duration:.9,ease:Ve},0).set(Ke,{clearProps:"filter"})}function rn(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;Ke=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ke&&gsap.to(Ke,{clipPath:o?Pr:tn,duration:.9,ease:Ve,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),Lt=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function on(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function an(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function sn(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function gt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let l=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){l();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},l)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function xt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),c=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+c}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function tt(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(l=>{e||!l.some(c=>c.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var je={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{je.x=r.clientX,je.y=r.clientY,je.known=!0},{passive:!0});function bt(){return je}function We(r){let n=e=>r(e.clientX,e.clientY),t=()=>{je.known&&r(je.x,je.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var nt=new Map;function Er(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),l=s.querySelector("svg");if(!l)return new Float32Array(0);var c=parseFloat(l.getAttribute("width")||512),b=parseFloat(l.getAttribute("height")||512),h=l.getAttribute("viewBox");if(h){var v=h.split(/[\s,]+/);c=+v[2],b=+v[3]}var p=Math.min(t/c,t/b)*.9,d=(t-c*p)/2,i=(t-b*p)/2;o.save(),o.translate(d,i),o.scale(p,p),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(x){if(x.tagName==="path"){var z=x.getAttribute("d");z&&o.fill(new Path2D(z))}else x.tagName==="rect"?o.fillRect(+x.getAttribute("x")||0,+x.getAttribute("y")||0,+x.getAttribute("width")||0,+x.getAttribute("height")||0):x.tagName==="circle"&&(o.beginPath(),o.arc(+x.getAttribute("cx")||0,+x.getAttribute("cy")||0,+x.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var f=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),E=0,P=0;P<t*t;P++)f[P*4+3]>30&&(a[E++]=P);if(!E)return new Float32Array(0);for(var A=new Float32Array(n*4),H=0;H<n;H++){var N=a[Math.floor(Math.random()*E)],C=N%t,U=(N-C)/t,T=f[N*4+3]/255,_=H*4;A[_]=(C-t/2)*1.2+(Math.random()-.5)*1.65,A[_+1]=-(U-t/2)*1.2+(Math.random()-.5)*1.65,A[_+2]=(Math.random()-.5)*37*T,A[_+3]=T}return A}function ot(r,n){var t=n+"|"+r;if(!nt.has(t)){var e;try{e=Er(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);nt.size>=4&&nt.delete(nt.keys().next().value),nt.set(t,Promise.resolve(e))}return nt.get(t)}var Pt={};function at(r,n,t){for(var e=Pt[r]||(Pt[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?ln(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var l=o.renderer;return l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(n,t,!1),l.setClearColor(0,1),l.toneMapping=THREE.ACESFilmicToneMapping,l.toneMappingExposure=1.4,l.domElement.style.width="100%",l.domElement.style.height="100%",o}function it(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=Pt[r]||(Pt[r]=[]);if(e.length>=1){ln(n);return}t.setSize(1,1,!1),e.push(n)}function ln(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var wr=.03,Sr=.95,Tr=.005,rt=Math.PI*2,Ar="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Cr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),Mr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),Rr=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Fr=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),zr=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function yt(r,n){var t=new THREE.DataTexture(r,n,n,THREE.RGBAFormat,THREE.FloatType);return t.minFilter=t.magFilter=THREE.NearestFilter,t.needsUpdate=!0,t}function st(r,n){if(r.sim!==void 0)return r.sim;var t=r.renderer;if(!t.capabilities.isWebGL2||!t.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(n)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},l=[s(),s()],c=[s(),s()],b=0,h=new Float32Array(o*4),v=new Float32Array(o*4),p=new Float32Array(n*2),d=0;d<o;d++){var i=d*1.37,f=d*4;h[f]=i%rt,h[f+1]=i*.7%rt,h[f+2]=i*2.3%rt,h[f+3]=i*1.5%rt,v[f]=i*1.1%rt,v[f+1]=(d*2654435761&65535)/65535,v[f+2]=(d*48271&65535)/65535,v[f+3]=(d*16807&65535)/65535,d<n&&(p[d*2]=(d%e+.5)/e,p[d*2+1]=(Math.floor(d/e)+.5)/e)}var a=yt(h,e),E=yt(v,e),P=new Float32Array(o*4),A=yt(P,e),H=new Float32Array(o*4),N=yt(H,e),C=new THREE.Scene,U=new THREE.Camera,T=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);T.frustumCulled=!1,C.add(T);var _=function(k,R){return new THREE.ShaderMaterial({vertexShader:Ar,fragmentShader:k,uniforms:R,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},x=_(Cr,{tPos:{value:null},tVel:{value:null},tTgt:{value:A},tP1:{value:a},tP2:{value:E},time:{value:0},gravity:{value:wr},wind:{value:Tr},friction:{value:Sr},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),z=_(Mr,{tPos:{value:null},tVel:{value:null}}),$=_(Rr,{tSrc:{value:null}}),V=new THREE.ShaderMaterial({vertexShader:Fr,fragmentShader:zr,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:A},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function L(k,R){T.material=k,t.setRenderTarget(R),t.render(C,U)}function j(){V.uniforms.tPos.value=l[b].texture,V.uniforms.tVel.value=c[b].texture}var oe={material:V,refAttribute:function(){return new THREE.BufferAttribute(p,2)},setPoints:function(k,R){H.fill(0),P.fill(0);for(var w=0;w<R;w++){var u=w*4;H[u]=k[u],H[u+1]=k[u+1]+40,H[u+2]=k[u+2],P[u]=k[u],P[u+1]=k[u+1],P[u+2]=k[u+2],P[u+3]=w*.01%rt}N.needsUpdate=!0,A.needsUpdate=!0;var m=t.getRenderTarget();b=0,$.uniforms.tSrc.value=N,L($,l[0]),t.setRenderTarget(c[0]),t.clear(!0,!1,!1),t.setRenderTarget(m),j()},step:function(k,R){var w=t.getRenderTarget(),u=x.uniforms;u.time.value=k,R?(u.mouseOn.value=1,u.radius.value=R.radius,u.mousePos.value.copy(R.pos),u.mouseVel.value.set(R.vel.x,R.vel.y),u.mouseVelLen.value=R.vel.length()):u.mouseOn.value=0;var m=1-b;u.tPos.value=l[b].texture,u.tVel.value=c[b].texture,L(x,c[m]),z.uniforms.tPos.value=l[b].texture,z.uniforms.tVel.value=c[m].texture,L(z,l[m]),b=m,t.setRenderTarget(w),V.uniforms.uTime.value=k,j()},dispose:function(){l.concat(c).forEach(function(k){k.dispose()}),[a,E,A,N].forEach(function(k){k.dispose()}),[x,z,$,V].forEach(function(k){k.dispose()}),T.geometry.dispose()}};return r.sim=oe,oe}var Dt={};function vt(r){return Dt[r]||(Dt[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),Dt[r]}function cn(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("case",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var b=new THREE.PointLight(13931578,2.4,1200);b.position.set(-300,-100,300),t.add(b);var h=new THREE.PointLight(5913114,1.2,900);h.position.set(0,200,-300),t.add(h);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),t.add(v);var p=0,d=0,i=0,f=0,a=!1,E=0,P=0,A=Math.PI*2/6,H=new THREE.Vector2(9999,9999),N=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),T=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,x=!1,z=0,$=0,V=8e4,L=.03,j=.95,oe=.005,k=12e4,R=null,w,u,m,y,X,W,F=0,q=!1,D=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var O=new THREE.BufferGeometry;w=new Float32Array(k*3),u=new Float32Array(k*3),m=new Float32Array(k*3),y=new Float32Array(k*3),X=new Float32Array(k),W=new Float32Array(k),O.setAttribute("position",new THREE.BufferAttribute(w,3)),O.setAttribute("color",new THREE.BufferAttribute(y,3)),O.setAttribute("size",new THREE.BufferAttribute(X,1)),O.setAttribute("alpha",new THREE.BufferAttribute(W,1)),O.setAttribute("velocity",new THREE.BufferAttribute(u,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;l=st(o,k),l&&O.setAttribute("ref",l.refAttribute());var K=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:g,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(O,K),l&&(R.frustumCulled=!1),t.add(R)}function se(O,Y){return ot(O,Y)}function Z(O){F=O.length/4;for(var Y=0;Y<F;Y++){var g=Y*3,K=Y*4,ie=O[K],Ce=O[K+1],Me=O[K+2],Re=O[K+3];w[g]=ie,w[g+1]=Ce+40,w[g+2]=Me,u[g]=u[g+1]=u[g+2]=0,m[g]=ie,m[g+1]=Ce,m[g+2]=Me;var M=ne[Math.floor(Math.random()*ne.length)],B=.7+Math.random()*.4;y[g]=M.r*B,y[g+1]=M.g*B,y[g+2]=M.b*B,X[Y]=1.8+Math.random()*3.8,W[Y]=.3+(Re||.7)*.75}l&&l.setPoints(O,F),R.geometry.setDrawRange(0,F),["position","color","size","alpha"].forEach(function(S){R.geometry.attributes[S].needsUpdate=!0}),q=!0}function Pe(O){return se(O,Math.min(k,V)).then(function(Y){Y.length&&R&&Z(Y)})}function he(O){if(!(!q||!F)){if(D+=O,l){l.step(D,x?{pos:U,vel:_,radius:C}:null);return}for(var Y=0;Y<F;Y++){var g=Y*3,K=Y*1.37;if(u[g]+=Math.sin(D*.4+K)*.008+Math.sin(D*1.1+K*2.3)*.003,u[g+1]+=Math.cos(D*.35+K*.7)*.008+Math.sin(D*.9+K*1.5)*.004,u[g+2]+=Math.sin(D*.25+K*1.1)*.004,u[g+1]-=L*.06,u[g]+=Math.sin(D*.25+w[g+1]*.008)*oe*.6,u[g+2]+=Math.cos(D*.3+w[g]*.008)*oe*.3,x){var ie=w[g]-U.x,Ce=w[g+1]-U.y,Me=w[g+2]-U.z,Re=ie*ie+Ce*Ce+Me*Me,M=C*C;if(Re<M&&Re>.25){var B=Math.sqrt(Re),S=B/C,ee=(Y*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-S,1.5+ee),ke=1+Math.min(_.length()*.12,1),we=fe*ve*1.2*ke,Fe=1/B;u[g]+=ie*Fe*we,u[g+1]+=Ce*Fe*we,u[g+2]+=Me*Fe*we*.2;var ye=.02+ee*.06;u[g]+=_.x*fe*ye,u[g+1]+=_.y*fe*ye;var Ge=fe*.15;u[g]+=(ee-.5)*Ge,u[g+1]+=((Y*48271&65535)/65535-.5)*Ge}}var Oe=m[g],Tt=m[g+1]+40,et=m[g+2],lt=Oe-w[g],Xe=Tt-w[g+1],Ye=et-w[g+2],pt=Math.sqrt(lt*lt+Xe*Xe+Ye*Ye),mt=(Y*48271&65535)/65535,At=.003+mt*.003,Ct=1+Math.min(pt*.002,.5),ct=At*Ct;u[g]+=lt*ct,u[g+1]+=Xe*ct,u[g+2]+=Ye*ct;var ut=(Y*16807&65535)/65535,$e=j*(.92+ut*.06);u[g]*=$e,u[g+1]*=$e,u[g+2]*=$e,w[g]+=u[g],w[g+1]+=u[g+1],w[g+2]+=u[g+2];var dt=Math.sqrt(Math.pow(w[g]-m[g],2)+Math.pow(w[g+1]-m[g+1],2)+Math.pow(w[g+2]-m[g+2],2));W[Y]=.15+.55*(1-Math.min(dt*.005,1))+Math.sin(D*1.5+Y*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(O,Y){var g=s.domElement.getBoundingClientRect();if(!(g.width===0||g.height===0)&&(H.set((O-g.left)/g.width*2-1,-((Y-g.top)/g.height)*2+1),N.setFromCamera(H,e),N.ray.intersectPlane(ze,Le))){T.copy(U),R&&U.copy(Le).applyMatrix4(be.copy(R.matrixWorld).invert()),_.subVectors(U,T);var K=_.length();K>15&&_.multiplyScalar(15/K)}}function Q(O,Y){var g=r.getBoundingClientRect();return O>=g.left&&O<=g.right&&Y>=g.top&&Y<=g.bottom}var I=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!n){var Te=function(O){z=O.clientX,$=O.clientY;var Y=Q(O.clientX,O.clientY);if(Y){x=!0,te(O.clientX,O.clientY);var g=r.getBoundingClientRect(),K=Math.round(O.clientX-g.left),ie=Math.round(O.clientY-g.top);I&&(I.textContent="X: "+K+"PX    Y: "+ie+"PX")}else x=!1,U.set(9999,9999,0);a&&(p+=(O.clientX-E)*.005,i+=(O.clientY-P)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),E=O.clientX,P=O.clientY)},Ee=function(O){Q(O.clientX,O.clientY)&&(a=!0,E=O.clientX,P=O.clientY)},ce=function(){a=!1,p=0,i=0,d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ce)}function me(){for(var O=4e3,Y=new THREE.BufferGeometry,g=new Float32Array(O*3),K=new Float32Array(O*3),ie=0;ie<O;ie++){g[ie*3]=(Math.random()-.5)*2200,g[ie*3+1]=(Math.random()-.5)*1800,g[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}Y.setAttribute("position",new THREE.BufferAttribute(g,3)),Y.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var M=Re.getContext("2d"),B=M.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=B,M.fillRect(0,0,32,32);var S=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(Y,S);return ee.userData={positions:g,count:O},t.add(ee),ee}re();var de=n?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var qe=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(O){Ae=O[0].isIntersecting,O[0].isIntersecting&&!xe&&!n&&(xe=!0,I&&(I.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,G=0;function J(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!n){var O=bt();O.known&&(z=O.x,$=O.y);var Y=Q(z,$);Y?(x=!0,te(z,$)):(x=!1,U.set(9999,9999,0))}}window.addEventListener("scroll",J,{passive:!0});var ae=null;function Ne(){if(ae=requestAnimationFrame(Ne),!!Ae){G++;var O=Math.min(qe.getDelta(),.05),Y=qe.elapsedTime;if(n)d+=A*O;else{var g=p-d;g=g%(Math.PI*2),g>Math.PI&&(g-=Math.PI*2),g<-Math.PI&&(g+=Math.PI*2),d+=g*.12,f+=(i-f)*.12}if(R&&(R.rotation.x=f,R.rotation.y=d,R.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin(Y*.2+ie)*.05,K[ie*3]+=Math.cos(Y*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-d*35*.35,de.position.y=f*28*.35}c.position.x=300+Math.sin(Y*.3)*100,c.position.y=350+Math.cos(Y*.2)*80,b.intensity=2+Math.sin(Y*.5)*.4,v.intensity=.8+Math.sin(Y*.4+1)*.3,!(n&&ge&&G%4!==0)&&(he(O),s.render(t,e))}}return Ne(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",J),clearTimeout(Ue),He.disconnect(),t.traverse(function(O){O.geometry&&O.geometry.dispose()}),it("case",o),R=null}}function un(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=at("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),n.add(c);var b=new THREE.PointLight(5913114,1.2,900);b.position.set(0,200,-300),n.add(b);var h=new THREE.PointLight(16750916,1.3,600);h.position.set(0,-250,200),n.add(h);var v=0,p=Math.PI*2/6,d=8e4,i=.03,f=.95,a=.005,E=12e4,P=null,A,H,N,C,U,T,_=0,x=!1,z=0,$=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function V(){var te=new THREE.BufferGeometry;A=new Float32Array(E*3),H=new Float32Array(E*3),N=new Float32Array(E*3),C=new Float32Array(E*3),U=new Float32Array(E),T=new Float32Array(E),te.setAttribute("position",new THREE.BufferAttribute(A,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(U,1)),te.setAttribute("alpha",new THREE.BufferAttribute(T,1)),te.setAttribute("velocity",new THREE.BufferAttribute(H,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,I=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;s=st(e,E),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:I,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));P=new THREE.Points(te,ue),s&&(P.frustumCulled=!1),n.add(P)}function L(te,Q){return ot(te,Q)}function j(te){_=te.length/4;for(var Q=0;Q<_;Q++){var I=Q*3,ue=Q*4,xe=te[ue],Te=te[ue+1],Ee=te[ue+2],ce=te[ue+3];A[I]=xe,A[I+1]=Te+40,A[I+2]=Ee,H[I]=H[I+1]=H[I+2]=0,N[I]=xe,N[I+1]=Te,N[I+2]=Ee;var me=$[Math.floor(Math.random()*$.length)],de=.7+Math.random()*.4;C[I]=me.r*de,C[I+1]=me.g*de,C[I+2]=me.b*de,U[Q]=1.8+Math.random()*3.8,T[Q]=.3+(ce||.7)*.75}s&&s.setPoints(te,_),P.geometry.setDrawRange(0,_),["position","color","size","alpha"].forEach(function(De){P.geometry.attributes[De].needsUpdate=!0}),x=!0}function oe(te){return L(te,Math.min(E,d)).then(function(Q){Q.length&&P&&j(Q)})}function k(te){if(!(!x||!_)){if(z+=te,s){s.step(z,null);return}for(var Q=0;Q<_;Q++){var I=Q*3,ue=Q*1.37;H[I]+=Math.sin(z*.4+ue)*.008+Math.sin(z*1.1+ue*2.3)*.003,H[I+1]+=Math.cos(z*.35+ue*.7)*.008+Math.sin(z*.9+ue*1.5)*.004,H[I+2]+=Math.sin(z*.25+ue*1.1)*.004,H[I+1]-=i*.06,H[I]+=Math.sin(z*.25+A[I+1]*.008)*a*.6,H[I+2]+=Math.cos(z*.3+A[I]*.008)*a*.3;var xe=N[I],Te=N[I+1]+40,Ee=N[I+2],ce=xe-A[I],me=Te-A[I+1],de=Ee-A[I+2],De=Math.sqrt(ce*ce+me*me+de*de),qe=(Q*48271&65535)/65535,Ae=.003+qe*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;H[I]+=ce*ge,H[I+1]+=me*ge,H[I+2]+=de*ge;var Ue=(Q*16807&65535)/65535,G=f*(.92+Ue*.06);H[I]*=G,H[I+1]*=G,H[I+2]*=G,A[I]+=H[I],A[I+1]+=H[I+1],A[I+2]+=H[I+2];var J=Math.sqrt(Math.pow(A[I]-N[I],2)+Math.pow(A[I+1]-N[I+1],2)+Math.pow(A[I+2]-N[I+2],2));T[Q]=.15+.55*(1-Math.min(J*.005,1))+Math.sin(z*1.5+Q*.01)*.05}P.geometry.attributes.position.needsUpdate=!0,P.geometry.attributes.alpha.needsUpdate=!0,P.geometry.attributes.velocity.needsUpdate=!0}}V();for(var R=4e3,w=new THREE.BufferGeometry,u=new Float32Array(R*3),m=new Float32Array(R*3),y=0;y<R;y++){u[y*3]=(Math.random()-.5)*2200,u[y*3+1]=(Math.random()-.5)*1800,u[y*3+2]=-200-Math.random()*1800;var X=$[Math.floor(Math.random()*$.length)],W=.2+Math.random()*.3;m[y*3]=X.r*W,m[y*3+1]=X.g*W,m[y*3+2]=X.b*W}w.setAttribute("position",new THREE.BufferAttribute(u,3)),w.setAttribute("color",new THREE.BufferAttribute(m,3));var F=document.createElement("canvas");F.width=F.height=32;var q=F.getContext("2d"),D=q.createRadialGradient(16,16,0,16,16,16);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.3,"rgba(255,255,255,0.6)"),D.addColorStop(.7,"rgba(255,255,255,0.15)"),D.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=D,q.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(F),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(w,ne);n.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var Z=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(Z.getDelta(),.05),Q=Z.elapsedTime;v+=p*te,P&&(P.rotation.y=v,P.position.y=5,P.scale.setScalar(.85));for(var I=0;I<R;I++)u[I*3+1]+=Math.sin(Q*.2+I)*.05,u[I*3]+=Math.cos(Q*.15+I*.5)*.03;w.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-v*35*.35,l.position.x=300+Math.sin(Q*.3)*100,l.position.y=350+Math.cos(Q*.2)*80,c.intensity=2+Math.sin(Q*.5)*.4,h.intensity=.8+Math.sin(Q*.4+1)*.3,k(te),o.render(n,t)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),it("card",e),P=null}}var dn="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function vn(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return vt(dn).then(function(){o||(s=t?Lr(n):cn(n))}),function(){o=!0,s&&s()}}return t?e():tt(n,e)}function fn(r){let n=r.querySelector("#axion-card");if(n)return tt(n,function(){let t=!1,e=null;return vt(dn).then(function(){t||(e=un(n))}),function(){t=!0,e&&e()}})}function Lr(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("home",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var b=new THREE.PointLight(13931578,2.4,1200);b.position.set(-300,-100,300),t.add(b);var h=new THREE.PointLight(5913114,1.2,900);h.position.set(0,200,-300),t.add(h);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),t.add(v);var p=0,d=0,i=0,f=0,a=!1,E=0,P=0,A=Math.PI*2/6,H=new THREE.Vector2(9999,9999),N=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),T=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,x=!1,z=0,$=0,V=8e4,L=.03,j=.95,oe=.005,k=12e4,R=null,w,u,m,y,X,W,F=0,q=!1,D=!1,ne=0,re=0,se=null,Z=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var M=new THREE.BufferGeometry;w=new Float32Array(k*3),u=new Float32Array(k*3),m=new Float32Array(k*3),y=new Float32Array(k*3),X=new Float32Array(k),W=new Float32Array(k),M.setAttribute("position",new THREE.BufferAttribute(w,3)),M.setAttribute("color",new THREE.BufferAttribute(y,3)),M.setAttribute("size",new THREE.BufferAttribute(X,1)),M.setAttribute("alpha",new THREE.BufferAttribute(W,1)),M.setAttribute("velocity",new THREE.BufferAttribute(u,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,S=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;l=st(o,k),l&&M.setAttribute("ref",l.refAttribute());var ee=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:S,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(M,ee),l&&(R.frustumCulled=!1),t.add(R)}function he(M,B){return ot(M,B)}function be(M){F=M.length/4;for(var B=0;B<F;B++){var S=B*3,ee=B*4,ve=M[ee],fe=M[ee+1],ke=M[ee+2],we=M[ee+3];w[S]=ve,w[S+1]=fe+40,w[S+2]=ke,u[S]=u[S+1]=u[S+2]=0,m[S]=ve,m[S+1]=fe,m[S+2]=ke;var Fe=Z[Math.floor(Math.random()*Z.length)],ye=.7+Math.random()*.4;y[S]=Fe.r*ye,y[S+1]=Fe.g*ye,y[S+2]=Fe.b*ye,X[B]=1.8+Math.random()*3.8,W[B]=.3+(we||.7)*.75}l&&l.setPoints(M,F),R.geometry.setDrawRange(0,F),["position","color","size","alpha"].forEach(function(Ge){R.geometry.attributes[Ge].needsUpdate=!0}),q=!0,D=!1,ne=1}function ze(M){return he(M,Math.min(k,V)).then(function(B){B.length&&R&&be(B)})}function Le(M){if(!(!q||!F)){if(re+=M,l){l.step(re,x&&J==="interactive"?{pos:U,vel:_,radius:C}:null);return}for(var B=0;B<F;B++){var S=B*3,ee=B*1.37;if(u[S]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,u[S+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,u[S+2]+=Math.sin(re*.25+ee*1.1)*.004,u[S+1]-=L*.06,u[S]+=Math.sin(re*.25+w[S+1]*.008)*oe*.6,u[S+2]+=Math.cos(re*.3+w[S]*.008)*oe*.3,x&&J==="interactive"){var ve=w[S]-U.x,fe=w[S+1]-U.y,ke=w[S+2]-U.z,we=ve*ve+fe*fe+ke*ke,Fe=C*C;if(we<Fe&&we>.25){var ye=Math.sqrt(we),Ge=ye/C,Oe=(B*2654435761&65535)/65535,Tt=.6+Oe*.8,et=Math.pow(1-Ge,1.5+Oe),lt=1+Math.min(_.length()*.12,1),Xe=et*Tt*1.2*lt,Ye=1/ye;u[S]+=ve*Ye*Xe,u[S+1]+=fe*Ye*Xe,u[S+2]+=ke*Ye*Xe*.2;var pt=.02+Oe*.06;u[S]+=_.x*et*pt,u[S+1]+=_.y*et*pt;var mt=et*.15;u[S]+=(Oe-.5)*mt,u[S+1]+=((B*48271&65535)/65535-.5)*mt}}var At=m[S],Ct=m[S+1]+40,ct=m[S+2],ut=At-w[S],$e=Ct-w[S+1],dt=ct-w[S+2],ir=Math.sqrt(ut*ut+$e*$e+dt*dt),sr=(B*48271&65535)/65535,lr=.003+sr*.003,cr=1+Math.min(ir*.002,.5),Mt=lr*cr;u[S]+=ut*Mt,u[S+1]+=$e*Mt,u[S+2]+=dt*Mt;var ur=(B*16807&65535)/65535,Rt=j*(.92+ur*.06);u[S]*=Rt,u[S+1]*=Rt,u[S+2]*=Rt,w[S]+=u[S],w[S+1]+=u[S+1],w[S+2]+=u[S+2];var dr=Math.sqrt(Math.pow(w[S]-m[S],2)+Math.pow(w[S+1]-m[S+1],2)+Math.pow(w[S+2]-m[S+2],2));W[B]=.15+.55*(1-Math.min(dr*.005,1))+Math.sin(re*1.5+B*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),I=new THREE.Vector3;function ue(M,B){var S=s.domElement.getBoundingClientRect();if(!(S.width===0||S.height===0)&&(H.set((M-S.left)/S.width*2-1,-((B-S.top)/S.height)*2+1),N.setFromCamera(H,e),N.ray.intersectPlane(Q,I))){T.copy(U),R&&U.copy(I).applyMatrix4(te.copy(R.matrixWorld).invert()),_.subVectors(U,T);var ee=_.length();ee>15&&_.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function Ee(M,B){var S=Te().getBoundingClientRect();return M>=S.left&&M<=S.right&&B>=S.top&&B<=S.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(M){if(z=M.clientX,$=M.clientY,n||J!=="interactive"){x=!1,U.set(9999,9999,0);return}var B=Ee(M.clientX,M.clientY);if(B){x=!0,ue(M.clientX,M.clientY);var S=Te().getBoundingClientRect(),ee=Math.round(M.clientX-S.left),ve=Math.round(M.clientY-S.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else x=!1,U.set(9999,9999,0);a&&(p+=(M.clientX-E)*.005,i+=(M.clientY-P)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),E=M.clientX,P=M.clientY)}function qe(M){n||J!=="interactive"||Ee(M.clientX,M.clientY)&&(a=!0,E=M.clientX,P=M.clientY)}function Ae(){n||(a=!1,p=0,i=0,d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",qe),window.addEventListener("mouseup",Ae);function He(){for(var M=4e3,B=new THREE.BufferGeometry,S=new Float32Array(M*3),ee=new Float32Array(M*3),ve=0;ve<M;ve++){S[ve*3]=(Math.random()-.5)*2200,S[ve*3+1]=(Math.random()-.5)*1800,S[ve*3+2]=-200-Math.random()*1800;var fe=Z[Math.floor(Math.random()*Z.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}B.setAttribute("position",new THREE.BufferAttribute(S,3)),B.setAttribute("color",new THREE.BufferAttribute(ee,3));var we=document.createElement("canvas");we.width=we.height=32;var Fe=we.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var Ge=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(we),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Oe=new THREE.Points(B,Ge);return Oe.userData={positions:S,count:M},t.add(Oe),Oe}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var G=new THREE.Clock,J="spin",ae=null;function Ne(){if(n){J="spin";return}if(ae===null){var M=document.querySelector(".scaling-element-video");ae=M&&getComputedStyle(M).display!=="none"}if(!ae){J="spin";return}var B=window._flipProgress||0;B>.85?J="interactive":B>.7?J="transition":J="spin"}var O="spin",Y=!0,g=new IntersectionObserver(function(M){Y=M[0].isIntersecting},{threshold:0});g.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var M=bt();M.known&&(z=M.x,$=M.y);var B=Ee(z,$);B?(x=!0,ue(z,$)):(x=!1,U.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!Y){Ce++;var M=Math.min(G.getDelta(),.05),B=G.elapsedTime;Ne(),O==="interactive"&&J!=="interactive"&&(x=!1,U.set(9999,9999,0),a=!1);var S=J==="transition"||J==="interactive";if(S&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!S&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),O=J,x&&!Ee(z,$)&&(x=!1,U.set(9999,9999,0)),J==="spin")d+=A*M,f+=(0-f)*.05;else if(J==="transition")d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),d+=(0-d)*.025,f+=(0-f)*.025;else{var ee=p-d;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),d+=ee*.12,f+=(i-f)*.12}R&&(R.rotation.x=f,R.rotation.y=d,R.scale.setScalar(1),R.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(B*.2+fe)*.05,ve[fe*3]+=Math.cos(B*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-d*35*.35,ge.position.y=f*28*.35,c.position.x=300+Math.sin(B*.3)*100,c.position.y=350+Math.cos(B*.2)*80,b.intensity=2+Math.sin(B*.5)*.4,v.intensity=.8+Math.sin(B*.4+1)*.3,!(n&&K&&Ce%4!==0)&&(Le(M),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",qe),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),g.disconnect(),t.traverse(function(M){M.geometry&&M.geometry.dispose()}),it("home",o),R=null}}function pn(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),l=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),c=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ve},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(l.length&&c.set(l,{autoAlpha:1},0),s.length>=2){let b=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),h=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([b.chars,h.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),c.to(b.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),c.to(b.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),c.to(h.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),c.to(h.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return c}function mn(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(v=>{let p=v.parentElement;p&&(v.style.whiteSpace="nowrap",e.has(p)||e.set(p,[]),e.get(p).push(v))});function o(v){let p=getComputedStyle(v);return v.clientWidth-parseFloat(p.paddingLeft)-parseFloat(p.paddingRight)}function s(v,p){if(p<=0)return;let d=parseFloat(getComputedStyle(v).fontSize)||16;for(let i=0;i<5;i++){let f=v.getBoundingClientRect().width;if(f<=0)break;let a=p/f;if(Math.abs(a-1)<.002)break;d*=a,v.style.fontSize=d+"px"}}function l(){e.forEach((v,p)=>{let d=o(p);v.forEach(i=>s(i,d))})}let c=null;function b(){c||(c=requestAnimationFrame(()=>{c=null,l()}))}let h;return window.ResizeObserver&&(h=new ResizeObserver(b),e.forEach((v,p)=>h.observe(p))),window.addEventListener("resize",b),l(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(l),()=>{c&&cancelAnimationFrame(c),h&&h.disconnect(),window.removeEventListener("resize",b),t.forEach(v=>{v.style.whiteSpace="",v.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},kt=.08,Dr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},hn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function gn(r,n){var t=(1-n)*100+"%";return r==="left"?"inset(0% 0% 0% "+t+")":r==="up"?"inset("+t+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+t+" 0%)":"inset(0% "+t+" 0% 0%)"}function kr(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function xn(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",l=o.getAttribute("data-marker-theme")||"#000000",c=o.getAttribute("data-marker-scroll-start")||"top 90%",b=l.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(l).trim()||l,h=hn[s]||hn.right,v=Dr[o.getAttribute("data-highlight-marker-reveal")]||null;v&&(b=v.bar);var p=o.closest("[data-cursor-label]"),d={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,f=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){d.timeline&&d.timeline.kill(),d.scrollTrigger&&d.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(T){T.remove()}),d.listeners.forEach(function(T){T.el.removeEventListener(T.type,T.fn)}),d.listeners=[],i=!1;var E=a.lines,P=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(E.forEach(function(T,_){gsap.set(T,{position:"relative",overflow:"hidden"});var x=kr(b,h.origin);gsap.set(x,{[h.prop]:0}),T.appendChild(x),v&&(gsap.set(T,{zIndex:0,color:v.text}),gsap.set(x,{zIndex:-1})),P.to(x,{[h.prop]:1,duration:Se.duration,ease:Se.ease},_*kt);var z=function(){i&&(gsap.to(x,{[h.prop]:0,duration:Se.duration,ease:Se.ease}),v&&gsap.to(T,{color:v.hoverText,duration:Se.duration,ease:Se.ease}))},$=function(){i&&(gsap.to(x,{[h.prop]:1,duration:Se.duration,ease:Se.ease}),v&&gsap.to(T,{color:v.text,duration:Se.duration,ease:Se.ease}))};!v&&e&&(T.addEventListener("mouseenter",z),T.addEventListener("mouseleave",$),d.listeners.push({el:T,type:"mouseenter",fn:z},{el:T,type:"mouseleave",fn:$}))}),d.timeline=P,p){P.kill();var A=o.querySelectorAll(".highlight-marker-bar");gsap.set(E,{clipPath:gn(s,0)});var H=function(T){gsap.to(A,{[h.prop]:T,duration:Se.duration,ease:Se.ease,stagger:kt,overwrite:!0}),gsap.to(E,{clipPath:gn(s,T),duration:Se.duration,ease:Se.ease,stagger:kt,overwrite:!0})},N=function(){H(1)},C=function(){H(0)};p.addEventListener("cursorlabel:enter",N),p.addEventListener("cursorlabel:leave",C),d.listeners.push({el:p,type:"cursorlabel:enter",fn:N},{el:p,type:"cursorlabel:leave",fn:C});return}var U=ScrollTrigger.create({trigger:o,start:c,once:!0,onEnter:function(){P.play()}});d.scrollTrigger=U}});d.split=f,t.push(d)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function bn(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),l=r.querySelectorAll("[data-cursor-marquee-text]");if(!l.length)return;let c=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),b=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),h=null,v=p=>{c(p.clientX),b(p.clientY)};return window.addEventListener("pointermove",v,{passive:!0}),l.forEach(p=>{p.addEventListener("mouseenter",()=>{h&&clearTimeout(h);let d=p.getAttribute("data-cursor-marquee-text")||"",i=(d.length||1)/e;s.forEach(f=>{f.textContent=d,f.style.animationPlayState="running",f.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),p.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),h&&clearTimeout(h),h=setTimeout(()=>{s.forEach(d=>{d.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",v),clearTimeout(h),gsap.killTweensOf(o)}}function yn(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let l=s.target;s.isIntersecting?t(l):l.paused||l.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function Pn(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(c){window._flipProgress=c.progress}}}),n.forEach(function(c,b){let h=b+1;if(h<n.length){let v=n[h],p=v.getBoundingClientRect(),d=c.getBoundingClientRect(),i=p.top+window.pageYOffset+v.offsetHeight/2,f=d.top+window.pageYOffset+c.offsetHeight/2,a=i-f;e.add(Flip.fit(t,v,{duration:a,ease:"none"}))}})}o();let s,l=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",l),function(){clearTimeout(s),window.removeEventListener("resize",l),e&&e.kill()}}var Ir="150%";function Hr(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var It=new WeakMap;function En(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(l){return l.textContent})}),o=t.map(Hr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),It.set(r,{wrap:n,lines:t,lineChars:o}),function(){It.delete(r),t.forEach(function(s,l){s.querySelectorAll("textPath").forEach(function(c,b){c.textContent=e[l][b]})})}}function wn(r){let n=It.get(r);if(!n)return function(){};let t=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Ir,pin:!0,scrub:!0}});return n.lines.forEach(function(e,o){let s=n.lineChars[o];s.length&&t.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}var _t=[[0,[0,1]],[0,[1,1]],[0,[2,4,4,4]],[0,[3,6,6,6]],[0,[2,4,4,5]],[0,[3,6,6,7]],[1,[0,0]],[1,[1,2]],[1,[2,3,4,4]],[1,[3,5,5,5]],[1,[3,7,7,7]],[1,[3,5,5,6]],[2,[0,0]],[2,[1,2]],[2,[2,3,4,4]],[2,[3,5,5,5]],[2,[3,7,7,7]],[2,[3,5,5,6]],[3,[0,1]],[3,[1,3,4,4]],[3,[2,5,5,5]],[3,[3,7,7,7]],[3,[2,5,5,6]]],Sn="sine.inOut",Ht={duration:510,stagger:40},Ur=[{at:510,rows:[[60,560],[0,620],[110,520],[30,600]]},{at:0,rows:[[0,300],[20,300],[40,300],[10,300]]},{at:340,rows:[[20,500],[80,440],[0,520],[50,470]]}],Tn={duration:680,ease:"power2.in"},Ut=1190,An="http://www.w3.org/2000/svg",Ot=new WeakMap;function Cn(r){let n=r.querySelector('[data-scroll-driven="wrap"]'),t=n&&n.querySelector('[data-scroll-driven="stage"]');if(!t||getComputedStyle(n).display==="none")return function(){};let e=document.createElementNS(An,"svg");e.setAttribute("viewBox","0 0 1360 680"),e.setAttribute("aria-hidden","true"),e.setAttribute("preserveAspectRatio","none"),e.style.cssText="display:block;width:100%;height:100%;overflow:visible";let o=document.createElementNS(An,"path");o.setAttribute("fill","currentColor"),e.appendChild(o),t.appendChild(e);let s=document.createElement("div");s.style.cssText="position:absolute;inset:0;background:#fff;pointer-events:none;clip-path:circle(0px at 75% 50%)",t.appendChild(s);let l=_t.map(([,v])=>({x:v[0]*170,y:0,o:v.length===2})),c={v:0},b={v:0};function h(){let v="";for(let d=0;d<l.length;d++){let i=l[d].x.toFixed(2),f=(l[d].y-(l[d].o?c.v:0)).toFixed(2);v+="M"+i+" "+f+"h170v170h-170Z"}o.setAttribute("d",v);let p=b.v*Math.hypot(t.clientWidth*.75,t.clientHeight*.5)*1.01;s.style.clipPath="circle("+p.toFixed(1)+"px at 75% 50%)"}return h(),Ot.set(r,{wrap:n,stage:t,blocks:l,lift:c,white:b,render:h}),function(){Ot.delete(r),gsap.killTweensOf(l.concat(c,b)),e.remove(),s.remove()}}function Mn(r){let n=Ot.get(r);if(!n)return function(){};let t=gsap.timeline({paused:!0,onUpdate:n.render});_t.forEach(function([b,h],v){b&&t.fromTo(n.blocks[v],{y:0},{y:b*170,duration:Ht.duration-3*Ht.stagger,ease:Sn,immediateRender:!1},h[0]*Ht.stagger)});let e=gsap.timeline();Ur.forEach(function(b,h){_t.forEach(function([v,p],d){if(p.length<h+2||p[h]===p[h+1])return;let[i,f]=b.rows[v];(h?e:t).fromTo(n.blocks[d],{x:p[h]*170},{x:p[h+1]*170,duration:f,ease:Sn,immediateRender:!1},b.at+i)})});let o,s;function l(){let b=n.stage.getBoundingClientRect(),h=b.width/1360,v=b.height/680,p=680+Math.max(0,window.innerHeight-b.height)/v+20,d=p*v/h;o&&t.remove(o),t.remove(e),o=t.fromTo(n.lift,{v:0},{v:p,duration:d,ease:"none",immediateRender:!1},Ut),t.add(e,Ut+d),s&&t.remove(s),s=t.fromTo(n.white,{v:0},{v:1,duration:Tn.duration,ease:Tn.ease,immediateRender:!1},Ut+d+e.duration())}l(),ScrollTrigger.addEventListener("refreshInit",l);let c=ScrollTrigger.create({animation:t,trigger:n.wrap,start:"top top",end:()=>"+="+t.duration()*(n.stage.clientWidth/1360),pin:!0,scrub:!0});return function(){ScrollTrigger.removeEventListener("refreshInit",l),c.kill(!0),t.kill()}}function Vt(r){var n=[];function t(i,f,a,E){i.addEventListener(f,a,E),n.push(function(){i.removeEventListener(f,a,E)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var f=i.getAttribute("data-player-src");if(!f)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(G){}try{a.removeAttribute("src"),a.load()}catch(G){}function E(G){i.getAttribute("data-player-status")!==G&&i.setAttribute("data-player-status",G)}function P(G){a.muted=!!G,i.setAttribute("data-player-muted",a.muted?"true":"false")}function A(G){i.setAttribute("data-player-fullscreen",G?"true":"false")}function H(G){i.setAttribute("data-player-activated",G?"true":"false")}i.hasAttribute("data-player-activated")||H(!1);var N=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),U=i.querySelector("[data-player-buffered]"),T=i.querySelector("[data-player-timeline-handle]"),_=i.querySelectorAll("[data-player-time-duration]"),x=i.querySelectorAll("[data-player-time-progress]"),z=i.getAttribute("data-player-update-size"),$=i.getAttribute("data-player-lazy"),V=$==="true",L=$==="meta",j=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",k=!1;j?(P(!0),a.loop=!0):P(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var R=!!a.canPlayType("application/vnd.apple.mpegurl"),w=R&&"ManagedMediaSource"in window,u=!!(window.Hls&&Hls.isSupported())&&!w;if(z==="true"&&!L&&!V){var m=a.preload;a.preload="metadata";var y=function(){h(i,z,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",y),a.preload=m||""};t(a,"loadedmetadata",y,{once:!0}),a.src=f}function X(){d(f,u).then(function(G){G.width&&G.height&&h(i,z,G.width,G.height),_.length&&isFinite(G.duration)&&G.duration>0&&s(_,o(G.duration)),b(i,k)})}var W=!1,F=!1,q="";function D(){if(!W){if(W=!0,i._hls){try{i._hls.destroy()}catch(J){}i._hls=null}if(w)a.preload=V||L?"auto":a.preload,a.src=f,t(a,"loadedmetadata",function(){b(i,k),z==="true"&&h(i,z,a.videoWidth,a.videoHeight),_.length&&s(_,o(a.duration))},{once:!0});else if(u){var G=new Hls({maxBufferLength:10});G.attachMedia(a),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(f)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(b(i,k),z==="true"){var J=G.levels||[],ae=l(J);ae&&ae.width&&ae.height&&h(i,z,ae.width,ae.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(J,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&_.length&&s(_,o(ae.details.totalduration))}),i._hls=G}else a.src=f}}L?(X(),a.preload="none"):V?a.preload="none":D();function ne(){F=!0,a.paused||a.ended?((V||L)&&!W&&D(),k=!0,q="",E("loading"),c(a)):(q="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Z(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():Z()}t(document,"fullscreenchange",function(){A(se())}),t(document,"webkitfullscreenchange",function(){A(se())}),t(a,"webkitbeginfullscreen",function(){A(!0)}),t(a,"webkitendfullscreen",function(){A(!1)}),t(i,"click",function(G){var J=G.target.closest("[data-player-control]");if(!(!J||!i.contains(J))){var ae=J.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){_.length&&s(_,o(a.duration)),x.length&&s(x,o(a.currentTime))}t(a,"timeupdate",be),t(a,"loadedmetadata",function(){be(),v(i,z,a)}),t(a,"loadeddata",function(){v(i,z,a)}),t(a,"playing",function(){v(i,z,a)}),t(a,"durationchange",be);var ze;function Le(){if(a.duration){var G=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+G)+"%)"),T&&(T.style.left=G+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function Q(){if(!(!U||!a.duration||!a.buffered.length)){var G=a.buffered.end(a.buffered.length-1),J=G/a.duration*100;U.style.transform="translateX("+(-100+J)+"%)"}}if(t(a,"progress",Q),t(a,"loadedmetadata",Q),t(a,"durationchange",Q),t(a,"play",function(){H(!0),cancelAnimationFrame(ze),te(),E("playing")}),t(a,"playing",function(){k=!1,E("playing")}),t(a,"pause",function(){k=!1,cancelAnimationFrame(ze),Le(),E("paused")}),t(a,"waiting",function(){E("loading")}),t(a,"canplay",function(){b(i,k)}),t(a,"ended",function(){k=!1,cancelAnimationFrame(ze),Le(),E("paused"),H(!1)}),N){let G=function(g){ce||(ce=N.getBoundingClientRect());var K=(g-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},J=function(g){if(a.duration){var K=g*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),T&&(T.style.left=K+"%"),x.length&&s(x,o(g*a.duration))}},ae=function(g){a.duration&&(g-Te<Ee||(Te=g,a.currentTime=xe))},Ne=function(g){if(a.duration){I=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=N.getBoundingClientRect();var K=G(g.clientX);xe=K*a.duration,J(K),ae(performance.now()),N.setPointerCapture&&N.setPointerCapture(g.pointerId),window.addEventListener("pointermove",O,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),g.preventDefault()}},O=function(g){if(I){var K=G(g.clientX);xe=K*a.duration,J(K),ae(performance.now()),g.preventDefault()}},Y=function(){I&&(I=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?c(a):(Le(),be()),window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",Y))};var I=!1,ue=!1,xe=0,Te=0,Ee=180,ce=null;t(window,"resize",function(){I||(ce=null)}),t(N,"pointerdown",Ne,{passive:!1}),T&&t(T,"pointerdown",Ne,{passive:!1})}var me,de=3e3;function De(G){i.getAttribute("data-player-hover")!==G&&i.setAttribute("data-player-hover",G)}function qe(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),qe()}t(i,"pointerdown",Ae),t(document,"fullscreenchange",Ae),t(document,"webkitfullscreenchange",Ae);var He=!1;function ge(G){var J=i.getBoundingClientRect();G.clientX>=J.left&&G.clientX<=J.right&&G.clientY>=J.top&&G.clientY<=J.bottom&&Ae()}if(t(i,"pointerenter",function(){Ae(),He||(He=!0,t(window,"pointermove",ge,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),j){var Ue=new IntersectionObserver(function(G){G.forEach(function(J){var ae=J.isIntersecting&&J.intersectionRatio>0;ae?((V||L)&&!W&&D(),a.paused?(q="",k=!0,E("loading"),c(a)):E("playing")):!a.paused&&!a.ended&&(q="io",a.pause(),E("paused"))})},{threshold:.1});Ue.observe(i)}n.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(G){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(G){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var f=Math.floor(i),a=Math.floor(f/3600),E=Math.floor(f%3600/60),P=f%60;return a>0?a+":"+e(E)+":"+e(P):e(E)+":"+e(P)}function s(i,f){i.forEach(function(a){a.textContent=f})}function l(i){return!i||!i.length?null:i.reduce(function(f,a){return(a.width||0)>(f.width||0)?a:f},i[0])}function c(i){var f=i.play();f&&typeof f.then=="function"&&f.catch(function(){})}function b(i,f){!f&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function h(i,f,a,E){if(!(f!=="true"||!a||!E)){var P=i.querySelector("[data-player-before]");P&&(P.style.paddingTop=E/a*100+"%")}}function v(i,f,a){if(f==="true"){var E=i.querySelector("[data-player-before]");if(E){var P=E.style.paddingTop&&E.style.paddingTop!=="0%";!P&&a.videoWidth&&a.videoHeight&&h(i,f,a.videoWidth,a.videoHeight)}}}function p(i,f){try{return new URL(f,i).toString()}catch(a){return f}}function d(i,f){return new Promise(function(a){if(f&&window.Hls&&Hls.isSupported())try{var E=new Hls,P={width:0,height:0,duration:NaN},A=!1,H=!1;E.on(Hls.Events.MANIFEST_PARSED,function(U,T){var _=T&&T.levels||E.levels||[],x=l(_);x&&x.width&&x.height&&(P.width=x.width,P.height=x.height,A=!0)}),E.on(Hls.Events.LEVEL_LOADED,function(U,T){T&&T.details&&isFinite(T.details.totalduration)&&(P.duration=T.details.totalduration,H=!0)}),E.on(Hls.Events.ERROR,function(){try{E.destroy()}catch(U){}a(P)}),E.on(Hls.Events.LEVEL_LOADED,function(){try{E.destroy()}catch(U){}a(P)}),E.loadSource(i);return}catch(U){a({width:0,height:0,duration:NaN});return}function N(U){for(var T=U.split(/\r?\n/),_=0,x=0,z=null,$=null,V=0;V<T.length;V++){var L=T[V];if(L.indexOf("#EXT-X-STREAM-INF:")===0)$=L;else if($&&L&&L[0]!=="#"){z||(z=L.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec($);if(j){var oe=parseInt(j[1],10),k=parseInt(j[2],10);oe>_&&(_=oe,x=k)}$=null}}return{bestW:_,bestH:x,media:z}}function C(U){for(var T=0,_=/#EXTINF:([\d.]+)/g,x;x=_.exec(U);)T+=parseFloat(x[1]);return T}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(U){if(!U.ok)throw new Error("master");return U.text()}).then(function(U){var T=N(U);if(!T.media){a({width:T.bestW||0,height:T.bestH||0,duration:NaN});return}var _=p(i,T.media);return fetch(_,{credentials:"omit",cache:"no-store"}).then(function(x){if(!x.ok)throw new Error("media");return x.text()}).then(function(x){a({width:T.bestW||0,height:T.bestH||0,duration:C(x)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var _r="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Or="(min-width: 768px)";function Fn(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Vt(r),t=Rn(r);else{let e=!1;return vt(_r).catch(function(){}).then(function(){e||(n=Vt(r),t=Rn(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function Rn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,l,c,b,h,v,p,d="",i="",f="",a=(m,y=r)=>y.querySelector(m),E=m=>a(`[data-mini-showreel-lightbox="${m}"]`),P=m=>a(`[data-mini-showreel-player="${m}"]`),A=m=>m.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",m)||m,H=(m,y)=>{let X=m.width,W=X/y;return W>m.height&&(W=m.height,X=W*y),{left:m.left+(m.width-X)/2,top:m.top+(m.height-W)/2,width:X,height:W}},N=m=>{let y=A(m).getBoundingClientRect(),X=m.getBoundingClientRect(),W=X.width>0&&X.height>0?X.width/X.height:16/9;return H(y,W)},C=(m,y)=>gsap.set(m,{position:"fixed",left:y.left,top:y.top,width:y.width,height:y.height,margin:0,x:0,y:0});function U(m){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(y=>y.setAttribute("data-mini-showreel-status",m))}function T(){i=(l==null?void 0:l.style.zIndex)||"",f=(c==null?void 0:c.style.zIndex)||"",l&&(l.style.zIndex=String(e)),c&&(c.style.zIndex=String(e))}function _(){l&&(l.style.zIndex=i),c&&(c.style.zIndex=f)}function x(m){let y=P(m);if(!y)return;let X=y.querySelector("[data-bunny-player-init]"),W=y.querySelector("video");if(W){if(X){let F=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');F&&(W.paused||W.ended)&&F.click();return}try{W.play()}catch(F){}}}function z(m){let y=P(m);if(!y)return;let X=y.querySelector("[data-bunny-player-init]"),W=y.querySelector("video");W&&(W.muted=!0,X&&X.setAttribute("data-player-muted","true"),(W.paused||W.ended)&&x(m))}function $(){_(),o="",s=!1,l=c=b=h=v=p=null,d="",i="",f="",pe.start()}function V(m){if(!m||s||(l=E(m),c=P(m),!l||!c)||(b=a("[data-mini-showreel-target]",l),!b))return;o=m,s=!0,pe.stop(),c.dataset.flipId=o,d=c.style.cssText||"",h=c.parentElement,v=c.nextSibling,T(),U("active"),x(o);let y=Flip.getState(c),X=N(b);l.appendChild(c),C(c,X),p=Flip.from(y,{duration:n,ease:t,absolute:!0,scale:!1})}function L(m){!s||!c||m&&m!==o||(z(o),U("not-active"),p&&p.kill(),p=Flip.fit(c,h,{duration:n,ease:t,scale:!1,onComplete:()=>{h.insertBefore(c,v),c.style.cssText=d,$()}}))}function j(){!s||!c||(p&&p.kill(),z(o),U("not-active"),h.insertBefore(c,v),c.style.cssText=d,$())}function oe(){!s||!c||!b||C(c,N(b))}function k(m){let y=m.target.closest("[data-mini-showreel-open]");y&&(m.preventDefault(),V(y.getAttribute("data-mini-showreel-open")||""))}function R(m){let y=m.target.closest("[data-mini-showreel-close]");y&&(m.preventDefault(),L(y.getAttribute("data-mini-showreel-close")||""))}function w(m){m.key==="Escape"&&L("")}let u=gsap.matchMedia();return u.add(Or,function(){return r.addEventListener("click",k),document.addEventListener("click",R),window.addEventListener("keydown",w),window.addEventListener("resize",oe),function(){j(),r.removeEventListener("click",k),document.removeEventListener("click",R),window.removeEventListener("keydown",w),window.removeEventListener("resize",oe)}}),function(){u.revert(),j()}}var Ie=1920,_e=1080,Bt="#E5E5E5",qt="#000000",zn="http://www.w3.org/2000/svg";function Ln(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(zn,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${_e}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(u,m)=>{let y=document.createElementNS(zn,u);return y.setAttribute("fill",m),t.appendChild(y),y},o=e("polygon",Bt),s=e("polygon",qt),l=e("rect",qt),c=e("rect",Bt),b=e("rect",Bt),h=e("rect",qt);[l,c,b,h].forEach(u=>u.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let v=(u,m,y,X,W)=>{u.setAttribute("x",m),u.setAttribute("y",y),u.setAttribute("width",Math.max(0,X)),u.setAttribute("height",Math.max(0,W))},p={x:Ie*(2/3),y:_e*(1/3)},d=.1,i=.9,f={x:p.x,y:p.y},a={x:p.x,y:p.y},E={x:p.x,y:p.y},P=!1,A=()=>gsap.to(E,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:A}),H=()=>gsap.to(E,{y:gsap.utils.random(_e*.193,_e*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:H});A(),H();function N(){let u=gsap.utils.clamp(Ie*d,Ie*i,f.x),m=Ie-u,y=gsap.utils.clamp(_e*d,_e*i,f.y),X=_e-y;o.setAttribute("points",`0,${y} ${u},0 ${Ie},${y} ${Ie},${_e} 0,${_e}`),s.setAttribute("points",`${Ie},${y} ${u},0 ${u},${y}`),v(l,0,y,u,X);let W=u*.25,F=X*(2/3);v(c,u/2-W/2,y+X-F,W,F),v(b,u,y,m,X);let q=m*.5,D=X/3;v(h,u+m/2-q/2,y+X/2-D/2,q,D)}let C=.1,U=.03;function T(){let m=1-Math.pow(1-(P?C:U),gsap.ticker.deltaRatio(60)),y=P?a:E;f.x+=(y.x-f.x)*m,f.y+=(y.y-f.y)*m,N()}let _=(u,m)=>{let y=n.getBoundingClientRect();!y.width||!y.height||(a.x=gsap.utils.clamp(0,Ie,(u-y.left)/y.width*Ie),a.y=gsap.utils.clamp(0,_e,(m-y.top)/y.height*_e),P=!0)},x=()=>{P=!1},z=(u,m)=>{let y=n.getBoundingClientRect();u>=y.left&&u<=y.right&&m>=y.top&&m<=y.bottom?_(u,m):x()},V=window.matchMedia("(hover: hover) and (pointer: fine)").matches?We(z):null,L=u=>{let m=u.touches[0];m&&_(m.clientX,m.clientY)},j={passive:!0};n.addEventListener("touchstart",L,j),n.addEventListener("touchmove",L,j),n.addEventListener("touchend",x,j),n.addEventListener("touchcancel",x,j);let oe=!1,k=()=>{oe||(oe=!0,gsap.ticker.add(T))},R=()=>{oe&&(oe=!1,gsap.ticker.remove(T))},w=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:u=>u.isActive?k():R()});return N(),k(),function(){R(),w.kill(),gsap.killTweensOf(E),V&&V(),n.removeEventListener("touchstart",L,j),n.removeEventListener("touchmove",L,j),n.removeEventListener("touchend",x,j),n.removeEventListener("touchcancel",x,j),t.remove()}}var Vr="http://www.w3.org/2000/svg";var Br=4.1343749999999995,qr="#AFAFAF",Gr="#000000",Wr=5e3,Nr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Xr=0,Dn=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Be=(r,n)=>{let t=document.createElementNS(Vr,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function kn(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Xr;e.setAttribute("data-pulse-dots-paused","");let s=Be("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let l=Be("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});l.append(Be("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Br.toFixed(2)}),Be("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let c=Be("defs",{});c.appendChild(l);let b=Be("rect",{width:1e3,height:1e3,fill:qr}),h=Be("g",{filter:`url(#${o})`,fill:Gr});for(let p=0;p<20;p++)for(let d=0;d<20;d++){if(!Dn(d,p))continue;let i=Nr.filter(A=>Dn(d+A.dx,p+A.dy)),f=i[Math.floor(Math.random()*i.length)],a=185+d*31.5+27.5625/2,E=185+p*31.5+27.5625/2,P=Be("g",{transform:`rotate(${f.deg} ${a} ${E})`});P.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Wr)}ms`),P.append(Be("circle",{class:"pulse-dots__dot is--first",cx:a,cy:E,r:27.5625/2}),Be("circle",{class:"pulse-dots__dot is--last",cx:a,cy:E,r:27.5625/2})),h.appendChild(P)}s.append(c,b,h),e.appendChild(s);let v=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:p=>e.toggleAttribute("data-pulse-dots-paused",!p.isActive)});e.toggleAttribute("data-pulse-dots-paused",!v.isActive),t.push(()=>{v.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var Et=`#version 300 es
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
}`;var Gt=60,$r=1.5,Kr=1,Wn=150,Wt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Nn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function l(F,q){let D=e.createShader(F);return e.shaderSource(D,q),e.compileShader(D),D}let c=[];function b(F,q=In){let D=e.createProgram(),ne=l(e.VERTEX_SHADER,q),re=l(e.FRAGMENT_SHADER,F);e.attachShader(D,ne),e.attachShader(D,re),e.bindAttribLocation(D,0,"aVertexPosition"),e.bindAttribLocation(D,1,"aTextureCoord"),e.linkProgram(D);let se={p:D,v:ne,f:re,loc:{}};return c.push(se),se}function h(F){let{p:q,v:D,f:ne}=F;e.getProgramParameter(q,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(q),e.getShaderInfoLog(D),e.getShaderInfoLog(ne));let re=e.getProgramParameter(q,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let Z=e.getActiveUniform(q,se);F.loc[Z.name]=e.getUniformLocation(q,Z.name)}e.deleteShader(D),e.deleteShader(ne)}let v={bg:b(Hn,Et),shapes:Un.map(F=>b(F,_n)),trailSim:b(Vn,Et),trail:b(On),blur:Bn.map(F=>b(F)),bloom:qn.map(F=>b(F)),gmap:b(Gn,Et)},p=e.createVertexArray();e.bindVertexArray(p);let d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let f=[];function a(F,q,D=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),D&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,F,q,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,F,q,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:F,h:q};return f.push(se),se}function E(){f.forEach(F=>{e.deleteTexture(F.tex),e.deleteFramebuffer(F.fb)}),f.length=0}function P(F,q,D,ne){e.useProgram(F.p);let re=q?q.w:t.width,se=q?q.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,q?q.fb:null),e.viewport(0,0,re,se);let Z=F.loc;Z.uMVMatrix&&e.uniformMatrix4fv(Z.uMVMatrix,!1,Wt),Z.uPMatrix&&e.uniformMatrix4fv(Z.uPMatrix,!1,Wt),Z.uTextureMatrix&&e.uniformMatrix4fv(Z.uTextureMatrix,!1,Wt),Z.uResolution&&e.uniform2f(Z.uResolution,re,se),Z.uArtboardResolution&&e.uniform2f(Z.uArtboardResolution,1920,1920),Z.uAspectRatio&&e.uniform1f(Z.uAspectRatio,1),Z.uMousePos&&e.uniform2f(Z.uMousePos,A.x,A.y),Z.uIsMask&&e.uniform1i(Z.uIsMask,0),Z.uParentTrackMouse&&e.uniform1f(Z.uParentTrackMouse,0);let Pe=0;Object.keys(D).forEach(he=>{Z[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,D[he].tex),e.uniform1i(Z[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!Z[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(Z[he],be[0],be[1]):e.uniform1f(Z[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let A={x:.5,y:.5},H={x:.5,y:.5},N=0,C=null,U=0;function T(){E();let F=Math.min($r,window.devicePixelRatio||1),q=Math.max(1,Math.round(n.clientWidth*F)),D=Math.max(1,Math.round(n.clientHeight*F));t.width=q,t.height=D;let ne=Z=>[Math.max(1,Math.round(q*Z)),Math.max(1,Math.round(D*Z))];C={a:a(q,D),b:a(q,D),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(q,D),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(q,D)},P(v.bg,C.a,{});let re=C.a,se=C.b;v.shapes.forEach(Z=>{P(Z,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,U=0}function _(){if(!C)return;let F=C.pp[U],q=C.pp[1-U];P(v.trailSim,q,{uPingPongTexture:F},{uTime:N,uPreviousMousePos:[H.x,H.y]}),U=1-U,P(v.trail,C.trail,{uTexture:C.base,uPingPongTexture:q}),P(v.blur[0],C.blur1,{uTexture:C.trail}),P(v.blur[1],C.blur2,{uTexture:C.blur1}),P(v.blur[2],C.blur3,{uTexture:C.blur2}),P(v.blur[3],C.blur4,{uTexture:C.blur3});let D=C.blur4;P(v.bloom[0],C.bth,{uTexture:D}),P(v.bloom[1],C.bd1,{uTexture:C.bth}),P(v.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:D}),P(v.bloom[3],C.bs1,{uTexture:C.bd2}),P(v.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:D}),P(v.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:D}),P(v.gmap,null,{uTexture:C.bloom},{uTime:0}),H.x=A.x,H.y=A.y}let x=Wn,$=We((F,q)=>{let D=t.getBoundingClientRect();!D.width||!D.height||(A.x=(F-D.left)/D.width,A.y=1-(q-D.top)/D.height,x=0,k())}),V=null,L=0,j=!1;function oe(F){if(!j||x>=Wn){V=null;return}if(V=requestAnimationFrame(oe),F-L<1e3/Gt-1)return;let q=L?Math.min(F-L,100):1e3/Gt;L=F,N+=Kr*(q/(1e3/Gt)),_(),x++}function k(){m&&j&&!V&&(H.x=A.x,H.y=A.y,L=0,V=requestAnimationFrame(oe))}let R=new IntersectionObserver(([F])=>{j=F.isIntersecting,j?k():V&&(cancelAnimationFrame(V),V=null)});R.observe(n);let w=null,u=new ResizeObserver(()=>{clearTimeout(w),w=setTimeout(()=>{m&&(T(),_())},60)});u.observe(n);let m=!1,y=null;function X(){y=null,c.forEach(h),m=!0,T(),_()}function W(){c.every(F=>e.getProgramParameter(F.p,s.COMPLETION_STATUS_KHR))?X():y=requestAnimationFrame(W)}return s?y=requestAnimationFrame(W):X(),function(){y&&cancelAnimationFrame(y),V&&cancelAnimationFrame(V),V=null,clearTimeout(w),R.disconnect(),u.disconnect(),$(),E(),c.forEach(D=>e.deleteProgram(D.p)),e.deleteBuffer(d),e.deleteBuffer(i),e.deleteVertexArray(p);let q=e.getExtension("WEBGL_lose_context");q&&q.loseContext(),t.remove()}}var Zr="#BBC0C8",jr="#FFFFFF";var Nt='"Suisseintl Book", Arial, sans-serif';var Xn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],Jr=3,Qr=1.325,ft=5,eo=.4,Yn=20,to=2;function $n(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let l=(s%ft+ft)%ft/ft;return l<.4?1-e(l/.4):l<.6?0:e((l-.6)/.4)};return n.forEach(s=>{let l=(s.getAttribute("data-text")||"").trim();if(!l)return;let c=Array.from(Array(Jr).fill(l).join(" ").toUpperCase()),b=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=document.createElement("canvas");h.setAttribute("aria-hidden","true"),Object.assign(h.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(h);let v=h.getContext("2d"),p=[],d=0,i=new Map,f=2;function a(){v.font=`24px ${Nt}`,p=c.map(L=>v.measureText(L).width),d=(3363-p.reduce((L,j)=>L+j,0))/(c.length-1)}let E=null;function P(){i=new Map,v.font=`24px ${Nt}`;let V=24,L=24*.35,j=[...new Set(c)].filter(w=>w!==" ").map(w=>({ch:w,w:v.measureText(w).width})),oe=Math.ceil((V+L+f*2)*A),k=0;j.forEach(w=>{w.sx=k,w.sw=Math.ceil((w.w+f*2)*A),k+=w.sw+2}),E=document.createElement("canvas"),E.width=Math.max(1,k),E.height=Math.max(1,oe);let R=E.getContext("2d");R.font=`${24*A}px ${Nt}`,R.fillStyle=jr,R.textBaseline="alphabetic",j.forEach(w=>{R.fillText(w.ch,w.sx+f*A,(f+V)*A),i.set(w.ch,{sx:w.sx,sw:w.sw,x:-w.w/2-f,y:-V-f,w:w.sw/A,h:oe/A})})}let A=1;function H(){let V=Math.min(to,window.devicePixelRatio||1),L=s.clientWidth;h.width=Math.max(1,Math.round(L*V)),h.height=Math.max(1,Math.round(s.clientHeight*V)),A=h.width/1920}let N=0;function C(){v.setTransform(1,0,0,1,0,0),v.fillStyle=Zr,v.fillRect(0,0,h.width,h.height);let V=b?0:e(N%Yn/Yn)*Math.PI*2;Xn.forEach((L,j)=>{let oe=Xn.length-1-j,k=b?0:o(N-ft+oe*eo),R=d+k*Qr*24,w=2*Math.PI*L.r,u=L.start*Math.PI/180+V,m=0;for(let y=0;y<c.length;y++){let X=p[y];if(m+X>w)break;let W=i.get(c[y]);if(W){let F=u+(m+X/2)/L.r,q=Math.cos(F),D=Math.sin(F);v.setTransform(-D*A,q*A,-q*A,-D*A,(960+L.r*q)*A,(960+L.r*D)*A),v.drawImage(E,W.sx,0,W.sw,E.height,W.x,W.y,W.w,W.h)}m+=X+R}})}let U=(V,L)=>{N+=L/1e3,C()},T=!1,_=()=>{!T&&!b&&(T=!0,gsap.ticker.add(U))},x=()=>{T&&(T=!1,gsap.ticker.remove(U))},z=new ResizeObserver(()=>{H(),P(),C()});z.observe(s),H(),a(),P(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),P(),C()});let $=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:V=>V.isActive?_():x()});$.isActive&&_(),t.push(()=>{x(),$.kill(),z.disconnect(),h.remove()})}),()=>t.forEach(s=>s())}var Je={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Kn=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},no=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return Kn(n)*(1-e)+Kn(n+1)*e};function Zn(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,l=0,c=18,b=0,h=0,v=0,p=-1e5,d=-1e5,i=!1,f=!1;function a(){s&&s.revert(),n.textContent="";let x=getComputedStyle(n);l=parseFloat(x.paddingTop),c=parseFloat(x.lineHeight),b=n.offsetHeight;let z=Math.max(1,Math.floor((b-l-parseFloat(x.paddingBottom))/c)),$=document.createDocumentFragment();for(let V=0;V<z;V++){let L=document.createElement("div");L.className="type-field__row",L.textContent=t,$.appendChild(L)}n.appendChild($),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((V,L)=>({chars:V.querySelectorAll(".type-field__char"),cur:o[L]?o[L].cur:0,drawn:0}))}})}function E(x){let z=Math.max(0,Math.min(x.chars.length,Math.round(x.cur)));if(z===x.drawn)return;let $=Math.min(z,x.drawn),V=Math.max(z,x.drawn);for(let L=$;L<V;L++)x.chars[L].style.visibility=L<z?"visible":"hidden";x.drawn=z}function P(x,z){if(!o.length)return;let $=Math.min(z,50)/16.667,V=w=>1-Math.pow(1-w,$),L=pe.scroll,j=Math.min(Math.max(h-L,0),v-L-b);d+=(p-j-l-d)*V(Je.followEase);let oe=Math.floor(d/c),k=L*.004,R=i&&p>=h-L&&p<=v-L;for(let w=0;w<o.length;w++){let u=o[w],m=u.chars.length,y=Math.abs(w-oe),X=0;if(R){if(y===0)X=m;else if(y<=Je.radius){let W=1-y/(Je.radius+1);X=1+Math.min(Je.maxSide,W*(1-Je.ragged/2+Je.ragged*no(w*1.3+k)))*(m-1)}}u.cur+=(X-u.cur)*V(Je.ease),E(u)}}function A(){f||(gsap.ticker.add(P),f=!0)}function H(){f&&(gsap.ticker.remove(P),f=!1)}let N=We((x,z)=>{d<-1e4&&(d=z),p=z,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let U=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(x){h=x.start+window.innerHeight,v=x.end},onToggle(x){x.isActive?A():H()}});U.isActive&&A();let T,_=()=>{clearTimeout(T),T=setTimeout(()=>{Math.floor((n.offsetHeight-l-parseFloat(getComputedStyle(n).paddingBottom))/c)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",_),function(){H(),clearTimeout(T),N(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",_),U.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var jn={duration:.5,ease:"power3"};function Jn(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",jn),l=gsap.quickTo(o,"y",jn),c=0,b=0,h=!1,v=new ResizeObserver(()=>{c=o.offsetWidth,b=o.offsetHeight});v.observe(o),c=o.offsetWidth,b=o.offsetHeight;let d=We((f,a)=>{let E=e.getBoundingClientRect();if(!(f>=E.left&&f<=E.right&&a>=E.top&&a<=E.bottom)){h&&(h=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let A=gsap.utils.clamp(0,Math.max(0,E.width-c),f-E.left-c/2),H=gsap.utils.clamp(0,Math.max(0,E.height-b),a-E.top-b/2);if(!h){h=!0,s(A,A),l(H,H),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(A),l(H)}),i=()=>{h&&(h=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{d(),document.documentElement.removeEventListener("mouseleave",i),v.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var ro=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],oo=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],ao="#FFFFFF";var Qn="power3.out";function er(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],l=[];function c(){if(s.length&&s[0].isConnected)return;let p=e.querySelectorAll(":scope > div > div");o=(p.length?[...p]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),l=p.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function b(p){p.textContent=p.dataset.orig,p.style.border=""}let h=()=>{c(),l.forEach(d=>{d.el.style.overflow="visible"});let p=(s.length-1)/2;s.forEach((d,i)=>{gsap.to(d,{color:ao,ease:Qn,duration:.3,delay:Math.abs(i-p)*.03,overwrite:"auto",onStart:()=>{let f=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);f==1&&(d.textContent=gsap.utils.random(oo)),a==1&&(d.style.border=`1px solid ${gsap.utils.random(ro)}`)}})})},v=()=>{if(!s.length)return;let p=getComputedStyle(e).color,d=(s.length-1)/2;l.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,f)=>{gsap.to(i,{color:p,ease:Qn,duration:.3,delay:Math.abs(f-d)*.03,overwrite:"auto",onStart:()=>b(i)})})};e.addEventListener("mouseenter",h),e.addEventListener("mouseleave",v),t.push(()=>{e.removeEventListener("mouseenter",h),e.removeEventListener("mouseleave",v),gsap.killTweensOf(s),o.forEach(p=>p.revert()),o=[],s=[],l=[]})}),()=>t.forEach(e=>e())}function Xt(r,n){let t=null;le(vn(r)),le(Ln(r)),le(er(r)),le(Cn(r)),le(En(r)),le(fn(r)),le(Fn(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?pn(r):null,t?le(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(mn(r)),le(xn(r)),le(bn(r)),le(xt(r)),gt(r),le(yn(r)),t}function wt(r){le(Mn(r)),le(wn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(Pn(r)),le(tt(r.querySelector("[data-type-field]"),()=>Zn(r))),le(Jn(r)),le(tt(r.querySelector("[data-pulse-dots]"),()=>kn(r))),le(Nn(r)),le($n(r)),ScrollTrigger.sort()}var io={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function St(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,reduceWhiteSpace:!1,onSplit:function(s){gsap.set(t,{autoAlpha:1});var l=io[e],c={yPercent:110,duration:l.duration,stagger:l.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?c.delay=.5:c.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],c)}}))}),function(){n.forEach(function(t){t.revert()})}}var ar=br(tr());var nr=window.matchMedia("(prefers-reduced-motion: reduce)"),Kt=.9;function rr(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return nr.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:ht,duration:Kt,ease:Ve},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Kt,ease:Ve},0),e.set(t,{autoAlpha:0}),e)}function Zt(r,n,t="100vh"){let e=gsap.timeline();return nr.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:Kt,ease:Ve},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function jt(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),Zt(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var Qe=null,Jt=!1;function Qt(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var or={sync:!0,beforeLeave(){Jt=Lt({keepCurtain:!0}),pe.stop(),Qe||(Qe=zt())},beforeEnter(r){Qe||(Qe=zt()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),an(),Xt(r.next.container,!1)},leave(r){return rr(r.current.container,r.next.container)},enter(r){return Jt&&(nn(),Jt=!1),le(St(r.next.container)),Zt(r.next.container,Qt)},afterLeave(){Qe&&(Qe(),Qe=null)},afterEnter(r){sn(r),wt(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(ar.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...or,once(r){let n=document.querySelector("[data-menu-status]");rn(),on(),n&&(gt(n),xt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=Xt(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(St(t)),jt(t,function(s){Qt(s),wt(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(St(t)),jt(t,function(o){Qt(o),wt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...or}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

(()=>{var ur=Object.create;var en=Object.defineProperty;var dr=Object.getOwnPropertyDescriptor;var vr=Object.getOwnPropertyNames;var fr=Object.getPrototypeOf,pr=Object.prototype.hasOwnProperty;var mr=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var hr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of vr(n))!pr.call(r,o)&&o!==t&&en(r,o,{get:()=>n[o],enumerable:!(e=dr(n,o))||e.enumerable});return r};var gr=(r,n,t)=>(t=r!=null?ur(fr(r)):{},hr(n||!r||!r.__esModule?en(t,"default",{value:r,enumerable:!0}):t,r));var Qn=mr((Yt,$t)=>{(function(r,n){typeof Yt=="object"&&typeof $t!="undefined"?$t.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})(Yt,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,l=s.root,c=l===void 0?document.body:l,E=s.timeout,h=E===void 0?2e3:E,d=s.limit,f=d===void 0?0:d;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=c,this.timeout=h,this.limit=f},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var l=s.target,c=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(l));e.toPrefetch.has(c)&&(e.observer.unobserve(l),e.barba.cache.has(c)?e.barba.cache.update(c,{action:"prefetch"}):e.barba.cache.set(c,e.barba.request(c,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(E){e.logger.error(E)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var l=s,c=e.barba.dom.getHref(l);e.barba.cache.has(c)||e.barba.prevent.checkHref(c)||e.barba.prevent.checkLink(l,{},c)||(e.observer.observe(s),e.toPrefetch.add(c))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var Dt=[];function le(r){typeof r=="function"&&Dt.push(r)}function kt(){let r=Dt,n=ScrollTrigger.getAll();return Dt=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var xr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",xr);var Ve="parallax",gt=.8;var br="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",tn="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ke=null,It=function(){return!1};function nn(){Ke&&gsap.timeline().to(Ke,{clipPath:tn,duration:.9,ease:Ve,overwrite:!0},0).fromTo(Ke,{filter:"brightness(1)"},{filter:"brightness("+(1-gt)+")",duration:.9,ease:Ve},0).set(Ke,{clearProps:"filter"})}function rn(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;Ke=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ke&&gsap.to(Ke,{clipPath:o?br:tn,duration:.9,ease:Ve,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),It=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function on(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function an(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function sn(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function xt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let l=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){l();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},l)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function bt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),c=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+c}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function tt(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(l=>{e||!l.some(c=>c.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var je={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{je.x=r.clientX,je.y=r.clientY,je.known=!0},{passive:!0});function yt(){return je}function We(r){let n=e=>r(e.clientX,e.clientY),t=()=>{je.known&&r(je.x,je.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var nt=new Map;function yr(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),l=s.querySelector("svg");if(!l)return new Float32Array(0);var c=parseFloat(l.getAttribute("width")||512),E=parseFloat(l.getAttribute("height")||512),h=l.getAttribute("viewBox");if(h){var d=h.split(/[\s,]+/);c=+d[2],E=+d[3]}var f=Math.min(t/c,t/E)*.9,v=(t-c*f)/2,i=(t-E*f)/2;o.save(),o.translate(v,i),o.scale(f,f),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(x){if(x.tagName==="path"){var D=x.getAttribute("d");D&&o.fill(new Path2D(D))}else x.tagName==="rect"?o.fillRect(+x.getAttribute("x")||0,+x.getAttribute("y")||0,+x.getAttribute("width")||0,+x.getAttribute("height")||0):x.tagName==="circle"&&(o.beginPath(),o.arc(+x.getAttribute("cx")||0,+x.getAttribute("cy")||0,+x.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var p=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),P=0,y=0;y<t*t;y++)p[y*4+3]>30&&(a[P++]=y);if(!P)return new Float32Array(0);for(var T=new Float32Array(n*4),L=0;L<n;L++){var V=a[Math.floor(Math.random()*P)],C=V%t,F=(V-C)/t,A=p[V*4+3]/255,_=L*4;T[_]=(C-t/2)*1.2+(Math.random()-.5)*1.65,T[_+1]=-(F-t/2)*1.2+(Math.random()-.5)*1.65,T[_+2]=(Math.random()-.5)*37*A,T[_+3]=A}return T}function ot(r,n){var t=n+"|"+r;if(!nt.has(t)){var e;try{e=yr(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);nt.size>=4&&nt.delete(nt.keys().next().value),nt.set(t,Promise.resolve(e))}return nt.get(t)}var Et={};function at(r,n,t){for(var e=Et[r]||(Et[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?ln(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var l=o.renderer;return l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(n,t,!1),l.setClearColor(0,1),l.toneMapping=THREE.ACESFilmicToneMapping,l.toneMappingExposure=1.4,l.domElement.style.width="100%",l.domElement.style.height="100%",o}function it(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=Et[r]||(Et[r]=[]);if(e.length>=1){ln(n);return}t.setSize(1,1,!1),e.push(n)}function ln(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var Pr=.03,Er=.95,wr=.005,rt=Math.PI*2,Sr="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Tr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),Ar=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),Cr=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Mr=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),Rr=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function Pt(r,n){var t=new THREE.DataTexture(r,n,n,THREE.RGBAFormat,THREE.FloatType);return t.minFilter=t.magFilter=THREE.NearestFilter,t.needsUpdate=!0,t}function st(r,n){if(r.sim!==void 0)return r.sim;var t=r.renderer;if(!t.capabilities.isWebGL2||!t.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(n)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},l=[s(),s()],c=[s(),s()],E=0,h=new Float32Array(o*4),d=new Float32Array(o*4),f=new Float32Array(n*2),v=0;v<o;v++){var i=v*1.37,p=v*4;h[p]=i%rt,h[p+1]=i*.7%rt,h[p+2]=i*2.3%rt,h[p+3]=i*1.5%rt,d[p]=i*1.1%rt,d[p+1]=(v*2654435761&65535)/65535,d[p+2]=(v*48271&65535)/65535,d[p+3]=(v*16807&65535)/65535,v<n&&(f[v*2]=(v%e+.5)/e,f[v*2+1]=(Math.floor(v/e)+.5)/e)}var a=Pt(h,e),P=Pt(d,e),y=new Float32Array(o*4),T=Pt(y,e),L=new Float32Array(o*4),V=Pt(L,e),C=new THREE.Scene,F=new THREE.Camera,A=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);A.frustumCulled=!1,C.add(A);var _=function(H,R){return new THREE.ShaderMaterial({vertexShader:Sr,fragmentShader:H,uniforms:R,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},x=_(Tr,{tPos:{value:null},tVel:{value:null},tTgt:{value:T},tP1:{value:a},tP2:{value:P},time:{value:0},gravity:{value:Pr},wind:{value:wr},friction:{value:Er},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),D=_(Ar,{tPos:{value:null},tVel:{value:null}}),$=_(Cr,{tSrc:{value:null}}),B=new THREE.ShaderMaterial({vertexShader:Mr,fragmentShader:Rr,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:T},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function k(H,R){A.material=H,t.setRenderTarget(R),t.render(C,F)}function j(){B.uniforms.tPos.value=l[E].texture,B.uniforms.tVel.value=c[E].texture}var oe={material:B,refAttribute:function(){return new THREE.BufferAttribute(f,2)},setPoints:function(H,R){L.fill(0),y.fill(0);for(var w=0;w<R;w++){var u=w*4;L[u]=H[u],L[u+1]=H[u+1]+40,L[u+2]=H[u+2],y[u]=H[u],y[u+1]=H[u+1],y[u+2]=H[u+2],y[u+3]=w*.01%rt}V.needsUpdate=!0,T.needsUpdate=!0;var m=t.getRenderTarget();E=0,$.uniforms.tSrc.value=V,k($,l[0]),t.setRenderTarget(c[0]),t.clear(!0,!1,!1),t.setRenderTarget(m),j()},step:function(H,R){var w=t.getRenderTarget(),u=x.uniforms;u.time.value=H,R?(u.mouseOn.value=1,u.radius.value=R.radius,u.mousePos.value.copy(R.pos),u.mouseVel.value.set(R.vel.x,R.vel.y),u.mouseVelLen.value=R.vel.length()):u.mouseOn.value=0;var m=1-E;u.tPos.value=l[E].texture,u.tVel.value=c[E].texture,k(x,c[m]),D.uniforms.tPos.value=l[E].texture,D.uniforms.tVel.value=c[m].texture,k(D,l[m]),E=m,t.setRenderTarget(w),B.uniforms.uTime.value=H,j()},dispose:function(){l.concat(c).forEach(function(H){H.dispose()}),[a,P,T,V].forEach(function(H){H.dispose()}),[x,D,$,B].forEach(function(H){H.dispose()}),A.geometry.dispose()}};return r.sim=oe,oe}var Ht={};function vt(r){return Ht[r]||(Ht[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),Ht[r]}function cn(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("case",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var E=new THREE.PointLight(13931578,2.4,1200);E.position.set(-300,-100,300),t.add(E);var h=new THREE.PointLight(5913114,1.2,900);h.position.set(0,200,-300),t.add(h);var d=new THREE.PointLight(16750916,1.3,600);d.position.set(0,-250,200),t.add(d);var f=0,v=0,i=0,p=0,a=!1,P=0,y=0,T=Math.PI*2/6,L=new THREE.Vector2(9999,9999),V=new THREE.Raycaster,C=120,F=new THREE.Vector3(9999,9999,0),A=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,x=!1,D=0,$=0,B=8e4,k=.03,j=.95,oe=.005,H=12e4,R=null,w,u,m,b,X,N,z=0,G=!1,I=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var O=new THREE.BufferGeometry;w=new Float32Array(H*3),u=new Float32Array(H*3),m=new Float32Array(H*3),b=new Float32Array(H*3),X=new Float32Array(H),N=new Float32Array(H),O.setAttribute("position",new THREE.BufferAttribute(w,3)),O.setAttribute("color",new THREE.BufferAttribute(b,3)),O.setAttribute("size",new THREE.BufferAttribute(X,1)),O.setAttribute("alpha",new THREE.BufferAttribute(N,1)),O.setAttribute("velocity",new THREE.BufferAttribute(u,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;l=st(o,H),l&&O.setAttribute("ref",l.refAttribute());var K=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:g,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(O,K),l&&(R.frustumCulled=!1),t.add(R)}function se(O,Y){return ot(O,Y)}function Z(O){z=O.length/4;for(var Y=0;Y<z;Y++){var g=Y*3,K=Y*4,ie=O[K],Ce=O[K+1],Me=O[K+2],Re=O[K+3];w[g]=ie,w[g+1]=Ce+40,w[g+2]=Me,u[g]=u[g+1]=u[g+2]=0,m[g]=ie,m[g+1]=Ce,m[g+2]=Me;var M=ne[Math.floor(Math.random()*ne.length)],q=.7+Math.random()*.4;b[g]=M.r*q,b[g+1]=M.g*q,b[g+2]=M.b*q,X[Y]=1.8+Math.random()*3.8,N[Y]=.3+(Re||.7)*.75}l&&l.setPoints(O,z),R.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(S){R.geometry.attributes[S].needsUpdate=!0}),G=!0}function Pe(O){return se(O,Math.min(H,B)).then(function(Y){Y.length&&R&&Z(Y)})}function he(O){if(!(!G||!z)){if(I+=O,l){l.step(I,x?{pos:F,vel:_,radius:C}:null);return}for(var Y=0;Y<z;Y++){var g=Y*3,K=Y*1.37;if(u[g]+=Math.sin(I*.4+K)*.008+Math.sin(I*1.1+K*2.3)*.003,u[g+1]+=Math.cos(I*.35+K*.7)*.008+Math.sin(I*.9+K*1.5)*.004,u[g+2]+=Math.sin(I*.25+K*1.1)*.004,u[g+1]-=k*.06,u[g]+=Math.sin(I*.25+w[g+1]*.008)*oe*.6,u[g+2]+=Math.cos(I*.3+w[g]*.008)*oe*.3,x){var ie=w[g]-F.x,Ce=w[g+1]-F.y,Me=w[g+2]-F.z,Re=ie*ie+Ce*Ce+Me*Me,M=C*C;if(Re<M&&Re>.25){var q=Math.sqrt(Re),S=q/C,ee=(Y*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-S,1.5+ee),ke=1+Math.min(_.length()*.12,1),we=fe*ve*1.2*ke,Fe=1/q;u[g]+=ie*Fe*we,u[g+1]+=Ce*Fe*we,u[g+2]+=Me*Fe*we*.2;var ye=.02+ee*.06;u[g]+=_.x*fe*ye,u[g+1]+=_.y*fe*ye;var Ge=fe*.15;u[g]+=(ee-.5)*Ge,u[g+1]+=((Y*48271&65535)/65535-.5)*Ge}}var Oe=m[g],Mt=m[g+1]+40,et=m[g+2],lt=Oe-w[g],Xe=Mt-w[g+1],Ye=et-w[g+2],mt=Math.sqrt(lt*lt+Xe*Xe+Ye*Ye),ht=(Y*48271&65535)/65535,Rt=.003+ht*.003,Ft=1+Math.min(mt*.002,.5),ct=Rt*Ft;u[g]+=lt*ct,u[g+1]+=Xe*ct,u[g+2]+=Ye*ct;var ut=(Y*16807&65535)/65535,$e=j*(.92+ut*.06);u[g]*=$e,u[g+1]*=$e,u[g+2]*=$e,w[g]+=u[g],w[g+1]+=u[g+1],w[g+2]+=u[g+2];var dt=Math.sqrt(Math.pow(w[g]-m[g],2)+Math.pow(w[g+1]-m[g+1],2)+Math.pow(w[g+2]-m[g+2],2));N[Y]=.15+.55*(1-Math.min(dt*.005,1))+Math.sin(I*1.5+Y*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(O,Y){var g=s.domElement.getBoundingClientRect();if(!(g.width===0||g.height===0)&&(L.set((O-g.left)/g.width*2-1,-((Y-g.top)/g.height)*2+1),V.setFromCamera(L,e),V.ray.intersectPlane(ze,Le))){A.copy(F),R&&F.copy(Le).applyMatrix4(be.copy(R.matrixWorld).invert()),_.subVectors(F,A);var K=_.length();K>15&&_.multiplyScalar(15/K)}}function Q(O,Y){var g=r.getBoundingClientRect();return O>=g.left&&O<=g.right&&Y>=g.top&&Y<=g.bottom}var U=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!n){var Te=function(O){D=O.clientX,$=O.clientY;var Y=Q(O.clientX,O.clientY);if(Y){x=!0,te(O.clientX,O.clientY);var g=r.getBoundingClientRect(),K=Math.round(O.clientX-g.left),ie=Math.round(O.clientY-g.top);U&&(U.textContent="X: "+K+"PX    Y: "+ie+"PX")}else x=!1,F.set(9999,9999,0);a&&(f+=(O.clientX-P)*.005,i+=(O.clientY-y)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),P=O.clientX,y=O.clientY)},Ee=function(O){Q(O.clientX,O.clientY)&&(a=!0,P=O.clientX,y=O.clientY)},ce=function(){a=!1,f=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ce)}function me(){for(var O=4e3,Y=new THREE.BufferGeometry,g=new Float32Array(O*3),K=new Float32Array(O*3),ie=0;ie<O;ie++){g[ie*3]=(Math.random()-.5)*2200,g[ie*3+1]=(Math.random()-.5)*1800,g[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}Y.setAttribute("position",new THREE.BufferAttribute(g,3)),Y.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var M=Re.getContext("2d"),q=M.createRadialGradient(16,16,0,16,16,16);q.addColorStop(0,"rgba(255,255,255,1)"),q.addColorStop(.3,"rgba(255,255,255,0.6)"),q.addColorStop(.7,"rgba(255,255,255,0.15)"),q.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=q,M.fillRect(0,0,32,32);var S=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(Y,S);return ee.userData={positions:g,count:O},t.add(ee),ee}re();var de=n?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var qe=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(O){Ae=O[0].isIntersecting,O[0].isIntersecting&&!xe&&!n&&(xe=!0,U&&(U.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,W=0;function J(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!n){var O=yt();O.known&&(D=O.x,$=O.y);var Y=Q(D,$);Y?(x=!0,te(D,$)):(x=!1,F.set(9999,9999,0))}}window.addEventListener("scroll",J,{passive:!0});var ae=null;function Ne(){if(ae=requestAnimationFrame(Ne),!!Ae){W++;var O=Math.min(qe.getDelta(),.05),Y=qe.elapsedTime;if(n)v+=T*O;else{var g=f-v;g=g%(Math.PI*2),g>Math.PI&&(g-=Math.PI*2),g<-Math.PI&&(g+=Math.PI*2),v+=g*.12,p+=(i-p)*.12}if(R&&(R.rotation.x=p,R.rotation.y=v,R.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin(Y*.2+ie)*.05,K[ie*3]+=Math.cos(Y*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-v*35*.35,de.position.y=p*28*.35}c.position.x=300+Math.sin(Y*.3)*100,c.position.y=350+Math.cos(Y*.2)*80,E.intensity=2+Math.sin(Y*.5)*.4,d.intensity=.8+Math.sin(Y*.4+1)*.3,!(n&&ge&&W%4!==0)&&(he(O),s.render(t,e))}}return Ne(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",J),clearTimeout(Ue),He.disconnect(),t.traverse(function(O){O.geometry&&O.geometry.dispose()}),it("case",o),R=null}}function un(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=at("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),n.add(c);var E=new THREE.PointLight(5913114,1.2,900);E.position.set(0,200,-300),n.add(E);var h=new THREE.PointLight(16750916,1.3,600);h.position.set(0,-250,200),n.add(h);var d=0,f=Math.PI*2/6,v=8e4,i=.03,p=.95,a=.005,P=12e4,y=null,T,L,V,C,F,A,_=0,x=!1,D=0,$=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function B(){var te=new THREE.BufferGeometry;T=new Float32Array(P*3),L=new Float32Array(P*3),V=new Float32Array(P*3),C=new Float32Array(P*3),F=new Float32Array(P),A=new Float32Array(P),te.setAttribute("position",new THREE.BufferAttribute(T,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(F,1)),te.setAttribute("alpha",new THREE.BufferAttribute(A,1)),te.setAttribute("velocity",new THREE.BufferAttribute(L,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;s=st(e,P),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:U,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));y=new THREE.Points(te,ue),s&&(y.frustumCulled=!1),n.add(y)}function k(te,Q){return ot(te,Q)}function j(te){_=te.length/4;for(var Q=0;Q<_;Q++){var U=Q*3,ue=Q*4,xe=te[ue],Te=te[ue+1],Ee=te[ue+2],ce=te[ue+3];T[U]=xe,T[U+1]=Te+40,T[U+2]=Ee,L[U]=L[U+1]=L[U+2]=0,V[U]=xe,V[U+1]=Te,V[U+2]=Ee;var me=$[Math.floor(Math.random()*$.length)],de=.7+Math.random()*.4;C[U]=me.r*de,C[U+1]=me.g*de,C[U+2]=me.b*de,F[Q]=1.8+Math.random()*3.8,A[Q]=.3+(ce||.7)*.75}s&&s.setPoints(te,_),y.geometry.setDrawRange(0,_),["position","color","size","alpha"].forEach(function(De){y.geometry.attributes[De].needsUpdate=!0}),x=!0}function oe(te){return k(te,Math.min(P,v)).then(function(Q){Q.length&&y&&j(Q)})}function H(te){if(!(!x||!_)){if(D+=te,s){s.step(D,null);return}for(var Q=0;Q<_;Q++){var U=Q*3,ue=Q*1.37;L[U]+=Math.sin(D*.4+ue)*.008+Math.sin(D*1.1+ue*2.3)*.003,L[U+1]+=Math.cos(D*.35+ue*.7)*.008+Math.sin(D*.9+ue*1.5)*.004,L[U+2]+=Math.sin(D*.25+ue*1.1)*.004,L[U+1]-=i*.06,L[U]+=Math.sin(D*.25+T[U+1]*.008)*a*.6,L[U+2]+=Math.cos(D*.3+T[U]*.008)*a*.3;var xe=V[U],Te=V[U+1]+40,Ee=V[U+2],ce=xe-T[U],me=Te-T[U+1],de=Ee-T[U+2],De=Math.sqrt(ce*ce+me*me+de*de),qe=(Q*48271&65535)/65535,Ae=.003+qe*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;L[U]+=ce*ge,L[U+1]+=me*ge,L[U+2]+=de*ge;var Ue=(Q*16807&65535)/65535,W=p*(.92+Ue*.06);L[U]*=W,L[U+1]*=W,L[U+2]*=W,T[U]+=L[U],T[U+1]+=L[U+1],T[U+2]+=L[U+2];var J=Math.sqrt(Math.pow(T[U]-V[U],2)+Math.pow(T[U+1]-V[U+1],2)+Math.pow(T[U+2]-V[U+2],2));A[Q]=.15+.55*(1-Math.min(J*.005,1))+Math.sin(D*1.5+Q*.01)*.05}y.geometry.attributes.position.needsUpdate=!0,y.geometry.attributes.alpha.needsUpdate=!0,y.geometry.attributes.velocity.needsUpdate=!0}}B();for(var R=4e3,w=new THREE.BufferGeometry,u=new Float32Array(R*3),m=new Float32Array(R*3),b=0;b<R;b++){u[b*3]=(Math.random()-.5)*2200,u[b*3+1]=(Math.random()-.5)*1800,u[b*3+2]=-200-Math.random()*1800;var X=$[Math.floor(Math.random()*$.length)],N=.2+Math.random()*.3;m[b*3]=X.r*N,m[b*3+1]=X.g*N,m[b*3+2]=X.b*N}w.setAttribute("position",new THREE.BufferAttribute(u,3)),w.setAttribute("color",new THREE.BufferAttribute(m,3));var z=document.createElement("canvas");z.width=z.height=32;var G=z.getContext("2d"),I=G.createRadialGradient(16,16,0,16,16,16);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.3,"rgba(255,255,255,0.6)"),I.addColorStop(.7,"rgba(255,255,255,0.15)"),I.addColorStop(1,"rgba(255,255,255,0)"),G.fillStyle=I,G.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(z),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(w,ne);n.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var Z=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(Z.getDelta(),.05),Q=Z.elapsedTime;d+=f*te,y&&(y.rotation.y=d,y.position.y=5,y.scale.setScalar(.85));for(var U=0;U<R;U++)u[U*3+1]+=Math.sin(Q*.2+U)*.05,u[U*3]+=Math.cos(Q*.15+U*.5)*.03;w.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-d*35*.35,l.position.x=300+Math.sin(Q*.3)*100,l.position.y=350+Math.cos(Q*.2)*80,c.intensity=2+Math.sin(Q*.5)*.4,h.intensity=.8+Math.sin(Q*.4+1)*.3,H(te),o.render(n,t)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),it("card",e),y=null}}var dn="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function vn(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return vt(dn).then(function(){o||(s=t?Fr(n):cn(n))}),function(){o=!0,s&&s()}}return t?e():tt(n,e)}function fn(r){let n=r.querySelector("#axion-card");if(n)return tt(n,function(){let t=!1,e=null;return vt(dn).then(function(){t||(e=un(n))}),function(){t=!0,e&&e()}})}function Fr(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("home",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var E=new THREE.PointLight(13931578,2.4,1200);E.position.set(-300,-100,300),t.add(E);var h=new THREE.PointLight(5913114,1.2,900);h.position.set(0,200,-300),t.add(h);var d=new THREE.PointLight(16750916,1.3,600);d.position.set(0,-250,200),t.add(d);var f=0,v=0,i=0,p=0,a=!1,P=0,y=0,T=Math.PI*2/6,L=new THREE.Vector2(9999,9999),V=new THREE.Raycaster,C=120,F=new THREE.Vector3(9999,9999,0),A=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,x=!1,D=0,$=0,B=8e4,k=.03,j=.95,oe=.005,H=12e4,R=null,w,u,m,b,X,N,z=0,G=!1,I=!1,ne=0,re=0,se=null,Z=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var M=new THREE.BufferGeometry;w=new Float32Array(H*3),u=new Float32Array(H*3),m=new Float32Array(H*3),b=new Float32Array(H*3),X=new Float32Array(H),N=new Float32Array(H),M.setAttribute("position",new THREE.BufferAttribute(w,3)),M.setAttribute("color",new THREE.BufferAttribute(b,3)),M.setAttribute("size",new THREE.BufferAttribute(X,1)),M.setAttribute("alpha",new THREE.BufferAttribute(N,1)),M.setAttribute("velocity",new THREE.BufferAttribute(u,3));var q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;l=st(o,H),l&&M.setAttribute("ref",l.refAttribute());var ee=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:q,fragmentShader:S,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(M,ee),l&&(R.frustumCulled=!1),t.add(R)}function he(M,q){return ot(M,q)}function be(M){z=M.length/4;for(var q=0;q<z;q++){var S=q*3,ee=q*4,ve=M[ee],fe=M[ee+1],ke=M[ee+2],we=M[ee+3];w[S]=ve,w[S+1]=fe+40,w[S+2]=ke,u[S]=u[S+1]=u[S+2]=0,m[S]=ve,m[S+1]=fe,m[S+2]=ke;var Fe=Z[Math.floor(Math.random()*Z.length)],ye=.7+Math.random()*.4;b[S]=Fe.r*ye,b[S+1]=Fe.g*ye,b[S+2]=Fe.b*ye,X[q]=1.8+Math.random()*3.8,N[q]=.3+(we||.7)*.75}l&&l.setPoints(M,z),R.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(Ge){R.geometry.attributes[Ge].needsUpdate=!0}),G=!0,I=!1,ne=1}function ze(M){return he(M,Math.min(H,B)).then(function(q){q.length&&R&&be(q)})}function Le(M){if(!(!G||!z)){if(re+=M,l){l.step(re,x&&J==="interactive"?{pos:F,vel:_,radius:C}:null);return}for(var q=0;q<z;q++){var S=q*3,ee=q*1.37;if(u[S]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,u[S+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,u[S+2]+=Math.sin(re*.25+ee*1.1)*.004,u[S+1]-=k*.06,u[S]+=Math.sin(re*.25+w[S+1]*.008)*oe*.6,u[S+2]+=Math.cos(re*.3+w[S]*.008)*oe*.3,x&&J==="interactive"){var ve=w[S]-F.x,fe=w[S+1]-F.y,ke=w[S+2]-F.z,we=ve*ve+fe*fe+ke*ke,Fe=C*C;if(we<Fe&&we>.25){var ye=Math.sqrt(we),Ge=ye/C,Oe=(q*2654435761&65535)/65535,Mt=.6+Oe*.8,et=Math.pow(1-Ge,1.5+Oe),lt=1+Math.min(_.length()*.12,1),Xe=et*Mt*1.2*lt,Ye=1/ye;u[S]+=ve*Ye*Xe,u[S+1]+=fe*Ye*Xe,u[S+2]+=ke*Ye*Xe*.2;var mt=.02+Oe*.06;u[S]+=_.x*et*mt,u[S+1]+=_.y*et*mt;var ht=et*.15;u[S]+=(Oe-.5)*ht,u[S+1]+=((q*48271&65535)/65535-.5)*ht}}var Rt=m[S],Ft=m[S+1]+40,ct=m[S+2],ut=Rt-w[S],$e=Ft-w[S+1],dt=ct-w[S+2],or=Math.sqrt(ut*ut+$e*$e+dt*dt),ar=(q*48271&65535)/65535,ir=.003+ar*.003,sr=1+Math.min(or*.002,.5),zt=ir*sr;u[S]+=ut*zt,u[S+1]+=$e*zt,u[S+2]+=dt*zt;var lr=(q*16807&65535)/65535,Lt=j*(.92+lr*.06);u[S]*=Lt,u[S+1]*=Lt,u[S+2]*=Lt,w[S]+=u[S],w[S+1]+=u[S+1],w[S+2]+=u[S+2];var cr=Math.sqrt(Math.pow(w[S]-m[S],2)+Math.pow(w[S+1]-m[S+1],2)+Math.pow(w[S+2]-m[S+2],2));N[q]=.15+.55*(1-Math.min(cr*.005,1))+Math.sin(re*1.5+q*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),U=new THREE.Vector3;function ue(M,q){var S=s.domElement.getBoundingClientRect();if(!(S.width===0||S.height===0)&&(L.set((M-S.left)/S.width*2-1,-((q-S.top)/S.height)*2+1),V.setFromCamera(L,e),V.ray.intersectPlane(Q,U))){A.copy(F),R&&F.copy(U).applyMatrix4(te.copy(R.matrixWorld).invert()),_.subVectors(F,A);var ee=_.length();ee>15&&_.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function Ee(M,q){var S=Te().getBoundingClientRect();return M>=S.left&&M<=S.right&&q>=S.top&&q<=S.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(M){if(D=M.clientX,$=M.clientY,n||J!=="interactive"){x=!1,F.set(9999,9999,0);return}var q=Ee(M.clientX,M.clientY);if(q){x=!0,ue(M.clientX,M.clientY);var S=Te().getBoundingClientRect(),ee=Math.round(M.clientX-S.left),ve=Math.round(M.clientY-S.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else x=!1,F.set(9999,9999,0);a&&(f+=(M.clientX-P)*.005,i+=(M.clientY-y)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),P=M.clientX,y=M.clientY)}function qe(M){n||J!=="interactive"||Ee(M.clientX,M.clientY)&&(a=!0,P=M.clientX,y=M.clientY)}function Ae(){n||(a=!1,f=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",qe),window.addEventListener("mouseup",Ae);function He(){for(var M=4e3,q=new THREE.BufferGeometry,S=new Float32Array(M*3),ee=new Float32Array(M*3),ve=0;ve<M;ve++){S[ve*3]=(Math.random()-.5)*2200,S[ve*3+1]=(Math.random()-.5)*1800,S[ve*3+2]=-200-Math.random()*1800;var fe=Z[Math.floor(Math.random()*Z.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}q.setAttribute("position",new THREE.BufferAttribute(S,3)),q.setAttribute("color",new THREE.BufferAttribute(ee,3));var we=document.createElement("canvas");we.width=we.height=32;var Fe=we.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var Ge=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(we),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Oe=new THREE.Points(q,Ge);return Oe.userData={positions:S,count:M},t.add(Oe),Oe}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var W=new THREE.Clock,J="spin",ae=null;function Ne(){if(n){J="spin";return}if(ae===null){var M=document.querySelector(".scaling-element-video");ae=M&&getComputedStyle(M).display!=="none"}if(!ae){J="spin";return}var q=window._flipProgress||0;q>.85?J="interactive":q>.7?J="transition":J="spin"}var O="spin",Y=!0,g=new IntersectionObserver(function(M){Y=M[0].isIntersecting},{threshold:0});g.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var M=yt();M.known&&(D=M.x,$=M.y);var q=Ee(D,$);q?(x=!0,ue(D,$)):(x=!1,F.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!Y){Ce++;var M=Math.min(W.getDelta(),.05),q=W.elapsedTime;Ne(),O==="interactive"&&J!=="interactive"&&(x=!1,F.set(9999,9999,0),a=!1);var S=J==="transition"||J==="interactive";if(S&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!S&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),O=J,x&&!Ee(D,$)&&(x=!1,F.set(9999,9999,0)),J==="spin")v+=T*M,p+=(0-p)*.05;else if(J==="transition")v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2),v+=(0-v)*.025,p+=(0-p)*.025;else{var ee=f-v;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),v+=ee*.12,p+=(i-p)*.12}R&&(R.rotation.x=p,R.rotation.y=v,R.scale.setScalar(1),R.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(q*.2+fe)*.05,ve[fe*3]+=Math.cos(q*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-v*35*.35,ge.position.y=p*28*.35,c.position.x=300+Math.sin(q*.3)*100,c.position.y=350+Math.cos(q*.2)*80,E.intensity=2+Math.sin(q*.5)*.4,d.intensity=.8+Math.sin(q*.4+1)*.3,!(n&&K&&Ce%4!==0)&&(Le(M),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",qe),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),g.disconnect(),t.traverse(function(M){M.geometry&&M.geometry.dispose()}),it("home",o),R=null}}function pn(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),l=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),c=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ve},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(l.length&&c.set(l,{autoAlpha:1},0),s.length>=2){let E=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),h=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([E.chars,h.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),c.to(E.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),c.to(E.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),c.to(h.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),c.to(h.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return c}function mn(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(d=>{let f=d.parentElement;f&&(d.style.whiteSpace="nowrap",e.has(f)||e.set(f,[]),e.get(f).push(d))});function o(d){let f=getComputedStyle(d);return d.clientWidth-parseFloat(f.paddingLeft)-parseFloat(f.paddingRight)}function s(d,f){if(f<=0)return;let v=parseFloat(getComputedStyle(d).fontSize)||16;for(let i=0;i<5;i++){let p=d.getBoundingClientRect().width;if(p<=0)break;let a=f/p;if(Math.abs(a-1)<.002)break;v*=a,d.style.fontSize=v+"px"}}function l(){e.forEach((d,f)=>{let v=o(f);d.forEach(i=>s(i,v))})}let c=null;function E(){c||(c=requestAnimationFrame(()=>{c=null,l()}))}let h;return window.ResizeObserver&&(h=new ResizeObserver(E),e.forEach((d,f)=>h.observe(f))),window.addEventListener("resize",E),l(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(l),()=>{c&&cancelAnimationFrame(c),h&&h.disconnect(),window.removeEventListener("resize",E),t.forEach(d=>{d.style.whiteSpace="",d.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},Ut=.08,zr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},hn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function gn(r,n){var t=(1-n)*100+"%";return r==="left"?"inset(0% 0% 0% "+t+")":r==="up"?"inset("+t+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+t+" 0%)":"inset(0% "+t+" 0% 0%)"}function Lr(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function xn(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",l=o.getAttribute("data-marker-theme")||"#000000",c=o.getAttribute("data-marker-scroll-start")||"top 90%",E=l.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(l).trim()||l,h=hn[s]||hn.right,d=zr[o.getAttribute("data-highlight-marker-reveal")]||null;d&&(E=d.bar);var f=o.closest("[data-cursor-label]"),v={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,p=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){v.timeline&&v.timeline.kill(),v.scrollTrigger&&v.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(A){A.remove()}),v.listeners.forEach(function(A){A.el.removeEventListener(A.type,A.fn)}),v.listeners=[],i=!1;var P=a.lines,y=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(P.forEach(function(A,_){gsap.set(A,{position:"relative",overflow:"hidden"});var x=Lr(E,h.origin);gsap.set(x,{[h.prop]:0}),A.appendChild(x),d&&(gsap.set(A,{zIndex:0,color:d.text}),gsap.set(x,{zIndex:-1})),y.to(x,{[h.prop]:1,duration:Se.duration,ease:Se.ease},_*Ut);var D=function(){i&&(gsap.to(x,{[h.prop]:0,duration:Se.duration,ease:Se.ease}),d&&gsap.to(A,{color:d.hoverText,duration:Se.duration,ease:Se.ease}))},$=function(){i&&(gsap.to(x,{[h.prop]:1,duration:Se.duration,ease:Se.ease}),d&&gsap.to(A,{color:d.text,duration:Se.duration,ease:Se.ease}))};!d&&e&&(A.addEventListener("mouseenter",D),A.addEventListener("mouseleave",$),v.listeners.push({el:A,type:"mouseenter",fn:D},{el:A,type:"mouseleave",fn:$}))}),v.timeline=y,f){y.kill();var T=o.querySelectorAll(".highlight-marker-bar");gsap.set(P,{clipPath:gn(s,0)});var L=function(A){gsap.to(T,{[h.prop]:A,duration:Se.duration,ease:Se.ease,stagger:Ut,overwrite:!0}),gsap.to(P,{clipPath:gn(s,A),duration:Se.duration,ease:Se.ease,stagger:Ut,overwrite:!0})},V=function(){L(1)},C=function(){L(0)};f.addEventListener("cursorlabel:enter",V),f.addEventListener("cursorlabel:leave",C),v.listeners.push({el:f,type:"cursorlabel:enter",fn:V},{el:f,type:"cursorlabel:leave",fn:C});return}var F=ScrollTrigger.create({trigger:o,start:c,once:!0,onEnter:function(){y.play()}});v.scrollTrigger=F}});v.split=p,t.push(v)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function bn(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),l=r.querySelectorAll("[data-cursor-marquee-text]");if(!l.length)return;let c=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),E=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),h=null,d=f=>{c(f.clientX),E(f.clientY)};return window.addEventListener("pointermove",d,{passive:!0}),l.forEach(f=>{f.addEventListener("mouseenter",()=>{h&&clearTimeout(h);let v=f.getAttribute("data-cursor-marquee-text")||"",i=(v.length||1)/e;s.forEach(p=>{p.textContent=v,p.style.animationPlayState="running",p.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),f.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),h&&clearTimeout(h),h=setTimeout(()=>{s.forEach(v=>{v.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",d),clearTimeout(h),gsap.killTweensOf(o)}}function yn(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let l=s.target;s.isIntersecting?t(l):l.paused||l.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function Pn(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(c){window._flipProgress=c.progress}}}),n.forEach(function(c,E){let h=E+1;if(h<n.length){let d=n[h],f=d.getBoundingClientRect(),v=c.getBoundingClientRect(),i=f.top+window.pageYOffset+d.offsetHeight/2,p=v.top+window.pageYOffset+c.offsetHeight/2,a=i-p;e.add(Flip.fit(t,d,{duration:a,ease:"none"}))}})}o();let s,l=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",l),function(){clearTimeout(s),window.removeEventListener("resize",l),e&&e.kill()}}var Dr="150%";function kr(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var _t=new WeakMap;function En(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(l){return l.textContent})}),o=t.map(kr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),_t.set(r,{wrap:n,lines:t,lineChars:o}),function(){_t.delete(r),t.forEach(function(s,l){s.querySelectorAll("textPath").forEach(function(c,E){c.textContent=e[l][E]})})}}function wn(r){let n=_t.get(r);if(!n)return function(){};let t=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Dr,pin:!0,scrub:!0}});return n.lines.forEach(function(e,o){let s=n.lineChars[o];s.length&&t.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}var Ir="600%",Hr="power2.inOut";var wt={duration:.8,ease:"expo.out",stagger:.08,start:"top 90%"},St=[[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,2],[16,1],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[25,1],[0,1],[10,1],[19,2],[30,1],[2,2],[12,2],[20,2],[34,2],[4,0],[14,1],[22,0],[39,3],[9,2],[15,3],[24,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,3],[31,2],[36,3],[22,2],[27,2],[32,2],[37,2],[23,2],[28,1],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]],ft={fall23:{delay:[.113,.053,.228,.025,.188,.128,.02,.178,.013,.152,.024,.032,.149,.289,.043,.078,.22,.332,.202,.139],duration:[1.191,.819,1.143,.916,.858,.847,.923,1.126,.872,1.033,1.056,.949,1.019,.825,.824,.882,1.072,.971,.926,1.034]},across34:{delay:[.185,.205,.295,.315,.309,.128,.332,.148,.107,.033,.179,.054,.096,.214,.272,.263,.03,.021,.089,.193],duration:[1.136,1.12,1.174,1.036,1.055,.917,.926,.882,1.014,1.043,1.029,.957,.97,.899,1.126,1.032,1.099,1.125,.912,.847]},across45:{delay:[.329,.12,.154,.335,.326,.137,.155,.319,.243,.195,.004,.266,.219,.119,.059,.001,.057,.049,.137,.244],duration:[1.126,.852,1.175,.973,1.075,1.016,1.127,.913,1.041,.844,1.056,.961,1.062,1.034,1.031,1.159,1.185,.894,.852,1.19]},fall45:{delay:[.159,.105,.278,.245,.085,.201,.184,.306,.255,.101,.343,.041,.146,.265,.053,.171,.014,.234,.268,.201],duration:[1.15,.925,1.078,1.038,1.032,.982,1.136,1.178,.99,1.066,.824,1.081,1.059,1.197,1.129,.914,.954,1.067,.809,.985]},fall56:{delay:[.059,.041,.021,.269,.045,.087,.137,.305,.028,.157,.192,.309,.287,.302,.097,.145,.126,.309,.335,.053],duration:[.87,.893,.893,.994,1.036,.905,.802,.968,.948,1.027,1.181,1.076,1.006,1.047,1.07,.822,1.16,1.112,1.15,1.119]}},Sn="http://www.w3.org/2000/svg",Ot=new WeakMap;function Tn(r){let n=r.querySelector('[data-scroll-driven="wrap"]'),t=n&&n.querySelector('[data-scroll-driven="stage"]');if(!t||getComputedStyle(n).display==="none")return function(){};let e=document.createElementNS(Sn,"svg");e.setAttribute("viewBox","0 0 1360 680"),e.setAttribute("aria-hidden","true"),e.style.cssText="display:block;width:100%;height:100%";let o=document.createElementNS(Sn,"path");o.setAttribute("fill","currentColor"),e.appendChild(o),t.appendChild(e);let s=St[0].map(([E,h])=>({x:E*34,y:h*170})),l=[0,1,2,3].map(()=>({v:0}));function c(){let E="";for(let h=0;h<s.length;h++){let d=s[h],f=170*l[h%4].v;if(f<.01)continue;let v=d.x.toFixed(2),i=(d.x+34).toFixed(2),p=(d.y+170).toFixed(2);E+="M"+v+" "+(d.y+170-f).toFixed(2)+"H"+i+"V"+p+"H"+v+"Z"}o.setAttribute("d",E)}return c(),Ot.set(r,{wrap:n,stage:t,strips:s,rise:l,render:c}),function(){Ot.delete(r),gsap.killTweensOf(s.concat(l)),e.remove()}}function An(r){let n=Ot.get(r);if(!n)return function(){};let t=gsap.to(n.rise,{v:1,duration:wt.duration,ease:wt.ease,stagger:wt.stagger,paused:!0,onUpdate:n.render}),e=ScrollTrigger.create({trigger:n.stage,start:wt.start,once:!0,onEnter:function(){t.play()}}),o=gsap.timeline({onUpdate:n.render,scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Ir,pin:!0,scrub:!0}}),s=St[0].map(f=>f.slice());function l(f,v,i,p,a){let P=v?"y":"x",y=v?170:34,T=i;return n.strips.forEach(function(L,V){let C=s[V][v]*y,F=St[f][V][v]*y;C!==F&&(o.fromTo(L,{[P]:C},{[P]:F,duration:a(V),ease:Hr,immediateRender:!1},i+p(V)),s[V][v]=St[f][V][v],T=Math.max(T,i+p(V)+a(V)))}),T+.25}let c=f=>Math.floor(s[f][0]/5)*.12,E=()=>1,h=f=>[v=>f.delay[v],v=>f.duration[v]],d=.25;return d=l(1,1,d,c,E),d=l(2,1,d,...h(ft.fall23)),d=l(3,0,d,...h(ft.across34)),d=l(4,0,d-.25,...h(ft.across45)),d=l(4,1,d-.25,...h(ft.fall45)),d=l(5,1,d,...h(ft.fall56)),d=l(6,1,d,c,E),o.to({},{duration:0},d),function(){e.kill(),t.kill(),o.scrollTrigger&&o.scrollTrigger.kill(!0),o.kill()}}function Vt(r){var n=[];function t(i,p,a,P){i.addEventListener(p,a,P),n.push(function(){i.removeEventListener(p,a,P)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var p=i.getAttribute("data-player-src");if(!p)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(W){}try{a.removeAttribute("src"),a.load()}catch(W){}function P(W){i.getAttribute("data-player-status")!==W&&i.setAttribute("data-player-status",W)}function y(W){a.muted=!!W,i.setAttribute("data-player-muted",a.muted?"true":"false")}function T(W){i.setAttribute("data-player-fullscreen",W?"true":"false")}function L(W){i.setAttribute("data-player-activated",W?"true":"false")}i.hasAttribute("data-player-activated")||L(!1);var V=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),F=i.querySelector("[data-player-buffered]"),A=i.querySelector("[data-player-timeline-handle]"),_=i.querySelectorAll("[data-player-time-duration]"),x=i.querySelectorAll("[data-player-time-progress]"),D=i.getAttribute("data-player-update-size"),$=i.getAttribute("data-player-lazy"),B=$==="true",k=$==="meta",j=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",H=!1;j?(y(!0),a.loop=!0):y(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var R=!!a.canPlayType("application/vnd.apple.mpegurl"),w=R&&"ManagedMediaSource"in window,u=!!(window.Hls&&Hls.isSupported())&&!w;if(D==="true"&&!k&&!B){var m=a.preload;a.preload="metadata";var b=function(){h(i,D,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",b),a.preload=m||""};t(a,"loadedmetadata",b,{once:!0}),a.src=p}function X(){v(p,u).then(function(W){W.width&&W.height&&h(i,D,W.width,W.height),_.length&&isFinite(W.duration)&&W.duration>0&&s(_,o(W.duration)),E(i,H)})}var N=!1,z=!1,G="";function I(){if(!N){if(N=!0,i._hls){try{i._hls.destroy()}catch(J){}i._hls=null}if(w)a.preload=B||k?"auto":a.preload,a.src=p,t(a,"loadedmetadata",function(){E(i,H),D==="true"&&h(i,D,a.videoWidth,a.videoHeight),_.length&&s(_,o(a.duration))},{once:!0});else if(u){var W=new Hls({maxBufferLength:10});W.attachMedia(a),W.on(Hls.Events.MEDIA_ATTACHED,function(){W.loadSource(p)}),W.on(Hls.Events.MANIFEST_PARSED,function(){if(E(i,H),D==="true"){var J=W.levels||[],ae=l(J);ae&&ae.width&&ae.height&&h(i,D,ae.width,ae.height)}}),W.on(Hls.Events.LEVEL_LOADED,function(J,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&_.length&&s(_,o(ae.details.totalduration))}),i._hls=W}else a.src=p}}k?(X(),a.preload="none"):B?a.preload="none":I();function ne(){z=!0,a.paused||a.ended?((B||k)&&!N&&I(),H=!0,G="",P("loading"),c(a)):(G="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Z(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():Z()}t(document,"fullscreenchange",function(){T(se())}),t(document,"webkitfullscreenchange",function(){T(se())}),t(a,"webkitbeginfullscreen",function(){T(!0)}),t(a,"webkitendfullscreen",function(){T(!1)}),t(i,"click",function(W){var J=W.target.closest("[data-player-control]");if(!(!J||!i.contains(J))){var ae=J.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){_.length&&s(_,o(a.duration)),x.length&&s(x,o(a.currentTime))}t(a,"timeupdate",be),t(a,"loadedmetadata",function(){be(),d(i,D,a)}),t(a,"loadeddata",function(){d(i,D,a)}),t(a,"playing",function(){d(i,D,a)}),t(a,"durationchange",be);var ze;function Le(){if(a.duration){var W=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+W)+"%)"),A&&(A.style.left=W+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function Q(){if(!(!F||!a.duration||!a.buffered.length)){var W=a.buffered.end(a.buffered.length-1),J=W/a.duration*100;F.style.transform="translateX("+(-100+J)+"%)"}}if(t(a,"progress",Q),t(a,"loadedmetadata",Q),t(a,"durationchange",Q),t(a,"play",function(){L(!0),cancelAnimationFrame(ze),te(),P("playing")}),t(a,"playing",function(){H=!1,P("playing")}),t(a,"pause",function(){H=!1,cancelAnimationFrame(ze),Le(),P("paused")}),t(a,"waiting",function(){P("loading")}),t(a,"canplay",function(){E(i,H)}),t(a,"ended",function(){H=!1,cancelAnimationFrame(ze),Le(),P("paused"),L(!1)}),V){let W=function(g){ce||(ce=V.getBoundingClientRect());var K=(g-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},J=function(g){if(a.duration){var K=g*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),A&&(A.style.left=K+"%"),x.length&&s(x,o(g*a.duration))}},ae=function(g){a.duration&&(g-Te<Ee||(Te=g,a.currentTime=xe))},Ne=function(g){if(a.duration){U=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=V.getBoundingClientRect();var K=W(g.clientX);xe=K*a.duration,J(K),ae(performance.now()),V.setPointerCapture&&V.setPointerCapture(g.pointerId),window.addEventListener("pointermove",O,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),g.preventDefault()}},O=function(g){if(U){var K=W(g.clientX);xe=K*a.duration,J(K),ae(performance.now()),g.preventDefault()}},Y=function(){U&&(U=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?c(a):(Le(),be()),window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",Y))};var U=!1,ue=!1,xe=0,Te=0,Ee=180,ce=null;t(window,"resize",function(){U||(ce=null)}),t(V,"pointerdown",Ne,{passive:!1}),A&&t(A,"pointerdown",Ne,{passive:!1})}var me,de=3e3;function De(W){i.getAttribute("data-player-hover")!==W&&i.setAttribute("data-player-hover",W)}function qe(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),qe()}t(i,"pointerdown",Ae),t(document,"fullscreenchange",Ae),t(document,"webkitfullscreenchange",Ae);var He=!1;function ge(W){var J=i.getBoundingClientRect();W.clientX>=J.left&&W.clientX<=J.right&&W.clientY>=J.top&&W.clientY<=J.bottom&&Ae()}if(t(i,"pointerenter",function(){Ae(),He||(He=!0,t(window,"pointermove",ge,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),j){var Ue=new IntersectionObserver(function(W){W.forEach(function(J){var ae=J.isIntersecting&&J.intersectionRatio>0;ae?((B||k)&&!N&&I(),a.paused?(G="",H=!0,P("loading"),c(a)):P("playing")):!a.paused&&!a.ended&&(G="io",a.pause(),P("paused"))})},{threshold:.1});Ue.observe(i)}n.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(W){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(W){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var p=Math.floor(i),a=Math.floor(p/3600),P=Math.floor(p%3600/60),y=p%60;return a>0?a+":"+e(P)+":"+e(y):e(P)+":"+e(y)}function s(i,p){i.forEach(function(a){a.textContent=p})}function l(i){return!i||!i.length?null:i.reduce(function(p,a){return(a.width||0)>(p.width||0)?a:p},i[0])}function c(i){var p=i.play();p&&typeof p.then=="function"&&p.catch(function(){})}function E(i,p){!p&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function h(i,p,a,P){if(!(p!=="true"||!a||!P)){var y=i.querySelector("[data-player-before]");y&&(y.style.paddingTop=P/a*100+"%")}}function d(i,p,a){if(p==="true"){var P=i.querySelector("[data-player-before]");if(P){var y=P.style.paddingTop&&P.style.paddingTop!=="0%";!y&&a.videoWidth&&a.videoHeight&&h(i,p,a.videoWidth,a.videoHeight)}}}function f(i,p){try{return new URL(p,i).toString()}catch(a){return p}}function v(i,p){return new Promise(function(a){if(p&&window.Hls&&Hls.isSupported())try{var P=new Hls,y={width:0,height:0,duration:NaN},T=!1,L=!1;P.on(Hls.Events.MANIFEST_PARSED,function(F,A){var _=A&&A.levels||P.levels||[],x=l(_);x&&x.width&&x.height&&(y.width=x.width,y.height=x.height,T=!0)}),P.on(Hls.Events.LEVEL_LOADED,function(F,A){A&&A.details&&isFinite(A.details.totalduration)&&(y.duration=A.details.totalduration,L=!0)}),P.on(Hls.Events.ERROR,function(){try{P.destroy()}catch(F){}a(y)}),P.on(Hls.Events.LEVEL_LOADED,function(){try{P.destroy()}catch(F){}a(y)}),P.loadSource(i);return}catch(F){a({width:0,height:0,duration:NaN});return}function V(F){for(var A=F.split(/\r?\n/),_=0,x=0,D=null,$=null,B=0;B<A.length;B++){var k=A[B];if(k.indexOf("#EXT-X-STREAM-INF:")===0)$=k;else if($&&k&&k[0]!=="#"){D||(D=k.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec($);if(j){var oe=parseInt(j[1],10),H=parseInt(j[2],10);oe>_&&(_=oe,x=H)}$=null}}return{bestW:_,bestH:x,media:D}}function C(F){for(var A=0,_=/#EXTINF:([\d.]+)/g,x;x=_.exec(F);)A+=parseFloat(x[1]);return A}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(F){if(!F.ok)throw new Error("master");return F.text()}).then(function(F){var A=V(F);if(!A.media){a({width:A.bestW||0,height:A.bestH||0,duration:NaN});return}var _=f(i,A.media);return fetch(_,{credentials:"omit",cache:"no-store"}).then(function(x){if(!x.ok)throw new Error("media");return x.text()}).then(function(x){a({width:A.bestW||0,height:A.bestH||0,duration:C(x)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var Ur="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",_r="(min-width: 768px)";function Mn(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Vt(r),t=Cn(r);else{let e=!1;return vt(Ur).catch(function(){}).then(function(){e||(n=Vt(r),t=Cn(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function Cn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,l,c,E,h,d,f,v="",i="",p="",a=(m,b=r)=>b.querySelector(m),P=m=>a(`[data-mini-showreel-lightbox="${m}"]`),y=m=>a(`[data-mini-showreel-player="${m}"]`),T=m=>m.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",m)||m,L=(m,b)=>{let X=m.width,N=X/b;return N>m.height&&(N=m.height,X=N*b),{left:m.left+(m.width-X)/2,top:m.top+(m.height-N)/2,width:X,height:N}},V=m=>{let b=T(m).getBoundingClientRect(),X=m.getBoundingClientRect(),N=X.width>0&&X.height>0?X.width/X.height:16/9;return L(b,N)},C=(m,b)=>gsap.set(m,{position:"fixed",left:b.left,top:b.top,width:b.width,height:b.height,margin:0,x:0,y:0});function F(m){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(b=>b.setAttribute("data-mini-showreel-status",m))}function A(){i=(l==null?void 0:l.style.zIndex)||"",p=(c==null?void 0:c.style.zIndex)||"",l&&(l.style.zIndex=String(e)),c&&(c.style.zIndex=String(e))}function _(){l&&(l.style.zIndex=i),c&&(c.style.zIndex=p)}function x(m){let b=y(m);if(!b)return;let X=b.querySelector("[data-bunny-player-init]"),N=b.querySelector("video");if(N){if(X){let z=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');z&&(N.paused||N.ended)&&z.click();return}try{N.play()}catch(z){}}}function D(m){let b=y(m);if(!b)return;let X=b.querySelector("[data-bunny-player-init]"),N=b.querySelector("video");N&&(N.muted=!0,X&&X.setAttribute("data-player-muted","true"),(N.paused||N.ended)&&x(m))}function $(){_(),o="",s=!1,l=c=E=h=d=f=null,v="",i="",p="",pe.start()}function B(m){if(!m||s||(l=P(m),c=y(m),!l||!c)||(E=a("[data-mini-showreel-target]",l),!E))return;o=m,s=!0,pe.stop(),c.dataset.flipId=o,v=c.style.cssText||"",h=c.parentElement,d=c.nextSibling,A(),F("active"),x(o);let b=Flip.getState(c),X=V(E);l.appendChild(c),C(c,X),f=Flip.from(b,{duration:n,ease:t,absolute:!0,scale:!1})}function k(m){!s||!c||m&&m!==o||(D(o),F("not-active"),f&&f.kill(),f=Flip.fit(c,h,{duration:n,ease:t,scale:!1,onComplete:()=>{h.insertBefore(c,d),c.style.cssText=v,$()}}))}function j(){!s||!c||(f&&f.kill(),D(o),F("not-active"),h.insertBefore(c,d),c.style.cssText=v,$())}function oe(){!s||!c||!E||C(c,V(E))}function H(m){let b=m.target.closest("[data-mini-showreel-open]");b&&(m.preventDefault(),B(b.getAttribute("data-mini-showreel-open")||""))}function R(m){let b=m.target.closest("[data-mini-showreel-close]");b&&(m.preventDefault(),k(b.getAttribute("data-mini-showreel-close")||""))}function w(m){m.key==="Escape"&&k("")}let u=gsap.matchMedia();return u.add(_r,function(){return r.addEventListener("click",H),document.addEventListener("click",R),window.addEventListener("keydown",w),window.addEventListener("resize",oe),function(){j(),r.removeEventListener("click",H),document.removeEventListener("click",R),window.removeEventListener("keydown",w),window.removeEventListener("resize",oe)}}),function(){u.revert(),j()}}var Ie=1920,_e=1080,Bt="#E5E5E5",qt="#000000",Rn="http://www.w3.org/2000/svg";function Fn(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(Rn,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${_e}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(u,m)=>{let b=document.createElementNS(Rn,u);return b.setAttribute("fill",m),t.appendChild(b),b},o=e("polygon",Bt),s=e("polygon",qt),l=e("rect",qt),c=e("rect",Bt),E=e("rect",Bt),h=e("rect",qt);[l,c,E,h].forEach(u=>u.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let d=(u,m,b,X,N)=>{u.setAttribute("x",m),u.setAttribute("y",b),u.setAttribute("width",Math.max(0,X)),u.setAttribute("height",Math.max(0,N))},f={x:Ie*(2/3),y:_e*(1/3)},v=.1,i=.9,p={x:f.x,y:f.y},a={x:f.x,y:f.y},P={x:f.x,y:f.y},y=!1,T=()=>gsap.to(P,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:T}),L=()=>gsap.to(P,{y:gsap.utils.random(_e*.193,_e*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:L});T(),L();function V(){let u=gsap.utils.clamp(Ie*v,Ie*i,p.x),m=Ie-u,b=gsap.utils.clamp(_e*v,_e*i,p.y),X=_e-b;o.setAttribute("points",`0,${b} ${u},0 ${Ie},${b} ${Ie},${_e} 0,${_e}`),s.setAttribute("points",`${Ie},${b} ${u},0 ${u},${b}`),d(l,0,b,u,X);let N=u*.25,z=X*(2/3);d(c,u/2-N/2,b+X-z,N,z),d(E,u,b,m,X);let G=m*.5,I=X/3;d(h,u+m/2-G/2,b+X/2-I/2,G,I)}let C=.1,F=.03;function A(){let m=1-Math.pow(1-(y?C:F),gsap.ticker.deltaRatio(60)),b=y?a:P;p.x+=(b.x-p.x)*m,p.y+=(b.y-p.y)*m,V()}let _=(u,m)=>{let b=n.getBoundingClientRect();!b.width||!b.height||(a.x=gsap.utils.clamp(0,Ie,(u-b.left)/b.width*Ie),a.y=gsap.utils.clamp(0,_e,(m-b.top)/b.height*_e),y=!0)},x=()=>{y=!1},D=(u,m)=>{let b=n.getBoundingClientRect();u>=b.left&&u<=b.right&&m>=b.top&&m<=b.bottom?_(u,m):x()},B=window.matchMedia("(hover: hover) and (pointer: fine)").matches?We(D):null,k=u=>{let m=u.touches[0];m&&_(m.clientX,m.clientY)},j={passive:!0};n.addEventListener("touchstart",k,j),n.addEventListener("touchmove",k,j),n.addEventListener("touchend",x,j),n.addEventListener("touchcancel",x,j);let oe=!1,H=()=>{oe||(oe=!0,gsap.ticker.add(A))},R=()=>{oe&&(oe=!1,gsap.ticker.remove(A))},w=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:u=>u.isActive?H():R()});return V(),H(),function(){R(),w.kill(),gsap.killTweensOf(P),B&&B(),n.removeEventListener("touchstart",k,j),n.removeEventListener("touchmove",k,j),n.removeEventListener("touchend",x,j),n.removeEventListener("touchcancel",x,j),t.remove()}}var Or="http://www.w3.org/2000/svg";var Vr=4.1343749999999995,Br="#AFAFAF",qr="#000000",Gr=5e3,Wr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Nr=0,zn=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Be=(r,n)=>{let t=document.createElementNS(Or,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function Ln(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Nr;e.setAttribute("data-pulse-dots-paused","");let s=Be("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let l=Be("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});l.append(Be("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Vr.toFixed(2)}),Be("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let c=Be("defs",{});c.appendChild(l);let E=Be("rect",{width:1e3,height:1e3,fill:Br}),h=Be("g",{filter:`url(#${o})`,fill:qr});for(let f=0;f<20;f++)for(let v=0;v<20;v++){if(!zn(v,f))continue;let i=Wr.filter(T=>zn(v+T.dx,f+T.dy)),p=i[Math.floor(Math.random()*i.length)],a=185+v*31.5+27.5625/2,P=185+f*31.5+27.5625/2,y=Be("g",{transform:`rotate(${p.deg} ${a} ${P})`});y.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Gr)}ms`),y.append(Be("circle",{class:"pulse-dots__dot is--first",cx:a,cy:P,r:27.5625/2}),Be("circle",{class:"pulse-dots__dot is--last",cx:a,cy:P,r:27.5625/2})),h.appendChild(y)}s.append(c,E,h),e.appendChild(s);let d=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:f=>e.toggleAttribute("data-pulse-dots-paused",!f.isActive)});e.toggleAttribute("data-pulse-dots-paused",!d.isActive),t.push(()=>{d.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var Tt=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,Dn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,kn=`#version 300 es
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
}`,In=[`#version 300 es
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
}`],Hn=`#version 300 es
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
}`,Un=`#version 300 es
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
}fragColor = color;}`,_n=`#version 300 es
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
}`,On=[`#version 300 es
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
fragColor = color;}`],Vn=[`#version 300 es
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
}`],Bn=`#version 300 es
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
}`;var Gt=60,Yr=1.5,$r=1,qn=150,Wt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Gn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function l(z,G){let I=e.createShader(z);return e.shaderSource(I,G),e.compileShader(I),I}let c=[];function E(z,G=Dn){let I=e.createProgram(),ne=l(e.VERTEX_SHADER,G),re=l(e.FRAGMENT_SHADER,z);e.attachShader(I,ne),e.attachShader(I,re),e.bindAttribLocation(I,0,"aVertexPosition"),e.bindAttribLocation(I,1,"aTextureCoord"),e.linkProgram(I);let se={p:I,v:ne,f:re,loc:{}};return c.push(se),se}function h(z){let{p:G,v:I,f:ne}=z;e.getProgramParameter(G,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(G),e.getShaderInfoLog(I),e.getShaderInfoLog(ne));let re=e.getProgramParameter(G,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let Z=e.getActiveUniform(G,se);z.loc[Z.name]=e.getUniformLocation(G,Z.name)}e.deleteShader(I),e.deleteShader(ne)}let d={bg:E(kn,Tt),shapes:In.map(z=>E(z,Hn)),trailSim:E(_n,Tt),trail:E(Un),blur:On.map(z=>E(z)),bloom:Vn.map(z=>E(z)),gmap:E(Bn,Tt)},f=e.createVertexArray();e.bindVertexArray(f);let v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let p=[];function a(z,G,I=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),I&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,z,G,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,z,G,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:z,h:G};return p.push(se),se}function P(){p.forEach(z=>{e.deleteTexture(z.tex),e.deleteFramebuffer(z.fb)}),p.length=0}function y(z,G,I,ne){e.useProgram(z.p);let re=G?G.w:t.width,se=G?G.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,G?G.fb:null),e.viewport(0,0,re,se);let Z=z.loc;Z.uMVMatrix&&e.uniformMatrix4fv(Z.uMVMatrix,!1,Wt),Z.uPMatrix&&e.uniformMatrix4fv(Z.uPMatrix,!1,Wt),Z.uTextureMatrix&&e.uniformMatrix4fv(Z.uTextureMatrix,!1,Wt),Z.uResolution&&e.uniform2f(Z.uResolution,re,se),Z.uArtboardResolution&&e.uniform2f(Z.uArtboardResolution,1920,1920),Z.uAspectRatio&&e.uniform1f(Z.uAspectRatio,1),Z.uMousePos&&e.uniform2f(Z.uMousePos,T.x,T.y),Z.uIsMask&&e.uniform1i(Z.uIsMask,0),Z.uParentTrackMouse&&e.uniform1f(Z.uParentTrackMouse,0);let Pe=0;Object.keys(I).forEach(he=>{Z[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,I[he].tex),e.uniform1i(Z[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!Z[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(Z[he],be[0],be[1]):e.uniform1f(Z[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let T={x:.5,y:.5},L={x:.5,y:.5},V=0,C=null,F=0;function A(){P();let z=Math.min(Yr,window.devicePixelRatio||1),G=Math.max(1,Math.round(n.clientWidth*z)),I=Math.max(1,Math.round(n.clientHeight*z));t.width=G,t.height=I;let ne=Z=>[Math.max(1,Math.round(G*Z)),Math.max(1,Math.round(I*Z))];C={a:a(G,I),b:a(G,I),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(G,I),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(G,I)},y(d.bg,C.a,{});let re=C.a,se=C.b;d.shapes.forEach(Z=>{y(Z,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,F=0}function _(){if(!C)return;let z=C.pp[F],G=C.pp[1-F];y(d.trailSim,G,{uPingPongTexture:z},{uTime:V,uPreviousMousePos:[L.x,L.y]}),F=1-F,y(d.trail,C.trail,{uTexture:C.base,uPingPongTexture:G}),y(d.blur[0],C.blur1,{uTexture:C.trail}),y(d.blur[1],C.blur2,{uTexture:C.blur1}),y(d.blur[2],C.blur3,{uTexture:C.blur2}),y(d.blur[3],C.blur4,{uTexture:C.blur3});let I=C.blur4;y(d.bloom[0],C.bth,{uTexture:I}),y(d.bloom[1],C.bd1,{uTexture:C.bth}),y(d.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:I}),y(d.bloom[3],C.bs1,{uTexture:C.bd2}),y(d.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:I}),y(d.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:I}),y(d.gmap,null,{uTexture:C.bloom},{uTime:0}),L.x=T.x,L.y=T.y}let x=qn,$=We((z,G)=>{let I=t.getBoundingClientRect();!I.width||!I.height||(T.x=(z-I.left)/I.width,T.y=1-(G-I.top)/I.height,x=0,H())}),B=null,k=0,j=!1;function oe(z){if(!j||x>=qn){B=null;return}if(B=requestAnimationFrame(oe),z-k<1e3/Gt-1)return;let G=k?Math.min(z-k,100):1e3/Gt;k=z,V+=$r*(G/(1e3/Gt)),_(),x++}function H(){m&&j&&!B&&(L.x=T.x,L.y=T.y,k=0,B=requestAnimationFrame(oe))}let R=new IntersectionObserver(([z])=>{j=z.isIntersecting,j?H():B&&(cancelAnimationFrame(B),B=null)});R.observe(n);let w=null,u=new ResizeObserver(()=>{clearTimeout(w),w=setTimeout(()=>{m&&(A(),_())},60)});u.observe(n);let m=!1,b=null;function X(){b=null,c.forEach(h),m=!0,A(),_()}function N(){c.every(z=>e.getProgramParameter(z.p,s.COMPLETION_STATUS_KHR))?X():b=requestAnimationFrame(N)}return s?b=requestAnimationFrame(N):X(),function(){b&&cancelAnimationFrame(b),B&&cancelAnimationFrame(B),B=null,clearTimeout(w),R.disconnect(),u.disconnect(),$(),P(),c.forEach(I=>e.deleteProgram(I.p)),e.deleteBuffer(v),e.deleteBuffer(i),e.deleteVertexArray(f);let G=e.getExtension("WEBGL_lose_context");G&&G.loseContext(),t.remove()}}var Kr="#BBC0C8",Zr="#FFFFFF";var Nt='"Suisseintl Book", Arial, sans-serif';var Wn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],jr=3,Jr=1.325,pt=5,Qr=.4,Nn=20,eo=2;function Xn(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let l=(s%pt+pt)%pt/pt;return l<.4?1-e(l/.4):l<.6?0:e((l-.6)/.4)};return n.forEach(s=>{let l=(s.getAttribute("data-text")||"").trim();if(!l)return;let c=Array.from(Array(jr).fill(l).join(" ").toUpperCase()),E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=document.createElement("canvas");h.setAttribute("aria-hidden","true"),Object.assign(h.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(h);let d=h.getContext("2d"),f=[],v=0,i=new Map,p=2;function a(){d.font=`24px ${Nt}`,f=c.map(k=>d.measureText(k).width),v=(3363-f.reduce((k,j)=>k+j,0))/(c.length-1)}let P=null;function y(){i=new Map,d.font=`24px ${Nt}`;let B=24,k=24*.35,j=[...new Set(c)].filter(w=>w!==" ").map(w=>({ch:w,w:d.measureText(w).width})),oe=Math.ceil((B+k+p*2)*T),H=0;j.forEach(w=>{w.sx=H,w.sw=Math.ceil((w.w+p*2)*T),H+=w.sw+2}),P=document.createElement("canvas"),P.width=Math.max(1,H),P.height=Math.max(1,oe);let R=P.getContext("2d");R.font=`${24*T}px ${Nt}`,R.fillStyle=Zr,R.textBaseline="alphabetic",j.forEach(w=>{R.fillText(w.ch,w.sx+p*T,(p+B)*T),i.set(w.ch,{sx:w.sx,sw:w.sw,x:-w.w/2-p,y:-B-p,w:w.sw/T,h:oe/T})})}let T=1;function L(){let B=Math.min(eo,window.devicePixelRatio||1),k=s.clientWidth;h.width=Math.max(1,Math.round(k*B)),h.height=Math.max(1,Math.round(s.clientHeight*B)),T=h.width/1920}let V=0;function C(){d.setTransform(1,0,0,1,0,0),d.fillStyle=Kr,d.fillRect(0,0,h.width,h.height);let B=E?0:e(V%Nn/Nn)*Math.PI*2;Wn.forEach((k,j)=>{let oe=Wn.length-1-j,H=E?0:o(V-pt+oe*Qr),R=v+H*Jr*24,w=2*Math.PI*k.r,u=k.start*Math.PI/180+B,m=0;for(let b=0;b<c.length;b++){let X=f[b];if(m+X>w)break;let N=i.get(c[b]);if(N){let z=u+(m+X/2)/k.r,G=Math.cos(z),I=Math.sin(z);d.setTransform(-I*T,G*T,-G*T,-I*T,(960+k.r*G)*T,(960+k.r*I)*T),d.drawImage(P,N.sx,0,N.sw,P.height,N.x,N.y,N.w,N.h)}m+=X+R}})}let F=(B,k)=>{V+=k/1e3,C()},A=!1,_=()=>{!A&&!E&&(A=!0,gsap.ticker.add(F))},x=()=>{A&&(A=!1,gsap.ticker.remove(F))},D=new ResizeObserver(()=>{L(),y(),C()});D.observe(s),L(),a(),y(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),y(),C()});let $=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:B=>B.isActive?_():x()});$.isActive&&_(),t.push(()=>{x(),$.kill(),D.disconnect(),h.remove()})}),()=>t.forEach(s=>s())}var Je={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Yn=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},to=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return Yn(n)*(1-e)+Yn(n+1)*e};function $n(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,l=0,c=18,E=0,h=0,d=0,f=-1e5,v=-1e5,i=!1,p=!1;function a(){s&&s.revert(),n.textContent="";let x=getComputedStyle(n);l=parseFloat(x.paddingTop),c=parseFloat(x.lineHeight),E=n.offsetHeight;let D=Math.max(1,Math.floor((E-l-parseFloat(x.paddingBottom))/c)),$=document.createDocumentFragment();for(let B=0;B<D;B++){let k=document.createElement("div");k.className="type-field__row",k.textContent=t,$.appendChild(k)}n.appendChild($),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((B,k)=>({chars:B.querySelectorAll(".type-field__char"),cur:o[k]?o[k].cur:0,drawn:0}))}})}function P(x){let D=Math.max(0,Math.min(x.chars.length,Math.round(x.cur)));if(D===x.drawn)return;let $=Math.min(D,x.drawn),B=Math.max(D,x.drawn);for(let k=$;k<B;k++)x.chars[k].style.visibility=k<D?"visible":"hidden";x.drawn=D}function y(x,D){if(!o.length)return;let $=Math.min(D,50)/16.667,B=w=>1-Math.pow(1-w,$),k=pe.scroll,j=Math.min(Math.max(h-k,0),d-k-E);v+=(f-j-l-v)*B(Je.followEase);let oe=Math.floor(v/c),H=k*.004,R=i&&f>=h-k&&f<=d-k;for(let w=0;w<o.length;w++){let u=o[w],m=u.chars.length,b=Math.abs(w-oe),X=0;if(R){if(b===0)X=m;else if(b<=Je.radius){let N=1-b/(Je.radius+1);X=1+Math.min(Je.maxSide,N*(1-Je.ragged/2+Je.ragged*to(w*1.3+H)))*(m-1)}}u.cur+=(X-u.cur)*B(Je.ease),P(u)}}function T(){p||(gsap.ticker.add(y),p=!0)}function L(){p&&(gsap.ticker.remove(y),p=!1)}let V=We((x,D)=>{v<-1e4&&(v=D),f=D,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let F=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(x){h=x.start+window.innerHeight,d=x.end},onToggle(x){x.isActive?T():L()}});F.isActive&&T();let A,_=()=>{clearTimeout(A),A=setTimeout(()=>{Math.floor((n.offsetHeight-l-parseFloat(getComputedStyle(n).paddingBottom))/c)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",_),function(){L(),clearTimeout(A),V(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",_),F.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var Kn={duration:.5,ease:"power3"};function Zn(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",Kn),l=gsap.quickTo(o,"y",Kn),c=0,E=0,h=!1,d=new ResizeObserver(()=>{c=o.offsetWidth,E=o.offsetHeight});d.observe(o),c=o.offsetWidth,E=o.offsetHeight;let v=We((p,a)=>{let P=e.getBoundingClientRect();if(!(p>=P.left&&p<=P.right&&a>=P.top&&a<=P.bottom)){h&&(h=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let T=gsap.utils.clamp(0,Math.max(0,P.width-c),p-P.left-c/2),L=gsap.utils.clamp(0,Math.max(0,P.height-E),a-P.top-E/2);if(!h){h=!0,s(T,T),l(L,L),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(T),l(L)}),i=()=>{h&&(h=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{v(),document.documentElement.removeEventListener("mouseleave",i),d.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var no=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],ro=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],oo="#FFFFFF";var jn="power3.out";function Jn(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],l=[];function c(){if(s.length&&s[0].isConnected)return;let f=e.querySelectorAll(":scope > div > div");o=(f.length?[...f]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),l=f.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function E(f){f.textContent=f.dataset.orig,f.style.border=""}let h=()=>{c(),l.forEach(v=>{v.el.style.overflow="visible"});let f=(s.length-1)/2;s.forEach((v,i)=>{gsap.to(v,{color:oo,ease:jn,duration:.3,delay:Math.abs(i-f)*.03,overwrite:"auto",onStart:()=>{let p=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);p==1&&(v.textContent=gsap.utils.random(ro)),a==1&&(v.style.border=`1px solid ${gsap.utils.random(no)}`)}})})},d=()=>{if(!s.length)return;let f=getComputedStyle(e).color,v=(s.length-1)/2;l.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,p)=>{gsap.to(i,{color:f,ease:jn,duration:.3,delay:Math.abs(p-v)*.03,overwrite:"auto",onStart:()=>E(i)})})};e.addEventListener("mouseenter",h),e.addEventListener("mouseleave",d),t.push(()=>{e.removeEventListener("mouseenter",h),e.removeEventListener("mouseleave",d),gsap.killTweensOf(s),o.forEach(f=>f.revert()),o=[],s=[],l=[]})}),()=>t.forEach(e=>e())}function Xt(r,n){let t=null;le(vn(r)),le(Fn(r)),le(Jn(r)),le(Tn(r)),le(En(r)),le(fn(r)),le(Mn(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?pn(r):null,t?le(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(mn(r)),le(xn(r)),le(bn(r)),le(bt(r)),xt(r),le(yn(r)),t}function At(r){le(An(r)),le(wn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(Pn(r)),le(tt(r.querySelector("[data-type-field]"),()=>$n(r))),le(Zn(r)),le(tt(r.querySelector("[data-pulse-dots]"),()=>Ln(r))),le(Gn(r)),le(Xn(r)),ScrollTrigger.sort()}var ao={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function Ct(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,reduceWhiteSpace:!1,onSplit:function(s){gsap.set(t,{autoAlpha:1});var l=ao[e],c={yPercent:110,duration:l.duration,stagger:l.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?c.delay=.5:c.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],c)}}))}),function(){n.forEach(function(t){t.revert()})}}var rr=gr(Qn());var er=window.matchMedia("(prefers-reduced-motion: reduce)"),Kt=.9;function tr(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return er.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:gt,duration:Kt,ease:Ve},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Kt,ease:Ve},0),e.set(t,{autoAlpha:0}),e)}function Zt(r,n,t="100vh"){let e=gsap.timeline();return er.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:Kt,ease:Ve},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function jt(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),Zt(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var Qe=null,Jt=!1;function Qt(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var nr={sync:!0,beforeLeave(){Jt=It({keepCurtain:!0}),pe.stop(),Qe||(Qe=kt())},beforeEnter(r){Qe||(Qe=kt()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),an(),Xt(r.next.container,!1)},leave(r){return tr(r.current.container,r.next.container)},enter(r){return Jt&&(nn(),Jt=!1),le(Ct(r.next.container)),Zt(r.next.container,Qt)},afterLeave(){Qe&&(Qe(),Qe=null)},afterEnter(r){sn(r),At(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(rr.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...nr,once(r){let n=document.querySelector("[data-menu-status]");rn(),on(),n&&(xt(n),bt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=Xt(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(Ct(t)),jt(t,function(s){Qt(s),At(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(Ct(t)),jt(t,function(o){Qt(o),At(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...nr}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

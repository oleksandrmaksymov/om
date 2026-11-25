(()=>{var cr=Object.create;var Jt=Object.defineProperty;var ur=Object.getOwnPropertyDescriptor;var dr=Object.getOwnPropertyNames;var vr=Object.getPrototypeOf,fr=Object.prototype.hasOwnProperty;var pr=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var mr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of dr(n))!fr.call(r,o)&&o!==t&&Jt(r,o,{get:()=>n[o],enumerable:!(e=ur(n,o))||e.enumerable});return r};var hr=(r,n,t)=>(t=r!=null?cr(vr(r)):{},mr(n||!r||!r.__esModule?Jt(t,"default",{value:r,enumerable:!0}):t,r));var Qn=pr((Xt,Yt)=>{(function(r,n){typeof Xt=="object"&&typeof Yt!="undefined"?Yt.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})(Xt,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,l=s.root,c=l===void 0?document.body:l,P=s.timeout,g=P===void 0?2e3:P,d=s.limit,m=d===void 0?0:d;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=c,this.timeout=g,this.limit=m},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var l=s.target,c=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(l));e.toPrefetch.has(c)&&(e.observer.unobserve(l),e.barba.cache.has(c)?e.barba.cache.update(c,{action:"prefetch"}):e.barba.cache.set(c,e.barba.request(c,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(P){e.logger.error(P)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var l=s,c=e.barba.dom.getHref(l);e.barba.cache.has(c)||e.barba.prevent.checkHref(c)||e.barba.prevent.checkLink(l,{},c)||(e.observer.observe(s),e.toPrefetch.add(c))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var Lt=[];function le(r){typeof r=="function"&&Lt.push(r)}function Dt(){let r=Lt,n=ScrollTrigger.getAll();return Lt=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var gr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",gr);var Oe="parallax",gt=.8;var xr="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",en="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ke=null,kt=function(){return!1};function tn(){Ke&&gsap.timeline().to(Ke,{clipPath:en,duration:.9,ease:Oe,overwrite:!0},0).fromTo(Ke,{filter:"brightness(1)"},{filter:"brightness("+(1-gt)+")",duration:.9,ease:Oe},0).set(Ke,{clearProps:"filter"})}function nn(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;Ke=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ke&&gsap.to(Ke,{clipPath:o?xr:en,duration:.9,ease:Oe,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),kt=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function rn(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function on(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function an(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function xt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let l=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){l();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},l)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function bt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),c=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+c}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function tt(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(l=>{e||!l.some(c=>c.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var je={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{je.x=r.clientX,je.y=r.clientY,je.known=!0},{passive:!0});function yt(){return je}function We(r){let n=e=>r(e.clientX,e.clientY),t=()=>{je.known&&r(je.x,je.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var nt=new Map;function br(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),l=s.querySelector("svg");if(!l)return new Float32Array(0);var c=parseFloat(l.getAttribute("width")||512),P=parseFloat(l.getAttribute("height")||512),g=l.getAttribute("viewBox");if(g){var d=g.split(/[\s,]+/);c=+d[2],P=+d[3]}var m=Math.min(t/c,t/P)*.9,v=(t-c*m)/2,i=(t-P*m)/2;o.save(),o.translate(v,i),o.scale(m,m),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(x){if(x.tagName==="path"){var L=x.getAttribute("d");L&&o.fill(new Path2D(L))}else x.tagName==="rect"?o.fillRect(+x.getAttribute("x")||0,+x.getAttribute("y")||0,+x.getAttribute("width")||0,+x.getAttribute("height")||0):x.tagName==="circle"&&(o.beginPath(),o.arc(+x.getAttribute("cx")||0,+x.getAttribute("cy")||0,+x.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var f=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),E=0,b=0;b<t*t;b++)f[b*4+3]>30&&(a[E++]=b);if(!E)return new Float32Array(0);for(var T=new Float32Array(n*4),F=0;F<n;F++){var W=a[Math.floor(Math.random()*E)],C=W%t,U=(W-C)/t,A=f[W*4+3]/255,_=F*4;T[_]=(C-t/2)*1.2+(Math.random()-.5)*1.65,T[_+1]=-(U-t/2)*1.2+(Math.random()-.5)*1.65,T[_+2]=(Math.random()-.5)*37*A,T[_+3]=A}return T}function ot(r,n){var t=n+"|"+r;if(!nt.has(t)){var e;try{e=br(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);nt.size>=4&&nt.delete(nt.keys().next().value),nt.set(t,Promise.resolve(e))}return nt.get(t)}var Et={};function at(r,n,t){for(var e=Et[r]||(Et[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?sn(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var l=o.renderer;return l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(n,t,!1),l.setClearColor(0,1),l.toneMapping=THREE.ACESFilmicToneMapping,l.toneMappingExposure=1.4,l.domElement.style.width="100%",l.domElement.style.height="100%",o}function it(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=Et[r]||(Et[r]=[]);if(e.length>=1){sn(n);return}t.setSize(1,1,!1),e.push(n)}function sn(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var yr=.03,Pr=.95,Er=.005,rt=Math.PI*2,wr="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Sr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),Tr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),Ar=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Cr=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),Mr=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function Pt(r,n){var t=new THREE.DataTexture(r,n,n,THREE.RGBAFormat,THREE.FloatType);return t.minFilter=t.magFilter=THREE.NearestFilter,t.needsUpdate=!0,t}function st(r,n){if(r.sim!==void 0)return r.sim;var t=r.renderer;if(!t.capabilities.isWebGL2||!t.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(n)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},l=[s(),s()],c=[s(),s()],P=0,g=new Float32Array(o*4),d=new Float32Array(o*4),m=new Float32Array(n*2),v=0;v<o;v++){var i=v*1.37,f=v*4;g[f]=i%rt,g[f+1]=i*.7%rt,g[f+2]=i*2.3%rt,g[f+3]=i*1.5%rt,d[f]=i*1.1%rt,d[f+1]=(v*2654435761&65535)/65535,d[f+2]=(v*48271&65535)/65535,d[f+3]=(v*16807&65535)/65535,v<n&&(m[v*2]=(v%e+.5)/e,m[v*2+1]=(Math.floor(v/e)+.5)/e)}var a=Pt(g,e),E=Pt(d,e),b=new Float32Array(o*4),T=Pt(b,e),F=new Float32Array(o*4),W=Pt(F,e),C=new THREE.Scene,U=new THREE.Camera,A=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);A.frustumCulled=!1,C.add(A);var _=function(I,R){return new THREE.ShaderMaterial({vertexShader:wr,fragmentShader:I,uniforms:R,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},x=_(Sr,{tPos:{value:null},tVel:{value:null},tTgt:{value:T},tP1:{value:a},tP2:{value:E},time:{value:0},gravity:{value:yr},wind:{value:Er},friction:{value:Pr},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),L=_(Tr,{tPos:{value:null},tVel:{value:null}}),$=_(Ar,{tSrc:{value:null}}),O=new THREE.ShaderMaterial({vertexShader:Cr,fragmentShader:Mr,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:T},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function D(I,R){A.material=I,t.setRenderTarget(R),t.render(C,U)}function j(){O.uniforms.tPos.value=l[P].texture,O.uniforms.tVel.value=c[P].texture}var oe={material:O,refAttribute:function(){return new THREE.BufferAttribute(m,2)},setPoints:function(I,R){F.fill(0),b.fill(0);for(var w=0;w<R;w++){var u=w*4;F[u]=I[u],F[u+1]=I[u+1]+40,F[u+2]=I[u+2],b[u]=I[u],b[u+1]=I[u+1],b[u+2]=I[u+2],b[u+3]=w*.01%rt}W.needsUpdate=!0,T.needsUpdate=!0;var p=t.getRenderTarget();P=0,$.uniforms.tSrc.value=W,D($,l[0]),t.setRenderTarget(c[0]),t.clear(!0,!1,!1),t.setRenderTarget(p),j()},step:function(I,R){var w=t.getRenderTarget(),u=x.uniforms;u.time.value=I,R?(u.mouseOn.value=1,u.radius.value=R.radius,u.mousePos.value.copy(R.pos),u.mouseVel.value.set(R.vel.x,R.vel.y),u.mouseVelLen.value=R.vel.length()):u.mouseOn.value=0;var p=1-P;u.tPos.value=l[P].texture,u.tVel.value=c[P].texture,D(x,c[p]),L.uniforms.tPos.value=l[P].texture,L.uniforms.tVel.value=c[p].texture,D(L,l[p]),P=p,t.setRenderTarget(w),O.uniforms.uTime.value=I,j()},dispose:function(){l.concat(c).forEach(function(I){I.dispose()}),[a,E,T,W].forEach(function(I){I.dispose()}),[x,L,$,O].forEach(function(I){I.dispose()}),A.geometry.dispose()}};return r.sim=oe,oe}var It={};function vt(r){return It[r]||(It[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),It[r]}function ln(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("case",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var P=new THREE.PointLight(13931578,2.4,1200);P.position.set(-300,-100,300),t.add(P);var g=new THREE.PointLight(5913114,1.2,900);g.position.set(0,200,-300),t.add(g);var d=new THREE.PointLight(16750916,1.3,600);d.position.set(0,-250,200),t.add(d);var m=0,v=0,i=0,f=0,a=!1,E=0,b=0,T=Math.PI*2/6,F=new THREE.Vector2(9999,9999),W=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),A=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,x=!1,L=0,$=0,O=8e4,D=.03,j=.95,oe=.005,I=12e4,R=null,w,u,p,y,X,N,z=0,q=!1,k=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var V=new THREE.BufferGeometry;w=new Float32Array(I*3),u=new Float32Array(I*3),p=new Float32Array(I*3),y=new Float32Array(I*3),X=new Float32Array(I),N=new Float32Array(I),V.setAttribute("position",new THREE.BufferAttribute(w,3)),V.setAttribute("color",new THREE.BufferAttribute(y,3)),V.setAttribute("size",new THREE.BufferAttribute(X,1)),V.setAttribute("alpha",new THREE.BufferAttribute(N,1)),V.setAttribute("velocity",new THREE.BufferAttribute(u,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,h=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;l=st(o,I),l&&V.setAttribute("ref",l.refAttribute());var K=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:h,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(V,K),l&&(R.frustumCulled=!1),t.add(R)}function se(V,Y){return ot(V,Y)}function Z(V){z=V.length/4;for(var Y=0;Y<z;Y++){var h=Y*3,K=Y*4,ie=V[K],Ce=V[K+1],Me=V[K+2],Re=V[K+3];w[h]=ie,w[h+1]=Ce+40,w[h+2]=Me,u[h]=u[h+1]=u[h+2]=0,p[h]=ie,p[h+1]=Ce,p[h+2]=Me;var M=ne[Math.floor(Math.random()*ne.length)],B=.7+Math.random()*.4;y[h]=M.r*B,y[h+1]=M.g*B,y[h+2]=M.b*B,X[Y]=1.8+Math.random()*3.8,N[Y]=.3+(Re||.7)*.75}l&&l.setPoints(V,z),R.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(S){R.geometry.attributes[S].needsUpdate=!0}),q=!0}function Pe(V){return se(V,Math.min(I,O)).then(function(Y){Y.length&&R&&Z(Y)})}function he(V){if(!(!q||!z)){if(k+=V,l){l.step(k,x?{pos:U,vel:_,radius:C}:null);return}for(var Y=0;Y<z;Y++){var h=Y*3,K=Y*1.37;if(u[h]+=Math.sin(k*.4+K)*.008+Math.sin(k*1.1+K*2.3)*.003,u[h+1]+=Math.cos(k*.35+K*.7)*.008+Math.sin(k*.9+K*1.5)*.004,u[h+2]+=Math.sin(k*.25+K*1.1)*.004,u[h+1]-=D*.06,u[h]+=Math.sin(k*.25+w[h+1]*.008)*oe*.6,u[h+2]+=Math.cos(k*.3+w[h]*.008)*oe*.3,x){var ie=w[h]-U.x,Ce=w[h+1]-U.y,Me=w[h+2]-U.z,Re=ie*ie+Ce*Ce+Me*Me,M=C*C;if(Re<M&&Re>.25){var B=Math.sqrt(Re),S=B/C,ee=(Y*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-S,1.5+ee),ke=1+Math.min(_.length()*.12,1),we=fe*ve*1.2*ke,Fe=1/B;u[h]+=ie*Fe*we,u[h+1]+=Ce*Fe*we,u[h+2]+=Me*Fe*we*.2;var ye=.02+ee*.06;u[h]+=_.x*fe*ye,u[h+1]+=_.y*fe*ye;var Ge=fe*.15;u[h]+=(ee-.5)*Ge,u[h+1]+=((Y*48271&65535)/65535-.5)*Ge}}var Ve=p[h],Ct=p[h+1]+40,et=p[h+2],lt=Ve-w[h],Xe=Ct-w[h+1],Ye=et-w[h+2],mt=Math.sqrt(lt*lt+Xe*Xe+Ye*Ye),ht=(Y*48271&65535)/65535,Mt=.003+ht*.003,Rt=1+Math.min(mt*.002,.5),ct=Mt*Rt;u[h]+=lt*ct,u[h+1]+=Xe*ct,u[h+2]+=Ye*ct;var ut=(Y*16807&65535)/65535,$e=j*(.92+ut*.06);u[h]*=$e,u[h+1]*=$e,u[h+2]*=$e,w[h]+=u[h],w[h+1]+=u[h+1],w[h+2]+=u[h+2];var dt=Math.sqrt(Math.pow(w[h]-p[h],2)+Math.pow(w[h+1]-p[h+1],2)+Math.pow(w[h+2]-p[h+2],2));N[Y]=.15+.55*(1-Math.min(dt*.005,1))+Math.sin(k*1.5+Y*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(V,Y){var h=s.domElement.getBoundingClientRect();if(!(h.width===0||h.height===0)&&(F.set((V-h.left)/h.width*2-1,-((Y-h.top)/h.height)*2+1),W.setFromCamera(F,e),W.ray.intersectPlane(ze,Le))){A.copy(U),R&&U.copy(Le).applyMatrix4(be.copy(R.matrixWorld).invert()),_.subVectors(U,A);var K=_.length();K>15&&_.multiplyScalar(15/K)}}function J(V,Y){var h=r.getBoundingClientRect();return V>=h.left&&V<=h.right&&Y>=h.top&&Y<=h.bottom}var H=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!n){var Te=function(V){L=V.clientX,$=V.clientY;var Y=J(V.clientX,V.clientY);if(Y){x=!0,te(V.clientX,V.clientY);var h=r.getBoundingClientRect(),K=Math.round(V.clientX-h.left),ie=Math.round(V.clientY-h.top);H&&(H.textContent="X: "+K+"PX    Y: "+ie+"PX")}else x=!1,U.set(9999,9999,0);a&&(m+=(V.clientX-E)*.005,i+=(V.clientY-b)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),E=V.clientX,b=V.clientY)},Ee=function(V){J(V.clientX,V.clientY)&&(a=!0,E=V.clientX,b=V.clientY)},ce=function(){a=!1,m=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ce)}function me(){for(var V=4e3,Y=new THREE.BufferGeometry,h=new Float32Array(V*3),K=new Float32Array(V*3),ie=0;ie<V;ie++){h[ie*3]=(Math.random()-.5)*2200,h[ie*3+1]=(Math.random()-.5)*1800,h[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}Y.setAttribute("position",new THREE.BufferAttribute(h,3)),Y.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var M=Re.getContext("2d"),B=M.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=B,M.fillRect(0,0,32,32);var S=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(Y,S);return ee.userData={positions:h,count:V},t.add(ee),ee}re();var de=n?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var qe=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(V){Ae=V[0].isIntersecting,V[0].isIntersecting&&!xe&&!n&&(xe=!0,H&&(H.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,G=0;function Q(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!n){var V=yt();V.known&&(L=V.x,$=V.y);var Y=J(L,$);Y?(x=!0,te(L,$)):(x=!1,U.set(9999,9999,0))}}window.addEventListener("scroll",Q,{passive:!0});var ae=null;function Ne(){if(ae=requestAnimationFrame(Ne),!!Ae){G++;var V=Math.min(qe.getDelta(),.05),Y=qe.elapsedTime;if(n)v+=T*V;else{var h=m-v;h=h%(Math.PI*2),h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2),v+=h*.12,f+=(i-f)*.12}if(R&&(R.rotation.x=f,R.rotation.y=v,R.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin(Y*.2+ie)*.05,K[ie*3]+=Math.cos(Y*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-v*35*.35,de.position.y=f*28*.35}c.position.x=300+Math.sin(Y*.3)*100,c.position.y=350+Math.cos(Y*.2)*80,P.intensity=2+Math.sin(Y*.5)*.4,d.intensity=.8+Math.sin(Y*.4+1)*.3,!(n&&ge&&G%4!==0)&&(he(V),s.render(t,e))}}return Ne(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",Q),clearTimeout(Ue),He.disconnect(),t.traverse(function(V){V.geometry&&V.geometry.dispose()}),it("case",o),R=null}}function cn(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=at("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),n.add(c);var P=new THREE.PointLight(5913114,1.2,900);P.position.set(0,200,-300),n.add(P);var g=new THREE.PointLight(16750916,1.3,600);g.position.set(0,-250,200),n.add(g);var d=0,m=Math.PI*2/6,v=8e4,i=.03,f=.95,a=.005,E=12e4,b=null,T,F,W,C,U,A,_=0,x=!1,L=0,$=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function O(){var te=new THREE.BufferGeometry;T=new Float32Array(E*3),F=new Float32Array(E*3),W=new Float32Array(E*3),C=new Float32Array(E*3),U=new Float32Array(E),A=new Float32Array(E),te.setAttribute("position",new THREE.BufferAttribute(T,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(U,1)),te.setAttribute("alpha",new THREE.BufferAttribute(A,1)),te.setAttribute("velocity",new THREE.BufferAttribute(F,3));var J=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,H=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;s=st(e,E),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:J,fragmentShader:H,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));b=new THREE.Points(te,ue),s&&(b.frustumCulled=!1),n.add(b)}function D(te,J){return ot(te,J)}function j(te){_=te.length/4;for(var J=0;J<_;J++){var H=J*3,ue=J*4,xe=te[ue],Te=te[ue+1],Ee=te[ue+2],ce=te[ue+3];T[H]=xe,T[H+1]=Te+40,T[H+2]=Ee,F[H]=F[H+1]=F[H+2]=0,W[H]=xe,W[H+1]=Te,W[H+2]=Ee;var me=$[Math.floor(Math.random()*$.length)],de=.7+Math.random()*.4;C[H]=me.r*de,C[H+1]=me.g*de,C[H+2]=me.b*de,U[J]=1.8+Math.random()*3.8,A[J]=.3+(ce||.7)*.75}s&&s.setPoints(te,_),b.geometry.setDrawRange(0,_),["position","color","size","alpha"].forEach(function(De){b.geometry.attributes[De].needsUpdate=!0}),x=!0}function oe(te){return D(te,Math.min(E,v)).then(function(J){J.length&&b&&j(J)})}function I(te){if(!(!x||!_)){if(L+=te,s){s.step(L,null);return}for(var J=0;J<_;J++){var H=J*3,ue=J*1.37;F[H]+=Math.sin(L*.4+ue)*.008+Math.sin(L*1.1+ue*2.3)*.003,F[H+1]+=Math.cos(L*.35+ue*.7)*.008+Math.sin(L*.9+ue*1.5)*.004,F[H+2]+=Math.sin(L*.25+ue*1.1)*.004,F[H+1]-=i*.06,F[H]+=Math.sin(L*.25+T[H+1]*.008)*a*.6,F[H+2]+=Math.cos(L*.3+T[H]*.008)*a*.3;var xe=W[H],Te=W[H+1]+40,Ee=W[H+2],ce=xe-T[H],me=Te-T[H+1],de=Ee-T[H+2],De=Math.sqrt(ce*ce+me*me+de*de),qe=(J*48271&65535)/65535,Ae=.003+qe*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;F[H]+=ce*ge,F[H+1]+=me*ge,F[H+2]+=de*ge;var Ue=(J*16807&65535)/65535,G=f*(.92+Ue*.06);F[H]*=G,F[H+1]*=G,F[H+2]*=G,T[H]+=F[H],T[H+1]+=F[H+1],T[H+2]+=F[H+2];var Q=Math.sqrt(Math.pow(T[H]-W[H],2)+Math.pow(T[H+1]-W[H+1],2)+Math.pow(T[H+2]-W[H+2],2));A[J]=.15+.55*(1-Math.min(Q*.005,1))+Math.sin(L*1.5+J*.01)*.05}b.geometry.attributes.position.needsUpdate=!0,b.geometry.attributes.alpha.needsUpdate=!0,b.geometry.attributes.velocity.needsUpdate=!0}}O();for(var R=4e3,w=new THREE.BufferGeometry,u=new Float32Array(R*3),p=new Float32Array(R*3),y=0;y<R;y++){u[y*3]=(Math.random()-.5)*2200,u[y*3+1]=(Math.random()-.5)*1800,u[y*3+2]=-200-Math.random()*1800;var X=$[Math.floor(Math.random()*$.length)],N=.2+Math.random()*.3;p[y*3]=X.r*N,p[y*3+1]=X.g*N,p[y*3+2]=X.b*N}w.setAttribute("position",new THREE.BufferAttribute(u,3)),w.setAttribute("color",new THREE.BufferAttribute(p,3));var z=document.createElement("canvas");z.width=z.height=32;var q=z.getContext("2d"),k=q.createRadialGradient(16,16,0,16,16,16);k.addColorStop(0,"rgba(255,255,255,1)"),k.addColorStop(.3,"rgba(255,255,255,0.6)"),k.addColorStop(.7,"rgba(255,255,255,0.15)"),k.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=k,q.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(z),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(w,ne);n.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var Z=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(Z.getDelta(),.05),J=Z.elapsedTime;d+=m*te,b&&(b.rotation.y=d,b.position.y=5,b.scale.setScalar(.85));for(var H=0;H<R;H++)u[H*3+1]+=Math.sin(J*.2+H)*.05,u[H*3]+=Math.cos(J*.15+H*.5)*.03;w.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-d*35*.35,l.position.x=300+Math.sin(J*.3)*100,l.position.y=350+Math.cos(J*.2)*80,c.intensity=2+Math.sin(J*.5)*.4,g.intensity=.8+Math.sin(J*.4+1)*.3,I(te),o.render(n,t)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),it("card",e),b=null}}var un="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function dn(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return vt(un).then(function(){o||(s=t?Rr(n):ln(n))}),function(){o=!0,s&&s()}}return t?e():tt(n,e)}function vn(r){let n=r.querySelector("#axion-card");if(n)return tt(n,function(){let t=!1,e=null;return vt(un).then(function(){t||(e=cn(n))}),function(){t=!0,e&&e()}})}function Rr(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("home",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var P=new THREE.PointLight(13931578,2.4,1200);P.position.set(-300,-100,300),t.add(P);var g=new THREE.PointLight(5913114,1.2,900);g.position.set(0,200,-300),t.add(g);var d=new THREE.PointLight(16750916,1.3,600);d.position.set(0,-250,200),t.add(d);var m=0,v=0,i=0,f=0,a=!1,E=0,b=0,T=Math.PI*2/6,F=new THREE.Vector2(9999,9999),W=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),A=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,x=!1,L=0,$=0,O=8e4,D=.03,j=.95,oe=.005,I=12e4,R=null,w,u,p,y,X,N,z=0,q=!1,k=!1,ne=0,re=0,se=null,Z=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var M=new THREE.BufferGeometry;w=new Float32Array(I*3),u=new Float32Array(I*3),p=new Float32Array(I*3),y=new Float32Array(I*3),X=new Float32Array(I),N=new Float32Array(I),M.setAttribute("position",new THREE.BufferAttribute(w,3)),M.setAttribute("color",new THREE.BufferAttribute(y,3)),M.setAttribute("size",new THREE.BufferAttribute(X,1)),M.setAttribute("alpha",new THREE.BufferAttribute(N,1)),M.setAttribute("velocity",new THREE.BufferAttribute(u,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;l=st(o,I),l&&M.setAttribute("ref",l.refAttribute());var ee=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:S,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(M,ee),l&&(R.frustumCulled=!1),t.add(R)}function he(M,B){return ot(M,B)}function be(M){z=M.length/4;for(var B=0;B<z;B++){var S=B*3,ee=B*4,ve=M[ee],fe=M[ee+1],ke=M[ee+2],we=M[ee+3];w[S]=ve,w[S+1]=fe+40,w[S+2]=ke,u[S]=u[S+1]=u[S+2]=0,p[S]=ve,p[S+1]=fe,p[S+2]=ke;var Fe=Z[Math.floor(Math.random()*Z.length)],ye=.7+Math.random()*.4;y[S]=Fe.r*ye,y[S+1]=Fe.g*ye,y[S+2]=Fe.b*ye,X[B]=1.8+Math.random()*3.8,N[B]=.3+(we||.7)*.75}l&&l.setPoints(M,z),R.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(Ge){R.geometry.attributes[Ge].needsUpdate=!0}),q=!0,k=!1,ne=1}function ze(M){return he(M,Math.min(I,O)).then(function(B){B.length&&R&&be(B)})}function Le(M){if(!(!q||!z)){if(re+=M,l){l.step(re,x&&Q==="interactive"?{pos:U,vel:_,radius:C}:null);return}for(var B=0;B<z;B++){var S=B*3,ee=B*1.37;if(u[S]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,u[S+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,u[S+2]+=Math.sin(re*.25+ee*1.1)*.004,u[S+1]-=D*.06,u[S]+=Math.sin(re*.25+w[S+1]*.008)*oe*.6,u[S+2]+=Math.cos(re*.3+w[S]*.008)*oe*.3,x&&Q==="interactive"){var ve=w[S]-U.x,fe=w[S+1]-U.y,ke=w[S+2]-U.z,we=ve*ve+fe*fe+ke*ke,Fe=C*C;if(we<Fe&&we>.25){var ye=Math.sqrt(we),Ge=ye/C,Ve=(B*2654435761&65535)/65535,Ct=.6+Ve*.8,et=Math.pow(1-Ge,1.5+Ve),lt=1+Math.min(_.length()*.12,1),Xe=et*Ct*1.2*lt,Ye=1/ye;u[S]+=ve*Ye*Xe,u[S+1]+=fe*Ye*Xe,u[S+2]+=ke*Ye*Xe*.2;var mt=.02+Ve*.06;u[S]+=_.x*et*mt,u[S+1]+=_.y*et*mt;var ht=et*.15;u[S]+=(Ve-.5)*ht,u[S+1]+=((B*48271&65535)/65535-.5)*ht}}var Mt=p[S],Rt=p[S+1]+40,ct=p[S+2],ut=Mt-w[S],$e=Rt-w[S+1],dt=ct-w[S+2],rr=Math.sqrt(ut*ut+$e*$e+dt*dt),or=(B*48271&65535)/65535,ar=.003+or*.003,ir=1+Math.min(rr*.002,.5),Ft=ar*ir;u[S]+=ut*Ft,u[S+1]+=$e*Ft,u[S+2]+=dt*Ft;var sr=(B*16807&65535)/65535,zt=j*(.92+sr*.06);u[S]*=zt,u[S+1]*=zt,u[S+2]*=zt,w[S]+=u[S],w[S+1]+=u[S+1],w[S+2]+=u[S+2];var lr=Math.sqrt(Math.pow(w[S]-p[S],2)+Math.pow(w[S+1]-p[S+1],2)+Math.pow(w[S+2]-p[S+2],2));N[B]=.15+.55*(1-Math.min(lr*.005,1))+Math.sin(re*1.5+B*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,J=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),H=new THREE.Vector3;function ue(M,B){var S=s.domElement.getBoundingClientRect();if(!(S.width===0||S.height===0)&&(F.set((M-S.left)/S.width*2-1,-((B-S.top)/S.height)*2+1),W.setFromCamera(F,e),W.ray.intersectPlane(J,H))){A.copy(U),R&&U.copy(H).applyMatrix4(te.copy(R.matrixWorld).invert()),_.subVectors(U,A);var ee=_.length();ee>15&&_.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function Ee(M,B){var S=Te().getBoundingClientRect();return M>=S.left&&M<=S.right&&B>=S.top&&B<=S.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(M){if(L=M.clientX,$=M.clientY,n||Q!=="interactive"){x=!1,U.set(9999,9999,0);return}var B=Ee(M.clientX,M.clientY);if(B){x=!0,ue(M.clientX,M.clientY);var S=Te().getBoundingClientRect(),ee=Math.round(M.clientX-S.left),ve=Math.round(M.clientY-S.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else x=!1,U.set(9999,9999,0);a&&(m+=(M.clientX-E)*.005,i+=(M.clientY-b)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),E=M.clientX,b=M.clientY)}function qe(M){n||Q!=="interactive"||Ee(M.clientX,M.clientY)&&(a=!0,E=M.clientX,b=M.clientY)}function Ae(){n||(a=!1,m=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",qe),window.addEventListener("mouseup",Ae);function He(){for(var M=4e3,B=new THREE.BufferGeometry,S=new Float32Array(M*3),ee=new Float32Array(M*3),ve=0;ve<M;ve++){S[ve*3]=(Math.random()-.5)*2200,S[ve*3+1]=(Math.random()-.5)*1800,S[ve*3+2]=-200-Math.random()*1800;var fe=Z[Math.floor(Math.random()*Z.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}B.setAttribute("position",new THREE.BufferAttribute(S,3)),B.setAttribute("color",new THREE.BufferAttribute(ee,3));var we=document.createElement("canvas");we.width=we.height=32;var Fe=we.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var Ge=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(we),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Ve=new THREE.Points(B,Ge);return Ve.userData={positions:S,count:M},t.add(Ve),Ve}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var G=new THREE.Clock,Q="spin",ae=null;function Ne(){if(n){Q="spin";return}if(ae===null){var M=document.querySelector(".scaling-element-video");ae=M&&getComputedStyle(M).display!=="none"}if(!ae){Q="spin";return}var B=window._flipProgress||0;B>.85?Q="interactive":B>.7?Q="transition":Q="spin"}var V="spin",Y=!0,h=new IntersectionObserver(function(M){Y=M[0].isIntersecting},{threshold:0});h.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var M=yt();M.known&&(L=M.x,$=M.y);var B=Ee(L,$);B?(x=!0,ue(L,$)):(x=!1,U.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!Y){Ce++;var M=Math.min(G.getDelta(),.05),B=G.elapsedTime;Ne(),V==="interactive"&&Q!=="interactive"&&(x=!1,U.set(9999,9999,0),a=!1);var S=Q==="transition"||Q==="interactive";if(S&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!S&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),V=Q,x&&!Ee(L,$)&&(x=!1,U.set(9999,9999,0)),Q==="spin")v+=T*M,f+=(0-f)*.05;else if(Q==="transition")v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2),v+=(0-v)*.025,f+=(0-f)*.025;else{var ee=m-v;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),v+=ee*.12,f+=(i-f)*.12}R&&(R.rotation.x=f,R.rotation.y=v,R.scale.setScalar(1),R.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(B*.2+fe)*.05,ve[fe*3]+=Math.cos(B*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-v*35*.35,ge.position.y=f*28*.35,c.position.x=300+Math.sin(B*.3)*100,c.position.y=350+Math.cos(B*.2)*80,P.intensity=2+Math.sin(B*.5)*.4,d.intensity=.8+Math.sin(B*.4+1)*.3,!(n&&K&&Ce%4!==0)&&(Le(M),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",qe),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),h.disconnect(),t.traverse(function(M){M.geometry&&M.geometry.dispose()}),it("home",o),R=null}}function fn(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),l=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),c=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Oe},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(l.length&&c.set(l,{autoAlpha:1},0),s.length>=2){let P=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),g=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([P.chars,g.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),c.to(P.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),c.to(P.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),c.to(g.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),c.to(g.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return c}function pn(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(d=>{let m=d.parentElement;m&&(d.style.whiteSpace="nowrap",e.has(m)||e.set(m,[]),e.get(m).push(d))});function o(d){let m=getComputedStyle(d);return d.clientWidth-parseFloat(m.paddingLeft)-parseFloat(m.paddingRight)}function s(d,m){if(m<=0)return;let v=parseFloat(getComputedStyle(d).fontSize)||16;for(let i=0;i<5;i++){let f=d.getBoundingClientRect().width;if(f<=0)break;let a=m/f;if(Math.abs(a-1)<.002)break;v*=a,d.style.fontSize=v+"px"}}function l(){e.forEach((d,m)=>{let v=o(m);d.forEach(i=>s(i,v))})}let c=null;function P(){c||(c=requestAnimationFrame(()=>{c=null,l()}))}let g;return window.ResizeObserver&&(g=new ResizeObserver(P),e.forEach((d,m)=>g.observe(m))),window.addEventListener("resize",P),l(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(l),()=>{c&&cancelAnimationFrame(c),g&&g.disconnect(),window.removeEventListener("resize",P),t.forEach(d=>{d.style.whiteSpace="",d.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},Ht=.08,Fr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},mn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function hn(r,n){var t=(1-n)*100+"%";return r==="left"?"inset(0% 0% 0% "+t+")":r==="up"?"inset("+t+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+t+" 0%)":"inset(0% "+t+" 0% 0%)"}function zr(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function gn(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",l=o.getAttribute("data-marker-theme")||"#000000",c=o.getAttribute("data-marker-scroll-start")||"top 90%",P=l.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(l).trim()||l,g=mn[s]||mn.right,d=Fr[o.getAttribute("data-highlight-marker-reveal")]||null;d&&(P=d.bar);var m=o.closest("[data-cursor-label]"),v={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,f=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){v.timeline&&v.timeline.kill(),v.scrollTrigger&&v.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(A){A.remove()}),v.listeners.forEach(function(A){A.el.removeEventListener(A.type,A.fn)}),v.listeners=[],i=!1;var E=a.lines,b=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(E.forEach(function(A,_){gsap.set(A,{position:"relative",overflow:"hidden"});var x=zr(P,g.origin);gsap.set(x,{[g.prop]:0}),A.appendChild(x),d&&(gsap.set(A,{zIndex:0,color:d.text}),gsap.set(x,{zIndex:-1})),b.to(x,{[g.prop]:1,duration:Se.duration,ease:Se.ease},_*Ht);var L=function(){i&&(gsap.to(x,{[g.prop]:0,duration:Se.duration,ease:Se.ease}),d&&gsap.to(A,{color:d.hoverText,duration:Se.duration,ease:Se.ease}))},$=function(){i&&(gsap.to(x,{[g.prop]:1,duration:Se.duration,ease:Se.ease}),d&&gsap.to(A,{color:d.text,duration:Se.duration,ease:Se.ease}))};!d&&e&&(A.addEventListener("mouseenter",L),A.addEventListener("mouseleave",$),v.listeners.push({el:A,type:"mouseenter",fn:L},{el:A,type:"mouseleave",fn:$}))}),v.timeline=b,m){b.kill();var T=o.querySelectorAll(".highlight-marker-bar");gsap.set(E,{clipPath:hn(s,0)});var F=function(A){gsap.to(T,{[g.prop]:A,duration:Se.duration,ease:Se.ease,stagger:Ht,overwrite:!0}),gsap.to(E,{clipPath:hn(s,A),duration:Se.duration,ease:Se.ease,stagger:Ht,overwrite:!0})},W=function(){F(1)},C=function(){F(0)};m.addEventListener("cursorlabel:enter",W),m.addEventListener("cursorlabel:leave",C),v.listeners.push({el:m,type:"cursorlabel:enter",fn:W},{el:m,type:"cursorlabel:leave",fn:C});return}var U=ScrollTrigger.create({trigger:o,start:c,once:!0,onEnter:function(){b.play()}});v.scrollTrigger=U}});v.split=f,t.push(v)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function xn(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),l=r.querySelectorAll("[data-cursor-marquee-text]");if(!l.length)return;let c=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),P=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),g=null,d=m=>{c(m.clientX),P(m.clientY)};return window.addEventListener("pointermove",d,{passive:!0}),l.forEach(m=>{m.addEventListener("mouseenter",()=>{g&&clearTimeout(g);let v=m.getAttribute("data-cursor-marquee-text")||"",i=(v.length||1)/e;s.forEach(f=>{f.textContent=v,f.style.animationPlayState="running",f.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),m.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),g&&clearTimeout(g),g=setTimeout(()=>{s.forEach(v=>{v.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",d),clearTimeout(g),gsap.killTweensOf(o)}}function bn(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let l=s.target;s.isIntersecting?t(l):l.paused||l.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function yn(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(c){window._flipProgress=c.progress}}}),n.forEach(function(c,P){let g=P+1;if(g<n.length){let d=n[g],m=d.getBoundingClientRect(),v=c.getBoundingClientRect(),i=m.top+window.pageYOffset+d.offsetHeight/2,f=v.top+window.pageYOffset+c.offsetHeight/2,a=i-f;e.add(Flip.fit(t,d,{duration:a,ease:"none"}))}})}o();let s,l=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",l),function(){clearTimeout(s),window.removeEventListener("resize",l),e&&e.kill()}}var Lr="150%";function Dr(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var Ut=new WeakMap;function Pn(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(l){return l.textContent})}),o=t.map(Dr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),Ut.set(r,{wrap:n,lines:t,lineChars:o}),function(){Ut.delete(r),t.forEach(function(s,l){s.querySelectorAll("textPath").forEach(function(c,P){c.textContent=e[l][P]})})}}function En(r){let n=Ut.get(r);if(!n)return function(){};let t=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Lr,pin:!0,scrub:!0}});return n.lines.forEach(function(e,o){let s=n.lineChars[o];s.length&&t.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}var wt={duration:.8,ease:"expo.out",stagger:.08,start:"top 90%"},kr=40,ft=[[[0,0],[5,0],[10,0],[15,0],[1,0],[6,0],[11,0],[16,0],[2,0],[7,0],[12,0],[17,0],[3,0],[8,0],[13,0],[18,0],[4,0],[9,0],[14,0],[19,0]],[[0,0],[5,1],[10,0],[15,1],[1,0],[6,1],[11,0],[16,1],[2,0],[7,1],[12,0],[17,1],[3,0],[8,1],[13,0],[18,1],[4,0],[9,1],[14,0],[19,1]],[[0,0],[5,3],[10,0],[15,1],[1,1],[6,1],[11,1],[16,3],[2,2],[7,2],[12,2],[17,2],[3,0],[8,1],[13,0],[18,3],[4,2],[9,3],[14,2],[19,1]],[[0,0],[9,3],[18,0],[25,1],[1,1],[10,1],[19,1],[30,3],[2,2],[12,2],[20,2],[34,2],[4,0],[14,1],[22,0],[38,3],[8,2],[15,3],[24,2],[39,1]],[[20,2],[25,3],[30,0],[35,1],[21,1],[26,1],[31,1],[36,3],[22,2],[27,2],[32,2],[37,2],[23,1],[28,1],[33,1],[38,3],[24,2],[29,3],[34,2],[39,2]],[[20,2],[25,3],[30,2],[35,3],[21,2],[26,3],[31,2],[36,3],[22,2],[27,3],[32,2],[37,3],[23,2],[28,3],[33,2],[38,3],[24,2],[29,3],[34,2],[39,3]],[[20,3],[25,3],[30,3],[35,3],[21,3],[26,3],[31,3],[36,3],[22,3],[27,3],[32,3],[37,3],[23,3],[28,3],[33,3],[38,3],[24,3],[29,3],[34,3],[39,3]]],Ir=[[0,1,1,!0],[1,2,1,!1],[2,3,0,!1],[3,4,0,!1],[4,4,1,!1],[4,5,1,!1],[5,6,1,!0]],Hr=[[47,80,28,50,58,48,2,72,56,81,47,49,53,28,65,79,4,1,40,22],[42,25,14,5,54,90,9,44,76,25,33,0,9,29,65,14,62,65,72,90],[77,4,59,25,65,20,58,50,43,39,48,44,27,15,29,70,69,49,3,55],[86,15,54,54,59,17,27,38,65,23,22,68,85,4,23,33,41,38,53,73],[53,15,20,59,37,85,20,31,18,3,81,53,9,24,82,60,28,29,1,73],[26,87,48,89,13,20,61,27,56,53,58,46,74,41,61,27,9,38,50,82],[73,69,24,32,82,30,44,84,33,76,57,86,15,46,70,68,9,51,73,2]],wn="http://www.w3.org/2000/svg",_t=new WeakMap;function Sn(r){let n=r.querySelector('[data-scroll-driven="wrap"]'),t=n&&n.querySelector('[data-scroll-driven="stage"]');if(!t||getComputedStyle(n).display==="none")return function(){};let e=document.createElementNS(wn,"svg");e.setAttribute("viewBox","0 0 1360 680"),e.setAttribute("aria-hidden","true"),e.setAttribute("preserveAspectRatio","none"),e.style.cssText="display:block;width:100%;height:100%";let o=document.createElementNS(wn,"path");o.setAttribute("fill","currentColor"),e.appendChild(o),t.appendChild(e);let s=ft[0].map(([P,g])=>({x:P*34,y:g*170})),l=[0,1,2,3].map(()=>({v:0}));function c(){let P="";for(let g=0;g<s.length;g++){let d=s[g],m=170*l[g%4].v;if(m<.01)continue;let v=d.x.toFixed(2),i=(d.x+34).toFixed(2),f=(d.y+170).toFixed(2);P+="M"+v+" "+(d.y+170-m).toFixed(2)+"H"+i+"V"+f+"H"+v+"Z"}o.setAttribute("d",P)}return c(),_t.set(r,{wrap:n,stage:t,strips:s,rise:l,render:c}),function(){_t.delete(r),gsap.killTweensOf(s.concat(l)),e.remove()}}function Tn(r){let n=_t.get(r);if(!n)return function(){};let t=gsap.to(n.rise,{v:1,duration:wt.duration,ease:wt.ease,stagger:wt.stagger,paused:!0,onUpdate:n.render}),e=ScrollTrigger.create({trigger:n.stage,start:wt.start,once:!0,onEnter:function(){t.play()}}),o=gsap.timeline({paused:!0,onUpdate:n.render}),s=ft[0].map(P=>P.slice()),l=0;Ir.forEach(function([P,g,d,m],v){let i=d?"y":"x",f=d?170:34,a=l;n.strips.forEach(function(E,b){let T=s[b][d]*f,F=ft[g][b][d]*f;if(T===F)return;let W=l+(m?Math.floor(ft[P][b][0]/5)*kr:Hr[v][b]),C=Math.abs(F-T);o.fromTo(E,{[i]:T},{[i]:F,duration:C,ease:"none",immediateRender:!1},W),s[b][d]=ft[g][b][d],a=Math.max(a,W+C)}),l=a});let c=ScrollTrigger.create({animation:o,trigger:n.wrap,start:"top top",end:()=>"+="+o.duration()*(n.stage.clientWidth/1360),pin:!0,scrub:!0});return function(){e.kill(),t.kill(),c.kill(!0),o.kill()}}function Vt(r){var n=[];function t(i,f,a,E){i.addEventListener(f,a,E),n.push(function(){i.removeEventListener(f,a,E)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var f=i.getAttribute("data-player-src");if(!f)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(G){}try{a.removeAttribute("src"),a.load()}catch(G){}function E(G){i.getAttribute("data-player-status")!==G&&i.setAttribute("data-player-status",G)}function b(G){a.muted=!!G,i.setAttribute("data-player-muted",a.muted?"true":"false")}function T(G){i.setAttribute("data-player-fullscreen",G?"true":"false")}function F(G){i.setAttribute("data-player-activated",G?"true":"false")}i.hasAttribute("data-player-activated")||F(!1);var W=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),U=i.querySelector("[data-player-buffered]"),A=i.querySelector("[data-player-timeline-handle]"),_=i.querySelectorAll("[data-player-time-duration]"),x=i.querySelectorAll("[data-player-time-progress]"),L=i.getAttribute("data-player-update-size"),$=i.getAttribute("data-player-lazy"),O=$==="true",D=$==="meta",j=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",I=!1;j?(b(!0),a.loop=!0):b(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var R=!!a.canPlayType("application/vnd.apple.mpegurl"),w=R&&"ManagedMediaSource"in window,u=!!(window.Hls&&Hls.isSupported())&&!w;if(L==="true"&&!D&&!O){var p=a.preload;a.preload="metadata";var y=function(){g(i,L,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",y),a.preload=p||""};t(a,"loadedmetadata",y,{once:!0}),a.src=f}function X(){v(f,u).then(function(G){G.width&&G.height&&g(i,L,G.width,G.height),_.length&&isFinite(G.duration)&&G.duration>0&&s(_,o(G.duration)),P(i,I)})}var N=!1,z=!1,q="";function k(){if(!N){if(N=!0,i._hls){try{i._hls.destroy()}catch(Q){}i._hls=null}if(w)a.preload=O||D?"auto":a.preload,a.src=f,t(a,"loadedmetadata",function(){P(i,I),L==="true"&&g(i,L,a.videoWidth,a.videoHeight),_.length&&s(_,o(a.duration))},{once:!0});else if(u){var G=new Hls({maxBufferLength:10});G.attachMedia(a),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(f)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(P(i,I),L==="true"){var Q=G.levels||[],ae=l(Q);ae&&ae.width&&ae.height&&g(i,L,ae.width,ae.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(Q,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&_.length&&s(_,o(ae.details.totalduration))}),i._hls=G}else a.src=f}}D?(X(),a.preload="none"):O?a.preload="none":k();function ne(){z=!0,a.paused||a.ended?((O||D)&&!N&&k(),I=!0,q="",E("loading"),c(a)):(q="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Z(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():Z()}t(document,"fullscreenchange",function(){T(se())}),t(document,"webkitfullscreenchange",function(){T(se())}),t(a,"webkitbeginfullscreen",function(){T(!0)}),t(a,"webkitendfullscreen",function(){T(!1)}),t(i,"click",function(G){var Q=G.target.closest("[data-player-control]");if(!(!Q||!i.contains(Q))){var ae=Q.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){_.length&&s(_,o(a.duration)),x.length&&s(x,o(a.currentTime))}t(a,"timeupdate",be),t(a,"loadedmetadata",function(){be(),d(i,L,a)}),t(a,"loadeddata",function(){d(i,L,a)}),t(a,"playing",function(){d(i,L,a)}),t(a,"durationchange",be);var ze;function Le(){if(a.duration){var G=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+G)+"%)"),A&&(A.style.left=G+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function J(){if(!(!U||!a.duration||!a.buffered.length)){var G=a.buffered.end(a.buffered.length-1),Q=G/a.duration*100;U.style.transform="translateX("+(-100+Q)+"%)"}}if(t(a,"progress",J),t(a,"loadedmetadata",J),t(a,"durationchange",J),t(a,"play",function(){F(!0),cancelAnimationFrame(ze),te(),E("playing")}),t(a,"playing",function(){I=!1,E("playing")}),t(a,"pause",function(){I=!1,cancelAnimationFrame(ze),Le(),E("paused")}),t(a,"waiting",function(){E("loading")}),t(a,"canplay",function(){P(i,I)}),t(a,"ended",function(){I=!1,cancelAnimationFrame(ze),Le(),E("paused"),F(!1)}),W){let G=function(h){ce||(ce=W.getBoundingClientRect());var K=(h-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},Q=function(h){if(a.duration){var K=h*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),A&&(A.style.left=K+"%"),x.length&&s(x,o(h*a.duration))}},ae=function(h){a.duration&&(h-Te<Ee||(Te=h,a.currentTime=xe))},Ne=function(h){if(a.duration){H=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=W.getBoundingClientRect();var K=G(h.clientX);xe=K*a.duration,Q(K),ae(performance.now()),W.setPointerCapture&&W.setPointerCapture(h.pointerId),window.addEventListener("pointermove",V,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),h.preventDefault()}},V=function(h){if(H){var K=G(h.clientX);xe=K*a.duration,Q(K),ae(performance.now()),h.preventDefault()}},Y=function(){H&&(H=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?c(a):(Le(),be()),window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",Y))};var H=!1,ue=!1,xe=0,Te=0,Ee=180,ce=null;t(window,"resize",function(){H||(ce=null)}),t(W,"pointerdown",Ne,{passive:!1}),A&&t(A,"pointerdown",Ne,{passive:!1})}var me,de=3e3;function De(G){i.getAttribute("data-player-hover")!==G&&i.setAttribute("data-player-hover",G)}function qe(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),qe()}t(i,"pointerdown",Ae),t(document,"fullscreenchange",Ae),t(document,"webkitfullscreenchange",Ae);var He=!1;function ge(G){var Q=i.getBoundingClientRect();G.clientX>=Q.left&&G.clientX<=Q.right&&G.clientY>=Q.top&&G.clientY<=Q.bottom&&Ae()}if(t(i,"pointerenter",function(){Ae(),He||(He=!0,t(window,"pointermove",ge,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),j){var Ue=new IntersectionObserver(function(G){G.forEach(function(Q){var ae=Q.isIntersecting&&Q.intersectionRatio>0;ae?((O||D)&&!N&&k(),a.paused?(q="",I=!0,E("loading"),c(a)):E("playing")):!a.paused&&!a.ended&&(q="io",a.pause(),E("paused"))})},{threshold:.1});Ue.observe(i)}n.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(G){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(G){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var f=Math.floor(i),a=Math.floor(f/3600),E=Math.floor(f%3600/60),b=f%60;return a>0?a+":"+e(E)+":"+e(b):e(E)+":"+e(b)}function s(i,f){i.forEach(function(a){a.textContent=f})}function l(i){return!i||!i.length?null:i.reduce(function(f,a){return(a.width||0)>(f.width||0)?a:f},i[0])}function c(i){var f=i.play();f&&typeof f.then=="function"&&f.catch(function(){})}function P(i,f){!f&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function g(i,f,a,E){if(!(f!=="true"||!a||!E)){var b=i.querySelector("[data-player-before]");b&&(b.style.paddingTop=E/a*100+"%")}}function d(i,f,a){if(f==="true"){var E=i.querySelector("[data-player-before]");if(E){var b=E.style.paddingTop&&E.style.paddingTop!=="0%";!b&&a.videoWidth&&a.videoHeight&&g(i,f,a.videoWidth,a.videoHeight)}}}function m(i,f){try{return new URL(f,i).toString()}catch(a){return f}}function v(i,f){return new Promise(function(a){if(f&&window.Hls&&Hls.isSupported())try{var E=new Hls,b={width:0,height:0,duration:NaN},T=!1,F=!1;E.on(Hls.Events.MANIFEST_PARSED,function(U,A){var _=A&&A.levels||E.levels||[],x=l(_);x&&x.width&&x.height&&(b.width=x.width,b.height=x.height,T=!0)}),E.on(Hls.Events.LEVEL_LOADED,function(U,A){A&&A.details&&isFinite(A.details.totalduration)&&(b.duration=A.details.totalduration,F=!0)}),E.on(Hls.Events.ERROR,function(){try{E.destroy()}catch(U){}a(b)}),E.on(Hls.Events.LEVEL_LOADED,function(){try{E.destroy()}catch(U){}a(b)}),E.loadSource(i);return}catch(U){a({width:0,height:0,duration:NaN});return}function W(U){for(var A=U.split(/\r?\n/),_=0,x=0,L=null,$=null,O=0;O<A.length;O++){var D=A[O];if(D.indexOf("#EXT-X-STREAM-INF:")===0)$=D;else if($&&D&&D[0]!=="#"){L||(L=D.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec($);if(j){var oe=parseInt(j[1],10),I=parseInt(j[2],10);oe>_&&(_=oe,x=I)}$=null}}return{bestW:_,bestH:x,media:L}}function C(U){for(var A=0,_=/#EXTINF:([\d.]+)/g,x;x=_.exec(U);)A+=parseFloat(x[1]);return A}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(U){if(!U.ok)throw new Error("master");return U.text()}).then(function(U){var A=W(U);if(!A.media){a({width:A.bestW||0,height:A.bestH||0,duration:NaN});return}var _=m(i,A.media);return fetch(_,{credentials:"omit",cache:"no-store"}).then(function(x){if(!x.ok)throw new Error("media");return x.text()}).then(function(x){a({width:A.bestW||0,height:A.bestH||0,duration:C(x)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var Ur="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",_r="(min-width: 768px)";function Cn(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Vt(r),t=An(r);else{let e=!1;return vt(Ur).catch(function(){}).then(function(){e||(n=Vt(r),t=An(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function An(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,l,c,P,g,d,m,v="",i="",f="",a=(p,y=r)=>y.querySelector(p),E=p=>a(`[data-mini-showreel-lightbox="${p}"]`),b=p=>a(`[data-mini-showreel-player="${p}"]`),T=p=>p.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",p)||p,F=(p,y)=>{let X=p.width,N=X/y;return N>p.height&&(N=p.height,X=N*y),{left:p.left+(p.width-X)/2,top:p.top+(p.height-N)/2,width:X,height:N}},W=p=>{let y=T(p).getBoundingClientRect(),X=p.getBoundingClientRect(),N=X.width>0&&X.height>0?X.width/X.height:16/9;return F(y,N)},C=(p,y)=>gsap.set(p,{position:"fixed",left:y.left,top:y.top,width:y.width,height:y.height,margin:0,x:0,y:0});function U(p){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(y=>y.setAttribute("data-mini-showreel-status",p))}function A(){i=(l==null?void 0:l.style.zIndex)||"",f=(c==null?void 0:c.style.zIndex)||"",l&&(l.style.zIndex=String(e)),c&&(c.style.zIndex=String(e))}function _(){l&&(l.style.zIndex=i),c&&(c.style.zIndex=f)}function x(p){let y=b(p);if(!y)return;let X=y.querySelector("[data-bunny-player-init]"),N=y.querySelector("video");if(N){if(X){let z=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');z&&(N.paused||N.ended)&&z.click();return}try{N.play()}catch(z){}}}function L(p){let y=b(p);if(!y)return;let X=y.querySelector("[data-bunny-player-init]"),N=y.querySelector("video");N&&(N.muted=!0,X&&X.setAttribute("data-player-muted","true"),(N.paused||N.ended)&&x(p))}function $(){_(),o="",s=!1,l=c=P=g=d=m=null,v="",i="",f="",pe.start()}function O(p){if(!p||s||(l=E(p),c=b(p),!l||!c)||(P=a("[data-mini-showreel-target]",l),!P))return;o=p,s=!0,pe.stop(),c.dataset.flipId=o,v=c.style.cssText||"",g=c.parentElement,d=c.nextSibling,A(),U("active"),x(o);let y=Flip.getState(c),X=W(P);l.appendChild(c),C(c,X),m=Flip.from(y,{duration:n,ease:t,absolute:!0,scale:!1})}function D(p){!s||!c||p&&p!==o||(L(o),U("not-active"),m&&m.kill(),m=Flip.fit(c,g,{duration:n,ease:t,scale:!1,onComplete:()=>{g.insertBefore(c,d),c.style.cssText=v,$()}}))}function j(){!s||!c||(m&&m.kill(),L(o),U("not-active"),g.insertBefore(c,d),c.style.cssText=v,$())}function oe(){!s||!c||!P||C(c,W(P))}function I(p){let y=p.target.closest("[data-mini-showreel-open]");y&&(p.preventDefault(),O(y.getAttribute("data-mini-showreel-open")||""))}function R(p){let y=p.target.closest("[data-mini-showreel-close]");y&&(p.preventDefault(),D(y.getAttribute("data-mini-showreel-close")||""))}function w(p){p.key==="Escape"&&D("")}let u=gsap.matchMedia();return u.add(_r,function(){return r.addEventListener("click",I),document.addEventListener("click",R),window.addEventListener("keydown",w),window.addEventListener("resize",oe),function(){j(),r.removeEventListener("click",I),document.removeEventListener("click",R),window.removeEventListener("keydown",w),window.removeEventListener("resize",oe)}}),function(){u.revert(),j()}}var Ie=1920,_e=1080,Ot="#E5E5E5",Bt="#000000",Mn="http://www.w3.org/2000/svg";function Rn(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(Mn,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${_e}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(u,p)=>{let y=document.createElementNS(Mn,u);return y.setAttribute("fill",p),t.appendChild(y),y},o=e("polygon",Ot),s=e("polygon",Bt),l=e("rect",Bt),c=e("rect",Ot),P=e("rect",Ot),g=e("rect",Bt);[l,c,P,g].forEach(u=>u.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let d=(u,p,y,X,N)=>{u.setAttribute("x",p),u.setAttribute("y",y),u.setAttribute("width",Math.max(0,X)),u.setAttribute("height",Math.max(0,N))},m={x:Ie*(2/3),y:_e*(1/3)},v=.1,i=.9,f={x:m.x,y:m.y},a={x:m.x,y:m.y},E={x:m.x,y:m.y},b=!1,T=()=>gsap.to(E,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:T}),F=()=>gsap.to(E,{y:gsap.utils.random(_e*.193,_e*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:F});T(),F();function W(){let u=gsap.utils.clamp(Ie*v,Ie*i,f.x),p=Ie-u,y=gsap.utils.clamp(_e*v,_e*i,f.y),X=_e-y;o.setAttribute("points",`0,${y} ${u},0 ${Ie},${y} ${Ie},${_e} 0,${_e}`),s.setAttribute("points",`${Ie},${y} ${u},0 ${u},${y}`),d(l,0,y,u,X);let N=u*.25,z=X*(2/3);d(c,u/2-N/2,y+X-z,N,z),d(P,u,y,p,X);let q=p*.5,k=X/3;d(g,u+p/2-q/2,y+X/2-k/2,q,k)}let C=.1,U=.03;function A(){let p=1-Math.pow(1-(b?C:U),gsap.ticker.deltaRatio(60)),y=b?a:E;f.x+=(y.x-f.x)*p,f.y+=(y.y-f.y)*p,W()}let _=(u,p)=>{let y=n.getBoundingClientRect();!y.width||!y.height||(a.x=gsap.utils.clamp(0,Ie,(u-y.left)/y.width*Ie),a.y=gsap.utils.clamp(0,_e,(p-y.top)/y.height*_e),b=!0)},x=()=>{b=!1},L=(u,p)=>{let y=n.getBoundingClientRect();u>=y.left&&u<=y.right&&p>=y.top&&p<=y.bottom?_(u,p):x()},O=window.matchMedia("(hover: hover) and (pointer: fine)").matches?We(L):null,D=u=>{let p=u.touches[0];p&&_(p.clientX,p.clientY)},j={passive:!0};n.addEventListener("touchstart",D,j),n.addEventListener("touchmove",D,j),n.addEventListener("touchend",x,j),n.addEventListener("touchcancel",x,j);let oe=!1,I=()=>{oe||(oe=!0,gsap.ticker.add(A))},R=()=>{oe&&(oe=!1,gsap.ticker.remove(A))},w=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:u=>u.isActive?I():R()});return W(),I(),function(){R(),w.kill(),gsap.killTweensOf(E),O&&O(),n.removeEventListener("touchstart",D,j),n.removeEventListener("touchmove",D,j),n.removeEventListener("touchend",x,j),n.removeEventListener("touchcancel",x,j),t.remove()}}var Vr="http://www.w3.org/2000/svg";var Or=4.1343749999999995,Br="#AFAFAF",qr="#000000",Gr=5e3,Wr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Nr=0,Fn=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Be=(r,n)=>{let t=document.createElementNS(Vr,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function zn(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Nr;e.setAttribute("data-pulse-dots-paused","");let s=Be("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let l=Be("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});l.append(Be("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Or.toFixed(2)}),Be("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let c=Be("defs",{});c.appendChild(l);let P=Be("rect",{width:1e3,height:1e3,fill:Br}),g=Be("g",{filter:`url(#${o})`,fill:qr});for(let m=0;m<20;m++)for(let v=0;v<20;v++){if(!Fn(v,m))continue;let i=Wr.filter(T=>Fn(v+T.dx,m+T.dy)),f=i[Math.floor(Math.random()*i.length)],a=185+v*31.5+27.5625/2,E=185+m*31.5+27.5625/2,b=Be("g",{transform:`rotate(${f.deg} ${a} ${E})`});b.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Gr)}ms`),b.append(Be("circle",{class:"pulse-dots__dot is--first",cx:a,cy:E,r:27.5625/2}),Be("circle",{class:"pulse-dots__dot is--last",cx:a,cy:E,r:27.5625/2})),g.appendChild(b)}s.append(c,P,g),e.appendChild(s);let d=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:m=>e.toggleAttribute("data-pulse-dots-paused",!m.isActive)});e.toggleAttribute("data-pulse-dots-paused",!d.isActive),t.push(()=>{d.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var St=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,Ln=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Dn=`#version 300 es
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
}`,kn=[`#version 300 es
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
}`],In=`#version 300 es
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
}`,Hn=`#version 300 es
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
}fragColor = color;}`,Un=`#version 300 es
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
}`,_n=[`#version 300 es
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
}`],On=`#version 300 es
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
}`;var qt=60,Yr=1.5,$r=1,Bn=150,Gt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function qn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function l(z,q){let k=e.createShader(z);return e.shaderSource(k,q),e.compileShader(k),k}let c=[];function P(z,q=Ln){let k=e.createProgram(),ne=l(e.VERTEX_SHADER,q),re=l(e.FRAGMENT_SHADER,z);e.attachShader(k,ne),e.attachShader(k,re),e.bindAttribLocation(k,0,"aVertexPosition"),e.bindAttribLocation(k,1,"aTextureCoord"),e.linkProgram(k);let se={p:k,v:ne,f:re,loc:{}};return c.push(se),se}function g(z){let{p:q,v:k,f:ne}=z;e.getProgramParameter(q,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(q),e.getShaderInfoLog(k),e.getShaderInfoLog(ne));let re=e.getProgramParameter(q,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let Z=e.getActiveUniform(q,se);z.loc[Z.name]=e.getUniformLocation(q,Z.name)}e.deleteShader(k),e.deleteShader(ne)}let d={bg:P(Dn,St),shapes:kn.map(z=>P(z,In)),trailSim:P(Un,St),trail:P(Hn),blur:_n.map(z=>P(z)),bloom:Vn.map(z=>P(z)),gmap:P(On,St)},m=e.createVertexArray();e.bindVertexArray(m);let v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let f=[];function a(z,q,k=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),k&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,z,q,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,z,q,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:z,h:q};return f.push(se),se}function E(){f.forEach(z=>{e.deleteTexture(z.tex),e.deleteFramebuffer(z.fb)}),f.length=0}function b(z,q,k,ne){e.useProgram(z.p);let re=q?q.w:t.width,se=q?q.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,q?q.fb:null),e.viewport(0,0,re,se);let Z=z.loc;Z.uMVMatrix&&e.uniformMatrix4fv(Z.uMVMatrix,!1,Gt),Z.uPMatrix&&e.uniformMatrix4fv(Z.uPMatrix,!1,Gt),Z.uTextureMatrix&&e.uniformMatrix4fv(Z.uTextureMatrix,!1,Gt),Z.uResolution&&e.uniform2f(Z.uResolution,re,se),Z.uArtboardResolution&&e.uniform2f(Z.uArtboardResolution,1920,1920),Z.uAspectRatio&&e.uniform1f(Z.uAspectRatio,1),Z.uMousePos&&e.uniform2f(Z.uMousePos,T.x,T.y),Z.uIsMask&&e.uniform1i(Z.uIsMask,0),Z.uParentTrackMouse&&e.uniform1f(Z.uParentTrackMouse,0);let Pe=0;Object.keys(k).forEach(he=>{Z[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,k[he].tex),e.uniform1i(Z[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!Z[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(Z[he],be[0],be[1]):e.uniform1f(Z[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let T={x:.5,y:.5},F={x:.5,y:.5},W=0,C=null,U=0;function A(){E();let z=Math.min(Yr,window.devicePixelRatio||1),q=Math.max(1,Math.round(n.clientWidth*z)),k=Math.max(1,Math.round(n.clientHeight*z));t.width=q,t.height=k;let ne=Z=>[Math.max(1,Math.round(q*Z)),Math.max(1,Math.round(k*Z))];C={a:a(q,k),b:a(q,k),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(q,k),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(q,k)},b(d.bg,C.a,{});let re=C.a,se=C.b;d.shapes.forEach(Z=>{b(Z,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,U=0}function _(){if(!C)return;let z=C.pp[U],q=C.pp[1-U];b(d.trailSim,q,{uPingPongTexture:z},{uTime:W,uPreviousMousePos:[F.x,F.y]}),U=1-U,b(d.trail,C.trail,{uTexture:C.base,uPingPongTexture:q}),b(d.blur[0],C.blur1,{uTexture:C.trail}),b(d.blur[1],C.blur2,{uTexture:C.blur1}),b(d.blur[2],C.blur3,{uTexture:C.blur2}),b(d.blur[3],C.blur4,{uTexture:C.blur3});let k=C.blur4;b(d.bloom[0],C.bth,{uTexture:k}),b(d.bloom[1],C.bd1,{uTexture:C.bth}),b(d.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:k}),b(d.bloom[3],C.bs1,{uTexture:C.bd2}),b(d.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:k}),b(d.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:k}),b(d.gmap,null,{uTexture:C.bloom},{uTime:0}),F.x=T.x,F.y=T.y}let x=Bn,$=We((z,q)=>{let k=t.getBoundingClientRect();!k.width||!k.height||(T.x=(z-k.left)/k.width,T.y=1-(q-k.top)/k.height,x=0,I())}),O=null,D=0,j=!1;function oe(z){if(!j||x>=Bn){O=null;return}if(O=requestAnimationFrame(oe),z-D<1e3/qt-1)return;let q=D?Math.min(z-D,100):1e3/qt;D=z,W+=$r*(q/(1e3/qt)),_(),x++}function I(){p&&j&&!O&&(F.x=T.x,F.y=T.y,D=0,O=requestAnimationFrame(oe))}let R=new IntersectionObserver(([z])=>{j=z.isIntersecting,j?I():O&&(cancelAnimationFrame(O),O=null)});R.observe(n);let w=null,u=new ResizeObserver(()=>{clearTimeout(w),w=setTimeout(()=>{p&&(A(),_())},60)});u.observe(n);let p=!1,y=null;function X(){y=null,c.forEach(g),p=!0,A(),_()}function N(){c.every(z=>e.getProgramParameter(z.p,s.COMPLETION_STATUS_KHR))?X():y=requestAnimationFrame(N)}return s?y=requestAnimationFrame(N):X(),function(){y&&cancelAnimationFrame(y),O&&cancelAnimationFrame(O),O=null,clearTimeout(w),R.disconnect(),u.disconnect(),$(),E(),c.forEach(k=>e.deleteProgram(k.p)),e.deleteBuffer(v),e.deleteBuffer(i),e.deleteVertexArray(m);let q=e.getExtension("WEBGL_lose_context");q&&q.loseContext(),t.remove()}}var Kr="#BBC0C8",Zr="#FFFFFF";var Wt='"Suisseintl Book", Arial, sans-serif';var Gn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],jr=3,Qr=1.325,pt=5,Jr=.4,Wn=20,eo=2;function Nn(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let l=(s%pt+pt)%pt/pt;return l<.4?1-e(l/.4):l<.6?0:e((l-.6)/.4)};return n.forEach(s=>{let l=(s.getAttribute("data-text")||"").trim();if(!l)return;let c=Array.from(Array(jr).fill(l).join(" ").toUpperCase()),P=window.matchMedia("(prefers-reduced-motion: reduce)").matches,g=document.createElement("canvas");g.setAttribute("aria-hidden","true"),Object.assign(g.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(g);let d=g.getContext("2d"),m=[],v=0,i=new Map,f=2;function a(){d.font=`24px ${Wt}`,m=c.map(D=>d.measureText(D).width),v=(3363-m.reduce((D,j)=>D+j,0))/(c.length-1)}let E=null;function b(){i=new Map,d.font=`24px ${Wt}`;let O=24,D=24*.35,j=[...new Set(c)].filter(w=>w!==" ").map(w=>({ch:w,w:d.measureText(w).width})),oe=Math.ceil((O+D+f*2)*T),I=0;j.forEach(w=>{w.sx=I,w.sw=Math.ceil((w.w+f*2)*T),I+=w.sw+2}),E=document.createElement("canvas"),E.width=Math.max(1,I),E.height=Math.max(1,oe);let R=E.getContext("2d");R.font=`${24*T}px ${Wt}`,R.fillStyle=Zr,R.textBaseline="alphabetic",j.forEach(w=>{R.fillText(w.ch,w.sx+f*T,(f+O)*T),i.set(w.ch,{sx:w.sx,sw:w.sw,x:-w.w/2-f,y:-O-f,w:w.sw/T,h:oe/T})})}let T=1;function F(){let O=Math.min(eo,window.devicePixelRatio||1),D=s.clientWidth;g.width=Math.max(1,Math.round(D*O)),g.height=Math.max(1,Math.round(s.clientHeight*O)),T=g.width/1920}let W=0;function C(){d.setTransform(1,0,0,1,0,0),d.fillStyle=Kr,d.fillRect(0,0,g.width,g.height);let O=P?0:e(W%Wn/Wn)*Math.PI*2;Gn.forEach((D,j)=>{let oe=Gn.length-1-j,I=P?0:o(W-pt+oe*Jr),R=v+I*Qr*24,w=2*Math.PI*D.r,u=D.start*Math.PI/180+O,p=0;for(let y=0;y<c.length;y++){let X=m[y];if(p+X>w)break;let N=i.get(c[y]);if(N){let z=u+(p+X/2)/D.r,q=Math.cos(z),k=Math.sin(z);d.setTransform(-k*T,q*T,-q*T,-k*T,(960+D.r*q)*T,(960+D.r*k)*T),d.drawImage(E,N.sx,0,N.sw,E.height,N.x,N.y,N.w,N.h)}p+=X+R}})}let U=(O,D)=>{W+=D/1e3,C()},A=!1,_=()=>{!A&&!P&&(A=!0,gsap.ticker.add(U))},x=()=>{A&&(A=!1,gsap.ticker.remove(U))},L=new ResizeObserver(()=>{F(),b(),C()});L.observe(s),F(),a(),b(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),b(),C()});let $=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:O=>O.isActive?_():x()});$.isActive&&_(),t.push(()=>{x(),$.kill(),L.disconnect(),g.remove()})}),()=>t.forEach(s=>s())}var Qe={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Xn=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},to=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return Xn(n)*(1-e)+Xn(n+1)*e};function Yn(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,l=0,c=18,P=0,g=0,d=0,m=-1e5,v=-1e5,i=!1,f=!1;function a(){s&&s.revert(),n.textContent="";let x=getComputedStyle(n);l=parseFloat(x.paddingTop),c=parseFloat(x.lineHeight),P=n.offsetHeight;let L=Math.max(1,Math.floor((P-l-parseFloat(x.paddingBottom))/c)),$=document.createDocumentFragment();for(let O=0;O<L;O++){let D=document.createElement("div");D.className="type-field__row",D.textContent=t,$.appendChild(D)}n.appendChild($),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((O,D)=>({chars:O.querySelectorAll(".type-field__char"),cur:o[D]?o[D].cur:0,drawn:0}))}})}function E(x){let L=Math.max(0,Math.min(x.chars.length,Math.round(x.cur)));if(L===x.drawn)return;let $=Math.min(L,x.drawn),O=Math.max(L,x.drawn);for(let D=$;D<O;D++)x.chars[D].style.visibility=D<L?"visible":"hidden";x.drawn=L}function b(x,L){if(!o.length)return;let $=Math.min(L,50)/16.667,O=w=>1-Math.pow(1-w,$),D=pe.scroll,j=Math.min(Math.max(g-D,0),d-D-P);v+=(m-j-l-v)*O(Qe.followEase);let oe=Math.floor(v/c),I=D*.004,R=i&&m>=g-D&&m<=d-D;for(let w=0;w<o.length;w++){let u=o[w],p=u.chars.length,y=Math.abs(w-oe),X=0;if(R){if(y===0)X=p;else if(y<=Qe.radius){let N=1-y/(Qe.radius+1);X=1+Math.min(Qe.maxSide,N*(1-Qe.ragged/2+Qe.ragged*to(w*1.3+I)))*(p-1)}}u.cur+=(X-u.cur)*O(Qe.ease),E(u)}}function T(){f||(gsap.ticker.add(b),f=!0)}function F(){f&&(gsap.ticker.remove(b),f=!1)}let W=We((x,L)=>{v<-1e4&&(v=L),m=L,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let U=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(x){g=x.start+window.innerHeight,d=x.end},onToggle(x){x.isActive?T():F()}});U.isActive&&T();let A,_=()=>{clearTimeout(A),A=setTimeout(()=>{Math.floor((n.offsetHeight-l-parseFloat(getComputedStyle(n).paddingBottom))/c)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",_),function(){F(),clearTimeout(A),W(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",_),U.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var $n={duration:.5,ease:"power3"};function Kn(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",$n),l=gsap.quickTo(o,"y",$n),c=0,P=0,g=!1,d=new ResizeObserver(()=>{c=o.offsetWidth,P=o.offsetHeight});d.observe(o),c=o.offsetWidth,P=o.offsetHeight;let v=We((f,a)=>{let E=e.getBoundingClientRect();if(!(f>=E.left&&f<=E.right&&a>=E.top&&a<=E.bottom)){g&&(g=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let T=gsap.utils.clamp(0,Math.max(0,E.width-c),f-E.left-c/2),F=gsap.utils.clamp(0,Math.max(0,E.height-P),a-E.top-P/2);if(!g){g=!0,s(T,T),l(F,F),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(T),l(F)}),i=()=>{g&&(g=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{v(),document.documentElement.removeEventListener("mouseleave",i),d.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var no=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],ro=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],oo="#FFFFFF";var Zn="power3.out";function jn(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],l=[];function c(){if(s.length&&s[0].isConnected)return;let m=e.querySelectorAll(":scope > div > div");o=(m.length?[...m]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),l=m.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function P(m){m.textContent=m.dataset.orig,m.style.border=""}let g=()=>{c(),l.forEach(v=>{v.el.style.overflow="visible"});let m=(s.length-1)/2;s.forEach((v,i)=>{gsap.to(v,{color:oo,ease:Zn,duration:.3,delay:Math.abs(i-m)*.03,overwrite:"auto",onStart:()=>{let f=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);f==1&&(v.textContent=gsap.utils.random(ro)),a==1&&(v.style.border=`1px solid ${gsap.utils.random(no)}`)}})})},d=()=>{if(!s.length)return;let m=getComputedStyle(e).color,v=(s.length-1)/2;l.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,f)=>{gsap.to(i,{color:m,ease:Zn,duration:.3,delay:Math.abs(f-v)*.03,overwrite:"auto",onStart:()=>P(i)})})};e.addEventListener("mouseenter",g),e.addEventListener("mouseleave",d),t.push(()=>{e.removeEventListener("mouseenter",g),e.removeEventListener("mouseleave",d),gsap.killTweensOf(s),o.forEach(m=>m.revert()),o=[],s=[],l=[]})}),()=>t.forEach(e=>e())}function Nt(r,n){let t=null;le(dn(r)),le(Rn(r)),le(jn(r)),le(Sn(r)),le(Pn(r)),le(vn(r)),le(Cn(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?fn(r):null,t?le(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(pn(r)),le(gn(r)),le(xn(r)),le(bt(r)),xt(r),le(bn(r)),t}function Tt(r){le(Tn(r)),le(En(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(yn(r)),le(tt(r.querySelector("[data-type-field]"),()=>Yn(r))),le(Kn(r)),le(tt(r.querySelector("[data-pulse-dots]"),()=>zn(r))),le(qn(r)),le(Nn(r)),ScrollTrigger.sort()}var ao={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function At(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,reduceWhiteSpace:!1,onSplit:function(s){gsap.set(t,{autoAlpha:1});var l=ao[e],c={yPercent:110,duration:l.duration,stagger:l.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?c.delay=.5:c.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],c)}}))}),function(){n.forEach(function(t){t.revert()})}}var nr=hr(Qn());var Jn=window.matchMedia("(prefers-reduced-motion: reduce)"),$t=.9;function er(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return Jn.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:gt,duration:$t,ease:Oe},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:$t,ease:Oe},0),e.set(t,{autoAlpha:0}),e)}function Kt(r,n,t="100vh"){let e=gsap.timeline();return Jn.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:$t,ease:Oe},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function Zt(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),Kt(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var Je=null,jt=!1;function Qt(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var tr={sync:!0,beforeLeave(){jt=kt({keepCurtain:!0}),pe.stop(),Je||(Je=Dt())},beforeEnter(r){Je||(Je=Dt()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),on(),Nt(r.next.container,!1)},leave(r){return er(r.current.container,r.next.container)},enter(r){return jt&&(tn(),jt=!1),le(At(r.next.container)),Kt(r.next.container,Qt)},afterLeave(){Je&&(Je(),Je=null)},afterEnter(r){an(r),Tt(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(nr.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...tr,once(r){let n=document.querySelector("[data-menu-status]");nn(),rn(),n&&(xt(n),bt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=Nt(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(At(t)),Zt(t,function(s){Qt(s),Tt(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(At(t)),Zt(t,function(o){Qt(o),Tt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...tr}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

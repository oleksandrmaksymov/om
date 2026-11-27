(()=>{var gr=Object.create;var on=Object.defineProperty;var xr=Object.getOwnPropertyDescriptor;var br=Object.getOwnPropertyNames;var yr=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty;var Er=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var wr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of br(n))!Pr.call(r,o)&&o!==t&&on(r,o,{get:()=>n[o],enumerable:!(e=xr(n,o))||e.enumerable});return r};var Sr=(r,n,t)=>(t=r!=null?gr(yr(r)):{},wr(n||!r||!r.__esModule?on(t,"default",{value:r,enumerable:!0}):t,r));var ir=Er((jt,Jt)=>{(function(r,n){typeof jt=="object"&&typeof Jt!="undefined"?Jt.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})(jt,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,l=s.root,c=l===void 0?document.body:l,E=s.timeout,b=E===void 0?2e3:E,p=s.limit,f=p===void 0?0:p;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=c,this.timeout=b,this.limit=f},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var l=s.target,c=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(l));e.toPrefetch.has(c)&&(e.observer.unobserve(l),e.barba.cache.has(c)?e.barba.cache.update(c,{action:"prefetch"}):e.barba.cache.set(c,e.barba.request(c,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(E){e.logger.error(E)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var l=s,c=e.barba.dom.getHref(l);e.barba.cache.has(c)||e.barba.prevent.checkHref(c)||e.barba.prevent.checkLink(l,{},c)||(e.observer.observe(s),e.toPrefetch.add(c))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var It=[];function le(r){typeof r=="function"&&It.push(r)}function Ht(){let r=It,n=ScrollTrigger.getAll();return It=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var Tr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Tr);var Ve="parallax",xt=.8;var Ar="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",an="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ze=null,Ut=function(){return!1};function sn(){Ze&&gsap.timeline().to(Ze,{clipPath:an,duration:.9,ease:Ve,overwrite:!0},0).fromTo(Ze,{filter:"brightness(1)"},{filter:"brightness("+(1-xt)+")",duration:.9,ease:Ve},0).set(Ze,{clearProps:"filter"})}function ln(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;Ze=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ze&&gsap.to(Ze,{clipPath:o?Ar:an,duration:.9,ease:Ve,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),Ut=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function cn(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function un(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function dn(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function bt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let l=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){l();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},l)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function yt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),c=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+c}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function nt(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(l=>{e||!l.some(c=>c.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var Je={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{Je.x=r.clientX,Je.y=r.clientY,Je.known=!0},{passive:!0});function Pt(){return Je}function Ne(r){let n=e=>r(e.clientX,e.clientY),t=()=>{Je.known&&r(Je.x,Je.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var rt=new Map;function Cr(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),l=s.querySelector("svg");if(!l)return new Float32Array(0);var c=parseFloat(l.getAttribute("width")||512),E=parseFloat(l.getAttribute("height")||512),b=l.getAttribute("viewBox");if(b){var p=b.split(/[\s,]+/);c=+p[2],E=+p[3]}var f=Math.min(t/c,t/E)*.9,u=(t-c*f)/2,i=(t-E*f)/2;o.save(),o.translate(u,i),o.scale(f,f),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(g){if(g.tagName==="path"){var z=g.getAttribute("d");z&&o.fill(new Path2D(z))}else g.tagName==="rect"?o.fillRect(+g.getAttribute("x")||0,+g.getAttribute("y")||0,+g.getAttribute("width")||0,+g.getAttribute("height")||0):g.tagName==="circle"&&(o.beginPath(),o.arc(+g.getAttribute("cx")||0,+g.getAttribute("cy")||0,+g.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var v=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),x=0,P=0;P<t*t;P++)v[P*4+3]>30&&(a[x++]=P);if(!x)return new Float32Array(0);for(var T=new Float32Array(n*4),H=0;H<n;H++){var N=a[Math.floor(Math.random()*x)],C=N%t,U=(N-C)/t,A=v[N*4+3]/255,_=H*4;T[_]=(C-t/2)*1.2+(Math.random()-.5)*1.65,T[_+1]=-(U-t/2)*1.2+(Math.random()-.5)*1.65,T[_+2]=(Math.random()-.5)*37*A,T[_+3]=A}return T}function at(r,n){var t=n+"|"+r;if(!rt.has(t)){var e;try{e=Cr(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);rt.size>=4&&rt.delete(rt.keys().next().value),rt.set(t,Promise.resolve(e))}return rt.get(t)}var wt={};function it(r,n,t){for(var e=wt[r]||(wt[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?vn(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var l=o.renderer;return l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(n,t,!1),l.setClearColor(0,1),l.toneMapping=THREE.ACESFilmicToneMapping,l.toneMappingExposure=1.4,l.domElement.style.width="100%",l.domElement.style.height="100%",o}function st(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=wt[r]||(wt[r]=[]);if(e.length>=1){vn(n);return}t.setSize(1,1,!1),e.push(n)}function vn(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var Mr=.03,Rr=.95,Fr=.005,ot=Math.PI*2,zr="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Lr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),Dr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),kr=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Ir=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),Hr=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function Et(r,n){var t=new THREE.DataTexture(r,n,n,THREE.RGBAFormat,THREE.FloatType);return t.minFilter=t.magFilter=THREE.NearestFilter,t.needsUpdate=!0,t}function lt(r,n){if(r.sim!==void 0)return r.sim;var t=r.renderer;if(!t.capabilities.isWebGL2||!t.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(n)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},l=[s(),s()],c=[s(),s()],E=0,b=new Float32Array(o*4),p=new Float32Array(o*4),f=new Float32Array(n*2),u=0;u<o;u++){var i=u*1.37,v=u*4;b[v]=i%ot,b[v+1]=i*.7%ot,b[v+2]=i*2.3%ot,b[v+3]=i*1.5%ot,p[v]=i*1.1%ot,p[v+1]=(u*2654435761&65535)/65535,p[v+2]=(u*48271&65535)/65535,p[v+3]=(u*16807&65535)/65535,u<n&&(f[u*2]=(u%e+.5)/e,f[u*2+1]=(Math.floor(u/e)+.5)/e)}var a=Et(b,e),x=Et(p,e),P=new Float32Array(o*4),T=Et(P,e),H=new Float32Array(o*4),N=Et(H,e),C=new THREE.Scene,U=new THREE.Camera,A=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);A.frustumCulled=!1,C.add(A);var _=function(k,R){return new THREE.ShaderMaterial({vertexShader:zr,fragmentShader:k,uniforms:R,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},g=_(Lr,{tPos:{value:null},tVel:{value:null},tTgt:{value:T},tP1:{value:a},tP2:{value:x},time:{value:0},gravity:{value:Mr},wind:{value:Fr},friction:{value:Rr},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),z=_(Dr,{tPos:{value:null},tVel:{value:null}}),$=_(kr,{tSrc:{value:null}}),V=new THREE.ShaderMaterial({vertexShader:Ir,fragmentShader:Hr,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:T},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function L(k,R){A.material=k,t.setRenderTarget(R),t.render(C,U)}function j(){V.uniforms.tPos.value=l[E].texture,V.uniforms.tVel.value=c[E].texture}var oe={material:V,refAttribute:function(){return new THREE.BufferAttribute(f,2)},setPoints:function(k,R){H.fill(0),P.fill(0);for(var w=0;w<R;w++){var d=w*4;H[d]=k[d],H[d+1]=k[d+1]+40,H[d+2]=k[d+2],P[d]=k[d],P[d+1]=k[d+1],P[d+2]=k[d+2],P[d+3]=w*.01%ot}N.needsUpdate=!0,T.needsUpdate=!0;var m=t.getRenderTarget();E=0,$.uniforms.tSrc.value=N,L($,l[0]),t.setRenderTarget(c[0]),t.clear(!0,!1,!1),t.setRenderTarget(m),j()},step:function(k,R){var w=t.getRenderTarget(),d=g.uniforms;d.time.value=k,R?(d.mouseOn.value=1,d.radius.value=R.radius,d.mousePos.value.copy(R.pos),d.mouseVel.value.set(R.vel.x,R.vel.y),d.mouseVelLen.value=R.vel.length()):d.mouseOn.value=0;var m=1-E;d.tPos.value=l[E].texture,d.tVel.value=c[E].texture,L(g,c[m]),z.uniforms.tPos.value=l[E].texture,z.uniforms.tVel.value=c[m].texture,L(z,l[m]),E=m,t.setRenderTarget(w),V.uniforms.uTime.value=k,j()},dispose:function(){l.concat(c).forEach(function(k){k.dispose()}),[a,x,T,N].forEach(function(k){k.dispose()}),[g,z,$,V].forEach(function(k){k.dispose()}),A.geometry.dispose()}};return r.sim=oe,oe}var _t={};function ft(r){return _t[r]||(_t[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),_t[r]}function fn(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=it("case",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var E=new THREE.PointLight(13931578,2.4,1200);E.position.set(-300,-100,300),t.add(E);var b=new THREE.PointLight(5913114,1.2,900);b.position.set(0,200,-300),t.add(b);var p=new THREE.PointLight(16750916,1.3,600);p.position.set(0,-250,200),t.add(p);var f=0,u=0,i=0,v=0,a=!1,x=0,P=0,T=Math.PI*2/6,H=new THREE.Vector2(9999,9999),N=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),A=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,g=!1,z=0,$=0,V=8e4,L=.03,j=.95,oe=.005,k=12e4,R=null,w,d,m,y,X,W,F=0,q=!1,D=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var O=new THREE.BufferGeometry;w=new Float32Array(k*3),d=new Float32Array(k*3),m=new Float32Array(k*3),y=new Float32Array(k*3),X=new Float32Array(k),W=new Float32Array(k),O.setAttribute("position",new THREE.BufferAttribute(w,3)),O.setAttribute("color",new THREE.BufferAttribute(y,3)),O.setAttribute("size",new THREE.BufferAttribute(X,1)),O.setAttribute("alpha",new THREE.BufferAttribute(W,1)),O.setAttribute("velocity",new THREE.BufferAttribute(d,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;l=lt(o,k),l&&O.setAttribute("ref",l.refAttribute());var K=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:h,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(O,K),l&&(R.frustumCulled=!1),t.add(R)}function se(O,Y){return at(O,Y)}function Z(O){F=O.length/4;for(var Y=0;Y<F;Y++){var h=Y*3,K=Y*4,ie=O[K],Ce=O[K+1],Me=O[K+2],Re=O[K+3];w[h]=ie,w[h+1]=Ce+40,w[h+2]=Me,d[h]=d[h+1]=d[h+2]=0,m[h]=ie,m[h+1]=Ce,m[h+2]=Me;var M=ne[Math.floor(Math.random()*ne.length)],B=.7+Math.random()*.4;y[h]=M.r*B,y[h+1]=M.g*B,y[h+2]=M.b*B,X[Y]=1.8+Math.random()*3.8,W[Y]=.3+(Re||.7)*.75}l&&l.setPoints(O,F),R.geometry.setDrawRange(0,F),["position","color","size","alpha"].forEach(function(S){R.geometry.attributes[S].needsUpdate=!0}),q=!0}function Pe(O){return se(O,Math.min(k,V)).then(function(Y){Y.length&&R&&Z(Y)})}function he(O){if(!(!q||!F)){if(D+=O,l){l.step(D,g?{pos:U,vel:_,radius:C}:null);return}for(var Y=0;Y<F;Y++){var h=Y*3,K=Y*1.37;if(d[h]+=Math.sin(D*.4+K)*.008+Math.sin(D*1.1+K*2.3)*.003,d[h+1]+=Math.cos(D*.35+K*.7)*.008+Math.sin(D*.9+K*1.5)*.004,d[h+2]+=Math.sin(D*.25+K*1.1)*.004,d[h+1]-=L*.06,d[h]+=Math.sin(D*.25+w[h+1]*.008)*oe*.6,d[h+2]+=Math.cos(D*.3+w[h]*.008)*oe*.3,g){var ie=w[h]-U.x,Ce=w[h+1]-U.y,Me=w[h+2]-U.z,Re=ie*ie+Ce*Ce+Me*Me,M=C*C;if(Re<M&&Re>.25){var B=Math.sqrt(Re),S=B/C,ee=(Y*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-S,1.5+ee),ke=1+Math.min(_.length()*.12,1),we=fe*ve*1.2*ke,Fe=1/B;d[h]+=ie*Fe*we,d[h+1]+=Ce*Fe*we,d[h+2]+=Me*Fe*we*.2;var ye=.02+ee*.06;d[h]+=_.x*fe*ye,d[h+1]+=_.y*fe*ye;var We=fe*.15;d[h]+=(ee-.5)*We,d[h+1]+=((Y*48271&65535)/65535-.5)*We}}var Oe=m[h],Ft=m[h+1]+40,tt=m[h+2],ct=Oe-w[h],Ye=Ft-w[h+1],$e=tt-w[h+2],ht=Math.sqrt(ct*ct+Ye*Ye+$e*$e),gt=(Y*48271&65535)/65535,zt=.003+gt*.003,Lt=1+Math.min(ht*.002,.5),ut=zt*Lt;d[h]+=ct*ut,d[h+1]+=Ye*ut,d[h+2]+=$e*ut;var dt=(Y*16807&65535)/65535,Ke=j*(.92+dt*.06);d[h]*=Ke,d[h+1]*=Ke,d[h+2]*=Ke,w[h]+=d[h],w[h+1]+=d[h+1],w[h+2]+=d[h+2];var vt=Math.sqrt(Math.pow(w[h]-m[h],2)+Math.pow(w[h+1]-m[h+1],2)+Math.pow(w[h+2]-m[h+2],2));W[Y]=.15+.55*(1-Math.min(vt*.005,1))+Math.sin(D*1.5+Y*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(O,Y){var h=s.domElement.getBoundingClientRect();if(!(h.width===0||h.height===0)&&(H.set((O-h.left)/h.width*2-1,-((Y-h.top)/h.height)*2+1),N.setFromCamera(H,e),N.ray.intersectPlane(ze,Le))){A.copy(U),R&&U.copy(Le).applyMatrix4(be.copy(R.matrixWorld).invert()),_.subVectors(U,A);var K=_.length();K>15&&_.multiplyScalar(15/K)}}function Q(O,Y){var h=r.getBoundingClientRect();return O>=h.left&&O<=h.right&&Y>=h.top&&Y<=h.bottom}var I=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!n){var Te=function(O){z=O.clientX,$=O.clientY;var Y=Q(O.clientX,O.clientY);if(Y){g=!0,te(O.clientX,O.clientY);var h=r.getBoundingClientRect(),K=Math.round(O.clientX-h.left),ie=Math.round(O.clientY-h.top);I&&(I.textContent="X: "+K+"PX    Y: "+ie+"PX")}else g=!1,U.set(9999,9999,0);a&&(f+=(O.clientX-x)*.005,i+=(O.clientY-P)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),x=O.clientX,P=O.clientY)},Ee=function(O){Q(O.clientX,O.clientY)&&(a=!0,x=O.clientX,P=O.clientY)},ce=function(){a=!1,f=0,i=0,u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ce)}function me(){for(var O=4e3,Y=new THREE.BufferGeometry,h=new Float32Array(O*3),K=new Float32Array(O*3),ie=0;ie<O;ie++){h[ie*3]=(Math.random()-.5)*2200,h[ie*3+1]=(Math.random()-.5)*1800,h[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}Y.setAttribute("position",new THREE.BufferAttribute(h,3)),Y.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var M=Re.getContext("2d"),B=M.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=B,M.fillRect(0,0,32,32);var S=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(Y,S);return ee.userData={positions:h,count:O},t.add(ee),ee}re();var de=n?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var qe=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(O){Ae=O[0].isIntersecting,O[0].isIntersecting&&!xe&&!n&&(xe=!0,I&&(I.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,G=0;function J(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!n){var O=Pt();O.known&&(z=O.x,$=O.y);var Y=Q(z,$);Y?(g=!0,te(z,$)):(g=!1,U.set(9999,9999,0))}}window.addEventListener("scroll",J,{passive:!0});var ae=null;function Xe(){if(ae=requestAnimationFrame(Xe),!!Ae){G++;var O=Math.min(qe.getDelta(),.05),Y=qe.elapsedTime;if(n)u+=T*O;else{var h=f-u;h=h%(Math.PI*2),h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2),u+=h*.12,v+=(i-v)*.12}if(R&&(R.rotation.x=v,R.rotation.y=u,R.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin(Y*.2+ie)*.05,K[ie*3]+=Math.cos(Y*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-u*35*.35,de.position.y=v*28*.35}c.position.x=300+Math.sin(Y*.3)*100,c.position.y=350+Math.cos(Y*.2)*80,E.intensity=2+Math.sin(Y*.5)*.4,p.intensity=.8+Math.sin(Y*.4+1)*.3,!(n&&ge&&G%4!==0)&&(he(O),s.render(t,e))}}return Xe(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",J),clearTimeout(Ue),He.disconnect(),t.traverse(function(O){O.geometry&&O.geometry.dispose()}),st("case",o),R=null}}function pn(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=it("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),n.add(c);var E=new THREE.PointLight(5913114,1.2,900);E.position.set(0,200,-300),n.add(E);var b=new THREE.PointLight(16750916,1.3,600);b.position.set(0,-250,200),n.add(b);var p=0,f=Math.PI*2/6,u=8e4,i=.03,v=.95,a=.005,x=12e4,P=null,T,H,N,C,U,A,_=0,g=!1,z=0,$=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function V(){var te=new THREE.BufferGeometry;T=new Float32Array(x*3),H=new Float32Array(x*3),N=new Float32Array(x*3),C=new Float32Array(x*3),U=new Float32Array(x),A=new Float32Array(x),te.setAttribute("position",new THREE.BufferAttribute(T,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(U,1)),te.setAttribute("alpha",new THREE.BufferAttribute(A,1)),te.setAttribute("velocity",new THREE.BufferAttribute(H,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;s=lt(e,x),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:I,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));P=new THREE.Points(te,ue),s&&(P.frustumCulled=!1),n.add(P)}function L(te,Q){return at(te,Q)}function j(te){_=te.length/4;for(var Q=0;Q<_;Q++){var I=Q*3,ue=Q*4,xe=te[ue],Te=te[ue+1],Ee=te[ue+2],ce=te[ue+3];T[I]=xe,T[I+1]=Te+40,T[I+2]=Ee,H[I]=H[I+1]=H[I+2]=0,N[I]=xe,N[I+1]=Te,N[I+2]=Ee;var me=$[Math.floor(Math.random()*$.length)],de=.7+Math.random()*.4;C[I]=me.r*de,C[I+1]=me.g*de,C[I+2]=me.b*de,U[Q]=1.8+Math.random()*3.8,A[Q]=.3+(ce||.7)*.75}s&&s.setPoints(te,_),P.geometry.setDrawRange(0,_),["position","color","size","alpha"].forEach(function(De){P.geometry.attributes[De].needsUpdate=!0}),g=!0}function oe(te){return L(te,Math.min(x,u)).then(function(Q){Q.length&&P&&j(Q)})}function k(te){if(!(!g||!_)){if(z+=te,s){s.step(z,null);return}for(var Q=0;Q<_;Q++){var I=Q*3,ue=Q*1.37;H[I]+=Math.sin(z*.4+ue)*.008+Math.sin(z*1.1+ue*2.3)*.003,H[I+1]+=Math.cos(z*.35+ue*.7)*.008+Math.sin(z*.9+ue*1.5)*.004,H[I+2]+=Math.sin(z*.25+ue*1.1)*.004,H[I+1]-=i*.06,H[I]+=Math.sin(z*.25+T[I+1]*.008)*a*.6,H[I+2]+=Math.cos(z*.3+T[I]*.008)*a*.3;var xe=N[I],Te=N[I+1]+40,Ee=N[I+2],ce=xe-T[I],me=Te-T[I+1],de=Ee-T[I+2],De=Math.sqrt(ce*ce+me*me+de*de),qe=(Q*48271&65535)/65535,Ae=.003+qe*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;H[I]+=ce*ge,H[I+1]+=me*ge,H[I+2]+=de*ge;var Ue=(Q*16807&65535)/65535,G=v*(.92+Ue*.06);H[I]*=G,H[I+1]*=G,H[I+2]*=G,T[I]+=H[I],T[I+1]+=H[I+1],T[I+2]+=H[I+2];var J=Math.sqrt(Math.pow(T[I]-N[I],2)+Math.pow(T[I+1]-N[I+1],2)+Math.pow(T[I+2]-N[I+2],2));A[Q]=.15+.55*(1-Math.min(J*.005,1))+Math.sin(z*1.5+Q*.01)*.05}P.geometry.attributes.position.needsUpdate=!0,P.geometry.attributes.alpha.needsUpdate=!0,P.geometry.attributes.velocity.needsUpdate=!0}}V();for(var R=4e3,w=new THREE.BufferGeometry,d=new Float32Array(R*3),m=new Float32Array(R*3),y=0;y<R;y++){d[y*3]=(Math.random()-.5)*2200,d[y*3+1]=(Math.random()-.5)*1800,d[y*3+2]=-200-Math.random()*1800;var X=$[Math.floor(Math.random()*$.length)],W=.2+Math.random()*.3;m[y*3]=X.r*W,m[y*3+1]=X.g*W,m[y*3+2]=X.b*W}w.setAttribute("position",new THREE.BufferAttribute(d,3)),w.setAttribute("color",new THREE.BufferAttribute(m,3));var F=document.createElement("canvas");F.width=F.height=32;var q=F.getContext("2d"),D=q.createRadialGradient(16,16,0,16,16,16);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.3,"rgba(255,255,255,0.6)"),D.addColorStop(.7,"rgba(255,255,255,0.15)"),D.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=D,q.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(F),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(w,ne);n.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var Z=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(Z.getDelta(),.05),Q=Z.elapsedTime;p+=f*te,P&&(P.rotation.y=p,P.position.y=5,P.scale.setScalar(.85));for(var I=0;I<R;I++)d[I*3+1]+=Math.sin(Q*.2+I)*.05,d[I*3]+=Math.cos(Q*.15+I*.5)*.03;w.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-p*35*.35,l.position.x=300+Math.sin(Q*.3)*100,l.position.y=350+Math.cos(Q*.2)*80,c.intensity=2+Math.sin(Q*.5)*.4,b.intensity=.8+Math.sin(Q*.4+1)*.3,k(te),o.render(n,t)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),st("card",e),P=null}}var mn="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function hn(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return ft(mn).then(function(){o||(s=t?Ur(n):fn(n))}),function(){o=!0,s&&s()}}return t?e():nt(n,e)}function gn(r){let n=r.querySelector("#axion-card");if(n)return nt(n,function(){let t=!1,e=null;return ft(mn).then(function(){t||(e=pn(n))}),function(){t=!0,e&&e()}})}function Ur(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=it("home",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var E=new THREE.PointLight(13931578,2.4,1200);E.position.set(-300,-100,300),t.add(E);var b=new THREE.PointLight(5913114,1.2,900);b.position.set(0,200,-300),t.add(b);var p=new THREE.PointLight(16750916,1.3,600);p.position.set(0,-250,200),t.add(p);var f=0,u=0,i=0,v=0,a=!1,x=0,P=0,T=Math.PI*2/6,H=new THREE.Vector2(9999,9999),N=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),A=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,g=!1,z=0,$=0,V=8e4,L=.03,j=.95,oe=.005,k=12e4,R=null,w,d,m,y,X,W,F=0,q=!1,D=!1,ne=0,re=0,se=null,Z=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var M=new THREE.BufferGeometry;w=new Float32Array(k*3),d=new Float32Array(k*3),m=new Float32Array(k*3),y=new Float32Array(k*3),X=new Float32Array(k),W=new Float32Array(k),M.setAttribute("position",new THREE.BufferAttribute(w,3)),M.setAttribute("color",new THREE.BufferAttribute(y,3)),M.setAttribute("size",new THREE.BufferAttribute(X,1)),M.setAttribute("alpha",new THREE.BufferAttribute(W,1)),M.setAttribute("velocity",new THREE.BufferAttribute(d,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;l=lt(o,k),l&&M.setAttribute("ref",l.refAttribute());var ee=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:S,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(M,ee),l&&(R.frustumCulled=!1),t.add(R)}function he(M,B){return at(M,B)}function be(M){F=M.length/4;for(var B=0;B<F;B++){var S=B*3,ee=B*4,ve=M[ee],fe=M[ee+1],ke=M[ee+2],we=M[ee+3];w[S]=ve,w[S+1]=fe+40,w[S+2]=ke,d[S]=d[S+1]=d[S+2]=0,m[S]=ve,m[S+1]=fe,m[S+2]=ke;var Fe=Z[Math.floor(Math.random()*Z.length)],ye=.7+Math.random()*.4;y[S]=Fe.r*ye,y[S+1]=Fe.g*ye,y[S+2]=Fe.b*ye,X[B]=1.8+Math.random()*3.8,W[B]=.3+(we||.7)*.75}l&&l.setPoints(M,F),R.geometry.setDrawRange(0,F),["position","color","size","alpha"].forEach(function(We){R.geometry.attributes[We].needsUpdate=!0}),q=!0,D=!1,ne=1}function ze(M){return he(M,Math.min(k,V)).then(function(B){B.length&&R&&be(B)})}function Le(M){if(!(!q||!F)){if(re+=M,l){l.step(re,g&&J==="interactive"?{pos:U,vel:_,radius:C}:null);return}for(var B=0;B<F;B++){var S=B*3,ee=B*1.37;if(d[S]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,d[S+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,d[S+2]+=Math.sin(re*.25+ee*1.1)*.004,d[S+1]-=L*.06,d[S]+=Math.sin(re*.25+w[S+1]*.008)*oe*.6,d[S+2]+=Math.cos(re*.3+w[S]*.008)*oe*.3,g&&J==="interactive"){var ve=w[S]-U.x,fe=w[S+1]-U.y,ke=w[S+2]-U.z,we=ve*ve+fe*fe+ke*ke,Fe=C*C;if(we<Fe&&we>.25){var ye=Math.sqrt(we),We=ye/C,Oe=(B*2654435761&65535)/65535,Ft=.6+Oe*.8,tt=Math.pow(1-We,1.5+Oe),ct=1+Math.min(_.length()*.12,1),Ye=tt*Ft*1.2*ct,$e=1/ye;d[S]+=ve*$e*Ye,d[S+1]+=fe*$e*Ye,d[S+2]+=ke*$e*Ye*.2;var ht=.02+Oe*.06;d[S]+=_.x*tt*ht,d[S+1]+=_.y*tt*ht;var gt=tt*.15;d[S]+=(Oe-.5)*gt,d[S+1]+=((B*48271&65535)/65535-.5)*gt}}var zt=m[S],Lt=m[S+1]+40,ut=m[S+2],dt=zt-w[S],Ke=Lt-w[S+1],vt=ut-w[S+2],dr=Math.sqrt(dt*dt+Ke*Ke+vt*vt),vr=(B*48271&65535)/65535,fr=.003+vr*.003,pr=1+Math.min(dr*.002,.5),Dt=fr*pr;d[S]+=dt*Dt,d[S+1]+=Ke*Dt,d[S+2]+=vt*Dt;var mr=(B*16807&65535)/65535,kt=j*(.92+mr*.06);d[S]*=kt,d[S+1]*=kt,d[S+2]*=kt,w[S]+=d[S],w[S+1]+=d[S+1],w[S+2]+=d[S+2];var hr=Math.sqrt(Math.pow(w[S]-m[S],2)+Math.pow(w[S+1]-m[S+1],2)+Math.pow(w[S+2]-m[S+2],2));W[B]=.15+.55*(1-Math.min(hr*.005,1))+Math.sin(re*1.5+B*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),I=new THREE.Vector3;function ue(M,B){var S=s.domElement.getBoundingClientRect();if(!(S.width===0||S.height===0)&&(H.set((M-S.left)/S.width*2-1,-((B-S.top)/S.height)*2+1),N.setFromCamera(H,e),N.ray.intersectPlane(Q,I))){A.copy(U),R&&U.copy(I).applyMatrix4(te.copy(R.matrixWorld).invert()),_.subVectors(U,A);var ee=_.length();ee>15&&_.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function Ee(M,B){var S=Te().getBoundingClientRect();return M>=S.left&&M<=S.right&&B>=S.top&&B<=S.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(M){if(z=M.clientX,$=M.clientY,n||J!=="interactive"){g=!1,U.set(9999,9999,0);return}var B=Ee(M.clientX,M.clientY);if(B){g=!0,ue(M.clientX,M.clientY);var S=Te().getBoundingClientRect(),ee=Math.round(M.clientX-S.left),ve=Math.round(M.clientY-S.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else g=!1,U.set(9999,9999,0);a&&(f+=(M.clientX-x)*.005,i+=(M.clientY-P)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),x=M.clientX,P=M.clientY)}function qe(M){n||J!=="interactive"||Ee(M.clientX,M.clientY)&&(a=!0,x=M.clientX,P=M.clientY)}function Ae(){n||(a=!1,f=0,i=0,u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",qe),window.addEventListener("mouseup",Ae);function He(){for(var M=4e3,B=new THREE.BufferGeometry,S=new Float32Array(M*3),ee=new Float32Array(M*3),ve=0;ve<M;ve++){S[ve*3]=(Math.random()-.5)*2200,S[ve*3+1]=(Math.random()-.5)*1800,S[ve*3+2]=-200-Math.random()*1800;var fe=Z[Math.floor(Math.random()*Z.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}B.setAttribute("position",new THREE.BufferAttribute(S,3)),B.setAttribute("color",new THREE.BufferAttribute(ee,3));var we=document.createElement("canvas");we.width=we.height=32;var Fe=we.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var We=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(we),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Oe=new THREE.Points(B,We);return Oe.userData={positions:S,count:M},t.add(Oe),Oe}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var G=new THREE.Clock,J="spin",ae=null;function Xe(){if(n){J="spin";return}if(ae===null){var M=document.querySelector(".scaling-element-video");ae=M&&getComputedStyle(M).display!=="none"}if(!ae){J="spin";return}var B=window._flipProgress||0;B>.85?J="interactive":B>.7?J="transition":J="spin"}var O="spin",Y=!0,h=new IntersectionObserver(function(M){Y=M[0].isIntersecting},{threshold:0});h.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var M=Pt();M.known&&(z=M.x,$=M.y);var B=Ee(z,$);B?(g=!0,ue(z,$)):(g=!1,U.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!Y){Ce++;var M=Math.min(G.getDelta(),.05),B=G.elapsedTime;Xe(),O==="interactive"&&J!=="interactive"&&(g=!1,U.set(9999,9999,0),a=!1);var S=J==="transition"||J==="interactive";if(S&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!S&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),O=J,g&&!Ee(z,$)&&(g=!1,U.set(9999,9999,0)),J==="spin")u+=T*M,v+=(0-v)*.05;else if(J==="transition")u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),u+=(0-u)*.025,v+=(0-v)*.025;else{var ee=f-u;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),u+=ee*.12,v+=(i-v)*.12}R&&(R.rotation.x=v,R.rotation.y=u,R.scale.setScalar(1),R.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(B*.2+fe)*.05,ve[fe*3]+=Math.cos(B*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-u*35*.35,ge.position.y=v*28*.35,c.position.x=300+Math.sin(B*.3)*100,c.position.y=350+Math.cos(B*.2)*80,E.intensity=2+Math.sin(B*.5)*.4,p.intensity=.8+Math.sin(B*.4+1)*.3,!(n&&K&&Ce%4!==0)&&(Le(M),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",qe),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),h.disconnect(),t.traverse(function(M){M.geometry&&M.geometry.dispose()}),st("home",o),R=null}}function xn(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),l=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),c=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ve},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(l.length&&c.set(l,{autoAlpha:1},0),s.length>=2){let E=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),b=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([E.chars,b.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),c.to(E.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),c.to(E.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),c.to(b.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),c.to(b.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return c}function bn(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(p=>{let f=p.parentElement;f&&(p.style.whiteSpace="nowrap",e.has(f)||e.set(f,[]),e.get(f).push(p))});function o(p){let f=getComputedStyle(p);return p.clientWidth-parseFloat(f.paddingLeft)-parseFloat(f.paddingRight)}function s(p,f){if(f<=0)return;let u=parseFloat(getComputedStyle(p).fontSize)||16;for(let i=0;i<5;i++){let v=p.getBoundingClientRect().width;if(v<=0)break;let a=f/v;if(Math.abs(a-1)<.002)break;u*=a,p.style.fontSize=u+"px"}}function l(){e.forEach((p,f)=>{let u=o(f);p.forEach(i=>s(i,u))})}let c=null;function E(){c||(c=requestAnimationFrame(()=>{c=null,l()}))}let b;return window.ResizeObserver&&(b=new ResizeObserver(E),e.forEach((p,f)=>b.observe(f))),window.addEventListener("resize",E),l(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(l),()=>{c&&cancelAnimationFrame(c),b&&b.disconnect(),window.removeEventListener("resize",E),t.forEach(p=>{p.style.whiteSpace="",p.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},Ot=.08,_r={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},yn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function Pn(r,n){var t=(1-n)*100+"%";return r==="left"?"inset(0% 0% 0% "+t+")":r==="up"?"inset("+t+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+t+" 0%)":"inset(0% "+t+" 0% 0%)"}function Or(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function En(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",l=o.getAttribute("data-marker-theme")||"#000000",c=o.getAttribute("data-marker-scroll-start")||"top 90%",E=l.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(l).trim()||l,b=yn[s]||yn.right,p=_r[o.getAttribute("data-highlight-marker-reveal")]||null;p&&(E=p.bar);var f=o.closest("[data-cursor-label]"),u={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,v=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){u.timeline&&u.timeline.kill(),u.scrollTrigger&&u.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(A){A.remove()}),u.listeners.forEach(function(A){A.el.removeEventListener(A.type,A.fn)}),u.listeners=[],i=!1;var x=a.lines,P=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(x.forEach(function(A,_){gsap.set(A,{position:"relative",overflow:"hidden"});var g=Or(E,b.origin);gsap.set(g,{[b.prop]:0}),A.appendChild(g),p&&(gsap.set(A,{zIndex:0,color:p.text}),gsap.set(g,{zIndex:-1})),P.to(g,{[b.prop]:1,duration:Se.duration,ease:Se.ease},_*Ot);var z=function(){i&&(gsap.to(g,{[b.prop]:0,duration:Se.duration,ease:Se.ease}),p&&gsap.to(A,{color:p.hoverText,duration:Se.duration,ease:Se.ease}))},$=function(){i&&(gsap.to(g,{[b.prop]:1,duration:Se.duration,ease:Se.ease}),p&&gsap.to(A,{color:p.text,duration:Se.duration,ease:Se.ease}))};!p&&e&&(A.addEventListener("mouseenter",z),A.addEventListener("mouseleave",$),u.listeners.push({el:A,type:"mouseenter",fn:z},{el:A,type:"mouseleave",fn:$}))}),u.timeline=P,f){P.kill();var T=o.querySelectorAll(".highlight-marker-bar");gsap.set(x,{clipPath:Pn(s,0)});var H=function(A){gsap.to(T,{[b.prop]:A,duration:Se.duration,ease:Se.ease,stagger:Ot,overwrite:!0}),gsap.to(x,{clipPath:Pn(s,A),duration:Se.duration,ease:Se.ease,stagger:Ot,overwrite:!0})},N=function(){H(1)},C=function(){H(0)};f.addEventListener("cursorlabel:enter",N),f.addEventListener("cursorlabel:leave",C),u.listeners.push({el:f,type:"cursorlabel:enter",fn:N},{el:f,type:"cursorlabel:leave",fn:C});return}var U=ScrollTrigger.create({trigger:o,start:c,once:!0,onEnter:function(){P.play()}});u.scrollTrigger=U}});u.split=v,t.push(u)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function wn(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),l=r.querySelectorAll("[data-cursor-marquee-text]");if(!l.length)return;let c=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),E=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),b=null,p=f=>{c(f.clientX),E(f.clientY)};return window.addEventListener("pointermove",p,{passive:!0}),l.forEach(f=>{f.addEventListener("mouseenter",()=>{b&&clearTimeout(b);let u=f.getAttribute("data-cursor-marquee-text")||"",i=(u.length||1)/e;s.forEach(v=>{v.textContent=u,v.style.animationPlayState="running",v.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),f.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),b&&clearTimeout(b),b=setTimeout(()=>{s.forEach(u=>{u.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",p),clearTimeout(b),gsap.killTweensOf(o)}}function Sn(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let l=s.target;s.isIntersecting?t(l):l.paused||l.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function Tn(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(c){window._flipProgress=c.progress}}}),n.forEach(function(c,E){let b=E+1;if(b<n.length){let p=n[b],f=p.getBoundingClientRect(),u=c.getBoundingClientRect(),i=f.top+window.pageYOffset+p.offsetHeight/2,v=u.top+window.pageYOffset+c.offsetHeight/2,a=i-v;e.add(Flip.fit(t,p,{duration:a,ease:"none"}))}})}o();let s,l=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",l),function(){clearTimeout(s),window.removeEventListener("resize",l),e&&e.kill()}}var Vr="150%";function Br(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var St=new WeakMap;function An(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(l){return l.textContent})}),o=t.map(Br);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),St.set(r,{wrap:n,lines:t,lineChars:o}),function(){St.delete(r),t.forEach(function(s,l){s.querySelectorAll("textPath").forEach(function(c,E){c.textContent=e[l][E]})})}}function Cn(r,n){return r.lines.forEach(function(t,e){let o=r.lineChars[e];o.length&&n.fromTo(o,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/o.length,ease:"steps(1)"},(parseFloat(t.dataset.at)||0)*.7)}),n}function Mn(r,n){let t=St.get(r);return t&&n.contains(t.wrap)?Cn(t,gsap.timeline()):null}function Rn(r){let n=St.get(r);if(!n||n.wrap.closest('[data-scroll-driven="wrap"]'))return function(){};let t=Cn(n,gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Vr,pin:!0,scrub:!0}}));return function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}var Ge=170,At=[[0,[0,1]],[0,[1,1]],[0,[2,4,4,4]],[0,[3,6,6,6]],[0,[2,4,4,5]],[0,[3,6,6,7]],[1,[0,0]],[1,[1,2]],[1,[2,3,4,4]],[1,[3,5,5,5]],[1,[3,7,7,7]],[1,[3,5,5,6]],[2,[0,0]],[2,[1,2]],[2,[2,3,4,4]],[2,[3,5,5,5]],[2,[3,7,7,7]],[2,[3,5,5,6]],[3,[0,1]],[3,[1,3,4,4]],[3,[2,5,5,5]],[3,[3,7,7,7]],[3,[2,5,5,6]]],Vt="sine.inOut",Fn={start:"top 20%",stagger:40},Bt={duration:510,stagger:40},Gr=[{at:510,rows:[[60,560],[0,620],[110,520],[30,600]]},{at:0,rows:[[20,500],[80,440],[0,520],[50,470]]},{at:0,rows:[[20,500],[80,440],[0,520],[50,470]]}],Tt={duration:935,ease:"sine.in"},pt={at:.6,duration:170,stagger:40,ease:"expo.out"},Wr=100,qt=1190,zn="http://www.w3.org/2000/svg",Gt=new WeakMap;function Ln(r){let n=r.querySelector('[data-scroll-driven="wrap"]'),t=n&&n.querySelector('[data-scroll-driven="stage"]');if(!t||getComputedStyle(n).display==="none")return function(){};let e=document.createElementNS(zn,"svg");e.setAttribute("viewBox","0 0 1360 680"),e.setAttribute("aria-hidden","true"),e.setAttribute("preserveAspectRatio","none"),e.style.cssText="display:block;width:100%;height:100%;overflow:visible";let o=document.createElementNS(zn,"path");o.setAttribute("fill","currentColor"),e.appendChild(o),t.appendChild(e);let s=document.createElement("div");s.style.cssText="position:absolute;inset:0;background:#fff;pointer-events:none;clip-path:circle(0px at 75% 50%)",t.appendChild(s);let l=At.map(([,u])=>({x:u[0]*Ge,y:-Ge,o:u.length===2})),c={v:0},E={v:0};function b(){let u="";for(let v=0;v<l.length;v++){let a=l[v],x=a.o&&c.v>0,P=x?a.y-c.v:Math.max(a.y,0),T=(x?a.y-c.v:a.y)+Ge;T-P<.01||(u+="M"+a.x.toFixed(2)+" "+P.toFixed(2)+"H"+(a.x+Ge).toFixed(2)+"V"+T.toFixed(2)+"H"+a.x.toFixed(2)+"Z")}o.setAttribute("d",u);let i=E.v*Math.hypot(t.clientWidth*.75,t.clientHeight*.5)*1.01;s.style.clipPath="circle("+i.toFixed(1)+"px at 75% 50%)"}b();let p=Array.from(n.querySelectorAll('[data-scroll-driven="om"]')).map(function(u){return SplitText.create(u,{type:"lines",mask:"lines"})}),f=p.flatMap(function(u){return u.lines});return gsap.set(f,{yPercent:110}),Gt.set(r,{wrap:n,stage:t,blocks:l,lift:c,white:E,omLines:f,render:b}),function(){Gt.delete(r),gsap.killTweensOf(l.concat(c,E,f)),e.remove(),s.remove(),p.forEach(function(u){u.revert()})}}function Dn(r){let n=Gt.get(r);if(!n)return function(){};let t=gsap.timeline({paused:!0,onUpdate:n.render}),e=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:Fn.start,end:"top top",scrub:!0},onUpdate:n.render});At.forEach(function([,f],u){e.fromTo(n.blocks[u],{y:-Ge},{y:0,duration:1,ease:Vt,immediateRender:!1},f[0]*Fn.stagger/170)}),At.forEach(function([f,u],i){f&&t.fromTo(n.blocks[i],{y:0},{y:f*Ge,duration:Bt.duration-3*Bt.stagger,ease:Vt,immediateRender:!1},u[0]*Bt.stagger)});let o=gsap.timeline();Gr.forEach(function(f,u){At.forEach(function([i,v],a){if(v.length<u+2||v[u]===v[u+1])return;let[x,P]=f.rows[i];(u?o:t).fromTo(n.blocks[a],{x:v[u]*Ge},{x:v[u+1]*Ge,duration:P,ease:Vt,immediateRender:!1},f.at+x)})});let s,l,c,E,b=Mn(r,n.wrap);function p(){let f=n.stage.getBoundingClientRect(),u=f.width/1360,i=f.height/680,v=4*Ge+Math.max(0,window.innerHeight-f.height)/i+20,a=v*i/u;s&&t.remove(s),t.remove(o),s=t.fromTo(n.lift,{v:0},{v,duration:a,ease:"none",immediateRender:!1},qt),t.add(o,qt+a),l&&t.remove(l);let x=qt+a+o.duration();l=t.fromTo(n.white,{v:0},{v:1,duration:Tt.duration,ease:Tt.ease,immediateRender:!1},x),c&&t.remove(c),n.omLines.length&&(c=t.fromTo(n.omLines,{yPercent:110},{yPercent:0,duration:pt.duration,stagger:pt.stagger,ease:pt.ease,immediateRender:!1},x+pt.at*Tt.duration)),b&&(t.remove(b),b.duration(1.5*window.innerHeight/u),t.add(b,x+pt.at*Tt.duration+Wr))}return p(),ScrollTrigger.addEventListener("refreshInit",p),E=ScrollTrigger.create({animation:t,trigger:n.wrap,start:"top top",end:()=>"+="+t.duration()*(n.stage.clientWidth/1360),pin:!0,scrub:!0}),function(){ScrollTrigger.removeEventListener("refreshInit",p),E.kill(!0),t.kill(),e.scrollTrigger&&e.scrollTrigger.kill(),e.kill()}}function Wt(r){var n=[];function t(i,v,a,x){i.addEventListener(v,a,x),n.push(function(){i.removeEventListener(v,a,x)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var v=i.getAttribute("data-player-src");if(!v)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(G){}try{a.removeAttribute("src"),a.load()}catch(G){}function x(G){i.getAttribute("data-player-status")!==G&&i.setAttribute("data-player-status",G)}function P(G){a.muted=!!G,i.setAttribute("data-player-muted",a.muted?"true":"false")}function T(G){i.setAttribute("data-player-fullscreen",G?"true":"false")}function H(G){i.setAttribute("data-player-activated",G?"true":"false")}i.hasAttribute("data-player-activated")||H(!1);var N=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),U=i.querySelector("[data-player-buffered]"),A=i.querySelector("[data-player-timeline-handle]"),_=i.querySelectorAll("[data-player-time-duration]"),g=i.querySelectorAll("[data-player-time-progress]"),z=i.getAttribute("data-player-update-size"),$=i.getAttribute("data-player-lazy"),V=$==="true",L=$==="meta",j=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",k=!1;j?(P(!0),a.loop=!0):P(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var R=!!a.canPlayType("application/vnd.apple.mpegurl"),w=R&&"ManagedMediaSource"in window,d=!!(window.Hls&&Hls.isSupported())&&!w;if(z==="true"&&!L&&!V){var m=a.preload;a.preload="metadata";var y=function(){b(i,z,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",y),a.preload=m||""};t(a,"loadedmetadata",y,{once:!0}),a.src=v}function X(){u(v,d).then(function(G){G.width&&G.height&&b(i,z,G.width,G.height),_.length&&isFinite(G.duration)&&G.duration>0&&s(_,o(G.duration)),E(i,k)})}var W=!1,F=!1,q="";function D(){if(!W){if(W=!0,i._hls){try{i._hls.destroy()}catch(J){}i._hls=null}if(w)a.preload=V||L?"auto":a.preload,a.src=v,t(a,"loadedmetadata",function(){E(i,k),z==="true"&&b(i,z,a.videoWidth,a.videoHeight),_.length&&s(_,o(a.duration))},{once:!0});else if(d){var G=new Hls({maxBufferLength:10});G.attachMedia(a),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(v)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(E(i,k),z==="true"){var J=G.levels||[],ae=l(J);ae&&ae.width&&ae.height&&b(i,z,ae.width,ae.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(J,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&_.length&&s(_,o(ae.details.totalduration))}),i._hls=G}else a.src=v}}L?(X(),a.preload="none"):V?a.preload="none":D();function ne(){F=!0,a.paused||a.ended?((V||L)&&!W&&D(),k=!0,q="",x("loading"),c(a)):(q="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Z(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():Z()}t(document,"fullscreenchange",function(){T(se())}),t(document,"webkitfullscreenchange",function(){T(se())}),t(a,"webkitbeginfullscreen",function(){T(!0)}),t(a,"webkitendfullscreen",function(){T(!1)}),t(i,"click",function(G){var J=G.target.closest("[data-player-control]");if(!(!J||!i.contains(J))){var ae=J.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){_.length&&s(_,o(a.duration)),g.length&&s(g,o(a.currentTime))}t(a,"timeupdate",be),t(a,"loadedmetadata",function(){be(),p(i,z,a)}),t(a,"loadeddata",function(){p(i,z,a)}),t(a,"playing",function(){p(i,z,a)}),t(a,"durationchange",be);var ze;function Le(){if(a.duration){var G=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+G)+"%)"),A&&(A.style.left=G+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function Q(){if(!(!U||!a.duration||!a.buffered.length)){var G=a.buffered.end(a.buffered.length-1),J=G/a.duration*100;U.style.transform="translateX("+(-100+J)+"%)"}}if(t(a,"progress",Q),t(a,"loadedmetadata",Q),t(a,"durationchange",Q),t(a,"play",function(){H(!0),cancelAnimationFrame(ze),te(),x("playing")}),t(a,"playing",function(){k=!1,x("playing")}),t(a,"pause",function(){k=!1,cancelAnimationFrame(ze),Le(),x("paused")}),t(a,"waiting",function(){x("loading")}),t(a,"canplay",function(){E(i,k)}),t(a,"ended",function(){k=!1,cancelAnimationFrame(ze),Le(),x("paused"),H(!1)}),N){let G=function(h){ce||(ce=N.getBoundingClientRect());var K=(h-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},J=function(h){if(a.duration){var K=h*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),A&&(A.style.left=K+"%"),g.length&&s(g,o(h*a.duration))}},ae=function(h){a.duration&&(h-Te<Ee||(Te=h,a.currentTime=xe))},Xe=function(h){if(a.duration){I=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=N.getBoundingClientRect();var K=G(h.clientX);xe=K*a.duration,J(K),ae(performance.now()),N.setPointerCapture&&N.setPointerCapture(h.pointerId),window.addEventListener("pointermove",O,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),h.preventDefault()}},O=function(h){if(I){var K=G(h.clientX);xe=K*a.duration,J(K),ae(performance.now()),h.preventDefault()}},Y=function(){I&&(I=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?c(a):(Le(),be()),window.removeEventListener("pointermove",O),window.removeEventListener("pointerup",Y))};var I=!1,ue=!1,xe=0,Te=0,Ee=180,ce=null;t(window,"resize",function(){I||(ce=null)}),t(N,"pointerdown",Xe,{passive:!1}),A&&t(A,"pointerdown",Xe,{passive:!1})}var me,de=3e3;function De(G){i.getAttribute("data-player-hover")!==G&&i.setAttribute("data-player-hover",G)}function qe(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),qe()}t(i,"pointerdown",Ae),t(document,"fullscreenchange",Ae),t(document,"webkitfullscreenchange",Ae);var He=!1;function ge(G){var J=i.getBoundingClientRect();G.clientX>=J.left&&G.clientX<=J.right&&G.clientY>=J.top&&G.clientY<=J.bottom&&Ae()}if(t(i,"pointerenter",function(){Ae(),He||(He=!0,t(window,"pointermove",ge,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),j){var Ue=new IntersectionObserver(function(G){G.forEach(function(J){var ae=J.isIntersecting&&J.intersectionRatio>0;ae?((V||L)&&!W&&D(),a.paused?(q="",k=!0,x("loading"),c(a)):x("playing")):!a.paused&&!a.ended&&(q="io",a.pause(),x("paused"))})},{threshold:.1});Ue.observe(i)}n.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(G){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(G){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var v=Math.floor(i),a=Math.floor(v/3600),x=Math.floor(v%3600/60),P=v%60;return a>0?a+":"+e(x)+":"+e(P):e(x)+":"+e(P)}function s(i,v){i.forEach(function(a){a.textContent=v})}function l(i){return!i||!i.length?null:i.reduce(function(v,a){return(a.width||0)>(v.width||0)?a:v},i[0])}function c(i){var v=i.play();v&&typeof v.then=="function"&&v.catch(function(){})}function E(i,v){!v&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function b(i,v,a,x){if(!(v!=="true"||!a||!x)){var P=i.querySelector("[data-player-before]");P&&(P.style.paddingTop=x/a*100+"%")}}function p(i,v,a){if(v==="true"){var x=i.querySelector("[data-player-before]");if(x){var P=x.style.paddingTop&&x.style.paddingTop!=="0%";!P&&a.videoWidth&&a.videoHeight&&b(i,v,a.videoWidth,a.videoHeight)}}}function f(i,v){try{return new URL(v,i).toString()}catch(a){return v}}function u(i,v){return new Promise(function(a){if(v&&window.Hls&&Hls.isSupported())try{var x=new Hls,P={width:0,height:0,duration:NaN},T=!1,H=!1;x.on(Hls.Events.MANIFEST_PARSED,function(U,A){var _=A&&A.levels||x.levels||[],g=l(_);g&&g.width&&g.height&&(P.width=g.width,P.height=g.height,T=!0)}),x.on(Hls.Events.LEVEL_LOADED,function(U,A){A&&A.details&&isFinite(A.details.totalduration)&&(P.duration=A.details.totalduration,H=!0)}),x.on(Hls.Events.ERROR,function(){try{x.destroy()}catch(U){}a(P)}),x.on(Hls.Events.LEVEL_LOADED,function(){try{x.destroy()}catch(U){}a(P)}),x.loadSource(i);return}catch(U){a({width:0,height:0,duration:NaN});return}function N(U){for(var A=U.split(/\r?\n/),_=0,g=0,z=null,$=null,V=0;V<A.length;V++){var L=A[V];if(L.indexOf("#EXT-X-STREAM-INF:")===0)$=L;else if($&&L&&L[0]!=="#"){z||(z=L.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec($);if(j){var oe=parseInt(j[1],10),k=parseInt(j[2],10);oe>_&&(_=oe,g=k)}$=null}}return{bestW:_,bestH:g,media:z}}function C(U){for(var A=0,_=/#EXTINF:([\d.]+)/g,g;g=_.exec(U);)A+=parseFloat(g[1]);return A}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(U){if(!U.ok)throw new Error("master");return U.text()}).then(function(U){var A=N(U);if(!A.media){a({width:A.bestW||0,height:A.bestH||0,duration:NaN});return}var _=f(i,A.media);return fetch(_,{credentials:"omit",cache:"no-store"}).then(function(g){if(!g.ok)throw new Error("media");return g.text()}).then(function(g){a({width:A.bestW||0,height:A.bestH||0,duration:C(g)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var Nr="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Xr="(min-width: 768px)";function In(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Wt(r),t=kn(r);else{let e=!1;return ft(Nr).catch(function(){}).then(function(){e||(n=Wt(r),t=kn(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function kn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,l,c,E,b,p,f,u="",i="",v="",a=(m,y=r)=>y.querySelector(m),x=m=>a(`[data-mini-showreel-lightbox="${m}"]`),P=m=>a(`[data-mini-showreel-player="${m}"]`),T=m=>m.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",m)||m,H=(m,y)=>{let X=m.width,W=X/y;return W>m.height&&(W=m.height,X=W*y),{left:m.left+(m.width-X)/2,top:m.top+(m.height-W)/2,width:X,height:W}},N=m=>{let y=T(m).getBoundingClientRect(),X=m.getBoundingClientRect(),W=X.width>0&&X.height>0?X.width/X.height:16/9;return H(y,W)},C=(m,y)=>gsap.set(m,{position:"fixed",left:y.left,top:y.top,width:y.width,height:y.height,margin:0,x:0,y:0});function U(m){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(y=>y.setAttribute("data-mini-showreel-status",m))}function A(){i=(l==null?void 0:l.style.zIndex)||"",v=(c==null?void 0:c.style.zIndex)||"",l&&(l.style.zIndex=String(e)),c&&(c.style.zIndex=String(e))}function _(){l&&(l.style.zIndex=i),c&&(c.style.zIndex=v)}function g(m){let y=P(m);if(!y)return;let X=y.querySelector("[data-bunny-player-init]"),W=y.querySelector("video");if(W){if(X){let F=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');F&&(W.paused||W.ended)&&F.click();return}try{W.play()}catch(F){}}}function z(m){let y=P(m);if(!y)return;let X=y.querySelector("[data-bunny-player-init]"),W=y.querySelector("video");W&&(W.muted=!0,X&&X.setAttribute("data-player-muted","true"),(W.paused||W.ended)&&g(m))}function $(){_(),o="",s=!1,l=c=E=b=p=f=null,u="",i="",v="",pe.start()}function V(m){if(!m||s||(l=x(m),c=P(m),!l||!c)||(E=a("[data-mini-showreel-target]",l),!E))return;o=m,s=!0,pe.stop(),c.dataset.flipId=o,u=c.style.cssText||"",b=c.parentElement,p=c.nextSibling,A(),U("active"),g(o);let y=Flip.getState(c),X=N(E);l.appendChild(c),C(c,X),f=Flip.from(y,{duration:n,ease:t,absolute:!0,scale:!1})}function L(m){!s||!c||m&&m!==o||(z(o),U("not-active"),f&&f.kill(),f=Flip.fit(c,b,{duration:n,ease:t,scale:!1,onComplete:()=>{b.insertBefore(c,p),c.style.cssText=u,$()}}))}function j(){!s||!c||(f&&f.kill(),z(o),U("not-active"),b.insertBefore(c,p),c.style.cssText=u,$())}function oe(){!s||!c||!E||C(c,N(E))}function k(m){let y=m.target.closest("[data-mini-showreel-open]");y&&(m.preventDefault(),V(y.getAttribute("data-mini-showreel-open")||""))}function R(m){let y=m.target.closest("[data-mini-showreel-close]");y&&(m.preventDefault(),L(y.getAttribute("data-mini-showreel-close")||""))}function w(m){m.key==="Escape"&&L("")}let d=gsap.matchMedia();return d.add(Xr,function(){return r.addEventListener("click",k),document.addEventListener("click",R),window.addEventListener("keydown",w),window.addEventListener("resize",oe),function(){j(),r.removeEventListener("click",k),document.removeEventListener("click",R),window.removeEventListener("keydown",w),window.removeEventListener("resize",oe)}}),function(){d.revert(),j()}}var Ie=1920,_e=1080,Nt="#E5E5E5",Xt="#000000",Hn="http://www.w3.org/2000/svg";function Un(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(Hn,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${_e}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(d,m)=>{let y=document.createElementNS(Hn,d);return y.setAttribute("fill",m),t.appendChild(y),y},o=e("polygon",Nt),s=e("polygon",Xt),l=e("rect",Xt),c=e("rect",Nt),E=e("rect",Nt),b=e("rect",Xt);[l,c,E,b].forEach(d=>d.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let p=(d,m,y,X,W)=>{d.setAttribute("x",m),d.setAttribute("y",y),d.setAttribute("width",Math.max(0,X)),d.setAttribute("height",Math.max(0,W))},f={x:Ie*(2/3),y:_e*(1/3)},u=.1,i=.9,v={x:f.x,y:f.y},a={x:f.x,y:f.y},x={x:f.x,y:f.y},P=!1,T=()=>gsap.to(x,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:T}),H=()=>gsap.to(x,{y:gsap.utils.random(_e*.193,_e*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:H});T(),H();function N(){let d=gsap.utils.clamp(Ie*u,Ie*i,v.x),m=Ie-d,y=gsap.utils.clamp(_e*u,_e*i,v.y),X=_e-y;o.setAttribute("points",`0,${y} ${d},0 ${Ie},${y} ${Ie},${_e} 0,${_e}`),s.setAttribute("points",`${Ie},${y} ${d},0 ${d},${y}`),p(l,0,y,d,X);let W=d*.25,F=X*(2/3);p(c,d/2-W/2,y+X-F,W,F),p(E,d,y,m,X);let q=m*.5,D=X/3;p(b,d+m/2-q/2,y+X/2-D/2,q,D)}let C=.1,U=.03;function A(){let m=1-Math.pow(1-(P?C:U),gsap.ticker.deltaRatio(60)),y=P?a:x;v.x+=(y.x-v.x)*m,v.y+=(y.y-v.y)*m,N()}let _=(d,m)=>{let y=n.getBoundingClientRect();!y.width||!y.height||(a.x=gsap.utils.clamp(0,Ie,(d-y.left)/y.width*Ie),a.y=gsap.utils.clamp(0,_e,(m-y.top)/y.height*_e),P=!0)},g=()=>{P=!1},z=(d,m)=>{let y=n.getBoundingClientRect();d>=y.left&&d<=y.right&&m>=y.top&&m<=y.bottom?_(d,m):g()},V=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Ne(z):null,L=d=>{let m=d.touches[0];m&&_(m.clientX,m.clientY)},j={passive:!0};n.addEventListener("touchstart",L,j),n.addEventListener("touchmove",L,j),n.addEventListener("touchend",g,j),n.addEventListener("touchcancel",g,j);let oe=!1,k=()=>{oe||(oe=!0,gsap.ticker.add(A))},R=()=>{oe&&(oe=!1,gsap.ticker.remove(A))},w=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:d=>d.isActive?k():R()});return N(),k(),function(){R(),w.kill(),gsap.killTweensOf(x),V&&V(),n.removeEventListener("touchstart",L,j),n.removeEventListener("touchmove",L,j),n.removeEventListener("touchend",g,j),n.removeEventListener("touchcancel",g,j),t.remove()}}var Yr="http://www.w3.org/2000/svg";var $r=4.1343749999999995,Kr="#AFAFAF",Zr="#000000",jr=5e3,Jr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Qr=0,_n=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Be=(r,n)=>{let t=document.createElementNS(Yr,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function On(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Qr;e.setAttribute("data-pulse-dots-paused","");let s=Be("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let l=Be("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});l.append(Be("feGaussianBlur",{in:"SourceGraphic",stdDeviation:$r.toFixed(2)}),Be("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let c=Be("defs",{});c.appendChild(l);let E=Be("rect",{width:1e3,height:1e3,fill:Kr}),b=Be("g",{filter:`url(#${o})`,fill:Zr});for(let f=0;f<20;f++)for(let u=0;u<20;u++){if(!_n(u,f))continue;let i=Jr.filter(T=>_n(u+T.dx,f+T.dy)),v=i[Math.floor(Math.random()*i.length)],a=185+u*31.5+27.5625/2,x=185+f*31.5+27.5625/2,P=Be("g",{transform:`rotate(${v.deg} ${a} ${x})`});P.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*jr)}ms`),P.append(Be("circle",{class:"pulse-dots__dot is--first",cx:a,cy:x,r:27.5625/2}),Be("circle",{class:"pulse-dots__dot is--last",cx:a,cy:x,r:27.5625/2})),b.appendChild(P)}s.append(c,E,b),e.appendChild(s);let p=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:f=>e.toggleAttribute("data-pulse-dots-paused",!f.isActive)});e.toggleAttribute("data-pulse-dots-paused",!p.isActive),t.push(()=>{p.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var Ct=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,Vn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Bn=`#version 300 es
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
}`,qn=[`#version 300 es
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
}`],Gn=`#version 300 es
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
}`,Wn=`#version 300 es
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
}fragColor = color;}`,Nn=`#version 300 es
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
}`,Xn=[`#version 300 es
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
fragColor = color;}`],Yn=[`#version 300 es
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
}`],$n=`#version 300 es
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
}`;var Yt=60,to=1.5,no=1,Kn=150,$t=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Zn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function l(F,q){let D=e.createShader(F);return e.shaderSource(D,q),e.compileShader(D),D}let c=[];function E(F,q=Vn){let D=e.createProgram(),ne=l(e.VERTEX_SHADER,q),re=l(e.FRAGMENT_SHADER,F);e.attachShader(D,ne),e.attachShader(D,re),e.bindAttribLocation(D,0,"aVertexPosition"),e.bindAttribLocation(D,1,"aTextureCoord"),e.linkProgram(D);let se={p:D,v:ne,f:re,loc:{}};return c.push(se),se}function b(F){let{p:q,v:D,f:ne}=F;e.getProgramParameter(q,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(q),e.getShaderInfoLog(D),e.getShaderInfoLog(ne));let re=e.getProgramParameter(q,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let Z=e.getActiveUniform(q,se);F.loc[Z.name]=e.getUniformLocation(q,Z.name)}e.deleteShader(D),e.deleteShader(ne)}let p={bg:E(Bn,Ct),shapes:qn.map(F=>E(F,Gn)),trailSim:E(Nn,Ct),trail:E(Wn),blur:Xn.map(F=>E(F)),bloom:Yn.map(F=>E(F)),gmap:E($n,Ct)},f=e.createVertexArray();e.bindVertexArray(f);let u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let v=[];function a(F,q,D=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),D&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,F,q,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,F,q,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:F,h:q};return v.push(se),se}function x(){v.forEach(F=>{e.deleteTexture(F.tex),e.deleteFramebuffer(F.fb)}),v.length=0}function P(F,q,D,ne){e.useProgram(F.p);let re=q?q.w:t.width,se=q?q.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,q?q.fb:null),e.viewport(0,0,re,se);let Z=F.loc;Z.uMVMatrix&&e.uniformMatrix4fv(Z.uMVMatrix,!1,$t),Z.uPMatrix&&e.uniformMatrix4fv(Z.uPMatrix,!1,$t),Z.uTextureMatrix&&e.uniformMatrix4fv(Z.uTextureMatrix,!1,$t),Z.uResolution&&e.uniform2f(Z.uResolution,re,se),Z.uArtboardResolution&&e.uniform2f(Z.uArtboardResolution,1920,1920),Z.uAspectRatio&&e.uniform1f(Z.uAspectRatio,1),Z.uMousePos&&e.uniform2f(Z.uMousePos,T.x,T.y),Z.uIsMask&&e.uniform1i(Z.uIsMask,0),Z.uParentTrackMouse&&e.uniform1f(Z.uParentTrackMouse,0);let Pe=0;Object.keys(D).forEach(he=>{Z[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,D[he].tex),e.uniform1i(Z[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!Z[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(Z[he],be[0],be[1]):e.uniform1f(Z[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let T={x:.5,y:.5},H={x:.5,y:.5},N=0,C=null,U=0;function A(){x();let F=Math.min(to,window.devicePixelRatio||1),q=Math.max(1,Math.round(n.clientWidth*F)),D=Math.max(1,Math.round(n.clientHeight*F));t.width=q,t.height=D;let ne=Z=>[Math.max(1,Math.round(q*Z)),Math.max(1,Math.round(D*Z))];C={a:a(q,D),b:a(q,D),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(q,D),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(q,D)},P(p.bg,C.a,{});let re=C.a,se=C.b;p.shapes.forEach(Z=>{P(Z,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,U=0}function _(){if(!C)return;let F=C.pp[U],q=C.pp[1-U];P(p.trailSim,q,{uPingPongTexture:F},{uTime:N,uPreviousMousePos:[H.x,H.y]}),U=1-U,P(p.trail,C.trail,{uTexture:C.base,uPingPongTexture:q}),P(p.blur[0],C.blur1,{uTexture:C.trail}),P(p.blur[1],C.blur2,{uTexture:C.blur1}),P(p.blur[2],C.blur3,{uTexture:C.blur2}),P(p.blur[3],C.blur4,{uTexture:C.blur3});let D=C.blur4;P(p.bloom[0],C.bth,{uTexture:D}),P(p.bloom[1],C.bd1,{uTexture:C.bth}),P(p.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:D}),P(p.bloom[3],C.bs1,{uTexture:C.bd2}),P(p.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:D}),P(p.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:D}),P(p.gmap,null,{uTexture:C.bloom},{uTime:0}),H.x=T.x,H.y=T.y}let g=Kn,$=Ne((F,q)=>{let D=t.getBoundingClientRect();!D.width||!D.height||(T.x=(F-D.left)/D.width,T.y=1-(q-D.top)/D.height,g=0,k())}),V=null,L=0,j=!1;function oe(F){if(!j||g>=Kn){V=null;return}if(V=requestAnimationFrame(oe),F-L<1e3/Yt-1)return;let q=L?Math.min(F-L,100):1e3/Yt;L=F,N+=no*(q/(1e3/Yt)),_(),g++}function k(){m&&j&&!V&&(H.x=T.x,H.y=T.y,L=0,V=requestAnimationFrame(oe))}let R=new IntersectionObserver(([F])=>{j=F.isIntersecting,j?k():V&&(cancelAnimationFrame(V),V=null)});R.observe(n);let w=null,d=new ResizeObserver(()=>{clearTimeout(w),w=setTimeout(()=>{m&&(A(),_())},60)});d.observe(n);let m=!1,y=null;function X(){y=null,c.forEach(b),m=!0,A(),_()}function W(){c.every(F=>e.getProgramParameter(F.p,s.COMPLETION_STATUS_KHR))?X():y=requestAnimationFrame(W)}return s?y=requestAnimationFrame(W):X(),function(){y&&cancelAnimationFrame(y),V&&cancelAnimationFrame(V),V=null,clearTimeout(w),R.disconnect(),d.disconnect(),$(),x(),c.forEach(D=>e.deleteProgram(D.p)),e.deleteBuffer(u),e.deleteBuffer(i),e.deleteVertexArray(f);let q=e.getExtension("WEBGL_lose_context");q&&q.loseContext(),t.remove()}}var ro="#BBC0C8",oo="#FFFFFF";var Kt='"Suisseintl Book", Arial, sans-serif';var jn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],ao=3,io=1.325,mt=5,so=.4,Jn=20,lo=2;function Qn(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let l=(s%mt+mt)%mt/mt;return l<.4?1-e(l/.4):l<.6?0:e((l-.6)/.4)};return n.forEach(s=>{let l=(s.getAttribute("data-text")||"").trim();if(!l)return;let c=Array.from(Array(ao).fill(l).join(" ").toUpperCase()),E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=document.createElement("canvas");b.setAttribute("aria-hidden","true"),Object.assign(b.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(b);let p=b.getContext("2d"),f=[],u=0,i=new Map,v=2;function a(){p.font=`24px ${Kt}`,f=c.map(L=>p.measureText(L).width),u=(3363-f.reduce((L,j)=>L+j,0))/(c.length-1)}let x=null;function P(){i=new Map,p.font=`24px ${Kt}`;let V=24,L=24*.35,j=[...new Set(c)].filter(w=>w!==" ").map(w=>({ch:w,w:p.measureText(w).width})),oe=Math.ceil((V+L+v*2)*T),k=0;j.forEach(w=>{w.sx=k,w.sw=Math.ceil((w.w+v*2)*T),k+=w.sw+2}),x=document.createElement("canvas"),x.width=Math.max(1,k),x.height=Math.max(1,oe);let R=x.getContext("2d");R.font=`${24*T}px ${Kt}`,R.fillStyle=oo,R.textBaseline="alphabetic",j.forEach(w=>{R.fillText(w.ch,w.sx+v*T,(v+V)*T),i.set(w.ch,{sx:w.sx,sw:w.sw,x:-w.w/2-v,y:-V-v,w:w.sw/T,h:oe/T})})}let T=1;function H(){let V=Math.min(lo,window.devicePixelRatio||1),L=s.clientWidth;b.width=Math.max(1,Math.round(L*V)),b.height=Math.max(1,Math.round(s.clientHeight*V)),T=b.width/1920}let N=0;function C(){p.setTransform(1,0,0,1,0,0),p.fillStyle=ro,p.fillRect(0,0,b.width,b.height);let V=E?0:e(N%Jn/Jn)*Math.PI*2;jn.forEach((L,j)=>{let oe=jn.length-1-j,k=E?0:o(N-mt+oe*so),R=u+k*io*24,w=2*Math.PI*L.r,d=L.start*Math.PI/180+V,m=0;for(let y=0;y<c.length;y++){let X=f[y];if(m+X>w)break;let W=i.get(c[y]);if(W){let F=d+(m+X/2)/L.r,q=Math.cos(F),D=Math.sin(F);p.setTransform(-D*T,q*T,-q*T,-D*T,(960+L.r*q)*T,(960+L.r*D)*T),p.drawImage(x,W.sx,0,W.sw,x.height,W.x,W.y,W.w,W.h)}m+=X+R}})}let U=(V,L)=>{N+=L/1e3,C()},A=!1,_=()=>{!A&&!E&&(A=!0,gsap.ticker.add(U))},g=()=>{A&&(A=!1,gsap.ticker.remove(U))},z=new ResizeObserver(()=>{H(),P(),C()});z.observe(s),H(),a(),P(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),P(),C()});let $=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:V=>V.isActive?_():g()});$.isActive&&_(),t.push(()=>{g(),$.kill(),z.disconnect(),b.remove()})}),()=>t.forEach(s=>s())}var Qe={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},er=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},co=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return er(n)*(1-e)+er(n+1)*e};function tr(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,l=0,c=18,E=0,b=0,p=0,f=-1e5,u=-1e5,i=!1,v=!1;function a(){s&&s.revert(),n.textContent="";let g=getComputedStyle(n);l=parseFloat(g.paddingTop),c=parseFloat(g.lineHeight),E=n.offsetHeight;let z=Math.max(1,Math.floor((E-l-parseFloat(g.paddingBottom))/c)),$=document.createDocumentFragment();for(let V=0;V<z;V++){let L=document.createElement("div");L.className="type-field__row",L.textContent=t,$.appendChild(L)}n.appendChild($),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((V,L)=>({chars:V.querySelectorAll(".type-field__char"),cur:o[L]?o[L].cur:0,drawn:0}))}})}function x(g){let z=Math.max(0,Math.min(g.chars.length,Math.round(g.cur)));if(z===g.drawn)return;let $=Math.min(z,g.drawn),V=Math.max(z,g.drawn);for(let L=$;L<V;L++)g.chars[L].style.visibility=L<z?"visible":"hidden";g.drawn=z}function P(g,z){if(!o.length)return;let $=Math.min(z,50)/16.667,V=w=>1-Math.pow(1-w,$),L=pe.scroll,j=Math.min(Math.max(b-L,0),p-L-E);u+=(f-j-l-u)*V(Qe.followEase);let oe=Math.floor(u/c),k=L*.004,R=i&&f>=b-L&&f<=p-L;for(let w=0;w<o.length;w++){let d=o[w],m=d.chars.length,y=Math.abs(w-oe),X=0;if(R){if(y===0)X=m;else if(y<=Qe.radius){let W=1-y/(Qe.radius+1);X=1+Math.min(Qe.maxSide,W*(1-Qe.ragged/2+Qe.ragged*co(w*1.3+k)))*(m-1)}}d.cur+=(X-d.cur)*V(Qe.ease),x(d)}}function T(){v||(gsap.ticker.add(P),v=!0)}function H(){v&&(gsap.ticker.remove(P),v=!1)}let N=Ne((g,z)=>{u<-1e4&&(u=z),f=z,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let U=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(g){b=g.start+window.innerHeight,p=g.end},onToggle(g){g.isActive?T():H()}});U.isActive&&T();let A,_=()=>{clearTimeout(A),A=setTimeout(()=>{Math.floor((n.offsetHeight-l-parseFloat(getComputedStyle(n).paddingBottom))/c)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",_),function(){H(),clearTimeout(A),N(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",_),U.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var nr={duration:.5,ease:"power3"};function rr(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",nr),l=gsap.quickTo(o,"y",nr),c=0,E=0,b=!1,p=new ResizeObserver(()=>{c=o.offsetWidth,E=o.offsetHeight});p.observe(o),c=o.offsetWidth,E=o.offsetHeight;let u=Ne((v,a)=>{let x=e.getBoundingClientRect();if(!(v>=x.left&&v<=x.right&&a>=x.top&&a<=x.bottom)){b&&(b=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let T=gsap.utils.clamp(0,Math.max(0,x.width-c),v-x.left-c/2),H=gsap.utils.clamp(0,Math.max(0,x.height-E),a-x.top-E/2);if(!b){b=!0,s(T,T),l(H,H),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(T),l(H)}),i=()=>{b&&(b=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{u(),document.documentElement.removeEventListener("mouseleave",i),p.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var uo=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],vo=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],fo="#FFFFFF";var or="power3.out";function ar(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],l=[];function c(){if(s.length&&s[0].isConnected)return;let f=e.querySelectorAll(":scope > div > div");o=(f.length?[...f]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),l=f.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function E(f){f.textContent=f.dataset.orig,f.style.border=""}let b=()=>{c(),l.forEach(u=>{u.el.style.overflow="visible"});let f=(s.length-1)/2;s.forEach((u,i)=>{gsap.to(u,{color:fo,ease:or,duration:.3,delay:Math.abs(i-f)*.03,overwrite:"auto",onStart:()=>{let v=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);v==1&&(u.textContent=gsap.utils.random(vo)),a==1&&(u.style.border=`1px solid ${gsap.utils.random(uo)}`)}})})},p=()=>{if(!s.length)return;let f=getComputedStyle(e).color,u=(s.length-1)/2;l.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,v)=>{gsap.to(i,{color:f,ease:or,duration:.3,delay:Math.abs(v-u)*.03,overwrite:"auto",onStart:()=>E(i)})})};e.addEventListener("mouseenter",b),e.addEventListener("mouseleave",p),t.push(()=>{e.removeEventListener("mouseenter",b),e.removeEventListener("mouseleave",p),gsap.killTweensOf(s),o.forEach(f=>f.revert()),o=[],s=[],l=[]})}),()=>t.forEach(e=>e())}function Zt(r,n){let t=null;le(hn(r)),le(Un(r)),le(ar(r)),le(Ln(r)),le(An(r)),le(gn(r)),le(In(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?xn(r):null,t?le(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(bn(r)),le(En(r)),le(wn(r)),le(yt(r)),bt(r),le(Sn(r)),t}function Mt(r){le(Dn(r)),le(Rn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(Tn(r)),le(nt(r.querySelector("[data-type-field]"),()=>tr(r))),le(rr(r)),le(nt(r.querySelector("[data-pulse-dots]"),()=>On(r))),le(Zn(r)),le(Qn(r)),ScrollTrigger.sort()}var po={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function Rt(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,reduceWhiteSpace:!1,onSplit:function(s){gsap.set(t,{autoAlpha:1});var l=po[e],c={yPercent:110,duration:l.duration,stagger:l.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?c.delay=.5:c.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],c)}}))}),function(){n.forEach(function(t){t.revert()})}}var ur=Sr(ir());var sr=window.matchMedia("(prefers-reduced-motion: reduce)"),Qt=.9;function lr(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return sr.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:xt,duration:Qt,ease:Ve},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Qt,ease:Ve},0),e.set(t,{autoAlpha:0}),e)}function en(r,n,t="100vh"){let e=gsap.timeline();return sr.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:Qt,ease:Ve},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function tn(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),en(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var et=null,nn=!1;function rn(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var cr={sync:!0,beforeLeave(){nn=Ut({keepCurtain:!0}),pe.stop(),et||(et=Ht())},beforeEnter(r){et||(et=Ht()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),un(),Zt(r.next.container,!1)},leave(r){return lr(r.current.container,r.next.container)},enter(r){return nn&&(sn(),nn=!1),le(Rt(r.next.container)),en(r.next.container,rn)},afterLeave(){et&&(et(),et=null)},afterEnter(r){dn(r),Mt(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(ur.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...cr,once(r){let n=document.querySelector("[data-menu-status]");ln(),cn(),n&&(bt(n),yt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=Zt(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(Rt(t)),tn(t,function(s){rn(s),Mt(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(Rt(t)),tn(t,function(o){rn(o),Mt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...cr}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

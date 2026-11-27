(()=>{var br=Object.create;var on=Object.defineProperty;var yr=Object.getOwnPropertyDescriptor;var Pr=Object.getOwnPropertyNames;var wr=Object.getPrototypeOf,Er=Object.prototype.hasOwnProperty;var Sr=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var Tr=(r,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Pr(t))!Er.call(r,o)&&o!==n&&on(r,o,{get:()=>t[o],enumerable:!(e=yr(t,o))||e.enumerable});return r};var Ar=(r,t,n)=>(n=r!=null?br(wr(r)):{},Tr(t||!r||!r.__esModule?on(n,"default",{value:r,enumerable:!0}):n,r));var lr=Sr((jt,Jt)=>{(function(r,t){typeof jt=="object"&&typeof Jt!="undefined"?Jt.exports=t():typeof define=="function"&&define.amd?define(t):(r||self).barbaPrefetch=t()})(jt,function(){var r=window.requestIdleCallback||function(t){var n=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)};return new((function(){function t(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var n=t.prototype;return n.install=function(e,o){var s=o===void 0?{}:o,c=s.root,l=c===void 0?document.body:c,g=s.timeout,b=g===void 0?2e3:g,v=s.limit,p=v===void 0?0:v;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=l,this.timeout=b,this.limit=p},n.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var c=s.target,l=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(c));e.toPrefetch.has(l)&&(e.observer.unobserve(c),e.barba.cache.has(l)?e.barba.cache.update(l,{action:"prefetch"}):e.barba.cache.set(l,e.barba.request(l,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(g){e.logger.error(g)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},n.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var c=s,l=e.barba.dom.getHref(c);e.barba.cache.has(l)||e.barba.prevent.checkHref(l)||e.barba.prevent.checkLink(c,{},l)||(e.observer.observe(s),e.toPrefetch.add(l))})},{timeout:this.timeout})},t})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var Ht=[];function le(r){typeof r=="function"&&Ht.push(r)}function Ut(){let r=Ht,t=ScrollTrigger.getAll();return Ht=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Cr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Cr);var Be="parallax",bt=.8;var Mr="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",an="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ze=null,_t=function(){return!1};function sn(){Ze&&gsap.timeline().to(Ze,{clipPath:an,duration:.9,ease:Be,overwrite:!0},0).fromTo(Ze,{filter:"brightness(1)"},{filter:"brightness("+(1-bt)+")",duration:.9,ease:Be},0).set(Ze,{clearProps:"filter"})}function ln(){let r=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!r||!t)return;Ze=t.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(o){t.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ze&&gsap.to(Ze,{clipPath:o?Mr:an,duration:.9,ease:Be,overwrite:!0})}r.addEventListener("click",function(){let o=t.dataset.menuStatus!=="open";n(o),e(o)}),_t=function(o){return t.dataset.menuStatus!=="open"?!1:(n(!1),o&&o.keepCurtain||e(!1),!0)}}function cn(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var t=r.target.closest&&r.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var t=r.target.closest&&r.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function un(){let r=function(n){return n.replace(/\/$/,"")||"/"},t=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),o=e.origin===location.origin&&r(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",o),o?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function dn(r){let n=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function yt(r){let t=r.querySelectorAll(".copy-email-button");if(!t.length)return;let n=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let c=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){c();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},c)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),n(o.currentTarget))};t.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function Pt(r){let t=r.querySelector("[data-clock]");if(!t)return;function n(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),l=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=s+" "+l}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}function nt(r,t,n="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(c=>{e||!c.some(l=>l.isIntersecting)||(e=!0,s.disconnect(),o=t())},{rootMargin:n});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var Je={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{Je.x=r.clientX,Je.y=r.clientY,Je.known=!0},{passive:!0});function wt(){return Je}function Ne(r){let t=e=>r(e.clientX,e.clientY),n=()=>{Je.known&&r(Je.x,Je.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var rt=new Map;function Rr(r,t){var n=512,e=document.createElement("canvas");e.width=e.height=n;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),c=s.querySelector("svg");if(!c)return new Float32Array(0);var l=parseFloat(c.getAttribute("width")||512),g=parseFloat(c.getAttribute("height")||512),b=c.getAttribute("viewBox");if(b){var v=b.split(/[\s,]+/);l=+v[2],g=+v[3]}var p=Math.min(n/l,n/g)*.9,f=(n-l*p)/2,i=(n-g*p)/2;o.save(),o.translate(f,i),o.scale(p,p),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(y){if(y.tagName==="path"){var k=y.getAttribute("d");k&&o.fill(new Path2D(k))}else y.tagName==="rect"?o.fillRect(+y.getAttribute("x")||0,+y.getAttribute("y")||0,+y.getAttribute("width")||0,+y.getAttribute("height")||0):y.tagName==="circle"&&(o.beginPath(),o.arc(+y.getAttribute("cx")||0,+y.getAttribute("cy")||0,+y.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var d=o.getImageData(0,0,n,n).data,a=new Uint32Array(n*n),w=0,h=0;h<n*n;h++)d[h*4+3]>30&&(a[w++]=h);if(!w)return new Float32Array(0);for(var P=new Float32Array(t*4),A=0;A<t;A++){var L=a[Math.floor(Math.random()*w)],C=L%n,D=(L-C)/n,M=d[L*4+3]/255,O=A*4;P[O]=(C-n/2)*1.2+(Math.random()-.5)*1.65,P[O+1]=-(D-n/2)*1.2+(Math.random()-.5)*1.65,P[O+2]=(Math.random()-.5)*37*M,P[O+3]=M}return P}function at(r,t){var n=t+"|"+r;if(!rt.has(n)){var e;try{e=Rr(r,t)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);rt.size>=4&&rt.delete(rt.keys().next().value),rt.set(n,Promise.resolve(e))}return rt.get(n)}var St={};function it(r,t,n){for(var e=St[r]||(St[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?vn(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var c=o.renderer;return c.setPixelRatio(Math.min(devicePixelRatio,2)),c.setSize(t,n,!1),c.setClearColor(0,1),c.toneMapping=THREE.ACESFilmicToneMapping,c.toneMappingExposure=1.4,c.domElement.style.width="100%",c.domElement.style.height="100%",o}function st(r,t){var n=t.renderer;n.domElement.parentNode&&n.domElement.parentNode.removeChild(n.domElement),n.renderLists.dispose();var e=St[r]||(St[r]=[]);if(e.length>=1){vn(t);return}n.setSize(1,1,!1),e.push(t)}function vn(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var Fr=.03,zr=.95,Lr=.005,ot=Math.PI*2,Dr="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",kr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),Ir=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),Hr=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Ur=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),_r=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function Et(r,t){var n=new THREE.DataTexture(r,t,t,THREE.RGBAFormat,THREE.FloatType);return n.minFilter=n.magFilter=THREE.NearestFilter,n.needsUpdate=!0,n}function lt(r,t){if(r.sim!==void 0)return r.sim;var n=r.renderer;if(!n.capabilities.isWebGL2||!n.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(t)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},c=[s(),s()],l=[s(),s()],g=0,b=new Float32Array(o*4),v=new Float32Array(o*4),p=new Float32Array(t*2),f=0;f<o;f++){var i=f*1.37,d=f*4;b[d]=i%ot,b[d+1]=i*.7%ot,b[d+2]=i*2.3%ot,b[d+3]=i*1.5%ot,v[d]=i*1.1%ot,v[d+1]=(f*2654435761&65535)/65535,v[d+2]=(f*48271&65535)/65535,v[d+3]=(f*16807&65535)/65535,f<t&&(p[f*2]=(f%e+.5)/e,p[f*2+1]=(Math.floor(f/e)+.5)/e)}var a=Et(b,e),w=Et(v,e),h=new Float32Array(o*4),P=Et(h,e),A=new Float32Array(o*4),L=Et(A,e),C=new THREE.Scene,D=new THREE.Camera,M=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);M.frustumCulled=!1,C.add(M);var O=function(U,F){return new THREE.ShaderMaterial({vertexShader:Dr,fragmentShader:U,uniforms:F,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},y=O(kr,{tPos:{value:null},tVel:{value:null},tTgt:{value:P},tP1:{value:a},tP2:{value:w},time:{value:0},gravity:{value:Fr},wind:{value:Lr},friction:{value:zr},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),k=O(Ir,{tPos:{value:null},tVel:{value:null}}),$=O(Hr,{tSrc:{value:null}}),B=new THREE.ShaderMaterial({vertexShader:Ur,fragmentShader:_r,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:P},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function I(U,F){M.material=U,n.setRenderTarget(F),n.render(C,D)}function j(){B.uniforms.tPos.value=c[g].texture,B.uniforms.tVel.value=l[g].texture}var oe={material:B,refAttribute:function(){return new THREE.BufferAttribute(p,2)},setPoints:function(U,F){A.fill(0),h.fill(0);for(var S=0;S<F;S++){var u=S*4;A[u]=U[u],A[u+1]=U[u+1]+40,A[u+2]=U[u+2],h[u]=U[u],h[u+1]=U[u+1],h[u+2]=U[u+2],h[u+3]=S*.01%ot}L.needsUpdate=!0,P.needsUpdate=!0;var m=n.getRenderTarget();g=0,$.uniforms.tSrc.value=L,I($,c[0]),n.setRenderTarget(l[0]),n.clear(!0,!1,!1),n.setRenderTarget(m),j()},step:function(U,F){var S=n.getRenderTarget(),u=y.uniforms;u.time.value=U,F?(u.mouseOn.value=1,u.radius.value=F.radius,u.mousePos.value.copy(F.pos),u.mouseVel.value.set(F.vel.x,F.vel.y),u.mouseVelLen.value=F.vel.length()):u.mouseOn.value=0;var m=1-g;u.tPos.value=c[g].texture,u.tVel.value=l[g].texture,I(y,l[m]),k.uniforms.tPos.value=c[g].texture,k.uniforms.tVel.value=l[m].texture,I(k,c[m]),g=m,n.setRenderTarget(S),B.uniforms.uTime.value=U,j()},dispose:function(){c.concat(l).forEach(function(U){U.dispose()}),[a,w,P,L].forEach(function(U){U.dispose()}),[y,k,$,B].forEach(function(U){U.dispose()}),M.geometry.dispose()}};return r.sim=oe,oe}var Ot={};function ft(r){return Ot[r]||(Ot[r]=new Promise(function(t,n){let e=document.createElement("script");e.src=r,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Ot[r]}function fn(r){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=it("case",1920,1080),s=o.renderer,c=null;r.appendChild(s.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var g=new THREE.PointLight(13931578,2.4,1200);g.position.set(-300,-100,300),n.add(g);var b=new THREE.PointLight(5913114,1.2,900);b.position.set(0,200,-300),n.add(b);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),n.add(v);var p=0,f=0,i=0,d=0,a=!1,w=0,h=0,P=Math.PI*2/6,A=new THREE.Vector2(9999,9999),L=new THREE.Raycaster,C=120,D=new THREE.Vector3(9999,9999,0),M=new THREE.Vector3(9999,9999,0),O=new THREE.Vector3,y=!1,k=0,$=0,B=8e4,I=.03,j=.95,oe=.005,U=12e4,F=null,S,u,m,E,X,N,z=0,G=!1,H=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var V=new THREE.BufferGeometry;S=new Float32Array(U*3),u=new Float32Array(U*3),m=new Float32Array(U*3),E=new Float32Array(U*3),X=new Float32Array(U),N=new Float32Array(U),V.setAttribute("position",new THREE.BufferAttribute(S,3)),V.setAttribute("color",new THREE.BufferAttribute(E,3)),V.setAttribute("size",new THREE.BufferAttribute(X,1)),V.setAttribute("alpha",new THREE.BufferAttribute(N,1)),V.setAttribute("velocity",new THREE.BufferAttribute(u,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,x=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;c=lt(o,U),c&&V.setAttribute("ref",c.refAttribute());var K=c?c.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:x,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));F=new THREE.Points(V,K),c&&(F.frustumCulled=!1),n.add(F)}function se(V,Y){return at(V,Y)}function Z(V){z=V.length/4;for(var Y=0;Y<z;Y++){var x=Y*3,K=Y*4,ie=V[K],Ce=V[K+1],Me=V[K+2],Re=V[K+3];S[x]=ie,S[x+1]=Ce+40,S[x+2]=Me,u[x]=u[x+1]=u[x+2]=0,m[x]=ie,m[x+1]=Ce,m[x+2]=Me;var R=ne[Math.floor(Math.random()*ne.length)],q=.7+Math.random()*.4;E[x]=R.r*q,E[x+1]=R.g*q,E[x+2]=R.b*q,X[Y]=1.8+Math.random()*3.8,N[Y]=.3+(Re||.7)*.75}c&&c.setPoints(V,z),F.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(T){F.geometry.attributes[T].needsUpdate=!0}),G=!0}function Pe(V){return se(V,Math.min(U,B)).then(function(Y){Y.length&&F&&Z(Y)})}function he(V){if(!(!G||!z)){if(H+=V,c){c.step(H,y?{pos:D,vel:O,radius:C}:null);return}for(var Y=0;Y<z;Y++){var x=Y*3,K=Y*1.37;if(u[x]+=Math.sin(H*.4+K)*.008+Math.sin(H*1.1+K*2.3)*.003,u[x+1]+=Math.cos(H*.35+K*.7)*.008+Math.sin(H*.9+K*1.5)*.004,u[x+2]+=Math.sin(H*.25+K*1.1)*.004,u[x+1]-=I*.06,u[x]+=Math.sin(H*.25+S[x+1]*.008)*oe*.6,u[x+2]+=Math.cos(H*.3+S[x]*.008)*oe*.3,y){var ie=S[x]-D.x,Ce=S[x+1]-D.y,Me=S[x+2]-D.z,Re=ie*ie+Ce*Ce+Me*Me,R=C*C;if(Re<R&&Re>.25){var q=Math.sqrt(Re),T=q/C,ee=(Y*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-T,1.5+ee),ke=1+Math.min(O.length()*.12,1),Ee=fe*ve*1.2*ke,Fe=1/q;u[x]+=ie*Fe*Ee,u[x+1]+=Ce*Fe*Ee,u[x+2]+=Me*Fe*Ee*.2;var ye=.02+ee*.06;u[x]+=O.x*fe*ye,u[x+1]+=O.y*fe*ye;var We=fe*.15;u[x]+=(ee-.5)*We,u[x+1]+=((Y*48271&65535)/65535-.5)*We}}var Ve=m[x],zt=m[x+1]+40,tt=m[x+2],ct=Ve-S[x],Ye=zt-S[x+1],$e=tt-S[x+2],gt=Math.sqrt(ct*ct+Ye*Ye+$e*$e),xt=(Y*48271&65535)/65535,Lt=.003+xt*.003,Dt=1+Math.min(gt*.002,.5),ut=Lt*Dt;u[x]+=ct*ut,u[x+1]+=Ye*ut,u[x+2]+=$e*ut;var dt=(Y*16807&65535)/65535,Ke=j*(.92+dt*.06);u[x]*=Ke,u[x+1]*=Ke,u[x+2]*=Ke,S[x]+=u[x],S[x+1]+=u[x+1],S[x+2]+=u[x+2];var vt=Math.sqrt(Math.pow(S[x]-m[x],2)+Math.pow(S[x+1]-m[x+1],2)+Math.pow(S[x+2]-m[x+2],2));N[Y]=.15+.55*(1-Math.min(vt*.005,1))+Math.sin(H*1.5+Y*.01)*.05}F.geometry.attributes.position.needsUpdate=!0,F.geometry.attributes.alpha.needsUpdate=!0,F.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(V,Y){var x=s.domElement.getBoundingClientRect();if(!(x.width===0||x.height===0)&&(A.set((V-x.left)/x.width*2-1,-((Y-x.top)/x.height)*2+1),L.setFromCamera(A,e),L.ray.intersectPlane(ze,Le))){M.copy(D),F&&D.copy(Le).applyMatrix4(be.copy(F.matrixWorld).invert()),O.subVectors(D,M);var K=O.length();K>15&&O.multiplyScalar(15/K)}}function Q(V,Y){var x=r.getBoundingClientRect();return V>=x.left&&V<=x.right&&Y>=x.top&&Y<=x.bottom}var _=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!t){var Te=function(V){k=V.clientX,$=V.clientY;var Y=Q(V.clientX,V.clientY);if(Y){y=!0,te(V.clientX,V.clientY);var x=r.getBoundingClientRect(),K=Math.round(V.clientX-x.left),ie=Math.round(V.clientY-x.top);_&&(_.textContent="X: "+K+"PX    Y: "+ie+"PX")}else y=!1,D.set(9999,9999,0);a&&(p+=(V.clientX-w)*.005,i+=(V.clientY-h)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),w=V.clientX,h=V.clientY)},we=function(V){Q(V.clientX,V.clientY)&&(a=!0,w=V.clientX,h=V.clientY)},ce=function(){a=!1,p=0,i=0,f=f%(Math.PI*2),f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",we),window.addEventListener("mouseup",ce)}function me(){for(var V=4e3,Y=new THREE.BufferGeometry,x=new Float32Array(V*3),K=new Float32Array(V*3),ie=0;ie<V;ie++){x[ie*3]=(Math.random()-.5)*2200,x[ie*3+1]=(Math.random()-.5)*1800,x[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}Y.setAttribute("position",new THREE.BufferAttribute(x,3)),Y.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var R=Re.getContext("2d"),q=R.createRadialGradient(16,16,0,16,16,16);q.addColorStop(0,"rgba(255,255,255,1)"),q.addColorStop(.3,"rgba(255,255,255,0.6)"),q.addColorStop(.7,"rgba(255,255,255,0.15)"),q.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=q,R.fillRect(0,0,32,32);var T=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(Y,T);return ee.userData={positions:x,count:V},n.add(ee),ee}re();var de=t?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var Ge=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(V){Ae=V[0].isIntersecting,V[0].isIntersecting&&!xe&&!t&&(xe=!0,_&&(_.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,W=0;function J(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!t){var V=wt();V.known&&(k=V.x,$=V.y);var Y=Q(k,$);Y?(y=!0,te(k,$)):(y=!1,D.set(9999,9999,0))}}window.addEventListener("scroll",J,{passive:!0});var ae=null;function Xe(){if(ae=requestAnimationFrame(Xe),!!Ae){W++;var V=Math.min(Ge.getDelta(),.05),Y=Ge.elapsedTime;if(t)f+=P*V;else{var x=p-f;x=x%(Math.PI*2),x>Math.PI&&(x-=Math.PI*2),x<-Math.PI&&(x+=Math.PI*2),f+=x*.12,d+=(i-d)*.12}if(F&&(F.rotation.x=d,F.rotation.y=f,F.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin(Y*.2+ie)*.05,K[ie*3]+=Math.cos(Y*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-f*35*.35,de.position.y=d*28*.35}l.position.x=300+Math.sin(Y*.3)*100,l.position.y=350+Math.cos(Y*.2)*80,g.intensity=2+Math.sin(Y*.5)*.4,v.intensity=.8+Math.sin(Y*.4+1)*.3,!(t&&ge&&W%4!==0)&&(he(V),s.render(n,e))}}return Xe(),function(){cancelAnimationFrame(ae),t||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",we),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",J),clearTimeout(Ue),He.disconnect(),n.traverse(function(V){V.geometry&&V.geometry.dispose()}),st("case",o),F=null}}function pn(r){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=it("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),t.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),t.add(c);var l=new THREE.PointLight(13931578,2.4,1200);l.position.set(-300,-100,300),t.add(l);var g=new THREE.PointLight(5913114,1.2,900);g.position.set(0,200,-300),t.add(g);var b=new THREE.PointLight(16750916,1.3,600);b.position.set(0,-250,200),t.add(b);var v=0,p=Math.PI*2/6,f=8e4,i=.03,d=.95,a=.005,w=12e4,h=null,P,A,L,C,D,M,O=0,y=!1,k=0,$=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function B(){var te=new THREE.BufferGeometry;P=new Float32Array(w*3),A=new Float32Array(w*3),L=new Float32Array(w*3),C=new Float32Array(w*3),D=new Float32Array(w),M=new Float32Array(w),te.setAttribute("position",new THREE.BufferAttribute(P,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(D,1)),te.setAttribute("alpha",new THREE.BufferAttribute(M,1)),te.setAttribute("velocity",new THREE.BufferAttribute(A,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;s=lt(e,w),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:_,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));h=new THREE.Points(te,ue),s&&(h.frustumCulled=!1),t.add(h)}function I(te,Q){return at(te,Q)}function j(te){O=te.length/4;for(var Q=0;Q<O;Q++){var _=Q*3,ue=Q*4,xe=te[ue],Te=te[ue+1],we=te[ue+2],ce=te[ue+3];P[_]=xe,P[_+1]=Te+40,P[_+2]=we,A[_]=A[_+1]=A[_+2]=0,L[_]=xe,L[_+1]=Te,L[_+2]=we;var me=$[Math.floor(Math.random()*$.length)],de=.7+Math.random()*.4;C[_]=me.r*de,C[_+1]=me.g*de,C[_+2]=me.b*de,D[Q]=1.8+Math.random()*3.8,M[Q]=.3+(ce||.7)*.75}s&&s.setPoints(te,O),h.geometry.setDrawRange(0,O),["position","color","size","alpha"].forEach(function(De){h.geometry.attributes[De].needsUpdate=!0}),y=!0}function oe(te){return I(te,Math.min(w,f)).then(function(Q){Q.length&&h&&j(Q)})}function U(te){if(!(!y||!O)){if(k+=te,s){s.step(k,null);return}for(var Q=0;Q<O;Q++){var _=Q*3,ue=Q*1.37;A[_]+=Math.sin(k*.4+ue)*.008+Math.sin(k*1.1+ue*2.3)*.003,A[_+1]+=Math.cos(k*.35+ue*.7)*.008+Math.sin(k*.9+ue*1.5)*.004,A[_+2]+=Math.sin(k*.25+ue*1.1)*.004,A[_+1]-=i*.06,A[_]+=Math.sin(k*.25+P[_+1]*.008)*a*.6,A[_+2]+=Math.cos(k*.3+P[_]*.008)*a*.3;var xe=L[_],Te=L[_+1]+40,we=L[_+2],ce=xe-P[_],me=Te-P[_+1],de=we-P[_+2],De=Math.sqrt(ce*ce+me*me+de*de),Ge=(Q*48271&65535)/65535,Ae=.003+Ge*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;A[_]+=ce*ge,A[_+1]+=me*ge,A[_+2]+=de*ge;var Ue=(Q*16807&65535)/65535,W=d*(.92+Ue*.06);A[_]*=W,A[_+1]*=W,A[_+2]*=W,P[_]+=A[_],P[_+1]+=A[_+1],P[_+2]+=A[_+2];var J=Math.sqrt(Math.pow(P[_]-L[_],2)+Math.pow(P[_+1]-L[_+1],2)+Math.pow(P[_+2]-L[_+2],2));M[Q]=.15+.55*(1-Math.min(J*.005,1))+Math.sin(k*1.5+Q*.01)*.05}h.geometry.attributes.position.needsUpdate=!0,h.geometry.attributes.alpha.needsUpdate=!0,h.geometry.attributes.velocity.needsUpdate=!0}}B();for(var F=4e3,S=new THREE.BufferGeometry,u=new Float32Array(F*3),m=new Float32Array(F*3),E=0;E<F;E++){u[E*3]=(Math.random()-.5)*2200,u[E*3+1]=(Math.random()-.5)*1800,u[E*3+2]=-200-Math.random()*1800;var X=$[Math.floor(Math.random()*$.length)],N=.2+Math.random()*.3;m[E*3]=X.r*N,m[E*3+1]=X.g*N,m[E*3+2]=X.b*N}S.setAttribute("position",new THREE.BufferAttribute(u,3)),S.setAttribute("color",new THREE.BufferAttribute(m,3));var z=document.createElement("canvas");z.width=z.height=32;var G=z.getContext("2d"),H=G.createRadialGradient(16,16,0,16,16,16);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.3,"rgba(255,255,255,0.6)"),H.addColorStop(.7,"rgba(255,255,255,0.15)"),H.addColorStop(1,"rgba(255,255,255,0)"),G.fillStyle=H,G.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(z),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(S,ne);t.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var Z=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(Z.getDelta(),.05),Q=Z.elapsedTime;v+=p*te,h&&(h.rotation.y=v,h.position.y=5,h.scale.setScalar(.85));for(var _=0;_<F;_++)u[_*3+1]+=Math.sin(Q*.2+_)*.05,u[_*3]+=Math.cos(Q*.15+_*.5)*.03;S.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-v*35*.35,c.position.x=300+Math.sin(Q*.3)*100,c.position.y=350+Math.cos(Q*.2)*80,l.intensity=2+Math.sin(Q*.5)*.4,b.intensity=.8+Math.sin(Q*.4+1)*.3,U(te),o.render(t,n)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),t.traverse(function(te){te.geometry&&te.geometry.dispose()}),st("card",e),h=null}}var mn="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function hn(r){let t=r.querySelector("#logo-canvas-container");if(!t)return;let n=!!t.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return ft(mn).then(function(){o||(s=n?Or(t):fn(t))}),function(){o=!0,s&&s()}}return n?e():nt(t,e)}function gn(r){let t=r.querySelector("#axion-card");if(t)return nt(t,function(){let n=!1,e=null;return ft(mn).then(function(){n||(e=pn(t))}),function(){n=!0,e&&e()}})}function Or(r){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=it("home",1920,1080),s=o.renderer,c=null;r.appendChild(s.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var g=new THREE.PointLight(13931578,2.4,1200);g.position.set(-300,-100,300),n.add(g);var b=new THREE.PointLight(5913114,1.2,900);b.position.set(0,200,-300),n.add(b);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),n.add(v);var p=0,f=0,i=0,d=0,a=!1,w=0,h=0,P=Math.PI*2/6,A=new THREE.Vector2(9999,9999),L=new THREE.Raycaster,C=120,D=new THREE.Vector3(9999,9999,0),M=new THREE.Vector3(9999,9999,0),O=new THREE.Vector3,y=!1,k=0,$=0,B=8e4,I=.03,j=.95,oe=.005,U=12e4,F=null,S,u,m,E,X,N,z=0,G=!1,H=!1,ne=0,re=0,se=null,Z=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var R=new THREE.BufferGeometry;S=new Float32Array(U*3),u=new Float32Array(U*3),m=new Float32Array(U*3),E=new Float32Array(U*3),X=new Float32Array(U),N=new Float32Array(U),R.setAttribute("position",new THREE.BufferAttribute(S,3)),R.setAttribute("color",new THREE.BufferAttribute(E,3)),R.setAttribute("size",new THREE.BufferAttribute(X,1)),R.setAttribute("alpha",new THREE.BufferAttribute(N,1)),R.setAttribute("velocity",new THREE.BufferAttribute(u,3));var q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;c=lt(o,U),c&&R.setAttribute("ref",c.refAttribute());var ee=c?c.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:q,fragmentShader:T,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));F=new THREE.Points(R,ee),c&&(F.frustumCulled=!1),n.add(F)}function he(R,q){return at(R,q)}function be(R){z=R.length/4;for(var q=0;q<z;q++){var T=q*3,ee=q*4,ve=R[ee],fe=R[ee+1],ke=R[ee+2],Ee=R[ee+3];S[T]=ve,S[T+1]=fe+40,S[T+2]=ke,u[T]=u[T+1]=u[T+2]=0,m[T]=ve,m[T+1]=fe,m[T+2]=ke;var Fe=Z[Math.floor(Math.random()*Z.length)],ye=.7+Math.random()*.4;E[T]=Fe.r*ye,E[T+1]=Fe.g*ye,E[T+2]=Fe.b*ye,X[q]=1.8+Math.random()*3.8,N[q]=.3+(Ee||.7)*.75}c&&c.setPoints(R,z),F.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(We){F.geometry.attributes[We].needsUpdate=!0}),G=!0,H=!1,ne=1}function ze(R){return he(R,Math.min(U,B)).then(function(q){q.length&&F&&be(q)})}function Le(R){if(!(!G||!z)){if(re+=R,c){c.step(re,y&&J==="interactive"?{pos:D,vel:O,radius:C}:null);return}for(var q=0;q<z;q++){var T=q*3,ee=q*1.37;if(u[T]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,u[T+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,u[T+2]+=Math.sin(re*.25+ee*1.1)*.004,u[T+1]-=I*.06,u[T]+=Math.sin(re*.25+S[T+1]*.008)*oe*.6,u[T+2]+=Math.cos(re*.3+S[T]*.008)*oe*.3,y&&J==="interactive"){var ve=S[T]-D.x,fe=S[T+1]-D.y,ke=S[T+2]-D.z,Ee=ve*ve+fe*fe+ke*ke,Fe=C*C;if(Ee<Fe&&Ee>.25){var ye=Math.sqrt(Ee),We=ye/C,Ve=(q*2654435761&65535)/65535,zt=.6+Ve*.8,tt=Math.pow(1-We,1.5+Ve),ct=1+Math.min(O.length()*.12,1),Ye=tt*zt*1.2*ct,$e=1/ye;u[T]+=ve*$e*Ye,u[T+1]+=fe*$e*Ye,u[T+2]+=ke*$e*Ye*.2;var gt=.02+Ve*.06;u[T]+=O.x*tt*gt,u[T+1]+=O.y*tt*gt;var xt=tt*.15;u[T]+=(Ve-.5)*xt,u[T+1]+=((q*48271&65535)/65535-.5)*xt}}var Lt=m[T],Dt=m[T+1]+40,ut=m[T+2],dt=Lt-S[T],Ke=Dt-S[T+1],vt=ut-S[T+2],fr=Math.sqrt(dt*dt+Ke*Ke+vt*vt),pr=(q*48271&65535)/65535,mr=.003+pr*.003,hr=1+Math.min(fr*.002,.5),kt=mr*hr;u[T]+=dt*kt,u[T+1]+=Ke*kt,u[T+2]+=vt*kt;var gr=(q*16807&65535)/65535,It=j*(.92+gr*.06);u[T]*=It,u[T+1]*=It,u[T+2]*=It,S[T]+=u[T],S[T+1]+=u[T+1],S[T+2]+=u[T+2];var xr=Math.sqrt(Math.pow(S[T]-m[T],2)+Math.pow(S[T+1]-m[T+1],2)+Math.pow(S[T+2]-m[T+2],2));N[q]=.15+.55*(1-Math.min(xr*.005,1))+Math.sin(re*1.5+q*.01)*.05}F.geometry.attributes.position.needsUpdate=!0,F.geometry.attributes.alpha.needsUpdate=!0,F.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),_=new THREE.Vector3;function ue(R,q){var T=s.domElement.getBoundingClientRect();if(!(T.width===0||T.height===0)&&(A.set((R-T.left)/T.width*2-1,-((q-T.top)/T.height)*2+1),L.setFromCamera(A,e),L.ray.intersectPlane(Q,_))){M.copy(D),F&&D.copy(_).applyMatrix4(te.copy(F.matrixWorld).invert()),O.subVectors(D,M);var ee=O.length();ee>15&&O.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function we(R,q){var T=Te().getBoundingClientRect();return R>=T.left&&R<=T.right&&q>=T.top&&q<=T.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(R){if(k=R.clientX,$=R.clientY,t||J!=="interactive"){y=!1,D.set(9999,9999,0);return}var q=we(R.clientX,R.clientY);if(q){y=!0,ue(R.clientX,R.clientY);var T=Te().getBoundingClientRect(),ee=Math.round(R.clientX-T.left),ve=Math.round(R.clientY-T.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else y=!1,D.set(9999,9999,0);a&&(p+=(R.clientX-w)*.005,i+=(R.clientY-h)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),w=R.clientX,h=R.clientY)}function Ge(R){t||J!=="interactive"||we(R.clientX,R.clientY)&&(a=!0,w=R.clientX,h=R.clientY)}function Ae(){t||(a=!1,p=0,i=0,f=f%(Math.PI*2),f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",Ge),window.addEventListener("mouseup",Ae);function He(){for(var R=4e3,q=new THREE.BufferGeometry,T=new Float32Array(R*3),ee=new Float32Array(R*3),ve=0;ve<R;ve++){T[ve*3]=(Math.random()-.5)*2200,T[ve*3+1]=(Math.random()-.5)*1800,T[ve*3+2]=-200-Math.random()*1800;var fe=Z[Math.floor(Math.random()*Z.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}q.setAttribute("position",new THREE.BufferAttribute(T,3)),q.setAttribute("color",new THREE.BufferAttribute(ee,3));var Ee=document.createElement("canvas");Ee.width=Ee.height=32;var Fe=Ee.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var We=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Ee),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Ve=new THREE.Points(q,We);return Ve.userData={positions:T,count:R},n.add(Ve),Ve}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var W=new THREE.Clock,J="spin",ae=null;function Xe(){if(t){J="spin";return}if(ae===null){var R=document.querySelector(".scaling-element-video");ae=R&&getComputedStyle(R).display!=="none"}if(!ae){J="spin";return}var q=window._flipProgress||0;q>.85?J="interactive":q>.7?J="transition":J="spin"}var V="spin",Y=!0,x=new IntersectionObserver(function(R){Y=R[0].isIntersecting},{threshold:0});x.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var R=wt();R.known&&(k=R.x,$=R.y);var q=we(k,$);q?(y=!0,ue(k,$)):(y=!1,D.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!Y){Ce++;var R=Math.min(W.getDelta(),.05),q=W.elapsedTime;Xe(),V==="interactive"&&J!=="interactive"&&(y=!1,D.set(9999,9999,0),a=!1);var T=J==="transition"||J==="interactive";if(T&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!T&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),V=J,y&&!we(k,$)&&(y=!1,D.set(9999,9999,0)),J==="spin")f+=P*R,d+=(0-d)*.05;else if(J==="transition")f=f%(Math.PI*2),f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),f+=(0-f)*.025,d+=(0-d)*.025;else{var ee=p-f;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),f+=ee*.12,d+=(i-d)*.12}F&&(F.rotation.x=d,F.rotation.y=f,F.scale.setScalar(1),F.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(q*.2+fe)*.05,ve[fe*3]+=Math.cos(q*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-f*35*.35,ge.position.y=d*28*.35,l.position.x=300+Math.sin(q*.3)*100,l.position.y=350+Math.cos(q*.2)*80,g.intensity=2+Math.sin(q*.5)*.4,v.intensity=.8+Math.sin(q*.4+1)*.3,!(t&&K&&Ce%4!==0)&&(Le(R),s.render(n,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",Ge),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),x.disconnect(),n.traverse(function(R){R.geometry&&R.geometry.dispose()}),st("home",o),F=null}}function xn(r){let t=document.querySelector("[data-load-wrap]");if(!t)return null;pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),o=t.querySelector("[data-load-logo]"),s=Array.from(t.querySelectorAll("[data-load-text]")),c=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),l=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Be},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(c.length&&l.set(c,{autoAlpha:1},0),s.length>=2){let g=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),b=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([g.chars,b.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),l.to(g.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),l.to(g.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),l.to(b.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),l.to(b.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return l}function bn(r){let n=[...(r||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(v=>{let p=v.parentElement;p&&(v.style.whiteSpace="nowrap",e.has(p)||e.set(p,[]),e.get(p).push(v))});function o(v){let p=getComputedStyle(v);return v.clientWidth-parseFloat(p.paddingLeft)-parseFloat(p.paddingRight)}function s(v,p){if(p<=0)return;let f=parseFloat(getComputedStyle(v).fontSize)||16;for(let i=0;i<5;i++){let d=v.getBoundingClientRect().width;if(d<=0)break;let a=p/d;if(Math.abs(a-1)<.002)break;f*=a,v.style.fontSize=f+"px"}}function c(){e.forEach((v,p)=>{let f=o(p);v.forEach(i=>s(i,f))})}let l=null;function g(){l||(l=requestAnimationFrame(()=>{l=null,c()}))}let b;return window.ResizeObserver&&(b=new ResizeObserver(g),e.forEach((v,p)=>b.observe(p))),window.addEventListener("resize",g),c(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(c),()=>{l&&cancelAnimationFrame(l),b&&b.disconnect(),window.removeEventListener("resize",g),n.forEach(v=>{v.style.whiteSpace="",v.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},Vt=.08,Vr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},yn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function Pn(r,t){var n=(1-t)*100+"%";return r==="left"?"inset(0% 0% 0% "+n+")":r==="up"?"inset("+n+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+n+" 0%)":"inset(0% "+n+" 0% 0%)"}function Br(r,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:r,transformOrigin:t}),n}function wn(r){var t=r.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",c=o.getAttribute("data-marker-theme")||"#000000",l=o.getAttribute("data-marker-scroll-start")||"top 90%",g=c.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(c).trim()||c,b=yn[s]||yn.right,v=Vr[o.getAttribute("data-highlight-marker-reveal")]||null;v&&(g=v.bar);var p=o.closest("[data-cursor-label]"),f={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,d=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){f.timeline&&f.timeline.kill(),f.scrollTrigger&&f.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(M){M.remove()}),f.listeners.forEach(function(M){M.el.removeEventListener(M.type,M.fn)}),f.listeners=[],i=!1;var w=a.lines,h=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(w.forEach(function(M,O){gsap.set(M,{position:"relative",overflow:"hidden"});var y=Br(g,b.origin);gsap.set(y,{[b.prop]:0}),M.appendChild(y),v&&(gsap.set(M,{zIndex:0,color:v.text}),gsap.set(y,{zIndex:-1})),h.to(y,{[b.prop]:1,duration:Se.duration,ease:Se.ease},O*Vt);var k=function(){i&&(gsap.to(y,{[b.prop]:0,duration:Se.duration,ease:Se.ease}),v&&gsap.to(M,{color:v.hoverText,duration:Se.duration,ease:Se.ease}))},$=function(){i&&(gsap.to(y,{[b.prop]:1,duration:Se.duration,ease:Se.ease}),v&&gsap.to(M,{color:v.text,duration:Se.duration,ease:Se.ease}))};!v&&e&&(M.addEventListener("mouseenter",k),M.addEventListener("mouseleave",$),f.listeners.push({el:M,type:"mouseenter",fn:k},{el:M,type:"mouseleave",fn:$}))}),f.timeline=h,p){h.kill();var P=o.querySelectorAll(".highlight-marker-bar");gsap.set(w,{clipPath:Pn(s,0)});var A=function(M){gsap.to(P,{[b.prop]:M,duration:Se.duration,ease:Se.ease,stagger:Vt,overwrite:!0}),gsap.to(w,{clipPath:Pn(s,M),duration:Se.duration,ease:Se.ease,stagger:Vt,overwrite:!0})},L=function(){A(1)},C=function(){A(0)};p.addEventListener("cursorlabel:enter",L),p.addEventListener("cursorlabel:leave",C),f.listeners.push({el:p,type:"cursorlabel:enter",fn:L},{el:p,type:"cursorlabel:leave",fn:C});return}var D=ScrollTrigger.create({trigger:o,start:l,once:!0,onEnter:function(){h.play()}});f.scrollTrigger=D}});f.split=d,n.push(f)}),function(){n.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function En(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),c=r.querySelectorAll("[data-cursor-marquee-text]");if(!c.length)return;let l=gsap.quickTo(o,"x",{duration:n,ease:"power3"}),g=gsap.quickTo(o,"y",{duration:n,ease:"power3"}),b=null,v=p=>{l(p.clientX),g(p.clientY)};return window.addEventListener("pointermove",v,{passive:!0}),c.forEach(p=>{p.addEventListener("mouseenter",()=>{b&&clearTimeout(b);let f=p.getAttribute("data-cursor-marquee-text")||"",i=(f.length||1)/e;s.forEach(d=>{d.textContent=f,d.style.animationPlayState="running",d.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),p.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),b&&clearTimeout(b),b=setTimeout(()=>{s.forEach(f=>{f.style.animationPlayState="paused"})},t*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",v),clearTimeout(b),gsap.killTweensOf(o)}}function Sn(r){let t=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!t.length)return;let n=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let c=s.target;s.isIntersecting?n(c):c.paused||c.pause()})},{rootMargin:"100% 0px"});return t.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function Tn(r){let t=r.querySelectorAll("[data-flip-element='wrapper']"),n=r.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function o(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(l){window._flipProgress=l.progress}}}),t.forEach(function(l,g){let b=g+1;if(b<t.length){let v=t[b],p=v.getBoundingClientRect(),f=l.getBoundingClientRect(),i=p.top+window.pageYOffset+v.offsetHeight/2,d=f.top+window.pageYOffset+l.offsetHeight/2,a=i-d;e.add(Flip.fit(n,v,{duration:a,ease:"none"}))}})}o();let s,c=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",c),function(){clearTimeout(s),window.removeEventListener("resize",c),e&&e.kill()}}var qr="150%";function Gr(r){let t=[];return r.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let o of e){if(o===" "){n.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,n.append(s),t.push(s)}}),t}var Tt=new WeakMap;function An(r){let t=r.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(c){return c.textContent})}),o=n.map(Gr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),Tt.set(r,{wrap:t,lines:n,lineChars:o}),function(){Tt.delete(r),n.forEach(function(s,c){s.querySelectorAll("textPath").forEach(function(l,g){l.textContent=e[c][g]})})}}function Cn(r,t){return r.lines.forEach(function(n,e){let o=r.lineChars[e];o.length&&t.fromTo(o,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/o.length,ease:"steps(1)"},(parseFloat(n.dataset.at)||0)*.7)}),t}function Mn(r,t){let n=Tt.get(r);return n&&t.contains(n.wrap)?Cn(n,gsap.timeline()):null}function Rn(r){let t=Tt.get(r);if(!t||t.wrap.closest('[data-scroll-driven="wrap"]'))return function(){};let n=Cn(t,gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+qr,pin:!0,scrub:!0}}));return function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}var _e=170,Ct=[[0,[0,1]],[0,[1,1]],[0,[2,4,4,4]],[0,[3,6,6,6]],[0,[2,4,4,5]],[0,[3,6,6,7]],[1,[0,0]],[1,[1,2]],[1,[2,3,4,4]],[1,[3,5,5,5]],[1,[3,7,7,7]],[1,[3,5,5,6]],[2,[0,0]],[2,[1,2]],[2,[2,3,4,4]],[2,[3,5,5,5]],[2,[3,7,7,7]],[2,[3,5,5,6]],[3,[0,1]],[3,[1,3,4,4]],[3,[2,5,5,5]],[3,[3,7,7,7]],[3,[2,5,5,6]]],Bt="sine.inOut",Fn={desktop:.25,mobile:1},qt={duration:510,stagger:40},Nr=[{at:510,rows:[[60,560],[0,620],[110,520],[30,600]]},{at:0,rows:[[20,500],[80,440],[0,520],[50,470]]},{at:0,rows:[[20,500],[80,440],[0,520],[50,470]]}],At={duration:935,ease:"sine.in"},pt={at:.6,duration:170,stagger:40,ease:"expo.out"},Xr=100,mt=1190,Yr={desktop:"(min-width: 992px)",mobile:"(max-width: 991px)"},Dn=[[0,-1],[1,1],[2,-1],[4,1],[5,1],[6,1],[8,1],[9,1],[12,1],[14,1],[15,1],[18,-1],[18,1],[19,1],[20,1]],zn=[[20,500],[80,440],[0,520],[50,470]],Ln="http://www.w3.org/2000/svg",Gt=new WeakMap;function kn(r){let t=r.querySelector('[data-scroll-driven="wrap"]'),n=t&&t.querySelector('[data-scroll-driven="stage"]');if(!n||getComputedStyle(t).display==="none")return function(){};let e=document.createElementNS(Ln,"svg");e.setAttribute("viewBox","0 0 1360 680"),e.setAttribute("aria-hidden","true"),e.setAttribute("preserveAspectRatio","none"),e.style.cssText="display:block;width:100%;height:100%;overflow:visible";let o=document.createElementNS(Ln,"path");o.setAttribute("fill","currentColor"),e.appendChild(o),n.appendChild(e);let s=document.createElement("div");s.style.cssText="position:absolute;inset:0;background:#fff;pointer-events:none;clip-path:circle(0px at 75% 50%)",n.appendChild(s);let c=Ct.map(([,d])=>({x:d[0]*_e,y:-_e,o:d.length===2})),l=Dn.map(([d])=>({parent:c[d],dx:0})),g={full:!1,cx:.75,cy:.5},b={v:0},v={v:0};function p(){let d="",a=function(A,L,C){C-L<.01||(d+="M"+A.toFixed(2)+" "+L.toFixed(2)+"H"+(A+_e).toFixed(2)+"V"+C.toFixed(2)+"H"+A.toFixed(2)+"Z")};for(let A=0;A<c.length;A++){let L=c[A],C=L.o&&b.v>0;a(L.x,C?L.y-b.v:Math.max(L.y,0),(C?L.y-b.v:L.y)+_e)}g.full&&l.forEach(function(A){a(A.parent.x+A.dx,Math.max(A.parent.y,0),A.parent.y+_e)}),o.setAttribute("d",d);let w=n.clientWidth,h=n.clientHeight,P=v.v*Math.hypot(Math.max(g.cx,1-g.cx)*w,Math.max(g.cy,1-g.cy)*h)*1.01;s.style.clipPath="circle("+P.toFixed(1)+"px at "+(g.cx*100).toFixed(2)+"% "+(g.cy*100).toFixed(2)+"%)"}p();let f=Array.from(t.querySelectorAll('[data-scroll-driven="om"]')).map(function(d){return SplitText.create(d,{type:"lines",mask:"lines"})}),i=f.flatMap(function(d){return d.lines});return gsap.set(i,{yPercent:110}),Gt.set(r,{wrap:t,stage:n,blocks:c,fills:l,view:g,lift:b,white:v,omLines:i,render:p}),function(){Gt.delete(r),gsap.killTweensOf(c.concat(l,b,v,i)),e.remove(),s.remove(),f.forEach(function(d){d.revert()})}}function In(r){let t=Gt.get(r);if(!t)return function(){};let n=Mn(r,t.wrap),e=gsap.matchMedia();return e.add(Yr,function(o){let s=o.conditions.desktop;t.view.full=!s;let c=s?Fn.desktop:Fn.mobile,l=gsap.timeline({paused:!0,onUpdate:t.render}),g=0,b=1;function v(){let p=t.stage.getBoundingClientRect(),f=p.width/1360,i=p.height/680;b=s?f:i,g=c*window.innerHeight/b;let d=t.wrap.querySelector('[data-circular-text="svg"]');if(d){let h=d.getBoundingClientRect();t.view.cx=(h.left+h.width/2-p.left)/p.width,t.view.cy=(h.top+h.height/2-p.top)/p.height}l.clear(),Ct.forEach(function([h,P],A){l.fromTo(t.blocks[A],{y:-_e},{y:h*_e,duration:g+qt.duration-3*qt.stagger,ease:Bt,immediateRender:!1},P[0]*qt.stagger)});let a=gsap.timeline();Nr.forEach(function(h,P){P&&!s||Ct.forEach(function([A,L],C){if(L.length<P+2||L[P]===L[P+1])return;let[D,M]=h.rows[A];(P?a:l).fromTo(t.blocks[C],{x:L[P]*_e},{x:L[P+1]*_e,duration:M,ease:Bt,immediateRender:!1},(P?0:g)+h.at+D)})});let w;if(s){let h=4*_e+Math.max(0,window.innerHeight-p.height)/i+20,P=h*i/f;l.fromTo(t.lift,{v:0},{v:h,duration:P,ease:"none",immediateRender:!1},g+mt),l.add(a,g+mt+P),w=g+mt+P+a.duration()}else t.lift.v=0,Dn.forEach(function([h,P],A){let[L,C]=zn[Ct[h][0]];l.fromTo(t.fills[A],{dx:0},{dx:P*_e,duration:C,ease:Bt,immediateRender:!1},g+mt+L)}),w=g+mt+Math.max.apply(null,zn.map(function([h,P]){return h+P}));l.fromTo(t.white,{v:0},{v:1,duration:At.duration,ease:At.ease,immediateRender:!1},w),t.omLines.length&&l.fromTo(t.omLines,{yPercent:110},{yPercent:0,duration:pt.duration,stagger:pt.stagger,ease:pt.ease,immediateRender:!1},w+pt.at*At.duration),n&&(n.duration(1.5*window.innerHeight/b),l.add(n,w+pt.at*At.duration+Xr))}return v(),ScrollTrigger.addEventListener("refreshInit",v),ScrollTrigger.create({trigger:t.wrap,start:"top top",end:()=>"+="+(l.duration()-g)*b,pin:!0}),ScrollTrigger.create({animation:l,trigger:t.wrap,start:"top "+c*100+"%",end:()=>"+="+l.duration()*b,scrub:!0}),function(){ScrollTrigger.removeEventListener("refreshInit",v),l.kill()}}),function(){e.revert()}}function Wt(r){var t=[];function n(i,d,a,w){i.addEventListener(d,a,w),t.push(function(){i.removeEventListener(d,a,w)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var d=i.getAttribute("data-player-src");if(!d)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(W){}try{a.removeAttribute("src"),a.load()}catch(W){}function w(W){i.getAttribute("data-player-status")!==W&&i.setAttribute("data-player-status",W)}function h(W){a.muted=!!W,i.setAttribute("data-player-muted",a.muted?"true":"false")}function P(W){i.setAttribute("data-player-fullscreen",W?"true":"false")}function A(W){i.setAttribute("data-player-activated",W?"true":"false")}i.hasAttribute("data-player-activated")||A(!1);var L=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),D=i.querySelector("[data-player-buffered]"),M=i.querySelector("[data-player-timeline-handle]"),O=i.querySelectorAll("[data-player-time-duration]"),y=i.querySelectorAll("[data-player-time-progress]"),k=i.getAttribute("data-player-update-size"),$=i.getAttribute("data-player-lazy"),B=$==="true",I=$==="meta",j=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",U=!1;j?(h(!0),a.loop=!0):h(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var F=!!a.canPlayType("application/vnd.apple.mpegurl"),S=F&&"ManagedMediaSource"in window,u=!!(window.Hls&&Hls.isSupported())&&!S;if(k==="true"&&!I&&!B){var m=a.preload;a.preload="metadata";var E=function(){b(i,k,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",E),a.preload=m||""};n(a,"loadedmetadata",E,{once:!0}),a.src=d}function X(){f(d,u).then(function(W){W.width&&W.height&&b(i,k,W.width,W.height),O.length&&isFinite(W.duration)&&W.duration>0&&s(O,o(W.duration)),g(i,U)})}var N=!1,z=!1,G="";function H(){if(!N){if(N=!0,i._hls){try{i._hls.destroy()}catch(J){}i._hls=null}if(S)a.preload=B||I?"auto":a.preload,a.src=d,n(a,"loadedmetadata",function(){g(i,U),k==="true"&&b(i,k,a.videoWidth,a.videoHeight),O.length&&s(O,o(a.duration))},{once:!0});else if(u){var W=new Hls({maxBufferLength:10});W.attachMedia(a),W.on(Hls.Events.MEDIA_ATTACHED,function(){W.loadSource(d)}),W.on(Hls.Events.MANIFEST_PARSED,function(){if(g(i,U),k==="true"){var J=W.levels||[],ae=c(J);ae&&ae.width&&ae.height&&b(i,k,ae.width,ae.height)}}),W.on(Hls.Events.LEVEL_LOADED,function(J,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&O.length&&s(O,o(ae.details.totalduration))}),i._hls=W}else a.src=d}}I?(X(),a.preload="none"):B?a.preload="none":H();function ne(){z=!0,a.paused||a.ended?((B||I)&&!N&&H(),U=!0,G="",w("loading"),l(a)):(G="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Z(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():Z()}n(document,"fullscreenchange",function(){P(se())}),n(document,"webkitfullscreenchange",function(){P(se())}),n(a,"webkitbeginfullscreen",function(){P(!0)}),n(a,"webkitendfullscreen",function(){P(!1)}),n(i,"click",function(W){var J=W.target.closest("[data-player-control]");if(!(!J||!i.contains(J))){var ae=J.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){O.length&&s(O,o(a.duration)),y.length&&s(y,o(a.currentTime))}n(a,"timeupdate",be),n(a,"loadedmetadata",function(){be(),v(i,k,a)}),n(a,"loadeddata",function(){v(i,k,a)}),n(a,"playing",function(){v(i,k,a)}),n(a,"durationchange",be);var ze;function Le(){if(a.duration){var W=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+W)+"%)"),M&&(M.style.left=W+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function Q(){if(!(!D||!a.duration||!a.buffered.length)){var W=a.buffered.end(a.buffered.length-1),J=W/a.duration*100;D.style.transform="translateX("+(-100+J)+"%)"}}if(n(a,"progress",Q),n(a,"loadedmetadata",Q),n(a,"durationchange",Q),n(a,"play",function(){A(!0),cancelAnimationFrame(ze),te(),w("playing")}),n(a,"playing",function(){U=!1,w("playing")}),n(a,"pause",function(){U=!1,cancelAnimationFrame(ze),Le(),w("paused")}),n(a,"waiting",function(){w("loading")}),n(a,"canplay",function(){g(i,U)}),n(a,"ended",function(){U=!1,cancelAnimationFrame(ze),Le(),w("paused"),A(!1)}),L){let W=function(x){ce||(ce=L.getBoundingClientRect());var K=(x-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},J=function(x){if(a.duration){var K=x*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),M&&(M.style.left=K+"%"),y.length&&s(y,o(x*a.duration))}},ae=function(x){a.duration&&(x-Te<we||(Te=x,a.currentTime=xe))},Xe=function(x){if(a.duration){_=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=L.getBoundingClientRect();var K=W(x.clientX);xe=K*a.duration,J(K),ae(performance.now()),L.setPointerCapture&&L.setPointerCapture(x.pointerId),window.addEventListener("pointermove",V,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),x.preventDefault()}},V=function(x){if(_){var K=W(x.clientX);xe=K*a.duration,J(K),ae(performance.now()),x.preventDefault()}},Y=function(){_&&(_=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?l(a):(Le(),be()),window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",Y))};var _=!1,ue=!1,xe=0,Te=0,we=180,ce=null;n(window,"resize",function(){_||(ce=null)}),n(L,"pointerdown",Xe,{passive:!1}),M&&n(M,"pointerdown",Xe,{passive:!1})}var me,de=3e3;function De(W){i.getAttribute("data-player-hover")!==W&&i.setAttribute("data-player-hover",W)}function Ge(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),Ge()}n(i,"pointerdown",Ae),n(document,"fullscreenchange",Ae),n(document,"webkitfullscreenchange",Ae);var He=!1;function ge(W){var J=i.getBoundingClientRect();W.clientX>=J.left&&W.clientX<=J.right&&W.clientY>=J.top&&W.clientY<=J.bottom&&Ae()}if(n(i,"pointerenter",function(){Ae(),He||(He=!0,n(window,"pointermove",ge,{passive:!0}))}),n(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),j){var Ue=new IntersectionObserver(function(W){W.forEach(function(J){var ae=J.isIntersecting&&J.intersectionRatio>0;ae?((B||I)&&!N&&H(),a.paused?(G="",U=!0,w("loading"),l(a)):w("playing")):!a.paused&&!a.ended&&(G="io",a.pause(),w("paused"))})},{threshold:.1});Ue.observe(i)}t.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(W){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(W){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var d=Math.floor(i),a=Math.floor(d/3600),w=Math.floor(d%3600/60),h=d%60;return a>0?a+":"+e(w)+":"+e(h):e(w)+":"+e(h)}function s(i,d){i.forEach(function(a){a.textContent=d})}function c(i){return!i||!i.length?null:i.reduce(function(d,a){return(a.width||0)>(d.width||0)?a:d},i[0])}function l(i){var d=i.play();d&&typeof d.then=="function"&&d.catch(function(){})}function g(i,d){!d&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function b(i,d,a,w){if(!(d!=="true"||!a||!w)){var h=i.querySelector("[data-player-before]");h&&(h.style.paddingTop=w/a*100+"%")}}function v(i,d,a){if(d==="true"){var w=i.querySelector("[data-player-before]");if(w){var h=w.style.paddingTop&&w.style.paddingTop!=="0%";!h&&a.videoWidth&&a.videoHeight&&b(i,d,a.videoWidth,a.videoHeight)}}}function p(i,d){try{return new URL(d,i).toString()}catch(a){return d}}function f(i,d){return new Promise(function(a){if(d&&window.Hls&&Hls.isSupported())try{var w=new Hls,h={width:0,height:0,duration:NaN},P=!1,A=!1;w.on(Hls.Events.MANIFEST_PARSED,function(D,M){var O=M&&M.levels||w.levels||[],y=c(O);y&&y.width&&y.height&&(h.width=y.width,h.height=y.height,P=!0)}),w.on(Hls.Events.LEVEL_LOADED,function(D,M){M&&M.details&&isFinite(M.details.totalduration)&&(h.duration=M.details.totalduration,A=!0)}),w.on(Hls.Events.ERROR,function(){try{w.destroy()}catch(D){}a(h)}),w.on(Hls.Events.LEVEL_LOADED,function(){try{w.destroy()}catch(D){}a(h)}),w.loadSource(i);return}catch(D){a({width:0,height:0,duration:NaN});return}function L(D){for(var M=D.split(/\r?\n/),O=0,y=0,k=null,$=null,B=0;B<M.length;B++){var I=M[B];if(I.indexOf("#EXT-X-STREAM-INF:")===0)$=I;else if($&&I&&I[0]!=="#"){k||(k=I.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec($);if(j){var oe=parseInt(j[1],10),U=parseInt(j[2],10);oe>O&&(O=oe,y=U)}$=null}}return{bestW:O,bestH:y,media:k}}function C(D){for(var M=0,O=/#EXTINF:([\d.]+)/g,y;y=O.exec(D);)M+=parseFloat(y[1]);return M}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(D){if(!D.ok)throw new Error("master");return D.text()}).then(function(D){var M=L(D);if(!M.media){a({width:M.bestW||0,height:M.bestH||0,duration:NaN});return}var O=p(i,M.media);return fetch(O,{credentials:"omit",cache:"no-store"}).then(function(y){if(!y.ok)throw new Error("media");return y.text()}).then(function(y){a({width:M.bestW||0,height:M.bestH||0,duration:C(y)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(i){i()}),t=[]}}var $r="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Kr="(min-width: 768px)";function Un(r){if(!r.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=Wt(r),n=Hn(r);else{let e=!1;return ft($r).catch(function(){}).then(function(){e||(t=Wt(r),n=Hn(r))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function Hn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let o="",s=!1,c,l,g,b,v,p,f="",i="",d="",a=(m,E=r)=>E.querySelector(m),w=m=>a(`[data-mini-showreel-lightbox="${m}"]`),h=m=>a(`[data-mini-showreel-player="${m}"]`),P=m=>m.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",m)||m,A=(m,E)=>{let X=m.width,N=X/E;return N>m.height&&(N=m.height,X=N*E),{left:m.left+(m.width-X)/2,top:m.top+(m.height-N)/2,width:X,height:N}},L=m=>{let E=P(m).getBoundingClientRect(),X=m.getBoundingClientRect(),N=X.width>0&&X.height>0?X.width/X.height:16/9;return A(E,N)},C=(m,E)=>gsap.set(m,{position:"fixed",left:E.left,top:E.top,width:E.width,height:E.height,margin:0,x:0,y:0});function D(m){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(E=>E.setAttribute("data-mini-showreel-status",m))}function M(){i=(c==null?void 0:c.style.zIndex)||"",d=(l==null?void 0:l.style.zIndex)||"",c&&(c.style.zIndex=String(e)),l&&(l.style.zIndex=String(e))}function O(){c&&(c.style.zIndex=i),l&&(l.style.zIndex=d)}function y(m){let E=h(m);if(!E)return;let X=E.querySelector("[data-bunny-player-init]"),N=E.querySelector("video");if(N){if(X){let z=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');z&&(N.paused||N.ended)&&z.click();return}try{N.play()}catch(z){}}}function k(m){let E=h(m);if(!E)return;let X=E.querySelector("[data-bunny-player-init]"),N=E.querySelector("video");N&&(N.muted=!0,X&&X.setAttribute("data-player-muted","true"),(N.paused||N.ended)&&y(m))}function $(){O(),o="",s=!1,c=l=g=b=v=p=null,f="",i="",d="",pe.start()}function B(m){if(!m||s||(c=w(m),l=h(m),!c||!l)||(g=a("[data-mini-showreel-target]",c),!g))return;o=m,s=!0,pe.stop(),l.dataset.flipId=o,f=l.style.cssText||"",b=l.parentElement,v=l.nextSibling,M(),D("active"),y(o);let E=Flip.getState(l),X=L(g);c.appendChild(l),C(l,X),p=Flip.from(E,{duration:t,ease:n,absolute:!0,scale:!1})}function I(m){!s||!l||m&&m!==o||(k(o),D("not-active"),p&&p.kill(),p=Flip.fit(l,b,{duration:t,ease:n,scale:!1,onComplete:()=>{b.insertBefore(l,v),l.style.cssText=f,$()}}))}function j(){!s||!l||(p&&p.kill(),k(o),D("not-active"),b.insertBefore(l,v),l.style.cssText=f,$())}function oe(){!s||!l||!g||C(l,L(g))}function U(m){let E=m.target.closest("[data-mini-showreel-open]");E&&(m.preventDefault(),B(E.getAttribute("data-mini-showreel-open")||""))}function F(m){let E=m.target.closest("[data-mini-showreel-close]");E&&(m.preventDefault(),I(E.getAttribute("data-mini-showreel-close")||""))}function S(m){m.key==="Escape"&&I("")}let u=gsap.matchMedia();return u.add(Kr,function(){return r.addEventListener("click",U),document.addEventListener("click",F),window.addEventListener("keydown",S),window.addEventListener("resize",oe),function(){j(),r.removeEventListener("click",U),document.removeEventListener("click",F),window.removeEventListener("keydown",S),window.removeEventListener("resize",oe)}}),function(){u.revert(),j()}}var Ie=1920,Oe=1080,Nt="#E5E5E5",Xt="#000000",_n="http://www.w3.org/2000/svg";function On(r){let t=r.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(_n,"svg");n.setAttribute("viewBox",`0 0 ${Ie} ${Oe}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(u,m)=>{let E=document.createElementNS(_n,u);return E.setAttribute("fill",m),n.appendChild(E),E},o=e("polygon",Nt),s=e("polygon",Xt),c=e("rect",Xt),l=e("rect",Nt),g=e("rect",Nt),b=e("rect",Xt);[c,l,g,b].forEach(u=>u.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let v=(u,m,E,X,N)=>{u.setAttribute("x",m),u.setAttribute("y",E),u.setAttribute("width",Math.max(0,X)),u.setAttribute("height",Math.max(0,N))},p={x:Ie*(2/3),y:Oe*(1/3)},f=.1,i=.9,d={x:p.x,y:p.y},a={x:p.x,y:p.y},w={x:p.x,y:p.y},h=!1,P=()=>gsap.to(w,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:P}),A=()=>gsap.to(w,{y:gsap.utils.random(Oe*.193,Oe*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:A});P(),A();function L(){let u=gsap.utils.clamp(Ie*f,Ie*i,d.x),m=Ie-u,E=gsap.utils.clamp(Oe*f,Oe*i,d.y),X=Oe-E;o.setAttribute("points",`0,${E} ${u},0 ${Ie},${E} ${Ie},${Oe} 0,${Oe}`),s.setAttribute("points",`${Ie},${E} ${u},0 ${u},${E}`),v(c,0,E,u,X);let N=u*.25,z=X*(2/3);v(l,u/2-N/2,E+X-z,N,z),v(g,u,E,m,X);let G=m*.5,H=X/3;v(b,u+m/2-G/2,E+X/2-H/2,G,H)}let C=.1,D=.03;function M(){let m=1-Math.pow(1-(h?C:D),gsap.ticker.deltaRatio(60)),E=h?a:w;d.x+=(E.x-d.x)*m,d.y+=(E.y-d.y)*m,L()}let O=(u,m)=>{let E=t.getBoundingClientRect();!E.width||!E.height||(a.x=gsap.utils.clamp(0,Ie,(u-E.left)/E.width*Ie),a.y=gsap.utils.clamp(0,Oe,(m-E.top)/E.height*Oe),h=!0)},y=()=>{h=!1},k=(u,m)=>{let E=t.getBoundingClientRect();u>=E.left&&u<=E.right&&m>=E.top&&m<=E.bottom?O(u,m):y()},B=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Ne(k):null,I=u=>{let m=u.touches[0];m&&O(m.clientX,m.clientY)},j={passive:!0};t.addEventListener("touchstart",I,j),t.addEventListener("touchmove",I,j),t.addEventListener("touchend",y,j),t.addEventListener("touchcancel",y,j);let oe=!1,U=()=>{oe||(oe=!0,gsap.ticker.add(M))},F=()=>{oe&&(oe=!1,gsap.ticker.remove(M))},S=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:u=>u.isActive?U():F()});return L(),U(),function(){F(),S.kill(),gsap.killTweensOf(w),B&&B(),t.removeEventListener("touchstart",I,j),t.removeEventListener("touchmove",I,j),t.removeEventListener("touchend",y,j),t.removeEventListener("touchcancel",y,j),n.remove()}}var Zr="http://www.w3.org/2000/svg";var jr=4.1343749999999995,Jr="#AFAFAF",Qr="#000000",eo=5e3,to=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],no=0,Vn=(r,t)=>{if(r<0||t<0||r>=20||t>=20)return!1;let n=20/2;return Math.hypot(r+.5-n,t+.5-n)<=n},qe=(r,t)=>{let n=document.createElementNS(Zr,r);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function Bn(r){let t=r.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let o="pulse-dots-liquid-"+ ++no;e.setAttribute("data-pulse-dots-paused","");let s=qe("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let c=qe("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});c.append(qe("feGaussianBlur",{in:"SourceGraphic",stdDeviation:jr.toFixed(2)}),qe("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let l=qe("defs",{});l.appendChild(c);let g=qe("rect",{width:1e3,height:1e3,fill:Jr}),b=qe("g",{filter:`url(#${o})`,fill:Qr});for(let p=0;p<20;p++)for(let f=0;f<20;f++){if(!Vn(f,p))continue;let i=to.filter(P=>Vn(f+P.dx,p+P.dy)),d=i[Math.floor(Math.random()*i.length)],a=185+f*31.5+27.5625/2,w=185+p*31.5+27.5625/2,h=qe("g",{transform:`rotate(${d.deg} ${a} ${w})`});h.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*eo)}ms`),h.append(qe("circle",{class:"pulse-dots__dot is--first",cx:a,cy:w,r:27.5625/2}),qe("circle",{class:"pulse-dots__dot is--last",cx:a,cy:w,r:27.5625/2})),b.appendChild(h)}s.append(l,g,b),e.appendChild(s);let v=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:p=>e.toggleAttribute("data-pulse-dots-paused",!p.isActive)});e.toggleAttribute("data-pulse-dots-paused",!v.isActive),n.push(()=>{v.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>n.forEach(e=>e())}var Mt=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,qn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Gn=`#version 300 es
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
}`,Wn=[`#version 300 es
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
}`],Nn=`#version 300 es
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
}`,Xn=`#version 300 es
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
}fragColor = color;}`,Yn=`#version 300 es
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
}`,$n=[`#version 300 es
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
fragColor = color;}`],Kn=[`#version 300 es
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
}`],Zn=`#version 300 es
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
}`;var Yt=60,oo=1.5,ao=1,jn=150,$t=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Jn(r){let t=r.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function c(z,G){let H=e.createShader(z);return e.shaderSource(H,G),e.compileShader(H),H}let l=[];function g(z,G=qn){let H=e.createProgram(),ne=c(e.VERTEX_SHADER,G),re=c(e.FRAGMENT_SHADER,z);e.attachShader(H,ne),e.attachShader(H,re),e.bindAttribLocation(H,0,"aVertexPosition"),e.bindAttribLocation(H,1,"aTextureCoord"),e.linkProgram(H);let se={p:H,v:ne,f:re,loc:{}};return l.push(se),se}function b(z){let{p:G,v:H,f:ne}=z;e.getProgramParameter(G,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(G),e.getShaderInfoLog(H),e.getShaderInfoLog(ne));let re=e.getProgramParameter(G,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let Z=e.getActiveUniform(G,se);z.loc[Z.name]=e.getUniformLocation(G,Z.name)}e.deleteShader(H),e.deleteShader(ne)}let v={bg:g(Gn,Mt),shapes:Wn.map(z=>g(z,Nn)),trailSim:g(Yn,Mt),trail:g(Xn),blur:$n.map(z=>g(z)),bloom:Kn.map(z=>g(z)),gmap:g(Zn,Mt)},p=e.createVertexArray();e.bindVertexArray(p);let f=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let d=[];function a(z,G,H=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),H&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,z,G,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,z,G,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:z,h:G};return d.push(se),se}function w(){d.forEach(z=>{e.deleteTexture(z.tex),e.deleteFramebuffer(z.fb)}),d.length=0}function h(z,G,H,ne){e.useProgram(z.p);let re=G?G.w:n.width,se=G?G.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,G?G.fb:null),e.viewport(0,0,re,se);let Z=z.loc;Z.uMVMatrix&&e.uniformMatrix4fv(Z.uMVMatrix,!1,$t),Z.uPMatrix&&e.uniformMatrix4fv(Z.uPMatrix,!1,$t),Z.uTextureMatrix&&e.uniformMatrix4fv(Z.uTextureMatrix,!1,$t),Z.uResolution&&e.uniform2f(Z.uResolution,re,se),Z.uArtboardResolution&&e.uniform2f(Z.uArtboardResolution,1920,1920),Z.uAspectRatio&&e.uniform1f(Z.uAspectRatio,1),Z.uMousePos&&e.uniform2f(Z.uMousePos,P.x,P.y),Z.uIsMask&&e.uniform1i(Z.uIsMask,0),Z.uParentTrackMouse&&e.uniform1f(Z.uParentTrackMouse,0);let Pe=0;Object.keys(H).forEach(he=>{Z[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,H[he].tex),e.uniform1i(Z[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!Z[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(Z[he],be[0],be[1]):e.uniform1f(Z[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let P={x:.5,y:.5},A={x:.5,y:.5},L=0,C=null,D=0;function M(){w();let z=Math.min(oo,window.devicePixelRatio||1),G=Math.max(1,Math.round(t.clientWidth*z)),H=Math.max(1,Math.round(t.clientHeight*z));n.width=G,n.height=H;let ne=Z=>[Math.max(1,Math.round(G*Z)),Math.max(1,Math.round(H*Z))];C={a:a(G,H),b:a(G,H),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(G,H),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(G,H)},h(v.bg,C.a,{});let re=C.a,se=C.b;v.shapes.forEach(Z=>{h(Z,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,D=0}function O(){if(!C)return;let z=C.pp[D],G=C.pp[1-D];h(v.trailSim,G,{uPingPongTexture:z},{uTime:L,uPreviousMousePos:[A.x,A.y]}),D=1-D,h(v.trail,C.trail,{uTexture:C.base,uPingPongTexture:G}),h(v.blur[0],C.blur1,{uTexture:C.trail}),h(v.blur[1],C.blur2,{uTexture:C.blur1}),h(v.blur[2],C.blur3,{uTexture:C.blur2}),h(v.blur[3],C.blur4,{uTexture:C.blur3});let H=C.blur4;h(v.bloom[0],C.bth,{uTexture:H}),h(v.bloom[1],C.bd1,{uTexture:C.bth}),h(v.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:H}),h(v.bloom[3],C.bs1,{uTexture:C.bd2}),h(v.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:H}),h(v.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:H}),h(v.gmap,null,{uTexture:C.bloom},{uTime:0}),A.x=P.x,A.y=P.y}let y=jn,$=Ne((z,G)=>{let H=n.getBoundingClientRect();!H.width||!H.height||(P.x=(z-H.left)/H.width,P.y=1-(G-H.top)/H.height,y=0,U())}),B=null,I=0,j=!1;function oe(z){if(!j||y>=jn){B=null;return}if(B=requestAnimationFrame(oe),z-I<1e3/Yt-1)return;let G=I?Math.min(z-I,100):1e3/Yt;I=z,L+=ao*(G/(1e3/Yt)),O(),y++}function U(){m&&j&&!B&&(A.x=P.x,A.y=P.y,I=0,B=requestAnimationFrame(oe))}let F=new IntersectionObserver(([z])=>{j=z.isIntersecting,j?U():B&&(cancelAnimationFrame(B),B=null)});F.observe(t);let S=null,u=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(()=>{m&&(M(),O())},60)});u.observe(t);let m=!1,E=null;function X(){E=null,l.forEach(b),m=!0,M(),O()}function N(){l.every(z=>e.getProgramParameter(z.p,s.COMPLETION_STATUS_KHR))?X():E=requestAnimationFrame(N)}return s?E=requestAnimationFrame(N):X(),function(){E&&cancelAnimationFrame(E),B&&cancelAnimationFrame(B),B=null,clearTimeout(S),F.disconnect(),u.disconnect(),$(),w(),l.forEach(H=>e.deleteProgram(H.p)),e.deleteBuffer(f),e.deleteBuffer(i),e.deleteVertexArray(p);let G=e.getExtension("WEBGL_lose_context");G&&G.loseContext(),n.remove()}}var io="#BBC0C8",so="#FFFFFF";var Kt='"Suisseintl Book", Arial, sans-serif';var Qn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],lo=3,co=1.325,ht=5,uo=.4,er=20,vo=2;function tr(r){let t=r.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),o=s=>{let c=(s%ht+ht)%ht/ht;return c<.4?1-e(c/.4):c<.6?0:e((c-.6)/.4)};return t.forEach(s=>{let c=(s.getAttribute("data-text")||"").trim();if(!c)return;let l=Array.from(Array(lo).fill(c).join(" ").toUpperCase()),g=window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=document.createElement("canvas");b.setAttribute("aria-hidden","true"),Object.assign(b.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(b);let v=b.getContext("2d"),p=[],f=0,i=new Map,d=2;function a(){v.font=`24px ${Kt}`,p=l.map(I=>v.measureText(I).width),f=(3363-p.reduce((I,j)=>I+j,0))/(l.length-1)}let w=null;function h(){i=new Map,v.font=`24px ${Kt}`;let B=24,I=24*.35,j=[...new Set(l)].filter(S=>S!==" ").map(S=>({ch:S,w:v.measureText(S).width})),oe=Math.ceil((B+I+d*2)*P),U=0;j.forEach(S=>{S.sx=U,S.sw=Math.ceil((S.w+d*2)*P),U+=S.sw+2}),w=document.createElement("canvas"),w.width=Math.max(1,U),w.height=Math.max(1,oe);let F=w.getContext("2d");F.font=`${24*P}px ${Kt}`,F.fillStyle=so,F.textBaseline="alphabetic",j.forEach(S=>{F.fillText(S.ch,S.sx+d*P,(d+B)*P),i.set(S.ch,{sx:S.sx,sw:S.sw,x:-S.w/2-d,y:-B-d,w:S.sw/P,h:oe/P})})}let P=1;function A(){let B=Math.min(vo,window.devicePixelRatio||1),I=s.clientWidth;b.width=Math.max(1,Math.round(I*B)),b.height=Math.max(1,Math.round(s.clientHeight*B)),P=b.width/1920}let L=0;function C(){v.setTransform(1,0,0,1,0,0),v.fillStyle=io,v.fillRect(0,0,b.width,b.height);let B=g?0:e(L%er/er)*Math.PI*2;Qn.forEach((I,j)=>{let oe=Qn.length-1-j,U=g?0:o(L-ht+oe*uo),F=f+U*co*24,S=2*Math.PI*I.r,u=I.start*Math.PI/180+B,m=0;for(let E=0;E<l.length;E++){let X=p[E];if(m+X>S)break;let N=i.get(l[E]);if(N){let z=u+(m+X/2)/I.r,G=Math.cos(z),H=Math.sin(z);v.setTransform(-H*P,G*P,-G*P,-H*P,(960+I.r*G)*P,(960+I.r*H)*P),v.drawImage(w,N.sx,0,N.sw,w.height,N.x,N.y,N.w,N.h)}m+=X+F}})}let D=(B,I)=>{L+=I/1e3,C()},M=!1,O=()=>{!M&&!g&&(M=!0,gsap.ticker.add(D))},y=()=>{M&&(M=!1,gsap.ticker.remove(D))},k=new ResizeObserver(()=>{A(),h(),C()});k.observe(s),A(),a(),h(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),h(),C()});let $=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:B=>B.isActive?O():y()});$.isActive&&O(),n.push(()=>{y(),$.kill(),k.disconnect(),b.remove()})}),()=>n.forEach(s=>s())}var Qe={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},nr=r=>{let t=Math.sin(r*127.1+311.7)*43758.5453;return t-Math.floor(t)},fo=r=>{let t=Math.floor(r),n=r-t,e=n*n*(3-2*n);return nr(t)*(1-e)+nr(t+1)*e};function rr(r){let t=r.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,o=[],s=null,c=0,l=18,g=0,b=0,v=0,p=-1e5,f=-1e5,i=!1,d=!1;function a(){s&&s.revert(),t.textContent="";let y=getComputedStyle(t);c=parseFloat(y.paddingTop),l=parseFloat(y.lineHeight),g=t.offsetHeight;let k=Math.max(1,Math.floor((g-c-parseFloat(y.paddingBottom))/l)),$=document.createDocumentFragment();for(let B=0;B<k;B++){let I=document.createElement("div");I.className="type-field__row",I.textContent=n,$.appendChild(I)}t.appendChild($),t.setAttribute("aria-hidden","true"),s=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...t.children].map((B,I)=>({chars:B.querySelectorAll(".type-field__char"),cur:o[I]?o[I].cur:0,drawn:0}))}})}function w(y){let k=Math.max(0,Math.min(y.chars.length,Math.round(y.cur)));if(k===y.drawn)return;let $=Math.min(k,y.drawn),B=Math.max(k,y.drawn);for(let I=$;I<B;I++)y.chars[I].style.visibility=I<k?"visible":"hidden";y.drawn=k}function h(y,k){if(!o.length)return;let $=Math.min(k,50)/16.667,B=S=>1-Math.pow(1-S,$),I=pe.scroll,j=Math.min(Math.max(b-I,0),v-I-g);f+=(p-j-c-f)*B(Qe.followEase);let oe=Math.floor(f/l),U=I*.004,F=i&&p>=b-I&&p<=v-I;for(let S=0;S<o.length;S++){let u=o[S],m=u.chars.length,E=Math.abs(S-oe),X=0;if(F){if(E===0)X=m;else if(E<=Qe.radius){let N=1-E/(Qe.radius+1);X=1+Math.min(Qe.maxSide,N*(1-Qe.ragged/2+Qe.ragged*fo(S*1.3+U)))*(m-1)}}u.cur+=(X-u.cur)*B(Qe.ease),w(u)}}function P(){d||(gsap.ticker.add(h),d=!0)}function A(){d&&(gsap.ticker.remove(h),d=!1)}let L=Ne((y,k)=>{f<-1e4&&(f=k),p=k,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let D=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(y){b=y.start+window.innerHeight,v=y.end},onToggle(y){y.isActive?P():A()}});D.isActive&&P();let M,O=()=>{clearTimeout(M),M=setTimeout(()=>{Math.floor((t.offsetHeight-c-parseFloat(getComputedStyle(t).paddingBottom))/l)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",O),function(){A(),clearTimeout(M),L(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",O),D.kill(),s&&s.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var or={duration:.5,ease:"power3"};function ar(r){let t=r.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",or),c=gsap.quickTo(o,"y",or),l=0,g=0,b=!1,v=new ResizeObserver(()=>{l=o.offsetWidth,g=o.offsetHeight});v.observe(o),l=o.offsetWidth,g=o.offsetHeight;let f=Ne((d,a)=>{let w=e.getBoundingClientRect();if(!(d>=w.left&&d<=w.right&&a>=w.top&&a<=w.bottom)){b&&(b=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let P=gsap.utils.clamp(0,Math.max(0,w.width-l),d-w.left-l/2),A=gsap.utils.clamp(0,Math.max(0,w.height-g),a-w.top-g/2);if(!b){b=!0,s(P,P),c(A,A),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(P),c(A)}),i=()=>{b&&(b=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),n.push(()=>{f(),document.documentElement.removeEventListener("mouseleave",i),v.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var po=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],mo=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],ho="#FFFFFF";var ir="power3.out";function sr(r){let t=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let o=[],s=[],c=[];function l(){if(s.length&&s[0].isConnected)return;let p=e.querySelectorAll(":scope > div > div");o=(p.length?[...p]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),c=p.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function g(p){p.textContent=p.dataset.orig,p.style.border=""}let b=()=>{l(),c.forEach(f=>{f.el.style.overflow="visible"});let p=(s.length-1)/2;s.forEach((f,i)=>{gsap.to(f,{color:ho,ease:ir,duration:.3,delay:Math.abs(i-p)*.03,overwrite:"auto",onStart:()=>{let d=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);d==1&&(f.textContent=gsap.utils.random(mo)),a==1&&(f.style.border=`1px solid ${gsap.utils.random(po)}`)}})})},v=()=>{if(!s.length)return;let p=getComputedStyle(e).color,f=(s.length-1)/2;c.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,d)=>{gsap.to(i,{color:p,ease:ir,duration:.3,delay:Math.abs(d-f)*.03,overwrite:"auto",onStart:()=>g(i)})})};e.addEventListener("mouseenter",b),e.addEventListener("mouseleave",v),n.push(()=>{e.removeEventListener("mouseenter",b),e.removeEventListener("mouseleave",v),gsap.killTweensOf(s),o.forEach(p=>p.revert()),o=[],s=[],c=[]})}),()=>n.forEach(e=>e())}function Zt(r,t){let n=null;le(hn(r)),le(On(r)),le(sr(r)),le(kn(r)),le(An(r)),le(gn(r)),le(Un(r));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?xn(r):null,n?le(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(bn(r)),le(wn(r)),le(En(r)),le(Pt(r)),yt(r),le(Sn(r)),n}function Rt(r){le(In(r)),le(Rn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(Tn(r)),le(nt(r.querySelector("[data-type-field]"),()=>rr(r))),le(ar(r)),le(nt(r.querySelector("[data-pulse-dots]"),()=>Bn(r))),le(Jn(r)),le(tr(r)),ScrollTrigger.sort()}var go={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function Ft(r){var t=[];return r.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:o,mask:"lines",autoSplit:!0,reduceWhiteSpace:!1,onSplit:function(s){gsap.set(n,{autoAlpha:1});var c=go[e],l={yPercent:110,duration:c.duration,stagger:c.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?l.delay=.5:l.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(s[e],l)}}))}),function(){t.forEach(function(n){n.revert()})}}var vr=Ar(lr());var cr=window.matchMedia("(prefers-reduced-motion: reduce)"),Qt=.9;function ur(r){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return cr.matches||!n?e.set(r,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:bt,duration:Qt,ease:Be},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Qt,ease:Be},0),e.set(n,{autoAlpha:0}),e)}function en(r,t,n="100vh"){let e=gsap.timeline();return cr.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:n},{y:"0vh",duration:Qt,ease:Be},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),t(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function tn(r,t,n){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),en(r,t,n).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var et=null,nn=!1;function rn(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var dr={sync:!0,beforeLeave(){nn=_t({keepCurtain:!0}),pe.stop(),et||(et=Ut())},beforeEnter(r){et||(et=Ut()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),un(),Zt(r.next.container,!1)},leave(r){return ur(r.current.container,r.next.container)},enter(r){return nn&&(sn(),nn=!1),le(Ft(r.next.container)),en(r.next.container,rn)},afterLeave(){et&&(et(),et=null)},afterEnter(r){dn(r),Rt(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(vr.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let t=new URL(r.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...dr,once(r){let t=document.querySelector("[data-menu-status]");ln(),cn(),t&&(yt(t),Pt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=r.next.container,e=Zt(n,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(Ft(n)),tn(n,function(s){rn(s),Rt(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(Ft(n)),tn(n,function(o){rn(o),Rt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...dr}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

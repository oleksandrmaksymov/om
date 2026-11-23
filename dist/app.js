(()=>{var rr=Object.create;var jt=Object.defineProperty;var or=Object.getOwnPropertyDescriptor;var ar=Object.getOwnPropertyNames;var ir=Object.getPrototypeOf,sr=Object.prototype.hasOwnProperty;var lr=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var cr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of ar(n))!sr.call(r,o)&&o!==t&&jt(r,o,{get:()=>n[o],enumerable:!(e=or(n,o))||e.enumerable});return r};var ur=(r,n,t)=>(t=r!=null?rr(ir(r)):{},cr(n||!r||!r.__esModule?jt(t,"default",{value:r,enumerable:!0}):t,r));var Xn=lr((Gt,Wt)=>{(function(r,n){typeof Gt=="object"&&typeof Wt!="undefined"?Wt.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})(Gt,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,l=s.root,u=l===void 0?document.body:l,S=s.timeout,y=S===void 0?2e3:S,f=s.limit,h=f===void 0?0:f;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=u,this.timeout=y,this.limit=h},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var l=s.target,u=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(l));e.toPrefetch.has(u)&&(e.observer.unobserve(l),e.barba.cache.has(u)?e.barba.cache.update(u,{action:"prefetch"}):e.barba.cache.set(u,e.barba.request(u,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(S){e.logger.error(S)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var l=s,u=e.barba.dom.getHref(l);e.barba.cache.has(u)||e.barba.prevent.checkHref(u)||e.barba.prevent.checkLink(l,{},u)||(e.observer.observe(s),e.toPrefetch.add(u))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var Ft=[];function le(r){typeof r=="function"&&Ft.push(r)}function zt(){let r=Ft,n=ScrollTrigger.getAll();return Ft=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var dr="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",dr);var Oe="parallax",ht=.8;var vr="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",Zt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",Ke=null,Lt=function(){return!1};function Jt(){Ke&&gsap.timeline().to(Ke,{clipPath:Zt,duration:.9,ease:Oe,overwrite:!0},0).fromTo(Ke,{filter:"brightness(1)"},{filter:"brightness("+(1-ht)+")",duration:.9,ease:Oe},0).set(Ke,{clearProps:"filter"})}function Qt(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;Ke=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){Ke&&gsap.to(Ke,{clipPath:o?vr:Zt,duration:.9,ease:Oe,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),Lt=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function en(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function tn(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function nn(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function gt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let l=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){l();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},l)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function xt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),u=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+u}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function tt(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(l=>{e||!l.some(u=>u.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var Ze={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{Ze.x=r.clientX,Ze.y=r.clientY,Ze.known=!0},{passive:!0});function bt(){return Ze}function We(r){let n=e=>r(e.clientX,e.clientY),t=()=>{Ze.known&&r(Ze.x,Ze.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var nt=new Map;function fr(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),l=s.querySelector("svg");if(!l)return new Float32Array(0);var u=parseFloat(l.getAttribute("width")||512),S=parseFloat(l.getAttribute("height")||512),y=l.getAttribute("viewBox");if(y){var f=y.split(/[\s,]+/);u=+f[2],S=+f[3]}var h=Math.min(t/u,t/S)*.9,v=(t-u*h)/2,i=(t-S*h)/2;o.save(),o.translate(v,i),o.scale(h,h),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(g){if(g.tagName==="path"){var z=g.getAttribute("d");z&&o.fill(new Path2D(z))}else g.tagName==="rect"?o.fillRect(+g.getAttribute("x")||0,+g.getAttribute("y")||0,+g.getAttribute("width")||0,+g.getAttribute("height")||0):g.tagName==="circle"&&(o.beginPath(),o.arc(+g.getAttribute("cx")||0,+g.getAttribute("cy")||0,+g.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var p=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),P=0,b=0;b<t*t;b++)p[b*4+3]>30&&(a[P++]=b);if(!P)return new Float32Array(0);for(var A=new Float32Array(n*4),H=0;H<n;H++){var N=a[Math.floor(Math.random()*P)],C=N%t,U=(N-C)/t,T=p[N*4+3]/255,_=H*4;A[_]=(C-t/2)*1.2+(Math.random()-.5)*1.65,A[_+1]=-(U-t/2)*1.2+(Math.random()-.5)*1.65,A[_+2]=(Math.random()-.5)*37*T,A[_+3]=T}return A}function ot(r,n){var t=n+"|"+r;if(!nt.has(t)){var e;try{e=fr(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);nt.size>=4&&nt.delete(nt.keys().next().value),nt.set(t,Promise.resolve(e))}return nt.get(t)}var Pt={};function at(r,n,t){for(var e=Pt[r]||(Pt[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?rn(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var l=o.renderer;return l.setPixelRatio(Math.min(devicePixelRatio,2)),l.setSize(n,t,!1),l.setClearColor(0,1),l.toneMapping=THREE.ACESFilmicToneMapping,l.toneMappingExposure=1.4,l.domElement.style.width="100%",l.domElement.style.height="100%",o}function it(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=Pt[r]||(Pt[r]=[]);if(e.length>=1){rn(n);return}t.setSize(1,1,!1),e.push(n)}function rn(r){r.sim&&r.sim.dispose(),r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var pr=.03,mr=.95,hr=.005,rt=Math.PI*2,gr="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",xr=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel, tTgt, tP1, tP2;","uniform float time, gravity, wind, friction;","uniform float mouseOn, radius, mouseVelLen; uniform vec3 mousePos; uniform vec2 mouseVel;","varying vec2 vUv;","void main(){","  vec3 p = texture2D(tPos, vUv).xyz; vec3 v = texture2D(tVel, vUv).xyz;","  vec4 T = texture2D(tTgt, vUv); vec4 a = texture2D(tP1, vUv); vec4 b = texture2D(tP2, vUv);","  v.x += sin(time*0.4 + a.x)*0.008 + sin(time*1.1 + a.z)*0.003;","  v.y += cos(time*0.35 + a.y)*0.008 + sin(time*0.9 + a.w)*0.004;","  v.z += sin(time*0.25 + b.x)*0.004;","  v.y -= gravity*0.06;","  v.x += sin(time*0.25 + p.y*0.008)*wind*0.6;","  v.z += cos(time*0.3 + p.x*0.008)*wind*0.3;","  if (mouseOn > 0.5) {","    vec3 m = p - mousePos; float dsq = dot(m, m);","    if (dsq < radius*radius && dsq > 0.25) {","      float md = sqrt(dsq), norm = md/radius, ps = b.y, sens = 0.6 + ps*0.8;","      float pf = pow(max(1.0 - norm, 0.0), 1.5 + ps), sp = 1.0 + min(mouseVelLen*0.12, 1.0), f = pf*sens*1.2*sp, inv = 1.0/md;","      v.x += m.x*inv*f; v.y += m.y*inv*f; v.z += m.z*inv*f*0.2;","      float mp = 0.02 + ps*0.06;","      v.x += mouseVel.x*pf*mp; v.y += mouseVel.y*pf*mp;","      float scc = pf*0.15;","      v.x += (ps - 0.5)*scc; v.y += (b.z - 0.5)*scc;","    }","  }","  vec3 d = vec3(T.x, T.y + 40.0, T.z) - p; float dist2 = length(d);","  float rb = 0.003 + b.z*0.003, db = 1.0 + min(dist2*0.002, 0.5);","  v += d*(rb*db);","  v *= friction*(0.92 + b.w*0.06);","  gl_FragColor = vec4(v, 1.0);","}"].join(`
`),br=["precision highp float; precision highp sampler2D;","uniform sampler2D tPos, tVel; varying vec2 vUv;","void main(){ gl_FragColor = vec4(texture2D(tPos, vUv).xyz + texture2D(tVel, vUv).xyz, 1.0); }"].join(`
`),yr=["precision highp float; precision highp sampler2D;","uniform sampler2D tSrc; varying vec2 vUv;","void main(){ gl_FragColor = texture2D(tSrc, vUv); }"].join(`
`),Pr=["precision highp sampler2D;","attribute float size; attribute vec2 ref;","uniform sampler2D tPos, tVel, tTgt; uniform float uTime;","varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec3 pos = texture2D(tPos, ref).xyz; vec3 vel = texture2D(tVel, ref).xyz; vec4 T = texture2D(tTgt, ref);","  float d2 = length(pos - T.xyz);","  vColor = color; vAlpha = 0.15 + 0.55*(1.0 - min(d2*0.005, 1.0)) + sin(uTime*1.5 + T.w)*0.05;","  vec4 mvPos = modelViewMatrix * vec4(pos,1.0);","  vDist = -mvPos.z;","  vec3 velW = mat3(modelViewMatrix) * vel;","  float spd = length(velW); vSpeed = min(spd*0.6,1.0);","  float baseSize = size*(400.0/-mvPos.z);","  gl_PointSize = baseSize*(1.0+vSpeed*2.5);","  vStretchDir = spd > 0.001 ? normalize(velW.xy) : vec2(0,1);","  gl_Position = projectionMatrix * mvPos;","}"].join(`
`),Er=["varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;","void main() {","  vec2 c = gl_PointCoord-vec2(0.5);","  float along = dot(c,vStretchDir), perp = length(c-along*vStretchDir);","  float dist = length(vec2(along, perp*(1.0+vSpeed*2.5)));","  if(dist>0.5) discard;","  float glow = exp(-dist*4.0)*0.8, core = smoothstep(0.5,0.0,dist);","  float heat = 1.0+vSpeed*0.6;","  vec3 col = mix(vColor, vColor*1.4*heat, glow+vSpeed*0.3);","  col = mix(vec3(0.02,0.015,0.01), col, exp(-vDist*0.001));","  gl_FragColor = vec4(col, vAlpha*(core+glow*0.5)*mix(1.0,0.7,vSpeed*smoothstep(0.0,0.5,dist)));","}"].join(`
`);function yt(r,n){var t=new THREE.DataTexture(r,n,n,THREE.RGBAFormat,THREE.FloatType);return t.minFilter=t.magFilter=THREE.NearestFilter,t.needsUpdate=!0,t}function st(r,n){if(r.sim!==void 0)return r.sim;var t=r.renderer;if(!t.capabilities.isWebGL2||!t.extensions.get("EXT_color_buffer_float"))return r.sim=null,null;for(var e=Math.ceil(Math.sqrt(n)),o=e*e,s=function(){return new THREE.WebGLRenderTarget(e,e,{type:THREE.FloatType,format:THREE.RGBAFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:!1,stencilBuffer:!1})},l=[s(),s()],u=[s(),s()],S=0,y=new Float32Array(o*4),f=new Float32Array(o*4),h=new Float32Array(n*2),v=0;v<o;v++){var i=v*1.37,p=v*4;y[p]=i%rt,y[p+1]=i*.7%rt,y[p+2]=i*2.3%rt,y[p+3]=i*1.5%rt,f[p]=i*1.1%rt,f[p+1]=(v*2654435761&65535)/65535,f[p+2]=(v*48271&65535)/65535,f[p+3]=(v*16807&65535)/65535,v<n&&(h[v*2]=(v%e+.5)/e,h[v*2+1]=(Math.floor(v/e)+.5)/e)}var a=yt(y,e),P=yt(f,e),b=new Float32Array(o*4),A=yt(b,e),H=new Float32Array(o*4),N=yt(H,e),C=new THREE.Scene,U=new THREE.Camera,T=new THREE.Mesh(new THREE.PlaneGeometry(2,2),null);T.frustumCulled=!1,C.add(T);var _=function(k,R){return new THREE.ShaderMaterial({vertexShader:gr,fragmentShader:k,uniforms:R,depthTest:!1,depthWrite:!1,blending:THREE.NoBlending,toneMapped:!1})},g=_(xr,{tPos:{value:null},tVel:{value:null},tTgt:{value:A},tP1:{value:a},tP2:{value:P},time:{value:0},gravity:{value:pr},wind:{value:hr},friction:{value:mr},mouseOn:{value:0},radius:{value:120},mouseVelLen:{value:0},mousePos:{value:new THREE.Vector3},mouseVel:{value:new THREE.Vector2}}),z=_(br,{tPos:{value:null},tVel:{value:null}}),$=_(yr,{tSrc:{value:null}}),O=new THREE.ShaderMaterial({vertexShader:Pr,fragmentShader:Er,uniforms:{tPos:{value:null},tVel:{value:null},tTgt:{value:A},uTime:{value:0}},transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});function L(k,R){T.material=k,t.setRenderTarget(R),t.render(C,U)}function Z(){O.uniforms.tPos.value=l[S].texture,O.uniforms.tVel.value=u[S].texture}var oe={material:O,refAttribute:function(){return new THREE.BufferAttribute(h,2)},setPoints:function(k,R){H.fill(0),b.fill(0);for(var E=0;E<R;E++){var c=E*4;H[c]=k[c],H[c+1]=k[c+1]+40,H[c+2]=k[c+2],b[c]=k[c],b[c+1]=k[c+1],b[c+2]=k[c+2],b[c+3]=E*.01%rt}N.needsUpdate=!0,A.needsUpdate=!0;var d=t.getRenderTarget();S=0,$.uniforms.tSrc.value=N,L($,l[0]),t.setRenderTarget(u[0]),t.clear(!0,!1,!1),t.setRenderTarget(d),Z()},step:function(k,R){var E=t.getRenderTarget(),c=g.uniforms;c.time.value=k,R?(c.mouseOn.value=1,c.radius.value=R.radius,c.mousePos.value.copy(R.pos),c.mouseVel.value.set(R.vel.x,R.vel.y),c.mouseVelLen.value=R.vel.length()):c.mouseOn.value=0;var d=1-S;c.tPos.value=l[S].texture,c.tVel.value=u[S].texture,L(g,u[d]),z.uniforms.tPos.value=l[S].texture,z.uniforms.tVel.value=u[d].texture,L(z,l[d]),S=d,t.setRenderTarget(E),O.uniforms.uTime.value=k,Z()},dispose:function(){l.concat(u).forEach(function(k){k.dispose()}),[a,P,A,N].forEach(function(k){k.dispose()}),[g,z,$,O].forEach(function(k){k.dispose()}),T.geometry.dispose()}};return r.sim=oe,oe}var Dt={};function vt(r){return Dt[r]||(Dt[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),Dt[r]}function on(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("case",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),t.add(u);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),t.add(S);var y=new THREE.PointLight(5913114,1.2,900);y.position.set(0,200,-300),t.add(y);var f=new THREE.PointLight(16750916,1.3,600);f.position.set(0,-250,200),t.add(f);var h=0,v=0,i=0,p=0,a=!1,P=0,b=0,A=Math.PI*2/6,H=new THREE.Vector2(9999,9999),N=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),T=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,g=!1,z=0,$=0,O=8e4,L=.03,Z=.95,oe=.005,k=12e4,R=null,E,c,d,x,X,W,F=0,q=!1,D=0,ne=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var V=new THREE.BufferGeometry;E=new Float32Array(k*3),c=new Float32Array(k*3),d=new Float32Array(k*3),x=new Float32Array(k*3),X=new Float32Array(k),W=new Float32Array(k),V.setAttribute("position",new THREE.BufferAttribute(E,3)),V.setAttribute("color",new THREE.BufferAttribute(x,3)),V.setAttribute("size",new THREE.BufferAttribute(X,1)),V.setAttribute("alpha",new THREE.BufferAttribute(W,1)),V.setAttribute("velocity",new THREE.BufferAttribute(c,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,m=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;l=st(o,k),l&&V.setAttribute("ref",l.refAttribute());var K=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:m,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(V,K),l&&(R.frustumCulled=!1),t.add(R)}function se(V,Y){return ot(V,Y)}function j(V){F=V.length/4;for(var Y=0;Y<F;Y++){var m=Y*3,K=Y*4,ie=V[K],Ce=V[K+1],Me=V[K+2],Re=V[K+3];E[m]=ie,E[m+1]=Ce+40,E[m+2]=Me,c[m]=c[m+1]=c[m+2]=0,d[m]=ie,d[m+1]=Ce,d[m+2]=Me;var M=ne[Math.floor(Math.random()*ne.length)],B=.7+Math.random()*.4;x[m]=M.r*B,x[m+1]=M.g*B,x[m+2]=M.b*B,X[Y]=1.8+Math.random()*3.8,W[Y]=.3+(Re||.7)*.75}l&&l.setPoints(V,F),R.geometry.setDrawRange(0,F),["position","color","size","alpha"].forEach(function(w){R.geometry.attributes[w].needsUpdate=!0}),q=!0}function Pe(V){return se(V,Math.min(k,O)).then(function(Y){Y.length&&R&&j(Y)})}function he(V){if(!(!q||!F)){if(D+=V,l){l.step(D,g?{pos:U,vel:_,radius:C}:null);return}for(var Y=0;Y<F;Y++){var m=Y*3,K=Y*1.37;if(c[m]+=Math.sin(D*.4+K)*.008+Math.sin(D*1.1+K*2.3)*.003,c[m+1]+=Math.cos(D*.35+K*.7)*.008+Math.sin(D*.9+K*1.5)*.004,c[m+2]+=Math.sin(D*.25+K*1.1)*.004,c[m+1]-=L*.06,c[m]+=Math.sin(D*.25+E[m+1]*.008)*oe*.6,c[m+2]+=Math.cos(D*.3+E[m]*.008)*oe*.3,g){var ie=E[m]-U.x,Ce=E[m+1]-U.y,Me=E[m+2]-U.z,Re=ie*ie+Ce*Ce+Me*Me,M=C*C;if(Re<M&&Re>.25){var B=Math.sqrt(Re),w=B/C,ee=(Y*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-w,1.5+ee),ke=1+Math.min(_.length()*.12,1),we=fe*ve*1.2*ke,Fe=1/B;c[m]+=ie*Fe*we,c[m+1]+=Ce*Fe*we,c[m+2]+=Me*Fe*we*.2;var ye=.02+ee*.06;c[m]+=_.x*fe*ye,c[m+1]+=_.y*fe*ye;var Ge=fe*.15;c[m]+=(ee-.5)*Ge,c[m+1]+=((Y*48271&65535)/65535-.5)*Ge}}var Ve=d[m],Tt=d[m+1]+40,et=d[m+2],lt=Ve-E[m],Xe=Tt-E[m+1],Ye=et-E[m+2],pt=Math.sqrt(lt*lt+Xe*Xe+Ye*Ye),mt=(Y*48271&65535)/65535,At=.003+mt*.003,Ct=1+Math.min(pt*.002,.5),ct=At*Ct;c[m]+=lt*ct,c[m+1]+=Xe*ct,c[m+2]+=Ye*ct;var ut=(Y*16807&65535)/65535,$e=Z*(.92+ut*.06);c[m]*=$e,c[m+1]*=$e,c[m+2]*=$e,E[m]+=c[m],E[m+1]+=c[m+1],E[m+2]+=c[m+2];var dt=Math.sqrt(Math.pow(E[m]-d[m],2)+Math.pow(E[m+1]-d[m+1],2)+Math.pow(E[m+2]-d[m+2],2));W[Y]=.15+.55*(1-Math.min(dt*.005,1))+Math.sin(D*1.5+Y*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var be=new THREE.Matrix4,ze=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Le=new THREE.Vector3;function te(V,Y){var m=s.domElement.getBoundingClientRect();if(!(m.width===0||m.height===0)&&(H.set((V-m.left)/m.width*2-1,-((Y-m.top)/m.height)*2+1),N.setFromCamera(H,e),N.ray.intersectPlane(ze,Le))){T.copy(U),R&&U.copy(Le).applyMatrix4(be.copy(R.matrixWorld).invert()),_.subVectors(U,T);var K=_.length();K>15&&_.multiplyScalar(15/K)}}function Q(V,Y){var m=r.getBoundingClientRect();return V>=m.left&&V<=m.right&&Y>=m.top&&Y<=m.bottom}var I=r.querySelector("#logo-coords"),ue=r.querySelector("#logo-drag-label"),xe=!1;if(!n){var Te=function(V){z=V.clientX,$=V.clientY;var Y=Q(V.clientX,V.clientY);if(Y){g=!0,te(V.clientX,V.clientY);var m=r.getBoundingClientRect(),K=Math.round(V.clientX-m.left),ie=Math.round(V.clientY-m.top);I&&(I.textContent="X: "+K+"PX    Y: "+ie+"PX")}else g=!1,U.set(9999,9999,0);a&&(h+=(V.clientX-P)*.005,i+=(V.clientY-b)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),P=V.clientX,b=V.clientY)},Ee=function(V){Q(V.clientX,V.clientY)&&(a=!0,P=V.clientX,b=V.clientY)},ce=function(){a=!1,h=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2)};window.addEventListener("mousemove",Te),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ce)}function me(){for(var V=4e3,Y=new THREE.BufferGeometry,m=new Float32Array(V*3),K=new Float32Array(V*3),ie=0;ie<V;ie++){m[ie*3]=(Math.random()-.5)*2200,m[ie*3+1]=(Math.random()-.5)*1800,m[ie*3+2]=-200-Math.random()*1800;var Ce=ne[Math.floor(Math.random()*ne.length)],Me=.2+Math.random()*.3;K[ie*3]=Ce.r*Me,K[ie*3+1]=Ce.g*Me,K[ie*3+2]=Ce.b*Me}Y.setAttribute("position",new THREE.BufferAttribute(m,3)),Y.setAttribute("color",new THREE.BufferAttribute(K,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var M=Re.getContext("2d"),B=M.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=B,M.fillRect(0,0,32,32);var w=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(Y,w);return ee.userData={positions:m,count:V},t.add(ee),ee}re();var de=n?null:me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Pe(De);var qe=new THREE.Clock,Ae=!0,He=new IntersectionObserver(function(V){Ae=V[0].isIntersecting,V[0].isIntersecting&&!xe&&!n&&(xe=!0,I&&(I.style.transform="translateY(0)"),ue&&(ue.style.transform="translateY(0)"))},{threshold:.1});He.observe(r);var ge=!1,Ue=null,G=0;function J(){if(ge=!0,clearTimeout(Ue),Ue=setTimeout(function(){ge=!1},150),!n){var V=bt();V.known&&(z=V.x,$=V.y);var Y=Q(z,$);Y?(g=!0,te(z,$)):(g=!1,U.set(9999,9999,0))}}window.addEventListener("scroll",J,{passive:!0});var ae=null;function Ne(){if(ae=requestAnimationFrame(Ne),!!Ae){G++;var V=Math.min(qe.getDelta(),.05),Y=qe.elapsedTime;if(n)v+=A*V;else{var m=h-v;m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2),v+=m*.12,p+=(i-p)*.12}if(R&&(R.rotation.x=p,R.rotation.y=v,R.position.y=-15),de){for(var K=de.userData.positions,ie=0;ie<de.userData.count;ie++)K[ie*3+1]+=Math.sin(Y*.2+ie)*.05,K[ie*3]+=Math.cos(Y*.15+ie*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-v*35*.35,de.position.y=p*28*.35}u.position.x=300+Math.sin(Y*.3)*100,u.position.y=350+Math.cos(Y*.2)*80,S.intensity=2+Math.sin(Y*.5)*.4,f.intensity=.8+Math.sin(Y*.4+1)*.3,!(n&&ge&&G%4!==0)&&(he(V),s.render(t,e))}}return Ne(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",Te),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ce)),window.removeEventListener("scroll",J),clearTimeout(Ue),He.disconnect(),t.traverse(function(V){V.geometry&&V.geometry.dispose()}),it("case",o),R=null}}function an(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=at("card",1080,1080),o=e.renderer,s=null;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var l=new THREE.PointLight(16107370,3,1400);l.position.set(300,350,400),n.add(l);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),n.add(u);var S=new THREE.PointLight(5913114,1.2,900);S.position.set(0,200,-300),n.add(S);var y=new THREE.PointLight(16750916,1.3,600);y.position.set(0,-250,200),n.add(y);var f=0,h=Math.PI*2/6,v=8e4,i=.03,p=.95,a=.005,P=12e4,b=null,A,H,N,C,U,T,_=0,g=!1,z=0,$=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function O(){var te=new THREE.BufferGeometry;A=new Float32Array(P*3),H=new Float32Array(P*3),N=new Float32Array(P*3),C=new Float32Array(P*3),U=new Float32Array(P),T=new Float32Array(P),te.setAttribute("position",new THREE.BufferAttribute(A,3)),te.setAttribute("color",new THREE.BufferAttribute(C,3)),te.setAttribute("size",new THREE.BufferAttribute(U,1)),te.setAttribute("alpha",new THREE.BufferAttribute(T,1)),te.setAttribute("velocity",new THREE.BufferAttribute(H,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`;s=st(e,P),s&&te.setAttribute("ref",s.refAttribute());var ue=s?s.material:e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:I,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));b=new THREE.Points(te,ue),s&&(b.frustumCulled=!1),n.add(b)}function L(te,Q){return ot(te,Q)}function Z(te){_=te.length/4;for(var Q=0;Q<_;Q++){var I=Q*3,ue=Q*4,xe=te[ue],Te=te[ue+1],Ee=te[ue+2],ce=te[ue+3];A[I]=xe,A[I+1]=Te+40,A[I+2]=Ee,H[I]=H[I+1]=H[I+2]=0,N[I]=xe,N[I+1]=Te,N[I+2]=Ee;var me=$[Math.floor(Math.random()*$.length)],de=.7+Math.random()*.4;C[I]=me.r*de,C[I+1]=me.g*de,C[I+2]=me.b*de,U[Q]=1.8+Math.random()*3.8,T[Q]=.3+(ce||.7)*.75}s&&s.setPoints(te,_),b.geometry.setDrawRange(0,_),["position","color","size","alpha"].forEach(function(De){b.geometry.attributes[De].needsUpdate=!0}),g=!0}function oe(te){return L(te,Math.min(P,v)).then(function(Q){Q.length&&b&&Z(Q)})}function k(te){if(!(!g||!_)){if(z+=te,s){s.step(z,null);return}for(var Q=0;Q<_;Q++){var I=Q*3,ue=Q*1.37;H[I]+=Math.sin(z*.4+ue)*.008+Math.sin(z*1.1+ue*2.3)*.003,H[I+1]+=Math.cos(z*.35+ue*.7)*.008+Math.sin(z*.9+ue*1.5)*.004,H[I+2]+=Math.sin(z*.25+ue*1.1)*.004,H[I+1]-=i*.06,H[I]+=Math.sin(z*.25+A[I+1]*.008)*a*.6,H[I+2]+=Math.cos(z*.3+A[I]*.008)*a*.3;var xe=N[I],Te=N[I+1]+40,Ee=N[I+2],ce=xe-A[I],me=Te-A[I+1],de=Ee-A[I+2],De=Math.sqrt(ce*ce+me*me+de*de),qe=(Q*48271&65535)/65535,Ae=.003+qe*.003,He=1+Math.min(De*.002,.5),ge=Ae*He;H[I]+=ce*ge,H[I+1]+=me*ge,H[I+2]+=de*ge;var Ue=(Q*16807&65535)/65535,G=p*(.92+Ue*.06);H[I]*=G,H[I+1]*=G,H[I+2]*=G,A[I]+=H[I],A[I+1]+=H[I+1],A[I+2]+=H[I+2];var J=Math.sqrt(Math.pow(A[I]-N[I],2)+Math.pow(A[I+1]-N[I+1],2)+Math.pow(A[I+2]-N[I+2],2));T[Q]=.15+.55*(1-Math.min(J*.005,1))+Math.sin(z*1.5+Q*.01)*.05}b.geometry.attributes.position.needsUpdate=!0,b.geometry.attributes.alpha.needsUpdate=!0,b.geometry.attributes.velocity.needsUpdate=!0}}O();for(var R=4e3,E=new THREE.BufferGeometry,c=new Float32Array(R*3),d=new Float32Array(R*3),x=0;x<R;x++){c[x*3]=(Math.random()-.5)*2200,c[x*3+1]=(Math.random()-.5)*1800,c[x*3+2]=-200-Math.random()*1800;var X=$[Math.floor(Math.random()*$.length)],W=.2+Math.random()*.3;d[x*3]=X.r*W,d[x*3+1]=X.g*W,d[x*3+2]=X.b*W}E.setAttribute("position",new THREE.BufferAttribute(c,3)),E.setAttribute("color",new THREE.BufferAttribute(d,3));var F=document.createElement("canvas");F.width=F.height=32;var q=F.getContext("2d"),D=q.createRadialGradient(16,16,0,16,16,16);D.addColorStop(0,"rgba(255,255,255,1)"),D.addColorStop(.3,"rgba(255,255,255,0.6)"),D.addColorStop(.7,"rgba(255,255,255,0.15)"),D.addColorStop(1,"rgba(255,255,255,0)"),q.fillStyle=D,q.fillRect(0,0,32,32);var ne=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(F),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),re=new THREE.Points(E,ne);n.add(re);var se='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(se);var j=new THREE.Clock,Pe=!1,he=new IntersectionObserver(function(te){Pe=te[0].isIntersecting},{threshold:0});he.observe(r);var be=r.querySelectorAll("#logo-coords, #logo-drag-label");be.forEach(function(te){te.parentElement.style.display="none"});var ze=null;function Le(){if(ze=requestAnimationFrame(Le),!!Pe){var te=Math.min(j.getDelta(),.05),Q=j.elapsedTime;f+=h*te,b&&(b.rotation.y=f,b.position.y=5,b.scale.setScalar(.85));for(var I=0;I<R;I++)c[I*3+1]+=Math.sin(Q*.2+I)*.05,c[I*3]+=Math.cos(Q*.15+I*.5)*.03;E.attributes.position.needsUpdate=!0,re.rotation.y+=1e-4,re.position.x=-f*35*.35,l.position.x=300+Math.sin(Q*.3)*100,l.position.y=350+Math.cos(Q*.2)*80,u.intensity=2+Math.sin(Q*.5)*.4,y.intensity=.8+Math.sin(Q*.4+1)*.3,k(te),o.render(n,t)}}return Le(),function(){cancelAnimationFrame(ze),he.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),it("card",e),b=null}}var sn="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function ln(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return vt(sn).then(function(){o||(s=t?wr(n):on(n))}),function(){o=!0,s&&s()}}return t?e():tt(n,e)}function cn(r){let n=r.querySelector("#axion-card");if(n)return tt(n,function(){let t=!1,e=null;return vt(sn).then(function(){t||(e=an(n))}),function(){t=!0,e&&e()}})}function wr(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=at("home",1920,1080),s=o.renderer,l=null;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),t.add(u);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),t.add(S);var y=new THREE.PointLight(5913114,1.2,900);y.position.set(0,200,-300),t.add(y);var f=new THREE.PointLight(16750916,1.3,600);f.position.set(0,-250,200),t.add(f);var h=0,v=0,i=0,p=0,a=!1,P=0,b=0,A=Math.PI*2/6,H=new THREE.Vector2(9999,9999),N=new THREE.Raycaster,C=120,U=new THREE.Vector3(9999,9999,0),T=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,g=!1,z=0,$=0,O=8e4,L=.03,Z=.95,oe=.005,k=12e4,R=null,E,c,d,x,X,W,F=0,q=!1,D=!1,ne=0,re=0,se=null,j=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Pe(){var M=new THREE.BufferGeometry;E=new Float32Array(k*3),c=new Float32Array(k*3),d=new Float32Array(k*3),x=new Float32Array(k*3),X=new Float32Array(k),W=new Float32Array(k),M.setAttribute("position",new THREE.BufferAttribute(E,3)),M.setAttribute("color",new THREE.BufferAttribute(x,3)),M.setAttribute("size",new THREE.BufferAttribute(X,1)),M.setAttribute("alpha",new THREE.BufferAttribute(W,1)),M.setAttribute("velocity",new THREE.BufferAttribute(c,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,w=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`;l=st(o,k),l&&M.setAttribute("ref",l.refAttribute());var ee=l?l.material:o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:w,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));R=new THREE.Points(M,ee),l&&(R.frustumCulled=!1),t.add(R)}function he(M,B){return ot(M,B)}function be(M){F=M.length/4;for(var B=0;B<F;B++){var w=B*3,ee=B*4,ve=M[ee],fe=M[ee+1],ke=M[ee+2],we=M[ee+3];E[w]=ve,E[w+1]=fe+40,E[w+2]=ke,c[w]=c[w+1]=c[w+2]=0,d[w]=ve,d[w+1]=fe,d[w+2]=ke;var Fe=j[Math.floor(Math.random()*j.length)],ye=.7+Math.random()*.4;x[w]=Fe.r*ye,x[w+1]=Fe.g*ye,x[w+2]=Fe.b*ye,X[B]=1.8+Math.random()*3.8,W[B]=.3+(we||.7)*.75}l&&l.setPoints(M,F),R.geometry.setDrawRange(0,F),["position","color","size","alpha"].forEach(function(Ge){R.geometry.attributes[Ge].needsUpdate=!0}),q=!0,D=!1,ne=1}function ze(M){return he(M,Math.min(k,O)).then(function(B){B.length&&R&&be(B)})}function Le(M){if(!(!q||!F)){if(re+=M,l){l.step(re,g&&J==="interactive"?{pos:U,vel:_,radius:C}:null);return}for(var B=0;B<F;B++){var w=B*3,ee=B*1.37;if(c[w]+=Math.sin(re*.4+ee)*.008+Math.sin(re*1.1+ee*2.3)*.003,c[w+1]+=Math.cos(re*.35+ee*.7)*.008+Math.sin(re*.9+ee*1.5)*.004,c[w+2]+=Math.sin(re*.25+ee*1.1)*.004,c[w+1]-=L*.06,c[w]+=Math.sin(re*.25+E[w+1]*.008)*oe*.6,c[w+2]+=Math.cos(re*.3+E[w]*.008)*oe*.3,g&&J==="interactive"){var ve=E[w]-U.x,fe=E[w+1]-U.y,ke=E[w+2]-U.z,we=ve*ve+fe*fe+ke*ke,Fe=C*C;if(we<Fe&&we>.25){var ye=Math.sqrt(we),Ge=ye/C,Ve=(B*2654435761&65535)/65535,Tt=.6+Ve*.8,et=Math.pow(1-Ge,1.5+Ve),lt=1+Math.min(_.length()*.12,1),Xe=et*Tt*1.2*lt,Ye=1/ye;c[w]+=ve*Ye*Xe,c[w+1]+=fe*Ye*Xe,c[w+2]+=ke*Ye*Xe*.2;var pt=.02+Ve*.06;c[w]+=_.x*et*pt,c[w+1]+=_.y*et*pt;var mt=et*.15;c[w]+=(Ve-.5)*mt,c[w+1]+=((B*48271&65535)/65535-.5)*mt}}var At=d[w],Ct=d[w+1]+40,ct=d[w+2],ut=At-E[w],$e=Ct-E[w+1],dt=ct-E[w+2],Zn=Math.sqrt(ut*ut+$e*$e+dt*dt),Jn=(B*48271&65535)/65535,Qn=.003+Jn*.003,er=1+Math.min(Zn*.002,.5),Mt=Qn*er;c[w]+=ut*Mt,c[w+1]+=$e*Mt,c[w+2]+=dt*Mt;var tr=(B*16807&65535)/65535,Rt=Z*(.92+tr*.06);c[w]*=Rt,c[w+1]*=Rt,c[w+2]*=Rt,E[w]+=c[w],E[w+1]+=c[w+1],E[w+2]+=c[w+2];var nr=Math.sqrt(Math.pow(E[w]-d[w],2)+Math.pow(E[w+1]-d[w+1],2)+Math.pow(E[w+2]-d[w+2],2));W[B]=.15+.55*(1-Math.min(nr*.005,1))+Math.sin(re*1.5+B*.01)*.05}R.geometry.attributes.position.needsUpdate=!0,R.geometry.attributes.alpha.needsUpdate=!0,R.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),I=new THREE.Vector3;function ue(M,B){var w=s.domElement.getBoundingClientRect();if(!(w.width===0||w.height===0)&&(H.set((M-w.left)/w.width*2-1,-((B-w.top)/w.height)*2+1),N.setFromCamera(H,e),N.ray.intersectPlane(Q,I))){T.copy(U),R&&U.copy(I).applyMatrix4(te.copy(R.matrixWorld).invert()),_.subVectors(U,T);var ee=_.length();ee>15&&_.multiplyScalar(15/ee)}}var xe=null;function Te(){return xe||(xe=r.closest('[data-flip-element="target"]')||r),xe}function Ee(M,B){var w=Te().getBoundingClientRect();return M>=w.left&&M<=w.right&&B>=w.top&&B<=w.bottom}var ce=r.querySelector("#logo-coords"),me=r.querySelector("#logo-drag-label"),de=!1;function De(M){if(z=M.clientX,$=M.clientY,n||J!=="interactive"){g=!1,U.set(9999,9999,0);return}var B=Ee(M.clientX,M.clientY);if(B){g=!0,ue(M.clientX,M.clientY);var w=Te().getBoundingClientRect(),ee=Math.round(M.clientX-w.left),ve=Math.round(M.clientY-w.top);ce&&(ce.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else g=!1,U.set(9999,9999,0);a&&(h+=(M.clientX-P)*.005,i+=(M.clientY-b)*.005,i=Math.max(-Math.PI/2,Math.min(Math.PI/2,i)),P=M.clientX,b=M.clientY)}function qe(M){n||J!=="interactive"||Ee(M.clientX,M.clientY)&&(a=!0,P=M.clientX,b=M.clientY)}function Ae(){n||(a=!1,h=0,i=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",qe),window.addEventListener("mouseup",Ae);function He(){for(var M=4e3,B=new THREE.BufferGeometry,w=new Float32Array(M*3),ee=new Float32Array(M*3),ve=0;ve<M;ve++){w[ve*3]=(Math.random()-.5)*2200,w[ve*3+1]=(Math.random()-.5)*1800,w[ve*3+2]=-200-Math.random()*1800;var fe=j[Math.floor(Math.random()*j.length)],ke=.2+Math.random()*.3;ee[ve*3]=fe.r*ke,ee[ve*3+1]=fe.g*ke,ee[ve*3+2]=fe.b*ke}B.setAttribute("position",new THREE.BufferAttribute(w,3)),B.setAttribute("color",new THREE.BufferAttribute(ee,3));var we=document.createElement("canvas");we.width=we.height=32;var Fe=we.getContext("2d"),ye=Fe.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=ye,Fe.fillRect(0,0,32,32);var Ge=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(we),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Ve=new THREE.Points(B,Ge);return Ve.userData={positions:w,count:M},t.add(Ve),Ve}Pe();var ge=He(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ze(Ue);var G=new THREE.Clock,J="spin",ae=null;function Ne(){if(n){J="spin";return}if(ae===null){var M=document.querySelector(".scaling-element-video");ae=M&&getComputedStyle(M).display!=="none"}if(!ae){J="spin";return}var B=window._flipProgress||0;B>.85?J="interactive":B>.7?J="transition":J="spin"}var V="spin",Y=!0,m=new IntersectionObserver(function(M){Y=M[0].isIntersecting},{threshold:0});m.observe(r);var K=!1,ie=null,Ce=0;function Me(){K=!0,clearTimeout(ie),ie=setTimeout(function(){K=!1},150);var M=bt();M.known&&(z=M.x,$=M.y);var B=Ee(z,$);B?(g=!0,ue(z,$)):(g=!1,U.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(se=requestAnimationFrame(Re),!!Y){Ce++;var M=Math.min(G.getDelta(),.05),B=G.elapsedTime;Ne(),V==="interactive"&&J!=="interactive"&&(g=!1,U.set(9999,9999,0),a=!1);var w=J==="transition"||J==="interactive";if(w&&!de?(de=!0,me&&(me.style.transform="translateY(0)"),ce&&(ce.style.transform="translateY(0)")):!w&&de&&(de=!1,me&&(me.style.transform="translateY(100%)"),ce&&(ce.style.transform="translateY(100%)")),V=J,g&&!Ee(z,$)&&(g=!1,U.set(9999,9999,0)),J==="spin")v+=A*M,p+=(0-p)*.05;else if(J==="transition")v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2),v+=(0-v)*.025,p+=(0-p)*.025;else{var ee=h-v;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),v+=ee*.12,p+=(i-p)*.12}R&&(R.rotation.x=p,R.rotation.y=v,R.scale.setScalar(1),R.position.y=-15);for(var ve=ge.userData.positions,fe=0;fe<ge.userData.count;fe++)ve[fe*3+1]+=Math.sin(B*.2+fe)*.05,ve[fe*3]+=Math.cos(B*.15+fe*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-v*35*.35,ge.position.y=p*28*.35,u.position.x=300+Math.sin(B*.3)*100,u.position.y=350+Math.cos(B*.2)*80,S.intensity=2+Math.sin(B*.5)*.4,f.intensity=.8+Math.sin(B*.4+1)*.3,!(n&&K&&Ce%4!==0)&&(Le(M),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(se),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",qe),window.removeEventListener("mouseup",Ae),window.removeEventListener("scroll",Me),clearTimeout(ie),m.disconnect(),t.traverse(function(M){M.geometry&&M.geometry.dispose()}),it("home",o),R=null}}function un(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),l=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),u=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Oe},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(l.length&&u.set(l,{autoAlpha:1},0),s.length>=2){let S=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),y=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([S.chars,y.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),u.to(S.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),u.to(S.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),u.to(y.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),u.to(y.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return u}function dn(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(f=>{let h=f.parentElement;h&&(f.style.whiteSpace="nowrap",e.has(h)||e.set(h,[]),e.get(h).push(f))});function o(f){let h=getComputedStyle(f);return f.clientWidth-parseFloat(h.paddingLeft)-parseFloat(h.paddingRight)}function s(f,h){if(h<=0)return;let v=parseFloat(getComputedStyle(f).fontSize)||16;for(let i=0;i<5;i++){let p=f.getBoundingClientRect().width;if(p<=0)break;let a=h/p;if(Math.abs(a-1)<.002)break;v*=a,f.style.fontSize=v+"px"}}function l(){e.forEach((f,h)=>{let v=o(h);f.forEach(i=>s(i,v))})}let u=null;function S(){u||(u=requestAnimationFrame(()=>{u=null,l()}))}let y;return window.ResizeObserver&&(y=new ResizeObserver(S),e.forEach((f,h)=>y.observe(h))),window.addEventListener("resize",S),l(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(l),()=>{u&&cancelAnimationFrame(u),y&&y.disconnect(),window.removeEventListener("resize",S),t.forEach(f=>{f.style.whiteSpace="",f.style.fontSize=""})}}var Se={duration:.8,ease:"expo.out"},kt=.08,Sr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},vn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function fn(r,n){var t=(1-n)*100+"%";return r==="left"?"inset(0% 0% 0% "+t+")":r==="up"?"inset("+t+" 0% 0% 0%)":r==="down"?"inset(0% 0% "+t+" 0%)":"inset(0% "+t+" 0% 0%)"}function Tr(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function pn(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",l=o.getAttribute("data-marker-theme")||"#000000",u=o.getAttribute("data-marker-scroll-start")||"top 90%",S=l.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(l).trim()||l,y=vn[s]||vn.right,f=Sr[o.getAttribute("data-highlight-marker-reveal")]||null;f&&(S=f.bar);var h=o.closest("[data-cursor-label]"),v={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,p=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){v.timeline&&v.timeline.kill(),v.scrollTrigger&&v.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(T){T.remove()}),v.listeners.forEach(function(T){T.el.removeEventListener(T.type,T.fn)}),v.listeners=[],i=!1;var P=a.lines,b=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(P.forEach(function(T,_){gsap.set(T,{position:"relative",overflow:"hidden"});var g=Tr(S,y.origin);gsap.set(g,{[y.prop]:0}),T.appendChild(g),f&&(gsap.set(T,{zIndex:0,color:f.text}),gsap.set(g,{zIndex:-1})),b.to(g,{[y.prop]:1,duration:Se.duration,ease:Se.ease},_*kt);var z=function(){i&&(gsap.to(g,{[y.prop]:0,duration:Se.duration,ease:Se.ease}),f&&gsap.to(T,{color:f.hoverText,duration:Se.duration,ease:Se.ease}))},$=function(){i&&(gsap.to(g,{[y.prop]:1,duration:Se.duration,ease:Se.ease}),f&&gsap.to(T,{color:f.text,duration:Se.duration,ease:Se.ease}))};!f&&e&&(T.addEventListener("mouseenter",z),T.addEventListener("mouseleave",$),v.listeners.push({el:T,type:"mouseenter",fn:z},{el:T,type:"mouseleave",fn:$}))}),v.timeline=b,h){b.kill();var A=o.querySelectorAll(".highlight-marker-bar");gsap.set(P,{clipPath:fn(s,0)});var H=function(T){gsap.to(A,{[y.prop]:T,duration:Se.duration,ease:Se.ease,stagger:kt,overwrite:!0}),gsap.to(P,{clipPath:fn(s,T),duration:Se.duration,ease:Se.ease,stagger:kt,overwrite:!0})},N=function(){H(1)},C=function(){H(0)};h.addEventListener("cursorlabel:enter",N),h.addEventListener("cursorlabel:leave",C),v.listeners.push({el:h,type:"cursorlabel:enter",fn:N},{el:h,type:"cursorlabel:leave",fn:C});return}var U=ScrollTrigger.create({trigger:o,start:u,once:!0,onEnter:function(){b.play()}});v.scrollTrigger=U}});v.split=p,t.push(v)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function mn(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),l=r.querySelectorAll("[data-cursor-marquee-text]");if(!l.length)return;let u=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),S=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),y=null,f=h=>{u(h.clientX),S(h.clientY)};return window.addEventListener("pointermove",f,{passive:!0}),l.forEach(h=>{h.addEventListener("mouseenter",()=>{y&&clearTimeout(y);let v=h.getAttribute("data-cursor-marquee-text")||"",i=(v.length||1)/e;s.forEach(p=>{p.textContent=v,p.style.animationPlayState="running",p.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),h.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),y&&clearTimeout(y),y=setTimeout(()=>{s.forEach(v=>{v.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",f),clearTimeout(y),gsap.killTweensOf(o)}}function hn(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let l=s.target;s.isIntersecting?t(l):l.paused||l.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function gn(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(u){window._flipProgress=u.progress}}}),n.forEach(function(u,S){let y=S+1;if(y<n.length){let f=n[y],h=f.getBoundingClientRect(),v=u.getBoundingClientRect(),i=h.top+window.pageYOffset+f.offsetHeight/2,p=v.top+window.pageYOffset+u.offsetHeight/2,a=i-p;e.add(Flip.fit(t,f,{duration:a,ease:"none"}))}})}o();let s,l=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",l),function(){clearTimeout(s),window.removeEventListener("resize",l),e&&e.kill()}}var Ar="150%";function Cr(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var It=new WeakMap;function xn(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(l){return l.textContent})}),o=t.map(Cr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),It.set(r,{wrap:n,lines:t,lineChars:o}),function(){It.delete(r),t.forEach(function(s,l){s.querySelectorAll("textPath").forEach(function(u,S){u.textContent=e[l][S]})})}}function bn(r){let n=It.get(r);if(!n)return function(){};let t=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+Ar,pin:!0,scrub:!0}});return n.lines.forEach(function(e,o){let s=n.lineChars[o];s.length&&t.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}function Ht(r){var n=[];function t(i,p,a,P){i.addEventListener(p,a,P),n.push(function(){i.removeEventListener(p,a,P)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var p=i.getAttribute("data-player-src");if(!p)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(G){}try{a.removeAttribute("src"),a.load()}catch(G){}function P(G){i.getAttribute("data-player-status")!==G&&i.setAttribute("data-player-status",G)}function b(G){a.muted=!!G,i.setAttribute("data-player-muted",a.muted?"true":"false")}function A(G){i.setAttribute("data-player-fullscreen",G?"true":"false")}function H(G){i.setAttribute("data-player-activated",G?"true":"false")}i.hasAttribute("data-player-activated")||H(!1);var N=i.querySelector("[data-player-timeline]"),C=i.querySelector("[data-player-progress]"),U=i.querySelector("[data-player-buffered]"),T=i.querySelector("[data-player-timeline-handle]"),_=i.querySelectorAll("[data-player-time-duration]"),g=i.querySelectorAll("[data-player-time-progress]"),z=i.getAttribute("data-player-update-size"),$=i.getAttribute("data-player-lazy"),O=$==="true",L=$==="meta",Z=i.getAttribute("data-player-autoplay")==="true",oe=i.getAttribute("data-player-muted")==="true",k=!1;Z?(b(!0),a.loop=!0):b(oe),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),Z&&(a.autoplay=!1);var R=!!a.canPlayType("application/vnd.apple.mpegurl"),E=R&&"ManagedMediaSource"in window,c=!!(window.Hls&&Hls.isSupported())&&!E;if(z==="true"&&!L&&!O){var d=a.preload;a.preload="metadata";var x=function(){y(i,z,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",x),a.preload=d||""};t(a,"loadedmetadata",x,{once:!0}),a.src=p}function X(){v(p,c).then(function(G){G.width&&G.height&&y(i,z,G.width,G.height),_.length&&isFinite(G.duration)&&G.duration>0&&s(_,o(G.duration)),S(i,k)})}var W=!1,F=!1,q="";function D(){if(!W){if(W=!0,i._hls){try{i._hls.destroy()}catch(J){}i._hls=null}if(E)a.preload=O||L?"auto":a.preload,a.src=p,t(a,"loadedmetadata",function(){S(i,k),z==="true"&&y(i,z,a.videoWidth,a.videoHeight),_.length&&s(_,o(a.duration))},{once:!0});else if(c){var G=new Hls({maxBufferLength:10});G.attachMedia(a),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(p)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(S(i,k),z==="true"){var J=G.levels||[],ae=l(J);ae&&ae.width&&ae.height&&y(i,z,ae.width,ae.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(J,ae){ae&&ae.details&&isFinite(ae.details.totalduration)&&_.length&&s(_,o(ae.details.totalduration))}),i._hls=G}else a.src=p}}L?(X(),a.preload="none"):O?a.preload="none":D();function ne(){F=!0,a.paused||a.ended?((O||L)&&!W&&D(),k=!0,q="",P("loading"),u(a)):(q="manual",a.pause())}function re(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function se(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function j(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function Pe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function he(){se()||a.webkitDisplayingFullscreen?Pe():j()}t(document,"fullscreenchange",function(){A(se())}),t(document,"webkitfullscreenchange",function(){A(se())}),t(a,"webkitbeginfullscreen",function(){A(!0)}),t(a,"webkitendfullscreen",function(){A(!1)}),t(i,"click",function(G){var J=G.target.closest("[data-player-control]");if(!(!J||!i.contains(J))){var ae=J.getAttribute("data-player-control");ae==="play"||ae==="pause"||ae==="playpause"?ne():ae==="mute"?re():ae==="fullscreen"&&he()}});function be(){_.length&&s(_,o(a.duration)),g.length&&s(g,o(a.currentTime))}t(a,"timeupdate",be),t(a,"loadedmetadata",function(){be(),f(i,z,a)}),t(a,"loadeddata",function(){f(i,z,a)}),t(a,"playing",function(){f(i,z,a)}),t(a,"durationchange",be);var ze;function Le(){if(a.duration){var G=a.currentTime/a.duration*100;C&&(C.style.transform="translateX("+(-100+G)+"%)"),T&&(T.style.left=G+"%")}}function te(){Le(),!a.paused&&!a.ended&&(ze=requestAnimationFrame(te))}function Q(){if(!(!U||!a.duration||!a.buffered.length)){var G=a.buffered.end(a.buffered.length-1),J=G/a.duration*100;U.style.transform="translateX("+(-100+J)+"%)"}}if(t(a,"progress",Q),t(a,"loadedmetadata",Q),t(a,"durationchange",Q),t(a,"play",function(){H(!0),cancelAnimationFrame(ze),te(),P("playing")}),t(a,"playing",function(){k=!1,P("playing")}),t(a,"pause",function(){k=!1,cancelAnimationFrame(ze),Le(),P("paused")}),t(a,"waiting",function(){P("loading")}),t(a,"canplay",function(){S(i,k)}),t(a,"ended",function(){k=!1,cancelAnimationFrame(ze),Le(),P("paused"),H(!1)}),N){let G=function(m){ce||(ce=N.getBoundingClientRect());var K=(m-ce.left)/ce.width;return K<0&&(K=0),K>1&&(K=1),K},J=function(m){if(a.duration){var K=m*100;C&&(C.style.transform="translateX("+(-100+K)+"%)"),T&&(T.style.left=K+"%"),g.length&&s(g,o(m*a.duration))}},ae=function(m){a.duration&&(m-Te<Ee||(Te=m,a.currentTime=xe))},Ne=function(m){if(a.duration){I=!0,ue=!a.paused&&!a.ended,ue&&a.pause(),i.setAttribute("data-timeline-drag","true"),ce=N.getBoundingClientRect();var K=G(m.clientX);xe=K*a.duration,J(K),ae(performance.now()),N.setPointerCapture&&N.setPointerCapture(m.pointerId),window.addEventListener("pointermove",V,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),m.preventDefault()}},V=function(m){if(I){var K=G(m.clientX);xe=K*a.duration,J(K),ae(performance.now()),m.preventDefault()}},Y=function(){I&&(I=!1,i.setAttribute("data-timeline-drag","false"),ce=null,a.currentTime=xe,ue?u(a):(Le(),be()),window.removeEventListener("pointermove",V),window.removeEventListener("pointerup",Y))};var I=!1,ue=!1,xe=0,Te=0,Ee=180,ce=null;t(window,"resize",function(){I||(ce=null)}),t(N,"pointerdown",Ne,{passive:!1}),T&&t(T,"pointerdown",Ne,{passive:!1})}var me,de=3e3;function De(G){i.getAttribute("data-player-hover")!==G&&i.setAttribute("data-player-hover",G)}function qe(){clearTimeout(me),me=setTimeout(function(){De("idle")},de)}function Ae(){De("active"),qe()}t(i,"pointerdown",Ae),t(document,"fullscreenchange",Ae),t(document,"webkitfullscreenchange",Ae);var He=!1;function ge(G){var J=i.getBoundingClientRect();G.clientX>=J.left&&G.clientX<=J.right&&G.clientY>=J.top&&G.clientY<=J.bottom&&Ae()}if(t(i,"pointerenter",function(){Ae(),He||(He=!0,t(window,"pointermove",ge,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(me),He&&(He=!1,window.removeEventListener("pointermove",ge))}),Z){var Ue=new IntersectionObserver(function(G){G.forEach(function(J){var ae=J.isIntersecting&&J.intersectionRatio>0;ae?((O||L)&&!W&&D(),a.paused?(q="",k=!0,P("loading"),u(a)):P("playing")):!a.paused&&!a.ended&&(q="io",a.pause(),P("paused"))})},{threshold:.1});Ue.observe(i)}n.push(function(){if(cancelAnimationFrame(ze),clearTimeout(me),Ue&&Ue.disconnect(),i._hls){try{i._hls.destroy()}catch(G){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(G){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var p=Math.floor(i),a=Math.floor(p/3600),P=Math.floor(p%3600/60),b=p%60;return a>0?a+":"+e(P)+":"+e(b):e(P)+":"+e(b)}function s(i,p){i.forEach(function(a){a.textContent=p})}function l(i){return!i||!i.length?null:i.reduce(function(p,a){return(a.width||0)>(p.width||0)?a:p},i[0])}function u(i){var p=i.play();p&&typeof p.then=="function"&&p.catch(function(){})}function S(i,p){!p&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function y(i,p,a,P){if(!(p!=="true"||!a||!P)){var b=i.querySelector("[data-player-before]");b&&(b.style.paddingTop=P/a*100+"%")}}function f(i,p,a){if(p==="true"){var P=i.querySelector("[data-player-before]");if(P){var b=P.style.paddingTop&&P.style.paddingTop!=="0%";!b&&a.videoWidth&&a.videoHeight&&y(i,p,a.videoWidth,a.videoHeight)}}}function h(i,p){try{return new URL(p,i).toString()}catch(a){return p}}function v(i,p){return new Promise(function(a){if(p&&window.Hls&&Hls.isSupported())try{var P=new Hls,b={width:0,height:0,duration:NaN},A=!1,H=!1;P.on(Hls.Events.MANIFEST_PARSED,function(U,T){var _=T&&T.levels||P.levels||[],g=l(_);g&&g.width&&g.height&&(b.width=g.width,b.height=g.height,A=!0)}),P.on(Hls.Events.LEVEL_LOADED,function(U,T){T&&T.details&&isFinite(T.details.totalduration)&&(b.duration=T.details.totalduration,H=!0)}),P.on(Hls.Events.ERROR,function(){try{P.destroy()}catch(U){}a(b)}),P.on(Hls.Events.LEVEL_LOADED,function(){try{P.destroy()}catch(U){}a(b)}),P.loadSource(i);return}catch(U){a({width:0,height:0,duration:NaN});return}function N(U){for(var T=U.split(/\r?\n/),_=0,g=0,z=null,$=null,O=0;O<T.length;O++){var L=T[O];if(L.indexOf("#EXT-X-STREAM-INF:")===0)$=L;else if($&&L&&L[0]!=="#"){z||(z=L.trim());var Z=/RESOLUTION=(\d+)x(\d+)/.exec($);if(Z){var oe=parseInt(Z[1],10),k=parseInt(Z[2],10);oe>_&&(_=oe,g=k)}$=null}}return{bestW:_,bestH:g,media:z}}function C(U){for(var T=0,_=/#EXTINF:([\d.]+)/g,g;g=_.exec(U);)T+=parseFloat(g[1]);return T}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(U){if(!U.ok)throw new Error("master");return U.text()}).then(function(U){var T=N(U);if(!T.media){a({width:T.bestW||0,height:T.bestH||0,duration:NaN});return}var _=h(i,T.media);return fetch(_,{credentials:"omit",cache:"no-store"}).then(function(g){if(!g.ok)throw new Error("media");return g.text()}).then(function(g){a({width:T.bestW||0,height:T.bestH||0,duration:C(g)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var Mr="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Rr="(min-width: 768px)";function Pn(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Ht(r),t=yn(r);else{let e=!1;return vt(Mr).catch(function(){}).then(function(){e||(n=Ht(r),t=yn(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function yn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,l,u,S,y,f,h,v="",i="",p="",a=(d,x=r)=>x.querySelector(d),P=d=>a(`[data-mini-showreel-lightbox="${d}"]`),b=d=>a(`[data-mini-showreel-player="${d}"]`),A=d=>d.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",d)||d,H=(d,x)=>{let X=d.width,W=X/x;return W>d.height&&(W=d.height,X=W*x),{left:d.left+(d.width-X)/2,top:d.top+(d.height-W)/2,width:X,height:W}},N=d=>{let x=A(d).getBoundingClientRect(),X=d.getBoundingClientRect(),W=X.width>0&&X.height>0?X.width/X.height:16/9;return H(x,W)},C=(d,x)=>gsap.set(d,{position:"fixed",left:x.left,top:x.top,width:x.width,height:x.height,margin:0,x:0,y:0});function U(d){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(x=>x.setAttribute("data-mini-showreel-status",d))}function T(){i=(l==null?void 0:l.style.zIndex)||"",p=(u==null?void 0:u.style.zIndex)||"",l&&(l.style.zIndex=String(e)),u&&(u.style.zIndex=String(e))}function _(){l&&(l.style.zIndex=i),u&&(u.style.zIndex=p)}function g(d){let x=b(d);if(!x)return;let X=x.querySelector("[data-bunny-player-init]"),W=x.querySelector("video");if(W){if(X){let F=X.querySelector('[data-player-control="play"], [data-player-control="playpause"]');F&&(W.paused||W.ended)&&F.click();return}try{W.play()}catch(F){}}}function z(d){let x=b(d);if(!x)return;let X=x.querySelector("[data-bunny-player-init]"),W=x.querySelector("video");W&&(W.muted=!0,X&&X.setAttribute("data-player-muted","true"),(W.paused||W.ended)&&g(d))}function $(){_(),o="",s=!1,l=u=S=y=f=h=null,v="",i="",p="",pe.start()}function O(d){if(!d||s||(l=P(d),u=b(d),!l||!u)||(S=a("[data-mini-showreel-target]",l),!S))return;o=d,s=!0,pe.stop(),u.dataset.flipId=o,v=u.style.cssText||"",y=u.parentElement,f=u.nextSibling,T(),U("active"),g(o);let x=Flip.getState(u),X=N(S);l.appendChild(u),C(u,X),h=Flip.from(x,{duration:n,ease:t,absolute:!0,scale:!1})}function L(d){!s||!u||d&&d!==o||(z(o),U("not-active"),h&&h.kill(),h=Flip.fit(u,y,{duration:n,ease:t,scale:!1,onComplete:()=>{y.insertBefore(u,f),u.style.cssText=v,$()}}))}function Z(){!s||!u||(h&&h.kill(),z(o),U("not-active"),y.insertBefore(u,f),u.style.cssText=v,$())}function oe(){!s||!u||!S||C(u,N(S))}function k(d){let x=d.target.closest("[data-mini-showreel-open]");x&&(d.preventDefault(),O(x.getAttribute("data-mini-showreel-open")||""))}function R(d){let x=d.target.closest("[data-mini-showreel-close]");x&&(d.preventDefault(),L(x.getAttribute("data-mini-showreel-close")||""))}function E(d){d.key==="Escape"&&L("")}let c=gsap.matchMedia();return c.add(Rr,function(){return r.addEventListener("click",k),document.addEventListener("click",R),window.addEventListener("keydown",E),window.addEventListener("resize",oe),function(){Z(),r.removeEventListener("click",k),document.removeEventListener("click",R),window.removeEventListener("keydown",E),window.removeEventListener("resize",oe)}}),function(){c.revert(),Z()}}var Ie=1920,_e=1080,Ut="#E5E5E5",_t="#000000",En="http://www.w3.org/2000/svg";function wn(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(En,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${_e}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(c,d)=>{let x=document.createElementNS(En,c);return x.setAttribute("fill",d),t.appendChild(x),x},o=e("polygon",Ut),s=e("polygon",_t),l=e("rect",_t),u=e("rect",Ut),S=e("rect",Ut),y=e("rect",_t);[l,u,S,y].forEach(c=>c.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let f=(c,d,x,X,W)=>{c.setAttribute("x",d),c.setAttribute("y",x),c.setAttribute("width",Math.max(0,X)),c.setAttribute("height",Math.max(0,W))},h={x:Ie*(2/3),y:_e*(1/3)},v=.1,i=.9,p={x:h.x,y:h.y},a={x:h.x,y:h.y},P={x:h.x,y:h.y},b=!1,A=()=>gsap.to(P,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:A}),H=()=>gsap.to(P,{y:gsap.utils.random(_e*.193,_e*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:H});A(),H();function N(){let c=gsap.utils.clamp(Ie*v,Ie*i,p.x),d=Ie-c,x=gsap.utils.clamp(_e*v,_e*i,p.y),X=_e-x;o.setAttribute("points",`0,${x} ${c},0 ${Ie},${x} ${Ie},${_e} 0,${_e}`),s.setAttribute("points",`${Ie},${x} ${c},0 ${c},${x}`),f(l,0,x,c,X);let W=c*.25,F=X*(2/3);f(u,c/2-W/2,x+X-F,W,F),f(S,c,x,d,X);let q=d*.5,D=X/3;f(y,c+d/2-q/2,x+X/2-D/2,q,D)}let C=.1,U=.03;function T(){let d=1-Math.pow(1-(b?C:U),gsap.ticker.deltaRatio(60)),x=b?a:P;p.x+=(x.x-p.x)*d,p.y+=(x.y-p.y)*d,N()}let _=(c,d)=>{let x=n.getBoundingClientRect();!x.width||!x.height||(a.x=gsap.utils.clamp(0,Ie,(c-x.left)/x.width*Ie),a.y=gsap.utils.clamp(0,_e,(d-x.top)/x.height*_e),b=!0)},g=()=>{b=!1},z=(c,d)=>{let x=n.getBoundingClientRect();c>=x.left&&c<=x.right&&d>=x.top&&d<=x.bottom?_(c,d):g()},O=window.matchMedia("(hover: hover) and (pointer: fine)").matches?We(z):null,L=c=>{let d=c.touches[0];d&&_(d.clientX,d.clientY)},Z={passive:!0};n.addEventListener("touchstart",L,Z),n.addEventListener("touchmove",L,Z),n.addEventListener("touchend",g,Z),n.addEventListener("touchcancel",g,Z);let oe=!1,k=()=>{oe||(oe=!0,gsap.ticker.add(T))},R=()=>{oe&&(oe=!1,gsap.ticker.remove(T))},E=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:c=>c.isActive?k():R()});return N(),k(),function(){R(),E.kill(),gsap.killTweensOf(P),O&&O(),n.removeEventListener("touchstart",L,Z),n.removeEventListener("touchmove",L,Z),n.removeEventListener("touchend",g,Z),n.removeEventListener("touchcancel",g,Z),t.remove()}}var Fr="http://www.w3.org/2000/svg";var zr=4.1343749999999995,Lr="#AFAFAF",Dr="#000000",kr=5e3,Ir=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Hr=0,Sn=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Be=(r,n)=>{let t=document.createElementNS(Fr,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function Tn(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Hr;e.setAttribute("data-pulse-dots-paused","");let s=Be("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let l=Be("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});l.append(Be("feGaussianBlur",{in:"SourceGraphic",stdDeviation:zr.toFixed(2)}),Be("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let u=Be("defs",{});u.appendChild(l);let S=Be("rect",{width:1e3,height:1e3,fill:Lr}),y=Be("g",{filter:`url(#${o})`,fill:Dr});for(let h=0;h<20;h++)for(let v=0;v<20;v++){if(!Sn(v,h))continue;let i=Ir.filter(A=>Sn(v+A.dx,h+A.dy)),p=i[Math.floor(Math.random()*i.length)],a=185+v*31.5+27.5625/2,P=185+h*31.5+27.5625/2,b=Be("g",{transform:`rotate(${p.deg} ${a} ${P})`});b.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*kr)}ms`),b.append(Be("circle",{class:"pulse-dots__dot is--first",cx:a,cy:P,r:27.5625/2}),Be("circle",{class:"pulse-dots__dot is--last",cx:a,cy:P,r:27.5625/2})),y.appendChild(b)}s.append(u,S,y),e.appendChild(s);let f=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:h=>e.toggleAttribute("data-pulse-dots-paused",!h.isActive)});e.toggleAttribute("data-pulse-dots-paused",!f.isActive),t.push(()=>{f.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var Et=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,An=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Cn=`#version 300 es
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
}`,Mn=[`#version 300 es
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
}`],Rn=`#version 300 es
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
}`,Fn=`#version 300 es
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
}fragColor = color;}`,zn=`#version 300 es
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
}`,Ln=[`#version 300 es
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
fragColor = color;}`],Dn=[`#version 300 es
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
}`],kn=`#version 300 es
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
}`;var Vt=60,_r=1.5,Vr=1,In=150,Ot=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Hn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function l(F,q){let D=e.createShader(F);return e.shaderSource(D,q),e.compileShader(D),D}let u=[];function S(F,q=An){let D=e.createProgram(),ne=l(e.VERTEX_SHADER,q),re=l(e.FRAGMENT_SHADER,F);e.attachShader(D,ne),e.attachShader(D,re),e.bindAttribLocation(D,0,"aVertexPosition"),e.bindAttribLocation(D,1,"aTextureCoord"),e.linkProgram(D);let se={p:D,v:ne,f:re,loc:{}};return u.push(se),se}function y(F){let{p:q,v:D,f:ne}=F;e.getProgramParameter(q,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(q),e.getShaderInfoLog(D),e.getShaderInfoLog(ne));let re=e.getProgramParameter(q,e.ACTIVE_UNIFORMS);for(let se=0;se<re;se++){let j=e.getActiveUniform(q,se);F.loc[j.name]=e.getUniformLocation(q,j.name)}e.deleteShader(D),e.deleteShader(ne)}let f={bg:S(Cn,Et),shapes:Mn.map(F=>S(F,Rn)),trailSim:S(zn,Et),trail:S(Fn),blur:Ln.map(F=>S(F)),bloom:Dn.map(F=>S(F)),gmap:S(kn,Et)},h=e.createVertexArray();e.bindVertexArray(h);let v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let p=[];function a(F,q,D=!1){let ne=e.createTexture();e.bindTexture(e.TEXTURE_2D,ne),D&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,F,q,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,F,q,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let re=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,re),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ne,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let se={tex:ne,fb:re,w:F,h:q};return p.push(se),se}function P(){p.forEach(F=>{e.deleteTexture(F.tex),e.deleteFramebuffer(F.fb)}),p.length=0}function b(F,q,D,ne){e.useProgram(F.p);let re=q?q.w:t.width,se=q?q.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,q?q.fb:null),e.viewport(0,0,re,se);let j=F.loc;j.uMVMatrix&&e.uniformMatrix4fv(j.uMVMatrix,!1,Ot),j.uPMatrix&&e.uniformMatrix4fv(j.uPMatrix,!1,Ot),j.uTextureMatrix&&e.uniformMatrix4fv(j.uTextureMatrix,!1,Ot),j.uResolution&&e.uniform2f(j.uResolution,re,se),j.uArtboardResolution&&e.uniform2f(j.uArtboardResolution,1920,1920),j.uAspectRatio&&e.uniform1f(j.uAspectRatio,1),j.uMousePos&&e.uniform2f(j.uMousePos,A.x,A.y),j.uIsMask&&e.uniform1i(j.uIsMask,0),j.uParentTrackMouse&&e.uniform1f(j.uParentTrackMouse,0);let Pe=0;Object.keys(D).forEach(he=>{j[he]&&(e.activeTexture(e.TEXTURE0+Pe),e.bindTexture(e.TEXTURE_2D,D[he].tex),e.uniform1i(j[he],Pe),Pe++)}),Object.keys(ne||{}).forEach(he=>{if(!j[he])return;let be=ne[he];Array.isArray(be)?e.uniform2f(j[he],be[0],be[1]):e.uniform1f(j[he],be)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let A={x:.5,y:.5},H={x:.5,y:.5},N=0,C=null,U=0;function T(){P();let F=Math.min(_r,window.devicePixelRatio||1),q=Math.max(1,Math.round(n.clientWidth*F)),D=Math.max(1,Math.round(n.clientHeight*F));t.width=q,t.height=D;let ne=j=>[Math.max(1,Math.round(q*j)),Math.max(1,Math.round(D*j))];C={a:a(q,D),b:a(q,D),pp:[a(...ne(.5),!0),a(...ne(.5),!0)],trail:a(q,D),blur1:a(...ne(1)),blur2:a(...ne(1)),blur3:a(...ne(1)),blur4:a(...ne(1)),bth:a(...ne(1)),bd1:a(...ne(1)),bd2:a(...ne(1)),bs1:a(...ne(1)),bs2:a(...ne(1)),bloom:a(q,D)},b(f.bg,C.a,{});let re=C.a,se=C.b;f.shapes.forEach(j=>{b(j,se,{uBgTexture:re});let Pe=re;re=se,se=Pe}),C.base=re,U=0}function _(){if(!C)return;let F=C.pp[U],q=C.pp[1-U];b(f.trailSim,q,{uPingPongTexture:F},{uTime:N,uPreviousMousePos:[H.x,H.y]}),U=1-U,b(f.trail,C.trail,{uTexture:C.base,uPingPongTexture:q}),b(f.blur[0],C.blur1,{uTexture:C.trail}),b(f.blur[1],C.blur2,{uTexture:C.blur1}),b(f.blur[2],C.blur3,{uTexture:C.blur2}),b(f.blur[3],C.blur4,{uTexture:C.blur3});let D=C.blur4;b(f.bloom[0],C.bth,{uTexture:D}),b(f.bloom[1],C.bd1,{uTexture:C.bth}),b(f.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:D}),b(f.bloom[3],C.bs1,{uTexture:C.bd2}),b(f.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:D}),b(f.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:D}),b(f.gmap,null,{uTexture:C.bloom},{uTime:0}),H.x=A.x,H.y=A.y}let g=In,$=We((F,q)=>{let D=t.getBoundingClientRect();!D.width||!D.height||(A.x=(F-D.left)/D.width,A.y=1-(q-D.top)/D.height,g=0,k())}),O=null,L=0,Z=!1;function oe(F){if(!Z||g>=In){O=null;return}if(O=requestAnimationFrame(oe),F-L<1e3/Vt-1)return;let q=L?Math.min(F-L,100):1e3/Vt;L=F,N+=Vr*(q/(1e3/Vt)),_(),g++}function k(){d&&Z&&!O&&(H.x=A.x,H.y=A.y,L=0,O=requestAnimationFrame(oe))}let R=new IntersectionObserver(([F])=>{Z=F.isIntersecting,Z?k():O&&(cancelAnimationFrame(O),O=null)});R.observe(n);let E=null,c=new ResizeObserver(()=>{clearTimeout(E),E=setTimeout(()=>{d&&(T(),_())},60)});c.observe(n);let d=!1,x=null;function X(){x=null,u.forEach(y),d=!0,T(),_()}function W(){u.every(F=>e.getProgramParameter(F.p,s.COMPLETION_STATUS_KHR))?X():x=requestAnimationFrame(W)}return s?x=requestAnimationFrame(W):X(),function(){x&&cancelAnimationFrame(x),O&&cancelAnimationFrame(O),O=null,clearTimeout(E),R.disconnect(),c.disconnect(),$(),P(),u.forEach(D=>e.deleteProgram(D.p)),e.deleteBuffer(v),e.deleteBuffer(i),e.deleteVertexArray(h);let q=e.getExtension("WEBGL_lose_context");q&&q.loseContext(),t.remove()}}var Or="#BBC0C8",Br="#FFFFFF";var Bt='"Suisseintl Book", Arial, sans-serif';var Un=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],qr=3,Gr=1.325,ft=5,Wr=.4,_n=20,Nr=2;function Vn(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let l=(s%ft+ft)%ft/ft;return l<.4?1-e(l/.4):l<.6?0:e((l-.6)/.4)};return n.forEach(s=>{let l=(s.getAttribute("data-text")||"").trim();if(!l)return;let u=Array.from(Array(qr).fill(l).join(" ").toUpperCase()),S=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=document.createElement("canvas");y.setAttribute("aria-hidden","true"),Object.assign(y.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(y);let f=y.getContext("2d"),h=[],v=0,i=new Map,p=2;function a(){f.font=`24px ${Bt}`,h=u.map(L=>f.measureText(L).width),v=(3363-h.reduce((L,Z)=>L+Z,0))/(u.length-1)}let P=null;function b(){i=new Map,f.font=`24px ${Bt}`;let O=24,L=24*.35,Z=[...new Set(u)].filter(E=>E!==" ").map(E=>({ch:E,w:f.measureText(E).width})),oe=Math.ceil((O+L+p*2)*A),k=0;Z.forEach(E=>{E.sx=k,E.sw=Math.ceil((E.w+p*2)*A),k+=E.sw+2}),P=document.createElement("canvas"),P.width=Math.max(1,k),P.height=Math.max(1,oe);let R=P.getContext("2d");R.font=`${24*A}px ${Bt}`,R.fillStyle=Br,R.textBaseline="alphabetic",Z.forEach(E=>{R.fillText(E.ch,E.sx+p*A,(p+O)*A),i.set(E.ch,{sx:E.sx,sw:E.sw,x:-E.w/2-p,y:-O-p,w:E.sw/A,h:oe/A})})}let A=1;function H(){let O=Math.min(Nr,window.devicePixelRatio||1),L=s.clientWidth;y.width=Math.max(1,Math.round(L*O)),y.height=Math.max(1,Math.round(s.clientHeight*O)),A=y.width/1920}let N=0;function C(){f.setTransform(1,0,0,1,0,0),f.fillStyle=Or,f.fillRect(0,0,y.width,y.height);let O=S?0:e(N%_n/_n)*Math.PI*2;Un.forEach((L,Z)=>{let oe=Un.length-1-Z,k=S?0:o(N-ft+oe*Wr),R=v+k*Gr*24,E=2*Math.PI*L.r,c=L.start*Math.PI/180+O,d=0;for(let x=0;x<u.length;x++){let X=h[x];if(d+X>E)break;let W=i.get(u[x]);if(W){let F=c+(d+X/2)/L.r,q=Math.cos(F),D=Math.sin(F);f.setTransform(-D*A,q*A,-q*A,-D*A,(960+L.r*q)*A,(960+L.r*D)*A),f.drawImage(P,W.sx,0,W.sw,P.height,W.x,W.y,W.w,W.h)}d+=X+R}})}let U=(O,L)=>{N+=L/1e3,C()},T=!1,_=()=>{!T&&!S&&(T=!0,gsap.ticker.add(U))},g=()=>{T&&(T=!1,gsap.ticker.remove(U))},z=new ResizeObserver(()=>{H(),b(),C()});z.observe(s),H(),a(),b(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),b(),C()});let $=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:O=>O.isActive?_():g()});$.isActive&&_(),t.push(()=>{g(),$.kill(),z.disconnect(),y.remove()})}),()=>t.forEach(s=>s())}var Je={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},On=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},Xr=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return On(n)*(1-e)+On(n+1)*e};function Bn(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,l=0,u=18,S=0,y=0,f=0,h=-1e5,v=-1e5,i=!1,p=!1;function a(){s&&s.revert(),n.textContent="";let g=getComputedStyle(n);l=parseFloat(g.paddingTop),u=parseFloat(g.lineHeight),S=n.offsetHeight;let z=Math.max(1,Math.floor((S-l-parseFloat(g.paddingBottom))/u)),$=document.createDocumentFragment();for(let O=0;O<z;O++){let L=document.createElement("div");L.className="type-field__row",L.textContent=t,$.appendChild(L)}n.appendChild($),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((O,L)=>({chars:O.querySelectorAll(".type-field__char"),cur:o[L]?o[L].cur:0,drawn:0}))}})}function P(g){let z=Math.max(0,Math.min(g.chars.length,Math.round(g.cur)));if(z===g.drawn)return;let $=Math.min(z,g.drawn),O=Math.max(z,g.drawn);for(let L=$;L<O;L++)g.chars[L].style.visibility=L<z?"visible":"hidden";g.drawn=z}function b(g,z){if(!o.length)return;let $=Math.min(z,50)/16.667,O=E=>1-Math.pow(1-E,$),L=pe.scroll,Z=Math.min(Math.max(y-L,0),f-L-S);v+=(h-Z-l-v)*O(Je.followEase);let oe=Math.floor(v/u),k=L*.004,R=i&&h>=y-L&&h<=f-L;for(let E=0;E<o.length;E++){let c=o[E],d=c.chars.length,x=Math.abs(E-oe),X=0;if(R){if(x===0)X=d;else if(x<=Je.radius){let W=1-x/(Je.radius+1);X=1+Math.min(Je.maxSide,W*(1-Je.ragged/2+Je.ragged*Xr(E*1.3+k)))*(d-1)}}c.cur+=(X-c.cur)*O(Je.ease),P(c)}}function A(){p||(gsap.ticker.add(b),p=!0)}function H(){p&&(gsap.ticker.remove(b),p=!1)}let N=We((g,z)=>{v<-1e4&&(v=z),h=z,i=!0}),C=()=>{i=!1};document.documentElement.addEventListener("mouseleave",C),a();let U=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(g){y=g.start+window.innerHeight,f=g.end},onToggle(g){g.isActive?A():H()}});U.isActive&&A();let T,_=()=>{clearTimeout(T),T=setTimeout(()=>{Math.floor((n.offsetHeight-l-parseFloat(getComputedStyle(n).paddingBottom))/u)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",_),function(){H(),clearTimeout(T),N(),document.documentElement.removeEventListener("mouseleave",C),window.removeEventListener("resize",_),U.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var qn={duration:.5,ease:"power3"};function Gn(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",qn),l=gsap.quickTo(o,"y",qn),u=0,S=0,y=!1,f=new ResizeObserver(()=>{u=o.offsetWidth,S=o.offsetHeight});f.observe(o),u=o.offsetWidth,S=o.offsetHeight;let v=We((p,a)=>{let P=e.getBoundingClientRect();if(!(p>=P.left&&p<=P.right&&a>=P.top&&a<=P.bottom)){y&&(y=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let A=gsap.utils.clamp(0,Math.max(0,P.width-u),p-P.left-u/2),H=gsap.utils.clamp(0,Math.max(0,P.height-S),a-P.top-S/2);if(!y){y=!0,s(A,A),l(H,H),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(A),l(H)}),i=()=>{y&&(y=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{v(),document.documentElement.removeEventListener("mouseleave",i),f.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var Yr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],$r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],Kr="#FFFFFF";var Wn="power3.out";function Nn(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],l=[];function u(){if(s.length&&s[0].isConnected)return;let h=e.querySelectorAll(":scope > div > div");o=(h.length?[...h]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),l=h.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function S(h){h.textContent=h.dataset.orig,h.style.border=""}let y=()=>{u(),l.forEach(v=>{v.el.style.overflow="visible"});let h=(s.length-1)/2;s.forEach((v,i)=>{gsap.to(v,{color:Kr,ease:Wn,duration:.3,delay:Math.abs(i-h)*.03,overwrite:"auto",onStart:()=>{let p=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);p==1&&(v.textContent=gsap.utils.random($r)),a==1&&(v.style.border=`1px solid ${gsap.utils.random(Yr)}`)}})})},f=()=>{if(!s.length)return;let h=getComputedStyle(e).color,v=(s.length-1)/2;l.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,p)=>{gsap.to(i,{color:h,ease:Wn,duration:.3,delay:Math.abs(p-v)*.03,overwrite:"auto",onStart:()=>S(i)})})};e.addEventListener("mouseenter",y),e.addEventListener("mouseleave",f),t.push(()=>{e.removeEventListener("mouseenter",y),e.removeEventListener("mouseleave",f),gsap.killTweensOf(s),o.forEach(h=>h.revert()),o=[],s=[],l=[]})}),()=>t.forEach(e=>e())}function qt(r,n){let t=null;le(ln(r)),le(wn(r)),le(Nn(r)),le(xn(r)),le(cn(r)),le(Pn(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?un(r):null,t?le(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),le(dn(r)),le(pn(r)),le(mn(r)),le(xt(r)),gt(r),le(hn(r)),t}function wt(r){le(bn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&le(gn(r)),le(tt(r.querySelector("[data-type-field]"),()=>Bn(r))),le(Gn(r)),le(tt(r.querySelector("[data-pulse-dots]"),()=>Tn(r))),le(Hn(r)),le(Vn(r)),ScrollTrigger.sort()}var jr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function St(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,onSplit:function(s){gsap.set(t,{autoAlpha:1});var l=jr[e],u={yPercent:110,duration:l.duration,stagger:l.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?u.delay=.5:u.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],u)}}))}),function(){n.forEach(function(t){t.revert()})}}var jn=ur(Xn());var Yn=window.matchMedia("(prefers-reduced-motion: reduce)"),Nt=.9;function $n(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return Yn.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:ht,duration:Nt,ease:Oe},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Nt,ease:Oe},0),e.set(t,{autoAlpha:0}),e)}function Xt(r,n,t="100vh"){let e=gsap.timeline();return Yn.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:Nt,ease:Oe},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function Yt(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),Xt(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var Qe=null,$t=!1;function Kt(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var Kn={sync:!0,beforeLeave(){$t=Lt({keepCurtain:!0}),pe.stop(),Qe||(Qe=zt())},beforeEnter(r){Qe||(Qe=zt()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),tn(),qt(r.next.container,!1)},leave(r){return $n(r.current.container,r.next.container)},enter(r){return $t&&(Jt(),$t=!1),le(St(r.next.container)),Xt(r.next.container,Kt)},afterLeave(){Qe&&(Qe(),Qe=null)},afterEnter(r){nn(r),wt(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(jn.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...Kn,once(r){let n=document.querySelector("[data-menu-status]");Qt(),en(),n&&(gt(n),xt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=qt(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");le(St(t)),Yt(t,function(s){Kt(s),wt(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),le(St(t)),Yt(t,function(o){Kt(o),wt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...Kn}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

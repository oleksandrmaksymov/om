(()=>{var jn=Object.create;var Wt=Object.defineProperty;var Jn=Object.getOwnPropertyDescriptor;var Qn=Object.getOwnPropertyNames;var er=Object.getPrototypeOf,tr=Object.prototype.hasOwnProperty;var nr=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports);var rr=(r,n,t,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of Qn(n))!tr.call(r,o)&&o!==t&&Wt(r,o,{get:()=>n[o],enumerable:!(e=Jn(n,o))||e.enumerable});return r};var or=(r,n,t)=>(t=r!=null?jn(er(r)):{},rr(n||!r||!r.__esModule?Wt(t,"default",{value:r,enumerable:!0}):t,r));var Bn=nr((Ut,_t)=>{(function(r,n){typeof Ut=="object"&&typeof _t!="undefined"?_t.exports=n():typeof define=="function"&&define.amd?define(n):(r||self).barbaPrefetch=n()})(Ut,function(){var r=window.requestIdleCallback||function(n){var t=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)};return new((function(){function n(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var t=n.prototype;return t.install=function(e,o){var s=o===void 0?{}:o,u=s.root,l=u===void 0?document.body:u,A=s.timeout,b=A===void 0?2e3:A,d=s.limit,c=d===void 0?0:d;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=l,this.timeout=b,this.limit=c},t.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(o){o.forEach(function(s){if(s.isIntersecting){var u=s.target,l=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(u));e.toPrefetch.has(l)&&(e.observer.unobserve(u),e.barba.cache.has(l)?e.barba.cache.update(l,{action:"prefetch"}):e.barba.cache.set(l,e.barba.request(l,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(A){e.logger.error(A)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},t.observe=function(){var e=this;r(function(){var o=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(o=o.slice(0,e.limit)),o.forEach(function(s){var u=s,l=e.barba.dom.getHref(u);e.barba.cache.has(l)||e.barba.prevent.checkHref(l)||e.barba.prevent.checkLink(u,{},l)||(e.observer.observe(s),e.toPrefetch.add(l))})},{timeout:this.timeout})},n})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var pe=new Lenis({lerp:.08,wheelMultiplier:1});pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(r=>{pe.raf(r*1e3)});gsap.ticker.lagSmoothing(0);var Tt=[];function ue(r){typeof r=="function"&&Tt.push(r)}function At(){let r=Tt,n=ScrollTrigger.getAll();return Tt=[],function(){r.forEach(function(e){try{e()}catch(o){console.error(o)}}),n.forEach(function(e){e.kill()}),window._flipProgress=0}}var ar="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",ar);var Be="parallax",ft=.8;var ir="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",Nt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",$e=null,Ct=function(){return!1};function Xt(){$e&&gsap.timeline().to($e,{clipPath:Nt,duration:.9,ease:Be,overwrite:!0},0).fromTo($e,{filter:"brightness(1)"},{filter:"brightness("+(1-ft)+")",duration:.9,ease:Be},0).set($e,{clearProps:"filter"})}function Yt(){let r=document.querySelector("[data-menu-button]"),n=document.querySelector("[data-menu-status]");if(!r||!n)return;$e=n.querySelector(".nav-bg"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-controls","mobile-navigation"),n.setAttribute("id","mobile-navigation"),n.setAttribute("role","navigation"),n.setAttribute("aria-label","Main navigation");function t(o){n.dataset.menuStatus=o?"open":"closed",r.setAttribute("aria-expanded",o),o?(pe.stop(),document.body.style.overflow="hidden"):(pe.start(),document.body.style.overflow="")}function e(o){$e&&gsap.to($e,{clipPath:o?ir:Nt,duration:.9,ease:Be,overwrite:!0})}r.addEventListener("click",function(){let o=n.dataset.menuStatus!=="open";t(o),e(o)}),Ct=function(o){return n.dataset.menuStatus!=="open"?!1:(t(!1),o&&o.keepCurtain||e(!1),!0)}}function $t(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(r){var n=r.target.closest&&r.target.closest(".heading-link");n&&(n.style.animation="none",n.offsetHeight,n.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Kt(){let r=function(t){return t.replace(/\/$/,"")||"/"},n=r(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(t){let e=new URL(t.href,location.href),o=e.origin===location.origin&&r(e.pathname)===n&&!e.hash;t.classList.toggle("w--current",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}function Zt(r){let t=new DOMParser().parseFromString(r.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(t&&document.documentElement.setAttribute("data-wf-page",t),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function pt(r){let n=r.querySelectorAll(".copy-email-button");if(!n.length)return;let t=o=>{let s=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let u=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){u();return}navigator.clipboard.writeText(s).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")},u)},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),t(o.currentTarget))};n.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function mt(r){let n=r.querySelector("[data-clock]");if(!n)return;function t(){let o=new Date,s=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),l=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();n.textContent=s+" "+l}t();let e=setInterval(t,1e3);return function(){clearInterval(e)}}function Qe(r,n,t="100% 0px"){if(!r)return;let e=!1,o=null,s=new IntersectionObserver(u=>{e||!u.some(l=>l.isIntersecting)||(e=!0,s.disconnect(),o=n())},{rootMargin:t});return s.observe(r),()=>{s.disconnect(),typeof o=="function"&&o()}}var et=new Map;function sr(r,n){var t=512,e=document.createElement("canvas");e.width=e.height=t;var o=e.getContext("2d"),s=new DOMParser().parseFromString(r,"image/svg+xml"),u=s.querySelector("svg");if(!u)return new Float32Array(0);var l=parseFloat(u.getAttribute("width")||512),A=parseFloat(u.getAttribute("height")||512),b=u.getAttribute("viewBox");if(b){var d=b.split(/[\s,]+/);l=+d[2],A=+d[3]}var c=Math.min(t/l,t/A)*.9,T=(t-l*c)/2,i=(t-A*c)/2;o.save(),o.translate(T,i),o.scale(c,c),o.fillStyle="white",s.querySelectorAll("path,rect,circle").forEach(function(m){if(m.tagName==="path"){var V=m.getAttribute("d");V&&o.fill(new Path2D(V))}else m.tagName==="rect"?o.fillRect(+m.getAttribute("x")||0,+m.getAttribute("y")||0,+m.getAttribute("width")||0,+m.getAttribute("height")||0):m.tagName==="circle"&&(o.beginPath(),o.arc(+m.getAttribute("cx")||0,+m.getAttribute("cy")||0,+m.getAttribute("r")||0,0,Math.PI*2),o.fill())}),o.restore();for(var p=o.getImageData(0,0,t,t).data,a=new Uint32Array(t*t),g=0,E=0;E<t*t;E++)p[E*4+3]>30&&(a[g++]=E);if(!g)return new Float32Array(0);for(var S=new Float32Array(n*4),W=0;W<n;W++){var Y=a[Math.floor(Math.random()*g)],w=Y%t,N=(Y-w)/t,P=p[Y*4+3]/255,U=W*4;S[U]=(w-t/2)*1.2+(Math.random()-.5)*1.65,S[U+1]=-(N-t/2)*1.2+(Math.random()-.5)*1.65,S[U+2]=(Math.random()-.5)*37*P,S[U+3]=P}return S}function tt(r,n){var t=n+"|"+r;if(!et.has(t)){var e;try{e=sr(r,n)}catch(o){console.error(o),e=new Float32Array(0)}if(!e.length)return Promise.resolve(e);et.size>=4&&et.delete(et.keys().next().value),et.set(t,Promise.resolve(e))}return et.get(t)}var ht={};function nt(r,n,t){for(var e=ht[r]||(ht[r]=[]),o=null;e.length&&!o;){var s=e.pop();s.renderer.getContext().isContextLost()?jt(s):o=s}o||(o={renderer:new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"}),mat:null,dustMat:null});var u=o.renderer;return u.setPixelRatio(Math.min(devicePixelRatio,2)),u.setSize(n,t,!1),u.setClearColor(0,1),u.toneMapping=THREE.ACESFilmicToneMapping,u.toneMappingExposure=1.4,u.domElement.style.width="100%",u.domElement.style.height="100%",o}function rt(r,n){var t=n.renderer;t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement),t.renderLists.dispose();var e=ht[r]||(ht[r]=[]);if(e.length>=1){jt(n);return}t.setSize(1,1,!1),e.push(n)}function jt(r){r.mat&&r.mat.dispose(),r.dustMat&&(r.dustMat.map&&r.dustMat.map.dispose(),r.dustMat.dispose()),r.renderer.dispose(),r.renderer.forceContextLoss()}var Mt={};function lt(r){return Mt[r]||(Mt[r]=new Promise(function(n,t){let e=document.createElement("script");e.src=r,e.onload=n,e.onerror=t,document.head.appendChild(e)})),Mt[r]}function Jt(r){var n=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=nt("case",1920,1080),s=o.renderer;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),t.add(u);var l=new THREE.PointLight(13931578,2.4,1200);l.position.set(-300,-100,300),t.add(l);var A=new THREE.PointLight(5913114,1.2,900);A.position.set(0,200,-300),t.add(A);var b=new THREE.PointLight(16750916,1.3,600);b.position.set(0,-250,200),t.add(b);var d=0,c=0,T=0,i=0,p=!1,a=0,g=0,E=Math.PI*2/6,S=new THREE.Vector2(9999,9999),W=new THREE.Raycaster,Y=120,w=new THREE.Vector3(9999,9999,0),N=new THREE.Vector3(9999,9999,0),P=new THREE.Vector3,U=!1,m=0,V=0,re=8e4,q=.03,k=.95,j=.005,J=12e4,z=null,I,v,C,f,x,G,B=0,H=!1,F=0,_=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Z(){var D=new THREE.BufferGeometry;I=new Float32Array(J*3),v=new Float32Array(J*3),C=new Float32Array(J*3),f=new Float32Array(J*3),x=new Float32Array(J),G=new Float32Array(J),D.setAttribute("position",new THREE.BufferAttribute(I,3)),D.setAttribute("color",new THREE.BufferAttribute(f,3)),D.setAttribute("size",new THREE.BufferAttribute(x,1)),D.setAttribute("alpha",new THREE.BufferAttribute(G,1)),D.setAttribute("velocity",new THREE.BufferAttribute(v,3));var X=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,$=o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:X,fragmentShader:h,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));z=new THREE.Points(D,$),t.add(z)}function ce(D,X){return tt(D,X)}function oe(D){B=D.length/4;for(var X=0;X<B;X++){var h=X*3,$=X*4,K=D[$],Ce=D[$+1],Me=D[$+2],Re=D[$+3];I[h]=K,I[h+1]=Ce+40,I[h+2]=Me,v[h]=v[h+1]=v[h+2]=0,C[h]=K,C[h+1]=Ce,C[h+2]=Me;var M=_[Math.floor(Math.random()*_.length)],O=.7+Math.random()*.4;f[h]=M.r*O,f[h+1]=M.g*O,f[h+2]=M.b*O,x[X]=1.8+Math.random()*3.8,G[X]=.3+(Re||.7)*.75}z.geometry.setDrawRange(0,B),["position","color","size","alpha"].forEach(function(y){z.geometry.attributes[y].needsUpdate=!0}),H=!0}function Q(D){return ce(D,Math.min(J,re)).then(function(X){X.length&&z&&oe(X)})}function we(D){if(!(!H||!B)){F+=D;for(var X=0;X<B;X++){var h=X*3,$=X*1.37;if(v[h]+=Math.sin(F*.4+$)*.008+Math.sin(F*1.1+$*2.3)*.003,v[h+1]+=Math.cos(F*.35+$*.7)*.008+Math.sin(F*.9+$*1.5)*.004,v[h+2]+=Math.sin(F*.25+$*1.1)*.004,v[h+1]-=q*.06,v[h]+=Math.sin(F*.25+I[h+1]*.008)*j*.6,v[h+2]+=Math.cos(F*.3+I[h]*.008)*j*.3,U){var K=I[h]-w.x,Ce=I[h+1]-w.y,Me=I[h+2]-w.z,Re=K*K+Ce*Ce+Me*Me,M=Y*Y;if(Re<M&&Re>.25){var O=Math.sqrt(Re),y=O/Y,ee=(X*2654435761&65535)/65535,ve=.6+ee*.8,fe=Math.pow(1-y,1.5+ee),Le=1+Math.min(P.length()*.12,1),Se=fe*ve*1.2*Le,Fe=1/O;v[h]+=K*Fe*Se,v[h+1]+=Ce*Fe*Se,v[h+2]+=Me*Fe*Se*.2;var Ee=.02+ee*.06;v[h]+=P.x*fe*Ee,v[h+1]+=P.y*fe*Ee;var Ge=fe*.15;v[h]+=(ee-.5)*Ge,v[h+1]+=((X*48271&65535)/65535-.5)*Ge}}var Oe=C[h],yt=C[h+1]+40,Je=C[h+2],at=Oe-I[h],Ne=yt-I[h+1],Xe=Je-I[h+2],dt=Math.sqrt(at*at+Ne*Ne+Xe*Xe),vt=(X*48271&65535)/65535,Pt=.003+vt*.003,Et=1+Math.min(dt*.002,.5),it=Pt*Et;v[h]+=at*it,v[h+1]+=Ne*it,v[h+2]+=Xe*it;var st=(X*16807&65535)/65535,Ye=k*(.92+st*.06);v[h]*=Ye,v[h+1]*=Ye,v[h+2]*=Ye,I[h]+=v[h],I[h+1]+=v[h+1],I[h+2]+=v[h+2];var ct=Math.sqrt(Math.pow(I[h]-C[h],2)+Math.pow(I[h+1]-C[h+1],2)+Math.pow(I[h+2]-C[h+2],2));G[X]=.15+.55*(1-Math.min(ct*.005,1))+Math.sin(F*1.5+X*.01)*.05}z.geometry.attributes.position.needsUpdate=!0,z.geometry.attributes.alpha.needsUpdate=!0,z.geometry.attributes.velocity.needsUpdate=!0}}var ge=new THREE.Matrix4,xe=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Te=new THREE.Vector3;function te(D,X){var h=s.domElement.getBoundingClientRect();if(!(h.width===0||h.height===0)&&(S.set((D-h.left)/h.width*2-1,-((X-h.top)/h.height)*2+1),W.setFromCamera(S,e),W.ray.intersectPlane(xe,Te))){N.copy(w),z&&w.copy(Te).applyMatrix4(ge.copy(z.matrixWorld).invert()),P.subVectors(w,N);var $=P.length();$>15&&P.multiplyScalar(15/$)}}function ne(D,X){var h=r.getBoundingClientRect();return D>=h.left&&D<=h.right&&X>=h.top&&X<=h.bottom}var L=r.querySelector("#logo-coords"),le=r.querySelector("#logo-drag-label"),be=!1;if(!n){var ye=function(D){m=D.clientX,V=D.clientY;var X=ne(D.clientX,D.clientY);if(X){U=!0,te(D.clientX,D.clientY);var h=r.getBoundingClientRect(),$=Math.round(D.clientX-h.left),K=Math.round(D.clientY-h.top);L&&(L.textContent="X: "+$+"PX    Y: "+K+"PX")}else U=!1,w.set(9999,9999,0);p&&(d+=(D.clientX-a)*.005,T+=(D.clientY-g)*.005,T=Math.max(-Math.PI/2,Math.min(Math.PI/2,T)),a=D.clientX,g=D.clientY)},Pe=function(D){ne(D.clientX,D.clientY)&&(p=!0,a=D.clientX,g=D.clientY)},he=function(){p=!1,d=0,T=0,c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2)};window.addEventListener("mousemove",ye),window.addEventListener("mousedown",Pe),window.addEventListener("mouseup",he)}function de(){for(var D=4e3,X=new THREE.BufferGeometry,h=new Float32Array(D*3),$=new Float32Array(D*3),K=0;K<D;K++){h[K*3]=(Math.random()-.5)*2200,h[K*3+1]=(Math.random()-.5)*1800,h[K*3+2]=-200-Math.random()*1800;var Ce=_[Math.floor(Math.random()*_.length)],Me=.2+Math.random()*.3;$[K*3]=Ce.r*Me,$[K*3+1]=Ce.g*Me,$[K*3+2]=Ce.b*Me}X.setAttribute("position",new THREE.BufferAttribute(h,3)),X.setAttribute("color",new THREE.BufferAttribute($,3));var Re=document.createElement("canvas");Re.width=Re.height=32;var M=Re.getContext("2d"),O=M.createRadialGradient(16,16,0,16,16,16);O.addColorStop(0,"rgba(255,255,255,1)"),O.addColorStop(.3,"rgba(255,255,255,0.6)"),O.addColorStop(.7,"rgba(255,255,255,0.15)"),O.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=O,M.fillRect(0,0,32,32);var y=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Re),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),ee=new THREE.Points(X,y);return ee.userData={positions:h,count:D},t.add(ee),ee}Z();var se=n?null:de(),Ue='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Q(Ue);var De=new THREE.Clock,qe=!0,ze=new IntersectionObserver(function(D){qe=D[0].isIntersecting,D[0].isIntersecting&&!be&&!n&&(be=!0,L&&(L.style.transform="translateY(0)"),le&&(le.style.transform="translateY(0)"))},{threshold:.1});ze.observe(r);var me=!1,_e=null,Ae=0;function R(){if(me=!0,clearTimeout(_e),_e=setTimeout(function(){me=!1},150),!n){var D=ne(m,V);D?(U=!0,te(m,V)):(U=!1,w.set(9999,9999,0))}}window.addEventListener("scroll",R,{passive:!0});var ae=null;function ie(){if(ae=requestAnimationFrame(ie),!!qe){Ae++;var D=Math.min(De.getDelta(),.05),X=De.elapsedTime;if(n)c+=E*D;else{var h=d-c;h=h%(Math.PI*2),h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2),c+=h*.12,i+=(T-i)*.12}if(z&&(z.rotation.x=i,z.rotation.y=c,z.position.y=-15),se){for(var $=se.userData.positions,K=0;K<se.userData.count;K++)$[K*3+1]+=Math.sin(X*.2+K)*.05,$[K*3]+=Math.cos(X*.15+K*.5)*.03;se.geometry.attributes.position.needsUpdate=!0,se.rotation.y+=1e-4,se.position.x=-c*35*.35,se.position.y=i*28*.35}u.position.x=300+Math.sin(X*.3)*100,u.position.y=350+Math.cos(X*.2)*80,l.intensity=2+Math.sin(X*.5)*.4,b.intensity=.8+Math.sin(X*.4+1)*.3,!(n&&me&&Ae%4!==0)&&(we(D),s.render(t,e))}}return ie(),function(){cancelAnimationFrame(ae),n||(window.removeEventListener("mousemove",ye),window.removeEventListener("mousedown",Pe),window.removeEventListener("mouseup",he)),window.removeEventListener("scroll",R),clearTimeout(_e),ze.disconnect(),t.traverse(function(D){D.geometry&&D.geometry.dispose()}),rt("case",o),z=null}}function Qt(r){var n=new THREE.Scene,t=new THREE.PerspectiveCamera(50,1,1,5e3);t.position.set(0,0,700);var e=nt("card",1080,1080),o=e.renderer;r.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var s=new THREE.PointLight(16107370,3,1400);s.position.set(300,350,400),n.add(s);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),n.add(u);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var A=new THREE.PointLight(16750916,1.3,600);A.position.set(0,-250,200),n.add(A);var b=0,d=Math.PI*2/6,c=8e4,T=.03,i=.95,p=.005,a=12e4,g=null,E,S,W,Y,w,N,P=0,U=!1,m=0,V=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function re(){var te=new THREE.BufferGeometry;E=new Float32Array(a*3),S=new Float32Array(a*3),W=new Float32Array(a*3),Y=new Float32Array(a*3),w=new Float32Array(a),N=new Float32Array(a),te.setAttribute("position",new THREE.BufferAttribute(E,3)),te.setAttribute("color",new THREE.BufferAttribute(Y,3)),te.setAttribute("size",new THREE.BufferAttribute(w,1)),te.setAttribute("alpha",new THREE.BufferAttribute(N,1)),te.setAttribute("velocity",new THREE.BufferAttribute(S,3));var ne=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,L=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,le=e.mat||(e.mat=new THREE.ShaderMaterial({vertexShader:ne,fragmentShader:L,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));g=new THREE.Points(te,le),n.add(g)}function q(te,ne){return tt(te,ne)}function k(te){P=te.length/4;for(var ne=0;ne<P;ne++){var L=ne*3,le=ne*4,be=te[le],ye=te[le+1],Pe=te[le+2],he=te[le+3];E[L]=be,E[L+1]=ye+40,E[L+2]=Pe,S[L]=S[L+1]=S[L+2]=0,W[L]=be,W[L+1]=ye,W[L+2]=Pe;var de=V[Math.floor(Math.random()*V.length)],se=.7+Math.random()*.4;Y[L]=de.r*se,Y[L+1]=de.g*se,Y[L+2]=de.b*se,w[ne]=1.8+Math.random()*3.8,N[ne]=.3+(he||.7)*.75}g.geometry.setDrawRange(0,P),["position","color","size","alpha"].forEach(function(Ue){g.geometry.attributes[Ue].needsUpdate=!0}),U=!0}function j(te){return q(te,Math.min(a,c)).then(function(ne){ne.length&&g&&k(ne)})}function J(te){if(!(!U||!P)){m+=te;for(var ne=0;ne<P;ne++){var L=ne*3,le=ne*1.37;S[L]+=Math.sin(m*.4+le)*.008+Math.sin(m*1.1+le*2.3)*.003,S[L+1]+=Math.cos(m*.35+le*.7)*.008+Math.sin(m*.9+le*1.5)*.004,S[L+2]+=Math.sin(m*.25+le*1.1)*.004,S[L+1]-=T*.06,S[L]+=Math.sin(m*.25+E[L+1]*.008)*p*.6,S[L+2]+=Math.cos(m*.3+E[L]*.008)*p*.3;var be=W[L],ye=W[L+1]+40,Pe=W[L+2],he=be-E[L],de=ye-E[L+1],se=Pe-E[L+2],Ue=Math.sqrt(he*he+de*de+se*se),De=(ne*48271&65535)/65535,qe=.003+De*.003,ze=1+Math.min(Ue*.002,.5),me=qe*ze;S[L]+=he*me,S[L+1]+=de*me,S[L+2]+=se*me;var _e=(ne*16807&65535)/65535,Ae=i*(.92+_e*.06);S[L]*=Ae,S[L+1]*=Ae,S[L+2]*=Ae,E[L]+=S[L],E[L+1]+=S[L+1],E[L+2]+=S[L+2];var R=Math.sqrt(Math.pow(E[L]-W[L],2)+Math.pow(E[L+1]-W[L+1],2)+Math.pow(E[L+2]-W[L+2],2));N[ne]=.15+.55*(1-Math.min(R*.005,1))+Math.sin(m*1.5+ne*.01)*.05}g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.alpha.needsUpdate=!0,g.geometry.attributes.velocity.needsUpdate=!0}}re();for(var z=4e3,I=new THREE.BufferGeometry,v=new Float32Array(z*3),C=new Float32Array(z*3),f=0;f<z;f++){v[f*3]=(Math.random()-.5)*2200,v[f*3+1]=(Math.random()-.5)*1800,v[f*3+2]=-200-Math.random()*1800;var x=V[Math.floor(Math.random()*V.length)],G=.2+Math.random()*.3;C[f*3]=x.r*G,C[f*3+1]=x.g*G,C[f*3+2]=x.b*G}I.setAttribute("position",new THREE.BufferAttribute(v,3)),I.setAttribute("color",new THREE.BufferAttribute(C,3));var B=document.createElement("canvas");B.width=B.height=32;var H=B.getContext("2d"),F=H.createRadialGradient(16,16,0,16,16,16);F.addColorStop(0,"rgba(255,255,255,1)"),F.addColorStop(.3,"rgba(255,255,255,0.6)"),F.addColorStop(.7,"rgba(255,255,255,0.15)"),F.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=F,H.fillRect(0,0,32,32);var _=e.dustMat||(e.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(B),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Z=new THREE.Points(I,_);n.add(Z);var ce='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';j(ce);var oe=new THREE.Clock,Q=!1,we=new IntersectionObserver(function(te){Q=te[0].isIntersecting},{threshold:0});we.observe(r);var ge=r.querySelectorAll("#logo-coords, #logo-drag-label");ge.forEach(function(te){te.parentElement.style.display="none"});var xe=null;function Te(){if(xe=requestAnimationFrame(Te),!!Q){var te=Math.min(oe.getDelta(),.05),ne=oe.elapsedTime;b+=d*te,g&&(g.rotation.y=b,g.position.y=5,g.scale.setScalar(.85));for(var L=0;L<z;L++)v[L*3+1]+=Math.sin(ne*.2+L)*.05,v[L*3]+=Math.cos(ne*.15+L*.5)*.03;I.attributes.position.needsUpdate=!0,Z.rotation.y+=1e-4,Z.position.x=-b*35*.35,s.position.x=300+Math.sin(ne*.3)*100,s.position.y=350+Math.cos(ne*.2)*80,u.intensity=2+Math.sin(ne*.5)*.4,A.intensity=.8+Math.sin(ne*.4+1)*.3,J(te),o.render(n,t)}}return Te(),function(){cancelAnimationFrame(xe),we.disconnect(),n.traverse(function(te){te.geometry&&te.geometry.dispose()}),rt("card",e),g=null}}var en="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function tn(r){let n=r.querySelector("#logo-canvas-container");if(!n)return;let t=!!n.closest('[data-flip-element="target"]');function e(){let o=!1,s=null;return lt(en).then(function(){o||(s=t?cr(n):Jt(n))}),function(){o=!0,s&&s()}}return t?e():Qe(n,e)}function nn(r){let n=r.querySelector("#axion-card");if(n)return Qe(n,function(){let t=!1,e=null;return lt(en).then(function(){t||(e=Qt(n))}),function(){t=!0,e&&e()}})}function cr(r){var n="ontouchstart"in window||navigator.maxTouchPoints>0,t=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=nt("home",1920,1080),s=o.renderer;r.appendChild(s.domElement),t.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),t.add(u);var l=new THREE.PointLight(13931578,2.4,1200);l.position.set(-300,-100,300),t.add(l);var A=new THREE.PointLight(5913114,1.2,900);A.position.set(0,200,-300),t.add(A);var b=new THREE.PointLight(16750916,1.3,600);b.position.set(0,-250,200),t.add(b);var d=0,c=0,T=0,i=0,p=!1,a=0,g=0,E=Math.PI*2/6,S=new THREE.Vector2(9999,9999),W=new THREE.Raycaster,Y=120,w=new THREE.Vector3(9999,9999,0),N=new THREE.Vector3(9999,9999,0),P=new THREE.Vector3,U=!1,m=0,V=0,re=8e4,q=.03,k=.95,j=.005,J=12e4,z=null,I,v,C,f,x,G,B=0,H=!1,F=!1,_=0,Z=0,ce=null,oe=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Q(){var M=new THREE.BufferGeometry;I=new Float32Array(J*3),v=new Float32Array(J*3),C=new Float32Array(J*3),f=new Float32Array(J*3),x=new Float32Array(J),G=new Float32Array(J),M.setAttribute("position",new THREE.BufferAttribute(I,3)),M.setAttribute("color",new THREE.BufferAttribute(f,3)),M.setAttribute("size",new THREE.BufferAttribute(x,1)),M.setAttribute("alpha",new THREE.BufferAttribute(G,1)),M.setAttribute("velocity",new THREE.BufferAttribute(v,3));var O=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,y=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,ee=o.mat||(o.mat=new THREE.ShaderMaterial({vertexShader:O,fragmentShader:y,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0}));z=new THREE.Points(M,ee),t.add(z)}function we(M,O){return tt(M,O)}function ge(M){B=M.length/4;for(var O=0;O<B;O++){var y=O*3,ee=O*4,ve=M[ee],fe=M[ee+1],Le=M[ee+2],Se=M[ee+3];I[y]=ve,I[y+1]=fe+40,I[y+2]=Le,v[y]=v[y+1]=v[y+2]=0,C[y]=ve,C[y+1]=fe,C[y+2]=Le;var Fe=oe[Math.floor(Math.random()*oe.length)],Ee=.7+Math.random()*.4;f[y]=Fe.r*Ee,f[y+1]=Fe.g*Ee,f[y+2]=Fe.b*Ee,x[O]=1.8+Math.random()*3.8,G[O]=.3+(Se||.7)*.75}z.geometry.setDrawRange(0,B),["position","color","size","alpha"].forEach(function(Ge){z.geometry.attributes[Ge].needsUpdate=!0}),H=!0,F=!1,_=1}function xe(M){return we(M,Math.min(J,re)).then(function(O){O.length&&z&&ge(O)})}function Te(M){if(!(!H||!B)){Z+=M;for(var O=0;O<B;O++){var y=O*3,ee=O*1.37;if(v[y]+=Math.sin(Z*.4+ee)*.008+Math.sin(Z*1.1+ee*2.3)*.003,v[y+1]+=Math.cos(Z*.35+ee*.7)*.008+Math.sin(Z*.9+ee*1.5)*.004,v[y+2]+=Math.sin(Z*.25+ee*1.1)*.004,v[y+1]-=q*.06,v[y]+=Math.sin(Z*.25+I[y+1]*.008)*j*.6,v[y+2]+=Math.cos(Z*.3+I[y]*.008)*j*.3,U&&R==="interactive"){var ve=I[y]-w.x,fe=I[y+1]-w.y,Le=I[y+2]-w.z,Se=ve*ve+fe*fe+Le*Le,Fe=Y*Y;if(Se<Fe&&Se>.25){var Ee=Math.sqrt(Se),Ge=Ee/Y,Oe=(O*2654435761&65535)/65535,yt=.6+Oe*.8,Je=Math.pow(1-Ge,1.5+Oe),at=1+Math.min(P.length()*.12,1),Ne=Je*yt*1.2*at,Xe=1/Ee;v[y]+=ve*Xe*Ne,v[y+1]+=fe*Xe*Ne,v[y+2]+=Le*Xe*Ne*.2;var dt=.02+Oe*.06;v[y]+=P.x*Je*dt,v[y+1]+=P.y*Je*dt;var vt=Je*.15;v[y]+=(Oe-.5)*vt,v[y+1]+=((O*48271&65535)/65535-.5)*vt}}var Pt=C[y],Et=C[y+1]+40,it=C[y+2],st=Pt-I[y],Ye=Et-I[y+1],ct=it-I[y+2],Nn=Math.sqrt(st*st+Ye*Ye+ct*ct),Xn=(O*48271&65535)/65535,Yn=.003+Xn*.003,$n=1+Math.min(Nn*.002,.5),wt=Yn*$n;v[y]+=st*wt,v[y+1]+=Ye*wt,v[y+2]+=ct*wt;var Kn=(O*16807&65535)/65535,St=k*(.92+Kn*.06);v[y]*=St,v[y+1]*=St,v[y+2]*=St,I[y]+=v[y],I[y+1]+=v[y+1],I[y+2]+=v[y+2];var Zn=Math.sqrt(Math.pow(I[y]-C[y],2)+Math.pow(I[y+1]-C[y+1],2)+Math.pow(I[y+2]-C[y+2],2));G[O]=.15+.55*(1-Math.min(Zn*.005,1))+Math.sin(Z*1.5+O*.01)*.05}z.geometry.attributes.position.needsUpdate=!0,z.geometry.attributes.alpha.needsUpdate=!0,z.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),L=new THREE.Vector3;function le(M,O){var y=s.domElement.getBoundingClientRect();if(!(y.width===0||y.height===0)&&(S.set((M-y.left)/y.width*2-1,-((O-y.top)/y.height)*2+1),W.setFromCamera(S,e),W.ray.intersectPlane(ne,L))){N.copy(w),z&&w.copy(L).applyMatrix4(te.copy(z.matrixWorld).invert()),P.subVectors(w,N);var ee=P.length();ee>15&&P.multiplyScalar(15/ee)}}var be=null;function ye(){return be||(be=r.closest('[data-flip-element="target"]')||r),be}function Pe(M,O){var y=ye().getBoundingClientRect();return M>=y.left&&M<=y.right&&O>=y.top&&O<=y.bottom}var he=r.querySelector("#logo-coords"),de=r.querySelector("#logo-drag-label"),se=!1;function Ue(M){if(m=M.clientX,V=M.clientY,n||R!=="interactive"){U=!1,w.set(9999,9999,0);return}var O=Pe(M.clientX,M.clientY);if(O){U=!0,le(M.clientX,M.clientY);var y=ye().getBoundingClientRect(),ee=Math.round(M.clientX-y.left),ve=Math.round(M.clientY-y.top);he&&(he.textContent="X: "+ee+"PX    Y: "+ve+"PX")}else U=!1,w.set(9999,9999,0);p&&(d+=(M.clientX-a)*.005,T+=(M.clientY-g)*.005,T=Math.max(-Math.PI/2,Math.min(Math.PI/2,T)),a=M.clientX,g=M.clientY)}function De(M){n||R!=="interactive"||Pe(M.clientX,M.clientY)&&(p=!0,a=M.clientX,g=M.clientY)}function qe(){n||(p=!1,d=0,T=0,c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2))}window.addEventListener("mousemove",Ue),window.addEventListener("mousedown",De),window.addEventListener("mouseup",qe);function ze(){for(var M=4e3,O=new THREE.BufferGeometry,y=new Float32Array(M*3),ee=new Float32Array(M*3),ve=0;ve<M;ve++){y[ve*3]=(Math.random()-.5)*2200,y[ve*3+1]=(Math.random()-.5)*1800,y[ve*3+2]=-200-Math.random()*1800;var fe=oe[Math.floor(Math.random()*oe.length)],Le=.2+Math.random()*.3;ee[ve*3]=fe.r*Le,ee[ve*3+1]=fe.g*Le,ee[ve*3+2]=fe.b*Le}O.setAttribute("position",new THREE.BufferAttribute(y,3)),O.setAttribute("color",new THREE.BufferAttribute(ee,3));var Se=document.createElement("canvas");Se.width=Se.height=32;var Fe=Se.getContext("2d"),Ee=Fe.createRadialGradient(16,16,0,16,16,16);Ee.addColorStop(0,"rgba(255,255,255,1)"),Ee.addColorStop(.3,"rgba(255,255,255,0.6)"),Ee.addColorStop(.7,"rgba(255,255,255,0.15)"),Ee.addColorStop(1,"rgba(255,255,255,0)"),Fe.fillStyle=Ee,Fe.fillRect(0,0,32,32);var Ge=o.dustMat||(o.dustMat=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Se),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0})),Oe=new THREE.Points(O,Ge);return Oe.userData={positions:y,count:M},t.add(Oe),Oe}Q();var me=ze(),_e='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';xe(_e);var Ae=new THREE.Clock,R="spin",ae=null;function ie(){if(n){R="spin";return}if(ae===null){var M=document.querySelector(".scaling-element-video");ae=M&&getComputedStyle(M).display!=="none"}if(!ae){R="spin";return}var O=window._flipProgress||0;O>.85?R="interactive":O>.7?R="transition":R="spin"}var D="spin",X=!0,h=new IntersectionObserver(function(M){X=M[0].isIntersecting},{threshold:0});h.observe(r);var $=!1,K=null,Ce=0;function Me(){$=!0,clearTimeout(K),K=setTimeout(function(){$=!1},150);var M=Pe(m,V);M?(U=!0,le(m,V)):(U=!1,w.set(9999,9999,0))}window.addEventListener("scroll",Me,{passive:!0});function Re(){if(ce=requestAnimationFrame(Re),!!X){Ce++;var M=Math.min(Ae.getDelta(),.05),O=Ae.elapsedTime;ie(),D==="interactive"&&R!=="interactive"&&(U=!1,w.set(9999,9999,0),p=!1);var y=R==="transition"||R==="interactive";if(y&&!se?(se=!0,de&&(de.style.transform="translateY(0)"),he&&(he.style.transform="translateY(0)")):!y&&se&&(se=!1,de&&(de.style.transform="translateY(100%)"),he&&(he.style.transform="translateY(100%)")),D=R,U&&!Pe(m,V)&&(U=!1,w.set(9999,9999,0)),R==="spin")c+=E*M,i+=(0-i)*.05;else if(R==="transition")c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2),c+=(0-c)*.025,i+=(0-i)*.025;else{var ee=d-c;ee=ee%(Math.PI*2),ee>Math.PI&&(ee-=Math.PI*2),ee<-Math.PI&&(ee+=Math.PI*2),c+=ee*.12,i+=(T-i)*.12}z&&(z.rotation.x=i,z.rotation.y=c,z.scale.setScalar(1),z.position.y=-15);for(var ve=me.userData.positions,fe=0;fe<me.userData.count;fe++)ve[fe*3+1]+=Math.sin(O*.2+fe)*.05,ve[fe*3]+=Math.cos(O*.15+fe*.5)*.03;me.geometry.attributes.position.needsUpdate=!0,me.rotation.y+=1e-4,me.position.x=-c*35*.35,me.position.y=i*28*.35,u.position.x=300+Math.sin(O*.3)*100,u.position.y=350+Math.cos(O*.2)*80,l.intensity=2+Math.sin(O*.5)*.4,b.intensity=.8+Math.sin(O*.4+1)*.3,!(n&&$&&Ce%4!==0)&&(Te(M),s.render(t,e))}}return Re(),function(){cancelAnimationFrame(ce),window.removeEventListener("mousemove",Ue),window.removeEventListener("mousedown",De),window.removeEventListener("mouseup",qe),window.removeEventListener("scroll",Me),clearTimeout(K),h.disconnect(),t.traverse(function(M){M.geometry&&M.geometry.dispose()}),rt("home",o),z=null}}function rn(r){let n=document.querySelector("[data-load-wrap]");if(!n)return null;pe.stop();let t=n.querySelector("[data-load-bg]"),e=n.querySelector("[data-load-progress]"),o=n.querySelector("[data-load-logo]"),s=Array.from(n.querySelectorAll("[data-load-text]")),u=Array.from(n.querySelectorAll("[data-load-reset]:not([data-load-text])")),l=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(n,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(n.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(n,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Be},"hideContent").set(n,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(u.length&&l.set(u,{autoAlpha:1},0),s.length>=2){let A=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),b=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([A.chars,b.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),l.to(A.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),l.to(A.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),l.to(b.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),l.to(b.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return l}function on(r){let t=[...(r||document).querySelectorAll("[data-fit-width]")];if(!t.length)return;let e=new Map;t.forEach(d=>{let c=d.parentElement;c&&(d.style.whiteSpace="nowrap",e.has(c)||e.set(c,[]),e.get(c).push(d))});function o(d){let c=getComputedStyle(d);return d.clientWidth-parseFloat(c.paddingLeft)-parseFloat(c.paddingRight)}function s(d,c){if(c<=0)return;let T=parseFloat(getComputedStyle(d).fontSize)||16;for(let i=0;i<5;i++){let p=d.getBoundingClientRect().width;if(p<=0)break;let a=c/p;if(Math.abs(a-1)<.002)break;T*=a,d.style.fontSize=T+"px"}}function u(){e.forEach((d,c)=>{let T=o(c);d.forEach(i=>s(i,T))})}let l=null;function A(){l||(l=requestAnimationFrame(()=>{l=null,u()}))}let b;return window.ResizeObserver&&(b=new ResizeObserver(A),e.forEach((d,c)=>b.observe(c))),window.addEventListener("resize",A),u(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(u),()=>{l&&cancelAnimationFrame(l),b&&b.disconnect(),window.removeEventListener("resize",A),t.forEach(d=>{d.style.whiteSpace="",d.style.fontSize=""})}}var ke={duration:.8,ease:"expo.out"},an=.08,lr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},sn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function ur(r,n){var t=document.createElement("div");return t.className="highlight-marker-bar",Object.assign(t.style,{backgroundColor:r,transformOrigin:n}),t}function cn(r){var n=r.querySelectorAll("[data-highlight-marker-reveal]");if(!n.length)return function(){};var t=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return n.forEach(function(o){var s=o.getAttribute("data-marker-direction")||"right",u=o.getAttribute("data-marker-theme")||"#000000",l=o.getAttribute("data-marker-scroll-start")||"top 90%",A=u.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(u).trim()||u,b=sn[s]||sn.right,d=lr[o.getAttribute("data-highlight-marker-reveal")]||null;d&&(A=d.bar);var c=o.closest("[data-cursor-label]"),T={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,p=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){T.timeline&&T.timeline.kill(),T.scrollTrigger&&T.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(P){P.remove()}),T.listeners.forEach(function(P){P.el.removeEventListener(P.type,P.fn)}),T.listeners=[],i=!1;var g=a.lines,E=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(g.forEach(function(P,U){gsap.set(P,{position:"relative",overflow:"hidden"});var m=ur(A,b.origin);gsap.set(m,{[b.prop]:0}),P.appendChild(m),d&&(gsap.set(P,{zIndex:0,color:d.text}),gsap.set(m,{zIndex:-1})),E.to(m,{[b.prop]:1,duration:ke.duration,ease:ke.ease},U*an);var V=function(){i&&(gsap.to(m,{[b.prop]:0,duration:ke.duration,ease:ke.ease}),d&&gsap.to(P,{color:d.hoverText,duration:ke.duration,ease:ke.ease}))},re=function(){i&&(gsap.to(m,{[b.prop]:1,duration:ke.duration,ease:ke.ease}),d&&gsap.to(P,{color:d.text,duration:ke.duration,ease:ke.ease}))};!d&&e&&(P.addEventListener("mouseenter",V),P.addEventListener("mouseleave",re),T.listeners.push({el:P,type:"mouseenter",fn:V},{el:P,type:"mouseleave",fn:re}))}),T.timeline=E,c){E.kill();var S=o.querySelectorAll(".highlight-marker-bar"),W=function(P){gsap.to(S,{[b.prop]:P,duration:ke.duration,ease:ke.ease,stagger:an,overwrite:!0})},Y=function(){W(1)},w=function(){W(0)};c.addEventListener("cursorlabel:enter",Y),c.addEventListener("cursorlabel:leave",w),T.listeners.push({el:c,type:"cursorlabel:enter",fn:Y},{el:c,type:"cursorlabel:leave",fn:w});return}var N=ScrollTrigger.create({trigger:o,start:l,once:!0,onEnter:function(){E.play()}});T.scrollTrigger=N}});T.split=p,t.push(T)}),function(){t.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),o.split&&o.split.revert()})}}function ln(r){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=.4,t=.4,e=5,o=r.querySelector("[data-cursor-marquee-status]");if(!o)return;let s=o.querySelectorAll("[data-cursor-marquee-text-target]"),u=r.querySelectorAll("[data-cursor-marquee-text]");if(!u.length)return;let l=gsap.quickTo(o,"x",{duration:t,ease:"power3"}),A=gsap.quickTo(o,"y",{duration:t,ease:"power3"}),b=null,d=c=>{l(c.clientX),A(c.clientY)};return window.addEventListener("pointermove",d,{passive:!0}),u.forEach(c=>{c.addEventListener("mouseenter",()=>{b&&clearTimeout(b);let T=c.getAttribute("data-cursor-marquee-text")||"",i=(T.length||1)/e;s.forEach(p=>{p.textContent=T,p.style.animationPlayState="running",p.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),c.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),b&&clearTimeout(b),b=setTimeout(()=>{s.forEach(T=>{T.style.animationPlayState="paused"})},n*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",d),clearTimeout(b),gsap.killTweensOf(o)}}function un(r){let n=[...r.querySelectorAll("video[autoplay]")].filter(o=>!o.closest("[data-bunny-player-init]"));if(!n.length)return;let t=o=>{let s=o.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(o=>{o.forEach(s=>{let u=s.target;s.isIntersecting?t(u):u.paused||u.pause()})},{rootMargin:"100% 0px"});return n.forEach(o=>{o.muted=!0,e.observe(o)}),()=>e.disconnect()}function dn(r){let n=r.querySelectorAll("[data-flip-element='wrapper']"),t=r.querySelector("[data-flip-element='target']");if(n.length<2||!t)return;let e;function o(){e&&(e.kill(),gsap.set(t,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:n[0],start:"center center",endTrigger:n[n.length-1],end:"center center",scrub:.25,onUpdate:function(l){window._flipProgress=l.progress}}}),n.forEach(function(l,A){let b=A+1;if(b<n.length){let d=n[b],c=d.getBoundingClientRect(),T=l.getBoundingClientRect(),i=c.top+window.pageYOffset+d.offsetHeight/2,p=T.top+window.pageYOffset+l.offsetHeight/2,a=i-p;e.add(Flip.fit(t,d,{duration:a,ease:"none"}))}})}o();let s,u=function(){clearTimeout(s),s=setTimeout(function(){o()},100)};return window.addEventListener("resize",u),function(){clearTimeout(s),window.removeEventListener("resize",u),e&&e.kill()}}var dr="150%";function vr(r){let n=[];return r.querySelectorAll("textPath").forEach(function(t){let e=t.textContent;t.textContent="";for(let o of e){if(o===" "){t.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=o,t.append(s),n.push(s)}}),n}var Rt=new WeakMap;function vn(r){let n=r.querySelector('[data-circular-text="wrap"]');if(!n)return function(){};let t=Array.from(n.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!t.length)return function(){};let e=t.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(u){return u.textContent})}),o=t.map(vr);return o.forEach(function(s){gsap.set(s,{fillOpacity:0})}),Rt.set(r,{wrap:n,lines:t,lineChars:o}),function(){Rt.delete(r),t.forEach(function(s,u){s.querySelectorAll("textPath").forEach(function(l,A){l.textContent=e[u][A]})})}}function fn(r){let n=Rt.get(r);if(!n)return function(){};let t=gsap.timeline({scrollTrigger:{trigger:n.wrap,start:"top top",end:"+="+dr,pin:!0,scrub:!0}});return n.lines.forEach(function(e,o){let s=n.lineChars[o];s.length&&t.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){t.scrollTrigger&&t.scrollTrigger.kill(!0),t.kill()}}function Ft(r){var n=[];function t(i,p,a,g){i.addEventListener(p,a,g),n.push(function(){i.removeEventListener(p,a,g)})}r.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var p=i.getAttribute("data-player-src");if(!p)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(R){}try{a.removeAttribute("src"),a.load()}catch(R){}function g(R){i.getAttribute("data-player-status")!==R&&i.setAttribute("data-player-status",R)}function E(R){a.muted=!!R,i.setAttribute("data-player-muted",a.muted?"true":"false")}function S(R){i.setAttribute("data-player-fullscreen",R?"true":"false")}function W(R){i.setAttribute("data-player-activated",R?"true":"false")}i.hasAttribute("data-player-activated")||W(!1);var Y=i.querySelector("[data-player-timeline]"),w=i.querySelector("[data-player-progress]"),N=i.querySelector("[data-player-buffered]"),P=i.querySelector("[data-player-timeline-handle]"),U=i.querySelectorAll("[data-player-time-duration]"),m=i.querySelectorAll("[data-player-time-progress]"),V=i.getAttribute("data-player-update-size"),re=i.getAttribute("data-player-lazy"),q=re==="true",k=re==="meta",j=i.getAttribute("data-player-autoplay")==="true",J=i.getAttribute("data-player-muted")==="true",z=!1;j?(E(!0),a.loop=!0):E(J),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),j&&(a.autoplay=!1);var I=!!a.canPlayType("application/vnd.apple.mpegurl"),v=I&&"ManagedMediaSource"in window,C=!!(window.Hls&&Hls.isSupported())&&!v;if(V==="true"&&!k&&!q){var f=a.preload;a.preload="metadata";var x=function(){b(i,V,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",x),a.preload=f||""};t(a,"loadedmetadata",x,{once:!0}),a.src=p}function G(){T(p,C).then(function(R){R.width&&R.height&&b(i,V,R.width,R.height),U.length&&isFinite(R.duration)&&R.duration>0&&s(U,o(R.duration)),A(i,z)})}var B=!1,H=!1,F="";function _(){if(!B){if(B=!0,i._hls){try{i._hls.destroy()}catch(ae){}i._hls=null}if(v)a.preload=q||k?"auto":a.preload,a.src=p,t(a,"loadedmetadata",function(){A(i,z),V==="true"&&b(i,V,a.videoWidth,a.videoHeight),U.length&&s(U,o(a.duration))},{once:!0});else if(C){var R=new Hls({maxBufferLength:10});R.attachMedia(a),R.on(Hls.Events.MEDIA_ATTACHED,function(){R.loadSource(p)}),R.on(Hls.Events.MANIFEST_PARSED,function(){if(A(i,z),V==="true"){var ae=R.levels||[],ie=u(ae);ie&&ie.width&&ie.height&&b(i,V,ie.width,ie.height)}}),R.on(Hls.Events.LEVEL_LOADED,function(ae,ie){ie&&ie.details&&isFinite(ie.details.totalduration)&&U.length&&s(U,o(ie.details.totalduration))}),i._hls=R}else a.src=p}}k?(G(),a.preload="none"):q?a.preload="none":_();function Z(){H=!0,a.paused||a.ended?((q||k)&&!B&&_(),z=!0,F="",g("loading"),l(a)):(F="manual",a.pause())}function ce(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function oe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Q(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function we(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function ge(){oe()||a.webkitDisplayingFullscreen?we():Q()}t(document,"fullscreenchange",function(){S(oe())}),t(document,"webkitfullscreenchange",function(){S(oe())}),t(a,"webkitbeginfullscreen",function(){S(!0)}),t(a,"webkitendfullscreen",function(){S(!1)}),t(i,"click",function(R){var ae=R.target.closest("[data-player-control]");if(!(!ae||!i.contains(ae))){var ie=ae.getAttribute("data-player-control");ie==="play"||ie==="pause"||ie==="playpause"?Z():ie==="mute"?ce():ie==="fullscreen"&&ge()}});function xe(){U.length&&s(U,o(a.duration)),m.length&&s(m,o(a.currentTime))}t(a,"timeupdate",xe),t(a,"loadedmetadata",function(){xe(),d(i,V,a)}),t(a,"loadeddata",function(){d(i,V,a)}),t(a,"playing",function(){d(i,V,a)}),t(a,"durationchange",xe);var Te;function te(){if(a.duration){var R=a.currentTime/a.duration*100;w&&(w.style.transform="translateX("+(-100+R)+"%)"),P&&(P.style.left=R+"%")}}function ne(){te(),!a.paused&&!a.ended&&(Te=requestAnimationFrame(ne))}function L(){if(!(!N||!a.duration||!a.buffered.length)){var R=a.buffered.end(a.buffered.length-1),ae=R/a.duration*100;N.style.transform="translateX("+(-100+ae)+"%)"}}if(t(a,"progress",L),t(a,"loadedmetadata",L),t(a,"durationchange",L),t(a,"play",function(){W(!0),cancelAnimationFrame(Te),ne(),g("playing")}),t(a,"playing",function(){z=!1,g("playing")}),t(a,"pause",function(){z=!1,cancelAnimationFrame(Te),te(),g("paused")}),t(a,"waiting",function(){g("loading")}),t(a,"canplay",function(){A(i,z)}),t(a,"ended",function(){z=!1,cancelAnimationFrame(Te),te(),g("paused"),W(!1)}),Y){let R=function($){de||(de=Y.getBoundingClientRect());var K=($-de.left)/de.width;return K<0&&(K=0),K>1&&(K=1),K},ae=function($){if(a.duration){var K=$*100;w&&(w.style.transform="translateX("+(-100+K)+"%)"),P&&(P.style.left=K+"%"),m.length&&s(m,o($*a.duration))}},ie=function($){a.duration&&($-Pe<he||(Pe=$,a.currentTime=ye))},D=function($){if(a.duration){le=!0,be=!a.paused&&!a.ended,be&&a.pause(),i.setAttribute("data-timeline-drag","true"),de=Y.getBoundingClientRect();var K=R($.clientX);ye=K*a.duration,ae(K),ie(performance.now()),Y.setPointerCapture&&Y.setPointerCapture($.pointerId),window.addEventListener("pointermove",X,{passive:!1}),window.addEventListener("pointerup",h,{passive:!0}),$.preventDefault()}},X=function($){if(le){var K=R($.clientX);ye=K*a.duration,ae(K),ie(performance.now()),$.preventDefault()}},h=function(){le&&(le=!1,i.setAttribute("data-timeline-drag","false"),de=null,a.currentTime=ye,be?l(a):(te(),xe()),window.removeEventListener("pointermove",X),window.removeEventListener("pointerup",h))};var le=!1,be=!1,ye=0,Pe=0,he=180,de=null;t(window,"resize",function(){le||(de=null)}),t(Y,"pointerdown",D,{passive:!1}),P&&t(P,"pointerdown",D,{passive:!1})}var se,Ue=3e3;function De(R){i.getAttribute("data-player-hover")!==R&&i.setAttribute("data-player-hover",R)}function qe(){clearTimeout(se),se=setTimeout(function(){De("idle")},Ue)}function ze(){De("active"),qe()}t(i,"pointerdown",ze),t(document,"fullscreenchange",ze),t(document,"webkitfullscreenchange",ze);var me=!1;function _e(R){var ae=i.getBoundingClientRect();R.clientX>=ae.left&&R.clientX<=ae.right&&R.clientY>=ae.top&&R.clientY<=ae.bottom&&ze()}if(t(i,"pointerenter",function(){ze(),me||(me=!0,t(window,"pointermove",_e,{passive:!0}))}),t(i,"pointerleave",function(){De("idle"),clearTimeout(se),me&&(me=!1,window.removeEventListener("pointermove",_e))}),j){var Ae=new IntersectionObserver(function(R){R.forEach(function(ae){var ie=ae.isIntersecting&&ae.intersectionRatio>0;ie?((q||k)&&!B&&_(),a.paused?(F="",z=!0,g("loading"),l(a)):g("playing")):!a.paused&&!a.ended&&(F="io",a.pause(),g("paused"))})},{threshold:.1});Ae.observe(i)}n.push(function(){if(cancelAnimationFrame(Te),clearTimeout(se),Ae&&Ae.disconnect(),i._hls){try{i._hls.destroy()}catch(R){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(R){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var p=Math.floor(i),a=Math.floor(p/3600),g=Math.floor(p%3600/60),E=p%60;return a>0?a+":"+e(g)+":"+e(E):e(g)+":"+e(E)}function s(i,p){i.forEach(function(a){a.textContent=p})}function u(i){return!i||!i.length?null:i.reduce(function(p,a){return(a.width||0)>(p.width||0)?a:p},i[0])}function l(i){var p=i.play();p&&typeof p.then=="function"&&p.catch(function(){})}function A(i,p){!p&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function b(i,p,a,g){if(!(p!=="true"||!a||!g)){var E=i.querySelector("[data-player-before]");E&&(E.style.paddingTop=g/a*100+"%")}}function d(i,p,a){if(p==="true"){var g=i.querySelector("[data-player-before]");if(g){var E=g.style.paddingTop&&g.style.paddingTop!=="0%";!E&&a.videoWidth&&a.videoHeight&&b(i,p,a.videoWidth,a.videoHeight)}}}function c(i,p){try{return new URL(p,i).toString()}catch(a){return p}}function T(i,p){return new Promise(function(a){if(p&&window.Hls&&Hls.isSupported())try{var g=new Hls,E={width:0,height:0,duration:NaN},S=!1,W=!1;g.on(Hls.Events.MANIFEST_PARSED,function(N,P){var U=P&&P.levels||g.levels||[],m=u(U);m&&m.width&&m.height&&(E.width=m.width,E.height=m.height,S=!0)}),g.on(Hls.Events.LEVEL_LOADED,function(N,P){P&&P.details&&isFinite(P.details.totalduration)&&(E.duration=P.details.totalduration,W=!0)}),g.on(Hls.Events.ERROR,function(){try{g.destroy()}catch(N){}a(E)}),g.on(Hls.Events.LEVEL_LOADED,function(){try{g.destroy()}catch(N){}a(E)}),g.loadSource(i);return}catch(N){a({width:0,height:0,duration:NaN});return}function Y(N){for(var P=N.split(/\r?\n/),U=0,m=0,V=null,re=null,q=0;q<P.length;q++){var k=P[q];if(k.indexOf("#EXT-X-STREAM-INF:")===0)re=k;else if(re&&k&&k[0]!=="#"){V||(V=k.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec(re);if(j){var J=parseInt(j[1],10),z=parseInt(j[2],10);J>U&&(U=J,m=z)}re=null}}return{bestW:U,bestH:m,media:V}}function w(N){for(var P=0,U=/#EXTINF:([\d.]+)/g,m;m=U.exec(N);)P+=parseFloat(m[1]);return P}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(N){if(!N.ok)throw new Error("master");return N.text()}).then(function(N){var P=Y(N);if(!P.media){a({width:P.bestW||0,height:P.bestH||0,duration:NaN});return}var U=c(i,P.media);return fetch(U,{credentials:"omit",cache:"no-store"}).then(function(m){if(!m.ok)throw new Error("media");return m.text()}).then(function(m){a({width:P.bestW||0,height:P.bestH||0,duration:w(m)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){n.forEach(function(i){i()}),n=[]}}var fr="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",pr="(min-width: 768px)";function mn(r){if(!r.querySelector("[data-bunny-player-init]"))return;let n=null,t=null;if(window.Hls)n=Ft(r),t=pn(r);else{let e=!1;return lt(fr).catch(function(){}).then(function(){e||(n=Ft(r),t=pn(r))}),function(){e=!0,t&&t(),n&&n()}}return function(){t&&t(),n&&n()}}function pn(r){if(!r.querySelector("[data-mini-showreel-open]"))return function(){};var n=1,t="expo.inOut",e=999;let o="",s=!1,u,l,A,b,d,c,T="",i="",p="",a=(f,x=r)=>x.querySelector(f),g=f=>a(`[data-mini-showreel-lightbox="${f}"]`),E=f=>a(`[data-mini-showreel-player="${f}"]`),S=f=>f.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",f)||f,W=(f,x)=>{let G=f.width,B=G/x;return B>f.height&&(B=f.height,G=B*x),{left:f.left+(f.width-G)/2,top:f.top+(f.height-B)/2,width:G,height:B}},Y=f=>{let x=S(f).getBoundingClientRect(),G=f.getBoundingClientRect(),B=G.width>0&&G.height>0?G.width/G.height:16/9;return W(x,B)},w=(f,x)=>gsap.set(f,{position:"fixed",left:x.left,top:x.top,width:x.width,height:x.height,margin:0,x:0,y:0});function N(f){o&&r.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(x=>x.setAttribute("data-mini-showreel-status",f))}function P(){i=(u==null?void 0:u.style.zIndex)||"",p=(l==null?void 0:l.style.zIndex)||"",u&&(u.style.zIndex=String(e)),l&&(l.style.zIndex=String(e))}function U(){u&&(u.style.zIndex=i),l&&(l.style.zIndex=p)}function m(f){let x=E(f);if(!x)return;let G=x.querySelector("[data-bunny-player-init]"),B=x.querySelector("video");if(B){if(G){let H=G.querySelector('[data-player-control="play"], [data-player-control="playpause"]');H&&(B.paused||B.ended)&&H.click();return}try{B.play()}catch(H){}}}function V(f){let x=E(f);if(!x)return;let G=x.querySelector("[data-bunny-player-init]"),B=x.querySelector("video");B&&(B.muted=!0,G&&G.setAttribute("data-player-muted","true"),(B.paused||B.ended)&&m(f))}function re(){U(),o="",s=!1,u=l=A=b=d=c=null,T="",i="",p="",pe.start()}function q(f){if(!f||s||(u=g(f),l=E(f),!u||!l)||(A=a("[data-mini-showreel-target]",u),!A))return;o=f,s=!0,pe.stop(),l.dataset.flipId=o,T=l.style.cssText||"",b=l.parentElement,d=l.nextSibling,P(),N("active"),m(o);let x=Flip.getState(l),G=Y(A);u.appendChild(l),w(l,G),c=Flip.from(x,{duration:n,ease:t,absolute:!0,scale:!1})}function k(f){!s||!l||f&&f!==o||(V(o),N("not-active"),c&&c.kill(),c=Flip.fit(l,b,{duration:n,ease:t,scale:!1,onComplete:()=>{b.insertBefore(l,d),l.style.cssText=T,re()}}))}function j(){!s||!l||(c&&c.kill(),V(o),N("not-active"),b.insertBefore(l,d),l.style.cssText=T,re())}function J(){!s||!l||!A||w(l,Y(A))}function z(f){let x=f.target.closest("[data-mini-showreel-open]");x&&(f.preventDefault(),q(x.getAttribute("data-mini-showreel-open")||""))}function I(f){let x=f.target.closest("[data-mini-showreel-close]");x&&(f.preventDefault(),k(x.getAttribute("data-mini-showreel-close")||""))}function v(f){f.key==="Escape"&&k("")}let C=gsap.matchMedia();return C.add(pr,function(){return r.addEventListener("click",z),document.addEventListener("click",I),window.addEventListener("keydown",v),window.addEventListener("resize",J),function(){j(),r.removeEventListener("click",z),document.removeEventListener("click",I),window.removeEventListener("keydown",v),window.removeEventListener("resize",J)}}),function(){C.revert(),j()}}var ot={x:0,y:0,known:!1};window.addEventListener("pointermove",r=>{ot.x=r.clientX,ot.y=r.clientY,ot.known=!0},{passive:!0});function We(r){let n=e=>r(e.clientX,e.clientY),t=()=>{ot.known&&r(ot.x,ot.y)};return window.addEventListener("pointermove",n,{passive:!0}),window.addEventListener("scroll",t,{passive:!0}),function(){window.removeEventListener("pointermove",n),window.removeEventListener("scroll",t)}}var Ie=1920,He=1080,zt="#E5E5E5",Lt="#000000",hn="http://www.w3.org/2000/svg";function gn(r){let n=r.querySelector("[data-house]");if(!n)return;let t=document.createElementNS(hn,"svg");t.setAttribute("viewBox",`0 0 ${Ie} ${He}`),t.setAttribute("preserveAspectRatio","none"),t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;";let e=(C,f)=>{let x=document.createElementNS(hn,C);return x.setAttribute("fill",f),t.appendChild(x),x},o=e("polygon",zt),s=e("polygon",Lt),u=e("rect",Lt),l=e("rect",zt),A=e("rect",zt),b=e("rect",Lt);[u,l,A,b].forEach(C=>C.setAttribute("shape-rendering","crispEdges")),n.appendChild(t);let d=(C,f,x,G,B)=>{C.setAttribute("x",f),C.setAttribute("y",x),C.setAttribute("width",Math.max(0,G)),C.setAttribute("height",Math.max(0,B))},c={x:Ie*(2/3),y:He*(1/3)},T=.1,i=.9,p={x:c.x,y:c.y},a={x:c.x,y:c.y},g={x:c.x,y:c.y},E=!1,S=()=>gsap.to(g,{x:gsap.utils.random(Ie*.327,Ie*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:S}),W=()=>gsap.to(g,{y:gsap.utils.random(He*.193,He*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:W});S(),W();function Y(){let C=gsap.utils.clamp(Ie*T,Ie*i,p.x),f=Ie-C,x=gsap.utils.clamp(He*T,He*i,p.y),G=He-x;o.setAttribute("points",`0,${x} ${C},0 ${Ie},${x} ${Ie},${He} 0,${He}`),s.setAttribute("points",`${Ie},${x} ${C},0 ${C},${x}`),d(u,0,x,C,G);let B=C*.25,H=G*(2/3);d(l,C/2-B/2,x+G-H,B,H),d(A,C,x,f,G);let F=f*.5,_=G/3;d(b,C+f/2-F/2,x+G/2-_/2,F,_)}let w=.1,N=.03;function P(){let f=1-Math.pow(1-(E?w:N),gsap.ticker.deltaRatio(60)),x=E?a:g;p.x+=(x.x-p.x)*f,p.y+=(x.y-p.y)*f,Y()}let U=(C,f)=>{let x=n.getBoundingClientRect();!x.width||!x.height||(a.x=gsap.utils.clamp(0,Ie,(C-x.left)/x.width*Ie),a.y=gsap.utils.clamp(0,He,(f-x.top)/x.height*He),E=!0)},m=()=>{E=!1},V=(C,f)=>{let x=n.getBoundingClientRect();C>=x.left&&C<=x.right&&f>=x.top&&f<=x.bottom?U(C,f):m()},q=window.matchMedia("(hover: hover) and (pointer: fine)").matches?We(V):null,k=C=>{let f=C.touches[0];f&&U(f.clientX,f.clientY)},j={passive:!0};n.addEventListener("touchstart",k,j),n.addEventListener("touchmove",k,j),n.addEventListener("touchend",m,j),n.addEventListener("touchcancel",m,j);let J=!1,z=()=>{J||(J=!0,gsap.ticker.add(P))},I=()=>{J&&(J=!1,gsap.ticker.remove(P))},v=ScrollTrigger.create({trigger:n,start:"top bottom",end:"bottom top",onToggle:C=>C.isActive?z():I()});return Y(),z(),function(){I(),v.kill(),gsap.killTweensOf(g),q&&q(),n.removeEventListener("touchstart",k,j),n.removeEventListener("touchmove",k,j),n.removeEventListener("touchend",m,j),n.removeEventListener("touchcancel",m,j),t.remove()}}var mr="http://www.w3.org/2000/svg";var hr=4.1343749999999995,gr="#AFAFAF",xr="#000000",br=5e3,yr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Pr=0,xn=(r,n)=>{if(r<0||n<0||r>=20||n>=20)return!1;let t=20/2;return Math.hypot(r+.5-t,n+.5-t)<=t},Ve=(r,n)=>{let t=document.createElementNS(mr,r);return Object.keys(n).forEach(e=>t.setAttribute(e,n[e])),t};function bn(r){let n=r.querySelectorAll("[data-pulse-dots]");if(!n.length)return;let t=[];return n.forEach(e=>{let o="pulse-dots-liquid-"+ ++Pr;e.setAttribute("data-pulse-dots-paused","");let s=Ve("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let u=Ve("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});u.append(Ve("feGaussianBlur",{in:"SourceGraphic",stdDeviation:hr.toFixed(2)}),Ve("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let l=Ve("defs",{});l.appendChild(u);let A=Ve("rect",{width:1e3,height:1e3,fill:gr}),b=Ve("g",{filter:`url(#${o})`,fill:xr});for(let c=0;c<20;c++)for(let T=0;T<20;T++){if(!xn(T,c))continue;let i=yr.filter(S=>xn(T+S.dx,c+S.dy)),p=i[Math.floor(Math.random()*i.length)],a=185+T*31.5+27.5625/2,g=185+c*31.5+27.5625/2,E=Ve("g",{transform:`rotate(${p.deg} ${a} ${g})`});E.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*br)}ms`),E.append(Ve("circle",{class:"pulse-dots__dot is--first",cx:a,cy:g,r:27.5625/2}),Ve("circle",{class:"pulse-dots__dot is--last",cx:a,cy:g,r:27.5625/2})),b.appendChild(E)}s.append(l,A,b),e.appendChild(s);let d=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:c=>e.toggleAttribute("data-pulse-dots-paused",!c.isActive)});e.toggleAttribute("data-pulse-dots-paused",!d.isActive),t.push(()=>{d.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>t.forEach(e=>e())}var gt=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,yn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Pn=`#version 300 es
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
}`,En=[`#version 300 es
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
}`],wn=`#version 300 es
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
}`,Sn=`#version 300 es
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
}fragColor = color;}`,Tn=`#version 300 es
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
}`,An=[`#version 300 es
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
fragColor = color;}`],Cn=[`#version 300 es
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
}`],Mn=`#version 300 es
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
}`;var kt=60,wr=1.5,Sr=1,Rn=150,It=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Fn(r){let n=r.querySelector("[data-dots-fx]");if(!n||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=document.createElement("canvas");t.setAttribute("aria-hidden","true"),Object.assign(t.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(n).position==="static"&&(n.style.position="relative"),n.appendChild(t);let e=t.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){t.remove();return}let o=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function u(H,F){let _=e.createShader(H);return e.shaderSource(_,F),e.compileShader(_),_}let l=[];function A(H,F=yn){let _=e.createProgram(),Z=u(e.VERTEX_SHADER,F),ce=u(e.FRAGMENT_SHADER,H);e.attachShader(_,Z),e.attachShader(_,ce),e.bindAttribLocation(_,0,"aVertexPosition"),e.bindAttribLocation(_,1,"aTextureCoord"),e.linkProgram(_);let oe={p:_,v:Z,f:ce,loc:{}};return l.push(oe),oe}function b(H){let{p:F,v:_,f:Z}=H;e.getProgramParameter(F,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(F),e.getShaderInfoLog(_),e.getShaderInfoLog(Z));let ce=e.getProgramParameter(F,e.ACTIVE_UNIFORMS);for(let oe=0;oe<ce;oe++){let Q=e.getActiveUniform(F,oe);H.loc[Q.name]=e.getUniformLocation(F,Q.name)}e.deleteShader(_),e.deleteShader(Z)}let d={bg:A(Pn,gt),shapes:En.map(H=>A(H,wn)),trailSim:A(Tn,gt),trail:A(Sn),blur:An.map(H=>A(H)),bloom:Cn.map(H=>A(H)),gmap:A(Mn,gt)},c=e.createVertexArray();e.bindVertexArray(c);let T=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,T),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let p=[];function a(H,F,_=!1){let Z=e.createTexture();e.bindTexture(e.TEXTURE_2D,Z),_&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,H,F,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,H,F,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let ce=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,ce),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Z,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let oe={tex:Z,fb:ce,w:H,h:F};return p.push(oe),oe}function g(){p.forEach(H=>{e.deleteTexture(H.tex),e.deleteFramebuffer(H.fb)}),p.length=0}function E(H,F,_,Z){e.useProgram(H.p);let ce=F?F.w:t.width,oe=F?F.h:t.height;e.bindFramebuffer(e.FRAMEBUFFER,F?F.fb:null),e.viewport(0,0,ce,oe);let Q=H.loc;Q.uMVMatrix&&e.uniformMatrix4fv(Q.uMVMatrix,!1,It),Q.uPMatrix&&e.uniformMatrix4fv(Q.uPMatrix,!1,It),Q.uTextureMatrix&&e.uniformMatrix4fv(Q.uTextureMatrix,!1,It),Q.uResolution&&e.uniform2f(Q.uResolution,ce,oe),Q.uArtboardResolution&&e.uniform2f(Q.uArtboardResolution,1920,1920),Q.uAspectRatio&&e.uniform1f(Q.uAspectRatio,1),Q.uMousePos&&e.uniform2f(Q.uMousePos,S.x,S.y),Q.uIsMask&&e.uniform1i(Q.uIsMask,0),Q.uParentTrackMouse&&e.uniform1f(Q.uParentTrackMouse,0);let we=0;Object.keys(_).forEach(ge=>{Q[ge]&&(e.activeTexture(e.TEXTURE0+we),e.bindTexture(e.TEXTURE_2D,_[ge].tex),e.uniform1i(Q[ge],we),we++)}),Object.keys(Z||{}).forEach(ge=>{if(!Q[ge])return;let xe=Z[ge];Array.isArray(xe)?e.uniform2f(Q[ge],xe[0],xe[1]):e.uniform1f(Q[ge],xe)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let S={x:.5,y:.5},W={x:.5,y:.5},Y=0,w=null,N=0;function P(){g();let H=Math.min(wr,window.devicePixelRatio||1),F=Math.max(1,Math.round(n.clientWidth*H)),_=Math.max(1,Math.round(n.clientHeight*H));t.width=F,t.height=_;let Z=Q=>[Math.max(1,Math.round(F*Q)),Math.max(1,Math.round(_*Q))];w={a:a(F,_),b:a(F,_),pp:[a(...Z(.5),!0),a(...Z(.5),!0)],trail:a(F,_),blur1:a(...Z(1)),blur2:a(...Z(1)),blur3:a(...Z(1)),blur4:a(...Z(1)),bth:a(...Z(1)),bd1:a(...Z(1)),bd2:a(...Z(1)),bs1:a(...Z(1)),bs2:a(...Z(1)),bloom:a(F,_)},E(d.bg,w.a,{});let ce=w.a,oe=w.b;d.shapes.forEach(Q=>{E(Q,oe,{uBgTexture:ce});let we=ce;ce=oe,oe=we}),w.base=ce,N=0}function U(){if(!w)return;let H=w.pp[N],F=w.pp[1-N];E(d.trailSim,F,{uPingPongTexture:H},{uTime:Y,uPreviousMousePos:[W.x,W.y]}),N=1-N,E(d.trail,w.trail,{uTexture:w.base,uPingPongTexture:F}),E(d.blur[0],w.blur1,{uTexture:w.trail}),E(d.blur[1],w.blur2,{uTexture:w.blur1}),E(d.blur[2],w.blur3,{uTexture:w.blur2}),E(d.blur[3],w.blur4,{uTexture:w.blur3});let _=w.blur4;E(d.bloom[0],w.bth,{uTexture:_}),E(d.bloom[1],w.bd1,{uTexture:w.bth}),E(d.bloom[2],w.bd2,{uTexture:w.bd1,uBgTexture:_}),E(d.bloom[3],w.bs1,{uTexture:w.bd2}),E(d.bloom[4],w.bs2,{uTexture:w.bs1,uBgTexture:_}),E(d.bloom[5],w.bloom,{uTexture:w.bs2,uBgTexture:_}),E(d.gmap,null,{uTexture:w.bloom},{uTime:0}),W.x=S.x,W.y=S.y}let m=Rn,re=We((H,F)=>{let _=t.getBoundingClientRect();!_.width||!_.height||(S.x=(H-_.left)/_.width,S.y=1-(F-_.top)/_.height,m=0,z())}),q=null,k=0,j=!1;function J(H){if(!j||m>=Rn){q=null;return}if(q=requestAnimationFrame(J),H-k<1e3/kt-1)return;let F=k?Math.min(H-k,100):1e3/kt;k=H,Y+=Sr*(F/(1e3/kt)),U(),m++}function z(){f&&j&&!q&&(W.x=S.x,W.y=S.y,k=0,q=requestAnimationFrame(J))}let I=new IntersectionObserver(([H])=>{j=H.isIntersecting,j?z():q&&(cancelAnimationFrame(q),q=null)});I.observe(n);let v=null,C=new ResizeObserver(()=>{clearTimeout(v),v=setTimeout(()=>{f&&(P(),U())},60)});C.observe(n);let f=!1,x=null;function G(){x=null,l.forEach(b),f=!0,P(),U()}function B(){l.every(H=>e.getProgramParameter(H.p,s.COMPLETION_STATUS_KHR))?G():x=requestAnimationFrame(B)}return s?x=requestAnimationFrame(B):G(),function(){x&&cancelAnimationFrame(x),q&&cancelAnimationFrame(q),q=null,clearTimeout(v),I.disconnect(),C.disconnect(),re(),g(),l.forEach(_=>e.deleteProgram(_.p)),e.deleteBuffer(T),e.deleteBuffer(i),e.deleteVertexArray(c);let F=e.getExtension("WEBGL_lose_context");F&&F.loseContext(),t.remove()}}var Tr="#BBC0C8",Ar="#FFFFFF";var Dt='"Suisseintl Book", Arial, sans-serif';var zn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],Cr=3,Mr=1.325,ut=5,Rr=.4,Ln=20,Fr=2;function kn(r){let n=r.querySelectorAll("[data-text-rings]");if(!n.length)return;let t=[],e=gsap.parseEase("power1.inOut"),o=s=>{let u=(s%ut+ut)%ut/ut;return u<.4?1-e(u/.4):u<.6?0:e((u-.6)/.4)};return n.forEach(s=>{let u=(s.getAttribute("data-text")||"").trim();if(!u)return;let l=Array.from(Array(Cr).fill(u).join(" ").toUpperCase()),A=window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=document.createElement("canvas");b.setAttribute("aria-hidden","true"),Object.assign(b.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(b);let d=b.getContext("2d"),c=[],T=0,i=new Map,p=2;function a(){d.font=`24px ${Dt}`,c=l.map(k=>d.measureText(k).width),T=(3363-c.reduce((k,j)=>k+j,0))/(l.length-1)}let g=null;function E(){i=new Map,d.font=`24px ${Dt}`;let q=24,k=24*.35,j=[...new Set(l)].filter(v=>v!==" ").map(v=>({ch:v,w:d.measureText(v).width})),J=Math.ceil((q+k+p*2)*S),z=0;j.forEach(v=>{v.sx=z,v.sw=Math.ceil((v.w+p*2)*S),z+=v.sw+2}),g=document.createElement("canvas"),g.width=Math.max(1,z),g.height=Math.max(1,J);let I=g.getContext("2d");I.font=`${24*S}px ${Dt}`,I.fillStyle=Ar,I.textBaseline="alphabetic",j.forEach(v=>{I.fillText(v.ch,v.sx+p*S,(p+q)*S),i.set(v.ch,{sx:v.sx,sw:v.sw,x:-v.w/2-p,y:-q-p,w:v.sw/S,h:J/S})})}let S=1;function W(){let q=Math.min(Fr,window.devicePixelRatio||1),k=s.clientWidth;b.width=Math.max(1,Math.round(k*q)),b.height=Math.max(1,Math.round(s.clientHeight*q)),S=b.width/1920}let Y=0;function w(){d.setTransform(1,0,0,1,0,0),d.fillStyle=Tr,d.fillRect(0,0,b.width,b.height);let q=A?0:e(Y%Ln/Ln)*Math.PI*2;zn.forEach((k,j)=>{let J=zn.length-1-j,z=A?0:o(Y-ut+J*Rr),I=T+z*Mr*24,v=2*Math.PI*k.r,C=k.start*Math.PI/180+q,f=0;for(let x=0;x<l.length;x++){let G=c[x];if(f+G>v)break;let B=i.get(l[x]);if(B){let H=C+(f+G/2)/k.r,F=Math.cos(H),_=Math.sin(H);d.setTransform(-_*S,F*S,-F*S,-_*S,(960+k.r*F)*S,(960+k.r*_)*S),d.drawImage(g,B.sx,0,B.sw,g.height,B.x,B.y,B.w,B.h)}f+=G+I}})}let N=(q,k)=>{Y+=k/1e3,w()},P=!1,U=()=>{!P&&!A&&(P=!0,gsap.ticker.add(N))},m=()=>{P&&(P=!1,gsap.ticker.remove(N))},V=new ResizeObserver(()=>{W(),E(),w()});V.observe(s),W(),a(),E(),w(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),E(),w()});let re=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:q=>q.isActive?U():m()});re.isActive&&U(),t.push(()=>{m(),re.kill(),V.disconnect(),b.remove()})}),()=>t.forEach(s=>s())}var Ze={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},In=r=>{let n=Math.sin(r*127.1+311.7)*43758.5453;return n-Math.floor(n)},zr=r=>{let n=Math.floor(r),t=r-n,e=t*t*(3-2*t);return In(n)*(1-e)+In(n+1)*e};function Dn(r){let n=r.querySelector("[data-type-field]");if(!n||!window.matchMedia("(min-width: 992px)").matches)return;let t=n.getAttribute("data-text");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=n.parentElement,o=[],s=null,u=0,l=18,A=0,b=0,d=0,c=-1e5,T=-1e5,i=!1,p=!1;function a(){s&&s.revert(),n.textContent="";let m=getComputedStyle(n);u=parseFloat(m.paddingTop),l=parseFloat(m.lineHeight),A=n.offsetHeight;let V=Math.max(1,Math.floor((A-u-parseFloat(m.paddingBottom))/l)),re=document.createDocumentFragment();for(let q=0;q<V;q++){let k=document.createElement("div");k.className="type-field__row",k.textContent=t,re.appendChild(k)}n.appendChild(re),n.setAttribute("aria-hidden","true"),s=SplitText.create(n.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...n.children].map((q,k)=>({chars:q.querySelectorAll(".type-field__char"),cur:o[k]?o[k].cur:0,drawn:0}))}})}function g(m){let V=Math.max(0,Math.min(m.chars.length,Math.round(m.cur)));if(V===m.drawn)return;let re=Math.min(V,m.drawn),q=Math.max(V,m.drawn);for(let k=re;k<q;k++)m.chars[k].style.visibility=k<V?"visible":"hidden";m.drawn=V}function E(m,V){if(!o.length)return;let re=Math.min(V,50)/16.667,q=v=>1-Math.pow(1-v,re),k=pe.scroll,j=Math.min(Math.max(b-k,0),d-k-A);T+=(c-j-u-T)*q(Ze.followEase);let J=Math.floor(T/l),z=k*.004,I=i&&c>=b-k&&c<=d-k;for(let v=0;v<o.length;v++){let C=o[v],f=C.chars.length,x=Math.abs(v-J),G=0;if(I){if(x===0)G=f;else if(x<=Ze.radius){let B=1-x/(Ze.radius+1);G=1+Math.min(Ze.maxSide,B*(1-Ze.ragged/2+Ze.ragged*zr(v*1.3+z)))*(f-1)}}C.cur+=(G-C.cur)*q(Ze.ease),g(C)}}function S(){p||(gsap.ticker.add(E),p=!0)}function W(){p&&(gsap.ticker.remove(E),p=!1)}let Y=We((m,V)=>{T<-1e4&&(T=V),c=V,i=!0}),w=()=>{i=!1};document.documentElement.addEventListener("mouseleave",w),a();let N=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(m){b=m.start+window.innerHeight,d=m.end},onToggle(m){m.isActive?S():W()}});N.isActive&&S();let P,U=()=>{clearTimeout(P),P=setTimeout(()=>{Math.floor((n.offsetHeight-u-parseFloat(getComputedStyle(n).paddingBottom))/l)!==o.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",U),function(){W(),clearTimeout(P),Y(),document.documentElement.removeEventListener("mouseleave",w),window.removeEventListener("resize",U),N.kill(),s&&s.revert(),n.textContent="",n.removeAttribute("aria-hidden")}}var Hn={duration:.5,ease:"power3"};function Un(r){let n=r.querySelectorAll("[data-cursor-label]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];if(n.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let s=gsap.quickTo(o,"x",Hn),u=gsap.quickTo(o,"y",Hn),l=0,A=0,b=!1,d=new ResizeObserver(()=>{l=o.offsetWidth,A=o.offsetHeight});d.observe(o),l=o.offsetWidth,A=o.offsetHeight;let T=We((p,a)=>{let g=e.getBoundingClientRect();if(!(p>=g.left&&p<=g.right&&a>=g.top&&a<=g.bottom)){b&&(b=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let S=gsap.utils.clamp(0,Math.max(0,g.width-l),p-g.left-l/2),W=gsap.utils.clamp(0,Math.max(0,g.height-A),a-g.top-A/2);if(!b){b=!0,s(S,S),u(W,W),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(S),u(W)}),i=()=>{b&&(b=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),t.push(()=>{T(),document.documentElement.removeEventListener("mouseleave",i),d.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!t.length)return()=>t.forEach(e=>e())}var Lr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],kr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],Ir="#FFFFFF";var _n="power3.out";function On(r){let n=r.querySelectorAll("[data-scramble-hover] [data-split]");if(!n.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=[];return n.forEach(e=>{let o=[],s=[],u=[];function l(){if(s.length&&s[0].isConnected)return;let c=e.querySelectorAll(":scope > div > div");o=(c.length?[...c]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=o.flatMap(i=>i.chars),u=c.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function A(c){c.textContent=c.dataset.orig,c.style.border=""}let b=()=>{l(),u.forEach(T=>{T.el.style.overflow="visible"});let c=(s.length-1)/2;s.forEach((T,i)=>{gsap.to(T,{color:Ir,ease:_n,duration:.3,delay:Math.abs(i-c)*.03,overwrite:"auto",onStart:()=>{let p=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);p==1&&(T.textContent=gsap.utils.random(kr)),a==1&&(T.style.border=`1px solid ${gsap.utils.random(Lr)}`)}})})},d=()=>{if(!s.length)return;let c=getComputedStyle(e).color,T=(s.length-1)/2;u.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,p)=>{gsap.to(i,{color:c,ease:_n,duration:.3,delay:Math.abs(p-T)*.03,overwrite:"auto",onStart:()=>A(i)})})};e.addEventListener("mouseenter",b),e.addEventListener("mouseleave",d),t.push(()=>{e.removeEventListener("mouseenter",b),e.removeEventListener("mouseleave",d),gsap.killTweensOf(s),o.forEach(c=>c.revert()),o=[],s=[],u=[]})}),()=>t.forEach(e=>e())}function Ht(r,n){let t=null;ue(tn(r)),ue(gn(r)),ue(On(r)),ue(vn(r)),ue(nn(r)),ue(mn(r));let e=document.querySelector("[data-load-wrap]");return e&&(t=n&&!sessionStorage.getItem("visited")?rn(r):null,t?ue(function(){t.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),ue(on(r)),ue(cn(r)),ue(ln(r)),ue(mt(r)),pt(r),ue(un(r)),t}function xt(r){ue(fn(r)),r.querySelector("[data-flip-element]")&&window.innerWidth>991&&ue(dn(r)),ue(Qe(r.querySelector("[data-type-field]"),()=>Dn(r))),ue(Un(r)),ue(Qe(r.querySelector("[data-pulse-dots]"),()=>bn(r))),ue(Fn(r)),ue(kn(r)),ScrollTrigger.sort()}var Dr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function bt(r){var n=[];return r.querySelectorAll("[data-split]").forEach(function(t){var e=t.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";n.push(SplitText.create(t,{type:o,mask:"lines",autoSplit:!0,onSplit:function(s){gsap.set(t,{autoAlpha:1});var u=Dr[e],l={yPercent:110,duration:u.duration,stagger:u.stagger,ease:"expo.out"};return t._splitInVP===void 0&&(t._splitInVP=ScrollTrigger.isInViewport(t)),t._splitInVP?l.delay=.5:l.scrollTrigger={trigger:t,start:"clamp(top 75%)",once:!0},gsap.from(s[e],l)}}))}),function(){n.forEach(function(t){t.revert()})}}var Wn=or(Bn());var Vn=window.matchMedia("(prefers-reduced-motion: reduce)"),Ot=.9;function qn(r){let n=document.querySelector("[data-transition-wrap]"),t=n&&n.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{r.remove(),n&&gsap.set(n,{clearProps:"zIndex"})}});return Vn.matches||!t?e.set(r,{autoAlpha:0}):(e.set(n,{zIndex:2}),e.fromTo(t,{autoAlpha:0},{autoAlpha:ft,duration:Ot,ease:Be},0),e.fromTo(r,{y:"0vh"},{y:"-25vh",duration:Ot,ease:Be},0),e.set(t,{autoAlpha:0}),e)}function Bt(r,n,t="100vh"){let e=gsap.timeline();return Vn.matches?e.set(r,{autoAlpha:1}):(e.set(r,{zIndex:3},0),e.fromTo(r,{y:t},{y:"0vh",duration:Ot,ease:Be},0)),e.add("pageReady"),e.call(function(){gsap.set(r,{clearProps:"zIndex"}),n(r)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function Vt(r,n,t){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(r,{position:"relative"}),Bt(r,n,t).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var je=null,qt=!1;function Gt(r){gsap.set(r,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),pe.scrollTo(0,{immediate:!0,force:!0}),pe.resize()}var Gn={sync:!0,beforeLeave(){qt=Ct({keepCurtain:!0}),pe.stop(),je||(je=At())},beforeEnter(r){je||(je=At()),gsap.set(r.next.container,{position:"fixed",top:0,left:0,right:0}),Kt(),Ht(r.next.container,!1)},leave(r){return qn(r.current.container,r.next.container)},enter(r){return qt&&(Xt(),qt=!1),ue(bt(r.next.container)),Bt(r.next.container,Gt)},afterLeave(){je&&(je(),je=null)},afterEnter(r){Zt(r),xt(r.next.container),pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(Wn.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:r}){if(!r||!r.href)return!1;let n=new URL(r.href,location.href);return!!n.hash&&n.pathname===location.pathname},transitions:[{name:"default",...Gn,once(r){let n=document.querySelector("[data-menu-status]");Yt(),$t(),n&&(pt(n),mt(n)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let t=r.next.container,e=Ht(t,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");ue(bt(t)),Vt(t,function(s){Gt(s),xt(s),pe.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),ue(bt(t)),Vt(t,function(o){Gt(o),xt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),pe.start()})})})}))}},{name:"self",...Gn}]}),window.addEventListener("pageshow",function(r){r.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

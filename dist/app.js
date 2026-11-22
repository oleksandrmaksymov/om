(()=>{var Gn=Object.create;var Ht=Object.defineProperty;var Nn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var Xn=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty;var $n=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var Kn=(o,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Wn(t))!Yn.call(o,r)&&r!==n&&Ht(o,r,{get:()=>t[r],enumerable:!(e=Nn(t,r))||e.enumerable});return o};var Zn=(o,t,n)=>(n=o!=null?Gn(Xn(o)):{},Kn(t||!o||!o.__esModule?Ht(n,"default",{value:o,enumerable:!0}):n,o));var Ln=$n((Ft,zt)=>{(function(o,t){typeof Ft=="object"&&typeof zt!="undefined"?zt.exports=t():typeof define=="function"&&define.amd?define(t):(o||self).barbaPrefetch=t()})(Ft,function(){var o=window.requestIdleCallback||function(t){var n=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)};return new((function(){function t(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var n=t.prototype;return n.install=function(e,r){var c=r===void 0?{}:r,g=c.root,l=g===void 0?document.body:g,S=c.timeout,P=S===void 0?2e3:S,u=c.limit,f=u===void 0?0:u;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=l,this.timeout=P,this.limit=f},n.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(r){r.forEach(function(c){if(c.isIntersecting){var g=c.target,l=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(g));e.toPrefetch.has(l)&&(e.observer.unobserve(g),e.barba.cache.has(l)?e.barba.cache.update(l,{action:"prefetch"}):e.barba.cache.set(l,e.barba.request(l,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(S){e.logger.error(S)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},n.observe=function(){var e=this;o(function(){var r=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(r=r.slice(0,e.limit)),r.forEach(function(c){var g=c,l=e.barba.dom.getHref(g);e.barba.cache.has(l)||e.barba.prevent.checkHref(l)||e.barba.prevent.checkLink(g,{},l)||(e.observer.observe(c),e.toPrefetch.add(l))})},{timeout:this.timeout})},t})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var ge=new Lenis({lerp:.08,wheelMultiplier:1});ge.on("scroll",ScrollTrigger.update);gsap.ticker.add(o=>{ge.raf(o*1e3)});gsap.ticker.lagSmoothing(0);var xt=[];function ue(o){typeof o=="function"&&xt.push(o)}function bt(){let o=xt,t=ScrollTrigger.getAll();return xt=[],function(){o.forEach(function(e){try{e()}catch(r){console.error(r)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var jn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",jn);var Xe="parallax",ut=.8;var Jn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",_t="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,yt=function(){return!1};function Ot(){tt&&gsap.timeline().to(tt,{clipPath:_t,duration:.9,ease:Xe,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-ut)+")",duration:.9,ease:Xe},0).set(tt,{clearProps:"filter"})}function Bt(){let o=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!o||!t)return;tt=t.querySelector(".nav-bg"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(r){t.dataset.menuStatus=r?"open":"closed",o.setAttribute("aria-expanded",r),r?(ge.stop(),document.body.style.overflow="hidden"):(ge.start(),document.body.style.overflow="")}function e(r){tt&&gsap.to(tt,{clipPath:r?Jn:_t,duration:.9,ease:Xe,overwrite:!0})}o.addEventListener("click",function(){let r=t.dataset.menuStatus!=="open";n(r),e(r)}),yt=function(r){return t.dataset.menuStatus!=="open"?!1:(n(!1),r&&r.keepCurtain||e(!1),!0)}}function Vt(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function qt(){let o=function(n){return n.replace(/\/$/,"")||"/"},t=o(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),r=e.origin===location.origin&&o(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",r),r?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Gt(o){let n=new DOMParser().parseFromString(o.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function dt(o){let t=o.querySelectorAll(".copy-email-button");if(!t.length)return;let n=r=>{let c=r.getAttribute("data-copy-email")||r.querySelector("[data-copy-email-element]").textContent.trim();if(!c)return;let g=()=>{window.location.href="mailto:"+c};if(!navigator.clipboard||!navigator.clipboard.writeText){g();return}navigator.clipboard.writeText(c).then(()=>{r.setAttribute("data-copy-button","copied"),r.setAttribute("aria-label","Email copied to clipboard!")},g)},e=r=>{(r.type==="click"||r.type==="keydown"&&(r.key==="Enter"||r.key===" "))&&(r.preventDefault(),n(r.currentTarget))};t.forEach(r=>{r.addEventListener("click",e),r.addEventListener("keydown",e),r.addEventListener("mouseleave",()=>{r.removeAttribute("data-copy-button"),r.blur(),r.setAttribute("aria-label","Copy email to clipboard")}),r.addEventListener("blur",()=>{r.removeAttribute("data-copy-button"),r.setAttribute("aria-label","Copy email to clipboard")})})}function vt(o){let t=o.querySelector("[data-clock]");if(!t)return;function n(){let r=new Date,c=r.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),l=r.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=c+" "+l}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function ct(o){return Pt[o]||(Pt[o]=new Promise(function(t,n){let e=document.createElement("script");e.src=o,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[o]}function Nt(o){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var r=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});r.setSize(1920,1080),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setClearColor(0,1),r.toneMapping=THREE.ACESFilmicToneMapping,r.toneMappingExposure=1.4,r.domElement.style.width="100%",r.domElement.style.height="100%",o.appendChild(r.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var g=new THREE.PointLight(13931578,2.4,1200);g.position.set(-300,-100,300),n.add(g);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var S=new THREE.PointLight(16750916,1.3,600);S.position.set(0,-250,200),n.add(S);var P=0,u=0,f=0,T=0,i=!1,p=0,a=0,x=Math.PI*2/6,A=new THREE.Vector2(9999,9999),O=new THREE.Raycaster,F=120,G=new THREE.Vector3(9999,9999,0),ne=new THREE.Vector3(9999,9999,0),N=new THREE.Vector3,E=!1,X=0,C=0,q=8e4,re=.03,$=.95,k=.005,Y=12e4,U=null,M,w,m,h,s,d,z=0,H=!1,I=0,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function ee(){var y=new THREE.BufferGeometry;M=new Float32Array(Y*3),w=new Float32Array(Y*3),m=new Float32Array(Y*3),h=new Float32Array(Y*3),s=new Float32Array(Y),d=new Float32Array(Y),y.setAttribute("position",new THREE.BufferAttribute(M,3)),y.setAttribute("color",new THREE.BufferAttribute(h,3)),y.setAttribute("size",new THREE.BufferAttribute(s,1)),y.setAttribute("alpha",new THREE.BufferAttribute(d,1)),y.setAttribute("velocity",new THREE.BufferAttribute(w,3));var W=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,v=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,V=new THREE.ShaderMaterial({vertexShader:W,fragmentShader:v,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});U=new THREE.Points(y,V),n.add(U)}function we(y,W){return new Promise(function(v){try{var V=512,K=document.createElement("canvas");K.width=K.height=V;var j=K.getContext("2d"),Re=new DOMParser().parseFromString(y,"image/svg+xml"),Ae=Re.querySelector("svg");if(!Ae){v([]);return}var R=parseFloat(Ae.getAttribute("width")||512),B=parseFloat(Ae.getAttribute("height")||512),b=Ae.getAttribute("viewBox");if(b){var D=b.split(/[\s,]+/);R=+D[2],B=+D[3]}var oe=Math.min(V/R,V/B)*.9,te=(V-R*oe)/2,Ce=(V-B*oe)/2;j.save(),j.translate(te,Ce),j.scale(oe,oe),j.fillStyle="white",Re.querySelectorAll("path,rect,circle").forEach(function(pe){if(pe.tagName==="path"){var ke=pe.getAttribute("d");ke&&j.fill(new Path2D(ke))}else pe.tagName==="rect"?j.fillRect(+pe.getAttribute("x")||0,+pe.getAttribute("y")||0,+pe.getAttribute("width")||0,+pe.getAttribute("height")||0):pe.tagName==="circle"&&(j.beginPath(),j.arc(+pe.getAttribute("cx")||0,+pe.getAttribute("cy")||0,+pe.getAttribute("r")||0,0,Math.PI*2),j.fill())}),j.restore();for(var me=j.getImageData(0,0,V,V).data,Pe=[],he=0;he<V;he++)for(var ze=0;ze<V;ze++){var be=(he*V+ze)*4;me[be+3]>30&&Pe.push({x:ze,y:he,a:me[be+3]/255})}if(!Pe.length){v([]);return}for(var Be=[],be=0;be<W;be++){var Le=Pe[Math.floor(Math.random()*Pe.length)];Be.push({x:(Le.x-V/2)*1.2+(Math.random()-.5)*1.65,y:-(Le.y-V/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Le.a,a:Le.a})}v(Be)}catch(pe){console.error(pe),v([])}})}function Oe(y){z=y.length;for(var W=0;W<z;W++){var v=y[W],V=W*3;M[V]=v.x,M[V+1]=v.y+40,M[V+2]=v.z,w[V]=w[V+1]=w[V+2]=0,m[V]=v.x,m[V+1]=v.y,m[V+2]=v.z;var K=ie[Math.floor(Math.random()*ie.length)],j=.7+Math.random()*.4;h[V]=K.r*j,h[V+1]=K.g*j,h[V+2]=K.b*j,s[W]=1.8+Math.random()*3.8,d[W]=.3+(v.a||.7)*.75}U.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(Re){U.geometry.attributes[Re].needsUpdate=!0}),H=!0}function qe(y){return we(y,Math.min(Y,q)).then(function(W){W.length&&U&&Oe(W)})}function je(y){if(!(!H||!z)){I+=y;for(var W=0;W<z;W++){var v=W*3,V=W*1.37;if(w[v]+=Math.sin(I*.4+V)*.008+Math.sin(I*1.1+V*2.3)*.003,w[v+1]+=Math.cos(I*.35+V*.7)*.008+Math.sin(I*.9+V*1.5)*.004,w[v+2]+=Math.sin(I*.25+V*1.1)*.004,w[v+1]-=re*.06,w[v]+=Math.sin(I*.25+M[v+1]*.008)*k*.6,w[v+2]+=Math.cos(I*.3+M[v]*.008)*k*.3,E){var K=M[v]-G.x,j=M[v+1]-G.y,Re=M[v+2]-G.z,Ae=K*K+j*j+Re*Re,R=F*F;if(Ae<R&&Ae>.25){var B=Math.sqrt(Ae),b=B/F,D=(W*2654435761&65535)/65535,oe=.6+D*.8,te=Math.pow(1-b,1.5+D),Ce=1+Math.min(N.length()*.12,1),me=te*oe*1.2*Ce,Pe=1/B;w[v]+=K*Pe*me,w[v+1]+=j*Pe*me,w[v+2]+=Re*Pe*me*.2;var he=.02+D*.06;w[v]+=N.x*te*he,w[v+1]+=N.y*te*he;var ze=te*.15;w[v]+=(D-.5)*ze,w[v+1]+=((W*48271&65535)/65535-.5)*ze}}var be=m[v],Be=m[v+1]+40,Le=m[v+2],pe=be-M[v],ke=Be-M[v+1],Ue=Le-M[v+2],$e=Math.sqrt(pe*pe+ke*ke+Ue*Ue),Ke=(W*48271&65535)/65535,Ze=.003+Ke*.003,at=1+Math.min($e*.002,.5),Ne=Ze*at;w[v]+=pe*Ne,w[v+1]+=ke*Ne,w[v+2]+=Ue*Ne;var ye=(W*16807&65535)/65535,We=$*(.92+ye*.06);w[v]*=We,w[v+1]*=We,w[v+2]*=We,M[v]+=w[v],M[v+1]+=w[v+1],M[v+2]+=w[v+2];var st=Math.sqrt(Math.pow(M[v]-m[v],2)+Math.pow(M[v+1]-m[v+1],2)+Math.pow(M[v+2]-m[v+2],2));d[W]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(I*1.5+W*.01)*.05}U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.alpha.needsUpdate=!0,U.geometry.attributes.velocity.needsUpdate=!0}}var et=new THREE.Matrix4,Je=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),De=new THREE.Vector3;function J(y,W){var v=r.domElement.getBoundingClientRect();if(!(v.width===0||v.height===0)&&(A.set((y-v.left)/v.width*2-1,-((W-v.top)/v.height)*2+1),O.setFromCamera(A,e),O.ray.intersectPlane(Je,De))){ne.copy(G),U&&G.copy(De).applyMatrix4(et.copy(U.matrixWorld).invert()),N.subVectors(G,ne);var V=N.length();V>15&&N.multiplyScalar(15/V)}}function Q(y,W){var v=o.getBoundingClientRect();return y>=v.left&&y<=v.right&&W>=v.top&&W<=v.bottom}var L=o.querySelector("#logo-coords"),Z=o.querySelector("#logo-drag-label"),de=!1;if(!t){var le=function(y){X=y.clientX,C=y.clientY;var W=Q(y.clientX,y.clientY);if(W){E=!0,J(y.clientX,y.clientY);var v=o.getBoundingClientRect(),V=Math.round(y.clientX-v.left),K=Math.round(y.clientY-v.top);L&&(L.textContent="X: "+V+"PX    Y: "+K+"PX")}else E=!1,G.set(9999,9999,0);i&&(P+=(y.clientX-p)*.005,f+=(y.clientY-a)*.005,f=Math.max(-Math.PI/2,Math.min(Math.PI/2,f)),p=y.clientX,a=y.clientY)},xe=function(y){Q(y.clientX,y.clientY)&&(i=!0,p=y.clientX,a=y.clientY)},fe=function(){i=!1,P=0,f=0,u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",xe),window.addEventListener("mouseup",fe)}function Se(){for(var y=4e3,W=new THREE.BufferGeometry,v=new Float32Array(y*3),V=new Float32Array(y*3),K=0;K<y;K++){v[K*3]=(Math.random()-.5)*2200,v[K*3+1]=(Math.random()-.5)*1800,v[K*3+2]=-200-Math.random()*1800;var j=ie[Math.floor(Math.random()*ie.length)],Re=.2+Math.random()*.3;V[K*3]=j.r*Re,V[K*3+1]=j.g*Re,V[K*3+2]=j.b*Re}W.setAttribute("position",new THREE.BufferAttribute(v,3)),W.setAttribute("color",new THREE.BufferAttribute(V,3));var Ae=document.createElement("canvas");Ae.width=Ae.height=32;var R=Ae.getContext("2d"),B=R.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=B,R.fillRect(0,0,32,32);var b=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Ae),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),D=new THREE.Points(W,b);return D.userData={positions:v,count:y},n.add(D),D}ee();var se=t?null:Se(),Fe='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';qe(Fe);var Ie=new THREE.Clock,Te=!0,Ge=new IntersectionObserver(function(y){Te=y[0].isIntersecting,y[0].isIntersecting&&!de&&!t&&(de=!0,L&&(L.style.transform="translateY(0)"),Z&&(Z.style.transform="translateY(0)"))},{threshold:.1});Ge.observe(o);var ve=!1,Me=null,Ee=0;function ce(){if(ve=!0,clearTimeout(Me),Me=setTimeout(function(){ve=!1},150),!t){var y=Q(X,C);y?(E=!0,J(X,C)):(E=!1,G.set(9999,9999,0))}}window.addEventListener("scroll",ce,{passive:!0});var _=null;function ae(){if(_=requestAnimationFrame(ae),!!Te){Ee++;var y=Math.min(Ie.getDelta(),.05),W=Ie.elapsedTime;if(t)u+=x*y;else{var v=P-u;v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2),u+=v*.12,T+=(f-T)*.12}if(U&&(U.rotation.x=T,U.rotation.y=u,U.position.y=-15),se){for(var V=se.userData.positions,K=0;K<se.userData.count;K++)V[K*3+1]+=Math.sin(W*.2+K)*.05,V[K*3]+=Math.cos(W*.15+K*.5)*.03;se.geometry.attributes.position.needsUpdate=!0,se.rotation.y+=1e-4,se.position.x=-u*35*.35,se.position.y=T*28*.35}c.position.x=300+Math.sin(W*.3)*100,c.position.y=350+Math.cos(W*.2)*80,g.intensity=2+Math.sin(W*.5)*.4,S.intensity=.8+Math.sin(W*.4+1)*.3,!(t&&ve&&Ee%4!==0)&&(je(y),r.render(n,e))}}return ae(),function(){cancelAnimationFrame(_),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",xe),window.removeEventListener("mouseup",fe)),window.removeEventListener("scroll",ce),clearTimeout(Me),Ge.disconnect(),n.traverse(function(y){y.geometry&&y.geometry.dispose(),y.material&&(y.material.map&&y.material.map.dispose(),y.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),U=null}}function Wt(o){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",o.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var r=new THREE.PointLight(16107370,3,1400);r.position.set(300,350,400),t.add(r);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),t.add(c);var g=new THREE.PointLight(5913114,1.2,900);g.position.set(0,200,-300),t.add(g);var l=new THREE.PointLight(16750916,1.3,600);l.position.set(0,-250,200),t.add(l);var S=0,P=Math.PI*2/6,u=8e4,f=.03,T=.95,i=.005,p=12e4,a=null,x,A,O,F,G,ne,N=0,E=!1,X=0,C=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function q(){var J=new THREE.BufferGeometry;x=new Float32Array(p*3),A=new Float32Array(p*3),O=new Float32Array(p*3),F=new Float32Array(p*3),G=new Float32Array(p),ne=new Float32Array(p),J.setAttribute("position",new THREE.BufferAttribute(x,3)),J.setAttribute("color",new THREE.BufferAttribute(F,3)),J.setAttribute("size",new THREE.BufferAttribute(G,1)),J.setAttribute("alpha",new THREE.BufferAttribute(ne,1)),J.setAttribute("velocity",new THREE.BufferAttribute(A,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Z=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:L,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});a=new THREE.Points(J,Z),t.add(a)}function re(J,Q){return new Promise(function(L){try{var Z=512,de=document.createElement("canvas");de.width=de.height=Z;var le=de.getContext("2d"),xe=new DOMParser().parseFromString(J,"image/svg+xml"),fe=xe.querySelector("svg");if(!fe){L([]);return}var Se=parseFloat(fe.getAttribute("width")||512),se=parseFloat(fe.getAttribute("height")||512),Fe=fe.getAttribute("viewBox");if(Fe){var Ie=Fe.split(/[\s,]+/);Se=+Ie[2],se=+Ie[3]}var Te=Math.min(Z/Se,Z/se)*.9,Ge=(Z-Se*Te)/2,ve=(Z-se*Te)/2;le.save(),le.translate(Ge,ve),le.scale(Te,Te),le.fillStyle="white",xe.querySelectorAll("path,rect,circle").forEach(function(v){if(v.tagName==="path"){var V=v.getAttribute("d");V&&le.fill(new Path2D(V))}else v.tagName==="rect"?le.fillRect(+v.getAttribute("x")||0,+v.getAttribute("y")||0,+v.getAttribute("width")||0,+v.getAttribute("height")||0):v.tagName==="circle"&&(le.beginPath(),le.arc(+v.getAttribute("cx")||0,+v.getAttribute("cy")||0,+v.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Me=le.getImageData(0,0,Z,Z).data,Ee=[],ce=0;ce<Z;ce++)for(var _=0;_<Z;_++){var ae=(ce*Z+_)*4;Me[ae+3]>30&&Ee.push({x:_,y:ce,a:Me[ae+3]/255})}if(!Ee.length){L([]);return}for(var y=[],ae=0;ae<Q;ae++){var W=Ee[Math.floor(Math.random()*Ee.length)];y.push({x:(W.x-Z/2)*1.2+(Math.random()-.5)*1.65,y:-(W.y-Z/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*W.a,a:W.a})}L(y)}catch(v){console.error(v),L([])}})}function $(J){N=J.length;for(var Q=0;Q<N;Q++){var L=J[Q],Z=Q*3;x[Z]=L.x,x[Z+1]=L.y+40,x[Z+2]=L.z,A[Z]=A[Z+1]=A[Z+2]=0,O[Z]=L.x,O[Z+1]=L.y,O[Z+2]=L.z;var de=C[Math.floor(Math.random()*C.length)],le=.7+Math.random()*.4;F[Z]=de.r*le,F[Z+1]=de.g*le,F[Z+2]=de.b*le,G[Q]=1.8+Math.random()*3.8,ne[Q]=.3+(L.a||.7)*.75}a.geometry.setDrawRange(0,N),["position","color","size","alpha"].forEach(function(xe){a.geometry.attributes[xe].needsUpdate=!0}),E=!0}function k(J){return re(J,Math.min(p,u)).then(function(Q){Q.length&&a&&$(Q)})}function Y(J){if(!(!E||!N)){X+=J;for(var Q=0;Q<N;Q++){var L=Q*3,Z=Q*1.37;A[L]+=Math.sin(X*.4+Z)*.008+Math.sin(X*1.1+Z*2.3)*.003,A[L+1]+=Math.cos(X*.35+Z*.7)*.008+Math.sin(X*.9+Z*1.5)*.004,A[L+2]+=Math.sin(X*.25+Z*1.1)*.004,A[L+1]-=f*.06,A[L]+=Math.sin(X*.25+x[L+1]*.008)*i*.6,A[L+2]+=Math.cos(X*.3+x[L]*.008)*i*.3;var de=O[L],le=O[L+1]+40,xe=O[L+2],fe=de-x[L],Se=le-x[L+1],se=xe-x[L+2],Fe=Math.sqrt(fe*fe+Se*Se+se*se),Ie=(Q*48271&65535)/65535,Te=.003+Ie*.003,Ge=1+Math.min(Fe*.002,.5),ve=Te*Ge;A[L]+=fe*ve,A[L+1]+=Se*ve,A[L+2]+=se*ve;var Me=(Q*16807&65535)/65535,Ee=T*(.92+Me*.06);A[L]*=Ee,A[L+1]*=Ee,A[L+2]*=Ee,x[L]+=A[L],x[L+1]+=A[L+1],x[L+2]+=A[L+2];var ce=Math.sqrt(Math.pow(x[L]-O[L],2)+Math.pow(x[L+1]-O[L+1],2)+Math.pow(x[L+2]-O[L+2],2));ne[Q]=.15+.55*(1-Math.min(ce*.005,1))+Math.sin(X*1.5+Q*.01)*.05}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.alpha.needsUpdate=!0,a.geometry.attributes.velocity.needsUpdate=!0}}q();for(var U=4e3,M=new THREE.BufferGeometry,w=new Float32Array(U*3),m=new Float32Array(U*3),h=0;h<U;h++){w[h*3]=(Math.random()-.5)*2200,w[h*3+1]=(Math.random()-.5)*1800,w[h*3+2]=-200-Math.random()*1800;var s=C[Math.floor(Math.random()*C.length)],d=.2+Math.random()*.3;m[h*3]=s.r*d,m[h*3+1]=s.g*d,m[h*3+2]=s.b*d}M.setAttribute("position",new THREE.BufferAttribute(w,3)),M.setAttribute("color",new THREE.BufferAttribute(m,3));var z=document.createElement("canvas");z.width=z.height=32;var H=z.getContext("2d"),I=H.createRadialGradient(16,16,0,16,16,16);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.3,"rgba(255,255,255,0.6)"),I.addColorStop(.7,"rgba(255,255,255,0.15)"),I.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=I,H.fillRect(0,0,32,32);var ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(z),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),ee=new THREE.Points(M,ie);t.add(ee);var we='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';k(we);var Oe=new THREE.Clock,qe=!0,je=new IntersectionObserver(function(J){qe=J[0].isIntersecting},{threshold:0});je.observe(o);var et=o.querySelectorAll("#logo-coords, #logo-drag-label");et.forEach(function(J){J.parentElement.style.display="none"});var Je=null;function De(){if(Je=requestAnimationFrame(De),!!qe){var J=Math.min(Oe.getDelta(),.05),Q=Oe.elapsedTime;S+=P*J,a&&(a.rotation.y=S,a.position.y=5,a.scale.setScalar(.85));for(var L=0;L<U;L++)w[L*3+1]+=Math.sin(Q*.2+L)*.05,w[L*3]+=Math.cos(Q*.15+L*.5)*.03;M.attributes.position.needsUpdate=!0,ee.rotation.y+=1e-4,ee.position.x=-S*35*.35,r.position.x=300+Math.sin(Q*.3)*100,r.position.y=350+Math.cos(Q*.2)*80,c.intensity=2+Math.sin(Q*.5)*.4,l.intensity=.8+Math.sin(Q*.4+1)*.3,Y(J),e.render(t,n)}}return De(),function(){cancelAnimationFrame(Je),je.disconnect(),t.traverse(function(J){J.geometry&&J.geometry.dispose(),J.material&&(J.material.map&&J.material.map.dispose(),J.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),a=null}}var Xt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Yt(o){let t=o.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(Xt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Qn(t):Nt(t)}),function(){n=!0,e&&e()}}function $t(o){let t=o.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(Xt).then(function(){n||(e=Wt(t))}),function(){n=!0,e&&e()}}function Qn(o){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var r=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});r.setSize(1920,1080),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setClearColor(0,1),r.toneMapping=THREE.ACESFilmicToneMapping,r.toneMappingExposure=1.4,r.domElement.style.width="100%",r.domElement.style.height="100%",o.appendChild(r.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var g=new THREE.PointLight(13931578,2.4,1200);g.position.set(-300,-100,300),n.add(g);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var S=new THREE.PointLight(16750916,1.3,600);S.position.set(0,-250,200),n.add(S);var P=0,u=0,f=0,T=0,i=!1,p=0,a=0,x=Math.PI*2/6,A=new THREE.Vector2(9999,9999),O=new THREE.Raycaster,F=120,G=new THREE.Vector3(9999,9999,0),ne=new THREE.Vector3(9999,9999,0),N=new THREE.Vector3,E=!1,X=0,C=0,q=8e4,re=.03,$=.95,k=.005,Y=12e4,U=null,M,w,m,h,s,d,z=0,H=!1,I=!1,ie=0,ee=0,we=null,Oe=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function qe(){var R=new THREE.BufferGeometry;M=new Float32Array(Y*3),w=new Float32Array(Y*3),m=new Float32Array(Y*3),h=new Float32Array(Y*3),s=new Float32Array(Y),d=new Float32Array(Y),R.setAttribute("position",new THREE.BufferAttribute(M,3)),R.setAttribute("color",new THREE.BufferAttribute(h,3)),R.setAttribute("size",new THREE.BufferAttribute(s,1)),R.setAttribute("alpha",new THREE.BufferAttribute(d,1)),R.setAttribute("velocity",new THREE.BufferAttribute(w,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,b=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,D=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:b,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});U=new THREE.Points(R,D),n.add(U)}function je(R,B){return new Promise(function(b){try{var D=512,oe=document.createElement("canvas");oe.width=oe.height=D;var te=oe.getContext("2d"),Ce=new DOMParser().parseFromString(R,"image/svg+xml"),me=Ce.querySelector("svg");if(!me){b([]);return}var Pe=parseFloat(me.getAttribute("width")||512),he=parseFloat(me.getAttribute("height")||512),ze=me.getAttribute("viewBox");if(ze){var be=ze.split(/[\s,]+/);Pe=+be[2],he=+be[3]}var Be=Math.min(D/Pe,D/he)*.9,Le=(D-Pe*Be)/2,pe=(D-he*Be)/2;te.save(),te.translate(Le,pe),te.scale(Be,Be),te.fillStyle="white",Ce.querySelectorAll("path,rect,circle").forEach(function(ye){if(ye.tagName==="path"){var We=ye.getAttribute("d");We&&te.fill(new Path2D(We))}else ye.tagName==="rect"?te.fillRect(+ye.getAttribute("x")||0,+ye.getAttribute("y")||0,+ye.getAttribute("width")||0,+ye.getAttribute("height")||0):ye.tagName==="circle"&&(te.beginPath(),te.arc(+ye.getAttribute("cx")||0,+ye.getAttribute("cy")||0,+ye.getAttribute("r")||0,0,Math.PI*2),te.fill())}),te.restore();for(var ke=te.getImageData(0,0,D,D).data,Ue=[],$e=0;$e<D;$e++)for(var Ke=0;Ke<D;Ke++){var Ze=($e*D+Ke)*4;ke[Ze+3]>30&&Ue.push({x:Ke,y:$e,a:ke[Ze+3]/255})}if(!Ue.length){b([]);return}for(var at=[],Ze=0;Ze<B;Ze++){var Ne=Ue[Math.floor(Math.random()*Ue.length)];at.push({x:(Ne.x-D/2)*1.2+(Math.random()-.5)*1.65,y:-(Ne.y-D/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ne.a,a:Ne.a})}b(at)}catch(ye){console.error(ye),b([])}})}function et(R){z=R.length;for(var B=0;B<z;B++){var b=R[B],D=B*3;M[D]=b.x,M[D+1]=b.y+40,M[D+2]=b.z,w[D]=w[D+1]=w[D+2]=0,m[D]=b.x,m[D+1]=b.y,m[D+2]=b.z;var oe=Oe[Math.floor(Math.random()*Oe.length)],te=.7+Math.random()*.4;h[D]=oe.r*te,h[D+1]=oe.g*te,h[D+2]=oe.b*te,s[B]=1.8+Math.random()*3.8,d[B]=.3+(b.a||.7)*.75}U.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(Ce){U.geometry.attributes[Ce].needsUpdate=!0}),H=!0,I=!1,ie=1}function Je(R){return je(R,Math.min(Y,q)).then(function(B){B.length&&U&&et(B)})}function De(R){if(!(!H||!z)){ee+=R;for(var B=0;B<z;B++){var b=B*3,D=B*1.37;if(w[b]+=Math.sin(ee*.4+D)*.008+Math.sin(ee*1.1+D*2.3)*.003,w[b+1]+=Math.cos(ee*.35+D*.7)*.008+Math.sin(ee*.9+D*1.5)*.004,w[b+2]+=Math.sin(ee*.25+D*1.1)*.004,w[b+1]-=re*.06,w[b]+=Math.sin(ee*.25+M[b+1]*.008)*k*.6,w[b+2]+=Math.cos(ee*.3+M[b]*.008)*k*.3,E&&ce==="interactive"){var oe=M[b]-G.x,te=M[b+1]-G.y,Ce=M[b+2]-G.z,me=oe*oe+te*te+Ce*Ce,Pe=F*F;if(me<Pe&&me>.25){var he=Math.sqrt(me),ze=he/F,be=(B*2654435761&65535)/65535,Be=.6+be*.8,Le=Math.pow(1-ze,1.5+be),pe=1+Math.min(N.length()*.12,1),ke=Le*Be*1.2*pe,Ue=1/he;w[b]+=oe*Ue*ke,w[b+1]+=te*Ue*ke,w[b+2]+=Ce*Ue*ke*.2;var $e=.02+be*.06;w[b]+=N.x*Le*$e,w[b+1]+=N.y*Le*$e;var Ke=Le*.15;w[b]+=(be-.5)*Ke,w[b+1]+=((B*48271&65535)/65535-.5)*Ke}}var Ze=m[b],at=m[b+1]+40,Ne=m[b+2],ye=Ze-M[b],We=at-M[b+1],st=Ne-M[b+2],Hn=Math.sqrt(ye*ye+We*We+st*st),_n=(B*48271&65535)/65535,On=.003+_n*.003,Bn=1+Math.min(Hn*.002,.5),ht=On*Bn;w[b]+=ye*ht,w[b+1]+=We*ht,w[b+2]+=st*ht;var Vn=(B*16807&65535)/65535,gt=$*(.92+Vn*.06);w[b]*=gt,w[b+1]*=gt,w[b+2]*=gt,M[b]+=w[b],M[b+1]+=w[b+1],M[b+2]+=w[b+2];var qn=Math.sqrt(Math.pow(M[b]-m[b],2)+Math.pow(M[b+1]-m[b+1],2)+Math.pow(M[b+2]-m[b+2],2));d[B]=.15+.55*(1-Math.min(qn*.005,1))+Math.sin(ee*1.5+B*.01)*.05}U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.alpha.needsUpdate=!0,U.geometry.attributes.velocity.needsUpdate=!0}}var J=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),L=new THREE.Vector3;function Z(R,B){var b=r.domElement.getBoundingClientRect();if(!(b.width===0||b.height===0)&&(A.set((R-b.left)/b.width*2-1,-((B-b.top)/b.height)*2+1),O.setFromCamera(A,e),O.ray.intersectPlane(Q,L))){ne.copy(G),U&&G.copy(L).applyMatrix4(J.copy(U.matrixWorld).invert()),N.subVectors(G,ne);var D=N.length();D>15&&N.multiplyScalar(15/D)}}var de=null;function le(){return de||(de=o.closest('[data-flip-element="target"]')||o),de}function xe(R,B){var b=le().getBoundingClientRect();return R>=b.left&&R<=b.right&&B>=b.top&&B<=b.bottom}var fe=o.querySelector("#logo-coords"),Se=o.querySelector("#logo-drag-label"),se=!1;function Fe(R){if(X=R.clientX,C=R.clientY,t||ce!=="interactive"){E=!1,G.set(9999,9999,0);return}var B=xe(R.clientX,R.clientY);if(B){E=!0,Z(R.clientX,R.clientY);var b=le().getBoundingClientRect(),D=Math.round(R.clientX-b.left),oe=Math.round(R.clientY-b.top);fe&&(fe.textContent="X: "+D+"PX    Y: "+oe+"PX")}else E=!1,G.set(9999,9999,0);i&&(P+=(R.clientX-p)*.005,f+=(R.clientY-a)*.005,f=Math.max(-Math.PI/2,Math.min(Math.PI/2,f)),p=R.clientX,a=R.clientY)}function Ie(R){t||ce!=="interactive"||xe(R.clientX,R.clientY)&&(i=!0,p=R.clientX,a=R.clientY)}function Te(){t||(i=!1,P=0,f=0,u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2))}window.addEventListener("mousemove",Fe),window.addEventListener("mousedown",Ie),window.addEventListener("mouseup",Te);function Ge(){for(var R=4e3,B=new THREE.BufferGeometry,b=new Float32Array(R*3),D=new Float32Array(R*3),oe=0;oe<R;oe++){b[oe*3]=(Math.random()-.5)*2200,b[oe*3+1]=(Math.random()-.5)*1800,b[oe*3+2]=-200-Math.random()*1800;var te=Oe[Math.floor(Math.random()*Oe.length)],Ce=.2+Math.random()*.3;D[oe*3]=te.r*Ce,D[oe*3+1]=te.g*Ce,D[oe*3+2]=te.b*Ce}B.setAttribute("position",new THREE.BufferAttribute(b,3)),B.setAttribute("color",new THREE.BufferAttribute(D,3));var me=document.createElement("canvas");me.width=me.height=32;var Pe=me.getContext("2d"),he=Pe.createRadialGradient(16,16,0,16,16,16);he.addColorStop(0,"rgba(255,255,255,1)"),he.addColorStop(.3,"rgba(255,255,255,0.6)"),he.addColorStop(.7,"rgba(255,255,255,0.15)"),he.addColorStop(1,"rgba(255,255,255,0)"),Pe.fillStyle=he,Pe.fillRect(0,0,32,32);var ze=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(me),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),be=new THREE.Points(B,ze);return be.userData={positions:b,count:R},n.add(be),be}qe();var ve=Ge(),Me='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Je(Me);var Ee=new THREE.Clock,ce="spin",_=null;function ae(){if(t){ce="spin";return}if(_===null){var R=document.querySelector(".scaling-element-video");_=R&&getComputedStyle(R).display!=="none"}if(!_){ce="spin";return}var B=window._flipProgress||0;B>.85?ce="interactive":B>.7?ce="transition":ce="spin"}var y="spin",W=!0,v=new IntersectionObserver(function(R){W=R[0].isIntersecting},{threshold:0});v.observe(o);var V=!1,K=null,j=0;function Re(){V=!0,clearTimeout(K),K=setTimeout(function(){V=!1},150);var R=xe(X,C);R?(E=!0,Z(X,C)):(E=!1,G.set(9999,9999,0))}window.addEventListener("scroll",Re,{passive:!0});function Ae(){if(we=requestAnimationFrame(Ae),!!W){j++;var R=Math.min(Ee.getDelta(),.05),B=Ee.elapsedTime;ae(),y==="interactive"&&ce!=="interactive"&&(E=!1,G.set(9999,9999,0),i=!1);var b=ce==="transition"||ce==="interactive";if(b&&!se?(se=!0,Se&&(Se.style.transform="translateY(0)"),fe&&(fe.style.transform="translateY(0)")):!b&&se&&(se=!1,Se&&(Se.style.transform="translateY(100%)"),fe&&(fe.style.transform="translateY(100%)")),y=ce,E&&!xe(X,C)&&(E=!1,G.set(9999,9999,0)),ce==="spin")u+=x*R,T+=(0-T)*.05;else if(ce==="transition")u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),u+=(0-u)*.025,T+=(0-T)*.025;else{var D=P-u;D=D%(Math.PI*2),D>Math.PI&&(D-=Math.PI*2),D<-Math.PI&&(D+=Math.PI*2),u+=D*.12,T+=(f-T)*.12}U&&(U.rotation.x=T,U.rotation.y=u,U.scale.setScalar(1),U.position.y=-15);for(var oe=ve.userData.positions,te=0;te<ve.userData.count;te++)oe[te*3+1]+=Math.sin(B*.2+te)*.05,oe[te*3]+=Math.cos(B*.15+te*.5)*.03;ve.geometry.attributes.position.needsUpdate=!0,ve.rotation.y+=1e-4,ve.position.x=-u*35*.35,ve.position.y=T*28*.35,c.position.x=300+Math.sin(B*.3)*100,c.position.y=350+Math.cos(B*.2)*80,g.intensity=2+Math.sin(B*.5)*.4,S.intensity=.8+Math.sin(B*.4+1)*.3,!(t&&V&&j%4!==0)&&(De(R),r.render(n,e))}}return Ae(),function(){cancelAnimationFrame(we),window.removeEventListener("mousemove",Fe),window.removeEventListener("mousedown",Ie),window.removeEventListener("mouseup",Te),window.removeEventListener("scroll",Re),clearTimeout(K),v.disconnect(),n.traverse(function(R){R.geometry&&R.geometry.dispose(),R.material&&(R.material.map&&R.material.map.dispose(),R.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),U=null}}function Kt(o){let t=document.querySelector("[data-load-wrap]");if(!t)return null;ge.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),r=t.querySelector("[data-load-logo]"),c=Array.from(t.querySelectorAll("[data-load-text]")),g=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),l=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(r,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Xe},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(g.length&&l.set(g,{autoAlpha:1},0),c.length>=2){let S=new SplitText(c[0],{type:"lines,chars",mask:"lines"}),P=new SplitText(c[1],{type:"lines,chars",mask:"lines"});gsap.set([S.chars,P.chars],{autoAlpha:0,yPercent:125}),gsap.set(c,{autoAlpha:1}),l.to(S.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),l.to(S.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),l.to(P.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),l.to(P.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return l}function Zt(o){let n=[...(o||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(u=>{let f=u.parentElement;f&&(u.style.whiteSpace="nowrap",e.has(f)||e.set(f,[]),e.get(f).push(u))});function r(u){let f=getComputedStyle(u);return u.clientWidth-parseFloat(f.paddingLeft)-parseFloat(f.paddingRight)}function c(u,f){if(f<=0)return;let T=parseFloat(getComputedStyle(u).fontSize)||16;for(let i=0;i<5;i++){let p=u.getBoundingClientRect().width;if(p<=0)break;let a=f/p;if(Math.abs(a-1)<.002)break;T*=a,u.style.fontSize=T+"px"}}function g(){e.forEach((u,f)=>{let T=r(f);u.forEach(i=>c(i,T))})}let l=null;function S(){l||(l=requestAnimationFrame(()=>{l=null,g()}))}let P;return window.ResizeObserver&&(P=new ResizeObserver(S),e.forEach((u,f)=>P.observe(f))),window.addEventListener("resize",S),g(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(g),()=>{l&&cancelAnimationFrame(l),P&&P.disconnect(),window.removeEventListener("resize",S),n.forEach(u=>{u.style.whiteSpace="",u.style.fontSize=""})}}var He={duration:.8,ease:"expo.out"},jt=.08,er={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Jt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function tr(o,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:o,transformOrigin:t}),n}function Qt(o){var t=o.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(r){var c=r.getAttribute("data-marker-direction")||"right",g=r.getAttribute("data-marker-theme")||"#000000",l=r.getAttribute("data-marker-scroll-start")||"top 90%",S=g.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(g).trim()||g,P=Jt[c]||Jt.right,u=er[r.getAttribute("data-highlight-marker-reveal")]||null;u&&(S=u.bar);var f=r.closest("[data-cursor-label]"),T={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,p=SplitText.create(r,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){T.timeline&&T.timeline.kill(),T.scrollTrigger&&T.scrollTrigger.kill(),r.querySelectorAll(".highlight-marker-bar").forEach(function(E){E.remove()}),T.listeners.forEach(function(E){E.el.removeEventListener(E.type,E.fn)}),T.listeners=[],i=!1;var x=a.lines,A=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(x.forEach(function(E,X){gsap.set(E,{position:"relative",overflow:"hidden"});var C=tr(S,P.origin);gsap.set(C,{[P.prop]:0}),E.appendChild(C),u&&(gsap.set(E,{zIndex:0,color:u.text}),gsap.set(C,{zIndex:-1})),A.to(C,{[P.prop]:1,duration:He.duration,ease:He.ease},X*jt);var q=function(){i&&(gsap.to(C,{[P.prop]:0,duration:He.duration,ease:He.ease}),u&&gsap.to(E,{color:u.hoverText,duration:He.duration,ease:He.ease}))},re=function(){i&&(gsap.to(C,{[P.prop]:1,duration:He.duration,ease:He.ease}),u&&gsap.to(E,{color:u.text,duration:He.duration,ease:He.ease}))};!u&&e&&(E.addEventListener("mouseenter",q),E.addEventListener("mouseleave",re),T.listeners.push({el:E,type:"mouseenter",fn:q},{el:E,type:"mouseleave",fn:re}))}),T.timeline=A,f){A.kill();var O=r.querySelectorAll(".highlight-marker-bar"),F=function(E){gsap.to(O,{[P.prop]:E,duration:He.duration,ease:He.ease,stagger:jt,overwrite:!0})},G=function(){F(1)},ne=function(){F(0)};f.addEventListener("cursorlabel:enter",G),f.addEventListener("cursorlabel:leave",ne),T.listeners.push({el:f,type:"cursorlabel:enter",fn:G},{el:f,type:"cursorlabel:leave",fn:ne});return}var N=ScrollTrigger.create({trigger:r,start:l,once:!0,onEnter:function(){A.play()}});T.scrollTrigger=N}});T.split=p,n.push(T)}),function(){n.forEach(function(r){r.timeline&&r.timeline.kill(),r.scrollTrigger&&r.scrollTrigger.kill(),r.listeners.forEach(function(c){c.el.removeEventListener(c.type,c.fn)}),r.split&&r.split.revert()})}}function en(o){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,r=o.querySelector("[data-cursor-marquee-status]");if(!r)return;let c=r.querySelectorAll("[data-cursor-marquee-text-target]"),g=o.querySelectorAll("[data-cursor-marquee-text]");if(!g.length)return;let l=gsap.quickTo(r,"x",{duration:n,ease:"power3"}),S=gsap.quickTo(r,"y",{duration:n,ease:"power3"}),P=null,u=f=>{l(f.clientX),S(f.clientY)};return window.addEventListener("pointermove",u,{passive:!0}),g.forEach(f=>{f.addEventListener("mouseenter",()=>{P&&clearTimeout(P);let T=f.getAttribute("data-cursor-marquee-text")||"",i=(T.length||1)/e;c.forEach(p=>{p.textContent=T,p.style.animationPlayState="running",p.style.animationDuration=i+"s"}),r.setAttribute("data-cursor-marquee-status","active")}),f.addEventListener("mouseleave",()=>{r.setAttribute("data-cursor-marquee-status","not-active"),P&&clearTimeout(P),P=setTimeout(()=>{c.forEach(T=>{T.style.animationPlayState="paused"})},t*1e3)})}),r.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",u),clearTimeout(P),gsap.killTweensOf(r)}}function tn(o){o.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function nn(o){let t=o.querySelectorAll("[data-flip-element='wrapper']"),n=o.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function r(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(l){window._flipProgress=l.progress}}}),t.forEach(function(l,S){let P=S+1;if(P<t.length){let u=t[P],f=u.getBoundingClientRect(),T=l.getBoundingClientRect(),i=f.top+window.pageYOffset+u.offsetHeight/2,p=T.top+window.pageYOffset+l.offsetHeight/2,a=i-p;e.add(Flip.fit(n,u,{duration:a,ease:"none"}))}})}r();let c,g=function(){clearTimeout(c),c=setTimeout(function(){r()},100)};return window.addEventListener("resize",g),function(){clearTimeout(c),window.removeEventListener("resize",g),e&&e.kill()}}var nr="150%";function rr(o){let t=[];return o.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let r of e){if(r===" "){n.append(" ");continue}let c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.textContent=r,n.append(c),t.push(c)}}),t}var Et=new WeakMap;function rn(o){let t=o.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(c){return Array.from(c.querySelectorAll("textPath")).map(function(g){return g.textContent})}),r=n.map(rr);return r.forEach(function(c){gsap.set(c,{fillOpacity:0})}),Et.set(o,{wrap:t,lines:n,lineChars:r}),function(){Et.delete(o),n.forEach(function(c,g){c.querySelectorAll("textPath").forEach(function(l,S){l.textContent=e[g][S]})})}}function on(o){let t=Et.get(o);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+nr,pin:!0,scrub:!0}});return t.lines.forEach(function(e,r){let c=t.lineChars[r];c.length&&n.fromTo(c,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/c.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function wt(o){var t=[];function n(i,p,a,x){i.addEventListener(p,a,x),t.push(function(){i.removeEventListener(p,a,x)})}o.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var p=i.getAttribute("data-player-src");if(!p)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(_){}try{a.removeAttribute("src"),a.load()}catch(_){}function x(_){i.getAttribute("data-player-status")!==_&&i.setAttribute("data-player-status",_)}function A(_){a.muted=!!_,i.setAttribute("data-player-muted",a.muted?"true":"false")}function O(_){i.setAttribute("data-player-fullscreen",_?"true":"false")}function F(_){i.setAttribute("data-player-activated",_?"true":"false")}i.hasAttribute("data-player-activated")||F(!1);var G=i.querySelector("[data-player-timeline]"),ne=i.querySelector("[data-player-progress]"),N=i.querySelector("[data-player-buffered]"),E=i.querySelector("[data-player-timeline-handle]"),X=i.querySelectorAll("[data-player-time-duration]"),C=i.querySelectorAll("[data-player-time-progress]"),q=i.getAttribute("data-player-update-size"),re=i.getAttribute("data-player-lazy"),$=re==="true",k=re==="meta",Y=i.getAttribute("data-player-autoplay")==="true",U=i.getAttribute("data-player-muted")==="true",M=!1;Y?(A(!0),a.loop=!0):A(U),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),Y&&(a.autoplay=!1);var w=!!a.canPlayType("application/vnd.apple.mpegurl"),m=w&&"ManagedMediaSource"in window,h=!!(window.Hls&&Hls.isSupported())&&!m;if(q==="true"&&!k&&!$){var s=a.preload;a.preload="metadata";var d=function(){P(i,q,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",d),a.preload=s||""};n(a,"loadedmetadata",d,{once:!0}),a.src=p}function z(){T(p,h).then(function(_){_.width&&_.height&&P(i,q,_.width,_.height),X.length&&isFinite(_.duration)&&_.duration>0&&c(X,r(_.duration)),S(i,M)})}var H=!1,I=!1,ie="";function ee(){if(!H){if(H=!0,i._hls){try{i._hls.destroy()}catch(ae){}i._hls=null}if(m)a.preload=$||k?"auto":a.preload,a.src=p,n(a,"loadedmetadata",function(){S(i,M),q==="true"&&P(i,q,a.videoWidth,a.videoHeight),X.length&&c(X,r(a.duration))},{once:!0});else if(h){var _=new Hls({maxBufferLength:10});_.attachMedia(a),_.on(Hls.Events.MEDIA_ATTACHED,function(){_.loadSource(p)}),_.on(Hls.Events.MANIFEST_PARSED,function(){if(S(i,M),q==="true"){var ae=_.levels||[],y=g(ae);y&&y.width&&y.height&&P(i,q,y.width,y.height)}}),_.on(Hls.Events.LEVEL_LOADED,function(ae,y){y&&y.details&&isFinite(y.details.totalduration)&&X.length&&c(X,r(y.details.totalduration))}),i._hls=_}else a.src=p}}k?(z(),a.preload="none"):$?a.preload="none":ee();function we(){I=!0,a.paused||a.ended?(($||k)&&!H&&ee(),M=!0,ie="",x("loading"),l(a)):(ie="manual",a.pause())}function Oe(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function qe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function je(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function et(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function Je(){qe()||a.webkitDisplayingFullscreen?et():je()}n(document,"fullscreenchange",function(){O(qe())}),n(document,"webkitfullscreenchange",function(){O(qe())}),n(a,"webkitbeginfullscreen",function(){O(!0)}),n(a,"webkitendfullscreen",function(){O(!1)}),n(i,"click",function(_){var ae=_.target.closest("[data-player-control]");if(!(!ae||!i.contains(ae))){var y=ae.getAttribute("data-player-control");y==="play"||y==="pause"||y==="playpause"?we():y==="mute"?Oe():y==="fullscreen"&&Je()}});function De(){X.length&&c(X,r(a.duration)),C.length&&c(C,r(a.currentTime))}n(a,"timeupdate",De),n(a,"loadedmetadata",function(){De(),u(i,q,a)}),n(a,"loadeddata",function(){u(i,q,a)}),n(a,"playing",function(){u(i,q,a)}),n(a,"durationchange",De);var J;function Q(){if(a.duration){var _=a.currentTime/a.duration*100;ne&&(ne.style.transform="translateX("+(-100+_)+"%)"),E&&(E.style.left=_+"%")}}function L(){Q(),!a.paused&&!a.ended&&(J=requestAnimationFrame(L))}function Z(){if(!(!N||!a.duration||!a.buffered.length)){var _=a.buffered.end(a.buffered.length-1),ae=_/a.duration*100;N.style.transform="translateX("+(-100+ae)+"%)"}}if(n(a,"progress",Z),n(a,"loadedmetadata",Z),n(a,"durationchange",Z),n(a,"play",function(){F(!0),cancelAnimationFrame(J),L(),x("playing")}),n(a,"playing",function(){M=!1,x("playing")}),n(a,"pause",function(){M=!1,cancelAnimationFrame(J),Q(),x("paused")}),n(a,"waiting",function(){x("loading")}),n(a,"canplay",function(){S(i,M)}),n(a,"ended",function(){M=!1,cancelAnimationFrame(J),Q(),x("paused"),F(!1)}),G){let _=function(K){se||(se=G.getBoundingClientRect());var j=(K-se.left)/se.width;return j<0&&(j=0),j>1&&(j=1),j},ae=function(K){if(a.duration){var j=K*100;ne&&(ne.style.transform="translateX("+(-100+j)+"%)"),E&&(E.style.left=j+"%"),C.length&&c(C,r(K*a.duration))}},y=function(K){a.duration&&(K-fe<Se||(fe=K,a.currentTime=xe))},W=function(K){if(a.duration){de=!0,le=!a.paused&&!a.ended,le&&a.pause(),i.setAttribute("data-timeline-drag","true"),se=G.getBoundingClientRect();var j=_(K.clientX);xe=j*a.duration,ae(j),y(performance.now()),G.setPointerCapture&&G.setPointerCapture(K.pointerId),window.addEventListener("pointermove",v,{passive:!1}),window.addEventListener("pointerup",V,{passive:!0}),K.preventDefault()}},v=function(K){if(de){var j=_(K.clientX);xe=j*a.duration,ae(j),y(performance.now()),K.preventDefault()}},V=function(){de&&(de=!1,i.setAttribute("data-timeline-drag","false"),se=null,a.currentTime=xe,le?l(a):(Q(),De()),window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",V))};var de=!1,le=!1,xe=0,fe=0,Se=180,se=null;n(window,"resize",function(){de||(se=null)}),n(G,"pointerdown",W,{passive:!1}),E&&n(E,"pointerdown",W,{passive:!1})}var Fe,Ie=3e3;function Te(_){i.getAttribute("data-player-hover")!==_&&i.setAttribute("data-player-hover",_)}function Ge(){clearTimeout(Fe),Fe=setTimeout(function(){Te("idle")},Ie)}function ve(){Te("active"),Ge()}n(i,"pointerdown",ve),n(document,"fullscreenchange",ve),n(document,"webkitfullscreenchange",ve);var Me=!1;function Ee(_){var ae=i.getBoundingClientRect();_.clientX>=ae.left&&_.clientX<=ae.right&&_.clientY>=ae.top&&_.clientY<=ae.bottom&&ve()}if(n(i,"pointerenter",function(){ve(),Me||(Me=!0,n(window,"pointermove",Ee,{passive:!0}))}),n(i,"pointerleave",function(){Te("idle"),clearTimeout(Fe),Me&&(Me=!1,window.removeEventListener("pointermove",Ee))}),Y){var ce=new IntersectionObserver(function(_){_.forEach(function(ae){var y=ae.isIntersecting&&ae.intersectionRatio>0;y?(($||k)&&!H&&ee(),a.paused?(ie="",M=!0,x("loading"),l(a)):x("playing")):!a.paused&&!a.ended&&(ie="io",a.pause(),x("paused"))})},{threshold:.1});ce.observe(i)}t.push(function(){if(cancelAnimationFrame(J),clearTimeout(Fe),ce&&ce.disconnect(),i._hls){try{i._hls.destroy()}catch(_){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(_){}})});function e(i){return(i<10?"0":"")+i}function r(i){if(!isFinite(i)||i<0)return"00:00";var p=Math.floor(i),a=Math.floor(p/3600),x=Math.floor(p%3600/60),A=p%60;return a>0?a+":"+e(x)+":"+e(A):e(x)+":"+e(A)}function c(i,p){i.forEach(function(a){a.textContent=p})}function g(i){return!i||!i.length?null:i.reduce(function(p,a){return(a.width||0)>(p.width||0)?a:p},i[0])}function l(i){var p=i.play();p&&typeof p.then=="function"&&p.catch(function(){})}function S(i,p){!p&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function P(i,p,a,x){if(!(p!=="true"||!a||!x)){var A=i.querySelector("[data-player-before]");A&&(A.style.paddingTop=x/a*100+"%")}}function u(i,p,a){if(p==="true"){var x=i.querySelector("[data-player-before]");if(x){var A=x.style.paddingTop&&x.style.paddingTop!=="0%";!A&&a.videoWidth&&a.videoHeight&&P(i,p,a.videoWidth,a.videoHeight)}}}function f(i,p){try{return new URL(p,i).toString()}catch(a){return p}}function T(i,p){return new Promise(function(a){if(p&&window.Hls&&Hls.isSupported())try{var x=new Hls,A={width:0,height:0,duration:NaN},O=!1,F=!1;x.on(Hls.Events.MANIFEST_PARSED,function(N,E){var X=E&&E.levels||x.levels||[],C=g(X);C&&C.width&&C.height&&(A.width=C.width,A.height=C.height,O=!0)}),x.on(Hls.Events.LEVEL_LOADED,function(N,E){E&&E.details&&isFinite(E.details.totalduration)&&(A.duration=E.details.totalduration,F=!0)}),x.on(Hls.Events.ERROR,function(){try{x.destroy()}catch(N){}a(A)}),x.on(Hls.Events.LEVEL_LOADED,function(){try{x.destroy()}catch(N){}a(A)}),x.loadSource(i);return}catch(N){a({width:0,height:0,duration:NaN});return}function G(N){for(var E=N.split(/\r?\n/),X=0,C=0,q=null,re=null,$=0;$<E.length;$++){var k=E[$];if(k.indexOf("#EXT-X-STREAM-INF:")===0)re=k;else if(re&&k&&k[0]!=="#"){q||(q=k.trim());var Y=/RESOLUTION=(\d+)x(\d+)/.exec(re);if(Y){var U=parseInt(Y[1],10),M=parseInt(Y[2],10);U>X&&(X=U,C=M)}re=null}}return{bestW:X,bestH:C,media:q}}function ne(N){for(var E=0,X=/#EXTINF:([\d.]+)/g,C;C=X.exec(N);)E+=parseFloat(C[1]);return E}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(N){if(!N.ok)throw new Error("master");return N.text()}).then(function(N){var E=G(N);if(!E.media){a({width:E.bestW||0,height:E.bestH||0,duration:NaN});return}var X=f(i,E.media);return fetch(X,{credentials:"omit",cache:"no-store"}).then(function(C){if(!C.ok)throw new Error("media");return C.text()}).then(function(C){a({width:E.bestW||0,height:E.bestH||0,duration:ne(C)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(i){i()}),t=[]}}var or="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",ar="(min-width: 768px)";function sn(o){if(!o.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=wt(o),n=an(o);else{let e=!1;return ct(or).catch(function(){}).then(function(){e||(t=wt(o),n=an(o))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function an(o){if(!o.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let r="",c=!1,g,l,S,P,u,f,T="",i="",p="",a=(s,d=o)=>d.querySelector(s),x=s=>a(`[data-mini-showreel-lightbox="${s}"]`),A=s=>a(`[data-mini-showreel-player="${s}"]`),O=s=>s.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",s)||s,F=(s,d)=>{let z=s.width,H=z/d;return H>s.height&&(H=s.height,z=H*d),{left:s.left+(s.width-z)/2,top:s.top+(s.height-H)/2,width:z,height:H}},G=s=>{let d=O(s).getBoundingClientRect(),z=s.getBoundingClientRect(),H=z.width>0&&z.height>0?z.width/z.height:16/9;return F(d,H)},ne=(s,d)=>gsap.set(s,{position:"fixed",left:d.left,top:d.top,width:d.width,height:d.height,margin:0,x:0,y:0});function N(s){r&&o.querySelectorAll(`[data-mini-showreel-lightbox="${r}"], [data-mini-showreel-player="${r}"]`).forEach(d=>d.setAttribute("data-mini-showreel-status",s))}function E(){i=(g==null?void 0:g.style.zIndex)||"",p=(l==null?void 0:l.style.zIndex)||"",g&&(g.style.zIndex=String(e)),l&&(l.style.zIndex=String(e))}function X(){g&&(g.style.zIndex=i),l&&(l.style.zIndex=p)}function C(s){let d=A(s);if(!d)return;let z=d.querySelector("[data-bunny-player-init]"),H=d.querySelector("video");if(H){if(z){let I=z.querySelector('[data-player-control="play"], [data-player-control="playpause"]');I&&(H.paused||H.ended)&&I.click();return}try{H.play()}catch(I){}}}function q(s){let d=A(s);if(!d)return;let z=d.querySelector("[data-bunny-player-init]"),H=d.querySelector("video");H&&(H.muted=!0,z&&z.setAttribute("data-player-muted","true"),(H.paused||H.ended)&&C(s))}function re(){X(),r="",c=!1,g=l=S=P=u=f=null,T="",i="",p="",ge.start()}function $(s){if(!s||c||(g=x(s),l=A(s),!g||!l)||(S=a("[data-mini-showreel-target]",g),!S))return;r=s,c=!0,ge.stop(),l.dataset.flipId=r,T=l.style.cssText||"",P=l.parentElement,u=l.nextSibling,E(),N("active"),C(r);let d=Flip.getState(l),z=G(S);g.appendChild(l),ne(l,z),f=Flip.from(d,{duration:t,ease:n,absolute:!0,scale:!1})}function k(s){!c||!l||s&&s!==r||(q(r),N("not-active"),f&&f.kill(),f=Flip.fit(l,P,{duration:t,ease:n,scale:!1,onComplete:()=>{P.insertBefore(l,u),l.style.cssText=T,re()}}))}function Y(){!c||!l||(f&&f.kill(),q(r),N("not-active"),P.insertBefore(l,u),l.style.cssText=T,re())}function U(){!c||!l||!S||ne(l,G(S))}function M(s){let d=s.target.closest("[data-mini-showreel-open]");d&&(s.preventDefault(),$(d.getAttribute("data-mini-showreel-open")||""))}function w(s){let d=s.target.closest("[data-mini-showreel-close]");d&&(s.preventDefault(),k(d.getAttribute("data-mini-showreel-close")||""))}function m(s){s.key==="Escape"&&k("")}let h=gsap.matchMedia();return h.add(ar,function(){return o.addEventListener("click",M),document.addEventListener("click",w),window.addEventListener("keydown",m),window.addEventListener("resize",U),function(){Y(),o.removeEventListener("click",M),document.removeEventListener("click",w),window.removeEventListener("keydown",m),window.removeEventListener("resize",U)}}),function(){h.revert(),Y()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",o=>{it.x=o.clientX,it.y=o.clientY,it.known=!0},{passive:!0});function Qe(o){let t=e=>o(e.clientX,e.clientY),n=()=>{it.known&&o(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var _e=1920,Ve=1080,St="#E5E5E5",Tt="#000000",cn="http://www.w3.org/2000/svg";function ln(o){let t=o.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(cn,"svg");n.setAttribute("viewBox",`0 0 ${_e} ${Ve}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(h,s)=>{let d=document.createElementNS(cn,h);return d.setAttribute("fill",s),n.appendChild(d),d},r=e("polygon",St),c=e("polygon",Tt),g=e("rect",Tt),l=e("rect",St),S=e("rect",St),P=e("rect",Tt);[g,l,S,P].forEach(h=>h.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let u=(h,s,d,z,H)=>{h.setAttribute("x",s),h.setAttribute("y",d),h.setAttribute("width",Math.max(0,z)),h.setAttribute("height",Math.max(0,H))},f={x:_e*(2/3),y:Ve*(1/3)},T=.1,i=.9,p={x:f.x,y:f.y},a={x:f.x,y:f.y},x={x:f.x,y:f.y},A=!1,O=()=>gsap.to(x,{x:gsap.utils.random(_e*.327,_e*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:O}),F=()=>gsap.to(x,{y:gsap.utils.random(Ve*.193,Ve*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:F});O(),F();function G(){let h=gsap.utils.clamp(_e*T,_e*i,p.x),s=_e-h,d=gsap.utils.clamp(Ve*T,Ve*i,p.y),z=Ve-d;r.setAttribute("points",`0,${d} ${h},0 ${_e},${d} ${_e},${Ve} 0,${Ve}`),c.setAttribute("points",`${_e},${d} ${h},0 ${h},${d}`),u(g,0,d,h,z);let H=h*.25,I=z*(2/3);u(l,h/2-H/2,d+z-I,H,I),u(S,h,d,s,z);let ie=s*.5,ee=z/3;u(P,h+s/2-ie/2,d+z/2-ee/2,ie,ee)}let ne=.1,N=.03;function E(){let s=1-Math.pow(1-(A?ne:N),gsap.ticker.deltaRatio(60)),d=A?a:x;p.x+=(d.x-p.x)*s,p.y+=(d.y-p.y)*s,G()}let X=(h,s)=>{let d=t.getBoundingClientRect();!d.width||!d.height||(a.x=gsap.utils.clamp(0,_e,(h-d.left)/d.width*_e),a.y=gsap.utils.clamp(0,Ve,(s-d.top)/d.height*Ve),A=!0)},C=()=>{A=!1},q=(h,s)=>{let d=t.getBoundingClientRect();h>=d.left&&h<=d.right&&s>=d.top&&s<=d.bottom?X(h,s):C()},$=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Qe(q):null,k=h=>{let s=h.touches[0];s&&X(s.clientX,s.clientY)},Y={passive:!0};t.addEventListener("touchstart",k,Y),t.addEventListener("touchmove",k,Y),t.addEventListener("touchend",C,Y),t.addEventListener("touchcancel",C,Y);let U=!1,M=()=>{U||(U=!0,gsap.ticker.add(E))},w=()=>{U&&(U=!1,gsap.ticker.remove(E))},m=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:h=>h.isActive?M():w()});return G(),M(),function(){w(),m.kill(),gsap.killTweensOf(x),$&&$(),t.removeEventListener("touchstart",k,Y),t.removeEventListener("touchmove",k,Y),t.removeEventListener("touchend",C,Y),t.removeEventListener("touchcancel",C,Y),n.remove()}}var ir="http://www.w3.org/2000/svg";var sr=4.1343749999999995,cr="#AFAFAF",lr="#000000",ur=5e3,dr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],vr=0,un=(o,t)=>{if(o<0||t<0||o>=20||t>=20)return!1;let n=20/2;return Math.hypot(o+.5-n,t+.5-n)<=n},Ye=(o,t)=>{let n=document.createElementNS(ir,o);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function dn(o){let t=o.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let r="pulse-dots-liquid-"+ ++vr;e.setAttribute("data-pulse-dots-paused","");let c=Ye("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});c.style.setProperty("--pd-step",`${31.5}px`);let g=Ye("filter",{id:r,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});g.append(Ye("feGaussianBlur",{in:"SourceGraphic",stdDeviation:sr.toFixed(2)}),Ye("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let l=Ye("defs",{});l.appendChild(g);let S=Ye("rect",{width:1e3,height:1e3,fill:cr}),P=Ye("g",{filter:`url(#${r})`,fill:lr});for(let f=0;f<20;f++)for(let T=0;T<20;T++){if(!un(T,f))continue;let i=dr.filter(O=>un(T+O.dx,f+O.dy)),p=i[Math.floor(Math.random()*i.length)],a=185+T*31.5+27.5625/2,x=185+f*31.5+27.5625/2,A=Ye("g",{transform:`rotate(${p.deg} ${a} ${x})`});A.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*ur)}ms`),A.append(Ye("circle",{class:"pulse-dots__dot is--first",cx:a,cy:x,r:27.5625/2}),Ye("circle",{class:"pulse-dots__dot is--last",cx:a,cy:x,r:27.5625/2})),P.appendChild(A)}c.append(l,S,P),e.appendChild(c);let u=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:f=>e.toggleAttribute("data-pulse-dots-paused",!f.isActive)});e.toggleAttribute("data-pulse-dots-paused",!u.isActive),n.push(()=>{u.kill(),e.removeAttribute("data-pulse-dots-paused"),c.remove()})}),()=>n.forEach(e=>e())}var ft=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,vn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,fn=`#version 300 es
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
}`,pn=[`#version 300 es
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
}`],mn=`#version 300 es
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
}`,hn=`#version 300 es
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
}fragColor = color;}`,gn=`#version 300 es
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
}`,xn=[`#version 300 es
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
fragColor = color;}`],bn=[`#version 300 es
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
}`],yn=`#version 300 es
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
}`;var At=60,pr=1.5,mr=1,Pn=150,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function En(o){let t=o.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let r=!!e.getExtension("EXT_color_buffer_float");function c(m,h){let s=e.createShader(m);return e.shaderSource(s,h),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let g=[];function l(m,h=vn){let s=e.createProgram(),d=c(e.VERTEX_SHADER,h),z=c(e.FRAGMENT_SHADER,m);e.attachShader(s,d),e.attachShader(s,z),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(d),e.deleteShader(z),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let H={},I=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let ee=0;ee<I;ee++){let we=e.getActiveUniform(s,ee);H[we.name]=e.getUniformLocation(s,we.name)}let ie={p:s,loc:H};return g.push(ie),ie}let S={bg:l(fn,ft),shapes:pn.map(m=>l(m,mn)),trailSim:l(gn,ft),trail:l(hn),blur:xn.map(m=>l(m)),bloom:bn.map(m=>l(m)),gmap:l(yn,ft)},P=e.createVertexArray();e.bindVertexArray(P);let u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let f=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let T=[];function i(m,h,s=!1){let d=e.createTexture();e.bindTexture(e.TEXTURE_2D,d),s&&r?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,m,h,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,m,h,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let z=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,z),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let H={tex:d,fb:z,w:m,h};return T.push(H),H}function p(){T.forEach(m=>{e.deleteTexture(m.tex),e.deleteFramebuffer(m.fb)}),T.length=0}function a(m,h,s,d){e.useProgram(m.p);let z=h?h.w:n.width,H=h?h.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,h?h.fb:null),e.viewport(0,0,z,H);let I=m.loc;I.uMVMatrix&&e.uniformMatrix4fv(I.uMVMatrix,!1,Ct),I.uPMatrix&&e.uniformMatrix4fv(I.uPMatrix,!1,Ct),I.uTextureMatrix&&e.uniformMatrix4fv(I.uTextureMatrix,!1,Ct),I.uResolution&&e.uniform2f(I.uResolution,z,H),I.uArtboardResolution&&e.uniform2f(I.uArtboardResolution,1920,1920),I.uAspectRatio&&e.uniform1f(I.uAspectRatio,1),I.uMousePos&&e.uniform2f(I.uMousePos,x.x,x.y),I.uIsMask&&e.uniform1i(I.uIsMask,0),I.uParentTrackMouse&&e.uniform1f(I.uParentTrackMouse,0);let ie=0;Object.keys(s).forEach(ee=>{I[ee]&&(e.activeTexture(e.TEXTURE0+ie),e.bindTexture(e.TEXTURE_2D,s[ee].tex),e.uniform1i(I[ee],ie),ie++)}),Object.keys(d||{}).forEach(ee=>{if(!I[ee])return;let we=d[ee];Array.isArray(we)?e.uniform2f(I[ee],we[0],we[1]):e.uniform1f(I[ee],we)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let x={x:.5,y:.5},A={x:.5,y:.5},O=0,F=null,G=0;function ne(){p();let m=Math.min(pr,window.devicePixelRatio||1),h=Math.max(1,Math.round(t.clientWidth*m)),s=Math.max(1,Math.round(t.clientHeight*m));n.width=h,n.height=s;let d=I=>[Math.max(1,Math.round(h*I)),Math.max(1,Math.round(s*I))];F={a:i(h,s),b:i(h,s),pp:[i(...d(.5),!0),i(...d(.5),!0)],trail:i(h,s),blur1:i(...d(1)),blur2:i(...d(1)),blur3:i(...d(1)),blur4:i(...d(1)),bth:i(...d(1)),bd1:i(...d(1)),bd2:i(...d(1)),bs1:i(...d(1)),bs2:i(...d(1)),bloom:i(h,s)},a(S.bg,F.a,{});let z=F.a,H=F.b;S.shapes.forEach(I=>{a(I,H,{uBgTexture:z});let ie=z;z=H,H=ie}),F.base=z,G=0}function N(){if(!F)return;let m=F.pp[G],h=F.pp[1-G];a(S.trailSim,h,{uPingPongTexture:m},{uTime:O,uPreviousMousePos:[A.x,A.y]}),G=1-G,a(S.trail,F.trail,{uTexture:F.base,uPingPongTexture:h}),a(S.blur[0],F.blur1,{uTexture:F.trail}),a(S.blur[1],F.blur2,{uTexture:F.blur1}),a(S.blur[2],F.blur3,{uTexture:F.blur2}),a(S.blur[3],F.blur4,{uTexture:F.blur3});let s=F.blur4;a(S.bloom[0],F.bth,{uTexture:s}),a(S.bloom[1],F.bd1,{uTexture:F.bth}),a(S.bloom[2],F.bd2,{uTexture:F.bd1,uBgTexture:s}),a(S.bloom[3],F.bs1,{uTexture:F.bd2}),a(S.bloom[4],F.bs2,{uTexture:F.bs1,uBgTexture:s}),a(S.bloom[5],F.bloom,{uTexture:F.bs2,uBgTexture:s}),a(S.gmap,null,{uTexture:F.bloom},{uTime:0}),A.x=x.x,A.y=x.y}let E=Pn,C=Qe((m,h)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(x.x=(m-s.left)/s.width,x.y=1-(h-s.top)/s.height,E=0,Y())}),q=null,re=0,$=!1;function k(m){if(!$||E>=Pn){q=null;return}if(q=requestAnimationFrame(k),m-re<1e3/At-1)return;let h=re?Math.min(m-re,100):1e3/At;re=m,O+=mr*(h/(1e3/At)),N(),E++}function Y(){$&&!q&&(A.x=x.x,A.y=x.y,re=0,q=requestAnimationFrame(k))}let U=new IntersectionObserver(([m])=>{$=m.isIntersecting,$?Y():q&&(cancelAnimationFrame(q),q=null)});U.observe(t);let M=null,w=new ResizeObserver(()=>{clearTimeout(M),M=setTimeout(()=>{ne(),N()},60)});return w.observe(t),ne(),N(),function(){q&&cancelAnimationFrame(q),q=null,clearTimeout(M),U.disconnect(),w.disconnect(),C(),p(),g.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(u),e.deleteBuffer(f),e.deleteVertexArray(P);let h=e.getExtension("WEBGL_lose_context");h&&h.loseContext(),n.remove()}}var hr="#BBC0C8",gr="#FFFFFF";var Mt='"Suisseintl Book", Arial, sans-serif';var wn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],xr=3,br=1.325,lt=5,yr=.4,Sn=20,Pr=2;function Tn(o){let t=o.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),r=c=>{let g=(c%lt+lt)%lt/lt;return g<.4?1-e(g/.4):g<.6?0:e((g-.6)/.4)};return t.forEach(c=>{let g=(c.getAttribute("data-text")||"").trim();if(!g)return;let l=Array.from(Array(xr).fill(g).join(" ").toUpperCase()),S=window.matchMedia("(prefers-reduced-motion: reduce)").matches,P=document.createElement("canvas");P.setAttribute("aria-hidden","true"),Object.assign(P.style,{display:"block",width:"100%",height:"100%"}),c.appendChild(P);let u=P.getContext("2d"),f=[],T=0,i=new Map,p=2;function a(){u.font=`24px ${Mt}`,f=l.map(k=>u.measureText(k).width),T=(3363-f.reduce((k,Y)=>k+Y,0))/(l.length-1)}let x=null;function A(){i=new Map,u.font=`24px ${Mt}`;let $=24,k=24*.35,Y=[...new Set(l)].filter(m=>m!==" ").map(m=>({ch:m,w:u.measureText(m).width})),U=Math.ceil(($+k+p*2)*O),M=0;Y.forEach(m=>{m.sx=M,m.sw=Math.ceil((m.w+p*2)*O),M+=m.sw+2}),x=document.createElement("canvas"),x.width=Math.max(1,M),x.height=Math.max(1,U);let w=x.getContext("2d");w.font=`${24*O}px ${Mt}`,w.fillStyle=gr,w.textBaseline="alphabetic",Y.forEach(m=>{w.fillText(m.ch,m.sx+p*O,(p+$)*O),i.set(m.ch,{sx:m.sx,sw:m.sw,x:-m.w/2-p,y:-$-p,w:m.sw/O,h:U/O})})}let O=1;function F(){let $=Math.min(Pr,window.devicePixelRatio||1),k=c.clientWidth;P.width=Math.max(1,Math.round(k*$)),P.height=Math.max(1,Math.round(c.clientHeight*$)),O=P.width/1920}let G=0;function ne(){u.setTransform(1,0,0,1,0,0),u.fillStyle=hr,u.fillRect(0,0,P.width,P.height);let $=S?0:e(G%Sn/Sn)*Math.PI*2;wn.forEach((k,Y)=>{let U=wn.length-1-Y,M=S?0:r(G-lt+U*yr),w=T+M*br*24,m=2*Math.PI*k.r,h=k.start*Math.PI/180+$,s=0;for(let d=0;d<l.length;d++){let z=f[d];if(s+z>m)break;let H=i.get(l[d]);if(H){let I=h+(s+z/2)/k.r,ie=Math.cos(I),ee=Math.sin(I);u.setTransform(-ee*O,ie*O,-ie*O,-ee*O,(960+k.r*ie)*O,(960+k.r*ee)*O),u.drawImage(x,H.sx,0,H.sw,x.height,H.x,H.y,H.w,H.h)}s+=z+w}})}let N=($,k)=>{G+=k/1e3,ne()},E=!1,X=()=>{!E&&!S&&(E=!0,gsap.ticker.add(N))},C=()=>{E&&(E=!1,gsap.ticker.remove(N))},q=new ResizeObserver(()=>{F(),A(),ne()});q.observe(c),F(),a(),A(),ne(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),A(),ne()});let re=ScrollTrigger.create({trigger:c,start:"top bottom",end:"bottom top",onToggle:$=>$.isActive?X():C()});re.isActive&&X(),n.push(()=>{C(),re.kill(),q.disconnect(),P.remove()})}),()=>n.forEach(c=>c())}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},An=o=>{let t=Math.sin(o*127.1+311.7)*43758.5453;return t-Math.floor(t)},Er=o=>{let t=Math.floor(o),n=o-t,e=n*n*(3-2*n);return An(t)*(1-e)+An(t+1)*e};function Cn(o){let t=o.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,r=[],c=null,g=0,l=18,S=0,P=0,u=0,f=-1e5,T=-1e5,i=!1,p=!1;function a(){c&&c.revert(),t.textContent="";let C=getComputedStyle(t);g=parseFloat(C.paddingTop),l=parseFloat(C.lineHeight),S=t.offsetHeight;let q=Math.max(1,Math.floor((S-g-parseFloat(C.paddingBottom))/l)),re=document.createDocumentFragment();for(let $=0;$<q;$++){let k=document.createElement("div");k.className="type-field__row",k.textContent=n,re.appendChild(k)}t.appendChild(re),t.setAttribute("aria-hidden","true"),c=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){r=[...t.children].map(($,k)=>({chars:$.querySelectorAll(".type-field__char"),cur:r[k]?r[k].cur:0,drawn:0}))}})}function x(C){let q=Math.max(0,Math.min(C.chars.length,Math.round(C.cur)));if(q===C.drawn)return;let re=Math.min(q,C.drawn),$=Math.max(q,C.drawn);for(let k=re;k<$;k++)C.chars[k].style.visibility=k<q?"visible":"hidden";C.drawn=q}function A(C,q){if(!r.length)return;let re=Math.min(q,50)/16.667,$=m=>1-Math.pow(1-m,re),k=ge.scroll,Y=Math.min(Math.max(P-k,0),u-k-S);T+=(f-Y-g-T)*$(rt.followEase);let U=Math.floor(T/l),M=k*.004,w=i&&f>=P-k&&f<=u-k;for(let m=0;m<r.length;m++){let h=r[m],s=h.chars.length,d=Math.abs(m-U),z=0;if(w){if(d===0)z=s;else if(d<=rt.radius){let H=1-d/(rt.radius+1);z=1+Math.min(rt.maxSide,H*(1-rt.ragged/2+rt.ragged*Er(m*1.3+M)))*(s-1)}}h.cur+=(z-h.cur)*$(rt.ease),x(h)}}function O(){p||(gsap.ticker.add(A),p=!0)}function F(){p&&(gsap.ticker.remove(A),p=!1)}let G=Qe((C,q)=>{T<-1e4&&(T=q),f=q,i=!0}),ne=()=>{i=!1};document.documentElement.addEventListener("mouseleave",ne),a();let N=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(C){P=C.start+window.innerHeight,u=C.end},onToggle(C){C.isActive?O():F()}});N.isActive&&O();let E,X=()=>{clearTimeout(E),E=setTimeout(()=>{Math.floor((t.offsetHeight-g-parseFloat(getComputedStyle(t).paddingBottom))/l)!==r.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",X),function(){F(),clearTimeout(E),G(),document.documentElement.removeEventListener("mouseleave",ne),window.removeEventListener("resize",X),N.kill(),c&&c.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var Mn={duration:.5,ease:"power3"};function Rn(o){let t=o.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let r=e.querySelector("[data-cursor-label-item]");if(!r)return;let c=gsap.quickTo(r,"x",Mn),g=gsap.quickTo(r,"y",Mn),l=0,S=0,P=!1,u=new ResizeObserver(()=>{l=r.offsetWidth,S=r.offsetHeight});u.observe(r),l=r.offsetWidth,S=r.offsetHeight;let T=Qe((p,a)=>{let x=e.getBoundingClientRect();if(!(p>=x.left&&p<=x.right&&a>=x.top&&a<=x.bottom)){P&&(P=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let O=gsap.utils.clamp(0,Math.max(0,x.width-l),p-x.left-l/2),F=gsap.utils.clamp(0,Math.max(0,x.height-S),a-x.top-S/2);if(!P){P=!0,c(O,O),g(F,F),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}c(O),g(F)}),i=()=>{P&&(P=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),n.push(()=>{T(),document.documentElement.removeEventListener("mouseleave",i),u.disconnect(),gsap.killTweensOf(r),gsap.set(r,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var wr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],Sr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],Tr="#FFFFFF";var Fn="power3.out";function zn(o){let t=o.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let r=[],c=[],g=[];function l(){if(c.length&&c[0].isConnected)return;let f=e.querySelectorAll(":scope > div > div");r=(f.length?[...f]:[e]).map(i=>SplitText.create(i,{type:"chars"})),c=r.flatMap(i=>i.chars),g=f.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],c.forEach(i=>{i.dataset.orig=i.textContent})}function S(f){f.textContent=f.dataset.orig,f.style.border=""}let P=()=>{l(),g.forEach(T=>{T.el.style.overflow="visible"});let f=(c.length-1)/2;c.forEach((T,i)=>{gsap.to(T,{color:Tr,ease:Fn,duration:.3,delay:Math.abs(i-f)*.03,overwrite:"auto",onStart:()=>{let p=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);p==1&&(T.textContent=gsap.utils.random(Sr)),a==1&&(T.style.border=`1px solid ${gsap.utils.random(wr)}`)}})})},u=()=>{if(!c.length)return;let f=getComputedStyle(e).color,T=(c.length-1)/2;g.forEach(i=>{i.el.style.overflow=i.overflow}),c.forEach((i,p)=>{gsap.to(i,{color:f,ease:Fn,duration:.3,delay:Math.abs(p-T)*.03,overwrite:"auto",onStart:()=>S(i)})})};e.addEventListener("mouseenter",P),e.addEventListener("mouseleave",u),n.push(()=>{e.removeEventListener("mouseenter",P),e.removeEventListener("mouseleave",u),gsap.killTweensOf(c),r.forEach(f=>f.revert()),r=[],c=[],g=[]})}),()=>n.forEach(e=>e())}function Rt(o,t){let n=null;ue(Yt(o)),ue(ln(o)),ue(zn(o)),ue(rn(o)),ue($t(o)),ue(sn(o));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Kt(o):null,n?ue(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),ue(Zt(o)),ue(Qt(o)),ue(en(o)),ue(vt(o)),dt(o),tn(o),n}function pt(o){ue(on(o)),o.querySelector("[data-flip-element]")&&window.innerWidth>991&&ue(nn(o)),ue(Cn(o)),ue(Rn(o)),ue(dn(o)),ue(En(o)),ue(Tn(o)),ScrollTrigger.sort()}var Ar={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(o){var t=[];return o.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",r=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:r,mask:"lines",autoSplit:!0,onSplit:function(c){gsap.set(n,{autoAlpha:1});var g=Ar[e],l={yPercent:110,duration:g.duration,stagger:g.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?l.delay=.5:l.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(c[e],l)}}))}),function(){t.forEach(function(n){n.revert()})}}var Un=Zn(Ln());var kn=window.matchMedia("(prefers-reduced-motion: reduce)"),Lt=.9;function Dn(o){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{o.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return kn.matches||!n?e.set(o,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ut,duration:Lt,ease:Xe},0),e.fromTo(o,{y:"0vh"},{y:"-25vh",duration:Lt,ease:Xe},0),e.set(n,{autoAlpha:0}),e)}function kt(o,t,n="100vh"){let e=gsap.timeline();return kn.matches?e.set(o,{autoAlpha:1}):(e.set(o,{zIndex:3},0),e.fromTo(o,{y:n},{y:"0vh",duration:Lt,ease:Xe},0)),e.add("pageReady"),e.call(function(){gsap.set(o,{clearProps:"zIndex"}),t(o)},null,"pageReady"),new Promise(r=>{e.call(r,null,"pageReady")})}function Dt(o,t,n){let e=document.querySelector("[data-transition-wrap]"),r=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(o,{position:"relative"}),kt(o,t,n).then(function(){r&&gsap.set(r,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,It=!1;function Ut(o){gsap.set(o,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),ge.scrollTo(0,{immediate:!0,force:!0}),ge.resize()}var In={sync:!0,beforeLeave(){It=yt({keepCurtain:!0}),ge.stop(),ot||(ot=bt())},beforeEnter(o){ot||(ot=bt()),gsap.set(o.next.container,{position:"fixed",top:0,left:0,right:0}),qt(),Rt(o.next.container,!1)},leave(o){return Dn(o.current.container,o.next.container)},enter(o){return It&&(Ot(),It=!1),ue(mt(o.next.container)),kt(o.next.container,Ut)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(o){Gt(o),pt(o.next.container),ge.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(Un.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:o}){if(!o||!o.href)return!1;let t=new URL(o.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...In,once(o){let t=document.querySelector("[data-menu-status]");Bt(),Vt(),t&&(dt(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=o.next.container,e=Rt(n,!0);e?e.call(function(){let r=document.querySelector("[data-load-bg]");ue(mt(n)),Dt(n,function(c){Ut(c),pt(c),ge.start(),ScrollTrigger.refresh()},r?r.offsetHeight:void 0)},null,"hideContent"):(ge.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),ue(mt(n)),Dt(n,function(r){Ut(r),pt(r),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),ge.start()})})})}))}},{name:"self",...In}]}),window.addEventListener("pageshow",function(o){o.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

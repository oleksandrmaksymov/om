(()=>{var Gn=Object.create;var Ht=Object.defineProperty;var Nn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var Xn=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty;var $n=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var Kn=(o,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Wn(t))!Yn.call(o,r)&&r!==n&&Ht(o,r,{get:()=>t[r],enumerable:!(e=Nn(t,r))||e.enumerable});return o};var Zn=(o,t,n)=>(n=o!=null?Gn(Xn(o)):{},Kn(t||!o||!o.__esModule?Ht(n,"default",{value:o,enumerable:!0}):n,o));var Ln=$n((Ft,zt)=>{(function(o,t){typeof Ft=="object"&&typeof zt!="undefined"?zt.exports=t():typeof define=="function"&&define.amd?define(t):(o||self).barbaPrefetch=t()})(Ft,function(){var o=window.requestIdleCallback||function(t){var n=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)};return new((function(){function t(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var n=t.prototype;return n.install=function(e,r){var s=r===void 0?{}:r,d=s.root,l=d===void 0?document.body:d,T=s.timeout,y=T===void 0?2e3:T,c=s.limit,f=c===void 0?0:c;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=l,this.timeout=y,this.limit=f},n.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(r){r.forEach(function(s){if(s.isIntersecting){var d=s.target,l=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(d));e.toPrefetch.has(l)&&(e.observer.unobserve(d),e.barba.cache.has(l)?e.barba.cache.update(l,{action:"prefetch"}):e.barba.cache.set(l,e.barba.request(l,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(T){e.logger.error(T)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},n.observe=function(){var e=this;o(function(){var r=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(r=r.slice(0,e.limit)),r.forEach(function(s){var d=s,l=e.barba.dom.getHref(d);e.barba.cache.has(l)||e.barba.prevent.checkHref(l)||e.barba.prevent.checkLink(d,{},l)||(e.observer.observe(s),e.toPrefetch.add(l))})},{timeout:this.timeout})},t})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Pe=new Lenis({lerp:.08,wheelMultiplier:1});Pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(o=>{Pe.raf(o*1e3)});gsap.ticker.lagSmoothing(0);var xt=[];function pe(o){typeof o=="function"&&xt.push(o)}function bt(){let o=xt,t=ScrollTrigger.getAll();return xt=[],function(){o.forEach(function(e){try{e()}catch(r){console.error(r)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var jn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",jn);var Ke="parallax",ut=.8;var Jn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",_t="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,yt=function(){return!1};function Ot(){tt&&gsap.timeline().to(tt,{clipPath:_t,duration:.9,ease:Ke,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-ut)+")",duration:.9,ease:Ke},0).set(tt,{clearProps:"filter"})}function Bt(){let o=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!o||!t)return;tt=t.querySelector(".nav-bg"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(r){t.dataset.menuStatus=r?"open":"closed",o.setAttribute("aria-expanded",r),r?(Pe.stop(),document.body.style.overflow="hidden"):(Pe.start(),document.body.style.overflow="")}function e(r){tt&&gsap.to(tt,{clipPath:r?Jn:_t,duration:.9,ease:Ke,overwrite:!0})}o.addEventListener("click",function(){let r=t.dataset.menuStatus!=="open";n(r),e(r)}),yt=function(r){return t.dataset.menuStatus!=="open"?!1:(n(!1),r&&r.keepCurtain||e(!1),!0)}}function Vt(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function qt(){let o=function(n){return n.replace(/\/$/,"")||"/"},t=o(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),r=e.origin===location.origin&&o(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",r),r?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Gt(o){let n=new DOMParser().parseFromString(o.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function dt(o){let t=o.querySelectorAll(".copy-email-button");if(!t.length)return;let n=r=>{let s=r.getAttribute("data-copy-email")||r.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let d=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){d();return}navigator.clipboard.writeText(s).then(()=>{r.setAttribute("data-copy-button","copied"),r.setAttribute("aria-label","Email copied to clipboard!")},d)},e=r=>{(r.type==="click"||r.type==="keydown"&&(r.key==="Enter"||r.key===" "))&&(r.preventDefault(),n(r.currentTarget))};t.forEach(r=>{r.addEventListener("click",e),r.addEventListener("keydown",e),r.addEventListener("mouseleave",()=>{r.removeAttribute("data-copy-button"),r.blur(),r.setAttribute("aria-label","Copy email to clipboard")}),r.addEventListener("blur",()=>{r.removeAttribute("data-copy-button"),r.setAttribute("aria-label","Copy email to clipboard")})})}function vt(o){let t=o.querySelector("[data-clock]");if(!t)return;function n(){let r=new Date,s=r.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),l=r.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=s+" "+l}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function ct(o){return Pt[o]||(Pt[o]=new Promise(function(t,n){let e=document.createElement("script");e.src=o,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[o]}function Nt(o){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var r=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});r.setSize(1920,1080),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setClearColor(0,1),r.toneMapping=THREE.ACESFilmicToneMapping,r.toneMappingExposure=1.4,r.domElement.style.width="100%",r.domElement.style.height="100%",o.appendChild(r.domElement),n.add(new THREE.AmbientLight(2760464,1));var s=new THREE.PointLight(16107370,3,1400);s.position.set(300,350,400),n.add(s);var d=new THREE.PointLight(13931578,2.4,1200);d.position.set(-300,-100,300),n.add(d);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var T=new THREE.PointLight(16750916,1.3,600);T.position.set(0,-250,200),n.add(T);var y=0,c=0,f=0,w=0,i=!1,v=0,a=0,g=Math.PI*2/6,b=new THREE.Vector2(9999,9999),I=new THREE.Raycaster,J=120,Y=new THREE.Vector3(9999,9999,0),k=new THREE.Vector3(9999,9999,0),V=new THREE.Vector3,E=!1,N=0,S=0,j=8e4,ie=.03,W=.95,R=.005,$=12e4,H=null,A,P,F,z,m,p,q=0,K=!1,M=0,O=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function L(){var x=new THREE.BufferGeometry;A=new Float32Array($*3),P=new Float32Array($*3),F=new Float32Array($*3),z=new Float32Array($*3),m=new Float32Array($),p=new Float32Array($),x.setAttribute("position",new THREE.BufferAttribute(A,3)),x.setAttribute("color",new THREE.BufferAttribute(z,3)),x.setAttribute("size",new THREE.BufferAttribute(m,1)),x.setAttribute("alpha",new THREE.BufferAttribute(p,1)),x.setAttribute("velocity",new THREE.BufferAttribute(P,3));var X=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,u=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,G=new THREE.ShaderMaterial({vertexShader:X,fragmentShader:u,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(x,G),n.add(H)}function ae(x,X){return new Promise(function(u){try{var G=512,Z=document.createElement("canvas");Z.width=Z.height=G;var ee=Z.getContext("2d"),De=new DOMParser().parseFromString(x,"image/svg+xml"),ze=De.querySelector("svg");if(!ze){u([]);return}var C=parseFloat(ze.getAttribute("width")||512),B=parseFloat(ze.getAttribute("height")||512),h=ze.getAttribute("viewBox");if(h){var U=h.split(/[\s,]+/);C=+U[2],B=+U[3]}var se=Math.min(G/C,G/B)*.9,oe=(G-C*se)/2,Le=(G-B*se)/2;ee.save(),ee.translate(oe,Le),ee.scale(se,se),ee.fillStyle="white",De.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var Oe=xe.getAttribute("d");Oe&&ee.fill(new Path2D(Oe))}else xe.tagName==="rect"?ee.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(ee.beginPath(),ee.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),ee.fill())}),ee.restore();for(var be=ee.getImageData(0,0,G,G).data,Te=[],ye=0;ye<G;ye++)for(var Ue=0;Ue<G;Ue++){var we=(ye*G+Ue)*4;be[we+3]>30&&Te.push({x:Ue,y:ye,a:be[we+3]/255})}if(!Te.length){u([]);return}for(var Ne=[],we=0;we<X;we++){var _e=Te[Math.floor(Math.random()*Te.length)];Ne.push({x:(_e.x-G/2)*1.2+(Math.random()-.5)*1.65,y:-(_e.y-G/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*_e.a,a:_e.a})}u(Ne)}catch(xe){console.error(xe),u([])}})}function de(x){q=x.length;for(var X=0;X<q;X++){var u=x[X],G=X*3;A[G]=u.x,A[G+1]=u.y+40,A[G+2]=u.z,P[G]=P[G+1]=P[G+2]=0,F[G]=u.x,F[G+1]=u.y,F[G+2]=u.z;var Z=O[Math.floor(Math.random()*O.length)],ee=.7+Math.random()*.4;z[G]=Z.r*ee,z[G+1]=Z.g*ee,z[G+2]=Z.b*ee,m[X]=1.8+Math.random()*3.8,p[X]=.3+(u.a||.7)*.75}H.geometry.setDrawRange(0,q),["position","color","size","alpha"].forEach(function(De){H.geometry.attributes[De].needsUpdate=!0}),K=!0}function ve(x){return ae(x,Math.min($,j)).then(function(X){X.length&&H&&de(X)})}function te(x){if(!(!K||!q)){M+=x;for(var X=0;X<q;X++){var u=X*3,G=X*1.37;if(P[u]+=Math.sin(M*.4+G)*.008+Math.sin(M*1.1+G*2.3)*.003,P[u+1]+=Math.cos(M*.35+G*.7)*.008+Math.sin(M*.9+G*1.5)*.004,P[u+2]+=Math.sin(M*.25+G*1.1)*.004,P[u+1]-=ie*.06,P[u]+=Math.sin(M*.25+A[u+1]*.008)*R*.6,P[u+2]+=Math.cos(M*.3+A[u]*.008)*R*.3,E){var Z=A[u]-Y.x,ee=A[u+1]-Y.y,De=A[u+2]-Y.z,ze=Z*Z+ee*ee+De*De,C=J*J;if(ze<C&&ze>.25){var B=Math.sqrt(ze),h=B/J,U=(X*2654435761&65535)/65535,se=.6+U*.8,oe=Math.pow(1-h,1.5+U),Le=1+Math.min(V.length()*.12,1),be=oe*se*1.2*Le,Te=1/B;P[u]+=Z*Te*be,P[u+1]+=ee*Te*be,P[u+2]+=De*Te*be*.2;var ye=.02+U*.06;P[u]+=V.x*oe*ye,P[u+1]+=V.y*oe*ye;var Ue=oe*.15;P[u]+=(U-.5)*Ue,P[u+1]+=((X*48271&65535)/65535-.5)*Ue}}var we=F[u],Ne=F[u+1]+40,_e=F[u+2],xe=we-A[u],Oe=Ne-A[u+1],Ve=_e-A[u+2],je=Math.sqrt(xe*xe+Oe*Oe+Ve*Ve),Je=(X*48271&65535)/65535,Qe=.003+Je*.003,at=1+Math.min(je*.002,.5),Ye=Qe*at;P[u]+=xe*Ye,P[u+1]+=Oe*Ye,P[u+2]+=Ve*Ye;var Se=(X*16807&65535)/65535,$e=W*(.92+Se*.06);P[u]*=$e,P[u+1]*=$e,P[u+2]*=$e,A[u]+=P[u],A[u+1]+=P[u+1],A[u+2]+=P[u+2];var st=Math.sqrt(Math.pow(A[u]-F[u],2)+Math.pow(A[u+1]-F[u+1],2)+Math.pow(A[u+2]-F[u+2],2));p[X]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(M*1.5+X*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var He=new THREE.Matrix4,Ae=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function ne(x,X){var u=r.domElement.getBoundingClientRect();if(!(u.width===0||u.height===0)&&(b.set((x-u.left)/u.width*2-1,-((X-u.top)/u.height)*2+1),I.setFromCamera(b,e),I.ray.intersectPlane(Ae,Ce))){k.copy(Y),H&&Y.copy(Ce).applyMatrix4(He.copy(H.matrixWorld).invert()),V.subVectors(Y,k);var G=V.length();G>15&&V.multiplyScalar(15/G)}}function re(x,X){var u=o.getBoundingClientRect();return x>=u.left&&x<=u.right&&X>=u.top&&X<=u.bottom}var D=o.querySelector("#logo-coords"),Q=o.querySelector("#logo-drag-label"),me=!1;if(!t){var fe=function(x){N=x.clientX,S=x.clientY;var X=re(x.clientX,x.clientY);if(X){E=!0,ne(x.clientX,x.clientY);var u=o.getBoundingClientRect(),G=Math.round(x.clientX-u.left),Z=Math.round(x.clientY-u.top);D&&(D.textContent="X: "+G+"PX    Y: "+Z+"PX")}else E=!1,Y.set(9999,9999,0);i&&(y+=(x.clientX-v)*.005,f+=(x.clientY-a)*.005,f=Math.max(-Math.PI/2,Math.min(Math.PI/2,f)),v=x.clientX,a=x.clientY)},Ee=function(x){re(x.clientX,x.clientY)&&(i=!0,v=x.clientX,a=x.clientY)},ge=function(){i=!1,y=0,f=0,c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2)};window.addEventListener("mousemove",fe),window.addEventListener("mousedown",Ee),window.addEventListener("mouseup",ge)}function Re(){for(var x=4e3,X=new THREE.BufferGeometry,u=new Float32Array(x*3),G=new Float32Array(x*3),Z=0;Z<x;Z++){u[Z*3]=(Math.random()-.5)*2200,u[Z*3+1]=(Math.random()-.5)*1800,u[Z*3+2]=-200-Math.random()*1800;var ee=O[Math.floor(Math.random()*O.length)],De=.2+Math.random()*.3;G[Z*3]=ee.r*De,G[Z*3+1]=ee.g*De,G[Z*3+2]=ee.b*De}X.setAttribute("position",new THREE.BufferAttribute(u,3)),X.setAttribute("color",new THREE.BufferAttribute(G,3));var ze=document.createElement("canvas");ze.width=ze.height=32;var C=ze.getContext("2d"),B=C.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=B,C.fillRect(0,0,32,32);var h=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(ze),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),U=new THREE.Points(X,h);return U.userData={positions:u,count:x},n.add(U),U}L();var le=t?null:Re(),Ie='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ve(Ie);var Be=new THREE.Clock,Fe=!0,Xe=new IntersectionObserver(function(x){Fe=x[0].isIntersecting,x[0].isIntersecting&&!me&&!t&&(me=!0,D&&(D.style.transform="translateY(0)"),Q&&(Q.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(o);var he=!1,ke=null,Me=0;function ue(){if(he=!0,clearTimeout(ke),ke=setTimeout(function(){he=!1},150),!t){var x=re(N,S);x?(E=!0,ne(N,S)):(E=!1,Y.set(9999,9999,0))}}window.addEventListener("scroll",ue,{passive:!0});var _=null;function ce(){if(_=requestAnimationFrame(ce),!!Fe){Me++;var x=Math.min(Be.getDelta(),.05),X=Be.elapsedTime;if(t)c+=g*x;else{var u=y-c;u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),c+=u*.12,w+=(f-w)*.12}if(H&&(H.rotation.x=w,H.rotation.y=c,H.position.y=-15),le){for(var G=le.userData.positions,Z=0;Z<le.userData.count;Z++)G[Z*3+1]+=Math.sin(X*.2+Z)*.05,G[Z*3]+=Math.cos(X*.15+Z*.5)*.03;le.geometry.attributes.position.needsUpdate=!0,le.rotation.y+=1e-4,le.position.x=-c*35*.35,le.position.y=w*28*.35}s.position.x=300+Math.sin(X*.3)*100,s.position.y=350+Math.cos(X*.2)*80,d.intensity=2+Math.sin(X*.5)*.4,T.intensity=.8+Math.sin(X*.4+1)*.3,!(t&&he&&Me%4!==0)&&(te(x),r.render(n,e))}}return ce(),function(){cancelAnimationFrame(_),t||(window.removeEventListener("mousemove",fe),window.removeEventListener("mousedown",Ee),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",ue),clearTimeout(ke),Xe.disconnect(),n.traverse(function(x){x.geometry&&x.geometry.dispose(),x.material&&(x.material.map&&x.material.map.dispose(),x.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),H=null}}function Wt(o){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",o.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var r=new THREE.PointLight(16107370,3,1400);r.position.set(300,350,400),t.add(r);var s=new THREE.PointLight(13931578,2.4,1200);s.position.set(-300,-100,300),t.add(s);var d=new THREE.PointLight(5913114,1.2,900);d.position.set(0,200,-300),t.add(d);var l=new THREE.PointLight(16750916,1.3,600);l.position.set(0,-250,200),t.add(l);var T=0,y=Math.PI*2/6,c=8e4,f=.03,w=.95,i=.005,v=12e4,a=null,g,b,I,J,Y,k,V=0,E=!1,N=0,S=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function j(){var ne=new THREE.BufferGeometry;g=new Float32Array(v*3),b=new Float32Array(v*3),I=new Float32Array(v*3),J=new Float32Array(v*3),Y=new Float32Array(v),k=new Float32Array(v),ne.setAttribute("position",new THREE.BufferAttribute(g,3)),ne.setAttribute("color",new THREE.BufferAttribute(J,3)),ne.setAttribute("size",new THREE.BufferAttribute(Y,1)),ne.setAttribute("alpha",new THREE.BufferAttribute(k,1)),ne.setAttribute("velocity",new THREE.BufferAttribute(b,3));var re=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,D=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,Q=new THREE.ShaderMaterial({vertexShader:re,fragmentShader:D,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});a=new THREE.Points(ne,Q),t.add(a)}function ie(ne,re){return new Promise(function(D){try{var Q=512,me=document.createElement("canvas");me.width=me.height=Q;var fe=me.getContext("2d"),Ee=new DOMParser().parseFromString(ne,"image/svg+xml"),ge=Ee.querySelector("svg");if(!ge){D([]);return}var Re=parseFloat(ge.getAttribute("width")||512),le=parseFloat(ge.getAttribute("height")||512),Ie=ge.getAttribute("viewBox");if(Ie){var Be=Ie.split(/[\s,]+/);Re=+Be[2],le=+Be[3]}var Fe=Math.min(Q/Re,Q/le)*.9,Xe=(Q-Re*Fe)/2,he=(Q-le*Fe)/2;fe.save(),fe.translate(Xe,he),fe.scale(Fe,Fe),fe.fillStyle="white",Ee.querySelectorAll("path,rect,circle").forEach(function(u){if(u.tagName==="path"){var G=u.getAttribute("d");G&&fe.fill(new Path2D(G))}else u.tagName==="rect"?fe.fillRect(+u.getAttribute("x")||0,+u.getAttribute("y")||0,+u.getAttribute("width")||0,+u.getAttribute("height")||0):u.tagName==="circle"&&(fe.beginPath(),fe.arc(+u.getAttribute("cx")||0,+u.getAttribute("cy")||0,+u.getAttribute("r")||0,0,Math.PI*2),fe.fill())}),fe.restore();for(var ke=fe.getImageData(0,0,Q,Q).data,Me=[],ue=0;ue<Q;ue++)for(var _=0;_<Q;_++){var ce=(ue*Q+_)*4;ke[ce+3]>30&&Me.push({x:_,y:ue,a:ke[ce+3]/255})}if(!Me.length){D([]);return}for(var x=[],ce=0;ce<re;ce++){var X=Me[Math.floor(Math.random()*Me.length)];x.push({x:(X.x-Q/2)*1.2+(Math.random()-.5)*1.65,y:-(X.y-Q/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*X.a,a:X.a})}D(x)}catch(u){console.error(u),D([])}})}function W(ne){V=ne.length;for(var re=0;re<V;re++){var D=ne[re],Q=re*3;g[Q]=D.x,g[Q+1]=D.y+40,g[Q+2]=D.z,b[Q]=b[Q+1]=b[Q+2]=0,I[Q]=D.x,I[Q+1]=D.y,I[Q+2]=D.z;var me=S[Math.floor(Math.random()*S.length)],fe=.7+Math.random()*.4;J[Q]=me.r*fe,J[Q+1]=me.g*fe,J[Q+2]=me.b*fe,Y[re]=1.8+Math.random()*3.8,k[re]=.3+(D.a||.7)*.75}a.geometry.setDrawRange(0,V),["position","color","size","alpha"].forEach(function(Ee){a.geometry.attributes[Ee].needsUpdate=!0}),E=!0}function R(ne){return ie(ne,Math.min(v,c)).then(function(re){re.length&&a&&W(re)})}function $(ne){if(!(!E||!V)){N+=ne;for(var re=0;re<V;re++){var D=re*3,Q=re*1.37;b[D]+=Math.sin(N*.4+Q)*.008+Math.sin(N*1.1+Q*2.3)*.003,b[D+1]+=Math.cos(N*.35+Q*.7)*.008+Math.sin(N*.9+Q*1.5)*.004,b[D+2]+=Math.sin(N*.25+Q*1.1)*.004,b[D+1]-=f*.06,b[D]+=Math.sin(N*.25+g[D+1]*.008)*i*.6,b[D+2]+=Math.cos(N*.3+g[D]*.008)*i*.3;var me=I[D],fe=I[D+1]+40,Ee=I[D+2],ge=me-g[D],Re=fe-g[D+1],le=Ee-g[D+2],Ie=Math.sqrt(ge*ge+Re*Re+le*le),Be=(re*48271&65535)/65535,Fe=.003+Be*.003,Xe=1+Math.min(Ie*.002,.5),he=Fe*Xe;b[D]+=ge*he,b[D+1]+=Re*he,b[D+2]+=le*he;var ke=(re*16807&65535)/65535,Me=w*(.92+ke*.06);b[D]*=Me,b[D+1]*=Me,b[D+2]*=Me,g[D]+=b[D],g[D+1]+=b[D+1],g[D+2]+=b[D+2];var ue=Math.sqrt(Math.pow(g[D]-I[D],2)+Math.pow(g[D+1]-I[D+1],2)+Math.pow(g[D+2]-I[D+2],2));k[re]=.15+.55*(1-Math.min(ue*.005,1))+Math.sin(N*1.5+re*.01)*.05}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.alpha.needsUpdate=!0,a.geometry.attributes.velocity.needsUpdate=!0}}j();for(var H=4e3,A=new THREE.BufferGeometry,P=new Float32Array(H*3),F=new Float32Array(H*3),z=0;z<H;z++){P[z*3]=(Math.random()-.5)*2200,P[z*3+1]=(Math.random()-.5)*1800,P[z*3+2]=-200-Math.random()*1800;var m=S[Math.floor(Math.random()*S.length)],p=.2+Math.random()*.3;F[z*3]=m.r*p,F[z*3+1]=m.g*p,F[z*3+2]=m.b*p}A.setAttribute("position",new THREE.BufferAttribute(P,3)),A.setAttribute("color",new THREE.BufferAttribute(F,3));var q=document.createElement("canvas");q.width=q.height=32;var K=q.getContext("2d"),M=K.createRadialGradient(16,16,0,16,16,16);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.3,"rgba(255,255,255,0.6)"),M.addColorStop(.7,"rgba(255,255,255,0.15)"),M.addColorStop(1,"rgba(255,255,255,0)"),K.fillStyle=M,K.fillRect(0,0,32,32);var O=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(q),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),L=new THREE.Points(A,O);t.add(L);var ae='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';R(ae);var de=new THREE.Clock,ve=!0,te=new IntersectionObserver(function(ne){ve=ne[0].isIntersecting},{threshold:0});te.observe(o);var He=o.querySelectorAll("#logo-coords, #logo-drag-label");He.forEach(function(ne){ne.parentElement.style.display="none"});var Ae=null;function Ce(){if(Ae=requestAnimationFrame(Ce),!!ve){var ne=Math.min(de.getDelta(),.05),re=de.elapsedTime;T+=y*ne,a&&(a.rotation.y=T,a.position.y=5,a.scale.setScalar(.85));for(var D=0;D<H;D++)P[D*3+1]+=Math.sin(re*.2+D)*.05,P[D*3]+=Math.cos(re*.15+D*.5)*.03;A.attributes.position.needsUpdate=!0,L.rotation.y+=1e-4,L.position.x=-T*35*.35,r.position.x=300+Math.sin(re*.3)*100,r.position.y=350+Math.cos(re*.2)*80,s.intensity=2+Math.sin(re*.5)*.4,l.intensity=.8+Math.sin(re*.4+1)*.3,$(ne),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(Ae),te.disconnect(),t.traverse(function(ne){ne.geometry&&ne.geometry.dispose(),ne.material&&(ne.material.map&&ne.material.map.dispose(),ne.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),a=null}}var Xt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Yt(o){let t=o.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(Xt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Qn(t):Nt(t)}),function(){n=!0,e&&e()}}function $t(o){let t=o.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(Xt).then(function(){n||(e=Wt(t))}),function(){n=!0,e&&e()}}function Qn(o){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var r=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});r.setSize(1920,1080),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setClearColor(0,1),r.toneMapping=THREE.ACESFilmicToneMapping,r.toneMappingExposure=1.4,r.domElement.style.width="100%",r.domElement.style.height="100%",o.appendChild(r.domElement),n.add(new THREE.AmbientLight(2760464,1));var s=new THREE.PointLight(16107370,3,1400);s.position.set(300,350,400),n.add(s);var d=new THREE.PointLight(13931578,2.4,1200);d.position.set(-300,-100,300),n.add(d);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var T=new THREE.PointLight(16750916,1.3,600);T.position.set(0,-250,200),n.add(T);var y=0,c=0,f=0,w=0,i=!1,v=0,a=0,g=Math.PI*2/6,b=new THREE.Vector2(9999,9999),I=new THREE.Raycaster,J=120,Y=new THREE.Vector3(9999,9999,0),k=new THREE.Vector3(9999,9999,0),V=new THREE.Vector3,E=!1,N=0,S=0,j=8e4,ie=.03,W=.95,R=.005,$=12e4,H=null,A,P,F,z,m,p,q=0,K=!1,M=!1,O=0,L=0,ae=null,de=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function ve(){var C=new THREE.BufferGeometry;A=new Float32Array($*3),P=new Float32Array($*3),F=new Float32Array($*3),z=new Float32Array($*3),m=new Float32Array($),p=new Float32Array($),C.setAttribute("position",new THREE.BufferAttribute(A,3)),C.setAttribute("color",new THREE.BufferAttribute(z,3)),C.setAttribute("size",new THREE.BufferAttribute(m,1)),C.setAttribute("alpha",new THREE.BufferAttribute(p,1)),C.setAttribute("velocity",new THREE.BufferAttribute(P,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:h,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(C,U),n.add(H)}function te(C,B){return new Promise(function(h){try{var U=512,se=document.createElement("canvas");se.width=se.height=U;var oe=se.getContext("2d"),Le=new DOMParser().parseFromString(C,"image/svg+xml"),be=Le.querySelector("svg");if(!be){h([]);return}var Te=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ue=be.getAttribute("viewBox");if(Ue){var we=Ue.split(/[\s,]+/);Te=+we[2],ye=+we[3]}var Ne=Math.min(U/Te,U/ye)*.9,_e=(U-Te*Ne)/2,xe=(U-ye*Ne)/2;oe.save(),oe.translate(_e,xe),oe.scale(Ne,Ne),oe.fillStyle="white",Le.querySelectorAll("path,rect,circle").forEach(function(Se){if(Se.tagName==="path"){var $e=Se.getAttribute("d");$e&&oe.fill(new Path2D($e))}else Se.tagName==="rect"?oe.fillRect(+Se.getAttribute("x")||0,+Se.getAttribute("y")||0,+Se.getAttribute("width")||0,+Se.getAttribute("height")||0):Se.tagName==="circle"&&(oe.beginPath(),oe.arc(+Se.getAttribute("cx")||0,+Se.getAttribute("cy")||0,+Se.getAttribute("r")||0,0,Math.PI*2),oe.fill())}),oe.restore();for(var Oe=oe.getImageData(0,0,U,U).data,Ve=[],je=0;je<U;je++)for(var Je=0;Je<U;Je++){var Qe=(je*U+Je)*4;Oe[Qe+3]>30&&Ve.push({x:Je,y:je,a:Oe[Qe+3]/255})}if(!Ve.length){h([]);return}for(var at=[],Qe=0;Qe<B;Qe++){var Ye=Ve[Math.floor(Math.random()*Ve.length)];at.push({x:(Ye.x-U/2)*1.2+(Math.random()-.5)*1.65,y:-(Ye.y-U/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ye.a,a:Ye.a})}h(at)}catch(Se){console.error(Se),h([])}})}function He(C){q=C.length;for(var B=0;B<q;B++){var h=C[B],U=B*3;A[U]=h.x,A[U+1]=h.y+40,A[U+2]=h.z,P[U]=P[U+1]=P[U+2]=0,F[U]=h.x,F[U+1]=h.y,F[U+2]=h.z;var se=de[Math.floor(Math.random()*de.length)],oe=.7+Math.random()*.4;z[U]=se.r*oe,z[U+1]=se.g*oe,z[U+2]=se.b*oe,m[B]=1.8+Math.random()*3.8,p[B]=.3+(h.a||.7)*.75}H.geometry.setDrawRange(0,q),["position","color","size","alpha"].forEach(function(Le){H.geometry.attributes[Le].needsUpdate=!0}),K=!0,M=!1,O=1}function Ae(C){return te(C,Math.min($,j)).then(function(B){B.length&&H&&He(B)})}function Ce(C){if(!(!K||!q)){L+=C;for(var B=0;B<q;B++){var h=B*3,U=B*1.37;if(P[h]+=Math.sin(L*.4+U)*.008+Math.sin(L*1.1+U*2.3)*.003,P[h+1]+=Math.cos(L*.35+U*.7)*.008+Math.sin(L*.9+U*1.5)*.004,P[h+2]+=Math.sin(L*.25+U*1.1)*.004,P[h+1]-=ie*.06,P[h]+=Math.sin(L*.25+A[h+1]*.008)*R*.6,P[h+2]+=Math.cos(L*.3+A[h]*.008)*R*.3,E&&ue==="interactive"){var se=A[h]-Y.x,oe=A[h+1]-Y.y,Le=A[h+2]-Y.z,be=se*se+oe*oe+Le*Le,Te=J*J;if(be<Te&&be>.25){var ye=Math.sqrt(be),Ue=ye/J,we=(B*2654435761&65535)/65535,Ne=.6+we*.8,_e=Math.pow(1-Ue,1.5+we),xe=1+Math.min(V.length()*.12,1),Oe=_e*Ne*1.2*xe,Ve=1/ye;P[h]+=se*Ve*Oe,P[h+1]+=oe*Ve*Oe,P[h+2]+=Le*Ve*Oe*.2;var je=.02+we*.06;P[h]+=V.x*_e*je,P[h+1]+=V.y*_e*je;var Je=_e*.15;P[h]+=(we-.5)*Je,P[h+1]+=((B*48271&65535)/65535-.5)*Je}}var Qe=F[h],at=F[h+1]+40,Ye=F[h+2],Se=Qe-A[h],$e=at-A[h+1],st=Ye-A[h+2],Hn=Math.sqrt(Se*Se+$e*$e+st*st),_n=(B*48271&65535)/65535,On=.003+_n*.003,Bn=1+Math.min(Hn*.002,.5),ht=On*Bn;P[h]+=Se*ht,P[h+1]+=$e*ht,P[h+2]+=st*ht;var Vn=(B*16807&65535)/65535,gt=W*(.92+Vn*.06);P[h]*=gt,P[h+1]*=gt,P[h+2]*=gt,A[h]+=P[h],A[h+1]+=P[h+1],A[h+2]+=P[h+2];var qn=Math.sqrt(Math.pow(A[h]-F[h],2)+Math.pow(A[h+1]-F[h+1],2)+Math.pow(A[h+2]-F[h+2],2));p[B]=.15+.55*(1-Math.min(qn*.005,1))+Math.sin(L*1.5+B*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var ne=new THREE.Matrix4,re=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),D=new THREE.Vector3;function Q(C,B){var h=r.domElement.getBoundingClientRect();if(!(h.width===0||h.height===0)&&(b.set((C-h.left)/h.width*2-1,-((B-h.top)/h.height)*2+1),I.setFromCamera(b,e),I.ray.intersectPlane(re,D))){k.copy(Y),H&&Y.copy(D).applyMatrix4(ne.copy(H.matrixWorld).invert()),V.subVectors(Y,k);var U=V.length();U>15&&V.multiplyScalar(15/U)}}var me=null;function fe(){return me||(me=o.closest('[data-flip-element="target"]')||o),me}function Ee(C,B){var h=fe().getBoundingClientRect();return C>=h.left&&C<=h.right&&B>=h.top&&B<=h.bottom}var ge=o.querySelector("#logo-coords"),Re=o.querySelector("#logo-drag-label"),le=!1;function Ie(C){if(N=C.clientX,S=C.clientY,t||ue!=="interactive"){E=!1,Y.set(9999,9999,0);return}var B=Ee(C.clientX,C.clientY);if(B){E=!0,Q(C.clientX,C.clientY);var h=fe().getBoundingClientRect(),U=Math.round(C.clientX-h.left),se=Math.round(C.clientY-h.top);ge&&(ge.textContent="X: "+U+"PX    Y: "+se+"PX")}else E=!1,Y.set(9999,9999,0);i&&(y+=(C.clientX-v)*.005,f+=(C.clientY-a)*.005,f=Math.max(-Math.PI/2,Math.min(Math.PI/2,f)),v=C.clientX,a=C.clientY)}function Be(C){t||ue!=="interactive"||Ee(C.clientX,C.clientY)&&(i=!0,v=C.clientX,a=C.clientY)}function Fe(){t||(i=!1,y=0,f=0,c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2))}window.addEventListener("mousemove",Ie),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Fe);function Xe(){for(var C=4e3,B=new THREE.BufferGeometry,h=new Float32Array(C*3),U=new Float32Array(C*3),se=0;se<C;se++){h[se*3]=(Math.random()-.5)*2200,h[se*3+1]=(Math.random()-.5)*1800,h[se*3+2]=-200-Math.random()*1800;var oe=de[Math.floor(Math.random()*de.length)],Le=.2+Math.random()*.3;U[se*3]=oe.r*Le,U[se*3+1]=oe.g*Le,U[se*3+2]=oe.b*Le}B.setAttribute("position",new THREE.BufferAttribute(h,3)),B.setAttribute("color",new THREE.BufferAttribute(U,3));var be=document.createElement("canvas");be.width=be.height=32;var Te=be.getContext("2d"),ye=Te.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=ye,Te.fillRect(0,0,32,32);var Ue=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),we=new THREE.Points(B,Ue);return we.userData={positions:h,count:C},n.add(we),we}ve();var he=Xe(),ke='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Ae(ke);var Me=new THREE.Clock,ue="spin",_=null;function ce(){if(t){ue="spin";return}if(_===null){var C=document.querySelector(".scaling-element-video");_=C&&getComputedStyle(C).display!=="none"}if(!_){ue="spin";return}var B=window._flipProgress||0;B>.85?ue="interactive":B>.7?ue="transition":ue="spin"}var x="spin",X=!0,u=new IntersectionObserver(function(C){X=C[0].isIntersecting},{threshold:0});u.observe(o);var G=!1,Z=null,ee=0;function De(){G=!0,clearTimeout(Z),Z=setTimeout(function(){G=!1},150);var C=Ee(N,S);C?(E=!0,Q(N,S)):(E=!1,Y.set(9999,9999,0))}window.addEventListener("scroll",De,{passive:!0});function ze(){if(ae=requestAnimationFrame(ze),!!X){ee++;var C=Math.min(Me.getDelta(),.05),B=Me.elapsedTime;ce(),x==="interactive"&&ue!=="interactive"&&(E=!1,Y.set(9999,9999,0),i=!1);var h=ue==="transition"||ue==="interactive";if(h&&!le?(le=!0,Re&&(Re.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!h&&le&&(le=!1,Re&&(Re.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),x=ue,E&&!Ee(N,S)&&(E=!1,Y.set(9999,9999,0)),ue==="spin")c+=g*C,w+=(0-w)*.05;else if(ue==="transition")c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2),c+=(0-c)*.025,w+=(0-w)*.025;else{var U=y-c;U=U%(Math.PI*2),U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),c+=U*.12,w+=(f-w)*.12}H&&(H.rotation.x=w,H.rotation.y=c,H.scale.setScalar(1),H.position.y=-15);for(var se=he.userData.positions,oe=0;oe<he.userData.count;oe++)se[oe*3+1]+=Math.sin(B*.2+oe)*.05,se[oe*3]+=Math.cos(B*.15+oe*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-c*35*.35,he.position.y=w*28*.35,s.position.x=300+Math.sin(B*.3)*100,s.position.y=350+Math.cos(B*.2)*80,d.intensity=2+Math.sin(B*.5)*.4,T.intensity=.8+Math.sin(B*.4+1)*.3,!(t&&G&&ee%4!==0)&&(Ce(C),r.render(n,e))}}return ze(),function(){cancelAnimationFrame(ae),window.removeEventListener("mousemove",Ie),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Fe),window.removeEventListener("scroll",De),clearTimeout(Z),u.disconnect(),n.traverse(function(C){C.geometry&&C.geometry.dispose(),C.material&&(C.material.map&&C.material.map.dispose(),C.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),H=null}}function Kt(o){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),r=t.querySelector("[data-load-logo]"),s=Array.from(t.querySelectorAll("[data-load-text]")),d=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),l=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(r,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(d.length&&l.set(d,{autoAlpha:1},0),s.length>=2){let T=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),y=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([T.chars,y.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),l.to(T.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),l.to(T.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),l.to(y.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),l.to(y.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return l}function Zt(o){let n=[...(o||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(c=>{let f=c.parentElement;f&&(c.style.whiteSpace="nowrap",e.has(f)||e.set(f,[]),e.get(f).push(c))});function r(c){let f=getComputedStyle(c);return c.clientWidth-parseFloat(f.paddingLeft)-parseFloat(f.paddingRight)}function s(c,f){if(f<=0)return;let w=parseFloat(getComputedStyle(c).fontSize)||16;for(let i=0;i<5;i++){let v=c.getBoundingClientRect().width;if(v<=0)break;let a=f/v;if(Math.abs(a-1)<.002)break;w*=a,c.style.fontSize=w+"px"}}function d(){e.forEach((c,f)=>{let w=r(f);c.forEach(i=>s(i,w))})}let l=null;function T(){l||(l=requestAnimationFrame(()=>{l=null,d()}))}let y;return window.ResizeObserver&&(y=new ResizeObserver(T),e.forEach((c,f)=>y.observe(f))),window.addEventListener("resize",T),d(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(d),()=>{l&&cancelAnimationFrame(l),y&&y.disconnect(),window.removeEventListener("resize",T),n.forEach(c=>{c.style.whiteSpace="",c.style.fontSize=""})}}var qe={duration:.8,ease:"expo.out"},jt=.08,er={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Jt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function tr(o,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:o,transformOrigin:t}),n}function Qt(o){var t=o.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(r){var s=r.getAttribute("data-marker-direction")||"right",d=r.getAttribute("data-marker-theme")||"#000000",l=r.getAttribute("data-marker-scroll-start")||"top 90%",T=d.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(d).trim()||d,y=Jt[s]||Jt.right,c=er[r.getAttribute("data-highlight-marker-reveal")]||null;c&&(T=c.bar);var f=r.closest("[data-cursor-label]"),w={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,v=SplitText.create(r,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){w.timeline&&w.timeline.kill(),w.scrollTrigger&&w.scrollTrigger.kill(),r.querySelectorAll(".highlight-marker-bar").forEach(function(E){E.remove()}),w.listeners.forEach(function(E){E.el.removeEventListener(E.type,E.fn)}),w.listeners=[],i=!1;var g=a.lines,b=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(g.forEach(function(E,N){gsap.set(E,{position:"relative",overflow:"hidden"});var S=tr(T,y.origin);gsap.set(S,{[y.prop]:0}),E.appendChild(S),c&&(gsap.set(E,{zIndex:0,color:c.text}),gsap.set(S,{zIndex:-1})),b.to(S,{[y.prop]:1,duration:qe.duration,ease:qe.ease},N*jt);var j=function(){i&&(gsap.to(S,{[y.prop]:0,duration:qe.duration,ease:qe.ease}),c&&gsap.to(E,{color:c.hoverText,duration:qe.duration,ease:qe.ease}))},ie=function(){i&&(gsap.to(S,{[y.prop]:1,duration:qe.duration,ease:qe.ease}),c&&gsap.to(E,{color:c.text,duration:qe.duration,ease:qe.ease}))};!c&&e&&(E.addEventListener("mouseenter",j),E.addEventListener("mouseleave",ie),w.listeners.push({el:E,type:"mouseenter",fn:j},{el:E,type:"mouseleave",fn:ie}))}),w.timeline=b,f){b.kill();var I=r.querySelectorAll(".highlight-marker-bar"),J=function(E){gsap.to(I,{[y.prop]:E,duration:qe.duration,ease:qe.ease,stagger:jt,overwrite:!0})},Y=function(){J(1)},k=function(){J(0)};f.addEventListener("cursorlabel:enter",Y),f.addEventListener("cursorlabel:leave",k),w.listeners.push({el:f,type:"cursorlabel:enter",fn:Y},{el:f,type:"cursorlabel:leave",fn:k});return}var V=ScrollTrigger.create({trigger:r,start:l,once:!0,onEnter:function(){b.play()}});w.scrollTrigger=V}});w.split=v,n.push(w)}),function(){n.forEach(function(r){r.timeline&&r.timeline.kill(),r.scrollTrigger&&r.scrollTrigger.kill(),r.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),r.split&&r.split.revert()})}}function en(o){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,r=o.querySelector("[data-cursor-marquee-status]");if(!r)return;let s=r.querySelectorAll("[data-cursor-marquee-text-target]"),d=o.querySelectorAll("[data-cursor-marquee-text]");if(!d.length)return;let l=gsap.quickTo(r,"x",{duration:n,ease:"power3"}),T=gsap.quickTo(r,"y",{duration:n,ease:"power3"}),y=null,c=f=>{l(f.clientX),T(f.clientY)};return window.addEventListener("pointermove",c,{passive:!0}),d.forEach(f=>{f.addEventListener("mouseenter",()=>{y&&clearTimeout(y);let w=f.getAttribute("data-cursor-marquee-text")||"",i=(w.length||1)/e;s.forEach(v=>{v.textContent=w,v.style.animationPlayState="running",v.style.animationDuration=i+"s"}),r.setAttribute("data-cursor-marquee-status","active")}),f.addEventListener("mouseleave",()=>{r.setAttribute("data-cursor-marquee-status","not-active"),y&&clearTimeout(y),y=setTimeout(()=>{s.forEach(w=>{w.style.animationPlayState="paused"})},t*1e3)})}),r.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",c),clearTimeout(y),gsap.killTweensOf(r)}}function tn(o){let t=[...o.querySelectorAll("video[autoplay]")].filter(r=>!r.closest("[data-bunny-player-init]"));if(!t.length)return;let n=r=>{let s=r.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(r=>{r.forEach(s=>{let d=s.target;s.isIntersecting?n(d):d.paused||d.pause()})},{rootMargin:"100% 0px"});return t.forEach(r=>{r.muted=!0,e.observe(r)}),()=>e.disconnect()}function nn(o){let t=o.querySelectorAll("[data-flip-element='wrapper']"),n=o.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function r(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(l){window._flipProgress=l.progress}}}),t.forEach(function(l,T){let y=T+1;if(y<t.length){let c=t[y],f=c.getBoundingClientRect(),w=l.getBoundingClientRect(),i=f.top+window.pageYOffset+c.offsetHeight/2,v=w.top+window.pageYOffset+l.offsetHeight/2,a=i-v;e.add(Flip.fit(n,c,{duration:a,ease:"none"}))}})}r();let s,d=function(){clearTimeout(s),s=setTimeout(function(){r()},100)};return window.addEventListener("resize",d),function(){clearTimeout(s),window.removeEventListener("resize",d),e&&e.kill()}}var nr="150%";function rr(o){let t=[];return o.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let r of e){if(r===" "){n.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=r,n.append(s),t.push(s)}}),t}var Et=new WeakMap;function rn(o){let t=o.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(d){return d.textContent})}),r=n.map(rr);return r.forEach(function(s){gsap.set(s,{fillOpacity:0})}),Et.set(o,{wrap:t,lines:n,lineChars:r}),function(){Et.delete(o),n.forEach(function(s,d){s.querySelectorAll("textPath").forEach(function(l,T){l.textContent=e[d][T]})})}}function on(o){let t=Et.get(o);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+nr,pin:!0,scrub:!0}});return t.lines.forEach(function(e,r){let s=t.lineChars[r];s.length&&n.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function wt(o){var t=[];function n(i,v,a,g){i.addEventListener(v,a,g),t.push(function(){i.removeEventListener(v,a,g)})}o.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var v=i.getAttribute("data-player-src");if(!v)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(_){}try{a.removeAttribute("src"),a.load()}catch(_){}function g(_){i.getAttribute("data-player-status")!==_&&i.setAttribute("data-player-status",_)}function b(_){a.muted=!!_,i.setAttribute("data-player-muted",a.muted?"true":"false")}function I(_){i.setAttribute("data-player-fullscreen",_?"true":"false")}function J(_){i.setAttribute("data-player-activated",_?"true":"false")}i.hasAttribute("data-player-activated")||J(!1);var Y=i.querySelector("[data-player-timeline]"),k=i.querySelector("[data-player-progress]"),V=i.querySelector("[data-player-buffered]"),E=i.querySelector("[data-player-timeline-handle]"),N=i.querySelectorAll("[data-player-time-duration]"),S=i.querySelectorAll("[data-player-time-progress]"),j=i.getAttribute("data-player-update-size"),ie=i.getAttribute("data-player-lazy"),W=ie==="true",R=ie==="meta",$=i.getAttribute("data-player-autoplay")==="true",H=i.getAttribute("data-player-muted")==="true",A=!1;$?(b(!0),a.loop=!0):b(H),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),$&&(a.autoplay=!1);var P=!!a.canPlayType("application/vnd.apple.mpegurl"),F=P&&"ManagedMediaSource"in window,z=!!(window.Hls&&Hls.isSupported())&&!F;if(j==="true"&&!R&&!W){var m=a.preload;a.preload="metadata";var p=function(){y(i,j,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",p),a.preload=m||""};n(a,"loadedmetadata",p,{once:!0}),a.src=v}function q(){w(v,z).then(function(_){_.width&&_.height&&y(i,j,_.width,_.height),N.length&&isFinite(_.duration)&&_.duration>0&&s(N,r(_.duration)),T(i,A)})}var K=!1,M=!1,O="";function L(){if(!K){if(K=!0,i._hls){try{i._hls.destroy()}catch(ce){}i._hls=null}if(F)a.preload=W||R?"auto":a.preload,a.src=v,n(a,"loadedmetadata",function(){T(i,A),j==="true"&&y(i,j,a.videoWidth,a.videoHeight),N.length&&s(N,r(a.duration))},{once:!0});else if(z){var _=new Hls({maxBufferLength:10});_.attachMedia(a),_.on(Hls.Events.MEDIA_ATTACHED,function(){_.loadSource(v)}),_.on(Hls.Events.MANIFEST_PARSED,function(){if(T(i,A),j==="true"){var ce=_.levels||[],x=d(ce);x&&x.width&&x.height&&y(i,j,x.width,x.height)}}),_.on(Hls.Events.LEVEL_LOADED,function(ce,x){x&&x.details&&isFinite(x.details.totalduration)&&N.length&&s(N,r(x.details.totalduration))}),i._hls=_}else a.src=v}}R?(q(),a.preload="none"):W?a.preload="none":L();function ae(){M=!0,a.paused||a.ended?((W||R)&&!K&&L(),A=!0,O="",g("loading"),l(a)):(O="manual",a.pause())}function de(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function ve(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function te(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function He(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function Ae(){ve()||a.webkitDisplayingFullscreen?He():te()}n(document,"fullscreenchange",function(){I(ve())}),n(document,"webkitfullscreenchange",function(){I(ve())}),n(a,"webkitbeginfullscreen",function(){I(!0)}),n(a,"webkitendfullscreen",function(){I(!1)}),n(i,"click",function(_){var ce=_.target.closest("[data-player-control]");if(!(!ce||!i.contains(ce))){var x=ce.getAttribute("data-player-control");x==="play"||x==="pause"||x==="playpause"?ae():x==="mute"?de():x==="fullscreen"&&Ae()}});function Ce(){N.length&&s(N,r(a.duration)),S.length&&s(S,r(a.currentTime))}n(a,"timeupdate",Ce),n(a,"loadedmetadata",function(){Ce(),c(i,j,a)}),n(a,"loadeddata",function(){c(i,j,a)}),n(a,"playing",function(){c(i,j,a)}),n(a,"durationchange",Ce);var ne;function re(){if(a.duration){var _=a.currentTime/a.duration*100;k&&(k.style.transform="translateX("+(-100+_)+"%)"),E&&(E.style.left=_+"%")}}function D(){re(),!a.paused&&!a.ended&&(ne=requestAnimationFrame(D))}function Q(){if(!(!V||!a.duration||!a.buffered.length)){var _=a.buffered.end(a.buffered.length-1),ce=_/a.duration*100;V.style.transform="translateX("+(-100+ce)+"%)"}}if(n(a,"progress",Q),n(a,"loadedmetadata",Q),n(a,"durationchange",Q),n(a,"play",function(){J(!0),cancelAnimationFrame(ne),D(),g("playing")}),n(a,"playing",function(){A=!1,g("playing")}),n(a,"pause",function(){A=!1,cancelAnimationFrame(ne),re(),g("paused")}),n(a,"waiting",function(){g("loading")}),n(a,"canplay",function(){T(i,A)}),n(a,"ended",function(){A=!1,cancelAnimationFrame(ne),re(),g("paused"),J(!1)}),Y){let _=function(Z){le||(le=Y.getBoundingClientRect());var ee=(Z-le.left)/le.width;return ee<0&&(ee=0),ee>1&&(ee=1),ee},ce=function(Z){if(a.duration){var ee=Z*100;k&&(k.style.transform="translateX("+(-100+ee)+"%)"),E&&(E.style.left=ee+"%"),S.length&&s(S,r(Z*a.duration))}},x=function(Z){a.duration&&(Z-ge<Re||(ge=Z,a.currentTime=Ee))},X=function(Z){if(a.duration){me=!0,fe=!a.paused&&!a.ended,fe&&a.pause(),i.setAttribute("data-timeline-drag","true"),le=Y.getBoundingClientRect();var ee=_(Z.clientX);Ee=ee*a.duration,ce(ee),x(performance.now()),Y.setPointerCapture&&Y.setPointerCapture(Z.pointerId),window.addEventListener("pointermove",u,{passive:!1}),window.addEventListener("pointerup",G,{passive:!0}),Z.preventDefault()}},u=function(Z){if(me){var ee=_(Z.clientX);Ee=ee*a.duration,ce(ee),x(performance.now()),Z.preventDefault()}},G=function(){me&&(me=!1,i.setAttribute("data-timeline-drag","false"),le=null,a.currentTime=Ee,fe?l(a):(re(),Ce()),window.removeEventListener("pointermove",u),window.removeEventListener("pointerup",G))};var me=!1,fe=!1,Ee=0,ge=0,Re=180,le=null;n(window,"resize",function(){me||(le=null)}),n(Y,"pointerdown",X,{passive:!1}),E&&n(E,"pointerdown",X,{passive:!1})}var Ie,Be=3e3;function Fe(_){i.getAttribute("data-player-hover")!==_&&i.setAttribute("data-player-hover",_)}function Xe(){clearTimeout(Ie),Ie=setTimeout(function(){Fe("idle")},Be)}function he(){Fe("active"),Xe()}n(i,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var ke=!1;function Me(_){var ce=i.getBoundingClientRect();_.clientX>=ce.left&&_.clientX<=ce.right&&_.clientY>=ce.top&&_.clientY<=ce.bottom&&he()}if(n(i,"pointerenter",function(){he(),ke||(ke=!0,n(window,"pointermove",Me,{passive:!0}))}),n(i,"pointerleave",function(){Fe("idle"),clearTimeout(Ie),ke&&(ke=!1,window.removeEventListener("pointermove",Me))}),$){var ue=new IntersectionObserver(function(_){_.forEach(function(ce){var x=ce.isIntersecting&&ce.intersectionRatio>0;x?((W||R)&&!K&&L(),a.paused?(O="",A=!0,g("loading"),l(a)):g("playing")):!a.paused&&!a.ended&&(O="io",a.pause(),g("paused"))})},{threshold:.1});ue.observe(i)}t.push(function(){if(cancelAnimationFrame(ne),clearTimeout(Ie),ue&&ue.disconnect(),i._hls){try{i._hls.destroy()}catch(_){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(_){}})});function e(i){return(i<10?"0":"")+i}function r(i){if(!isFinite(i)||i<0)return"00:00";var v=Math.floor(i),a=Math.floor(v/3600),g=Math.floor(v%3600/60),b=v%60;return a>0?a+":"+e(g)+":"+e(b):e(g)+":"+e(b)}function s(i,v){i.forEach(function(a){a.textContent=v})}function d(i){return!i||!i.length?null:i.reduce(function(v,a){return(a.width||0)>(v.width||0)?a:v},i[0])}function l(i){var v=i.play();v&&typeof v.then=="function"&&v.catch(function(){})}function T(i,v){!v&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function y(i,v,a,g){if(!(v!=="true"||!a||!g)){var b=i.querySelector("[data-player-before]");b&&(b.style.paddingTop=g/a*100+"%")}}function c(i,v,a){if(v==="true"){var g=i.querySelector("[data-player-before]");if(g){var b=g.style.paddingTop&&g.style.paddingTop!=="0%";!b&&a.videoWidth&&a.videoHeight&&y(i,v,a.videoWidth,a.videoHeight)}}}function f(i,v){try{return new URL(v,i).toString()}catch(a){return v}}function w(i,v){return new Promise(function(a){if(v&&window.Hls&&Hls.isSupported())try{var g=new Hls,b={width:0,height:0,duration:NaN},I=!1,J=!1;g.on(Hls.Events.MANIFEST_PARSED,function(V,E){var N=E&&E.levels||g.levels||[],S=d(N);S&&S.width&&S.height&&(b.width=S.width,b.height=S.height,I=!0)}),g.on(Hls.Events.LEVEL_LOADED,function(V,E){E&&E.details&&isFinite(E.details.totalduration)&&(b.duration=E.details.totalduration,J=!0)}),g.on(Hls.Events.ERROR,function(){try{g.destroy()}catch(V){}a(b)}),g.on(Hls.Events.LEVEL_LOADED,function(){try{g.destroy()}catch(V){}a(b)}),g.loadSource(i);return}catch(V){a({width:0,height:0,duration:NaN});return}function Y(V){for(var E=V.split(/\r?\n/),N=0,S=0,j=null,ie=null,W=0;W<E.length;W++){var R=E[W];if(R.indexOf("#EXT-X-STREAM-INF:")===0)ie=R;else if(ie&&R&&R[0]!=="#"){j||(j=R.trim());var $=/RESOLUTION=(\d+)x(\d+)/.exec(ie);if($){var H=parseInt($[1],10),A=parseInt($[2],10);H>N&&(N=H,S=A)}ie=null}}return{bestW:N,bestH:S,media:j}}function k(V){for(var E=0,N=/#EXTINF:([\d.]+)/g,S;S=N.exec(V);)E+=parseFloat(S[1]);return E}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(V){if(!V.ok)throw new Error("master");return V.text()}).then(function(V){var E=Y(V);if(!E.media){a({width:E.bestW||0,height:E.bestH||0,duration:NaN});return}var N=f(i,E.media);return fetch(N,{credentials:"omit",cache:"no-store"}).then(function(S){if(!S.ok)throw new Error("media");return S.text()}).then(function(S){a({width:E.bestW||0,height:E.bestH||0,duration:k(S)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(i){i()}),t=[]}}var or="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",ar="(min-width: 768px)";function sn(o){if(!o.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=wt(o),n=an(o);else{let e=!1;return ct(or).catch(function(){}).then(function(){e||(t=wt(o),n=an(o))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function an(o){if(!o.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let r="",s=!1,d,l,T,y,c,f,w="",i="",v="",a=(m,p=o)=>p.querySelector(m),g=m=>a(`[data-mini-showreel-lightbox="${m}"]`),b=m=>a(`[data-mini-showreel-player="${m}"]`),I=m=>m.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",m)||m,J=(m,p)=>{let q=m.width,K=q/p;return K>m.height&&(K=m.height,q=K*p),{left:m.left+(m.width-q)/2,top:m.top+(m.height-K)/2,width:q,height:K}},Y=m=>{let p=I(m).getBoundingClientRect(),q=m.getBoundingClientRect(),K=q.width>0&&q.height>0?q.width/q.height:16/9;return J(p,K)},k=(m,p)=>gsap.set(m,{position:"fixed",left:p.left,top:p.top,width:p.width,height:p.height,margin:0,x:0,y:0});function V(m){r&&o.querySelectorAll(`[data-mini-showreel-lightbox="${r}"], [data-mini-showreel-player="${r}"]`).forEach(p=>p.setAttribute("data-mini-showreel-status",m))}function E(){i=(d==null?void 0:d.style.zIndex)||"",v=(l==null?void 0:l.style.zIndex)||"",d&&(d.style.zIndex=String(e)),l&&(l.style.zIndex=String(e))}function N(){d&&(d.style.zIndex=i),l&&(l.style.zIndex=v)}function S(m){let p=b(m);if(!p)return;let q=p.querySelector("[data-bunny-player-init]"),K=p.querySelector("video");if(K){if(q){let M=q.querySelector('[data-player-control="play"], [data-player-control="playpause"]');M&&(K.paused||K.ended)&&M.click();return}try{K.play()}catch(M){}}}function j(m){let p=b(m);if(!p)return;let q=p.querySelector("[data-bunny-player-init]"),K=p.querySelector("video");K&&(K.muted=!0,q&&q.setAttribute("data-player-muted","true"),(K.paused||K.ended)&&S(m))}function ie(){N(),r="",s=!1,d=l=T=y=c=f=null,w="",i="",v="",Pe.start()}function W(m){if(!m||s||(d=g(m),l=b(m),!d||!l)||(T=a("[data-mini-showreel-target]",d),!T))return;r=m,s=!0,Pe.stop(),l.dataset.flipId=r,w=l.style.cssText||"",y=l.parentElement,c=l.nextSibling,E(),V("active"),S(r);let p=Flip.getState(l),q=Y(T);d.appendChild(l),k(l,q),f=Flip.from(p,{duration:t,ease:n,absolute:!0,scale:!1})}function R(m){!s||!l||m&&m!==r||(j(r),V("not-active"),f&&f.kill(),f=Flip.fit(l,y,{duration:t,ease:n,scale:!1,onComplete:()=>{y.insertBefore(l,c),l.style.cssText=w,ie()}}))}function $(){!s||!l||(f&&f.kill(),j(r),V("not-active"),y.insertBefore(l,c),l.style.cssText=w,ie())}function H(){!s||!l||!T||k(l,Y(T))}function A(m){let p=m.target.closest("[data-mini-showreel-open]");p&&(m.preventDefault(),W(p.getAttribute("data-mini-showreel-open")||""))}function P(m){let p=m.target.closest("[data-mini-showreel-close]");p&&(m.preventDefault(),R(p.getAttribute("data-mini-showreel-close")||""))}function F(m){m.key==="Escape"&&R("")}let z=gsap.matchMedia();return z.add(ar,function(){return o.addEventListener("click",A),document.addEventListener("click",P),window.addEventListener("keydown",F),window.addEventListener("resize",H),function(){$(),o.removeEventListener("click",A),document.removeEventListener("click",P),window.removeEventListener("keydown",F),window.removeEventListener("resize",H)}}),function(){z.revert(),$()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",o=>{it.x=o.clientX,it.y=o.clientY,it.known=!0},{passive:!0});function et(o){let t=e=>o(e.clientX,e.clientY),n=()=>{it.known&&o(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var Ge=1920,We=1080,St="#E5E5E5",Tt="#000000",cn="http://www.w3.org/2000/svg";function ln(o){let t=o.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(cn,"svg");n.setAttribute("viewBox",`0 0 ${Ge} ${We}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(z,m)=>{let p=document.createElementNS(cn,z);return p.setAttribute("fill",m),n.appendChild(p),p},r=e("polygon",St),s=e("polygon",Tt),d=e("rect",Tt),l=e("rect",St),T=e("rect",St),y=e("rect",Tt);[d,l,T,y].forEach(z=>z.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let c=(z,m,p,q,K)=>{z.setAttribute("x",m),z.setAttribute("y",p),z.setAttribute("width",Math.max(0,q)),z.setAttribute("height",Math.max(0,K))},f={x:Ge*(2/3),y:We*(1/3)},w=.1,i=.9,v={x:f.x,y:f.y},a={x:f.x,y:f.y},g={x:f.x,y:f.y},b=!1,I=()=>gsap.to(g,{x:gsap.utils.random(Ge*.327,Ge*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:I}),J=()=>gsap.to(g,{y:gsap.utils.random(We*.193,We*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:J});I(),J();function Y(){let z=gsap.utils.clamp(Ge*w,Ge*i,v.x),m=Ge-z,p=gsap.utils.clamp(We*w,We*i,v.y),q=We-p;r.setAttribute("points",`0,${p} ${z},0 ${Ge},${p} ${Ge},${We} 0,${We}`),s.setAttribute("points",`${Ge},${p} ${z},0 ${z},${p}`),c(d,0,p,z,q);let K=z*.25,M=q*(2/3);c(l,z/2-K/2,p+q-M,K,M),c(T,z,p,m,q);let O=m*.5,L=q/3;c(y,z+m/2-O/2,p+q/2-L/2,O,L)}let k=.1,V=.03;function E(){let m=1-Math.pow(1-(b?k:V),gsap.ticker.deltaRatio(60)),p=b?a:g;v.x+=(p.x-v.x)*m,v.y+=(p.y-v.y)*m,Y()}let N=(z,m)=>{let p=t.getBoundingClientRect();!p.width||!p.height||(a.x=gsap.utils.clamp(0,Ge,(z-p.left)/p.width*Ge),a.y=gsap.utils.clamp(0,We,(m-p.top)/p.height*We),b=!0)},S=()=>{b=!1},j=(z,m)=>{let p=t.getBoundingClientRect();z>=p.left&&z<=p.right&&m>=p.top&&m<=p.bottom?N(z,m):S()},W=window.matchMedia("(hover: hover) and (pointer: fine)").matches?et(j):null,R=z=>{let m=z.touches[0];m&&N(m.clientX,m.clientY)},$={passive:!0};t.addEventListener("touchstart",R,$),t.addEventListener("touchmove",R,$),t.addEventListener("touchend",S,$),t.addEventListener("touchcancel",S,$);let H=!1,A=()=>{H||(H=!0,gsap.ticker.add(E))},P=()=>{H&&(H=!1,gsap.ticker.remove(E))},F=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:z=>z.isActive?A():P()});return Y(),A(),function(){P(),F.kill(),gsap.killTweensOf(g),W&&W(),t.removeEventListener("touchstart",R,$),t.removeEventListener("touchmove",R,$),t.removeEventListener("touchend",S,$),t.removeEventListener("touchcancel",S,$),n.remove()}}var ir="http://www.w3.org/2000/svg";var sr=4.1343749999999995,cr="#AFAFAF",lr="#000000",ur=5e3,dr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],vr=0,un=(o,t)=>{if(o<0||t<0||o>=20||t>=20)return!1;let n=20/2;return Math.hypot(o+.5-n,t+.5-n)<=n},Ze=(o,t)=>{let n=document.createElementNS(ir,o);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function dn(o){let t=o.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let r="pulse-dots-liquid-"+ ++vr;e.setAttribute("data-pulse-dots-paused","");let s=Ze("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let d=Ze("filter",{id:r,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});d.append(Ze("feGaussianBlur",{in:"SourceGraphic",stdDeviation:sr.toFixed(2)}),Ze("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let l=Ze("defs",{});l.appendChild(d);let T=Ze("rect",{width:1e3,height:1e3,fill:cr}),y=Ze("g",{filter:`url(#${r})`,fill:lr});for(let f=0;f<20;f++)for(let w=0;w<20;w++){if(!un(w,f))continue;let i=dr.filter(I=>un(w+I.dx,f+I.dy)),v=i[Math.floor(Math.random()*i.length)],a=185+w*31.5+27.5625/2,g=185+f*31.5+27.5625/2,b=Ze("g",{transform:`rotate(${v.deg} ${a} ${g})`});b.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*ur)}ms`),b.append(Ze("circle",{class:"pulse-dots__dot is--first",cx:a,cy:g,r:27.5625/2}),Ze("circle",{class:"pulse-dots__dot is--last",cx:a,cy:g,r:27.5625/2})),y.appendChild(b)}s.append(l,T,y),e.appendChild(s);let c=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:f=>e.toggleAttribute("data-pulse-dots-paused",!f.isActive)});e.toggleAttribute("data-pulse-dots-paused",!c.isActive),n.push(()=>{c.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>n.forEach(e=>e())}var ft=`#version 300 es
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
}`;var At=60,pr=1.5,mr=1,Pn=150,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function En(o){let t=o.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let r=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function d(M,O){let L=e.createShader(M);return e.shaderSource(L,O),e.compileShader(L),L}let l=[];function T(M,O=vn){let L=e.createProgram(),ae=d(e.VERTEX_SHADER,O),de=d(e.FRAGMENT_SHADER,M);e.attachShader(L,ae),e.attachShader(L,de),e.bindAttribLocation(L,0,"aVertexPosition"),e.bindAttribLocation(L,1,"aTextureCoord"),e.linkProgram(L);let ve={p:L,v:ae,f:de,loc:{}};return l.push(ve),ve}function y(M){let{p:O,v:L,f:ae}=M;e.getProgramParameter(O,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(O),e.getShaderInfoLog(L),e.getShaderInfoLog(ae));let de=e.getProgramParameter(O,e.ACTIVE_UNIFORMS);for(let ve=0;ve<de;ve++){let te=e.getActiveUniform(O,ve);M.loc[te.name]=e.getUniformLocation(O,te.name)}e.deleteShader(L),e.deleteShader(ae)}let c={bg:T(fn,ft),shapes:pn.map(M=>T(M,mn)),trailSim:T(gn,ft),trail:T(hn),blur:xn.map(M=>T(M)),bloom:bn.map(M=>T(M)),gmap:T(yn,ft)},f=e.createVertexArray();e.bindVertexArray(f);let w=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let v=[];function a(M,O,L=!1){let ae=e.createTexture();e.bindTexture(e.TEXTURE_2D,ae),L&&r?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,M,O,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,M,O,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let de=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,de),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ae,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let ve={tex:ae,fb:de,w:M,h:O};return v.push(ve),ve}function g(){v.forEach(M=>{e.deleteTexture(M.tex),e.deleteFramebuffer(M.fb)}),v.length=0}function b(M,O,L,ae){e.useProgram(M.p);let de=O?O.w:n.width,ve=O?O.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,O?O.fb:null),e.viewport(0,0,de,ve);let te=M.loc;te.uMVMatrix&&e.uniformMatrix4fv(te.uMVMatrix,!1,Ct),te.uPMatrix&&e.uniformMatrix4fv(te.uPMatrix,!1,Ct),te.uTextureMatrix&&e.uniformMatrix4fv(te.uTextureMatrix,!1,Ct),te.uResolution&&e.uniform2f(te.uResolution,de,ve),te.uArtboardResolution&&e.uniform2f(te.uArtboardResolution,1920,1920),te.uAspectRatio&&e.uniform1f(te.uAspectRatio,1),te.uMousePos&&e.uniform2f(te.uMousePos,I.x,I.y),te.uIsMask&&e.uniform1i(te.uIsMask,0),te.uParentTrackMouse&&e.uniform1f(te.uParentTrackMouse,0);let He=0;Object.keys(L).forEach(Ae=>{te[Ae]&&(e.activeTexture(e.TEXTURE0+He),e.bindTexture(e.TEXTURE_2D,L[Ae].tex),e.uniform1i(te[Ae],He),He++)}),Object.keys(ae||{}).forEach(Ae=>{if(!te[Ae])return;let Ce=ae[Ae];Array.isArray(Ce)?e.uniform2f(te[Ae],Ce[0],Ce[1]):e.uniform1f(te[Ae],Ce)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let I={x:.5,y:.5},J={x:.5,y:.5},Y=0,k=null,V=0;function E(){g();let M=Math.min(pr,window.devicePixelRatio||1),O=Math.max(1,Math.round(t.clientWidth*M)),L=Math.max(1,Math.round(t.clientHeight*M));n.width=O,n.height=L;let ae=te=>[Math.max(1,Math.round(O*te)),Math.max(1,Math.round(L*te))];k={a:a(O,L),b:a(O,L),pp:[a(...ae(.5),!0),a(...ae(.5),!0)],trail:a(O,L),blur1:a(...ae(1)),blur2:a(...ae(1)),blur3:a(...ae(1)),blur4:a(...ae(1)),bth:a(...ae(1)),bd1:a(...ae(1)),bd2:a(...ae(1)),bs1:a(...ae(1)),bs2:a(...ae(1)),bloom:a(O,L)},b(c.bg,k.a,{});let de=k.a,ve=k.b;c.shapes.forEach(te=>{b(te,ve,{uBgTexture:de});let He=de;de=ve,ve=He}),k.base=de,V=0}function N(){if(!k)return;let M=k.pp[V],O=k.pp[1-V];b(c.trailSim,O,{uPingPongTexture:M},{uTime:Y,uPreviousMousePos:[J.x,J.y]}),V=1-V,b(c.trail,k.trail,{uTexture:k.base,uPingPongTexture:O}),b(c.blur[0],k.blur1,{uTexture:k.trail}),b(c.blur[1],k.blur2,{uTexture:k.blur1}),b(c.blur[2],k.blur3,{uTexture:k.blur2}),b(c.blur[3],k.blur4,{uTexture:k.blur3});let L=k.blur4;b(c.bloom[0],k.bth,{uTexture:L}),b(c.bloom[1],k.bd1,{uTexture:k.bth}),b(c.bloom[2],k.bd2,{uTexture:k.bd1,uBgTexture:L}),b(c.bloom[3],k.bs1,{uTexture:k.bd2}),b(c.bloom[4],k.bs2,{uTexture:k.bs1,uBgTexture:L}),b(c.bloom[5],k.bloom,{uTexture:k.bs2,uBgTexture:L}),b(c.gmap,null,{uTexture:k.bloom},{uTime:0}),J.x=I.x,J.y=I.y}let S=Pn,ie=et((M,O)=>{let L=n.getBoundingClientRect();!L.width||!L.height||(I.x=(M-L.left)/L.width,I.y=1-(O-L.top)/L.height,S=0,A())}),W=null,R=0,$=!1;function H(M){if(!$||S>=Pn){W=null;return}if(W=requestAnimationFrame(H),M-R<1e3/At-1)return;let O=R?Math.min(M-R,100):1e3/At;R=M,Y+=mr*(O/(1e3/At)),N(),S++}function A(){m&&$&&!W&&(J.x=I.x,J.y=I.y,R=0,W=requestAnimationFrame(H))}let P=new IntersectionObserver(([M])=>{$=M.isIntersecting,$?A():W&&(cancelAnimationFrame(W),W=null)});P.observe(t);let F=null,z=new ResizeObserver(()=>{clearTimeout(F),F=setTimeout(()=>{m&&(E(),N())},60)});z.observe(t);let m=!1,p=null;function q(){p=null,l.forEach(y),m=!0,E(),N()}function K(){l.every(M=>e.getProgramParameter(M.p,s.COMPLETION_STATUS_KHR))?q():p=requestAnimationFrame(K)}return s?p=requestAnimationFrame(K):q(),function(){p&&cancelAnimationFrame(p),W&&cancelAnimationFrame(W),W=null,clearTimeout(F),P.disconnect(),z.disconnect(),ie(),g(),l.forEach(L=>e.deleteProgram(L.p)),e.deleteBuffer(w),e.deleteBuffer(i),e.deleteVertexArray(f);let O=e.getExtension("WEBGL_lose_context");O&&O.loseContext(),n.remove()}}var hr="#BBC0C8",gr="#FFFFFF";var Mt='"Suisseintl Book", Arial, sans-serif';var wn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],xr=3,br=1.325,lt=5,yr=.4,Sn=20,Pr=2;function Tn(o){let t=o.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),r=s=>{let d=(s%lt+lt)%lt/lt;return d<.4?1-e(d/.4):d<.6?0:e((d-.6)/.4)};return t.forEach(s=>{let d=(s.getAttribute("data-text")||"").trim();if(!d)return;let l=Array.from(Array(xr).fill(d).join(" ").toUpperCase()),T=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=document.createElement("canvas");y.setAttribute("aria-hidden","true"),Object.assign(y.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(y);let c=y.getContext("2d"),f=[],w=0,i=new Map,v=2;function a(){c.font=`24px ${Mt}`,f=l.map(R=>c.measureText(R).width),w=(3363-f.reduce((R,$)=>R+$,0))/(l.length-1)}let g=null;function b(){i=new Map,c.font=`24px ${Mt}`;let W=24,R=24*.35,$=[...new Set(l)].filter(F=>F!==" ").map(F=>({ch:F,w:c.measureText(F).width})),H=Math.ceil((W+R+v*2)*I),A=0;$.forEach(F=>{F.sx=A,F.sw=Math.ceil((F.w+v*2)*I),A+=F.sw+2}),g=document.createElement("canvas"),g.width=Math.max(1,A),g.height=Math.max(1,H);let P=g.getContext("2d");P.font=`${24*I}px ${Mt}`,P.fillStyle=gr,P.textBaseline="alphabetic",$.forEach(F=>{P.fillText(F.ch,F.sx+v*I,(v+W)*I),i.set(F.ch,{sx:F.sx,sw:F.sw,x:-F.w/2-v,y:-W-v,w:F.sw/I,h:H/I})})}let I=1;function J(){let W=Math.min(Pr,window.devicePixelRatio||1),R=s.clientWidth;y.width=Math.max(1,Math.round(R*W)),y.height=Math.max(1,Math.round(s.clientHeight*W)),I=y.width/1920}let Y=0;function k(){c.setTransform(1,0,0,1,0,0),c.fillStyle=hr,c.fillRect(0,0,y.width,y.height);let W=T?0:e(Y%Sn/Sn)*Math.PI*2;wn.forEach((R,$)=>{let H=wn.length-1-$,A=T?0:r(Y-lt+H*yr),P=w+A*br*24,F=2*Math.PI*R.r,z=R.start*Math.PI/180+W,m=0;for(let p=0;p<l.length;p++){let q=f[p];if(m+q>F)break;let K=i.get(l[p]);if(K){let M=z+(m+q/2)/R.r,O=Math.cos(M),L=Math.sin(M);c.setTransform(-L*I,O*I,-O*I,-L*I,(960+R.r*O)*I,(960+R.r*L)*I),c.drawImage(g,K.sx,0,K.sw,g.height,K.x,K.y,K.w,K.h)}m+=q+P}})}let V=(W,R)=>{Y+=R/1e3,k()},E=!1,N=()=>{!E&&!T&&(E=!0,gsap.ticker.add(V))},S=()=>{E&&(E=!1,gsap.ticker.remove(V))},j=new ResizeObserver(()=>{J(),b(),k()});j.observe(s),J(),a(),b(),k(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),b(),k()});let ie=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:W=>W.isActive?N():S()});ie.isActive&&N(),n.push(()=>{S(),ie.kill(),j.disconnect(),y.remove()})}),()=>n.forEach(s=>s())}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},An=o=>{let t=Math.sin(o*127.1+311.7)*43758.5453;return t-Math.floor(t)},Er=o=>{let t=Math.floor(o),n=o-t,e=n*n*(3-2*n);return An(t)*(1-e)+An(t+1)*e};function Cn(o){let t=o.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,r=[],s=null,d=0,l=18,T=0,y=0,c=0,f=-1e5,w=-1e5,i=!1,v=!1;function a(){s&&s.revert(),t.textContent="";let S=getComputedStyle(t);d=parseFloat(S.paddingTop),l=parseFloat(S.lineHeight),T=t.offsetHeight;let j=Math.max(1,Math.floor((T-d-parseFloat(S.paddingBottom))/l)),ie=document.createDocumentFragment();for(let W=0;W<j;W++){let R=document.createElement("div");R.className="type-field__row",R.textContent=n,ie.appendChild(R)}t.appendChild(ie),t.setAttribute("aria-hidden","true"),s=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){r=[...t.children].map((W,R)=>({chars:W.querySelectorAll(".type-field__char"),cur:r[R]?r[R].cur:0,drawn:0}))}})}function g(S){let j=Math.max(0,Math.min(S.chars.length,Math.round(S.cur)));if(j===S.drawn)return;let ie=Math.min(j,S.drawn),W=Math.max(j,S.drawn);for(let R=ie;R<W;R++)S.chars[R].style.visibility=R<j?"visible":"hidden";S.drawn=j}function b(S,j){if(!r.length)return;let ie=Math.min(j,50)/16.667,W=F=>1-Math.pow(1-F,ie),R=Pe.scroll,$=Math.min(Math.max(y-R,0),c-R-T);w+=(f-$-d-w)*W(rt.followEase);let H=Math.floor(w/l),A=R*.004,P=i&&f>=y-R&&f<=c-R;for(let F=0;F<r.length;F++){let z=r[F],m=z.chars.length,p=Math.abs(F-H),q=0;if(P){if(p===0)q=m;else if(p<=rt.radius){let K=1-p/(rt.radius+1);q=1+Math.min(rt.maxSide,K*(1-rt.ragged/2+rt.ragged*Er(F*1.3+A)))*(m-1)}}z.cur+=(q-z.cur)*W(rt.ease),g(z)}}function I(){v||(gsap.ticker.add(b),v=!0)}function J(){v&&(gsap.ticker.remove(b),v=!1)}let Y=et((S,j)=>{w<-1e4&&(w=j),f=j,i=!0}),k=()=>{i=!1};document.documentElement.addEventListener("mouseleave",k),a();let V=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(S){y=S.start+window.innerHeight,c=S.end},onToggle(S){S.isActive?I():J()}});V.isActive&&I();let E,N=()=>{clearTimeout(E),E=setTimeout(()=>{Math.floor((t.offsetHeight-d-parseFloat(getComputedStyle(t).paddingBottom))/l)!==r.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",N),function(){J(),clearTimeout(E),Y(),document.documentElement.removeEventListener("mouseleave",k),window.removeEventListener("resize",N),V.kill(),s&&s.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var Mn={duration:.5,ease:"power3"};function Rn(o){let t=o.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let r=e.querySelector("[data-cursor-label-item]");if(!r)return;let s=gsap.quickTo(r,"x",Mn),d=gsap.quickTo(r,"y",Mn),l=0,T=0,y=!1,c=new ResizeObserver(()=>{l=r.offsetWidth,T=r.offsetHeight});c.observe(r),l=r.offsetWidth,T=r.offsetHeight;let w=et((v,a)=>{let g=e.getBoundingClientRect();if(!(v>=g.left&&v<=g.right&&a>=g.top&&a<=g.bottom)){y&&(y=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let I=gsap.utils.clamp(0,Math.max(0,g.width-l),v-g.left-l/2),J=gsap.utils.clamp(0,Math.max(0,g.height-T),a-g.top-T/2);if(!y){y=!0,s(I,I),d(J,J),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(I),d(J)}),i=()=>{y&&(y=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),n.push(()=>{w(),document.documentElement.removeEventListener("mouseleave",i),c.disconnect(),gsap.killTweensOf(r),gsap.set(r,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var wr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],Sr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],Tr="#FFFFFF";var Fn="power3.out";function zn(o){let t=o.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let r=[],s=[],d=[];function l(){if(s.length&&s[0].isConnected)return;let f=e.querySelectorAll(":scope > div > div");r=(f.length?[...f]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=r.flatMap(i=>i.chars),d=f.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function T(f){f.textContent=f.dataset.orig,f.style.border=""}let y=()=>{l(),d.forEach(w=>{w.el.style.overflow="visible"});let f=(s.length-1)/2;s.forEach((w,i)=>{gsap.to(w,{color:Tr,ease:Fn,duration:.3,delay:Math.abs(i-f)*.03,overwrite:"auto",onStart:()=>{let v=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);v==1&&(w.textContent=gsap.utils.random(Sr)),a==1&&(w.style.border=`1px solid ${gsap.utils.random(wr)}`)}})})},c=()=>{if(!s.length)return;let f=getComputedStyle(e).color,w=(s.length-1)/2;d.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,v)=>{gsap.to(i,{color:f,ease:Fn,duration:.3,delay:Math.abs(v-w)*.03,overwrite:"auto",onStart:()=>T(i)})})};e.addEventListener("mouseenter",y),e.addEventListener("mouseleave",c),n.push(()=>{e.removeEventListener("mouseenter",y),e.removeEventListener("mouseleave",c),gsap.killTweensOf(s),r.forEach(f=>f.revert()),r=[],s=[],d=[]})}),()=>n.forEach(e=>e())}function Rt(o,t){let n=null;pe(Yt(o)),pe(ln(o)),pe(zn(o)),pe(rn(o)),pe($t(o)),pe(sn(o));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Kt(o):null,n?pe(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),pe(Zt(o)),pe(Qt(o)),pe(en(o)),pe(vt(o)),dt(o),pe(tn(o)),n}function pt(o){pe(on(o)),o.querySelector("[data-flip-element]")&&window.innerWidth>991&&pe(nn(o)),pe(Cn(o)),pe(Rn(o)),pe(dn(o)),pe(En(o)),pe(Tn(o)),ScrollTrigger.sort()}var Ar={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(o){var t=[];return o.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",r=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:r,mask:"lines",autoSplit:!0,onSplit:function(s){gsap.set(n,{autoAlpha:1});var d=Ar[e],l={yPercent:110,duration:d.duration,stagger:d.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?l.delay=.5:l.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(s[e],l)}}))}),function(){t.forEach(function(n){n.revert()})}}var Un=Zn(Ln());var kn=window.matchMedia("(prefers-reduced-motion: reduce)"),Lt=.9;function Dn(o){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{o.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return kn.matches||!n?e.set(o,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ut,duration:Lt,ease:Ke},0),e.fromTo(o,{y:"0vh"},{y:"-25vh",duration:Lt,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function kt(o,t,n="100vh"){let e=gsap.timeline();return kn.matches?e.set(o,{autoAlpha:1}):(e.set(o,{zIndex:3},0),e.fromTo(o,{y:n},{y:"0vh",duration:Lt,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(o,{clearProps:"zIndex"}),t(o)},null,"pageReady"),new Promise(r=>{e.call(r,null,"pageReady")})}function Dt(o,t,n){let e=document.querySelector("[data-transition-wrap]"),r=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(o,{position:"relative"}),kt(o,t,n).then(function(){r&&gsap.set(r,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,It=!1;function Ut(o){gsap.set(o,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Pe.scrollTo(0,{immediate:!0,force:!0}),Pe.resize()}var In={sync:!0,beforeLeave(){It=yt({keepCurtain:!0}),Pe.stop(),ot||(ot=bt())},beforeEnter(o){ot||(ot=bt()),gsap.set(o.next.container,{position:"fixed",top:0,left:0,right:0}),qt(),Rt(o.next.container,!1)},leave(o){return Dn(o.current.container,o.next.container)},enter(o){return It&&(Ot(),It=!1),pe(mt(o.next.container)),kt(o.next.container,Ut)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(o){Gt(o),pt(o.next.container),Pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(Un.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:o}){if(!o||!o.href)return!1;let t=new URL(o.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...In,once(o){let t=document.querySelector("[data-menu-status]");Bt(),Vt(),t&&(dt(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=o.next.container,e=Rt(n,!0);e?e.call(function(){let r=document.querySelector("[data-load-bg]");pe(mt(n)),Dt(n,function(s){Ut(s),pt(s),Pe.start(),ScrollTrigger.refresh()},r?r.offsetHeight:void 0)},null,"hideContent"):(Pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),pe(mt(n)),Dt(n,function(r){Ut(r),pt(r),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Pe.start()})})})}))}},{name:"self",...In}]}),window.addEventListener("pageshow",function(o){o.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

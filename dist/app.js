(()=>{var Gn=Object.create;var Bt=Object.defineProperty;var Nn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames;var Xn=Object.getPrototypeOf,Yn=Object.prototype.hasOwnProperty;var $n=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports);var Kn=(o,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Wn(t))!Yn.call(o,r)&&r!==n&&Bt(o,r,{get:()=>t[r],enumerable:!(e=Nn(t,r))||e.enumerable});return o};var Zn=(o,t,n)=>(n=o!=null?Gn(Xn(o)):{},Kn(t||!o||!o.__esModule?Bt(n,"default",{value:o,enumerable:!0}):n,o));var In=$n((kt,Dt)=>{(function(o,t){typeof kt=="object"&&typeof Dt!="undefined"?Dt.exports=t():typeof define=="function"&&define.amd?define(t):(o||self).barbaPrefetch=t()})(kt,function(){var o=window.requestIdleCallback||function(t){var n=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)};return new((function(){function t(){this.name="@barba/prefetch",this.version="2.2.0",this.barba=void 0,this.logger=void 0,this.observer=void 0,this.root=void 0,this.timeout=void 0,this.limit=void 0,this.toPrefetch=new Set}var n=t.prototype;return n.install=function(e,r){var s=r===void 0?{}:r,u=s.root,l=u===void 0?document.body:u,T=s.timeout,y=T===void 0?2e3:T,c=s.limit,v=c===void 0?0:c;this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this.root=l,this.timeout=y,this.limit=v},n.init=function(){var e=this;this.barba.prefetchIgnore?this.logger.warn("barba.prefetchIgnore is enabled"):this.barba.cacheIgnore?this.logger.warn("barba.cacheIgnore is enabled"):(this.observer=new IntersectionObserver(function(r){r.forEach(function(s){if(s.isIntersecting){var u=s.target,l=e.barba.url.getAbsoluteHref(e.barba.dom.getHref(u));e.toPrefetch.has(l)&&(e.observer.unobserve(u),e.barba.cache.has(l)?e.barba.cache.update(l,{action:"prefetch"}):e.barba.cache.set(l,e.barba.request(l,e.barba.timeout,e.barba.onRequestError.bind(e.barba,"barba"),e.barba.cache,e.barba.headers).catch(function(T){e.logger.error(T)}),"prefetch","pending"))}})}),this.observe(),this.barba.hooks.after(this.observe,this))},n.observe=function(){var e=this;o(function(){var r=Array.from(e.root.querySelectorAll("a"));e.limit>0&&(r=r.slice(0,e.limit)),r.forEach(function(s){var u=s,l=e.barba.dom.getHref(u);e.barba.cache.has(l)||e.barba.prevent.checkHref(l)||e.barba.prevent.checkLink(u,{},l)||(e.observer.observe(s),e.toPrefetch.add(l))})},{timeout:this.timeout})},t})())})});gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Te=new Lenis({lerp:.08,wheelMultiplier:1});Te.on("scroll",ScrollTrigger.update);gsap.ticker.add(o=>{Te.raf(o*1e3)});gsap.ticker.lagSmoothing(0);var Pt=[];function he(o){typeof o=="function"&&Pt.push(o)}function Et(){let o=Pt,t=ScrollTrigger.getAll();return Pt=[],function(){o.forEach(function(e){try{e()}catch(r){console.error(r)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Jn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Jn);var Ye="parallax",ft=.8;var Qn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",Vt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",ot=null,wt=function(){return!1};function qt(){ot&&gsap.timeline().to(ot,{clipPath:Vt,duration:.9,ease:Ye,overwrite:!0},0).fromTo(ot,{filter:"brightness(1)"},{filter:"brightness("+(1-ft)+")",duration:.9,ease:Ye},0).set(ot,{clearProps:"filter"})}function Gt(){let o=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!o||!t)return;ot=t.querySelector(".nav-bg"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(r){t.dataset.menuStatus=r?"open":"closed",o.setAttribute("aria-expanded",r),r?(Te.stop(),document.body.style.overflow="hidden"):(Te.start(),document.body.style.overflow="")}function e(r){ot&&gsap.to(ot,{clipPath:r?Qn:Vt,duration:.9,ease:Ye,overwrite:!0})}o.addEventListener("click",function(){let r=t.dataset.menuStatus!=="open";n(r),e(r)}),wt=function(r){return t.dataset.menuStatus!=="open"?!1:(n(!1),r&&r.keepCurtain||e(!1),!0)}}function Nt(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Wt(){let o=function(n){return n.replace(/\/$/,"")||"/"},t=o(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),r=e.origin===location.origin&&o(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",r),r?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Xt(o){let n=new DOMParser().parseFromString(o.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function pt(o){let t=o.querySelectorAll(".copy-email-button");if(!t.length)return;let n=r=>{let s=r.getAttribute("data-copy-email")||r.querySelector("[data-copy-email-element]").textContent.trim();if(!s)return;let u=()=>{window.location.href="mailto:"+s};if(!navigator.clipboard||!navigator.clipboard.writeText){u();return}navigator.clipboard.writeText(s).then(()=>{r.setAttribute("data-copy-button","copied"),r.setAttribute("aria-label","Email copied to clipboard!")},u)},e=r=>{(r.type==="click"||r.type==="keydown"&&(r.key==="Enter"||r.key===" "))&&(r.preventDefault(),n(r.currentTarget))};t.forEach(r=>{r.addEventListener("click",e),r.addEventListener("keydown",e),r.addEventListener("mouseleave",()=>{r.removeAttribute("data-copy-button"),r.blur(),r.setAttribute("aria-label","Copy email to clipboard")}),r.addEventListener("blur",()=>{r.removeAttribute("data-copy-button"),r.setAttribute("aria-label","Copy email to clipboard")})})}function mt(o){let t=o.querySelector("[data-clock]");if(!t)return;function n(){let r=new Date,s=r.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),l=r.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=s+" "+l}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var St={};function ut(o){return St[o]||(St[o]=new Promise(function(t,n){let e=document.createElement("script");e.src=o,e.onload=t,e.onerror=n,document.head.appendChild(e)})),St[o]}function Yt(o){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var r=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});r.setSize(1920,1080),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setClearColor(0,1),r.toneMapping=THREE.ACESFilmicToneMapping,r.toneMappingExposure=1.4,r.domElement.style.width="100%",r.domElement.style.height="100%",o.appendChild(r.domElement),n.add(new THREE.AmbientLight(2760464,1));var s=new THREE.PointLight(16107370,3,1400);s.position.set(300,350,400),n.add(s);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),n.add(u);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var T=new THREE.PointLight(16750916,1.3,600);T.position.set(0,-250,200),n.add(T);var y=0,c=0,v=0,w=0,i=!1,d=0,a=0,x=Math.PI*2/6,b=new THREE.Vector2(9999,9999),I=new THREE.Raycaster,j=120,Y=new THREE.Vector3(9999,9999,0),D=new THREE.Vector3(9999,9999,0),V=new THREE.Vector3,E=!1,N=0,S=0,Q=8e4,ie=.03,W=.95,F=.005,$=12e4,U=null,A,P,z,L,h,m,q=0,Z=!1,R=0,O=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function k(){var g=new THREE.BufferGeometry;A=new Float32Array($*3),P=new Float32Array($*3),z=new Float32Array($*3),L=new Float32Array($*3),h=new Float32Array($),m=new Float32Array($),g.setAttribute("position",new THREE.BufferAttribute(A,3)),g.setAttribute("color",new THREE.BufferAttribute(L,3)),g.setAttribute("size",new THREE.BufferAttribute(h,1)),g.setAttribute("alpha",new THREE.BufferAttribute(m,1)),g.setAttribute("velocity",new THREE.BufferAttribute(P,3));var X=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,f=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,G=new THREE.ShaderMaterial({vertexShader:X,fragmentShader:f,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});U=new THREE.Points(g,G),n.add(U)}function ae(g,X){return new Promise(function(f){try{var G=512,K=document.createElement("canvas");K.width=K.height=G;var J=K.getContext("2d"),ue=new DOMParser().parseFromString(g,"image/svg+xml"),Ae=ue.querySelector("svg");if(!Ae){f([]);return}var C=parseFloat(Ae.getAttribute("width")||512),_=parseFloat(Ae.getAttribute("height")||512),p=Ae.getAttribute("viewBox");if(p){var B=p.split(/[\s,]+/);C=+B[2],_=+B[3]}var le=Math.min(G/C,G/_)*.9,oe=(G-C*le)/2,Fe=(G-_*le)/2;J.save(),J.translate(oe,Fe),J.scale(le,le),J.fillStyle="white",ue.querySelectorAll("path,rect,circle").forEach(function(Ee){if(Ee.tagName==="path"){var Oe=Ee.getAttribute("d");Oe&&J.fill(new Path2D(Oe))}else Ee.tagName==="rect"?J.fillRect(+Ee.getAttribute("x")||0,+Ee.getAttribute("y")||0,+Ee.getAttribute("width")||0,+Ee.getAttribute("height")||0):Ee.tagName==="circle"&&(J.beginPath(),J.arc(+Ee.getAttribute("cx")||0,+Ee.getAttribute("cy")||0,+Ee.getAttribute("r")||0,0,Math.PI*2),J.fill())}),J.restore();for(var be=J.getImageData(0,0,G,G).data,ye=[],me=0;me<G;me++)for(var ke=0;ke<G;ke++){var Ce=(me*G+ke)*4;be[Ce+3]>30&&ye.push({x:ke,y:me,a:be[Ce+3]/255})}if(!ye.length){f([]);return}for(var Ge=[],Ce=0;Ce<X;Ce++){var _e=ye[Math.floor(Math.random()*ye.length)];Ge.push({x:(_e.x-G/2)*1.2+(Math.random()-.5)*1.65,y:-(_e.y-G/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*_e.a,a:_e.a})}f(Ge)}catch(Ee){console.error(Ee),f([])}})}function de(g){q=g.length;for(var X=0;X<q;X++){var f=g[X],G=X*3;A[G]=f.x,A[G+1]=f.y+40,A[G+2]=f.z,P[G]=P[G+1]=P[G+2]=0,z[G]=f.x,z[G+1]=f.y,z[G+2]=f.z;var K=O[Math.floor(Math.random()*O.length)],J=.7+Math.random()*.4;L[G]=K.r*J,L[G+1]=K.g*J,L[G+2]=K.b*J,h[X]=1.8+Math.random()*3.8,m[X]=.3+(f.a||.7)*.75}U.geometry.setDrawRange(0,q),["position","color","size","alpha"].forEach(function(ue){U.geometry.attributes[ue].needsUpdate=!0}),Z=!0}function ve(g){return ae(g,Math.min($,Q)).then(function(X){X.length&&U&&de(X)})}function ne(g){if(!(!Z||!q)){R+=g;for(var X=0;X<q;X++){var f=X*3,G=X*1.37;if(P[f]+=Math.sin(R*.4+G)*.008+Math.sin(R*1.1+G*2.3)*.003,P[f+1]+=Math.cos(R*.35+G*.7)*.008+Math.sin(R*.9+G*1.5)*.004,P[f+2]+=Math.sin(R*.25+G*1.1)*.004,P[f+1]-=ie*.06,P[f]+=Math.sin(R*.25+A[f+1]*.008)*F*.6,P[f+2]+=Math.cos(R*.3+A[f]*.008)*F*.3,E){var K=A[f]-Y.x,J=A[f+1]-Y.y,ue=A[f+2]-Y.z,Ae=K*K+J*J+ue*ue,C=j*j;if(Ae<C&&Ae>.25){var _=Math.sqrt(Ae),p=_/j,B=(X*2654435761&65535)/65535,le=.6+B*.8,oe=Math.pow(1-p,1.5+B),Fe=1+Math.min(V.length()*.12,1),be=oe*le*1.2*Fe,ye=1/_;P[f]+=K*ye*be,P[f+1]+=J*ye*be,P[f+2]+=ue*ye*be*.2;var me=.02+B*.06;P[f]+=V.x*oe*me,P[f+1]+=V.y*oe*me;var ke=oe*.15;P[f]+=(B-.5)*ke,P[f+1]+=((X*48271&65535)/65535-.5)*ke}}var Ce=z[f],Ge=z[f+1]+40,_e=z[f+2],Ee=Ce-A[f],Oe=Ge-A[f+1],Xe=_e-A[f+2],je=Math.sqrt(Ee*Ee+Oe*Oe+Xe*Xe),Ke=(X*48271&65535)/65535,Ze=.003+Ke*.003,rt=1+Math.min(je*.002,.5),Je=Ze*rt;P[f]+=Ee*Je,P[f+1]+=Oe*Je,P[f+2]+=Xe*Je;var et=(X*16807&65535)/65535,Qe=W*(.92+et*.06);P[f]*=Qe,P[f+1]*=Qe,P[f+2]*=Qe,A[f]+=P[f],A[f+1]+=P[f+1],A[f+2]+=P[f+2];var tt=Math.sqrt(Math.pow(A[f]-z[f],2)+Math.pow(A[f+1]-z[f+1],2)+Math.pow(A[f+2]-z[f+2],2));m[X]=.15+.55*(1-Math.min(tt*.005,1))+Math.sin(R*1.5+X*.01)*.05}U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.alpha.needsUpdate=!0,U.geometry.attributes.velocity.needsUpdate=!0}}var He=new THREE.Matrix4,Me=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Re=new THREE.Vector3;function ee(g,X){var f=r.domElement.getBoundingClientRect();if(!(f.width===0||f.height===0)&&(b.set((g-f.left)/f.width*2-1,-((X-f.top)/f.height)*2+1),I.setFromCamera(b,e),I.ray.intersectPlane(Me,Re))){D.copy(Y),U&&Y.copy(Re).applyMatrix4(He.copy(U.matrixWorld).invert()),V.subVectors(Y,D);var G=V.length();G>15&&V.multiplyScalar(15/G)}}function te(g,X){var f=o.getBoundingClientRect();return g>=f.left&&g<=f.right&&X>=f.top&&X<=f.bottom}var M=o.querySelector("#logo-coords"),re=o.querySelector("#logo-drag-label"),Pe=!1;if(!t){var pe=function(g){N=g.clientX,S=g.clientY;var X=te(g.clientX,g.clientY);if(X){E=!0,ee(g.clientX,g.clientY);var f=o.getBoundingClientRect(),G=Math.round(g.clientX-f.left),K=Math.round(g.clientY-f.top);M&&(M.textContent="X: "+G+"PX    Y: "+K+"PX")}else E=!1,Y.set(9999,9999,0);i&&(y+=(g.clientX-d)*.005,v+=(g.clientY-a)*.005,v=Math.max(-Math.PI/2,Math.min(Math.PI/2,v)),d=g.clientX,a=g.clientY)},we=function(g){te(g.clientX,g.clientY)&&(i=!0,d=g.clientX,a=g.clientY)},ge=function(){i=!1,y=0,v=0,c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2)};window.addEventListener("mousemove",pe),window.addEventListener("mousedown",we),window.addEventListener("mouseup",ge)}function Se(){for(var g=4e3,X=new THREE.BufferGeometry,f=new Float32Array(g*3),G=new Float32Array(g*3),K=0;K<g;K++){f[K*3]=(Math.random()-.5)*2200,f[K*3+1]=(Math.random()-.5)*1800,f[K*3+2]=-200-Math.random()*1800;var J=O[Math.floor(Math.random()*O.length)],ue=.2+Math.random()*.3;G[K*3]=J.r*ue,G[K*3+1]=J.g*ue,G[K*3+2]=J.b*ue}X.setAttribute("position",new THREE.BufferAttribute(f,3)),X.setAttribute("color",new THREE.BufferAttribute(G,3));var Ae=document.createElement("canvas");Ae.width=Ae.height=32;var C=Ae.getContext("2d"),_=C.createRadialGradient(16,16,0,16,16,16);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.3,"rgba(255,255,255,0.6)"),_.addColorStop(.7,"rgba(255,255,255,0.15)"),_.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=_,C.fillRect(0,0,32,32);var p=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Ae),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),B=new THREE.Points(X,p);return B.userData={positions:f,count:g},n.add(B),B}k();var se=t?null:Se(),ze='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';ve(ze);var Be=new THREE.Clock,Le=!0,We=new IntersectionObserver(function(g){Le=g[0].isIntersecting,g[0].isIntersecting&&!Pe&&!t&&(Pe=!0,M&&(M.style.transform="translateY(0)"),re&&(re.style.transform="translateY(0)"))},{threshold:.1});We.observe(o);var xe=!1,De=null,Ie=0;function fe(){if(xe=!0,clearTimeout(De),De=setTimeout(function(){xe=!1},150),!t){var g=te(N,S);g?(E=!0,ee(N,S)):(E=!1,Y.set(9999,9999,0))}}window.addEventListener("scroll",fe,{passive:!0});var H=null;function ce(){if(H=requestAnimationFrame(ce),!!Le){Ie++;var g=Math.min(Be.getDelta(),.05),X=Be.elapsedTime;if(t)c+=x*g;else{var f=y-c;f=f%(Math.PI*2),f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),c+=f*.12,w+=(v-w)*.12}if(U&&(U.rotation.x=w,U.rotation.y=c,U.position.y=-15),se){for(var G=se.userData.positions,K=0;K<se.userData.count;K++)G[K*3+1]+=Math.sin(X*.2+K)*.05,G[K*3]+=Math.cos(X*.15+K*.5)*.03;se.geometry.attributes.position.needsUpdate=!0,se.rotation.y+=1e-4,se.position.x=-c*35*.35,se.position.y=w*28*.35}s.position.x=300+Math.sin(X*.3)*100,s.position.y=350+Math.cos(X*.2)*80,u.intensity=2+Math.sin(X*.5)*.4,T.intensity=.8+Math.sin(X*.4+1)*.3,!(t&&xe&&Ie%4!==0)&&(ne(g),r.render(n,e))}}return ce(),function(){cancelAnimationFrame(H),t||(window.removeEventListener("mousemove",pe),window.removeEventListener("mousedown",we),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",fe),clearTimeout(De),We.disconnect(),n.traverse(function(g){g.geometry&&g.geometry.dispose(),g.material&&(g.material.map&&g.material.map.dispose(),g.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),U=null}}function $t(o){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",o.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var r=new THREE.PointLight(16107370,3,1400);r.position.set(300,350,400),t.add(r);var s=new THREE.PointLight(13931578,2.4,1200);s.position.set(-300,-100,300),t.add(s);var u=new THREE.PointLight(5913114,1.2,900);u.position.set(0,200,-300),t.add(u);var l=new THREE.PointLight(16750916,1.3,600);l.position.set(0,-250,200),t.add(l);var T=0,y=Math.PI*2/6,c=8e4,v=.03,w=.95,i=.005,d=12e4,a=null,x,b,I,j,Y,D,V=0,E=!1,N=0,S=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Q(){var ee=new THREE.BufferGeometry;x=new Float32Array(d*3),b=new Float32Array(d*3),I=new Float32Array(d*3),j=new Float32Array(d*3),Y=new Float32Array(d),D=new Float32Array(d),ee.setAttribute("position",new THREE.BufferAttribute(x,3)),ee.setAttribute("color",new THREE.BufferAttribute(j,3)),ee.setAttribute("size",new THREE.BufferAttribute(Y,1)),ee.setAttribute("alpha",new THREE.BufferAttribute(D,1)),ee.setAttribute("velocity",new THREE.BufferAttribute(b,3));var te=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,M=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,re=new THREE.ShaderMaterial({vertexShader:te,fragmentShader:M,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});a=new THREE.Points(ee,re),t.add(a)}function ie(ee,te){return new Promise(function(M){try{var re=512,Pe=document.createElement("canvas");Pe.width=Pe.height=re;var pe=Pe.getContext("2d"),we=new DOMParser().parseFromString(ee,"image/svg+xml"),ge=we.querySelector("svg");if(!ge){M([]);return}var Se=parseFloat(ge.getAttribute("width")||512),se=parseFloat(ge.getAttribute("height")||512),ze=ge.getAttribute("viewBox");if(ze){var Be=ze.split(/[\s,]+/);Se=+Be[2],se=+Be[3]}var Le=Math.min(re/Se,re/se)*.9,We=(re-Se*Le)/2,xe=(re-se*Le)/2;pe.save(),pe.translate(We,xe),pe.scale(Le,Le),pe.fillStyle="white",we.querySelectorAll("path,rect,circle").forEach(function(ue){if(ue.tagName==="path"){var Ae=ue.getAttribute("d");Ae&&pe.fill(new Path2D(Ae))}else ue.tagName==="rect"?pe.fillRect(+ue.getAttribute("x")||0,+ue.getAttribute("y")||0,+ue.getAttribute("width")||0,+ue.getAttribute("height")||0):ue.tagName==="circle"&&(pe.beginPath(),pe.arc(+ue.getAttribute("cx")||0,+ue.getAttribute("cy")||0,+ue.getAttribute("r")||0,0,Math.PI*2),pe.fill())}),pe.restore();for(var De=pe.getImageData(0,0,re,re).data,Ie=new Uint32Array(re*re),fe=0,H=0;H<re*re;H++)De[H*4+3]>30&&(Ie[fe++]=H);if(!fe){M([]);return}for(var ce=new Float32Array(te*4),g=0;g<te;g++){var X=Ie[Math.floor(Math.random()*fe)],f=X%re,G=(X-f)/re,K=De[X*4+3]/255,J=g*4;ce[J]=(f-re/2)*1.2+(Math.random()-.5)*1.65,ce[J+1]=-(G-re/2)*1.2+(Math.random()-.5)*1.65,ce[J+2]=(Math.random()-.5)*37*K,ce[J+3]=K}M(ce)}catch(ue){console.error(ue),M([])}})}function W(ee){V=ee.length/4;for(var te=0;te<V;te++){var M=te*3,re=te*4,Pe=ee[re],pe=ee[re+1],we=ee[re+2],ge=ee[re+3];x[M]=Pe,x[M+1]=pe+40,x[M+2]=we,b[M]=b[M+1]=b[M+2]=0,I[M]=Pe,I[M+1]=pe,I[M+2]=we;var Se=S[Math.floor(Math.random()*S.length)],se=.7+Math.random()*.4;j[M]=Se.r*se,j[M+1]=Se.g*se,j[M+2]=Se.b*se,Y[te]=1.8+Math.random()*3.8,D[te]=.3+(ge||.7)*.75}a.geometry.setDrawRange(0,V),["position","color","size","alpha"].forEach(function(ze){a.geometry.attributes[ze].needsUpdate=!0}),E=!0}function F(ee){return ie(ee,Math.min(d,c)).then(function(te){te.length&&a&&W(te)})}function $(ee){if(!(!E||!V)){N+=ee;for(var te=0;te<V;te++){var M=te*3,re=te*1.37;b[M]+=Math.sin(N*.4+re)*.008+Math.sin(N*1.1+re*2.3)*.003,b[M+1]+=Math.cos(N*.35+re*.7)*.008+Math.sin(N*.9+re*1.5)*.004,b[M+2]+=Math.sin(N*.25+re*1.1)*.004,b[M+1]-=v*.06,b[M]+=Math.sin(N*.25+x[M+1]*.008)*i*.6,b[M+2]+=Math.cos(N*.3+x[M]*.008)*i*.3;var Pe=I[M],pe=I[M+1]+40,we=I[M+2],ge=Pe-x[M],Se=pe-x[M+1],se=we-x[M+2],ze=Math.sqrt(ge*ge+Se*Se+se*se),Be=(te*48271&65535)/65535,Le=.003+Be*.003,We=1+Math.min(ze*.002,.5),xe=Le*We;b[M]+=ge*xe,b[M+1]+=Se*xe,b[M+2]+=se*xe;var De=(te*16807&65535)/65535,Ie=w*(.92+De*.06);b[M]*=Ie,b[M+1]*=Ie,b[M+2]*=Ie,x[M]+=b[M],x[M+1]+=b[M+1],x[M+2]+=b[M+2];var fe=Math.sqrt(Math.pow(x[M]-I[M],2)+Math.pow(x[M+1]-I[M+1],2)+Math.pow(x[M+2]-I[M+2],2));D[te]=.15+.55*(1-Math.min(fe*.005,1))+Math.sin(N*1.5+te*.01)*.05}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.alpha.needsUpdate=!0,a.geometry.attributes.velocity.needsUpdate=!0}}Q();for(var U=4e3,A=new THREE.BufferGeometry,P=new Float32Array(U*3),z=new Float32Array(U*3),L=0;L<U;L++){P[L*3]=(Math.random()-.5)*2200,P[L*3+1]=(Math.random()-.5)*1800,P[L*3+2]=-200-Math.random()*1800;var h=S[Math.floor(Math.random()*S.length)],m=.2+Math.random()*.3;z[L*3]=h.r*m,z[L*3+1]=h.g*m,z[L*3+2]=h.b*m}A.setAttribute("position",new THREE.BufferAttribute(P,3)),A.setAttribute("color",new THREE.BufferAttribute(z,3));var q=document.createElement("canvas");q.width=q.height=32;var Z=q.getContext("2d"),R=Z.createRadialGradient(16,16,0,16,16,16);R.addColorStop(0,"rgba(255,255,255,1)"),R.addColorStop(.3,"rgba(255,255,255,0.6)"),R.addColorStop(.7,"rgba(255,255,255,0.15)"),R.addColorStop(1,"rgba(255,255,255,0)"),Z.fillStyle=R,Z.fillRect(0,0,32,32);var O=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(q),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),k=new THREE.Points(A,O);t.add(k);var ae='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';F(ae);var de=new THREE.Clock,ve=!0,ne=new IntersectionObserver(function(ee){ve=ee[0].isIntersecting},{threshold:0});ne.observe(o);var He=o.querySelectorAll("#logo-coords, #logo-drag-label");He.forEach(function(ee){ee.parentElement.style.display="none"});var Me=null;function Re(){if(Me=requestAnimationFrame(Re),!!ve){var ee=Math.min(de.getDelta(),.05),te=de.elapsedTime;T+=y*ee,a&&(a.rotation.y=T,a.position.y=5,a.scale.setScalar(.85));for(var M=0;M<U;M++)P[M*3+1]+=Math.sin(te*.2+M)*.05,P[M*3]+=Math.cos(te*.15+M*.5)*.03;A.attributes.position.needsUpdate=!0,k.rotation.y+=1e-4,k.position.x=-T*35*.35,r.position.x=300+Math.sin(te*.3)*100,r.position.y=350+Math.cos(te*.2)*80,s.intensity=2+Math.sin(te*.5)*.4,l.intensity=.8+Math.sin(te*.4+1)*.3,$(ee),e.render(t,n)}}return Re(),function(){cancelAnimationFrame(Me),ne.disconnect(),t.traverse(function(ee){ee.geometry&&ee.geometry.dispose(),ee.material&&(ee.material.map&&ee.material.map.dispose(),ee.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),a=null}}var Kt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Zt(o){let t=o.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ut(Kt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?jn(t):Yt(t)}),function(){n=!0,e&&e()}}function Jt(o){let t=o.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ut(Kt).then(function(){n||(e=$t(t))}),function(){n=!0,e&&e()}}function jn(o){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var r=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});r.setSize(1920,1080),r.setPixelRatio(Math.min(devicePixelRatio,2)),r.setClearColor(0,1),r.toneMapping=THREE.ACESFilmicToneMapping,r.toneMappingExposure=1.4,r.domElement.style.width="100%",r.domElement.style.height="100%",o.appendChild(r.domElement),n.add(new THREE.AmbientLight(2760464,1));var s=new THREE.PointLight(16107370,3,1400);s.position.set(300,350,400),n.add(s);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),n.add(u);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var T=new THREE.PointLight(16750916,1.3,600);T.position.set(0,-250,200),n.add(T);var y=0,c=0,v=0,w=0,i=!1,d=0,a=0,x=Math.PI*2/6,b=new THREE.Vector2(9999,9999),I=new THREE.Raycaster,j=120,Y=new THREE.Vector3(9999,9999,0),D=new THREE.Vector3(9999,9999,0),V=new THREE.Vector3,E=!1,N=0,S=0,Q=8e4,ie=.03,W=.95,F=.005,$=12e4,U=null,A,P,z,L,h,m,q=0,Z=!1,R=!1,O=0,k=0,ae=null,de=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function ve(){var C=new THREE.BufferGeometry;A=new Float32Array($*3),P=new Float32Array($*3),z=new Float32Array($*3),L=new Float32Array($*3),h=new Float32Array($),m=new Float32Array($),C.setAttribute("position",new THREE.BufferAttribute(A,3)),C.setAttribute("color",new THREE.BufferAttribute(L,3)),C.setAttribute("size",new THREE.BufferAttribute(h,1)),C.setAttribute("alpha",new THREE.BufferAttribute(m,1)),C.setAttribute("velocity",new THREE.BufferAttribute(P,3));var _=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,p=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,B=new THREE.ShaderMaterial({vertexShader:_,fragmentShader:p,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});U=new THREE.Points(C,B),n.add(U)}function ne(C,_){return new Promise(function(p){try{var B=512,le=document.createElement("canvas");le.width=le.height=B;var oe=le.getContext("2d"),Fe=new DOMParser().parseFromString(C,"image/svg+xml"),be=Fe.querySelector("svg");if(!be){p([]);return}var ye=parseFloat(be.getAttribute("width")||512),me=parseFloat(be.getAttribute("height")||512),ke=be.getAttribute("viewBox");if(ke){var Ce=ke.split(/[\s,]+/);ye=+Ce[2],me=+Ce[3]}var Ge=Math.min(B/ye,B/me)*.9,_e=(B-ye*Ge)/2,Ee=(B-me*Ge)/2;oe.save(),oe.translate(_e,Ee),oe.scale(Ge,Ge),oe.fillStyle="white",Fe.querySelectorAll("path,rect,circle").forEach(function(Ue){if(Ue.tagName==="path"){var vt=Ue.getAttribute("d");vt&&oe.fill(new Path2D(vt))}else Ue.tagName==="rect"?oe.fillRect(+Ue.getAttribute("x")||0,+Ue.getAttribute("y")||0,+Ue.getAttribute("width")||0,+Ue.getAttribute("height")||0):Ue.tagName==="circle"&&(oe.beginPath(),oe.arc(+Ue.getAttribute("cx")||0,+Ue.getAttribute("cy")||0,+Ue.getAttribute("r")||0,0,Math.PI*2),oe.fill())}),oe.restore();for(var Oe=oe.getImageData(0,0,B,B).data,Xe=new Uint32Array(B*B),je=0,Ke=0;Ke<B*B;Ke++)Oe[Ke*4+3]>30&&(Xe[je++]=Ke);if(!je){p([]);return}for(var Ze=new Float32Array(_*4),rt=0;rt<_;rt++){var Je=Xe[Math.floor(Math.random()*je)],et=Je%B,Qe=(Je-et)/B,tt=Oe[Je*4+3]/255,ct=rt*4;Ze[ct]=(et-B/2)*1.2+(Math.random()-.5)*1.65,Ze[ct+1]=-(Qe-B/2)*1.2+(Math.random()-.5)*1.65,Ze[ct+2]=(Math.random()-.5)*37*tt,Ze[ct+3]=tt}p(Ze)}catch(Ue){console.error(Ue),p([])}})}function He(C){q=C.length/4;for(var _=0;_<q;_++){var p=_*3,B=_*4,le=C[B],oe=C[B+1],Fe=C[B+2],be=C[B+3];A[p]=le,A[p+1]=oe+40,A[p+2]=Fe,P[p]=P[p+1]=P[p+2]=0,z[p]=le,z[p+1]=oe,z[p+2]=Fe;var ye=de[Math.floor(Math.random()*de.length)],me=.7+Math.random()*.4;L[p]=ye.r*me,L[p+1]=ye.g*me,L[p+2]=ye.b*me,h[_]=1.8+Math.random()*3.8,m[_]=.3+(be||.7)*.75}U.geometry.setDrawRange(0,q),["position","color","size","alpha"].forEach(function(ke){U.geometry.attributes[ke].needsUpdate=!0}),Z=!0,R=!1,O=1}function Me(C){return ne(C,Math.min($,Q)).then(function(_){_.length&&U&&He(_)})}function Re(C){if(!(!Z||!q)){k+=C;for(var _=0;_<q;_++){var p=_*3,B=_*1.37;if(P[p]+=Math.sin(k*.4+B)*.008+Math.sin(k*1.1+B*2.3)*.003,P[p+1]+=Math.cos(k*.35+B*.7)*.008+Math.sin(k*.9+B*1.5)*.004,P[p+2]+=Math.sin(k*.25+B*1.1)*.004,P[p+1]-=ie*.06,P[p]+=Math.sin(k*.25+A[p+1]*.008)*F*.6,P[p+2]+=Math.cos(k*.3+A[p]*.008)*F*.3,E&&fe==="interactive"){var le=A[p]-Y.x,oe=A[p+1]-Y.y,Fe=A[p+2]-Y.z,be=le*le+oe*oe+Fe*Fe,ye=j*j;if(be<ye&&be>.25){var me=Math.sqrt(be),ke=me/j,Ce=(_*2654435761&65535)/65535,Ge=.6+Ce*.8,_e=Math.pow(1-ke,1.5+Ce),Ee=1+Math.min(V.length()*.12,1),Oe=_e*Ge*1.2*Ee,Xe=1/me;P[p]+=le*Xe*Oe,P[p+1]+=oe*Xe*Oe,P[p+2]+=Fe*Xe*Oe*.2;var je=.02+Ce*.06;P[p]+=V.x*_e*je,P[p+1]+=V.y*_e*je;var Ke=_e*.15;P[p]+=(Ce-.5)*Ke,P[p+1]+=((_*48271&65535)/65535-.5)*Ke}}var Ze=z[p],rt=z[p+1]+40,Je=z[p+2],et=Ze-A[p],Qe=rt-A[p+1],tt=Je-A[p+2],ct=Math.sqrt(et*et+Qe*Qe+tt*tt),Ue=(_*48271&65535)/65535,vt=.003+Ue*.003,Bn=1+Math.min(ct*.002,.5),bt=vt*Bn;P[p]+=et*bt,P[p+1]+=Qe*bt,P[p+2]+=tt*bt;var Vn=(_*16807&65535)/65535,yt=W*(.92+Vn*.06);P[p]*=yt,P[p+1]*=yt,P[p+2]*=yt,A[p]+=P[p],A[p+1]+=P[p+1],A[p+2]+=P[p+2];var qn=Math.sqrt(Math.pow(A[p]-z[p],2)+Math.pow(A[p+1]-z[p+1],2)+Math.pow(A[p+2]-z[p+2],2));m[_]=.15+.55*(1-Math.min(qn*.005,1))+Math.sin(k*1.5+_*.01)*.05}U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.alpha.needsUpdate=!0,U.geometry.attributes.velocity.needsUpdate=!0}}var ee=new THREE.Matrix4,te=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),M=new THREE.Vector3;function re(C,_){var p=r.domElement.getBoundingClientRect();if(!(p.width===0||p.height===0)&&(b.set((C-p.left)/p.width*2-1,-((_-p.top)/p.height)*2+1),I.setFromCamera(b,e),I.ray.intersectPlane(te,M))){D.copy(Y),U&&Y.copy(M).applyMatrix4(ee.copy(U.matrixWorld).invert()),V.subVectors(Y,D);var B=V.length();B>15&&V.multiplyScalar(15/B)}}var Pe=null;function pe(){return Pe||(Pe=o.closest('[data-flip-element="target"]')||o),Pe}function we(C,_){var p=pe().getBoundingClientRect();return C>=p.left&&C<=p.right&&_>=p.top&&_<=p.bottom}var ge=o.querySelector("#logo-coords"),Se=o.querySelector("#logo-drag-label"),se=!1;function ze(C){if(N=C.clientX,S=C.clientY,t||fe!=="interactive"){E=!1,Y.set(9999,9999,0);return}var _=we(C.clientX,C.clientY);if(_){E=!0,re(C.clientX,C.clientY);var p=pe().getBoundingClientRect(),B=Math.round(C.clientX-p.left),le=Math.round(C.clientY-p.top);ge&&(ge.textContent="X: "+B+"PX    Y: "+le+"PX")}else E=!1,Y.set(9999,9999,0);i&&(y+=(C.clientX-d)*.005,v+=(C.clientY-a)*.005,v=Math.max(-Math.PI/2,Math.min(Math.PI/2,v)),d=C.clientX,a=C.clientY)}function Be(C){t||fe!=="interactive"||we(C.clientX,C.clientY)&&(i=!0,d=C.clientX,a=C.clientY)}function Le(){t||(i=!1,y=0,v=0,c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2))}window.addEventListener("mousemove",ze),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Le);function We(){for(var C=4e3,_=new THREE.BufferGeometry,p=new Float32Array(C*3),B=new Float32Array(C*3),le=0;le<C;le++){p[le*3]=(Math.random()-.5)*2200,p[le*3+1]=(Math.random()-.5)*1800,p[le*3+2]=-200-Math.random()*1800;var oe=de[Math.floor(Math.random()*de.length)],Fe=.2+Math.random()*.3;B[le*3]=oe.r*Fe,B[le*3+1]=oe.g*Fe,B[le*3+2]=oe.b*Fe}_.setAttribute("position",new THREE.BufferAttribute(p,3)),_.setAttribute("color",new THREE.BufferAttribute(B,3));var be=document.createElement("canvas");be.width=be.height=32;var ye=be.getContext("2d"),me=ye.createRadialGradient(16,16,0,16,16,16);me.addColorStop(0,"rgba(255,255,255,1)"),me.addColorStop(.3,"rgba(255,255,255,0.6)"),me.addColorStop(.7,"rgba(255,255,255,0.15)"),me.addColorStop(1,"rgba(255,255,255,0)"),ye.fillStyle=me,ye.fillRect(0,0,32,32);var ke=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ce=new THREE.Points(_,ke);return Ce.userData={positions:p,count:C},n.add(Ce),Ce}ve();var xe=We(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Me(De);var Ie=new THREE.Clock,fe="spin",H=null;function ce(){if(t){fe="spin";return}if(H===null){var C=document.querySelector(".scaling-element-video");H=C&&getComputedStyle(C).display!=="none"}if(!H){fe="spin";return}var _=window._flipProgress||0;_>.85?fe="interactive":_>.7?fe="transition":fe="spin"}var g="spin",X=!0,f=new IntersectionObserver(function(C){X=C[0].isIntersecting},{threshold:0});f.observe(o);var G=!1,K=null,J=0;function ue(){G=!0,clearTimeout(K),K=setTimeout(function(){G=!1},150);var C=we(N,S);C?(E=!0,re(N,S)):(E=!1,Y.set(9999,9999,0))}window.addEventListener("scroll",ue,{passive:!0});function Ae(){if(ae=requestAnimationFrame(Ae),!!X){J++;var C=Math.min(Ie.getDelta(),.05),_=Ie.elapsedTime;ce(),g==="interactive"&&fe!=="interactive"&&(E=!1,Y.set(9999,9999,0),i=!1);var p=fe==="transition"||fe==="interactive";if(p&&!se?(se=!0,Se&&(Se.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!p&&se&&(se=!1,Se&&(Se.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),g=fe,E&&!we(N,S)&&(E=!1,Y.set(9999,9999,0)),fe==="spin")c+=x*C,w+=(0-w)*.05;else if(fe==="transition")c=c%(Math.PI*2),c>Math.PI&&(c-=Math.PI*2),c<-Math.PI&&(c+=Math.PI*2),c+=(0-c)*.025,w+=(0-w)*.025;else{var B=y-c;B=B%(Math.PI*2),B>Math.PI&&(B-=Math.PI*2),B<-Math.PI&&(B+=Math.PI*2),c+=B*.12,w+=(v-w)*.12}U&&(U.rotation.x=w,U.rotation.y=c,U.scale.setScalar(1),U.position.y=-15);for(var le=xe.userData.positions,oe=0;oe<xe.userData.count;oe++)le[oe*3+1]+=Math.sin(_*.2+oe)*.05,le[oe*3]+=Math.cos(_*.15+oe*.5)*.03;xe.geometry.attributes.position.needsUpdate=!0,xe.rotation.y+=1e-4,xe.position.x=-c*35*.35,xe.position.y=w*28*.35,s.position.x=300+Math.sin(_*.3)*100,s.position.y=350+Math.cos(_*.2)*80,u.intensity=2+Math.sin(_*.5)*.4,T.intensity=.8+Math.sin(_*.4+1)*.3,!(t&&G&&J%4!==0)&&(Re(C),r.render(n,e))}}return Ae(),function(){cancelAnimationFrame(ae),window.removeEventListener("mousemove",ze),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Le),window.removeEventListener("scroll",ue),clearTimeout(K),f.disconnect(),n.traverse(function(C){C.geometry&&C.geometry.dispose(),C.material&&(C.material.map&&C.material.map.dispose(),C.material.dispose())}),r.dispose(),r.forceContextLoss(),r.domElement.parentNode&&r.domElement.parentNode.removeChild(r.domElement),U=null}}function Qt(o){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Te.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),r=t.querySelector("[data-load-logo]"),s=Array.from(t.querySelectorAll("[data-load-text]")),u=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),l=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(r,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ye},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(u.length&&l.set(u,{autoAlpha:1},0),s.length>=2){let T=new SplitText(s[0],{type:"lines,chars",mask:"lines"}),y=new SplitText(s[1],{type:"lines,chars",mask:"lines"});gsap.set([T.chars,y.chars],{autoAlpha:0,yPercent:125}),gsap.set(s,{autoAlpha:1}),l.to(T.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),l.to(T.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),l.to(y.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),l.to(y.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return l}function jt(o){let n=[...(o||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(c=>{let v=c.parentElement;v&&(c.style.whiteSpace="nowrap",e.has(v)||e.set(v,[]),e.get(v).push(c))});function r(c){let v=getComputedStyle(c);return c.clientWidth-parseFloat(v.paddingLeft)-parseFloat(v.paddingRight)}function s(c,v){if(v<=0)return;let w=parseFloat(getComputedStyle(c).fontSize)||16;for(let i=0;i<5;i++){let d=c.getBoundingClientRect().width;if(d<=0)break;let a=v/d;if(Math.abs(a-1)<.002)break;w*=a,c.style.fontSize=w+"px"}}function u(){e.forEach((c,v)=>{let w=r(v);c.forEach(i=>s(i,w))})}let l=null;function T(){l||(l=requestAnimationFrame(()=>{l=null,u()}))}let y;return window.ResizeObserver&&(y=new ResizeObserver(T),e.forEach((c,v)=>y.observe(v))),window.addEventListener("resize",T),u(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(u),()=>{l&&cancelAnimationFrame(l),y&&y.disconnect(),window.removeEventListener("resize",T),n.forEach(c=>{c.style.whiteSpace="",c.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},en=.08,er={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},tn={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function tr(o,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:o,transformOrigin:t}),n}function nn(o){var t=o.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(r){var s=r.getAttribute("data-marker-direction")||"right",u=r.getAttribute("data-marker-theme")||"#000000",l=r.getAttribute("data-marker-scroll-start")||"top 90%",T=u.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(u).trim()||u,y=tn[s]||tn.right,c=er[r.getAttribute("data-highlight-marker-reveal")]||null;c&&(T=c.bar);var v=r.closest("[data-cursor-label]"),w={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,d=SplitText.create(r,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(a){w.timeline&&w.timeline.kill(),w.scrollTrigger&&w.scrollTrigger.kill(),r.querySelectorAll(".highlight-marker-bar").forEach(function(E){E.remove()}),w.listeners.forEach(function(E){E.el.removeEventListener(E.type,E.fn)}),w.listeners=[],i=!1;var x=a.lines,b=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(x.forEach(function(E,N){gsap.set(E,{position:"relative",overflow:"hidden"});var S=tr(T,y.origin);gsap.set(S,{[y.prop]:0}),E.appendChild(S),c&&(gsap.set(E,{zIndex:0,color:c.text}),gsap.set(S,{zIndex:-1})),b.to(S,{[y.prop]:1,duration:Ve.duration,ease:Ve.ease},N*en);var Q=function(){i&&(gsap.to(S,{[y.prop]:0,duration:Ve.duration,ease:Ve.ease}),c&&gsap.to(E,{color:c.hoverText,duration:Ve.duration,ease:Ve.ease}))},ie=function(){i&&(gsap.to(S,{[y.prop]:1,duration:Ve.duration,ease:Ve.ease}),c&&gsap.to(E,{color:c.text,duration:Ve.duration,ease:Ve.ease}))};!c&&e&&(E.addEventListener("mouseenter",Q),E.addEventListener("mouseleave",ie),w.listeners.push({el:E,type:"mouseenter",fn:Q},{el:E,type:"mouseleave",fn:ie}))}),w.timeline=b,v){b.kill();var I=r.querySelectorAll(".highlight-marker-bar"),j=function(E){gsap.to(I,{[y.prop]:E,duration:Ve.duration,ease:Ve.ease,stagger:en,overwrite:!0})},Y=function(){j(1)},D=function(){j(0)};v.addEventListener("cursorlabel:enter",Y),v.addEventListener("cursorlabel:leave",D),w.listeners.push({el:v,type:"cursorlabel:enter",fn:Y},{el:v,type:"cursorlabel:leave",fn:D});return}var V=ScrollTrigger.create({trigger:r,start:l,once:!0,onEnter:function(){b.play()}});w.scrollTrigger=V}});w.split=d,n.push(w)}),function(){n.forEach(function(r){r.timeline&&r.timeline.kill(),r.scrollTrigger&&r.scrollTrigger.kill(),r.listeners.forEach(function(s){s.el.removeEventListener(s.type,s.fn)}),r.split&&r.split.revert()})}}function rn(o){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,r=o.querySelector("[data-cursor-marquee-status]");if(!r)return;let s=r.querySelectorAll("[data-cursor-marquee-text-target]"),u=o.querySelectorAll("[data-cursor-marquee-text]");if(!u.length)return;let l=gsap.quickTo(r,"x",{duration:n,ease:"power3"}),T=gsap.quickTo(r,"y",{duration:n,ease:"power3"}),y=null,c=v=>{l(v.clientX),T(v.clientY)};return window.addEventListener("pointermove",c,{passive:!0}),u.forEach(v=>{v.addEventListener("mouseenter",()=>{y&&clearTimeout(y);let w=v.getAttribute("data-cursor-marquee-text")||"",i=(w.length||1)/e;s.forEach(d=>{d.textContent=w,d.style.animationPlayState="running",d.style.animationDuration=i+"s"}),r.setAttribute("data-cursor-marquee-status","active")}),v.addEventListener("mouseleave",()=>{r.setAttribute("data-cursor-marquee-status","not-active"),y&&clearTimeout(y),y=setTimeout(()=>{s.forEach(w=>{w.style.animationPlayState="paused"})},t*1e3)})}),r.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",c),clearTimeout(y),gsap.killTweensOf(r)}}function on(o){let t=[...o.querySelectorAll("video[autoplay]")].filter(r=>!r.closest("[data-bunny-player-init]"));if(!t.length)return;let n=r=>{let s=r.play();s&&s.catch&&s.catch(function(){})},e=new IntersectionObserver(r=>{r.forEach(s=>{let u=s.target;s.isIntersecting?n(u):u.paused||u.pause()})},{rootMargin:"100% 0px"});return t.forEach(r=>{r.muted=!0,e.observe(r)}),()=>e.disconnect()}function an(o){let t=o.querySelectorAll("[data-flip-element='wrapper']"),n=o.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function r(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(l){window._flipProgress=l.progress}}}),t.forEach(function(l,T){let y=T+1;if(y<t.length){let c=t[y],v=c.getBoundingClientRect(),w=l.getBoundingClientRect(),i=v.top+window.pageYOffset+c.offsetHeight/2,d=w.top+window.pageYOffset+l.offsetHeight/2,a=i-d;e.add(Flip.fit(n,c,{duration:a,ease:"none"}))}})}r();let s,u=function(){clearTimeout(s),s=setTimeout(function(){r()},100)};return window.addEventListener("resize",u),function(){clearTimeout(s),window.removeEventListener("resize",u),e&&e.kill()}}var nr="150%";function rr(o){let t=[];return o.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let r of e){if(r===" "){n.append(" ");continue}let s=document.createElementNS("http://www.w3.org/2000/svg","tspan");s.textContent=r,n.append(s),t.push(s)}}),t}var Tt=new WeakMap;function sn(o){let t=o.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(s){return Array.from(s.querySelectorAll("textPath")).map(function(u){return u.textContent})}),r=n.map(rr);return r.forEach(function(s){gsap.set(s,{fillOpacity:0})}),Tt.set(o,{wrap:t,lines:n,lineChars:r}),function(){Tt.delete(o),n.forEach(function(s,u){s.querySelectorAll("textPath").forEach(function(l,T){l.textContent=e[u][T]})})}}function cn(o){let t=Tt.get(o);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+nr,pin:!0,scrub:!0}});return t.lines.forEach(function(e,r){let s=t.lineChars[r];s.length&&n.fromTo(s,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/s.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function At(o){var t=[];function n(i,d,a,x){i.addEventListener(d,a,x),t.push(function(){i.removeEventListener(d,a,x)})}o.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var d=i.getAttribute("data-player-src");if(!d)return;var a=i.querySelector("video");if(!a)return;try{a.pause()}catch(H){}try{a.removeAttribute("src"),a.load()}catch(H){}function x(H){i.getAttribute("data-player-status")!==H&&i.setAttribute("data-player-status",H)}function b(H){a.muted=!!H,i.setAttribute("data-player-muted",a.muted?"true":"false")}function I(H){i.setAttribute("data-player-fullscreen",H?"true":"false")}function j(H){i.setAttribute("data-player-activated",H?"true":"false")}i.hasAttribute("data-player-activated")||j(!1);var Y=i.querySelector("[data-player-timeline]"),D=i.querySelector("[data-player-progress]"),V=i.querySelector("[data-player-buffered]"),E=i.querySelector("[data-player-timeline-handle]"),N=i.querySelectorAll("[data-player-time-duration]"),S=i.querySelectorAll("[data-player-time-progress]"),Q=i.getAttribute("data-player-update-size"),ie=i.getAttribute("data-player-lazy"),W=ie==="true",F=ie==="meta",$=i.getAttribute("data-player-autoplay")==="true",U=i.getAttribute("data-player-muted")==="true",A=!1;$?(b(!0),a.loop=!0):b(U),a.setAttribute("muted",""),a.setAttribute("playsinline",""),a.setAttribute("webkit-playsinline",""),a.playsInline=!0,typeof a.disableRemotePlayback!="undefined"&&(a.disableRemotePlayback=!0),$&&(a.autoplay=!1);var P=!!a.canPlayType("application/vnd.apple.mpegurl"),z=P&&"ManagedMediaSource"in window,L=!!(window.Hls&&Hls.isSupported())&&!z;if(Q==="true"&&!F&&!W){var h=a.preload;a.preload="metadata";var m=function(){y(i,Q,a.videoWidth,a.videoHeight),a.removeEventListener("loadedmetadata",m),a.preload=h||""};n(a,"loadedmetadata",m,{once:!0}),a.src=d}function q(){w(d,L).then(function(H){H.width&&H.height&&y(i,Q,H.width,H.height),N.length&&isFinite(H.duration)&&H.duration>0&&s(N,r(H.duration)),T(i,A)})}var Z=!1,R=!1,O="";function k(){if(!Z){if(Z=!0,i._hls){try{i._hls.destroy()}catch(ce){}i._hls=null}if(z)a.preload=W||F?"auto":a.preload,a.src=d,n(a,"loadedmetadata",function(){T(i,A),Q==="true"&&y(i,Q,a.videoWidth,a.videoHeight),N.length&&s(N,r(a.duration))},{once:!0});else if(L){var H=new Hls({maxBufferLength:10});H.attachMedia(a),H.on(Hls.Events.MEDIA_ATTACHED,function(){H.loadSource(d)}),H.on(Hls.Events.MANIFEST_PARSED,function(){if(T(i,A),Q==="true"){var ce=H.levels||[],g=u(ce);g&&g.width&&g.height&&y(i,Q,g.width,g.height)}}),H.on(Hls.Events.LEVEL_LOADED,function(ce,g){g&&g.details&&isFinite(g.details.totalduration)&&N.length&&s(N,r(g.details.totalduration))}),i._hls=H}else a.src=d}}F?(q(),a.preload="none"):W?a.preload="none":k();function ae(){R=!0,a.paused||a.ended?((W||F)&&!Z&&k(),A=!0,O="",x("loading"),l(a)):(O="manual",a.pause())}function de(){a.muted=!a.muted,i.setAttribute("data-player-muted",a.muted?"true":"false")}function ve(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function ne(){if(i.requestFullscreen)return i.requestFullscreen();if(a.requestFullscreen)return a.requestFullscreen();if(a.webkitSupportsFullscreen&&typeof a.webkitEnterFullscreen=="function")return a.webkitEnterFullscreen()}function He(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(a.webkitDisplayingFullscreen&&typeof a.webkitExitFullscreen=="function")return a.webkitExitFullscreen()}function Me(){ve()||a.webkitDisplayingFullscreen?He():ne()}n(document,"fullscreenchange",function(){I(ve())}),n(document,"webkitfullscreenchange",function(){I(ve())}),n(a,"webkitbeginfullscreen",function(){I(!0)}),n(a,"webkitendfullscreen",function(){I(!1)}),n(i,"click",function(H){var ce=H.target.closest("[data-player-control]");if(!(!ce||!i.contains(ce))){var g=ce.getAttribute("data-player-control");g==="play"||g==="pause"||g==="playpause"?ae():g==="mute"?de():g==="fullscreen"&&Me()}});function Re(){N.length&&s(N,r(a.duration)),S.length&&s(S,r(a.currentTime))}n(a,"timeupdate",Re),n(a,"loadedmetadata",function(){Re(),c(i,Q,a)}),n(a,"loadeddata",function(){c(i,Q,a)}),n(a,"playing",function(){c(i,Q,a)}),n(a,"durationchange",Re);var ee;function te(){if(a.duration){var H=a.currentTime/a.duration*100;D&&(D.style.transform="translateX("+(-100+H)+"%)"),E&&(E.style.left=H+"%")}}function M(){te(),!a.paused&&!a.ended&&(ee=requestAnimationFrame(M))}function re(){if(!(!V||!a.duration||!a.buffered.length)){var H=a.buffered.end(a.buffered.length-1),ce=H/a.duration*100;V.style.transform="translateX("+(-100+ce)+"%)"}}if(n(a,"progress",re),n(a,"loadedmetadata",re),n(a,"durationchange",re),n(a,"play",function(){j(!0),cancelAnimationFrame(ee),M(),x("playing")}),n(a,"playing",function(){A=!1,x("playing")}),n(a,"pause",function(){A=!1,cancelAnimationFrame(ee),te(),x("paused")}),n(a,"waiting",function(){x("loading")}),n(a,"canplay",function(){T(i,A)}),n(a,"ended",function(){A=!1,cancelAnimationFrame(ee),te(),x("paused"),j(!1)}),Y){let H=function(K){se||(se=Y.getBoundingClientRect());var J=(K-se.left)/se.width;return J<0&&(J=0),J>1&&(J=1),J},ce=function(K){if(a.duration){var J=K*100;D&&(D.style.transform="translateX("+(-100+J)+"%)"),E&&(E.style.left=J+"%"),S.length&&s(S,r(K*a.duration))}},g=function(K){a.duration&&(K-ge<Se||(ge=K,a.currentTime=we))},X=function(K){if(a.duration){Pe=!0,pe=!a.paused&&!a.ended,pe&&a.pause(),i.setAttribute("data-timeline-drag","true"),se=Y.getBoundingClientRect();var J=H(K.clientX);we=J*a.duration,ce(J),g(performance.now()),Y.setPointerCapture&&Y.setPointerCapture(K.pointerId),window.addEventListener("pointermove",f,{passive:!1}),window.addEventListener("pointerup",G,{passive:!0}),K.preventDefault()}},f=function(K){if(Pe){var J=H(K.clientX);we=J*a.duration,ce(J),g(performance.now()),K.preventDefault()}},G=function(){Pe&&(Pe=!1,i.setAttribute("data-timeline-drag","false"),se=null,a.currentTime=we,pe?l(a):(te(),Re()),window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",G))};var Pe=!1,pe=!1,we=0,ge=0,Se=180,se=null;n(window,"resize",function(){Pe||(se=null)}),n(Y,"pointerdown",X,{passive:!1}),E&&n(E,"pointerdown",X,{passive:!1})}var ze,Be=3e3;function Le(H){i.getAttribute("data-player-hover")!==H&&i.setAttribute("data-player-hover",H)}function We(){clearTimeout(ze),ze=setTimeout(function(){Le("idle")},Be)}function xe(){Le("active"),We()}n(i,"pointerdown",xe),n(document,"fullscreenchange",xe),n(document,"webkitfullscreenchange",xe);var De=!1;function Ie(H){var ce=i.getBoundingClientRect();H.clientX>=ce.left&&H.clientX<=ce.right&&H.clientY>=ce.top&&H.clientY<=ce.bottom&&xe()}if(n(i,"pointerenter",function(){xe(),De||(De=!0,n(window,"pointermove",Ie,{passive:!0}))}),n(i,"pointerleave",function(){Le("idle"),clearTimeout(ze),De&&(De=!1,window.removeEventListener("pointermove",Ie))}),$){var fe=new IntersectionObserver(function(H){H.forEach(function(ce){var g=ce.isIntersecting&&ce.intersectionRatio>0;g?((W||F)&&!Z&&k(),a.paused?(O="",A=!0,x("loading"),l(a)):x("playing")):!a.paused&&!a.ended&&(O="io",a.pause(),x("paused"))})},{threshold:.1});fe.observe(i)}t.push(function(){if(cancelAnimationFrame(ee),clearTimeout(ze),fe&&fe.disconnect(),i._hls){try{i._hls.destroy()}catch(H){}i._hls=null}try{a.pause(),a.removeAttribute("src"),a.load()}catch(H){}})});function e(i){return(i<10?"0":"")+i}function r(i){if(!isFinite(i)||i<0)return"00:00";var d=Math.floor(i),a=Math.floor(d/3600),x=Math.floor(d%3600/60),b=d%60;return a>0?a+":"+e(x)+":"+e(b):e(x)+":"+e(b)}function s(i,d){i.forEach(function(a){a.textContent=d})}function u(i){return!i||!i.length?null:i.reduce(function(d,a){return(a.width||0)>(d.width||0)?a:d},i[0])}function l(i){var d=i.play();d&&typeof d.then=="function"&&d.catch(function(){})}function T(i,d){!d&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function y(i,d,a,x){if(!(d!=="true"||!a||!x)){var b=i.querySelector("[data-player-before]");b&&(b.style.paddingTop=x/a*100+"%")}}function c(i,d,a){if(d==="true"){var x=i.querySelector("[data-player-before]");if(x){var b=x.style.paddingTop&&x.style.paddingTop!=="0%";!b&&a.videoWidth&&a.videoHeight&&y(i,d,a.videoWidth,a.videoHeight)}}}function v(i,d){try{return new URL(d,i).toString()}catch(a){return d}}function w(i,d){return new Promise(function(a){if(d&&window.Hls&&Hls.isSupported())try{var x=new Hls,b={width:0,height:0,duration:NaN},I=!1,j=!1;x.on(Hls.Events.MANIFEST_PARSED,function(V,E){var N=E&&E.levels||x.levels||[],S=u(N);S&&S.width&&S.height&&(b.width=S.width,b.height=S.height,I=!0)}),x.on(Hls.Events.LEVEL_LOADED,function(V,E){E&&E.details&&isFinite(E.details.totalduration)&&(b.duration=E.details.totalduration,j=!0)}),x.on(Hls.Events.ERROR,function(){try{x.destroy()}catch(V){}a(b)}),x.on(Hls.Events.LEVEL_LOADED,function(){try{x.destroy()}catch(V){}a(b)}),x.loadSource(i);return}catch(V){a({width:0,height:0,duration:NaN});return}function Y(V){for(var E=V.split(/\r?\n/),N=0,S=0,Q=null,ie=null,W=0;W<E.length;W++){var F=E[W];if(F.indexOf("#EXT-X-STREAM-INF:")===0)ie=F;else if(ie&&F&&F[0]!=="#"){Q||(Q=F.trim());var $=/RESOLUTION=(\d+)x(\d+)/.exec(ie);if($){var U=parseInt($[1],10),A=parseInt($[2],10);U>N&&(N=U,S=A)}ie=null}}return{bestW:N,bestH:S,media:Q}}function D(V){for(var E=0,N=/#EXTINF:([\d.]+)/g,S;S=N.exec(V);)E+=parseFloat(S[1]);return E}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(V){if(!V.ok)throw new Error("master");return V.text()}).then(function(V){var E=Y(V);if(!E.media){a({width:E.bestW||0,height:E.bestH||0,duration:NaN});return}var N=v(i,E.media);return fetch(N,{credentials:"omit",cache:"no-store"}).then(function(S){if(!S.ok)throw new Error("media");return S.text()}).then(function(S){a({width:E.bestW||0,height:E.bestH||0,duration:D(S)})})}).catch(function(){a({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(i){i()}),t=[]}}var or="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",ar="(min-width: 768px)";function un(o){if(!o.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=At(o),n=ln(o);else{let e=!1;return ut(or).catch(function(){}).then(function(){e||(t=At(o),n=ln(o))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function ln(o){if(!o.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let r="",s=!1,u,l,T,y,c,v,w="",i="",d="",a=(h,m=o)=>m.querySelector(h),x=h=>a(`[data-mini-showreel-lightbox="${h}"]`),b=h=>a(`[data-mini-showreel-player="${h}"]`),I=h=>h.closest("[data-mini-showreel-safearea]")||a("[data-mini-showreel-safearea]",h)||h,j=(h,m)=>{let q=h.width,Z=q/m;return Z>h.height&&(Z=h.height,q=Z*m),{left:h.left+(h.width-q)/2,top:h.top+(h.height-Z)/2,width:q,height:Z}},Y=h=>{let m=I(h).getBoundingClientRect(),q=h.getBoundingClientRect(),Z=q.width>0&&q.height>0?q.width/q.height:16/9;return j(m,Z)},D=(h,m)=>gsap.set(h,{position:"fixed",left:m.left,top:m.top,width:m.width,height:m.height,margin:0,x:0,y:0});function V(h){r&&o.querySelectorAll(`[data-mini-showreel-lightbox="${r}"], [data-mini-showreel-player="${r}"]`).forEach(m=>m.setAttribute("data-mini-showreel-status",h))}function E(){i=(u==null?void 0:u.style.zIndex)||"",d=(l==null?void 0:l.style.zIndex)||"",u&&(u.style.zIndex=String(e)),l&&(l.style.zIndex=String(e))}function N(){u&&(u.style.zIndex=i),l&&(l.style.zIndex=d)}function S(h){let m=b(h);if(!m)return;let q=m.querySelector("[data-bunny-player-init]"),Z=m.querySelector("video");if(Z){if(q){let R=q.querySelector('[data-player-control="play"], [data-player-control="playpause"]');R&&(Z.paused||Z.ended)&&R.click();return}try{Z.play()}catch(R){}}}function Q(h){let m=b(h);if(!m)return;let q=m.querySelector("[data-bunny-player-init]"),Z=m.querySelector("video");Z&&(Z.muted=!0,q&&q.setAttribute("data-player-muted","true"),(Z.paused||Z.ended)&&S(h))}function ie(){N(),r="",s=!1,u=l=T=y=c=v=null,w="",i="",d="",Te.start()}function W(h){if(!h||s||(u=x(h),l=b(h),!u||!l)||(T=a("[data-mini-showreel-target]",u),!T))return;r=h,s=!0,Te.stop(),l.dataset.flipId=r,w=l.style.cssText||"",y=l.parentElement,c=l.nextSibling,E(),V("active"),S(r);let m=Flip.getState(l),q=Y(T);u.appendChild(l),D(l,q),v=Flip.from(m,{duration:t,ease:n,absolute:!0,scale:!1})}function F(h){!s||!l||h&&h!==r||(Q(r),V("not-active"),v&&v.kill(),v=Flip.fit(l,y,{duration:t,ease:n,scale:!1,onComplete:()=>{y.insertBefore(l,c),l.style.cssText=w,ie()}}))}function $(){!s||!l||(v&&v.kill(),Q(r),V("not-active"),y.insertBefore(l,c),l.style.cssText=w,ie())}function U(){!s||!l||!T||D(l,Y(T))}function A(h){let m=h.target.closest("[data-mini-showreel-open]");m&&(h.preventDefault(),W(m.getAttribute("data-mini-showreel-open")||""))}function P(h){let m=h.target.closest("[data-mini-showreel-close]");m&&(h.preventDefault(),F(m.getAttribute("data-mini-showreel-close")||""))}function z(h){h.key==="Escape"&&F("")}let L=gsap.matchMedia();return L.add(ar,function(){return o.addEventListener("click",A),document.addEventListener("click",P),window.addEventListener("keydown",z),window.addEventListener("resize",U),function(){$(),o.removeEventListener("click",A),document.removeEventListener("click",P),window.removeEventListener("keydown",z),window.removeEventListener("resize",U)}}),function(){L.revert(),$()}}var lt={x:0,y:0,known:!1};window.addEventListener("pointermove",o=>{lt.x=o.clientX,lt.y=o.clientY,lt.known=!0},{passive:!0});function nt(o){let t=e=>o(e.clientX,e.clientY),n=()=>{lt.known&&o(lt.x,lt.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,Ne=1080,Ct="#E5E5E5",Mt="#000000",dn="http://www.w3.org/2000/svg";function vn(o){let t=o.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(dn,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${Ne}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(L,h)=>{let m=document.createElementNS(dn,L);return m.setAttribute("fill",h),n.appendChild(m),m},r=e("polygon",Ct),s=e("polygon",Mt),u=e("rect",Mt),l=e("rect",Ct),T=e("rect",Ct),y=e("rect",Mt);[u,l,T,y].forEach(L=>L.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let c=(L,h,m,q,Z)=>{L.setAttribute("x",h),L.setAttribute("y",m),L.setAttribute("width",Math.max(0,q)),L.setAttribute("height",Math.max(0,Z))},v={x:qe*(2/3),y:Ne*(1/3)},w=.1,i=.9,d={x:v.x,y:v.y},a={x:v.x,y:v.y},x={x:v.x,y:v.y},b=!1,I=()=>gsap.to(x,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:I}),j=()=>gsap.to(x,{y:gsap.utils.random(Ne*.193,Ne*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:j});I(),j();function Y(){let L=gsap.utils.clamp(qe*w,qe*i,d.x),h=qe-L,m=gsap.utils.clamp(Ne*w,Ne*i,d.y),q=Ne-m;r.setAttribute("points",`0,${m} ${L},0 ${qe},${m} ${qe},${Ne} 0,${Ne}`),s.setAttribute("points",`${qe},${m} ${L},0 ${L},${m}`),c(u,0,m,L,q);let Z=L*.25,R=q*(2/3);c(l,L/2-Z/2,m+q-R,Z,R),c(T,L,m,h,q);let O=h*.5,k=q/3;c(y,L+h/2-O/2,m+q/2-k/2,O,k)}let D=.1,V=.03;function E(){let h=1-Math.pow(1-(b?D:V),gsap.ticker.deltaRatio(60)),m=b?a:x;d.x+=(m.x-d.x)*h,d.y+=(m.y-d.y)*h,Y()}let N=(L,h)=>{let m=t.getBoundingClientRect();!m.width||!m.height||(a.x=gsap.utils.clamp(0,qe,(L-m.left)/m.width*qe),a.y=gsap.utils.clamp(0,Ne,(h-m.top)/m.height*Ne),b=!0)},S=()=>{b=!1},Q=(L,h)=>{let m=t.getBoundingClientRect();L>=m.left&&L<=m.right&&h>=m.top&&h<=m.bottom?N(L,h):S()},W=window.matchMedia("(hover: hover) and (pointer: fine)").matches?nt(Q):null,F=L=>{let h=L.touches[0];h&&N(h.clientX,h.clientY)},$={passive:!0};t.addEventListener("touchstart",F,$),t.addEventListener("touchmove",F,$),t.addEventListener("touchend",S,$),t.addEventListener("touchcancel",S,$);let U=!1,A=()=>{U||(U=!0,gsap.ticker.add(E))},P=()=>{U&&(U=!1,gsap.ticker.remove(E))},z=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:L=>L.isActive?A():P()});return Y(),A(),function(){P(),z.kill(),gsap.killTweensOf(x),W&&W(),t.removeEventListener("touchstart",F,$),t.removeEventListener("touchmove",F,$),t.removeEventListener("touchend",S,$),t.removeEventListener("touchcancel",S,$),n.remove()}}var ir="http://www.w3.org/2000/svg";var sr=4.1343749999999995,cr="#AFAFAF",lr="#000000",ur=5e3,dr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],vr=0,fn=(o,t)=>{if(o<0||t<0||o>=20||t>=20)return!1;let n=20/2;return Math.hypot(o+.5-n,t+.5-n)<=n},$e=(o,t)=>{let n=document.createElementNS(ir,o);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function pn(o){let t=o.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let r="pulse-dots-liquid-"+ ++vr;e.setAttribute("data-pulse-dots-paused","");let s=$e("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});s.style.setProperty("--pd-step",`${31.5}px`);let u=$e("filter",{id:r,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});u.append($e("feGaussianBlur",{in:"SourceGraphic",stdDeviation:sr.toFixed(2)}),$e("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let l=$e("defs",{});l.appendChild(u);let T=$e("rect",{width:1e3,height:1e3,fill:cr}),y=$e("g",{filter:`url(#${r})`,fill:lr});for(let v=0;v<20;v++)for(let w=0;w<20;w++){if(!fn(w,v))continue;let i=dr.filter(I=>fn(w+I.dx,v+I.dy)),d=i[Math.floor(Math.random()*i.length)],a=185+w*31.5+27.5625/2,x=185+v*31.5+27.5625/2,b=$e("g",{transform:`rotate(${d.deg} ${a} ${x})`});b.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*ur)}ms`),b.append($e("circle",{class:"pulse-dots__dot is--first",cx:a,cy:x,r:27.5625/2}),$e("circle",{class:"pulse-dots__dot is--last",cx:a,cy:x,r:27.5625/2})),y.appendChild(b)}s.append(l,T,y),e.appendChild(s);let c=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:v=>e.toggleAttribute("data-pulse-dots-paused",!v.isActive)});e.toggleAttribute("data-pulse-dots-paused",!c.isActive),n.push(()=>{c.kill(),e.removeAttribute("data-pulse-dots-paused"),s.remove()})}),()=>n.forEach(e=>e())}var ht=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,mn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,hn=`#version 300 es
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
}`,gn=[`#version 300 es
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
}`],xn=`#version 300 es
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
}`,bn=`#version 300 es
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
}fragColor = color;}`,yn=`#version 300 es
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
}`,Pn=[`#version 300 es
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
fragColor = color;}`],En=[`#version 300 es
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
}`],wn=`#version 300 es
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
}`;var Rt=60,pr=1.5,mr=1,Sn=150,Ft=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Tn(o){let t=o.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let r=!!e.getExtension("EXT_color_buffer_float"),s=e.getExtension("KHR_parallel_shader_compile");function u(R,O){let k=e.createShader(R);return e.shaderSource(k,O),e.compileShader(k),k}let l=[];function T(R,O=mn){let k=e.createProgram(),ae=u(e.VERTEX_SHADER,O),de=u(e.FRAGMENT_SHADER,R);e.attachShader(k,ae),e.attachShader(k,de),e.bindAttribLocation(k,0,"aVertexPosition"),e.bindAttribLocation(k,1,"aTextureCoord"),e.linkProgram(k);let ve={p:k,v:ae,f:de,loc:{}};return l.push(ve),ve}function y(R){let{p:O,v:k,f:ae}=R;e.getProgramParameter(O,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(O),e.getShaderInfoLog(k),e.getShaderInfoLog(ae));let de=e.getProgramParameter(O,e.ACTIVE_UNIFORMS);for(let ve=0;ve<de;ve++){let ne=e.getActiveUniform(O,ve);R.loc[ne.name]=e.getUniformLocation(O,ne.name)}e.deleteShader(k),e.deleteShader(ae)}let c={bg:T(hn,ht),shapes:gn.map(R=>T(R,xn)),trailSim:T(yn,ht),trail:T(bn),blur:Pn.map(R=>T(R)),bloom:En.map(R=>T(R)),gmap:T(wn,ht)},v=e.createVertexArray();e.bindVertexArray(v);let w=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let d=[];function a(R,O,k=!1){let ae=e.createTexture();e.bindTexture(e.TEXTURE_2D,ae),k&&r?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,R,O,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,R,O,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let de=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,de),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ae,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let ve={tex:ae,fb:de,w:R,h:O};return d.push(ve),ve}function x(){d.forEach(R=>{e.deleteTexture(R.tex),e.deleteFramebuffer(R.fb)}),d.length=0}function b(R,O,k,ae){e.useProgram(R.p);let de=O?O.w:n.width,ve=O?O.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,O?O.fb:null),e.viewport(0,0,de,ve);let ne=R.loc;ne.uMVMatrix&&e.uniformMatrix4fv(ne.uMVMatrix,!1,Ft),ne.uPMatrix&&e.uniformMatrix4fv(ne.uPMatrix,!1,Ft),ne.uTextureMatrix&&e.uniformMatrix4fv(ne.uTextureMatrix,!1,Ft),ne.uResolution&&e.uniform2f(ne.uResolution,de,ve),ne.uArtboardResolution&&e.uniform2f(ne.uArtboardResolution,1920,1920),ne.uAspectRatio&&e.uniform1f(ne.uAspectRatio,1),ne.uMousePos&&e.uniform2f(ne.uMousePos,I.x,I.y),ne.uIsMask&&e.uniform1i(ne.uIsMask,0),ne.uParentTrackMouse&&e.uniform1f(ne.uParentTrackMouse,0);let He=0;Object.keys(k).forEach(Me=>{ne[Me]&&(e.activeTexture(e.TEXTURE0+He),e.bindTexture(e.TEXTURE_2D,k[Me].tex),e.uniform1i(ne[Me],He),He++)}),Object.keys(ae||{}).forEach(Me=>{if(!ne[Me])return;let Re=ae[Me];Array.isArray(Re)?e.uniform2f(ne[Me],Re[0],Re[1]):e.uniform1f(ne[Me],Re)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let I={x:.5,y:.5},j={x:.5,y:.5},Y=0,D=null,V=0;function E(){x();let R=Math.min(pr,window.devicePixelRatio||1),O=Math.max(1,Math.round(t.clientWidth*R)),k=Math.max(1,Math.round(t.clientHeight*R));n.width=O,n.height=k;let ae=ne=>[Math.max(1,Math.round(O*ne)),Math.max(1,Math.round(k*ne))];D={a:a(O,k),b:a(O,k),pp:[a(...ae(.5),!0),a(...ae(.5),!0)],trail:a(O,k),blur1:a(...ae(1)),blur2:a(...ae(1)),blur3:a(...ae(1)),blur4:a(...ae(1)),bth:a(...ae(1)),bd1:a(...ae(1)),bd2:a(...ae(1)),bs1:a(...ae(1)),bs2:a(...ae(1)),bloom:a(O,k)},b(c.bg,D.a,{});let de=D.a,ve=D.b;c.shapes.forEach(ne=>{b(ne,ve,{uBgTexture:de});let He=de;de=ve,ve=He}),D.base=de,V=0}function N(){if(!D)return;let R=D.pp[V],O=D.pp[1-V];b(c.trailSim,O,{uPingPongTexture:R},{uTime:Y,uPreviousMousePos:[j.x,j.y]}),V=1-V,b(c.trail,D.trail,{uTexture:D.base,uPingPongTexture:O}),b(c.blur[0],D.blur1,{uTexture:D.trail}),b(c.blur[1],D.blur2,{uTexture:D.blur1}),b(c.blur[2],D.blur3,{uTexture:D.blur2}),b(c.blur[3],D.blur4,{uTexture:D.blur3});let k=D.blur4;b(c.bloom[0],D.bth,{uTexture:k}),b(c.bloom[1],D.bd1,{uTexture:D.bth}),b(c.bloom[2],D.bd2,{uTexture:D.bd1,uBgTexture:k}),b(c.bloom[3],D.bs1,{uTexture:D.bd2}),b(c.bloom[4],D.bs2,{uTexture:D.bs1,uBgTexture:k}),b(c.bloom[5],D.bloom,{uTexture:D.bs2,uBgTexture:k}),b(c.gmap,null,{uTexture:D.bloom},{uTime:0}),j.x=I.x,j.y=I.y}let S=Sn,ie=nt((R,O)=>{let k=n.getBoundingClientRect();!k.width||!k.height||(I.x=(R-k.left)/k.width,I.y=1-(O-k.top)/k.height,S=0,A())}),W=null,F=0,$=!1;function U(R){if(!$||S>=Sn){W=null;return}if(W=requestAnimationFrame(U),R-F<1e3/Rt-1)return;let O=F?Math.min(R-F,100):1e3/Rt;F=R,Y+=mr*(O/(1e3/Rt)),N(),S++}function A(){h&&$&&!W&&(j.x=I.x,j.y=I.y,F=0,W=requestAnimationFrame(U))}let P=new IntersectionObserver(([R])=>{$=R.isIntersecting,$?A():W&&(cancelAnimationFrame(W),W=null)});P.observe(t);let z=null,L=new ResizeObserver(()=>{clearTimeout(z),z=setTimeout(()=>{h&&(E(),N())},60)});L.observe(t);let h=!1,m=null;function q(){m=null,l.forEach(y),h=!0,E(),N()}function Z(){l.every(R=>e.getProgramParameter(R.p,s.COMPLETION_STATUS_KHR))?q():m=requestAnimationFrame(Z)}return s?m=requestAnimationFrame(Z):q(),function(){m&&cancelAnimationFrame(m),W&&cancelAnimationFrame(W),W=null,clearTimeout(z),P.disconnect(),L.disconnect(),ie(),x(),l.forEach(k=>e.deleteProgram(k.p)),e.deleteBuffer(w),e.deleteBuffer(i),e.deleteVertexArray(v);let O=e.getExtension("WEBGL_lose_context");O&&O.loseContext(),n.remove()}}var hr="#BBC0C8",gr="#FFFFFF";var zt='"Suisseintl Book", Arial, sans-serif';var An=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],xr=3,br=1.325,dt=5,yr=.4,Cn=20,Pr=2;function Mn(o){let t=o.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),r=s=>{let u=(s%dt+dt)%dt/dt;return u<.4?1-e(u/.4):u<.6?0:e((u-.6)/.4)};return t.forEach(s=>{let u=(s.getAttribute("data-text")||"").trim();if(!u)return;let l=Array.from(Array(xr).fill(u).join(" ").toUpperCase()),T=window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=document.createElement("canvas");y.setAttribute("aria-hidden","true"),Object.assign(y.style,{display:"block",width:"100%",height:"100%"}),s.appendChild(y);let c=y.getContext("2d"),v=[],w=0,i=new Map,d=2;function a(){c.font=`24px ${zt}`,v=l.map(F=>c.measureText(F).width),w=(3363-v.reduce((F,$)=>F+$,0))/(l.length-1)}let x=null;function b(){i=new Map,c.font=`24px ${zt}`;let W=24,F=24*.35,$=[...new Set(l)].filter(z=>z!==" ").map(z=>({ch:z,w:c.measureText(z).width})),U=Math.ceil((W+F+d*2)*I),A=0;$.forEach(z=>{z.sx=A,z.sw=Math.ceil((z.w+d*2)*I),A+=z.sw+2}),x=document.createElement("canvas"),x.width=Math.max(1,A),x.height=Math.max(1,U);let P=x.getContext("2d");P.font=`${24*I}px ${zt}`,P.fillStyle=gr,P.textBaseline="alphabetic",$.forEach(z=>{P.fillText(z.ch,z.sx+d*I,(d+W)*I),i.set(z.ch,{sx:z.sx,sw:z.sw,x:-z.w/2-d,y:-W-d,w:z.sw/I,h:U/I})})}let I=1;function j(){let W=Math.min(Pr,window.devicePixelRatio||1),F=s.clientWidth;y.width=Math.max(1,Math.round(F*W)),y.height=Math.max(1,Math.round(s.clientHeight*W)),I=y.width/1920}let Y=0;function D(){c.setTransform(1,0,0,1,0,0),c.fillStyle=hr,c.fillRect(0,0,y.width,y.height);let W=T?0:e(Y%Cn/Cn)*Math.PI*2;An.forEach((F,$)=>{let U=An.length-1-$,A=T?0:r(Y-dt+U*yr),P=w+A*br*24,z=2*Math.PI*F.r,L=F.start*Math.PI/180+W,h=0;for(let m=0;m<l.length;m++){let q=v[m];if(h+q>z)break;let Z=i.get(l[m]);if(Z){let R=L+(h+q/2)/F.r,O=Math.cos(R),k=Math.sin(R);c.setTransform(-k*I,O*I,-O*I,-k*I,(960+F.r*O)*I,(960+F.r*k)*I),c.drawImage(x,Z.sx,0,Z.sw,x.height,Z.x,Z.y,Z.w,Z.h)}h+=q+P}})}let V=(W,F)=>{Y+=F/1e3,D()},E=!1,N=()=>{!E&&!T&&(E=!0,gsap.ticker.add(V))},S=()=>{E&&(E=!1,gsap.ticker.remove(V))},Q=new ResizeObserver(()=>{j(),b(),D()});Q.observe(s),j(),a(),b(),D(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{a(),b(),D()});let ie=ScrollTrigger.create({trigger:s,start:"top bottom",end:"bottom top",onToggle:W=>W.isActive?N():S()});ie.isActive&&N(),n.push(()=>{S(),ie.kill(),Q.disconnect(),y.remove()})}),()=>n.forEach(s=>s())}var it={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Rn=o=>{let t=Math.sin(o*127.1+311.7)*43758.5453;return t-Math.floor(t)},Er=o=>{let t=Math.floor(o),n=o-t,e=n*n*(3-2*n);return Rn(t)*(1-e)+Rn(t+1)*e};function Fn(o){let t=o.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,r=[],s=null,u=0,l=18,T=0,y=0,c=0,v=-1e5,w=-1e5,i=!1,d=!1;function a(){s&&s.revert(),t.textContent="";let S=getComputedStyle(t);u=parseFloat(S.paddingTop),l=parseFloat(S.lineHeight),T=t.offsetHeight;let Q=Math.max(1,Math.floor((T-u-parseFloat(S.paddingBottom))/l)),ie=document.createDocumentFragment();for(let W=0;W<Q;W++){let F=document.createElement("div");F.className="type-field__row",F.textContent=n,ie.appendChild(F)}t.appendChild(ie),t.setAttribute("aria-hidden","true"),s=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){r=[...t.children].map((W,F)=>({chars:W.querySelectorAll(".type-field__char"),cur:r[F]?r[F].cur:0,drawn:0}))}})}function x(S){let Q=Math.max(0,Math.min(S.chars.length,Math.round(S.cur)));if(Q===S.drawn)return;let ie=Math.min(Q,S.drawn),W=Math.max(Q,S.drawn);for(let F=ie;F<W;F++)S.chars[F].style.visibility=F<Q?"visible":"hidden";S.drawn=Q}function b(S,Q){if(!r.length)return;let ie=Math.min(Q,50)/16.667,W=z=>1-Math.pow(1-z,ie),F=Te.scroll,$=Math.min(Math.max(y-F,0),c-F-T);w+=(v-$-u-w)*W(it.followEase);let U=Math.floor(w/l),A=F*.004,P=i&&v>=y-F&&v<=c-F;for(let z=0;z<r.length;z++){let L=r[z],h=L.chars.length,m=Math.abs(z-U),q=0;if(P){if(m===0)q=h;else if(m<=it.radius){let Z=1-m/(it.radius+1);q=1+Math.min(it.maxSide,Z*(1-it.ragged/2+it.ragged*Er(z*1.3+A)))*(h-1)}}L.cur+=(q-L.cur)*W(it.ease),x(L)}}function I(){d||(gsap.ticker.add(b),d=!0)}function j(){d&&(gsap.ticker.remove(b),d=!1)}let Y=nt((S,Q)=>{w<-1e4&&(w=Q),v=Q,i=!0}),D=()=>{i=!1};document.documentElement.addEventListener("mouseleave",D),a();let V=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(S){y=S.start+window.innerHeight,c=S.end},onToggle(S){S.isActive?I():j()}});V.isActive&&I();let E,N=()=>{clearTimeout(E),E=setTimeout(()=>{Math.floor((t.offsetHeight-u-parseFloat(getComputedStyle(t).paddingBottom))/l)!==r.length&&(a(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",N),function(){j(),clearTimeout(E),Y(),document.documentElement.removeEventListener("mouseleave",D),window.removeEventListener("resize",N),V.kill(),s&&s.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var zn={duration:.5,ease:"power3"};function Ln(o){let t=o.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let r=e.querySelector("[data-cursor-label-item]");if(!r)return;let s=gsap.quickTo(r,"x",zn),u=gsap.quickTo(r,"y",zn),l=0,T=0,y=!1,c=new ResizeObserver(()=>{l=r.offsetWidth,T=r.offsetHeight});c.observe(r),l=r.offsetWidth,T=r.offsetHeight;let w=nt((d,a)=>{let x=e.getBoundingClientRect();if(!(d>=x.left&&d<=x.right&&a>=x.top&&a<=x.bottom)){y&&(y=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let I=gsap.utils.clamp(0,Math.max(0,x.width-l),d-x.left-l/2),j=gsap.utils.clamp(0,Math.max(0,x.height-T),a-x.top-T/2);if(!y){y=!0,s(I,I),u(j,j),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}s(I),u(j)}),i=()=>{y&&(y=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),n.push(()=>{w(),document.documentElement.removeEventListener("mouseleave",i),c.disconnect(),gsap.killTweensOf(r),gsap.set(r,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var wr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],Sr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],Tr="#FFFFFF";var kn="power3.out";function Dn(o){let t=o.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let r=[],s=[],u=[];function l(){if(s.length&&s[0].isConnected)return;let v=e.querySelectorAll(":scope > div > div");r=(v.length?[...v]:[e]).map(i=>SplitText.create(i,{type:"chars"})),s=r.flatMap(i=>i.chars),u=v.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],s.forEach(i=>{i.dataset.orig=i.textContent})}function T(v){v.textContent=v.dataset.orig,v.style.border=""}let y=()=>{l(),u.forEach(w=>{w.el.style.overflow="visible"});let v=(s.length-1)/2;s.forEach((w,i)=>{gsap.to(w,{color:Tr,ease:kn,duration:.3,delay:Math.abs(i-v)*.03,overwrite:"auto",onStart:()=>{let d=gsap.utils.random(["0","1"]),a=gsap.utils.random(["0","1","2"]);d==1&&(w.textContent=gsap.utils.random(Sr)),a==1&&(w.style.border=`1px solid ${gsap.utils.random(wr)}`)}})})},c=()=>{if(!s.length)return;let v=getComputedStyle(e).color,w=(s.length-1)/2;u.forEach(i=>{i.el.style.overflow=i.overflow}),s.forEach((i,d)=>{gsap.to(i,{color:v,ease:kn,duration:.3,delay:Math.abs(d-w)*.03,overwrite:"auto",onStart:()=>T(i)})})};e.addEventListener("mouseenter",y),e.addEventListener("mouseleave",c),n.push(()=>{e.removeEventListener("mouseenter",y),e.removeEventListener("mouseleave",c),gsap.killTweensOf(s),r.forEach(v=>v.revert()),r=[],s=[],u=[]})}),()=>n.forEach(e=>e())}function Lt(o,t){let n=null;he(Zt(o)),he(vn(o)),he(Dn(o)),he(sn(o)),he(Jt(o)),he(un(o));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Qt(o):null,n?he(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),he(jt(o)),he(nn(o)),he(rn(o)),he(mt(o)),pt(o),he(on(o)),n}function gt(o){he(cn(o)),o.querySelector("[data-flip-element]")&&window.innerWidth>991&&he(an(o)),he(Fn(o)),he(Ln(o)),he(pn(o)),he(Tn(o)),he(Mn(o)),ScrollTrigger.sort()}var Ar={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function xt(o){var t=[];return o.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",r=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:r,mask:"lines",autoSplit:!0,onSplit:function(s){gsap.set(n,{autoAlpha:1});var u=Ar[e],l={yPercent:110,duration:u.duration,stagger:u.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?l.delay=.5:l.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(s[e],l)}}))}),function(){t.forEach(function(n){n.revert()})}}var On=Zn(In());var Un=window.matchMedia("(prefers-reduced-motion: reduce)"),It=.9;function Hn(o){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{o.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Un.matches||!n?e.set(o,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ft,duration:It,ease:Ye},0),e.fromTo(o,{y:"0vh"},{y:"-25vh",duration:It,ease:Ye},0),e.set(n,{autoAlpha:0}),e)}function Ut(o,t,n="100vh"){let e=gsap.timeline();return Un.matches?e.set(o,{autoAlpha:1}):(e.set(o,{zIndex:3},0),e.fromTo(o,{y:n},{y:"0vh",duration:It,ease:Ye},0)),e.add("pageReady"),e.call(function(){gsap.set(o,{clearProps:"zIndex"}),t(o)},null,"pageReady"),new Promise(r=>{e.call(r,null,"pageReady")})}function Ht(o,t,n){let e=document.querySelector("[data-transition-wrap]"),r=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(o,{position:"relative"}),Ut(o,t,n).then(function(){r&&gsap.set(r,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var st=null,_t=!1;function Ot(o){gsap.set(o,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Te.scrollTo(0,{immediate:!0,force:!0}),Te.resize()}var _n={sync:!0,beforeLeave(){_t=wt({keepCurtain:!0}),Te.stop(),st||(st=Et())},beforeEnter(o){st||(st=Et()),gsap.set(o.next.container,{position:"fixed",top:0,left:0,right:0}),Wt(),Lt(o.next.container,!1)},leave(o){return Hn(o.current.container,o.next.container)},enter(o){return _t&&(qt(),_t=!1),he(xt(o.next.container)),Ut(o.next.container,Ot)},afterLeave(){st&&(st(),st=null)},afterEnter(o){Xt(o),gt(o.next.container),Te.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.use(On.default),barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:o}){if(!o||!o.href)return!1;let t=new URL(o.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",..._n,once(o){let t=document.querySelector("[data-menu-status]");Gt(),Nt(),t&&(pt(t),mt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=o.next.container,e=Lt(n,!0);e?e.call(function(){let r=document.querySelector("[data-load-bg]");he(xt(n)),Ht(n,function(s){Ot(s),gt(s),Te.start(),ScrollTrigger.refresh()},r?r.offsetHeight:void 0)},null,"hideContent"):(Te.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),he(xt(n)),Ht(n,function(r){Ot(r),gt(r),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Te.start()})})})}))}},{name:"self",..._n}]}),window.addEventListener("pageshow",function(o){o.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

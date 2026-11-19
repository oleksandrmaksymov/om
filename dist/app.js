(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Te=new Lenis({lerp:.08,wheelMultiplier:1});Te.on("scroll",ScrollTrigger.update);gsap.ticker.add(a=>{Te.raf(a*1e3)});gsap.ticker.lagSmoothing(0);var ht=[];function pe(a){typeof a=="function"&&ht.push(a)}function xt(){let a=ht,t=ScrollTrigger.getAll();return ht=[],function(){a.forEach(function(e){try{e()}catch(i){console.error(i)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var jn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",jn);var Ze="parallax",lt=.8;var Jn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",_t="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,bt=function(){return!1};function It(){tt&&gsap.timeline().to(tt,{clipPath:_t,duration:.9,ease:Ze,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-lt)+")",duration:.9,ease:Ze},0).set(tt,{clearProps:"filter"})}function Dt(){let a=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!a||!t)return;tt=t.querySelector(".nav-bg"),a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(i){t.dataset.menuStatus=i?"open":"closed",a.setAttribute("aria-expanded",i),i?(Te.stop(),document.body.style.overflow="hidden"):(Te.start(),document.body.style.overflow="")}function e(i){tt&&gsap.to(tt,{clipPath:i?Jn:_t,duration:.9,ease:Ze,overwrite:!0})}a.addEventListener("click",function(){let i=t.dataset.menuStatus!=="open";n(i),e(i)}),bt=function(i){return t.dataset.menuStatus!=="open"?!1:(n(!1),i&&i.keepCurtain||e(!1),!0)}}function kt(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(a){var t=a.target.closest&&a.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(a){var t=a.target.closest&&a.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Bt(){let a=function(n){return n.replace(/\/$/,"")||"/"},t=a(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),i=e.origin===location.origin&&a(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",i),i?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Ot(a){let n=new DOMParser().parseFromString(a.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function ut(a){let t=a.querySelectorAll(".copy-email-button");if(!t.length)return;let n=i=>{let f=i.getAttribute("data-copy-email")||i.querySelector("[data-copy-email-element]").textContent.trim();f&&navigator.clipboard.writeText(f).then(()=>{i.setAttribute("data-copy-button","copied"),i.setAttribute("aria-label","Email copied to clipboard!")})},e=i=>{(i.type==="click"||i.type==="keydown"&&(i.key==="Enter"||i.key===" "))&&(i.preventDefault(),n(i.currentTarget))};t.forEach(i=>{i.addEventListener("click",e),i.addEventListener("keydown",e),i.addEventListener("mouseleave",()=>{i.removeAttribute("data-copy-button"),i.blur(),i.setAttribute("aria-label","Copy email to clipboard")}),i.addEventListener("blur",()=>{i.removeAttribute("data-copy-button"),i.setAttribute("aria-label","Copy email to clipboard")})})}function vt(a){let t=a.querySelector("[data-clock]");if(!t)return;function n(){let i=new Date,f=i.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),l=i.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=f+" "+l}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var yt={};function st(a){return yt[a]||(yt[a]=new Promise(function(t,n){let e=document.createElement("script");e.src=a,e.onload=t,e.onerror=n,document.head.appendChild(e)})),yt[a]}function Vt(a){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var i=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});i.setSize(1920,1080),i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,1),i.toneMapping=THREE.ACESFilmicToneMapping,i.toneMappingExposure=1.4,i.domElement.style.width="100%",i.domElement.style.height="100%",a.appendChild(i.domElement),n.add(new THREE.AmbientLight(2760464,1));var f=new THREE.PointLight(16107370,3,1400);f.position.set(300,350,400),n.add(f);var w=new THREE.PointLight(13931578,2.4,1200);w.position.set(-300,-100,300),n.add(w);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var F=new THREE.PointLight(16750916,1.3,600);F.position.set(0,-250,200),n.add(F);var z=0,m=0,b=0,h=0,o=!1,x=0,r=0,v=Math.PI*2/6,u=new THREE.Vector2(9999,9999),Z=new THREE.Raycaster,U=120,H=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),O=new THREE.Vector3,A=!1,$=0,M=0,N=8e4,ee=.03,ne=.95,R=.005,L=12e4,g=null,T,P,S,s,c,d,D=0,Y=!1,q=0,y=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function _(){var C=new THREE.BufferGeometry;T=new Float32Array(L*3),P=new Float32Array(L*3),S=new Float32Array(L*3),s=new Float32Array(L*3),c=new Float32Array(L),d=new Float32Array(L),C.setAttribute("position",new THREE.BufferAttribute(T,3)),C.setAttribute("color",new THREE.BufferAttribute(s,3)),C.setAttribute("size",new THREE.BufferAttribute(c,1)),C.setAttribute("alpha",new THREE.BufferAttribute(d,1)),C.setAttribute("velocity",new THREE.BufferAttribute(P,3));var K=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,X=new THREE.ShaderMaterial({vertexShader:K,fragmentShader:p,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});g=new THREE.Points(C,X),n.add(g)}function B(C,K){return new Promise(function(p){try{var X=512,Q=document.createElement("canvas");Q.width=Q.height=X;var re=Q.getContext("2d"),Ue=new DOMParser().parseFromString(C,"image/svg+xml"),Fe=Ue.querySelector("svg");if(!Fe){p([]);return}var I=parseFloat(Fe.getAttribute("width")||512),W=parseFloat(Fe.getAttribute("height")||512),E=Fe.getAttribute("viewBox");if(E){var V=E.split(/[\s,]+/);I=+V[2],W=+V[3]}var ce=Math.min(X/I,X/W)*.9,ie=(X-I*ce)/2,Le=(X-W*ce)/2;re.save(),re.translate(ie,Le),re.scale(ce,ce),re.fillStyle="white",Ue.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var ke=xe.getAttribute("d");ke&&re.fill(new Path2D(ke))}else xe.tagName==="rect"?re.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(re.beginPath(),re.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),re.fill())}),re.restore();for(var be=re.getImageData(0,0,X,X).data,Ce=[],ye=0;ye<X;ye++)for(var Ie=0;Ie<X;Ie++){var Pe=(ye*X+Ie)*4;be[Pe+3]>30&&Ce.push({x:Ie,y:ye,a:be[Pe+3]/255})}if(!Ce.length){p([]);return}for(var We=[],Pe=0;Pe<K;Pe++){var De=Ce[Math.floor(Math.random()*Ce.length)];We.push({x:(De.x-X/2)*1.2+(Math.random()-.5)*1.65,y:-(De.y-X/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*De.a,a:De.a})}p(We)}catch(xe){console.error(xe),p([])}})}function ae(C){D=C.length;for(var K=0;K<D;K++){var p=C[K],X=K*3;T[X]=p.x,T[X+1]=p.y+40,T[X+2]=p.z,P[X]=P[X+1]=P[X+2]=0,S[X]=p.x,S[X+1]=p.y,S[X+2]=p.z;var Q=y[Math.floor(Math.random()*y.length)],re=.7+Math.random()*.4;s[X]=Q.r*re,s[X+1]=Q.g*re,s[X+2]=Q.b*re,c[K]=1.8+Math.random()*3.8,d[K]=.3+(p.a||.7)*.75}g.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(Ue){g.geometry.attributes[Ue].needsUpdate=!0}),Y=!0}function me(C){return B(C,Math.min(L,N)).then(function(K){K.length&&g&&ae(K)})}function Se(C){if(!(!Y||!D)){q+=C;for(var K=0;K<D;K++){var p=K*3,X=K*1.37;if(P[p]+=Math.sin(q*.4+X)*.008+Math.sin(q*1.1+X*2.3)*.003,P[p+1]+=Math.cos(q*.35+X*.7)*.008+Math.sin(q*.9+X*1.5)*.004,P[p+2]+=Math.sin(q*.25+X*1.1)*.004,P[p+1]-=ee*.06,P[p]+=Math.sin(q*.25+T[p+1]*.008)*R*.6,P[p+2]+=Math.cos(q*.3+T[p]*.008)*R*.3,A){var Q=T[p]-H.x,re=T[p+1]-H.y,Ue=T[p+2]-H.z,Fe=Q*Q+re*re+Ue*Ue,I=U*U;if(Fe<I&&Fe>.25){var W=Math.sqrt(Fe),E=W/U,V=(K*2654435761&65535)/65535,ce=.6+V*.8,ie=Math.pow(1-E,1.5+V),Le=1+Math.min(O.length()*.12,1),be=ie*ce*1.2*Le,Ce=1/W;P[p]+=Q*Ce*be,P[p+1]+=re*Ce*be,P[p+2]+=Ue*Ce*be*.2;var ye=.02+V*.06;P[p]+=O.x*ie*ye,P[p+1]+=O.y*ie*ye;var Ie=ie*.15;P[p]+=(V-.5)*Ie,P[p+1]+=((K*48271&65535)/65535-.5)*Ie}}var Pe=S[p],We=S[p+1]+40,De=S[p+2],xe=Pe-T[p],ke=We-T[p+1],Ve=De-T[p+2],je=Math.sqrt(xe*xe+ke*ke+Ve*Ve),Je=(K*48271&65535)/65535,et=.003+Je*.003,it=1+Math.min(je*.002,.5),$e=et*it;P[p]+=xe*$e,P[p+1]+=ke*$e,P[p+2]+=Ve*$e;var Ee=(K*16807&65535)/65535,Ke=ne*(.92+Ee*.06);P[p]*=Ke,P[p+1]*=Ke,P[p+2]*=Ke,T[p]+=P[p],T[p+1]+=P[p+1],T[p+2]+=P[p+2];var ct=Math.sqrt(Math.pow(T[p]-S[p],2)+Math.pow(T[p+1]-S[p+1],2)+Math.pow(T[p+2]-S[p+2],2));d[K]=.15+.55*(1-Math.min(ct*.005,1))+Math.sin(q*1.5+K*.01)*.05}g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.alpha.needsUpdate=!0,g.geometry.attributes.velocity.needsUpdate=!0}}var Be=new THREE.Matrix4,Xe=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ae=new THREE.Vector3;function J(C,K){var p=i.domElement.getBoundingClientRect();if(!(p.width===0||p.height===0)&&(u.set((C-p.left)/p.width*2-1,-((K-p.top)/p.height)*2+1),Z.setFromCamera(u,e),Z.ray.intersectPlane(Xe,Ae))){oe.copy(H),g&&H.copy(Ae).applyMatrix4(Be.copy(g.matrixWorld).invert()),O.subVectors(H,oe);var X=O.length();X>15&&O.multiplyScalar(15/X)}}function te(C,K){var p=a.getBoundingClientRect();return C>=p.left&&C<=p.right&&K>=p.top&&K<=p.bottom}var k=a.querySelector("#logo-coords"),j=a.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(C){$=C.clientX,M=C.clientY;var K=te(C.clientX,C.clientY);if(K){A=!0,J(C.clientX,C.clientY);var p=a.getBoundingClientRect(),X=Math.round(C.clientX-p.left),Q=Math.round(C.clientY-p.top);k&&(k.textContent="X: "+X+"PX    Y: "+Q+"PX")}else A=!1,H.set(9999,9999,0);o&&(z+=(C.clientX-x)*.005,b+=(C.clientY-r)*.005,b=Math.max(-Math.PI/2,Math.min(Math.PI/2,b)),x=C.clientX,r=C.clientY)},de=function(C){te(C.clientX,C.clientY)&&(o=!0,x=C.clientX,r=C.clientY)},he=function(){o=!1,z=0,b=0,m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",de),window.addEventListener("mouseup",he)}function Re(){for(var C=4e3,K=new THREE.BufferGeometry,p=new Float32Array(C*3),X=new Float32Array(C*3),Q=0;Q<C;Q++){p[Q*3]=(Math.random()-.5)*2200,p[Q*3+1]=(Math.random()-.5)*1800,p[Q*3+2]=-200-Math.random()*1800;var re=y[Math.floor(Math.random()*y.length)],Ue=.2+Math.random()*.3;X[Q*3]=re.r*Ue,X[Q*3+1]=re.g*Ue,X[Q*3+2]=re.b*Ue}K.setAttribute("position",new THREE.BufferAttribute(p,3)),K.setAttribute("color",new THREE.BufferAttribute(X,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var I=Fe.getContext("2d"),W=I.createRadialGradient(16,16,0,16,16,16);W.addColorStop(0,"rgba(255,255,255,1)"),W.addColorStop(.3,"rgba(255,255,255,0.6)"),W.addColorStop(.7,"rgba(255,255,255,0.15)"),W.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=W,I.fillRect(0,0,32,32);var E=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),V=new THREE.Points(K,E);return V.userData={positions:p,count:C},n.add(V),V}_();var ue=t?null:Re(),_e='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';me(_e);var Oe=new THREE.Clock,Me=!0,Ye=new IntersectionObserver(function(C){Me=C[0].isIntersecting,C[0].isIntersecting&&!fe&&!t&&(fe=!0,k&&(k.style.transform="translateY(0)"),j&&(j.style.transform="translateY(0)"))},{threshold:.1});Ye.observe(a);var ge=!1,ze=null,we=0;function ve(){if(ge=!0,clearTimeout(ze),ze=setTimeout(function(){ge=!1},150),!t){var C=te($,M);C?(A=!0,J($,M)):(A=!1,H.set(9999,9999,0))}}window.addEventListener("scroll",ve,{passive:!0});var G=null;function se(){if(G=requestAnimationFrame(se),!!Me){we++;var C=Math.min(Oe.getDelta(),.05),K=Oe.elapsedTime;if(t)m+=v*C;else{var p=z-m;p=p%(Math.PI*2),p>Math.PI&&(p-=Math.PI*2),p<-Math.PI&&(p+=Math.PI*2),m+=p*.12,h+=(b-h)*.12}if(g&&(g.rotation.x=h,g.rotation.y=m,g.position.y=-15),ue){for(var X=ue.userData.positions,Q=0;Q<ue.userData.count;Q++)X[Q*3+1]+=Math.sin(K*.2+Q)*.05,X[Q*3]+=Math.cos(K*.15+Q*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-m*35*.35,ue.position.y=h*28*.35}f.position.x=300+Math.sin(K*.3)*100,f.position.y=350+Math.cos(K*.2)*80,w.intensity=2+Math.sin(K*.5)*.4,F.intensity=.8+Math.sin(K*.4+1)*.3,!(t&&ge&&we%4!==0)&&(Se(C),i.render(n,e))}}return se(),function(){cancelAnimationFrame(G),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",de),window.removeEventListener("mouseup",he)),window.removeEventListener("scroll",ve),clearTimeout(ze),Ye.disconnect(),n.traverse(function(C){C.geometry&&C.geometry.dispose(),C.material&&(C.material.map&&C.material.map.dispose(),C.material.dispose())}),i.dispose(),i.forceContextLoss(),i.domElement.parentNode&&i.domElement.parentNode.removeChild(i.domElement),g=null}}function Ht(a){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",a.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var i=new THREE.PointLight(16107370,3,1400);i.position.set(300,350,400),t.add(i);var f=new THREE.PointLight(13931578,2.4,1200);f.position.set(-300,-100,300),t.add(f);var w=new THREE.PointLight(5913114,1.2,900);w.position.set(0,200,-300),t.add(w);var l=new THREE.PointLight(16750916,1.3,600);l.position.set(0,-250,200),t.add(l);var F=0,z=Math.PI*2/6,m=8e4,b=.03,h=.95,o=.005,x=12e4,r=null,v,u,Z,U,H,oe,O=0,A=!1,$=0,M=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function N(){var J=new THREE.BufferGeometry;v=new Float32Array(x*3),u=new Float32Array(x*3),Z=new Float32Array(x*3),U=new Float32Array(x*3),H=new Float32Array(x),oe=new Float32Array(x),J.setAttribute("position",new THREE.BufferAttribute(v,3)),J.setAttribute("color",new THREE.BufferAttribute(U,3)),J.setAttribute("size",new THREE.BufferAttribute(H,1)),J.setAttribute("alpha",new THREE.BufferAttribute(oe,1)),J.setAttribute("velocity",new THREE.BufferAttribute(u,3));var te=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,k=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,j=new THREE.ShaderMaterial({vertexShader:te,fragmentShader:k,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(J,j),t.add(r)}function ee(J,te){return new Promise(function(k){try{var j=512,fe=document.createElement("canvas");fe.width=fe.height=j;var le=fe.getContext("2d"),de=new DOMParser().parseFromString(J,"image/svg+xml"),he=de.querySelector("svg");if(!he){k([]);return}var Re=parseFloat(he.getAttribute("width")||512),ue=parseFloat(he.getAttribute("height")||512),_e=he.getAttribute("viewBox");if(_e){var Oe=_e.split(/[\s,]+/);Re=+Oe[2],ue=+Oe[3]}var Me=Math.min(j/Re,j/ue)*.9,Ye=(j-Re*Me)/2,ge=(j-ue*Me)/2;le.save(),le.translate(Ye,ge),le.scale(Me,Me),le.fillStyle="white",de.querySelectorAll("path,rect,circle").forEach(function(p){if(p.tagName==="path"){var X=p.getAttribute("d");X&&le.fill(new Path2D(X))}else p.tagName==="rect"?le.fillRect(+p.getAttribute("x")||0,+p.getAttribute("y")||0,+p.getAttribute("width")||0,+p.getAttribute("height")||0):p.tagName==="circle"&&(le.beginPath(),le.arc(+p.getAttribute("cx")||0,+p.getAttribute("cy")||0,+p.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var ze=le.getImageData(0,0,j,j).data,we=[],ve=0;ve<j;ve++)for(var G=0;G<j;G++){var se=(ve*j+G)*4;ze[se+3]>30&&we.push({x:G,y:ve,a:ze[se+3]/255})}if(!we.length){k([]);return}for(var C=[],se=0;se<te;se++){var K=we[Math.floor(Math.random()*we.length)];C.push({x:(K.x-j/2)*1.2+(Math.random()-.5)*1.65,y:-(K.y-j/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*K.a,a:K.a})}k(C)}catch(p){console.error(p),k([])}})}function ne(J){O=J.length;for(var te=0;te<O;te++){var k=J[te],j=te*3;v[j]=k.x,v[j+1]=k.y+40,v[j+2]=k.z,u[j]=u[j+1]=u[j+2]=0,Z[j]=k.x,Z[j+1]=k.y,Z[j+2]=k.z;var fe=M[Math.floor(Math.random()*M.length)],le=.7+Math.random()*.4;U[j]=fe.r*le,U[j+1]=fe.g*le,U[j+2]=fe.b*le,H[te]=1.8+Math.random()*3.8,oe[te]=.3+(k.a||.7)*.75}r.geometry.setDrawRange(0,O),["position","color","size","alpha"].forEach(function(de){r.geometry.attributes[de].needsUpdate=!0}),A=!0}function R(J){return ee(J,Math.min(x,m)).then(function(te){te.length&&r&&ne(te)})}function L(J){if(!(!A||!O)){$+=J;for(var te=0;te<O;te++){var k=te*3,j=te*1.37;u[k]+=Math.sin($*.4+j)*.008+Math.sin($*1.1+j*2.3)*.003,u[k+1]+=Math.cos($*.35+j*.7)*.008+Math.sin($*.9+j*1.5)*.004,u[k+2]+=Math.sin($*.25+j*1.1)*.004,u[k+1]-=b*.06,u[k]+=Math.sin($*.25+v[k+1]*.008)*o*.6,u[k+2]+=Math.cos($*.3+v[k]*.008)*o*.3;var fe=Z[k],le=Z[k+1]+40,de=Z[k+2],he=fe-v[k],Re=le-v[k+1],ue=de-v[k+2],_e=Math.sqrt(he*he+Re*Re+ue*ue),Oe=(te*48271&65535)/65535,Me=.003+Oe*.003,Ye=1+Math.min(_e*.002,.5),ge=Me*Ye;u[k]+=he*ge,u[k+1]+=Re*ge,u[k+2]+=ue*ge;var ze=(te*16807&65535)/65535,we=h*(.92+ze*.06);u[k]*=we,u[k+1]*=we,u[k+2]*=we,v[k]+=u[k],v[k+1]+=u[k+1],v[k+2]+=u[k+2];var ve=Math.sqrt(Math.pow(v[k]-Z[k],2)+Math.pow(v[k+1]-Z[k+1],2)+Math.pow(v[k+2]-Z[k+2],2));oe[te]=.15+.55*(1-Math.min(ve*.005,1))+Math.sin($*1.5+te*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}N();for(var g=4e3,T=new THREE.BufferGeometry,P=new Float32Array(g*3),S=new Float32Array(g*3),s=0;s<g;s++){P[s*3]=(Math.random()-.5)*2200,P[s*3+1]=(Math.random()-.5)*1800,P[s*3+2]=-200-Math.random()*1800;var c=M[Math.floor(Math.random()*M.length)],d=.2+Math.random()*.3;S[s*3]=c.r*d,S[s*3+1]=c.g*d,S[s*3+2]=c.b*d}T.setAttribute("position",new THREE.BufferAttribute(P,3)),T.setAttribute("color",new THREE.BufferAttribute(S,3));var D=document.createElement("canvas");D.width=D.height=32;var Y=D.getContext("2d"),q=Y.createRadialGradient(16,16,0,16,16,16);q.addColorStop(0,"rgba(255,255,255,1)"),q.addColorStop(.3,"rgba(255,255,255,0.6)"),q.addColorStop(.7,"rgba(255,255,255,0.15)"),q.addColorStop(1,"rgba(255,255,255,0)"),Y.fillStyle=q,Y.fillRect(0,0,32,32);var y=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(D),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),_=new THREE.Points(T,y);t.add(_);var B='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';R(B);var ae=new THREE.Clock,me=!0,Se=new IntersectionObserver(function(J){me=J[0].isIntersecting},{threshold:0});Se.observe(a);var Be=a.querySelectorAll("#logo-coords, #logo-drag-label");Be.forEach(function(J){J.parentElement.style.display="none"});var Xe=null;function Ae(){if(Xe=requestAnimationFrame(Ae),!!me){var J=Math.min(ae.getDelta(),.05),te=ae.elapsedTime;F+=z*J,r&&(r.rotation.y=F,r.position.y=5,r.scale.setScalar(.85));for(var k=0;k<g;k++)P[k*3+1]+=Math.sin(te*.2+k)*.05,P[k*3]+=Math.cos(te*.15+k*.5)*.03;T.attributes.position.needsUpdate=!0,_.rotation.y+=1e-4,_.position.x=-F*35*.35,i.position.x=300+Math.sin(te*.3)*100,i.position.y=350+Math.cos(te*.2)*80,f.intensity=2+Math.sin(te*.5)*.4,l.intensity=.8+Math.sin(te*.4+1)*.3,L(J),e.render(t,n)}}return Ae(),function(){cancelAnimationFrame(Xe),Se.disconnect(),t.traverse(function(J){J.geometry&&J.geometry.dispose(),J.material&&(J.material.map&&J.material.map.dispose(),J.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var qt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Gt(a){let t=a.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return st(qt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?er(t):Vt(t)}),function(){n=!0,e&&e()}}function Wt(a){let t=a.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return st(qt).then(function(){n||(e=Ht(t))}),function(){n=!0,e&&e()}}function er(a){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var i=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});i.setSize(1920,1080),i.setPixelRatio(Math.min(devicePixelRatio,2)),i.setClearColor(0,1),i.toneMapping=THREE.ACESFilmicToneMapping,i.toneMappingExposure=1.4,i.domElement.style.width="100%",i.domElement.style.height="100%",a.appendChild(i.domElement),n.add(new THREE.AmbientLight(2760464,1));var f=new THREE.PointLight(16107370,3,1400);f.position.set(300,350,400),n.add(f);var w=new THREE.PointLight(13931578,2.4,1200);w.position.set(-300,-100,300),n.add(w);var l=new THREE.PointLight(5913114,1.2,900);l.position.set(0,200,-300),n.add(l);var F=new THREE.PointLight(16750916,1.3,600);F.position.set(0,-250,200),n.add(F);var z=0,m=0,b=0,h=0,o=!1,x=0,r=0,v=Math.PI*2/6,u=new THREE.Vector2(9999,9999),Z=new THREE.Raycaster,U=120,H=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),O=new THREE.Vector3,A=!1,$=0,M=0,N=8e4,ee=.03,ne=.95,R=.005,L=12e4,g=null,T,P,S,s,c,d,D=0,Y=!1,q=!1,y=0,_=0,B=null,ae=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function me(){var I=new THREE.BufferGeometry;T=new Float32Array(L*3),P=new Float32Array(L*3),S=new Float32Array(L*3),s=new Float32Array(L*3),c=new Float32Array(L),d=new Float32Array(L),I.setAttribute("position",new THREE.BufferAttribute(T,3)),I.setAttribute("color",new THREE.BufferAttribute(s,3)),I.setAttribute("size",new THREE.BufferAttribute(c,1)),I.setAttribute("alpha",new THREE.BufferAttribute(d,1)),I.setAttribute("velocity",new THREE.BufferAttribute(P,3));var W=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,E=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,V=new THREE.ShaderMaterial({vertexShader:W,fragmentShader:E,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});g=new THREE.Points(I,V),n.add(g)}function Se(I,W){return new Promise(function(E){try{var V=512,ce=document.createElement("canvas");ce.width=ce.height=V;var ie=ce.getContext("2d"),Le=new DOMParser().parseFromString(I,"image/svg+xml"),be=Le.querySelector("svg");if(!be){E([]);return}var Ce=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ie=be.getAttribute("viewBox");if(Ie){var Pe=Ie.split(/[\s,]+/);Ce=+Pe[2],ye=+Pe[3]}var We=Math.min(V/Ce,V/ye)*.9,De=(V-Ce*We)/2,xe=(V-ye*We)/2;ie.save(),ie.translate(De,xe),ie.scale(We,We),ie.fillStyle="white",Le.querySelectorAll("path,rect,circle").forEach(function(Ee){if(Ee.tagName==="path"){var Ke=Ee.getAttribute("d");Ke&&ie.fill(new Path2D(Ke))}else Ee.tagName==="rect"?ie.fillRect(+Ee.getAttribute("x")||0,+Ee.getAttribute("y")||0,+Ee.getAttribute("width")||0,+Ee.getAttribute("height")||0):Ee.tagName==="circle"&&(ie.beginPath(),ie.arc(+Ee.getAttribute("cx")||0,+Ee.getAttribute("cy")||0,+Ee.getAttribute("r")||0,0,Math.PI*2),ie.fill())}),ie.restore();for(var ke=ie.getImageData(0,0,V,V).data,Ve=[],je=0;je<V;je++)for(var Je=0;Je<V;Je++){var et=(je*V+Je)*4;ke[et+3]>30&&Ve.push({x:Je,y:je,a:ke[et+3]/255})}if(!Ve.length){E([]);return}for(var it=[],et=0;et<W;et++){var $e=Ve[Math.floor(Math.random()*Ve.length)];it.push({x:($e.x-V/2)*1.2+(Math.random()-.5)*1.65,y:-($e.y-V/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*$e.a,a:$e.a})}E(it)}catch(Ee){console.error(Ee),E([])}})}function Be(I){D=I.length;for(var W=0;W<D;W++){var E=I[W],V=W*3;T[V]=E.x,T[V+1]=E.y+40,T[V+2]=E.z,P[V]=P[V+1]=P[V+2]=0,S[V]=E.x,S[V+1]=E.y,S[V+2]=E.z;var ce=ae[Math.floor(Math.random()*ae.length)],ie=.7+Math.random()*.4;s[V]=ce.r*ie,s[V+1]=ce.g*ie,s[V+2]=ce.b*ie,c[W]=1.8+Math.random()*3.8,d[W]=.3+(E.a||.7)*.75}g.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(Le){g.geometry.attributes[Le].needsUpdate=!0}),Y=!0,q=!1,y=1}function Xe(I){return Se(I,Math.min(L,N)).then(function(W){W.length&&g&&Be(W)})}function Ae(I){if(!(!Y||!D)){_+=I;for(var W=0;W<D;W++){var E=W*3,V=W*1.37;if(P[E]+=Math.sin(_*.4+V)*.008+Math.sin(_*1.1+V*2.3)*.003,P[E+1]+=Math.cos(_*.35+V*.7)*.008+Math.sin(_*.9+V*1.5)*.004,P[E+2]+=Math.sin(_*.25+V*1.1)*.004,P[E+1]-=ee*.06,P[E]+=Math.sin(_*.25+T[E+1]*.008)*R*.6,P[E+2]+=Math.cos(_*.3+T[E]*.008)*R*.3,A&&ve==="interactive"){var ce=T[E]-H.x,ie=T[E+1]-H.y,Le=T[E+2]-H.z,be=ce*ce+ie*ie+Le*Le,Ce=U*U;if(be<Ce&&be>.25){var ye=Math.sqrt(be),Ie=ye/U,Pe=(W*2654435761&65535)/65535,We=.6+Pe*.8,De=Math.pow(1-Ie,1.5+Pe),xe=1+Math.min(O.length()*.12,1),ke=De*We*1.2*xe,Ve=1/ye;P[E]+=ce*Ve*ke,P[E+1]+=ie*Ve*ke,P[E+2]+=Le*Ve*ke*.2;var je=.02+Pe*.06;P[E]+=O.x*De*je,P[E+1]+=O.y*De*je;var Je=De*.15;P[E]+=(Pe-.5)*Je,P[E+1]+=((W*48271&65535)/65535-.5)*Je}}var et=S[E],it=S[E+1]+40,$e=S[E+2],Ee=et-T[E],Ke=it-T[E+1],ct=$e-T[E+2],Xn=Math.sqrt(Ee*Ee+Ke*Ke+ct*ct),Yn=(W*48271&65535)/65535,$n=.003+Yn*.003,Kn=1+Math.min(Xn*.002,.5),mt=$n*Kn;P[E]+=Ee*mt,P[E+1]+=Ke*mt,P[E+2]+=ct*mt;var Zn=(W*16807&65535)/65535,gt=ne*(.92+Zn*.06);P[E]*=gt,P[E+1]*=gt,P[E+2]*=gt,T[E]+=P[E],T[E+1]+=P[E+1],T[E+2]+=P[E+2];var Qn=Math.sqrt(Math.pow(T[E]-S[E],2)+Math.pow(T[E+1]-S[E+1],2)+Math.pow(T[E+2]-S[E+2],2));d[W]=.15+.55*(1-Math.min(Qn*.005,1))+Math.sin(_*1.5+W*.01)*.05}g.geometry.attributes.position.needsUpdate=!0,g.geometry.attributes.alpha.needsUpdate=!0,g.geometry.attributes.velocity.needsUpdate=!0}}var J=new THREE.Matrix4,te=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),k=new THREE.Vector3;function j(I,W){var E=i.domElement.getBoundingClientRect();if(!(E.width===0||E.height===0)&&(u.set((I-E.left)/E.width*2-1,-((W-E.top)/E.height)*2+1),Z.setFromCamera(u,e),Z.ray.intersectPlane(te,k))){oe.copy(H),g&&H.copy(k).applyMatrix4(J.copy(g.matrixWorld).invert()),O.subVectors(H,oe);var V=O.length();V>15&&O.multiplyScalar(15/V)}}var fe=null;function le(){return fe||(fe=a.closest('[data-flip-element="target"]')||a),fe}function de(I,W){var E=le().getBoundingClientRect();return I>=E.left&&I<=E.right&&W>=E.top&&W<=E.bottom}var he=a.querySelector("#logo-coords"),Re=a.querySelector("#logo-drag-label"),ue=!1;function _e(I){if($=I.clientX,M=I.clientY,t||ve!=="interactive"){A=!1,H.set(9999,9999,0);return}var W=de(I.clientX,I.clientY);if(W){A=!0,j(I.clientX,I.clientY);var E=le().getBoundingClientRect(),V=Math.round(I.clientX-E.left),ce=Math.round(I.clientY-E.top);he&&(he.textContent="X: "+V+"PX    Y: "+ce+"PX")}else A=!1,H.set(9999,9999,0);o&&(z+=(I.clientX-x)*.005,b+=(I.clientY-r)*.005,b=Math.max(-Math.PI/2,Math.min(Math.PI/2,b)),x=I.clientX,r=I.clientY)}function Oe(I){t||ve!=="interactive"||de(I.clientX,I.clientY)&&(o=!0,x=I.clientX,r=I.clientY)}function Me(){t||(o=!1,z=0,b=0,m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2))}window.addEventListener("mousemove",_e),window.addEventListener("mousedown",Oe),window.addEventListener("mouseup",Me);function Ye(){for(var I=4e3,W=new THREE.BufferGeometry,E=new Float32Array(I*3),V=new Float32Array(I*3),ce=0;ce<I;ce++){E[ce*3]=(Math.random()-.5)*2200,E[ce*3+1]=(Math.random()-.5)*1800,E[ce*3+2]=-200-Math.random()*1800;var ie=ae[Math.floor(Math.random()*ae.length)],Le=.2+Math.random()*.3;V[ce*3]=ie.r*Le,V[ce*3+1]=ie.g*Le,V[ce*3+2]=ie.b*Le}W.setAttribute("position",new THREE.BufferAttribute(E,3)),W.setAttribute("color",new THREE.BufferAttribute(V,3));var be=document.createElement("canvas");be.width=be.height=32;var Ce=be.getContext("2d"),ye=Ce.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Ce.fillStyle=ye,Ce.fillRect(0,0,32,32);var Ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Pe=new THREE.Points(W,Ie);return Pe.userData={positions:E,count:I},n.add(Pe),Pe}me();var ge=Ye(),ze='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Xe(ze);var we=new THREE.Clock,ve="spin",G=null;function se(){if(t){ve="spin";return}if(G===null){var I=document.querySelector(".scaling-element-video");G=I&&getComputedStyle(I).display!=="none"}if(!G){ve="spin";return}var W=window._flipProgress||0;W>.85?ve="interactive":W>.7?ve="transition":ve="spin"}var C="spin",K=!0,p=new IntersectionObserver(function(I){K=I[0].isIntersecting},{threshold:0});p.observe(a);var X=!1,Q=null,re=0;function Ue(){X=!0,clearTimeout(Q),Q=setTimeout(function(){X=!1},150);var I=de($,M);I?(A=!0,j($,M)):(A=!1,H.set(9999,9999,0))}window.addEventListener("scroll",Ue,{passive:!0});function Fe(){if(B=requestAnimationFrame(Fe),!!K){re++;var I=Math.min(we.getDelta(),.05),W=we.elapsedTime;se(),C==="interactive"&&ve!=="interactive"&&(A=!1,H.set(9999,9999,0),o=!1);var E=ve==="transition"||ve==="interactive";if(E&&!ue?(ue=!0,Re&&(Re.style.transform="translateY(0)"),he&&(he.style.transform="translateY(0)")):!E&&ue&&(ue=!1,Re&&(Re.style.transform="translateY(100%)"),he&&(he.style.transform="translateY(100%)")),C=ve,A&&!de($,M)&&(A=!1,H.set(9999,9999,0)),ve==="spin")m+=v*I,h+=(0-h)*.05;else if(ve==="transition")m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2),m+=(0-m)*.025,h+=(0-h)*.025;else{var V=z-m;V=V%(Math.PI*2),V>Math.PI&&(V-=Math.PI*2),V<-Math.PI&&(V+=Math.PI*2),m+=V*.12,h+=(b-h)*.12}g&&(g.rotation.x=h,g.rotation.y=m,g.scale.setScalar(1),g.position.y=-15);for(var ce=ge.userData.positions,ie=0;ie<ge.userData.count;ie++)ce[ie*3+1]+=Math.sin(W*.2+ie)*.05,ce[ie*3]+=Math.cos(W*.15+ie*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-m*35*.35,ge.position.y=h*28*.35,f.position.x=300+Math.sin(W*.3)*100,f.position.y=350+Math.cos(W*.2)*80,w.intensity=2+Math.sin(W*.5)*.4,F.intensity=.8+Math.sin(W*.4+1)*.3,!(t&&X&&re%4!==0)&&(Ae(I),i.render(n,e))}}return Fe(),function(){cancelAnimationFrame(B),window.removeEventListener("mousemove",_e),window.removeEventListener("mousedown",Oe),window.removeEventListener("mouseup",Me),window.removeEventListener("scroll",Ue),clearTimeout(Q),p.disconnect(),n.traverse(function(I){I.geometry&&I.geometry.dispose(),I.material&&(I.material.map&&I.material.map.dispose(),I.material.dispose())}),i.dispose(),i.forceContextLoss(),i.domElement.parentNode&&i.domElement.parentNode.removeChild(i.domElement),g=null}}function Nt(a){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Te.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),i=t.querySelector("[data-load-logo]"),f=Array.from(t.querySelectorAll("[data-load-text]")),w=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),l=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(i,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ze},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(w.length&&l.set(w,{autoAlpha:1},0),f.length>=2){let F=new SplitText(f[0],{type:"lines,chars",mask:"lines"}),z=new SplitText(f[1],{type:"lines,chars",mask:"lines"});gsap.set([F.chars,z.chars],{autoAlpha:0,yPercent:125}),gsap.set(f,{autoAlpha:1}),l.to(F.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),l.to(F.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),l.to(z.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),l.to(z.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return l}function Xt(a){let n=[...(a||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(m=>{let b=m.parentElement;b&&(m.style.whiteSpace="nowrap",e.has(b)||e.set(b,[]),e.get(b).push(m))});function i(m){let b=getComputedStyle(m);return m.clientWidth-parseFloat(b.paddingLeft)-parseFloat(b.paddingRight)}function f(m,b){if(b<=0)return;let h=parseFloat(getComputedStyle(m).fontSize)||16;for(let o=0;o<5;o++){let x=m.getBoundingClientRect().width;if(x<=0)break;let r=b/x;if(Math.abs(r-1)<.002)break;h*=r,m.style.fontSize=h+"px"}}function w(){e.forEach((m,b)=>{let h=i(b);m.forEach(o=>f(o,h))})}let l=null;function F(){l||(l=requestAnimationFrame(()=>{l=null,w()}))}let z;return window.ResizeObserver&&(z=new ResizeObserver(F),e.forEach((m,b)=>z.observe(b))),window.addEventListener("resize",F),w(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(w),()=>{l&&cancelAnimationFrame(l),z&&z.disconnect(),window.removeEventListener("resize",F),n.forEach(m=>{m.style.whiteSpace="",m.style.fontSize=""})}}var He={duration:.8,ease:"expo.out"},Yt=.08,tr={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},$t={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function nr(a,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:a,transformOrigin:t}),n}function Kt(a){var t=a.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(i){var f=i.getAttribute("data-marker-direction")||"right",w=i.getAttribute("data-marker-theme")||"#000000",l=i.getAttribute("data-marker-scroll-start")||"top 90%",F=w.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(w).trim()||w,z=$t[f]||$t.right,m=tr[i.getAttribute("data-highlight-marker-reveal")]||null;m&&(F=m.bar);var b=i.closest("[data-cursor-label]"),h={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,x=SplitText.create(i,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){h.timeline&&h.timeline.kill(),h.scrollTrigger&&h.scrollTrigger.kill(),i.querySelectorAll(".highlight-marker-bar").forEach(function(A){A.remove()}),h.listeners.forEach(function(A){A.el.removeEventListener(A.type,A.fn)}),h.listeners=[],o=!1;var v=r.lines,u=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(v.forEach(function(A,$){gsap.set(A,{position:"relative",overflow:"hidden"});var M=nr(F,z.origin);gsap.set(M,{[z.prop]:0}),A.appendChild(M),m&&(gsap.set(A,{zIndex:0,color:m.text}),gsap.set(M,{zIndex:-1})),u.to(M,{[z.prop]:1,duration:He.duration,ease:He.ease},$*Yt);var N=function(){o&&(gsap.to(M,{[z.prop]:0,duration:He.duration,ease:He.ease}),m&&gsap.to(A,{color:m.hoverText,duration:He.duration,ease:He.ease}))},ee=function(){o&&(gsap.to(M,{[z.prop]:1,duration:He.duration,ease:He.ease}),m&&gsap.to(A,{color:m.text,duration:He.duration,ease:He.ease}))};!m&&e&&(A.addEventListener("mouseenter",N),A.addEventListener("mouseleave",ee),h.listeners.push({el:A,type:"mouseenter",fn:N},{el:A,type:"mouseleave",fn:ee}))}),h.timeline=u,b){u.kill();var Z=i.querySelectorAll(".highlight-marker-bar"),U=function(A){gsap.to(Z,{[z.prop]:A,duration:He.duration,ease:He.ease,stagger:Yt,overwrite:!0})},H=function(){U(1)},oe=function(){U(0)};b.addEventListener("cursorlabel:enter",H),b.addEventListener("cursorlabel:leave",oe),h.listeners.push({el:b,type:"cursorlabel:enter",fn:H},{el:b,type:"cursorlabel:leave",fn:oe});return}var O=ScrollTrigger.create({trigger:i,start:l,once:!0,onEnter:function(){u.play()}});h.scrollTrigger=O}});h.split=x,n.push(h)}),function(){n.forEach(function(i){i.timeline&&i.timeline.kill(),i.scrollTrigger&&i.scrollTrigger.kill(),i.listeners.forEach(function(f){f.el.removeEventListener(f.type,f.fn)}),i.split&&i.split.revert()})}}function Zt(a){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,i=a.querySelector("[data-cursor-marquee-status]");if(!i)return;let f=i.querySelectorAll("[data-cursor-marquee-text-target]"),w=a.querySelectorAll("[data-cursor-marquee-text]");if(!w.length)return;let l=gsap.quickTo(i,"x",{duration:n,ease:"power3"}),F=gsap.quickTo(i,"y",{duration:n,ease:"power3"}),z=null,m=b=>{l(b.clientX),F(b.clientY)};return window.addEventListener("pointermove",m,{passive:!0}),w.forEach(b=>{b.addEventListener("mouseenter",()=>{z&&clearTimeout(z);let h=b.getAttribute("data-cursor-marquee-text")||"",o=(h.length||1)/e;f.forEach(x=>{x.textContent=h,x.style.animationPlayState="running",x.style.animationDuration=o+"s"}),i.setAttribute("data-cursor-marquee-status","active")}),b.addEventListener("mouseleave",()=>{i.setAttribute("data-cursor-marquee-status","not-active"),z&&clearTimeout(z),z=setTimeout(()=>{f.forEach(h=>{h.style.animationPlayState="paused"})},t*1e3)})}),i.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",m),clearTimeout(z),gsap.killTweensOf(i)}}function Qt(a){a.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function jt(a){let t=a.querySelectorAll("[data-flip-element='wrapper']"),n=a.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function i(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(l){window._flipProgress=l.progress}}}),t.forEach(function(l,F){let z=F+1;if(z<t.length){let m=t[z],b=m.getBoundingClientRect(),h=l.getBoundingClientRect(),o=b.top+window.pageYOffset+m.offsetHeight/2,x=h.top+window.pageYOffset+l.offsetHeight/2,r=o-x;e.add(Flip.fit(n,m,{duration:r,ease:"none"}))}})}i();let f,w=function(){clearTimeout(f),f=setTimeout(function(){i()},100)};return window.addEventListener("resize",w),function(){clearTimeout(f),window.removeEventListener("resize",w),e&&e.kill()}}var rr="150%";function or(a){let t=[];return a.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let i of e){if(i===" "){n.append(" ");continue}let f=document.createElementNS("http://www.w3.org/2000/svg","tspan");f.textContent=i,n.append(f),t.push(f)}}),t}var Tt=new WeakMap;function Jt(a){let t=a.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(f){return Array.from(f.querySelectorAll("textPath")).map(function(w){return w.textContent})}),i=n.map(or);return i.forEach(function(f){gsap.set(f,{fillOpacity:0})}),Tt.set(a,{wrap:t,lines:n,lineChars:i}),function(){Tt.delete(a),n.forEach(function(f,w){f.querySelectorAll("textPath").forEach(function(l,F){l.textContent=e[w][F]})})}}function en(a){let t=Tt.get(a);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+rr,pin:!0,scrub:!0}});return t.lines.forEach(function(e,i){let f=t.lineChars[i];f.length&&n.fromTo(f,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/f.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function Pt(a){var t=[];function n(o,x,r,v){o.addEventListener(x,r,v),t.push(function(){o.removeEventListener(x,r,v)})}a.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var x=o.getAttribute("data-player-src");if(!x)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(G){}try{r.removeAttribute("src"),r.load()}catch(G){}function v(G){o.getAttribute("data-player-status")!==G&&o.setAttribute("data-player-status",G)}function u(G){r.muted=!!G,o.setAttribute("data-player-muted",r.muted?"true":"false")}function Z(G){o.setAttribute("data-player-fullscreen",G?"true":"false")}function U(G){o.setAttribute("data-player-activated",G?"true":"false")}o.hasAttribute("data-player-activated")||U(!1);var H=o.querySelector("[data-player-timeline]"),oe=o.querySelector("[data-player-progress]"),O=o.querySelector("[data-player-buffered]"),A=o.querySelector("[data-player-timeline-handle]"),$=o.querySelectorAll("[data-player-time-duration]"),M=o.querySelectorAll("[data-player-time-progress]"),N=o.getAttribute("data-player-update-size"),ee=o.getAttribute("data-player-lazy"),ne=ee==="true",R=ee==="meta",L=o.getAttribute("data-player-autoplay")==="true",g=o.getAttribute("data-player-muted")==="true",T=!1;L?(u(!0),r.loop=!0):u(g),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),L&&(r.autoplay=!1);var P=!!r.canPlayType("application/vnd.apple.mpegurl"),S=P&&"ManagedMediaSource"in window,s=!!(window.Hls&&Hls.isSupported())&&!S;if(N==="true"&&!R&&!ne){var c=r.preload;r.preload="metadata";var d=function(){z(o,N,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",d),r.preload=c||""};n(r,"loadedmetadata",d,{once:!0}),r.src=x}function D(){h(x,s).then(function(G){G.width&&G.height&&z(o,N,G.width,G.height),$.length&&isFinite(G.duration)&&G.duration>0&&f($,i(G.duration)),F(o,T)})}var Y=!1,q=!1,y="";function _(){if(!Y){if(Y=!0,o._hls){try{o._hls.destroy()}catch(se){}o._hls=null}if(S)r.preload=ne||R?"auto":r.preload,r.src=x,n(r,"loadedmetadata",function(){F(o,T),N==="true"&&z(o,N,r.videoWidth,r.videoHeight),$.length&&f($,i(r.duration))},{once:!0});else if(s){var G=new Hls({maxBufferLength:10});G.attachMedia(r),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(x)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(F(o,T),N==="true"){var se=G.levels||[],C=w(se);C&&C.width&&C.height&&z(o,N,C.width,C.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(se,C){C&&C.details&&isFinite(C.details.totalduration)&&$.length&&f($,i(C.details.totalduration))}),o._hls=G}else r.src=x}}R?(D(),r.preload="none"):ne?r.preload="none":_();function B(){q=!0,r.paused||r.ended?((ne||R)&&!Y&&_(),T=!0,y="",v("loading"),l(r)):(y="manual",r.pause())}function ae(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function me(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function Be(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Xe(){me()||r.webkitDisplayingFullscreen?Be():Se()}n(document,"fullscreenchange",function(){Z(me())}),n(document,"webkitfullscreenchange",function(){Z(me())}),n(r,"webkitbeginfullscreen",function(){Z(!0)}),n(r,"webkitendfullscreen",function(){Z(!1)}),n(o,"click",function(G){var se=G.target.closest("[data-player-control]");if(!(!se||!o.contains(se))){var C=se.getAttribute("data-player-control");C==="play"||C==="pause"||C==="playpause"?B():C==="mute"?ae():C==="fullscreen"&&Xe()}});function Ae(){$.length&&f($,i(r.duration)),M.length&&f(M,i(r.currentTime))}n(r,"timeupdate",Ae),n(r,"loadedmetadata",function(){Ae(),m(o,N,r)}),n(r,"loadeddata",function(){m(o,N,r)}),n(r,"playing",function(){m(o,N,r)}),n(r,"durationchange",Ae);var J;function te(){if(r.duration){var G=r.currentTime/r.duration*100;oe&&(oe.style.transform="translateX("+(-100+G)+"%)"),A&&(A.style.left=G+"%")}}function k(){te(),!r.paused&&!r.ended&&(J=requestAnimationFrame(k))}function j(){if(!(!O||!r.duration||!r.buffered.length)){var G=r.buffered.end(r.buffered.length-1),se=G/r.duration*100;O.style.transform="translateX("+(-100+se)+"%)"}}if(n(r,"progress",j),n(r,"loadedmetadata",j),n(r,"durationchange",j),n(r,"play",function(){U(!0),cancelAnimationFrame(J),k(),v("playing")}),n(r,"playing",function(){T=!1,v("playing")}),n(r,"pause",function(){T=!1,cancelAnimationFrame(J),te(),v("paused")}),n(r,"waiting",function(){v("loading")}),n(r,"canplay",function(){F(o,T)}),n(r,"ended",function(){T=!1,cancelAnimationFrame(J),te(),v("paused"),U(!1)}),H){let G=function(Q){ue||(ue=H.getBoundingClientRect());var re=(Q-ue.left)/ue.width;return re<0&&(re=0),re>1&&(re=1),re},se=function(Q){if(r.duration){var re=Q*100;oe&&(oe.style.transform="translateX("+(-100+re)+"%)"),A&&(A.style.left=re+"%"),M.length&&f(M,i(Q*r.duration))}},C=function(Q){r.duration&&(Q-he<Re||(he=Q,r.currentTime=de))},K=function(Q){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),o.setAttribute("data-timeline-drag","true"),ue=H.getBoundingClientRect();var re=G(Q.clientX);de=re*r.duration,se(re),C(performance.now()),H.setPointerCapture&&H.setPointerCapture(Q.pointerId),window.addEventListener("pointermove",p,{passive:!1}),window.addEventListener("pointerup",X,{passive:!0}),Q.preventDefault()}},p=function(Q){if(fe){var re=G(Q.clientX);de=re*r.duration,se(re),C(performance.now()),Q.preventDefault()}},X=function(){fe&&(fe=!1,o.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=de,le?l(r):(te(),Ae()),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",X))};var fe=!1,le=!1,de=0,he=0,Re=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(H,"pointerdown",K,{passive:!1}),A&&n(A,"pointerdown",K,{passive:!1})}var _e,Oe=3e3;function Me(G){o.getAttribute("data-player-hover")!==G&&o.setAttribute("data-player-hover",G)}function Ye(){clearTimeout(_e),_e=setTimeout(function(){Me("idle")},Oe)}function ge(){Me("active"),Ye()}n(o,"pointerdown",ge),n(document,"fullscreenchange",ge),n(document,"webkitfullscreenchange",ge);var ze=!1;function we(G){var se=o.getBoundingClientRect();G.clientX>=se.left&&G.clientX<=se.right&&G.clientY>=se.top&&G.clientY<=se.bottom&&ge()}if(n(o,"pointerenter",function(){ge(),ze||(ze=!0,n(window,"pointermove",we,{passive:!0}))}),n(o,"pointerleave",function(){Me("idle"),clearTimeout(_e),ze&&(ze=!1,window.removeEventListener("pointermove",we))}),L){var ve=new IntersectionObserver(function(G){G.forEach(function(se){var C=se.isIntersecting&&se.intersectionRatio>0;C?((ne||R)&&!Y&&_(),r.paused?(y="",T=!0,v("loading"),l(r)):v("playing")):!r.paused&&!r.ended&&(y="io",r.pause(),v("paused"))})},{threshold:.1});ve.observe(o)}t.push(function(){if(cancelAnimationFrame(J),clearTimeout(_e),ve&&ve.disconnect(),o._hls){try{o._hls.destroy()}catch(G){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(G){}})});function e(o){return(o<10?"0":"")+o}function i(o){if(!isFinite(o)||o<0)return"00:00";var x=Math.floor(o),r=Math.floor(x/3600),v=Math.floor(x%3600/60),u=x%60;return r>0?r+":"+e(v)+":"+e(u):e(v)+":"+e(u)}function f(o,x){o.forEach(function(r){r.textContent=x})}function w(o){return!o||!o.length?null:o.reduce(function(x,r){return(r.width||0)>(x.width||0)?r:x},o[0])}function l(o){var x=o.play();x&&typeof x.then=="function"&&x.catch(function(){})}function F(o,x){!x&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function z(o,x,r,v){if(!(x!=="true"||!r||!v)){var u=o.querySelector("[data-player-before]");u&&(u.style.paddingTop=v/r*100+"%")}}function m(o,x,r){if(x==="true"){var v=o.querySelector("[data-player-before]");if(v){var u=v.style.paddingTop&&v.style.paddingTop!=="0%";!u&&r.videoWidth&&r.videoHeight&&z(o,x,r.videoWidth,r.videoHeight)}}}function b(o,x){try{return new URL(x,o).toString()}catch(r){return x}}function h(o,x){return new Promise(function(r){if(x&&window.Hls&&Hls.isSupported())try{var v=new Hls,u={width:0,height:0,duration:NaN},Z=!1,U=!1;v.on(Hls.Events.MANIFEST_PARSED,function(O,A){var $=A&&A.levels||v.levels||[],M=w($);M&&M.width&&M.height&&(u.width=M.width,u.height=M.height,Z=!0)}),v.on(Hls.Events.LEVEL_LOADED,function(O,A){A&&A.details&&isFinite(A.details.totalduration)&&(u.duration=A.details.totalduration,U=!0)}),v.on(Hls.Events.ERROR,function(){try{v.destroy()}catch(O){}r(u)}),v.on(Hls.Events.LEVEL_LOADED,function(){try{v.destroy()}catch(O){}r(u)}),v.loadSource(o);return}catch(O){r({width:0,height:0,duration:NaN});return}function H(O){for(var A=O.split(/\r?\n/),$=0,M=0,N=null,ee=null,ne=0;ne<A.length;ne++){var R=A[ne];if(R.indexOf("#EXT-X-STREAM-INF:")===0)ee=R;else if(ee&&R&&R[0]!=="#"){N||(N=R.trim());var L=/RESOLUTION=(\d+)x(\d+)/.exec(ee);if(L){var g=parseInt(L[1],10),T=parseInt(L[2],10);g>$&&($=g,M=T)}ee=null}}return{bestW:$,bestH:M,media:N}}function oe(O){for(var A=0,$=/#EXTINF:([\d.]+)/g,M;M=$.exec(O);)A+=parseFloat(M[1]);return A}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(O){if(!O.ok)throw new Error("master");return O.text()}).then(function(O){var A=H(O);if(!A.media){r({width:A.bestW||0,height:A.bestH||0,duration:NaN});return}var $=b(o,A.media);return fetch($,{credentials:"omit",cache:"no-store"}).then(function(M){if(!M.ok)throw new Error("media");return M.text()}).then(function(M){r({width:A.bestW||0,height:A.bestH||0,duration:oe(M)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var ir="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",ar="(min-width: 768px)";function nn(a){if(!a.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=Pt(a),n=tn(a);else{let e=!1;return st(ir).catch(function(){}).then(function(){e||(t=Pt(a),n=tn(a))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function tn(a){if(!a.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let i="",f=!1,w,l,F,z,m,b,h="",o="",x="",r=(c,d=a)=>d.querySelector(c),v=c=>r(`[data-mini-showreel-lightbox="${c}"]`),u=c=>r(`[data-mini-showreel-player="${c}"]`),Z=c=>c.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",c)||c,U=(c,d)=>{let D=c.width,Y=D/d;return Y>c.height&&(Y=c.height,D=Y*d),{left:c.left+(c.width-D)/2,top:c.top+(c.height-Y)/2,width:D,height:Y}},H=c=>{let d=Z(c).getBoundingClientRect(),D=c.getBoundingClientRect(),Y=D.width>0&&D.height>0?D.width/D.height:16/9;return U(d,Y)},oe=(c,d)=>gsap.set(c,{position:"fixed",left:d.left,top:d.top,width:d.width,height:d.height,margin:0,x:0,y:0});function O(c){i&&a.querySelectorAll(`[data-mini-showreel-lightbox="${i}"], [data-mini-showreel-player="${i}"]`).forEach(d=>d.setAttribute("data-mini-showreel-status",c))}function A(){o=(w==null?void 0:w.style.zIndex)||"",x=(l==null?void 0:l.style.zIndex)||"",w&&(w.style.zIndex=String(e)),l&&(l.style.zIndex=String(e))}function $(){w&&(w.style.zIndex=o),l&&(l.style.zIndex=x)}function M(c){let d=u(c);if(!d)return;let D=d.querySelector("[data-bunny-player-init]"),Y=d.querySelector("video");if(Y){if(D){let q=D.querySelector('[data-player-control="play"], [data-player-control="playpause"]');q&&(Y.paused||Y.ended)&&q.click();return}try{Y.play()}catch(q){}}}function N(c){let d=u(c);if(!d)return;let D=d.querySelector("[data-bunny-player-init]"),Y=d.querySelector("video");Y&&(Y.muted=!0,D&&D.setAttribute("data-player-muted","true"),(Y.paused||Y.ended)&&M(c))}function ee(){$(),i="",f=!1,w=l=F=z=m=b=null,h="",o="",x="",Te.start()}function ne(c){if(!c||f||(w=v(c),l=u(c),!w||!l)||(F=r("[data-mini-showreel-target]",w),!F))return;i=c,f=!0,Te.stop(),l.dataset.flipId=i,h=l.style.cssText||"",z=l.parentElement,m=l.nextSibling,A(),O("active"),M(i);let d=Flip.getState(l),D=H(F);w.appendChild(l),oe(l,D),b=Flip.from(d,{duration:t,ease:n,absolute:!0,scale:!1})}function R(c){!f||!l||c&&c!==i||(N(i),O("not-active"),b&&b.kill(),b=Flip.fit(l,z,{duration:t,ease:n,scale:!1,onComplete:()=>{z.insertBefore(l,m),l.style.cssText=h,ee()}}))}function L(){!f||!l||(b&&b.kill(),N(i),O("not-active"),z.insertBefore(l,m),l.style.cssText=h,ee())}function g(){!f||!l||!F||oe(l,H(F))}function T(c){let d=c.target.closest("[data-mini-showreel-open]");d&&(c.preventDefault(),ne(d.getAttribute("data-mini-showreel-open")||""))}function P(c){let d=c.target.closest("[data-mini-showreel-close]");d&&(c.preventDefault(),R(d.getAttribute("data-mini-showreel-close")||""))}function S(c){c.key==="Escape"&&R("")}let s=gsap.matchMedia();return s.add(ar,function(){return a.addEventListener("click",T),document.addEventListener("click",P),window.addEventListener("keydown",S),window.addEventListener("resize",g),function(){L(),a.removeEventListener("click",T),document.removeEventListener("click",P),window.removeEventListener("keydown",S),window.removeEventListener("resize",g)}}),function(){s.revert(),L()}}var at={x:0,y:0,known:!1};window.addEventListener("pointermove",a=>{at.x=a.clientX,at.y=a.clientY,at.known=!0},{passive:!0});function qe(a){let t=e=>a(e.clientX,e.clientY),n=()=>{at.known&&a(at.x,at.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var Ge=1920,Ne=1080,Et="#E5E5E5",St="#000000",rn="http://www.w3.org/2000/svg";function on(a){let t=a.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(rn,"svg");n.setAttribute("viewBox",`0 0 ${Ge} ${Ne}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(s,c)=>{let d=document.createElementNS(rn,s);return d.setAttribute("fill",c),n.appendChild(d),d},i=e("polygon",Et),f=e("polygon",St),w=e("rect",St),l=e("rect",Et),F=e("rect",Et),z=e("rect",St);[w,l,F,z].forEach(s=>s.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let m=(s,c,d,D,Y)=>{s.setAttribute("x",c),s.setAttribute("y",d),s.setAttribute("width",Math.max(0,D)),s.setAttribute("height",Math.max(0,Y))},b={x:Ge*(2/3),y:Ne*(1/3)},h=.1,o=.9,x={x:b.x,y:b.y},r={x:b.x,y:b.y},v={x:b.x,y:b.y},u=!1,Z=()=>gsap.to(v,{x:gsap.utils.random(Ge*.327,Ge*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:Z}),U=()=>gsap.to(v,{y:gsap.utils.random(Ne*.193,Ne*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:U});Z(),U();function H(){let s=gsap.utils.clamp(Ge*h,Ge*o,x.x),c=Ge-s,d=gsap.utils.clamp(Ne*h,Ne*o,x.y),D=Ne-d;i.setAttribute("points",`0,${d} ${s},0 ${Ge},${d} ${Ge},${Ne} 0,${Ne}`),f.setAttribute("points",`${Ge},${d} ${s},0 ${s},${d}`),m(w,0,d,s,D);let Y=s*.25,q=D*(2/3);m(l,s/2-Y/2,d+D-q,Y,q),m(F,s,d,c,D);let y=c*.5,_=D/3;m(z,s+c/2-y/2,d+D/2-_/2,y,_)}let oe=.1,O=.03;function A(){let c=1-Math.pow(1-(u?oe:O),gsap.ticker.deltaRatio(60)),d=u?r:v;x.x+=(d.x-x.x)*c,x.y+=(d.y-x.y)*c,H()}let $=(s,c)=>{let d=t.getBoundingClientRect();!d.width||!d.height||(r.x=gsap.utils.clamp(0,Ge,(s-d.left)/d.width*Ge),r.y=gsap.utils.clamp(0,Ne,(c-d.top)/d.height*Ne),u=!0)},M=()=>{u=!1},N=(s,c)=>{let d=t.getBoundingClientRect();s>=d.left&&s<=d.right&&c>=d.top&&c<=d.bottom?$(s,c):M()},ne=window.matchMedia("(hover: hover) and (pointer: fine)").matches?qe(N):null,R=s=>{let c=s.touches[0];c&&$(c.clientX,c.clientY)},L={passive:!0};t.addEventListener("touchstart",R,L),t.addEventListener("touchmove",R,L),t.addEventListener("touchend",M,L),t.addEventListener("touchcancel",M,L);let g=!1,T=()=>{g||(g=!0,gsap.ticker.add(A))},P=()=>{g&&(g=!1,gsap.ticker.remove(A))},S=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:s=>s.isActive?T():P()});return H(),T(),function(){P(),S.kill(),gsap.killTweensOf(v),ne&&ne(),t.removeEventListener("touchstart",R,L),t.removeEventListener("touchmove",R,L),t.removeEventListener("touchend",M,L),t.removeEventListener("touchcancel",M,L),n.remove()}}var cr="http://www.w3.org/2000/svg";var sr=4.1343749999999995,lr="#AFAFAF",ur="#000000",vr=5e3,dr=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],fr=0,an=(a,t)=>{if(a<0||t<0||a>=20||t>=20)return!1;let n=20/2;return Math.hypot(a+.5-n,t+.5-n)<=n},Qe=(a,t)=>{let n=document.createElementNS(cr,a);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function cn(a){let t=a.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let i="pulse-dots-liquid-"+ ++fr;e.setAttribute("data-pulse-dots-paused","");let f=Qe("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});f.style.setProperty("--pd-step",`${31.5}px`);let w=Qe("filter",{id:i,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});w.append(Qe("feGaussianBlur",{in:"SourceGraphic",stdDeviation:sr.toFixed(2)}),Qe("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let l=Qe("defs",{});l.appendChild(w);let F=Qe("rect",{width:1e3,height:1e3,fill:lr}),z=Qe("g",{filter:`url(#${i})`,fill:ur});for(let b=0;b<20;b++)for(let h=0;h<20;h++){if(!an(h,b))continue;let o=dr.filter(Z=>an(h+Z.dx,b+Z.dy)),x=o[Math.floor(Math.random()*o.length)],r=185+h*31.5+27.5625/2,v=185+b*31.5+27.5625/2,u=Qe("g",{transform:`rotate(${x.deg} ${r} ${v})`});u.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*vr)}ms`),u.append(Qe("circle",{class:"pulse-dots__dot is--first",cx:r,cy:v,r:27.5625/2}),Qe("circle",{class:"pulse-dots__dot is--last",cx:r,cy:v,r:27.5625/2})),z.appendChild(u)}f.append(l,F,z),e.appendChild(f);let m=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:b=>e.toggleAttribute("data-pulse-dots-paused",!b.isActive)});e.toggleAttribute("data-pulse-dots-paused",!m.isActive),n.push(()=>{m.kill(),e.removeAttribute("data-pulse-dots-paused"),f.remove()})}),()=>n.forEach(e=>e())}var dt=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,sn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,ln=`#version 300 es
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
}`,un=[`#version 300 es
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
}`],vn=`#version 300 es
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
}`,dn=`#version 300 es
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
}fragColor = color;}`,fn=`#version 300 es
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
}`,pn=[`#version 300 es
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
fragColor = color;}`],mn=[`#version 300 es
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
}`],gn=`#version 300 es
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
}`;var Ct=60,mr=1.5,gr=1,hn=150,wt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function xn(a){let t=a.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let i=!!e.getExtension("EXT_color_buffer_float");function f(S,s){let c=e.createShader(S);return e.shaderSource(c,s),e.compileShader(c),e.getShaderParameter(c,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(c)),c}let w=[];function l(S,s=sn){let c=e.createProgram(),d=f(e.VERTEX_SHADER,s),D=f(e.FRAGMENT_SHADER,S);e.attachShader(c,d),e.attachShader(c,D),e.bindAttribLocation(c,0,"aVertexPosition"),e.bindAttribLocation(c,1,"aTextureCoord"),e.linkProgram(c),e.deleteShader(d),e.deleteShader(D),e.getProgramParameter(c,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(c));let Y={},q=e.getProgramParameter(c,e.ACTIVE_UNIFORMS);for(let _=0;_<q;_++){let B=e.getActiveUniform(c,_);Y[B.name]=e.getUniformLocation(c,B.name)}let y={p:c,loc:Y};return w.push(y),y}let F={bg:l(ln,dt),shapes:un.map(S=>l(S,vn)),trailSim:l(fn,dt),trail:l(dn),blur:pn.map(S=>l(S)),bloom:mn.map(S=>l(S)),gmap:l(gn,dt)},z=e.createVertexArray();e.bindVertexArray(z);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let b=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let h=[];function o(S,s,c=!1){let d=e.createTexture();e.bindTexture(e.TEXTURE_2D,d),c&&i?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,S,s,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,S,s,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let D=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,d,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let Y={tex:d,fb:D,w:S,h:s};return h.push(Y),Y}function x(){h.forEach(S=>{e.deleteTexture(S.tex),e.deleteFramebuffer(S.fb)}),h.length=0}function r(S,s,c,d){e.useProgram(S.p);let D=s?s.w:n.width,Y=s?s.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,s?s.fb:null),e.viewport(0,0,D,Y);let q=S.loc;q.uMVMatrix&&e.uniformMatrix4fv(q.uMVMatrix,!1,wt),q.uPMatrix&&e.uniformMatrix4fv(q.uPMatrix,!1,wt),q.uTextureMatrix&&e.uniformMatrix4fv(q.uTextureMatrix,!1,wt),q.uResolution&&e.uniform2f(q.uResolution,D,Y),q.uArtboardResolution&&e.uniform2f(q.uArtboardResolution,1920,1920),q.uAspectRatio&&e.uniform1f(q.uAspectRatio,1),q.uMousePos&&e.uniform2f(q.uMousePos,v.x,v.y),q.uIsMask&&e.uniform1i(q.uIsMask,0),q.uParentTrackMouse&&e.uniform1f(q.uParentTrackMouse,0);let y=0;Object.keys(c).forEach(_=>{q[_]&&(e.activeTexture(e.TEXTURE0+y),e.bindTexture(e.TEXTURE_2D,c[_].tex),e.uniform1i(q[_],y),y++)}),Object.keys(d||{}).forEach(_=>{if(!q[_])return;let B=d[_];Array.isArray(B)?e.uniform2f(q[_],B[0],B[1]):e.uniform1f(q[_],B)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let v={x:.5,y:.5},u={x:.5,y:.5},Z=0,U=null,H=0;function oe(){x();let S=Math.min(mr,window.devicePixelRatio||1),s=Math.max(1,Math.round(t.clientWidth*S)),c=Math.max(1,Math.round(t.clientHeight*S));n.width=s,n.height=c;let d=q=>[Math.max(1,Math.round(s*q)),Math.max(1,Math.round(c*q))];U={a:o(s,c),b:o(s,c),pp:[o(...d(.5),!0),o(...d(.5),!0)],trail:o(s,c),blur1:o(...d(1)),blur2:o(...d(1)),blur3:o(...d(1)),blur4:o(...d(1)),bth:o(...d(1)),bd1:o(...d(1)),bd2:o(...d(1)),bs1:o(...d(1)),bs2:o(...d(1)),bloom:o(s,c)},r(F.bg,U.a,{});let D=U.a,Y=U.b;F.shapes.forEach(q=>{r(q,Y,{uBgTexture:D});let y=D;D=Y,Y=y}),U.base=D,H=0}function O(){if(!U)return;let S=U.pp[H],s=U.pp[1-H];r(F.trailSim,s,{uPingPongTexture:S},{uTime:Z,uPreviousMousePos:[u.x,u.y]}),H=1-H,r(F.trail,U.trail,{uTexture:U.base,uPingPongTexture:s}),r(F.blur[0],U.blur1,{uTexture:U.trail}),r(F.blur[1],U.blur2,{uTexture:U.blur1}),r(F.blur[2],U.blur3,{uTexture:U.blur2}),r(F.blur[3],U.blur4,{uTexture:U.blur3});let c=U.blur4;r(F.bloom[0],U.bth,{uTexture:c}),r(F.bloom[1],U.bd1,{uTexture:U.bth}),r(F.bloom[2],U.bd2,{uTexture:U.bd1,uBgTexture:c}),r(F.bloom[3],U.bs1,{uTexture:U.bd2}),r(F.bloom[4],U.bs2,{uTexture:U.bs1,uBgTexture:c}),r(F.bloom[5],U.bloom,{uTexture:U.bs2,uBgTexture:c}),r(F.gmap,null,{uTexture:U.bloom},{uTime:0}),u.x=v.x,u.y=v.y}let A=hn,M=qe((S,s)=>{let c=n.getBoundingClientRect();!c.width||!c.height||(v.x=(S-c.left)/c.width,v.y=1-(s-c.top)/c.height,A=0,L())}),N=null,ee=0,ne=!1;function R(S){if(!ne||A>=hn){N=null;return}if(N=requestAnimationFrame(R),S-ee<1e3/Ct-1)return;let s=ee?Math.min(S-ee,100):1e3/Ct;ee=S,Z+=gr*(s/(1e3/Ct)),O(),A++}function L(){ne&&!N&&(u.x=v.x,u.y=v.y,ee=0,N=requestAnimationFrame(R))}let g=new IntersectionObserver(([S])=>{ne=S.isIntersecting,ne?L():N&&(cancelAnimationFrame(N),N=null)});g.observe(t);let T=null,P=new ResizeObserver(()=>{clearTimeout(T),T=setTimeout(()=>{oe(),O()},60)});return P.observe(t),oe(),O(),function(){N&&cancelAnimationFrame(N),N=null,clearTimeout(T),g.disconnect(),P.disconnect(),M(),x(),w.forEach(c=>e.deleteProgram(c.p)),e.deleteBuffer(m),e.deleteBuffer(b),e.deleteVertexArray(z);let s=e.getExtension("WEBGL_lose_context");s&&s.loseContext(),n.remove()}}var bn=`#version 300 es
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
in vec2 aTextureCoord;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = vec4(aVertexPosition, 1.0);
vTextureCoord = (vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Tn=`#version 300 es
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
}`,Pn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;out vec4 fragColor;
in vec2 vTextureCoord;uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uMousePos;const int NUM_STEPS = 32;
const float PI = 3.141592;
const float EPSILON = 1e-3;
#define EPSILON_NRM (0.1 / uResolution.x)
const int ITER_GEOMETRY = 3;
const int ITER_FRAGMENT = 5;
const float SEA_HEIGHT = 0.6;
const float SEA_CHOPPY = 4.0;
const float SEA_SPEED = 0.8;
const float SEA_FREQ = 0.16;
const vec3 SEA_BASE = vec3(0.0, 0.09, 0.18);
const vec3 SEA_WATER_COLOR = vec3(0.8, 0.9, 0.6) * 0.6;
#define SEA_TIME (1.0 + uTime * SEA_SPEED)

const mat2 octave_m = mat2(1.6, 1.2, -1.2, 1.6);mat3 fromEuler(vec3 ang) {
vec2 a1 = vec2(sin(ang.x), cos(ang.x));
vec2 a2 = vec2(sin(ang.y), cos(ang.y));
vec2 a3 = vec2(sin(ang.z), cos(ang.z));
return mat3(
a1.y * a3.y + a1.x * a2.x * a3.x, a1.y * a2.x * a3.x + a3.y * a1.x, -a2.y * a3.x,
-a2.y * a1.x, a1.y * a2.y, a2.x,
a3.y * a1.x * a2.x + a1.y * a3.x, a1.x * a3.x - a1.y * a3.y * a2.x, a2.y * a3.y
);
}float hash(vec2 p) {
float h = dot(p, vec2(127.1, 311.7));
return fract(sin(h) * 43758.5453123);
}float noise(vec2 p) {
vec2 i = floor(p);
vec2 f = fract(p);
vec2 u = f * f * (3.0 - 2.0 * f);
return -1.0 + 2.0 * mix(
mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
u.y
);
}float diffuse(vec3 n, vec3 l, float p) {
return pow(dot(n, l) * 0.4 + 0.6, p);
}float specular(vec3 n, vec3 l, vec3 e, float s) {
float nrm = (s + 8.0) / (PI * 8.0);
return pow(max(dot(reflect(e, n), l), 0.0), s) * nrm;
}vec3 getSkyColor(vec3 e) {
e.y = (max(e.y, 0.0) * 0.8 + 0.2) * 0.8;
return vec3(pow(1.0 - e.y, 2.0), 1.0 - e.y, 0.6 + (1.0 - e.y) * 0.4) * 1.1;
}float sea_octave(vec2 uv, float choppy) {
uv += noise(uv);
vec2 wv = 1.0 - abs(sin(uv));
vec2 swv = abs(cos(uv));
wv = mix(wv, swv, wv);
return pow(1.0 - pow(wv.x * wv.y, 0.65), choppy);
}float map(vec3 p) {
float freq = SEA_FREQ;
float amp = SEA_HEIGHT;
float choppy = SEA_CHOPPY;
vec2 uv = p.xz;
uv.x *= 0.75;float d, h = 0.0;
for (int i = 0; i < ITER_GEOMETRY; i++) {
d = sea_octave((uv + SEA_TIME) * freq, choppy);
d += sea_octave((uv - SEA_TIME) * freq, choppy);
h += d * amp;
uv *= octave_m;
freq *= 1.9;
amp *= 0.22;
choppy = mix(choppy, 1.0, 0.2);
}
return p.y - h;
}float map_detailed(vec3 p) {
float freq = SEA_FREQ;
float amp = SEA_HEIGHT;
float choppy = SEA_CHOPPY;
vec2 uv = p.xz;
uv.x *= 0.75;float d, h = 0.0;
for (int i = 0; i < ITER_FRAGMENT; i++) {
d = sea_octave((uv + SEA_TIME) * freq, choppy);
d += sea_octave((uv - SEA_TIME) * freq, choppy);
h += d * amp;
uv *= octave_m;
freq *= 1.9;
amp *= 0.22;
choppy = mix(choppy, 1.0, 0.2);
}
return p.y - h;
}vec3 getNormal(vec3 p, float eps) {
vec3 n;
n.y = map_detailed(p);
n.x = map_detailed(vec3(p.x + eps, p.y, p.z)) - n.y;
n.z = map_detailed(vec3(p.x, p.y, p.z + eps)) - n.y;
n.y = eps;
return normalize(n);
}float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {
float tm = 0.0;
float tx = 1000.0;
float hx = map(ori + dir * tx);
if (hx > 0.0) {
p = ori + dir * tx;
return tx;
}float hm = map(ori);
for (int i = 0; i < NUM_STEPS; i++) {
float tmid = mix(tm, tx, hm / (hm - hx));
p = ori + dir * tmid;
float hmid = map(p);
if (hmid < 0.0) {
tx = tmid;
hx = hmid;
} else {
tm = tmid;
hm = hmid;
}
if (abs(hmid) < EPSILON) break;
}
return mix(tm, tx, hm / (hm - hx));
}vec3 getSeaColor(vec3 p, vec3 n, vec3 l, vec3 eye, vec3 dist) {
float fresnel = clamp(1.0 - dot(n, -eye), 0.0, 1.0);
fresnel = min(fresnel * fresnel * fresnel, 0.5);vec3 reflected = getSkyColor(reflect(eye, n));
vec3 refracted = SEA_BASE + diffuse(n, l, 80.0) * SEA_WATER_COLOR * 0.12;vec3 color = mix(refracted, reflected, fresnel);float atten = max(1.0 - dot(dist, dist) * 0.001, 0.0);
color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;color += specular(n, l, eye, 60.0);
return color;
}vec3 getPixel(vec2 coord, float time) {
vec2 uv = coord / uResolution.xy;
uv = uv * 2.0 - 1.0;
uv.x *= uResolution.x / uResolution.y;vec3 ang = vec3(sin(time * 3.0) * 0.1, sin(time) * 0.2 + 0.3, time);
vec3 ori = vec3(0.0, 3.5, time * 5.0);
vec3 dir = normalize(vec3(uv.xy, -2.0));
dir.z += length(uv) * 0.14;
dir = normalize(fromEuler(ang) * dir);vec3 p;
heightMapTracing(ori, dir, p);
vec3 dist = p - ori;
vec3 n = getNormal(p, dot(dist, dist) * EPSILON_NRM);
vec3 light = normalize(vec3(0.0, 1.0, 0.8));return mix(getSkyColor(dir), getSeaColor(p, n, light, dir, dist),
pow(smoothstep(0.0, -0.02, dir.y), 0.2));
}void main() {
vec3 color = getPixel(gl_FragCoord.xy, uTime * 0.3 + uMousePos.x * 0.01);
fragColor = vec4(pow(color, vec3(0.65)), 1.0);
}`,En=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Sn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uArtboardResolution;
vec3 blend (int blendMode, vec3 src, vec3 dst) {
return src + dst;
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
}out vec4 fragColor;void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);if(color.a <= 0.001) {
fragColor = vec4(0);
return;
}vec2 st = uv;
vec3 grainRGB = vec3(0);vec2 artboardRes = max(min(uResolution, uArtboardResolution), vec2(1.0));
float grainSize = mix(artboardRes.y / uResolution.y, 4.0, 0.0000);
st = floor((st - vec2(0.5, 0.5)) * artboardRes / grainSize);float delta = fract((floor(uTime)/20.));
grainRGB = vec3(randFibo(st + vec2(delta)));color.rgb = mix(color.rgb, blend(1, grainRGB, color.rgb), 0.1500);
fragColor = color;}`,Cn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,wn=[`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;out vec4 fragColor;const int kernelSize = 36;float getGaussianWeight(int index) {
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
float weightSum = 0.0;float amount = (0.9500 + 0.1) * 2.;
float aspectRatio = uResolution.x/uResolution.y;direction.x /= aspectRatio;color += texture(tex, uv) * getGaussianWeight(0);
for (int i = 0; i < kernelSize; i++) {
float x = float(i - kernelSize / 2) * amount;
color += texture(tex, uv + vec2(x/1000.) * direction) * getGaussianWeight(i);
}
return color;
}vec4 getColor(vec2 uv) {
return GaussianBlur(uTexture, uv, vec2(1, 0));
}void main() {
vec4 clipColor = texture(uTexture, vTextureCoord);
if(clipColor.a == 0.) {
fragColor = vec4(0);
return;
}vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec2 vTextureCoord;uniform sampler2D uTexture;uniform vec2 uResolution;out vec4 fragColor;const int kernelSize = 36;float getGaussianWeight(int index) {
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
float weightSum = 0.0;float amount = (0.9500 + 0.1) * 2.;
float aspectRatio = uResolution.x/uResolution.y;direction.x /= aspectRatio;color += texture(tex, uv) * getGaussianWeight(0);
for (int i = 0; i < kernelSize; i++) {
float x = float(i - kernelSize / 2) * amount;
color += texture(tex, uv + vec2(x/1000.) * direction) * getGaussianWeight(i);
}
return color;
}vec4 getColor(vec2 uv) {
return GaussianBlur(uTexture, uv, vec2(0, 1));
}void main() {
vec4 clipColor = texture(uTexture, vTextureCoord);
if(clipColor.a == 0.) {
fragColor = vec4(0);
return;
}vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform sampler2D uBgTexture;uniform vec2 uMousePos;
uniform vec2 uResolution;
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
}out vec4 fragColor;const int kernelSize = 36;float luma(vec3 color) {
return dot(color, vec3(0.299, 0.587, 0.114));
}float getHeight(vec2 uv) {
vec4 col = texture(uTexture, uv);
return luma(col.rgb);
}vec4 computeNoise(vec2 uv) {
vec2 ste = (1. / uResolution);
float height = getHeight(uv);
vec2 dxy = height - vec2(getHeight(uv + vec2(ste.x, 0.)),
getHeight(uv + vec2(0., ste.y)));return vec4(normalize(vec3(dxy * (0.02 + 0.04 * 0.9500) / ste, 2.)), height);
}vec3 Tonemap_tanh(vec3 x) {
x = clamp(x, -40.0, 40.0);
return (exp(x) - exp(-x)) / (exp(x) + exp(-x));
}float light(vec3 p, vec3 normal, vec3 lightPos) {
vec3 direction = normalize(lightPos - p);
float specular = 0.5 * pow(max(dot(direction, reflect(-direction, normal)), 0.0), 2.0);
return max(0.1, dot(normal, direction) * 1.2 - specular);
}vec4 getPointlight(vec2 uv) {
vec2 pos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.5300);
vec2 aspectRatio = vec2(uResolution.x/uResolution.y, 1);
vec4 color = texture(uBgTexture, uv);
float lum = luma(color.rgb);
float dist = distance(uv * aspectRatio, pos * aspectRatio) / (0.4600 + 0.5);
float hightlighDist = distance(uv * aspectRatio, pos * aspectRatio) / (0.4600 + 0.5)/2.;
float spot = max(0., max(0., (1.-dist)) * max(0., (1.-dist)));
float highlightSpot = max(0., max(0., (1.-hightlighDist)) * max(0., (1.-hightlighDist)));
vec3 normal = computeNoise(uv).rgb * lum;
vec2 lightDir = pos * aspectRatio - uv * aspectRatio;
float lightDistance = 1.-length(lightDir);
lightDir = normalize(lightDir);
vec3 diff = vec3(max(dot(normal, vec3(lightDir, 0.5)), 0.0));float specular = light(vec3(uv, 1.), normal, vec3(pos, 1.));
specular = smoothstep(0., 1., specular) * 2.;
float intensity = 0.9200 * 3.;
vec3 base = color.rgb * vec3(0.49019607843137253, 0.49019607843137253, 0.49019607843137253) * max(0., spot) * intensity;
color.rgb = color.rgb * 0.3400 + base * diff * vec3(0.49019607843137253, 0.49019607843137253, 0.49019607843137253) * max(0., spot) * intensity;
color.rgb += specular * vec3(0.49019607843137253, 0.49019607843137253, 0.49019607843137253) * max(0., spot * 4.) * 0.4300;
color.rgb = Tonemap_tanh(color.rgb);
float dither = deband();
color.rgb += dither;
return color;
}vec4 getColor(vec2 uv) {
return getPointlight(uv);
}void main() {
vec4 clipColor = texture(uTexture, vTextureCoord);
if(clipColor.a == 0.) {
fragColor = vec4(0);
return;
}vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`],An=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Rn=[`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;out vec4 fragColor;const float TAU = 6.28318530718;float luma(vec4 color) {
return dot(color.rgb, vec3(0.299, 0.587, 0.114));
}vec4 thresholdPass(vec4 color) {
color.rgb = pow(color.rgb, vec3(1.0/2.2));
color.rgb = 1.2 * (color.rgb - 0.5) + 0.5;
vec4 bloom = color * smoothstep(0.8500 - 0.1, 0.8500, luma(color));
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
dir *= vec2(0.5800, 1. - 0.5800);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.4100;
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
dir *= vec2(0.5800, 1. - 0.5800);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.4100;
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
vec4 bloom = color * smoothstep(0.8500 - 0.1, 0.8500, luma(color));
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
dir *= vec2(0.5800, 1. - 0.5800);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.4100;
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
dir *= vec2(0.5800, 1. - 0.5800);
dir.x /= aspectRatio;
vec4 center = texture(uTexture, uv);
float center_weight = getExponentialWeight(0);
color += center * center_weight;
total_weight += center_weight;radius *= 0.4100;
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
float dither = deband();bloomColor.rgb *= vec3(0.7176470588235294, 0.7176470588235294, 0.7176470588235294);
bloomColor.rgb += dither;
bloomColor.a = luma(bloomColor);
vec4 sceneColor = texture(uBgTexture, vTextureCoord);
vec4 finalColor = mix(sceneColor, sceneColor + bloomColor, 0.4700 * 1.9);
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
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,Fn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform float uTime;uniform vec2 uMousePos;
uniform vec2 uResolution;float ease (int easingFunc, float t) {
return t;
}out vec4 fragColor;
const float PI = 3.14159265359;
const float ITERATIONS = 8.0;vec3 getAbberatedColor(vec3 color, vec3 left, vec3 center, vec3 right) {
return vec3(left.r, mix(color.g, center.g, float(0)), right.b);
}void main() {
vec2 uv = vTextureCoord;
float aspectRatio = uResolution.x/uResolution.y;
vec2 mPos = vec2(0.5, 0.5) + mix(vec2(0), (uMousePos-0.5), 0.0000);
vec2 pos = mPos;
float angle = ((0.0000 + uTime * 0.05) * 360.0) * PI / 180.0;
vec2 rotation = vec2(sin(angle), cos(angle));
vec4 color = texture(uTexture, uv);float mDist = ease(0, max(0., 1. - distance(uv * vec2(aspectRatio, 1.), mPos * vec2(aspectRatio, 1.)) * 4. * (1. - 1.0000)));vec2 aberrated;aberrated = 0.1000 * rotation * 0.03 * mix(1.0, distance(uv, pos) * (1.0 + 0.0000), 0.0000);
aberrated *= mDist;float amt = length(aberrated);
vec4 left = vec4(0);
vec4 right = vec4(0);
vec4 center = vec4(0);if (amt >= 0.001) {
left = texture(uTexture, uv - aberrated);
right = texture(uTexture, uv + aberrated);
}if (amt >= 0.001) {
color.rgb = getAbberatedColor(color.rgb, left.rgb, center.rgb, right.rgb);
color.a = max(max(left.a, center.a), right.a);
}
fragColor = color;}`,Ln=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,zn=[`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;out vec4 fragColor;const float PI = 3.14159265359;
const float PHI = 1.61803398875;mat2 rot(float a) {
return mat2(cos(a),-sin(a),sin(a),cos(a));
}vec2 rot90(vec2 v) {
return vec2(v.y, -v.x);
}float easeInOutQuad(float t) {
return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;
}float ign(vec2 st) {
return fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));
}float ignGaussian4(vec2 st) {
float n0 = ign(st + vec2(0.5, 0.5));
float n1 = ign(st + vec2(5.2, 1.3));
float n2 = ign(st + vec2(1.7, 9.2));
float n3 = ign(st + vec2(8.3, 2.8));
return (n0 + n1 + n2 + n3 - PHI) * PHI;
}const int kernelSize = 24;float getProgressiveAmount(vec2 uv, float scale) {
vec2 pos = vec2(0.5, 0.47) + mix(vec2(0), (uMousePos-0.5), 0.0000);vec2 st = uv * rot(0.0000 * 2. * PI);
pos *= rot(0.0000 * 2. * PI);float lineDist = pos.y - st.y;
float dist = clamp(lineDist, 0.0, 1.0);dist = easeInOutQuad(dist);return 0.6100 * scale * dist;
}vec4 sampleFastBlur(vec2 uv, vec2 axis, vec2 axisPerp, float radius) {
vec4 color = vec4(0.0);
color += texture(uTexture, uv + axis * radius);
color += texture(uTexture, uv - axis * radius);
color += texture(uTexture, uv + axisPerp * radius);
color += texture(uTexture, uv - axisPerp * radius);
return color * 0.25;
}vec4 fastBlur(vec2 uv) {
vec2 texel = 1.0 / uResolution;
float amount = getProgressiveAmount(uv, 6.0);if (amount < 0.0001) {
return texture(uTexture, uv);
}float baseRadius = amount * 18.0 * texel.y;
if (baseRadius <= texel.y * 0.5) {
return texture(uTexture, uv);
}vec2 px = uv * uResolution;
float aspectRatio = uResolution.x / uResolution.y;
vec2 aspect = vec2(aspectRatio, 1.0);
float noise = ign(px * 1.212);
float angle = noise * PHI;
vec2 screenAxis = vec2(cos(angle), sin(angle));
vec2 screenAxisPerp = rot90(screenAxis);
vec2 axis = screenAxis / aspect;
vec2 axisPerp = screenAxisPerp / aspect;
float jitter = clamp(ignGaussian4(px), -2.0, 2.0) * 0.5;
float radius = max(baseRadius * (1.0 + jitter), 0.0);if (radius <= texel.y * 0.5) {
return texture(uTexture, uv);
}return sampleFastBlur(uv, axis, axisPerp, radius);
}vec4 getColor(vec2 uv) {
return fastBlur(uv);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;
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
}out vec4 fragColor;const float PI = 3.14159265359;
const float PHI = 1.61803398875;mat2 rot(float a) {
return mat2(cos(a),-sin(a),sin(a),cos(a));
}float easeInOutQuad(float t) {
return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;
}float ign(vec2 st) {
return fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));
}const int kernelSize = 24;
float getGaussianWeight(int index) {
switch(index) {
case 0: return 0.0057588;
case 1: return 0.00894172;
case 2: return 0.01333948;
case 3: return 0.01911987;
case 4: return 0.02633051;
case 5: return 0.03483868;
case 6: return 0.04428864;
case 7: return 0.05409427;
case 8: return 0.06348021;
case 9: return 0.07157374;
case 10: return 0.07753491;
case 11: return 0.08069917;
case 12: return 0.08069917;
case 13: return 0.07753491;
case 14: return 0.07157374;
case 15: return 0.06348021;
case 16: return 0.05409427;
case 17: return 0.04428864;
case 18: return 0.03483868;
case 19: return 0.02633051;
case 20: return 0.01911987;
case 21: return 0.01333948;
case 22: return 0.00894172;
case 23: return 0.0057588;
default: return 0.0;
}
}float getProgressiveAmount(vec2 uv, float scale) {
vec2 pos = vec2(0.5, 0.47) + mix(vec2(0), (uMousePos-0.5), 0.0000);vec2 st = uv * rot(0.0000 * 2. * PI);
pos *= rot(0.0000 * 2. * PI);float lineDist = pos.y - st.y;
float dist = clamp(lineDist, 0.0, 1.0);dist = easeInOutQuad(dist);return 0.6100 * scale * dist;
}vec4 gaussianBlur(vec2 uv, bool isVertical) {
vec4 color = vec4(0.0);
vec2 texel = 1.0 / uResolution;
float amount = getProgressiveAmount(uv, 11.0);if (amount < 0.0001) {
return texture(uTexture, uv);
}float maxRadius = amount * 0.001 * ((float(kernelSize) - 1.0) * 0.5);
if (maxRadius <= texel.y * 0.5) {
return texture(uTexture, uv);
}vec2 direction = isVertical ? vec2(0, uResolution.x/uResolution.y) : vec2(1, 0);
float jitter = ign(uv * uResolution) - 0.5;
for (int i = 0; i < kernelSize; i++) {
float x = (float(i) - (float(kernelSize) - 1.0) * 0.5) * amount;
vec2 offset = vec2(x * 0.001) * direction;
color += texture(uTexture, uv + offset) * getGaussianWeight(i);
}float dither = deband();
color.rgb += dither;return color;
}vec4 getColor(vec2 uv) {
return gaussianBlur(uv, false);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform vec2 uMousePos;
uniform vec2 uResolution;
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
}out vec4 fragColor;const float PI = 3.14159265359;
const float PHI = 1.61803398875;mat2 rot(float a) {
return mat2(cos(a),-sin(a),sin(a),cos(a));
}float easeInOutQuad(float t) {
return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;
}float ign(vec2 st) {
return fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));
}const int kernelSize = 24;
float getGaussianWeight(int index) {
switch(index) {
case 0: return 0.0057588;
case 1: return 0.00894172;
case 2: return 0.01333948;
case 3: return 0.01911987;
case 4: return 0.02633051;
case 5: return 0.03483868;
case 6: return 0.04428864;
case 7: return 0.05409427;
case 8: return 0.06348021;
case 9: return 0.07157374;
case 10: return 0.07753491;
case 11: return 0.08069917;
case 12: return 0.08069917;
case 13: return 0.07753491;
case 14: return 0.07157374;
case 15: return 0.06348021;
case 16: return 0.05409427;
case 17: return 0.04428864;
case 18: return 0.03483868;
case 19: return 0.02633051;
case 20: return 0.01911987;
case 21: return 0.01333948;
case 22: return 0.00894172;
case 23: return 0.0057588;
default: return 0.0;
}
}float getProgressiveAmount(vec2 uv, float scale) {
vec2 pos = vec2(0.5, 0.47) + mix(vec2(0), (uMousePos-0.5), 0.0000);vec2 st = uv * rot(0.0000 * 2. * PI);
pos *= rot(0.0000 * 2. * PI);float lineDist = pos.y - st.y;
float dist = clamp(lineDist, 0.0, 1.0);dist = easeInOutQuad(dist);return 0.6100 * scale * dist;
}vec4 gaussianBlur(vec2 uv, bool isVertical) {
vec4 color = vec4(0.0);
vec2 texel = 1.0 / uResolution;
float amount = getProgressiveAmount(uv, 11.0);if (amount < 0.0001) {
return texture(uTexture, uv);
}float maxRadius = amount * 0.001 * ((float(kernelSize) - 1.0) * 0.5);
if (maxRadius <= texel.y * 0.5) {
return texture(uTexture, uv);
}vec2 direction = isVertical ? vec2(0, uResolution.x/uResolution.y) : vec2(1, 0);
float jitter = ign(uv * uResolution) - 0.5;
for (int i = 0; i < kernelSize; i++) {
float x = (float(i) - (float(kernelSize) - 1.0) * 0.5) * amount;
vec2 offset = vec2(x * 0.001) * direction;
color += texture(uTexture, uv + offset) * getGaussianWeight(i);
}float dither = deband();
color.rgb += dither;return color;
}vec4 getColor(vec2 uv) {
return gaussianBlur(uv, true);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`,`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
precision highp int;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;
uniform sampler2D uBgTexture;
uniform vec2 uMousePos;
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
}out vec4 fragColor;const float PI = 3.14159265359;
const float PHI = 1.61803398875;mat2 rot(float a) {
return mat2(cos(a),-sin(a),sin(a),cos(a));
}float easeInOutQuad(float t) {
return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;
}const int kernelSize = 24;float getProgressiveAmount(vec2 uv, float scale) {
vec2 pos = vec2(0.5, 0.47) + mix(vec2(0), (uMousePos-0.5), 0.0000);vec2 st = uv * rot(0.0000 * 2. * PI);
pos *= rot(0.0000 * 2. * PI);float lineDist = pos.y - st.y;
float dist = clamp(lineDist, 0.0, 1.0);dist = easeInOutQuad(dist);return 0.6100 * scale * dist;
}vec4 composite(vec2 uv) {
vec4 bg = texture(uBgTexture, uv);
vec4 fg = texture(uTexture, uv);
float dither = deband();
fg.rgb += dither;float m = getProgressiveAmount(uv, 11.0);if (m < 0.0001) {
return bg;
}
return mix(fg, bg, smoothstep(0., 1.0, 1. - m));
}vec4 getColor(vec2 uv) {
return composite(uv);
}void main() {
vec2 uv = vTextureCoord;
vec4 color = getColor(uv);
fragColor = color;}`],Un=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,_n=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec3 vVertexPosition;
in vec2 vTextureCoord;uniform sampler2D uTexture;vec3 getFilteredColor(vec3 color) {
return color;
}float hueToRgb(float p, float q, float t) {
if (t < 0.0) t += 1.0;
if (t > 1.0) t -= 1.0;
if (t < 1.0 / 6.0) return p + (q - p) * 6.0 * t;
if (t < 1.0 / 2.0) return q;
if (t < 2.0 / 3.0) return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
return p;
}vec3 hslToRgb(vec3 hsl) {
float h = hsl.x;
float s = hsl.y;
float l = hsl.z;
vec3 rgb = vec3(l);
if (s != 0.0) {
float q = l < 0.5 ? l * (1.0 + s) : l + s - l * s;
float p = 2.0 * l - q;
rgb.r = hueToRgb(p, q, h + 1.0 / 3.0);
rgb.g = hueToRgb(p, q, h);
rgb.b = hueToRgb(p, q, h - 1.0 / 3.0);
}
return rgb;
}vec3 rgbToHsl(vec3 rgb) {
float max = max(max(rgb.r, rgb.g), rgb.b);
float min = min(min(rgb.r, rgb.g), rgb.b);
float h, s, l = (max + min) / 2.0;if (max == min) {
h = s = 0.0;
} else {
float d = max - min;
s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);
if (max == rgb.r) {
h = (rgb.g - rgb.b) / d + (rgb.g < rgb.b ? 6.0 : 0.0);
} else if (max == rgb.g) {
h = (rgb.b - rgb.r) / d + 2.0;
} else if (max == rgb.b) {
h = (rgb.r - rgb.g) / d + 4.0;
}
h /= 6.0;
}return vec3(h, s, l);
}out vec4 fragColor;void main() {
vec2 uv = vTextureCoord;
vec4 color = texture(uTexture, uv);if(color.a <= 0.001) {
fragColor = vec4(0);
return;
}color.rgb = rgbToHsl(color.rgb);
color.x = fract(color.x + 1.0000);
color.y = clamp(color.y * 0.0000, 0.0, 1.0);
color.z = clamp(color.z + 0.0000, 0.0, 1.0);
color.rgb = hslToRgb(color.rgb);
color.rgb = getFilteredColor(color.rgb);color.rgb = 1.0000 * (color.rgb - 0.5) + 0.5;color.r = clamp(color.r + 0.0000, 0.0, 1.0);
color.b = clamp(color.b - 0.0000, 0.0, 1.0);color.g = clamp(color.g - 0.0000, 0.0, 1.0);
color.r = clamp(color.r + 0.0000 * 0.5, 0.0, 1.0);
color.b = clamp(color.b + 0.0000 * 0.5, 0.0, 1.0);color = vec4(clamp(color.rgb, 0.0, 1.0), color.a);
fragColor = color;}`;var xr=1.5,br=2,At=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function In(a){let t=a.querySelector("[data-sun-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let i=[];function f(R,L){let g=e.createShader(R);return e.shaderSource(g,L),e.compileShader(g),e.getShaderParameter(g,e.COMPILE_STATUS)||console.error("[sun-fx] shader",e.getShaderInfoLog(g)),g}function w(R,L){let g=e.createProgram(),T=f(e.VERTEX_SHADER,L),P=f(e.FRAGMENT_SHADER,R);e.attachShader(g,T),e.attachShader(g,P),e.bindAttribLocation(g,0,"aVertexPosition"),e.bindAttribLocation(g,1,"aTextureCoord"),e.linkProgram(g),e.deleteShader(T),e.deleteShader(P),e.getProgramParameter(g,e.LINK_STATUS)||console.error("[sun-fx]",e.getProgramInfoLog(g));let S={},s=e.getProgramParameter(g,e.ACTIVE_UNIFORMS);for(let d=0;d<s;d++){let D=e.getActiveUniform(g,d);S[D.name]=e.getUniformLocation(g,D.name)}let c={p:g,loc:S};return i.push(c),c}let l={bg:w(Tn,bn),ocean:w(Pn,yn),grain:w(Sn,En),spot:wn.map(R=>w(R,Cn)),bloom:Rn.map(R=>w(R,An)),chromab:w(Fn,Mn),pblur:zn.map(R=>w(R,Ln)),color:w(_n.replace("1.0000 * (color.rgb - 0.5) + 0.5",br.toFixed(4)+" * (color.rgb - 0.5) + 0.5"),Un)},F=e.createVertexArray();e.bindVertexArray(F);let z=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,z),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let b=[];function h(R,L){let g=e.createTexture();e.bindTexture(e.TEXTURE_2D,g),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,R,L,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let T=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,T),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,g,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let P={tex:g,fb:T,w:R,h:L};return b.push(P),P}function o(){b.forEach(R=>{e.deleteTexture(R.tex),e.deleteFramebuffer(R.fb)}),b.length=0}let x={x:.5,y:.5},r={x:.5,y:.5};function v(R,L,g,T=x){e.useProgram(R.p);let P=L?L.w:n.width,S=L?L.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,L?L.fb:null),e.viewport(0,0,P,S);let s=R.loc;s.uMVMatrix&&e.uniformMatrix4fv(s.uMVMatrix,!1,At),s.uPMatrix&&e.uniformMatrix4fv(s.uPMatrix,!1,At),s.uTextureMatrix&&e.uniformMatrix4fv(s.uTextureMatrix,!1,At),s.uResolution&&e.uniform2f(s.uResolution,P,S),s.uArtboardResolution&&e.uniform2f(s.uArtboardResolution,1920,1920),s.uAspectRatio&&e.uniform1f(s.uAspectRatio,1),s.uMousePos&&e.uniform2f(s.uMousePos,T.x,T.y),s.uTime&&e.uniform1f(s.uTime,0),s.uIsMask&&e.uniform1i(s.uIsMask,0),s.uParentTrackMouse&&e.uniform1f(s.uParentTrackMouse,0);let c=0;Object.keys(g).forEach(d=>{s[d]&&(e.activeTexture(e.TEXTURE0+c),e.bindTexture(e.TEXTURE_2D,g[d].tex),e.uniform1i(s[d],c),c++)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let u=null;function Z(){o();let R=Math.min(xr,window.devicePixelRatio||1),L=Math.max(1,Math.round(t.clientWidth*R)),g=Math.max(1,Math.round(t.clientHeight*R));n.width=L,n.height=g;let T=P=>[Math.max(1,Math.round(L*P)),Math.max(1,Math.round(g*P))];u={a:h(L,g),b:h(L,g),spot1:h(...T(.5)),spot2:h(...T(.5)),spot:h(L,g),bth:h(...T(.5)),bd1:h(...T(.25)),bd2:h(...T(.25)),bs1:h(...T(.5)),bs2:h(...T(.5)),bloom:h(L,g),chromab:h(L,g),pb0:h(...T(.5)),pb1:h(...T(.5)),pb2:h(...T(.5)),pblur:h(L,g)},v(l.bg,u.a,{},r),v(l.ocean,u.b,{},r),v(l.grain,u.a,{uTexture:u.b},r),u.base=u.a}function U(){if(!u)return;let R=u.base;v(l.spot[0],u.spot1,{uTexture:R}),v(l.spot[1],u.spot2,{uTexture:u.spot1}),v(l.spot[2],u.spot,{uTexture:u.spot2,uBgTexture:R});let L=u.spot;v(l.bloom[0],u.bth,{uTexture:L}),v(l.bloom[1],u.bd1,{uTexture:u.bth}),v(l.bloom[2],u.bd2,{uTexture:u.bd1,uBgTexture:L}),v(l.bloom[3],u.bs1,{uTexture:u.bd2}),v(l.bloom[4],u.bs2,{uTexture:u.bs1,uBgTexture:L}),v(l.bloom[5],u.bloom,{uTexture:u.bs2,uBgTexture:L}),v(l.chromab,u.chromab,{uTexture:u.bloom});let g=u.chromab;v(l.pblur[0],u.pb0,{uTexture:g}),v(l.pblur[1],u.pb1,{uTexture:u.pb0}),v(l.pblur[2],u.pb2,{uTexture:u.pb1}),v(l.pblur[3],u.pblur,{uTexture:u.pb2,uBgTexture:g}),v(l.color,null,{uTexture:u.pblur})}let H=null,oe=!1,O=!1;function A(){!oe||H||(H=requestAnimationFrame(()=>{H=null,O&&(O=!1,U())}))}let M=qe((R,L)=>{let g=n.getBoundingClientRect();!g.width||!g.height||(x.x=(R-g.left)/g.width,x.y=1-(L-g.top)/g.height,O=!0,A())}),N=new IntersectionObserver(([R])=>{oe=R.isIntersecting,oe&&O&&A()});N.observe(t);let ee=null,ne=new ResizeObserver(()=>{clearTimeout(ee),ee=setTimeout(()=>{Z(),U()},60)});return ne.observe(t),Z(),U(),function(){H&&cancelAnimationFrame(H),H=null,clearTimeout(ee),N.disconnect(),ne.disconnect(),M(),o(),i.forEach(g=>e.deleteProgram(g.p)),e.deleteBuffer(z),e.deleteBuffer(m),e.deleteVertexArray(F);let L=e.getExtension("WEBGL_lose_context");L&&L.loseContext(),n.remove()}}function Dn(a){let t=a.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",i="circle",f="rgba(0, 0, 0, 0.2)",w="rgba(0, 0, 0, 0.75)",l=2.125,F=1.5,z=24,m=.5,b="20px",h=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},x={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},v=[],u,Z,U,H,oe,O,A=performance.now();function $(y,_){let B=document.createElement("div");B.style.cssText=`position:absolute;visibility:hidden;width:${y};`,_.appendChild(B);let ae=B.getBoundingClientRect().width;return B.remove(),ae}function M(y,_){let B=document.createElement("span");B.style.color=y,_.appendChild(B);let ae=getComputedStyle(B).color;B.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ae,Se.fillRect(0,0,1,1);let Be=[...Se.getImageData(0,0,1,1).data];return Be[3]/=255,Be}function N(y,_,B){return`rgba(${y.map((ae,me)=>ae+(_[me]-ae)*B).join(",")})`}function ee(y,_){Object.assign(y,{from:y.value,to:_,start:performance.now()})}function ne(y,_){if(!m)return y.value=y.to;let B=Math.min(Math.max((_-y.start)/(m*1e3),0),1);y.value=y.from+(y.to-y.from)*(1-Math.pow(1-B,4))}t.forEach(y=>{let _=document.createElement("canvas"),B=_.getContext("2d");_.setAttribute("aria-hidden","true"),Object.assign(_.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(y).position==="static"&&(y.style.position="relative"),y.prepend(_),v.push({element:y,canvas:_,ctx:B,width:0,height:0,visible:!1,inactive:M(y.getAttribute("data-dots-color-inactive")||f,y),active:M(y.getAttribute("data-dots-color-active")||w,y)})});function R(){return v.some(({element:y})=>{let _=y.getBoundingClientRect();return o.x>=_.left&&o.x<=_.right&&o.y>=_.top&&o.y<=_.bottom})}function L(y,_){let B=y.element.getBoundingClientRect(),ae=B.left-_.left,me=B.top-_.top,Se=o.cx-_.left,Be=o.cy-_.top,Xe=l*(1+(F-1)*r.value);y.ctx.clearRect(0,0,y.width,y.height);for(let Ae=0;Ae<y.rows;Ae++){let J=y.oy+Ae*y.sy,te=me+J;for(let k=0;k<y.cols;k++){let j=y.ox+k*y.sx,fe=ae+j,le=h&&x.value?Math.max(0,1-Math.hypot(fe-Se,te-Be)/oe)*x.value:0,de=Z*(1+(Xe-1)*le);y.ctx.fillStyle=N(y.inactive,y.active,le),i==="square"?y.ctx.fillRect(j-de/2,J-de/2,de,de):(y.ctx.beginPath(),y.ctx.arc(j,J,de/2,0,Math.PI*2),y.ctx.fill())}}}function g(y=!1){let _=t[0].getBoundingClientRect();v.forEach(B=>(!y||B.visible)&&L(B,_))}function T(y){if(O=null,!v.some(B=>B.visible))return;let _=Math.min((y-A)/1e3,.1);if(A=y,ne(x,y),ne(r,y),!m)o.cx=o.x,o.cy=o.y;else{let B=1-Math.exp(-_*6/m);o.cx+=(o.x-o.cx)*B,o.cy+=(o.y-o.cy)*B}g(!0),O=requestAnimationFrame(T)}function P(){h&&!O&&v.some(y=>y.visible)&&(A=performance.now(),O=requestAnimationFrame(T))}function S(){u=Math.min(devicePixelRatio||1,2),Z=$(e,t[0]),U=$(n,t[0]),H=Z+U,oe=H*z;let y=$(b,t[0])+Z/2,_=B=>{let ae=B-2*y,me=ae>=0?Math.floor(ae/H)+1:0;return{count:me,offset:y,step:me>1?ae/(me-1):H}};v.forEach(B=>{let ae=B.element.getBoundingClientRect();B.width=ae.width,B.height=ae.height;let me=_(ae.width),Se=_(ae.height);B.cols=me.count,B.ox=me.offset,B.sx=me.step,B.rows=Se.count,B.oy=Se.offset,B.sy=Se.step,B.canvas.width=Math.round(ae.width*u),B.canvas.height=Math.round(ae.height*u),B.ctx.setTransform(u,0,0,u,0,0)}),g(),P()}let s=(y,_)=>{o.x=y,o.y=_;let B=R();B!==o.active&&(o.active=B,ee(x,+B),B?(o.cx=o.x,o.cy=o.y):ee(r,0)),P()},c=null,d=()=>o.active&&ee(r,1),D=()=>ee(r,0);h&&(c=qe(s),window.addEventListener("pointerdown",d),window.addEventListener("pointerup",D));let Y=new IntersectionObserver(y=>{y.forEach(_=>{let B=v.find(ae=>ae.element===_.target);B&&(B.visible=_.isIntersecting)}),h?P():g(!0)}),q=new ResizeObserver(S);return t.forEach(y=>{Y.observe(y),q.observe(y)}),window.addEventListener("resize",S),S(),function(){O&&cancelAnimationFrame(O),O=null,h&&(c&&c(),window.removeEventListener("pointerdown",d),window.removeEventListener("pointerup",D)),window.removeEventListener("resize",S),Y.disconnect(),q.disconnect(),v.forEach(y=>y.canvas.remove()),v.length=0}}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},kn=a=>{let t=Math.sin(a*127.1+311.7)*43758.5453;return t-Math.floor(t)},yr=a=>{let t=Math.floor(a),n=a-t,e=n*n*(3-2*n);return kn(t)*(1-e)+kn(t+1)*e};function Bn(a){let t=a.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,i=[],f=null,w=0,l=18,F=0,z=0,m=0,b=-1e5,h=-1e5,o=!1,x=!1;function r(){f&&f.revert(),t.textContent="";let M=getComputedStyle(t);w=parseFloat(M.paddingTop),l=parseFloat(M.lineHeight),F=t.offsetHeight;let N=Math.max(1,Math.floor((F-w-parseFloat(M.paddingBottom))/l)),ee=document.createDocumentFragment();for(let ne=0;ne<N;ne++){let R=document.createElement("div");R.className="type-field__row",R.textContent=n,ee.appendChild(R)}t.appendChild(ee),t.setAttribute("aria-hidden","true"),f=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){i=[...t.children].map((ne,R)=>({chars:ne.querySelectorAll(".type-field__char"),cur:i[R]?i[R].cur:0,drawn:0}))}})}function v(M){let N=Math.max(0,Math.min(M.chars.length,Math.round(M.cur)));if(N===M.drawn)return;let ee=Math.min(N,M.drawn),ne=Math.max(N,M.drawn);for(let R=ee;R<ne;R++)M.chars[R].style.visibility=R<N?"visible":"hidden";M.drawn=N}function u(M,N){if(!i.length)return;let ee=Math.min(N,50)/16.667,ne=S=>1-Math.pow(1-S,ee),R=Te.scroll,L=Math.min(Math.max(z-R,0),m-R-F);h+=(b-L-w-h)*ne(rt.followEase);let g=Math.floor(h/l),T=R*.004,P=o&&b>=z-R&&b<=m-R;for(let S=0;S<i.length;S++){let s=i[S],c=s.chars.length,d=Math.abs(S-g),D=0;if(P){if(d===0)D=c;else if(d<=rt.radius){let Y=1-d/(rt.radius+1);D=1+Math.min(rt.maxSide,Y*(1-rt.ragged/2+rt.ragged*yr(S*1.3+T)))*(c-1)}}s.cur+=(D-s.cur)*ne(rt.ease),v(s)}}function Z(){x||(gsap.ticker.add(u),x=!0)}function U(){x&&(gsap.ticker.remove(u),x=!1)}let H=qe((M,N)=>{h<-1e4&&(h=N),b=N,o=!0}),oe=()=>{o=!1};document.documentElement.addEventListener("mouseleave",oe),r();let O=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(M){z=M.start+window.innerHeight,m=M.end},onToggle(M){M.isActive?Z():U()}});O.isActive&&Z();let A,$=()=>{clearTimeout(A),A=setTimeout(()=>{Math.floor((t.offsetHeight-w-parseFloat(getComputedStyle(t).paddingBottom))/l)!==i.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",$),function(){U(),clearTimeout(A),H(),document.documentElement.removeEventListener("mouseleave",oe),window.removeEventListener("resize",$),O.kill(),f&&f.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var On={duration:.5,ease:"power3"};function Vn(a){let t=a.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let i=e.querySelector("[data-cursor-label-item]");if(!i)return;let f=gsap.quickTo(i,"x",On),w=gsap.quickTo(i,"y",On),l=0,F=0,z=!1,m=new ResizeObserver(()=>{l=i.offsetWidth,F=i.offsetHeight});m.observe(i),l=i.offsetWidth,F=i.offsetHeight;let h=qe((x,r)=>{let v=e.getBoundingClientRect();if(!(x>=v.left&&x<=v.right&&r>=v.top&&r<=v.bottom)){z&&(z=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let Z=gsap.utils.clamp(0,Math.max(0,v.width-l),x-v.left-l/2),U=gsap.utils.clamp(0,Math.max(0,v.height-F),r-v.top-F/2);if(!z){z=!0,f(Z,Z),w(U,U),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}f(Z),w(U)}),o=()=>{z&&(z=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{h(),document.documentElement.removeEventListener("mouseleave",o),m.disconnect(),gsap.killTweensOf(i),gsap.set(i,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var Tr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],Pr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],Er="#FFFFFF";var Hn="power3.out";function qn(a){let t=a.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let i=[],f=[],w=[];function l(){if(f.length&&f[0].isConnected)return;let b=e.querySelectorAll(":scope > div > div");i=(b.length?[...b]:[e]).map(o=>SplitText.create(o,{type:"chars"})),f=i.flatMap(o=>o.chars),w=b.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],f.forEach(o=>{o.dataset.orig=o.textContent})}function F(b){b.textContent=b.dataset.orig,b.style.border=""}let z=()=>{l(),w.forEach(h=>{h.el.style.overflow="visible"});let b=(f.length-1)/2;f.forEach((h,o)=>{gsap.to(h,{color:Er,ease:Hn,duration:.3,delay:Math.abs(o-b)*.03,overwrite:"auto",onStart:()=>{let x=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);x==1&&(h.textContent=gsap.utils.random(Pr)),r==1&&(h.style.border=`1px solid ${gsap.utils.random(Tr)}`)}})})},m=()=>{if(!f.length)return;let b=getComputedStyle(e).color,h=(f.length-1)/2;w.forEach(o=>{o.el.style.overflow=o.overflow}),f.forEach((o,x)=>{gsap.to(o,{color:b,ease:Hn,duration:.3,delay:Math.abs(x-h)*.03,overwrite:"auto",onStart:()=>F(o)})})};e.addEventListener("mouseenter",z),e.addEventListener("mouseleave",m),n.push(()=>{e.removeEventListener("mouseenter",z),e.removeEventListener("mouseleave",m),gsap.killTweensOf(f),i.forEach(b=>b.revert()),i=[],f=[],w=[]})}),()=>n.forEach(e=>e())}function Rt(a,t){let n=null;pe(Gt(a)),pe(on(a)),pe(qn(a)),pe(Dn(a)),pe(Jt(a)),pe(Wt(a)),pe(nn(a));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Nt(a):null,n?pe(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),pe(Xt(a)),pe(Kt(a)),pe(Zt(a)),pe(vt(a)),ut(a),Qt(a),n}function ft(a){pe(en(a)),a.querySelector("[data-flip-element]")&&window.innerWidth>991&&pe(jt(a)),pe(Bn(a)),pe(Vn(a)),pe(cn(a)),pe(xn(a)),pe(In(a)),ScrollTrigger.sort()}var Sr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function pt(a){var t=[];return a.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",i=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:i,mask:"lines",autoSplit:!0,onSplit:function(f){gsap.set(n,{autoAlpha:1});var w=Sr[e],l={yPercent:110,duration:w.duration,stagger:w.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?l.delay=.5:l.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(f[e],l)}}))}),function(){t.forEach(function(n){n.revert()})}}var Gn=window.matchMedia("(prefers-reduced-motion: reduce)"),Mt=.9;function Wn(a){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{a.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Gn.matches||!n?e.set(a,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:lt,duration:Mt,ease:Ze},0),e.fromTo(a,{y:"0vh"},{y:"-25vh",duration:Mt,ease:Ze},0),e.set(n,{autoAlpha:0}),e)}function Ft(a,t,n="100vh"){let e=gsap.timeline();return Gn.matches?e.set(a,{autoAlpha:1}):(e.set(a,{zIndex:3},0),e.fromTo(a,{y:n},{y:"0vh",duration:Mt,ease:Ze},0)),e.add("pageReady"),e.call(function(){gsap.set(a,{clearProps:"zIndex"}),t(a)},null,"pageReady"),new Promise(i=>{e.call(i,null,"pageReady")})}function Lt(a,t,n){let e=document.querySelector("[data-transition-wrap]"),i=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(a,{position:"relative"}),Ft(a,t,n).then(function(){i&&gsap.set(i,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,zt=!1;function Ut(a){gsap.set(a,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Te.scrollTo(0,{immediate:!0,force:!0}),Te.resize()}var Nn={sync:!0,beforeLeave(){zt=bt({keepCurtain:!0}),Te.stop(),ot||(ot=xt())},beforeEnter(a){ot||(ot=xt()),gsap.set(a.next.container,{position:"fixed",top:0,left:0,right:0}),Bt(),Rt(a.next.container,!1)},leave(a){return Wn(a.current.container,a.next.container)},enter(a){return zt&&(It(),zt=!1),pe(pt(a.next.container)),Ft(a.next.container,Ut)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(a){Ot(a),ft(a.next.container),Te.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:a}){if(!a||!a.href)return!1;let t=new URL(a.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Nn,once(a){let t=document.querySelector("[data-menu-status]");Dt(),kt(),t&&(ut(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=a.next.container,e=Rt(n,!0);e?e.call(function(){let i=document.querySelector("[data-load-bg]");pe(pt(n)),Lt(n,function(f){Ut(f),ft(f),Te.start(),ScrollTrigger.refresh()},i?i.offsetHeight:void 0)},null,"hideContent"):(Te.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),pe(pt(n)),Lt(n,function(i){Ut(i),ft(i),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Te.start()})})})}))}},{name:"self",...Nn}]}),window.addEventListener("pageshow",function(a){a.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

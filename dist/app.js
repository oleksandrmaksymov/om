(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var ye=new Lenis({lerp:.08,wheelMultiplier:1});ye.on("scroll",ScrollTrigger.update);gsap.ticker.add(i=>{ye.raf(i*1e3)});gsap.ticker.lagSmoothing(0);var gt=[];function me(i){typeof i=="function"&&gt.push(i)}function xt(){let i=gt,t=ScrollTrigger.getAll();return gt=[],function(){i.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Gn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Gn);var je="parallax",lt=.8;var Xn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",It="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,bt=function(){return!1};function kt(){tt&&gsap.timeline().to(tt,{clipPath:It,duration:.9,ease:je,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-lt)+")",duration:.9,ease:je},0).set(tt,{clearProps:"filter"})}function Dt(){let i=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!i||!t)return;tt=t.querySelector(".nav-bg"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",i.setAttribute("aria-expanded",a),a?(ye.stop(),document.body.style.overflow="hidden"):(ye.start(),document.body.style.overflow="")}function e(a){tt&&gsap.to(tt,{clipPath:a?Xn:It,duration:.9,ease:je,overwrite:!0})}i.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),bt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function _t(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Ot(){let i=function(n){return n.replace(/\/$/,"")||"/"},t=i(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&i(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Bt(i){let n=new DOMParser().parseFromString(i.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function ut(i){let t=i.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let v=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();v&&navigator.clipboard.writeText(v).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function dt(i){let t=i.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,v=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),p=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=v+" "+p}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function ct(i){return Pt[i]||(Pt[i]=new Promise(function(t,n){let e=document.createElement("script");e.src=i,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[i]}function Ht(i){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var v=new THREE.PointLight(16107370,3,1400);v.position.set(300,350,400),n.add(v);var A=new THREE.PointLight(13931578,2.4,1200);A.position.set(-300,-100,300),n.add(A);var p=new THREE.PointLight(5913114,1.2,900);p.position.set(0,200,-300),n.add(p);var F=new THREE.PointLight(16750916,1.3,600);F.position.set(0,-250,200),n.add(F);var z=0,m=0,h=0,x=0,o=!1,g=0,r=0,d=Math.PI*2/6,T=new THREE.Vector2(9999,9999),q=new THREE.Raycaster,U=120,N=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),O=new THREE.Vector3,y=!1,X=0,w=0,$=8e4,re=.03,j=.95,W=.005,Z=12e4,H=null,L,S,E,l,s,c,M=0,_=!1,k=0,u=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function C(){var P=new THREE.BufferGeometry;L=new Float32Array(Z*3),S=new Float32Array(Z*3),E=new Float32Array(Z*3),l=new Float32Array(Z*3),s=new Float32Array(Z),c=new Float32Array(Z),P.setAttribute("position",new THREE.BufferAttribute(L,3)),P.setAttribute("color",new THREE.BufferAttribute(l,3)),P.setAttribute("size",new THREE.BufferAttribute(s,1)),P.setAttribute("alpha",new THREE.BufferAttribute(c,1)),P.setAttribute("velocity",new THREE.BufferAttribute(S,3));var K=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Y=new THREE.ShaderMaterial({vertexShader:K,fragmentShader:f,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(P,Y),n.add(H)}function R(P,K){return new Promise(function(f){try{var Y=512,J=document.createElement("canvas");J.width=J.height=Y;var ne=J.getContext("2d"),Ue=new DOMParser().parseFromString(P,"image/svg+xml"),Fe=Ue.querySelector("svg");if(!Fe){f([]);return}var I=parseFloat(Fe.getAttribute("width")||512),G=parseFloat(Fe.getAttribute("height")||512),b=Fe.getAttribute("viewBox");if(b){var B=b.split(/[\s,]+/);I=+B[2],G=+B[3]}var se=Math.min(Y/I,Y/G)*.9,ae=(Y-I*se)/2,ze=(Y-G*se)/2;ne.save(),ne.translate(ae,ze),ne.scale(se,se),ne.fillStyle="white",Ue.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var _e=xe.getAttribute("d");_e&&ne.fill(new Path2D(_e))}else xe.tagName==="rect"?ne.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(ne.beginPath(),ne.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),ne.fill())}),ne.restore();for(var be=ne.getImageData(0,0,Y,Y).data,we=[],Pe=0;Pe<Y;Pe++)for(var ke=0;ke<Y;ke++){var Ee=(Pe*Y+ke)*4;be[Ee+3]>30&&we.push({x:ke,y:Pe,a:be[Ee+3]/255})}if(!we.length){f([]);return}for(var Ge=[],Ee=0;Ee<K;Ee++){var De=we[Math.floor(Math.random()*we.length)];Ge.push({x:(De.x-Y/2)*1.2+(Math.random()-.5)*1.65,y:-(De.y-Y/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*De.a,a:De.a})}f(Ge)}catch(xe){console.error(xe),f([])}})}function ie(P){M=P.length;for(var K=0;K<M;K++){var f=P[K],Y=K*3;L[Y]=f.x,L[Y+1]=f.y+40,L[Y+2]=f.z,S[Y]=S[Y+1]=S[Y+2]=0,E[Y]=f.x,E[Y+1]=f.y,E[Y+2]=f.z;var J=u[Math.floor(Math.random()*u.length)],ne=.7+Math.random()*.4;l[Y]=J.r*ne,l[Y+1]=J.g*ne,l[Y+2]=J.b*ne,s[K]=1.8+Math.random()*3.8,c[K]=.3+(f.a||.7)*.75}H.geometry.setDrawRange(0,M),["position","color","size","alpha"].forEach(function(Ue){H.geometry.attributes[Ue].needsUpdate=!0}),_=!0}function pe(P){return R(P,Math.min(Z,$)).then(function(K){K.length&&H&&ie(K)})}function Se(P){if(!(!_||!M)){k+=P;for(var K=0;K<M;K++){var f=K*3,Y=K*1.37;if(S[f]+=Math.sin(k*.4+Y)*.008+Math.sin(k*1.1+Y*2.3)*.003,S[f+1]+=Math.cos(k*.35+Y*.7)*.008+Math.sin(k*.9+Y*1.5)*.004,S[f+2]+=Math.sin(k*.25+Y*1.1)*.004,S[f+1]-=re*.06,S[f]+=Math.sin(k*.25+L[f+1]*.008)*W*.6,S[f+2]+=Math.cos(k*.3+L[f]*.008)*W*.3,y){var J=L[f]-N.x,ne=L[f+1]-N.y,Ue=L[f+2]-N.z,Fe=J*J+ne*ne+Ue*Ue,I=U*U;if(Fe<I&&Fe>.25){var G=Math.sqrt(Fe),b=G/U,B=(K*2654435761&65535)/65535,se=.6+B*.8,ae=Math.pow(1-b,1.5+B),ze=1+Math.min(O.length()*.12,1),be=ae*se*1.2*ze,we=1/G;S[f]+=J*we*be,S[f+1]+=ne*we*be,S[f+2]+=Ue*we*be*.2;var Pe=.02+B*.06;S[f]+=O.x*ae*Pe,S[f+1]+=O.y*ae*Pe;var ke=ae*.15;S[f]+=(B-.5)*ke,S[f+1]+=((K*48271&65535)/65535-.5)*ke}}var Ee=E[f],Ge=E[f+1]+40,De=E[f+2],xe=Ee-L[f],_e=Ge-L[f+1],He=De-L[f+2],Je=Math.sqrt(xe*xe+_e*_e+He*He),Qe=(K*48271&65535)/65535,et=.003+Qe*.003,at=1+Math.min(Je*.002,.5),$e=et*at;S[f]+=xe*$e,S[f+1]+=_e*$e,S[f+2]+=He*$e;var Te=(K*16807&65535)/65535,Ke=j*(.92+Te*.06);S[f]*=Ke,S[f+1]*=Ke,S[f+2]*=Ke,L[f]+=S[f],L[f+1]+=S[f+1],L[f+2]+=S[f+2];var st=Math.sqrt(Math.pow(L[f]-E[f],2)+Math.pow(L[f+1]-E[f+1],2)+Math.pow(L[f+2]-E[f+2],2));c[K]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(k*1.5+K*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var Oe=new THREE.Matrix4,We=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function ee(P,K){var f=a.domElement.getBoundingClientRect();if(!(f.width===0||f.height===0)&&(T.set((P-f.left)/f.width*2-1,-((K-f.top)/f.height)*2+1),q.setFromCamera(T,e),q.ray.intersectPlane(We,Ce))){oe.copy(N),H&&N.copy(Ce).applyMatrix4(Oe.copy(H.matrixWorld).invert()),O.subVectors(N,oe);var Y=O.length();Y>15&&O.multiplyScalar(15/Y)}}function te(P,K){var f=i.getBoundingClientRect();return P>=f.left&&P<=f.right&&K>=f.top&&K<=f.bottom}var D=i.querySelector("#logo-coords"),Q=i.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(P){X=P.clientX,w=P.clientY;var K=te(P.clientX,P.clientY);if(K){y=!0,ee(P.clientX,P.clientY);var f=i.getBoundingClientRect(),Y=Math.round(P.clientX-f.left),J=Math.round(P.clientY-f.top);D&&(D.textContent="X: "+Y+"PX    Y: "+J+"PX")}else y=!1,N.set(9999,9999,0);o&&(z+=(P.clientX-g)*.005,h+=(P.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),g=P.clientX,r=P.clientY)},ve=function(P){te(P.clientX,P.clientY)&&(o=!0,g=P.clientX,r=P.clientY)},ge=function(){o=!1,z=0,h=0,m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",ve),window.addEventListener("mouseup",ge)}function Me(){for(var P=4e3,K=new THREE.BufferGeometry,f=new Float32Array(P*3),Y=new Float32Array(P*3),J=0;J<P;J++){f[J*3]=(Math.random()-.5)*2200,f[J*3+1]=(Math.random()-.5)*1800,f[J*3+2]=-200-Math.random()*1800;var ne=u[Math.floor(Math.random()*u.length)],Ue=.2+Math.random()*.3;Y[J*3]=ne.r*Ue,Y[J*3+1]=ne.g*Ue,Y[J*3+2]=ne.b*Ue}K.setAttribute("position",new THREE.BufferAttribute(f,3)),K.setAttribute("color",new THREE.BufferAttribute(Y,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var I=Fe.getContext("2d"),G=I.createRadialGradient(16,16,0,16,16,16);G.addColorStop(0,"rgba(255,255,255,1)"),G.addColorStop(.3,"rgba(255,255,255,0.6)"),G.addColorStop(.7,"rgba(255,255,255,0.15)"),G.addColorStop(1,"rgba(255,255,255,0)"),I.fillStyle=G,I.fillRect(0,0,32,32);var b=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),B=new THREE.Points(K,b);return B.userData={positions:f,count:P},n.add(B),B}C();var ue=t?null:Me(),Ie='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';pe(Ie);var Be=new THREE.Clock,Re=!0,Ye=new IntersectionObserver(function(P){Re=P[0].isIntersecting,P[0].isIntersecting&&!fe&&!t&&(fe=!0,D&&(D.style.transform="translateY(0)"),Q&&(Q.style.transform="translateY(0)"))},{threshold:.1});Ye.observe(i);var he=!1,Le=null,Ae=0;function de(){if(he=!0,clearTimeout(Le),Le=setTimeout(function(){he=!1},150),!t){var P=te(X,w);P?(y=!0,ee(X,w)):(y=!1,N.set(9999,9999,0))}}window.addEventListener("scroll",de,{passive:!0});var V=null;function ce(){if(V=requestAnimationFrame(ce),!!Re){Ae++;var P=Math.min(Be.getDelta(),.05),K=Be.elapsedTime;if(t)m+=d*P;else{var f=z-m;f=f%(Math.PI*2),f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),m+=f*.12,x+=(h-x)*.12}if(H&&(H.rotation.x=x,H.rotation.y=m,H.position.y=-15),ue){for(var Y=ue.userData.positions,J=0;J<ue.userData.count;J++)Y[J*3+1]+=Math.sin(K*.2+J)*.05,Y[J*3]+=Math.cos(K*.15+J*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-m*35*.35,ue.position.y=x*28*.35}v.position.x=300+Math.sin(K*.3)*100,v.position.y=350+Math.cos(K*.2)*80,A.intensity=2+Math.sin(K*.5)*.4,F.intensity=.8+Math.sin(K*.4+1)*.3,!(t&&he&&Ae%4!==0)&&(Se(P),a.render(n,e))}}return ce(),function(){cancelAnimationFrame(V),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",ve),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",de),clearTimeout(Le),Ye.disconnect(),n.traverse(function(P){P.geometry&&P.geometry.dispose(),P.material&&(P.material.map&&P.material.map.dispose(),P.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),H=null}}function Vt(i){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",i.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var v=new THREE.PointLight(13931578,2.4,1200);v.position.set(-300,-100,300),t.add(v);var A=new THREE.PointLight(5913114,1.2,900);A.position.set(0,200,-300),t.add(A);var p=new THREE.PointLight(16750916,1.3,600);p.position.set(0,-250,200),t.add(p);var F=0,z=Math.PI*2/6,m=8e4,h=.03,x=.95,o=.005,g=12e4,r=null,d,T,q,U,N,oe,O=0,y=!1,X=0,w=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function $(){var ee=new THREE.BufferGeometry;d=new Float32Array(g*3),T=new Float32Array(g*3),q=new Float32Array(g*3),U=new Float32Array(g*3),N=new Float32Array(g),oe=new Float32Array(g),ee.setAttribute("position",new THREE.BufferAttribute(d,3)),ee.setAttribute("color",new THREE.BufferAttribute(U,3)),ee.setAttribute("size",new THREE.BufferAttribute(N,1)),ee.setAttribute("alpha",new THREE.BufferAttribute(oe,1)),ee.setAttribute("velocity",new THREE.BufferAttribute(T,3));var te=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Q=new THREE.ShaderMaterial({vertexShader:te,fragmentShader:D,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(ee,Q),t.add(r)}function re(ee,te){return new Promise(function(D){try{var Q=512,fe=document.createElement("canvas");fe.width=fe.height=Q;var le=fe.getContext("2d"),ve=new DOMParser().parseFromString(ee,"image/svg+xml"),ge=ve.querySelector("svg");if(!ge){D([]);return}var Me=parseFloat(ge.getAttribute("width")||512),ue=parseFloat(ge.getAttribute("height")||512),Ie=ge.getAttribute("viewBox");if(Ie){var Be=Ie.split(/[\s,]+/);Me=+Be[2],ue=+Be[3]}var Re=Math.min(Q/Me,Q/ue)*.9,Ye=(Q-Me*Re)/2,he=(Q-ue*Re)/2;le.save(),le.translate(Ye,he),le.scale(Re,Re),le.fillStyle="white",ve.querySelectorAll("path,rect,circle").forEach(function(f){if(f.tagName==="path"){var Y=f.getAttribute("d");Y&&le.fill(new Path2D(Y))}else f.tagName==="rect"?le.fillRect(+f.getAttribute("x")||0,+f.getAttribute("y")||0,+f.getAttribute("width")||0,+f.getAttribute("height")||0):f.tagName==="circle"&&(le.beginPath(),le.arc(+f.getAttribute("cx")||0,+f.getAttribute("cy")||0,+f.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Le=le.getImageData(0,0,Q,Q).data,Ae=[],de=0;de<Q;de++)for(var V=0;V<Q;V++){var ce=(de*Q+V)*4;Le[ce+3]>30&&Ae.push({x:V,y:de,a:Le[ce+3]/255})}if(!Ae.length){D([]);return}for(var P=[],ce=0;ce<te;ce++){var K=Ae[Math.floor(Math.random()*Ae.length)];P.push({x:(K.x-Q/2)*1.2+(Math.random()-.5)*1.65,y:-(K.y-Q/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*K.a,a:K.a})}D(P)}catch(f){console.error(f),D([])}})}function j(ee){O=ee.length;for(var te=0;te<O;te++){var D=ee[te],Q=te*3;d[Q]=D.x,d[Q+1]=D.y+40,d[Q+2]=D.z,T[Q]=T[Q+1]=T[Q+2]=0,q[Q]=D.x,q[Q+1]=D.y,q[Q+2]=D.z;var fe=w[Math.floor(Math.random()*w.length)],le=.7+Math.random()*.4;U[Q]=fe.r*le,U[Q+1]=fe.g*le,U[Q+2]=fe.b*le,N[te]=1.8+Math.random()*3.8,oe[te]=.3+(D.a||.7)*.75}r.geometry.setDrawRange(0,O),["position","color","size","alpha"].forEach(function(ve){r.geometry.attributes[ve].needsUpdate=!0}),y=!0}function W(ee){return re(ee,Math.min(g,m)).then(function(te){te.length&&r&&j(te)})}function Z(ee){if(!(!y||!O)){X+=ee;for(var te=0;te<O;te++){var D=te*3,Q=te*1.37;T[D]+=Math.sin(X*.4+Q)*.008+Math.sin(X*1.1+Q*2.3)*.003,T[D+1]+=Math.cos(X*.35+Q*.7)*.008+Math.sin(X*.9+Q*1.5)*.004,T[D+2]+=Math.sin(X*.25+Q*1.1)*.004,T[D+1]-=h*.06,T[D]+=Math.sin(X*.25+d[D+1]*.008)*o*.6,T[D+2]+=Math.cos(X*.3+d[D]*.008)*o*.3;var fe=q[D],le=q[D+1]+40,ve=q[D+2],ge=fe-d[D],Me=le-d[D+1],ue=ve-d[D+2],Ie=Math.sqrt(ge*ge+Me*Me+ue*ue),Be=(te*48271&65535)/65535,Re=.003+Be*.003,Ye=1+Math.min(Ie*.002,.5),he=Re*Ye;T[D]+=ge*he,T[D+1]+=Me*he,T[D+2]+=ue*he;var Le=(te*16807&65535)/65535,Ae=x*(.92+Le*.06);T[D]*=Ae,T[D+1]*=Ae,T[D+2]*=Ae,d[D]+=T[D],d[D+1]+=T[D+1],d[D+2]+=T[D+2];var de=Math.sqrt(Math.pow(d[D]-q[D],2)+Math.pow(d[D+1]-q[D+1],2)+Math.pow(d[D+2]-q[D+2],2));oe[te]=.15+.55*(1-Math.min(de*.005,1))+Math.sin(X*1.5+te*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}$();for(var H=4e3,L=new THREE.BufferGeometry,S=new Float32Array(H*3),E=new Float32Array(H*3),l=0;l<H;l++){S[l*3]=(Math.random()-.5)*2200,S[l*3+1]=(Math.random()-.5)*1800,S[l*3+2]=-200-Math.random()*1800;var s=w[Math.floor(Math.random()*w.length)],c=.2+Math.random()*.3;E[l*3]=s.r*c,E[l*3+1]=s.g*c,E[l*3+2]=s.b*c}L.setAttribute("position",new THREE.BufferAttribute(S,3)),L.setAttribute("color",new THREE.BufferAttribute(E,3));var M=document.createElement("canvas");M.width=M.height=32;var _=M.getContext("2d"),k=_.createRadialGradient(16,16,0,16,16,16);k.addColorStop(0,"rgba(255,255,255,1)"),k.addColorStop(.3,"rgba(255,255,255,0.6)"),k.addColorStop(.7,"rgba(255,255,255,0.15)"),k.addColorStop(1,"rgba(255,255,255,0)"),_.fillStyle=k,_.fillRect(0,0,32,32);var u=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(M),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),C=new THREE.Points(L,u);t.add(C);var R='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';W(R);var ie=new THREE.Clock,pe=!0,Se=new IntersectionObserver(function(ee){pe=ee[0].isIntersecting},{threshold:0});Se.observe(i);var Oe=i.querySelectorAll("#logo-coords, #logo-drag-label");Oe.forEach(function(ee){ee.parentElement.style.display="none"});var We=null;function Ce(){if(We=requestAnimationFrame(Ce),!!pe){var ee=Math.min(ie.getDelta(),.05),te=ie.elapsedTime;F+=z*ee,r&&(r.rotation.y=F,r.position.y=5,r.scale.setScalar(.85));for(var D=0;D<H;D++)S[D*3+1]+=Math.sin(te*.2+D)*.05,S[D*3]+=Math.cos(te*.15+D*.5)*.03;L.attributes.position.needsUpdate=!0,C.rotation.y+=1e-4,C.position.x=-F*35*.35,a.position.x=300+Math.sin(te*.3)*100,a.position.y=350+Math.cos(te*.2)*80,v.intensity=2+Math.sin(te*.5)*.4,p.intensity=.8+Math.sin(te*.4+1)*.3,Z(ee),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(We),Se.disconnect(),t.traverse(function(ee){ee.geometry&&ee.geometry.dispose(),ee.material&&(ee.material.map&&ee.material.map.dispose(),ee.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var qt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Nt(i){let t=i.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(qt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Wn(t):Ht(t)}),function(){n=!0,e&&e()}}function Gt(i){let t=i.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(qt).then(function(){n||(e=Vt(t))}),function(){n=!0,e&&e()}}function Wn(i){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var v=new THREE.PointLight(16107370,3,1400);v.position.set(300,350,400),n.add(v);var A=new THREE.PointLight(13931578,2.4,1200);A.position.set(-300,-100,300),n.add(A);var p=new THREE.PointLight(5913114,1.2,900);p.position.set(0,200,-300),n.add(p);var F=new THREE.PointLight(16750916,1.3,600);F.position.set(0,-250,200),n.add(F);var z=0,m=0,h=0,x=0,o=!1,g=0,r=0,d=Math.PI*2/6,T=new THREE.Vector2(9999,9999),q=new THREE.Raycaster,U=120,N=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),O=new THREE.Vector3,y=!1,X=0,w=0,$=8e4,re=.03,j=.95,W=.005,Z=12e4,H=null,L,S,E,l,s,c,M=0,_=!1,k=!1,u=0,C=0,R=null,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function pe(){var I=new THREE.BufferGeometry;L=new Float32Array(Z*3),S=new Float32Array(Z*3),E=new Float32Array(Z*3),l=new Float32Array(Z*3),s=new Float32Array(Z),c=new Float32Array(Z),I.setAttribute("position",new THREE.BufferAttribute(L,3)),I.setAttribute("color",new THREE.BufferAttribute(l,3)),I.setAttribute("size",new THREE.BufferAttribute(s,1)),I.setAttribute("alpha",new THREE.BufferAttribute(c,1)),I.setAttribute("velocity",new THREE.BufferAttribute(S,3));var G=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,B=new THREE.ShaderMaterial({vertexShader:G,fragmentShader:b,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(I,B),n.add(H)}function Se(I,G){return new Promise(function(b){try{var B=512,se=document.createElement("canvas");se.width=se.height=B;var ae=se.getContext("2d"),ze=new DOMParser().parseFromString(I,"image/svg+xml"),be=ze.querySelector("svg");if(!be){b([]);return}var we=parseFloat(be.getAttribute("width")||512),Pe=parseFloat(be.getAttribute("height")||512),ke=be.getAttribute("viewBox");if(ke){var Ee=ke.split(/[\s,]+/);we=+Ee[2],Pe=+Ee[3]}var Ge=Math.min(B/we,B/Pe)*.9,De=(B-we*Ge)/2,xe=(B-Pe*Ge)/2;ae.save(),ae.translate(De,xe),ae.scale(Ge,Ge),ae.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(Te){if(Te.tagName==="path"){var Ke=Te.getAttribute("d");Ke&&ae.fill(new Path2D(Ke))}else Te.tagName==="rect"?ae.fillRect(+Te.getAttribute("x")||0,+Te.getAttribute("y")||0,+Te.getAttribute("width")||0,+Te.getAttribute("height")||0):Te.tagName==="circle"&&(ae.beginPath(),ae.arc(+Te.getAttribute("cx")||0,+Te.getAttribute("cy")||0,+Te.getAttribute("r")||0,0,Math.PI*2),ae.fill())}),ae.restore();for(var _e=ae.getImageData(0,0,B,B).data,He=[],Je=0;Je<B;Je++)for(var Qe=0;Qe<B;Qe++){var et=(Je*B+Qe)*4;_e[et+3]>30&&He.push({x:Qe,y:Je,a:_e[et+3]/255})}if(!He.length){b([]);return}for(var at=[],et=0;et<G;et++){var $e=He[Math.floor(Math.random()*He.length)];at.push({x:($e.x-B/2)*1.2+(Math.random()-.5)*1.65,y:-($e.y-B/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*$e.a,a:$e.a})}b(at)}catch(Te){console.error(Te),b([])}})}function Oe(I){M=I.length;for(var G=0;G<M;G++){var b=I[G],B=G*3;L[B]=b.x,L[B+1]=b.y+40,L[B+2]=b.z,S[B]=S[B+1]=S[B+2]=0,E[B]=b.x,E[B+1]=b.y,E[B+2]=b.z;var se=ie[Math.floor(Math.random()*ie.length)],ae=.7+Math.random()*.4;l[B]=se.r*ae,l[B+1]=se.g*ae,l[B+2]=se.b*ae,s[G]=1.8+Math.random()*3.8,c[G]=.3+(b.a||.7)*.75}H.geometry.setDrawRange(0,M),["position","color","size","alpha"].forEach(function(ze){H.geometry.attributes[ze].needsUpdate=!0}),_=!0,k=!1,u=1}function We(I){return Se(I,Math.min(Z,$)).then(function(G){G.length&&H&&Oe(G)})}function Ce(I){if(!(!_||!M)){C+=I;for(var G=0;G<M;G++){var b=G*3,B=G*1.37;if(S[b]+=Math.sin(C*.4+B)*.008+Math.sin(C*1.1+B*2.3)*.003,S[b+1]+=Math.cos(C*.35+B*.7)*.008+Math.sin(C*.9+B*1.5)*.004,S[b+2]+=Math.sin(C*.25+B*1.1)*.004,S[b+1]-=re*.06,S[b]+=Math.sin(C*.25+L[b+1]*.008)*W*.6,S[b+2]+=Math.cos(C*.3+L[b]*.008)*W*.3,y&&de==="interactive"){var se=L[b]-N.x,ae=L[b+1]-N.y,ze=L[b+2]-N.z,be=se*se+ae*ae+ze*ze,we=U*U;if(be<we&&be>.25){var Pe=Math.sqrt(be),ke=Pe/U,Ee=(G*2654435761&65535)/65535,Ge=.6+Ee*.8,De=Math.pow(1-ke,1.5+Ee),xe=1+Math.min(O.length()*.12,1),_e=De*Ge*1.2*xe,He=1/Pe;S[b]+=se*He*_e,S[b+1]+=ae*He*_e,S[b+2]+=ze*He*_e*.2;var Je=.02+Ee*.06;S[b]+=O.x*De*Je,S[b+1]+=O.y*De*Je;var Qe=De*.15;S[b]+=(Ee-.5)*Qe,S[b+1]+=((G*48271&65535)/65535-.5)*Qe}}var et=E[b],at=E[b+1]+40,$e=E[b+2],Te=et-L[b],Ke=at-L[b+1],st=$e-L[b+2],On=Math.sqrt(Te*Te+Ke*Ke+st*st),Bn=(G*48271&65535)/65535,Hn=.003+Bn*.003,Vn=1+Math.min(On*.002,.5),pt=Hn*Vn;S[b]+=Te*pt,S[b+1]+=Ke*pt,S[b+2]+=st*pt;var qn=(G*16807&65535)/65535,ht=j*(.92+qn*.06);S[b]*=ht,S[b+1]*=ht,S[b+2]*=ht,L[b]+=S[b],L[b+1]+=S[b+1],L[b+2]+=S[b+2];var Nn=Math.sqrt(Math.pow(L[b]-E[b],2)+Math.pow(L[b+1]-E[b+1],2)+Math.pow(L[b+2]-E[b+2],2));c[G]=.15+.55*(1-Math.min(Nn*.005,1))+Math.sin(C*1.5+G*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var ee=new THREE.Matrix4,te=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),D=new THREE.Vector3;function Q(I,G){var b=a.domElement.getBoundingClientRect();if(!(b.width===0||b.height===0)&&(T.set((I-b.left)/b.width*2-1,-((G-b.top)/b.height)*2+1),q.setFromCamera(T,e),q.ray.intersectPlane(te,D))){oe.copy(N),H&&N.copy(D).applyMatrix4(ee.copy(H.matrixWorld).invert()),O.subVectors(N,oe);var B=O.length();B>15&&O.multiplyScalar(15/B)}}var fe=null;function le(){return fe||(fe=i.closest('[data-flip-element="target"]')||i),fe}function ve(I,G){var b=le().getBoundingClientRect();return I>=b.left&&I<=b.right&&G>=b.top&&G<=b.bottom}var ge=i.querySelector("#logo-coords"),Me=i.querySelector("#logo-drag-label"),ue=!1;function Ie(I){if(X=I.clientX,w=I.clientY,t||de!=="interactive"){y=!1,N.set(9999,9999,0);return}var G=ve(I.clientX,I.clientY);if(G){y=!0,Q(I.clientX,I.clientY);var b=le().getBoundingClientRect(),B=Math.round(I.clientX-b.left),se=Math.round(I.clientY-b.top);ge&&(ge.textContent="X: "+B+"PX    Y: "+se+"PX")}else y=!1,N.set(9999,9999,0);o&&(z+=(I.clientX-g)*.005,h+=(I.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),g=I.clientX,r=I.clientY)}function Be(I){t||de!=="interactive"||ve(I.clientX,I.clientY)&&(o=!0,g=I.clientX,r=I.clientY)}function Re(){t||(o=!1,z=0,h=0,m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2))}window.addEventListener("mousemove",Ie),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Re);function Ye(){for(var I=4e3,G=new THREE.BufferGeometry,b=new Float32Array(I*3),B=new Float32Array(I*3),se=0;se<I;se++){b[se*3]=(Math.random()-.5)*2200,b[se*3+1]=(Math.random()-.5)*1800,b[se*3+2]=-200-Math.random()*1800;var ae=ie[Math.floor(Math.random()*ie.length)],ze=.2+Math.random()*.3;B[se*3]=ae.r*ze,B[se*3+1]=ae.g*ze,B[se*3+2]=ae.b*ze}G.setAttribute("position",new THREE.BufferAttribute(b,3)),G.setAttribute("color",new THREE.BufferAttribute(B,3));var be=document.createElement("canvas");be.width=be.height=32;var we=be.getContext("2d"),Pe=we.createRadialGradient(16,16,0,16,16,16);Pe.addColorStop(0,"rgba(255,255,255,1)"),Pe.addColorStop(.3,"rgba(255,255,255,0.6)"),Pe.addColorStop(.7,"rgba(255,255,255,0.15)"),Pe.addColorStop(1,"rgba(255,255,255,0)"),we.fillStyle=Pe,we.fillRect(0,0,32,32);var ke=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ee=new THREE.Points(G,ke);return Ee.userData={positions:b,count:I},n.add(Ee),Ee}pe();var he=Ye(),Le='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';We(Le);var Ae=new THREE.Clock,de="spin",V=null;function ce(){if(t){de="spin";return}if(V===null){var I=document.querySelector(".scaling-element-video");V=I&&getComputedStyle(I).display!=="none"}if(!V){de="spin";return}var G=window._flipProgress||0;G>.85?de="interactive":G>.7?de="transition":de="spin"}var P="spin",K=!0,f=new IntersectionObserver(function(I){K=I[0].isIntersecting},{threshold:0});f.observe(i);var Y=!1,J=null,ne=0;function Ue(){Y=!0,clearTimeout(J),J=setTimeout(function(){Y=!1},150);var I=ve(X,w);I?(y=!0,Q(X,w)):(y=!1,N.set(9999,9999,0))}window.addEventListener("scroll",Ue,{passive:!0});function Fe(){if(R=requestAnimationFrame(Fe),!!K){ne++;var I=Math.min(Ae.getDelta(),.05),G=Ae.elapsedTime;ce(),P==="interactive"&&de!=="interactive"&&(y=!1,N.set(9999,9999,0),o=!1);var b=de==="transition"||de==="interactive";if(b&&!ue?(ue=!0,Me&&(Me.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!b&&ue&&(ue=!1,Me&&(Me.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),P=de,y&&!ve(X,w)&&(y=!1,N.set(9999,9999,0)),de==="spin")m+=d*I,x+=(0-x)*.05;else if(de==="transition")m=m%(Math.PI*2),m>Math.PI&&(m-=Math.PI*2),m<-Math.PI&&(m+=Math.PI*2),m+=(0-m)*.025,x+=(0-x)*.025;else{var B=z-m;B=B%(Math.PI*2),B>Math.PI&&(B-=Math.PI*2),B<-Math.PI&&(B+=Math.PI*2),m+=B*.12,x+=(h-x)*.12}H&&(H.rotation.x=x,H.rotation.y=m,H.scale.setScalar(1),H.position.y=-15);for(var se=he.userData.positions,ae=0;ae<he.userData.count;ae++)se[ae*3+1]+=Math.sin(G*.2+ae)*.05,se[ae*3]+=Math.cos(G*.15+ae*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-m*35*.35,he.position.y=x*28*.35,v.position.x=300+Math.sin(G*.3)*100,v.position.y=350+Math.cos(G*.2)*80,A.intensity=2+Math.sin(G*.5)*.4,F.intensity=.8+Math.sin(G*.4+1)*.3,!(t&&Y&&ne%4!==0)&&(Ce(I),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(R),window.removeEventListener("mousemove",Ie),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",Ue),clearTimeout(J),f.disconnect(),n.traverse(function(I){I.geometry&&I.geometry.dispose(),I.material&&(I.material.map&&I.material.map.dispose(),I.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),H=null}}function Xt(i){let t=document.querySelector("[data-load-wrap]");if(!t)return null;ye.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),v=Array.from(t.querySelectorAll("[data-load-text]")),A=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),p=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:je},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(A.length&&p.set(A,{autoAlpha:1},0),v.length>=2){let F=new SplitText(v[0],{type:"lines,chars",mask:"lines"}),z=new SplitText(v[1],{type:"lines,chars",mask:"lines"});gsap.set([F.chars,z.chars],{autoAlpha:0,yPercent:125}),gsap.set(v,{autoAlpha:1}),p.to(F.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),p.to(F.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),p.to(z.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),p.to(z.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return p}function Wt(i){let n=[...(i||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(m=>{let h=m.parentElement;h&&(m.style.whiteSpace="nowrap",e.has(h)||e.set(h,[]),e.get(h).push(m))});function a(m){let h=getComputedStyle(m);return m.clientWidth-parseFloat(h.paddingLeft)-parseFloat(h.paddingRight)}function v(m,h){if(h<=0)return;let x=parseFloat(getComputedStyle(m).fontSize)||16;for(let o=0;o<5;o++){let g=m.getBoundingClientRect().width;if(g<=0)break;let r=h/g;if(Math.abs(r-1)<.002)break;x*=r,m.style.fontSize=x+"px"}}function A(){e.forEach((m,h)=>{let x=a(h);m.forEach(o=>v(o,x))})}let p=null;function F(){p||(p=requestAnimationFrame(()=>{p=null,A()}))}let z;return window.ResizeObserver&&(z=new ResizeObserver(F),e.forEach((m,h)=>z.observe(h))),window.addEventListener("resize",F),A(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(A),()=>{p&&cancelAnimationFrame(p),z&&z.disconnect(),window.removeEventListener("resize",F),n.forEach(m=>{m.style.whiteSpace="",m.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},Yt=.08,Yn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},$t={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function $n(i,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:i,transformOrigin:t}),n}function Kt(i){var t=i.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var v=a.getAttribute("data-marker-direction")||"right",A=a.getAttribute("data-marker-theme")||"#000000",p=a.getAttribute("data-marker-scroll-start")||"top 90%",F=A.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(A).trim()||A,z=$t[v]||$t.right,m=Yn[a.getAttribute("data-highlight-marker-reveal")]||null;m&&(F=m.bar);var h=a.closest("[data-cursor-label]"),x={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,g=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){x.timeline&&x.timeline.kill(),x.scrollTrigger&&x.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(y){y.remove()}),x.listeners.forEach(function(y){y.el.removeEventListener(y.type,y.fn)}),x.listeners=[],o=!1;var d=r.lines,T=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(d.forEach(function(y,X){gsap.set(y,{position:"relative",overflow:"hidden"});var w=$n(F,z.origin);gsap.set(w,{[z.prop]:0}),y.appendChild(w),m&&(gsap.set(y,{zIndex:0,color:m.text}),gsap.set(w,{zIndex:-1})),T.to(w,{[z.prop]:1,duration:Ve.duration,ease:Ve.ease},X*Yt);var $=function(){o&&(gsap.to(w,{[z.prop]:0,duration:Ve.duration,ease:Ve.ease}),m&&gsap.to(y,{color:m.hoverText,duration:Ve.duration,ease:Ve.ease}))},re=function(){o&&(gsap.to(w,{[z.prop]:1,duration:Ve.duration,ease:Ve.ease}),m&&gsap.to(y,{color:m.text,duration:Ve.duration,ease:Ve.ease}))};!m&&e&&(y.addEventListener("mouseenter",$),y.addEventListener("mouseleave",re),x.listeners.push({el:y,type:"mouseenter",fn:$},{el:y,type:"mouseleave",fn:re}))}),x.timeline=T,h){T.kill();var q=a.querySelectorAll(".highlight-marker-bar"),U=function(y){gsap.to(q,{[z.prop]:y,duration:Ve.duration,ease:Ve.ease,stagger:Yt,overwrite:!0})},N=function(){U(1)},oe=function(){U(0)};h.addEventListener("cursorlabel:enter",N),h.addEventListener("cursorlabel:leave",oe),x.listeners.push({el:h,type:"cursorlabel:enter",fn:N},{el:h,type:"cursorlabel:leave",fn:oe});return}var O=ScrollTrigger.create({trigger:a,start:p,once:!0,onEnter:function(){T.play()}});x.scrollTrigger=O}});x.split=g,n.push(x)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(v){v.el.removeEventListener(v.type,v.fn)}),a.split&&a.split.revert()})}}function jt(i){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=i.querySelector("[data-cursor-marquee-status]");if(!a)return;let v=a.querySelectorAll("[data-cursor-marquee-text-target]"),A=i.querySelectorAll("[data-cursor-marquee-text]");if(!A.length)return;let p=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),F=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),z=null,m=h=>{p(h.clientX),F(h.clientY)};return window.addEventListener("pointermove",m,{passive:!0}),A.forEach(h=>{h.addEventListener("mouseenter",()=>{z&&clearTimeout(z);let x=h.getAttribute("data-cursor-marquee-text")||"",o=(x.length||1)/e;v.forEach(g=>{g.textContent=x,g.style.animationPlayState="running",g.style.animationDuration=o+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),h.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),z&&clearTimeout(z),z=setTimeout(()=>{v.forEach(x=>{x.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",m),clearTimeout(z),gsap.killTweensOf(a)}}function Zt(i){i.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function Jt(i){let t=i.querySelectorAll("[data-flip-element='wrapper']"),n=i.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(p){window._flipProgress=p.progress}}}),t.forEach(function(p,F){let z=F+1;if(z<t.length){let m=t[z],h=m.getBoundingClientRect(),x=p.getBoundingClientRect(),o=h.top+window.pageYOffset+m.offsetHeight/2,g=x.top+window.pageYOffset+p.offsetHeight/2,r=o-g;e.add(Flip.fit(n,m,{duration:r,ease:"none"}))}})}a();let v,A=function(){clearTimeout(v),v=setTimeout(function(){a()},100)};return window.addEventListener("resize",A),function(){clearTimeout(v),window.removeEventListener("resize",A),e&&e.kill()}}var Kn="150%";function jn(i){let t=[];return i.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let v=document.createElementNS("http://www.w3.org/2000/svg","tspan");v.textContent=a,n.append(v),t.push(v)}}),t}var yt=new WeakMap;function Qt(i){let t=i.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(v){return Array.from(v.querySelectorAll("textPath")).map(function(A){return A.textContent})}),a=n.map(jn);return a.forEach(function(v){gsap.set(v,{fillOpacity:0})}),yt.set(i,{wrap:t,lines:n,lineChars:a}),function(){yt.delete(i),n.forEach(function(v,A){v.querySelectorAll("textPath").forEach(function(p,F){p.textContent=e[A][F]})})}}function en(i){let t=yt.get(i);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Kn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let v=t.lineChars[a];v.length&&n.fromTo(v,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/v.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function Et(i){var t=[];function n(o,g,r,d){o.addEventListener(g,r,d),t.push(function(){o.removeEventListener(g,r,d)})}i.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var g=o.getAttribute("data-player-src");if(!g)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(V){}try{r.removeAttribute("src"),r.load()}catch(V){}function d(V){o.getAttribute("data-player-status")!==V&&o.setAttribute("data-player-status",V)}function T(V){r.muted=!!V,o.setAttribute("data-player-muted",r.muted?"true":"false")}function q(V){o.setAttribute("data-player-fullscreen",V?"true":"false")}function U(V){o.setAttribute("data-player-activated",V?"true":"false")}o.hasAttribute("data-player-activated")||U(!1);var N=o.querySelector("[data-player-timeline]"),oe=o.querySelector("[data-player-progress]"),O=o.querySelector("[data-player-buffered]"),y=o.querySelector("[data-player-timeline-handle]"),X=o.querySelectorAll("[data-player-time-duration]"),w=o.querySelectorAll("[data-player-time-progress]"),$=o.getAttribute("data-player-update-size"),re=o.getAttribute("data-player-lazy"),j=re==="true",W=re==="meta",Z=o.getAttribute("data-player-autoplay")==="true",H=o.getAttribute("data-player-muted")==="true",L=!1;Z?(T(!0),r.loop=!0):T(H),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),Z&&(r.autoplay=!1);var S=!!r.canPlayType("application/vnd.apple.mpegurl"),E=S&&"ManagedMediaSource"in window,l=!!(window.Hls&&Hls.isSupported())&&!E;if($==="true"&&!W&&!j){var s=r.preload;r.preload="metadata";var c=function(){z(o,$,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",c),r.preload=s||""};n(r,"loadedmetadata",c,{once:!0}),r.src=g}function M(){x(g,l).then(function(V){V.width&&V.height&&z(o,$,V.width,V.height),X.length&&isFinite(V.duration)&&V.duration>0&&v(X,a(V.duration)),F(o,L)})}var _=!1,k=!1,u="";function C(){if(!_){if(_=!0,o._hls){try{o._hls.destroy()}catch(ce){}o._hls=null}if(E)r.preload=j||W?"auto":r.preload,r.src=g,n(r,"loadedmetadata",function(){F(o,L),$==="true"&&z(o,$,r.videoWidth,r.videoHeight),X.length&&v(X,a(r.duration))},{once:!0});else if(l){var V=new Hls({maxBufferLength:10});V.attachMedia(r),V.on(Hls.Events.MEDIA_ATTACHED,function(){V.loadSource(g)}),V.on(Hls.Events.MANIFEST_PARSED,function(){if(F(o,L),$==="true"){var ce=V.levels||[],P=A(ce);P&&P.width&&P.height&&z(o,$,P.width,P.height)}}),V.on(Hls.Events.LEVEL_LOADED,function(ce,P){P&&P.details&&isFinite(P.details.totalduration)&&X.length&&v(X,a(P.details.totalduration))}),o._hls=V}else r.src=g}}W?(M(),r.preload="none"):j?r.preload="none":C();function R(){k=!0,r.paused||r.ended?((j||W)&&!_&&C(),L=!0,u="",d("loading"),p(r)):(u="manual",r.pause())}function ie(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function pe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function Oe(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function We(){pe()||r.webkitDisplayingFullscreen?Oe():Se()}n(document,"fullscreenchange",function(){q(pe())}),n(document,"webkitfullscreenchange",function(){q(pe())}),n(r,"webkitbeginfullscreen",function(){q(!0)}),n(r,"webkitendfullscreen",function(){q(!1)}),n(o,"click",function(V){var ce=V.target.closest("[data-player-control]");if(!(!ce||!o.contains(ce))){var P=ce.getAttribute("data-player-control");P==="play"||P==="pause"||P==="playpause"?R():P==="mute"?ie():P==="fullscreen"&&We()}});function Ce(){X.length&&v(X,a(r.duration)),w.length&&v(w,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),m(o,$,r)}),n(r,"loadeddata",function(){m(o,$,r)}),n(r,"playing",function(){m(o,$,r)}),n(r,"durationchange",Ce);var ee;function te(){if(r.duration){var V=r.currentTime/r.duration*100;oe&&(oe.style.transform="translateX("+(-100+V)+"%)"),y&&(y.style.left=V+"%")}}function D(){te(),!r.paused&&!r.ended&&(ee=requestAnimationFrame(D))}function Q(){if(!(!O||!r.duration||!r.buffered.length)){var V=r.buffered.end(r.buffered.length-1),ce=V/r.duration*100;O.style.transform="translateX("+(-100+ce)+"%)"}}if(n(r,"progress",Q),n(r,"loadedmetadata",Q),n(r,"durationchange",Q),n(r,"play",function(){U(!0),cancelAnimationFrame(ee),D(),d("playing")}),n(r,"playing",function(){L=!1,d("playing")}),n(r,"pause",function(){L=!1,cancelAnimationFrame(ee),te(),d("paused")}),n(r,"waiting",function(){d("loading")}),n(r,"canplay",function(){F(o,L)}),n(r,"ended",function(){L=!1,cancelAnimationFrame(ee),te(),d("paused"),U(!1)}),N){let V=function(J){ue||(ue=N.getBoundingClientRect());var ne=(J-ue.left)/ue.width;return ne<0&&(ne=0),ne>1&&(ne=1),ne},ce=function(J){if(r.duration){var ne=J*100;oe&&(oe.style.transform="translateX("+(-100+ne)+"%)"),y&&(y.style.left=ne+"%"),w.length&&v(w,a(J*r.duration))}},P=function(J){r.duration&&(J-ge<Me||(ge=J,r.currentTime=ve))},K=function(J){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),o.setAttribute("data-timeline-drag","true"),ue=N.getBoundingClientRect();var ne=V(J.clientX);ve=ne*r.duration,ce(ne),P(performance.now()),N.setPointerCapture&&N.setPointerCapture(J.pointerId),window.addEventListener("pointermove",f,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),J.preventDefault()}},f=function(J){if(fe){var ne=V(J.clientX);ve=ne*r.duration,ce(ne),P(performance.now()),J.preventDefault()}},Y=function(){fe&&(fe=!1,o.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=ve,le?p(r):(te(),Ce()),window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",Y))};var fe=!1,le=!1,ve=0,ge=0,Me=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(N,"pointerdown",K,{passive:!1}),y&&n(y,"pointerdown",K,{passive:!1})}var Ie,Be=3e3;function Re(V){o.getAttribute("data-player-hover")!==V&&o.setAttribute("data-player-hover",V)}function Ye(){clearTimeout(Ie),Ie=setTimeout(function(){Re("idle")},Be)}function he(){Re("active"),Ye()}n(o,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var Le=!1;function Ae(V){var ce=o.getBoundingClientRect();V.clientX>=ce.left&&V.clientX<=ce.right&&V.clientY>=ce.top&&V.clientY<=ce.bottom&&he()}if(n(o,"pointerenter",function(){he(),Le||(Le=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(o,"pointerleave",function(){Re("idle"),clearTimeout(Ie),Le&&(Le=!1,window.removeEventListener("pointermove",Ae))}),Z){var de=new IntersectionObserver(function(V){V.forEach(function(ce){var P=ce.isIntersecting&&ce.intersectionRatio>0;P?((j||W)&&!_&&C(),r.paused?(u="",L=!0,d("loading"),p(r)):d("playing")):!r.paused&&!r.ended&&(u="io",r.pause(),d("paused"))})},{threshold:.1});de.observe(o)}t.push(function(){if(cancelAnimationFrame(ee),clearTimeout(Ie),de&&de.disconnect(),o._hls){try{o._hls.destroy()}catch(V){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(V){}})});function e(o){return(o<10?"0":"")+o}function a(o){if(!isFinite(o)||o<0)return"00:00";var g=Math.floor(o),r=Math.floor(g/3600),d=Math.floor(g%3600/60),T=g%60;return r>0?r+":"+e(d)+":"+e(T):e(d)+":"+e(T)}function v(o,g){o.forEach(function(r){r.textContent=g})}function A(o){return!o||!o.length?null:o.reduce(function(g,r){return(r.width||0)>(g.width||0)?r:g},o[0])}function p(o){var g=o.play();g&&typeof g.then=="function"&&g.catch(function(){})}function F(o,g){!g&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function z(o,g,r,d){if(!(g!=="true"||!r||!d)){var T=o.querySelector("[data-player-before]");T&&(T.style.paddingTop=d/r*100+"%")}}function m(o,g,r){if(g==="true"){var d=o.querySelector("[data-player-before]");if(d){var T=d.style.paddingTop&&d.style.paddingTop!=="0%";!T&&r.videoWidth&&r.videoHeight&&z(o,g,r.videoWidth,r.videoHeight)}}}function h(o,g){try{return new URL(g,o).toString()}catch(r){return g}}function x(o,g){return new Promise(function(r){if(g&&window.Hls&&Hls.isSupported())try{var d=new Hls,T={width:0,height:0,duration:NaN},q=!1,U=!1;d.on(Hls.Events.MANIFEST_PARSED,function(O,y){var X=y&&y.levels||d.levels||[],w=A(X);w&&w.width&&w.height&&(T.width=w.width,T.height=w.height,q=!0)}),d.on(Hls.Events.LEVEL_LOADED,function(O,y){y&&y.details&&isFinite(y.details.totalduration)&&(T.duration=y.details.totalduration,U=!0)}),d.on(Hls.Events.ERROR,function(){try{d.destroy()}catch(O){}r(T)}),d.on(Hls.Events.LEVEL_LOADED,function(){try{d.destroy()}catch(O){}r(T)}),d.loadSource(o);return}catch(O){r({width:0,height:0,duration:NaN});return}function N(O){for(var y=O.split(/\r?\n/),X=0,w=0,$=null,re=null,j=0;j<y.length;j++){var W=y[j];if(W.indexOf("#EXT-X-STREAM-INF:")===0)re=W;else if(re&&W&&W[0]!=="#"){$||($=W.trim());var Z=/RESOLUTION=(\d+)x(\d+)/.exec(re);if(Z){var H=parseInt(Z[1],10),L=parseInt(Z[2],10);H>X&&(X=H,w=L)}re=null}}return{bestW:X,bestH:w,media:$}}function oe(O){for(var y=0,X=/#EXTINF:([\d.]+)/g,w;w=X.exec(O);)y+=parseFloat(w[1]);return y}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(O){if(!O.ok)throw new Error("master");return O.text()}).then(function(O){var y=N(O);if(!y.media){r({width:y.bestW||0,height:y.bestH||0,duration:NaN});return}var X=h(o,y.media);return fetch(X,{credentials:"omit",cache:"no-store"}).then(function(w){if(!w.ok)throw new Error("media");return w.text()}).then(function(w){r({width:y.bestW||0,height:y.bestH||0,duration:oe(w)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var Zn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Jn="(min-width: 768px)";function nn(i){if(!i.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=Et(i),n=tn(i);else{let e=!1;return ct(Zn).catch(function(){}).then(function(){e||(t=Et(i),n=tn(i))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function tn(i){if(!i.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",v=!1,A,p,F,z,m,h,x="",o="",g="",r=(s,c=i)=>c.querySelector(s),d=s=>r(`[data-mini-showreel-lightbox="${s}"]`),T=s=>r(`[data-mini-showreel-player="${s}"]`),q=s=>s.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",s)||s,U=(s,c)=>{let M=s.width,_=M/c;return _>s.height&&(_=s.height,M=_*c),{left:s.left+(s.width-M)/2,top:s.top+(s.height-_)/2,width:M,height:_}},N=s=>{let c=q(s).getBoundingClientRect(),M=s.getBoundingClientRect(),_=M.width>0&&M.height>0?M.width/M.height:16/9;return U(c,_)},oe=(s,c)=>gsap.set(s,{position:"fixed",left:c.left,top:c.top,width:c.width,height:c.height,margin:0,x:0,y:0});function O(s){a&&i.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(c=>c.setAttribute("data-mini-showreel-status",s))}function y(){o=(A==null?void 0:A.style.zIndex)||"",g=(p==null?void 0:p.style.zIndex)||"",A&&(A.style.zIndex=String(e)),p&&(p.style.zIndex=String(e))}function X(){A&&(A.style.zIndex=o),p&&(p.style.zIndex=g)}function w(s){let c=T(s);if(!c)return;let M=c.querySelector("[data-bunny-player-init]"),_=c.querySelector("video");if(_){if(M){let k=M.querySelector('[data-player-control="play"], [data-player-control="playpause"]');k&&(_.paused||_.ended)&&k.click();return}try{_.play()}catch(k){}}}function $(s){let c=T(s);if(!c)return;let M=c.querySelector("[data-bunny-player-init]"),_=c.querySelector("video");_&&(_.muted=!0,M&&M.setAttribute("data-player-muted","true"),(_.paused||_.ended)&&w(s))}function re(){X(),a="",v=!1,A=p=F=z=m=h=null,x="",o="",g="",ye.start()}function j(s){if(!s||v||(A=d(s),p=T(s),!A||!p)||(F=r("[data-mini-showreel-target]",A),!F))return;a=s,v=!0,ye.stop(),p.dataset.flipId=a,x=p.style.cssText||"",z=p.parentElement,m=p.nextSibling,y(),O("active"),w(a);let c=Flip.getState(p),M=N(F);A.appendChild(p),oe(p,M),h=Flip.from(c,{duration:t,ease:n,absolute:!0,scale:!1})}function W(s){!v||!p||s&&s!==a||($(a),O("not-active"),h&&h.kill(),h=Flip.fit(p,z,{duration:t,ease:n,scale:!1,onComplete:()=>{z.insertBefore(p,m),p.style.cssText=x,re()}}))}function Z(){!v||!p||(h&&h.kill(),$(a),O("not-active"),z.insertBefore(p,m),p.style.cssText=x,re())}function H(){!v||!p||!F||oe(p,N(F))}function L(s){let c=s.target.closest("[data-mini-showreel-open]");c&&(s.preventDefault(),j(c.getAttribute("data-mini-showreel-open")||""))}function S(s){let c=s.target.closest("[data-mini-showreel-close]");c&&(s.preventDefault(),W(c.getAttribute("data-mini-showreel-close")||""))}function E(s){s.key==="Escape"&&W("")}let l=gsap.matchMedia();return l.add(Jn,function(){return i.addEventListener("click",L),document.addEventListener("click",S),window.addEventListener("keydown",E),window.addEventListener("resize",H),function(){Z(),i.removeEventListener("click",L),document.removeEventListener("click",S),window.removeEventListener("keydown",E),window.removeEventListener("resize",H)}}),function(){l.revert(),Z()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",i=>{it.x=i.clientX,it.y=i.clientY,it.known=!0},{passive:!0});function qe(i){let t=e=>i(e.clientX,e.clientY),n=()=>{it.known&&i(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var Ne=1920,Xe=1080,Tt="#E5E5E5",St="#000000",rn="http://www.w3.org/2000/svg";function on(i){let t=i.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(rn,"svg");n.setAttribute("viewBox",`0 0 ${Ne} ${Xe}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(l,s)=>{let c=document.createElementNS(rn,l);return c.setAttribute("fill",s),n.appendChild(c),c},a=e("polygon",Tt),v=e("polygon",St),A=e("rect",St),p=e("rect",Tt),F=e("rect",Tt),z=e("rect",St);[A,p,F,z].forEach(l=>l.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let m=(l,s,c,M,_)=>{l.setAttribute("x",s),l.setAttribute("y",c),l.setAttribute("width",Math.max(0,M)),l.setAttribute("height",Math.max(0,_))},h={x:Ne*(2/3),y:Xe*(1/3)},x=.1,o=.9,g={x:h.x,y:h.y},r={x:h.x,y:h.y},d={x:h.x,y:h.y},T=!1,q=()=>gsap.to(d,{x:gsap.utils.random(Ne*.327,Ne*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:q}),U=()=>gsap.to(d,{y:gsap.utils.random(Xe*.193,Xe*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:U});q(),U();function N(){let l=gsap.utils.clamp(Ne*x,Ne*o,g.x),s=Ne-l,c=gsap.utils.clamp(Xe*x,Xe*o,g.y),M=Xe-c;a.setAttribute("points",`0,${c} ${l},0 ${Ne},${c} ${Ne},${Xe} 0,${Xe}`),v.setAttribute("points",`${Ne},${c} ${l},0 ${l},${c}`),m(A,0,c,l,M);let _=l*.25,k=M*(2/3);m(p,l/2-_/2,c+M-k,_,k),m(F,l,c,s,M);let u=s*.5,C=M/3;m(z,l+s/2-u/2,c+M/2-C/2,u,C)}let oe=.1,O=.03;function y(){let s=1-Math.pow(1-(T?oe:O),gsap.ticker.deltaRatio(60)),c=T?r:d;g.x+=(c.x-g.x)*s,g.y+=(c.y-g.y)*s,N()}let X=(l,s)=>{let c=t.getBoundingClientRect();!c.width||!c.height||(r.x=gsap.utils.clamp(0,Ne,(l-c.left)/c.width*Ne),r.y=gsap.utils.clamp(0,Xe,(s-c.top)/c.height*Xe),T=!0)},w=()=>{T=!1},$=(l,s)=>{let c=t.getBoundingClientRect();l>=c.left&&l<=c.right&&s>=c.top&&s<=c.bottom?X(l,s):w()},j=window.matchMedia("(hover: hover) and (pointer: fine)").matches?qe($):null,W=l=>{let s=l.touches[0];s&&X(s.clientX,s.clientY)},Z={passive:!0};t.addEventListener("touchstart",W,Z),t.addEventListener("touchmove",W,Z),t.addEventListener("touchend",w,Z),t.addEventListener("touchcancel",w,Z);let H=!1,L=()=>{H||(H=!0,gsap.ticker.add(y))},S=()=>{H&&(H=!1,gsap.ticker.remove(y))},E=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:l=>l.isActive?L():S()});return N(),L(),function(){S(),E.kill(),gsap.killTweensOf(d),j&&j(),t.removeEventListener("touchstart",W,Z),t.removeEventListener("touchmove",W,Z),t.removeEventListener("touchend",w,Z),t.removeEventListener("touchcancel",w,Z),n.remove()}}var Qn="http://www.w3.org/2000/svg";var er=4.1343749999999995,tr="#AFAFAF",nr="#000000",rr=5e3,or=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],ar=0,an=(i,t)=>{if(i<0||t<0||i>=20||t>=20)return!1;let n=20/2;return Math.hypot(i+.5-n,t+.5-n)<=n},Ze=(i,t)=>{let n=document.createElementNS(Qn,i);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function sn(i){let t=i.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++ar;e.setAttribute("data-pulse-dots-paused","");let v=Ze("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});v.style.setProperty("--pd-step",`${31.5}px`);let A=Ze("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});A.append(Ze("feGaussianBlur",{in:"SourceGraphic",stdDeviation:er.toFixed(2)}),Ze("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let p=Ze("defs",{});p.appendChild(A);let F=Ze("rect",{width:1e3,height:1e3,fill:tr}),z=Ze("g",{filter:`url(#${a})`,fill:nr});for(let h=0;h<20;h++)for(let x=0;x<20;x++){if(!an(x,h))continue;let o=or.filter(q=>an(x+q.dx,h+q.dy)),g=o[Math.floor(Math.random()*o.length)],r=185+x*31.5+27.5625/2,d=185+h*31.5+27.5625/2,T=Ze("g",{transform:`rotate(${g.deg} ${r} ${d})`});T.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*rr)}ms`),T.append(Ze("circle",{class:"pulse-dots__dot is--first",cx:r,cy:d,r:27.5625/2}),Ze("circle",{class:"pulse-dots__dot is--last",cx:r,cy:d,r:27.5625/2})),z.appendChild(T)}v.append(p,F,z),e.appendChild(v);let m=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:h=>e.toggleAttribute("data-pulse-dots-paused",!h.isActive)});e.toggleAttribute("data-pulse-dots-paused",!m.isActive),n.push(()=>{m.kill(),e.removeAttribute("data-pulse-dots-paused"),v.remove()})}),()=>n.forEach(e=>e())}var vt=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,cn=`#version 300 es
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
}`],dn=`#version 300 es
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
}`,vn=`#version 300 es
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
}`,mn=[`#version 300 es
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
fragColor = color;}`],pn=[`#version 300 es
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
}`],hn=`#version 300 es
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
}`;var wt=60,sr=1.5,cr=1,gn=150,At=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function xn(i){let t=i.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function v(E,l){let s=e.createShader(E);return e.shaderSource(s,l),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let A=[];function p(E,l=cn){let s=e.createProgram(),c=v(e.VERTEX_SHADER,l),M=v(e.FRAGMENT_SHADER,E);e.attachShader(s,c),e.attachShader(s,M),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(c),e.deleteShader(M),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let _={},k=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let C=0;C<k;C++){let R=e.getActiveUniform(s,C);_[R.name]=e.getUniformLocation(s,R.name)}let u={p:s,loc:_};return A.push(u),u}let F={bg:p(ln,vt),shapes:un.map(E=>p(E,dn)),trailSim:p(fn,vt),trail:p(vn),blur:mn.map(E=>p(E)),bloom:pn.map(E=>p(E)),gmap:p(hn,vt)},z=e.createVertexArray();e.bindVertexArray(z);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let x=[];function o(E,l,s=!1){let c=e.createTexture();e.bindTexture(e.TEXTURE_2D,c),s&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,E,l,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,E,l,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let M=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,M),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let _={tex:c,fb:M,w:E,h:l};return x.push(_),_}function g(){x.forEach(E=>{e.deleteTexture(E.tex),e.deleteFramebuffer(E.fb)}),x.length=0}function r(E,l,s,c){e.useProgram(E.p);let M=l?l.w:n.width,_=l?l.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,l?l.fb:null),e.viewport(0,0,M,_);let k=E.loc;k.uMVMatrix&&e.uniformMatrix4fv(k.uMVMatrix,!1,At),k.uPMatrix&&e.uniformMatrix4fv(k.uPMatrix,!1,At),k.uTextureMatrix&&e.uniformMatrix4fv(k.uTextureMatrix,!1,At),k.uResolution&&e.uniform2f(k.uResolution,M,_),k.uArtboardResolution&&e.uniform2f(k.uArtboardResolution,1920,1920),k.uAspectRatio&&e.uniform1f(k.uAspectRatio,1),k.uMousePos&&e.uniform2f(k.uMousePos,d.x,d.y),k.uIsMask&&e.uniform1i(k.uIsMask,0),k.uParentTrackMouse&&e.uniform1f(k.uParentTrackMouse,0);let u=0;Object.keys(s).forEach(C=>{k[C]&&(e.activeTexture(e.TEXTURE0+u),e.bindTexture(e.TEXTURE_2D,s[C].tex),e.uniform1i(k[C],u),u++)}),Object.keys(c||{}).forEach(C=>{if(!k[C])return;let R=c[C];Array.isArray(R)?e.uniform2f(k[C],R[0],R[1]):e.uniform1f(k[C],R)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let d={x:.5,y:.5},T={x:.5,y:.5},q=0,U=null,N=0;function oe(){g();let E=Math.min(sr,window.devicePixelRatio||1),l=Math.max(1,Math.round(t.clientWidth*E)),s=Math.max(1,Math.round(t.clientHeight*E));n.width=l,n.height=s;let c=k=>[Math.max(1,Math.round(l*k)),Math.max(1,Math.round(s*k))];U={a:o(l,s),b:o(l,s),pp:[o(...c(.5),!0),o(...c(.5),!0)],trail:o(l,s),blur1:o(...c(1)),blur2:o(...c(1)),blur3:o(...c(1)),blur4:o(...c(1)),bth:o(...c(1)),bd1:o(...c(1)),bd2:o(...c(1)),bs1:o(...c(1)),bs2:o(...c(1)),bloom:o(l,s)},r(F.bg,U.a,{});let M=U.a,_=U.b;F.shapes.forEach(k=>{r(k,_,{uBgTexture:M});let u=M;M=_,_=u}),U.base=M,N=0}function O(){if(!U)return;let E=U.pp[N],l=U.pp[1-N];r(F.trailSim,l,{uPingPongTexture:E},{uTime:q,uPreviousMousePos:[T.x,T.y]}),N=1-N,r(F.trail,U.trail,{uTexture:U.base,uPingPongTexture:l}),r(F.blur[0],U.blur1,{uTexture:U.trail}),r(F.blur[1],U.blur2,{uTexture:U.blur1}),r(F.blur[2],U.blur3,{uTexture:U.blur2}),r(F.blur[3],U.blur4,{uTexture:U.blur3});let s=U.blur4;r(F.bloom[0],U.bth,{uTexture:s}),r(F.bloom[1],U.bd1,{uTexture:U.bth}),r(F.bloom[2],U.bd2,{uTexture:U.bd1,uBgTexture:s}),r(F.bloom[3],U.bs1,{uTexture:U.bd2}),r(F.bloom[4],U.bs2,{uTexture:U.bs1,uBgTexture:s}),r(F.bloom[5],U.bloom,{uTexture:U.bs2,uBgTexture:s}),r(F.gmap,null,{uTexture:U.bloom},{uTime:0}),T.x=d.x,T.y=d.y}let y=gn,w=qe((E,l)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(d.x=(E-s.left)/s.width,d.y=1-(l-s.top)/s.height,y=0,Z())}),$=null,re=0,j=!1;function W(E){if(!j||y>=gn){$=null;return}if($=requestAnimationFrame(W),E-re<1e3/wt-1)return;let l=re?Math.min(E-re,100):1e3/wt;re=E,q+=cr*(l/(1e3/wt)),O(),y++}function Z(){j&&!$&&(T.x=d.x,T.y=d.y,re=0,$=requestAnimationFrame(W))}let H=new IntersectionObserver(([E])=>{j=E.isIntersecting,j?Z():$&&(cancelAnimationFrame($),$=null)});H.observe(t);let L=null,S=new ResizeObserver(()=>{clearTimeout(L),L=setTimeout(()=>{oe(),O()},60)});return S.observe(t),oe(),O(),function(){$&&cancelAnimationFrame($),$=null,clearTimeout(L),H.disconnect(),S.disconnect(),w(),g(),A.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(m),e.deleteBuffer(h),e.deleteVertexArray(z);let l=e.getExtension("WEBGL_lose_context");l&&l.loseContext(),n.remove()}}var bn=`#version 300 es
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
}`,yn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;
in vec3 vVertexPosition;uniform sampler2D uSourceImage;uniform vec2 uArtboardResolution;
uniform vec2 uMousePos;
uniform sampler2D uBgTexture;const float TAU = 6.28318530718;
const float PI = 3.14159265359;out vec4 fragColor;vec4 sampleImage(vec2 canvasUV, vec2 mouseOffset, vec2 mouseRotOffset) {
vec2 canvasPos = vec2(canvasUV.x * uArtboardResolution.x, (1.0 - canvasUV.y) * uArtboardResolution.y);
vec2 imageUV;float imageAspect = vec2(1920, 1920).x / vec2(1920, 1920).y;
float canvasAspect = uArtboardResolution.x / uArtboardResolution.y;
vec2 fitSize = vec2(
(canvasAspect < imageAspect) ? uArtboardResolution.y * imageAspect : uArtboardResolution.x,
(canvasAspect < imageAspect) ? uArtboardResolution.y : uArtboardResolution.x / imageAspect
);
vec2 offset = (uArtboardResolution - fitSize) * 0.5;
vec2 adjustedPos = canvasPos + mouseOffset;
imageUV = (adjustedPos - offset) / fitSize;
vec2 flippedUV = vec2(imageUV.x, 1.0 - imageUV.y);
vec4 color = textureLod(uSourceImage, flippedUV, 0.0);
if (imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0) {
return color;
} else {
return vec4(0.0);
}
}vec4 getNormalOutput(vec4 color, vec4 background) {
return mix(background, color + background * (1.0 - color.a), 1.0000 * color.a);
}vec4 getOutputByMode(vec4 color, vec4 background) {
return getNormalOutput(color, background);
}vec4 applyImageAdjustments(vec4 color) {color.rgb *= color.a;color.rgb = clamp(color.rgb, 0.0, 1.0);
return color;
}vec4 getCompositeOutput(vec2 uv, vec2 mouseOffsetPx, vec2 mouseRotOffset) {
vec4 background = vec4(0);background = texture(uBgTexture, vTextureCoord);
vec4 color = sampleImage(uv, mouseOffsetPx, mouseRotOffset);
color = applyImageAdjustments(color);return getOutputByMode(color, background);
}void main() {
vec2 uv = vTextureCoord;
vec2 mouseOffsetUV = (uMousePos - 0.5) * 0.0000;
vec2 mouseOffsetPx = mouseOffsetUV;
vec2 mouseRotOffset = (uMousePos - 0.5) * 0.0000 * PI * 0.5;
uv -= mouseOffsetUV;
fragColor = getCompositeOutput(uv, mouseOffsetPx, mouseRotOffset);
}`,En=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec2 vTextureCoord;uniform sampler2D uTexture;uniform float uTime;uniform sampler2D uMaskTexture;
uniform int uIsMask;
uniform vec2 uMousePos;
uniform vec2 uResolution;
uniform float uParentTrackMouse;vec4 permute(vec4 t) {
return t * (t * 34.0 + 133.0);
}vec3 grad(float hash) {
vec3 cube = mod(floor(hash / vec3(1.0, 2.0, 4.0)), 2.0) * 2.0 - 1.0;vec3 cuboct = cube;float index0 = step(0.0, 1.0 - floor(hash / 16.0));
float index1 = step(0.0, floor(hash / 16.0) - 1.0);cuboct.x *= 1.0 - index0;
cuboct.y *= 1.0 - index1;
cuboct.z *= 1.0 - (1.0 - index0 - index1);float type = mod(floor(hash / 8.0), 2.0);
vec3 rhomb = (1.0 - type) * cube + type * (cuboct + cross(cube, cuboct));vec3 grad = cuboct * 1.22474487139 + rhomb;grad *= (1.0 - 0.042942436724648037 * type) * 3.5946317686139184;return grad;
}
vec4 bccNoiseDerivativesPart(vec3 X) {
vec3 b = floor(X);
vec4 i4 = vec4(X - b, 2.5);
vec3 v1 = b + floor(dot(i4, vec4(.25)));
vec3 v2 = b + vec3(1, 0, 0) + vec3(-1, 1, 1) * floor(dot(i4, vec4(-.25, .25, .25, .35)));
vec3 v3 = b + vec3(0, 1, 0) + vec3(1, -1, 1) * floor(dot(i4, vec4(.25, -.25, .25, .35)));
vec3 v4 = b + vec3(0, 0, 1) + vec3(1, 1, -1) * floor(dot(i4, vec4(.25, .25, -.25, .35)));
vec4 hashes = permute(mod(vec4(v1.x, v2.x, v3.x, v4.x), 289.0));
hashes = permute(mod(hashes + vec4(v1.y, v2.y, v3.y, v4.y), 289.0));
hashes = mod(permute(mod(hashes + vec4(v1.z, v2.z, v3.z, v4.z), 289.0)), 48.0);
vec3 d1 = X - v1; vec3 d2 = X - v2; vec3 d3 = X - v3; vec3 d4 = X - v4;
vec4 a = max(0.75 - vec4(dot(d1, d1), dot(d2, d2), dot(d3, d3), dot(d4, d4)), 0.0);
vec4 aa = a * a; vec4 aaaa = aa * aa;
vec3 g1 = grad(hashes.x); vec3 g2 = grad(hashes.y);
vec3 g3 = grad(hashes.z); vec3 g4 = grad(hashes.w);
vec4 extrapolations = vec4(dot(d1, g1), dot(d2, g2), dot(d3, g3), dot(d4, g4));
vec3 derivative = -8.0 * mat4x3(d1, d2, d3, d4) * (aa * a * extrapolations)
+ mat4x3(g1, g2, g3, g4) * aaaa;
return vec4(derivative, dot(aaaa, extrapolations));
}
vec4 bccNoiseDerivatives_XYBeforeZ(vec3 X) {
mat3 orthonormalMap = mat3(
0.788675134594813, -0.211324865405187, -0.577350269189626,
-0.211324865405187, 0.788675134594813, -0.577350269189626,
0.577350269189626, 0.577350269189626, 0.577350269189626);X = orthonormalMap * X;
vec4 result = bccNoiseDerivativesPart(X) + bccNoiseDerivativesPart(X + 144.5);return vec4(result.xyz * orthonormalMap, result.w);
}const int MAX_ITERATIONS = 12;
const float MAX_ITERATIONS_F = 12.0;
const float HALF_ITERATIONS = 6.0;
const float INV_MAX_ITERATIONS = 1.0 / MAX_ITERATIONS_F;out vec4 fragColor;const float PI = 3.14159265359;mat2 rot(float a) {
return mat2(cos(a), -sin(a), sin(a), cos(a));
}float interleavedGradientNoise(vec2 st) {
return fract(52.9829189 * fract(dot(st, vec2(0.06711056, 0.00583715))));
}vec4 applyNoiseBlur(vec2 uv) {
float aspectRatio = uResolution.x / uResolution.y;
vec2 aspect = vec2(aspectRatio, 1.0);
vec2 dir = vec2(0.8000, 1.0 - 0.8000) * (5.0 * 0.1500);
float angle = 0.3139 * -2.0 * PI;
float loopPeriod = 312.0;
float loopPhase = fract(uTime / loopPeriod);
float loopSpan = loopPeriod * 0.025;
float basePhase = 0.0300 * 2.0;
vec2 noiseUv = rot(angle) * (uv * aspect - vec2(0.5, 0.5) * aspect) * dir;vec4 noiseA = bccNoiseDerivatives_XYBeforeZ(vec3(noiseUv, basePhase + loopPhase * loopSpan));
vec4 noiseB = bccNoiseDerivatives_XYBeforeZ(vec3(noiseUv, basePhase + (loopPhase - 1.0) * loopSpan));
float blendAngle = loopPhase * 1.57079632679;
vec2 noiseXY = (noiseA.xy - 0.5) * cos(blendAngle) + (noiseB.xy - 0.5) * sin(blendAngle);
vec2 noiseOffset = noiseXY * (0.5900 + 0.01) * 0.25;
float jitter = interleavedGradientNoise(gl_FragCoord.xy) - 0.5;vec4 color = vec4(0.0);for (int i = 0; i < MAX_ITERATIONS; i++) {
float offset = float(i) - HALF_ITERATIONS + jitter;
vec2 st = uv + noiseOffset * (offset * INV_MAX_ITERATIONS);
color += texture(uTexture, st);
}return color / MAX_ITERATIONS_F;
}void main() {
vec4 color = applyNoiseBlur(vTextureCoord);if(uIsMask == 1) {
vec2 maskPos = mix(vec2(0), (uMousePos - 0.5), uParentTrackMouse);
vec4 maskColor = texture(uMaskTexture, vTextureCoord - maskPos);
color = color * (maskColor.a * maskColor.a);
}fragColor = color;}`,Tn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;in vec3 vVertexPosition;
in vec2 vTextureCoord;
uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;
uniform int uIsMask;
uniform vec2 uMousePos;
uniform vec2 uResolution;
uniform float uParentTrackMouse;
out vec4 fragColor;vec2 distortUV(vec2 uv) {
vec2 pos = vec2(0.5, 0.5);
float aspectRatio = uResolution.x / uResolution.y;
float gridSize = (0.2000 + 0.01) * 0.083;
float baseGrid = 1.0 / gridSize;
vec2 cellSize = vec2(1.0 / (baseGrid * aspectRatio), 1.0 / baseGrid) * mix(aspectRatio, 1.0 / aspectRatio, 0.5);
float skew = (1.0000 - 0.5) * 4.0;
cellSize *= vec2(1.0 + max(skew, 0.0), 1.0 + max(-skew, 0.0));
vec2 gridOrigin = pos;
if (24 > 0) {
cellSize.x = 1.0 / float(24);
gridOrigin.x = pos.x - 0.5;
}
vec2 offsetUv = uv - gridOrigin;
float mouseOffX = uMousePos.x - gridOrigin.x;
float w = cellSize.x;
float cm = floor(mouseOffX / w);
float xm = (cm + 0.5) * w;
float h = w * 0.5;
float mult = 1.0 + 0.0000 * 5.0;
float H = h * mult;
float dx = offsetUv.x - xm;
float absDx = abs(dx);
float sampleDx = (absDx <= H) ? (dx / mult) : (sign(dx) * (h + (absDx - H)));
offsetUv.x = xm + sampleDx;vec2 cell = floor(offsetUv / cellSize);
vec2 cellCenter = (cell + 0.5) * cellSize;
vec2 pixelatedCoord = cellCenter + gridOrigin;return vec2(
mix(uv.x, pixelatedCoord.x, vec2(1, 0).x),
mix(uv.y, pixelatedCoord.y, vec2(1, 0).y)
);
}void main() {
vec2 uv = distortUV(vTextureCoord);
vec4 color = texture(uTexture, uv);if(uIsMask == 1) {
vec2 maskPos = mix(vec2(0), (uMousePos - 0.5), uParentTrackMouse);
vec4 maskColor = texture(uMaskTexture, vTextureCoord - maskPos);
color = color * (maskColor.a * maskColor.a);
}fragColor = color;}`,Sn=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision highp float;
in vec3 vVertexPosition;
in vec2 vTextureCoord;
uniform sampler2D uTexture;
vec4 applyLayerMixAlpha(vec4 color, vec4 bg, float amount) {
return mix(bg, color, amount);
}vec3 blend (int blendMode, vec3 src, vec3 dst) {
return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}out vec4 fragColor;
void main() {
vec2 uv = vTextureCoord;
vec4 bg = texture(uTexture, uv);
vec4 color = bg;if(bg.a > 0.001) {
float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
vec3 duotoneColor = mix(vec3(0.08235294117647059, 0.08235294117647059, 0.08235294117647059), vec3(0.7176470588235294, 0.7176470588235294, 0.7176470588235294), gray);
duotoneColor = blend(5, color.rgb, duotoneColor);color = applyLayerMixAlpha(vec4(duotoneColor, 1.0), bg, 1.0000);
}
fragColor = color;}`;var wn="https://cdn.prod.website-files.com/609cc71571f11228bb986695/6ad8527f9a59edc53a03cfc6_profile.avif",An=60,ur=1.5,dr=.26,vr=6,fr=1.5,mr=.06,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function Cn(i){let t=i.querySelector("[data-om-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();let l=document.createElement("img");return l.src=wn,l.alt="",Object.assign(l.style,{position:"absolute",inset:"0",width:"100%",height:"100%",objectFit:"cover",filter:"grayscale(1)"}),t.appendChild(l),()=>l.remove()}let a=[];function v(l,s){let c=e.createShader(l);return e.shaderSource(c,s),e.compileShader(c),e.getShaderParameter(c,e.COMPILE_STATUS)||console.error("[om-fx] shader",e.getShaderInfoLog(c)),c}function A(l,s=bn){let c=e.createProgram(),M=v(e.VERTEX_SHADER,s),_=v(e.FRAGMENT_SHADER,l);e.attachShader(c,M),e.attachShader(c,_),e.bindAttribLocation(c,0,"aVertexPosition"),e.bindAttribLocation(c,1,"aTextureCoord"),e.linkProgram(c),e.deleteShader(M),e.deleteShader(_),e.getProgramParameter(c,e.LINK_STATUS)||console.error("[om-fx]",e.getProgramInfoLog(c));let k={},u=e.getProgramParameter(c,e.ACTIVE_UNIFORMS);for(let R=0;R<u;R++){let ie=e.getActiveUniform(c,R);k[ie.name]=e.getUniformLocation(c,ie.name)}let C={p:c,loc:k};return a.push(C),C}let p={image:A(yn,Pn),blur:A(En),stripes:A(Tn),duotone:A(Sn)},F=e.createVertexArray();e.bindVertexArray(F);let z=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,z),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let h={tex:e.createTexture(),ready:!1};e.bindTexture(e.TEXTURE_2D,h.tex),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));let x=new Image;x.crossOrigin="anonymous",x.decoding="async",x.onload=()=>{h.tex&&(e.bindTexture(e.TEXTURE_2D,h.tex),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,x),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),h.ready=!0,N(),O())},x.src=wn;let o=[];function g(l,s){let c=e.createTexture();e.bindTexture(e.TEXTURE_2D,c),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,l,s,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let M=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,M),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let _={tex:c,fb:M,w:l,h:s};return o.push(_),_}function r(){o.forEach(l=>{e.deleteTexture(l.tex),e.deleteFramebuffer(l.fb)}),o.length=0}let d={x:.5,y:.5};function T(l,s,c,M){e.useProgram(l.p);let _=s?s.w:n.width,k=s?s.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,s?s.fb:null),e.viewport(0,0,_,k);let u=l.loc;u.uMVMatrix&&e.uniformMatrix4fv(u.uMVMatrix,!1,Ct),u.uPMatrix&&e.uniformMatrix4fv(u.uPMatrix,!1,Ct),u.uTextureMatrix&&e.uniformMatrix4fv(u.uTextureMatrix,!1,Ct),u.uResolution&&e.uniform2f(u.uResolution,_,k),u.uArtboardResolution&&e.uniform2f(u.uArtboardResolution,1920,1920),u.uAspectRatio&&e.uniform1f(u.uAspectRatio,1),u.uMousePos&&e.uniform2f(u.uMousePos,d.x,d.y),u.uIsMask&&e.uniform1i(u.uIsMask,0),u.uParentTrackMouse&&e.uniform1f(u.uParentTrackMouse,0);let C=0;Object.keys(c).forEach(R=>{u[R]&&(e.activeTexture(e.TEXTURE0+C),e.bindTexture(e.TEXTURE_2D,c[R].tex),e.uniform1i(u[R],C),C++)}),Object.keys(M||{}).forEach(R=>{u[R]&&e.uniform1f(u[R],M[R])}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let q=null;function U(){r();let l=Math.min(ur,window.devicePixelRatio||1),s=Math.max(1,Math.round(t.clientWidth*l)),c=Math.max(1,Math.round(t.clientHeight*l));n.width=s,n.height=c,q={bg:g(s,c),base:g(s,c),blur:g(Math.max(1,Math.round(s*.5)),Math.max(1,Math.round(c*.5))),stripes:g(s,c)},N()}function N(){q&&T(p.image,q.base,{uBgTexture:q.bg,uSourceImage:h})}let oe=0;function O(){q&&(T(p.blur,q.blur,{uTexture:q.base},{uTime:oe}),T(p.stripes,q.stripes,{uTexture:q.blur}),T(p.duotone,null,{uTexture:q.stripes}))}let y=0,X=0,w=null,re=qe((l,s)=>{let c=n.getBoundingClientRect();if(!c.width)return;d.x=(l-c.left)/c.width,d.y=1-(s-c.top)/c.height;let M=d.x>=0&&d.x<=1&&d.y>=0&&d.y<=1,_=performance.now();if(M&&w){let k=Math.max(8,_-w.t)/1e3,u=Math.hypot(d.x-w.x,d.y-w.y)/k;X=Math.max(X,Math.min(1,u/fr))}w=M?{x:d.x,y:d.y,t:_}:null}),j=null,W=0,Z=!1;function H(l){if(j=requestAnimationFrame(H),l-W<1e3/An-1)return;let s=W?Math.min(l-W,100)/(1e3/An):1;W=l,y+=(X-y)*(1-Math.pow(1-mr,s)),X*=Math.pow(.85,s),oe+=dr*(1+vr*y)*s,O()}let L=new IntersectionObserver(([l])=>{Z=l.isIntersecting,Z&&!j&&(W=0,j=requestAnimationFrame(H)),!Z&&j&&(cancelAnimationFrame(j),j=null)});L.observe(t);let S=null,E=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(()=>{U(),O()},60)});return E.observe(t),U(),O(),function(){j&&cancelAnimationFrame(j),j=null,clearTimeout(S),L.disconnect(),E.disconnect(),re(),x.onload=null,r(),e.deleteTexture(h.tex),h.tex=null,a.forEach(c=>e.deleteProgram(c.p)),e.deleteBuffer(z),e.deleteBuffer(m),e.deleteVertexArray(F);let s=e.getExtension("WEBGL_lose_context");s&&s.loseContext(),n.remove()}}function Mn(i){let t=i.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",v="rgba(0, 0, 0, 0.2)",A="rgba(0, 0, 0, 0.75)",p=2.125,F=1.5,z=24,m=.5,h="20px",x=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},g={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},d=[],T,q,U,N,oe,O,y=performance.now();function X(u,C){let R=document.createElement("div");R.style.cssText=`position:absolute;visibility:hidden;width:${u};`,C.appendChild(R);let ie=R.getBoundingClientRect().width;return R.remove(),ie}function w(u,C){let R=document.createElement("span");R.style.color=u,C.appendChild(R);let ie=getComputedStyle(R).color;R.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ie,Se.fillRect(0,0,1,1);let Oe=[...Se.getImageData(0,0,1,1).data];return Oe[3]/=255,Oe}function $(u,C,R){return`rgba(${u.map((ie,pe)=>ie+(C[pe]-ie)*R).join(",")})`}function re(u,C){Object.assign(u,{from:u.value,to:C,start:performance.now()})}function j(u,C){if(!m)return u.value=u.to;let R=Math.min(Math.max((C-u.start)/(m*1e3),0),1);u.value=u.from+(u.to-u.from)*(1-Math.pow(1-R,4))}t.forEach(u=>{let C=document.createElement("canvas"),R=C.getContext("2d");C.setAttribute("aria-hidden","true"),Object.assign(C.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(u).position==="static"&&(u.style.position="relative"),u.prepend(C),d.push({element:u,canvas:C,ctx:R,width:0,height:0,visible:!1,inactive:w(u.getAttribute("data-dots-color-inactive")||v,u),active:w(u.getAttribute("data-dots-color-active")||A,u)})});function W(){return d.some(({element:u})=>{let C=u.getBoundingClientRect();return o.x>=C.left&&o.x<=C.right&&o.y>=C.top&&o.y<=C.bottom})}function Z(u,C){let R=u.element.getBoundingClientRect(),ie=R.left-C.left,pe=R.top-C.top,Se=o.cx-C.left,Oe=o.cy-C.top,We=p*(1+(F-1)*r.value);u.ctx.clearRect(0,0,u.width,u.height);for(let Ce=0;Ce<u.rows;Ce++){let ee=u.oy+Ce*u.sy,te=pe+ee;for(let D=0;D<u.cols;D++){let Q=u.ox+D*u.sx,fe=ie+Q,le=x&&g.value?Math.max(0,1-Math.hypot(fe-Se,te-Oe)/oe)*g.value:0,ve=q*(1+(We-1)*le);u.ctx.fillStyle=$(u.inactive,u.active,le),a==="square"?u.ctx.fillRect(Q-ve/2,ee-ve/2,ve,ve):(u.ctx.beginPath(),u.ctx.arc(Q,ee,ve/2,0,Math.PI*2),u.ctx.fill())}}}function H(u=!1){let C=t[0].getBoundingClientRect();d.forEach(R=>(!u||R.visible)&&Z(R,C))}function L(u){if(O=null,!d.some(R=>R.visible))return;let C=Math.min((u-y)/1e3,.1);if(y=u,j(g,u),j(r,u),!m)o.cx=o.x,o.cy=o.y;else{let R=1-Math.exp(-C*6/m);o.cx+=(o.x-o.cx)*R,o.cy+=(o.y-o.cy)*R}H(!0),O=requestAnimationFrame(L)}function S(){x&&!O&&d.some(u=>u.visible)&&(y=performance.now(),O=requestAnimationFrame(L))}function E(){T=Math.min(devicePixelRatio||1,2),q=X(e,t[0]),U=X(n,t[0]),N=q+U,oe=N*z;let u=X(h,t[0])+q/2,C=R=>{let ie=R-2*u,pe=ie>=0?Math.floor(ie/N)+1:0;return{count:pe,offset:u,step:pe>1?ie/(pe-1):N}};d.forEach(R=>{let ie=R.element.getBoundingClientRect();R.width=ie.width,R.height=ie.height;let pe=C(ie.width),Se=C(ie.height);R.cols=pe.count,R.ox=pe.offset,R.sx=pe.step,R.rows=Se.count,R.oy=Se.offset,R.sy=Se.step,R.canvas.width=Math.round(ie.width*T),R.canvas.height=Math.round(ie.height*T),R.ctx.setTransform(T,0,0,T,0,0)}),H(),S()}let l=(u,C)=>{o.x=u,o.y=C;let R=W();R!==o.active&&(o.active=R,re(g,+R),R?(o.cx=o.x,o.cy=o.y):re(r,0)),S()},s=null,c=()=>o.active&&re(r,1),M=()=>re(r,0);x&&(s=qe(l),window.addEventListener("pointerdown",c),window.addEventListener("pointerup",M));let _=new IntersectionObserver(u=>{u.forEach(C=>{let R=d.find(ie=>ie.element===C.target);R&&(R.visible=C.isIntersecting)}),x?S():H(!0)}),k=new ResizeObserver(E);return t.forEach(u=>{_.observe(u),k.observe(u)}),window.addEventListener("resize",E),E(),function(){O&&cancelAnimationFrame(O),O=null,x&&(s&&s(),window.removeEventListener("pointerdown",c),window.removeEventListener("pointerup",M)),window.removeEventListener("resize",E),_.disconnect(),k.disconnect(),d.forEach(u=>u.canvas.remove()),d.length=0}}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Rn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},pr=i=>{let t=Math.floor(i),n=i-t,e=n*n*(3-2*n);return Rn(t)*(1-e)+Rn(t+1)*e};function Fn(i){let t=i.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],v=null,A=0,p=18,F=0,z=0,m=0,h=-1e5,x=-1e5,o=!1,g=!1;function r(){v&&v.revert(),t.textContent="";let w=getComputedStyle(t);A=parseFloat(w.paddingTop),p=parseFloat(w.lineHeight),F=t.offsetHeight;let $=Math.max(1,Math.floor((F-A-parseFloat(w.paddingBottom))/p)),re=document.createDocumentFragment();for(let j=0;j<$;j++){let W=document.createElement("div");W.className="type-field__row",W.textContent=n,re.appendChild(W)}t.appendChild(re),t.setAttribute("aria-hidden","true"),v=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((j,W)=>({chars:j.querySelectorAll(".type-field__char"),cur:a[W]?a[W].cur:0,drawn:0}))}})}function d(w){let $=Math.max(0,Math.min(w.chars.length,Math.round(w.cur)));if($===w.drawn)return;let re=Math.min($,w.drawn),j=Math.max($,w.drawn);for(let W=re;W<j;W++)w.chars[W].style.visibility=W<$?"visible":"hidden";w.drawn=$}function T(w,$){if(!a.length)return;let re=Math.min($,50)/16.667,j=E=>1-Math.pow(1-E,re),W=ye.scroll,Z=Math.min(Math.max(z-W,0),m-W-F);x+=(h-Z-A-x)*j(rt.followEase);let H=Math.floor(x/p),L=W*.004,S=o&&h>=z-W&&h<=m-W;for(let E=0;E<a.length;E++){let l=a[E],s=l.chars.length,c=Math.abs(E-H),M=0;if(S){if(c===0)M=s;else if(c<=rt.radius){let _=1-c/(rt.radius+1);M=1+Math.min(rt.maxSide,_*(1-rt.ragged/2+rt.ragged*pr(E*1.3+L)))*(s-1)}}l.cur+=(M-l.cur)*j(rt.ease),d(l)}}function q(){g||(gsap.ticker.add(T),g=!0)}function U(){g&&(gsap.ticker.remove(T),g=!1)}let N=qe((w,$)=>{x<-1e4&&(x=$),h=$,o=!0}),oe=()=>{o=!1};document.documentElement.addEventListener("mouseleave",oe),r();let O=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(w){z=w.start+window.innerHeight,m=w.end},onToggle(w){w.isActive?q():U()}});O.isActive&&q();let y,X=()=>{clearTimeout(y),y=setTimeout(()=>{Math.floor((t.offsetHeight-A-parseFloat(getComputedStyle(t).paddingBottom))/p)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",X),function(){U(),clearTimeout(y),N(),document.documentElement.removeEventListener("mouseleave",oe),window.removeEventListener("resize",X),O.kill(),v&&v.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var zn={duration:.5,ease:"power3"};function Ln(i){let t=i.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let v=gsap.quickTo(a,"x",zn),A=gsap.quickTo(a,"y",zn),p=0,F=0,z=!1,m=new ResizeObserver(()=>{p=a.offsetWidth,F=a.offsetHeight});m.observe(a),p=a.offsetWidth,F=a.offsetHeight;let x=qe((g,r)=>{let d=e.getBoundingClientRect();if(!(g>=d.left&&g<=d.right&&r>=d.top&&r<=d.bottom)){z&&(z=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let q=gsap.utils.clamp(0,Math.max(0,d.width-p),g-d.left-p/2),U=gsap.utils.clamp(0,Math.max(0,d.height-F),r-d.top-F/2);if(!z){z=!0,v(q,q),A(U,U),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}v(q),A(U)}),o=()=>{z&&(z=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{x(),document.documentElement.removeEventListener("mouseleave",o),m.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var hr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],gr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],xr="#FFFFFF";var Un="power3.out";function In(i){let t=i.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],v=[],A=[];function p(){if(v.length&&v[0].isConnected)return;let h=e.querySelectorAll(":scope > div > div");a=(h.length?[...h]:[e]).map(o=>SplitText.create(o,{type:"chars"})),v=a.flatMap(o=>o.chars),A=h.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],v.forEach(o=>{o.dataset.orig=o.textContent})}function F(h){h.textContent=h.dataset.orig,h.style.border=""}let z=()=>{p(),A.forEach(x=>{x.el.style.overflow="visible"});let h=(v.length-1)/2;v.forEach((x,o)=>{gsap.to(x,{color:xr,ease:Un,duration:.3,delay:Math.abs(o-h)*.03,overwrite:"auto",onStart:()=>{let g=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);g==1&&(x.textContent=gsap.utils.random(gr)),r==1&&(x.style.border=`1px solid ${gsap.utils.random(hr)}`)}})})},m=()=>{if(!v.length)return;let h=getComputedStyle(e).color,x=(v.length-1)/2;A.forEach(o=>{o.el.style.overflow=o.overflow}),v.forEach((o,g)=>{gsap.to(o,{color:h,ease:Un,duration:.3,delay:Math.abs(g-x)*.03,overwrite:"auto",onStart:()=>F(o)})})};e.addEventListener("mouseenter",z),e.addEventListener("mouseleave",m),n.push(()=>{e.removeEventListener("mouseenter",z),e.removeEventListener("mouseleave",m),gsap.killTweensOf(v),a.forEach(h=>h.revert()),a=[],v=[],A=[]})}),()=>n.forEach(e=>e())}function Mt(i,t){let n=null;me(Nt(i)),me(on(i)),me(In(i)),me(Mn(i)),me(Qt(i)),me(Gt(i)),me(nn(i));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Xt(i):null,n?me(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),me(Wt(i)),me(Kt(i)),me(jt(i)),me(dt(i)),ut(i),Zt(i),n}function ft(i){me(en(i)),i.querySelector("[data-flip-element]")&&window.innerWidth>991&&me(Jt(i)),me(Fn(i)),me(Ln(i)),me(sn(i)),me(xn(i)),me(Cn(i)),ScrollTrigger.sort()}var br={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(i){var t=[];return i.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(v){gsap.set(n,{autoAlpha:1});var A=br[e],p={yPercent:110,duration:A.duration,stagger:A.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?p.delay=.5:p.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(v[e],p)}}))}),function(){t.forEach(function(n){n.revert()})}}var kn=window.matchMedia("(prefers-reduced-motion: reduce)"),Rt=.9;function Dn(i){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{i.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return kn.matches||!n?e.set(i,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:lt,duration:Rt,ease:je},0),e.fromTo(i,{y:"0vh"},{y:"-25vh",duration:Rt,ease:je},0),e.set(n,{autoAlpha:0}),e)}function Ft(i,t,n="100vh"){let e=gsap.timeline();return kn.matches?e.set(i,{autoAlpha:1}):(e.set(i,{zIndex:3},0),e.fromTo(i,{y:n},{y:"0vh",duration:Rt,ease:je},0)),e.add("pageReady"),e.call(function(){gsap.set(i,{clearProps:"zIndex"}),t(i)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function zt(i,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(i,{position:"relative"}),Ft(i,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,Lt=!1;function Ut(i){gsap.set(i,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),ye.scrollTo(0,{immediate:!0,force:!0}),ye.resize()}var _n={sync:!0,beforeLeave(){Lt=bt({keepCurtain:!0}),ye.stop(),ot||(ot=xt())},beforeEnter(i){ot||(ot=xt()),gsap.set(i.next.container,{position:"fixed",top:0,left:0,right:0}),Ot(),Mt(i.next.container,!1)},leave(i){return Dn(i.current.container,i.next.container)},enter(i){return Lt&&(kt(),Lt=!1),me(mt(i.next.container)),Ft(i.next.container,Ut)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(i){Bt(i),ft(i.next.container),ye.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:i}){if(!i||!i.href)return!1;let t=new URL(i.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",..._n,once(i){let t=document.querySelector("[data-menu-status]");Dt(),_t(),t&&(ut(t),dt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=i.next.container,e=Mt(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");me(mt(n)),zt(n,function(v){Ut(v),ft(v),ye.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(ye.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),me(mt(n)),zt(n,function(a){Ut(a),ft(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),ye.start()})})})}))}},{name:"self",..._n}]}),window.addEventListener("pageshow",function(i){i.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

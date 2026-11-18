(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Ee=new Lenis({lerp:.08,wheelMultiplier:1});Ee.on("scroll",ScrollTrigger.update);gsap.ticker.add(i=>{Ee.raf(i*1e3)});gsap.ticker.lagSmoothing(0);var xt=[];function he(i){typeof i=="function"&&xt.push(i)}function bt(){let i=xt,t=ScrollTrigger.getAll();return xt=[],function(){i.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Un="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Un);var Ke="parallax",ut=.8;var Hn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",Dt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",nt=null,yt=function(){return!1};function It(){nt&&gsap.timeline().to(nt,{clipPath:Dt,duration:.9,ease:Ke,overwrite:!0},0).fromTo(nt,{filter:"brightness(1)"},{filter:"brightness("+(1-ut)+")",duration:.9,ease:Ke},0).set(nt,{clearProps:"filter"})}function Ut(){let i=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!i||!t)return;nt=t.querySelector(".nav-bg"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",i.setAttribute("aria-expanded",a),a?(Ee.stop(),document.body.style.overflow="hidden"):(Ee.start(),document.body.style.overflow="")}function e(a){nt&&gsap.to(nt,{clipPath:a?Hn:Dt,duration:.9,ease:Ke,overwrite:!0})}i.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),yt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function Ht(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function _t(){let i=function(n){return n.replace(/\/$/,"")||"/"},t=i(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&i(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Bt(i){let n=new DOMParser().parseFromString(i.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function dt(i){let t=i.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let u=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();u&&navigator.clipboard.writeText(u).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function vt(i){let t=i.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,u=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),p=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=u+" "+p}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function lt(i){return Pt[i]||(Pt[i]=new Promise(function(t,n){let e=document.createElement("script");e.src=i,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[i]}function Ot(i){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),n.add(u);var A=new THREE.PointLight(13931578,2.4,1200);A.position.set(-300,-100,300),n.add(A);var p=new THREE.PointLight(5913114,1.2,900);p.position.set(0,200,-300),n.add(p);var C=new THREE.PointLight(16750916,1.3,600);C.position.set(0,-250,200),n.add(C);var M=0,v=0,x=0,P=0,o=!1,h=0,r=0,g=Math.PI*2/6,S=new THREE.Vector2(9999,9999),$=new THREE.Raycaster,L=120,q=new THREE.Vector3(9999,9999,0),se=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,E=!1,N=0,T=0,j=8e4,ie=.03,ee=.95,G=.005,Q=12e4,B=null,F,w,X,I,c,s,f=0,R=!1,Y=0,d=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function m(){var y=new THREE.BufferGeometry;F=new Float32Array(Q*3),w=new Float32Array(Q*3),X=new Float32Array(Q*3),I=new Float32Array(Q*3),c=new Float32Array(Q),s=new Float32Array(Q),y.setAttribute("position",new THREE.BufferAttribute(F,3)),y.setAttribute("color",new THREE.BufferAttribute(I,3)),y.setAttribute("size",new THREE.BufferAttribute(c,1)),y.setAttribute("alpha",new THREE.BufferAttribute(s,1)),y.setAttribute("velocity",new THREE.BufferAttribute(w,3));var W=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,l=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,V=new THREE.ShaderMaterial({vertexShader:W,fragmentShader:l,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});B=new THREE.Points(y,V),n.add(B)}function k(y,W){return new Promise(function(l){try{var V=512,Z=document.createElement("canvas");Z.width=Z.height=V;var re=Z.getContext("2d"),De=new DOMParser().parseFromString(y,"image/svg+xml"),Fe=De.querySelector("svg");if(!Fe){l([]);return}var z=parseFloat(Fe.getAttribute("width")||512),O=parseFloat(Fe.getAttribute("height")||512),b=Fe.getAttribute("viewBox");if(b){var U=b.split(/[\s,]+/);z=+U[2],O=+U[3]}var ce=Math.min(V/z,V/O)*.9,ae=(V-z*ce)/2,ze=(V-O*ce)/2;re.save(),re.translate(ae,ze),re.scale(ce,ce),re.fillStyle="white",De.querySelectorAll("path,rect,circle").forEach(function(be){if(be.tagName==="path"){var _e=be.getAttribute("d");_e&&re.fill(new Path2D(_e))}else be.tagName==="rect"?re.fillRect(+be.getAttribute("x")||0,+be.getAttribute("y")||0,+be.getAttribute("width")||0,+be.getAttribute("height")||0):be.tagName==="circle"&&(re.beginPath(),re.arc(+be.getAttribute("cx")||0,+be.getAttribute("cy")||0,+be.getAttribute("r")||0,0,Math.PI*2),re.fill())}),re.restore();for(var ye=re.getImageData(0,0,V,V).data,Te=[],Pe=0;Pe<V;Pe++)for(var Ue=0;Ue<V;Ue++){var we=(Pe*V+Ue)*4;ye[we+3]>30&&Te.push({x:Ue,y:Pe,a:ye[we+3]/255})}if(!Te.length){l([]);return}for(var Ge=[],we=0;we<W;we++){var He=Te[Math.floor(Math.random()*Te.length)];Ge.push({x:(He.x-V/2)*1.2+(Math.random()-.5)*1.65,y:-(He.y-V/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*He.a,a:He.a})}l(Ge)}catch(be){console.error(be),l([])}})}function K(y){f=y.length;for(var W=0;W<f;W++){var l=y[W],V=W*3;F[V]=l.x,F[V+1]=l.y+40,F[V+2]=l.z,w[V]=w[V+1]=w[V+2]=0,X[V]=l.x,X[V+1]=l.y,X[V+2]=l.z;var Z=d[Math.floor(Math.random()*d.length)],re=.7+Math.random()*.4;I[V]=Z.r*re,I[V+1]=Z.g*re,I[V+2]=Z.b*re,c[W]=1.8+Math.random()*3.8,s[W]=.3+(l.a||.7)*.75}B.geometry.setDrawRange(0,f),["position","color","size","alpha"].forEach(function(De){B.geometry.attributes[De].needsUpdate=!0}),R=!0}function oe(y){return k(y,Math.min(Q,j)).then(function(W){W.length&&B&&K(W)})}function pe(y){if(!(!R||!f)){Y+=y;for(var W=0;W<f;W++){var l=W*3,V=W*1.37;if(w[l]+=Math.sin(Y*.4+V)*.008+Math.sin(Y*1.1+V*2.3)*.003,w[l+1]+=Math.cos(Y*.35+V*.7)*.008+Math.sin(Y*.9+V*1.5)*.004,w[l+2]+=Math.sin(Y*.25+V*1.1)*.004,w[l+1]-=ie*.06,w[l]+=Math.sin(Y*.25+F[l+1]*.008)*G*.6,w[l+2]+=Math.cos(Y*.3+F[l]*.008)*G*.3,E){var Z=F[l]-q.x,re=F[l+1]-q.y,De=F[l+2]-q.z,Fe=Z*Z+re*re+De*De,z=L*L;if(Fe<z&&Fe>.25){var O=Math.sqrt(Fe),b=O/L,U=(W*2654435761&65535)/65535,ce=.6+U*.8,ae=Math.pow(1-b,1.5+U),ze=1+Math.min(_.length()*.12,1),ye=ae*ce*1.2*ze,Te=1/O;w[l]+=Z*Te*ye,w[l+1]+=re*Te*ye,w[l+2]+=De*Te*ye*.2;var Pe=.02+U*.06;w[l]+=_.x*ae*Pe,w[l+1]+=_.y*ae*Pe;var Ue=ae*.15;w[l]+=(U-.5)*Ue,w[l+1]+=((W*48271&65535)/65535-.5)*Ue}}var we=X[l],Ge=X[l+1]+40,He=X[l+2],be=we-F[l],_e=Ge-F[l+1],Oe=He-F[l+2],je=Math.sqrt(be*be+_e*_e+Oe*Oe),Je=(W*48271&65535)/65535,Qe=.003+Je*.003,it=1+Math.min(je*.002,.5),Ye=Qe*it;w[l]+=be*Ye,w[l+1]+=_e*Ye,w[l+2]+=Oe*Ye;var Se=(W*16807&65535)/65535,$e=ee*(.92+Se*.06);w[l]*=$e,w[l+1]*=$e,w[l+2]*=$e,F[l]+=w[l],F[l+1]+=w[l+1],F[l+2]+=w[l+2];var ct=Math.sqrt(Math.pow(F[l]-X[l],2)+Math.pow(F[l+1]-X[l+1],2)+Math.pow(F[l+2]-X[l+2],2));s[W]=.15+.55*(1-Math.min(ct*.005,1))+Math.sin(Y*1.5+W*.01)*.05}B.geometry.attributes.position.needsUpdate=!0,B.geometry.attributes.alpha.needsUpdate=!0,B.geometry.attributes.velocity.needsUpdate=!0}}var Le=new THREE.Matrix4,Ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function te(y,W){var l=a.domElement.getBoundingClientRect();if(!(l.width===0||l.height===0)&&(S.set((y-l.left)/l.width*2-1,-((W-l.top)/l.height)*2+1),$.setFromCamera(S,e),$.ray.intersectPlane(Ne,Ce))){se.copy(q),B&&q.copy(Ce).applyMatrix4(Le.copy(B.matrixWorld).invert()),_.subVectors(q,se);var V=_.length();V>15&&_.multiplyScalar(15/V)}}function ne(y,W){var l=i.getBoundingClientRect();return y>=l.left&&y<=l.right&&W>=l.top&&W<=l.bottom}var D=i.querySelector("#logo-coords"),J=i.querySelector("#logo-drag-label"),me=!1;if(!t){var ue=function(y){N=y.clientX,T=y.clientY;var W=ne(y.clientX,y.clientY);if(W){E=!0,te(y.clientX,y.clientY);var l=i.getBoundingClientRect(),V=Math.round(y.clientX-l.left),Z=Math.round(y.clientY-l.top);D&&(D.textContent="X: "+V+"PX    Y: "+Z+"PX")}else E=!1,q.set(9999,9999,0);o&&(M+=(y.clientX-h)*.005,x+=(y.clientY-r)*.005,x=Math.max(-Math.PI/2,Math.min(Math.PI/2,x)),h=y.clientX,r=y.clientY)},fe=function(y){ne(y.clientX,y.clientY)&&(o=!0,h=y.clientX,r=y.clientY)},xe=function(){o=!1,M=0,x=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2)};window.addEventListener("mousemove",ue),window.addEventListener("mousedown",fe),window.addEventListener("mouseup",xe)}function Me(){for(var y=4e3,W=new THREE.BufferGeometry,l=new Float32Array(y*3),V=new Float32Array(y*3),Z=0;Z<y;Z++){l[Z*3]=(Math.random()-.5)*2200,l[Z*3+1]=(Math.random()-.5)*1800,l[Z*3+2]=-200-Math.random()*1800;var re=d[Math.floor(Math.random()*d.length)],De=.2+Math.random()*.3;V[Z*3]=re.r*De,V[Z*3+1]=re.g*De,V[Z*3+2]=re.b*De}W.setAttribute("position",new THREE.BufferAttribute(l,3)),W.setAttribute("color",new THREE.BufferAttribute(V,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var z=Fe.getContext("2d"),O=z.createRadialGradient(16,16,0,16,16,16);O.addColorStop(0,"rgba(255,255,255,1)"),O.addColorStop(.3,"rgba(255,255,255,0.6)"),O.addColorStop(.7,"rgba(255,255,255,0.15)"),O.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=O,z.fillRect(0,0,32,32);var b=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),U=new THREE.Points(W,b);return U.userData={positions:l,count:y},n.add(U),U}m();var de=t?null:Me(),Ie='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';oe(Ie);var Be=new THREE.Clock,Re=!0,Xe=new IntersectionObserver(function(y){Re=y[0].isIntersecting,y[0].isIntersecting&&!me&&!t&&(me=!0,D&&(D.style.transform="translateY(0)"),J&&(J.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(i);var ge=!1,ke=null,Ae=0;function ve(){if(ge=!0,clearTimeout(ke),ke=setTimeout(function(){ge=!1},150),!t){var y=ne(N,T);y?(E=!0,te(N,T)):(E=!1,q.set(9999,9999,0))}}window.addEventListener("scroll",ve,{passive:!0});var H=null;function le(){if(H=requestAnimationFrame(le),!!Re){Ae++;var y=Math.min(Be.getDelta(),.05),W=Be.elapsedTime;if(t)v+=g*y;else{var l=M-v;l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),v+=l*.12,P+=(x-P)*.12}if(B&&(B.rotation.x=P,B.rotation.y=v,B.position.y=-15),de){for(var V=de.userData.positions,Z=0;Z<de.userData.count;Z++)V[Z*3+1]+=Math.sin(W*.2+Z)*.05,V[Z*3]+=Math.cos(W*.15+Z*.5)*.03;de.geometry.attributes.position.needsUpdate=!0,de.rotation.y+=1e-4,de.position.x=-v*35*.35,de.position.y=P*28*.35}u.position.x=300+Math.sin(W*.3)*100,u.position.y=350+Math.cos(W*.2)*80,A.intensity=2+Math.sin(W*.5)*.4,C.intensity=.8+Math.sin(W*.4+1)*.3,!(t&&ge&&Ae%4!==0)&&(pe(y),a.render(n,e))}}return le(),function(){cancelAnimationFrame(H),t||(window.removeEventListener("mousemove",ue),window.removeEventListener("mousedown",fe),window.removeEventListener("mouseup",xe)),window.removeEventListener("scroll",ve),clearTimeout(ke),Xe.disconnect(),n.traverse(function(y){y.geometry&&y.geometry.dispose(),y.material&&(y.material.map&&y.material.map.dispose(),y.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),B=null}}function Vt(i){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",i.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),t.add(u);var A=new THREE.PointLight(5913114,1.2,900);A.position.set(0,200,-300),t.add(A);var p=new THREE.PointLight(16750916,1.3,600);p.position.set(0,-250,200),t.add(p);var C=0,M=Math.PI*2/6,v=8e4,x=.03,P=.95,o=.005,h=12e4,r=null,g,S,$,L,q,se,_=0,E=!1,N=0,T=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function j(){var te=new THREE.BufferGeometry;g=new Float32Array(h*3),S=new Float32Array(h*3),$=new Float32Array(h*3),L=new Float32Array(h*3),q=new Float32Array(h),se=new Float32Array(h),te.setAttribute("position",new THREE.BufferAttribute(g,3)),te.setAttribute("color",new THREE.BufferAttribute(L,3)),te.setAttribute("size",new THREE.BufferAttribute(q,1)),te.setAttribute("alpha",new THREE.BufferAttribute(se,1)),te.setAttribute("velocity",new THREE.BufferAttribute(S,3));var ne=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,J=new THREE.ShaderMaterial({vertexShader:ne,fragmentShader:D,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(te,J),t.add(r)}function ie(te,ne){return new Promise(function(D){try{var J=512,me=document.createElement("canvas");me.width=me.height=J;var ue=me.getContext("2d"),fe=new DOMParser().parseFromString(te,"image/svg+xml"),xe=fe.querySelector("svg");if(!xe){D([]);return}var Me=parseFloat(xe.getAttribute("width")||512),de=parseFloat(xe.getAttribute("height")||512),Ie=xe.getAttribute("viewBox");if(Ie){var Be=Ie.split(/[\s,]+/);Me=+Be[2],de=+Be[3]}var Re=Math.min(J/Me,J/de)*.9,Xe=(J-Me*Re)/2,ge=(J-de*Re)/2;ue.save(),ue.translate(Xe,ge),ue.scale(Re,Re),ue.fillStyle="white",fe.querySelectorAll("path,rect,circle").forEach(function(l){if(l.tagName==="path"){var V=l.getAttribute("d");V&&ue.fill(new Path2D(V))}else l.tagName==="rect"?ue.fillRect(+l.getAttribute("x")||0,+l.getAttribute("y")||0,+l.getAttribute("width")||0,+l.getAttribute("height")||0):l.tagName==="circle"&&(ue.beginPath(),ue.arc(+l.getAttribute("cx")||0,+l.getAttribute("cy")||0,+l.getAttribute("r")||0,0,Math.PI*2),ue.fill())}),ue.restore();for(var ke=ue.getImageData(0,0,J,J).data,Ae=[],ve=0;ve<J;ve++)for(var H=0;H<J;H++){var le=(ve*J+H)*4;ke[le+3]>30&&Ae.push({x:H,y:ve,a:ke[le+3]/255})}if(!Ae.length){D([]);return}for(var y=[],le=0;le<ne;le++){var W=Ae[Math.floor(Math.random()*Ae.length)];y.push({x:(W.x-J/2)*1.2+(Math.random()-.5)*1.65,y:-(W.y-J/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*W.a,a:W.a})}D(y)}catch(l){console.error(l),D([])}})}function ee(te){_=te.length;for(var ne=0;ne<_;ne++){var D=te[ne],J=ne*3;g[J]=D.x,g[J+1]=D.y+40,g[J+2]=D.z,S[J]=S[J+1]=S[J+2]=0,$[J]=D.x,$[J+1]=D.y,$[J+2]=D.z;var me=T[Math.floor(Math.random()*T.length)],ue=.7+Math.random()*.4;L[J]=me.r*ue,L[J+1]=me.g*ue,L[J+2]=me.b*ue,q[ne]=1.8+Math.random()*3.8,se[ne]=.3+(D.a||.7)*.75}r.geometry.setDrawRange(0,_),["position","color","size","alpha"].forEach(function(fe){r.geometry.attributes[fe].needsUpdate=!0}),E=!0}function G(te){return ie(te,Math.min(h,v)).then(function(ne){ne.length&&r&&ee(ne)})}function Q(te){if(!(!E||!_)){N+=te;for(var ne=0;ne<_;ne++){var D=ne*3,J=ne*1.37;S[D]+=Math.sin(N*.4+J)*.008+Math.sin(N*1.1+J*2.3)*.003,S[D+1]+=Math.cos(N*.35+J*.7)*.008+Math.sin(N*.9+J*1.5)*.004,S[D+2]+=Math.sin(N*.25+J*1.1)*.004,S[D+1]-=x*.06,S[D]+=Math.sin(N*.25+g[D+1]*.008)*o*.6,S[D+2]+=Math.cos(N*.3+g[D]*.008)*o*.3;var me=$[D],ue=$[D+1]+40,fe=$[D+2],xe=me-g[D],Me=ue-g[D+1],de=fe-g[D+2],Ie=Math.sqrt(xe*xe+Me*Me+de*de),Be=(ne*48271&65535)/65535,Re=.003+Be*.003,Xe=1+Math.min(Ie*.002,.5),ge=Re*Xe;S[D]+=xe*ge,S[D+1]+=Me*ge,S[D+2]+=de*ge;var ke=(ne*16807&65535)/65535,Ae=P*(.92+ke*.06);S[D]*=Ae,S[D+1]*=Ae,S[D+2]*=Ae,g[D]+=S[D],g[D+1]+=S[D+1],g[D+2]+=S[D+2];var ve=Math.sqrt(Math.pow(g[D]-$[D],2)+Math.pow(g[D+1]-$[D+1],2)+Math.pow(g[D+2]-$[D+2],2));se[ne]=.15+.55*(1-Math.min(ve*.005,1))+Math.sin(N*1.5+ne*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}j();for(var B=4e3,F=new THREE.BufferGeometry,w=new Float32Array(B*3),X=new Float32Array(B*3),I=0;I<B;I++){w[I*3]=(Math.random()-.5)*2200,w[I*3+1]=(Math.random()-.5)*1800,w[I*3+2]=-200-Math.random()*1800;var c=T[Math.floor(Math.random()*T.length)],s=.2+Math.random()*.3;X[I*3]=c.r*s,X[I*3+1]=c.g*s,X[I*3+2]=c.b*s}F.setAttribute("position",new THREE.BufferAttribute(w,3)),F.setAttribute("color",new THREE.BufferAttribute(X,3));var f=document.createElement("canvas");f.width=f.height=32;var R=f.getContext("2d"),Y=R.createRadialGradient(16,16,0,16,16,16);Y.addColorStop(0,"rgba(255,255,255,1)"),Y.addColorStop(.3,"rgba(255,255,255,0.6)"),Y.addColorStop(.7,"rgba(255,255,255,0.15)"),Y.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=Y,R.fillRect(0,0,32,32);var d=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(f),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),m=new THREE.Points(F,d);t.add(m);var k='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';G(k);var K=new THREE.Clock,oe=!0,pe=new IntersectionObserver(function(te){oe=te[0].isIntersecting},{threshold:0});pe.observe(i);var Le=i.querySelectorAll("#logo-coords, #logo-drag-label");Le.forEach(function(te){te.parentElement.style.display="none"});var Ne=null;function Ce(){if(Ne=requestAnimationFrame(Ce),!!oe){var te=Math.min(K.getDelta(),.05),ne=K.elapsedTime;C+=M*te,r&&(r.rotation.y=C,r.position.y=5,r.scale.setScalar(.85));for(var D=0;D<B;D++)w[D*3+1]+=Math.sin(ne*.2+D)*.05,w[D*3]+=Math.cos(ne*.15+D*.5)*.03;F.attributes.position.needsUpdate=!0,m.rotation.y+=1e-4,m.position.x=-C*35*.35,a.position.x=300+Math.sin(ne*.3)*100,a.position.y=350+Math.cos(ne*.2)*80,u.intensity=2+Math.sin(ne*.5)*.4,p.intensity=.8+Math.sin(ne*.4+1)*.3,Q(te),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(Ne),pe.disconnect(),t.traverse(function(te){te.geometry&&te.geometry.dispose(),te.material&&(te.material.map&&te.material.map.dispose(),te.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var qt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Gt(i){let t=i.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return lt(qt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?_n(t):Ot(t)}),function(){n=!0,e&&e()}}function Wt(i){let t=i.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return lt(qt).then(function(){n||(e=Vt(t))}),function(){n=!0,e&&e()}}function _n(i){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),n.add(u);var A=new THREE.PointLight(13931578,2.4,1200);A.position.set(-300,-100,300),n.add(A);var p=new THREE.PointLight(5913114,1.2,900);p.position.set(0,200,-300),n.add(p);var C=new THREE.PointLight(16750916,1.3,600);C.position.set(0,-250,200),n.add(C);var M=0,v=0,x=0,P=0,o=!1,h=0,r=0,g=Math.PI*2/6,S=new THREE.Vector2(9999,9999),$=new THREE.Raycaster,L=120,q=new THREE.Vector3(9999,9999,0),se=new THREE.Vector3(9999,9999,0),_=new THREE.Vector3,E=!1,N=0,T=0,j=8e4,ie=.03,ee=.95,G=.005,Q=12e4,B=null,F,w,X,I,c,s,f=0,R=!1,Y=!1,d=0,m=0,k=null,K=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function oe(){var z=new THREE.BufferGeometry;F=new Float32Array(Q*3),w=new Float32Array(Q*3),X=new Float32Array(Q*3),I=new Float32Array(Q*3),c=new Float32Array(Q),s=new Float32Array(Q),z.setAttribute("position",new THREE.BufferAttribute(F,3)),z.setAttribute("color",new THREE.BufferAttribute(I,3)),z.setAttribute("size",new THREE.BufferAttribute(c,1)),z.setAttribute("alpha",new THREE.BufferAttribute(s,1)),z.setAttribute("velocity",new THREE.BufferAttribute(w,3));var O=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=new THREE.ShaderMaterial({vertexShader:O,fragmentShader:b,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});B=new THREE.Points(z,U),n.add(B)}function pe(z,O){return new Promise(function(b){try{var U=512,ce=document.createElement("canvas");ce.width=ce.height=U;var ae=ce.getContext("2d"),ze=new DOMParser().parseFromString(z,"image/svg+xml"),ye=ze.querySelector("svg");if(!ye){b([]);return}var Te=parseFloat(ye.getAttribute("width")||512),Pe=parseFloat(ye.getAttribute("height")||512),Ue=ye.getAttribute("viewBox");if(Ue){var we=Ue.split(/[\s,]+/);Te=+we[2],Pe=+we[3]}var Ge=Math.min(U/Te,U/Pe)*.9,He=(U-Te*Ge)/2,be=(U-Pe*Ge)/2;ae.save(),ae.translate(He,be),ae.scale(Ge,Ge),ae.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(Se){if(Se.tagName==="path"){var $e=Se.getAttribute("d");$e&&ae.fill(new Path2D($e))}else Se.tagName==="rect"?ae.fillRect(+Se.getAttribute("x")||0,+Se.getAttribute("y")||0,+Se.getAttribute("width")||0,+Se.getAttribute("height")||0):Se.tagName==="circle"&&(ae.beginPath(),ae.arc(+Se.getAttribute("cx")||0,+Se.getAttribute("cy")||0,+Se.getAttribute("r")||0,0,Math.PI*2),ae.fill())}),ae.restore();for(var _e=ae.getImageData(0,0,U,U).data,Oe=[],je=0;je<U;je++)for(var Je=0;Je<U;Je++){var Qe=(je*U+Je)*4;_e[Qe+3]>30&&Oe.push({x:Je,y:je,a:_e[Qe+3]/255})}if(!Oe.length){b([]);return}for(var it=[],Qe=0;Qe<O;Qe++){var Ye=Oe[Math.floor(Math.random()*Oe.length)];it.push({x:(Ye.x-U/2)*1.2+(Math.random()-.5)*1.65,y:-(Ye.y-U/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ye.a,a:Ye.a})}b(it)}catch(Se){console.error(Se),b([])}})}function Le(z){f=z.length;for(var O=0;O<f;O++){var b=z[O],U=O*3;F[U]=b.x,F[U+1]=b.y+40,F[U+2]=b.z,w[U]=w[U+1]=w[U+2]=0,X[U]=b.x,X[U+1]=b.y,X[U+2]=b.z;var ce=K[Math.floor(Math.random()*K.length)],ae=.7+Math.random()*.4;I[U]=ce.r*ae,I[U+1]=ce.g*ae,I[U+2]=ce.b*ae,c[O]=1.8+Math.random()*3.8,s[O]=.3+(b.a||.7)*.75}B.geometry.setDrawRange(0,f),["position","color","size","alpha"].forEach(function(ze){B.geometry.attributes[ze].needsUpdate=!0}),R=!0,Y=!1,d=1}function Ne(z){return pe(z,Math.min(Q,j)).then(function(O){O.length&&B&&Le(O)})}function Ce(z){if(!(!R||!f)){m+=z;for(var O=0;O<f;O++){var b=O*3,U=O*1.37;if(w[b]+=Math.sin(m*.4+U)*.008+Math.sin(m*1.1+U*2.3)*.003,w[b+1]+=Math.cos(m*.35+U*.7)*.008+Math.sin(m*.9+U*1.5)*.004,w[b+2]+=Math.sin(m*.25+U*1.1)*.004,w[b+1]-=ie*.06,w[b]+=Math.sin(m*.25+F[b+1]*.008)*G*.6,w[b+2]+=Math.cos(m*.3+F[b]*.008)*G*.3,E&&ve==="interactive"){var ce=F[b]-q.x,ae=F[b+1]-q.y,ze=F[b+2]-q.z,ye=ce*ce+ae*ae+ze*ze,Te=L*L;if(ye<Te&&ye>.25){var Pe=Math.sqrt(ye),Ue=Pe/L,we=(O*2654435761&65535)/65535,Ge=.6+we*.8,He=Math.pow(1-Ue,1.5+we),be=1+Math.min(_.length()*.12,1),_e=He*Ge*1.2*be,Oe=1/Pe;w[b]+=ce*Oe*_e,w[b+1]+=ae*Oe*_e,w[b+2]+=ze*Oe*_e*.2;var je=.02+we*.06;w[b]+=_.x*He*je,w[b+1]+=_.y*He*je;var Je=He*.15;w[b]+=(we-.5)*Je,w[b+1]+=((O*48271&65535)/65535-.5)*Je}}var Qe=X[b],it=X[b+1]+40,Ye=X[b+2],Se=Qe-F[b],$e=it-F[b+1],ct=Ye-F[b+2],Fn=Math.sqrt(Se*Se+$e*$e+ct*ct),zn=(O*48271&65535)/65535,Ln=.003+zn*.003,kn=1+Math.min(Fn*.002,.5),ht=Ln*kn;w[b]+=Se*ht,w[b+1]+=$e*ht,w[b+2]+=ct*ht;var Dn=(O*16807&65535)/65535,gt=ee*(.92+Dn*.06);w[b]*=gt,w[b+1]*=gt,w[b+2]*=gt,F[b]+=w[b],F[b+1]+=w[b+1],F[b+2]+=w[b+2];var In=Math.sqrt(Math.pow(F[b]-X[b],2)+Math.pow(F[b+1]-X[b+1],2)+Math.pow(F[b+2]-X[b+2],2));s[O]=.15+.55*(1-Math.min(In*.005,1))+Math.sin(m*1.5+O*.01)*.05}B.geometry.attributes.position.needsUpdate=!0,B.geometry.attributes.alpha.needsUpdate=!0,B.geometry.attributes.velocity.needsUpdate=!0}}var te=new THREE.Matrix4,ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),D=new THREE.Vector3;function J(z,O){var b=a.domElement.getBoundingClientRect();if(!(b.width===0||b.height===0)&&(S.set((z-b.left)/b.width*2-1,-((O-b.top)/b.height)*2+1),$.setFromCamera(S,e),$.ray.intersectPlane(ne,D))){se.copy(q),B&&q.copy(D).applyMatrix4(te.copy(B.matrixWorld).invert()),_.subVectors(q,se);var U=_.length();U>15&&_.multiplyScalar(15/U)}}var me=null;function ue(){return me||(me=i.closest('[data-flip-element="target"]')||i),me}function fe(z,O){var b=ue().getBoundingClientRect();return z>=b.left&&z<=b.right&&O>=b.top&&O<=b.bottom}var xe=i.querySelector("#logo-coords"),Me=i.querySelector("#logo-drag-label"),de=!1;function Ie(z){if(N=z.clientX,T=z.clientY,t||ve!=="interactive"){E=!1,q.set(9999,9999,0);return}var O=fe(z.clientX,z.clientY);if(O){E=!0,J(z.clientX,z.clientY);var b=ue().getBoundingClientRect(),U=Math.round(z.clientX-b.left),ce=Math.round(z.clientY-b.top);xe&&(xe.textContent="X: "+U+"PX    Y: "+ce+"PX")}else E=!1,q.set(9999,9999,0);o&&(M+=(z.clientX-h)*.005,x+=(z.clientY-r)*.005,x=Math.max(-Math.PI/2,Math.min(Math.PI/2,x)),h=z.clientX,r=z.clientY)}function Be(z){t||ve!=="interactive"||fe(z.clientX,z.clientY)&&(o=!0,h=z.clientX,r=z.clientY)}function Re(){t||(o=!1,M=0,x=0,v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2))}window.addEventListener("mousemove",Ie),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Re);function Xe(){for(var z=4e3,O=new THREE.BufferGeometry,b=new Float32Array(z*3),U=new Float32Array(z*3),ce=0;ce<z;ce++){b[ce*3]=(Math.random()-.5)*2200,b[ce*3+1]=(Math.random()-.5)*1800,b[ce*3+2]=-200-Math.random()*1800;var ae=K[Math.floor(Math.random()*K.length)],ze=.2+Math.random()*.3;U[ce*3]=ae.r*ze,U[ce*3+1]=ae.g*ze,U[ce*3+2]=ae.b*ze}O.setAttribute("position",new THREE.BufferAttribute(b,3)),O.setAttribute("color",new THREE.BufferAttribute(U,3));var ye=document.createElement("canvas");ye.width=ye.height=32;var Te=ye.getContext("2d"),Pe=Te.createRadialGradient(16,16,0,16,16,16);Pe.addColorStop(0,"rgba(255,255,255,1)"),Pe.addColorStop(.3,"rgba(255,255,255,0.6)"),Pe.addColorStop(.7,"rgba(255,255,255,0.15)"),Pe.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=Pe,Te.fillRect(0,0,32,32);var Ue=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(ye),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),we=new THREE.Points(O,Ue);return we.userData={positions:b,count:z},n.add(we),we}oe();var ge=Xe(),ke='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Ne(ke);var Ae=new THREE.Clock,ve="spin",H=null;function le(){if(t){ve="spin";return}if(H===null){var z=document.querySelector(".scaling-element-video");H=z&&getComputedStyle(z).display!=="none"}if(!H){ve="spin";return}var O=window._flipProgress||0;O>.85?ve="interactive":O>.7?ve="transition":ve="spin"}var y="spin",W=!0,l=new IntersectionObserver(function(z){W=z[0].isIntersecting},{threshold:0});l.observe(i);var V=!1,Z=null,re=0;function De(){V=!0,clearTimeout(Z),Z=setTimeout(function(){V=!1},150);var z=fe(N,T);z?(E=!0,J(N,T)):(E=!1,q.set(9999,9999,0))}window.addEventListener("scroll",De,{passive:!0});function Fe(){if(k=requestAnimationFrame(Fe),!!W){re++;var z=Math.min(Ae.getDelta(),.05),O=Ae.elapsedTime;le(),y==="interactive"&&ve!=="interactive"&&(E=!1,q.set(9999,9999,0),o=!1);var b=ve==="transition"||ve==="interactive";if(b&&!de?(de=!0,Me&&(Me.style.transform="translateY(0)"),xe&&(xe.style.transform="translateY(0)")):!b&&de&&(de=!1,Me&&(Me.style.transform="translateY(100%)"),xe&&(xe.style.transform="translateY(100%)")),y=ve,E&&!fe(N,T)&&(E=!1,q.set(9999,9999,0)),ve==="spin")v+=g*z,P+=(0-P)*.05;else if(ve==="transition")v=v%(Math.PI*2),v>Math.PI&&(v-=Math.PI*2),v<-Math.PI&&(v+=Math.PI*2),v+=(0-v)*.025,P+=(0-P)*.025;else{var U=M-v;U=U%(Math.PI*2),U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),v+=U*.12,P+=(x-P)*.12}B&&(B.rotation.x=P,B.rotation.y=v,B.scale.setScalar(1),B.position.y=-15);for(var ce=ge.userData.positions,ae=0;ae<ge.userData.count;ae++)ce[ae*3+1]+=Math.sin(O*.2+ae)*.05,ce[ae*3]+=Math.cos(O*.15+ae*.5)*.03;ge.geometry.attributes.position.needsUpdate=!0,ge.rotation.y+=1e-4,ge.position.x=-v*35*.35,ge.position.y=P*28*.35,u.position.x=300+Math.sin(O*.3)*100,u.position.y=350+Math.cos(O*.2)*80,A.intensity=2+Math.sin(O*.5)*.4,C.intensity=.8+Math.sin(O*.4+1)*.3,!(t&&V&&re%4!==0)&&(Ce(z),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(k),window.removeEventListener("mousemove",Ie),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",De),clearTimeout(Z),l.disconnect(),n.traverse(function(z){z.geometry&&z.geometry.dispose(),z.material&&(z.material.map&&z.material.map.dispose(),z.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),B=null}}function Nt(i){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Ee.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),u=Array.from(t.querySelectorAll("[data-load-text]")),A=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),p=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(A.length&&p.set(A,{autoAlpha:1},0),u.length>=2){let C=new SplitText(u[0],{type:"lines,chars",mask:"lines"}),M=new SplitText(u[1],{type:"lines,chars",mask:"lines"});gsap.set([C.chars,M.chars],{autoAlpha:0,yPercent:125}),gsap.set(u,{autoAlpha:1}),p.to(C.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),p.to(C.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),p.to(M.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),p.to(M.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return p}function Xt(i){let n=[...(i||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(v=>{let x=v.parentElement;x&&(v.style.whiteSpace="nowrap",e.has(x)||e.set(x,[]),e.get(x).push(v))});function a(v){let x=getComputedStyle(v);return v.clientWidth-parseFloat(x.paddingLeft)-parseFloat(x.paddingRight)}function u(v,x){if(x<=0)return;let P=parseFloat(getComputedStyle(v).fontSize)||16;for(let o=0;o<5;o++){let h=v.getBoundingClientRect().width;if(h<=0)break;let r=x/h;if(Math.abs(r-1)<.002)break;P*=r,v.style.fontSize=P+"px"}}function A(){e.forEach((v,x)=>{let P=a(x);v.forEach(o=>u(o,P))})}let p=null;function C(){p||(p=requestAnimationFrame(()=>{p=null,A()}))}let M;return window.ResizeObserver&&(M=new ResizeObserver(C),e.forEach((v,x)=>M.observe(x))),window.addEventListener("resize",C),A(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(A),()=>{p&&cancelAnimationFrame(p),M&&M.disconnect(),window.removeEventListener("resize",C),n.forEach(v=>{v.style.whiteSpace="",v.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},Yt=.08,Bn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},$t={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function On(i,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:i,transformOrigin:t}),n}function Kt(i){var t=i.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var u=a.getAttribute("data-marker-direction")||"right",A=a.getAttribute("data-marker-theme")||"#000000",p=a.getAttribute("data-marker-scroll-start")||"top 90%",C=A.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(A).trim()||A,M=$t[u]||$t.right,v=Bn[a.getAttribute("data-highlight-marker-reveal")]||null;v&&(C=v.bar);var x=a.closest("[data-cursor-label]"),P={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,h=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){P.timeline&&P.timeline.kill(),P.scrollTrigger&&P.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(E){E.remove()}),P.listeners.forEach(function(E){E.el.removeEventListener(E.type,E.fn)}),P.listeners=[],o=!1;var g=r.lines,S=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(g.forEach(function(E,N){gsap.set(E,{position:"relative",overflow:"hidden"});var T=On(C,M.origin);gsap.set(T,{[M.prop]:0}),E.appendChild(T),v&&(gsap.set(E,{zIndex:0,color:v.text}),gsap.set(T,{zIndex:-1})),S.to(T,{[M.prop]:1,duration:Ve.duration,ease:Ve.ease},N*Yt);var j=function(){o&&(gsap.to(T,{[M.prop]:0,duration:Ve.duration,ease:Ve.ease}),v&&gsap.to(E,{color:v.hoverText,duration:Ve.duration,ease:Ve.ease}))},ie=function(){o&&(gsap.to(T,{[M.prop]:1,duration:Ve.duration,ease:Ve.ease}),v&&gsap.to(E,{color:v.text,duration:Ve.duration,ease:Ve.ease}))};!v&&e&&(E.addEventListener("mouseenter",j),E.addEventListener("mouseleave",ie),P.listeners.push({el:E,type:"mouseenter",fn:j},{el:E,type:"mouseleave",fn:ie}))}),P.timeline=S,x){S.kill();var $=a.querySelectorAll(".highlight-marker-bar"),L=function(E){gsap.to($,{[M.prop]:E,duration:Ve.duration,ease:Ve.ease,stagger:Yt,overwrite:!0})},q=function(){L(1)},se=function(){L(0)};x.addEventListener("cursorlabel:enter",q),x.addEventListener("cursorlabel:leave",se),P.listeners.push({el:x,type:"cursorlabel:enter",fn:q},{el:x,type:"cursorlabel:leave",fn:se});return}var _=ScrollTrigger.create({trigger:a,start:p,once:!0,onEnter:function(){S.play()}});P.scrollTrigger=_}});P.split=h,n.push(P)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(u){u.el.removeEventListener(u.type,u.fn)}),a.split&&a.split.revert()})}}function Zt(i){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=i.querySelector("[data-cursor-marquee-status]");if(!a)return;let u=a.querySelectorAll("[data-cursor-marquee-text-target]"),A=i.querySelectorAll("[data-cursor-marquee-text]");if(!A.length)return;let p=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),C=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),M=null,v=x=>{p(x.clientX),C(x.clientY)};return window.addEventListener("pointermove",v,{passive:!0}),A.forEach(x=>{x.addEventListener("mouseenter",()=>{M&&clearTimeout(M);let P=x.getAttribute("data-cursor-marquee-text")||"",o=(P.length||1)/e;u.forEach(h=>{h.textContent=P,h.style.animationPlayState="running",h.style.animationDuration=o+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),x.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),M&&clearTimeout(M),M=setTimeout(()=>{u.forEach(P=>{P.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",v),clearTimeout(M),gsap.killTweensOf(a)}}function jt(i){i.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function Jt(i){let t=i.querySelectorAll("[data-flip-element='wrapper']"),n=i.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(p){window._flipProgress=p.progress}}}),t.forEach(function(p,C){let M=C+1;if(M<t.length){let v=t[M],x=v.getBoundingClientRect(),P=p.getBoundingClientRect(),o=x.top+window.pageYOffset+v.offsetHeight/2,h=P.top+window.pageYOffset+p.offsetHeight/2,r=o-h;e.add(Flip.fit(n,v,{duration:r,ease:"none"}))}})}a();let u,A=function(){clearTimeout(u),u=setTimeout(function(){a()},100)};return window.addEventListener("resize",A),function(){clearTimeout(u),window.removeEventListener("resize",A),e&&e.kill()}}var Vn="150%";function qn(i){let t=[];return i.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let u=document.createElementNS("http://www.w3.org/2000/svg","tspan");u.textContent=a,n.append(u),t.push(u)}}),t}var Et=new WeakMap;function Qt(i){let t=i.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(u){return Array.from(u.querySelectorAll("textPath")).map(function(A){return A.textContent})}),a=n.map(qn);return a.forEach(function(u){gsap.set(u,{fillOpacity:0})}),Et.set(i,{wrap:t,lines:n,lineChars:a}),function(){Et.delete(i),n.forEach(function(u,A){u.querySelectorAll("textPath").forEach(function(p,C){p.textContent=e[A][C]})})}}function en(i){let t=Et.get(i);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Vn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let u=t.lineChars[a];u.length&&n.fromTo(u,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/u.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function wt(i){var t=[];function n(o,h,r,g){o.addEventListener(h,r,g),t.push(function(){o.removeEventListener(h,r,g)})}i.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var h=o.getAttribute("data-player-src");if(!h)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(H){}try{r.removeAttribute("src"),r.load()}catch(H){}function g(H){o.getAttribute("data-player-status")!==H&&o.setAttribute("data-player-status",H)}function S(H){r.muted=!!H,o.setAttribute("data-player-muted",r.muted?"true":"false")}function $(H){o.setAttribute("data-player-fullscreen",H?"true":"false")}function L(H){o.setAttribute("data-player-activated",H?"true":"false")}o.hasAttribute("data-player-activated")||L(!1);var q=o.querySelector("[data-player-timeline]"),se=o.querySelector("[data-player-progress]"),_=o.querySelector("[data-player-buffered]"),E=o.querySelector("[data-player-timeline-handle]"),N=o.querySelectorAll("[data-player-time-duration]"),T=o.querySelectorAll("[data-player-time-progress]"),j=o.getAttribute("data-player-update-size"),ie=o.getAttribute("data-player-lazy"),ee=ie==="true",G=ie==="meta",Q=o.getAttribute("data-player-autoplay")==="true",B=o.getAttribute("data-player-muted")==="true",F=!1;Q?(S(!0),r.loop=!0):S(B),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),Q&&(r.autoplay=!1);var w=!!r.canPlayType("application/vnd.apple.mpegurl"),X=w&&"ManagedMediaSource"in window,I=!!(window.Hls&&Hls.isSupported())&&!X;if(j==="true"&&!G&&!ee){var c=r.preload;r.preload="metadata";var s=function(){M(o,j,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",s),r.preload=c||""};n(r,"loadedmetadata",s,{once:!0}),r.src=h}function f(){P(h,I).then(function(H){H.width&&H.height&&M(o,j,H.width,H.height),N.length&&isFinite(H.duration)&&H.duration>0&&u(N,a(H.duration)),C(o,F)})}var R=!1,Y=!1,d="";function m(){if(!R){if(R=!0,o._hls){try{o._hls.destroy()}catch(le){}o._hls=null}if(X)r.preload=ee||G?"auto":r.preload,r.src=h,n(r,"loadedmetadata",function(){C(o,F),j==="true"&&M(o,j,r.videoWidth,r.videoHeight),N.length&&u(N,a(r.duration))},{once:!0});else if(I){var H=new Hls({maxBufferLength:10});H.attachMedia(r),H.on(Hls.Events.MEDIA_ATTACHED,function(){H.loadSource(h)}),H.on(Hls.Events.MANIFEST_PARSED,function(){if(C(o,F),j==="true"){var le=H.levels||[],y=A(le);y&&y.width&&y.height&&M(o,j,y.width,y.height)}}),H.on(Hls.Events.LEVEL_LOADED,function(le,y){y&&y.details&&isFinite(y.details.totalduration)&&N.length&&u(N,a(y.details.totalduration))}),o._hls=H}else r.src=h}}G?(f(),r.preload="none"):ee?r.preload="none":m();function k(){Y=!0,r.paused||r.ended?((ee||G)&&!R&&m(),F=!0,d="",g("loading"),p(r)):(d="manual",r.pause())}function K(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function oe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function pe(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function Le(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Ne(){oe()||r.webkitDisplayingFullscreen?Le():pe()}n(document,"fullscreenchange",function(){$(oe())}),n(document,"webkitfullscreenchange",function(){$(oe())}),n(r,"webkitbeginfullscreen",function(){$(!0)}),n(r,"webkitendfullscreen",function(){$(!1)}),n(o,"click",function(H){var le=H.target.closest("[data-player-control]");if(!(!le||!o.contains(le))){var y=le.getAttribute("data-player-control");y==="play"||y==="pause"||y==="playpause"?k():y==="mute"?K():y==="fullscreen"&&Ne()}});function Ce(){N.length&&u(N,a(r.duration)),T.length&&u(T,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),v(o,j,r)}),n(r,"loadeddata",function(){v(o,j,r)}),n(r,"playing",function(){v(o,j,r)}),n(r,"durationchange",Ce);var te;function ne(){if(r.duration){var H=r.currentTime/r.duration*100;se&&(se.style.transform="translateX("+(-100+H)+"%)"),E&&(E.style.left=H+"%")}}function D(){ne(),!r.paused&&!r.ended&&(te=requestAnimationFrame(D))}function J(){if(!(!_||!r.duration||!r.buffered.length)){var H=r.buffered.end(r.buffered.length-1),le=H/r.duration*100;_.style.transform="translateX("+(-100+le)+"%)"}}if(n(r,"progress",J),n(r,"loadedmetadata",J),n(r,"durationchange",J),n(r,"play",function(){L(!0),cancelAnimationFrame(te),D(),g("playing")}),n(r,"playing",function(){F=!1,g("playing")}),n(r,"pause",function(){F=!1,cancelAnimationFrame(te),ne(),g("paused")}),n(r,"waiting",function(){g("loading")}),n(r,"canplay",function(){C(o,F)}),n(r,"ended",function(){F=!1,cancelAnimationFrame(te),ne(),g("paused"),L(!1)}),q){let H=function(Z){de||(de=q.getBoundingClientRect());var re=(Z-de.left)/de.width;return re<0&&(re=0),re>1&&(re=1),re},le=function(Z){if(r.duration){var re=Z*100;se&&(se.style.transform="translateX("+(-100+re)+"%)"),E&&(E.style.left=re+"%"),T.length&&u(T,a(Z*r.duration))}},y=function(Z){r.duration&&(Z-xe<Me||(xe=Z,r.currentTime=fe))},W=function(Z){if(r.duration){me=!0,ue=!r.paused&&!r.ended,ue&&r.pause(),o.setAttribute("data-timeline-drag","true"),de=q.getBoundingClientRect();var re=H(Z.clientX);fe=re*r.duration,le(re),y(performance.now()),q.setPointerCapture&&q.setPointerCapture(Z.pointerId),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",V,{passive:!0}),Z.preventDefault()}},l=function(Z){if(me){var re=H(Z.clientX);fe=re*r.duration,le(re),y(performance.now()),Z.preventDefault()}},V=function(){me&&(me=!1,o.setAttribute("data-timeline-drag","false"),de=null,r.currentTime=fe,ue?p(r):(ne(),Ce()),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",V))};var me=!1,ue=!1,fe=0,xe=0,Me=180,de=null;n(window,"resize",function(){me||(de=null)}),n(q,"pointerdown",W,{passive:!1}),E&&n(E,"pointerdown",W,{passive:!1})}var Ie,Be=3e3;function Re(H){o.getAttribute("data-player-hover")!==H&&o.setAttribute("data-player-hover",H)}function Xe(){clearTimeout(Ie),Ie=setTimeout(function(){Re("idle")},Be)}function ge(){Re("active"),Xe()}n(o,"pointerdown",ge),n(document,"fullscreenchange",ge),n(document,"webkitfullscreenchange",ge);var ke=!1;function Ae(H){var le=o.getBoundingClientRect();H.clientX>=le.left&&H.clientX<=le.right&&H.clientY>=le.top&&H.clientY<=le.bottom&&ge()}if(n(o,"pointerenter",function(){ge(),ke||(ke=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(o,"pointerleave",function(){Re("idle"),clearTimeout(Ie),ke&&(ke=!1,window.removeEventListener("pointermove",Ae))}),Q){var ve=new IntersectionObserver(function(H){H.forEach(function(le){var y=le.isIntersecting&&le.intersectionRatio>0;y?((ee||G)&&!R&&m(),r.paused?(d="",F=!0,g("loading"),p(r)):g("playing")):!r.paused&&!r.ended&&(d="io",r.pause(),g("paused"))})},{threshold:.1});ve.observe(o)}t.push(function(){if(cancelAnimationFrame(te),clearTimeout(Ie),ve&&ve.disconnect(),o._hls){try{o._hls.destroy()}catch(H){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(H){}})});function e(o){return(o<10?"0":"")+o}function a(o){if(!isFinite(o)||o<0)return"00:00";var h=Math.floor(o),r=Math.floor(h/3600),g=Math.floor(h%3600/60),S=h%60;return r>0?r+":"+e(g)+":"+e(S):e(g)+":"+e(S)}function u(o,h){o.forEach(function(r){r.textContent=h})}function A(o){return!o||!o.length?null:o.reduce(function(h,r){return(r.width||0)>(h.width||0)?r:h},o[0])}function p(o){var h=o.play();h&&typeof h.then=="function"&&h.catch(function(){})}function C(o,h){!h&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function M(o,h,r,g){if(!(h!=="true"||!r||!g)){var S=o.querySelector("[data-player-before]");S&&(S.style.paddingTop=g/r*100+"%")}}function v(o,h,r){if(h==="true"){var g=o.querySelector("[data-player-before]");if(g){var S=g.style.paddingTop&&g.style.paddingTop!=="0%";!S&&r.videoWidth&&r.videoHeight&&M(o,h,r.videoWidth,r.videoHeight)}}}function x(o,h){try{return new URL(h,o).toString()}catch(r){return h}}function P(o,h){return new Promise(function(r){if(h&&window.Hls&&Hls.isSupported())try{var g=new Hls,S={width:0,height:0,duration:NaN},$=!1,L=!1;g.on(Hls.Events.MANIFEST_PARSED,function(_,E){var N=E&&E.levels||g.levels||[],T=A(N);T&&T.width&&T.height&&(S.width=T.width,S.height=T.height,$=!0)}),g.on(Hls.Events.LEVEL_LOADED,function(_,E){E&&E.details&&isFinite(E.details.totalduration)&&(S.duration=E.details.totalduration,L=!0)}),g.on(Hls.Events.ERROR,function(){try{g.destroy()}catch(_){}r(S)}),g.on(Hls.Events.LEVEL_LOADED,function(){try{g.destroy()}catch(_){}r(S)}),g.loadSource(o);return}catch(_){r({width:0,height:0,duration:NaN});return}function q(_){for(var E=_.split(/\r?\n/),N=0,T=0,j=null,ie=null,ee=0;ee<E.length;ee++){var G=E[ee];if(G.indexOf("#EXT-X-STREAM-INF:")===0)ie=G;else if(ie&&G&&G[0]!=="#"){j||(j=G.trim());var Q=/RESOLUTION=(\d+)x(\d+)/.exec(ie);if(Q){var B=parseInt(Q[1],10),F=parseInt(Q[2],10);B>N&&(N=B,T=F)}ie=null}}return{bestW:N,bestH:T,media:j}}function se(_){for(var E=0,N=/#EXTINF:([\d.]+)/g,T;T=N.exec(_);)E+=parseFloat(T[1]);return E}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(_){if(!_.ok)throw new Error("master");return _.text()}).then(function(_){var E=q(_);if(!E.media){r({width:E.bestW||0,height:E.bestH||0,duration:NaN});return}var N=x(o,E.media);return fetch(N,{credentials:"omit",cache:"no-store"}).then(function(T){if(!T.ok)throw new Error("media");return T.text()}).then(function(T){r({width:E.bestW||0,height:E.bestH||0,duration:se(T)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var Gn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Wn="(min-width: 768px)";function nn(i){if(!i.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=wt(i),n=tn(i);else{let e=!1;return lt(Gn).catch(function(){}).then(function(){e||(t=wt(i),n=tn(i))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function tn(i){if(!i.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",u=!1,A,p,C,M,v,x,P="",o="",h="",r=(c,s=i)=>s.querySelector(c),g=c=>r(`[data-mini-showreel-lightbox="${c}"]`),S=c=>r(`[data-mini-showreel-player="${c}"]`),$=c=>c.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",c)||c,L=(c,s)=>{let f=c.width,R=f/s;return R>c.height&&(R=c.height,f=R*s),{left:c.left+(c.width-f)/2,top:c.top+(c.height-R)/2,width:f,height:R}},q=c=>{let s=$(c).getBoundingClientRect(),f=c.getBoundingClientRect(),R=f.width>0&&f.height>0?f.width/f.height:16/9;return L(s,R)},se=(c,s)=>gsap.set(c,{position:"fixed",left:s.left,top:s.top,width:s.width,height:s.height,margin:0,x:0,y:0});function _(c){a&&i.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(s=>s.setAttribute("data-mini-showreel-status",c))}function E(){o=(A==null?void 0:A.style.zIndex)||"",h=(p==null?void 0:p.style.zIndex)||"",A&&(A.style.zIndex=String(e)),p&&(p.style.zIndex=String(e))}function N(){A&&(A.style.zIndex=o),p&&(p.style.zIndex=h)}function T(c){let s=S(c);if(!s)return;let f=s.querySelector("[data-bunny-player-init]"),R=s.querySelector("video");if(R){if(f){let Y=f.querySelector('[data-player-control="play"], [data-player-control="playpause"]');Y&&(R.paused||R.ended)&&Y.click();return}try{R.play()}catch(Y){}}}function j(c){let s=S(c);if(!s)return;let f=s.querySelector("[data-bunny-player-init]"),R=s.querySelector("video");R&&(R.muted=!0,f&&f.setAttribute("data-player-muted","true"),(R.paused||R.ended)&&T(c))}function ie(){N(),a="",u=!1,A=p=C=M=v=x=null,P="",o="",h="",Ee.start()}function ee(c){if(!c||u||(A=g(c),p=S(c),!A||!p)||(C=r("[data-mini-showreel-target]",A),!C))return;a=c,u=!0,Ee.stop(),p.dataset.flipId=a,P=p.style.cssText||"",M=p.parentElement,v=p.nextSibling,E(),_("active"),T(a);let s=Flip.getState(p),f=q(C);A.appendChild(p),se(p,f),x=Flip.from(s,{duration:t,ease:n,absolute:!0,scale:!1})}function G(c){!u||!p||c&&c!==a||(j(a),_("not-active"),x&&x.kill(),x=Flip.fit(p,M,{duration:t,ease:n,scale:!1,onComplete:()=>{M.insertBefore(p,v),p.style.cssText=P,ie()}}))}function Q(){!u||!p||(x&&x.kill(),j(a),_("not-active"),M.insertBefore(p,v),p.style.cssText=P,ie())}function B(){!u||!p||!C||se(p,q(C))}function F(c){let s=c.target.closest("[data-mini-showreel-open]");s&&(c.preventDefault(),ee(s.getAttribute("data-mini-showreel-open")||""))}function w(c){let s=c.target.closest("[data-mini-showreel-close]");s&&(c.preventDefault(),G(s.getAttribute("data-mini-showreel-close")||""))}function X(c){c.key==="Escape"&&G("")}let I=gsap.matchMedia();return I.add(Wn,function(){return i.addEventListener("click",F),document.addEventListener("click",w),window.addEventListener("keydown",X),window.addEventListener("resize",B),function(){Q(),i.removeEventListener("click",F),document.removeEventListener("click",w),window.removeEventListener("keydown",X),window.removeEventListener("resize",B)}}),function(){I.revert(),Q()}}var st={x:0,y:0,known:!1};window.addEventListener("pointermove",i=>{st.x=i.clientX,st.y=i.clientY,st.known=!0},{passive:!0});function et(i){let t=e=>i(e.clientX,e.clientY),n=()=>{st.known&&i(st.x,st.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,We=1080,St="#E5E5E5",Tt="#000000",rn="http://www.w3.org/2000/svg";function on(i){let t=i.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(rn,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${We}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(I,c)=>{let s=document.createElementNS(rn,I);return s.setAttribute("fill",c),n.appendChild(s),s},a=e("polygon",St),u=e("polygon",Tt),A=e("rect",Tt),p=e("rect",St),C=e("rect",St),M=e("rect",Tt);[A,p,C,M].forEach(I=>I.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let v=(I,c,s,f,R)=>{I.setAttribute("x",c),I.setAttribute("y",s),I.setAttribute("width",Math.max(0,f)),I.setAttribute("height",Math.max(0,R))},x={x:qe*(2/3),y:We*(1/3)},P=.1,o=.9,h={x:x.x,y:x.y},r={x:x.x,y:x.y},g={x:x.x,y:x.y},S=!1,$=()=>gsap.to(g,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:$}),L=()=>gsap.to(g,{y:gsap.utils.random(We*.193,We*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:L});$(),L();function q(){let I=gsap.utils.clamp(qe*P,qe*o,h.x),c=qe-I,s=gsap.utils.clamp(We*P,We*o,h.y),f=We-s;a.setAttribute("points",`0,${s} ${I},0 ${qe},${s} ${qe},${We} 0,${We}`),u.setAttribute("points",`${qe},${s} ${I},0 ${I},${s}`),v(A,0,s,I,f);let R=I*.25,Y=f*(2/3);v(p,I/2-R/2,s+f-Y,R,Y),v(C,I,s,c,f);let d=c*.5,m=f/3;v(M,I+c/2-d/2,s+f/2-m/2,d,m)}let se=.1,_=.03;function E(){let c=1-Math.pow(1-(S?se:_),gsap.ticker.deltaRatio(60)),s=S?r:g;h.x+=(s.x-h.x)*c,h.y+=(s.y-h.y)*c,q()}let N=(I,c)=>{let s=t.getBoundingClientRect();!s.width||!s.height||(r.x=gsap.utils.clamp(0,qe,(I-s.left)/s.width*qe),r.y=gsap.utils.clamp(0,We,(c-s.top)/s.height*We),S=!0)},T=()=>{S=!1},j=(I,c)=>{let s=t.getBoundingClientRect();I>=s.left&&I<=s.right&&c>=s.top&&c<=s.bottom?N(I,c):T()},ee=window.matchMedia("(hover: hover) and (pointer: fine)").matches?et(j):null,G=I=>{let c=I.touches[0];c&&N(c.clientX,c.clientY)},Q={passive:!0};t.addEventListener("touchstart",G,Q),t.addEventListener("touchmove",G,Q),t.addEventListener("touchend",T,Q),t.addEventListener("touchcancel",T,Q);let B=!1,F=()=>{B||(B=!0,gsap.ticker.add(E))},w=()=>{B&&(B=!1,gsap.ticker.remove(E))},X=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:I=>I.isActive?F():w()});return q(),F(),function(){w(),X.kill(),gsap.killTweensOf(g),ee&&ee(),t.removeEventListener("touchstart",G,Q),t.removeEventListener("touchmove",G,Q),t.removeEventListener("touchend",T,Q),t.removeEventListener("touchcancel",T,Q),n.remove()}}var Nn="http://www.w3.org/2000/svg";var Xn="#AFAFAF",Yn="#000000";var $n=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Kn=0,an=(i,t)=>{if(i<0||t<0||i>=20||t>=20)return!1;let n=20/2;return Math.hypot(i+.5-n,t+.5-n)<=n},Ze=(i,t)=>{let n=document.createElementNS(Nn,i);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function sn(i){let t=i.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++Kn;e.setAttribute("data-pulse-dots-paused","");let u=Ze("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});u.style.setProperty("--pd-step","30px");let A=Ze("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});A.append(Ze("feGaussianBlur",{in:"SourceGraphic",stdDeviation:3.9375.toFixed(2)}),Ze("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let p=Ze("defs",{});p.appendChild(A);let C=Ze("rect",{width:1e3,height:1e3,fill:Xn}),M=Ze("g",{filter:`url(#${a})`,fill:Yn});for(let x=0;x<20;x++)for(let P=0;P<20;P++){if(!an(P,x))continue;let o=$n.filter($=>an(P+$.dx,x+$.dy)),h=o[Math.floor(Math.random()*o.length)],r=200+P*30+26.25/2,g=200+x*30+26.25/2,S=Ze("g",{transform:`rotate(${h.deg} ${r} ${g})`});S.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*5e3)}ms`),S.append(Ze("circle",{class:"pulse-dots__dot is--first",cx:r,cy:g,r:26.25/2}),Ze("circle",{class:"pulse-dots__dot is--last",cx:r,cy:g,r:26.25/2})),M.appendChild(S)}u.append(p,C,M),e.appendChild(u);let v=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:x=>e.toggleAttribute("data-pulse-dots-paused",!x.isActive)});e.toggleAttribute("data-pulse-dots-paused",!v.isActive),n.push(()=>{v.kill(),e.removeAttribute("data-pulse-dots-paused"),u.remove()})}),()=>n.forEach(e=>e())}var ft=`#version 300 es
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
vec3 trailColor = vec3(0.0);if (dist > 0.001) {
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
trailColor = pow(trailColor, vec3(bloomExp));
clampedDist = clamp(length(trailColor) * dist, 0.0, 1.0);
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
}`;var At=60,jn=1.5,Jn=1,xn=80/1920,tt=[[.3017,.5],[.4216,.6183],[.5783,.6183],[.6983,.5],[.5783,.3817],[.4216,.3817]],Qn=xn,gn=150,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function bn(i){let t=i.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function u(c,s){let f=e.createShader(c);return e.shaderSource(f,s),e.compileShader(f),e.getShaderParameter(f,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(f)),f}let A=[];function p(c,s=cn){let f=e.createProgram(),R=u(e.VERTEX_SHADER,s),Y=u(e.FRAGMENT_SHADER,c);e.attachShader(f,R),e.attachShader(f,Y),e.bindAttribLocation(f,0,"aVertexPosition"),e.bindAttribLocation(f,1,"aTextureCoord"),e.linkProgram(f),e.deleteShader(R),e.deleteShader(Y),e.getProgramParameter(f,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(f));let d={},m=e.getProgramParameter(f,e.ACTIVE_UNIFORMS);for(let K=0;K<m;K++){let oe=e.getActiveUniform(f,K);d[oe.name]=e.getUniformLocation(f,oe.name)}let k={p:f,loc:d};return A.push(k),k}let C={bg:p(ln,ft),shapes:un.map(c=>p(c,dn)),trailSim:p(fn,ft),trail:p(vn),blur:pn.map(c=>p(c)),bloom:mn.map(c=>p(c)),gmap:p(hn,ft)},M=e.createVertexArray();e.bindVertexArray(M);let v=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,v),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let x=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let P=[];function o(c,s,f=!1){let R=e.createTexture();e.bindTexture(e.TEXTURE_2D,R),f&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,c,s,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,c,s,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let Y=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,Y),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,R,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let d={tex:R,fb:Y,w:c,h:s};return P.push(d),d}function h(){P.forEach(c=>{e.deleteTexture(c.tex),e.deleteFramebuffer(c.fb)}),P.length=0}function r(c,s,f,R){e.useProgram(c.p);let Y=s?s.w:n.width,d=s?s.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,s?s.fb:null),e.viewport(0,0,Y,d);let m=c.loc;m.uMVMatrix&&e.uniformMatrix4fv(m.uMVMatrix,!1,Ct),m.uPMatrix&&e.uniformMatrix4fv(m.uPMatrix,!1,Ct),m.uTextureMatrix&&e.uniformMatrix4fv(m.uTextureMatrix,!1,Ct),m.uResolution&&e.uniform2f(m.uResolution,Y,d),m.uArtboardResolution&&e.uniform2f(m.uArtboardResolution,1920,1920),m.uAspectRatio&&e.uniform1f(m.uAspectRatio,1),m.uMousePos&&e.uniform2f(m.uMousePos,g.x,g.y),m.uIsMask&&e.uniform1i(m.uIsMask,0),m.uParentTrackMouse&&e.uniform1f(m.uParentTrackMouse,0);let k=0;Object.keys(f).forEach(K=>{m[K]&&(e.activeTexture(e.TEXTURE0+k),e.bindTexture(e.TEXTURE_2D,f[K].tex),e.uniform1i(m[K],k),k++)}),Object.keys(R||{}).forEach(K=>{if(!m[K])return;let oe=R[K];Array.isArray(oe)?e.uniform2f(m[K],oe[0],oe[1]):e.uniform1f(m[K],oe)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let g={x:.5,y:.5},S={x:.5,y:.5},$=0,L=null,q=0;function se(){h();let c=Math.min(jn,window.devicePixelRatio||1),s=Math.max(1,Math.round(t.clientWidth*c)),f=Math.max(1,Math.round(t.clientHeight*c));n.width=s,n.height=f;let R=m=>[Math.max(1,Math.round(s*m)),Math.max(1,Math.round(f*m))];L={a:o(s,f),b:o(s,f),pp:[o(s,f,!0),o(s,f,!0)],trail:o(s,f),blur1:o(...R(1)),blur2:o(...R(1)),blur3:o(...R(1)),blur4:o(...R(1)),bth:o(...R(1)),bd1:o(...R(1)),bd2:o(...R(1)),bs1:o(...R(1)),bs2:o(...R(1)),bloom:o(s,f)},r(C.bg,L.a,{});let Y=L.a,d=L.b;C.shapes.forEach(m=>{r(m,d,{uBgTexture:Y});let k=Y;Y=d,d=k}),L.base=Y,q=0}function _(){if(!L)return;let c=L.pp[q],s=L.pp[1-q];r(C.trailSim,s,{uPingPongTexture:c},{uTime:$,uPreviousMousePos:[S.x,S.y]}),q=1-q,r(C.trail,L.trail,{uTexture:L.base,uPingPongTexture:s}),r(C.blur[0],L.blur1,{uTexture:L.trail}),r(C.blur[1],L.blur2,{uTexture:L.blur1}),r(C.blur[2],L.blur3,{uTexture:L.blur2}),r(C.blur[3],L.blur4,{uTexture:L.blur3});let f=L.blur4;r(C.bloom[0],L.bth,{uTexture:f}),r(C.bloom[1],L.bd1,{uTexture:L.bth}),r(C.bloom[2],L.bd2,{uTexture:L.bd1,uBgTexture:f}),r(C.bloom[3],L.bs1,{uTexture:L.bd2}),r(C.bloom[4],L.bs2,{uTexture:L.bs1,uBgTexture:f}),r(C.bloom[5],L.bloom,{uTexture:L.bs2,uBgTexture:f}),r(C.gmap,null,{uTexture:L.bloom},{uTime:0}),S.x=g.x,S.y=g.y}function E(c,s){let f=!0,R=1/0;for(let Y=0;Y<tt.length;Y++){let[d,m]=tt[Y],[k,K]=tt[(Y+1)%tt.length],oe=k-d,pe=K-m;oe*(s-m)-pe*(c-d)<0&&(f=!1);let Le=Math.max(0,Math.min(1,((c-d)*oe+(s-m)*pe)/(oe*oe+pe*pe)));R=Math.min(R,Math.hypot(c-(d+oe*Le),s-(m+pe*Le)))}return f?0:R}tt.reduce((c,[s,f],R)=>{let[Y,d]=tt[(R+1)%tt.length];return c+s*d-Y*f},0)<0&&tt.reverse();let T=gn,j=!1,ie=c=>{let s=n.getBoundingClientRect();if(!s.width||!s.height)return;let f=(c.clientX-s.left)/s.width,R=(c.clientY-s.top)/s.height;if(E(f,R)>xn+Qn){j=!1;return}g.x=f,g.y=1-R,j||(S.x=g.x,S.y=g.y,j=!0),T=0,F()};window.addEventListener("pointermove",ie,{passive:!0});let ee=null,G=0,Q=!1;function B(c){if(!Q||T>=gn){ee=null;return}if(ee=requestAnimationFrame(B),c-G<1e3/At-1)return;let s=G?Math.min(c-G,100):1e3/At;G=c,$+=Jn*(s/(1e3/At)),_(),T++}function F(){Q&&!ee&&(G=0,ee=requestAnimationFrame(B))}let w=new IntersectionObserver(([c])=>{Q=c.isIntersecting,Q?F():ee&&(cancelAnimationFrame(ee),ee=null)});w.observe(t);let X=null,I=new ResizeObserver(()=>{clearTimeout(X),X=setTimeout(()=>{se(),_()},60)});return I.observe(t),se(),_(),function(){ee&&cancelAnimationFrame(ee),ee=null,clearTimeout(X),w.disconnect(),I.disconnect(),window.removeEventListener("pointermove",ie),h(),A.forEach(f=>e.deleteProgram(f.p)),e.deleteBuffer(v),e.deleteBuffer(x),e.deleteVertexArray(M);let s=e.getExtension("WEBGL_lose_context");s&&s.loseContext(),n.remove()}}function yn(i){let t=i.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",u="rgba(0, 0, 0, 0.2)",A="rgba(0, 0, 0, 0.75)",p=2.125,C=1.5,M=24,v=.5,x="20px",P=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},h={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},g=[],S,$,L,q,se,_,E=performance.now();function N(d,m){let k=document.createElement("div");k.style.cssText=`position:absolute;visibility:hidden;width:${d};`,m.appendChild(k);let K=k.getBoundingClientRect().width;return k.remove(),K}function T(d,m){let k=document.createElement("span");k.style.color=d,m.appendChild(k);let K=getComputedStyle(k).color;k.remove();let pe=document.createElement("canvas").getContext("2d");pe.fillStyle=K,pe.fillRect(0,0,1,1);let Le=[...pe.getImageData(0,0,1,1).data];return Le[3]/=255,Le}function j(d,m,k){return`rgba(${d.map((K,oe)=>K+(m[oe]-K)*k).join(",")})`}function ie(d,m){Object.assign(d,{from:d.value,to:m,start:performance.now()})}function ee(d,m){if(!v)return d.value=d.to;let k=Math.min(Math.max((m-d.start)/(v*1e3),0),1);d.value=d.from+(d.to-d.from)*(1-Math.pow(1-k,4))}t.forEach(d=>{let m=document.createElement("canvas"),k=m.getContext("2d");m.setAttribute("aria-hidden","true"),Object.assign(m.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(d).position==="static"&&(d.style.position="relative"),d.prepend(m),g.push({element:d,canvas:m,ctx:k,width:0,height:0,visible:!1,inactive:T(d.getAttribute("data-dots-color-inactive")||u,d),active:T(d.getAttribute("data-dots-color-active")||A,d)})});function G(){return g.some(({element:d})=>{let m=d.getBoundingClientRect();return o.x>=m.left&&o.x<=m.right&&o.y>=m.top&&o.y<=m.bottom})}function Q(d,m){let k=d.element.getBoundingClientRect(),K=k.left-m.left,oe=k.top-m.top,pe=o.cx-m.left,Le=o.cy-m.top,Ne=p*(1+(C-1)*r.value);d.ctx.clearRect(0,0,d.width,d.height);for(let Ce=0;Ce<d.rows;Ce++){let te=d.oy+Ce*d.sy,ne=oe+te;for(let D=0;D<d.cols;D++){let J=d.ox+D*d.sx,me=K+J,ue=P&&h.value?Math.max(0,1-Math.hypot(me-pe,ne-Le)/se)*h.value:0,fe=$*(1+(Ne-1)*ue);d.ctx.fillStyle=j(d.inactive,d.active,ue),a==="square"?d.ctx.fillRect(J-fe/2,te-fe/2,fe,fe):(d.ctx.beginPath(),d.ctx.arc(J,te,fe/2,0,Math.PI*2),d.ctx.fill())}}}function B(d=!1){let m=t[0].getBoundingClientRect();g.forEach(k=>(!d||k.visible)&&Q(k,m))}function F(d){if(_=null,!g.some(k=>k.visible))return;let m=Math.min((d-E)/1e3,.1);if(E=d,ee(h,d),ee(r,d),!v)o.cx=o.x,o.cy=o.y;else{let k=1-Math.exp(-m*6/v);o.cx+=(o.x-o.cx)*k,o.cy+=(o.y-o.cy)*k}B(!0),_=requestAnimationFrame(F)}function w(){P&&!_&&g.some(d=>d.visible)&&(E=performance.now(),_=requestAnimationFrame(F))}function X(){S=Math.min(devicePixelRatio||1,2),$=N(e,t[0]),L=N(n,t[0]),q=$+L,se=q*M;let d=N(x,t[0])+$/2,m=k=>{let K=k-2*d,oe=K>=0?Math.floor(K/q)+1:0;return{count:oe,offset:d,step:oe>1?K/(oe-1):q}};g.forEach(k=>{let K=k.element.getBoundingClientRect();k.width=K.width,k.height=K.height;let oe=m(K.width),pe=m(K.height);k.cols=oe.count,k.ox=oe.offset,k.sx=oe.step,k.rows=pe.count,k.oy=pe.offset,k.sy=pe.step,k.canvas.width=Math.round(K.width*S),k.canvas.height=Math.round(K.height*S),k.ctx.setTransform(S,0,0,S,0,0)}),B(),w()}let I=(d,m)=>{o.x=d,o.y=m;let k=G();k!==o.active&&(o.active=k,ie(h,+k),k?(o.cx=o.x,o.cy=o.y):ie(r,0)),w()},c=null,s=()=>o.active&&ie(r,1),f=()=>ie(r,0);P&&(c=et(I),window.addEventListener("pointerdown",s),window.addEventListener("pointerup",f));let R=new IntersectionObserver(d=>{d.forEach(m=>{let k=g.find(K=>K.element===m.target);k&&(k.visible=m.isIntersecting)}),P?w():B(!0)}),Y=new ResizeObserver(X);return t.forEach(d=>{R.observe(d),Y.observe(d)}),window.addEventListener("resize",X),X(),function(){_&&cancelAnimationFrame(_),_=null,P&&(c&&c(),window.removeEventListener("pointerdown",s),window.removeEventListener("pointerup",f)),window.removeEventListener("resize",X),R.disconnect(),Y.disconnect(),g.forEach(d=>d.canvas.remove()),g.length=0}}var ot={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Pn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},er=i=>{let t=Math.floor(i),n=i-t,e=n*n*(3-2*n);return Pn(t)*(1-e)+Pn(t+1)*e};function En(i){let t=i.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],u=null,A=0,p=18,C=0,M=0,v=0,x=-1e5,P=-1e5,o=!1,h=!1;function r(){u&&u.revert(),t.textContent="";let T=getComputedStyle(t);A=parseFloat(T.paddingTop),p=parseFloat(T.lineHeight),C=t.offsetHeight;let j=Math.max(1,Math.floor((C-A-parseFloat(T.paddingBottom))/p)),ie=document.createDocumentFragment();for(let ee=0;ee<j;ee++){let G=document.createElement("div");G.className="type-field__row",G.textContent=n,ie.appendChild(G)}t.appendChild(ie),t.setAttribute("aria-hidden","true"),u=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((ee,G)=>({chars:ee.querySelectorAll(".type-field__char"),cur:a[G]?a[G].cur:0,drawn:0}))}})}function g(T){let j=Math.max(0,Math.min(T.chars.length,Math.round(T.cur)));if(j===T.drawn)return;let ie=Math.min(j,T.drawn),ee=Math.max(j,T.drawn);for(let G=ie;G<ee;G++)T.chars[G].style.visibility=G<j?"visible":"hidden";T.drawn=j}function S(T,j){if(!a.length)return;let ie=Math.min(j,50)/16.667,ee=X=>1-Math.pow(1-X,ie),G=Ee.scroll,Q=Math.min(Math.max(M-G,0),v-G-C);P+=(x-Q-A-P)*ee(ot.followEase);let B=Math.floor(P/p),F=G*.004,w=o&&x>=M-G&&x<=v-G;for(let X=0;X<a.length;X++){let I=a[X],c=I.chars.length,s=Math.abs(X-B),f=0;if(w){if(s===0)f=c;else if(s<=ot.radius){let R=1-s/(ot.radius+1);f=1+Math.min(ot.maxSide,R*(1-ot.ragged/2+ot.ragged*er(X*1.3+F)))*(c-1)}}I.cur+=(f-I.cur)*ee(ot.ease),g(I)}}function $(){h||(gsap.ticker.add(S),h=!0)}function L(){h&&(gsap.ticker.remove(S),h=!1)}let q=et((T,j)=>{P<-1e4&&(P=j),x=j,o=!0}),se=()=>{o=!1};document.documentElement.addEventListener("mouseleave",se),r();let _=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(T){M=T.start+window.innerHeight,v=T.end},onToggle(T){T.isActive?$():L()}});_.isActive&&$();let E,N=()=>{clearTimeout(E),E=setTimeout(()=>{Math.floor((t.offsetHeight-A-parseFloat(getComputedStyle(t).paddingBottom))/p)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",N),function(){L(),clearTimeout(E),q(),document.documentElement.removeEventListener("mouseleave",se),window.removeEventListener("resize",N),_.kill(),u&&u.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var wn={duration:.5,ease:"power3"};function Sn(i){let t=i.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let u=gsap.quickTo(a,"x",wn),A=gsap.quickTo(a,"y",wn),p=0,C=0,M=!1,v=new ResizeObserver(()=>{p=a.offsetWidth,C=a.offsetHeight});v.observe(a),p=a.offsetWidth,C=a.offsetHeight;let P=et((h,r)=>{let g=e.getBoundingClientRect();if(!(h>=g.left&&h<=g.right&&r>=g.top&&r<=g.bottom)){M&&(M=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let $=gsap.utils.clamp(0,Math.max(0,g.width-p),h-g.left-p/2),L=gsap.utils.clamp(0,Math.max(0,g.height-C),r-g.top-C/2);if(!M){M=!0,u($,$),A(L,L),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}u($),A(L)}),o=()=>{M&&(M=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{P(),document.documentElement.removeEventListener("mouseleave",o),v.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var tr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],nr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],rr="#FFFFFF";var Tn="power3.out";function An(i){let t=i.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],u=[],A=[];function p(){if(u.length&&u[0].isConnected)return;let x=e.querySelectorAll(":scope > div > div");a=(x.length?[...x]:[e]).map(o=>SplitText.create(o,{type:"chars"})),u=a.flatMap(o=>o.chars),A=x.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],u.forEach(o=>{o.dataset.orig=o.textContent})}function C(x){x.textContent=x.dataset.orig,x.style.border=""}let M=()=>{p(),A.forEach(P=>{P.el.style.overflow="visible"});let x=(u.length-1)/2;u.forEach((P,o)=>{gsap.to(P,{color:rr,ease:Tn,duration:.3,delay:Math.abs(o-x)*.03,overwrite:"auto",onStart:()=>{let h=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);h==1&&(P.textContent=gsap.utils.random(nr)),r==1&&(P.style.border=`1px solid ${gsap.utils.random(tr)}`)}})})},v=()=>{if(!u.length)return;let x=getComputedStyle(e).color,P=(u.length-1)/2;A.forEach(o=>{o.el.style.overflow=o.overflow}),u.forEach((o,h)=>{gsap.to(o,{color:x,ease:Tn,duration:.3,delay:Math.abs(h-P)*.03,overwrite:"auto",onStart:()=>C(o)})})};e.addEventListener("mouseenter",M),e.addEventListener("mouseleave",v),n.push(()=>{e.removeEventListener("mouseenter",M),e.removeEventListener("mouseleave",v),gsap.killTweensOf(u),a.forEach(x=>x.revert()),a=[],u=[],A=[]})}),()=>n.forEach(e=>e())}function Mt(i,t){let n=null;he(Gt(i)),he(on(i)),he(An(i)),he(yn(i)),he(Qt(i)),he(Wt(i)),he(nn(i));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Nt(i):null,n?he(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),he(Xt(i)),he(Kt(i)),he(Zt(i)),he(vt(i)),dt(i),jt(i),n}function pt(i){he(en(i)),i.querySelector("[data-flip-element]")&&window.innerWidth>991&&he(Jt(i)),he(En(i)),he(Sn(i)),he(sn(i)),he(bn(i)),ScrollTrigger.sort()}var or={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(i){var t=[];return i.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(u){gsap.set(n,{autoAlpha:1});var A=or[e],p={yPercent:110,duration:A.duration,stagger:A.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?p.delay=.5:p.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(u[e],p)}}))}),function(){t.forEach(function(n){n.revert()})}}var Cn=window.matchMedia("(prefers-reduced-motion: reduce)"),Rt=.9;function Mn(i){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{i.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Cn.matches||!n?e.set(i,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ut,duration:Rt,ease:Ke},0),e.fromTo(i,{y:"0vh"},{y:"-25vh",duration:Rt,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function Ft(i,t,n="100vh"){let e=gsap.timeline();return Cn.matches?e.set(i,{autoAlpha:1}):(e.set(i,{zIndex:3},0),e.fromTo(i,{y:n},{y:"0vh",duration:Rt,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(i,{clearProps:"zIndex"}),t(i)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function zt(i,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(i,{position:"relative"}),Ft(i,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var at=null,Lt=!1;function kt(i){gsap.set(i,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Ee.scrollTo(0,{immediate:!0,force:!0}),Ee.resize()}var Rn={sync:!0,beforeLeave(){Lt=yt({keepCurtain:!0}),Ee.stop(),at||(at=bt())},beforeEnter(i){at||(at=bt()),gsap.set(i.next.container,{position:"fixed",top:0,left:0,right:0}),_t(),Mt(i.next.container,!1)},leave(i){return Mn(i.current.container,i.next.container)},enter(i){return Lt&&(It(),Lt=!1),he(mt(i.next.container)),Ft(i.next.container,kt)},afterLeave(){at&&(at(),at=null)},afterEnter(i){Bt(i),pt(i.next.container),Ee.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:i}){if(!i||!i.href)return!1;let t=new URL(i.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Rn,once(i){let t=document.querySelector("[data-menu-status]");Ut(),Ht(),t&&(dt(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=i.next.container,e=Mt(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");he(mt(n)),zt(n,function(u){kt(u),pt(u),Ee.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(Ee.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),he(mt(n)),zt(n,function(a){kt(a),pt(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Ee.start()})})})}))}},{name:"self",...Rn}]}),window.addEventListener("pageshow",function(i){i.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

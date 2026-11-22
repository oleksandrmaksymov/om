(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var ge=new Lenis({lerp:.08,wheelMultiplier:1});ge.on("scroll",ScrollTrigger.update);gsap.ticker.add(a=>{ge.raf(a*1e3)});gsap.ticker.lagSmoothing(0);var xt=[];function ue(a){typeof a=="function"&&xt.push(a)}function bt(){let a=xt,t=ScrollTrigger.getAll();return xt=[],function(){a.forEach(function(e){try{e()}catch(o){console.error(o)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var _n="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",_n);var Xe="parallax",ut=.8;var On="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",It="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,yt=function(){return!1};function Ut(){tt&&gsap.timeline().to(tt,{clipPath:It,duration:.9,ease:Xe,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-ut)+")",duration:.9,ease:Xe},0).set(tt,{clearProps:"filter"})}function Ht(){let a=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!a||!t)return;tt=t.querySelector(".nav-bg"),a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(o){t.dataset.menuStatus=o?"open":"closed",a.setAttribute("aria-expanded",o),o?(ge.stop(),document.body.style.overflow="hidden"):(ge.start(),document.body.style.overflow="")}function e(o){tt&&gsap.to(tt,{clipPath:o?On:It,duration:.9,ease:Xe,overwrite:!0})}a.addEventListener("click",function(){let o=t.dataset.menuStatus!=="open";n(o),e(o)}),yt=function(o){return t.dataset.menuStatus!=="open"?!1:(n(!1),o&&o.keepCurtain||e(!1),!0)}}function _t(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(a){var t=a.target.closest&&a.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(a){var t=a.target.closest&&a.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Ot(){let a=function(n){return n.replace(/\/$/,"")||"/"},t=a(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),o=e.origin===location.origin&&a(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",o),o?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Bt(a){let n=new DOMParser().parseFromString(a.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function dt(a){let t=a.querySelectorAll(".copy-email-button");if(!t.length)return;let n=o=>{let c=o.getAttribute("data-copy-email")||o.querySelector("[data-copy-email-element]").textContent.trim();c&&navigator.clipboard.writeText(c).then(()=>{o.setAttribute("data-copy-button","copied"),o.setAttribute("aria-label","Email copied to clipboard!")})},e=o=>{(o.type==="click"||o.type==="keydown"&&(o.key==="Enter"||o.key===" "))&&(o.preventDefault(),n(o.currentTarget))};t.forEach(o=>{o.addEventListener("click",e),o.addEventListener("keydown",e),o.addEventListener("mouseleave",()=>{o.removeAttribute("data-copy-button"),o.blur(),o.setAttribute("aria-label","Copy email to clipboard")}),o.addEventListener("blur",()=>{o.removeAttribute("data-copy-button"),o.setAttribute("aria-label","Copy email to clipboard")})})}function vt(a){let t=a.querySelector("[data-clock]");if(!t)return;function n(){let o=new Date,c=o.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),v=o.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=c+" "+v}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function ct(a){return Pt[a]||(Pt[a]=new Promise(function(t,n){let e=document.createElement("script");e.src=a,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[a]}function Vt(a){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});o.setSize(1920,1080),o.setPixelRatio(Math.min(devicePixelRatio,2)),o.setClearColor(0,1),o.toneMapping=THREE.ACESFilmicToneMapping,o.toneMappingExposure=1.4,o.domElement.style.width="100%",o.domElement.style.height="100%",a.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var y=new THREE.PointLight(13931578,2.4,1200);y.position.set(-300,-100,300),n.add(y);var v=new THREE.PointLight(5913114,1.2,900);v.position.set(0,200,-300),n.add(v);var T=new THREE.PointLight(16750916,1.3,600);T.position.set(0,-250,200),n.add(T);var w=0,u=0,m=0,S=0,i=!1,f=0,r=0,g=Math.PI*2/6,A=new THREE.Vector2(9999,9999),O=new THREE.Raycaster,F=120,G=new THREE.Vector3(9999,9999,0),ne=new THREE.Vector3(9999,9999,0),N=new THREE.Vector3,P=!1,X=0,C=0,q=8e4,re=.03,$=.95,k=.005,Y=12e4,U=null,M,E,p,h,s,l,z=0,H=!1,I=0,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function ee(){var b=new THREE.BufferGeometry;M=new Float32Array(Y*3),E=new Float32Array(Y*3),p=new Float32Array(Y*3),h=new Float32Array(Y*3),s=new Float32Array(Y),l=new Float32Array(Y),b.setAttribute("position",new THREE.BufferAttribute(M,3)),b.setAttribute("color",new THREE.BufferAttribute(h,3)),b.setAttribute("size",new THREE.BufferAttribute(s,1)),b.setAttribute("alpha",new THREE.BufferAttribute(l,1)),b.setAttribute("velocity",new THREE.BufferAttribute(E,3));var W=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,d=`varying vec3 vColor; varying float vAlpha, vDist, vSpeed; varying vec2 vStretchDir;
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
}`,V=new THREE.ShaderMaterial({vertexShader:W,fragmentShader:d,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});U=new THREE.Points(b,V),n.add(U)}function we(b,W){return new Promise(function(d){try{var V=512,K=document.createElement("canvas");K.width=K.height=V;var j=K.getContext("2d"),Re=new DOMParser().parseFromString(b,"image/svg+xml"),Ae=Re.querySelector("svg");if(!Ae){d([]);return}var R=parseFloat(Ae.getAttribute("width")||512),B=parseFloat(Ae.getAttribute("height")||512),x=Ae.getAttribute("viewBox");if(x){var D=x.split(/[\s,]+/);R=+D[2],B=+D[3]}var oe=Math.min(V/R,V/B)*.9,te=(V-R*oe)/2,Ce=(V-B*oe)/2;j.save(),j.translate(te,Ce),j.scale(oe,oe),j.fillStyle="white",Re.querySelectorAll("path,rect,circle").forEach(function(pe){if(pe.tagName==="path"){var ke=pe.getAttribute("d");ke&&j.fill(new Path2D(ke))}else pe.tagName==="rect"?j.fillRect(+pe.getAttribute("x")||0,+pe.getAttribute("y")||0,+pe.getAttribute("width")||0,+pe.getAttribute("height")||0):pe.tagName==="circle"&&(j.beginPath(),j.arc(+pe.getAttribute("cx")||0,+pe.getAttribute("cy")||0,+pe.getAttribute("r")||0,0,Math.PI*2),j.fill())}),j.restore();for(var me=j.getImageData(0,0,V,V).data,Pe=[],he=0;he<V;he++)for(var ze=0;ze<V;ze++){var be=(he*V+ze)*4;me[be+3]>30&&Pe.push({x:ze,y:he,a:me[be+3]/255})}if(!Pe.length){d([]);return}for(var Be=[],be=0;be<W;be++){var Le=Pe[Math.floor(Math.random()*Pe.length)];Be.push({x:(Le.x-V/2)*1.2+(Math.random()-.5)*1.65,y:-(Le.y-V/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Le.a,a:Le.a})}d(Be)}catch(pe){console.error(pe),d([])}})}function Oe(b){z=b.length;for(var W=0;W<z;W++){var d=b[W],V=W*3;M[V]=d.x,M[V+1]=d.y+40,M[V+2]=d.z,E[V]=E[V+1]=E[V+2]=0,p[V]=d.x,p[V+1]=d.y,p[V+2]=d.z;var K=ie[Math.floor(Math.random()*ie.length)],j=.7+Math.random()*.4;h[V]=K.r*j,h[V+1]=K.g*j,h[V+2]=K.b*j,s[W]=1.8+Math.random()*3.8,l[W]=.3+(d.a||.7)*.75}U.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(Re){U.geometry.attributes[Re].needsUpdate=!0}),H=!0}function qe(b){return we(b,Math.min(Y,q)).then(function(W){W.length&&U&&Oe(W)})}function je(b){if(!(!H||!z)){I+=b;for(var W=0;W<z;W++){var d=W*3,V=W*1.37;if(E[d]+=Math.sin(I*.4+V)*.008+Math.sin(I*1.1+V*2.3)*.003,E[d+1]+=Math.cos(I*.35+V*.7)*.008+Math.sin(I*.9+V*1.5)*.004,E[d+2]+=Math.sin(I*.25+V*1.1)*.004,E[d+1]-=re*.06,E[d]+=Math.sin(I*.25+M[d+1]*.008)*k*.6,E[d+2]+=Math.cos(I*.3+M[d]*.008)*k*.3,P){var K=M[d]-G.x,j=M[d+1]-G.y,Re=M[d+2]-G.z,Ae=K*K+j*j+Re*Re,R=F*F;if(Ae<R&&Ae>.25){var B=Math.sqrt(Ae),x=B/F,D=(W*2654435761&65535)/65535,oe=.6+D*.8,te=Math.pow(1-x,1.5+D),Ce=1+Math.min(N.length()*.12,1),me=te*oe*1.2*Ce,Pe=1/B;E[d]+=K*Pe*me,E[d+1]+=j*Pe*me,E[d+2]+=Re*Pe*me*.2;var he=.02+D*.06;E[d]+=N.x*te*he,E[d+1]+=N.y*te*he;var ze=te*.15;E[d]+=(D-.5)*ze,E[d+1]+=((W*48271&65535)/65535-.5)*ze}}var be=p[d],Be=p[d+1]+40,Le=p[d+2],pe=be-M[d],ke=Be-M[d+1],Ue=Le-M[d+2],$e=Math.sqrt(pe*pe+ke*ke+Ue*Ue),Ke=(W*48271&65535)/65535,Ze=.003+Ke*.003,at=1+Math.min($e*.002,.5),Ne=Ze*at;E[d]+=pe*Ne,E[d+1]+=ke*Ne,E[d+2]+=Ue*Ne;var ye=(W*16807&65535)/65535,We=$*(.92+ye*.06);E[d]*=We,E[d+1]*=We,E[d+2]*=We,M[d]+=E[d],M[d+1]+=E[d+1],M[d+2]+=E[d+2];var st=Math.sqrt(Math.pow(M[d]-p[d],2)+Math.pow(M[d+1]-p[d+1],2)+Math.pow(M[d+2]-p[d+2],2));l[W]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(I*1.5+W*.01)*.05}U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.alpha.needsUpdate=!0,U.geometry.attributes.velocity.needsUpdate=!0}}var et=new THREE.Matrix4,Je=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),De=new THREE.Vector3;function J(b,W){var d=o.domElement.getBoundingClientRect();if(!(d.width===0||d.height===0)&&(A.set((b-d.left)/d.width*2-1,-((W-d.top)/d.height)*2+1),O.setFromCamera(A,e),O.ray.intersectPlane(Je,De))){ne.copy(G),U&&G.copy(De).applyMatrix4(et.copy(U.matrixWorld).invert()),N.subVectors(G,ne);var V=N.length();V>15&&N.multiplyScalar(15/V)}}function Q(b,W){var d=a.getBoundingClientRect();return b>=d.left&&b<=d.right&&W>=d.top&&W<=d.bottom}var L=a.querySelector("#logo-coords"),Z=a.querySelector("#logo-drag-label"),de=!1;if(!t){var le=function(b){X=b.clientX,C=b.clientY;var W=Q(b.clientX,b.clientY);if(W){P=!0,J(b.clientX,b.clientY);var d=a.getBoundingClientRect(),V=Math.round(b.clientX-d.left),K=Math.round(b.clientY-d.top);L&&(L.textContent="X: "+V+"PX    Y: "+K+"PX")}else P=!1,G.set(9999,9999,0);i&&(w+=(b.clientX-f)*.005,m+=(b.clientY-r)*.005,m=Math.max(-Math.PI/2,Math.min(Math.PI/2,m)),f=b.clientX,r=b.clientY)},xe=function(b){Q(b.clientX,b.clientY)&&(i=!0,f=b.clientX,r=b.clientY)},fe=function(){i=!1,w=0,m=0,u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",xe),window.addEventListener("mouseup",fe)}function Se(){for(var b=4e3,W=new THREE.BufferGeometry,d=new Float32Array(b*3),V=new Float32Array(b*3),K=0;K<b;K++){d[K*3]=(Math.random()-.5)*2200,d[K*3+1]=(Math.random()-.5)*1800,d[K*3+2]=-200-Math.random()*1800;var j=ie[Math.floor(Math.random()*ie.length)],Re=.2+Math.random()*.3;V[K*3]=j.r*Re,V[K*3+1]=j.g*Re,V[K*3+2]=j.b*Re}W.setAttribute("position",new THREE.BufferAttribute(d,3)),W.setAttribute("color",new THREE.BufferAttribute(V,3));var Ae=document.createElement("canvas");Ae.width=Ae.height=32;var R=Ae.getContext("2d"),B=R.createRadialGradient(16,16,0,16,16,16);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.3,"rgba(255,255,255,0.6)"),B.addColorStop(.7,"rgba(255,255,255,0.15)"),B.addColorStop(1,"rgba(255,255,255,0)"),R.fillStyle=B,R.fillRect(0,0,32,32);var x=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Ae),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),D=new THREE.Points(W,x);return D.userData={positions:d,count:b},n.add(D),D}ee();var se=t?null:Se(),Fe='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';qe(Fe);var Ie=new THREE.Clock,Te=!0,Ge=new IntersectionObserver(function(b){Te=b[0].isIntersecting,b[0].isIntersecting&&!de&&!t&&(de=!0,L&&(L.style.transform="translateY(0)"),Z&&(Z.style.transform="translateY(0)"))},{threshold:.1});Ge.observe(a);var ve=!1,Me=null,Ee=0;function ce(){if(ve=!0,clearTimeout(Me),Me=setTimeout(function(){ve=!1},150),!t){var b=Q(X,C);b?(P=!0,J(X,C)):(P=!1,G.set(9999,9999,0))}}window.addEventListener("scroll",ce,{passive:!0});var _=null;function ae(){if(_=requestAnimationFrame(ae),!!Te){Ee++;var b=Math.min(Ie.getDelta(),.05),W=Ie.elapsedTime;if(t)u+=g*b;else{var d=w-u;d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),u+=d*.12,S+=(m-S)*.12}if(U&&(U.rotation.x=S,U.rotation.y=u,U.position.y=-15),se){for(var V=se.userData.positions,K=0;K<se.userData.count;K++)V[K*3+1]+=Math.sin(W*.2+K)*.05,V[K*3]+=Math.cos(W*.15+K*.5)*.03;se.geometry.attributes.position.needsUpdate=!0,se.rotation.y+=1e-4,se.position.x=-u*35*.35,se.position.y=S*28*.35}c.position.x=300+Math.sin(W*.3)*100,c.position.y=350+Math.cos(W*.2)*80,y.intensity=2+Math.sin(W*.5)*.4,T.intensity=.8+Math.sin(W*.4+1)*.3,!(t&&ve&&Ee%4!==0)&&(je(b),o.render(n,e))}}return ae(),function(){cancelAnimationFrame(_),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",xe),window.removeEventListener("mouseup",fe)),window.removeEventListener("scroll",ce),clearTimeout(Me),Ge.disconnect(),n.traverse(function(b){b.geometry&&b.geometry.dispose(),b.material&&(b.material.map&&b.material.map.dispose(),b.material.dispose())}),o.dispose(),o.forceContextLoss(),o.domElement.parentNode&&o.domElement.parentNode.removeChild(o.domElement),U=null}}function qt(a){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",a.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var o=new THREE.PointLight(16107370,3,1400);o.position.set(300,350,400),t.add(o);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),t.add(c);var y=new THREE.PointLight(5913114,1.2,900);y.position.set(0,200,-300),t.add(y);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),t.add(v);var T=0,w=Math.PI*2/6,u=8e4,m=.03,S=.95,i=.005,f=12e4,r=null,g,A,O,F,G,ne,N=0,P=!1,X=0,C=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function q(){var J=new THREE.BufferGeometry;g=new Float32Array(f*3),A=new Float32Array(f*3),O=new Float32Array(f*3),F=new Float32Array(f*3),G=new Float32Array(f),ne=new Float32Array(f),J.setAttribute("position",new THREE.BufferAttribute(g,3)),J.setAttribute("color",new THREE.BufferAttribute(F,3)),J.setAttribute("size",new THREE.BufferAttribute(G,1)),J.setAttribute("alpha",new THREE.BufferAttribute(ne,1)),J.setAttribute("velocity",new THREE.BufferAttribute(A,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Z=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:L,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(J,Z),t.add(r)}function re(J,Q){return new Promise(function(L){try{var Z=512,de=document.createElement("canvas");de.width=de.height=Z;var le=de.getContext("2d"),xe=new DOMParser().parseFromString(J,"image/svg+xml"),fe=xe.querySelector("svg");if(!fe){L([]);return}var Se=parseFloat(fe.getAttribute("width")||512),se=parseFloat(fe.getAttribute("height")||512),Fe=fe.getAttribute("viewBox");if(Fe){var Ie=Fe.split(/[\s,]+/);Se=+Ie[2],se=+Ie[3]}var Te=Math.min(Z/Se,Z/se)*.9,Ge=(Z-Se*Te)/2,ve=(Z-se*Te)/2;le.save(),le.translate(Ge,ve),le.scale(Te,Te),le.fillStyle="white",xe.querySelectorAll("path,rect,circle").forEach(function(d){if(d.tagName==="path"){var V=d.getAttribute("d");V&&le.fill(new Path2D(V))}else d.tagName==="rect"?le.fillRect(+d.getAttribute("x")||0,+d.getAttribute("y")||0,+d.getAttribute("width")||0,+d.getAttribute("height")||0):d.tagName==="circle"&&(le.beginPath(),le.arc(+d.getAttribute("cx")||0,+d.getAttribute("cy")||0,+d.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Me=le.getImageData(0,0,Z,Z).data,Ee=[],ce=0;ce<Z;ce++)for(var _=0;_<Z;_++){var ae=(ce*Z+_)*4;Me[ae+3]>30&&Ee.push({x:_,y:ce,a:Me[ae+3]/255})}if(!Ee.length){L([]);return}for(var b=[],ae=0;ae<Q;ae++){var W=Ee[Math.floor(Math.random()*Ee.length)];b.push({x:(W.x-Z/2)*1.2+(Math.random()-.5)*1.65,y:-(W.y-Z/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*W.a,a:W.a})}L(b)}catch(d){console.error(d),L([])}})}function $(J){N=J.length;for(var Q=0;Q<N;Q++){var L=J[Q],Z=Q*3;g[Z]=L.x,g[Z+1]=L.y+40,g[Z+2]=L.z,A[Z]=A[Z+1]=A[Z+2]=0,O[Z]=L.x,O[Z+1]=L.y,O[Z+2]=L.z;var de=C[Math.floor(Math.random()*C.length)],le=.7+Math.random()*.4;F[Z]=de.r*le,F[Z+1]=de.g*le,F[Z+2]=de.b*le,G[Q]=1.8+Math.random()*3.8,ne[Q]=.3+(L.a||.7)*.75}r.geometry.setDrawRange(0,N),["position","color","size","alpha"].forEach(function(xe){r.geometry.attributes[xe].needsUpdate=!0}),P=!0}function k(J){return re(J,Math.min(f,u)).then(function(Q){Q.length&&r&&$(Q)})}function Y(J){if(!(!P||!N)){X+=J;for(var Q=0;Q<N;Q++){var L=Q*3,Z=Q*1.37;A[L]+=Math.sin(X*.4+Z)*.008+Math.sin(X*1.1+Z*2.3)*.003,A[L+1]+=Math.cos(X*.35+Z*.7)*.008+Math.sin(X*.9+Z*1.5)*.004,A[L+2]+=Math.sin(X*.25+Z*1.1)*.004,A[L+1]-=m*.06,A[L]+=Math.sin(X*.25+g[L+1]*.008)*i*.6,A[L+2]+=Math.cos(X*.3+g[L]*.008)*i*.3;var de=O[L],le=O[L+1]+40,xe=O[L+2],fe=de-g[L],Se=le-g[L+1],se=xe-g[L+2],Fe=Math.sqrt(fe*fe+Se*Se+se*se),Ie=(Q*48271&65535)/65535,Te=.003+Ie*.003,Ge=1+Math.min(Fe*.002,.5),ve=Te*Ge;A[L]+=fe*ve,A[L+1]+=Se*ve,A[L+2]+=se*ve;var Me=(Q*16807&65535)/65535,Ee=S*(.92+Me*.06);A[L]*=Ee,A[L+1]*=Ee,A[L+2]*=Ee,g[L]+=A[L],g[L+1]+=A[L+1],g[L+2]+=A[L+2];var ce=Math.sqrt(Math.pow(g[L]-O[L],2)+Math.pow(g[L+1]-O[L+1],2)+Math.pow(g[L+2]-O[L+2],2));ne[Q]=.15+.55*(1-Math.min(ce*.005,1))+Math.sin(X*1.5+Q*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}q();for(var U=4e3,M=new THREE.BufferGeometry,E=new Float32Array(U*3),p=new Float32Array(U*3),h=0;h<U;h++){E[h*3]=(Math.random()-.5)*2200,E[h*3+1]=(Math.random()-.5)*1800,E[h*3+2]=-200-Math.random()*1800;var s=C[Math.floor(Math.random()*C.length)],l=.2+Math.random()*.3;p[h*3]=s.r*l,p[h*3+1]=s.g*l,p[h*3+2]=s.b*l}M.setAttribute("position",new THREE.BufferAttribute(E,3)),M.setAttribute("color",new THREE.BufferAttribute(p,3));var z=document.createElement("canvas");z.width=z.height=32;var H=z.getContext("2d"),I=H.createRadialGradient(16,16,0,16,16,16);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(.3,"rgba(255,255,255,0.6)"),I.addColorStop(.7,"rgba(255,255,255,0.15)"),I.addColorStop(1,"rgba(255,255,255,0)"),H.fillStyle=I,H.fillRect(0,0,32,32);var ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(z),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),ee=new THREE.Points(M,ie);t.add(ee);var we='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';k(we);var Oe=new THREE.Clock,qe=!0,je=new IntersectionObserver(function(J){qe=J[0].isIntersecting},{threshold:0});je.observe(a);var et=a.querySelectorAll("#logo-coords, #logo-drag-label");et.forEach(function(J){J.parentElement.style.display="none"});var Je=null;function De(){if(Je=requestAnimationFrame(De),!!qe){var J=Math.min(Oe.getDelta(),.05),Q=Oe.elapsedTime;T+=w*J,r&&(r.rotation.y=T,r.position.y=5,r.scale.setScalar(.85));for(var L=0;L<U;L++)E[L*3+1]+=Math.sin(Q*.2+L)*.05,E[L*3]+=Math.cos(Q*.15+L*.5)*.03;M.attributes.position.needsUpdate=!0,ee.rotation.y+=1e-4,ee.position.x=-T*35*.35,o.position.x=300+Math.sin(Q*.3)*100,o.position.y=350+Math.cos(Q*.2)*80,c.intensity=2+Math.sin(Q*.5)*.4,v.intensity=.8+Math.sin(Q*.4+1)*.3,Y(J),e.render(t,n)}}return De(),function(){cancelAnimationFrame(Je),je.disconnect(),t.traverse(function(J){J.geometry&&J.geometry.dispose(),J.material&&(J.material.map&&J.material.map.dispose(),J.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var Gt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Nt(a){let t=a.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(Gt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Bn(t):Vt(t)}),function(){n=!0,e&&e()}}function Wt(a){let t=a.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(Gt).then(function(){n||(e=qt(t))}),function(){n=!0,e&&e()}}function Bn(a){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var o=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});o.setSize(1920,1080),o.setPixelRatio(Math.min(devicePixelRatio,2)),o.setClearColor(0,1),o.toneMapping=THREE.ACESFilmicToneMapping,o.toneMappingExposure=1.4,o.domElement.style.width="100%",o.domElement.style.height="100%",a.appendChild(o.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var y=new THREE.PointLight(13931578,2.4,1200);y.position.set(-300,-100,300),n.add(y);var v=new THREE.PointLight(5913114,1.2,900);v.position.set(0,200,-300),n.add(v);var T=new THREE.PointLight(16750916,1.3,600);T.position.set(0,-250,200),n.add(T);var w=0,u=0,m=0,S=0,i=!1,f=0,r=0,g=Math.PI*2/6,A=new THREE.Vector2(9999,9999),O=new THREE.Raycaster,F=120,G=new THREE.Vector3(9999,9999,0),ne=new THREE.Vector3(9999,9999,0),N=new THREE.Vector3,P=!1,X=0,C=0,q=8e4,re=.03,$=.95,k=.005,Y=12e4,U=null,M,E,p,h,s,l,z=0,H=!1,I=!1,ie=0,ee=0,we=null,Oe=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function qe(){var R=new THREE.BufferGeometry;M=new Float32Array(Y*3),E=new Float32Array(Y*3),p=new Float32Array(Y*3),h=new Float32Array(Y*3),s=new Float32Array(Y),l=new Float32Array(Y),R.setAttribute("position",new THREE.BufferAttribute(M,3)),R.setAttribute("color",new THREE.BufferAttribute(h,3)),R.setAttribute("size",new THREE.BufferAttribute(s,1)),R.setAttribute("alpha",new THREE.BufferAttribute(l,1)),R.setAttribute("velocity",new THREE.BufferAttribute(E,3));var B=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,D=new THREE.ShaderMaterial({vertexShader:B,fragmentShader:x,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});U=new THREE.Points(R,D),n.add(U)}function je(R,B){return new Promise(function(x){try{var D=512,oe=document.createElement("canvas");oe.width=oe.height=D;var te=oe.getContext("2d"),Ce=new DOMParser().parseFromString(R,"image/svg+xml"),me=Ce.querySelector("svg");if(!me){x([]);return}var Pe=parseFloat(me.getAttribute("width")||512),he=parseFloat(me.getAttribute("height")||512),ze=me.getAttribute("viewBox");if(ze){var be=ze.split(/[\s,]+/);Pe=+be[2],he=+be[3]}var Be=Math.min(D/Pe,D/he)*.9,Le=(D-Pe*Be)/2,pe=(D-he*Be)/2;te.save(),te.translate(Le,pe),te.scale(Be,Be),te.fillStyle="white",Ce.querySelectorAll("path,rect,circle").forEach(function(ye){if(ye.tagName==="path"){var We=ye.getAttribute("d");We&&te.fill(new Path2D(We))}else ye.tagName==="rect"?te.fillRect(+ye.getAttribute("x")||0,+ye.getAttribute("y")||0,+ye.getAttribute("width")||0,+ye.getAttribute("height")||0):ye.tagName==="circle"&&(te.beginPath(),te.arc(+ye.getAttribute("cx")||0,+ye.getAttribute("cy")||0,+ye.getAttribute("r")||0,0,Math.PI*2),te.fill())}),te.restore();for(var ke=te.getImageData(0,0,D,D).data,Ue=[],$e=0;$e<D;$e++)for(var Ke=0;Ke<D;Ke++){var Ze=($e*D+Ke)*4;ke[Ze+3]>30&&Ue.push({x:Ke,y:$e,a:ke[Ze+3]/255})}if(!Ue.length){x([]);return}for(var at=[],Ze=0;Ze<B;Ze++){var Ne=Ue[Math.floor(Math.random()*Ue.length)];at.push({x:(Ne.x-D/2)*1.2+(Math.random()-.5)*1.65,y:-(Ne.y-D/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ne.a,a:Ne.a})}x(at)}catch(ye){console.error(ye),x([])}})}function et(R){z=R.length;for(var B=0;B<z;B++){var x=R[B],D=B*3;M[D]=x.x,M[D+1]=x.y+40,M[D+2]=x.z,E[D]=E[D+1]=E[D+2]=0,p[D]=x.x,p[D+1]=x.y,p[D+2]=x.z;var oe=Oe[Math.floor(Math.random()*Oe.length)],te=.7+Math.random()*.4;h[D]=oe.r*te,h[D+1]=oe.g*te,h[D+2]=oe.b*te,s[B]=1.8+Math.random()*3.8,l[B]=.3+(x.a||.7)*.75}U.geometry.setDrawRange(0,z),["position","color","size","alpha"].forEach(function(Ce){U.geometry.attributes[Ce].needsUpdate=!0}),H=!0,I=!1,ie=1}function Je(R){return je(R,Math.min(Y,q)).then(function(B){B.length&&U&&et(B)})}function De(R){if(!(!H||!z)){ee+=R;for(var B=0;B<z;B++){var x=B*3,D=B*1.37;if(E[x]+=Math.sin(ee*.4+D)*.008+Math.sin(ee*1.1+D*2.3)*.003,E[x+1]+=Math.cos(ee*.35+D*.7)*.008+Math.sin(ee*.9+D*1.5)*.004,E[x+2]+=Math.sin(ee*.25+D*1.1)*.004,E[x+1]-=re*.06,E[x]+=Math.sin(ee*.25+M[x+1]*.008)*k*.6,E[x+2]+=Math.cos(ee*.3+M[x]*.008)*k*.3,P&&ce==="interactive"){var oe=M[x]-G.x,te=M[x+1]-G.y,Ce=M[x+2]-G.z,me=oe*oe+te*te+Ce*Ce,Pe=F*F;if(me<Pe&&me>.25){var he=Math.sqrt(me),ze=he/F,be=(B*2654435761&65535)/65535,Be=.6+be*.8,Le=Math.pow(1-ze,1.5+be),pe=1+Math.min(N.length()*.12,1),ke=Le*Be*1.2*pe,Ue=1/he;E[x]+=oe*Ue*ke,E[x+1]+=te*Ue*ke,E[x+2]+=Ce*Ue*ke*.2;var $e=.02+be*.06;E[x]+=N.x*Le*$e,E[x+1]+=N.y*Le*$e;var Ke=Le*.15;E[x]+=(be-.5)*Ke,E[x+1]+=((B*48271&65535)/65535-.5)*Ke}}var Ze=p[x],at=p[x+1]+40,Ne=p[x+2],ye=Ze-M[x],We=at-M[x+1],st=Ne-M[x+2],Ln=Math.sqrt(ye*ye+We*We+st*st),kn=(B*48271&65535)/65535,Dn=.003+kn*.003,In=1+Math.min(Ln*.002,.5),ht=Dn*In;E[x]+=ye*ht,E[x+1]+=We*ht,E[x+2]+=st*ht;var Un=(B*16807&65535)/65535,gt=$*(.92+Un*.06);E[x]*=gt,E[x+1]*=gt,E[x+2]*=gt,M[x]+=E[x],M[x+1]+=E[x+1],M[x+2]+=E[x+2];var Hn=Math.sqrt(Math.pow(M[x]-p[x],2)+Math.pow(M[x+1]-p[x+1],2)+Math.pow(M[x+2]-p[x+2],2));l[B]=.15+.55*(1-Math.min(Hn*.005,1))+Math.sin(ee*1.5+B*.01)*.05}U.geometry.attributes.position.needsUpdate=!0,U.geometry.attributes.alpha.needsUpdate=!0,U.geometry.attributes.velocity.needsUpdate=!0}}var J=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),L=new THREE.Vector3;function Z(R,B){var x=o.domElement.getBoundingClientRect();if(!(x.width===0||x.height===0)&&(A.set((R-x.left)/x.width*2-1,-((B-x.top)/x.height)*2+1),O.setFromCamera(A,e),O.ray.intersectPlane(Q,L))){ne.copy(G),U&&G.copy(L).applyMatrix4(J.copy(U.matrixWorld).invert()),N.subVectors(G,ne);var D=N.length();D>15&&N.multiplyScalar(15/D)}}var de=null;function le(){return de||(de=a.closest('[data-flip-element="target"]')||a),de}function xe(R,B){var x=le().getBoundingClientRect();return R>=x.left&&R<=x.right&&B>=x.top&&B<=x.bottom}var fe=a.querySelector("#logo-coords"),Se=a.querySelector("#logo-drag-label"),se=!1;function Fe(R){if(X=R.clientX,C=R.clientY,t||ce!=="interactive"){P=!1,G.set(9999,9999,0);return}var B=xe(R.clientX,R.clientY);if(B){P=!0,Z(R.clientX,R.clientY);var x=le().getBoundingClientRect(),D=Math.round(R.clientX-x.left),oe=Math.round(R.clientY-x.top);fe&&(fe.textContent="X: "+D+"PX    Y: "+oe+"PX")}else P=!1,G.set(9999,9999,0);i&&(w+=(R.clientX-f)*.005,m+=(R.clientY-r)*.005,m=Math.max(-Math.PI/2,Math.min(Math.PI/2,m)),f=R.clientX,r=R.clientY)}function Ie(R){t||ce!=="interactive"||xe(R.clientX,R.clientY)&&(i=!0,f=R.clientX,r=R.clientY)}function Te(){t||(i=!1,w=0,m=0,u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2))}window.addEventListener("mousemove",Fe),window.addEventListener("mousedown",Ie),window.addEventListener("mouseup",Te);function Ge(){for(var R=4e3,B=new THREE.BufferGeometry,x=new Float32Array(R*3),D=new Float32Array(R*3),oe=0;oe<R;oe++){x[oe*3]=(Math.random()-.5)*2200,x[oe*3+1]=(Math.random()-.5)*1800,x[oe*3+2]=-200-Math.random()*1800;var te=Oe[Math.floor(Math.random()*Oe.length)],Ce=.2+Math.random()*.3;D[oe*3]=te.r*Ce,D[oe*3+1]=te.g*Ce,D[oe*3+2]=te.b*Ce}B.setAttribute("position",new THREE.BufferAttribute(x,3)),B.setAttribute("color",new THREE.BufferAttribute(D,3));var me=document.createElement("canvas");me.width=me.height=32;var Pe=me.getContext("2d"),he=Pe.createRadialGradient(16,16,0,16,16,16);he.addColorStop(0,"rgba(255,255,255,1)"),he.addColorStop(.3,"rgba(255,255,255,0.6)"),he.addColorStop(.7,"rgba(255,255,255,0.15)"),he.addColorStop(1,"rgba(255,255,255,0)"),Pe.fillStyle=he,Pe.fillRect(0,0,32,32);var ze=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(me),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),be=new THREE.Points(B,ze);return be.userData={positions:x,count:R},n.add(be),be}qe();var ve=Ge(),Me='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Je(Me);var Ee=new THREE.Clock,ce="spin",_=null;function ae(){if(t){ce="spin";return}if(_===null){var R=document.querySelector(".scaling-element-video");_=R&&getComputedStyle(R).display!=="none"}if(!_){ce="spin";return}var B=window._flipProgress||0;B>.85?ce="interactive":B>.7?ce="transition":ce="spin"}var b="spin",W=!0,d=new IntersectionObserver(function(R){W=R[0].isIntersecting},{threshold:0});d.observe(a);var V=!1,K=null,j=0;function Re(){V=!0,clearTimeout(K),K=setTimeout(function(){V=!1},150);var R=xe(X,C);R?(P=!0,Z(X,C)):(P=!1,G.set(9999,9999,0))}window.addEventListener("scroll",Re,{passive:!0});function Ae(){if(we=requestAnimationFrame(Ae),!!W){j++;var R=Math.min(Ee.getDelta(),.05),B=Ee.elapsedTime;ae(),b==="interactive"&&ce!=="interactive"&&(P=!1,G.set(9999,9999,0),i=!1);var x=ce==="transition"||ce==="interactive";if(x&&!se?(se=!0,Se&&(Se.style.transform="translateY(0)"),fe&&(fe.style.transform="translateY(0)")):!x&&se&&(se=!1,Se&&(Se.style.transform="translateY(100%)"),fe&&(fe.style.transform="translateY(100%)")),b=ce,P&&!xe(X,C)&&(P=!1,G.set(9999,9999,0)),ce==="spin")u+=g*R,S+=(0-S)*.05;else if(ce==="transition")u=u%(Math.PI*2),u>Math.PI&&(u-=Math.PI*2),u<-Math.PI&&(u+=Math.PI*2),u+=(0-u)*.025,S+=(0-S)*.025;else{var D=w-u;D=D%(Math.PI*2),D>Math.PI&&(D-=Math.PI*2),D<-Math.PI&&(D+=Math.PI*2),u+=D*.12,S+=(m-S)*.12}U&&(U.rotation.x=S,U.rotation.y=u,U.scale.setScalar(1),U.position.y=-15);for(var oe=ve.userData.positions,te=0;te<ve.userData.count;te++)oe[te*3+1]+=Math.sin(B*.2+te)*.05,oe[te*3]+=Math.cos(B*.15+te*.5)*.03;ve.geometry.attributes.position.needsUpdate=!0,ve.rotation.y+=1e-4,ve.position.x=-u*35*.35,ve.position.y=S*28*.35,c.position.x=300+Math.sin(B*.3)*100,c.position.y=350+Math.cos(B*.2)*80,y.intensity=2+Math.sin(B*.5)*.4,T.intensity=.8+Math.sin(B*.4+1)*.3,!(t&&V&&j%4!==0)&&(De(R),o.render(n,e))}}return Ae(),function(){cancelAnimationFrame(we),window.removeEventListener("mousemove",Fe),window.removeEventListener("mousedown",Ie),window.removeEventListener("mouseup",Te),window.removeEventListener("scroll",Re),clearTimeout(K),d.disconnect(),n.traverse(function(R){R.geometry&&R.geometry.dispose(),R.material&&(R.material.map&&R.material.map.dispose(),R.material.dispose())}),o.dispose(),o.forceContextLoss(),o.domElement.parentNode&&o.domElement.parentNode.removeChild(o.domElement),U=null}}function Xt(a){let t=document.querySelector("[data-load-wrap]");if(!t)return null;ge.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),o=t.querySelector("[data-load-logo]"),c=Array.from(t.querySelectorAll("[data-load-text]")),y=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),v=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(o,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Xe},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(y.length&&v.set(y,{autoAlpha:1},0),c.length>=2){let T=new SplitText(c[0],{type:"lines,chars",mask:"lines"}),w=new SplitText(c[1],{type:"lines,chars",mask:"lines"});gsap.set([T.chars,w.chars],{autoAlpha:0,yPercent:125}),gsap.set(c,{autoAlpha:1}),v.to(T.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),v.to(T.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),v.to(w.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),v.to(w.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return v}function Yt(a){let n=[...(a||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(u=>{let m=u.parentElement;m&&(u.style.whiteSpace="nowrap",e.has(m)||e.set(m,[]),e.get(m).push(u))});function o(u){let m=getComputedStyle(u);return u.clientWidth-parseFloat(m.paddingLeft)-parseFloat(m.paddingRight)}function c(u,m){if(m<=0)return;let S=parseFloat(getComputedStyle(u).fontSize)||16;for(let i=0;i<5;i++){let f=u.getBoundingClientRect().width;if(f<=0)break;let r=m/f;if(Math.abs(r-1)<.002)break;S*=r,u.style.fontSize=S+"px"}}function y(){e.forEach((u,m)=>{let S=o(m);u.forEach(i=>c(i,S))})}let v=null;function T(){v||(v=requestAnimationFrame(()=>{v=null,y()}))}let w;return window.ResizeObserver&&(w=new ResizeObserver(T),e.forEach((u,m)=>w.observe(m))),window.addEventListener("resize",T),y(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(y),()=>{v&&cancelAnimationFrame(v),w&&w.disconnect(),window.removeEventListener("resize",T),n.forEach(u=>{u.style.whiteSpace="",u.style.fontSize=""})}}var He={duration:.8,ease:"expo.out"},$t=.08,Vn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Kt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function qn(a,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:a,transformOrigin:t}),n}function Zt(a){var t=a.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(o){var c=o.getAttribute("data-marker-direction")||"right",y=o.getAttribute("data-marker-theme")||"#000000",v=o.getAttribute("data-marker-scroll-start")||"top 90%",T=y.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(y).trim()||y,w=Kt[c]||Kt.right,u=Vn[o.getAttribute("data-highlight-marker-reveal")]||null;u&&(T=u.bar);var m=o.closest("[data-cursor-label]"),S={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,f=SplitText.create(o,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){S.timeline&&S.timeline.kill(),S.scrollTrigger&&S.scrollTrigger.kill(),o.querySelectorAll(".highlight-marker-bar").forEach(function(P){P.remove()}),S.listeners.forEach(function(P){P.el.removeEventListener(P.type,P.fn)}),S.listeners=[],i=!1;var g=r.lines,A=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(g.forEach(function(P,X){gsap.set(P,{position:"relative",overflow:"hidden"});var C=qn(T,w.origin);gsap.set(C,{[w.prop]:0}),P.appendChild(C),u&&(gsap.set(P,{zIndex:0,color:u.text}),gsap.set(C,{zIndex:-1})),A.to(C,{[w.prop]:1,duration:He.duration,ease:He.ease},X*$t);var q=function(){i&&(gsap.to(C,{[w.prop]:0,duration:He.duration,ease:He.ease}),u&&gsap.to(P,{color:u.hoverText,duration:He.duration,ease:He.ease}))},re=function(){i&&(gsap.to(C,{[w.prop]:1,duration:He.duration,ease:He.ease}),u&&gsap.to(P,{color:u.text,duration:He.duration,ease:He.ease}))};!u&&e&&(P.addEventListener("mouseenter",q),P.addEventListener("mouseleave",re),S.listeners.push({el:P,type:"mouseenter",fn:q},{el:P,type:"mouseleave",fn:re}))}),S.timeline=A,m){A.kill();var O=o.querySelectorAll(".highlight-marker-bar"),F=function(P){gsap.to(O,{[w.prop]:P,duration:He.duration,ease:He.ease,stagger:$t,overwrite:!0})},G=function(){F(1)},ne=function(){F(0)};m.addEventListener("cursorlabel:enter",G),m.addEventListener("cursorlabel:leave",ne),S.listeners.push({el:m,type:"cursorlabel:enter",fn:G},{el:m,type:"cursorlabel:leave",fn:ne});return}var N=ScrollTrigger.create({trigger:o,start:v,once:!0,onEnter:function(){A.play()}});S.scrollTrigger=N}});S.split=f,n.push(S)}),function(){n.forEach(function(o){o.timeline&&o.timeline.kill(),o.scrollTrigger&&o.scrollTrigger.kill(),o.listeners.forEach(function(c){c.el.removeEventListener(c.type,c.fn)}),o.split&&o.split.revert()})}}function jt(a){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,o=a.querySelector("[data-cursor-marquee-status]");if(!o)return;let c=o.querySelectorAll("[data-cursor-marquee-text-target]"),y=a.querySelectorAll("[data-cursor-marquee-text]");if(!y.length)return;let v=gsap.quickTo(o,"x",{duration:n,ease:"power3"}),T=gsap.quickTo(o,"y",{duration:n,ease:"power3"}),w=null,u=m=>{v(m.clientX),T(m.clientY)};return window.addEventListener("pointermove",u,{passive:!0}),y.forEach(m=>{m.addEventListener("mouseenter",()=>{w&&clearTimeout(w);let S=m.getAttribute("data-cursor-marquee-text")||"",i=(S.length||1)/e;c.forEach(f=>{f.textContent=S,f.style.animationPlayState="running",f.style.animationDuration=i+"s"}),o.setAttribute("data-cursor-marquee-status","active")}),m.addEventListener("mouseleave",()=>{o.setAttribute("data-cursor-marquee-status","not-active"),w&&clearTimeout(w),w=setTimeout(()=>{c.forEach(S=>{S.style.animationPlayState="paused"})},t*1e3)})}),o.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",u),clearTimeout(w),gsap.killTweensOf(o)}}function Jt(a){a.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function Qt(a){let t=a.querySelectorAll("[data-flip-element='wrapper']"),n=a.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function o(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(v){window._flipProgress=v.progress}}}),t.forEach(function(v,T){let w=T+1;if(w<t.length){let u=t[w],m=u.getBoundingClientRect(),S=v.getBoundingClientRect(),i=m.top+window.pageYOffset+u.offsetHeight/2,f=S.top+window.pageYOffset+v.offsetHeight/2,r=i-f;e.add(Flip.fit(n,u,{duration:r,ease:"none"}))}})}o();let c,y=function(){clearTimeout(c),c=setTimeout(function(){o()},100)};return window.addEventListener("resize",y),function(){clearTimeout(c),window.removeEventListener("resize",y),e&&e.kill()}}var Gn="150%";function Nn(a){let t=[];return a.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let o of e){if(o===" "){n.append(" ");continue}let c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.textContent=o,n.append(c),t.push(c)}}),t}var Et=new WeakMap;function en(a){let t=a.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(c){return Array.from(c.querySelectorAll("textPath")).map(function(y){return y.textContent})}),o=n.map(Nn);return o.forEach(function(c){gsap.set(c,{fillOpacity:0})}),Et.set(a,{wrap:t,lines:n,lineChars:o}),function(){Et.delete(a),n.forEach(function(c,y){c.querySelectorAll("textPath").forEach(function(v,T){v.textContent=e[y][T]})})}}function tn(a){let t=Et.get(a);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Gn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,o){let c=t.lineChars[o];c.length&&n.fromTo(c,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/c.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function wt(a){var t=[];function n(i,f,r,g){i.addEventListener(f,r,g),t.push(function(){i.removeEventListener(f,r,g)})}a.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var f=i.getAttribute("data-player-src");if(!f)return;var r=i.querySelector("video");if(!r)return;try{r.pause()}catch(_){}try{r.removeAttribute("src"),r.load()}catch(_){}function g(_){i.getAttribute("data-player-status")!==_&&i.setAttribute("data-player-status",_)}function A(_){r.muted=!!_,i.setAttribute("data-player-muted",r.muted?"true":"false")}function O(_){i.setAttribute("data-player-fullscreen",_?"true":"false")}function F(_){i.setAttribute("data-player-activated",_?"true":"false")}i.hasAttribute("data-player-activated")||F(!1);var G=i.querySelector("[data-player-timeline]"),ne=i.querySelector("[data-player-progress]"),N=i.querySelector("[data-player-buffered]"),P=i.querySelector("[data-player-timeline-handle]"),X=i.querySelectorAll("[data-player-time-duration]"),C=i.querySelectorAll("[data-player-time-progress]"),q=i.getAttribute("data-player-update-size"),re=i.getAttribute("data-player-lazy"),$=re==="true",k=re==="meta",Y=i.getAttribute("data-player-autoplay")==="true",U=i.getAttribute("data-player-muted")==="true",M=!1;Y?(A(!0),r.loop=!0):A(U),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),Y&&(r.autoplay=!1);var E=!!r.canPlayType("application/vnd.apple.mpegurl"),p=E&&"ManagedMediaSource"in window,h=!!(window.Hls&&Hls.isSupported())&&!p;if(q==="true"&&!k&&!$){var s=r.preload;r.preload="metadata";var l=function(){w(i,q,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",l),r.preload=s||""};n(r,"loadedmetadata",l,{once:!0}),r.src=f}function z(){S(f,h).then(function(_){_.width&&_.height&&w(i,q,_.width,_.height),X.length&&isFinite(_.duration)&&_.duration>0&&c(X,o(_.duration)),T(i,M)})}var H=!1,I=!1,ie="";function ee(){if(!H){if(H=!0,i._hls){try{i._hls.destroy()}catch(ae){}i._hls=null}if(p)r.preload=$||k?"auto":r.preload,r.src=f,n(r,"loadedmetadata",function(){T(i,M),q==="true"&&w(i,q,r.videoWidth,r.videoHeight),X.length&&c(X,o(r.duration))},{once:!0});else if(h){var _=new Hls({maxBufferLength:10});_.attachMedia(r),_.on(Hls.Events.MEDIA_ATTACHED,function(){_.loadSource(f)}),_.on(Hls.Events.MANIFEST_PARSED,function(){if(T(i,M),q==="true"){var ae=_.levels||[],b=y(ae);b&&b.width&&b.height&&w(i,q,b.width,b.height)}}),_.on(Hls.Events.LEVEL_LOADED,function(ae,b){b&&b.details&&isFinite(b.details.totalduration)&&X.length&&c(X,o(b.details.totalduration))}),i._hls=_}else r.src=f}}k?(z(),r.preload="none"):$?r.preload="none":ee();function we(){I=!0,r.paused||r.ended?(($||k)&&!H&&ee(),M=!0,ie="",g("loading"),v(r)):(ie="manual",r.pause())}function Oe(){r.muted=!r.muted,i.setAttribute("data-player-muted",r.muted?"true":"false")}function qe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function je(){if(i.requestFullscreen)return i.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function et(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Je(){qe()||r.webkitDisplayingFullscreen?et():je()}n(document,"fullscreenchange",function(){O(qe())}),n(document,"webkitfullscreenchange",function(){O(qe())}),n(r,"webkitbeginfullscreen",function(){O(!0)}),n(r,"webkitendfullscreen",function(){O(!1)}),n(i,"click",function(_){var ae=_.target.closest("[data-player-control]");if(!(!ae||!i.contains(ae))){var b=ae.getAttribute("data-player-control");b==="play"||b==="pause"||b==="playpause"?we():b==="mute"?Oe():b==="fullscreen"&&Je()}});function De(){X.length&&c(X,o(r.duration)),C.length&&c(C,o(r.currentTime))}n(r,"timeupdate",De),n(r,"loadedmetadata",function(){De(),u(i,q,r)}),n(r,"loadeddata",function(){u(i,q,r)}),n(r,"playing",function(){u(i,q,r)}),n(r,"durationchange",De);var J;function Q(){if(r.duration){var _=r.currentTime/r.duration*100;ne&&(ne.style.transform="translateX("+(-100+_)+"%)"),P&&(P.style.left=_+"%")}}function L(){Q(),!r.paused&&!r.ended&&(J=requestAnimationFrame(L))}function Z(){if(!(!N||!r.duration||!r.buffered.length)){var _=r.buffered.end(r.buffered.length-1),ae=_/r.duration*100;N.style.transform="translateX("+(-100+ae)+"%)"}}if(n(r,"progress",Z),n(r,"loadedmetadata",Z),n(r,"durationchange",Z),n(r,"play",function(){F(!0),cancelAnimationFrame(J),L(),g("playing")}),n(r,"playing",function(){M=!1,g("playing")}),n(r,"pause",function(){M=!1,cancelAnimationFrame(J),Q(),g("paused")}),n(r,"waiting",function(){g("loading")}),n(r,"canplay",function(){T(i,M)}),n(r,"ended",function(){M=!1,cancelAnimationFrame(J),Q(),g("paused"),F(!1)}),G){let _=function(K){se||(se=G.getBoundingClientRect());var j=(K-se.left)/se.width;return j<0&&(j=0),j>1&&(j=1),j},ae=function(K){if(r.duration){var j=K*100;ne&&(ne.style.transform="translateX("+(-100+j)+"%)"),P&&(P.style.left=j+"%"),C.length&&c(C,o(K*r.duration))}},b=function(K){r.duration&&(K-fe<Se||(fe=K,r.currentTime=xe))},W=function(K){if(r.duration){de=!0,le=!r.paused&&!r.ended,le&&r.pause(),i.setAttribute("data-timeline-drag","true"),se=G.getBoundingClientRect();var j=_(K.clientX);xe=j*r.duration,ae(j),b(performance.now()),G.setPointerCapture&&G.setPointerCapture(K.pointerId),window.addEventListener("pointermove",d,{passive:!1}),window.addEventListener("pointerup",V,{passive:!0}),K.preventDefault()}},d=function(K){if(de){var j=_(K.clientX);xe=j*r.duration,ae(j),b(performance.now()),K.preventDefault()}},V=function(){de&&(de=!1,i.setAttribute("data-timeline-drag","false"),se=null,r.currentTime=xe,le?v(r):(Q(),De()),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",V))};var de=!1,le=!1,xe=0,fe=0,Se=180,se=null;n(window,"resize",function(){de||(se=null)}),n(G,"pointerdown",W,{passive:!1}),P&&n(P,"pointerdown",W,{passive:!1})}var Fe,Ie=3e3;function Te(_){i.getAttribute("data-player-hover")!==_&&i.setAttribute("data-player-hover",_)}function Ge(){clearTimeout(Fe),Fe=setTimeout(function(){Te("idle")},Ie)}function ve(){Te("active"),Ge()}n(i,"pointerdown",ve),n(document,"fullscreenchange",ve),n(document,"webkitfullscreenchange",ve);var Me=!1;function Ee(_){var ae=i.getBoundingClientRect();_.clientX>=ae.left&&_.clientX<=ae.right&&_.clientY>=ae.top&&_.clientY<=ae.bottom&&ve()}if(n(i,"pointerenter",function(){ve(),Me||(Me=!0,n(window,"pointermove",Ee,{passive:!0}))}),n(i,"pointerleave",function(){Te("idle"),clearTimeout(Fe),Me&&(Me=!1,window.removeEventListener("pointermove",Ee))}),Y){var ce=new IntersectionObserver(function(_){_.forEach(function(ae){var b=ae.isIntersecting&&ae.intersectionRatio>0;b?(($||k)&&!H&&ee(),r.paused?(ie="",M=!0,g("loading"),v(r)):g("playing")):!r.paused&&!r.ended&&(ie="io",r.pause(),g("paused"))})},{threshold:.1});ce.observe(i)}t.push(function(){if(cancelAnimationFrame(J),clearTimeout(Fe),ce&&ce.disconnect(),i._hls){try{i._hls.destroy()}catch(_){}i._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(_){}})});function e(i){return(i<10?"0":"")+i}function o(i){if(!isFinite(i)||i<0)return"00:00";var f=Math.floor(i),r=Math.floor(f/3600),g=Math.floor(f%3600/60),A=f%60;return r>0?r+":"+e(g)+":"+e(A):e(g)+":"+e(A)}function c(i,f){i.forEach(function(r){r.textContent=f})}function y(i){return!i||!i.length?null:i.reduce(function(f,r){return(r.width||0)>(f.width||0)?r:f},i[0])}function v(i){var f=i.play();f&&typeof f.then=="function"&&f.catch(function(){})}function T(i,f){!f&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function w(i,f,r,g){if(!(f!=="true"||!r||!g)){var A=i.querySelector("[data-player-before]");A&&(A.style.paddingTop=g/r*100+"%")}}function u(i,f,r){if(f==="true"){var g=i.querySelector("[data-player-before]");if(g){var A=g.style.paddingTop&&g.style.paddingTop!=="0%";!A&&r.videoWidth&&r.videoHeight&&w(i,f,r.videoWidth,r.videoHeight)}}}function m(i,f){try{return new URL(f,i).toString()}catch(r){return f}}function S(i,f){return new Promise(function(r){if(f&&window.Hls&&Hls.isSupported())try{var g=new Hls,A={width:0,height:0,duration:NaN},O=!1,F=!1;g.on(Hls.Events.MANIFEST_PARSED,function(N,P){var X=P&&P.levels||g.levels||[],C=y(X);C&&C.width&&C.height&&(A.width=C.width,A.height=C.height,O=!0)}),g.on(Hls.Events.LEVEL_LOADED,function(N,P){P&&P.details&&isFinite(P.details.totalduration)&&(A.duration=P.details.totalduration,F=!0)}),g.on(Hls.Events.ERROR,function(){try{g.destroy()}catch(N){}r(A)}),g.on(Hls.Events.LEVEL_LOADED,function(){try{g.destroy()}catch(N){}r(A)}),g.loadSource(i);return}catch(N){r({width:0,height:0,duration:NaN});return}function G(N){for(var P=N.split(/\r?\n/),X=0,C=0,q=null,re=null,$=0;$<P.length;$++){var k=P[$];if(k.indexOf("#EXT-X-STREAM-INF:")===0)re=k;else if(re&&k&&k[0]!=="#"){q||(q=k.trim());var Y=/RESOLUTION=(\d+)x(\d+)/.exec(re);if(Y){var U=parseInt(Y[1],10),M=parseInt(Y[2],10);U>X&&(X=U,C=M)}re=null}}return{bestW:X,bestH:C,media:q}}function ne(N){for(var P=0,X=/#EXTINF:([\d.]+)/g,C;C=X.exec(N);)P+=parseFloat(C[1]);return P}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(N){if(!N.ok)throw new Error("master");return N.text()}).then(function(N){var P=G(N);if(!P.media){r({width:P.bestW||0,height:P.bestH||0,duration:NaN});return}var X=m(i,P.media);return fetch(X,{credentials:"omit",cache:"no-store"}).then(function(C){if(!C.ok)throw new Error("media");return C.text()}).then(function(C){r({width:P.bestW||0,height:P.bestH||0,duration:ne(C)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(i){i()}),t=[]}}var Wn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Xn="(min-width: 768px)";function rn(a){if(!a.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=wt(a),n=nn(a);else{let e=!1;return ct(Wn).catch(function(){}).then(function(){e||(t=wt(a),n=nn(a))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function nn(a){if(!a.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let o="",c=!1,y,v,T,w,u,m,S="",i="",f="",r=(s,l=a)=>l.querySelector(s),g=s=>r(`[data-mini-showreel-lightbox="${s}"]`),A=s=>r(`[data-mini-showreel-player="${s}"]`),O=s=>s.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",s)||s,F=(s,l)=>{let z=s.width,H=z/l;return H>s.height&&(H=s.height,z=H*l),{left:s.left+(s.width-z)/2,top:s.top+(s.height-H)/2,width:z,height:H}},G=s=>{let l=O(s).getBoundingClientRect(),z=s.getBoundingClientRect(),H=z.width>0&&z.height>0?z.width/z.height:16/9;return F(l,H)},ne=(s,l)=>gsap.set(s,{position:"fixed",left:l.left,top:l.top,width:l.width,height:l.height,margin:0,x:0,y:0});function N(s){o&&a.querySelectorAll(`[data-mini-showreel-lightbox="${o}"], [data-mini-showreel-player="${o}"]`).forEach(l=>l.setAttribute("data-mini-showreel-status",s))}function P(){i=(y==null?void 0:y.style.zIndex)||"",f=(v==null?void 0:v.style.zIndex)||"",y&&(y.style.zIndex=String(e)),v&&(v.style.zIndex=String(e))}function X(){y&&(y.style.zIndex=i),v&&(v.style.zIndex=f)}function C(s){let l=A(s);if(!l)return;let z=l.querySelector("[data-bunny-player-init]"),H=l.querySelector("video");if(H){if(z){let I=z.querySelector('[data-player-control="play"], [data-player-control="playpause"]');I&&(H.paused||H.ended)&&I.click();return}try{H.play()}catch(I){}}}function q(s){let l=A(s);if(!l)return;let z=l.querySelector("[data-bunny-player-init]"),H=l.querySelector("video");H&&(H.muted=!0,z&&z.setAttribute("data-player-muted","true"),(H.paused||H.ended)&&C(s))}function re(){X(),o="",c=!1,y=v=T=w=u=m=null,S="",i="",f="",ge.start()}function $(s){if(!s||c||(y=g(s),v=A(s),!y||!v)||(T=r("[data-mini-showreel-target]",y),!T))return;o=s,c=!0,ge.stop(),v.dataset.flipId=o,S=v.style.cssText||"",w=v.parentElement,u=v.nextSibling,P(),N("active"),C(o);let l=Flip.getState(v),z=G(T);y.appendChild(v),ne(v,z),m=Flip.from(l,{duration:t,ease:n,absolute:!0,scale:!1})}function k(s){!c||!v||s&&s!==o||(q(o),N("not-active"),m&&m.kill(),m=Flip.fit(v,w,{duration:t,ease:n,scale:!1,onComplete:()=>{w.insertBefore(v,u),v.style.cssText=S,re()}}))}function Y(){!c||!v||(m&&m.kill(),q(o),N("not-active"),w.insertBefore(v,u),v.style.cssText=S,re())}function U(){!c||!v||!T||ne(v,G(T))}function M(s){let l=s.target.closest("[data-mini-showreel-open]");l&&(s.preventDefault(),$(l.getAttribute("data-mini-showreel-open")||""))}function E(s){let l=s.target.closest("[data-mini-showreel-close]");l&&(s.preventDefault(),k(l.getAttribute("data-mini-showreel-close")||""))}function p(s){s.key==="Escape"&&k("")}let h=gsap.matchMedia();return h.add(Xn,function(){return a.addEventListener("click",M),document.addEventListener("click",E),window.addEventListener("keydown",p),window.addEventListener("resize",U),function(){Y(),a.removeEventListener("click",M),document.removeEventListener("click",E),window.removeEventListener("keydown",p),window.removeEventListener("resize",U)}}),function(){h.revert(),Y()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",a=>{it.x=a.clientX,it.y=a.clientY,it.known=!0},{passive:!0});function Qe(a){let t=e=>a(e.clientX,e.clientY),n=()=>{it.known&&a(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var _e=1920,Ve=1080,St="#E5E5E5",Tt="#000000",on="http://www.w3.org/2000/svg";function an(a){let t=a.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(on,"svg");n.setAttribute("viewBox",`0 0 ${_e} ${Ve}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(h,s)=>{let l=document.createElementNS(on,h);return l.setAttribute("fill",s),n.appendChild(l),l},o=e("polygon",St),c=e("polygon",Tt),y=e("rect",Tt),v=e("rect",St),T=e("rect",St),w=e("rect",Tt);[y,v,T,w].forEach(h=>h.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let u=(h,s,l,z,H)=>{h.setAttribute("x",s),h.setAttribute("y",l),h.setAttribute("width",Math.max(0,z)),h.setAttribute("height",Math.max(0,H))},m={x:_e*(2/3),y:Ve*(1/3)},S=.1,i=.9,f={x:m.x,y:m.y},r={x:m.x,y:m.y},g={x:m.x,y:m.y},A=!1,O=()=>gsap.to(g,{x:gsap.utils.random(_e*.327,_e*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:O}),F=()=>gsap.to(g,{y:gsap.utils.random(Ve*.193,Ve*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:F});O(),F();function G(){let h=gsap.utils.clamp(_e*S,_e*i,f.x),s=_e-h,l=gsap.utils.clamp(Ve*S,Ve*i,f.y),z=Ve-l;o.setAttribute("points",`0,${l} ${h},0 ${_e},${l} ${_e},${Ve} 0,${Ve}`),c.setAttribute("points",`${_e},${l} ${h},0 ${h},${l}`),u(y,0,l,h,z);let H=h*.25,I=z*(2/3);u(v,h/2-H/2,l+z-I,H,I),u(T,h,l,s,z);let ie=s*.5,ee=z/3;u(w,h+s/2-ie/2,l+z/2-ee/2,ie,ee)}let ne=.1,N=.03;function P(){let s=1-Math.pow(1-(A?ne:N),gsap.ticker.deltaRatio(60)),l=A?r:g;f.x+=(l.x-f.x)*s,f.y+=(l.y-f.y)*s,G()}let X=(h,s)=>{let l=t.getBoundingClientRect();!l.width||!l.height||(r.x=gsap.utils.clamp(0,_e,(h-l.left)/l.width*_e),r.y=gsap.utils.clamp(0,Ve,(s-l.top)/l.height*Ve),A=!0)},C=()=>{A=!1},q=(h,s)=>{let l=t.getBoundingClientRect();h>=l.left&&h<=l.right&&s>=l.top&&s<=l.bottom?X(h,s):C()},$=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Qe(q):null,k=h=>{let s=h.touches[0];s&&X(s.clientX,s.clientY)},Y={passive:!0};t.addEventListener("touchstart",k,Y),t.addEventListener("touchmove",k,Y),t.addEventListener("touchend",C,Y),t.addEventListener("touchcancel",C,Y);let U=!1,M=()=>{U||(U=!0,gsap.ticker.add(P))},E=()=>{U&&(U=!1,gsap.ticker.remove(P))},p=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:h=>h.isActive?M():E()});return G(),M(),function(){E(),p.kill(),gsap.killTweensOf(g),$&&$(),t.removeEventListener("touchstart",k,Y),t.removeEventListener("touchmove",k,Y),t.removeEventListener("touchend",C,Y),t.removeEventListener("touchcancel",C,Y),n.remove()}}var Yn="http://www.w3.org/2000/svg";var $n=4.1343749999999995,Kn="#AFAFAF",Zn="#000000",jn=5e3,Jn=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Qn=0,sn=(a,t)=>{if(a<0||t<0||a>=20||t>=20)return!1;let n=20/2;return Math.hypot(a+.5-n,t+.5-n)<=n},Ye=(a,t)=>{let n=document.createElementNS(Yn,a);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function cn(a){let t=a.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let o="pulse-dots-liquid-"+ ++Qn;e.setAttribute("data-pulse-dots-paused","");let c=Ye("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});c.style.setProperty("--pd-step",`${31.5}px`);let y=Ye("filter",{id:o,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});y.append(Ye("feGaussianBlur",{in:"SourceGraphic",stdDeviation:$n.toFixed(2)}),Ye("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let v=Ye("defs",{});v.appendChild(y);let T=Ye("rect",{width:1e3,height:1e3,fill:Kn}),w=Ye("g",{filter:`url(#${o})`,fill:Zn});for(let m=0;m<20;m++)for(let S=0;S<20;S++){if(!sn(S,m))continue;let i=Jn.filter(O=>sn(S+O.dx,m+O.dy)),f=i[Math.floor(Math.random()*i.length)],r=185+S*31.5+27.5625/2,g=185+m*31.5+27.5625/2,A=Ye("g",{transform:`rotate(${f.deg} ${r} ${g})`});A.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*jn)}ms`),A.append(Ye("circle",{class:"pulse-dots__dot is--first",cx:r,cy:g,r:27.5625/2}),Ye("circle",{class:"pulse-dots__dot is--last",cx:r,cy:g,r:27.5625/2})),w.appendChild(A)}c.append(v,T,w),e.appendChild(c);let u=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:m=>e.toggleAttribute("data-pulse-dots-paused",!m.isActive)});e.toggleAttribute("data-pulse-dots-paused",!u.isActive),n.push(()=>{u.kill(),e.removeAttribute("data-pulse-dots-paused"),c.remove()})}),()=>n.forEach(e=>e())}var ft=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = aTextureCoord;
}`,ln=`#version 300 es
// Copyright (c) Unicorn Studio. Licensed under the Unicorn Studio Commercial License.
// Unauthorized copying, redistribution, or use in competing products is prohibited.
precision mediump float;in vec3 aVertexPosition;
in vec2 aTextureCoord;uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;out vec2 vTextureCoord;
out vec3 vVertexPosition;void main() {
gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,un=`#version 300 es
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
}`,dn=[`#version 300 es
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
}`,fn=`#version 300 es
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
}fragColor = color;}`,pn=`#version 300 es
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
fragColor = color;}`],hn=[`#version 300 es
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
}`;var At=60,tr=1.5,nr=1,xn=150,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function bn(a){let t=a.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let o=!!e.getExtension("EXT_color_buffer_float");function c(p,h){let s=e.createShader(p);return e.shaderSource(s,h),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let y=[];function v(p,h=ln){let s=e.createProgram(),l=c(e.VERTEX_SHADER,h),z=c(e.FRAGMENT_SHADER,p);e.attachShader(s,l),e.attachShader(s,z),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(l),e.deleteShader(z),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let H={},I=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let ee=0;ee<I;ee++){let we=e.getActiveUniform(s,ee);H[we.name]=e.getUniformLocation(s,we.name)}let ie={p:s,loc:H};return y.push(ie),ie}let T={bg:v(un,ft),shapes:dn.map(p=>v(p,vn)),trailSim:v(pn,ft),trail:v(fn),blur:mn.map(p=>v(p)),bloom:hn.map(p=>v(p)),gmap:v(gn,ft)},w=e.createVertexArray();e.bindVertexArray(w);let u=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,u),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let S=[];function i(p,h,s=!1){let l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),s&&o?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,p,h,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,p,h,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let z=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,z),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,l,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let H={tex:l,fb:z,w:p,h};return S.push(H),H}function f(){S.forEach(p=>{e.deleteTexture(p.tex),e.deleteFramebuffer(p.fb)}),S.length=0}function r(p,h,s,l){e.useProgram(p.p);let z=h?h.w:n.width,H=h?h.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,h?h.fb:null),e.viewport(0,0,z,H);let I=p.loc;I.uMVMatrix&&e.uniformMatrix4fv(I.uMVMatrix,!1,Ct),I.uPMatrix&&e.uniformMatrix4fv(I.uPMatrix,!1,Ct),I.uTextureMatrix&&e.uniformMatrix4fv(I.uTextureMatrix,!1,Ct),I.uResolution&&e.uniform2f(I.uResolution,z,H),I.uArtboardResolution&&e.uniform2f(I.uArtboardResolution,1920,1920),I.uAspectRatio&&e.uniform1f(I.uAspectRatio,1),I.uMousePos&&e.uniform2f(I.uMousePos,g.x,g.y),I.uIsMask&&e.uniform1i(I.uIsMask,0),I.uParentTrackMouse&&e.uniform1f(I.uParentTrackMouse,0);let ie=0;Object.keys(s).forEach(ee=>{I[ee]&&(e.activeTexture(e.TEXTURE0+ie),e.bindTexture(e.TEXTURE_2D,s[ee].tex),e.uniform1i(I[ee],ie),ie++)}),Object.keys(l||{}).forEach(ee=>{if(!I[ee])return;let we=l[ee];Array.isArray(we)?e.uniform2f(I[ee],we[0],we[1]):e.uniform1f(I[ee],we)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let g={x:.5,y:.5},A={x:.5,y:.5},O=0,F=null,G=0;function ne(){f();let p=Math.min(tr,window.devicePixelRatio||1),h=Math.max(1,Math.round(t.clientWidth*p)),s=Math.max(1,Math.round(t.clientHeight*p));n.width=h,n.height=s;let l=I=>[Math.max(1,Math.round(h*I)),Math.max(1,Math.round(s*I))];F={a:i(h,s),b:i(h,s),pp:[i(...l(.5),!0),i(...l(.5),!0)],trail:i(h,s),blur1:i(...l(1)),blur2:i(...l(1)),blur3:i(...l(1)),blur4:i(...l(1)),bth:i(...l(1)),bd1:i(...l(1)),bd2:i(...l(1)),bs1:i(...l(1)),bs2:i(...l(1)),bloom:i(h,s)},r(T.bg,F.a,{});let z=F.a,H=F.b;T.shapes.forEach(I=>{r(I,H,{uBgTexture:z});let ie=z;z=H,H=ie}),F.base=z,G=0}function N(){if(!F)return;let p=F.pp[G],h=F.pp[1-G];r(T.trailSim,h,{uPingPongTexture:p},{uTime:O,uPreviousMousePos:[A.x,A.y]}),G=1-G,r(T.trail,F.trail,{uTexture:F.base,uPingPongTexture:h}),r(T.blur[0],F.blur1,{uTexture:F.trail}),r(T.blur[1],F.blur2,{uTexture:F.blur1}),r(T.blur[2],F.blur3,{uTexture:F.blur2}),r(T.blur[3],F.blur4,{uTexture:F.blur3});let s=F.blur4;r(T.bloom[0],F.bth,{uTexture:s}),r(T.bloom[1],F.bd1,{uTexture:F.bth}),r(T.bloom[2],F.bd2,{uTexture:F.bd1,uBgTexture:s}),r(T.bloom[3],F.bs1,{uTexture:F.bd2}),r(T.bloom[4],F.bs2,{uTexture:F.bs1,uBgTexture:s}),r(T.bloom[5],F.bloom,{uTexture:F.bs2,uBgTexture:s}),r(T.gmap,null,{uTexture:F.bloom},{uTime:0}),A.x=g.x,A.y=g.y}let P=xn,C=Qe((p,h)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(g.x=(p-s.left)/s.width,g.y=1-(h-s.top)/s.height,P=0,Y())}),q=null,re=0,$=!1;function k(p){if(!$||P>=xn){q=null;return}if(q=requestAnimationFrame(k),p-re<1e3/At-1)return;let h=re?Math.min(p-re,100):1e3/At;re=p,O+=nr*(h/(1e3/At)),N(),P++}function Y(){$&&!q&&(A.x=g.x,A.y=g.y,re=0,q=requestAnimationFrame(k))}let U=new IntersectionObserver(([p])=>{$=p.isIntersecting,$?Y():q&&(cancelAnimationFrame(q),q=null)});U.observe(t);let M=null,E=new ResizeObserver(()=>{clearTimeout(M),M=setTimeout(()=>{ne(),N()},60)});return E.observe(t),ne(),N(),function(){q&&cancelAnimationFrame(q),q=null,clearTimeout(M),U.disconnect(),E.disconnect(),C(),f(),y.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(u),e.deleteBuffer(m),e.deleteVertexArray(w);let h=e.getExtension("WEBGL_lose_context");h&&h.loseContext(),n.remove()}}var rr="#BBC0C8",or="#FFFFFF";var Mt='"Suisseintl Book", Arial, sans-serif';var yn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],ar=3,ir=1.325,lt=5,sr=.4,Pn=20,cr=2;function En(a){let t=a.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),o=c=>{let y=(c%lt+lt)%lt/lt;return y<.4?1-e(y/.4):y<.6?0:e((y-.6)/.4)};return t.forEach(c=>{let y=(c.getAttribute("data-text")||"").trim();if(!y)return;let v=Array.from(Array(ar).fill(y).join(" ").toUpperCase()),T=window.matchMedia("(prefers-reduced-motion: reduce)").matches,w=document.createElement("canvas");w.setAttribute("aria-hidden","true"),Object.assign(w.style,{display:"block",width:"100%",height:"100%"}),c.appendChild(w);let u=w.getContext("2d"),m=[],S=0,i=new Map,f=2;function r(){u.font=`24px ${Mt}`,m=v.map(k=>u.measureText(k).width),S=(3363-m.reduce((k,Y)=>k+Y,0))/(v.length-1)}let g=null;function A(){i=new Map,u.font=`24px ${Mt}`;let $=24,k=24*.35,Y=[...new Set(v)].filter(p=>p!==" ").map(p=>({ch:p,w:u.measureText(p).width})),U=Math.ceil(($+k+f*2)*O),M=0;Y.forEach(p=>{p.sx=M,p.sw=Math.ceil((p.w+f*2)*O),M+=p.sw+2}),g=document.createElement("canvas"),g.width=Math.max(1,M),g.height=Math.max(1,U);let E=g.getContext("2d");E.font=`${24*O}px ${Mt}`,E.fillStyle=or,E.textBaseline="alphabetic",Y.forEach(p=>{E.fillText(p.ch,p.sx+f*O,(f+$)*O),i.set(p.ch,{sx:p.sx,sw:p.sw,x:-p.w/2-f,y:-$-f,w:p.sw/O,h:U/O})})}let O=1;function F(){let $=Math.min(cr,window.devicePixelRatio||1),k=c.clientWidth;w.width=Math.max(1,Math.round(k*$)),w.height=Math.max(1,Math.round(c.clientHeight*$)),O=w.width/1920}let G=0;function ne(){u.setTransform(1,0,0,1,0,0),u.fillStyle=rr,u.fillRect(0,0,w.width,w.height);let $=T?0:e(G%Pn/Pn)*Math.PI*2;yn.forEach((k,Y)=>{let U=yn.length-1-Y,M=T?0:o(G-lt+U*sr),E=S+M*ir*24,p=2*Math.PI*k.r,h=k.start*Math.PI/180+$,s=0;for(let l=0;l<v.length;l++){let z=m[l];if(s+z>p)break;let H=i.get(v[l]);if(H){let I=h+(s+z/2)/k.r,ie=Math.cos(I),ee=Math.sin(I);u.setTransform(-ee*O,ie*O,-ie*O,-ee*O,(960+k.r*ie)*O,(960+k.r*ee)*O),u.drawImage(g,H.sx,0,H.sw,g.height,H.x,H.y,H.w,H.h)}s+=z+E}})}let N=($,k)=>{G+=k/1e3,ne()},P=!1,X=()=>{!P&&!T&&(P=!0,gsap.ticker.add(N))},C=()=>{P&&(P=!1,gsap.ticker.remove(N))},q=new ResizeObserver(()=>{F(),A(),ne()});q.observe(c),F(),r(),A(),ne(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{r(),A(),ne()});let re=ScrollTrigger.create({trigger:c,start:"top bottom",end:"bottom top",onToggle:$=>$.isActive?X():C()});re.isActive&&X(),n.push(()=>{C(),re.kill(),q.disconnect(),w.remove()})}),()=>n.forEach(c=>c())}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},wn=a=>{let t=Math.sin(a*127.1+311.7)*43758.5453;return t-Math.floor(t)},lr=a=>{let t=Math.floor(a),n=a-t,e=n*n*(3-2*n);return wn(t)*(1-e)+wn(t+1)*e};function Sn(a){let t=a.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,o=[],c=null,y=0,v=18,T=0,w=0,u=0,m=-1e5,S=-1e5,i=!1,f=!1;function r(){c&&c.revert(),t.textContent="";let C=getComputedStyle(t);y=parseFloat(C.paddingTop),v=parseFloat(C.lineHeight),T=t.offsetHeight;let q=Math.max(1,Math.floor((T-y-parseFloat(C.paddingBottom))/v)),re=document.createDocumentFragment();for(let $=0;$<q;$++){let k=document.createElement("div");k.className="type-field__row",k.textContent=n,re.appendChild(k)}t.appendChild(re),t.setAttribute("aria-hidden","true"),c=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){o=[...t.children].map(($,k)=>({chars:$.querySelectorAll(".type-field__char"),cur:o[k]?o[k].cur:0,drawn:0}))}})}function g(C){let q=Math.max(0,Math.min(C.chars.length,Math.round(C.cur)));if(q===C.drawn)return;let re=Math.min(q,C.drawn),$=Math.max(q,C.drawn);for(let k=re;k<$;k++)C.chars[k].style.visibility=k<q?"visible":"hidden";C.drawn=q}function A(C,q){if(!o.length)return;let re=Math.min(q,50)/16.667,$=p=>1-Math.pow(1-p,re),k=ge.scroll,Y=Math.min(Math.max(w-k,0),u-k-T);S+=(m-Y-y-S)*$(rt.followEase);let U=Math.floor(S/v),M=k*.004,E=i&&m>=w-k&&m<=u-k;for(let p=0;p<o.length;p++){let h=o[p],s=h.chars.length,l=Math.abs(p-U),z=0;if(E){if(l===0)z=s;else if(l<=rt.radius){let H=1-l/(rt.radius+1);z=1+Math.min(rt.maxSide,H*(1-rt.ragged/2+rt.ragged*lr(p*1.3+M)))*(s-1)}}h.cur+=(z-h.cur)*$(rt.ease),g(h)}}function O(){f||(gsap.ticker.add(A),f=!0)}function F(){f&&(gsap.ticker.remove(A),f=!1)}let G=Qe((C,q)=>{S<-1e4&&(S=q),m=q,i=!0}),ne=()=>{i=!1};document.documentElement.addEventListener("mouseleave",ne),r();let N=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(C){w=C.start+window.innerHeight,u=C.end},onToggle(C){C.isActive?O():F()}});N.isActive&&O();let P,X=()=>{clearTimeout(P),P=setTimeout(()=>{Math.floor((t.offsetHeight-y-parseFloat(getComputedStyle(t).paddingBottom))/v)!==o.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",X),function(){F(),clearTimeout(P),G(),document.documentElement.removeEventListener("mouseleave",ne),window.removeEventListener("resize",X),N.kill(),c&&c.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var Tn={duration:.5,ease:"power3"};function An(a){let t=a.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let o=e.querySelector("[data-cursor-label-item]");if(!o)return;let c=gsap.quickTo(o,"x",Tn),y=gsap.quickTo(o,"y",Tn),v=0,T=0,w=!1,u=new ResizeObserver(()=>{v=o.offsetWidth,T=o.offsetHeight});u.observe(o),v=o.offsetWidth,T=o.offsetHeight;let S=Qe((f,r)=>{let g=e.getBoundingClientRect();if(!(f>=g.left&&f<=g.right&&r>=g.top&&r<=g.bottom)){w&&(w=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let O=gsap.utils.clamp(0,Math.max(0,g.width-v),f-g.left-v/2),F=gsap.utils.clamp(0,Math.max(0,g.height-T),r-g.top-T/2);if(!w){w=!0,c(O,O),y(F,F),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}c(O),y(F)}),i=()=>{w&&(w=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),n.push(()=>{S(),document.documentElement.removeEventListener("mouseleave",i),u.disconnect(),gsap.killTweensOf(o),gsap.set(o,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var ur=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],dr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],vr="#FFFFFF";var Cn="power3.out";function Mn(a){let t=a.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let o=[],c=[],y=[];function v(){if(c.length&&c[0].isConnected)return;let m=e.querySelectorAll(":scope > div > div");o=(m.length?[...m]:[e]).map(i=>SplitText.create(i,{type:"chars"})),c=o.flatMap(i=>i.chars),y=m.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],c.forEach(i=>{i.dataset.orig=i.textContent})}function T(m){m.textContent=m.dataset.orig,m.style.border=""}let w=()=>{v(),y.forEach(S=>{S.el.style.overflow="visible"});let m=(c.length-1)/2;c.forEach((S,i)=>{gsap.to(S,{color:vr,ease:Cn,duration:.3,delay:Math.abs(i-m)*.03,overwrite:"auto",onStart:()=>{let f=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);f==1&&(S.textContent=gsap.utils.random(dr)),r==1&&(S.style.border=`1px solid ${gsap.utils.random(ur)}`)}})})},u=()=>{if(!c.length)return;let m=getComputedStyle(e).color,S=(c.length-1)/2;y.forEach(i=>{i.el.style.overflow=i.overflow}),c.forEach((i,f)=>{gsap.to(i,{color:m,ease:Cn,duration:.3,delay:Math.abs(f-S)*.03,overwrite:"auto",onStart:()=>T(i)})})};e.addEventListener("mouseenter",w),e.addEventListener("mouseleave",u),n.push(()=>{e.removeEventListener("mouseenter",w),e.removeEventListener("mouseleave",u),gsap.killTweensOf(c),o.forEach(m=>m.revert()),o=[],c=[],y=[]})}),()=>n.forEach(e=>e())}function Rt(a,t){let n=null;ue(Nt(a)),ue(an(a)),ue(Mn(a)),ue(en(a)),ue(Wt(a)),ue(rn(a));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Xt(a):null,n?ue(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),ue(Yt(a)),ue(Zt(a)),ue(jt(a)),ue(vt(a)),dt(a),Jt(a),n}function pt(a){ue(tn(a)),a.querySelector("[data-flip-element]")&&window.innerWidth>991&&ue(Qt(a)),ue(Sn(a)),ue(An(a)),ue(cn(a)),ue(bn(a)),ue(En(a)),ScrollTrigger.sort()}var fr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(a){var t=[];return a.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",o=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:o,mask:"lines",autoSplit:!0,onSplit:function(c){gsap.set(n,{autoAlpha:1});var y=fr[e],v={yPercent:110,duration:y.duration,stagger:y.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?v.delay=.5:v.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(c[e],v)}}))}),function(){t.forEach(function(n){n.revert()})}}var Rn=window.matchMedia("(prefers-reduced-motion: reduce)"),Ft=.9;function Fn(a){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{a.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Rn.matches||!n?e.set(a,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ut,duration:Ft,ease:Xe},0),e.fromTo(a,{y:"0vh"},{y:"-25vh",duration:Ft,ease:Xe},0),e.set(n,{autoAlpha:0}),e)}function zt(a,t,n="100vh"){let e=gsap.timeline();return Rn.matches?e.set(a,{autoAlpha:1}):(e.set(a,{zIndex:3},0),e.fromTo(a,{y:n},{y:"0vh",duration:Ft,ease:Xe},0)),e.add("pageReady"),e.call(function(){gsap.set(a,{clearProps:"zIndex"}),t(a)},null,"pageReady"),new Promise(o=>{e.call(o,null,"pageReady")})}function Lt(a,t,n){let e=document.querySelector("[data-transition-wrap]"),o=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(a,{position:"relative"}),zt(a,t,n).then(function(){o&&gsap.set(o,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,kt=!1;function Dt(a){gsap.set(a,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),ge.scrollTo(0,{immediate:!0,force:!0}),ge.resize()}var zn={sync:!0,beforeLeave(){kt=yt({keepCurtain:!0}),ge.stop(),ot||(ot=bt())},beforeEnter(a){ot||(ot=bt()),gsap.set(a.next.container,{position:"fixed",top:0,left:0,right:0}),Ot(),Rt(a.next.container,!1)},leave(a){return Fn(a.current.container,a.next.container)},enter(a){return kt&&(Ut(),kt=!1),ue(mt(a.next.container)),zt(a.next.container,Dt)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(a){Bt(a),pt(a.next.container),ge.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:a}){if(!a||!a.href)return!1;let t=new URL(a.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...zn,once(a){let t=document.querySelector("[data-menu-status]");Ht(),_t(),t&&(dt(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=a.next.container,e=Rt(n,!0);e?e.call(function(){let o=document.querySelector("[data-load-bg]");ue(mt(n)),Lt(n,function(c){Dt(c),pt(c),ge.start(),ScrollTrigger.refresh()},o?o.offsetHeight:void 0)},null,"hideContent"):(ge.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),ue(mt(n)),Lt(n,function(o){Dt(o),pt(o),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),ge.start()})})})}))}},{name:"self",...zn}]}),window.addEventListener("pageshow",function(a){a.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

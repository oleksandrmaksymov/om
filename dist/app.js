(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Pe=new Lenis({lerp:.08,wheelMultiplier:1});Pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(i=>{Pe.raf(i*1e3)});gsap.ticker.lagSmoothing(0);var xt=[];function pe(i){typeof i=="function"&&xt.push(i)}function bt(){let i=xt,t=ScrollTrigger.getAll();return xt=[],function(){i.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var On="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",On);var Ke="parallax",ut=.8;var Bn="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",It="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,yt=function(){return!1};function Ut(){tt&&gsap.timeline().to(tt,{clipPath:It,duration:.9,ease:Ke,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-ut)+")",duration:.9,ease:Ke},0).set(tt,{clearProps:"filter"})}function Ht(){let i=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!i||!t)return;tt=t.querySelector(".nav-bg"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",i.setAttribute("aria-expanded",a),a?(Pe.stop(),document.body.style.overflow="hidden"):(Pe.start(),document.body.style.overflow="")}function e(a){tt&&gsap.to(tt,{clipPath:a?Bn:It,duration:.9,ease:Ke,overwrite:!0})}i.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),yt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function _t(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Ot(){let i=function(n){return n.replace(/\/$/,"")||"/"},t=i(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&i(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Bt(i){let n=new DOMParser().parseFromString(i.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function dt(i){let t=i.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let c=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();c&&navigator.clipboard.writeText(c).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function vt(i){let t=i.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,c=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),v=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=c+" "+v}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function ct(i){return Pt[i]||(Pt[i]=new Promise(function(t,n){let e=document.createElement("script");e.src=i,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[i]}function Vt(i){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),n.add(S);var v=new THREE.PointLight(5913114,1.2,900);v.position.set(0,200,-300),n.add(v);var M=new THREE.PointLight(16750916,1.3,600);M.position.set(0,-250,200),n.add(M);var T=0,l=0,h=0,y=0,o=!1,f=0,r=0,p=Math.PI*2/6,A=new THREE.Vector2(9999,9999),O=new THREE.Raycaster,z=120,N=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),q=new THREE.Vector3,P=!1,$=0,C=0,X=8e4,ne=.03,Z=.95,I=.005,j=12e4,H=null,R,E,m,g,s,u,L=0,B=!1,_=0,x=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function F(){var w=new THREE.BufferGeometry;R=new Float32Array(j*3),E=new Float32Array(j*3),m=new Float32Array(j*3),g=new Float32Array(j*3),s=new Float32Array(j),u=new Float32Array(j),w.setAttribute("position",new THREE.BufferAttribute(R,3)),w.setAttribute("color",new THREE.BufferAttribute(g,3)),w.setAttribute("size",new THREE.BufferAttribute(s,1)),w.setAttribute("alpha",new THREE.BufferAttribute(u,1)),w.setAttribute("velocity",new THREE.BufferAttribute(E,3));var K=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Y=new THREE.ShaderMaterial({vertexShader:K,fragmentShader:d,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(w,Y),n.add(H)}function U(w,K){return new Promise(function(d){try{var Y=512,J=document.createElement("canvas");J.width=J.height=Y;var re=J.getContext("2d"),ke=new DOMParser().parseFromString(w,"image/svg+xml"),Fe=ke.querySelector("svg");if(!Fe){d([]);return}var k=parseFloat(Fe.getAttribute("width")||512),W=parseFloat(Fe.getAttribute("height")||512),b=Fe.getAttribute("viewBox");if(b){var V=b.split(/[\s,]+/);k=+V[2],W=+V[3]}var se=Math.min(Y/k,Y/W)*.9,ae=(Y-k*se)/2,ze=(Y-W*se)/2;re.save(),re.translate(ae,ze),re.scale(se,se),re.fillStyle="white",ke.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var He=xe.getAttribute("d");He&&re.fill(new Path2D(He))}else xe.tagName==="rect"?re.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(re.beginPath(),re.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),re.fill())}),re.restore();for(var be=re.getImageData(0,0,Y,Y).data,Te=[],ye=0;ye<Y;ye++)for(var Ie=0;Ie<Y;Ie++){var Ee=(ye*Y+Ie)*4;be[Ee+3]>30&&Te.push({x:Ie,y:ye,a:be[Ee+3]/255})}if(!Te.length){d([]);return}for(var Ge=[],Ee=0;Ee<K;Ee++){var Ue=Te[Math.floor(Math.random()*Te.length)];Ge.push({x:(Ue.x-Y/2)*1.2+(Math.random()-.5)*1.65,y:-(Ue.y-Y/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ue.a,a:Ue.a})}d(Ge)}catch(xe){console.error(xe),d([])}})}function ie(w){L=w.length;for(var K=0;K<L;K++){var d=w[K],Y=K*3;R[Y]=d.x,R[Y+1]=d.y+40,R[Y+2]=d.z,E[Y]=E[Y+1]=E[Y+2]=0,m[Y]=d.x,m[Y+1]=d.y,m[Y+2]=d.z;var J=x[Math.floor(Math.random()*x.length)],re=.7+Math.random()*.4;g[Y]=J.r*re,g[Y+1]=J.g*re,g[Y+2]=J.b*re,s[K]=1.8+Math.random()*3.8,u[K]=.3+(d.a||.7)*.75}H.geometry.setDrawRange(0,L),["position","color","size","alpha"].forEach(function(ke){H.geometry.attributes[ke].needsUpdate=!0}),B=!0}function me(w){return U(w,Math.min(j,X)).then(function(K){K.length&&H&&ie(K)})}function Se(w){if(!(!B||!L)){_+=w;for(var K=0;K<L;K++){var d=K*3,Y=K*1.37;if(E[d]+=Math.sin(_*.4+Y)*.008+Math.sin(_*1.1+Y*2.3)*.003,E[d+1]+=Math.cos(_*.35+Y*.7)*.008+Math.sin(_*.9+Y*1.5)*.004,E[d+2]+=Math.sin(_*.25+Y*1.1)*.004,E[d+1]-=ne*.06,E[d]+=Math.sin(_*.25+R[d+1]*.008)*I*.6,E[d+2]+=Math.cos(_*.3+R[d]*.008)*I*.3,P){var J=R[d]-N.x,re=R[d+1]-N.y,ke=R[d+2]-N.z,Fe=J*J+re*re+ke*ke,k=z*z;if(Fe<k&&Fe>.25){var W=Math.sqrt(Fe),b=W/z,V=(K*2654435761&65535)/65535,se=.6+V*.8,ae=Math.pow(1-b,1.5+V),ze=1+Math.min(q.length()*.12,1),be=ae*se*1.2*ze,Te=1/W;E[d]+=J*Te*be,E[d+1]+=re*Te*be,E[d+2]+=ke*Te*be*.2;var ye=.02+V*.06;E[d]+=q.x*ae*ye,E[d+1]+=q.y*ae*ye;var Ie=ae*.15;E[d]+=(V-.5)*Ie,E[d+1]+=((K*48271&65535)/65535-.5)*Ie}}var Ee=m[d],Ge=m[d+1]+40,Ue=m[d+2],xe=Ee-R[d],He=Ge-R[d+1],Be=Ue-R[d+2],Je=Math.sqrt(xe*xe+He*He+Be*Be),Qe=(K*48271&65535)/65535,et=.003+Qe*.003,at=1+Math.min(Je*.002,.5),Ye=et*at;E[d]+=xe*Ye,E[d+1]+=He*Ye,E[d+2]+=Be*Ye;var we=(K*16807&65535)/65535,$e=Z*(.92+we*.06);E[d]*=$e,E[d+1]*=$e,E[d+2]*=$e,R[d]+=E[d],R[d+1]+=E[d+1],R[d+2]+=E[d+2];var st=Math.sqrt(Math.pow(R[d]-m[d],2)+Math.pow(R[d+1]-m[d+1],2)+Math.pow(R[d+2]-m[d+2],2));u[K]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(_*1.5+K*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var _e=new THREE.Matrix4,We=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function ee(w,K){var d=a.domElement.getBoundingClientRect();if(!(d.width===0||d.height===0)&&(A.set((w-d.left)/d.width*2-1,-((K-d.top)/d.height)*2+1),O.setFromCamera(A,e),O.ray.intersectPlane(We,Ce))){oe.copy(N),H&&N.copy(Ce).applyMatrix4(_e.copy(H.matrixWorld).invert()),q.subVectors(N,oe);var Y=q.length();Y>15&&q.multiplyScalar(15/Y)}}function te(w,K){var d=i.getBoundingClientRect();return w>=d.left&&w<=d.right&&K>=d.top&&K<=d.bottom}var D=i.querySelector("#logo-coords"),Q=i.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(w){$=w.clientX,C=w.clientY;var K=te(w.clientX,w.clientY);if(K){P=!0,ee(w.clientX,w.clientY);var d=i.getBoundingClientRect(),Y=Math.round(w.clientX-d.left),J=Math.round(w.clientY-d.top);D&&(D.textContent="X: "+Y+"PX    Y: "+J+"PX")}else P=!1,N.set(9999,9999,0);o&&(T+=(w.clientX-f)*.005,h+=(w.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),f=w.clientX,r=w.clientY)},ve=function(w){te(w.clientX,w.clientY)&&(o=!0,f=w.clientX,r=w.clientY)},ge=function(){o=!1,T=0,h=0,l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",ve),window.addEventListener("mouseup",ge)}function Me(){for(var w=4e3,K=new THREE.BufferGeometry,d=new Float32Array(w*3),Y=new Float32Array(w*3),J=0;J<w;J++){d[J*3]=(Math.random()-.5)*2200,d[J*3+1]=(Math.random()-.5)*1800,d[J*3+2]=-200-Math.random()*1800;var re=x[Math.floor(Math.random()*x.length)],ke=.2+Math.random()*.3;Y[J*3]=re.r*ke,Y[J*3+1]=re.g*ke,Y[J*3+2]=re.b*ke}K.setAttribute("position",new THREE.BufferAttribute(d,3)),K.setAttribute("color",new THREE.BufferAttribute(Y,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var k=Fe.getContext("2d"),W=k.createRadialGradient(16,16,0,16,16,16);W.addColorStop(0,"rgba(255,255,255,1)"),W.addColorStop(.3,"rgba(255,255,255,0.6)"),W.addColorStop(.7,"rgba(255,255,255,0.15)"),W.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=W,k.fillRect(0,0,32,32);var b=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),V=new THREE.Points(K,b);return V.userData={positions:d,count:w},n.add(V),V}F();var ue=t?null:Me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';me(De);var Oe=new THREE.Clock,Re=!0,Xe=new IntersectionObserver(function(w){Re=w[0].isIntersecting,w[0].isIntersecting&&!fe&&!t&&(fe=!0,D&&(D.style.transform="translateY(0)"),Q&&(Q.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(i);var he=!1,Le=null,Ae=0;function de(){if(he=!0,clearTimeout(Le),Le=setTimeout(function(){he=!1},150),!t){var w=te($,C);w?(P=!0,ee($,C)):(P=!1,N.set(9999,9999,0))}}window.addEventListener("scroll",de,{passive:!0});var G=null;function ce(){if(G=requestAnimationFrame(ce),!!Re){Ae++;var w=Math.min(Oe.getDelta(),.05),K=Oe.elapsedTime;if(t)l+=p*w;else{var d=T-l;d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),l+=d*.12,y+=(h-y)*.12}if(H&&(H.rotation.x=y,H.rotation.y=l,H.position.y=-15),ue){for(var Y=ue.userData.positions,J=0;J<ue.userData.count;J++)Y[J*3+1]+=Math.sin(K*.2+J)*.05,Y[J*3]+=Math.cos(K*.15+J*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-l*35*.35,ue.position.y=y*28*.35}c.position.x=300+Math.sin(K*.3)*100,c.position.y=350+Math.cos(K*.2)*80,S.intensity=2+Math.sin(K*.5)*.4,M.intensity=.8+Math.sin(K*.4+1)*.3,!(t&&he&&Ae%4!==0)&&(Se(w),a.render(n,e))}}return ce(),function(){cancelAnimationFrame(G),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",ve),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",de),clearTimeout(Le),Xe.disconnect(),n.traverse(function(w){w.geometry&&w.geometry.dispose(),w.material&&(w.material.map&&w.material.map.dispose(),w.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),H=null}}function qt(i){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",i.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),t.add(c);var S=new THREE.PointLight(5913114,1.2,900);S.position.set(0,200,-300),t.add(S);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),t.add(v);var M=0,T=Math.PI*2/6,l=8e4,h=.03,y=.95,o=.005,f=12e4,r=null,p,A,O,z,N,oe,q=0,P=!1,$=0,C=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function X(){var ee=new THREE.BufferGeometry;p=new Float32Array(f*3),A=new Float32Array(f*3),O=new Float32Array(f*3),z=new Float32Array(f*3),N=new Float32Array(f),oe=new Float32Array(f),ee.setAttribute("position",new THREE.BufferAttribute(p,3)),ee.setAttribute("color",new THREE.BufferAttribute(z,3)),ee.setAttribute("size",new THREE.BufferAttribute(N,1)),ee.setAttribute("alpha",new THREE.BufferAttribute(oe,1)),ee.setAttribute("velocity",new THREE.BufferAttribute(A,3));var te=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Q=new THREE.ShaderMaterial({vertexShader:te,fragmentShader:D,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(ee,Q),t.add(r)}function ne(ee,te){return new Promise(function(D){try{var Q=512,fe=document.createElement("canvas");fe.width=fe.height=Q;var le=fe.getContext("2d"),ve=new DOMParser().parseFromString(ee,"image/svg+xml"),ge=ve.querySelector("svg");if(!ge){D([]);return}var Me=parseFloat(ge.getAttribute("width")||512),ue=parseFloat(ge.getAttribute("height")||512),De=ge.getAttribute("viewBox");if(De){var Oe=De.split(/[\s,]+/);Me=+Oe[2],ue=+Oe[3]}var Re=Math.min(Q/Me,Q/ue)*.9,Xe=(Q-Me*Re)/2,he=(Q-ue*Re)/2;le.save(),le.translate(Xe,he),le.scale(Re,Re),le.fillStyle="white",ve.querySelectorAll("path,rect,circle").forEach(function(d){if(d.tagName==="path"){var Y=d.getAttribute("d");Y&&le.fill(new Path2D(Y))}else d.tagName==="rect"?le.fillRect(+d.getAttribute("x")||0,+d.getAttribute("y")||0,+d.getAttribute("width")||0,+d.getAttribute("height")||0):d.tagName==="circle"&&(le.beginPath(),le.arc(+d.getAttribute("cx")||0,+d.getAttribute("cy")||0,+d.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Le=le.getImageData(0,0,Q,Q).data,Ae=[],de=0;de<Q;de++)for(var G=0;G<Q;G++){var ce=(de*Q+G)*4;Le[ce+3]>30&&Ae.push({x:G,y:de,a:Le[ce+3]/255})}if(!Ae.length){D([]);return}for(var w=[],ce=0;ce<te;ce++){var K=Ae[Math.floor(Math.random()*Ae.length)];w.push({x:(K.x-Q/2)*1.2+(Math.random()-.5)*1.65,y:-(K.y-Q/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*K.a,a:K.a})}D(w)}catch(d){console.error(d),D([])}})}function Z(ee){q=ee.length;for(var te=0;te<q;te++){var D=ee[te],Q=te*3;p[Q]=D.x,p[Q+1]=D.y+40,p[Q+2]=D.z,A[Q]=A[Q+1]=A[Q+2]=0,O[Q]=D.x,O[Q+1]=D.y,O[Q+2]=D.z;var fe=C[Math.floor(Math.random()*C.length)],le=.7+Math.random()*.4;z[Q]=fe.r*le,z[Q+1]=fe.g*le,z[Q+2]=fe.b*le,N[te]=1.8+Math.random()*3.8,oe[te]=.3+(D.a||.7)*.75}r.geometry.setDrawRange(0,q),["position","color","size","alpha"].forEach(function(ve){r.geometry.attributes[ve].needsUpdate=!0}),P=!0}function I(ee){return ne(ee,Math.min(f,l)).then(function(te){te.length&&r&&Z(te)})}function j(ee){if(!(!P||!q)){$+=ee;for(var te=0;te<q;te++){var D=te*3,Q=te*1.37;A[D]+=Math.sin($*.4+Q)*.008+Math.sin($*1.1+Q*2.3)*.003,A[D+1]+=Math.cos($*.35+Q*.7)*.008+Math.sin($*.9+Q*1.5)*.004,A[D+2]+=Math.sin($*.25+Q*1.1)*.004,A[D+1]-=h*.06,A[D]+=Math.sin($*.25+p[D+1]*.008)*o*.6,A[D+2]+=Math.cos($*.3+p[D]*.008)*o*.3;var fe=O[D],le=O[D+1]+40,ve=O[D+2],ge=fe-p[D],Me=le-p[D+1],ue=ve-p[D+2],De=Math.sqrt(ge*ge+Me*Me+ue*ue),Oe=(te*48271&65535)/65535,Re=.003+Oe*.003,Xe=1+Math.min(De*.002,.5),he=Re*Xe;A[D]+=ge*he,A[D+1]+=Me*he,A[D+2]+=ue*he;var Le=(te*16807&65535)/65535,Ae=y*(.92+Le*.06);A[D]*=Ae,A[D+1]*=Ae,A[D+2]*=Ae,p[D]+=A[D],p[D+1]+=A[D+1],p[D+2]+=A[D+2];var de=Math.sqrt(Math.pow(p[D]-O[D],2)+Math.pow(p[D+1]-O[D+1],2)+Math.pow(p[D+2]-O[D+2],2));oe[te]=.15+.55*(1-Math.min(de*.005,1))+Math.sin($*1.5+te*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}X();for(var H=4e3,R=new THREE.BufferGeometry,E=new Float32Array(H*3),m=new Float32Array(H*3),g=0;g<H;g++){E[g*3]=(Math.random()-.5)*2200,E[g*3+1]=(Math.random()-.5)*1800,E[g*3+2]=-200-Math.random()*1800;var s=C[Math.floor(Math.random()*C.length)],u=.2+Math.random()*.3;m[g*3]=s.r*u,m[g*3+1]=s.g*u,m[g*3+2]=s.b*u}R.setAttribute("position",new THREE.BufferAttribute(E,3)),R.setAttribute("color",new THREE.BufferAttribute(m,3));var L=document.createElement("canvas");L.width=L.height=32;var B=L.getContext("2d"),_=B.createRadialGradient(16,16,0,16,16,16);_.addColorStop(0,"rgba(255,255,255,1)"),_.addColorStop(.3,"rgba(255,255,255,0.6)"),_.addColorStop(.7,"rgba(255,255,255,0.15)"),_.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=_,B.fillRect(0,0,32,32);var x=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(L),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),F=new THREE.Points(R,x);t.add(F);var U='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';I(U);var ie=new THREE.Clock,me=!0,Se=new IntersectionObserver(function(ee){me=ee[0].isIntersecting},{threshold:0});Se.observe(i);var _e=i.querySelectorAll("#logo-coords, #logo-drag-label");_e.forEach(function(ee){ee.parentElement.style.display="none"});var We=null;function Ce(){if(We=requestAnimationFrame(Ce),!!me){var ee=Math.min(ie.getDelta(),.05),te=ie.elapsedTime;M+=T*ee,r&&(r.rotation.y=M,r.position.y=5,r.scale.setScalar(.85));for(var D=0;D<H;D++)E[D*3+1]+=Math.sin(te*.2+D)*.05,E[D*3]+=Math.cos(te*.15+D*.5)*.03;R.attributes.position.needsUpdate=!0,F.rotation.y+=1e-4,F.position.x=-M*35*.35,a.position.x=300+Math.sin(te*.3)*100,a.position.y=350+Math.cos(te*.2)*80,c.intensity=2+Math.sin(te*.5)*.4,v.intensity=.8+Math.sin(te*.4+1)*.3,j(ee),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(We),Se.disconnect(),t.traverse(function(ee){ee.geometry&&ee.geometry.dispose(),ee.material&&(ee.material.map&&ee.material.map.dispose(),ee.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var Gt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Nt(i){let t=i.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(Gt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Vn(t):Vt(t)}),function(){n=!0,e&&e()}}function Wt(i){let t=i.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(Gt).then(function(){n||(e=qt(t))}),function(){n=!0,e&&e()}}function Vn(i){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),n.add(S);var v=new THREE.PointLight(5913114,1.2,900);v.position.set(0,200,-300),n.add(v);var M=new THREE.PointLight(16750916,1.3,600);M.position.set(0,-250,200),n.add(M);var T=0,l=0,h=0,y=0,o=!1,f=0,r=0,p=Math.PI*2/6,A=new THREE.Vector2(9999,9999),O=new THREE.Raycaster,z=120,N=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),q=new THREE.Vector3,P=!1,$=0,C=0,X=8e4,ne=.03,Z=.95,I=.005,j=12e4,H=null,R,E,m,g,s,u,L=0,B=!1,_=!1,x=0,F=0,U=null,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function me(){var k=new THREE.BufferGeometry;R=new Float32Array(j*3),E=new Float32Array(j*3),m=new Float32Array(j*3),g=new Float32Array(j*3),s=new Float32Array(j),u=new Float32Array(j),k.setAttribute("position",new THREE.BufferAttribute(R,3)),k.setAttribute("color",new THREE.BufferAttribute(g,3)),k.setAttribute("size",new THREE.BufferAttribute(s,1)),k.setAttribute("alpha",new THREE.BufferAttribute(u,1)),k.setAttribute("velocity",new THREE.BufferAttribute(E,3));var W=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,V=new THREE.ShaderMaterial({vertexShader:W,fragmentShader:b,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(k,V),n.add(H)}function Se(k,W){return new Promise(function(b){try{var V=512,se=document.createElement("canvas");se.width=se.height=V;var ae=se.getContext("2d"),ze=new DOMParser().parseFromString(k,"image/svg+xml"),be=ze.querySelector("svg");if(!be){b([]);return}var Te=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ie=be.getAttribute("viewBox");if(Ie){var Ee=Ie.split(/[\s,]+/);Te=+Ee[2],ye=+Ee[3]}var Ge=Math.min(V/Te,V/ye)*.9,Ue=(V-Te*Ge)/2,xe=(V-ye*Ge)/2;ae.save(),ae.translate(Ue,xe),ae.scale(Ge,Ge),ae.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(we){if(we.tagName==="path"){var $e=we.getAttribute("d");$e&&ae.fill(new Path2D($e))}else we.tagName==="rect"?ae.fillRect(+we.getAttribute("x")||0,+we.getAttribute("y")||0,+we.getAttribute("width")||0,+we.getAttribute("height")||0):we.tagName==="circle"&&(ae.beginPath(),ae.arc(+we.getAttribute("cx")||0,+we.getAttribute("cy")||0,+we.getAttribute("r")||0,0,Math.PI*2),ae.fill())}),ae.restore();for(var He=ae.getImageData(0,0,V,V).data,Be=[],Je=0;Je<V;Je++)for(var Qe=0;Qe<V;Qe++){var et=(Je*V+Qe)*4;He[et+3]>30&&Be.push({x:Qe,y:Je,a:He[et+3]/255})}if(!Be.length){b([]);return}for(var at=[],et=0;et<W;et++){var Ye=Be[Math.floor(Math.random()*Be.length)];at.push({x:(Ye.x-V/2)*1.2+(Math.random()-.5)*1.65,y:-(Ye.y-V/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ye.a,a:Ye.a})}b(at)}catch(we){console.error(we),b([])}})}function _e(k){L=k.length;for(var W=0;W<L;W++){var b=k[W],V=W*3;R[V]=b.x,R[V+1]=b.y+40,R[V+2]=b.z,E[V]=E[V+1]=E[V+2]=0,m[V]=b.x,m[V+1]=b.y,m[V+2]=b.z;var se=ie[Math.floor(Math.random()*ie.length)],ae=.7+Math.random()*.4;g[V]=se.r*ae,g[V+1]=se.g*ae,g[V+2]=se.b*ae,s[W]=1.8+Math.random()*3.8,u[W]=.3+(b.a||.7)*.75}H.geometry.setDrawRange(0,L),["position","color","size","alpha"].forEach(function(ze){H.geometry.attributes[ze].needsUpdate=!0}),B=!0,_=!1,x=1}function We(k){return Se(k,Math.min(j,X)).then(function(W){W.length&&H&&_e(W)})}function Ce(k){if(!(!B||!L)){F+=k;for(var W=0;W<L;W++){var b=W*3,V=W*1.37;if(E[b]+=Math.sin(F*.4+V)*.008+Math.sin(F*1.1+V*2.3)*.003,E[b+1]+=Math.cos(F*.35+V*.7)*.008+Math.sin(F*.9+V*1.5)*.004,E[b+2]+=Math.sin(F*.25+V*1.1)*.004,E[b+1]-=ne*.06,E[b]+=Math.sin(F*.25+R[b+1]*.008)*I*.6,E[b+2]+=Math.cos(F*.3+R[b]*.008)*I*.3,P&&de==="interactive"){var se=R[b]-N.x,ae=R[b+1]-N.y,ze=R[b+2]-N.z,be=se*se+ae*ae+ze*ze,Te=z*z;if(be<Te&&be>.25){var ye=Math.sqrt(be),Ie=ye/z,Ee=(W*2654435761&65535)/65535,Ge=.6+Ee*.8,Ue=Math.pow(1-Ie,1.5+Ee),xe=1+Math.min(q.length()*.12,1),He=Ue*Ge*1.2*xe,Be=1/ye;E[b]+=se*Be*He,E[b+1]+=ae*Be*He,E[b+2]+=ze*Be*He*.2;var Je=.02+Ee*.06;E[b]+=q.x*Ue*Je,E[b+1]+=q.y*Ue*Je;var Qe=Ue*.15;E[b]+=(Ee-.5)*Qe,E[b+1]+=((W*48271&65535)/65535-.5)*Qe}}var et=m[b],at=m[b+1]+40,Ye=m[b+2],we=et-R[b],$e=at-R[b+1],st=Ye-R[b+2],kn=Math.sqrt(we*we+$e*$e+st*st),Dn=(W*48271&65535)/65535,In=.003+Dn*.003,Un=1+Math.min(kn*.002,.5),ht=In*Un;E[b]+=we*ht,E[b+1]+=$e*ht,E[b+2]+=st*ht;var Hn=(W*16807&65535)/65535,gt=Z*(.92+Hn*.06);E[b]*=gt,E[b+1]*=gt,E[b+2]*=gt,R[b]+=E[b],R[b+1]+=E[b+1],R[b+2]+=E[b+2];var _n=Math.sqrt(Math.pow(R[b]-m[b],2)+Math.pow(R[b+1]-m[b+1],2)+Math.pow(R[b+2]-m[b+2],2));u[W]=.15+.55*(1-Math.min(_n*.005,1))+Math.sin(F*1.5+W*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var ee=new THREE.Matrix4,te=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),D=new THREE.Vector3;function Q(k,W){var b=a.domElement.getBoundingClientRect();if(!(b.width===0||b.height===0)&&(A.set((k-b.left)/b.width*2-1,-((W-b.top)/b.height)*2+1),O.setFromCamera(A,e),O.ray.intersectPlane(te,D))){oe.copy(N),H&&N.copy(D).applyMatrix4(ee.copy(H.matrixWorld).invert()),q.subVectors(N,oe);var V=q.length();V>15&&q.multiplyScalar(15/V)}}var fe=null;function le(){return fe||(fe=i.closest('[data-flip-element="target"]')||i),fe}function ve(k,W){var b=le().getBoundingClientRect();return k>=b.left&&k<=b.right&&W>=b.top&&W<=b.bottom}var ge=i.querySelector("#logo-coords"),Me=i.querySelector("#logo-drag-label"),ue=!1;function De(k){if($=k.clientX,C=k.clientY,t||de!=="interactive"){P=!1,N.set(9999,9999,0);return}var W=ve(k.clientX,k.clientY);if(W){P=!0,Q(k.clientX,k.clientY);var b=le().getBoundingClientRect(),V=Math.round(k.clientX-b.left),se=Math.round(k.clientY-b.top);ge&&(ge.textContent="X: "+V+"PX    Y: "+se+"PX")}else P=!1,N.set(9999,9999,0);o&&(T+=(k.clientX-f)*.005,h+=(k.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),f=k.clientX,r=k.clientY)}function Oe(k){t||de!=="interactive"||ve(k.clientX,k.clientY)&&(o=!0,f=k.clientX,r=k.clientY)}function Re(){t||(o=!1,T=0,h=0,l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",Oe),window.addEventListener("mouseup",Re);function Xe(){for(var k=4e3,W=new THREE.BufferGeometry,b=new Float32Array(k*3),V=new Float32Array(k*3),se=0;se<k;se++){b[se*3]=(Math.random()-.5)*2200,b[se*3+1]=(Math.random()-.5)*1800,b[se*3+2]=-200-Math.random()*1800;var ae=ie[Math.floor(Math.random()*ie.length)],ze=.2+Math.random()*.3;V[se*3]=ae.r*ze,V[se*3+1]=ae.g*ze,V[se*3+2]=ae.b*ze}W.setAttribute("position",new THREE.BufferAttribute(b,3)),W.setAttribute("color",new THREE.BufferAttribute(V,3));var be=document.createElement("canvas");be.width=be.height=32;var Te=be.getContext("2d"),ye=Te.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=ye,Te.fillRect(0,0,32,32);var Ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ee=new THREE.Points(W,Ie);return Ee.userData={positions:b,count:k},n.add(Ee),Ee}me();var he=Xe(),Le='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';We(Le);var Ae=new THREE.Clock,de="spin",G=null;function ce(){if(t){de="spin";return}if(G===null){var k=document.querySelector(".scaling-element-video");G=k&&getComputedStyle(k).display!=="none"}if(!G){de="spin";return}var W=window._flipProgress||0;W>.85?de="interactive":W>.7?de="transition":de="spin"}var w="spin",K=!0,d=new IntersectionObserver(function(k){K=k[0].isIntersecting},{threshold:0});d.observe(i);var Y=!1,J=null,re=0;function ke(){Y=!0,clearTimeout(J),J=setTimeout(function(){Y=!1},150);var k=ve($,C);k?(P=!0,Q($,C)):(P=!1,N.set(9999,9999,0))}window.addEventListener("scroll",ke,{passive:!0});function Fe(){if(U=requestAnimationFrame(Fe),!!K){re++;var k=Math.min(Ae.getDelta(),.05),W=Ae.elapsedTime;ce(),w==="interactive"&&de!=="interactive"&&(P=!1,N.set(9999,9999,0),o=!1);var b=de==="transition"||de==="interactive";if(b&&!ue?(ue=!0,Me&&(Me.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!b&&ue&&(ue=!1,Me&&(Me.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),w=de,P&&!ve($,C)&&(P=!1,N.set(9999,9999,0)),de==="spin")l+=p*k,y+=(0-y)*.05;else if(de==="transition")l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),l+=(0-l)*.025,y+=(0-y)*.025;else{var V=T-l;V=V%(Math.PI*2),V>Math.PI&&(V-=Math.PI*2),V<-Math.PI&&(V+=Math.PI*2),l+=V*.12,y+=(h-y)*.12}H&&(H.rotation.x=y,H.rotation.y=l,H.scale.setScalar(1),H.position.y=-15);for(var se=he.userData.positions,ae=0;ae<he.userData.count;ae++)se[ae*3+1]+=Math.sin(W*.2+ae)*.05,se[ae*3]+=Math.cos(W*.15+ae*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-l*35*.35,he.position.y=y*28*.35,c.position.x=300+Math.sin(W*.3)*100,c.position.y=350+Math.cos(W*.2)*80,S.intensity=2+Math.sin(W*.5)*.4,M.intensity=.8+Math.sin(W*.4+1)*.3,!(t&&Y&&re%4!==0)&&(Ce(k),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(U),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",Oe),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",ke),clearTimeout(J),d.disconnect(),n.traverse(function(k){k.geometry&&k.geometry.dispose(),k.material&&(k.material.map&&k.material.map.dispose(),k.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),H=null}}function Xt(i){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),c=Array.from(t.querySelectorAll("[data-load-text]")),S=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),v=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(S.length&&v.set(S,{autoAlpha:1},0),c.length>=2){let M=new SplitText(c[0],{type:"lines,chars",mask:"lines"}),T=new SplitText(c[1],{type:"lines,chars",mask:"lines"});gsap.set([M.chars,T.chars],{autoAlpha:0,yPercent:125}),gsap.set(c,{autoAlpha:1}),v.to(M.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),v.to(M.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),v.to(T.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),v.to(T.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return v}function Yt(i){let n=[...(i||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(l=>{let h=l.parentElement;h&&(l.style.whiteSpace="nowrap",e.has(h)||e.set(h,[]),e.get(h).push(l))});function a(l){let h=getComputedStyle(l);return l.clientWidth-parseFloat(h.paddingLeft)-parseFloat(h.paddingRight)}function c(l,h){if(h<=0)return;let y=parseFloat(getComputedStyle(l).fontSize)||16;for(let o=0;o<5;o++){let f=l.getBoundingClientRect().width;if(f<=0)break;let r=h/f;if(Math.abs(r-1)<.002)break;y*=r,l.style.fontSize=y+"px"}}function S(){e.forEach((l,h)=>{let y=a(h);l.forEach(o=>c(o,y))})}let v=null;function M(){v||(v=requestAnimationFrame(()=>{v=null,S()}))}let T;return window.ResizeObserver&&(T=new ResizeObserver(M),e.forEach((l,h)=>T.observe(h))),window.addEventListener("resize",M),S(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(S),()=>{v&&cancelAnimationFrame(v),T&&T.disconnect(),window.removeEventListener("resize",M),n.forEach(l=>{l.style.whiteSpace="",l.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},$t=.08,qn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Kt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function Gn(i,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:i,transformOrigin:t}),n}function Zt(i){var t=i.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var c=a.getAttribute("data-marker-direction")||"right",S=a.getAttribute("data-marker-theme")||"#000000",v=a.getAttribute("data-marker-scroll-start")||"top 90%",M=S.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(S).trim()||S,T=Kt[c]||Kt.right,l=qn[a.getAttribute("data-highlight-marker-reveal")]||null;l&&(M=l.bar);var h=a.closest("[data-cursor-label]"),y={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,f=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){y.timeline&&y.timeline.kill(),y.scrollTrigger&&y.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(P){P.remove()}),y.listeners.forEach(function(P){P.el.removeEventListener(P.type,P.fn)}),y.listeners=[],o=!1;var p=r.lines,A=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(p.forEach(function(P,$){gsap.set(P,{position:"relative",overflow:"hidden"});var C=Gn(M,T.origin);gsap.set(C,{[T.prop]:0}),P.appendChild(C),l&&(gsap.set(P,{zIndex:0,color:l.text}),gsap.set(C,{zIndex:-1})),A.to(C,{[T.prop]:1,duration:Ve.duration,ease:Ve.ease},$*$t);var X=function(){o&&(gsap.to(C,{[T.prop]:0,duration:Ve.duration,ease:Ve.ease}),l&&gsap.to(P,{color:l.hoverText,duration:Ve.duration,ease:Ve.ease}))},ne=function(){o&&(gsap.to(C,{[T.prop]:1,duration:Ve.duration,ease:Ve.ease}),l&&gsap.to(P,{color:l.text,duration:Ve.duration,ease:Ve.ease}))};!l&&e&&(P.addEventListener("mouseenter",X),P.addEventListener("mouseleave",ne),y.listeners.push({el:P,type:"mouseenter",fn:X},{el:P,type:"mouseleave",fn:ne}))}),y.timeline=A,h){A.kill();var O=a.querySelectorAll(".highlight-marker-bar"),z=function(P){gsap.to(O,{[T.prop]:P,duration:Ve.duration,ease:Ve.ease,stagger:$t,overwrite:!0})},N=function(){z(1)},oe=function(){z(0)};h.addEventListener("cursorlabel:enter",N),h.addEventListener("cursorlabel:leave",oe),y.listeners.push({el:h,type:"cursorlabel:enter",fn:N},{el:h,type:"cursorlabel:leave",fn:oe});return}var q=ScrollTrigger.create({trigger:a,start:v,once:!0,onEnter:function(){A.play()}});y.scrollTrigger=q}});y.split=f,n.push(y)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(c){c.el.removeEventListener(c.type,c.fn)}),a.split&&a.split.revert()})}}function jt(i){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=i.querySelector("[data-cursor-marquee-status]");if(!a)return;let c=a.querySelectorAll("[data-cursor-marquee-text-target]"),S=i.querySelectorAll("[data-cursor-marquee-text]");if(!S.length)return;let v=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),M=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),T=null,l=h=>{v(h.clientX),M(h.clientY)};return window.addEventListener("pointermove",l,{passive:!0}),S.forEach(h=>{h.addEventListener("mouseenter",()=>{T&&clearTimeout(T);let y=h.getAttribute("data-cursor-marquee-text")||"",o=(y.length||1)/e;c.forEach(f=>{f.textContent=y,f.style.animationPlayState="running",f.style.animationDuration=o+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),h.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),T&&clearTimeout(T),T=setTimeout(()=>{c.forEach(y=>{y.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",l),clearTimeout(T),gsap.killTweensOf(a)}}function Jt(i){i.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function Qt(i){let t=i.querySelectorAll("[data-flip-element='wrapper']"),n=i.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(v){window._flipProgress=v.progress}}}),t.forEach(function(v,M){let T=M+1;if(T<t.length){let l=t[T],h=l.getBoundingClientRect(),y=v.getBoundingClientRect(),o=h.top+window.pageYOffset+l.offsetHeight/2,f=y.top+window.pageYOffset+v.offsetHeight/2,r=o-f;e.add(Flip.fit(n,l,{duration:r,ease:"none"}))}})}a();let c,S=function(){clearTimeout(c),c=setTimeout(function(){a()},100)};return window.addEventListener("resize",S),function(){clearTimeout(c),window.removeEventListener("resize",S),e&&e.kill()}}var Nn="150%";function Wn(i){let t=[];return i.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.textContent=a,n.append(c),t.push(c)}}),t}var Et=new WeakMap;function en(i){let t=i.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(c){return Array.from(c.querySelectorAll("textPath")).map(function(S){return S.textContent})}),a=n.map(Wn);return a.forEach(function(c){gsap.set(c,{fillOpacity:0})}),Et.set(i,{wrap:t,lines:n,lineChars:a}),function(){Et.delete(i),n.forEach(function(c,S){c.querySelectorAll("textPath").forEach(function(v,M){v.textContent=e[S][M]})})}}function tn(i){let t=Et.get(i);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Nn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let c=t.lineChars[a];c.length&&n.fromTo(c,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/c.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function wt(i){var t=[];function n(o,f,r,p){o.addEventListener(f,r,p),t.push(function(){o.removeEventListener(f,r,p)})}i.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var f=o.getAttribute("data-player-src");if(!f)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(G){}try{r.removeAttribute("src"),r.load()}catch(G){}function p(G){o.getAttribute("data-player-status")!==G&&o.setAttribute("data-player-status",G)}function A(G){r.muted=!!G,o.setAttribute("data-player-muted",r.muted?"true":"false")}function O(G){o.setAttribute("data-player-fullscreen",G?"true":"false")}function z(G){o.setAttribute("data-player-activated",G?"true":"false")}o.hasAttribute("data-player-activated")||z(!1);var N=o.querySelector("[data-player-timeline]"),oe=o.querySelector("[data-player-progress]"),q=o.querySelector("[data-player-buffered]"),P=o.querySelector("[data-player-timeline-handle]"),$=o.querySelectorAll("[data-player-time-duration]"),C=o.querySelectorAll("[data-player-time-progress]"),X=o.getAttribute("data-player-update-size"),ne=o.getAttribute("data-player-lazy"),Z=ne==="true",I=ne==="meta",j=o.getAttribute("data-player-autoplay")==="true",H=o.getAttribute("data-player-muted")==="true",R=!1;j?(A(!0),r.loop=!0):A(H),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),j&&(r.autoplay=!1);var E=!!r.canPlayType("application/vnd.apple.mpegurl"),m=E&&"ManagedMediaSource"in window,g=!!(window.Hls&&Hls.isSupported())&&!m;if(X==="true"&&!I&&!Z){var s=r.preload;r.preload="metadata";var u=function(){T(o,X,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",u),r.preload=s||""};n(r,"loadedmetadata",u,{once:!0}),r.src=f}function L(){y(f,g).then(function(G){G.width&&G.height&&T(o,X,G.width,G.height),$.length&&isFinite(G.duration)&&G.duration>0&&c($,a(G.duration)),M(o,R)})}var B=!1,_=!1,x="";function F(){if(!B){if(B=!0,o._hls){try{o._hls.destroy()}catch(ce){}o._hls=null}if(m)r.preload=Z||I?"auto":r.preload,r.src=f,n(r,"loadedmetadata",function(){M(o,R),X==="true"&&T(o,X,r.videoWidth,r.videoHeight),$.length&&c($,a(r.duration))},{once:!0});else if(g){var G=new Hls({maxBufferLength:10});G.attachMedia(r),G.on(Hls.Events.MEDIA_ATTACHED,function(){G.loadSource(f)}),G.on(Hls.Events.MANIFEST_PARSED,function(){if(M(o,R),X==="true"){var ce=G.levels||[],w=S(ce);w&&w.width&&w.height&&T(o,X,w.width,w.height)}}),G.on(Hls.Events.LEVEL_LOADED,function(ce,w){w&&w.details&&isFinite(w.details.totalduration)&&$.length&&c($,a(w.details.totalduration))}),o._hls=G}else r.src=f}}I?(L(),r.preload="none"):Z?r.preload="none":F();function U(){_=!0,r.paused||r.ended?((Z||I)&&!B&&F(),R=!0,x="",p("loading"),v(r)):(x="manual",r.pause())}function ie(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function me(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function _e(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function We(){me()||r.webkitDisplayingFullscreen?_e():Se()}n(document,"fullscreenchange",function(){O(me())}),n(document,"webkitfullscreenchange",function(){O(me())}),n(r,"webkitbeginfullscreen",function(){O(!0)}),n(r,"webkitendfullscreen",function(){O(!1)}),n(o,"click",function(G){var ce=G.target.closest("[data-player-control]");if(!(!ce||!o.contains(ce))){var w=ce.getAttribute("data-player-control");w==="play"||w==="pause"||w==="playpause"?U():w==="mute"?ie():w==="fullscreen"&&We()}});function Ce(){$.length&&c($,a(r.duration)),C.length&&c(C,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),l(o,X,r)}),n(r,"loadeddata",function(){l(o,X,r)}),n(r,"playing",function(){l(o,X,r)}),n(r,"durationchange",Ce);var ee;function te(){if(r.duration){var G=r.currentTime/r.duration*100;oe&&(oe.style.transform="translateX("+(-100+G)+"%)"),P&&(P.style.left=G+"%")}}function D(){te(),!r.paused&&!r.ended&&(ee=requestAnimationFrame(D))}function Q(){if(!(!q||!r.duration||!r.buffered.length)){var G=r.buffered.end(r.buffered.length-1),ce=G/r.duration*100;q.style.transform="translateX("+(-100+ce)+"%)"}}if(n(r,"progress",Q),n(r,"loadedmetadata",Q),n(r,"durationchange",Q),n(r,"play",function(){z(!0),cancelAnimationFrame(ee),D(),p("playing")}),n(r,"playing",function(){R=!1,p("playing")}),n(r,"pause",function(){R=!1,cancelAnimationFrame(ee),te(),p("paused")}),n(r,"waiting",function(){p("loading")}),n(r,"canplay",function(){M(o,R)}),n(r,"ended",function(){R=!1,cancelAnimationFrame(ee),te(),p("paused"),z(!1)}),N){let G=function(J){ue||(ue=N.getBoundingClientRect());var re=(J-ue.left)/ue.width;return re<0&&(re=0),re>1&&(re=1),re},ce=function(J){if(r.duration){var re=J*100;oe&&(oe.style.transform="translateX("+(-100+re)+"%)"),P&&(P.style.left=re+"%"),C.length&&c(C,a(J*r.duration))}},w=function(J){r.duration&&(J-ge<Me||(ge=J,r.currentTime=ve))},K=function(J){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),o.setAttribute("data-timeline-drag","true"),ue=N.getBoundingClientRect();var re=G(J.clientX);ve=re*r.duration,ce(re),w(performance.now()),N.setPointerCapture&&N.setPointerCapture(J.pointerId),window.addEventListener("pointermove",d,{passive:!1}),window.addEventListener("pointerup",Y,{passive:!0}),J.preventDefault()}},d=function(J){if(fe){var re=G(J.clientX);ve=re*r.duration,ce(re),w(performance.now()),J.preventDefault()}},Y=function(){fe&&(fe=!1,o.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=ve,le?v(r):(te(),Ce()),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",Y))};var fe=!1,le=!1,ve=0,ge=0,Me=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(N,"pointerdown",K,{passive:!1}),P&&n(P,"pointerdown",K,{passive:!1})}var De,Oe=3e3;function Re(G){o.getAttribute("data-player-hover")!==G&&o.setAttribute("data-player-hover",G)}function Xe(){clearTimeout(De),De=setTimeout(function(){Re("idle")},Oe)}function he(){Re("active"),Xe()}n(o,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var Le=!1;function Ae(G){var ce=o.getBoundingClientRect();G.clientX>=ce.left&&G.clientX<=ce.right&&G.clientY>=ce.top&&G.clientY<=ce.bottom&&he()}if(n(o,"pointerenter",function(){he(),Le||(Le=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(o,"pointerleave",function(){Re("idle"),clearTimeout(De),Le&&(Le=!1,window.removeEventListener("pointermove",Ae))}),j){var de=new IntersectionObserver(function(G){G.forEach(function(ce){var w=ce.isIntersecting&&ce.intersectionRatio>0;w?((Z||I)&&!B&&F(),r.paused?(x="",R=!0,p("loading"),v(r)):p("playing")):!r.paused&&!r.ended&&(x="io",r.pause(),p("paused"))})},{threshold:.1});de.observe(o)}t.push(function(){if(cancelAnimationFrame(ee),clearTimeout(De),de&&de.disconnect(),o._hls){try{o._hls.destroy()}catch(G){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(G){}})});function e(o){return(o<10?"0":"")+o}function a(o){if(!isFinite(o)||o<0)return"00:00";var f=Math.floor(o),r=Math.floor(f/3600),p=Math.floor(f%3600/60),A=f%60;return r>0?r+":"+e(p)+":"+e(A):e(p)+":"+e(A)}function c(o,f){o.forEach(function(r){r.textContent=f})}function S(o){return!o||!o.length?null:o.reduce(function(f,r){return(r.width||0)>(f.width||0)?r:f},o[0])}function v(o){var f=o.play();f&&typeof f.then=="function"&&f.catch(function(){})}function M(o,f){!f&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function T(o,f,r,p){if(!(f!=="true"||!r||!p)){var A=o.querySelector("[data-player-before]");A&&(A.style.paddingTop=p/r*100+"%")}}function l(o,f,r){if(f==="true"){var p=o.querySelector("[data-player-before]");if(p){var A=p.style.paddingTop&&p.style.paddingTop!=="0%";!A&&r.videoWidth&&r.videoHeight&&T(o,f,r.videoWidth,r.videoHeight)}}}function h(o,f){try{return new URL(f,o).toString()}catch(r){return f}}function y(o,f){return new Promise(function(r){if(f&&window.Hls&&Hls.isSupported())try{var p=new Hls,A={width:0,height:0,duration:NaN},O=!1,z=!1;p.on(Hls.Events.MANIFEST_PARSED,function(q,P){var $=P&&P.levels||p.levels||[],C=S($);C&&C.width&&C.height&&(A.width=C.width,A.height=C.height,O=!0)}),p.on(Hls.Events.LEVEL_LOADED,function(q,P){P&&P.details&&isFinite(P.details.totalduration)&&(A.duration=P.details.totalduration,z=!0)}),p.on(Hls.Events.ERROR,function(){try{p.destroy()}catch(q){}r(A)}),p.on(Hls.Events.LEVEL_LOADED,function(){try{p.destroy()}catch(q){}r(A)}),p.loadSource(o);return}catch(q){r({width:0,height:0,duration:NaN});return}function N(q){for(var P=q.split(/\r?\n/),$=0,C=0,X=null,ne=null,Z=0;Z<P.length;Z++){var I=P[Z];if(I.indexOf("#EXT-X-STREAM-INF:")===0)ne=I;else if(ne&&I&&I[0]!=="#"){X||(X=I.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec(ne);if(j){var H=parseInt(j[1],10),R=parseInt(j[2],10);H>$&&($=H,C=R)}ne=null}}return{bestW:$,bestH:C,media:X}}function oe(q){for(var P=0,$=/#EXTINF:([\d.]+)/g,C;C=$.exec(q);)P+=parseFloat(C[1]);return P}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(q){if(!q.ok)throw new Error("master");return q.text()}).then(function(q){var P=N(q);if(!P.media){r({width:P.bestW||0,height:P.bestH||0,duration:NaN});return}var $=h(o,P.media);return fetch($,{credentials:"omit",cache:"no-store"}).then(function(C){if(!C.ok)throw new Error("media");return C.text()}).then(function(C){r({width:P.bestW||0,height:P.bestH||0,duration:oe(C)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var Xn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Yn="(min-width: 768px)";function rn(i){if(!i.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=wt(i),n=nn(i);else{let e=!1;return ct(Xn).catch(function(){}).then(function(){e||(t=wt(i),n=nn(i))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function nn(i){if(!i.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",c=!1,S,v,M,T,l,h,y="",o="",f="",r=(s,u=i)=>u.querySelector(s),p=s=>r(`[data-mini-showreel-lightbox="${s}"]`),A=s=>r(`[data-mini-showreel-player="${s}"]`),O=s=>s.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",s)||s,z=(s,u)=>{let L=s.width,B=L/u;return B>s.height&&(B=s.height,L=B*u),{left:s.left+(s.width-L)/2,top:s.top+(s.height-B)/2,width:L,height:B}},N=s=>{let u=O(s).getBoundingClientRect(),L=s.getBoundingClientRect(),B=L.width>0&&L.height>0?L.width/L.height:16/9;return z(u,B)},oe=(s,u)=>gsap.set(s,{position:"fixed",left:u.left,top:u.top,width:u.width,height:u.height,margin:0,x:0,y:0});function q(s){a&&i.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(u=>u.setAttribute("data-mini-showreel-status",s))}function P(){o=(S==null?void 0:S.style.zIndex)||"",f=(v==null?void 0:v.style.zIndex)||"",S&&(S.style.zIndex=String(e)),v&&(v.style.zIndex=String(e))}function $(){S&&(S.style.zIndex=o),v&&(v.style.zIndex=f)}function C(s){let u=A(s);if(!u)return;let L=u.querySelector("[data-bunny-player-init]"),B=u.querySelector("video");if(B){if(L){let _=L.querySelector('[data-player-control="play"], [data-player-control="playpause"]');_&&(B.paused||B.ended)&&_.click();return}try{B.play()}catch(_){}}}function X(s){let u=A(s);if(!u)return;let L=u.querySelector("[data-bunny-player-init]"),B=u.querySelector("video");B&&(B.muted=!0,L&&L.setAttribute("data-player-muted","true"),(B.paused||B.ended)&&C(s))}function ne(){$(),a="",c=!1,S=v=M=T=l=h=null,y="",o="",f="",Pe.start()}function Z(s){if(!s||c||(S=p(s),v=A(s),!S||!v)||(M=r("[data-mini-showreel-target]",S),!M))return;a=s,c=!0,Pe.stop(),v.dataset.flipId=a,y=v.style.cssText||"",T=v.parentElement,l=v.nextSibling,P(),q("active"),C(a);let u=Flip.getState(v),L=N(M);S.appendChild(v),oe(v,L),h=Flip.from(u,{duration:t,ease:n,absolute:!0,scale:!1})}function I(s){!c||!v||s&&s!==a||(X(a),q("not-active"),h&&h.kill(),h=Flip.fit(v,T,{duration:t,ease:n,scale:!1,onComplete:()=>{T.insertBefore(v,l),v.style.cssText=y,ne()}}))}function j(){!c||!v||(h&&h.kill(),X(a),q("not-active"),T.insertBefore(v,l),v.style.cssText=y,ne())}function H(){!c||!v||!M||oe(v,N(M))}function R(s){let u=s.target.closest("[data-mini-showreel-open]");u&&(s.preventDefault(),Z(u.getAttribute("data-mini-showreel-open")||""))}function E(s){let u=s.target.closest("[data-mini-showreel-close]");u&&(s.preventDefault(),I(u.getAttribute("data-mini-showreel-close")||""))}function m(s){s.key==="Escape"&&I("")}let g=gsap.matchMedia();return g.add(Yn,function(){return i.addEventListener("click",R),document.addEventListener("click",E),window.addEventListener("keydown",m),window.addEventListener("resize",H),function(){j(),i.removeEventListener("click",R),document.removeEventListener("click",E),window.removeEventListener("keydown",m),window.removeEventListener("resize",H)}}),function(){g.revert(),j()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",i=>{it.x=i.clientX,it.y=i.clientY,it.known=!0},{passive:!0});function Ze(i){let t=e=>i(e.clientX,e.clientY),n=()=>{it.known&&i(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,Ne=1080,St="#E5E5E5",Tt="#000000",on="http://www.w3.org/2000/svg";function an(i){let t=i.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(on,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${Ne}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(g,s)=>{let u=document.createElementNS(on,g);return u.setAttribute("fill",s),n.appendChild(u),u},a=e("polygon",St),c=e("polygon",Tt),S=e("rect",Tt),v=e("rect",St),M=e("rect",St),T=e("rect",Tt);[S,v,M,T].forEach(g=>g.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let l=(g,s,u,L,B)=>{g.setAttribute("x",s),g.setAttribute("y",u),g.setAttribute("width",Math.max(0,L)),g.setAttribute("height",Math.max(0,B))},h={x:qe*(2/3),y:Ne*(1/3)},y=.1,o=.9,f={x:h.x,y:h.y},r={x:h.x,y:h.y},p={x:h.x,y:h.y},A=!1,O=()=>gsap.to(p,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:O}),z=()=>gsap.to(p,{y:gsap.utils.random(Ne*.193,Ne*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:z});O(),z();function N(){let g=gsap.utils.clamp(qe*y,qe*o,f.x),s=qe-g,u=gsap.utils.clamp(Ne*y,Ne*o,f.y),L=Ne-u;a.setAttribute("points",`0,${u} ${g},0 ${qe},${u} ${qe},${Ne} 0,${Ne}`),c.setAttribute("points",`${qe},${u} ${g},0 ${g},${u}`),l(S,0,u,g,L);let B=g*.25,_=L*(2/3);l(v,g/2-B/2,u+L-_,B,_),l(M,g,u,s,L);let x=s*.5,F=L/3;l(T,g+s/2-x/2,u+L/2-F/2,x,F)}let oe=.1,q=.03;function P(){let s=1-Math.pow(1-(A?oe:q),gsap.ticker.deltaRatio(60)),u=A?r:p;f.x+=(u.x-f.x)*s,f.y+=(u.y-f.y)*s,N()}let $=(g,s)=>{let u=t.getBoundingClientRect();!u.width||!u.height||(r.x=gsap.utils.clamp(0,qe,(g-u.left)/u.width*qe),r.y=gsap.utils.clamp(0,Ne,(s-u.top)/u.height*Ne),A=!0)},C=()=>{A=!1},X=(g,s)=>{let u=t.getBoundingClientRect();g>=u.left&&g<=u.right&&s>=u.top&&s<=u.bottom?$(g,s):C()},Z=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Ze(X):null,I=g=>{let s=g.touches[0];s&&$(s.clientX,s.clientY)},j={passive:!0};t.addEventListener("touchstart",I,j),t.addEventListener("touchmove",I,j),t.addEventListener("touchend",C,j),t.addEventListener("touchcancel",C,j);let H=!1,R=()=>{H||(H=!0,gsap.ticker.add(P))},E=()=>{H&&(H=!1,gsap.ticker.remove(P))},m=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:g=>g.isActive?R():E()});return N(),R(),function(){E(),m.kill(),gsap.killTweensOf(p),Z&&Z(),t.removeEventListener("touchstart",I,j),t.removeEventListener("touchmove",I,j),t.removeEventListener("touchend",C,j),t.removeEventListener("touchcancel",C,j),n.remove()}}var $n="http://www.w3.org/2000/svg";var Kn=4.1343749999999995,Zn="#AFAFAF",jn="#000000",Jn=5e3,Qn=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],er=0,sn=(i,t)=>{if(i<0||t<0||i>=20||t>=20)return!1;let n=20/2;return Math.hypot(i+.5-n,t+.5-n)<=n},je=(i,t)=>{let n=document.createElementNS($n,i);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function cn(i){let t=i.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++er;e.setAttribute("data-pulse-dots-paused","");let c=je("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});c.style.setProperty("--pd-step",`${31.5}px`);let S=je("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});S.append(je("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Kn.toFixed(2)}),je("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let v=je("defs",{});v.appendChild(S);let M=je("rect",{width:1e3,height:1e3,fill:Zn}),T=je("g",{filter:`url(#${a})`,fill:jn});for(let h=0;h<20;h++)for(let y=0;y<20;y++){if(!sn(y,h))continue;let o=Qn.filter(O=>sn(y+O.dx,h+O.dy)),f=o[Math.floor(Math.random()*o.length)],r=185+y*31.5+27.5625/2,p=185+h*31.5+27.5625/2,A=je("g",{transform:`rotate(${f.deg} ${r} ${p})`});A.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Jn)}ms`),A.append(je("circle",{class:"pulse-dots__dot is--first",cx:r,cy:p,r:27.5625/2}),je("circle",{class:"pulse-dots__dot is--last",cx:r,cy:p,r:27.5625/2})),T.appendChild(A)}c.append(v,M,T),e.appendChild(c);let l=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:h=>e.toggleAttribute("data-pulse-dots-paused",!h.isActive)});e.toggleAttribute("data-pulse-dots-paused",!l.isActive),n.push(()=>{l.kill(),e.removeAttribute("data-pulse-dots-paused"),c.remove()})}),()=>n.forEach(e=>e())}var ft=`#version 300 es
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
}`;var At=60,nr=1.5,rr=1,xn=150,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function bn(i){let t=i.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function c(m,g){let s=e.createShader(m);return e.shaderSource(s,g),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let S=[];function v(m,g=ln){let s=e.createProgram(),u=c(e.VERTEX_SHADER,g),L=c(e.FRAGMENT_SHADER,m);e.attachShader(s,u),e.attachShader(s,L),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(u),e.deleteShader(L),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let B={},_=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let F=0;F<_;F++){let U=e.getActiveUniform(s,F);B[U.name]=e.getUniformLocation(s,U.name)}let x={p:s,loc:B};return S.push(x),x}let M={bg:v(un,ft),shapes:dn.map(m=>v(m,vn)),trailSim:v(pn,ft),trail:v(fn),blur:mn.map(m=>v(m)),bloom:hn.map(m=>v(m)),gmap:v(gn,ft)},T=e.createVertexArray();e.bindVertexArray(T);let l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let y=[];function o(m,g,s=!1){let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),s&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,m,g,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,m,g,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let L=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,L),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let B={tex:u,fb:L,w:m,h:g};return y.push(B),B}function f(){y.forEach(m=>{e.deleteTexture(m.tex),e.deleteFramebuffer(m.fb)}),y.length=0}function r(m,g,s,u){e.useProgram(m.p);let L=g?g.w:n.width,B=g?g.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,g?g.fb:null),e.viewport(0,0,L,B);let _=m.loc;_.uMVMatrix&&e.uniformMatrix4fv(_.uMVMatrix,!1,Ct),_.uPMatrix&&e.uniformMatrix4fv(_.uPMatrix,!1,Ct),_.uTextureMatrix&&e.uniformMatrix4fv(_.uTextureMatrix,!1,Ct),_.uResolution&&e.uniform2f(_.uResolution,L,B),_.uArtboardResolution&&e.uniform2f(_.uArtboardResolution,1920,1920),_.uAspectRatio&&e.uniform1f(_.uAspectRatio,1),_.uMousePos&&e.uniform2f(_.uMousePos,p.x,p.y),_.uIsMask&&e.uniform1i(_.uIsMask,0),_.uParentTrackMouse&&e.uniform1f(_.uParentTrackMouse,0);let x=0;Object.keys(s).forEach(F=>{_[F]&&(e.activeTexture(e.TEXTURE0+x),e.bindTexture(e.TEXTURE_2D,s[F].tex),e.uniform1i(_[F],x),x++)}),Object.keys(u||{}).forEach(F=>{if(!_[F])return;let U=u[F];Array.isArray(U)?e.uniform2f(_[F],U[0],U[1]):e.uniform1f(_[F],U)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let p={x:.5,y:.5},A={x:.5,y:.5},O=0,z=null,N=0;function oe(){f();let m=Math.min(nr,window.devicePixelRatio||1),g=Math.max(1,Math.round(t.clientWidth*m)),s=Math.max(1,Math.round(t.clientHeight*m));n.width=g,n.height=s;let u=_=>[Math.max(1,Math.round(g*_)),Math.max(1,Math.round(s*_))];z={a:o(g,s),b:o(g,s),pp:[o(...u(.5),!0),o(...u(.5),!0)],trail:o(g,s),blur1:o(...u(1)),blur2:o(...u(1)),blur3:o(...u(1)),blur4:o(...u(1)),bth:o(...u(1)),bd1:o(...u(1)),bd2:o(...u(1)),bs1:o(...u(1)),bs2:o(...u(1)),bloom:o(g,s)},r(M.bg,z.a,{});let L=z.a,B=z.b;M.shapes.forEach(_=>{r(_,B,{uBgTexture:L});let x=L;L=B,B=x}),z.base=L,N=0}function q(){if(!z)return;let m=z.pp[N],g=z.pp[1-N];r(M.trailSim,g,{uPingPongTexture:m},{uTime:O,uPreviousMousePos:[A.x,A.y]}),N=1-N,r(M.trail,z.trail,{uTexture:z.base,uPingPongTexture:g}),r(M.blur[0],z.blur1,{uTexture:z.trail}),r(M.blur[1],z.blur2,{uTexture:z.blur1}),r(M.blur[2],z.blur3,{uTexture:z.blur2}),r(M.blur[3],z.blur4,{uTexture:z.blur3});let s=z.blur4;r(M.bloom[0],z.bth,{uTexture:s}),r(M.bloom[1],z.bd1,{uTexture:z.bth}),r(M.bloom[2],z.bd2,{uTexture:z.bd1,uBgTexture:s}),r(M.bloom[3],z.bs1,{uTexture:z.bd2}),r(M.bloom[4],z.bs2,{uTexture:z.bs1,uBgTexture:s}),r(M.bloom[5],z.bloom,{uTexture:z.bs2,uBgTexture:s}),r(M.gmap,null,{uTexture:z.bloom},{uTime:0}),A.x=p.x,A.y=p.y}let P=xn,C=Ze((m,g)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(p.x=(m-s.left)/s.width,p.y=1-(g-s.top)/s.height,P=0,j())}),X=null,ne=0,Z=!1;function I(m){if(!Z||P>=xn){X=null;return}if(X=requestAnimationFrame(I),m-ne<1e3/At-1)return;let g=ne?Math.min(m-ne,100):1e3/At;ne=m,O+=rr*(g/(1e3/At)),q(),P++}function j(){Z&&!X&&(A.x=p.x,A.y=p.y,ne=0,X=requestAnimationFrame(I))}let H=new IntersectionObserver(([m])=>{Z=m.isIntersecting,Z?j():X&&(cancelAnimationFrame(X),X=null)});H.observe(t);let R=null,E=new ResizeObserver(()=>{clearTimeout(R),R=setTimeout(()=>{oe(),q()},60)});return E.observe(t),oe(),q(),function(){X&&cancelAnimationFrame(X),X=null,clearTimeout(R),H.disconnect(),E.disconnect(),C(),f(),S.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(l),e.deleteBuffer(h),e.deleteVertexArray(T);let g=e.getExtension("WEBGL_lose_context");g&&g.loseContext(),n.remove()}}var or="#BBC0C8",ar="#FFFFFF";var Mt='"Suisseintl Book", Arial, sans-serif';var yn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],ir=3,sr=1.325,lt=5,cr=.4,Pn=20,lr=2;function En(i){let t=i.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),a=c=>{let S=(c%lt+lt)%lt/lt;return S<.4?1-e(S/.4):S<.6?0:e((S-.6)/.4)};return t.forEach(c=>{let S=(c.getAttribute("data-text")||"").trim();if(!S)return;let v=Array.from(Array(ir).fill(S).join(" ").toUpperCase()),M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,T=document.createElement("canvas");T.setAttribute("aria-hidden","true"),Object.assign(T.style,{display:"block",width:"100%",height:"100%"}),c.appendChild(T);let l=T.getContext("2d"),h=[],y=0,o=new Map,f=2;function r(){l.font=`24px ${Mt}`,h=v.map(I=>l.measureText(I).width),y=(3363-h.reduce((I,j)=>I+j,0))/(v.length-1)}let p=null;function A(){o=new Map,l.font=`24px ${Mt}`;let Z=24,I=24*.35,j=[...new Set(v)].filter(m=>m!==" ").map(m=>({ch:m,w:l.measureText(m).width})),H=Math.ceil((Z+I+f*2)*O),R=0;j.forEach(m=>{m.sx=R,m.sw=Math.ceil((m.w+f*2)*O),R+=m.sw+2}),p=document.createElement("canvas"),p.width=Math.max(1,R),p.height=Math.max(1,H);let E=p.getContext("2d");E.font=`${24*O}px ${Mt}`,E.fillStyle=ar,E.textBaseline="alphabetic",j.forEach(m=>{E.fillText(m.ch,m.sx+f*O,(f+Z)*O),o.set(m.ch,{sx:m.sx,sw:m.sw,x:-m.w/2-f,y:-Z-f,w:m.sw/O,h:H/O})})}let O=1;function z(){let Z=Math.min(lr,window.devicePixelRatio||1),I=c.clientWidth;T.width=Math.max(1,Math.round(I*Z)),T.height=Math.max(1,Math.round(c.clientHeight*Z)),O=T.width/1920}let N=0;function oe(){l.setTransform(1,0,0,1,0,0),l.fillStyle=or,l.fillRect(0,0,T.width,T.height);let Z=M?0:e(N%Pn/Pn)*Math.PI*2;yn.forEach((I,j)=>{let H=yn.length-1-j,R=M?0:a(N-lt+H*cr),E=y+R*sr*24,m=2*Math.PI*I.r,g=I.start*Math.PI/180+Z,s=0;for(let u=0;u<v.length;u++){let L=h[u];if(s+L>m)break;let B=o.get(v[u]);if(B){let _=g+(s+L/2)/I.r,x=Math.cos(_),F=Math.sin(_);l.setTransform(-F*O,x*O,-x*O,-F*O,(960+I.r*x)*O,(960+I.r*F)*O),l.drawImage(p,B.sx,0,B.sw,p.height,B.x,B.y,B.w,B.h)}s+=L+E}})}let q=(Z,I)=>{N+=I/1e3,oe()},P=!1,$=()=>{!P&&!M&&(P=!0,gsap.ticker.add(q))},C=()=>{P&&(P=!1,gsap.ticker.remove(q))},X=new ResizeObserver(()=>{z(),A(),oe()});X.observe(c),z(),r(),A(),oe(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{r(),A(),oe()});let ne=ScrollTrigger.create({trigger:c,start:"top bottom",end:"bottom top",onToggle:Z=>Z.isActive?$():C()});ne.isActive&&$(),n.push(()=>{C(),ne.kill(),X.disconnect(),T.remove()})}),()=>n.forEach(c=>c())}function wn(i){let t=i.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",c="rgba(0, 0, 0, 0.2)",S="rgba(0, 0, 0, 0.75)",v=2.125,M=1.5,T=24,l=.5,h="20px",y=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},f={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},p=[],A,O,z,N,oe,q,P=performance.now();function $(x,F){let U=document.createElement("div");U.style.cssText=`position:absolute;visibility:hidden;width:${x};`,F.appendChild(U);let ie=U.getBoundingClientRect().width;return U.remove(),ie}function C(x,F){let U=document.createElement("span");U.style.color=x,F.appendChild(U);let ie=getComputedStyle(U).color;U.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ie,Se.fillRect(0,0,1,1);let _e=[...Se.getImageData(0,0,1,1).data];return _e[3]/=255,_e}function X(x,F,U){return`rgba(${x.map((ie,me)=>ie+(F[me]-ie)*U).join(",")})`}function ne(x,F){Object.assign(x,{from:x.value,to:F,start:performance.now()})}function Z(x,F){if(!l)return x.value=x.to;let U=Math.min(Math.max((F-x.start)/(l*1e3),0),1);x.value=x.from+(x.to-x.from)*(1-Math.pow(1-U,4))}t.forEach(x=>{let F=document.createElement("canvas"),U=F.getContext("2d");F.setAttribute("aria-hidden","true"),Object.assign(F.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(x).position==="static"&&(x.style.position="relative"),x.prepend(F),p.push({element:x,canvas:F,ctx:U,width:0,height:0,visible:!1,inactive:C(x.getAttribute("data-dots-color-inactive")||c,x),active:C(x.getAttribute("data-dots-color-active")||S,x)})});function I(){return p.some(({element:x})=>{let F=x.getBoundingClientRect();return o.x>=F.left&&o.x<=F.right&&o.y>=F.top&&o.y<=F.bottom})}function j(x,F){let U=x.element.getBoundingClientRect(),ie=U.left-F.left,me=U.top-F.top,Se=o.cx-F.left,_e=o.cy-F.top,We=v*(1+(M-1)*r.value);x.ctx.clearRect(0,0,x.width,x.height);for(let Ce=0;Ce<x.rows;Ce++){let ee=x.oy+Ce*x.sy,te=me+ee;for(let D=0;D<x.cols;D++){let Q=x.ox+D*x.sx,fe=ie+Q,le=y&&f.value?Math.max(0,1-Math.hypot(fe-Se,te-_e)/oe)*f.value:0,ve=O*(1+(We-1)*le);x.ctx.fillStyle=X(x.inactive,x.active,le),a==="square"?x.ctx.fillRect(Q-ve/2,ee-ve/2,ve,ve):(x.ctx.beginPath(),x.ctx.arc(Q,ee,ve/2,0,Math.PI*2),x.ctx.fill())}}}function H(x=!1){let F=t[0].getBoundingClientRect();p.forEach(U=>(!x||U.visible)&&j(U,F))}function R(x){if(q=null,!p.some(U=>U.visible))return;let F=Math.min((x-P)/1e3,.1);if(P=x,Z(f,x),Z(r,x),!l)o.cx=o.x,o.cy=o.y;else{let U=1-Math.exp(-F*6/l);o.cx+=(o.x-o.cx)*U,o.cy+=(o.y-o.cy)*U}H(!0),q=requestAnimationFrame(R)}function E(){y&&!q&&p.some(x=>x.visible)&&(P=performance.now(),q=requestAnimationFrame(R))}function m(){A=Math.min(devicePixelRatio||1,2),O=$(e,t[0]),z=$(n,t[0]),N=O+z,oe=N*T;let x=$(h,t[0])+O/2,F=U=>{let ie=U-2*x,me=ie>=0?Math.floor(ie/N)+1:0;return{count:me,offset:x,step:me>1?ie/(me-1):N}};p.forEach(U=>{let ie=U.element.getBoundingClientRect();U.width=ie.width,U.height=ie.height;let me=F(ie.width),Se=F(ie.height);U.cols=me.count,U.ox=me.offset,U.sx=me.step,U.rows=Se.count,U.oy=Se.offset,U.sy=Se.step,U.canvas.width=Math.round(ie.width*A),U.canvas.height=Math.round(ie.height*A),U.ctx.setTransform(A,0,0,A,0,0)}),H(),E()}let g=(x,F)=>{o.x=x,o.y=F;let U=I();U!==o.active&&(o.active=U,ne(f,+U),U?(o.cx=o.x,o.cy=o.y):ne(r,0)),E()},s=null,u=()=>o.active&&ne(r,1),L=()=>ne(r,0);y&&(s=Ze(g),window.addEventListener("pointerdown",u),window.addEventListener("pointerup",L));let B=new IntersectionObserver(x=>{x.forEach(F=>{let U=p.find(ie=>ie.element===F.target);U&&(U.visible=F.isIntersecting)}),y?E():H(!0)}),_=new ResizeObserver(m);return t.forEach(x=>{B.observe(x),_.observe(x)}),window.addEventListener("resize",m),m(),function(){q&&cancelAnimationFrame(q),q=null,y&&(s&&s(),window.removeEventListener("pointerdown",u),window.removeEventListener("pointerup",L)),window.removeEventListener("resize",m),B.disconnect(),_.disconnect(),p.forEach(x=>x.canvas.remove()),p.length=0}}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Sn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},ur=i=>{let t=Math.floor(i),n=i-t,e=n*n*(3-2*n);return Sn(t)*(1-e)+Sn(t+1)*e};function Tn(i){let t=i.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],c=null,S=0,v=18,M=0,T=0,l=0,h=-1e5,y=-1e5,o=!1,f=!1;function r(){c&&c.revert(),t.textContent="";let C=getComputedStyle(t);S=parseFloat(C.paddingTop),v=parseFloat(C.lineHeight),M=t.offsetHeight;let X=Math.max(1,Math.floor((M-S-parseFloat(C.paddingBottom))/v)),ne=document.createDocumentFragment();for(let Z=0;Z<X;Z++){let I=document.createElement("div");I.className="type-field__row",I.textContent=n,ne.appendChild(I)}t.appendChild(ne),t.setAttribute("aria-hidden","true"),c=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((Z,I)=>({chars:Z.querySelectorAll(".type-field__char"),cur:a[I]?a[I].cur:0,drawn:0}))}})}function p(C){let X=Math.max(0,Math.min(C.chars.length,Math.round(C.cur)));if(X===C.drawn)return;let ne=Math.min(X,C.drawn),Z=Math.max(X,C.drawn);for(let I=ne;I<Z;I++)C.chars[I].style.visibility=I<X?"visible":"hidden";C.drawn=X}function A(C,X){if(!a.length)return;let ne=Math.min(X,50)/16.667,Z=m=>1-Math.pow(1-m,ne),I=Pe.scroll,j=Math.min(Math.max(T-I,0),l-I-M);y+=(h-j-S-y)*Z(rt.followEase);let H=Math.floor(y/v),R=I*.004,E=o&&h>=T-I&&h<=l-I;for(let m=0;m<a.length;m++){let g=a[m],s=g.chars.length,u=Math.abs(m-H),L=0;if(E){if(u===0)L=s;else if(u<=rt.radius){let B=1-u/(rt.radius+1);L=1+Math.min(rt.maxSide,B*(1-rt.ragged/2+rt.ragged*ur(m*1.3+R)))*(s-1)}}g.cur+=(L-g.cur)*Z(rt.ease),p(g)}}function O(){f||(gsap.ticker.add(A),f=!0)}function z(){f&&(gsap.ticker.remove(A),f=!1)}let N=Ze((C,X)=>{y<-1e4&&(y=X),h=X,o=!0}),oe=()=>{o=!1};document.documentElement.addEventListener("mouseleave",oe),r();let q=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(C){T=C.start+window.innerHeight,l=C.end},onToggle(C){C.isActive?O():z()}});q.isActive&&O();let P,$=()=>{clearTimeout(P),P=setTimeout(()=>{Math.floor((t.offsetHeight-S-parseFloat(getComputedStyle(t).paddingBottom))/v)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",$),function(){z(),clearTimeout(P),N(),document.documentElement.removeEventListener("mouseleave",oe),window.removeEventListener("resize",$),q.kill(),c&&c.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var An={duration:.5,ease:"power3"};function Cn(i){let t=i.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let c=gsap.quickTo(a,"x",An),S=gsap.quickTo(a,"y",An),v=0,M=0,T=!1,l=new ResizeObserver(()=>{v=a.offsetWidth,M=a.offsetHeight});l.observe(a),v=a.offsetWidth,M=a.offsetHeight;let y=Ze((f,r)=>{let p=e.getBoundingClientRect();if(!(f>=p.left&&f<=p.right&&r>=p.top&&r<=p.bottom)){T&&(T=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let O=gsap.utils.clamp(0,Math.max(0,p.width-v),f-p.left-v/2),z=gsap.utils.clamp(0,Math.max(0,p.height-M),r-p.top-M/2);if(!T){T=!0,c(O,O),S(z,z),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}c(O),S(z)}),o=()=>{T&&(T=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{y(),document.documentElement.removeEventListener("mouseleave",o),l.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var dr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],vr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],fr="#FFFFFF";var Mn="power3.out";function Rn(i){let t=i.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],c=[],S=[];function v(){if(c.length&&c[0].isConnected)return;let h=e.querySelectorAll(":scope > div > div");a=(h.length?[...h]:[e]).map(o=>SplitText.create(o,{type:"chars"})),c=a.flatMap(o=>o.chars),S=h.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],c.forEach(o=>{o.dataset.orig=o.textContent})}function M(h){h.textContent=h.dataset.orig,h.style.border=""}let T=()=>{v(),S.forEach(y=>{y.el.style.overflow="visible"});let h=(c.length-1)/2;c.forEach((y,o)=>{gsap.to(y,{color:fr,ease:Mn,duration:.3,delay:Math.abs(o-h)*.03,overwrite:"auto",onStart:()=>{let f=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);f==1&&(y.textContent=gsap.utils.random(vr)),r==1&&(y.style.border=`1px solid ${gsap.utils.random(dr)}`)}})})},l=()=>{if(!c.length)return;let h=getComputedStyle(e).color,y=(c.length-1)/2;S.forEach(o=>{o.el.style.overflow=o.overflow}),c.forEach((o,f)=>{gsap.to(o,{color:h,ease:Mn,duration:.3,delay:Math.abs(f-y)*.03,overwrite:"auto",onStart:()=>M(o)})})};e.addEventListener("mouseenter",T),e.addEventListener("mouseleave",l),n.push(()=>{e.removeEventListener("mouseenter",T),e.removeEventListener("mouseleave",l),gsap.killTweensOf(c),a.forEach(h=>h.revert()),a=[],c=[],S=[]})}),()=>n.forEach(e=>e())}function Rt(i,t){let n=null;pe(Nt(i)),pe(an(i)),pe(Rn(i)),pe(wn(i)),pe(en(i)),pe(Wt(i)),pe(rn(i));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Xt(i):null,n?pe(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),pe(Yt(i)),pe(Zt(i)),pe(jt(i)),pe(vt(i)),dt(i),Jt(i),n}function pt(i){pe(tn(i)),i.querySelector("[data-flip-element]")&&window.innerWidth>991&&pe(Qt(i)),pe(Tn(i)),pe(Cn(i)),pe(cn(i)),pe(bn(i)),pe(En(i)),ScrollTrigger.sort()}var pr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(i){var t=[];return i.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(c){gsap.set(n,{autoAlpha:1});var S=pr[e],v={yPercent:110,duration:S.duration,stagger:S.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?v.delay=.5:v.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(c[e],v)}}))}),function(){t.forEach(function(n){n.revert()})}}var Fn=window.matchMedia("(prefers-reduced-motion: reduce)"),Ft=.9;function zn(i){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{i.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Fn.matches||!n?e.set(i,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ut,duration:Ft,ease:Ke},0),e.fromTo(i,{y:"0vh"},{y:"-25vh",duration:Ft,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function zt(i,t,n="100vh"){let e=gsap.timeline();return Fn.matches?e.set(i,{autoAlpha:1}):(e.set(i,{zIndex:3},0),e.fromTo(i,{y:n},{y:"0vh",duration:Ft,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(i,{clearProps:"zIndex"}),t(i)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function Lt(i,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(i,{position:"relative"}),zt(i,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,kt=!1;function Dt(i){gsap.set(i,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Pe.scrollTo(0,{immediate:!0,force:!0}),Pe.resize()}var Ln={sync:!0,beforeLeave(){kt=yt({keepCurtain:!0}),Pe.stop(),ot||(ot=bt())},beforeEnter(i){ot||(ot=bt()),gsap.set(i.next.container,{position:"fixed",top:0,left:0,right:0}),Ot(),Rt(i.next.container,!1)},leave(i){return zn(i.current.container,i.next.container)},enter(i){return kt&&(Ut(),kt=!1),pe(mt(i.next.container)),zt(i.next.container,Dt)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(i){Bt(i),pt(i.next.container),Pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:i}){if(!i||!i.href)return!1;let t=new URL(i.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Ln,once(i){let t=document.querySelector("[data-menu-status]");Ht(),_t(),t&&(dt(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=i.next.container,e=Rt(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");pe(mt(n)),Lt(n,function(c){Dt(c),pt(c),Pe.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(Pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),pe(mt(n)),Lt(n,function(a){Dt(a),pt(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Pe.start()})})})}))}},{name:"self",...Ln}]}),window.addEventListener("pageshow",function(i){i.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

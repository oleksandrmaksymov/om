(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Pe=new Lenis({lerp:.08,wheelMultiplier:1});Pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(i=>{Pe.raf(i*1e3)});gsap.ticker.lagSmoothing(0);var xt=[];function pe(i){typeof i=="function"&&xt.push(i)}function bt(){let i=xt,t=ScrollTrigger.getAll();return xt=[],function(){i.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Bn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Bn);var Ke="parallax",ut=.8;var On="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",Dt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,yt=function(){return!1};function It(){tt&&gsap.timeline().to(tt,{clipPath:Dt,duration:.9,ease:Ke,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-ut)+")",duration:.9,ease:Ke},0).set(tt,{clearProps:"filter"})}function Ut(){let i=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!i||!t)return;tt=t.querySelector(".nav-bg"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",i.setAttribute("aria-expanded",a),a?(Pe.stop(),document.body.style.overflow="hidden"):(Pe.start(),document.body.style.overflow="")}function e(a){tt&&gsap.to(tt,{clipPath:a?On:Dt,duration:.9,ease:Ke,overwrite:!0})}i.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),yt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function Ht(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function _t(){let i=function(n){return n.replace(/\/$/,"")||"/"},t=i(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&i(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Bt(i){let n=new DOMParser().parseFromString(i.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function dt(i){let t=i.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let c=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();c&&navigator.clipboard.writeText(c).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function vt(i){let t=i.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,c=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),f=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=c+" "+f}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Pt={};function ct(i){return Pt[i]||(Pt[i]=new Promise(function(t,n){let e=document.createElement("script");e.src=i,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Pt[i]}function Ot(i){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),n.add(S);var f=new THREE.PointLight(5913114,1.2,900);f.position.set(0,200,-300),n.add(f);var M=new THREE.PointLight(16750916,1.3,600);M.position.set(0,-250,200),n.add(M);var A=0,l=0,h=0,y=0,o=!1,v=0,r=0,p=Math.PI*2/6,C=new THREE.Vector2(9999,9999),K=new THREE.Raycaster,F=120,q=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),H=new THREE.Vector3,T=!1,_=0,x=0,G=8e4,ne=.03,re=.95,$=.005,J=12e4,B=null,R,w,P,m,s,u,D=0,X=!1,O=0,g=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function z(){var E=new THREE.BufferGeometry;R=new Float32Array(J*3),w=new Float32Array(J*3),P=new Float32Array(J*3),m=new Float32Array(J*3),s=new Float32Array(J),u=new Float32Array(J),E.setAttribute("position",new THREE.BufferAttribute(R,3)),E.setAttribute("color",new THREE.BufferAttribute(m,3)),E.setAttribute("size",new THREE.BufferAttribute(s,1)),E.setAttribute("alpha",new THREE.BufferAttribute(u,1)),E.setAttribute("velocity",new THREE.BufferAttribute(w,3));var Y=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,N=new THREE.ShaderMaterial({vertexShader:Y,fragmentShader:d,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});B=new THREE.Points(E,N),n.add(B)}function I(E,Y){return new Promise(function(d){try{var N=512,Z=document.createElement("canvas");Z.width=Z.height=N;var te=Z.getContext("2d"),ke=new DOMParser().parseFromString(E,"image/svg+xml"),Fe=ke.querySelector("svg");if(!Fe){d([]);return}var L=parseFloat(Fe.getAttribute("width")||512),W=parseFloat(Fe.getAttribute("height")||512),b=Fe.getAttribute("viewBox");if(b){var U=b.split(/[\s,]+/);L=+U[2],W=+U[3]}var se=Math.min(N/L,N/W)*.9,ae=(N-L*se)/2,ze=(N-W*se)/2;te.save(),te.translate(ae,ze),te.scale(se,se),te.fillStyle="white",ke.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var He=xe.getAttribute("d");He&&te.fill(new Path2D(He))}else xe.tagName==="rect"?te.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(te.beginPath(),te.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),te.fill())}),te.restore();for(var be=te.getImageData(0,0,N,N).data,Te=[],ye=0;ye<N;ye++)for(var Ie=0;Ie<N;Ie++){var Ee=(ye*N+Ie)*4;be[Ee+3]>30&&Te.push({x:Ie,y:ye,a:be[Ee+3]/255})}if(!Te.length){d([]);return}for(var Ge=[],Ee=0;Ee<Y;Ee++){var Ue=Te[Math.floor(Math.random()*Te.length)];Ge.push({x:(Ue.x-N/2)*1.2+(Math.random()-.5)*1.65,y:-(Ue.y-N/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ue.a,a:Ue.a})}d(Ge)}catch(xe){console.error(xe),d([])}})}function ie(E){D=E.length;for(var Y=0;Y<D;Y++){var d=E[Y],N=Y*3;R[N]=d.x,R[N+1]=d.y+40,R[N+2]=d.z,w[N]=w[N+1]=w[N+2]=0,P[N]=d.x,P[N+1]=d.y,P[N+2]=d.z;var Z=g[Math.floor(Math.random()*g.length)],te=.7+Math.random()*.4;m[N]=Z.r*te,m[N+1]=Z.g*te,m[N+2]=Z.b*te,s[Y]=1.8+Math.random()*3.8,u[Y]=.3+(d.a||.7)*.75}B.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(ke){B.geometry.attributes[ke].needsUpdate=!0}),X=!0}function me(E){return I(E,Math.min(J,G)).then(function(Y){Y.length&&B&&ie(Y)})}function Se(E){if(!(!X||!D)){O+=E;for(var Y=0;Y<D;Y++){var d=Y*3,N=Y*1.37;if(w[d]+=Math.sin(O*.4+N)*.008+Math.sin(O*1.1+N*2.3)*.003,w[d+1]+=Math.cos(O*.35+N*.7)*.008+Math.sin(O*.9+N*1.5)*.004,w[d+2]+=Math.sin(O*.25+N*1.1)*.004,w[d+1]-=ne*.06,w[d]+=Math.sin(O*.25+R[d+1]*.008)*$*.6,w[d+2]+=Math.cos(O*.3+R[d]*.008)*$*.3,T){var Z=R[d]-q.x,te=R[d+1]-q.y,ke=R[d+2]-q.z,Fe=Z*Z+te*te+ke*ke,L=F*F;if(Fe<L&&Fe>.25){var W=Math.sqrt(Fe),b=W/F,U=(Y*2654435761&65535)/65535,se=.6+U*.8,ae=Math.pow(1-b,1.5+U),ze=1+Math.min(H.length()*.12,1),be=ae*se*1.2*ze,Te=1/W;w[d]+=Z*Te*be,w[d+1]+=te*Te*be,w[d+2]+=ke*Te*be*.2;var ye=.02+U*.06;w[d]+=H.x*ae*ye,w[d+1]+=H.y*ae*ye;var Ie=ae*.15;w[d]+=(U-.5)*Ie,w[d+1]+=((Y*48271&65535)/65535-.5)*Ie}}var Ee=P[d],Ge=P[d+1]+40,Ue=P[d+2],xe=Ee-R[d],He=Ge-R[d+1],Oe=Ue-R[d+2],Je=Math.sqrt(xe*xe+He*He+Oe*Oe),Qe=(Y*48271&65535)/65535,et=.003+Qe*.003,at=1+Math.min(Je*.002,.5),Ye=et*at;w[d]+=xe*Ye,w[d+1]+=He*Ye,w[d+2]+=Oe*Ye;var we=(Y*16807&65535)/65535,$e=re*(.92+we*.06);w[d]*=$e,w[d+1]*=$e,w[d+2]*=$e,R[d]+=w[d],R[d+1]+=w[d+1],R[d+2]+=w[d+2];var st=Math.sqrt(Math.pow(R[d]-P[d],2)+Math.pow(R[d+1]-P[d+1],2)+Math.pow(R[d+2]-P[d+2],2));u[Y]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(O*1.5+Y*.01)*.05}B.geometry.attributes.position.needsUpdate=!0,B.geometry.attributes.alpha.needsUpdate=!0,B.geometry.attributes.velocity.needsUpdate=!0}}var _e=new THREE.Matrix4,Ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function Q(E,Y){var d=a.domElement.getBoundingClientRect();if(!(d.width===0||d.height===0)&&(C.set((E-d.left)/d.width*2-1,-((Y-d.top)/d.height)*2+1),K.setFromCamera(C,e),K.ray.intersectPlane(Ne,Ce))){oe.copy(q),B&&q.copy(Ce).applyMatrix4(_e.copy(B.matrixWorld).invert()),H.subVectors(q,oe);var N=H.length();N>15&&H.multiplyScalar(15/N)}}function ee(E,Y){var d=i.getBoundingClientRect();return E>=d.left&&E<=d.right&&Y>=d.top&&Y<=d.bottom}var k=i.querySelector("#logo-coords"),j=i.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(E){_=E.clientX,x=E.clientY;var Y=ee(E.clientX,E.clientY);if(Y){T=!0,Q(E.clientX,E.clientY);var d=i.getBoundingClientRect(),N=Math.round(E.clientX-d.left),Z=Math.round(E.clientY-d.top);k&&(k.textContent="X: "+N+"PX    Y: "+Z+"PX")}else T=!1,q.set(9999,9999,0);o&&(A+=(E.clientX-v)*.005,h+=(E.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),v=E.clientX,r=E.clientY)},ve=function(E){ee(E.clientX,E.clientY)&&(o=!0,v=E.clientX,r=E.clientY)},ge=function(){o=!1,A=0,h=0,l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",ve),window.addEventListener("mouseup",ge)}function Me(){for(var E=4e3,Y=new THREE.BufferGeometry,d=new Float32Array(E*3),N=new Float32Array(E*3),Z=0;Z<E;Z++){d[Z*3]=(Math.random()-.5)*2200,d[Z*3+1]=(Math.random()-.5)*1800,d[Z*3+2]=-200-Math.random()*1800;var te=g[Math.floor(Math.random()*g.length)],ke=.2+Math.random()*.3;N[Z*3]=te.r*ke,N[Z*3+1]=te.g*ke,N[Z*3+2]=te.b*ke}Y.setAttribute("position",new THREE.BufferAttribute(d,3)),Y.setAttribute("color",new THREE.BufferAttribute(N,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var L=Fe.getContext("2d"),W=L.createRadialGradient(16,16,0,16,16,16);W.addColorStop(0,"rgba(255,255,255,1)"),W.addColorStop(.3,"rgba(255,255,255,0.6)"),W.addColorStop(.7,"rgba(255,255,255,0.15)"),W.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=W,L.fillRect(0,0,32,32);var b=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),U=new THREE.Points(Y,b);return U.userData={positions:d,count:E},n.add(U),U}z();var ue=t?null:Me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';me(De);var Be=new THREE.Clock,Re=!0,Xe=new IntersectionObserver(function(E){Re=E[0].isIntersecting,E[0].isIntersecting&&!fe&&!t&&(fe=!0,k&&(k.style.transform="translateY(0)"),j&&(j.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(i);var he=!1,Le=null,Ae=0;function de(){if(he=!0,clearTimeout(Le),Le=setTimeout(function(){he=!1},150),!t){var E=ee(_,x);E?(T=!0,Q(_,x)):(T=!1,q.set(9999,9999,0))}}window.addEventListener("scroll",de,{passive:!0});var V=null;function ce(){if(V=requestAnimationFrame(ce),!!Re){Ae++;var E=Math.min(Be.getDelta(),.05),Y=Be.elapsedTime;if(t)l+=p*E;else{var d=A-l;d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),l+=d*.12,y+=(h-y)*.12}if(B&&(B.rotation.x=y,B.rotation.y=l,B.position.y=-15),ue){for(var N=ue.userData.positions,Z=0;Z<ue.userData.count;Z++)N[Z*3+1]+=Math.sin(Y*.2+Z)*.05,N[Z*3]+=Math.cos(Y*.15+Z*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-l*35*.35,ue.position.y=y*28*.35}c.position.x=300+Math.sin(Y*.3)*100,c.position.y=350+Math.cos(Y*.2)*80,S.intensity=2+Math.sin(Y*.5)*.4,M.intensity=.8+Math.sin(Y*.4+1)*.3,!(t&&he&&Ae%4!==0)&&(Se(E),a.render(n,e))}}return ce(),function(){cancelAnimationFrame(V),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",ve),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",de),clearTimeout(Le),Xe.disconnect(),n.traverse(function(E){E.geometry&&E.geometry.dispose(),E.material&&(E.material.map&&E.material.map.dispose(),E.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),B=null}}function Vt(i){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",i.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),t.add(c);var S=new THREE.PointLight(5913114,1.2,900);S.position.set(0,200,-300),t.add(S);var f=new THREE.PointLight(16750916,1.3,600);f.position.set(0,-250,200),t.add(f);var M=0,A=Math.PI*2/6,l=8e4,h=.03,y=.95,o=.005,v=12e4,r=null,p,C,K,F,q,oe,H=0,T=!1,_=0,x=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function G(){var Q=new THREE.BufferGeometry;p=new Float32Array(v*3),C=new Float32Array(v*3),K=new Float32Array(v*3),F=new Float32Array(v*3),q=new Float32Array(v),oe=new Float32Array(v),Q.setAttribute("position",new THREE.BufferAttribute(p,3)),Q.setAttribute("color",new THREE.BufferAttribute(F,3)),Q.setAttribute("size",new THREE.BufferAttribute(q,1)),Q.setAttribute("alpha",new THREE.BufferAttribute(oe,1)),Q.setAttribute("velocity",new THREE.BufferAttribute(C,3));var ee=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,j=new THREE.ShaderMaterial({vertexShader:ee,fragmentShader:k,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(Q,j),t.add(r)}function ne(Q,ee){return new Promise(function(k){try{var j=512,fe=document.createElement("canvas");fe.width=fe.height=j;var le=fe.getContext("2d"),ve=new DOMParser().parseFromString(Q,"image/svg+xml"),ge=ve.querySelector("svg");if(!ge){k([]);return}var Me=parseFloat(ge.getAttribute("width")||512),ue=parseFloat(ge.getAttribute("height")||512),De=ge.getAttribute("viewBox");if(De){var Be=De.split(/[\s,]+/);Me=+Be[2],ue=+Be[3]}var Re=Math.min(j/Me,j/ue)*.9,Xe=(j-Me*Re)/2,he=(j-ue*Re)/2;le.save(),le.translate(Xe,he),le.scale(Re,Re),le.fillStyle="white",ve.querySelectorAll("path,rect,circle").forEach(function(d){if(d.tagName==="path"){var N=d.getAttribute("d");N&&le.fill(new Path2D(N))}else d.tagName==="rect"?le.fillRect(+d.getAttribute("x")||0,+d.getAttribute("y")||0,+d.getAttribute("width")||0,+d.getAttribute("height")||0):d.tagName==="circle"&&(le.beginPath(),le.arc(+d.getAttribute("cx")||0,+d.getAttribute("cy")||0,+d.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Le=le.getImageData(0,0,j,j).data,Ae=[],de=0;de<j;de++)for(var V=0;V<j;V++){var ce=(de*j+V)*4;Le[ce+3]>30&&Ae.push({x:V,y:de,a:Le[ce+3]/255})}if(!Ae.length){k([]);return}for(var E=[],ce=0;ce<ee;ce++){var Y=Ae[Math.floor(Math.random()*Ae.length)];E.push({x:(Y.x-j/2)*1.2+(Math.random()-.5)*1.65,y:-(Y.y-j/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Y.a,a:Y.a})}k(E)}catch(d){console.error(d),k([])}})}function re(Q){H=Q.length;for(var ee=0;ee<H;ee++){var k=Q[ee],j=ee*3;p[j]=k.x,p[j+1]=k.y+40,p[j+2]=k.z,C[j]=C[j+1]=C[j+2]=0,K[j]=k.x,K[j+1]=k.y,K[j+2]=k.z;var fe=x[Math.floor(Math.random()*x.length)],le=.7+Math.random()*.4;F[j]=fe.r*le,F[j+1]=fe.g*le,F[j+2]=fe.b*le,q[ee]=1.8+Math.random()*3.8,oe[ee]=.3+(k.a||.7)*.75}r.geometry.setDrawRange(0,H),["position","color","size","alpha"].forEach(function(ve){r.geometry.attributes[ve].needsUpdate=!0}),T=!0}function $(Q){return ne(Q,Math.min(v,l)).then(function(ee){ee.length&&r&&re(ee)})}function J(Q){if(!(!T||!H)){_+=Q;for(var ee=0;ee<H;ee++){var k=ee*3,j=ee*1.37;C[k]+=Math.sin(_*.4+j)*.008+Math.sin(_*1.1+j*2.3)*.003,C[k+1]+=Math.cos(_*.35+j*.7)*.008+Math.sin(_*.9+j*1.5)*.004,C[k+2]+=Math.sin(_*.25+j*1.1)*.004,C[k+1]-=h*.06,C[k]+=Math.sin(_*.25+p[k+1]*.008)*o*.6,C[k+2]+=Math.cos(_*.3+p[k]*.008)*o*.3;var fe=K[k],le=K[k+1]+40,ve=K[k+2],ge=fe-p[k],Me=le-p[k+1],ue=ve-p[k+2],De=Math.sqrt(ge*ge+Me*Me+ue*ue),Be=(ee*48271&65535)/65535,Re=.003+Be*.003,Xe=1+Math.min(De*.002,.5),he=Re*Xe;C[k]+=ge*he,C[k+1]+=Me*he,C[k+2]+=ue*he;var Le=(ee*16807&65535)/65535,Ae=y*(.92+Le*.06);C[k]*=Ae,C[k+1]*=Ae,C[k+2]*=Ae,p[k]+=C[k],p[k+1]+=C[k+1],p[k+2]+=C[k+2];var de=Math.sqrt(Math.pow(p[k]-K[k],2)+Math.pow(p[k+1]-K[k+1],2)+Math.pow(p[k+2]-K[k+2],2));oe[ee]=.15+.55*(1-Math.min(de*.005,1))+Math.sin(_*1.5+ee*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}G();for(var B=4e3,R=new THREE.BufferGeometry,w=new Float32Array(B*3),P=new Float32Array(B*3),m=0;m<B;m++){w[m*3]=(Math.random()-.5)*2200,w[m*3+1]=(Math.random()-.5)*1800,w[m*3+2]=-200-Math.random()*1800;var s=x[Math.floor(Math.random()*x.length)],u=.2+Math.random()*.3;P[m*3]=s.r*u,P[m*3+1]=s.g*u,P[m*3+2]=s.b*u}R.setAttribute("position",new THREE.BufferAttribute(w,3)),R.setAttribute("color",new THREE.BufferAttribute(P,3));var D=document.createElement("canvas");D.width=D.height=32;var X=D.getContext("2d"),O=X.createRadialGradient(16,16,0,16,16,16);O.addColorStop(0,"rgba(255,255,255,1)"),O.addColorStop(.3,"rgba(255,255,255,0.6)"),O.addColorStop(.7,"rgba(255,255,255,0.15)"),O.addColorStop(1,"rgba(255,255,255,0)"),X.fillStyle=O,X.fillRect(0,0,32,32);var g=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(D),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),z=new THREE.Points(R,g);t.add(z);var I='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';$(I);var ie=new THREE.Clock,me=!0,Se=new IntersectionObserver(function(Q){me=Q[0].isIntersecting},{threshold:0});Se.observe(i);var _e=i.querySelectorAll("#logo-coords, #logo-drag-label");_e.forEach(function(Q){Q.parentElement.style.display="none"});var Ne=null;function Ce(){if(Ne=requestAnimationFrame(Ce),!!me){var Q=Math.min(ie.getDelta(),.05),ee=ie.elapsedTime;M+=A*Q,r&&(r.rotation.y=M,r.position.y=5,r.scale.setScalar(.85));for(var k=0;k<B;k++)w[k*3+1]+=Math.sin(ee*.2+k)*.05,w[k*3]+=Math.cos(ee*.15+k*.5)*.03;R.attributes.position.needsUpdate=!0,z.rotation.y+=1e-4,z.position.x=-M*35*.35,a.position.x=300+Math.sin(ee*.3)*100,a.position.y=350+Math.cos(ee*.2)*80,c.intensity=2+Math.sin(ee*.5)*.4,f.intensity=.8+Math.sin(ee*.4+1)*.3,J(Q),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(Ne),Se.disconnect(),t.traverse(function(Q){Q.geometry&&Q.geometry.dispose(),Q.material&&(Q.material.map&&Q.material.map.dispose(),Q.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var qt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Gt(i){let t=i.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(qt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Vn(t):Ot(t)}),function(){n=!0,e&&e()}}function Wt(i){let t=i.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(qt).then(function(){n||(e=Vt(t))}),function(){n=!0,e&&e()}}function Vn(i){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),n.add(S);var f=new THREE.PointLight(5913114,1.2,900);f.position.set(0,200,-300),n.add(f);var M=new THREE.PointLight(16750916,1.3,600);M.position.set(0,-250,200),n.add(M);var A=0,l=0,h=0,y=0,o=!1,v=0,r=0,p=Math.PI*2/6,C=new THREE.Vector2(9999,9999),K=new THREE.Raycaster,F=120,q=new THREE.Vector3(9999,9999,0),oe=new THREE.Vector3(9999,9999,0),H=new THREE.Vector3,T=!1,_=0,x=0,G=8e4,ne=.03,re=.95,$=.005,J=12e4,B=null,R,w,P,m,s,u,D=0,X=!1,O=!1,g=0,z=0,I=null,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function me(){var L=new THREE.BufferGeometry;R=new Float32Array(J*3),w=new Float32Array(J*3),P=new Float32Array(J*3),m=new Float32Array(J*3),s=new Float32Array(J),u=new Float32Array(J),L.setAttribute("position",new THREE.BufferAttribute(R,3)),L.setAttribute("color",new THREE.BufferAttribute(m,3)),L.setAttribute("size",new THREE.BufferAttribute(s,1)),L.setAttribute("alpha",new THREE.BufferAttribute(u,1)),L.setAttribute("velocity",new THREE.BufferAttribute(w,3));var W=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=new THREE.ShaderMaterial({vertexShader:W,fragmentShader:b,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});B=new THREE.Points(L,U),n.add(B)}function Se(L,W){return new Promise(function(b){try{var U=512,se=document.createElement("canvas");se.width=se.height=U;var ae=se.getContext("2d"),ze=new DOMParser().parseFromString(L,"image/svg+xml"),be=ze.querySelector("svg");if(!be){b([]);return}var Te=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ie=be.getAttribute("viewBox");if(Ie){var Ee=Ie.split(/[\s,]+/);Te=+Ee[2],ye=+Ee[3]}var Ge=Math.min(U/Te,U/ye)*.9,Ue=(U-Te*Ge)/2,xe=(U-ye*Ge)/2;ae.save(),ae.translate(Ue,xe),ae.scale(Ge,Ge),ae.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(we){if(we.tagName==="path"){var $e=we.getAttribute("d");$e&&ae.fill(new Path2D($e))}else we.tagName==="rect"?ae.fillRect(+we.getAttribute("x")||0,+we.getAttribute("y")||0,+we.getAttribute("width")||0,+we.getAttribute("height")||0):we.tagName==="circle"&&(ae.beginPath(),ae.arc(+we.getAttribute("cx")||0,+we.getAttribute("cy")||0,+we.getAttribute("r")||0,0,Math.PI*2),ae.fill())}),ae.restore();for(var He=ae.getImageData(0,0,U,U).data,Oe=[],Je=0;Je<U;Je++)for(var Qe=0;Qe<U;Qe++){var et=(Je*U+Qe)*4;He[et+3]>30&&Oe.push({x:Qe,y:Je,a:He[et+3]/255})}if(!Oe.length){b([]);return}for(var at=[],et=0;et<W;et++){var Ye=Oe[Math.floor(Math.random()*Oe.length)];at.push({x:(Ye.x-U/2)*1.2+(Math.random()-.5)*1.65,y:-(Ye.y-U/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ye.a,a:Ye.a})}b(at)}catch(we){console.error(we),b([])}})}function _e(L){D=L.length;for(var W=0;W<D;W++){var b=L[W],U=W*3;R[U]=b.x,R[U+1]=b.y+40,R[U+2]=b.z,w[U]=w[U+1]=w[U+2]=0,P[U]=b.x,P[U+1]=b.y,P[U+2]=b.z;var se=ie[Math.floor(Math.random()*ie.length)],ae=.7+Math.random()*.4;m[U]=se.r*ae,m[U+1]=se.g*ae,m[U+2]=se.b*ae,s[W]=1.8+Math.random()*3.8,u[W]=.3+(b.a||.7)*.75}B.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(ze){B.geometry.attributes[ze].needsUpdate=!0}),X=!0,O=!1,g=1}function Ne(L){return Se(L,Math.min(J,G)).then(function(W){W.length&&B&&_e(W)})}function Ce(L){if(!(!X||!D)){z+=L;for(var W=0;W<D;W++){var b=W*3,U=W*1.37;if(w[b]+=Math.sin(z*.4+U)*.008+Math.sin(z*1.1+U*2.3)*.003,w[b+1]+=Math.cos(z*.35+U*.7)*.008+Math.sin(z*.9+U*1.5)*.004,w[b+2]+=Math.sin(z*.25+U*1.1)*.004,w[b+1]-=ne*.06,w[b]+=Math.sin(z*.25+R[b+1]*.008)*$*.6,w[b+2]+=Math.cos(z*.3+R[b]*.008)*$*.3,T&&de==="interactive"){var se=R[b]-q.x,ae=R[b+1]-q.y,ze=R[b+2]-q.z,be=se*se+ae*ae+ze*ze,Te=F*F;if(be<Te&&be>.25){var ye=Math.sqrt(be),Ie=ye/F,Ee=(W*2654435761&65535)/65535,Ge=.6+Ee*.8,Ue=Math.pow(1-Ie,1.5+Ee),xe=1+Math.min(H.length()*.12,1),He=Ue*Ge*1.2*xe,Oe=1/ye;w[b]+=se*Oe*He,w[b+1]+=ae*Oe*He,w[b+2]+=ze*Oe*He*.2;var Je=.02+Ee*.06;w[b]+=H.x*Ue*Je,w[b+1]+=H.y*Ue*Je;var Qe=Ue*.15;w[b]+=(Ee-.5)*Qe,w[b+1]+=((W*48271&65535)/65535-.5)*Qe}}var et=P[b],at=P[b+1]+40,Ye=P[b+2],we=et-R[b],$e=at-R[b+1],st=Ye-R[b+2],kn=Math.sqrt(we*we+$e*$e+st*st),Dn=(W*48271&65535)/65535,In=.003+Dn*.003,Un=1+Math.min(kn*.002,.5),ht=In*Un;w[b]+=we*ht,w[b+1]+=$e*ht,w[b+2]+=st*ht;var Hn=(W*16807&65535)/65535,gt=re*(.92+Hn*.06);w[b]*=gt,w[b+1]*=gt,w[b+2]*=gt,R[b]+=w[b],R[b+1]+=w[b+1],R[b+2]+=w[b+2];var _n=Math.sqrt(Math.pow(R[b]-P[b],2)+Math.pow(R[b+1]-P[b+1],2)+Math.pow(R[b+2]-P[b+2],2));u[W]=.15+.55*(1-Math.min(_n*.005,1))+Math.sin(z*1.5+W*.01)*.05}B.geometry.attributes.position.needsUpdate=!0,B.geometry.attributes.alpha.needsUpdate=!0,B.geometry.attributes.velocity.needsUpdate=!0}}var Q=new THREE.Matrix4,ee=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),k=new THREE.Vector3;function j(L,W){var b=a.domElement.getBoundingClientRect();if(!(b.width===0||b.height===0)&&(C.set((L-b.left)/b.width*2-1,-((W-b.top)/b.height)*2+1),K.setFromCamera(C,e),K.ray.intersectPlane(ee,k))){oe.copy(q),B&&q.copy(k).applyMatrix4(Q.copy(B.matrixWorld).invert()),H.subVectors(q,oe);var U=H.length();U>15&&H.multiplyScalar(15/U)}}var fe=null;function le(){return fe||(fe=i.closest('[data-flip-element="target"]')||i),fe}function ve(L,W){var b=le().getBoundingClientRect();return L>=b.left&&L<=b.right&&W>=b.top&&W<=b.bottom}var ge=i.querySelector("#logo-coords"),Me=i.querySelector("#logo-drag-label"),ue=!1;function De(L){if(_=L.clientX,x=L.clientY,t||de!=="interactive"){T=!1,q.set(9999,9999,0);return}var W=ve(L.clientX,L.clientY);if(W){T=!0,j(L.clientX,L.clientY);var b=le().getBoundingClientRect(),U=Math.round(L.clientX-b.left),se=Math.round(L.clientY-b.top);ge&&(ge.textContent="X: "+U+"PX    Y: "+se+"PX")}else T=!1,q.set(9999,9999,0);o&&(A+=(L.clientX-v)*.005,h+=(L.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),v=L.clientX,r=L.clientY)}function Be(L){t||de!=="interactive"||ve(L.clientX,L.clientY)&&(o=!0,v=L.clientX,r=L.clientY)}function Re(){t||(o=!1,A=0,h=0,l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Re);function Xe(){for(var L=4e3,W=new THREE.BufferGeometry,b=new Float32Array(L*3),U=new Float32Array(L*3),se=0;se<L;se++){b[se*3]=(Math.random()-.5)*2200,b[se*3+1]=(Math.random()-.5)*1800,b[se*3+2]=-200-Math.random()*1800;var ae=ie[Math.floor(Math.random()*ie.length)],ze=.2+Math.random()*.3;U[se*3]=ae.r*ze,U[se*3+1]=ae.g*ze,U[se*3+2]=ae.b*ze}W.setAttribute("position",new THREE.BufferAttribute(b,3)),W.setAttribute("color",new THREE.BufferAttribute(U,3));var be=document.createElement("canvas");be.width=be.height=32;var Te=be.getContext("2d"),ye=Te.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=ye,Te.fillRect(0,0,32,32);var Ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ee=new THREE.Points(W,Ie);return Ee.userData={positions:b,count:L},n.add(Ee),Ee}me();var he=Xe(),Le='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Ne(Le);var Ae=new THREE.Clock,de="spin",V=null;function ce(){if(t){de="spin";return}if(V===null){var L=document.querySelector(".scaling-element-video");V=L&&getComputedStyle(L).display!=="none"}if(!V){de="spin";return}var W=window._flipProgress||0;W>.85?de="interactive":W>.7?de="transition":de="spin"}var E="spin",Y=!0,d=new IntersectionObserver(function(L){Y=L[0].isIntersecting},{threshold:0});d.observe(i);var N=!1,Z=null,te=0;function ke(){N=!0,clearTimeout(Z),Z=setTimeout(function(){N=!1},150);var L=ve(_,x);L?(T=!0,j(_,x)):(T=!1,q.set(9999,9999,0))}window.addEventListener("scroll",ke,{passive:!0});function Fe(){if(I=requestAnimationFrame(Fe),!!Y){te++;var L=Math.min(Ae.getDelta(),.05),W=Ae.elapsedTime;ce(),E==="interactive"&&de!=="interactive"&&(T=!1,q.set(9999,9999,0),o=!1);var b=de==="transition"||de==="interactive";if(b&&!ue?(ue=!0,Me&&(Me.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!b&&ue&&(ue=!1,Me&&(Me.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),E=de,T&&!ve(_,x)&&(T=!1,q.set(9999,9999,0)),de==="spin")l+=p*L,y+=(0-y)*.05;else if(de==="transition")l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),l+=(0-l)*.025,y+=(0-y)*.025;else{var U=A-l;U=U%(Math.PI*2),U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),l+=U*.12,y+=(h-y)*.12}B&&(B.rotation.x=y,B.rotation.y=l,B.scale.setScalar(1),B.position.y=-15);for(var se=he.userData.positions,ae=0;ae<he.userData.count;ae++)se[ae*3+1]+=Math.sin(W*.2+ae)*.05,se[ae*3]+=Math.cos(W*.15+ae*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-l*35*.35,he.position.y=y*28*.35,c.position.x=300+Math.sin(W*.3)*100,c.position.y=350+Math.cos(W*.2)*80,S.intensity=2+Math.sin(W*.5)*.4,M.intensity=.8+Math.sin(W*.4+1)*.3,!(t&&N&&te%4!==0)&&(Ce(L),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(I),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",ke),clearTimeout(Z),d.disconnect(),n.traverse(function(L){L.geometry&&L.geometry.dispose(),L.material&&(L.material.map&&L.material.map.dispose(),L.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),B=null}}function Nt(i){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),c=Array.from(t.querySelectorAll("[data-load-text]")),S=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),f=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(S.length&&f.set(S,{autoAlpha:1},0),c.length>=2){let M=new SplitText(c[0],{type:"lines,chars",mask:"lines"}),A=new SplitText(c[1],{type:"lines,chars",mask:"lines"});gsap.set([M.chars,A.chars],{autoAlpha:0,yPercent:125}),gsap.set(c,{autoAlpha:1}),f.to(M.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),f.to(M.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),f.to(A.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),f.to(A.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return f}function Xt(i){let n=[...(i||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(l=>{let h=l.parentElement;h&&(l.style.whiteSpace="nowrap",e.has(h)||e.set(h,[]),e.get(h).push(l))});function a(l){let h=getComputedStyle(l);return l.clientWidth-parseFloat(h.paddingLeft)-parseFloat(h.paddingRight)}function c(l,h){if(h<=0)return;let y=parseFloat(getComputedStyle(l).fontSize)||16;for(let o=0;o<5;o++){let v=l.getBoundingClientRect().width;if(v<=0)break;let r=h/v;if(Math.abs(r-1)<.002)break;y*=r,l.style.fontSize=y+"px"}}function S(){e.forEach((l,h)=>{let y=a(h);l.forEach(o=>c(o,y))})}let f=null;function M(){f||(f=requestAnimationFrame(()=>{f=null,S()}))}let A;return window.ResizeObserver&&(A=new ResizeObserver(M),e.forEach((l,h)=>A.observe(h))),window.addEventListener("resize",M),S(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(S),()=>{f&&cancelAnimationFrame(f),A&&A.disconnect(),window.removeEventListener("resize",M),n.forEach(l=>{l.style.whiteSpace="",l.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},Yt=.08,qn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},$t={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function Gn(i,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:i,transformOrigin:t}),n}function Kt(i){var t=i.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var c=a.getAttribute("data-marker-direction")||"right",S=a.getAttribute("data-marker-theme")||"#000000",f=a.getAttribute("data-marker-scroll-start")||"top 90%",M=S.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(S).trim()||S,A=$t[c]||$t.right,l=qn[a.getAttribute("data-highlight-marker-reveal")]||null;l&&(M=l.bar);var h=a.closest("[data-cursor-label]"),y={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,v=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){y.timeline&&y.timeline.kill(),y.scrollTrigger&&y.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(T){T.remove()}),y.listeners.forEach(function(T){T.el.removeEventListener(T.type,T.fn)}),y.listeners=[],o=!1;var p=r.lines,C=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(p.forEach(function(T,_){gsap.set(T,{position:"relative",overflow:"hidden"});var x=Gn(M,A.origin);gsap.set(x,{[A.prop]:0}),T.appendChild(x),l&&(gsap.set(T,{zIndex:0,color:l.text}),gsap.set(x,{zIndex:-1})),C.to(x,{[A.prop]:1,duration:Ve.duration,ease:Ve.ease},_*Yt);var G=function(){o&&(gsap.to(x,{[A.prop]:0,duration:Ve.duration,ease:Ve.ease}),l&&gsap.to(T,{color:l.hoverText,duration:Ve.duration,ease:Ve.ease}))},ne=function(){o&&(gsap.to(x,{[A.prop]:1,duration:Ve.duration,ease:Ve.ease}),l&&gsap.to(T,{color:l.text,duration:Ve.duration,ease:Ve.ease}))};!l&&e&&(T.addEventListener("mouseenter",G),T.addEventListener("mouseleave",ne),y.listeners.push({el:T,type:"mouseenter",fn:G},{el:T,type:"mouseleave",fn:ne}))}),y.timeline=C,h){C.kill();var K=a.querySelectorAll(".highlight-marker-bar"),F=function(T){gsap.to(K,{[A.prop]:T,duration:Ve.duration,ease:Ve.ease,stagger:Yt,overwrite:!0})},q=function(){F(1)},oe=function(){F(0)};h.addEventListener("cursorlabel:enter",q),h.addEventListener("cursorlabel:leave",oe),y.listeners.push({el:h,type:"cursorlabel:enter",fn:q},{el:h,type:"cursorlabel:leave",fn:oe});return}var H=ScrollTrigger.create({trigger:a,start:f,once:!0,onEnter:function(){C.play()}});y.scrollTrigger=H}});y.split=v,n.push(y)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(c){c.el.removeEventListener(c.type,c.fn)}),a.split&&a.split.revert()})}}function Zt(i){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=i.querySelector("[data-cursor-marquee-status]");if(!a)return;let c=a.querySelectorAll("[data-cursor-marquee-text-target]"),S=i.querySelectorAll("[data-cursor-marquee-text]");if(!S.length)return;let f=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),M=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),A=null,l=h=>{f(h.clientX),M(h.clientY)};return window.addEventListener("pointermove",l,{passive:!0}),S.forEach(h=>{h.addEventListener("mouseenter",()=>{A&&clearTimeout(A);let y=h.getAttribute("data-cursor-marquee-text")||"",o=(y.length||1)/e;c.forEach(v=>{v.textContent=y,v.style.animationPlayState="running",v.style.animationDuration=o+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),h.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),A&&clearTimeout(A),A=setTimeout(()=>{c.forEach(y=>{y.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",l),clearTimeout(A),gsap.killTweensOf(a)}}function jt(i){i.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function Jt(i){let t=i.querySelectorAll("[data-flip-element='wrapper']"),n=i.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(f){window._flipProgress=f.progress}}}),t.forEach(function(f,M){let A=M+1;if(A<t.length){let l=t[A],h=l.getBoundingClientRect(),y=f.getBoundingClientRect(),o=h.top+window.pageYOffset+l.offsetHeight/2,v=y.top+window.pageYOffset+f.offsetHeight/2,r=o-v;e.add(Flip.fit(n,l,{duration:r,ease:"none"}))}})}a();let c,S=function(){clearTimeout(c),c=setTimeout(function(){a()},100)};return window.addEventListener("resize",S),function(){clearTimeout(c),window.removeEventListener("resize",S),e&&e.kill()}}var Wn="150%";function Nn(i){let t=[];return i.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.textContent=a,n.append(c),t.push(c)}}),t}var Et=new WeakMap;function Qt(i){let t=i.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(c){return Array.from(c.querySelectorAll("textPath")).map(function(S){return S.textContent})}),a=n.map(Nn);return a.forEach(function(c){gsap.set(c,{fillOpacity:0})}),Et.set(i,{wrap:t,lines:n,lineChars:a}),function(){Et.delete(i),n.forEach(function(c,S){c.querySelectorAll("textPath").forEach(function(f,M){f.textContent=e[S][M]})})}}function en(i){let t=Et.get(i);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Wn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let c=t.lineChars[a];c.length&&n.fromTo(c,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/c.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function wt(i){var t=[];function n(o,v,r,p){o.addEventListener(v,r,p),t.push(function(){o.removeEventListener(v,r,p)})}i.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var v=o.getAttribute("data-player-src");if(!v)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(V){}try{r.removeAttribute("src"),r.load()}catch(V){}function p(V){o.getAttribute("data-player-status")!==V&&o.setAttribute("data-player-status",V)}function C(V){r.muted=!!V,o.setAttribute("data-player-muted",r.muted?"true":"false")}function K(V){o.setAttribute("data-player-fullscreen",V?"true":"false")}function F(V){o.setAttribute("data-player-activated",V?"true":"false")}o.hasAttribute("data-player-activated")||F(!1);var q=o.querySelector("[data-player-timeline]"),oe=o.querySelector("[data-player-progress]"),H=o.querySelector("[data-player-buffered]"),T=o.querySelector("[data-player-timeline-handle]"),_=o.querySelectorAll("[data-player-time-duration]"),x=o.querySelectorAll("[data-player-time-progress]"),G=o.getAttribute("data-player-update-size"),ne=o.getAttribute("data-player-lazy"),re=ne==="true",$=ne==="meta",J=o.getAttribute("data-player-autoplay")==="true",B=o.getAttribute("data-player-muted")==="true",R=!1;J?(C(!0),r.loop=!0):C(B),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),J&&(r.autoplay=!1);var w=!!r.canPlayType("application/vnd.apple.mpegurl"),P=w&&"ManagedMediaSource"in window,m=!!(window.Hls&&Hls.isSupported())&&!P;if(G==="true"&&!$&&!re){var s=r.preload;r.preload="metadata";var u=function(){A(o,G,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",u),r.preload=s||""};n(r,"loadedmetadata",u,{once:!0}),r.src=v}function D(){y(v,m).then(function(V){V.width&&V.height&&A(o,G,V.width,V.height),_.length&&isFinite(V.duration)&&V.duration>0&&c(_,a(V.duration)),M(o,R)})}var X=!1,O=!1,g="";function z(){if(!X){if(X=!0,o._hls){try{o._hls.destroy()}catch(ce){}o._hls=null}if(P)r.preload=re||$?"auto":r.preload,r.src=v,n(r,"loadedmetadata",function(){M(o,R),G==="true"&&A(o,G,r.videoWidth,r.videoHeight),_.length&&c(_,a(r.duration))},{once:!0});else if(m){var V=new Hls({maxBufferLength:10});V.attachMedia(r),V.on(Hls.Events.MEDIA_ATTACHED,function(){V.loadSource(v)}),V.on(Hls.Events.MANIFEST_PARSED,function(){if(M(o,R),G==="true"){var ce=V.levels||[],E=S(ce);E&&E.width&&E.height&&A(o,G,E.width,E.height)}}),V.on(Hls.Events.LEVEL_LOADED,function(ce,E){E&&E.details&&isFinite(E.details.totalduration)&&_.length&&c(_,a(E.details.totalduration))}),o._hls=V}else r.src=v}}$?(D(),r.preload="none"):re?r.preload="none":z();function I(){O=!0,r.paused||r.ended?((re||$)&&!X&&z(),R=!0,g="",p("loading"),f(r)):(g="manual",r.pause())}function ie(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function me(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function _e(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Ne(){me()||r.webkitDisplayingFullscreen?_e():Se()}n(document,"fullscreenchange",function(){K(me())}),n(document,"webkitfullscreenchange",function(){K(me())}),n(r,"webkitbeginfullscreen",function(){K(!0)}),n(r,"webkitendfullscreen",function(){K(!1)}),n(o,"click",function(V){var ce=V.target.closest("[data-player-control]");if(!(!ce||!o.contains(ce))){var E=ce.getAttribute("data-player-control");E==="play"||E==="pause"||E==="playpause"?I():E==="mute"?ie():E==="fullscreen"&&Ne()}});function Ce(){_.length&&c(_,a(r.duration)),x.length&&c(x,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),l(o,G,r)}),n(r,"loadeddata",function(){l(o,G,r)}),n(r,"playing",function(){l(o,G,r)}),n(r,"durationchange",Ce);var Q;function ee(){if(r.duration){var V=r.currentTime/r.duration*100;oe&&(oe.style.transform="translateX("+(-100+V)+"%)"),T&&(T.style.left=V+"%")}}function k(){ee(),!r.paused&&!r.ended&&(Q=requestAnimationFrame(k))}function j(){if(!(!H||!r.duration||!r.buffered.length)){var V=r.buffered.end(r.buffered.length-1),ce=V/r.duration*100;H.style.transform="translateX("+(-100+ce)+"%)"}}if(n(r,"progress",j),n(r,"loadedmetadata",j),n(r,"durationchange",j),n(r,"play",function(){F(!0),cancelAnimationFrame(Q),k(),p("playing")}),n(r,"playing",function(){R=!1,p("playing")}),n(r,"pause",function(){R=!1,cancelAnimationFrame(Q),ee(),p("paused")}),n(r,"waiting",function(){p("loading")}),n(r,"canplay",function(){M(o,R)}),n(r,"ended",function(){R=!1,cancelAnimationFrame(Q),ee(),p("paused"),F(!1)}),q){let V=function(Z){ue||(ue=q.getBoundingClientRect());var te=(Z-ue.left)/ue.width;return te<0&&(te=0),te>1&&(te=1),te},ce=function(Z){if(r.duration){var te=Z*100;oe&&(oe.style.transform="translateX("+(-100+te)+"%)"),T&&(T.style.left=te+"%"),x.length&&c(x,a(Z*r.duration))}},E=function(Z){r.duration&&(Z-ge<Me||(ge=Z,r.currentTime=ve))},Y=function(Z){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),o.setAttribute("data-timeline-drag","true"),ue=q.getBoundingClientRect();var te=V(Z.clientX);ve=te*r.duration,ce(te),E(performance.now()),q.setPointerCapture&&q.setPointerCapture(Z.pointerId),window.addEventListener("pointermove",d,{passive:!1}),window.addEventListener("pointerup",N,{passive:!0}),Z.preventDefault()}},d=function(Z){if(fe){var te=V(Z.clientX);ve=te*r.duration,ce(te),E(performance.now()),Z.preventDefault()}},N=function(){fe&&(fe=!1,o.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=ve,le?f(r):(ee(),Ce()),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",N))};var fe=!1,le=!1,ve=0,ge=0,Me=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(q,"pointerdown",Y,{passive:!1}),T&&n(T,"pointerdown",Y,{passive:!1})}var De,Be=3e3;function Re(V){o.getAttribute("data-player-hover")!==V&&o.setAttribute("data-player-hover",V)}function Xe(){clearTimeout(De),De=setTimeout(function(){Re("idle")},Be)}function he(){Re("active"),Xe()}n(o,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var Le=!1;function Ae(V){var ce=o.getBoundingClientRect();V.clientX>=ce.left&&V.clientX<=ce.right&&V.clientY>=ce.top&&V.clientY<=ce.bottom&&he()}if(n(o,"pointerenter",function(){he(),Le||(Le=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(o,"pointerleave",function(){Re("idle"),clearTimeout(De),Le&&(Le=!1,window.removeEventListener("pointermove",Ae))}),J){var de=new IntersectionObserver(function(V){V.forEach(function(ce){var E=ce.isIntersecting&&ce.intersectionRatio>0;E?((re||$)&&!X&&z(),r.paused?(g="",R=!0,p("loading"),f(r)):p("playing")):!r.paused&&!r.ended&&(g="io",r.pause(),p("paused"))})},{threshold:.1});de.observe(o)}t.push(function(){if(cancelAnimationFrame(Q),clearTimeout(De),de&&de.disconnect(),o._hls){try{o._hls.destroy()}catch(V){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(V){}})});function e(o){return(o<10?"0":"")+o}function a(o){if(!isFinite(o)||o<0)return"00:00";var v=Math.floor(o),r=Math.floor(v/3600),p=Math.floor(v%3600/60),C=v%60;return r>0?r+":"+e(p)+":"+e(C):e(p)+":"+e(C)}function c(o,v){o.forEach(function(r){r.textContent=v})}function S(o){return!o||!o.length?null:o.reduce(function(v,r){return(r.width||0)>(v.width||0)?r:v},o[0])}function f(o){var v=o.play();v&&typeof v.then=="function"&&v.catch(function(){})}function M(o,v){!v&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function A(o,v,r,p){if(!(v!=="true"||!r||!p)){var C=o.querySelector("[data-player-before]");C&&(C.style.paddingTop=p/r*100+"%")}}function l(o,v,r){if(v==="true"){var p=o.querySelector("[data-player-before]");if(p){var C=p.style.paddingTop&&p.style.paddingTop!=="0%";!C&&r.videoWidth&&r.videoHeight&&A(o,v,r.videoWidth,r.videoHeight)}}}function h(o,v){try{return new URL(v,o).toString()}catch(r){return v}}function y(o,v){return new Promise(function(r){if(v&&window.Hls&&Hls.isSupported())try{var p=new Hls,C={width:0,height:0,duration:NaN},K=!1,F=!1;p.on(Hls.Events.MANIFEST_PARSED,function(H,T){var _=T&&T.levels||p.levels||[],x=S(_);x&&x.width&&x.height&&(C.width=x.width,C.height=x.height,K=!0)}),p.on(Hls.Events.LEVEL_LOADED,function(H,T){T&&T.details&&isFinite(T.details.totalduration)&&(C.duration=T.details.totalduration,F=!0)}),p.on(Hls.Events.ERROR,function(){try{p.destroy()}catch(H){}r(C)}),p.on(Hls.Events.LEVEL_LOADED,function(){try{p.destroy()}catch(H){}r(C)}),p.loadSource(o);return}catch(H){r({width:0,height:0,duration:NaN});return}function q(H){for(var T=H.split(/\r?\n/),_=0,x=0,G=null,ne=null,re=0;re<T.length;re++){var $=T[re];if($.indexOf("#EXT-X-STREAM-INF:")===0)ne=$;else if(ne&&$&&$[0]!=="#"){G||(G=$.trim());var J=/RESOLUTION=(\d+)x(\d+)/.exec(ne);if(J){var B=parseInt(J[1],10),R=parseInt(J[2],10);B>_&&(_=B,x=R)}ne=null}}return{bestW:_,bestH:x,media:G}}function oe(H){for(var T=0,_=/#EXTINF:([\d.]+)/g,x;x=_.exec(H);)T+=parseFloat(x[1]);return T}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(H){if(!H.ok)throw new Error("master");return H.text()}).then(function(H){var T=q(H);if(!T.media){r({width:T.bestW||0,height:T.bestH||0,duration:NaN});return}var _=h(o,T.media);return fetch(_,{credentials:"omit",cache:"no-store"}).then(function(x){if(!x.ok)throw new Error("media");return x.text()}).then(function(x){r({width:T.bestW||0,height:T.bestH||0,duration:oe(x)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var Xn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Yn="(min-width: 768px)";function nn(i){if(!i.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=wt(i),n=tn(i);else{let e=!1;return ct(Xn).catch(function(){}).then(function(){e||(t=wt(i),n=tn(i))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function tn(i){if(!i.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",c=!1,S,f,M,A,l,h,y="",o="",v="",r=(s,u=i)=>u.querySelector(s),p=s=>r(`[data-mini-showreel-lightbox="${s}"]`),C=s=>r(`[data-mini-showreel-player="${s}"]`),K=s=>s.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",s)||s,F=(s,u)=>{let D=s.width,X=D/u;return X>s.height&&(X=s.height,D=X*u),{left:s.left+(s.width-D)/2,top:s.top+(s.height-X)/2,width:D,height:X}},q=s=>{let u=K(s).getBoundingClientRect(),D=s.getBoundingClientRect(),X=D.width>0&&D.height>0?D.width/D.height:16/9;return F(u,X)},oe=(s,u)=>gsap.set(s,{position:"fixed",left:u.left,top:u.top,width:u.width,height:u.height,margin:0,x:0,y:0});function H(s){a&&i.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(u=>u.setAttribute("data-mini-showreel-status",s))}function T(){o=(S==null?void 0:S.style.zIndex)||"",v=(f==null?void 0:f.style.zIndex)||"",S&&(S.style.zIndex=String(e)),f&&(f.style.zIndex=String(e))}function _(){S&&(S.style.zIndex=o),f&&(f.style.zIndex=v)}function x(s){let u=C(s);if(!u)return;let D=u.querySelector("[data-bunny-player-init]"),X=u.querySelector("video");if(X){if(D){let O=D.querySelector('[data-player-control="play"], [data-player-control="playpause"]');O&&(X.paused||X.ended)&&O.click();return}try{X.play()}catch(O){}}}function G(s){let u=C(s);if(!u)return;let D=u.querySelector("[data-bunny-player-init]"),X=u.querySelector("video");X&&(X.muted=!0,D&&D.setAttribute("data-player-muted","true"),(X.paused||X.ended)&&x(s))}function ne(){_(),a="",c=!1,S=f=M=A=l=h=null,y="",o="",v="",Pe.start()}function re(s){if(!s||c||(S=p(s),f=C(s),!S||!f)||(M=r("[data-mini-showreel-target]",S),!M))return;a=s,c=!0,Pe.stop(),f.dataset.flipId=a,y=f.style.cssText||"",A=f.parentElement,l=f.nextSibling,T(),H("active"),x(a);let u=Flip.getState(f),D=q(M);S.appendChild(f),oe(f,D),h=Flip.from(u,{duration:t,ease:n,absolute:!0,scale:!1})}function $(s){!c||!f||s&&s!==a||(G(a),H("not-active"),h&&h.kill(),h=Flip.fit(f,A,{duration:t,ease:n,scale:!1,onComplete:()=>{A.insertBefore(f,l),f.style.cssText=y,ne()}}))}function J(){!c||!f||(h&&h.kill(),G(a),H("not-active"),A.insertBefore(f,l),f.style.cssText=y,ne())}function B(){!c||!f||!M||oe(f,q(M))}function R(s){let u=s.target.closest("[data-mini-showreel-open]");u&&(s.preventDefault(),re(u.getAttribute("data-mini-showreel-open")||""))}function w(s){let u=s.target.closest("[data-mini-showreel-close]");u&&(s.preventDefault(),$(u.getAttribute("data-mini-showreel-close")||""))}function P(s){s.key==="Escape"&&$("")}let m=gsap.matchMedia();return m.add(Yn,function(){return i.addEventListener("click",R),document.addEventListener("click",w),window.addEventListener("keydown",P),window.addEventListener("resize",B),function(){J(),i.removeEventListener("click",R),document.removeEventListener("click",w),window.removeEventListener("keydown",P),window.removeEventListener("resize",B)}}),function(){m.revert(),J()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",i=>{it.x=i.clientX,it.y=i.clientY,it.known=!0},{passive:!0});function Ze(i){let t=e=>i(e.clientX,e.clientY),n=()=>{it.known&&i(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,We=1080,St="#E5E5E5",Tt="#000000",rn="http://www.w3.org/2000/svg";function on(i){let t=i.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(rn,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${We}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(m,s)=>{let u=document.createElementNS(rn,m);return u.setAttribute("fill",s),n.appendChild(u),u},a=e("polygon",St),c=e("polygon",Tt),S=e("rect",Tt),f=e("rect",St),M=e("rect",St),A=e("rect",Tt);[S,f,M,A].forEach(m=>m.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let l=(m,s,u,D,X)=>{m.setAttribute("x",s),m.setAttribute("y",u),m.setAttribute("width",Math.max(0,D)),m.setAttribute("height",Math.max(0,X))},h={x:qe*(2/3),y:We*(1/3)},y=.1,o=.9,v={x:h.x,y:h.y},r={x:h.x,y:h.y},p={x:h.x,y:h.y},C=!1,K=()=>gsap.to(p,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:K}),F=()=>gsap.to(p,{y:gsap.utils.random(We*.193,We*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:F});K(),F();function q(){let m=gsap.utils.clamp(qe*y,qe*o,v.x),s=qe-m,u=gsap.utils.clamp(We*y,We*o,v.y),D=We-u;a.setAttribute("points",`0,${u} ${m},0 ${qe},${u} ${qe},${We} 0,${We}`),c.setAttribute("points",`${qe},${u} ${m},0 ${m},${u}`),l(S,0,u,m,D);let X=m*.25,O=D*(2/3);l(f,m/2-X/2,u+D-O,X,O),l(M,m,u,s,D);let g=s*.5,z=D/3;l(A,m+s/2-g/2,u+D/2-z/2,g,z)}let oe=.1,H=.03;function T(){let s=1-Math.pow(1-(C?oe:H),gsap.ticker.deltaRatio(60)),u=C?r:p;v.x+=(u.x-v.x)*s,v.y+=(u.y-v.y)*s,q()}let _=(m,s)=>{let u=t.getBoundingClientRect();!u.width||!u.height||(r.x=gsap.utils.clamp(0,qe,(m-u.left)/u.width*qe),r.y=gsap.utils.clamp(0,We,(s-u.top)/u.height*We),C=!0)},x=()=>{C=!1},G=(m,s)=>{let u=t.getBoundingClientRect();m>=u.left&&m<=u.right&&s>=u.top&&s<=u.bottom?_(m,s):x()},re=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Ze(G):null,$=m=>{let s=m.touches[0];s&&_(s.clientX,s.clientY)},J={passive:!0};t.addEventListener("touchstart",$,J),t.addEventListener("touchmove",$,J),t.addEventListener("touchend",x,J),t.addEventListener("touchcancel",x,J);let B=!1,R=()=>{B||(B=!0,gsap.ticker.add(T))},w=()=>{B&&(B=!1,gsap.ticker.remove(T))},P=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:m=>m.isActive?R():w()});return q(),R(),function(){w(),P.kill(),gsap.killTweensOf(p),re&&re(),t.removeEventListener("touchstart",$,J),t.removeEventListener("touchmove",$,J),t.removeEventListener("touchend",x,J),t.removeEventListener("touchcancel",x,J),n.remove()}}var $n="http://www.w3.org/2000/svg";var Kn=4.1343749999999995,Zn="#BBC0C8",jn="#FFFFFF",Jn=5e3,Qn=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],er=0,an=(i,t)=>{if(i<0||t<0||i>=20||t>=20)return!1;let n=20/2;return Math.hypot(i+.5-n,t+.5-n)<=n},je=(i,t)=>{let n=document.createElementNS($n,i);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function sn(i){let t=i.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++er;e.setAttribute("data-pulse-dots-paused","");let c=je("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});c.style.setProperty("--pd-step",`${31.5}px`);let S=je("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});S.append(je("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Kn.toFixed(2)}),je("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let f=je("defs",{});f.appendChild(S);let M=je("rect",{width:1e3,height:1e3,fill:Zn}),A=je("g",{filter:`url(#${a})`,fill:jn});for(let h=0;h<20;h++)for(let y=0;y<20;y++){if(!an(y,h))continue;let o=Qn.filter(K=>an(y+K.dx,h+K.dy)),v=o[Math.floor(Math.random()*o.length)],r=185+y*31.5+27.5625/2,p=185+h*31.5+27.5625/2,C=je("g",{transform:`rotate(${v.deg} ${r} ${p})`});C.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Jn)}ms`),C.append(je("circle",{class:"pulse-dots__dot is--first",cx:r,cy:p,r:27.5625/2}),je("circle",{class:"pulse-dots__dot is--last",cx:r,cy:p,r:27.5625/2})),A.appendChild(C)}c.append(f,M,A),e.appendChild(c);let l=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:h=>e.toggleAttribute("data-pulse-dots-paused",!h.isActive)});e.toggleAttribute("data-pulse-dots-paused",!l.isActive),n.push(()=>{l.kill(),e.removeAttribute("data-pulse-dots-paused"),c.remove()})}),()=>n.forEach(e=>e())}var ft=`#version 300 es
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
}`;var At=60,nr=1.5,rr=1,gn=150,Ct=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function xn(i){let t=i.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function c(P,m){let s=e.createShader(P);return e.shaderSource(s,m),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let S=[];function f(P,m=cn){let s=e.createProgram(),u=c(e.VERTEX_SHADER,m),D=c(e.FRAGMENT_SHADER,P);e.attachShader(s,u),e.attachShader(s,D),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(u),e.deleteShader(D),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let X={},O=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let z=0;z<O;z++){let I=e.getActiveUniform(s,z);X[I.name]=e.getUniformLocation(s,I.name)}let g={p:s,loc:X};return S.push(g),g}let M={bg:f(ln,ft),shapes:un.map(P=>f(P,dn)),trailSim:f(fn,ft),trail:f(vn),blur:pn.map(P=>f(P)),bloom:mn.map(P=>f(P)),gmap:f(hn,ft)},A=e.createVertexArray();e.bindVertexArray(A);let l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let y=[];function o(P,m,s=!1){let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),s&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,P,m,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,P,m,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let D=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let X={tex:u,fb:D,w:P,h:m};return y.push(X),X}function v(){y.forEach(P=>{e.deleteTexture(P.tex),e.deleteFramebuffer(P.fb)}),y.length=0}function r(P,m,s,u){e.useProgram(P.p);let D=m?m.w:n.width,X=m?m.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,m?m.fb:null),e.viewport(0,0,D,X);let O=P.loc;O.uMVMatrix&&e.uniformMatrix4fv(O.uMVMatrix,!1,Ct),O.uPMatrix&&e.uniformMatrix4fv(O.uPMatrix,!1,Ct),O.uTextureMatrix&&e.uniformMatrix4fv(O.uTextureMatrix,!1,Ct),O.uResolution&&e.uniform2f(O.uResolution,D,X),O.uArtboardResolution&&e.uniform2f(O.uArtboardResolution,1920,1920),O.uAspectRatio&&e.uniform1f(O.uAspectRatio,1),O.uMousePos&&e.uniform2f(O.uMousePos,p.x,p.y),O.uIsMask&&e.uniform1i(O.uIsMask,0),O.uParentTrackMouse&&e.uniform1f(O.uParentTrackMouse,0);let g=0;Object.keys(s).forEach(z=>{O[z]&&(e.activeTexture(e.TEXTURE0+g),e.bindTexture(e.TEXTURE_2D,s[z].tex),e.uniform1i(O[z],g),g++)}),Object.keys(u||{}).forEach(z=>{if(!O[z])return;let I=u[z];Array.isArray(I)?e.uniform2f(O[z],I[0],I[1]):e.uniform1f(O[z],I)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let p={x:.5,y:.5},C={x:.5,y:.5},K=0,F=null,q=0;function oe(){v();let P=Math.min(nr,window.devicePixelRatio||1),m=Math.max(1,Math.round(t.clientWidth*P)),s=Math.max(1,Math.round(t.clientHeight*P));n.width=m,n.height=s;let u=O=>[Math.max(1,Math.round(m*O)),Math.max(1,Math.round(s*O))];F={a:o(m,s),b:o(m,s),pp:[o(...u(.5),!0),o(...u(.5),!0)],trail:o(m,s),blur1:o(...u(1)),blur2:o(...u(1)),blur3:o(...u(1)),blur4:o(...u(1)),bth:o(...u(1)),bd1:o(...u(1)),bd2:o(...u(1)),bs1:o(...u(1)),bs2:o(...u(1)),bloom:o(m,s)},r(M.bg,F.a,{});let D=F.a,X=F.b;M.shapes.forEach(O=>{r(O,X,{uBgTexture:D});let g=D;D=X,X=g}),F.base=D,q=0}function H(){if(!F)return;let P=F.pp[q],m=F.pp[1-q];r(M.trailSim,m,{uPingPongTexture:P},{uTime:K,uPreviousMousePos:[C.x,C.y]}),q=1-q,r(M.trail,F.trail,{uTexture:F.base,uPingPongTexture:m}),r(M.blur[0],F.blur1,{uTexture:F.trail}),r(M.blur[1],F.blur2,{uTexture:F.blur1}),r(M.blur[2],F.blur3,{uTexture:F.blur2}),r(M.blur[3],F.blur4,{uTexture:F.blur3});let s=F.blur4;r(M.bloom[0],F.bth,{uTexture:s}),r(M.bloom[1],F.bd1,{uTexture:F.bth}),r(M.bloom[2],F.bd2,{uTexture:F.bd1,uBgTexture:s}),r(M.bloom[3],F.bs1,{uTexture:F.bd2}),r(M.bloom[4],F.bs2,{uTexture:F.bs1,uBgTexture:s}),r(M.bloom[5],F.bloom,{uTexture:F.bs2,uBgTexture:s}),r(M.gmap,null,{uTexture:F.bloom},{uTime:0}),C.x=p.x,C.y=p.y}let T=gn,x=Ze((P,m)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(p.x=(P-s.left)/s.width,p.y=1-(m-s.top)/s.height,T=0,J())}),G=null,ne=0,re=!1;function $(P){if(!re||T>=gn){G=null;return}if(G=requestAnimationFrame($),P-ne<1e3/At-1)return;let m=ne?Math.min(P-ne,100):1e3/At;ne=P,K+=rr*(m/(1e3/At)),H(),T++}function J(){re&&!G&&(C.x=p.x,C.y=p.y,ne=0,G=requestAnimationFrame($))}let B=new IntersectionObserver(([P])=>{re=P.isIntersecting,re?J():G&&(cancelAnimationFrame(G),G=null)});B.observe(t);let R=null,w=new ResizeObserver(()=>{clearTimeout(R),R=setTimeout(()=>{oe(),H()},60)});return w.observe(t),oe(),H(),function(){G&&cancelAnimationFrame(G),G=null,clearTimeout(R),B.disconnect(),w.disconnect(),x(),v(),S.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(l),e.deleteBuffer(h),e.deleteVertexArray(A);let m=e.getExtension("WEBGL_lose_context");m&&m.loseContext(),n.remove()}}var or="#BBC0C8",ar="#FFFFFF";var bn='"Suisseintl Book", Arial, sans-serif';var yn=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],ir=3,sr=1.325,lt=5,cr=.4,Pn=20,lr=2;function En(i){let t=i.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[],e=gsap.parseEase("power1.inOut"),a=c=>{let S=(c%lt+lt)%lt/lt;return S<.4?1-e(S/.4):S<.6?0:e((S-.6)/.4)};return t.forEach(c=>{let S=(c.getAttribute("data-text")||"").trim();if(!S)return;let f=Array.from(Array(ir).fill(S).join(" ").toUpperCase()),M=window.matchMedia("(prefers-reduced-motion: reduce)").matches,A=document.createElement("canvas");A.setAttribute("aria-hidden","true"),Object.assign(A.style,{display:"block",width:"100%",height:"100%"}),c.appendChild(A);let l=A.getContext("2d"),h=[],y=0;function o(){l.font=`24px ${bn}`,h=f.map(x=>l.measureText(x).width),y=(3363-h.reduce((x,G)=>x+G,0))/(f.length-1)}let v=1;function r(){let _=Math.min(lr,window.devicePixelRatio||1),x=c.clientWidth;A.width=Math.max(1,Math.round(x*_)),A.height=Math.max(1,Math.round(c.clientHeight*_)),v=A.width/1920}let p=0;function C(){l.setTransform(1,0,0,1,0,0),l.fillStyle=or,l.fillRect(0,0,A.width,A.height),l.setTransform(v,0,0,v,0,0),l.font=`24px ${bn}`,l.fillStyle=ar,l.textBaseline="alphabetic";let _=M?0:e(p%Pn/Pn)*Math.PI*2;yn.forEach((x,G)=>{let ne=yn.length-1-G,re=M?0:a(p-lt+ne*cr),$=y+re*sr*24,J=2*Math.PI*x.r,B=x.start*Math.PI/180+_,R=0;for(let w=0;w<f.length;w++){let P=h[w];if(R+P>J)break;if(f[w]!==" "){let m=B+(R+P/2)/x.r,s=Math.cos(m),u=Math.sin(m);l.setTransform(-u*v,s*v,-s*v,-u*v,(960+x.r*s)*v,(960+x.r*u)*v),l.fillText(f[w],-P/2,0)}R+=P+$}})}let K=(_,x)=>{p+=x/1e3,C()},F=!1,q=()=>{!F&&!M&&(F=!0,gsap.ticker.add(K))},oe=()=>{F&&(F=!1,gsap.ticker.remove(K))},H=new ResizeObserver(()=>{r(),C()});H.observe(c),r(),o(),C(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{o(),C()});let T=ScrollTrigger.create({trigger:c,start:"top bottom",end:"bottom top",onToggle:_=>_.isActive?q():oe()});T.isActive&&q(),n.push(()=>{oe(),T.kill(),H.disconnect(),A.remove()})}),()=>n.forEach(c=>c())}function wn(i){let t=i.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",c="rgba(0, 0, 0, 0.2)",S="rgba(0, 0, 0, 0.75)",f=2.125,M=1.5,A=24,l=.5,h="20px",y=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},v={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},p=[],C,K,F,q,oe,H,T=performance.now();function _(g,z){let I=document.createElement("div");I.style.cssText=`position:absolute;visibility:hidden;width:${g};`,z.appendChild(I);let ie=I.getBoundingClientRect().width;return I.remove(),ie}function x(g,z){let I=document.createElement("span");I.style.color=g,z.appendChild(I);let ie=getComputedStyle(I).color;I.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ie,Se.fillRect(0,0,1,1);let _e=[...Se.getImageData(0,0,1,1).data];return _e[3]/=255,_e}function G(g,z,I){return`rgba(${g.map((ie,me)=>ie+(z[me]-ie)*I).join(",")})`}function ne(g,z){Object.assign(g,{from:g.value,to:z,start:performance.now()})}function re(g,z){if(!l)return g.value=g.to;let I=Math.min(Math.max((z-g.start)/(l*1e3),0),1);g.value=g.from+(g.to-g.from)*(1-Math.pow(1-I,4))}t.forEach(g=>{let z=document.createElement("canvas"),I=z.getContext("2d");z.setAttribute("aria-hidden","true"),Object.assign(z.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(g).position==="static"&&(g.style.position="relative"),g.prepend(z),p.push({element:g,canvas:z,ctx:I,width:0,height:0,visible:!1,inactive:x(g.getAttribute("data-dots-color-inactive")||c,g),active:x(g.getAttribute("data-dots-color-active")||S,g)})});function $(){return p.some(({element:g})=>{let z=g.getBoundingClientRect();return o.x>=z.left&&o.x<=z.right&&o.y>=z.top&&o.y<=z.bottom})}function J(g,z){let I=g.element.getBoundingClientRect(),ie=I.left-z.left,me=I.top-z.top,Se=o.cx-z.left,_e=o.cy-z.top,Ne=f*(1+(M-1)*r.value);g.ctx.clearRect(0,0,g.width,g.height);for(let Ce=0;Ce<g.rows;Ce++){let Q=g.oy+Ce*g.sy,ee=me+Q;for(let k=0;k<g.cols;k++){let j=g.ox+k*g.sx,fe=ie+j,le=y&&v.value?Math.max(0,1-Math.hypot(fe-Se,ee-_e)/oe)*v.value:0,ve=K*(1+(Ne-1)*le);g.ctx.fillStyle=G(g.inactive,g.active,le),a==="square"?g.ctx.fillRect(j-ve/2,Q-ve/2,ve,ve):(g.ctx.beginPath(),g.ctx.arc(j,Q,ve/2,0,Math.PI*2),g.ctx.fill())}}}function B(g=!1){let z=t[0].getBoundingClientRect();p.forEach(I=>(!g||I.visible)&&J(I,z))}function R(g){if(H=null,!p.some(I=>I.visible))return;let z=Math.min((g-T)/1e3,.1);if(T=g,re(v,g),re(r,g),!l)o.cx=o.x,o.cy=o.y;else{let I=1-Math.exp(-z*6/l);o.cx+=(o.x-o.cx)*I,o.cy+=(o.y-o.cy)*I}B(!0),H=requestAnimationFrame(R)}function w(){y&&!H&&p.some(g=>g.visible)&&(T=performance.now(),H=requestAnimationFrame(R))}function P(){C=Math.min(devicePixelRatio||1,2),K=_(e,t[0]),F=_(n,t[0]),q=K+F,oe=q*A;let g=_(h,t[0])+K/2,z=I=>{let ie=I-2*g,me=ie>=0?Math.floor(ie/q)+1:0;return{count:me,offset:g,step:me>1?ie/(me-1):q}};p.forEach(I=>{let ie=I.element.getBoundingClientRect();I.width=ie.width,I.height=ie.height;let me=z(ie.width),Se=z(ie.height);I.cols=me.count,I.ox=me.offset,I.sx=me.step,I.rows=Se.count,I.oy=Se.offset,I.sy=Se.step,I.canvas.width=Math.round(ie.width*C),I.canvas.height=Math.round(ie.height*C),I.ctx.setTransform(C,0,0,C,0,0)}),B(),w()}let m=(g,z)=>{o.x=g,o.y=z;let I=$();I!==o.active&&(o.active=I,ne(v,+I),I?(o.cx=o.x,o.cy=o.y):ne(r,0)),w()},s=null,u=()=>o.active&&ne(r,1),D=()=>ne(r,0);y&&(s=Ze(m),window.addEventListener("pointerdown",u),window.addEventListener("pointerup",D));let X=new IntersectionObserver(g=>{g.forEach(z=>{let I=p.find(ie=>ie.element===z.target);I&&(I.visible=z.isIntersecting)}),y?w():B(!0)}),O=new ResizeObserver(P);return t.forEach(g=>{X.observe(g),O.observe(g)}),window.addEventListener("resize",P),P(),function(){H&&cancelAnimationFrame(H),H=null,y&&(s&&s(),window.removeEventListener("pointerdown",u),window.removeEventListener("pointerup",D)),window.removeEventListener("resize",P),X.disconnect(),O.disconnect(),p.forEach(g=>g.canvas.remove()),p.length=0}}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},Sn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},ur=i=>{let t=Math.floor(i),n=i-t,e=n*n*(3-2*n);return Sn(t)*(1-e)+Sn(t+1)*e};function Tn(i){let t=i.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],c=null,S=0,f=18,M=0,A=0,l=0,h=-1e5,y=-1e5,o=!1,v=!1;function r(){c&&c.revert(),t.textContent="";let x=getComputedStyle(t);S=parseFloat(x.paddingTop),f=parseFloat(x.lineHeight),M=t.offsetHeight;let G=Math.max(1,Math.floor((M-S-parseFloat(x.paddingBottom))/f)),ne=document.createDocumentFragment();for(let re=0;re<G;re++){let $=document.createElement("div");$.className="type-field__row",$.textContent=n,ne.appendChild($)}t.appendChild(ne),t.setAttribute("aria-hidden","true"),c=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((re,$)=>({chars:re.querySelectorAll(".type-field__char"),cur:a[$]?a[$].cur:0,drawn:0}))}})}function p(x){let G=Math.max(0,Math.min(x.chars.length,Math.round(x.cur)));if(G===x.drawn)return;let ne=Math.min(G,x.drawn),re=Math.max(G,x.drawn);for(let $=ne;$<re;$++)x.chars[$].style.visibility=$<G?"visible":"hidden";x.drawn=G}function C(x,G){if(!a.length)return;let ne=Math.min(G,50)/16.667,re=P=>1-Math.pow(1-P,ne),$=Pe.scroll,J=Math.min(Math.max(A-$,0),l-$-M);y+=(h-J-S-y)*re(rt.followEase);let B=Math.floor(y/f),R=$*.004,w=o&&h>=A-$&&h<=l-$;for(let P=0;P<a.length;P++){let m=a[P],s=m.chars.length,u=Math.abs(P-B),D=0;if(w){if(u===0)D=s;else if(u<=rt.radius){let X=1-u/(rt.radius+1);D=1+Math.min(rt.maxSide,X*(1-rt.ragged/2+rt.ragged*ur(P*1.3+R)))*(s-1)}}m.cur+=(D-m.cur)*re(rt.ease),p(m)}}function K(){v||(gsap.ticker.add(C),v=!0)}function F(){v&&(gsap.ticker.remove(C),v=!1)}let q=Ze((x,G)=>{y<-1e4&&(y=G),h=G,o=!0}),oe=()=>{o=!1};document.documentElement.addEventListener("mouseleave",oe),r();let H=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(x){A=x.start+window.innerHeight,l=x.end},onToggle(x){x.isActive?K():F()}});H.isActive&&K();let T,_=()=>{clearTimeout(T),T=setTimeout(()=>{Math.floor((t.offsetHeight-S-parseFloat(getComputedStyle(t).paddingBottom))/f)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",_),function(){F(),clearTimeout(T),q(),document.documentElement.removeEventListener("mouseleave",oe),window.removeEventListener("resize",_),H.kill(),c&&c.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var An={duration:.5,ease:"power3"};function Cn(i){let t=i.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let c=gsap.quickTo(a,"x",An),S=gsap.quickTo(a,"y",An),f=0,M=0,A=!1,l=new ResizeObserver(()=>{f=a.offsetWidth,M=a.offsetHeight});l.observe(a),f=a.offsetWidth,M=a.offsetHeight;let y=Ze((v,r)=>{let p=e.getBoundingClientRect();if(!(v>=p.left&&v<=p.right&&r>=p.top&&r<=p.bottom)){A&&(A=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let K=gsap.utils.clamp(0,Math.max(0,p.width-f),v-p.left-f/2),F=gsap.utils.clamp(0,Math.max(0,p.height-M),r-p.top-M/2);if(!A){A=!0,c(K,K),S(F,F),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}c(K),S(F)}),o=()=>{A&&(A=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{y(),document.documentElement.removeEventListener("mouseleave",o),l.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var dr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],vr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],fr="#FFFFFF";var Mn="power3.out";function Rn(i){let t=i.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],c=[],S=[];function f(){if(c.length&&c[0].isConnected)return;let h=e.querySelectorAll(":scope > div > div");a=(h.length?[...h]:[e]).map(o=>SplitText.create(o,{type:"chars"})),c=a.flatMap(o=>o.chars),S=h.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],c.forEach(o=>{o.dataset.orig=o.textContent})}function M(h){h.textContent=h.dataset.orig,h.style.border=""}let A=()=>{f(),S.forEach(y=>{y.el.style.overflow="visible"});let h=(c.length-1)/2;c.forEach((y,o)=>{gsap.to(y,{color:fr,ease:Mn,duration:.3,delay:Math.abs(o-h)*.03,overwrite:"auto",onStart:()=>{let v=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);v==1&&(y.textContent=gsap.utils.random(vr)),r==1&&(y.style.border=`1px solid ${gsap.utils.random(dr)}`)}})})},l=()=>{if(!c.length)return;let h=getComputedStyle(e).color,y=(c.length-1)/2;S.forEach(o=>{o.el.style.overflow=o.overflow}),c.forEach((o,v)=>{gsap.to(o,{color:h,ease:Mn,duration:.3,delay:Math.abs(v-y)*.03,overwrite:"auto",onStart:()=>M(o)})})};e.addEventListener("mouseenter",A),e.addEventListener("mouseleave",l),n.push(()=>{e.removeEventListener("mouseenter",A),e.removeEventListener("mouseleave",l),gsap.killTweensOf(c),a.forEach(h=>h.revert()),a=[],c=[],S=[]})}),()=>n.forEach(e=>e())}function Mt(i,t){let n=null;pe(Gt(i)),pe(on(i)),pe(Rn(i)),pe(wn(i)),pe(Qt(i)),pe(Wt(i)),pe(nn(i));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Nt(i):null,n?pe(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),pe(Xt(i)),pe(Kt(i)),pe(Zt(i)),pe(vt(i)),dt(i),jt(i),n}function pt(i){pe(en(i)),i.querySelector("[data-flip-element]")&&window.innerWidth>991&&pe(Jt(i)),pe(Tn(i)),pe(Cn(i)),pe(sn(i)),pe(xn(i)),pe(En(i)),ScrollTrigger.sort()}var pr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function mt(i){var t=[];return i.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(c){gsap.set(n,{autoAlpha:1});var S=pr[e],f={yPercent:110,duration:S.duration,stagger:S.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?f.delay=.5:f.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(c[e],f)}}))}),function(){t.forEach(function(n){n.revert()})}}var Fn=window.matchMedia("(prefers-reduced-motion: reduce)"),Rt=.9;function zn(i){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{i.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Fn.matches||!n?e.set(i,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:ut,duration:Rt,ease:Ke},0),e.fromTo(i,{y:"0vh"},{y:"-25vh",duration:Rt,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function Ft(i,t,n="100vh"){let e=gsap.timeline();return Fn.matches?e.set(i,{autoAlpha:1}):(e.set(i,{zIndex:3},0),e.fromTo(i,{y:n},{y:"0vh",duration:Rt,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(i,{clearProps:"zIndex"}),t(i)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function zt(i,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(i,{position:"relative"}),Ft(i,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,Lt=!1;function kt(i){gsap.set(i,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Pe.scrollTo(0,{immediate:!0,force:!0}),Pe.resize()}var Ln={sync:!0,beforeLeave(){Lt=yt({keepCurtain:!0}),Pe.stop(),ot||(ot=bt())},beforeEnter(i){ot||(ot=bt()),gsap.set(i.next.container,{position:"fixed",top:0,left:0,right:0}),_t(),Mt(i.next.container,!1)},leave(i){return zn(i.current.container,i.next.container)},enter(i){return Lt&&(It(),Lt=!1),pe(mt(i.next.container)),Ft(i.next.container,kt)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(i){Bt(i),pt(i.next.container),Pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:i}){if(!i||!i.href)return!1;let t=new URL(i.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Ln,once(i){let t=document.querySelector("[data-menu-status]");Ut(),Ht(),t&&(dt(t),vt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=i.next.container,e=Mt(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");pe(mt(n)),zt(n,function(c){kt(c),pt(c),Pe.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(Pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),pe(mt(n)),zt(n,function(a){kt(a),pt(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Pe.start()})})})}))}},{name:"self",...Ln}]}),window.addEventListener("pageshow",function(i){i.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

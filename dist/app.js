(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Pe=new Lenis({lerp:.08,wheelMultiplier:1});Pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(i=>{Pe.raf(i*1e3)});gsap.ticker.lagSmoothing(0);var gt=[];function me(i){typeof i=="function"&&gt.push(i)}function xt(){let i=gt,t=ScrollTrigger.getAll();return gt=[],function(){i.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Dn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Dn);var Ke="parallax",lt=.8;var In="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",kt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,bt=function(){return!1};function Dt(){tt&&gsap.timeline().to(tt,{clipPath:kt,duration:.9,ease:Ke,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-lt)+")",duration:.9,ease:Ke},0).set(tt,{clearProps:"filter"})}function It(){let i=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!i||!t)return;tt=t.querySelector(".nav-bg"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",i.setAttribute("aria-expanded",a),a?(Pe.stop(),document.body.style.overflow="hidden"):(Pe.start(),document.body.style.overflow="")}function e(a){tt&&gsap.to(tt,{clipPath:a?In:kt,duration:.9,ease:Ke,overwrite:!0})}i.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),bt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function Ut(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Ht(){let i=function(n){return n.replace(/\/$/,"")||"/"},t=i(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&i(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function _t(i){let n=new DOMParser().parseFromString(i.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function ut(i){let t=i.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let u=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();u&&navigator.clipboard.writeText(u).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function dt(i){let t=i.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,u=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),f=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=u+" "+f}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var yt={};function ct(i){return yt[i]||(yt[i]=new Promise(function(t,n){let e=document.createElement("script");e.src=i,e.onload=t,e.onerror=n,document.head.appendChild(e)})),yt[i]}function Bt(i){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),n.add(u);var T=new THREE.PointLight(13931578,2.4,1200);T.position.set(-300,-100,300),n.add(T);var f=new THREE.PointLight(5913114,1.2,900);f.position.set(0,200,-300),n.add(f);var C=new THREE.PointLight(16750916,1.3,600);C.position.set(0,-250,200),n.add(C);var R=0,d=0,g=0,w=0,o=!1,h=0,r=0,x=Math.PI*2/6,A=new THREE.Vector2(9999,9999),$=new THREE.Raycaster,L=120,G=new THREE.Vector3(9999,9999,0),ae=new THREE.Vector3(9999,9999,0),B=new THREE.Vector3,S=!1,W=0,P=0,Y=8e4,ne=.03,oe=.95,X=.005,j=12e4,H=null,F,s,E,v,c,p,I=0,M=!1,te=0,m=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function D(){var y=new THREE.BufferGeometry;F=new Float32Array(j*3),s=new Float32Array(j*3),E=new Float32Array(j*3),v=new Float32Array(j*3),c=new Float32Array(j),p=new Float32Array(j),y.setAttribute("position",new THREE.BufferAttribute(F,3)),y.setAttribute("color",new THREE.BufferAttribute(v,3)),y.setAttribute("size",new THREE.BufferAttribute(c,1)),y.setAttribute("alpha",new THREE.BufferAttribute(p,1)),y.setAttribute("velocity",new THREE.BufferAttribute(s,3));var N=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,q=new THREE.ShaderMaterial({vertexShader:N,fragmentShader:l,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(y,q),n.add(H)}function O(y,N){return new Promise(function(l){try{var q=512,K=document.createElement("canvas");K.width=K.height=q;var ee=K.getContext("2d"),ke=new DOMParser().parseFromString(y,"image/svg+xml"),Fe=ke.querySelector("svg");if(!Fe){l([]);return}var z=parseFloat(Fe.getAttribute("width")||512),V=parseFloat(Fe.getAttribute("height")||512),b=Fe.getAttribute("viewBox");if(b){var U=b.split(/[\s,]+/);z=+U[2],V=+U[3]}var se=Math.min(q/z,q/V)*.9,re=(q-z*se)/2,ze=(q-V*se)/2;ee.save(),ee.translate(re,ze),ee.scale(se,se),ee.fillStyle="white",ke.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var He=xe.getAttribute("d");He&&ee.fill(new Path2D(He))}else xe.tagName==="rect"?ee.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(ee.beginPath(),ee.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),ee.fill())}),ee.restore();for(var be=ee.getImageData(0,0,q,q).data,Te=[],ye=0;ye<q;ye++)for(var Ie=0;Ie<q;Ie++){var Ee=(ye*q+Ie)*4;be[Ee+3]>30&&Te.push({x:Ie,y:ye,a:be[Ee+3]/255})}if(!Te.length){l([]);return}for(var Ge=[],Ee=0;Ee<N;Ee++){var Ue=Te[Math.floor(Math.random()*Te.length)];Ge.push({x:(Ue.x-q/2)*1.2+(Math.random()-.5)*1.65,y:-(Ue.y-q/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ue.a,a:Ue.a})}l(Ge)}catch(xe){console.error(xe),l([])}})}function ie(y){I=y.length;for(var N=0;N<I;N++){var l=y[N],q=N*3;F[q]=l.x,F[q+1]=l.y+40,F[q+2]=l.z,s[q]=s[q+1]=s[q+2]=0,E[q]=l.x,E[q+1]=l.y,E[q+2]=l.z;var K=m[Math.floor(Math.random()*m.length)],ee=.7+Math.random()*.4;v[q]=K.r*ee,v[q+1]=K.g*ee,v[q+2]=K.b*ee,c[N]=1.8+Math.random()*3.8,p[N]=.3+(l.a||.7)*.75}H.geometry.setDrawRange(0,I),["position","color","size","alpha"].forEach(function(ke){H.geometry.attributes[ke].needsUpdate=!0}),M=!0}function pe(y){return O(y,Math.min(j,Y)).then(function(N){N.length&&H&&ie(N)})}function Se(y){if(!(!M||!I)){te+=y;for(var N=0;N<I;N++){var l=N*3,q=N*1.37;if(s[l]+=Math.sin(te*.4+q)*.008+Math.sin(te*1.1+q*2.3)*.003,s[l+1]+=Math.cos(te*.35+q*.7)*.008+Math.sin(te*.9+q*1.5)*.004,s[l+2]+=Math.sin(te*.25+q*1.1)*.004,s[l+1]-=ne*.06,s[l]+=Math.sin(te*.25+F[l+1]*.008)*X*.6,s[l+2]+=Math.cos(te*.3+F[l]*.008)*X*.3,S){var K=F[l]-G.x,ee=F[l+1]-G.y,ke=F[l+2]-G.z,Fe=K*K+ee*ee+ke*ke,z=L*L;if(Fe<z&&Fe>.25){var V=Math.sqrt(Fe),b=V/L,U=(N*2654435761&65535)/65535,se=.6+U*.8,re=Math.pow(1-b,1.5+U),ze=1+Math.min(B.length()*.12,1),be=re*se*1.2*ze,Te=1/V;s[l]+=K*Te*be,s[l+1]+=ee*Te*be,s[l+2]+=ke*Te*be*.2;var ye=.02+U*.06;s[l]+=B.x*re*ye,s[l+1]+=B.y*re*ye;var Ie=re*.15;s[l]+=(U-.5)*Ie,s[l+1]+=((N*48271&65535)/65535-.5)*Ie}}var Ee=E[l],Ge=E[l+1]+40,Ue=E[l+2],xe=Ee-F[l],He=Ge-F[l+1],Oe=Ue-F[l+2],je=Math.sqrt(xe*xe+He*He+Oe*Oe),Je=(N*48271&65535)/65535,Qe=.003+Je*.003,at=1+Math.min(je*.002,.5),Ye=Qe*at;s[l]+=xe*Ye,s[l+1]+=He*Ye,s[l+2]+=Oe*Ye;var we=(N*16807&65535)/65535,$e=oe*(.92+we*.06);s[l]*=$e,s[l+1]*=$e,s[l+2]*=$e,F[l]+=s[l],F[l+1]+=s[l+1],F[l+2]+=s[l+2];var st=Math.sqrt(Math.pow(F[l]-E[l],2)+Math.pow(F[l+1]-E[l+1],2)+Math.pow(F[l+2]-E[l+2],2));p[N]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(te*1.5+N*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var _e=new THREE.Matrix4,Ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function J(y,N){var l=a.domElement.getBoundingClientRect();if(!(l.width===0||l.height===0)&&(A.set((y-l.left)/l.width*2-1,-((N-l.top)/l.height)*2+1),$.setFromCamera(A,e),$.ray.intersectPlane(Ne,Ce))){ae.copy(G),H&&G.copy(Ce).applyMatrix4(_e.copy(H.matrixWorld).invert()),B.subVectors(G,ae);var q=B.length();q>15&&B.multiplyScalar(15/q)}}function Q(y,N){var l=i.getBoundingClientRect();return y>=l.left&&y<=l.right&&N>=l.top&&N<=l.bottom}var k=i.querySelector("#logo-coords"),Z=i.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(y){W=y.clientX,P=y.clientY;var N=Q(y.clientX,y.clientY);if(N){S=!0,J(y.clientX,y.clientY);var l=i.getBoundingClientRect(),q=Math.round(y.clientX-l.left),K=Math.round(y.clientY-l.top);k&&(k.textContent="X: "+q+"PX    Y: "+K+"PX")}else S=!1,G.set(9999,9999,0);o&&(R+=(y.clientX-h)*.005,g+=(y.clientY-r)*.005,g=Math.max(-Math.PI/2,Math.min(Math.PI/2,g)),h=y.clientX,r=y.clientY)},ve=function(y){Q(y.clientX,y.clientY)&&(o=!0,h=y.clientX,r=y.clientY)},ge=function(){o=!1,R=0,g=0,d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",ve),window.addEventListener("mouseup",ge)}function Me(){for(var y=4e3,N=new THREE.BufferGeometry,l=new Float32Array(y*3),q=new Float32Array(y*3),K=0;K<y;K++){l[K*3]=(Math.random()-.5)*2200,l[K*3+1]=(Math.random()-.5)*1800,l[K*3+2]=-200-Math.random()*1800;var ee=m[Math.floor(Math.random()*m.length)],ke=.2+Math.random()*.3;q[K*3]=ee.r*ke,q[K*3+1]=ee.g*ke,q[K*3+2]=ee.b*ke}N.setAttribute("position",new THREE.BufferAttribute(l,3)),N.setAttribute("color",new THREE.BufferAttribute(q,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var z=Fe.getContext("2d"),V=z.createRadialGradient(16,16,0,16,16,16);V.addColorStop(0,"rgba(255,255,255,1)"),V.addColorStop(.3,"rgba(255,255,255,0.6)"),V.addColorStop(.7,"rgba(255,255,255,0.15)"),V.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=V,z.fillRect(0,0,32,32);var b=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),U=new THREE.Points(N,b);return U.userData={positions:l,count:y},n.add(U),U}D();var ue=t?null:Me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';pe(De);var Be=new THREE.Clock,Re=!0,Xe=new IntersectionObserver(function(y){Re=y[0].isIntersecting,y[0].isIntersecting&&!fe&&!t&&(fe=!0,k&&(k.style.transform="translateY(0)"),Z&&(Z.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(i);var he=!1,Le=null,Ae=0;function de(){if(he=!0,clearTimeout(Le),Le=setTimeout(function(){he=!1},150),!t){var y=Q(W,P);y?(S=!0,J(W,P)):(S=!1,G.set(9999,9999,0))}}window.addEventListener("scroll",de,{passive:!0});var _=null;function ce(){if(_=requestAnimationFrame(ce),!!Re){Ae++;var y=Math.min(Be.getDelta(),.05),N=Be.elapsedTime;if(t)d+=x*y;else{var l=R-d;l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),d+=l*.12,w+=(g-w)*.12}if(H&&(H.rotation.x=w,H.rotation.y=d,H.position.y=-15),ue){for(var q=ue.userData.positions,K=0;K<ue.userData.count;K++)q[K*3+1]+=Math.sin(N*.2+K)*.05,q[K*3]+=Math.cos(N*.15+K*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-d*35*.35,ue.position.y=w*28*.35}u.position.x=300+Math.sin(N*.3)*100,u.position.y=350+Math.cos(N*.2)*80,T.intensity=2+Math.sin(N*.5)*.4,C.intensity=.8+Math.sin(N*.4+1)*.3,!(t&&he&&Ae%4!==0)&&(Se(y),a.render(n,e))}}return ce(),function(){cancelAnimationFrame(_),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",ve),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",de),clearTimeout(Le),Xe.disconnect(),n.traverse(function(y){y.geometry&&y.geometry.dispose(),y.material&&(y.material.map&&y.material.map.dispose(),y.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),H=null}}function Ot(i){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",i.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),t.add(u);var T=new THREE.PointLight(5913114,1.2,900);T.position.set(0,200,-300),t.add(T);var f=new THREE.PointLight(16750916,1.3,600);f.position.set(0,-250,200),t.add(f);var C=0,R=Math.PI*2/6,d=8e4,g=.03,w=.95,o=.005,h=12e4,r=null,x,A,$,L,G,ae,B=0,S=!1,W=0,P=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function Y(){var J=new THREE.BufferGeometry;x=new Float32Array(h*3),A=new Float32Array(h*3),$=new Float32Array(h*3),L=new Float32Array(h*3),G=new Float32Array(h),ae=new Float32Array(h),J.setAttribute("position",new THREE.BufferAttribute(x,3)),J.setAttribute("color",new THREE.BufferAttribute(L,3)),J.setAttribute("size",new THREE.BufferAttribute(G,1)),J.setAttribute("alpha",new THREE.BufferAttribute(ae,1)),J.setAttribute("velocity",new THREE.BufferAttribute(A,3));var Q=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,Z=new THREE.ShaderMaterial({vertexShader:Q,fragmentShader:k,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(J,Z),t.add(r)}function ne(J,Q){return new Promise(function(k){try{var Z=512,fe=document.createElement("canvas");fe.width=fe.height=Z;var le=fe.getContext("2d"),ve=new DOMParser().parseFromString(J,"image/svg+xml"),ge=ve.querySelector("svg");if(!ge){k([]);return}var Me=parseFloat(ge.getAttribute("width")||512),ue=parseFloat(ge.getAttribute("height")||512),De=ge.getAttribute("viewBox");if(De){var Be=De.split(/[\s,]+/);Me=+Be[2],ue=+Be[3]}var Re=Math.min(Z/Me,Z/ue)*.9,Xe=(Z-Me*Re)/2,he=(Z-ue*Re)/2;le.save(),le.translate(Xe,he),le.scale(Re,Re),le.fillStyle="white",ve.querySelectorAll("path,rect,circle").forEach(function(l){if(l.tagName==="path"){var q=l.getAttribute("d");q&&le.fill(new Path2D(q))}else l.tagName==="rect"?le.fillRect(+l.getAttribute("x")||0,+l.getAttribute("y")||0,+l.getAttribute("width")||0,+l.getAttribute("height")||0):l.tagName==="circle"&&(le.beginPath(),le.arc(+l.getAttribute("cx")||0,+l.getAttribute("cy")||0,+l.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Le=le.getImageData(0,0,Z,Z).data,Ae=[],de=0;de<Z;de++)for(var _=0;_<Z;_++){var ce=(de*Z+_)*4;Le[ce+3]>30&&Ae.push({x:_,y:de,a:Le[ce+3]/255})}if(!Ae.length){k([]);return}for(var y=[],ce=0;ce<Q;ce++){var N=Ae[Math.floor(Math.random()*Ae.length)];y.push({x:(N.x-Z/2)*1.2+(Math.random()-.5)*1.65,y:-(N.y-Z/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*N.a,a:N.a})}k(y)}catch(l){console.error(l),k([])}})}function oe(J){B=J.length;for(var Q=0;Q<B;Q++){var k=J[Q],Z=Q*3;x[Z]=k.x,x[Z+1]=k.y+40,x[Z+2]=k.z,A[Z]=A[Z+1]=A[Z+2]=0,$[Z]=k.x,$[Z+1]=k.y,$[Z+2]=k.z;var fe=P[Math.floor(Math.random()*P.length)],le=.7+Math.random()*.4;L[Z]=fe.r*le,L[Z+1]=fe.g*le,L[Z+2]=fe.b*le,G[Q]=1.8+Math.random()*3.8,ae[Q]=.3+(k.a||.7)*.75}r.geometry.setDrawRange(0,B),["position","color","size","alpha"].forEach(function(ve){r.geometry.attributes[ve].needsUpdate=!0}),S=!0}function X(J){return ne(J,Math.min(h,d)).then(function(Q){Q.length&&r&&oe(Q)})}function j(J){if(!(!S||!B)){W+=J;for(var Q=0;Q<B;Q++){var k=Q*3,Z=Q*1.37;A[k]+=Math.sin(W*.4+Z)*.008+Math.sin(W*1.1+Z*2.3)*.003,A[k+1]+=Math.cos(W*.35+Z*.7)*.008+Math.sin(W*.9+Z*1.5)*.004,A[k+2]+=Math.sin(W*.25+Z*1.1)*.004,A[k+1]-=g*.06,A[k]+=Math.sin(W*.25+x[k+1]*.008)*o*.6,A[k+2]+=Math.cos(W*.3+x[k]*.008)*o*.3;var fe=$[k],le=$[k+1]+40,ve=$[k+2],ge=fe-x[k],Me=le-x[k+1],ue=ve-x[k+2],De=Math.sqrt(ge*ge+Me*Me+ue*ue),Be=(Q*48271&65535)/65535,Re=.003+Be*.003,Xe=1+Math.min(De*.002,.5),he=Re*Xe;A[k]+=ge*he,A[k+1]+=Me*he,A[k+2]+=ue*he;var Le=(Q*16807&65535)/65535,Ae=w*(.92+Le*.06);A[k]*=Ae,A[k+1]*=Ae,A[k+2]*=Ae,x[k]+=A[k],x[k+1]+=A[k+1],x[k+2]+=A[k+2];var de=Math.sqrt(Math.pow(x[k]-$[k],2)+Math.pow(x[k+1]-$[k+1],2)+Math.pow(x[k+2]-$[k+2],2));ae[Q]=.15+.55*(1-Math.min(de*.005,1))+Math.sin(W*1.5+Q*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}Y();for(var H=4e3,F=new THREE.BufferGeometry,s=new Float32Array(H*3),E=new Float32Array(H*3),v=0;v<H;v++){s[v*3]=(Math.random()-.5)*2200,s[v*3+1]=(Math.random()-.5)*1800,s[v*3+2]=-200-Math.random()*1800;var c=P[Math.floor(Math.random()*P.length)],p=.2+Math.random()*.3;E[v*3]=c.r*p,E[v*3+1]=c.g*p,E[v*3+2]=c.b*p}F.setAttribute("position",new THREE.BufferAttribute(s,3)),F.setAttribute("color",new THREE.BufferAttribute(E,3));var I=document.createElement("canvas");I.width=I.height=32;var M=I.getContext("2d"),te=M.createRadialGradient(16,16,0,16,16,16);te.addColorStop(0,"rgba(255,255,255,1)"),te.addColorStop(.3,"rgba(255,255,255,0.6)"),te.addColorStop(.7,"rgba(255,255,255,0.15)"),te.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=te,M.fillRect(0,0,32,32);var m=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(I),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),D=new THREE.Points(F,m);t.add(D);var O='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';X(O);var ie=new THREE.Clock,pe=!0,Se=new IntersectionObserver(function(J){pe=J[0].isIntersecting},{threshold:0});Se.observe(i);var _e=i.querySelectorAll("#logo-coords, #logo-drag-label");_e.forEach(function(J){J.parentElement.style.display="none"});var Ne=null;function Ce(){if(Ne=requestAnimationFrame(Ce),!!pe){var J=Math.min(ie.getDelta(),.05),Q=ie.elapsedTime;C+=R*J,r&&(r.rotation.y=C,r.position.y=5,r.scale.setScalar(.85));for(var k=0;k<H;k++)s[k*3+1]+=Math.sin(Q*.2+k)*.05,s[k*3]+=Math.cos(Q*.15+k*.5)*.03;F.attributes.position.needsUpdate=!0,D.rotation.y+=1e-4,D.position.x=-C*35*.35,a.position.x=300+Math.sin(Q*.3)*100,a.position.y=350+Math.cos(Q*.2)*80,u.intensity=2+Math.sin(Q*.5)*.4,f.intensity=.8+Math.sin(Q*.4+1)*.3,j(J),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(Ne),Se.disconnect(),t.traverse(function(J){J.geometry&&J.geometry.dispose(),J.material&&(J.material.map&&J.material.map.dispose(),J.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var Vt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function qt(i){let t=i.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(Vt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Un(t):Bt(t)}),function(){n=!0,e&&e()}}function Gt(i){let t=i.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(Vt).then(function(){n||(e=Ot(t))}),function(){n=!0,e&&e()}}function Un(i){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),n.add(u);var T=new THREE.PointLight(13931578,2.4,1200);T.position.set(-300,-100,300),n.add(T);var f=new THREE.PointLight(5913114,1.2,900);f.position.set(0,200,-300),n.add(f);var C=new THREE.PointLight(16750916,1.3,600);C.position.set(0,-250,200),n.add(C);var R=0,d=0,g=0,w=0,o=!1,h=0,r=0,x=Math.PI*2/6,A=new THREE.Vector2(9999,9999),$=new THREE.Raycaster,L=120,G=new THREE.Vector3(9999,9999,0),ae=new THREE.Vector3(9999,9999,0),B=new THREE.Vector3,S=!1,W=0,P=0,Y=8e4,ne=.03,oe=.95,X=.005,j=12e4,H=null,F,s,E,v,c,p,I=0,M=!1,te=!1,m=0,D=0,O=null,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function pe(){var z=new THREE.BufferGeometry;F=new Float32Array(j*3),s=new Float32Array(j*3),E=new Float32Array(j*3),v=new Float32Array(j*3),c=new Float32Array(j),p=new Float32Array(j),z.setAttribute("position",new THREE.BufferAttribute(F,3)),z.setAttribute("color",new THREE.BufferAttribute(v,3)),z.setAttribute("size",new THREE.BufferAttribute(c,1)),z.setAttribute("alpha",new THREE.BufferAttribute(p,1)),z.setAttribute("velocity",new THREE.BufferAttribute(s,3));var V=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=new THREE.ShaderMaterial({vertexShader:V,fragmentShader:b,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});H=new THREE.Points(z,U),n.add(H)}function Se(z,V){return new Promise(function(b){try{var U=512,se=document.createElement("canvas");se.width=se.height=U;var re=se.getContext("2d"),ze=new DOMParser().parseFromString(z,"image/svg+xml"),be=ze.querySelector("svg");if(!be){b([]);return}var Te=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ie=be.getAttribute("viewBox");if(Ie){var Ee=Ie.split(/[\s,]+/);Te=+Ee[2],ye=+Ee[3]}var Ge=Math.min(U/Te,U/ye)*.9,Ue=(U-Te*Ge)/2,xe=(U-ye*Ge)/2;re.save(),re.translate(Ue,xe),re.scale(Ge,Ge),re.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(we){if(we.tagName==="path"){var $e=we.getAttribute("d");$e&&re.fill(new Path2D($e))}else we.tagName==="rect"?re.fillRect(+we.getAttribute("x")||0,+we.getAttribute("y")||0,+we.getAttribute("width")||0,+we.getAttribute("height")||0):we.tagName==="circle"&&(re.beginPath(),re.arc(+we.getAttribute("cx")||0,+we.getAttribute("cy")||0,+we.getAttribute("r")||0,0,Math.PI*2),re.fill())}),re.restore();for(var He=re.getImageData(0,0,U,U).data,Oe=[],je=0;je<U;je++)for(var Je=0;Je<U;Je++){var Qe=(je*U+Je)*4;He[Qe+3]>30&&Oe.push({x:Je,y:je,a:He[Qe+3]/255})}if(!Oe.length){b([]);return}for(var at=[],Qe=0;Qe<V;Qe++){var Ye=Oe[Math.floor(Math.random()*Oe.length)];at.push({x:(Ye.x-U/2)*1.2+(Math.random()-.5)*1.65,y:-(Ye.y-U/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ye.a,a:Ye.a})}b(at)}catch(we){console.error(we),b([])}})}function _e(z){I=z.length;for(var V=0;V<I;V++){var b=z[V],U=V*3;F[U]=b.x,F[U+1]=b.y+40,F[U+2]=b.z,s[U]=s[U+1]=s[U+2]=0,E[U]=b.x,E[U+1]=b.y,E[U+2]=b.z;var se=ie[Math.floor(Math.random()*ie.length)],re=.7+Math.random()*.4;v[U]=se.r*re,v[U+1]=se.g*re,v[U+2]=se.b*re,c[V]=1.8+Math.random()*3.8,p[V]=.3+(b.a||.7)*.75}H.geometry.setDrawRange(0,I),["position","color","size","alpha"].forEach(function(ze){H.geometry.attributes[ze].needsUpdate=!0}),M=!0,te=!1,m=1}function Ne(z){return Se(z,Math.min(j,Y)).then(function(V){V.length&&H&&_e(V)})}function Ce(z){if(!(!M||!I)){D+=z;for(var V=0;V<I;V++){var b=V*3,U=V*1.37;if(s[b]+=Math.sin(D*.4+U)*.008+Math.sin(D*1.1+U*2.3)*.003,s[b+1]+=Math.cos(D*.35+U*.7)*.008+Math.sin(D*.9+U*1.5)*.004,s[b+2]+=Math.sin(D*.25+U*1.1)*.004,s[b+1]-=ne*.06,s[b]+=Math.sin(D*.25+F[b+1]*.008)*X*.6,s[b+2]+=Math.cos(D*.3+F[b]*.008)*X*.3,S&&de==="interactive"){var se=F[b]-G.x,re=F[b+1]-G.y,ze=F[b+2]-G.z,be=se*se+re*re+ze*ze,Te=L*L;if(be<Te&&be>.25){var ye=Math.sqrt(be),Ie=ye/L,Ee=(V*2654435761&65535)/65535,Ge=.6+Ee*.8,Ue=Math.pow(1-Ie,1.5+Ee),xe=1+Math.min(B.length()*.12,1),He=Ue*Ge*1.2*xe,Oe=1/ye;s[b]+=se*Oe*He,s[b+1]+=re*Oe*He,s[b+2]+=ze*Oe*He*.2;var je=.02+Ee*.06;s[b]+=B.x*Ue*je,s[b+1]+=B.y*Ue*je;var Je=Ue*.15;s[b]+=(Ee-.5)*Je,s[b+1]+=((V*48271&65535)/65535-.5)*Je}}var Qe=E[b],at=E[b+1]+40,Ye=E[b+2],we=Qe-F[b],$e=at-F[b+1],st=Ye-F[b+2],Mn=Math.sqrt(we*we+$e*$e+st*st),Rn=(V*48271&65535)/65535,Fn=.003+Rn*.003,zn=1+Math.min(Mn*.002,.5),mt=Fn*zn;s[b]+=we*mt,s[b+1]+=$e*mt,s[b+2]+=st*mt;var Ln=(V*16807&65535)/65535,ht=oe*(.92+Ln*.06);s[b]*=ht,s[b+1]*=ht,s[b+2]*=ht,F[b]+=s[b],F[b+1]+=s[b+1],F[b+2]+=s[b+2];var kn=Math.sqrt(Math.pow(F[b]-E[b],2)+Math.pow(F[b+1]-E[b+1],2)+Math.pow(F[b+2]-E[b+2],2));p[V]=.15+.55*(1-Math.min(kn*.005,1))+Math.sin(D*1.5+V*.01)*.05}H.geometry.attributes.position.needsUpdate=!0,H.geometry.attributes.alpha.needsUpdate=!0,H.geometry.attributes.velocity.needsUpdate=!0}}var J=new THREE.Matrix4,Q=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),k=new THREE.Vector3;function Z(z,V){var b=a.domElement.getBoundingClientRect();if(!(b.width===0||b.height===0)&&(A.set((z-b.left)/b.width*2-1,-((V-b.top)/b.height)*2+1),$.setFromCamera(A,e),$.ray.intersectPlane(Q,k))){ae.copy(G),H&&G.copy(k).applyMatrix4(J.copy(H.matrixWorld).invert()),B.subVectors(G,ae);var U=B.length();U>15&&B.multiplyScalar(15/U)}}var fe=null;function le(){return fe||(fe=i.closest('[data-flip-element="target"]')||i),fe}function ve(z,V){var b=le().getBoundingClientRect();return z>=b.left&&z<=b.right&&V>=b.top&&V<=b.bottom}var ge=i.querySelector("#logo-coords"),Me=i.querySelector("#logo-drag-label"),ue=!1;function De(z){if(W=z.clientX,P=z.clientY,t||de!=="interactive"){S=!1,G.set(9999,9999,0);return}var V=ve(z.clientX,z.clientY);if(V){S=!0,Z(z.clientX,z.clientY);var b=le().getBoundingClientRect(),U=Math.round(z.clientX-b.left),se=Math.round(z.clientY-b.top);ge&&(ge.textContent="X: "+U+"PX    Y: "+se+"PX")}else S=!1,G.set(9999,9999,0);o&&(R+=(z.clientX-h)*.005,g+=(z.clientY-r)*.005,g=Math.max(-Math.PI/2,Math.min(Math.PI/2,g)),h=z.clientX,r=z.clientY)}function Be(z){t||de!=="interactive"||ve(z.clientX,z.clientY)&&(o=!0,h=z.clientX,r=z.clientY)}function Re(){t||(o=!1,R=0,g=0,d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Re);function Xe(){for(var z=4e3,V=new THREE.BufferGeometry,b=new Float32Array(z*3),U=new Float32Array(z*3),se=0;se<z;se++){b[se*3]=(Math.random()-.5)*2200,b[se*3+1]=(Math.random()-.5)*1800,b[se*3+2]=-200-Math.random()*1800;var re=ie[Math.floor(Math.random()*ie.length)],ze=.2+Math.random()*.3;U[se*3]=re.r*ze,U[se*3+1]=re.g*ze,U[se*3+2]=re.b*ze}V.setAttribute("position",new THREE.BufferAttribute(b,3)),V.setAttribute("color",new THREE.BufferAttribute(U,3));var be=document.createElement("canvas");be.width=be.height=32;var Te=be.getContext("2d"),ye=Te.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=ye,Te.fillRect(0,0,32,32);var Ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ee=new THREE.Points(V,Ie);return Ee.userData={positions:b,count:z},n.add(Ee),Ee}pe();var he=Xe(),Le='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Ne(Le);var Ae=new THREE.Clock,de="spin",_=null;function ce(){if(t){de="spin";return}if(_===null){var z=document.querySelector(".scaling-element-video");_=z&&getComputedStyle(z).display!=="none"}if(!_){de="spin";return}var V=window._flipProgress||0;V>.85?de="interactive":V>.7?de="transition":de="spin"}var y="spin",N=!0,l=new IntersectionObserver(function(z){N=z[0].isIntersecting},{threshold:0});l.observe(i);var q=!1,K=null,ee=0;function ke(){q=!0,clearTimeout(K),K=setTimeout(function(){q=!1},150);var z=ve(W,P);z?(S=!0,Z(W,P)):(S=!1,G.set(9999,9999,0))}window.addEventListener("scroll",ke,{passive:!0});function Fe(){if(O=requestAnimationFrame(Fe),!!N){ee++;var z=Math.min(Ae.getDelta(),.05),V=Ae.elapsedTime;ce(),y==="interactive"&&de!=="interactive"&&(S=!1,G.set(9999,9999,0),o=!1);var b=de==="transition"||de==="interactive";if(b&&!ue?(ue=!0,Me&&(Me.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!b&&ue&&(ue=!1,Me&&(Me.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),y=de,S&&!ve(W,P)&&(S=!1,G.set(9999,9999,0)),de==="spin")d+=x*z,w+=(0-w)*.05;else if(de==="transition")d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),d+=(0-d)*.025,w+=(0-w)*.025;else{var U=R-d;U=U%(Math.PI*2),U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),d+=U*.12,w+=(g-w)*.12}H&&(H.rotation.x=w,H.rotation.y=d,H.scale.setScalar(1),H.position.y=-15);for(var se=he.userData.positions,re=0;re<he.userData.count;re++)se[re*3+1]+=Math.sin(V*.2+re)*.05,se[re*3]+=Math.cos(V*.15+re*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-d*35*.35,he.position.y=w*28*.35,u.position.x=300+Math.sin(V*.3)*100,u.position.y=350+Math.cos(V*.2)*80,T.intensity=2+Math.sin(V*.5)*.4,C.intensity=.8+Math.sin(V*.4+1)*.3,!(t&&q&&ee%4!==0)&&(Ce(z),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(O),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",ke),clearTimeout(K),l.disconnect(),n.traverse(function(z){z.geometry&&z.geometry.dispose(),z.material&&(z.material.map&&z.material.map.dispose(),z.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),H=null}}function Wt(i){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),u=Array.from(t.querySelectorAll("[data-load-text]")),T=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),f=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(T.length&&f.set(T,{autoAlpha:1},0),u.length>=2){let C=new SplitText(u[0],{type:"lines,chars",mask:"lines"}),R=new SplitText(u[1],{type:"lines,chars",mask:"lines"});gsap.set([C.chars,R.chars],{autoAlpha:0,yPercent:125}),gsap.set(u,{autoAlpha:1}),f.to(C.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),f.to(C.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),f.to(R.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),f.to(R.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return f}function Nt(i){let n=[...(i||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(d=>{let g=d.parentElement;g&&(d.style.whiteSpace="nowrap",e.has(g)||e.set(g,[]),e.get(g).push(d))});function a(d){let g=getComputedStyle(d);return d.clientWidth-parseFloat(g.paddingLeft)-parseFloat(g.paddingRight)}function u(d,g){if(g<=0)return;let w=parseFloat(getComputedStyle(d).fontSize)||16;for(let o=0;o<5;o++){let h=d.getBoundingClientRect().width;if(h<=0)break;let r=g/h;if(Math.abs(r-1)<.002)break;w*=r,d.style.fontSize=w+"px"}}function T(){e.forEach((d,g)=>{let w=a(g);d.forEach(o=>u(o,w))})}let f=null;function C(){f||(f=requestAnimationFrame(()=>{f=null,T()}))}let R;return window.ResizeObserver&&(R=new ResizeObserver(C),e.forEach((d,g)=>R.observe(g))),window.addEventListener("resize",C),T(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(T),()=>{f&&cancelAnimationFrame(f),R&&R.disconnect(),window.removeEventListener("resize",C),n.forEach(d=>{d.style.whiteSpace="",d.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},Xt=.08,Hn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Yt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function _n(i,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:i,transformOrigin:t}),n}function $t(i){var t=i.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var u=a.getAttribute("data-marker-direction")||"right",T=a.getAttribute("data-marker-theme")||"#000000",f=a.getAttribute("data-marker-scroll-start")||"top 90%",C=T.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(T).trim()||T,R=Yt[u]||Yt.right,d=Hn[a.getAttribute("data-highlight-marker-reveal")]||null;d&&(C=d.bar);var g=a.closest("[data-cursor-label]"),w={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,h=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){w.timeline&&w.timeline.kill(),w.scrollTrigger&&w.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(S){S.remove()}),w.listeners.forEach(function(S){S.el.removeEventListener(S.type,S.fn)}),w.listeners=[],o=!1;var x=r.lines,A=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(x.forEach(function(S,W){gsap.set(S,{position:"relative",overflow:"hidden"});var P=_n(C,R.origin);gsap.set(P,{[R.prop]:0}),S.appendChild(P),d&&(gsap.set(S,{zIndex:0,color:d.text}),gsap.set(P,{zIndex:-1})),A.to(P,{[R.prop]:1,duration:Ve.duration,ease:Ve.ease},W*Xt);var Y=function(){o&&(gsap.to(P,{[R.prop]:0,duration:Ve.duration,ease:Ve.ease}),d&&gsap.to(S,{color:d.hoverText,duration:Ve.duration,ease:Ve.ease}))},ne=function(){o&&(gsap.to(P,{[R.prop]:1,duration:Ve.duration,ease:Ve.ease}),d&&gsap.to(S,{color:d.text,duration:Ve.duration,ease:Ve.ease}))};!d&&e&&(S.addEventListener("mouseenter",Y),S.addEventListener("mouseleave",ne),w.listeners.push({el:S,type:"mouseenter",fn:Y},{el:S,type:"mouseleave",fn:ne}))}),w.timeline=A,g){A.kill();var $=a.querySelectorAll(".highlight-marker-bar"),L=function(S){gsap.to($,{[R.prop]:S,duration:Ve.duration,ease:Ve.ease,stagger:Xt,overwrite:!0})},G=function(){L(1)},ae=function(){L(0)};g.addEventListener("cursorlabel:enter",G),g.addEventListener("cursorlabel:leave",ae),w.listeners.push({el:g,type:"cursorlabel:enter",fn:G},{el:g,type:"cursorlabel:leave",fn:ae});return}var B=ScrollTrigger.create({trigger:a,start:f,once:!0,onEnter:function(){A.play()}});w.scrollTrigger=B}});w.split=h,n.push(w)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(u){u.el.removeEventListener(u.type,u.fn)}),a.split&&a.split.revert()})}}function Kt(i){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=i.querySelector("[data-cursor-marquee-status]");if(!a)return;let u=a.querySelectorAll("[data-cursor-marquee-text-target]"),T=i.querySelectorAll("[data-cursor-marquee-text]");if(!T.length)return;let f=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),C=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),R=null,d=g=>{f(g.clientX),C(g.clientY)};return window.addEventListener("pointermove",d,{passive:!0}),T.forEach(g=>{g.addEventListener("mouseenter",()=>{R&&clearTimeout(R);let w=g.getAttribute("data-cursor-marquee-text")||"",o=(w.length||1)/e;u.forEach(h=>{h.textContent=w,h.style.animationPlayState="running",h.style.animationDuration=o+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),g.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),R&&clearTimeout(R),R=setTimeout(()=>{u.forEach(w=>{w.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",d),clearTimeout(R),gsap.killTweensOf(a)}}function Zt(i){i.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function jt(i){let t=i.querySelectorAll("[data-flip-element='wrapper']"),n=i.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(f){window._flipProgress=f.progress}}}),t.forEach(function(f,C){let R=C+1;if(R<t.length){let d=t[R],g=d.getBoundingClientRect(),w=f.getBoundingClientRect(),o=g.top+window.pageYOffset+d.offsetHeight/2,h=w.top+window.pageYOffset+f.offsetHeight/2,r=o-h;e.add(Flip.fit(n,d,{duration:r,ease:"none"}))}})}a();let u,T=function(){clearTimeout(u),u=setTimeout(function(){a()},100)};return window.addEventListener("resize",T),function(){clearTimeout(u),window.removeEventListener("resize",T),e&&e.kill()}}var Bn="150%";function On(i){let t=[];return i.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let u=document.createElementNS("http://www.w3.org/2000/svg","tspan");u.textContent=a,n.append(u),t.push(u)}}),t}var Pt=new WeakMap;function Jt(i){let t=i.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(u){return Array.from(u.querySelectorAll("textPath")).map(function(T){return T.textContent})}),a=n.map(On);return a.forEach(function(u){gsap.set(u,{fillOpacity:0})}),Pt.set(i,{wrap:t,lines:n,lineChars:a}),function(){Pt.delete(i),n.forEach(function(u,T){u.querySelectorAll("textPath").forEach(function(f,C){f.textContent=e[T][C]})})}}function Qt(i){let t=Pt.get(i);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Bn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let u=t.lineChars[a];u.length&&n.fromTo(u,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/u.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function Et(i){var t=[];function n(o,h,r,x){o.addEventListener(h,r,x),t.push(function(){o.removeEventListener(h,r,x)})}i.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var h=o.getAttribute("data-player-src");if(!h)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(_){}try{r.removeAttribute("src"),r.load()}catch(_){}function x(_){o.getAttribute("data-player-status")!==_&&o.setAttribute("data-player-status",_)}function A(_){r.muted=!!_,o.setAttribute("data-player-muted",r.muted?"true":"false")}function $(_){o.setAttribute("data-player-fullscreen",_?"true":"false")}function L(_){o.setAttribute("data-player-activated",_?"true":"false")}o.hasAttribute("data-player-activated")||L(!1);var G=o.querySelector("[data-player-timeline]"),ae=o.querySelector("[data-player-progress]"),B=o.querySelector("[data-player-buffered]"),S=o.querySelector("[data-player-timeline-handle]"),W=o.querySelectorAll("[data-player-time-duration]"),P=o.querySelectorAll("[data-player-time-progress]"),Y=o.getAttribute("data-player-update-size"),ne=o.getAttribute("data-player-lazy"),oe=ne==="true",X=ne==="meta",j=o.getAttribute("data-player-autoplay")==="true",H=o.getAttribute("data-player-muted")==="true",F=!1;j?(A(!0),r.loop=!0):A(H),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),j&&(r.autoplay=!1);var s=!!r.canPlayType("application/vnd.apple.mpegurl"),E=s&&"ManagedMediaSource"in window,v=!!(window.Hls&&Hls.isSupported())&&!E;if(Y==="true"&&!X&&!oe){var c=r.preload;r.preload="metadata";var p=function(){R(o,Y,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",p),r.preload=c||""};n(r,"loadedmetadata",p,{once:!0}),r.src=h}function I(){w(h,v).then(function(_){_.width&&_.height&&R(o,Y,_.width,_.height),W.length&&isFinite(_.duration)&&_.duration>0&&u(W,a(_.duration)),C(o,F)})}var M=!1,te=!1,m="";function D(){if(!M){if(M=!0,o._hls){try{o._hls.destroy()}catch(ce){}o._hls=null}if(E)r.preload=oe||X?"auto":r.preload,r.src=h,n(r,"loadedmetadata",function(){C(o,F),Y==="true"&&R(o,Y,r.videoWidth,r.videoHeight),W.length&&u(W,a(r.duration))},{once:!0});else if(v){var _=new Hls({maxBufferLength:10});_.attachMedia(r),_.on(Hls.Events.MEDIA_ATTACHED,function(){_.loadSource(h)}),_.on(Hls.Events.MANIFEST_PARSED,function(){if(C(o,F),Y==="true"){var ce=_.levels||[],y=T(ce);y&&y.width&&y.height&&R(o,Y,y.width,y.height)}}),_.on(Hls.Events.LEVEL_LOADED,function(ce,y){y&&y.details&&isFinite(y.details.totalduration)&&W.length&&u(W,a(y.details.totalduration))}),o._hls=_}else r.src=h}}X?(I(),r.preload="none"):oe?r.preload="none":D();function O(){te=!0,r.paused||r.ended?((oe||X)&&!M&&D(),F=!0,m="",x("loading"),f(r)):(m="manual",r.pause())}function ie(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function pe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function _e(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Ne(){pe()||r.webkitDisplayingFullscreen?_e():Se()}n(document,"fullscreenchange",function(){$(pe())}),n(document,"webkitfullscreenchange",function(){$(pe())}),n(r,"webkitbeginfullscreen",function(){$(!0)}),n(r,"webkitendfullscreen",function(){$(!1)}),n(o,"click",function(_){var ce=_.target.closest("[data-player-control]");if(!(!ce||!o.contains(ce))){var y=ce.getAttribute("data-player-control");y==="play"||y==="pause"||y==="playpause"?O():y==="mute"?ie():y==="fullscreen"&&Ne()}});function Ce(){W.length&&u(W,a(r.duration)),P.length&&u(P,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),d(o,Y,r)}),n(r,"loadeddata",function(){d(o,Y,r)}),n(r,"playing",function(){d(o,Y,r)}),n(r,"durationchange",Ce);var J;function Q(){if(r.duration){var _=r.currentTime/r.duration*100;ae&&(ae.style.transform="translateX("+(-100+_)+"%)"),S&&(S.style.left=_+"%")}}function k(){Q(),!r.paused&&!r.ended&&(J=requestAnimationFrame(k))}function Z(){if(!(!B||!r.duration||!r.buffered.length)){var _=r.buffered.end(r.buffered.length-1),ce=_/r.duration*100;B.style.transform="translateX("+(-100+ce)+"%)"}}if(n(r,"progress",Z),n(r,"loadedmetadata",Z),n(r,"durationchange",Z),n(r,"play",function(){L(!0),cancelAnimationFrame(J),k(),x("playing")}),n(r,"playing",function(){F=!1,x("playing")}),n(r,"pause",function(){F=!1,cancelAnimationFrame(J),Q(),x("paused")}),n(r,"waiting",function(){x("loading")}),n(r,"canplay",function(){C(o,F)}),n(r,"ended",function(){F=!1,cancelAnimationFrame(J),Q(),x("paused"),L(!1)}),G){let _=function(K){ue||(ue=G.getBoundingClientRect());var ee=(K-ue.left)/ue.width;return ee<0&&(ee=0),ee>1&&(ee=1),ee},ce=function(K){if(r.duration){var ee=K*100;ae&&(ae.style.transform="translateX("+(-100+ee)+"%)"),S&&(S.style.left=ee+"%"),P.length&&u(P,a(K*r.duration))}},y=function(K){r.duration&&(K-ge<Me||(ge=K,r.currentTime=ve))},N=function(K){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),o.setAttribute("data-timeline-drag","true"),ue=G.getBoundingClientRect();var ee=_(K.clientX);ve=ee*r.duration,ce(ee),y(performance.now()),G.setPointerCapture&&G.setPointerCapture(K.pointerId),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",q,{passive:!0}),K.preventDefault()}},l=function(K){if(fe){var ee=_(K.clientX);ve=ee*r.duration,ce(ee),y(performance.now()),K.preventDefault()}},q=function(){fe&&(fe=!1,o.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=ve,le?f(r):(Q(),Ce()),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",q))};var fe=!1,le=!1,ve=0,ge=0,Me=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(G,"pointerdown",N,{passive:!1}),S&&n(S,"pointerdown",N,{passive:!1})}var De,Be=3e3;function Re(_){o.getAttribute("data-player-hover")!==_&&o.setAttribute("data-player-hover",_)}function Xe(){clearTimeout(De),De=setTimeout(function(){Re("idle")},Be)}function he(){Re("active"),Xe()}n(o,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var Le=!1;function Ae(_){var ce=o.getBoundingClientRect();_.clientX>=ce.left&&_.clientX<=ce.right&&_.clientY>=ce.top&&_.clientY<=ce.bottom&&he()}if(n(o,"pointerenter",function(){he(),Le||(Le=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(o,"pointerleave",function(){Re("idle"),clearTimeout(De),Le&&(Le=!1,window.removeEventListener("pointermove",Ae))}),j){var de=new IntersectionObserver(function(_){_.forEach(function(ce){var y=ce.isIntersecting&&ce.intersectionRatio>0;y?((oe||X)&&!M&&D(),r.paused?(m="",F=!0,x("loading"),f(r)):x("playing")):!r.paused&&!r.ended&&(m="io",r.pause(),x("paused"))})},{threshold:.1});de.observe(o)}t.push(function(){if(cancelAnimationFrame(J),clearTimeout(De),de&&de.disconnect(),o._hls){try{o._hls.destroy()}catch(_){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(_){}})});function e(o){return(o<10?"0":"")+o}function a(o){if(!isFinite(o)||o<0)return"00:00";var h=Math.floor(o),r=Math.floor(h/3600),x=Math.floor(h%3600/60),A=h%60;return r>0?r+":"+e(x)+":"+e(A):e(x)+":"+e(A)}function u(o,h){o.forEach(function(r){r.textContent=h})}function T(o){return!o||!o.length?null:o.reduce(function(h,r){return(r.width||0)>(h.width||0)?r:h},o[0])}function f(o){var h=o.play();h&&typeof h.then=="function"&&h.catch(function(){})}function C(o,h){!h&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function R(o,h,r,x){if(!(h!=="true"||!r||!x)){var A=o.querySelector("[data-player-before]");A&&(A.style.paddingTop=x/r*100+"%")}}function d(o,h,r){if(h==="true"){var x=o.querySelector("[data-player-before]");if(x){var A=x.style.paddingTop&&x.style.paddingTop!=="0%";!A&&r.videoWidth&&r.videoHeight&&R(o,h,r.videoWidth,r.videoHeight)}}}function g(o,h){try{return new URL(h,o).toString()}catch(r){return h}}function w(o,h){return new Promise(function(r){if(h&&window.Hls&&Hls.isSupported())try{var x=new Hls,A={width:0,height:0,duration:NaN},$=!1,L=!1;x.on(Hls.Events.MANIFEST_PARSED,function(B,S){var W=S&&S.levels||x.levels||[],P=T(W);P&&P.width&&P.height&&(A.width=P.width,A.height=P.height,$=!0)}),x.on(Hls.Events.LEVEL_LOADED,function(B,S){S&&S.details&&isFinite(S.details.totalduration)&&(A.duration=S.details.totalduration,L=!0)}),x.on(Hls.Events.ERROR,function(){try{x.destroy()}catch(B){}r(A)}),x.on(Hls.Events.LEVEL_LOADED,function(){try{x.destroy()}catch(B){}r(A)}),x.loadSource(o);return}catch(B){r({width:0,height:0,duration:NaN});return}function G(B){for(var S=B.split(/\r?\n/),W=0,P=0,Y=null,ne=null,oe=0;oe<S.length;oe++){var X=S[oe];if(X.indexOf("#EXT-X-STREAM-INF:")===0)ne=X;else if(ne&&X&&X[0]!=="#"){Y||(Y=X.trim());var j=/RESOLUTION=(\d+)x(\d+)/.exec(ne);if(j){var H=parseInt(j[1],10),F=parseInt(j[2],10);H>W&&(W=H,P=F)}ne=null}}return{bestW:W,bestH:P,media:Y}}function ae(B){for(var S=0,W=/#EXTINF:([\d.]+)/g,P;P=W.exec(B);)S+=parseFloat(P[1]);return S}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(B){if(!B.ok)throw new Error("master");return B.text()}).then(function(B){var S=G(B);if(!S.media){r({width:S.bestW||0,height:S.bestH||0,duration:NaN});return}var W=g(o,S.media);return fetch(W,{credentials:"omit",cache:"no-store"}).then(function(P){if(!P.ok)throw new Error("media");return P.text()}).then(function(P){r({width:S.bestW||0,height:S.bestH||0,duration:ae(P)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var Vn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",qn="(min-width: 768px)";function tn(i){if(!i.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=Et(i),n=en(i);else{let e=!1;return ct(Vn).catch(function(){}).then(function(){e||(t=Et(i),n=en(i))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function en(i){if(!i.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",u=!1,T,f,C,R,d,g,w="",o="",h="",r=(c,p=i)=>p.querySelector(c),x=c=>r(`[data-mini-showreel-lightbox="${c}"]`),A=c=>r(`[data-mini-showreel-player="${c}"]`),$=c=>c.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",c)||c,L=(c,p)=>{let I=c.width,M=I/p;return M>c.height&&(M=c.height,I=M*p),{left:c.left+(c.width-I)/2,top:c.top+(c.height-M)/2,width:I,height:M}},G=c=>{let p=$(c).getBoundingClientRect(),I=c.getBoundingClientRect(),M=I.width>0&&I.height>0?I.width/I.height:16/9;return L(p,M)},ae=(c,p)=>gsap.set(c,{position:"fixed",left:p.left,top:p.top,width:p.width,height:p.height,margin:0,x:0,y:0});function B(c){a&&i.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(p=>p.setAttribute("data-mini-showreel-status",c))}function S(){o=(T==null?void 0:T.style.zIndex)||"",h=(f==null?void 0:f.style.zIndex)||"",T&&(T.style.zIndex=String(e)),f&&(f.style.zIndex=String(e))}function W(){T&&(T.style.zIndex=o),f&&(f.style.zIndex=h)}function P(c){let p=A(c);if(!p)return;let I=p.querySelector("[data-bunny-player-init]"),M=p.querySelector("video");if(M){if(I){let te=I.querySelector('[data-player-control="play"], [data-player-control="playpause"]');te&&(M.paused||M.ended)&&te.click();return}try{M.play()}catch(te){}}}function Y(c){let p=A(c);if(!p)return;let I=p.querySelector("[data-bunny-player-init]"),M=p.querySelector("video");M&&(M.muted=!0,I&&I.setAttribute("data-player-muted","true"),(M.paused||M.ended)&&P(c))}function ne(){W(),a="",u=!1,T=f=C=R=d=g=null,w="",o="",h="",Pe.start()}function oe(c){if(!c||u||(T=x(c),f=A(c),!T||!f)||(C=r("[data-mini-showreel-target]",T),!C))return;a=c,u=!0,Pe.stop(),f.dataset.flipId=a,w=f.style.cssText||"",R=f.parentElement,d=f.nextSibling,S(),B("active"),P(a);let p=Flip.getState(f),I=G(C);T.appendChild(f),ae(f,I),g=Flip.from(p,{duration:t,ease:n,absolute:!0,scale:!1})}function X(c){!u||!f||c&&c!==a||(Y(a),B("not-active"),g&&g.kill(),g=Flip.fit(f,R,{duration:t,ease:n,scale:!1,onComplete:()=>{R.insertBefore(f,d),f.style.cssText=w,ne()}}))}function j(){!u||!f||(g&&g.kill(),Y(a),B("not-active"),R.insertBefore(f,d),f.style.cssText=w,ne())}function H(){!u||!f||!C||ae(f,G(C))}function F(c){let p=c.target.closest("[data-mini-showreel-open]");p&&(c.preventDefault(),oe(p.getAttribute("data-mini-showreel-open")||""))}function s(c){let p=c.target.closest("[data-mini-showreel-close]");p&&(c.preventDefault(),X(p.getAttribute("data-mini-showreel-close")||""))}function E(c){c.key==="Escape"&&X("")}let v=gsap.matchMedia();return v.add(qn,function(){return i.addEventListener("click",F),document.addEventListener("click",s),window.addEventListener("keydown",E),window.addEventListener("resize",H),function(){j(),i.removeEventListener("click",F),document.removeEventListener("click",s),window.removeEventListener("keydown",E),window.removeEventListener("resize",H)}}),function(){v.revert(),j()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",i=>{it.x=i.clientX,it.y=i.clientY,it.known=!0},{passive:!0});function et(i){let t=e=>i(e.clientX,e.clientY),n=()=>{it.known&&i(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,We=1080,wt="#E5E5E5",St="#000000",nn="http://www.w3.org/2000/svg";function rn(i){let t=i.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(nn,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${We}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(v,c)=>{let p=document.createElementNS(nn,v);return p.setAttribute("fill",c),n.appendChild(p),p},a=e("polygon",wt),u=e("polygon",St),T=e("rect",St),f=e("rect",wt),C=e("rect",wt),R=e("rect",St);[T,f,C,R].forEach(v=>v.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let d=(v,c,p,I,M)=>{v.setAttribute("x",c),v.setAttribute("y",p),v.setAttribute("width",Math.max(0,I)),v.setAttribute("height",Math.max(0,M))},g={x:qe*(2/3),y:We*(1/3)},w=.1,o=.9,h={x:g.x,y:g.y},r={x:g.x,y:g.y},x={x:g.x,y:g.y},A=!1,$=()=>gsap.to(x,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:$}),L=()=>gsap.to(x,{y:gsap.utils.random(We*.193,We*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:L});$(),L();function G(){let v=gsap.utils.clamp(qe*w,qe*o,h.x),c=qe-v,p=gsap.utils.clamp(We*w,We*o,h.y),I=We-p;a.setAttribute("points",`0,${p} ${v},0 ${qe},${p} ${qe},${We} 0,${We}`),u.setAttribute("points",`${qe},${p} ${v},0 ${v},${p}`),d(T,0,p,v,I);let M=v*.25,te=I*(2/3);d(f,v/2-M/2,p+I-te,M,te),d(C,v,p,c,I);let m=c*.5,D=I/3;d(R,v+c/2-m/2,p+I/2-D/2,m,D)}let ae=.1,B=.03;function S(){let c=1-Math.pow(1-(A?ae:B),gsap.ticker.deltaRatio(60)),p=A?r:x;h.x+=(p.x-h.x)*c,h.y+=(p.y-h.y)*c,G()}let W=(v,c)=>{let p=t.getBoundingClientRect();!p.width||!p.height||(r.x=gsap.utils.clamp(0,qe,(v-p.left)/p.width*qe),r.y=gsap.utils.clamp(0,We,(c-p.top)/p.height*We),A=!0)},P=()=>{A=!1},Y=(v,c)=>{let p=t.getBoundingClientRect();v>=p.left&&v<=p.right&&c>=p.top&&c<=p.bottom?W(v,c):P()},oe=window.matchMedia("(hover: hover) and (pointer: fine)").matches?et(Y):null,X=v=>{let c=v.touches[0];c&&W(c.clientX,c.clientY)},j={passive:!0};t.addEventListener("touchstart",X,j),t.addEventListener("touchmove",X,j),t.addEventListener("touchend",P,j),t.addEventListener("touchcancel",P,j);let H=!1,F=()=>{H||(H=!0,gsap.ticker.add(S))},s=()=>{H&&(H=!1,gsap.ticker.remove(S))},E=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:v=>v.isActive?F():s()});return G(),F(),function(){s(),E.kill(),gsap.killTweensOf(x),oe&&oe(),t.removeEventListener("touchstart",X,j),t.removeEventListener("touchmove",X,j),t.removeEventListener("touchend",P,j),t.removeEventListener("touchcancel",P,j),n.remove()}}var Gn="http://www.w3.org/2000/svg";var Wn="#AFAFAF",Nn="#000000";var Xn=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Yn=0,on=(i,t)=>{if(i<0||t<0||i>=20||t>=20)return!1;let n=20/2;return Math.hypot(i+.5-n,t+.5-n)<=n},Ze=(i,t)=>{let n=document.createElementNS(Gn,i);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function an(i){let t=i.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++Yn;e.setAttribute("data-pulse-dots-paused","");let u=Ze("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});u.style.setProperty("--pd-step","30px");let T=Ze("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});T.append(Ze("feGaussianBlur",{in:"SourceGraphic",stdDeviation:3.9375.toFixed(2)}),Ze("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let f=Ze("defs",{});f.appendChild(T);let C=Ze("rect",{width:1e3,height:1e3,fill:Wn}),R=Ze("g",{filter:`url(#${a})`,fill:Nn});for(let g=0;g<20;g++)for(let w=0;w<20;w++){if(!on(w,g))continue;let o=Xn.filter($=>on(w+$.dx,g+$.dy)),h=o[Math.floor(Math.random()*o.length)],r=200+w*30+26.25/2,x=200+g*30+26.25/2,A=Ze("g",{transform:`rotate(${h.deg} ${r} ${x})`});A.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*5e3)}ms`),A.append(Ze("circle",{class:"pulse-dots__dot is--first",cx:r,cy:x,r:26.25/2}),Ze("circle",{class:"pulse-dots__dot is--last",cx:r,cy:x,r:26.25/2})),R.appendChild(A)}u.append(f,C,R),e.appendChild(u);let d=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:g=>e.toggleAttribute("data-pulse-dots-paused",!g.isActive)});e.toggleAttribute("data-pulse-dots-paused",!d.isActive),n.push(()=>{d.kill(),e.removeAttribute("data-pulse-dots-paused"),u.remove()})}),()=>n.forEach(e=>e())}var vt=`#version 300 es
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
}`,cn=`#version 300 es
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
}`,ln=[`#version 300 es
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
}`],un=`#version 300 es
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
}fragColor = color;}`,vn=`#version 300 es
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
}`,fn=[`#version 300 es
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
}`],mn=`#version 300 es
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
}`;var Tt=60,Kn=1.5,Zn=1,hn=150,At=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function gn(i){let t=i.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function u(s,E){let v=e.createShader(s);return e.shaderSource(v,E),e.compileShader(v),e.getShaderParameter(v,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(v)),v}let T=[];function f(s,E=sn){let v=e.createProgram(),c=u(e.VERTEX_SHADER,E),p=u(e.FRAGMENT_SHADER,s);e.attachShader(v,c),e.attachShader(v,p),e.bindAttribLocation(v,0,"aVertexPosition"),e.bindAttribLocation(v,1,"aTextureCoord"),e.linkProgram(v),e.deleteShader(c),e.deleteShader(p),e.getProgramParameter(v,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(v));let I={},M=e.getProgramParameter(v,e.ACTIVE_UNIFORMS);for(let m=0;m<M;m++){let D=e.getActiveUniform(v,m);I[D.name]=e.getUniformLocation(v,D.name)}let te={p:v,loc:I};return T.push(te),te}let C={bg:f(cn,vt),shapes:ln.map(s=>f(s,un)),trailSim:f(vn,vt),trail:f(dn),blur:fn.map(s=>f(s)),bloom:pn.map(s=>f(s)),gmap:f(mn,vt)},R=e.createVertexArray();e.bindVertexArray(R);let d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let g=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let w=[];function o(s,E,v=!1){let c=e.createTexture();e.bindTexture(e.TEXTURE_2D,c),v&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,s,E,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,s,E,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let p=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,p),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let I={tex:c,fb:p,w:s,h:E};return w.push(I),I}function h(){w.forEach(s=>{e.deleteTexture(s.tex),e.deleteFramebuffer(s.fb)}),w.length=0}function r(s,E,v,c){e.useProgram(s.p);let p=E?E.w:n.width,I=E?E.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,E?E.fb:null),e.viewport(0,0,p,I);let M=s.loc;M.uMVMatrix&&e.uniformMatrix4fv(M.uMVMatrix,!1,At),M.uPMatrix&&e.uniformMatrix4fv(M.uPMatrix,!1,At),M.uTextureMatrix&&e.uniformMatrix4fv(M.uTextureMatrix,!1,At),M.uResolution&&e.uniform2f(M.uResolution,p,I),M.uArtboardResolution&&e.uniform2f(M.uArtboardResolution,1920,1920),M.uAspectRatio&&e.uniform1f(M.uAspectRatio,1),M.uMousePos&&e.uniform2f(M.uMousePos,x.x,x.y),M.uIsMask&&e.uniform1i(M.uIsMask,0),M.uParentTrackMouse&&e.uniform1f(M.uParentTrackMouse,0);let te=0;Object.keys(v).forEach(m=>{M[m]&&(e.activeTexture(e.TEXTURE0+te),e.bindTexture(e.TEXTURE_2D,v[m].tex),e.uniform1i(M[m],te),te++)}),Object.keys(c||{}).forEach(m=>{if(!M[m])return;let D=c[m];Array.isArray(D)?e.uniform2f(M[m],D[0],D[1]):e.uniform1f(M[m],D)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let x={x:.5,y:.5},A={x:.5,y:.5},$=0,L=null,G=0;function ae(){h();let s=Math.min(Kn,window.devicePixelRatio||1),E=Math.max(1,Math.round(t.clientWidth*s)),v=Math.max(1,Math.round(t.clientHeight*s));n.width=E,n.height=v;let c=M=>[Math.max(1,Math.round(E*M)),Math.max(1,Math.round(v*M))];L={a:o(E,v),b:o(E,v),pp:[o(...c(.5),!0),o(...c(.5),!0)],trail:o(E,v),blur1:o(...c(1)),blur2:o(...c(1)),blur3:o(...c(1)),blur4:o(...c(1)),bth:o(...c(1)),bd1:o(...c(1)),bd2:o(...c(1)),bs1:o(...c(1)),bs2:o(...c(1)),bloom:o(E,v)},r(C.bg,L.a,{});let p=L.a,I=L.b;C.shapes.forEach(M=>{r(M,I,{uBgTexture:p});let te=p;p=I,I=te}),L.base=p,G=0}function B(){if(!L)return;let s=L.pp[G],E=L.pp[1-G];r(C.trailSim,E,{uPingPongTexture:s},{uTime:$,uPreviousMousePos:[A.x,A.y]}),G=1-G,r(C.trail,L.trail,{uTexture:L.base,uPingPongTexture:E}),r(C.blur[0],L.blur1,{uTexture:L.trail}),r(C.blur[1],L.blur2,{uTexture:L.blur1}),r(C.blur[2],L.blur3,{uTexture:L.blur2}),r(C.blur[3],L.blur4,{uTexture:L.blur3});let v=L.blur4;r(C.bloom[0],L.bth,{uTexture:v}),r(C.bloom[1],L.bd1,{uTexture:L.bth}),r(C.bloom[2],L.bd2,{uTexture:L.bd1,uBgTexture:v}),r(C.bloom[3],L.bs1,{uTexture:L.bd2}),r(C.bloom[4],L.bs2,{uTexture:L.bs1,uBgTexture:v}),r(C.bloom[5],L.bloom,{uTexture:L.bs2,uBgTexture:v}),r(C.gmap,null,{uTexture:L.bloom},{uTime:0}),A.x=x.x,A.y=x.y}let S=hn,W=s=>{let E=n.getBoundingClientRect();!E.width||!E.height||(x.x=(s.clientX-E.left)/E.width,x.y=1-(s.clientY-E.top)/E.height,S=0,X())};window.addEventListener("pointermove",W,{passive:!0});let P=null,Y=0,ne=!1;function oe(s){if(!ne||S>=hn){P=null;return}if(P=requestAnimationFrame(oe),s-Y<1e3/Tt-1)return;let E=Y?Math.min(s-Y,100):1e3/Tt;Y=s,$+=Zn*(E/(1e3/Tt)),B(),S++}function X(){ne&&!P&&(Y=0,P=requestAnimationFrame(oe))}let j=new IntersectionObserver(([s])=>{ne=s.isIntersecting,ne?X():P&&(cancelAnimationFrame(P),P=null)});j.observe(t);let H=null,F=new ResizeObserver(()=>{clearTimeout(H),H=setTimeout(()=>{ae(),B()},60)});return F.observe(t),ae(),B(),function(){P&&cancelAnimationFrame(P),P=null,clearTimeout(H),j.disconnect(),F.disconnect(),window.removeEventListener("pointermove",W),h(),T.forEach(v=>e.deleteProgram(v.p)),e.deleteBuffer(d),e.deleteBuffer(g),e.deleteVertexArray(R);let E=e.getExtension("WEBGL_lose_context");E&&E.loseContext(),n.remove()}}function xn(i){let t=i.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",u="rgba(0, 0, 0, 0.2)",T="rgba(0, 0, 0, 0.75)",f=2.125,C=1.5,R=24,d=.5,g="20px",w=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},h={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},x=[],A,$,L,G,ae,B,S=performance.now();function W(m,D){let O=document.createElement("div");O.style.cssText=`position:absolute;visibility:hidden;width:${m};`,D.appendChild(O);let ie=O.getBoundingClientRect().width;return O.remove(),ie}function P(m,D){let O=document.createElement("span");O.style.color=m,D.appendChild(O);let ie=getComputedStyle(O).color;O.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ie,Se.fillRect(0,0,1,1);let _e=[...Se.getImageData(0,0,1,1).data];return _e[3]/=255,_e}function Y(m,D,O){return`rgba(${m.map((ie,pe)=>ie+(D[pe]-ie)*O).join(",")})`}function ne(m,D){Object.assign(m,{from:m.value,to:D,start:performance.now()})}function oe(m,D){if(!d)return m.value=m.to;let O=Math.min(Math.max((D-m.start)/(d*1e3),0),1);m.value=m.from+(m.to-m.from)*(1-Math.pow(1-O,4))}t.forEach(m=>{let D=document.createElement("canvas"),O=D.getContext("2d");D.setAttribute("aria-hidden","true"),Object.assign(D.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(m).position==="static"&&(m.style.position="relative"),m.prepend(D),x.push({element:m,canvas:D,ctx:O,width:0,height:0,visible:!1,inactive:P(m.getAttribute("data-dots-color-inactive")||u,m),active:P(m.getAttribute("data-dots-color-active")||T,m)})});function X(){return x.some(({element:m})=>{let D=m.getBoundingClientRect();return o.x>=D.left&&o.x<=D.right&&o.y>=D.top&&o.y<=D.bottom})}function j(m,D){let O=m.element.getBoundingClientRect(),ie=O.left-D.left,pe=O.top-D.top,Se=o.cx-D.left,_e=o.cy-D.top,Ne=f*(1+(C-1)*r.value);m.ctx.clearRect(0,0,m.width,m.height);for(let Ce=0;Ce<m.rows;Ce++){let J=m.oy+Ce*m.sy,Q=pe+J;for(let k=0;k<m.cols;k++){let Z=m.ox+k*m.sx,fe=ie+Z,le=w&&h.value?Math.max(0,1-Math.hypot(fe-Se,Q-_e)/ae)*h.value:0,ve=$*(1+(Ne-1)*le);m.ctx.fillStyle=Y(m.inactive,m.active,le),a==="square"?m.ctx.fillRect(Z-ve/2,J-ve/2,ve,ve):(m.ctx.beginPath(),m.ctx.arc(Z,J,ve/2,0,Math.PI*2),m.ctx.fill())}}}function H(m=!1){let D=t[0].getBoundingClientRect();x.forEach(O=>(!m||O.visible)&&j(O,D))}function F(m){if(B=null,!x.some(O=>O.visible))return;let D=Math.min((m-S)/1e3,.1);if(S=m,oe(h,m),oe(r,m),!d)o.cx=o.x,o.cy=o.y;else{let O=1-Math.exp(-D*6/d);o.cx+=(o.x-o.cx)*O,o.cy+=(o.y-o.cy)*O}H(!0),B=requestAnimationFrame(F)}function s(){w&&!B&&x.some(m=>m.visible)&&(S=performance.now(),B=requestAnimationFrame(F))}function E(){A=Math.min(devicePixelRatio||1,2),$=W(e,t[0]),L=W(n,t[0]),G=$+L,ae=G*R;let m=W(g,t[0])+$/2,D=O=>{let ie=O-2*m,pe=ie>=0?Math.floor(ie/G)+1:0;return{count:pe,offset:m,step:pe>1?ie/(pe-1):G}};x.forEach(O=>{let ie=O.element.getBoundingClientRect();O.width=ie.width,O.height=ie.height;let pe=D(ie.width),Se=D(ie.height);O.cols=pe.count,O.ox=pe.offset,O.sx=pe.step,O.rows=Se.count,O.oy=Se.offset,O.sy=Se.step,O.canvas.width=Math.round(ie.width*A),O.canvas.height=Math.round(ie.height*A),O.ctx.setTransform(A,0,0,A,0,0)}),H(),s()}let v=(m,D)=>{o.x=m,o.y=D;let O=X();O!==o.active&&(o.active=O,ne(h,+O),O?(o.cx=o.x,o.cy=o.y):ne(r,0)),s()},c=null,p=()=>o.active&&ne(r,1),I=()=>ne(r,0);w&&(c=et(v),window.addEventListener("pointerdown",p),window.addEventListener("pointerup",I));let M=new IntersectionObserver(m=>{m.forEach(D=>{let O=x.find(ie=>ie.element===D.target);O&&(O.visible=D.isIntersecting)}),w?s():H(!0)}),te=new ResizeObserver(E);return t.forEach(m=>{M.observe(m),te.observe(m)}),window.addEventListener("resize",E),E(),function(){B&&cancelAnimationFrame(B),B=null,w&&(c&&c(),window.removeEventListener("pointerdown",p),window.removeEventListener("pointerup",I)),window.removeEventListener("resize",E),M.disconnect(),te.disconnect(),x.forEach(m=>m.canvas.remove()),x.length=0}}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},bn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},jn=i=>{let t=Math.floor(i),n=i-t,e=n*n*(3-2*n);return bn(t)*(1-e)+bn(t+1)*e};function yn(i){let t=i.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],u=null,T=0,f=18,C=0,R=0,d=0,g=-1e5,w=-1e5,o=!1,h=!1;function r(){u&&u.revert(),t.textContent="";let P=getComputedStyle(t);T=parseFloat(P.paddingTop),f=parseFloat(P.lineHeight),C=t.offsetHeight;let Y=Math.max(1,Math.floor((C-T-parseFloat(P.paddingBottom))/f)),ne=document.createDocumentFragment();for(let oe=0;oe<Y;oe++){let X=document.createElement("div");X.className="type-field__row",X.textContent=n,ne.appendChild(X)}t.appendChild(ne),t.setAttribute("aria-hidden","true"),u=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((oe,X)=>({chars:oe.querySelectorAll(".type-field__char"),cur:a[X]?a[X].cur:0,drawn:0}))}})}function x(P){let Y=Math.max(0,Math.min(P.chars.length,Math.round(P.cur)));if(Y===P.drawn)return;let ne=Math.min(Y,P.drawn),oe=Math.max(Y,P.drawn);for(let X=ne;X<oe;X++)P.chars[X].style.visibility=X<Y?"visible":"hidden";P.drawn=Y}function A(P,Y){if(!a.length)return;let ne=Math.min(Y,50)/16.667,oe=E=>1-Math.pow(1-E,ne),X=Pe.scroll,j=Math.min(Math.max(R-X,0),d-X-C);w+=(g-j-T-w)*oe(rt.followEase);let H=Math.floor(w/f),F=X*.004,s=o&&g>=R-X&&g<=d-X;for(let E=0;E<a.length;E++){let v=a[E],c=v.chars.length,p=Math.abs(E-H),I=0;if(s){if(p===0)I=c;else if(p<=rt.radius){let M=1-p/(rt.radius+1);I=1+Math.min(rt.maxSide,M*(1-rt.ragged/2+rt.ragged*jn(E*1.3+F)))*(c-1)}}v.cur+=(I-v.cur)*oe(rt.ease),x(v)}}function $(){h||(gsap.ticker.add(A),h=!0)}function L(){h&&(gsap.ticker.remove(A),h=!1)}let G=et((P,Y)=>{w<-1e4&&(w=Y),g=Y,o=!0}),ae=()=>{o=!1};document.documentElement.addEventListener("mouseleave",ae),r();let B=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(P){R=P.start+window.innerHeight,d=P.end},onToggle(P){P.isActive?$():L()}});B.isActive&&$();let S,W=()=>{clearTimeout(S),S=setTimeout(()=>{Math.floor((t.offsetHeight-T-parseFloat(getComputedStyle(t).paddingBottom))/f)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",W),function(){L(),clearTimeout(S),G(),document.documentElement.removeEventListener("mouseleave",ae),window.removeEventListener("resize",W),B.kill(),u&&u.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var Pn={duration:.5,ease:"power3"};function En(i){let t=i.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let u=gsap.quickTo(a,"x",Pn),T=gsap.quickTo(a,"y",Pn),f=0,C=0,R=!1,d=new ResizeObserver(()=>{f=a.offsetWidth,C=a.offsetHeight});d.observe(a),f=a.offsetWidth,C=a.offsetHeight;let w=et((h,r)=>{let x=e.getBoundingClientRect();if(!(h>=x.left&&h<=x.right&&r>=x.top&&r<=x.bottom)){R&&(R=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let $=gsap.utils.clamp(0,Math.max(0,x.width-f),h-x.left-f/2),L=gsap.utils.clamp(0,Math.max(0,x.height-C),r-x.top-C/2);if(!R){R=!0,u($,$),T(L,L),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}u($),T(L)}),o=()=>{R&&(R=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{w(),document.documentElement.removeEventListener("mouseleave",o),d.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var Jn=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],Qn=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],er="#FFFFFF";var wn="power3.out";function Sn(i){let t=i.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],u=[],T=[];function f(){if(u.length&&u[0].isConnected)return;let g=e.querySelectorAll(":scope > div > div");a=(g.length?[...g]:[e]).map(o=>SplitText.create(o,{type:"chars"})),u=a.flatMap(o=>o.chars),T=g.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],u.forEach(o=>{o.dataset.orig=o.textContent})}function C(g){g.textContent=g.dataset.orig,g.style.border=""}let R=()=>{f(),T.forEach(w=>{w.el.style.overflow="visible"});let g=(u.length-1)/2;u.forEach((w,o)=>{gsap.to(w,{color:er,ease:wn,duration:.3,delay:Math.abs(o-g)*.03,overwrite:"auto",onStart:()=>{let h=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);h==1&&(w.textContent=gsap.utils.random(Qn)),r==1&&(w.style.border=`1px solid ${gsap.utils.random(Jn)}`)}})})},d=()=>{if(!u.length)return;let g=getComputedStyle(e).color,w=(u.length-1)/2;T.forEach(o=>{o.el.style.overflow=o.overflow}),u.forEach((o,h)=>{gsap.to(o,{color:g,ease:wn,duration:.3,delay:Math.abs(h-w)*.03,overwrite:"auto",onStart:()=>C(o)})})};e.addEventListener("mouseenter",R),e.addEventListener("mouseleave",d),n.push(()=>{e.removeEventListener("mouseenter",R),e.removeEventListener("mouseleave",d),gsap.killTweensOf(u),a.forEach(g=>g.revert()),a=[],u=[],T=[]})}),()=>n.forEach(e=>e())}function Ct(i,t){let n=null;me(qt(i)),me(rn(i)),me(Sn(i)),me(xn(i)),me(Jt(i)),me(Gt(i)),me(tn(i));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Wt(i):null,n?me(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),me(Nt(i)),me($t(i)),me(Kt(i)),me(dt(i)),ut(i),Zt(i),n}function ft(i){me(Qt(i)),i.querySelector("[data-flip-element]")&&window.innerWidth>991&&me(jt(i)),me(yn(i)),me(En(i)),me(an(i)),me(gn(i)),ScrollTrigger.sort()}var tr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function pt(i){var t=[];return i.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(u){gsap.set(n,{autoAlpha:1});var T=tr[e],f={yPercent:110,duration:T.duration,stagger:T.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?f.delay=.5:f.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(u[e],f)}}))}),function(){t.forEach(function(n){n.revert()})}}var Tn=window.matchMedia("(prefers-reduced-motion: reduce)"),Mt=.9;function An(i){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{i.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Tn.matches||!n?e.set(i,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:lt,duration:Mt,ease:Ke},0),e.fromTo(i,{y:"0vh"},{y:"-25vh",duration:Mt,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function Rt(i,t,n="100vh"){let e=gsap.timeline();return Tn.matches?e.set(i,{autoAlpha:1}):(e.set(i,{zIndex:3},0),e.fromTo(i,{y:n},{y:"0vh",duration:Mt,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(i,{clearProps:"zIndex"}),t(i)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function Ft(i,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(i,{position:"relative"}),Rt(i,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,zt=!1;function Lt(i){gsap.set(i,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Pe.scrollTo(0,{immediate:!0,force:!0}),Pe.resize()}var Cn={sync:!0,beforeLeave(){zt=bt({keepCurtain:!0}),Pe.stop(),ot||(ot=xt())},beforeEnter(i){ot||(ot=xt()),gsap.set(i.next.container,{position:"fixed",top:0,left:0,right:0}),Ht(),Ct(i.next.container,!1)},leave(i){return An(i.current.container,i.next.container)},enter(i){return zt&&(Dt(),zt=!1),me(pt(i.next.container)),Rt(i.next.container,Lt)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(i){_t(i),ft(i.next.container),Pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:i}){if(!i||!i.href)return!1;let t=new URL(i.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Cn,once(i){let t=document.querySelector("[data-menu-status]");It(),Ut(),t&&(ut(t),dt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=i.next.container,e=Ct(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");me(pt(n)),Ft(n,function(u){Lt(u),ft(u),Pe.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(Pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),me(pt(n)),Ft(n,function(a){Lt(a),ft(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Pe.start()})})})}))}},{name:"self",...Cn}]}),window.addEventListener("pageshow",function(i){i.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

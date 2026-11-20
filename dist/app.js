(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Pe=new Lenis({lerp:.08,wheelMultiplier:1});Pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(i=>{Pe.raf(i*1e3)});gsap.ticker.lagSmoothing(0);var gt=[];function me(i){typeof i=="function"&&gt.push(i)}function xt(){let i=gt,t=ScrollTrigger.getAll();return gt=[],function(){i.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Dn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Dn);var Ke="parallax",lt=.8;var In="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",kt="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,bt=function(){return!1};function Dt(){tt&&gsap.timeline().to(tt,{clipPath:kt,duration:.9,ease:Ke,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-lt)+")",duration:.9,ease:Ke},0).set(tt,{clearProps:"filter"})}function It(){let i=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!i||!t)return;tt=t.querySelector(".nav-bg"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",i.setAttribute("aria-expanded",a),a?(Pe.stop(),document.body.style.overflow="hidden"):(Pe.start(),document.body.style.overflow="")}function e(a){tt&&gsap.to(tt,{clipPath:a?In:kt,duration:.9,ease:Ke,overwrite:!0})}i.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),bt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function Ut(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(i){var t=i.target.closest&&i.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Ht(){let i=function(n){return n.replace(/\/$/,"")||"/"},t=i(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&i(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function _t(i){let n=new DOMParser().parseFromString(i.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function ut(i){let t=i.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let u=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();u&&navigator.clipboard.writeText(u).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function dt(i){let t=i.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,u=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),v=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=u+" "+v}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var yt={};function ct(i){return yt[i]||(yt[i]=new Promise(function(t,n){let e=document.createElement("script");e.src=i,e.onload=t,e.onerror=n,document.head.appendChild(e)})),yt[i]}function Bt(i){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),n.add(u);var T=new THREE.PointLight(13931578,2.4,1200);T.position.set(-300,-100,300),n.add(T);var v=new THREE.PointLight(5913114,1.2,900);v.position.set(0,200,-300),n.add(v);var C=new THREE.PointLight(16750916,1.3,600);C.position.set(0,-250,200),n.add(C);var R=0,d=0,h=0,y=0,o=!1,f=0,r=0,p=Math.PI*2/6,S=new THREE.Vector2(9999,9999),K=new THREE.Raycaster,L=120,G=new THREE.Vector3(9999,9999,0),ae=new THREE.Vector3(9999,9999,0),B=new THREE.Vector3,P=!1,Y=0,A=0,N=8e4,ne=.03,re=.95,$=.005,J=12e4,O=null,F,w,E,m,s,c,D=0,W=!1,H=0,g=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function M(){var b=new THREE.BufferGeometry;F=new Float32Array(J*3),w=new Float32Array(J*3),E=new Float32Array(J*3),m=new Float32Array(J*3),s=new Float32Array(J),c=new Float32Array(J),b.setAttribute("position",new THREE.BufferAttribute(F,3)),b.setAttribute("color",new THREE.BufferAttribute(m,3)),b.setAttribute("size",new THREE.BufferAttribute(s,1)),b.setAttribute("alpha",new THREE.BufferAttribute(c,1)),b.setAttribute("velocity",new THREE.BufferAttribute(w,3));var X=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,q=new THREE.ShaderMaterial({vertexShader:X,fragmentShader:l,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});O=new THREE.Points(b,q),n.add(O)}function I(b,X){return new Promise(function(l){try{var q=512,Z=document.createElement("canvas");Z.width=Z.height=q;var te=Z.getContext("2d"),ke=new DOMParser().parseFromString(b,"image/svg+xml"),Fe=ke.querySelector("svg");if(!Fe){l([]);return}var z=parseFloat(Fe.getAttribute("width")||512),V=parseFloat(Fe.getAttribute("height")||512),x=Fe.getAttribute("viewBox");if(x){var U=x.split(/[\s,]+/);z=+U[2],V=+U[3]}var se=Math.min(q/z,q/V)*.9,oe=(q-z*se)/2,ze=(q-V*se)/2;te.save(),te.translate(oe,ze),te.scale(se,se),te.fillStyle="white",ke.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var He=xe.getAttribute("d");He&&te.fill(new Path2D(He))}else xe.tagName==="rect"?te.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(te.beginPath(),te.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),te.fill())}),te.restore();for(var be=te.getImageData(0,0,q,q).data,Te=[],ye=0;ye<q;ye++)for(var Ie=0;Ie<q;Ie++){var Ee=(ye*q+Ie)*4;be[Ee+3]>30&&Te.push({x:Ie,y:ye,a:be[Ee+3]/255})}if(!Te.length){l([]);return}for(var Ge=[],Ee=0;Ee<X;Ee++){var Ue=Te[Math.floor(Math.random()*Te.length)];Ge.push({x:(Ue.x-q/2)*1.2+(Math.random()-.5)*1.65,y:-(Ue.y-q/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ue.a,a:Ue.a})}l(Ge)}catch(xe){console.error(xe),l([])}})}function ie(b){D=b.length;for(var X=0;X<D;X++){var l=b[X],q=X*3;F[q]=l.x,F[q+1]=l.y+40,F[q+2]=l.z,w[q]=w[q+1]=w[q+2]=0,E[q]=l.x,E[q+1]=l.y,E[q+2]=l.z;var Z=g[Math.floor(Math.random()*g.length)],te=.7+Math.random()*.4;m[q]=Z.r*te,m[q+1]=Z.g*te,m[q+2]=Z.b*te,s[X]=1.8+Math.random()*3.8,c[X]=.3+(l.a||.7)*.75}O.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(ke){O.geometry.attributes[ke].needsUpdate=!0}),W=!0}function pe(b){return I(b,Math.min(J,N)).then(function(X){X.length&&O&&ie(X)})}function Se(b){if(!(!W||!D)){H+=b;for(var X=0;X<D;X++){var l=X*3,q=X*1.37;if(w[l]+=Math.sin(H*.4+q)*.008+Math.sin(H*1.1+q*2.3)*.003,w[l+1]+=Math.cos(H*.35+q*.7)*.008+Math.sin(H*.9+q*1.5)*.004,w[l+2]+=Math.sin(H*.25+q*1.1)*.004,w[l+1]-=ne*.06,w[l]+=Math.sin(H*.25+F[l+1]*.008)*$*.6,w[l+2]+=Math.cos(H*.3+F[l]*.008)*$*.3,P){var Z=F[l]-G.x,te=F[l+1]-G.y,ke=F[l+2]-G.z,Fe=Z*Z+te*te+ke*ke,z=L*L;if(Fe<z&&Fe>.25){var V=Math.sqrt(Fe),x=V/L,U=(X*2654435761&65535)/65535,se=.6+U*.8,oe=Math.pow(1-x,1.5+U),ze=1+Math.min(B.length()*.12,1),be=oe*se*1.2*ze,Te=1/V;w[l]+=Z*Te*be,w[l+1]+=te*Te*be,w[l+2]+=ke*Te*be*.2;var ye=.02+U*.06;w[l]+=B.x*oe*ye,w[l+1]+=B.y*oe*ye;var Ie=oe*.15;w[l]+=(U-.5)*Ie,w[l+1]+=((X*48271&65535)/65535-.5)*Ie}}var Ee=E[l],Ge=E[l+1]+40,Ue=E[l+2],xe=Ee-F[l],He=Ge-F[l+1],Oe=Ue-F[l+2],Je=Math.sqrt(xe*xe+He*He+Oe*Oe),Qe=(X*48271&65535)/65535,et=.003+Qe*.003,at=1+Math.min(Je*.002,.5),Ye=et*at;w[l]+=xe*Ye,w[l+1]+=He*Ye,w[l+2]+=Oe*Ye;var we=(X*16807&65535)/65535,$e=re*(.92+we*.06);w[l]*=$e,w[l+1]*=$e,w[l+2]*=$e,F[l]+=w[l],F[l+1]+=w[l+1],F[l+2]+=w[l+2];var st=Math.sqrt(Math.pow(F[l]-E[l],2)+Math.pow(F[l+1]-E[l+1],2)+Math.pow(F[l+2]-E[l+2],2));c[X]=.15+.55*(1-Math.min(st*.005,1))+Math.sin(H*1.5+X*.01)*.05}O.geometry.attributes.position.needsUpdate=!0,O.geometry.attributes.alpha.needsUpdate=!0,O.geometry.attributes.velocity.needsUpdate=!0}}var _e=new THREE.Matrix4,Ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function Q(b,X){var l=a.domElement.getBoundingClientRect();if(!(l.width===0||l.height===0)&&(S.set((b-l.left)/l.width*2-1,-((X-l.top)/l.height)*2+1),K.setFromCamera(S,e),K.ray.intersectPlane(Ne,Ce))){ae.copy(G),O&&G.copy(Ce).applyMatrix4(_e.copy(O.matrixWorld).invert()),B.subVectors(G,ae);var q=B.length();q>15&&B.multiplyScalar(15/q)}}function ee(b,X){var l=i.getBoundingClientRect();return b>=l.left&&b<=l.right&&X>=l.top&&X<=l.bottom}var k=i.querySelector("#logo-coords"),j=i.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(b){Y=b.clientX,A=b.clientY;var X=ee(b.clientX,b.clientY);if(X){P=!0,Q(b.clientX,b.clientY);var l=i.getBoundingClientRect(),q=Math.round(b.clientX-l.left),Z=Math.round(b.clientY-l.top);k&&(k.textContent="X: "+q+"PX    Y: "+Z+"PX")}else P=!1,G.set(9999,9999,0);o&&(R+=(b.clientX-f)*.005,h+=(b.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),f=b.clientX,r=b.clientY)},ve=function(b){ee(b.clientX,b.clientY)&&(o=!0,f=b.clientX,r=b.clientY)},ge=function(){o=!1,R=0,h=0,d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",ve),window.addEventListener("mouseup",ge)}function Me(){for(var b=4e3,X=new THREE.BufferGeometry,l=new Float32Array(b*3),q=new Float32Array(b*3),Z=0;Z<b;Z++){l[Z*3]=(Math.random()-.5)*2200,l[Z*3+1]=(Math.random()-.5)*1800,l[Z*3+2]=-200-Math.random()*1800;var te=g[Math.floor(Math.random()*g.length)],ke=.2+Math.random()*.3;q[Z*3]=te.r*ke,q[Z*3+1]=te.g*ke,q[Z*3+2]=te.b*ke}X.setAttribute("position",new THREE.BufferAttribute(l,3)),X.setAttribute("color",new THREE.BufferAttribute(q,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var z=Fe.getContext("2d"),V=z.createRadialGradient(16,16,0,16,16,16);V.addColorStop(0,"rgba(255,255,255,1)"),V.addColorStop(.3,"rgba(255,255,255,0.6)"),V.addColorStop(.7,"rgba(255,255,255,0.15)"),V.addColorStop(1,"rgba(255,255,255,0)"),z.fillStyle=V,z.fillRect(0,0,32,32);var x=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),U=new THREE.Points(X,x);return U.userData={positions:l,count:b},n.add(U),U}M();var ue=t?null:Me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';pe(De);var Be=new THREE.Clock,Re=!0,Xe=new IntersectionObserver(function(b){Re=b[0].isIntersecting,b[0].isIntersecting&&!fe&&!t&&(fe=!0,k&&(k.style.transform="translateY(0)"),j&&(j.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(i);var he=!1,Le=null,Ae=0;function de(){if(he=!0,clearTimeout(Le),Le=setTimeout(function(){he=!1},150),!t){var b=ee(Y,A);b?(P=!0,Q(Y,A)):(P=!1,G.set(9999,9999,0))}}window.addEventListener("scroll",de,{passive:!0});var _=null;function ce(){if(_=requestAnimationFrame(ce),!!Re){Ae++;var b=Math.min(Be.getDelta(),.05),X=Be.elapsedTime;if(t)d+=p*b;else{var l=R-d;l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),d+=l*.12,y+=(h-y)*.12}if(O&&(O.rotation.x=y,O.rotation.y=d,O.position.y=-15),ue){for(var q=ue.userData.positions,Z=0;Z<ue.userData.count;Z++)q[Z*3+1]+=Math.sin(X*.2+Z)*.05,q[Z*3]+=Math.cos(X*.15+Z*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-d*35*.35,ue.position.y=y*28*.35}u.position.x=300+Math.sin(X*.3)*100,u.position.y=350+Math.cos(X*.2)*80,T.intensity=2+Math.sin(X*.5)*.4,C.intensity=.8+Math.sin(X*.4+1)*.3,!(t&&he&&Ae%4!==0)&&(Se(b),a.render(n,e))}}return ce(),function(){cancelAnimationFrame(_),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",ve),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",de),clearTimeout(Le),Xe.disconnect(),n.traverse(function(b){b.geometry&&b.geometry.dispose(),b.material&&(b.material.map&&b.material.map.dispose(),b.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),O=null}}function Ot(i){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",i.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var u=new THREE.PointLight(13931578,2.4,1200);u.position.set(-300,-100,300),t.add(u);var T=new THREE.PointLight(5913114,1.2,900);T.position.set(0,200,-300),t.add(T);var v=new THREE.PointLight(16750916,1.3,600);v.position.set(0,-250,200),t.add(v);var C=0,R=Math.PI*2/6,d=8e4,h=.03,y=.95,o=.005,f=12e4,r=null,p,S,K,L,G,ae,B=0,P=!1,Y=0,A=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function N(){var Q=new THREE.BufferGeometry;p=new Float32Array(f*3),S=new Float32Array(f*3),K=new Float32Array(f*3),L=new Float32Array(f*3),G=new Float32Array(f),ae=new Float32Array(f),Q.setAttribute("position",new THREE.BufferAttribute(p,3)),Q.setAttribute("color",new THREE.BufferAttribute(L,3)),Q.setAttribute("size",new THREE.BufferAttribute(G,1)),Q.setAttribute("alpha",new THREE.BufferAttribute(ae,1)),Q.setAttribute("velocity",new THREE.BufferAttribute(S,3));var ee=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,j=new THREE.ShaderMaterial({vertexShader:ee,fragmentShader:k,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(Q,j),t.add(r)}function ne(Q,ee){return new Promise(function(k){try{var j=512,fe=document.createElement("canvas");fe.width=fe.height=j;var le=fe.getContext("2d"),ve=new DOMParser().parseFromString(Q,"image/svg+xml"),ge=ve.querySelector("svg");if(!ge){k([]);return}var Me=parseFloat(ge.getAttribute("width")||512),ue=parseFloat(ge.getAttribute("height")||512),De=ge.getAttribute("viewBox");if(De){var Be=De.split(/[\s,]+/);Me=+Be[2],ue=+Be[3]}var Re=Math.min(j/Me,j/ue)*.9,Xe=(j-Me*Re)/2,he=(j-ue*Re)/2;le.save(),le.translate(Xe,he),le.scale(Re,Re),le.fillStyle="white",ve.querySelectorAll("path,rect,circle").forEach(function(l){if(l.tagName==="path"){var q=l.getAttribute("d");q&&le.fill(new Path2D(q))}else l.tagName==="rect"?le.fillRect(+l.getAttribute("x")||0,+l.getAttribute("y")||0,+l.getAttribute("width")||0,+l.getAttribute("height")||0):l.tagName==="circle"&&(le.beginPath(),le.arc(+l.getAttribute("cx")||0,+l.getAttribute("cy")||0,+l.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Le=le.getImageData(0,0,j,j).data,Ae=[],de=0;de<j;de++)for(var _=0;_<j;_++){var ce=(de*j+_)*4;Le[ce+3]>30&&Ae.push({x:_,y:de,a:Le[ce+3]/255})}if(!Ae.length){k([]);return}for(var b=[],ce=0;ce<ee;ce++){var X=Ae[Math.floor(Math.random()*Ae.length)];b.push({x:(X.x-j/2)*1.2+(Math.random()-.5)*1.65,y:-(X.y-j/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*X.a,a:X.a})}k(b)}catch(l){console.error(l),k([])}})}function re(Q){B=Q.length;for(var ee=0;ee<B;ee++){var k=Q[ee],j=ee*3;p[j]=k.x,p[j+1]=k.y+40,p[j+2]=k.z,S[j]=S[j+1]=S[j+2]=0,K[j]=k.x,K[j+1]=k.y,K[j+2]=k.z;var fe=A[Math.floor(Math.random()*A.length)],le=.7+Math.random()*.4;L[j]=fe.r*le,L[j+1]=fe.g*le,L[j+2]=fe.b*le,G[ee]=1.8+Math.random()*3.8,ae[ee]=.3+(k.a||.7)*.75}r.geometry.setDrawRange(0,B),["position","color","size","alpha"].forEach(function(ve){r.geometry.attributes[ve].needsUpdate=!0}),P=!0}function $(Q){return ne(Q,Math.min(f,d)).then(function(ee){ee.length&&r&&re(ee)})}function J(Q){if(!(!P||!B)){Y+=Q;for(var ee=0;ee<B;ee++){var k=ee*3,j=ee*1.37;S[k]+=Math.sin(Y*.4+j)*.008+Math.sin(Y*1.1+j*2.3)*.003,S[k+1]+=Math.cos(Y*.35+j*.7)*.008+Math.sin(Y*.9+j*1.5)*.004,S[k+2]+=Math.sin(Y*.25+j*1.1)*.004,S[k+1]-=h*.06,S[k]+=Math.sin(Y*.25+p[k+1]*.008)*o*.6,S[k+2]+=Math.cos(Y*.3+p[k]*.008)*o*.3;var fe=K[k],le=K[k+1]+40,ve=K[k+2],ge=fe-p[k],Me=le-p[k+1],ue=ve-p[k+2],De=Math.sqrt(ge*ge+Me*Me+ue*ue),Be=(ee*48271&65535)/65535,Re=.003+Be*.003,Xe=1+Math.min(De*.002,.5),he=Re*Xe;S[k]+=ge*he,S[k+1]+=Me*he,S[k+2]+=ue*he;var Le=(ee*16807&65535)/65535,Ae=y*(.92+Le*.06);S[k]*=Ae,S[k+1]*=Ae,S[k+2]*=Ae,p[k]+=S[k],p[k+1]+=S[k+1],p[k+2]+=S[k+2];var de=Math.sqrt(Math.pow(p[k]-K[k],2)+Math.pow(p[k+1]-K[k+1],2)+Math.pow(p[k+2]-K[k+2],2));ae[ee]=.15+.55*(1-Math.min(de*.005,1))+Math.sin(Y*1.5+ee*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}N();for(var O=4e3,F=new THREE.BufferGeometry,w=new Float32Array(O*3),E=new Float32Array(O*3),m=0;m<O;m++){w[m*3]=(Math.random()-.5)*2200,w[m*3+1]=(Math.random()-.5)*1800,w[m*3+2]=-200-Math.random()*1800;var s=A[Math.floor(Math.random()*A.length)],c=.2+Math.random()*.3;E[m*3]=s.r*c,E[m*3+1]=s.g*c,E[m*3+2]=s.b*c}F.setAttribute("position",new THREE.BufferAttribute(w,3)),F.setAttribute("color",new THREE.BufferAttribute(E,3));var D=document.createElement("canvas");D.width=D.height=32;var W=D.getContext("2d"),H=W.createRadialGradient(16,16,0,16,16,16);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.3,"rgba(255,255,255,0.6)"),H.addColorStop(.7,"rgba(255,255,255,0.15)"),H.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=H,W.fillRect(0,0,32,32);var g=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(D),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),M=new THREE.Points(F,g);t.add(M);var I='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';$(I);var ie=new THREE.Clock,pe=!0,Se=new IntersectionObserver(function(Q){pe=Q[0].isIntersecting},{threshold:0});Se.observe(i);var _e=i.querySelectorAll("#logo-coords, #logo-drag-label");_e.forEach(function(Q){Q.parentElement.style.display="none"});var Ne=null;function Ce(){if(Ne=requestAnimationFrame(Ce),!!pe){var Q=Math.min(ie.getDelta(),.05),ee=ie.elapsedTime;C+=R*Q,r&&(r.rotation.y=C,r.position.y=5,r.scale.setScalar(.85));for(var k=0;k<O;k++)w[k*3+1]+=Math.sin(ee*.2+k)*.05,w[k*3]+=Math.cos(ee*.15+k*.5)*.03;F.attributes.position.needsUpdate=!0,M.rotation.y+=1e-4,M.position.x=-C*35*.35,a.position.x=300+Math.sin(ee*.3)*100,a.position.y=350+Math.cos(ee*.2)*80,u.intensity=2+Math.sin(ee*.5)*.4,v.intensity=.8+Math.sin(ee*.4+1)*.3,J(Q),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(Ne),Se.disconnect(),t.traverse(function(Q){Q.geometry&&Q.geometry.dispose(),Q.material&&(Q.material.map&&Q.material.map.dispose(),Q.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var Vt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function qt(i){let t=i.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ct(Vt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Un(t):Bt(t)}),function(){n=!0,e&&e()}}function Gt(i){let t=i.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ct(Vt).then(function(){n||(e=Ot(t))}),function(){n=!0,e&&e()}}function Un(i){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",i.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var u=new THREE.PointLight(16107370,3,1400);u.position.set(300,350,400),n.add(u);var T=new THREE.PointLight(13931578,2.4,1200);T.position.set(-300,-100,300),n.add(T);var v=new THREE.PointLight(5913114,1.2,900);v.position.set(0,200,-300),n.add(v);var C=new THREE.PointLight(16750916,1.3,600);C.position.set(0,-250,200),n.add(C);var R=0,d=0,h=0,y=0,o=!1,f=0,r=0,p=Math.PI*2/6,S=new THREE.Vector2(9999,9999),K=new THREE.Raycaster,L=120,G=new THREE.Vector3(9999,9999,0),ae=new THREE.Vector3(9999,9999,0),B=new THREE.Vector3,P=!1,Y=0,A=0,N=8e4,ne=.03,re=.95,$=.005,J=12e4,O=null,F,w,E,m,s,c,D=0,W=!1,H=!1,g=0,M=0,I=null,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function pe(){var z=new THREE.BufferGeometry;F=new Float32Array(J*3),w=new Float32Array(J*3),E=new Float32Array(J*3),m=new Float32Array(J*3),s=new Float32Array(J),c=new Float32Array(J),z.setAttribute("position",new THREE.BufferAttribute(F,3)),z.setAttribute("color",new THREE.BufferAttribute(m,3)),z.setAttribute("size",new THREE.BufferAttribute(s,1)),z.setAttribute("alpha",new THREE.BufferAttribute(c,1)),z.setAttribute("velocity",new THREE.BufferAttribute(w,3));var V=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=new THREE.ShaderMaterial({vertexShader:V,fragmentShader:x,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});O=new THREE.Points(z,U),n.add(O)}function Se(z,V){return new Promise(function(x){try{var U=512,se=document.createElement("canvas");se.width=se.height=U;var oe=se.getContext("2d"),ze=new DOMParser().parseFromString(z,"image/svg+xml"),be=ze.querySelector("svg");if(!be){x([]);return}var Te=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ie=be.getAttribute("viewBox");if(Ie){var Ee=Ie.split(/[\s,]+/);Te=+Ee[2],ye=+Ee[3]}var Ge=Math.min(U/Te,U/ye)*.9,Ue=(U-Te*Ge)/2,xe=(U-ye*Ge)/2;oe.save(),oe.translate(Ue,xe),oe.scale(Ge,Ge),oe.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(we){if(we.tagName==="path"){var $e=we.getAttribute("d");$e&&oe.fill(new Path2D($e))}else we.tagName==="rect"?oe.fillRect(+we.getAttribute("x")||0,+we.getAttribute("y")||0,+we.getAttribute("width")||0,+we.getAttribute("height")||0):we.tagName==="circle"&&(oe.beginPath(),oe.arc(+we.getAttribute("cx")||0,+we.getAttribute("cy")||0,+we.getAttribute("r")||0,0,Math.PI*2),oe.fill())}),oe.restore();for(var He=oe.getImageData(0,0,U,U).data,Oe=[],Je=0;Je<U;Je++)for(var Qe=0;Qe<U;Qe++){var et=(Je*U+Qe)*4;He[et+3]>30&&Oe.push({x:Qe,y:Je,a:He[et+3]/255})}if(!Oe.length){x([]);return}for(var at=[],et=0;et<V;et++){var Ye=Oe[Math.floor(Math.random()*Oe.length)];at.push({x:(Ye.x-U/2)*1.2+(Math.random()-.5)*1.65,y:-(Ye.y-U/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ye.a,a:Ye.a})}x(at)}catch(we){console.error(we),x([])}})}function _e(z){D=z.length;for(var V=0;V<D;V++){var x=z[V],U=V*3;F[U]=x.x,F[U+1]=x.y+40,F[U+2]=x.z,w[U]=w[U+1]=w[U+2]=0,E[U]=x.x,E[U+1]=x.y,E[U+2]=x.z;var se=ie[Math.floor(Math.random()*ie.length)],oe=.7+Math.random()*.4;m[U]=se.r*oe,m[U+1]=se.g*oe,m[U+2]=se.b*oe,s[V]=1.8+Math.random()*3.8,c[V]=.3+(x.a||.7)*.75}O.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(ze){O.geometry.attributes[ze].needsUpdate=!0}),W=!0,H=!1,g=1}function Ne(z){return Se(z,Math.min(J,N)).then(function(V){V.length&&O&&_e(V)})}function Ce(z){if(!(!W||!D)){M+=z;for(var V=0;V<D;V++){var x=V*3,U=V*1.37;if(w[x]+=Math.sin(M*.4+U)*.008+Math.sin(M*1.1+U*2.3)*.003,w[x+1]+=Math.cos(M*.35+U*.7)*.008+Math.sin(M*.9+U*1.5)*.004,w[x+2]+=Math.sin(M*.25+U*1.1)*.004,w[x+1]-=ne*.06,w[x]+=Math.sin(M*.25+F[x+1]*.008)*$*.6,w[x+2]+=Math.cos(M*.3+F[x]*.008)*$*.3,P&&de==="interactive"){var se=F[x]-G.x,oe=F[x+1]-G.y,ze=F[x+2]-G.z,be=se*se+oe*oe+ze*ze,Te=L*L;if(be<Te&&be>.25){var ye=Math.sqrt(be),Ie=ye/L,Ee=(V*2654435761&65535)/65535,Ge=.6+Ee*.8,Ue=Math.pow(1-Ie,1.5+Ee),xe=1+Math.min(B.length()*.12,1),He=Ue*Ge*1.2*xe,Oe=1/ye;w[x]+=se*Oe*He,w[x+1]+=oe*Oe*He,w[x+2]+=ze*Oe*He*.2;var Je=.02+Ee*.06;w[x]+=B.x*Ue*Je,w[x+1]+=B.y*Ue*Je;var Qe=Ue*.15;w[x]+=(Ee-.5)*Qe,w[x+1]+=((V*48271&65535)/65535-.5)*Qe}}var et=E[x],at=E[x+1]+40,Ye=E[x+2],we=et-F[x],$e=at-F[x+1],st=Ye-F[x+2],Mn=Math.sqrt(we*we+$e*$e+st*st),Rn=(V*48271&65535)/65535,Fn=.003+Rn*.003,zn=1+Math.min(Mn*.002,.5),mt=Fn*zn;w[x]+=we*mt,w[x+1]+=$e*mt,w[x+2]+=st*mt;var Ln=(V*16807&65535)/65535,ht=re*(.92+Ln*.06);w[x]*=ht,w[x+1]*=ht,w[x+2]*=ht,F[x]+=w[x],F[x+1]+=w[x+1],F[x+2]+=w[x+2];var kn=Math.sqrt(Math.pow(F[x]-E[x],2)+Math.pow(F[x+1]-E[x+1],2)+Math.pow(F[x+2]-E[x+2],2));c[V]=.15+.55*(1-Math.min(kn*.005,1))+Math.sin(M*1.5+V*.01)*.05}O.geometry.attributes.position.needsUpdate=!0,O.geometry.attributes.alpha.needsUpdate=!0,O.geometry.attributes.velocity.needsUpdate=!0}}var Q=new THREE.Matrix4,ee=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),k=new THREE.Vector3;function j(z,V){var x=a.domElement.getBoundingClientRect();if(!(x.width===0||x.height===0)&&(S.set((z-x.left)/x.width*2-1,-((V-x.top)/x.height)*2+1),K.setFromCamera(S,e),K.ray.intersectPlane(ee,k))){ae.copy(G),O&&G.copy(k).applyMatrix4(Q.copy(O.matrixWorld).invert()),B.subVectors(G,ae);var U=B.length();U>15&&B.multiplyScalar(15/U)}}var fe=null;function le(){return fe||(fe=i.closest('[data-flip-element="target"]')||i),fe}function ve(z,V){var x=le().getBoundingClientRect();return z>=x.left&&z<=x.right&&V>=x.top&&V<=x.bottom}var ge=i.querySelector("#logo-coords"),Me=i.querySelector("#logo-drag-label"),ue=!1;function De(z){if(Y=z.clientX,A=z.clientY,t||de!=="interactive"){P=!1,G.set(9999,9999,0);return}var V=ve(z.clientX,z.clientY);if(V){P=!0,j(z.clientX,z.clientY);var x=le().getBoundingClientRect(),U=Math.round(z.clientX-x.left),se=Math.round(z.clientY-x.top);ge&&(ge.textContent="X: "+U+"PX    Y: "+se+"PX")}else P=!1,G.set(9999,9999,0);o&&(R+=(z.clientX-f)*.005,h+=(z.clientY-r)*.005,h=Math.max(-Math.PI/2,Math.min(Math.PI/2,h)),f=z.clientX,r=z.clientY)}function Be(z){t||de!=="interactive"||ve(z.clientX,z.clientY)&&(o=!0,f=z.clientX,r=z.clientY)}function Re(){t||(o=!1,R=0,h=0,d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Re);function Xe(){for(var z=4e3,V=new THREE.BufferGeometry,x=new Float32Array(z*3),U=new Float32Array(z*3),se=0;se<z;se++){x[se*3]=(Math.random()-.5)*2200,x[se*3+1]=(Math.random()-.5)*1800,x[se*3+2]=-200-Math.random()*1800;var oe=ie[Math.floor(Math.random()*ie.length)],ze=.2+Math.random()*.3;U[se*3]=oe.r*ze,U[se*3+1]=oe.g*ze,U[se*3+2]=oe.b*ze}V.setAttribute("position",new THREE.BufferAttribute(x,3)),V.setAttribute("color",new THREE.BufferAttribute(U,3));var be=document.createElement("canvas");be.width=be.height=32;var Te=be.getContext("2d"),ye=Te.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=ye,Te.fillRect(0,0,32,32);var Ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ee=new THREE.Points(V,Ie);return Ee.userData={positions:x,count:z},n.add(Ee),Ee}pe();var he=Xe(),Le='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Ne(Le);var Ae=new THREE.Clock,de="spin",_=null;function ce(){if(t){de="spin";return}if(_===null){var z=document.querySelector(".scaling-element-video");_=z&&getComputedStyle(z).display!=="none"}if(!_){de="spin";return}var V=window._flipProgress||0;V>.85?de="interactive":V>.7?de="transition":de="spin"}var b="spin",X=!0,l=new IntersectionObserver(function(z){X=z[0].isIntersecting},{threshold:0});l.observe(i);var q=!1,Z=null,te=0;function ke(){q=!0,clearTimeout(Z),Z=setTimeout(function(){q=!1},150);var z=ve(Y,A);z?(P=!0,j(Y,A)):(P=!1,G.set(9999,9999,0))}window.addEventListener("scroll",ke,{passive:!0});function Fe(){if(I=requestAnimationFrame(Fe),!!X){te++;var z=Math.min(Ae.getDelta(),.05),V=Ae.elapsedTime;ce(),b==="interactive"&&de!=="interactive"&&(P=!1,G.set(9999,9999,0),o=!1);var x=de==="transition"||de==="interactive";if(x&&!ue?(ue=!0,Me&&(Me.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!x&&ue&&(ue=!1,Me&&(Me.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),b=de,P&&!ve(Y,A)&&(P=!1,G.set(9999,9999,0)),de==="spin")d+=p*z,y+=(0-y)*.05;else if(de==="transition")d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),d+=(0-d)*.025,y+=(0-y)*.025;else{var U=R-d;U=U%(Math.PI*2),U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),d+=U*.12,y+=(h-y)*.12}O&&(O.rotation.x=y,O.rotation.y=d,O.scale.setScalar(1),O.position.y=-15);for(var se=he.userData.positions,oe=0;oe<he.userData.count;oe++)se[oe*3+1]+=Math.sin(V*.2+oe)*.05,se[oe*3]+=Math.cos(V*.15+oe*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-d*35*.35,he.position.y=y*28*.35,u.position.x=300+Math.sin(V*.3)*100,u.position.y=350+Math.cos(V*.2)*80,T.intensity=2+Math.sin(V*.5)*.4,C.intensity=.8+Math.sin(V*.4+1)*.3,!(t&&q&&te%4!==0)&&(Ce(z),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(I),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",ke),clearTimeout(Z),l.disconnect(),n.traverse(function(z){z.geometry&&z.geometry.dispose(),z.material&&(z.material.map&&z.material.map.dispose(),z.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),O=null}}function Wt(i){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),u=Array.from(t.querySelectorAll("[data-load-text]")),T=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),v=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(T.length&&v.set(T,{autoAlpha:1},0),u.length>=2){let C=new SplitText(u[0],{type:"lines,chars",mask:"lines"}),R=new SplitText(u[1],{type:"lines,chars",mask:"lines"});gsap.set([C.chars,R.chars],{autoAlpha:0,yPercent:125}),gsap.set(u,{autoAlpha:1}),v.to(C.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),v.to(C.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),v.to(R.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),v.to(R.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return v}function Nt(i){let n=[...(i||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(d=>{let h=d.parentElement;h&&(d.style.whiteSpace="nowrap",e.has(h)||e.set(h,[]),e.get(h).push(d))});function a(d){let h=getComputedStyle(d);return d.clientWidth-parseFloat(h.paddingLeft)-parseFloat(h.paddingRight)}function u(d,h){if(h<=0)return;let y=parseFloat(getComputedStyle(d).fontSize)||16;for(let o=0;o<5;o++){let f=d.getBoundingClientRect().width;if(f<=0)break;let r=h/f;if(Math.abs(r-1)<.002)break;y*=r,d.style.fontSize=y+"px"}}function T(){e.forEach((d,h)=>{let y=a(h);d.forEach(o=>u(o,y))})}let v=null;function C(){v||(v=requestAnimationFrame(()=>{v=null,T()}))}let R;return window.ResizeObserver&&(R=new ResizeObserver(C),e.forEach((d,h)=>R.observe(h))),window.addEventListener("resize",C),T(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(T),()=>{v&&cancelAnimationFrame(v),R&&R.disconnect(),window.removeEventListener("resize",C),n.forEach(d=>{d.style.whiteSpace="",d.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},Xt=.08,Hn={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Yt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function _n(i,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:i,transformOrigin:t}),n}function $t(i){var t=i.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var u=a.getAttribute("data-marker-direction")||"right",T=a.getAttribute("data-marker-theme")||"#000000",v=a.getAttribute("data-marker-scroll-start")||"top 90%",C=T.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(T).trim()||T,R=Yt[u]||Yt.right,d=Hn[a.getAttribute("data-highlight-marker-reveal")]||null;d&&(C=d.bar);var h=a.closest("[data-cursor-label]"),y={timeline:null,scrollTrigger:null,split:null,listeners:[]},o=!1,f=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){y.timeline&&y.timeline.kill(),y.scrollTrigger&&y.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(P){P.remove()}),y.listeners.forEach(function(P){P.el.removeEventListener(P.type,P.fn)}),y.listeners=[],o=!1;var p=r.lines,S=gsap.timeline({paused:!0,onComplete:function(){o=!0}});if(p.forEach(function(P,Y){gsap.set(P,{position:"relative",overflow:"hidden"});var A=_n(C,R.origin);gsap.set(A,{[R.prop]:0}),P.appendChild(A),d&&(gsap.set(P,{zIndex:0,color:d.text}),gsap.set(A,{zIndex:-1})),S.to(A,{[R.prop]:1,duration:Ve.duration,ease:Ve.ease},Y*Xt);var N=function(){o&&(gsap.to(A,{[R.prop]:0,duration:Ve.duration,ease:Ve.ease}),d&&gsap.to(P,{color:d.hoverText,duration:Ve.duration,ease:Ve.ease}))},ne=function(){o&&(gsap.to(A,{[R.prop]:1,duration:Ve.duration,ease:Ve.ease}),d&&gsap.to(P,{color:d.text,duration:Ve.duration,ease:Ve.ease}))};!d&&e&&(P.addEventListener("mouseenter",N),P.addEventListener("mouseleave",ne),y.listeners.push({el:P,type:"mouseenter",fn:N},{el:P,type:"mouseleave",fn:ne}))}),y.timeline=S,h){S.kill();var K=a.querySelectorAll(".highlight-marker-bar"),L=function(P){gsap.to(K,{[R.prop]:P,duration:Ve.duration,ease:Ve.ease,stagger:Xt,overwrite:!0})},G=function(){L(1)},ae=function(){L(0)};h.addEventListener("cursorlabel:enter",G),h.addEventListener("cursorlabel:leave",ae),y.listeners.push({el:h,type:"cursorlabel:enter",fn:G},{el:h,type:"cursorlabel:leave",fn:ae});return}var B=ScrollTrigger.create({trigger:a,start:v,once:!0,onEnter:function(){S.play()}});y.scrollTrigger=B}});y.split=f,n.push(y)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(u){u.el.removeEventListener(u.type,u.fn)}),a.split&&a.split.revert()})}}function Kt(i){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=i.querySelector("[data-cursor-marquee-status]");if(!a)return;let u=a.querySelectorAll("[data-cursor-marquee-text-target]"),T=i.querySelectorAll("[data-cursor-marquee-text]");if(!T.length)return;let v=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),C=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),R=null,d=h=>{v(h.clientX),C(h.clientY)};return window.addEventListener("pointermove",d,{passive:!0}),T.forEach(h=>{h.addEventListener("mouseenter",()=>{R&&clearTimeout(R);let y=h.getAttribute("data-cursor-marquee-text")||"",o=(y.length||1)/e;u.forEach(f=>{f.textContent=y,f.style.animationPlayState="running",f.style.animationDuration=o+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),h.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),R&&clearTimeout(R),R=setTimeout(()=>{u.forEach(y=>{y.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",d),clearTimeout(R),gsap.killTweensOf(a)}}function Zt(i){i.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function jt(i){let t=i.querySelectorAll("[data-flip-element='wrapper']"),n=i.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(v){window._flipProgress=v.progress}}}),t.forEach(function(v,C){let R=C+1;if(R<t.length){let d=t[R],h=d.getBoundingClientRect(),y=v.getBoundingClientRect(),o=h.top+window.pageYOffset+d.offsetHeight/2,f=y.top+window.pageYOffset+v.offsetHeight/2,r=o-f;e.add(Flip.fit(n,d,{duration:r,ease:"none"}))}})}a();let u,T=function(){clearTimeout(u),u=setTimeout(function(){a()},100)};return window.addEventListener("resize",T),function(){clearTimeout(u),window.removeEventListener("resize",T),e&&e.kill()}}var Bn="150%";function On(i){let t=[];return i.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let u=document.createElementNS("http://www.w3.org/2000/svg","tspan");u.textContent=a,n.append(u),t.push(u)}}),t}var Pt=new WeakMap;function Jt(i){let t=i.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(u){return Array.from(u.querySelectorAll("textPath")).map(function(T){return T.textContent})}),a=n.map(On);return a.forEach(function(u){gsap.set(u,{fillOpacity:0})}),Pt.set(i,{wrap:t,lines:n,lineChars:a}),function(){Pt.delete(i),n.forEach(function(u,T){u.querySelectorAll("textPath").forEach(function(v,C){v.textContent=e[T][C]})})}}function Qt(i){let t=Pt.get(i);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+Bn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let u=t.lineChars[a];u.length&&n.fromTo(u,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/u.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function Et(i){var t=[];function n(o,f,r,p){o.addEventListener(f,r,p),t.push(function(){o.removeEventListener(f,r,p)})}i.querySelectorAll("[data-bunny-player-init]").forEach(function(o){var f=o.getAttribute("data-player-src");if(!f)return;var r=o.querySelector("video");if(!r)return;try{r.pause()}catch(_){}try{r.removeAttribute("src"),r.load()}catch(_){}function p(_){o.getAttribute("data-player-status")!==_&&o.setAttribute("data-player-status",_)}function S(_){r.muted=!!_,o.setAttribute("data-player-muted",r.muted?"true":"false")}function K(_){o.setAttribute("data-player-fullscreen",_?"true":"false")}function L(_){o.setAttribute("data-player-activated",_?"true":"false")}o.hasAttribute("data-player-activated")||L(!1);var G=o.querySelector("[data-player-timeline]"),ae=o.querySelector("[data-player-progress]"),B=o.querySelector("[data-player-buffered]"),P=o.querySelector("[data-player-timeline-handle]"),Y=o.querySelectorAll("[data-player-time-duration]"),A=o.querySelectorAll("[data-player-time-progress]"),N=o.getAttribute("data-player-update-size"),ne=o.getAttribute("data-player-lazy"),re=ne==="true",$=ne==="meta",J=o.getAttribute("data-player-autoplay")==="true",O=o.getAttribute("data-player-muted")==="true",F=!1;J?(S(!0),r.loop=!0):S(O),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),J&&(r.autoplay=!1);var w=!!r.canPlayType("application/vnd.apple.mpegurl"),E=w&&"ManagedMediaSource"in window,m=!!(window.Hls&&Hls.isSupported())&&!E;if(N==="true"&&!$&&!re){var s=r.preload;r.preload="metadata";var c=function(){R(o,N,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",c),r.preload=s||""};n(r,"loadedmetadata",c,{once:!0}),r.src=f}function D(){y(f,m).then(function(_){_.width&&_.height&&R(o,N,_.width,_.height),Y.length&&isFinite(_.duration)&&_.duration>0&&u(Y,a(_.duration)),C(o,F)})}var W=!1,H=!1,g="";function M(){if(!W){if(W=!0,o._hls){try{o._hls.destroy()}catch(ce){}o._hls=null}if(E)r.preload=re||$?"auto":r.preload,r.src=f,n(r,"loadedmetadata",function(){C(o,F),N==="true"&&R(o,N,r.videoWidth,r.videoHeight),Y.length&&u(Y,a(r.duration))},{once:!0});else if(m){var _=new Hls({maxBufferLength:10});_.attachMedia(r),_.on(Hls.Events.MEDIA_ATTACHED,function(){_.loadSource(f)}),_.on(Hls.Events.MANIFEST_PARSED,function(){if(C(o,F),N==="true"){var ce=_.levels||[],b=T(ce);b&&b.width&&b.height&&R(o,N,b.width,b.height)}}),_.on(Hls.Events.LEVEL_LOADED,function(ce,b){b&&b.details&&isFinite(b.details.totalduration)&&Y.length&&u(Y,a(b.details.totalduration))}),o._hls=_}else r.src=f}}$?(D(),r.preload="none"):re?r.preload="none":M();function I(){H=!0,r.paused||r.ended?((re||$)&&!W&&M(),F=!0,g="",p("loading"),v(r)):(g="manual",r.pause())}function ie(){r.muted=!r.muted,o.setAttribute("data-player-muted",r.muted?"true":"false")}function pe(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(o.requestFullscreen)return o.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function _e(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Ne(){pe()||r.webkitDisplayingFullscreen?_e():Se()}n(document,"fullscreenchange",function(){K(pe())}),n(document,"webkitfullscreenchange",function(){K(pe())}),n(r,"webkitbeginfullscreen",function(){K(!0)}),n(r,"webkitendfullscreen",function(){K(!1)}),n(o,"click",function(_){var ce=_.target.closest("[data-player-control]");if(!(!ce||!o.contains(ce))){var b=ce.getAttribute("data-player-control");b==="play"||b==="pause"||b==="playpause"?I():b==="mute"?ie():b==="fullscreen"&&Ne()}});function Ce(){Y.length&&u(Y,a(r.duration)),A.length&&u(A,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),d(o,N,r)}),n(r,"loadeddata",function(){d(o,N,r)}),n(r,"playing",function(){d(o,N,r)}),n(r,"durationchange",Ce);var Q;function ee(){if(r.duration){var _=r.currentTime/r.duration*100;ae&&(ae.style.transform="translateX("+(-100+_)+"%)"),P&&(P.style.left=_+"%")}}function k(){ee(),!r.paused&&!r.ended&&(Q=requestAnimationFrame(k))}function j(){if(!(!B||!r.duration||!r.buffered.length)){var _=r.buffered.end(r.buffered.length-1),ce=_/r.duration*100;B.style.transform="translateX("+(-100+ce)+"%)"}}if(n(r,"progress",j),n(r,"loadedmetadata",j),n(r,"durationchange",j),n(r,"play",function(){L(!0),cancelAnimationFrame(Q),k(),p("playing")}),n(r,"playing",function(){F=!1,p("playing")}),n(r,"pause",function(){F=!1,cancelAnimationFrame(Q),ee(),p("paused")}),n(r,"waiting",function(){p("loading")}),n(r,"canplay",function(){C(o,F)}),n(r,"ended",function(){F=!1,cancelAnimationFrame(Q),ee(),p("paused"),L(!1)}),G){let _=function(Z){ue||(ue=G.getBoundingClientRect());var te=(Z-ue.left)/ue.width;return te<0&&(te=0),te>1&&(te=1),te},ce=function(Z){if(r.duration){var te=Z*100;ae&&(ae.style.transform="translateX("+(-100+te)+"%)"),P&&(P.style.left=te+"%"),A.length&&u(A,a(Z*r.duration))}},b=function(Z){r.duration&&(Z-ge<Me||(ge=Z,r.currentTime=ve))},X=function(Z){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),o.setAttribute("data-timeline-drag","true"),ue=G.getBoundingClientRect();var te=_(Z.clientX);ve=te*r.duration,ce(te),b(performance.now()),G.setPointerCapture&&G.setPointerCapture(Z.pointerId),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",q,{passive:!0}),Z.preventDefault()}},l=function(Z){if(fe){var te=_(Z.clientX);ve=te*r.duration,ce(te),b(performance.now()),Z.preventDefault()}},q=function(){fe&&(fe=!1,o.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=ve,le?v(r):(ee(),Ce()),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",q))};var fe=!1,le=!1,ve=0,ge=0,Me=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(G,"pointerdown",X,{passive:!1}),P&&n(P,"pointerdown",X,{passive:!1})}var De,Be=3e3;function Re(_){o.getAttribute("data-player-hover")!==_&&o.setAttribute("data-player-hover",_)}function Xe(){clearTimeout(De),De=setTimeout(function(){Re("idle")},Be)}function he(){Re("active"),Xe()}n(o,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var Le=!1;function Ae(_){var ce=o.getBoundingClientRect();_.clientX>=ce.left&&_.clientX<=ce.right&&_.clientY>=ce.top&&_.clientY<=ce.bottom&&he()}if(n(o,"pointerenter",function(){he(),Le||(Le=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(o,"pointerleave",function(){Re("idle"),clearTimeout(De),Le&&(Le=!1,window.removeEventListener("pointermove",Ae))}),J){var de=new IntersectionObserver(function(_){_.forEach(function(ce){var b=ce.isIntersecting&&ce.intersectionRatio>0;b?((re||$)&&!W&&M(),r.paused?(g="",F=!0,p("loading"),v(r)):p("playing")):!r.paused&&!r.ended&&(g="io",r.pause(),p("paused"))})},{threshold:.1});de.observe(o)}t.push(function(){if(cancelAnimationFrame(Q),clearTimeout(De),de&&de.disconnect(),o._hls){try{o._hls.destroy()}catch(_){}o._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(_){}})});function e(o){return(o<10?"0":"")+o}function a(o){if(!isFinite(o)||o<0)return"00:00";var f=Math.floor(o),r=Math.floor(f/3600),p=Math.floor(f%3600/60),S=f%60;return r>0?r+":"+e(p)+":"+e(S):e(p)+":"+e(S)}function u(o,f){o.forEach(function(r){r.textContent=f})}function T(o){return!o||!o.length?null:o.reduce(function(f,r){return(r.width||0)>(f.width||0)?r:f},o[0])}function v(o){var f=o.play();f&&typeof f.then=="function"&&f.catch(function(){})}function C(o,f){!f&&o.getAttribute("data-player-activated")!=="true"&&o.getAttribute("data-player-status")==="idle"&&o.setAttribute("data-player-status","ready")}function R(o,f,r,p){if(!(f!=="true"||!r||!p)){var S=o.querySelector("[data-player-before]");S&&(S.style.paddingTop=p/r*100+"%")}}function d(o,f,r){if(f==="true"){var p=o.querySelector("[data-player-before]");if(p){var S=p.style.paddingTop&&p.style.paddingTop!=="0%";!S&&r.videoWidth&&r.videoHeight&&R(o,f,r.videoWidth,r.videoHeight)}}}function h(o,f){try{return new URL(f,o).toString()}catch(r){return f}}function y(o,f){return new Promise(function(r){if(f&&window.Hls&&Hls.isSupported())try{var p=new Hls,S={width:0,height:0,duration:NaN},K=!1,L=!1;p.on(Hls.Events.MANIFEST_PARSED,function(B,P){var Y=P&&P.levels||p.levels||[],A=T(Y);A&&A.width&&A.height&&(S.width=A.width,S.height=A.height,K=!0)}),p.on(Hls.Events.LEVEL_LOADED,function(B,P){P&&P.details&&isFinite(P.details.totalduration)&&(S.duration=P.details.totalduration,L=!0)}),p.on(Hls.Events.ERROR,function(){try{p.destroy()}catch(B){}r(S)}),p.on(Hls.Events.LEVEL_LOADED,function(){try{p.destroy()}catch(B){}r(S)}),p.loadSource(o);return}catch(B){r({width:0,height:0,duration:NaN});return}function G(B){for(var P=B.split(/\r?\n/),Y=0,A=0,N=null,ne=null,re=0;re<P.length;re++){var $=P[re];if($.indexOf("#EXT-X-STREAM-INF:")===0)ne=$;else if(ne&&$&&$[0]!=="#"){N||(N=$.trim());var J=/RESOLUTION=(\d+)x(\d+)/.exec(ne);if(J){var O=parseInt(J[1],10),F=parseInt(J[2],10);O>Y&&(Y=O,A=F)}ne=null}}return{bestW:Y,bestH:A,media:N}}function ae(B){for(var P=0,Y=/#EXTINF:([\d.]+)/g,A;A=Y.exec(B);)P+=parseFloat(A[1]);return P}fetch(o,{credentials:"omit",cache:"no-store"}).then(function(B){if(!B.ok)throw new Error("master");return B.text()}).then(function(B){var P=G(B);if(!P.media){r({width:P.bestW||0,height:P.bestH||0,duration:NaN});return}var Y=h(o,P.media);return fetch(Y,{credentials:"omit",cache:"no-store"}).then(function(A){if(!A.ok)throw new Error("media");return A.text()}).then(function(A){r({width:P.bestW||0,height:P.bestH||0,duration:ae(A)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(o){o()}),t=[]}}var Vn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",qn="(min-width: 768px)";function tn(i){if(!i.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=Et(i),n=en(i);else{let e=!1;return ct(Vn).catch(function(){}).then(function(){e||(t=Et(i),n=en(i))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function en(i){if(!i.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",u=!1,T,v,C,R,d,h,y="",o="",f="",r=(s,c=i)=>c.querySelector(s),p=s=>r(`[data-mini-showreel-lightbox="${s}"]`),S=s=>r(`[data-mini-showreel-player="${s}"]`),K=s=>s.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",s)||s,L=(s,c)=>{let D=s.width,W=D/c;return W>s.height&&(W=s.height,D=W*c),{left:s.left+(s.width-D)/2,top:s.top+(s.height-W)/2,width:D,height:W}},G=s=>{let c=K(s).getBoundingClientRect(),D=s.getBoundingClientRect(),W=D.width>0&&D.height>0?D.width/D.height:16/9;return L(c,W)},ae=(s,c)=>gsap.set(s,{position:"fixed",left:c.left,top:c.top,width:c.width,height:c.height,margin:0,x:0,y:0});function B(s){a&&i.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(c=>c.setAttribute("data-mini-showreel-status",s))}function P(){o=(T==null?void 0:T.style.zIndex)||"",f=(v==null?void 0:v.style.zIndex)||"",T&&(T.style.zIndex=String(e)),v&&(v.style.zIndex=String(e))}function Y(){T&&(T.style.zIndex=o),v&&(v.style.zIndex=f)}function A(s){let c=S(s);if(!c)return;let D=c.querySelector("[data-bunny-player-init]"),W=c.querySelector("video");if(W){if(D){let H=D.querySelector('[data-player-control="play"], [data-player-control="playpause"]');H&&(W.paused||W.ended)&&H.click();return}try{W.play()}catch(H){}}}function N(s){let c=S(s);if(!c)return;let D=c.querySelector("[data-bunny-player-init]"),W=c.querySelector("video");W&&(W.muted=!0,D&&D.setAttribute("data-player-muted","true"),(W.paused||W.ended)&&A(s))}function ne(){Y(),a="",u=!1,T=v=C=R=d=h=null,y="",o="",f="",Pe.start()}function re(s){if(!s||u||(T=p(s),v=S(s),!T||!v)||(C=r("[data-mini-showreel-target]",T),!C))return;a=s,u=!0,Pe.stop(),v.dataset.flipId=a,y=v.style.cssText||"",R=v.parentElement,d=v.nextSibling,P(),B("active"),A(a);let c=Flip.getState(v),D=G(C);T.appendChild(v),ae(v,D),h=Flip.from(c,{duration:t,ease:n,absolute:!0,scale:!1})}function $(s){!u||!v||s&&s!==a||(N(a),B("not-active"),h&&h.kill(),h=Flip.fit(v,R,{duration:t,ease:n,scale:!1,onComplete:()=>{R.insertBefore(v,d),v.style.cssText=y,ne()}}))}function J(){!u||!v||(h&&h.kill(),N(a),B("not-active"),R.insertBefore(v,d),v.style.cssText=y,ne())}function O(){!u||!v||!C||ae(v,G(C))}function F(s){let c=s.target.closest("[data-mini-showreel-open]");c&&(s.preventDefault(),re(c.getAttribute("data-mini-showreel-open")||""))}function w(s){let c=s.target.closest("[data-mini-showreel-close]");c&&(s.preventDefault(),$(c.getAttribute("data-mini-showreel-close")||""))}function E(s){s.key==="Escape"&&$("")}let m=gsap.matchMedia();return m.add(qn,function(){return i.addEventListener("click",F),document.addEventListener("click",w),window.addEventListener("keydown",E),window.addEventListener("resize",O),function(){J(),i.removeEventListener("click",F),document.removeEventListener("click",w),window.removeEventListener("keydown",E),window.removeEventListener("resize",O)}}),function(){m.revert(),J()}}var it={x:0,y:0,known:!1};window.addEventListener("pointermove",i=>{it.x=i.clientX,it.y=i.clientY,it.known=!0},{passive:!0});function Ze(i){let t=e=>i(e.clientX,e.clientY),n=()=>{it.known&&i(it.x,it.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,We=1080,wt="#E5E5E5",St="#000000",nn="http://www.w3.org/2000/svg";function rn(i){let t=i.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(nn,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${We}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(m,s)=>{let c=document.createElementNS(nn,m);return c.setAttribute("fill",s),n.appendChild(c),c},a=e("polygon",wt),u=e("polygon",St),T=e("rect",St),v=e("rect",wt),C=e("rect",wt),R=e("rect",St);[T,v,C,R].forEach(m=>m.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let d=(m,s,c,D,W)=>{m.setAttribute("x",s),m.setAttribute("y",c),m.setAttribute("width",Math.max(0,D)),m.setAttribute("height",Math.max(0,W))},h={x:qe*(2/3),y:We*(1/3)},y=.1,o=.9,f={x:h.x,y:h.y},r={x:h.x,y:h.y},p={x:h.x,y:h.y},S=!1,K=()=>gsap.to(p,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:K}),L=()=>gsap.to(p,{y:gsap.utils.random(We*.193,We*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:L});K(),L();function G(){let m=gsap.utils.clamp(qe*y,qe*o,f.x),s=qe-m,c=gsap.utils.clamp(We*y,We*o,f.y),D=We-c;a.setAttribute("points",`0,${c} ${m},0 ${qe},${c} ${qe},${We} 0,${We}`),u.setAttribute("points",`${qe},${c} ${m},0 ${m},${c}`),d(T,0,c,m,D);let W=m*.25,H=D*(2/3);d(v,m/2-W/2,c+D-H,W,H),d(C,m,c,s,D);let g=s*.5,M=D/3;d(R,m+s/2-g/2,c+D/2-M/2,g,M)}let ae=.1,B=.03;function P(){let s=1-Math.pow(1-(S?ae:B),gsap.ticker.deltaRatio(60)),c=S?r:p;f.x+=(c.x-f.x)*s,f.y+=(c.y-f.y)*s,G()}let Y=(m,s)=>{let c=t.getBoundingClientRect();!c.width||!c.height||(r.x=gsap.utils.clamp(0,qe,(m-c.left)/c.width*qe),r.y=gsap.utils.clamp(0,We,(s-c.top)/c.height*We),S=!0)},A=()=>{S=!1},N=(m,s)=>{let c=t.getBoundingClientRect();m>=c.left&&m<=c.right&&s>=c.top&&s<=c.bottom?Y(m,s):A()},re=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Ze(N):null,$=m=>{let s=m.touches[0];s&&Y(s.clientX,s.clientY)},J={passive:!0};t.addEventListener("touchstart",$,J),t.addEventListener("touchmove",$,J),t.addEventListener("touchend",A,J),t.addEventListener("touchcancel",A,J);let O=!1,F=()=>{O||(O=!0,gsap.ticker.add(P))},w=()=>{O&&(O=!1,gsap.ticker.remove(P))},E=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:m=>m.isActive?F():w()});return G(),F(),function(){w(),E.kill(),gsap.killTweensOf(p),re&&re(),t.removeEventListener("touchstart",$,J),t.removeEventListener("touchmove",$,J),t.removeEventListener("touchend",A,J),t.removeEventListener("touchcancel",A,J),n.remove()}}var Gn="http://www.w3.org/2000/svg";var Wn=4.1343749999999995,Nn="#BBC0C8",Xn="#FFFFFF",Yn=5e3,$n=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Kn=0,on=(i,t)=>{if(i<0||t<0||i>=20||t>=20)return!1;let n=20/2;return Math.hypot(i+.5-n,t+.5-n)<=n},je=(i,t)=>{let n=document.createElementNS(Gn,i);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function an(i){let t=i.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++Kn;e.setAttribute("data-pulse-dots-paused","");let u=je("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});u.style.setProperty("--pd-step",`${31.5}px`);let T=je("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});T.append(je("feGaussianBlur",{in:"SourceGraphic",stdDeviation:Wn.toFixed(2)}),je("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let v=je("defs",{});v.appendChild(T);let C=je("rect",{width:1e3,height:1e3,fill:Nn}),R=je("g",{filter:`url(#${a})`,fill:Xn});for(let h=0;h<20;h++)for(let y=0;y<20;y++){if(!on(y,h))continue;let o=$n.filter(K=>on(y+K.dx,h+K.dy)),f=o[Math.floor(Math.random()*o.length)],r=185+y*31.5+27.5625/2,p=185+h*31.5+27.5625/2,S=je("g",{transform:`rotate(${f.deg} ${r} ${p})`});S.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Yn)}ms`),S.append(je("circle",{class:"pulse-dots__dot is--first",cx:r,cy:p,r:27.5625/2}),je("circle",{class:"pulse-dots__dot is--last",cx:r,cy:p,r:27.5625/2})),R.appendChild(S)}u.append(v,C,R),e.appendChild(u);let d=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:h=>e.toggleAttribute("data-pulse-dots-paused",!h.isActive)});e.toggleAttribute("data-pulse-dots-paused",!d.isActive),n.push(()=>{d.kill(),e.removeAttribute("data-pulse-dots-paused"),u.remove()})}),()=>n.forEach(e=>e())}var vt=`#version 300 es
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
}`;var Tt=60,jn=1.5,Jn=1,hn=150,At=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function gn(i){let t=i.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function u(E,m){let s=e.createShader(E);return e.shaderSource(s,m),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let T=[];function v(E,m=sn){let s=e.createProgram(),c=u(e.VERTEX_SHADER,m),D=u(e.FRAGMENT_SHADER,E);e.attachShader(s,c),e.attachShader(s,D),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(c),e.deleteShader(D),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let W={},H=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let M=0;M<H;M++){let I=e.getActiveUniform(s,M);W[I.name]=e.getUniformLocation(s,I.name)}let g={p:s,loc:W};return T.push(g),g}let C={bg:v(cn,vt),shapes:ln.map(E=>v(E,un)),trailSim:v(vn,vt),trail:v(dn),blur:fn.map(E=>v(E)),bloom:pn.map(E=>v(E)),gmap:v(mn,vt)},R=e.createVertexArray();e.bindVertexArray(R);let d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let y=[];function o(E,m,s=!1){let c=e.createTexture();e.bindTexture(e.TEXTURE_2D,c),s&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,E,m,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,E,m,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let D=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let W={tex:c,fb:D,w:E,h:m};return y.push(W),W}function f(){y.forEach(E=>{e.deleteTexture(E.tex),e.deleteFramebuffer(E.fb)}),y.length=0}function r(E,m,s,c){e.useProgram(E.p);let D=m?m.w:n.width,W=m?m.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,m?m.fb:null),e.viewport(0,0,D,W);let H=E.loc;H.uMVMatrix&&e.uniformMatrix4fv(H.uMVMatrix,!1,At),H.uPMatrix&&e.uniformMatrix4fv(H.uPMatrix,!1,At),H.uTextureMatrix&&e.uniformMatrix4fv(H.uTextureMatrix,!1,At),H.uResolution&&e.uniform2f(H.uResolution,D,W),H.uArtboardResolution&&e.uniform2f(H.uArtboardResolution,1920,1920),H.uAspectRatio&&e.uniform1f(H.uAspectRatio,1),H.uMousePos&&e.uniform2f(H.uMousePos,p.x,p.y),H.uIsMask&&e.uniform1i(H.uIsMask,0),H.uParentTrackMouse&&e.uniform1f(H.uParentTrackMouse,0);let g=0;Object.keys(s).forEach(M=>{H[M]&&(e.activeTexture(e.TEXTURE0+g),e.bindTexture(e.TEXTURE_2D,s[M].tex),e.uniform1i(H[M],g),g++)}),Object.keys(c||{}).forEach(M=>{if(!H[M])return;let I=c[M];Array.isArray(I)?e.uniform2f(H[M],I[0],I[1]):e.uniform1f(H[M],I)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let p={x:.5,y:.5},S={x:.5,y:.5},K=0,L=null,G=0;function ae(){f();let E=Math.min(jn,window.devicePixelRatio||1),m=Math.max(1,Math.round(t.clientWidth*E)),s=Math.max(1,Math.round(t.clientHeight*E));n.width=m,n.height=s;let c=H=>[Math.max(1,Math.round(m*H)),Math.max(1,Math.round(s*H))];L={a:o(m,s),b:o(m,s),pp:[o(...c(.5),!0),o(...c(.5),!0)],trail:o(m,s),blur1:o(...c(1)),blur2:o(...c(1)),blur3:o(...c(1)),blur4:o(...c(1)),bth:o(...c(1)),bd1:o(...c(1)),bd2:o(...c(1)),bs1:o(...c(1)),bs2:o(...c(1)),bloom:o(m,s)},r(C.bg,L.a,{});let D=L.a,W=L.b;C.shapes.forEach(H=>{r(H,W,{uBgTexture:D});let g=D;D=W,W=g}),L.base=D,G=0}function B(){if(!L)return;let E=L.pp[G],m=L.pp[1-G];r(C.trailSim,m,{uPingPongTexture:E},{uTime:K,uPreviousMousePos:[S.x,S.y]}),G=1-G,r(C.trail,L.trail,{uTexture:L.base,uPingPongTexture:m}),r(C.blur[0],L.blur1,{uTexture:L.trail}),r(C.blur[1],L.blur2,{uTexture:L.blur1}),r(C.blur[2],L.blur3,{uTexture:L.blur2}),r(C.blur[3],L.blur4,{uTexture:L.blur3});let s=L.blur4;r(C.bloom[0],L.bth,{uTexture:s}),r(C.bloom[1],L.bd1,{uTexture:L.bth}),r(C.bloom[2],L.bd2,{uTexture:L.bd1,uBgTexture:s}),r(C.bloom[3],L.bs1,{uTexture:L.bd2}),r(C.bloom[4],L.bs2,{uTexture:L.bs1,uBgTexture:s}),r(C.bloom[5],L.bloom,{uTexture:L.bs2,uBgTexture:s}),r(C.gmap,null,{uTexture:L.bloom},{uTime:0}),S.x=p.x,S.y=p.y}let P=hn,A=Ze((E,m)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(p.x=(E-s.left)/s.width,p.y=1-(m-s.top)/s.height,P=0,J())}),N=null,ne=0,re=!1;function $(E){if(!re||P>=hn){N=null;return}if(N=requestAnimationFrame($),E-ne<1e3/Tt-1)return;let m=ne?Math.min(E-ne,100):1e3/Tt;ne=E,K+=Jn*(m/(1e3/Tt)),B(),P++}function J(){re&&!N&&(S.x=p.x,S.y=p.y,ne=0,N=requestAnimationFrame($))}let O=new IntersectionObserver(([E])=>{re=E.isIntersecting,re?J():N&&(cancelAnimationFrame(N),N=null)});O.observe(t);let F=null,w=new ResizeObserver(()=>{clearTimeout(F),F=setTimeout(()=>{ae(),B()},60)});return w.observe(t),ae(),B(),function(){N&&cancelAnimationFrame(N),N=null,clearTimeout(F),O.disconnect(),w.disconnect(),A(),f(),T.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(d),e.deleteBuffer(h),e.deleteVertexArray(R);let m=e.getExtension("WEBGL_lose_context");m&&m.loseContext(),n.remove()}}function xn(i){let t=i.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",u="rgba(0, 0, 0, 0.2)",T="rgba(0, 0, 0, 0.75)",v=2.125,C=1.5,R=24,d=.5,h="20px",y=matchMedia("(hover: hover) and (pointer: fine)").matches,o={x:0,y:0,cx:0,cy:0,active:!1},f={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},p=[],S,K,L,G,ae,B,P=performance.now();function Y(g,M){let I=document.createElement("div");I.style.cssText=`position:absolute;visibility:hidden;width:${g};`,M.appendChild(I);let ie=I.getBoundingClientRect().width;return I.remove(),ie}function A(g,M){let I=document.createElement("span");I.style.color=g,M.appendChild(I);let ie=getComputedStyle(I).color;I.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ie,Se.fillRect(0,0,1,1);let _e=[...Se.getImageData(0,0,1,1).data];return _e[3]/=255,_e}function N(g,M,I){return`rgba(${g.map((ie,pe)=>ie+(M[pe]-ie)*I).join(",")})`}function ne(g,M){Object.assign(g,{from:g.value,to:M,start:performance.now()})}function re(g,M){if(!d)return g.value=g.to;let I=Math.min(Math.max((M-g.start)/(d*1e3),0),1);g.value=g.from+(g.to-g.from)*(1-Math.pow(1-I,4))}t.forEach(g=>{let M=document.createElement("canvas"),I=M.getContext("2d");M.setAttribute("aria-hidden","true"),Object.assign(M.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(g).position==="static"&&(g.style.position="relative"),g.prepend(M),p.push({element:g,canvas:M,ctx:I,width:0,height:0,visible:!1,inactive:A(g.getAttribute("data-dots-color-inactive")||u,g),active:A(g.getAttribute("data-dots-color-active")||T,g)})});function $(){return p.some(({element:g})=>{let M=g.getBoundingClientRect();return o.x>=M.left&&o.x<=M.right&&o.y>=M.top&&o.y<=M.bottom})}function J(g,M){let I=g.element.getBoundingClientRect(),ie=I.left-M.left,pe=I.top-M.top,Se=o.cx-M.left,_e=o.cy-M.top,Ne=v*(1+(C-1)*r.value);g.ctx.clearRect(0,0,g.width,g.height);for(let Ce=0;Ce<g.rows;Ce++){let Q=g.oy+Ce*g.sy,ee=pe+Q;for(let k=0;k<g.cols;k++){let j=g.ox+k*g.sx,fe=ie+j,le=y&&f.value?Math.max(0,1-Math.hypot(fe-Se,ee-_e)/ae)*f.value:0,ve=K*(1+(Ne-1)*le);g.ctx.fillStyle=N(g.inactive,g.active,le),a==="square"?g.ctx.fillRect(j-ve/2,Q-ve/2,ve,ve):(g.ctx.beginPath(),g.ctx.arc(j,Q,ve/2,0,Math.PI*2),g.ctx.fill())}}}function O(g=!1){let M=t[0].getBoundingClientRect();p.forEach(I=>(!g||I.visible)&&J(I,M))}function F(g){if(B=null,!p.some(I=>I.visible))return;let M=Math.min((g-P)/1e3,.1);if(P=g,re(f,g),re(r,g),!d)o.cx=o.x,o.cy=o.y;else{let I=1-Math.exp(-M*6/d);o.cx+=(o.x-o.cx)*I,o.cy+=(o.y-o.cy)*I}O(!0),B=requestAnimationFrame(F)}function w(){y&&!B&&p.some(g=>g.visible)&&(P=performance.now(),B=requestAnimationFrame(F))}function E(){S=Math.min(devicePixelRatio||1,2),K=Y(e,t[0]),L=Y(n,t[0]),G=K+L,ae=G*R;let g=Y(h,t[0])+K/2,M=I=>{let ie=I-2*g,pe=ie>=0?Math.floor(ie/G)+1:0;return{count:pe,offset:g,step:pe>1?ie/(pe-1):G}};p.forEach(I=>{let ie=I.element.getBoundingClientRect();I.width=ie.width,I.height=ie.height;let pe=M(ie.width),Se=M(ie.height);I.cols=pe.count,I.ox=pe.offset,I.sx=pe.step,I.rows=Se.count,I.oy=Se.offset,I.sy=Se.step,I.canvas.width=Math.round(ie.width*S),I.canvas.height=Math.round(ie.height*S),I.ctx.setTransform(S,0,0,S,0,0)}),O(),w()}let m=(g,M)=>{o.x=g,o.y=M;let I=$();I!==o.active&&(o.active=I,ne(f,+I),I?(o.cx=o.x,o.cy=o.y):ne(r,0)),w()},s=null,c=()=>o.active&&ne(r,1),D=()=>ne(r,0);y&&(s=Ze(m),window.addEventListener("pointerdown",c),window.addEventListener("pointerup",D));let W=new IntersectionObserver(g=>{g.forEach(M=>{let I=p.find(ie=>ie.element===M.target);I&&(I.visible=M.isIntersecting)}),y?w():O(!0)}),H=new ResizeObserver(E);return t.forEach(g=>{W.observe(g),H.observe(g)}),window.addEventListener("resize",E),E(),function(){B&&cancelAnimationFrame(B),B=null,y&&(s&&s(),window.removeEventListener("pointerdown",c),window.removeEventListener("pointerup",D)),window.removeEventListener("resize",E),W.disconnect(),H.disconnect(),p.forEach(g=>g.canvas.remove()),p.length=0}}var rt={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},bn=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)},Qn=i=>{let t=Math.floor(i),n=i-t,e=n*n*(3-2*n);return bn(t)*(1-e)+bn(t+1)*e};function yn(i){let t=i.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],u=null,T=0,v=18,C=0,R=0,d=0,h=-1e5,y=-1e5,o=!1,f=!1;function r(){u&&u.revert(),t.textContent="";let A=getComputedStyle(t);T=parseFloat(A.paddingTop),v=parseFloat(A.lineHeight),C=t.offsetHeight;let N=Math.max(1,Math.floor((C-T-parseFloat(A.paddingBottom))/v)),ne=document.createDocumentFragment();for(let re=0;re<N;re++){let $=document.createElement("div");$.className="type-field__row",$.textContent=n,ne.appendChild($)}t.appendChild(ne),t.setAttribute("aria-hidden","true"),u=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((re,$)=>({chars:re.querySelectorAll(".type-field__char"),cur:a[$]?a[$].cur:0,drawn:0}))}})}function p(A){let N=Math.max(0,Math.min(A.chars.length,Math.round(A.cur)));if(N===A.drawn)return;let ne=Math.min(N,A.drawn),re=Math.max(N,A.drawn);for(let $=ne;$<re;$++)A.chars[$].style.visibility=$<N?"visible":"hidden";A.drawn=N}function S(A,N){if(!a.length)return;let ne=Math.min(N,50)/16.667,re=E=>1-Math.pow(1-E,ne),$=Pe.scroll,J=Math.min(Math.max(R-$,0),d-$-C);y+=(h-J-T-y)*re(rt.followEase);let O=Math.floor(y/v),F=$*.004,w=o&&h>=R-$&&h<=d-$;for(let E=0;E<a.length;E++){let m=a[E],s=m.chars.length,c=Math.abs(E-O),D=0;if(w){if(c===0)D=s;else if(c<=rt.radius){let W=1-c/(rt.radius+1);D=1+Math.min(rt.maxSide,W*(1-rt.ragged/2+rt.ragged*Qn(E*1.3+F)))*(s-1)}}m.cur+=(D-m.cur)*re(rt.ease),p(m)}}function K(){f||(gsap.ticker.add(S),f=!0)}function L(){f&&(gsap.ticker.remove(S),f=!1)}let G=Ze((A,N)=>{y<-1e4&&(y=N),h=N,o=!0}),ae=()=>{o=!1};document.documentElement.addEventListener("mouseleave",ae),r();let B=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(A){R=A.start+window.innerHeight,d=A.end},onToggle(A){A.isActive?K():L()}});B.isActive&&K();let P,Y=()=>{clearTimeout(P),P=setTimeout(()=>{Math.floor((t.offsetHeight-T-parseFloat(getComputedStyle(t).paddingBottom))/v)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",Y),function(){L(),clearTimeout(P),G(),document.documentElement.removeEventListener("mouseleave",ae),window.removeEventListener("resize",Y),B.kill(),u&&u.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var Pn={duration:.5,ease:"power3"};function En(i){let t=i.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let u=gsap.quickTo(a,"x",Pn),T=gsap.quickTo(a,"y",Pn),v=0,C=0,R=!1,d=new ResizeObserver(()=>{v=a.offsetWidth,C=a.offsetHeight});d.observe(a),v=a.offsetWidth,C=a.offsetHeight;let y=Ze((f,r)=>{let p=e.getBoundingClientRect();if(!(f>=p.left&&f<=p.right&&r>=p.top&&r<=p.bottom)){R&&(R=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let K=gsap.utils.clamp(0,Math.max(0,p.width-v),f-p.left-v/2),L=gsap.utils.clamp(0,Math.max(0,p.height-C),r-p.top-C/2);if(!R){R=!0,u(K,K),T(L,L),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}u(K),T(L)}),o=()=>{R&&(R=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",o),n.push(()=>{y(),document.documentElement.removeEventListener("mouseleave",o),d.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var er=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],tr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],nr="#FFFFFF";var wn="power3.out";function Sn(i){let t=i.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],u=[],T=[];function v(){if(u.length&&u[0].isConnected)return;let h=e.querySelectorAll(":scope > div > div");a=(h.length?[...h]:[e]).map(o=>SplitText.create(o,{type:"chars"})),u=a.flatMap(o=>o.chars),T=h.length?[...e.children].map(o=>({el:o,overflow:o.style.overflow})):[],u.forEach(o=>{o.dataset.orig=o.textContent})}function C(h){h.textContent=h.dataset.orig,h.style.border=""}let R=()=>{v(),T.forEach(y=>{y.el.style.overflow="visible"});let h=(u.length-1)/2;u.forEach((y,o)=>{gsap.to(y,{color:nr,ease:wn,duration:.3,delay:Math.abs(o-h)*.03,overwrite:"auto",onStart:()=>{let f=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);f==1&&(y.textContent=gsap.utils.random(tr)),r==1&&(y.style.border=`1px solid ${gsap.utils.random(er)}`)}})})},d=()=>{if(!u.length)return;let h=getComputedStyle(e).color,y=(u.length-1)/2;T.forEach(o=>{o.el.style.overflow=o.overflow}),u.forEach((o,f)=>{gsap.to(o,{color:h,ease:wn,duration:.3,delay:Math.abs(f-y)*.03,overwrite:"auto",onStart:()=>C(o)})})};e.addEventListener("mouseenter",R),e.addEventListener("mouseleave",d),n.push(()=>{e.removeEventListener("mouseenter",R),e.removeEventListener("mouseleave",d),gsap.killTweensOf(u),a.forEach(h=>h.revert()),a=[],u=[],T=[]})}),()=>n.forEach(e=>e())}function Ct(i,t){let n=null;me(qt(i)),me(rn(i)),me(Sn(i)),me(xn(i)),me(Jt(i)),me(Gt(i)),me(tn(i));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Wt(i):null,n?me(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),me(Nt(i)),me($t(i)),me(Kt(i)),me(dt(i)),ut(i),Zt(i),n}function ft(i){me(Qt(i)),i.querySelector("[data-flip-element]")&&window.innerWidth>991&&me(jt(i)),me(yn(i)),me(En(i)),me(an(i)),me(gn(i)),ScrollTrigger.sort()}var rr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function pt(i){var t=[];return i.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(u){gsap.set(n,{autoAlpha:1});var T=rr[e],v={yPercent:110,duration:T.duration,stagger:T.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?v.delay=.5:v.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(u[e],v)}}))}),function(){t.forEach(function(n){n.revert()})}}var Tn=window.matchMedia("(prefers-reduced-motion: reduce)"),Mt=.9;function An(i){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{i.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Tn.matches||!n?e.set(i,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:lt,duration:Mt,ease:Ke},0),e.fromTo(i,{y:"0vh"},{y:"-25vh",duration:Mt,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function Rt(i,t,n="100vh"){let e=gsap.timeline();return Tn.matches?e.set(i,{autoAlpha:1}):(e.set(i,{zIndex:3},0),e.fromTo(i,{y:n},{y:"0vh",duration:Mt,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(i,{clearProps:"zIndex"}),t(i)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function Ft(i,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(i,{position:"relative"}),Rt(i,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var ot=null,zt=!1;function Lt(i){gsap.set(i,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Pe.scrollTo(0,{immediate:!0,force:!0}),Pe.resize()}var Cn={sync:!0,beforeLeave(){zt=bt({keepCurtain:!0}),Pe.stop(),ot||(ot=xt())},beforeEnter(i){ot||(ot=xt()),gsap.set(i.next.container,{position:"fixed",top:0,left:0,right:0}),Ht(),Ct(i.next.container,!1)},leave(i){return An(i.current.container,i.next.container)},enter(i){return zt&&(Dt(),zt=!1),me(pt(i.next.container)),Rt(i.next.container,Lt)},afterLeave(){ot&&(ot(),ot=null)},afterEnter(i){_t(i),ft(i.next.container),Pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:i}){if(!i||!i.href)return!1;let t=new URL(i.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Cn,once(i){let t=document.querySelector("[data-menu-status]");It(),Ut(),t&&(ut(t),dt(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=i.next.container,e=Ct(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");me(pt(n)),Ft(n,function(u){Lt(u),ft(u),Pe.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(Pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),me(pt(n)),Ft(n,function(a){Lt(a),ft(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Pe.start()})})})}))}},{name:"self",...Cn}]}),window.addEventListener("pageshow",function(i){i.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

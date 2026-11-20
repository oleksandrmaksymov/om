(()=>{gsap.registerPlugin(ScrollTrigger,Flip,SplitText,CustomEase);CustomEase.create("loader","0.65, 0.01, 0.05, 0.99");CustomEase.create("osmo","0.625, 0.05, 0, 1");ScrollTrigger.config({ignoreMobileResize:!0});var Pe=new Lenis({lerp:.08,wheelMultiplier:1});Pe.on("scroll",ScrollTrigger.update);gsap.ticker.add(o=>{Pe.raf(o*1e3)});gsap.ticker.lagSmoothing(0);var bt=[];function pe(o){typeof o=="function"&&bt.push(o)}function yt(){let o=bt,t=ScrollTrigger.getAll();return bt=[],function(){o.forEach(function(e){try{e()}catch(a){console.error(a)}}),t.forEach(function(e){e.kill()}),window._flipProgress=0}}var Hn="0.7, 0.05, 0.13, 1";CustomEase.create("parallax",Hn);var Ke="parallax",dt=.8;var _n="polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",It="polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",tt=null,Pt=function(){return!1};function Ut(){tt&&gsap.timeline().to(tt,{clipPath:It,duration:.9,ease:Ke,overwrite:!0},0).fromTo(tt,{filter:"brightness(1)"},{filter:"brightness("+(1-dt)+")",duration:.9,ease:Ke},0).set(tt,{clearProps:"filter"})}function Ht(){let o=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu-status]");if(!o||!t)return;tt=t.querySelector(".nav-bg"),o.setAttribute("aria-expanded","false"),o.setAttribute("aria-controls","mobile-navigation"),t.setAttribute("id","mobile-navigation"),t.setAttribute("role","navigation"),t.setAttribute("aria-label","Main navigation");function n(a){t.dataset.menuStatus=a?"open":"closed",o.setAttribute("aria-expanded",a),a?(Pe.stop(),document.body.style.overflow="hidden"):(Pe.start(),document.body.style.overflow="")}function e(a){tt&&gsap.to(tt,{clipPath:a?_n:It,duration:.9,ease:Ke,overwrite:!0})}o.addEventListener("click",function(){let a=t.dataset.menuStatus!=="open";n(a),e(a)}),Pt=function(a){return t.dataset.menuStatus!=="open"?!1:(n(!1),a&&a.keepCurtain||e(!1),!0)}}function _t(){window.matchMedia("(hover: hover)").matches&&(document.addEventListener("mouseenter",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-out 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0),document.addEventListener("mouseleave",function(o){var t=o.target.closest&&o.target.closest(".heading-link");t&&(t.style.animation="none",t.offsetHeight,t.style.animation="heading-swipe-in 0.8s cubic-bezier(0.525, 0, 0, 1)")},!0))}function Bt(){let o=function(n){return n.replace(/\/$/,"")||"/"},t=o(location.pathname);document.querySelectorAll("[data-menu-status] a[href]").forEach(function(n){let e=new URL(n.href,location.href),a=e.origin===location.origin&&o(e.pathname)===t&&!e.hash;n.classList.toggle("w--current",a),a?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")})}function Ot(o){let n=new DOMParser().parseFromString(o.next.html,"text/html").documentElement.getAttribute("data-wf-page");if(n&&document.documentElement.setAttribute("data-wf-page",n),window.Webflow){window.Webflow.destroy(),window.Webflow.ready();let e=window.Webflow.require("ix2");e&&e.init()}}function vt(o){let t=o.querySelectorAll(".copy-email-button");if(!t.length)return;let n=a=>{let c=a.getAttribute("data-copy-email")||a.querySelector("[data-copy-email-element]").textContent.trim();c&&navigator.clipboard.writeText(c).then(()=>{a.setAttribute("data-copy-button","copied"),a.setAttribute("aria-label","Email copied to clipboard!")})},e=a=>{(a.type==="click"||a.type==="keydown"&&(a.key==="Enter"||a.key===" "))&&(a.preventDefault(),n(a.currentTarget))};t.forEach(a=>{a.addEventListener("click",e),a.addEventListener("keydown",e),a.addEventListener("mouseleave",()=>{a.removeAttribute("data-copy-button"),a.blur(),a.setAttribute("aria-label","Copy email to clipboard")}),a.addEventListener("blur",()=>{a.removeAttribute("data-copy-button"),a.setAttribute("aria-label","Copy email to clipboard")})})}function ft(o){let t=o.querySelector("[data-clock]");if(!t)return;function n(){let a=new Date,c=a.toLocaleTimeString("en-GB",{timeZone:"Europe/Kyiv",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),f=a.toLocaleString("en-GB",{timeZone:"Europe/Kyiv",timeZoneName:"short"}).split(" ").pop();t.textContent=c+" "+f}n();let e=setInterval(n,1e3);return function(){clearInterval(e)}}var Et={};function ut(o){return Et[o]||(Et[o]=new Promise(function(t,n){let e=document.createElement("script");e.src=o,e.onload=t,e.onerror=n,document.head.appendChild(e)})),Et[o]}function Vt(o){var t=!window.matchMedia("(hover: hover) and (pointer: fine)").matches,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",o.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),n.add(S);var f=new THREE.PointLight(5913114,1.2,900);f.position.set(0,200,-300),n.add(f);var A=new THREE.PointLight(16750916,1.3,600);A.position.set(0,-250,200),n.add(A);var R=0,l=0,m=0,P=0,i=!1,p=0,r=0,v=Math.PI*2/6,b=new THREE.Vector2(9999,9999),X=new THREE.Raycaster,C=120,G=new THREE.Vector3(9999,9999,0),ae=new THREE.Vector3(9999,9999,0),B=new THREE.Vector3,E=!1,Y=0,M=0,N=8e4,ne=.03,re=.95,K=.005,Q=12e4,O=null,z,T,w,h,s,u,D=0,W=!1,H=0,g=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function F(){var y=new THREE.BufferGeometry;z=new Float32Array(Q*3),T=new Float32Array(Q*3),w=new Float32Array(Q*3),h=new Float32Array(Q*3),s=new Float32Array(Q),u=new Float32Array(Q),y.setAttribute("position",new THREE.BufferAttribute(z,3)),y.setAttribute("color",new THREE.BufferAttribute(h,3)),y.setAttribute("size",new THREE.BufferAttribute(s,1)),y.setAttribute("alpha",new THREE.BufferAttribute(u,1)),y.setAttribute("velocity",new THREE.BufferAttribute(T,3));var $=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,q=new THREE.ShaderMaterial({vertexShader:$,fragmentShader:d,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});O=new THREE.Points(y,q),n.add(O)}function I(y,$){return new Promise(function(d){try{var q=512,Z=document.createElement("canvas");Z.width=Z.height=q;var te=Z.getContext("2d"),ke=new DOMParser().parseFromString(y,"image/svg+xml"),Fe=ke.querySelector("svg");if(!Fe){d([]);return}var L=parseFloat(Fe.getAttribute("width")||512),V=parseFloat(Fe.getAttribute("height")||512),x=Fe.getAttribute("viewBox");if(x){var U=x.split(/[\s,]+/);L=+U[2],V=+U[3]}var se=Math.min(q/L,q/V)*.9,oe=(q-L*se)/2,ze=(q-V*se)/2;te.save(),te.translate(oe,ze),te.scale(se,se),te.fillStyle="white",ke.querySelectorAll("path,rect,circle").forEach(function(xe){if(xe.tagName==="path"){var He=xe.getAttribute("d");He&&te.fill(new Path2D(He))}else xe.tagName==="rect"?te.fillRect(+xe.getAttribute("x")||0,+xe.getAttribute("y")||0,+xe.getAttribute("width")||0,+xe.getAttribute("height")||0):xe.tagName==="circle"&&(te.beginPath(),te.arc(+xe.getAttribute("cx")||0,+xe.getAttribute("cy")||0,+xe.getAttribute("r")||0,0,Math.PI*2),te.fill())}),te.restore();for(var be=te.getImageData(0,0,q,q).data,Te=[],ye=0;ye<q;ye++)for(var Ie=0;Ie<q;Ie++){var Ee=(ye*q+Ie)*4;be[Ee+3]>30&&Te.push({x:Ie,y:ye,a:be[Ee+3]/255})}if(!Te.length){d([]);return}for(var Ge=[],Ee=0;Ee<$;Ee++){var Ue=Te[Math.floor(Math.random()*Te.length)];Ge.push({x:(Ue.x-q/2)*1.2+(Math.random()-.5)*1.65,y:-(Ue.y-q/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*Ue.a,a:Ue.a})}d(Ge)}catch(xe){console.error(xe),d([])}})}function ie(y){D=y.length;for(var $=0;$<D;$++){var d=y[$],q=$*3;z[q]=d.x,z[q+1]=d.y+40,z[q+2]=d.z,T[q]=T[q+1]=T[q+2]=0,w[q]=d.x,w[q+1]=d.y,w[q+2]=d.z;var Z=g[Math.floor(Math.random()*g.length)],te=.7+Math.random()*.4;h[q]=Z.r*te,h[q+1]=Z.g*te,h[q+2]=Z.b*te,s[$]=1.8+Math.random()*3.8,u[$]=.3+(d.a||.7)*.75}O.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(ke){O.geometry.attributes[ke].needsUpdate=!0}),W=!0}function me(y){return I(y,Math.min(Q,N)).then(function($){$.length&&O&&ie($)})}function Se(y){if(!(!W||!D)){H+=y;for(var $=0;$<D;$++){var d=$*3,q=$*1.37;if(T[d]+=Math.sin(H*.4+q)*.008+Math.sin(H*1.1+q*2.3)*.003,T[d+1]+=Math.cos(H*.35+q*.7)*.008+Math.sin(H*.9+q*1.5)*.004,T[d+2]+=Math.sin(H*.25+q*1.1)*.004,T[d+1]-=ne*.06,T[d]+=Math.sin(H*.25+z[d+1]*.008)*K*.6,T[d+2]+=Math.cos(H*.3+z[d]*.008)*K*.3,E){var Z=z[d]-G.x,te=z[d+1]-G.y,ke=z[d+2]-G.z,Fe=Z*Z+te*te+ke*ke,L=C*C;if(Fe<L&&Fe>.25){var V=Math.sqrt(Fe),x=V/C,U=($*2654435761&65535)/65535,se=.6+U*.8,oe=Math.pow(1-x,1.5+U),ze=1+Math.min(B.length()*.12,1),be=oe*se*1.2*ze,Te=1/V;T[d]+=Z*Te*be,T[d+1]+=te*Te*be,T[d+2]+=ke*Te*be*.2;var ye=.02+U*.06;T[d]+=B.x*oe*ye,T[d+1]+=B.y*oe*ye;var Ie=oe*.15;T[d]+=(U-.5)*Ie,T[d+1]+=(($*48271&65535)/65535-.5)*Ie}}var Ee=w[d],Ge=w[d+1]+40,Ue=w[d+2],xe=Ee-z[d],He=Ge-z[d+1],Oe=Ue-z[d+2],Qe=Math.sqrt(xe*xe+He*He+Oe*Oe),Je=($*48271&65535)/65535,et=.003+Je*.003,it=1+Math.min(Qe*.002,.5),$e=et*it;T[d]+=xe*$e,T[d+1]+=He*$e,T[d+2]+=Oe*$e;var we=($*16807&65535)/65535,Ye=re*(.92+we*.06);T[d]*=Ye,T[d+1]*=Ye,T[d+2]*=Ye,z[d]+=T[d],z[d+1]+=T[d+1],z[d+2]+=T[d+2];var lt=Math.sqrt(Math.pow(z[d]-w[d],2)+Math.pow(z[d+1]-w[d+1],2)+Math.pow(z[d+2]-w[d+2],2));u[$]=.15+.55*(1-Math.min(lt*.005,1))+Math.sin(H*1.5+$*.01)*.05}O.geometry.attributes.position.needsUpdate=!0,O.geometry.attributes.alpha.needsUpdate=!0,O.geometry.attributes.velocity.needsUpdate=!0}}var _e=new THREE.Matrix4,Ne=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),Ce=new THREE.Vector3;function J(y,$){var d=a.domElement.getBoundingClientRect();if(!(d.width===0||d.height===0)&&(b.set((y-d.left)/d.width*2-1,-(($-d.top)/d.height)*2+1),X.setFromCamera(b,e),X.ray.intersectPlane(Ne,Ce))){ae.copy(G),O&&G.copy(Ce).applyMatrix4(_e.copy(O.matrixWorld).invert()),B.subVectors(G,ae);var q=B.length();q>15&&B.multiplyScalar(15/q)}}function ee(y,$){var d=o.getBoundingClientRect();return y>=d.left&&y<=d.right&&$>=d.top&&$<=d.bottom}var k=o.querySelector("#logo-coords"),j=o.querySelector("#logo-drag-label"),fe=!1;if(!t){var le=function(y){Y=y.clientX,M=y.clientY;var $=ee(y.clientX,y.clientY);if($){E=!0,J(y.clientX,y.clientY);var d=o.getBoundingClientRect(),q=Math.round(y.clientX-d.left),Z=Math.round(y.clientY-d.top);k&&(k.textContent="X: "+q+"PX    Y: "+Z+"PX")}else E=!1,G.set(9999,9999,0);i&&(R+=(y.clientX-p)*.005,m+=(y.clientY-r)*.005,m=Math.max(-Math.PI/2,Math.min(Math.PI/2,m)),p=y.clientX,r=y.clientY)},ve=function(y){ee(y.clientX,y.clientY)&&(i=!0,p=y.clientX,r=y.clientY)},ge=function(){i=!1,R=0,m=0,l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2)};window.addEventListener("mousemove",le),window.addEventListener("mousedown",ve),window.addEventListener("mouseup",ge)}function Me(){for(var y=4e3,$=new THREE.BufferGeometry,d=new Float32Array(y*3),q=new Float32Array(y*3),Z=0;Z<y;Z++){d[Z*3]=(Math.random()-.5)*2200,d[Z*3+1]=(Math.random()-.5)*1800,d[Z*3+2]=-200-Math.random()*1800;var te=g[Math.floor(Math.random()*g.length)],ke=.2+Math.random()*.3;q[Z*3]=te.r*ke,q[Z*3+1]=te.g*ke,q[Z*3+2]=te.b*ke}$.setAttribute("position",new THREE.BufferAttribute(d,3)),$.setAttribute("color",new THREE.BufferAttribute(q,3));var Fe=document.createElement("canvas");Fe.width=Fe.height=32;var L=Fe.getContext("2d"),V=L.createRadialGradient(16,16,0,16,16,16);V.addColorStop(0,"rgba(255,255,255,1)"),V.addColorStop(.3,"rgba(255,255,255,0.6)"),V.addColorStop(.7,"rgba(255,255,255,0.15)"),V.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=V,L.fillRect(0,0,32,32);var x=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(Fe),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),U=new THREE.Points($,x);return U.userData={positions:d,count:y},n.add(U),U}F();var ue=t?null:Me(),De='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';me(De);var Be=new THREE.Clock,Re=!0,Xe=new IntersectionObserver(function(y){Re=y[0].isIntersecting,y[0].isIntersecting&&!fe&&!t&&(fe=!0,k&&(k.style.transform="translateY(0)"),j&&(j.style.transform="translateY(0)"))},{threshold:.1});Xe.observe(o);var he=!1,Le=null,Ae=0;function de(){if(he=!0,clearTimeout(Le),Le=setTimeout(function(){he=!1},150),!t){var y=ee(Y,M);y?(E=!0,J(Y,M)):(E=!1,G.set(9999,9999,0))}}window.addEventListener("scroll",de,{passive:!0});var _=null;function ce(){if(_=requestAnimationFrame(ce),!!Re){Ae++;var y=Math.min(Be.getDelta(),.05),$=Be.elapsedTime;if(t)l+=v*y;else{var d=R-l;d=d%(Math.PI*2),d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),l+=d*.12,P+=(m-P)*.12}if(O&&(O.rotation.x=P,O.rotation.y=l,O.position.y=-15),ue){for(var q=ue.userData.positions,Z=0;Z<ue.userData.count;Z++)q[Z*3+1]+=Math.sin($*.2+Z)*.05,q[Z*3]+=Math.cos($*.15+Z*.5)*.03;ue.geometry.attributes.position.needsUpdate=!0,ue.rotation.y+=1e-4,ue.position.x=-l*35*.35,ue.position.y=P*28*.35}c.position.x=300+Math.sin($*.3)*100,c.position.y=350+Math.cos($*.2)*80,S.intensity=2+Math.sin($*.5)*.4,A.intensity=.8+Math.sin($*.4+1)*.3,!(t&&he&&Ae%4!==0)&&(Se(y),a.render(n,e))}}return ce(),function(){cancelAnimationFrame(_),t||(window.removeEventListener("mousemove",le),window.removeEventListener("mousedown",ve),window.removeEventListener("mouseup",ge)),window.removeEventListener("scroll",de),clearTimeout(Le),Xe.disconnect(),n.traverse(function(y){y.geometry&&y.geometry.dispose(),y.material&&(y.material.map&&y.material.map.dispose(),y.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),O=null}}function qt(o){var t=new THREE.Scene,n=new THREE.PerspectiveCamera(50,1,1,5e3);n.position.set(0,0,700);var e=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});e.setSize(1080,1080),e.setPixelRatio(Math.min(devicePixelRatio,2)),e.setClearColor(0,1),e.toneMapping=THREE.ACESFilmicToneMapping,e.toneMappingExposure=1.4,e.domElement.style.width="100%",e.domElement.style.height="100%",o.appendChild(e.domElement),t.add(new THREE.AmbientLight(2760464,1));var a=new THREE.PointLight(16107370,3,1400);a.position.set(300,350,400),t.add(a);var c=new THREE.PointLight(13931578,2.4,1200);c.position.set(-300,-100,300),t.add(c);var S=new THREE.PointLight(5913114,1.2,900);S.position.set(0,200,-300),t.add(S);var f=new THREE.PointLight(16750916,1.3,600);f.position.set(0,-250,200),t.add(f);var A=0,R=Math.PI*2/6,l=8e4,m=.03,P=.95,i=.005,p=12e4,r=null,v,b,X,C,G,ae,B=0,E=!1,Y=0,M=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function N(){var J=new THREE.BufferGeometry;v=new Float32Array(p*3),b=new Float32Array(p*3),X=new Float32Array(p*3),C=new Float32Array(p*3),G=new Float32Array(p),ae=new Float32Array(p),J.setAttribute("position",new THREE.BufferAttribute(v,3)),J.setAttribute("color",new THREE.BufferAttribute(C,3)),J.setAttribute("size",new THREE.BufferAttribute(G,1)),J.setAttribute("alpha",new THREE.BufferAttribute(ae,1)),J.setAttribute("velocity",new THREE.BufferAttribute(b,3));var ee=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,j=new THREE.ShaderMaterial({vertexShader:ee,fragmentShader:k,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});r=new THREE.Points(J,j),t.add(r)}function ne(J,ee){return new Promise(function(k){try{var j=512,fe=document.createElement("canvas");fe.width=fe.height=j;var le=fe.getContext("2d"),ve=new DOMParser().parseFromString(J,"image/svg+xml"),ge=ve.querySelector("svg");if(!ge){k([]);return}var Me=parseFloat(ge.getAttribute("width")||512),ue=parseFloat(ge.getAttribute("height")||512),De=ge.getAttribute("viewBox");if(De){var Be=De.split(/[\s,]+/);Me=+Be[2],ue=+Be[3]}var Re=Math.min(j/Me,j/ue)*.9,Xe=(j-Me*Re)/2,he=(j-ue*Re)/2;le.save(),le.translate(Xe,he),le.scale(Re,Re),le.fillStyle="white",ve.querySelectorAll("path,rect,circle").forEach(function(d){if(d.tagName==="path"){var q=d.getAttribute("d");q&&le.fill(new Path2D(q))}else d.tagName==="rect"?le.fillRect(+d.getAttribute("x")||0,+d.getAttribute("y")||0,+d.getAttribute("width")||0,+d.getAttribute("height")||0):d.tagName==="circle"&&(le.beginPath(),le.arc(+d.getAttribute("cx")||0,+d.getAttribute("cy")||0,+d.getAttribute("r")||0,0,Math.PI*2),le.fill())}),le.restore();for(var Le=le.getImageData(0,0,j,j).data,Ae=[],de=0;de<j;de++)for(var _=0;_<j;_++){var ce=(de*j+_)*4;Le[ce+3]>30&&Ae.push({x:_,y:de,a:Le[ce+3]/255})}if(!Ae.length){k([]);return}for(var y=[],ce=0;ce<ee;ce++){var $=Ae[Math.floor(Math.random()*Ae.length)];y.push({x:($.x-j/2)*1.2+(Math.random()-.5)*1.65,y:-($.y-j/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*$.a,a:$.a})}k(y)}catch(d){console.error(d),k([])}})}function re(J){B=J.length;for(var ee=0;ee<B;ee++){var k=J[ee],j=ee*3;v[j]=k.x,v[j+1]=k.y+40,v[j+2]=k.z,b[j]=b[j+1]=b[j+2]=0,X[j]=k.x,X[j+1]=k.y,X[j+2]=k.z;var fe=M[Math.floor(Math.random()*M.length)],le=.7+Math.random()*.4;C[j]=fe.r*le,C[j+1]=fe.g*le,C[j+2]=fe.b*le,G[ee]=1.8+Math.random()*3.8,ae[ee]=.3+(k.a||.7)*.75}r.geometry.setDrawRange(0,B),["position","color","size","alpha"].forEach(function(ve){r.geometry.attributes[ve].needsUpdate=!0}),E=!0}function K(J){return ne(J,Math.min(p,l)).then(function(ee){ee.length&&r&&re(ee)})}function Q(J){if(!(!E||!B)){Y+=J;for(var ee=0;ee<B;ee++){var k=ee*3,j=ee*1.37;b[k]+=Math.sin(Y*.4+j)*.008+Math.sin(Y*1.1+j*2.3)*.003,b[k+1]+=Math.cos(Y*.35+j*.7)*.008+Math.sin(Y*.9+j*1.5)*.004,b[k+2]+=Math.sin(Y*.25+j*1.1)*.004,b[k+1]-=m*.06,b[k]+=Math.sin(Y*.25+v[k+1]*.008)*i*.6,b[k+2]+=Math.cos(Y*.3+v[k]*.008)*i*.3;var fe=X[k],le=X[k+1]+40,ve=X[k+2],ge=fe-v[k],Me=le-v[k+1],ue=ve-v[k+2],De=Math.sqrt(ge*ge+Me*Me+ue*ue),Be=(ee*48271&65535)/65535,Re=.003+Be*.003,Xe=1+Math.min(De*.002,.5),he=Re*Xe;b[k]+=ge*he,b[k+1]+=Me*he,b[k+2]+=ue*he;var Le=(ee*16807&65535)/65535,Ae=P*(.92+Le*.06);b[k]*=Ae,b[k+1]*=Ae,b[k+2]*=Ae,v[k]+=b[k],v[k+1]+=b[k+1],v[k+2]+=b[k+2];var de=Math.sqrt(Math.pow(v[k]-X[k],2)+Math.pow(v[k+1]-X[k+1],2)+Math.pow(v[k+2]-X[k+2],2));ae[ee]=.15+.55*(1-Math.min(de*.005,1))+Math.sin(Y*1.5+ee*.01)*.05}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.alpha.needsUpdate=!0,r.geometry.attributes.velocity.needsUpdate=!0}}N();for(var O=4e3,z=new THREE.BufferGeometry,T=new Float32Array(O*3),w=new Float32Array(O*3),h=0;h<O;h++){T[h*3]=(Math.random()-.5)*2200,T[h*3+1]=(Math.random()-.5)*1800,T[h*3+2]=-200-Math.random()*1800;var s=M[Math.floor(Math.random()*M.length)],u=.2+Math.random()*.3;w[h*3]=s.r*u,w[h*3+1]=s.g*u,w[h*3+2]=s.b*u}z.setAttribute("position",new THREE.BufferAttribute(T,3)),z.setAttribute("color",new THREE.BufferAttribute(w,3));var D=document.createElement("canvas");D.width=D.height=32;var W=D.getContext("2d"),H=W.createRadialGradient(16,16,0,16,16,16);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.3,"rgba(255,255,255,0.6)"),H.addColorStop(.7,"rgba(255,255,255,0.15)"),H.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=H,W.fillRect(0,0,32,32);var g=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(D),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),F=new THREE.Points(z,g);t.add(F);var I='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';K(I);var ie=new THREE.Clock,me=!0,Se=new IntersectionObserver(function(J){me=J[0].isIntersecting},{threshold:0});Se.observe(o);var _e=o.querySelectorAll("#logo-coords, #logo-drag-label");_e.forEach(function(J){J.parentElement.style.display="none"});var Ne=null;function Ce(){if(Ne=requestAnimationFrame(Ce),!!me){var J=Math.min(ie.getDelta(),.05),ee=ie.elapsedTime;A+=R*J,r&&(r.rotation.y=A,r.position.y=5,r.scale.setScalar(.85));for(var k=0;k<O;k++)T[k*3+1]+=Math.sin(ee*.2+k)*.05,T[k*3]+=Math.cos(ee*.15+k*.5)*.03;z.attributes.position.needsUpdate=!0,F.rotation.y+=1e-4,F.position.x=-A*35*.35,a.position.x=300+Math.sin(ee*.3)*100,a.position.y=350+Math.cos(ee*.2)*80,c.intensity=2+Math.sin(ee*.5)*.4,f.intensity=.8+Math.sin(ee*.4+1)*.3,Q(J),e.render(t,n)}}return Ce(),function(){cancelAnimationFrame(Ne),Se.disconnect(),t.traverse(function(J){J.geometry&&J.geometry.dispose(),J.material&&(J.material.map&&J.material.map.dispose(),J.material.dispose())}),e.dispose(),e.forceContextLoss(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),r=null}}var Gt="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";function Wt(o){let t=o.querySelector("#logo-canvas-container");if(!t)return;let n=!1,e=null;return ut(Gt).then(function(){if(n)return;e=!!t.closest('[data-flip-element="target"]')?Bn(t):Vt(t)}),function(){n=!0,e&&e()}}function Nt(o){let t=o.querySelector("#axion-card");if(!t)return;let n=!1,e=null;return ut(Gt).then(function(){n||(e=qt(t))}),function(){n=!0,e&&e()}}function Bn(o){var t="ontouchstart"in window||navigator.maxTouchPoints>0,n=new THREE.Scene,e=new THREE.PerspectiveCamera(50,16/9,1,5e3);e.position.set(0,0,700);var a=new THREE.WebGLRenderer({antialias:!1,alpha:!0,powerPreference:"high-performance"});a.setSize(1920,1080),a.setPixelRatio(Math.min(devicePixelRatio,2)),a.setClearColor(0,1),a.toneMapping=THREE.ACESFilmicToneMapping,a.toneMappingExposure=1.4,a.domElement.style.width="100%",a.domElement.style.height="100%",o.appendChild(a.domElement),n.add(new THREE.AmbientLight(2760464,1));var c=new THREE.PointLight(16107370,3,1400);c.position.set(300,350,400),n.add(c);var S=new THREE.PointLight(13931578,2.4,1200);S.position.set(-300,-100,300),n.add(S);var f=new THREE.PointLight(5913114,1.2,900);f.position.set(0,200,-300),n.add(f);var A=new THREE.PointLight(16750916,1.3,600);A.position.set(0,-250,200),n.add(A);var R=0,l=0,m=0,P=0,i=!1,p=0,r=0,v=Math.PI*2/6,b=new THREE.Vector2(9999,9999),X=new THREE.Raycaster,C=120,G=new THREE.Vector3(9999,9999,0),ae=new THREE.Vector3(9999,9999,0),B=new THREE.Vector3,E=!1,Y=0,M=0,N=8e4,ne=.03,re=.95,K=.005,Q=12e4,O=null,z,T,w,h,s,u,D=0,W=!1,H=!1,g=0,F=0,I=null,ie=[new THREE.Color(13684943),new THREE.Color(13355977),new THREE.Color(14013908),new THREE.Color(13027013),new THREE.Color(14342873),new THREE.Color(12632255),new THREE.Color(12105911),new THREE.Color(13487564)];function me(){var L=new THREE.BufferGeometry;z=new Float32Array(Q*3),T=new Float32Array(Q*3),w=new Float32Array(Q*3),h=new Float32Array(Q*3),s=new Float32Array(Q),u=new Float32Array(Q),L.setAttribute("position",new THREE.BufferAttribute(z,3)),L.setAttribute("color",new THREE.BufferAttribute(h,3)),L.setAttribute("size",new THREE.BufferAttribute(s,1)),L.setAttribute("alpha",new THREE.BufferAttribute(u,1)),L.setAttribute("velocity",new THREE.BufferAttribute(T,3));var V=`attribute float size; attribute float alpha; attribute vec3 velocity;
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
}`,U=new THREE.ShaderMaterial({vertexShader:V,fragmentShader:x,transparent:!0,depthWrite:!1,blending:THREE.AdditiveBlending,vertexColors:!0});O=new THREE.Points(L,U),n.add(O)}function Se(L,V){return new Promise(function(x){try{var U=512,se=document.createElement("canvas");se.width=se.height=U;var oe=se.getContext("2d"),ze=new DOMParser().parseFromString(L,"image/svg+xml"),be=ze.querySelector("svg");if(!be){x([]);return}var Te=parseFloat(be.getAttribute("width")||512),ye=parseFloat(be.getAttribute("height")||512),Ie=be.getAttribute("viewBox");if(Ie){var Ee=Ie.split(/[\s,]+/);Te=+Ee[2],ye=+Ee[3]}var Ge=Math.min(U/Te,U/ye)*.9,Ue=(U-Te*Ge)/2,xe=(U-ye*Ge)/2;oe.save(),oe.translate(Ue,xe),oe.scale(Ge,Ge),oe.fillStyle="white",ze.querySelectorAll("path,rect,circle").forEach(function(we){if(we.tagName==="path"){var Ye=we.getAttribute("d");Ye&&oe.fill(new Path2D(Ye))}else we.tagName==="rect"?oe.fillRect(+we.getAttribute("x")||0,+we.getAttribute("y")||0,+we.getAttribute("width")||0,+we.getAttribute("height")||0):we.tagName==="circle"&&(oe.beginPath(),oe.arc(+we.getAttribute("cx")||0,+we.getAttribute("cy")||0,+we.getAttribute("r")||0,0,Math.PI*2),oe.fill())}),oe.restore();for(var He=oe.getImageData(0,0,U,U).data,Oe=[],Qe=0;Qe<U;Qe++)for(var Je=0;Je<U;Je++){var et=(Qe*U+Je)*4;He[et+3]>30&&Oe.push({x:Je,y:Qe,a:He[et+3]/255})}if(!Oe.length){x([]);return}for(var it=[],et=0;et<V;et++){var $e=Oe[Math.floor(Math.random()*Oe.length)];it.push({x:($e.x-U/2)*1.2+(Math.random()-.5)*1.65,y:-($e.y-U/2)*1.2+(Math.random()-.5)*1.65,z:(Math.random()-.5)*37*$e.a,a:$e.a})}x(it)}catch(we){console.error(we),x([])}})}function _e(L){D=L.length;for(var V=0;V<D;V++){var x=L[V],U=V*3;z[U]=x.x,z[U+1]=x.y+40,z[U+2]=x.z,T[U]=T[U+1]=T[U+2]=0,w[U]=x.x,w[U+1]=x.y,w[U+2]=x.z;var se=ie[Math.floor(Math.random()*ie.length)],oe=.7+Math.random()*.4;h[U]=se.r*oe,h[U+1]=se.g*oe,h[U+2]=se.b*oe,s[V]=1.8+Math.random()*3.8,u[V]=.3+(x.a||.7)*.75}O.geometry.setDrawRange(0,D),["position","color","size","alpha"].forEach(function(ze){O.geometry.attributes[ze].needsUpdate=!0}),W=!0,H=!1,g=1}function Ne(L){return Se(L,Math.min(Q,N)).then(function(V){V.length&&O&&_e(V)})}function Ce(L){if(!(!W||!D)){F+=L;for(var V=0;V<D;V++){var x=V*3,U=V*1.37;if(T[x]+=Math.sin(F*.4+U)*.008+Math.sin(F*1.1+U*2.3)*.003,T[x+1]+=Math.cos(F*.35+U*.7)*.008+Math.sin(F*.9+U*1.5)*.004,T[x+2]+=Math.sin(F*.25+U*1.1)*.004,T[x+1]-=ne*.06,T[x]+=Math.sin(F*.25+z[x+1]*.008)*K*.6,T[x+2]+=Math.cos(F*.3+z[x]*.008)*K*.3,E&&de==="interactive"){var se=z[x]-G.x,oe=z[x+1]-G.y,ze=z[x+2]-G.z,be=se*se+oe*oe+ze*ze,Te=C*C;if(be<Te&&be>.25){var ye=Math.sqrt(be),Ie=ye/C,Ee=(V*2654435761&65535)/65535,Ge=.6+Ee*.8,Ue=Math.pow(1-Ie,1.5+Ee),xe=1+Math.min(B.length()*.12,1),He=Ue*Ge*1.2*xe,Oe=1/ye;T[x]+=se*Oe*He,T[x+1]+=oe*Oe*He,T[x+2]+=ze*Oe*He*.2;var Qe=.02+Ee*.06;T[x]+=B.x*Ue*Qe,T[x+1]+=B.y*Ue*Qe;var Je=Ue*.15;T[x]+=(Ee-.5)*Je,T[x+1]+=((V*48271&65535)/65535-.5)*Je}}var et=w[x],it=w[x+1]+40,$e=w[x+2],we=et-z[x],Ye=it-z[x+1],lt=$e-z[x+2],zn=Math.sqrt(we*we+Ye*Ye+lt*lt),Ln=(V*48271&65535)/65535,kn=.003+Ln*.003,Dn=1+Math.min(zn*.002,.5),gt=kn*Dn;T[x]+=we*gt,T[x+1]+=Ye*gt,T[x+2]+=lt*gt;var In=(V*16807&65535)/65535,xt=re*(.92+In*.06);T[x]*=xt,T[x+1]*=xt,T[x+2]*=xt,z[x]+=T[x],z[x+1]+=T[x+1],z[x+2]+=T[x+2];var Un=Math.sqrt(Math.pow(z[x]-w[x],2)+Math.pow(z[x+1]-w[x+1],2)+Math.pow(z[x+2]-w[x+2],2));u[V]=.15+.55*(1-Math.min(Un*.005,1))+Math.sin(F*1.5+V*.01)*.05}O.geometry.attributes.position.needsUpdate=!0,O.geometry.attributes.alpha.needsUpdate=!0,O.geometry.attributes.velocity.needsUpdate=!0}}var J=new THREE.Matrix4,ee=new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0,0,1),new THREE.Vector3),k=new THREE.Vector3;function j(L,V){var x=a.domElement.getBoundingClientRect();if(!(x.width===0||x.height===0)&&(b.set((L-x.left)/x.width*2-1,-((V-x.top)/x.height)*2+1),X.setFromCamera(b,e),X.ray.intersectPlane(ee,k))){ae.copy(G),O&&G.copy(k).applyMatrix4(J.copy(O.matrixWorld).invert()),B.subVectors(G,ae);var U=B.length();U>15&&B.multiplyScalar(15/U)}}var fe=null;function le(){return fe||(fe=o.closest('[data-flip-element="target"]')||o),fe}function ve(L,V){var x=le().getBoundingClientRect();return L>=x.left&&L<=x.right&&V>=x.top&&V<=x.bottom}var ge=o.querySelector("#logo-coords"),Me=o.querySelector("#logo-drag-label"),ue=!1;function De(L){if(Y=L.clientX,M=L.clientY,t||de!=="interactive"){E=!1,G.set(9999,9999,0);return}var V=ve(L.clientX,L.clientY);if(V){E=!0,j(L.clientX,L.clientY);var x=le().getBoundingClientRect(),U=Math.round(L.clientX-x.left),se=Math.round(L.clientY-x.top);ge&&(ge.textContent="X: "+U+"PX    Y: "+se+"PX")}else E=!1,G.set(9999,9999,0);i&&(R+=(L.clientX-p)*.005,m+=(L.clientY-r)*.005,m=Math.max(-Math.PI/2,Math.min(Math.PI/2,m)),p=L.clientX,r=L.clientY)}function Be(L){t||de!=="interactive"||ve(L.clientX,L.clientY)&&(i=!0,p=L.clientX,r=L.clientY)}function Re(){t||(i=!1,R=0,m=0,l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2))}window.addEventListener("mousemove",De),window.addEventListener("mousedown",Be),window.addEventListener("mouseup",Re);function Xe(){for(var L=4e3,V=new THREE.BufferGeometry,x=new Float32Array(L*3),U=new Float32Array(L*3),se=0;se<L;se++){x[se*3]=(Math.random()-.5)*2200,x[se*3+1]=(Math.random()-.5)*1800,x[se*3+2]=-200-Math.random()*1800;var oe=ie[Math.floor(Math.random()*ie.length)],ze=.2+Math.random()*.3;U[se*3]=oe.r*ze,U[se*3+1]=oe.g*ze,U[se*3+2]=oe.b*ze}V.setAttribute("position",new THREE.BufferAttribute(x,3)),V.setAttribute("color",new THREE.BufferAttribute(U,3));var be=document.createElement("canvas");be.width=be.height=32;var Te=be.getContext("2d"),ye=Te.createRadialGradient(16,16,0,16,16,16);ye.addColorStop(0,"rgba(255,255,255,1)"),ye.addColorStop(.3,"rgba(255,255,255,0.6)"),ye.addColorStop(.7,"rgba(255,255,255,0.15)"),ye.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=ye,Te.fillRect(0,0,32,32);var Ie=new THREE.PointsMaterial({size:1.5,map:new THREE.CanvasTexture(be),transparent:!0,opacity:.15,vertexColors:!0,blending:THREE.AdditiveBlending,depthWrite:!1,sizeAttenuation:!0}),Ee=new THREE.Points(V,Ie);return Ee.userData={positions:x,count:L},n.add(Ee),Ee}me();var he=Xe(),Le='<svg width="1900" height="960" viewBox="0 0 1900 960" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M960 0C960 780 1120 940 1900 940V960H0V940C780 940 940 780 940 0H960Z" fill="white"/></svg>';Ne(Le);var Ae=new THREE.Clock,de="spin",_=null;function ce(){if(t){de="spin";return}if(_===null){var L=document.querySelector(".scaling-element-video");_=L&&getComputedStyle(L).display!=="none"}if(!_){de="spin";return}var V=window._flipProgress||0;V>.85?de="interactive":V>.7?de="transition":de="spin"}var y="spin",$=!0,d=new IntersectionObserver(function(L){$=L[0].isIntersecting},{threshold:0});d.observe(o);var q=!1,Z=null,te=0;function ke(){q=!0,clearTimeout(Z),Z=setTimeout(function(){q=!1},150);var L=ve(Y,M);L?(E=!0,j(Y,M)):(E=!1,G.set(9999,9999,0))}window.addEventListener("scroll",ke,{passive:!0});function Fe(){if(I=requestAnimationFrame(Fe),!!$){te++;var L=Math.min(Ae.getDelta(),.05),V=Ae.elapsedTime;ce(),y==="interactive"&&de!=="interactive"&&(E=!1,G.set(9999,9999,0),i=!1);var x=de==="transition"||de==="interactive";if(x&&!ue?(ue=!0,Me&&(Me.style.transform="translateY(0)"),ge&&(ge.style.transform="translateY(0)")):!x&&ue&&(ue=!1,Me&&(Me.style.transform="translateY(100%)"),ge&&(ge.style.transform="translateY(100%)")),y=de,E&&!ve(Y,M)&&(E=!1,G.set(9999,9999,0)),de==="spin")l+=v*L,P+=(0-P)*.05;else if(de==="transition")l=l%(Math.PI*2),l>Math.PI&&(l-=Math.PI*2),l<-Math.PI&&(l+=Math.PI*2),l+=(0-l)*.025,P+=(0-P)*.025;else{var U=R-l;U=U%(Math.PI*2),U>Math.PI&&(U-=Math.PI*2),U<-Math.PI&&(U+=Math.PI*2),l+=U*.12,P+=(m-P)*.12}O&&(O.rotation.x=P,O.rotation.y=l,O.scale.setScalar(1),O.position.y=-15);for(var se=he.userData.positions,oe=0;oe<he.userData.count;oe++)se[oe*3+1]+=Math.sin(V*.2+oe)*.05,se[oe*3]+=Math.cos(V*.15+oe*.5)*.03;he.geometry.attributes.position.needsUpdate=!0,he.rotation.y+=1e-4,he.position.x=-l*35*.35,he.position.y=P*28*.35,c.position.x=300+Math.sin(V*.3)*100,c.position.y=350+Math.cos(V*.2)*80,S.intensity=2+Math.sin(V*.5)*.4,A.intensity=.8+Math.sin(V*.4+1)*.3,!(t&&q&&te%4!==0)&&(Ce(L),a.render(n,e))}}return Fe(),function(){cancelAnimationFrame(I),window.removeEventListener("mousemove",De),window.removeEventListener("mousedown",Be),window.removeEventListener("mouseup",Re),window.removeEventListener("scroll",ke),clearTimeout(Z),d.disconnect(),n.traverse(function(L){L.geometry&&L.geometry.dispose(),L.material&&(L.material.map&&L.material.map.dispose(),L.material.dispose())}),a.dispose(),a.forceContextLoss(),a.domElement.parentNode&&a.domElement.parentNode.removeChild(a.domElement),O=null}}function Xt(o){let t=document.querySelector("[data-load-wrap]");if(!t)return null;Pe.stop();let n=t.querySelector("[data-load-bg]"),e=t.querySelector("[data-load-progress]"),a=t.querySelector("[data-load-logo]"),c=Array.from(t.querySelectorAll("[data-load-text]")),S=Array.from(t.querySelectorAll("[data-load-reset]:not([data-load-text])")),f=gsap.timeline({defaults:{ease:"loader",duration:3}}).set(t,{display:"block"}).to(e,{scaleX:1}).to(a,{clipPath:"inset(0% 0% 0% 0%)"},"<").to(t.querySelector(".loader__text-wrap"),{autoAlpha:0,duration:.5}).to(e,{scaleX:0,transformOrigin:"right center",duration:.5},"<").add("hideContent","<").fromTo(t,{clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.9,ease:Ke},"hideContent").set(t,{display:"none"}).call(()=>{sessionStorage.setItem("visited","1")});if(S.length&&f.set(S,{autoAlpha:1},0),c.length>=2){let A=new SplitText(c[0],{type:"lines,chars",mask:"lines"}),R=new SplitText(c[1],{type:"lines,chars",mask:"lines"});gsap.set([A.chars,R.chars],{autoAlpha:0,yPercent:125}),gsap.set(c,{autoAlpha:1}),f.to(A.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},0),f.to(A.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},">+=0.4"),f.to(R.chars,{autoAlpha:1,yPercent:0,duration:.6,stagger:{each:.02}},"<"),f.to(R.chars,{autoAlpha:0,yPercent:-125,duration:.4,stagger:{each:.02}},"hideContent-=0.5")}return f}function $t(o){let n=[...(o||document).querySelectorAll("[data-fit-width]")];if(!n.length)return;let e=new Map;n.forEach(l=>{let m=l.parentElement;m&&(l.style.whiteSpace="nowrap",e.has(m)||e.set(m,[]),e.get(m).push(l))});function a(l){let m=getComputedStyle(l);return l.clientWidth-parseFloat(m.paddingLeft)-parseFloat(m.paddingRight)}function c(l,m){if(m<=0)return;let P=parseFloat(getComputedStyle(l).fontSize)||16;for(let i=0;i<5;i++){let p=l.getBoundingClientRect().width;if(p<=0)break;let r=m/p;if(Math.abs(r-1)<.002)break;P*=r,l.style.fontSize=P+"px"}}function S(){e.forEach((l,m)=>{let P=a(m);l.forEach(i=>c(i,P))})}let f=null;function A(){f||(f=requestAnimationFrame(()=>{f=null,S()}))}let R;return window.ResizeObserver&&(R=new ResizeObserver(A),e.forEach((l,m)=>R.observe(m))),window.addEventListener("resize",A),S(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(S),()=>{f&&cancelAnimationFrame(f),R&&R.disconnect(),window.removeEventListener("resize",A),n.forEach(l=>{l.style.whiteSpace="",l.style.fontSize=""})}}var Ve={duration:.8,ease:"expo.out"},Yt=.08,On={dark:{bar:"#000000",text:"#FFFFFF",hoverText:"#000000"},light:{bar:"#E5E5E5",text:"#000000",hoverText:"#000000"}},Kt={right:{prop:"scaleX",origin:"left center"},left:{prop:"scaleX",origin:"right center"},up:{prop:"scaleY",origin:"center bottom"},down:{prop:"scaleY",origin:"center top"}};function Vn(o,t){var n=document.createElement("div");return n.className="highlight-marker-bar",Object.assign(n.style,{backgroundColor:o,transformOrigin:t}),n}function Zt(o){var t=o.querySelectorAll("[data-highlight-marker-reveal]");if(!t.length)return function(){};var n=[],e=window.matchMedia("(hover: hover) and (pointer: fine)").matches;return t.forEach(function(a){var c=a.getAttribute("data-marker-direction")||"right",S=a.getAttribute("data-marker-theme")||"#000000",f=a.getAttribute("data-marker-scroll-start")||"top 90%",A=S.startsWith("--")&&getComputedStyle(document.body).getPropertyValue(S).trim()||S,R=Kt[c]||Kt.right,l=On[a.getAttribute("data-highlight-marker-reveal")]||null;l&&(A=l.bar);var m=a.closest("[data-cursor-label]"),P={timeline:null,scrollTrigger:null,split:null,listeners:[]},i=!1,p=SplitText.create(a,{type:"lines",linesClass:"highlight-marker-line",autoSplit:!0,onSplit:function(r){P.timeline&&P.timeline.kill(),P.scrollTrigger&&P.scrollTrigger.kill(),a.querySelectorAll(".highlight-marker-bar").forEach(function(E){E.remove()}),P.listeners.forEach(function(E){E.el.removeEventListener(E.type,E.fn)}),P.listeners=[],i=!1;var v=r.lines,b=gsap.timeline({paused:!0,onComplete:function(){i=!0}});if(v.forEach(function(E,Y){gsap.set(E,{position:"relative",overflow:"hidden"});var M=Vn(A,R.origin);gsap.set(M,{[R.prop]:0}),E.appendChild(M),l&&(gsap.set(E,{zIndex:0,color:l.text}),gsap.set(M,{zIndex:-1})),b.to(M,{[R.prop]:1,duration:Ve.duration,ease:Ve.ease},Y*Yt);var N=function(){i&&(gsap.to(M,{[R.prop]:0,duration:Ve.duration,ease:Ve.ease}),l&&gsap.to(E,{color:l.hoverText,duration:Ve.duration,ease:Ve.ease}))},ne=function(){i&&(gsap.to(M,{[R.prop]:1,duration:Ve.duration,ease:Ve.ease}),l&&gsap.to(E,{color:l.text,duration:Ve.duration,ease:Ve.ease}))};!l&&e&&(E.addEventListener("mouseenter",N),E.addEventListener("mouseleave",ne),P.listeners.push({el:E,type:"mouseenter",fn:N},{el:E,type:"mouseleave",fn:ne}))}),P.timeline=b,m){b.kill();var X=a.querySelectorAll(".highlight-marker-bar"),C=function(E){gsap.to(X,{[R.prop]:E,duration:Ve.duration,ease:Ve.ease,stagger:Yt,overwrite:!0})},G=function(){C(1)},ae=function(){C(0)};m.addEventListener("cursorlabel:enter",G),m.addEventListener("cursorlabel:leave",ae),P.listeners.push({el:m,type:"cursorlabel:enter",fn:G},{el:m,type:"cursorlabel:leave",fn:ae});return}var B=ScrollTrigger.create({trigger:a,start:f,once:!0,onEnter:function(){b.play()}});P.scrollTrigger=B}});P.split=p,n.push(P)}),function(){n.forEach(function(a){a.timeline&&a.timeline.kill(),a.scrollTrigger&&a.scrollTrigger.kill(),a.listeners.forEach(function(c){c.el.removeEventListener(c.type,c.fn)}),a.split&&a.split.revert()})}}function jt(o){if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=.4,n=.4,e=5,a=o.querySelector("[data-cursor-marquee-status]");if(!a)return;let c=a.querySelectorAll("[data-cursor-marquee-text-target]"),S=o.querySelectorAll("[data-cursor-marquee-text]");if(!S.length)return;let f=gsap.quickTo(a,"x",{duration:n,ease:"power3"}),A=gsap.quickTo(a,"y",{duration:n,ease:"power3"}),R=null,l=m=>{f(m.clientX),A(m.clientY)};return window.addEventListener("pointermove",l,{passive:!0}),S.forEach(m=>{m.addEventListener("mouseenter",()=>{R&&clearTimeout(R);let P=m.getAttribute("data-cursor-marquee-text")||"",i=(P.length||1)/e;c.forEach(p=>{p.textContent=P,p.style.animationPlayState="running",p.style.animationDuration=i+"s"}),a.setAttribute("data-cursor-marquee-status","active")}),m.addEventListener("mouseleave",()=>{a.setAttribute("data-cursor-marquee-status","not-active"),R&&clearTimeout(R),R=setTimeout(()=>{c.forEach(P=>{P.style.animationPlayState="paused"})},t*1e3)})}),a.setAttribute("data-cursor-marquee-status","not-active"),function(){window.removeEventListener("pointermove",l),clearTimeout(R),gsap.killTweensOf(a)}}function Qt(o){o.querySelectorAll("video[autoplay]").forEach(function(t){t.muted=!0;let n=t.play();n&&n.catch&&n.catch(function(){})})}function Jt(o){let t=o.querySelectorAll("[data-flip-element='wrapper']"),n=o.querySelector("[data-flip-element='target']");if(t.length<2||!n)return;let e;function a(){e&&(e.kill(),gsap.set(n,{clearProps:"all"})),e=gsap.timeline({scrollTrigger:{trigger:t[0],start:"center center",endTrigger:t[t.length-1],end:"center center",scrub:.25,onUpdate:function(f){window._flipProgress=f.progress}}}),t.forEach(function(f,A){let R=A+1;if(R<t.length){let l=t[R],m=l.getBoundingClientRect(),P=f.getBoundingClientRect(),i=m.top+window.pageYOffset+l.offsetHeight/2,p=P.top+window.pageYOffset+f.offsetHeight/2,r=i-p;e.add(Flip.fit(n,l,{duration:r,ease:"none"}))}})}a();let c,S=function(){clearTimeout(c),c=setTimeout(function(){a()},100)};return window.addEventListener("resize",S),function(){clearTimeout(c),window.removeEventListener("resize",S),e&&e.kill()}}var qn="150%";function Gn(o){let t=[];return o.querySelectorAll("textPath").forEach(function(n){let e=n.textContent;n.textContent="";for(let a of e){if(a===" "){n.append(" ");continue}let c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.textContent=a,n.append(c),t.push(c)}}),t}var wt=new WeakMap;function en(o){let t=o.querySelector('[data-circular-text="wrap"]');if(!t)return function(){};let n=Array.from(t.querySelectorAll('[data-circular-text="svg"] [data-circular-text="line"]'));if(!n.length)return function(){};let e=n.map(function(c){return Array.from(c.querySelectorAll("textPath")).map(function(S){return S.textContent})}),a=n.map(Gn);return a.forEach(function(c){gsap.set(c,{fillOpacity:0})}),wt.set(o,{wrap:t,lines:n,lineChars:a}),function(){wt.delete(o),n.forEach(function(c,S){c.querySelectorAll("textPath").forEach(function(f,A){f.textContent=e[S][A]})})}}function tn(o){let t=wt.get(o);if(!t)return function(){};let n=gsap.timeline({scrollTrigger:{trigger:t.wrap,start:"top top",end:"+="+qn,pin:!0,scrub:!0}});return t.lines.forEach(function(e,a){let c=t.lineChars[a];c.length&&n.fromTo(c,{fillOpacity:0},{fillOpacity:1,stagger:{amount:.7,from:"start"},duration:.7/c.length,ease:"steps(1)"},(parseFloat(e.dataset.at)||0)*.7)}),function(){n.scrollTrigger&&n.scrollTrigger.kill(!0),n.kill()}}function St(o){var t=[];function n(i,p,r,v){i.addEventListener(p,r,v),t.push(function(){i.removeEventListener(p,r,v)})}o.querySelectorAll("[data-bunny-player-init]").forEach(function(i){var p=i.getAttribute("data-player-src");if(!p)return;var r=i.querySelector("video");if(!r)return;try{r.pause()}catch(_){}try{r.removeAttribute("src"),r.load()}catch(_){}function v(_){i.getAttribute("data-player-status")!==_&&i.setAttribute("data-player-status",_)}function b(_){r.muted=!!_,i.setAttribute("data-player-muted",r.muted?"true":"false")}function X(_){i.setAttribute("data-player-fullscreen",_?"true":"false")}function C(_){i.setAttribute("data-player-activated",_?"true":"false")}i.hasAttribute("data-player-activated")||C(!1);var G=i.querySelector("[data-player-timeline]"),ae=i.querySelector("[data-player-progress]"),B=i.querySelector("[data-player-buffered]"),E=i.querySelector("[data-player-timeline-handle]"),Y=i.querySelectorAll("[data-player-time-duration]"),M=i.querySelectorAll("[data-player-time-progress]"),N=i.getAttribute("data-player-update-size"),ne=i.getAttribute("data-player-lazy"),re=ne==="true",K=ne==="meta",Q=i.getAttribute("data-player-autoplay")==="true",O=i.getAttribute("data-player-muted")==="true",z=!1;Q?(b(!0),r.loop=!0):b(O),r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("webkit-playsinline",""),r.playsInline=!0,typeof r.disableRemotePlayback!="undefined"&&(r.disableRemotePlayback=!0),Q&&(r.autoplay=!1);var T=!!r.canPlayType("application/vnd.apple.mpegurl"),w=T&&"ManagedMediaSource"in window,h=!!(window.Hls&&Hls.isSupported())&&!w;if(N==="true"&&!K&&!re){var s=r.preload;r.preload="metadata";var u=function(){R(i,N,r.videoWidth,r.videoHeight),r.removeEventListener("loadedmetadata",u),r.preload=s||""};n(r,"loadedmetadata",u,{once:!0}),r.src=p}function D(){P(p,h).then(function(_){_.width&&_.height&&R(i,N,_.width,_.height),Y.length&&isFinite(_.duration)&&_.duration>0&&c(Y,a(_.duration)),A(i,z)})}var W=!1,H=!1,g="";function F(){if(!W){if(W=!0,i._hls){try{i._hls.destroy()}catch(ce){}i._hls=null}if(w)r.preload=re||K?"auto":r.preload,r.src=p,n(r,"loadedmetadata",function(){A(i,z),N==="true"&&R(i,N,r.videoWidth,r.videoHeight),Y.length&&c(Y,a(r.duration))},{once:!0});else if(h){var _=new Hls({maxBufferLength:10});_.attachMedia(r),_.on(Hls.Events.MEDIA_ATTACHED,function(){_.loadSource(p)}),_.on(Hls.Events.MANIFEST_PARSED,function(){if(A(i,z),N==="true"){var ce=_.levels||[],y=S(ce);y&&y.width&&y.height&&R(i,N,y.width,y.height)}}),_.on(Hls.Events.LEVEL_LOADED,function(ce,y){y&&y.details&&isFinite(y.details.totalduration)&&Y.length&&c(Y,a(y.details.totalduration))}),i._hls=_}else r.src=p}}K?(D(),r.preload="none"):re?r.preload="none":F();function I(){H=!0,r.paused||r.ended?((re||K)&&!W&&F(),z=!0,g="",v("loading"),f(r)):(g="manual",r.pause())}function ie(){r.muted=!r.muted,i.setAttribute("data-player-muted",r.muted?"true":"false")}function me(){return!!(document.fullscreenElement||document.webkitFullscreenElement)}function Se(){if(i.requestFullscreen)return i.requestFullscreen();if(r.requestFullscreen)return r.requestFullscreen();if(r.webkitSupportsFullscreen&&typeof r.webkitEnterFullscreen=="function")return r.webkitEnterFullscreen()}function _e(){if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();if(r.webkitDisplayingFullscreen&&typeof r.webkitExitFullscreen=="function")return r.webkitExitFullscreen()}function Ne(){me()||r.webkitDisplayingFullscreen?_e():Se()}n(document,"fullscreenchange",function(){X(me())}),n(document,"webkitfullscreenchange",function(){X(me())}),n(r,"webkitbeginfullscreen",function(){X(!0)}),n(r,"webkitendfullscreen",function(){X(!1)}),n(i,"click",function(_){var ce=_.target.closest("[data-player-control]");if(!(!ce||!i.contains(ce))){var y=ce.getAttribute("data-player-control");y==="play"||y==="pause"||y==="playpause"?I():y==="mute"?ie():y==="fullscreen"&&Ne()}});function Ce(){Y.length&&c(Y,a(r.duration)),M.length&&c(M,a(r.currentTime))}n(r,"timeupdate",Ce),n(r,"loadedmetadata",function(){Ce(),l(i,N,r)}),n(r,"loadeddata",function(){l(i,N,r)}),n(r,"playing",function(){l(i,N,r)}),n(r,"durationchange",Ce);var J;function ee(){if(r.duration){var _=r.currentTime/r.duration*100;ae&&(ae.style.transform="translateX("+(-100+_)+"%)"),E&&(E.style.left=_+"%")}}function k(){ee(),!r.paused&&!r.ended&&(J=requestAnimationFrame(k))}function j(){if(!(!B||!r.duration||!r.buffered.length)){var _=r.buffered.end(r.buffered.length-1),ce=_/r.duration*100;B.style.transform="translateX("+(-100+ce)+"%)"}}if(n(r,"progress",j),n(r,"loadedmetadata",j),n(r,"durationchange",j),n(r,"play",function(){C(!0),cancelAnimationFrame(J),k(),v("playing")}),n(r,"playing",function(){z=!1,v("playing")}),n(r,"pause",function(){z=!1,cancelAnimationFrame(J),ee(),v("paused")}),n(r,"waiting",function(){v("loading")}),n(r,"canplay",function(){A(i,z)}),n(r,"ended",function(){z=!1,cancelAnimationFrame(J),ee(),v("paused"),C(!1)}),G){let _=function(Z){ue||(ue=G.getBoundingClientRect());var te=(Z-ue.left)/ue.width;return te<0&&(te=0),te>1&&(te=1),te},ce=function(Z){if(r.duration){var te=Z*100;ae&&(ae.style.transform="translateX("+(-100+te)+"%)"),E&&(E.style.left=te+"%"),M.length&&c(M,a(Z*r.duration))}},y=function(Z){r.duration&&(Z-ge<Me||(ge=Z,r.currentTime=ve))},$=function(Z){if(r.duration){fe=!0,le=!r.paused&&!r.ended,le&&r.pause(),i.setAttribute("data-timeline-drag","true"),ue=G.getBoundingClientRect();var te=_(Z.clientX);ve=te*r.duration,ce(te),y(performance.now()),G.setPointerCapture&&G.setPointerCapture(Z.pointerId),window.addEventListener("pointermove",d,{passive:!1}),window.addEventListener("pointerup",q,{passive:!0}),Z.preventDefault()}},d=function(Z){if(fe){var te=_(Z.clientX);ve=te*r.duration,ce(te),y(performance.now()),Z.preventDefault()}},q=function(){fe&&(fe=!1,i.setAttribute("data-timeline-drag","false"),ue=null,r.currentTime=ve,le?f(r):(ee(),Ce()),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",q))};var fe=!1,le=!1,ve=0,ge=0,Me=180,ue=null;n(window,"resize",function(){fe||(ue=null)}),n(G,"pointerdown",$,{passive:!1}),E&&n(E,"pointerdown",$,{passive:!1})}var De,Be=3e3;function Re(_){i.getAttribute("data-player-hover")!==_&&i.setAttribute("data-player-hover",_)}function Xe(){clearTimeout(De),De=setTimeout(function(){Re("idle")},Be)}function he(){Re("active"),Xe()}n(i,"pointerdown",he),n(document,"fullscreenchange",he),n(document,"webkitfullscreenchange",he);var Le=!1;function Ae(_){var ce=i.getBoundingClientRect();_.clientX>=ce.left&&_.clientX<=ce.right&&_.clientY>=ce.top&&_.clientY<=ce.bottom&&he()}if(n(i,"pointerenter",function(){he(),Le||(Le=!0,n(window,"pointermove",Ae,{passive:!0}))}),n(i,"pointerleave",function(){Re("idle"),clearTimeout(De),Le&&(Le=!1,window.removeEventListener("pointermove",Ae))}),Q){var de=new IntersectionObserver(function(_){_.forEach(function(ce){var y=ce.isIntersecting&&ce.intersectionRatio>0;y?((re||K)&&!W&&F(),r.paused?(g="",z=!0,v("loading"),f(r)):v("playing")):!r.paused&&!r.ended&&(g="io",r.pause(),v("paused"))})},{threshold:.1});de.observe(i)}t.push(function(){if(cancelAnimationFrame(J),clearTimeout(De),de&&de.disconnect(),i._hls){try{i._hls.destroy()}catch(_){}i._hls=null}try{r.pause(),r.removeAttribute("src"),r.load()}catch(_){}})});function e(i){return(i<10?"0":"")+i}function a(i){if(!isFinite(i)||i<0)return"00:00";var p=Math.floor(i),r=Math.floor(p/3600),v=Math.floor(p%3600/60),b=p%60;return r>0?r+":"+e(v)+":"+e(b):e(v)+":"+e(b)}function c(i,p){i.forEach(function(r){r.textContent=p})}function S(i){return!i||!i.length?null:i.reduce(function(p,r){return(r.width||0)>(p.width||0)?r:p},i[0])}function f(i){var p=i.play();p&&typeof p.then=="function"&&p.catch(function(){})}function A(i,p){!p&&i.getAttribute("data-player-activated")!=="true"&&i.getAttribute("data-player-status")==="idle"&&i.setAttribute("data-player-status","ready")}function R(i,p,r,v){if(!(p!=="true"||!r||!v)){var b=i.querySelector("[data-player-before]");b&&(b.style.paddingTop=v/r*100+"%")}}function l(i,p,r){if(p==="true"){var v=i.querySelector("[data-player-before]");if(v){var b=v.style.paddingTop&&v.style.paddingTop!=="0%";!b&&r.videoWidth&&r.videoHeight&&R(i,p,r.videoWidth,r.videoHeight)}}}function m(i,p){try{return new URL(p,i).toString()}catch(r){return p}}function P(i,p){return new Promise(function(r){if(p&&window.Hls&&Hls.isSupported())try{var v=new Hls,b={width:0,height:0,duration:NaN},X=!1,C=!1;v.on(Hls.Events.MANIFEST_PARSED,function(B,E){var Y=E&&E.levels||v.levels||[],M=S(Y);M&&M.width&&M.height&&(b.width=M.width,b.height=M.height,X=!0)}),v.on(Hls.Events.LEVEL_LOADED,function(B,E){E&&E.details&&isFinite(E.details.totalduration)&&(b.duration=E.details.totalduration,C=!0)}),v.on(Hls.Events.ERROR,function(){try{v.destroy()}catch(B){}r(b)}),v.on(Hls.Events.LEVEL_LOADED,function(){try{v.destroy()}catch(B){}r(b)}),v.loadSource(i);return}catch(B){r({width:0,height:0,duration:NaN});return}function G(B){for(var E=B.split(/\r?\n/),Y=0,M=0,N=null,ne=null,re=0;re<E.length;re++){var K=E[re];if(K.indexOf("#EXT-X-STREAM-INF:")===0)ne=K;else if(ne&&K&&K[0]!=="#"){N||(N=K.trim());var Q=/RESOLUTION=(\d+)x(\d+)/.exec(ne);if(Q){var O=parseInt(Q[1],10),z=parseInt(Q[2],10);O>Y&&(Y=O,M=z)}ne=null}}return{bestW:Y,bestH:M,media:N}}function ae(B){for(var E=0,Y=/#EXTINF:([\d.]+)/g,M;M=Y.exec(B);)E+=parseFloat(M[1]);return E}fetch(i,{credentials:"omit",cache:"no-store"}).then(function(B){if(!B.ok)throw new Error("master");return B.text()}).then(function(B){var E=G(B);if(!E.media){r({width:E.bestW||0,height:E.bestH||0,duration:NaN});return}var Y=m(i,E.media);return fetch(Y,{credentials:"omit",cache:"no-store"}).then(function(M){if(!M.ok)throw new Error("media");return M.text()}).then(function(M){r({width:E.bestW||0,height:E.bestH||0,duration:ae(M)})})}).catch(function(){r({width:0,height:0,duration:NaN})})})}return function(){t.forEach(function(i){i()}),t=[]}}var Wn="https://cdn.jsdelivr.net/npm/hls.js@1.6.11",Nn="(min-width: 768px)";function rn(o){if(!o.querySelector("[data-bunny-player-init]"))return;let t=null,n=null;if(window.Hls)t=St(o),n=nn(o);else{let e=!1;return ut(Wn).catch(function(){}).then(function(){e||(t=St(o),n=nn(o))}),function(){e=!0,n&&n(),t&&t()}}return function(){n&&n(),t&&t()}}function nn(o){if(!o.querySelector("[data-mini-showreel-open]"))return function(){};var t=1,n="expo.inOut",e=999;let a="",c=!1,S,f,A,R,l,m,P="",i="",p="",r=(s,u=o)=>u.querySelector(s),v=s=>r(`[data-mini-showreel-lightbox="${s}"]`),b=s=>r(`[data-mini-showreel-player="${s}"]`),X=s=>s.closest("[data-mini-showreel-safearea]")||r("[data-mini-showreel-safearea]",s)||s,C=(s,u)=>{let D=s.width,W=D/u;return W>s.height&&(W=s.height,D=W*u),{left:s.left+(s.width-D)/2,top:s.top+(s.height-W)/2,width:D,height:W}},G=s=>{let u=X(s).getBoundingClientRect(),D=s.getBoundingClientRect(),W=D.width>0&&D.height>0?D.width/D.height:16/9;return C(u,W)},ae=(s,u)=>gsap.set(s,{position:"fixed",left:u.left,top:u.top,width:u.width,height:u.height,margin:0,x:0,y:0});function B(s){a&&o.querySelectorAll(`[data-mini-showreel-lightbox="${a}"], [data-mini-showreel-player="${a}"]`).forEach(u=>u.setAttribute("data-mini-showreel-status",s))}function E(){i=(S==null?void 0:S.style.zIndex)||"",p=(f==null?void 0:f.style.zIndex)||"",S&&(S.style.zIndex=String(e)),f&&(f.style.zIndex=String(e))}function Y(){S&&(S.style.zIndex=i),f&&(f.style.zIndex=p)}function M(s){let u=b(s);if(!u)return;let D=u.querySelector("[data-bunny-player-init]"),W=u.querySelector("video");if(W){if(D){let H=D.querySelector('[data-player-control="play"], [data-player-control="playpause"]');H&&(W.paused||W.ended)&&H.click();return}try{W.play()}catch(H){}}}function N(s){let u=b(s);if(!u)return;let D=u.querySelector("[data-bunny-player-init]"),W=u.querySelector("video");W&&(W.muted=!0,D&&D.setAttribute("data-player-muted","true"),(W.paused||W.ended)&&M(s))}function ne(){Y(),a="",c=!1,S=f=A=R=l=m=null,P="",i="",p="",Pe.start()}function re(s){if(!s||c||(S=v(s),f=b(s),!S||!f)||(A=r("[data-mini-showreel-target]",S),!A))return;a=s,c=!0,Pe.stop(),f.dataset.flipId=a,P=f.style.cssText||"",R=f.parentElement,l=f.nextSibling,E(),B("active"),M(a);let u=Flip.getState(f),D=G(A);S.appendChild(f),ae(f,D),m=Flip.from(u,{duration:t,ease:n,absolute:!0,scale:!1})}function K(s){!c||!f||s&&s!==a||(N(a),B("not-active"),m&&m.kill(),m=Flip.fit(f,R,{duration:t,ease:n,scale:!1,onComplete:()=>{R.insertBefore(f,l),f.style.cssText=P,ne()}}))}function Q(){!c||!f||(m&&m.kill(),N(a),B("not-active"),R.insertBefore(f,l),f.style.cssText=P,ne())}function O(){!c||!f||!A||ae(f,G(A))}function z(s){let u=s.target.closest("[data-mini-showreel-open]");u&&(s.preventDefault(),re(u.getAttribute("data-mini-showreel-open")||""))}function T(s){let u=s.target.closest("[data-mini-showreel-close]");u&&(s.preventDefault(),K(u.getAttribute("data-mini-showreel-close")||""))}function w(s){s.key==="Escape"&&K("")}let h=gsap.matchMedia();return h.add(Nn,function(){return o.addEventListener("click",z),document.addEventListener("click",T),window.addEventListener("keydown",w),window.addEventListener("resize",O),function(){Q(),o.removeEventListener("click",z),document.removeEventListener("click",T),window.removeEventListener("keydown",w),window.removeEventListener("resize",O)}}),function(){h.revert(),Q()}}var st={x:0,y:0,known:!1};window.addEventListener("pointermove",o=>{st.x=o.clientX,st.y=o.clientY,st.known=!0},{passive:!0});function Ze(o){let t=e=>o(e.clientX,e.clientY),n=()=>{st.known&&o(st.x,st.y)};return window.addEventListener("pointermove",t,{passive:!0}),window.addEventListener("scroll",n,{passive:!0}),function(){window.removeEventListener("pointermove",t),window.removeEventListener("scroll",n)}}var qe=1920,We=1080,Tt="#E5E5E5",At="#000000",on="http://www.w3.org/2000/svg";function an(o){let t=o.querySelector("[data-house]");if(!t)return;let n=document.createElementNS(on,"svg");n.setAttribute("viewBox",`0 0 ${qe} ${We}`),n.setAttribute("preserveAspectRatio","none"),n.setAttribute("aria-hidden","true"),n.style.cssText="display:block;width:100%;height:100%;";let e=(h,s)=>{let u=document.createElementNS(on,h);return u.setAttribute("fill",s),n.appendChild(u),u},a=e("polygon",Tt),c=e("polygon",At),S=e("rect",At),f=e("rect",Tt),A=e("rect",Tt),R=e("rect",At);[S,f,A,R].forEach(h=>h.setAttribute("shape-rendering","crispEdges")),t.appendChild(n);let l=(h,s,u,D,W)=>{h.setAttribute("x",s),h.setAttribute("y",u),h.setAttribute("width",Math.max(0,D)),h.setAttribute("height",Math.max(0,W))},m={x:qe*(2/3),y:We*(1/3)},P=.1,i=.9,p={x:m.x,y:m.y},r={x:m.x,y:m.y},v={x:m.x,y:m.y},b=!1,X=()=>gsap.to(v,{x:gsap.utils.random(qe*.327,qe*.807),duration:gsap.utils.random(4,7),ease:"sine.inOut",onComplete:X}),C=()=>gsap.to(v,{y:gsap.utils.random(We*.193,We*.673),duration:gsap.utils.random(2,4),ease:"sine.inOut",onComplete:C});X(),C();function G(){let h=gsap.utils.clamp(qe*P,qe*i,p.x),s=qe-h,u=gsap.utils.clamp(We*P,We*i,p.y),D=We-u;a.setAttribute("points",`0,${u} ${h},0 ${qe},${u} ${qe},${We} 0,${We}`),c.setAttribute("points",`${qe},${u} ${h},0 ${h},${u}`),l(S,0,u,h,D);let W=h*.25,H=D*(2/3);l(f,h/2-W/2,u+D-H,W,H),l(A,h,u,s,D);let g=s*.5,F=D/3;l(R,h+s/2-g/2,u+D/2-F/2,g,F)}let ae=.1,B=.03;function E(){let s=1-Math.pow(1-(b?ae:B),gsap.ticker.deltaRatio(60)),u=b?r:v;p.x+=(u.x-p.x)*s,p.y+=(u.y-p.y)*s,G()}let Y=(h,s)=>{let u=t.getBoundingClientRect();!u.width||!u.height||(r.x=gsap.utils.clamp(0,qe,(h-u.left)/u.width*qe),r.y=gsap.utils.clamp(0,We,(s-u.top)/u.height*We),b=!0)},M=()=>{b=!1},N=(h,s)=>{let u=t.getBoundingClientRect();h>=u.left&&h<=u.right&&s>=u.top&&s<=u.bottom?Y(h,s):M()},re=window.matchMedia("(hover: hover) and (pointer: fine)").matches?Ze(N):null,K=h=>{let s=h.touches[0];s&&Y(s.clientX,s.clientY)},Q={passive:!0};t.addEventListener("touchstart",K,Q),t.addEventListener("touchmove",K,Q),t.addEventListener("touchend",M,Q),t.addEventListener("touchcancel",M,Q);let O=!1,z=()=>{O||(O=!0,gsap.ticker.add(E))},T=()=>{O&&(O=!1,gsap.ticker.remove(E))},w=ScrollTrigger.create({trigger:t,start:"top bottom",end:"bottom top",onToggle:h=>h.isActive?z():T()});return G(),z(),function(){T(),w.kill(),gsap.killTweensOf(v),re&&re(),t.removeEventListener("touchstart",K,Q),t.removeEventListener("touchmove",K,Q),t.removeEventListener("touchend",M,Q),t.removeEventListener("touchcancel",M,Q),n.remove()}}var Xn="http://www.w3.org/2000/svg";var $n=4.1343749999999995,Yn="#BBC0C8",Kn="#FFFFFF",Zn=5e3,jn=[{deg:0,dx:1,dy:0},{deg:90,dx:0,dy:1},{deg:180,dx:-1,dy:0},{deg:270,dx:0,dy:-1}],Qn=0,sn=(o,t)=>{if(o<0||t<0||o>=20||t>=20)return!1;let n=20/2;return Math.hypot(o+.5-n,t+.5-n)<=n},je=(o,t)=>{let n=document.createElementNS(Xn,o);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function cn(o){let t=o.querySelectorAll("[data-pulse-dots]");if(!t.length)return;let n=[];return t.forEach(e=>{let a="pulse-dots-liquid-"+ ++Qn;e.setAttribute("data-pulse-dots-paused","");let c=je("svg",{class:"pulse-dots__svg",viewBox:"0 0 1000 1000","aria-hidden":"true"});c.style.setProperty("--pd-step",`${31.5}px`);let S=je("filter",{id:a,filterUnits:"userSpaceOnUse",x:0,y:0,width:1e3,height:1e3});S.append(je("feGaussianBlur",{in:"SourceGraphic",stdDeviation:$n.toFixed(2)}),je("feColorMatrix",{values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10"}));let f=je("defs",{});f.appendChild(S);let A=je("rect",{width:1e3,height:1e3,fill:Yn}),R=je("g",{filter:`url(#${a})`,fill:Kn});for(let m=0;m<20;m++)for(let P=0;P<20;P++){if(!sn(P,m))continue;let i=jn.filter(X=>sn(P+X.dx,m+X.dy)),p=i[Math.floor(Math.random()*i.length)],r=185+P*31.5+27.5625/2,v=185+m*31.5+27.5625/2,b=je("g",{transform:`rotate(${p.deg} ${r} ${v})`});b.style.setProperty("--anim-delay",`-${Math.floor(Math.random()*Zn)}ms`),b.append(je("circle",{class:"pulse-dots__dot is--first",cx:r,cy:v,r:27.5625/2}),je("circle",{class:"pulse-dots__dot is--last",cx:r,cy:v,r:27.5625/2})),R.appendChild(b)}c.append(f,A,R),e.appendChild(c);let l=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:m=>e.toggleAttribute("data-pulse-dots-paused",!m.isActive)});e.toggleAttribute("data-pulse-dots-paused",!l.isActive),n.push(()=>{l.kill(),e.removeAttribute("data-pulse-dots-paused"),c.remove()})}),()=>n.forEach(e=>e())}var pt=`#version 300 es
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
}`;var Ct=60,er=1.5,tr=1,xn=150,Mt=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);function bn(o){let t=o.querySelector("[data-dots-fx]");if(!t||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=document.createElement("canvas");n.setAttribute("aria-hidden","true"),Object.assign(n.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),getComputedStyle(t).position==="static"&&(t.style.position="relative"),t.appendChild(n);let e=n.getContext("webgl2",{antialias:!1,alpha:!1,premultipliedAlpha:!1});if(!e){n.remove();return}let a=!!e.getExtension("EXT_color_buffer_float");function c(w,h){let s=e.createShader(w);return e.shaderSource(s,h),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.error("[dots-fx] shader",e.getShaderInfoLog(s)),s}let S=[];function f(w,h=ln){let s=e.createProgram(),u=c(e.VERTEX_SHADER,h),D=c(e.FRAGMENT_SHADER,w);e.attachShader(s,u),e.attachShader(s,D),e.bindAttribLocation(s,0,"aVertexPosition"),e.bindAttribLocation(s,1,"aTextureCoord"),e.linkProgram(s),e.deleteShader(u),e.deleteShader(D),e.getProgramParameter(s,e.LINK_STATUS)||console.error("[dots-fx]",e.getProgramInfoLog(s));let W={},H=e.getProgramParameter(s,e.ACTIVE_UNIFORMS);for(let F=0;F<H;F++){let I=e.getActiveUniform(s,F);W[I.name]=e.getUniformLocation(s,I.name)}let g={p:s,loc:W};return S.push(g),g}let A={bg:f(un,pt),shapes:dn.map(w=>f(w,vn)),trailSim:f(pn,pt),trail:f(fn),blur:mn.map(w=>f(w)),bloom:hn.map(w=>f(w)),gmap:f(gn,pt)},R=e.createVertexArray();e.bindVertexArray(R);let l=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,l),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);let m=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(1),e.vertexAttribPointer(1,2,e.FLOAT,!1,0,0);let P=[];function i(w,h,s=!1){let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),s&&a?e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,w,h,0,e.RGBA,e.HALF_FLOAT,null):e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,w,h,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);let D=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT);let W={tex:u,fb:D,w,h};return P.push(W),W}function p(){P.forEach(w=>{e.deleteTexture(w.tex),e.deleteFramebuffer(w.fb)}),P.length=0}function r(w,h,s,u){e.useProgram(w.p);let D=h?h.w:n.width,W=h?h.h:n.height;e.bindFramebuffer(e.FRAMEBUFFER,h?h.fb:null),e.viewport(0,0,D,W);let H=w.loc;H.uMVMatrix&&e.uniformMatrix4fv(H.uMVMatrix,!1,Mt),H.uPMatrix&&e.uniformMatrix4fv(H.uPMatrix,!1,Mt),H.uTextureMatrix&&e.uniformMatrix4fv(H.uTextureMatrix,!1,Mt),H.uResolution&&e.uniform2f(H.uResolution,D,W),H.uArtboardResolution&&e.uniform2f(H.uArtboardResolution,1920,1920),H.uAspectRatio&&e.uniform1f(H.uAspectRatio,1),H.uMousePos&&e.uniform2f(H.uMousePos,v.x,v.y),H.uIsMask&&e.uniform1i(H.uIsMask,0),H.uParentTrackMouse&&e.uniform1f(H.uParentTrackMouse,0);let g=0;Object.keys(s).forEach(F=>{H[F]&&(e.activeTexture(e.TEXTURE0+g),e.bindTexture(e.TEXTURE_2D,s[F].tex),e.uniform1i(H[F],g),g++)}),Object.keys(u||{}).forEach(F=>{if(!H[F])return;let I=u[F];Array.isArray(I)?e.uniform2f(H[F],I[0],I[1]):e.uniform1f(H[F],I)}),e.drawArrays(e.TRIANGLE_STRIP,0,4)}let v={x:.5,y:.5},b={x:.5,y:.5},X=0,C=null,G=0;function ae(){p();let w=Math.min(er,window.devicePixelRatio||1),h=Math.max(1,Math.round(t.clientWidth*w)),s=Math.max(1,Math.round(t.clientHeight*w));n.width=h,n.height=s;let u=H=>[Math.max(1,Math.round(h*H)),Math.max(1,Math.round(s*H))];C={a:i(h,s),b:i(h,s),pp:[i(...u(.5),!0),i(...u(.5),!0)],trail:i(h,s),blur1:i(...u(1)),blur2:i(...u(1)),blur3:i(...u(1)),blur4:i(...u(1)),bth:i(...u(1)),bd1:i(...u(1)),bd2:i(...u(1)),bs1:i(...u(1)),bs2:i(...u(1)),bloom:i(h,s)},r(A.bg,C.a,{});let D=C.a,W=C.b;A.shapes.forEach(H=>{r(H,W,{uBgTexture:D});let g=D;D=W,W=g}),C.base=D,G=0}function B(){if(!C)return;let w=C.pp[G],h=C.pp[1-G];r(A.trailSim,h,{uPingPongTexture:w},{uTime:X,uPreviousMousePos:[b.x,b.y]}),G=1-G,r(A.trail,C.trail,{uTexture:C.base,uPingPongTexture:h}),r(A.blur[0],C.blur1,{uTexture:C.trail}),r(A.blur[1],C.blur2,{uTexture:C.blur1}),r(A.blur[2],C.blur3,{uTexture:C.blur2}),r(A.blur[3],C.blur4,{uTexture:C.blur3});let s=C.blur4;r(A.bloom[0],C.bth,{uTexture:s}),r(A.bloom[1],C.bd1,{uTexture:C.bth}),r(A.bloom[2],C.bd2,{uTexture:C.bd1,uBgTexture:s}),r(A.bloom[3],C.bs1,{uTexture:C.bd2}),r(A.bloom[4],C.bs2,{uTexture:C.bs1,uBgTexture:s}),r(A.bloom[5],C.bloom,{uTexture:C.bs2,uBgTexture:s}),r(A.gmap,null,{uTexture:C.bloom},{uTime:0}),b.x=v.x,b.y=v.y}let E=xn,M=Ze((w,h)=>{let s=n.getBoundingClientRect();!s.width||!s.height||(v.x=(w-s.left)/s.width,v.y=1-(h-s.top)/s.height,E=0,Q())}),N=null,ne=0,re=!1;function K(w){if(!re||E>=xn){N=null;return}if(N=requestAnimationFrame(K),w-ne<1e3/Ct-1)return;let h=ne?Math.min(w-ne,100):1e3/Ct;ne=w,X+=tr*(h/(1e3/Ct)),B(),E++}function Q(){re&&!N&&(b.x=v.x,b.y=v.y,ne=0,N=requestAnimationFrame(K))}let O=new IntersectionObserver(([w])=>{re=w.isIntersecting,re?Q():N&&(cancelAnimationFrame(N),N=null)});O.observe(t);let z=null,T=new ResizeObserver(()=>{clearTimeout(z),z=setTimeout(()=>{ae(),B()},60)});return T.observe(t),ae(),B(),function(){N&&cancelAnimationFrame(N),N=null,clearTimeout(z),O.disconnect(),T.disconnect(),M(),p(),S.forEach(s=>e.deleteProgram(s.p)),e.deleteBuffer(l),e.deleteBuffer(m),e.deleteVertexArray(R);let h=e.getExtension("WEBGL_lose_context");h&&h.loseContext(),n.remove()}}var nr="http://www.w3.org/2000/svg";var rr="#BBC0C8",or="#FFFFFF";var ar=[{r:650,start:-47.2},{r:625,start:-2.2},{r:600,start:147.8},{r:575,start:-32.2},{r:550,start:27.8}],ir=3,sr=.06,ct=5,cr=.1,lr=20,ur=0,rt=(o,t)=>{let n=document.createElementNS(nr,o);return Object.keys(t).forEach(e=>n.setAttribute(e,t[e])),n};function dr(o,t){let n=t*Math.PI/180,e=960+o*Math.cos(n),a=960+o*Math.sin(n),c=960-o*Math.cos(n),S=960-o*Math.sin(n);return`M ${e.toFixed(2)} ${a.toFixed(2)} A ${o} ${o} 0 1 1 ${c.toFixed(2)} ${S.toFixed(2)} A ${o} ${o} 0 1 1 ${e.toFixed(2)} ${a.toFixed(2)}`}function yn(o){let t=o.querySelectorAll("[data-text-rings]");if(!t.length)return;let n=[];return t.forEach(e=>{let a=(e.getAttribute("data-text")||"").trim();if(!a)return;let c="text-rings-"+ ++ur,S=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=rt("svg",{class:"text-rings__svg",viewBox:"0 0 1920 1920","aria-hidden":"true"});f.style.cssText="display:block;width:100%;height:100%;";let A=rt("defs",{}),R=rt("rect",{width:1920,height:1920,fill:rr}),l=rt("g",{}),m=rt("text",{fill:or,"font-size":24,"font-family":'"Suisseintl Book", Arial, sans-serif'});m.style.textTransform="uppercase";let P=Array(ir).fill(a).join(" "),i=ar.map((v,b)=>{let X=`${c}-ring-${b}`;A.appendChild(rt("path",{id:X,d:dr(v.r,v.start)}));let C=rt("textPath",{href:`#${X}`,textLength:3363,lengthAdjust:"spacing"});return C.textContent=P,m.appendChild(C),C});l.appendChild(m),f.append(A,R,l),e.appendChild(f);let p=[];S||(i.slice().reverse().forEach((b,X)=>{let C=gsap.timeline({repeat:-1,paused:!0});C.to(b,{attr:{textLength:3363*(1-sr)},duration:ct*.4,ease:"sine.inOut"}).to(b,{attr:{textLength:3363},duration:ct*.4,ease:"sine.inOut"},`+=${ct*.2}`),C.progress((ct-X*cr)%ct/ct),p.push(C)}),p.push(gsap.to(l,{rotation:360,svgOrigin:"960 960",duration:lr,ease:"sine.inOut",repeat:-1,paused:!0})));let r=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onToggle:v=>p.forEach(b=>v.isActive?b.play():b.pause())});r.isActive&&p.forEach(v=>v.play()),n.push(()=>{r.kill(),p.forEach(v=>v.kill()),f.remove()})}),()=>n.forEach(e=>e())}function Pn(o){let t=o.querySelectorAll("[data-dots-canvas-init]");if(!t.length)return;let n="0.5em",e="0.125em",a="circle",c="rgba(0, 0, 0, 0.2)",S="rgba(0, 0, 0, 0.75)",f=2.125,A=1.5,R=24,l=.5,m="20px",P=matchMedia("(hover: hover) and (pointer: fine)").matches,i={x:0,y:0,cx:0,cy:0,active:!1},p={value:0,from:0,to:0,start:0},r={value:0,from:0,to:0,start:0},v=[],b,X,C,G,ae,B,E=performance.now();function Y(g,F){let I=document.createElement("div");I.style.cssText=`position:absolute;visibility:hidden;width:${g};`,F.appendChild(I);let ie=I.getBoundingClientRect().width;return I.remove(),ie}function M(g,F){let I=document.createElement("span");I.style.color=g,F.appendChild(I);let ie=getComputedStyle(I).color;I.remove();let Se=document.createElement("canvas").getContext("2d");Se.fillStyle=ie,Se.fillRect(0,0,1,1);let _e=[...Se.getImageData(0,0,1,1).data];return _e[3]/=255,_e}function N(g,F,I){return`rgba(${g.map((ie,me)=>ie+(F[me]-ie)*I).join(",")})`}function ne(g,F){Object.assign(g,{from:g.value,to:F,start:performance.now()})}function re(g,F){if(!l)return g.value=g.to;let I=Math.min(Math.max((F-g.start)/(l*1e3),0),1);g.value=g.from+(g.to-g.from)*(1-Math.pow(1-I,4))}t.forEach(g=>{let F=document.createElement("canvas"),I=F.getContext("2d");F.setAttribute("aria-hidden","true"),Object.assign(F.style,{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}),getComputedStyle(g).position==="static"&&(g.style.position="relative"),g.prepend(F),v.push({element:g,canvas:F,ctx:I,width:0,height:0,visible:!1,inactive:M(g.getAttribute("data-dots-color-inactive")||c,g),active:M(g.getAttribute("data-dots-color-active")||S,g)})});function K(){return v.some(({element:g})=>{let F=g.getBoundingClientRect();return i.x>=F.left&&i.x<=F.right&&i.y>=F.top&&i.y<=F.bottom})}function Q(g,F){let I=g.element.getBoundingClientRect(),ie=I.left-F.left,me=I.top-F.top,Se=i.cx-F.left,_e=i.cy-F.top,Ne=f*(1+(A-1)*r.value);g.ctx.clearRect(0,0,g.width,g.height);for(let Ce=0;Ce<g.rows;Ce++){let J=g.oy+Ce*g.sy,ee=me+J;for(let k=0;k<g.cols;k++){let j=g.ox+k*g.sx,fe=ie+j,le=P&&p.value?Math.max(0,1-Math.hypot(fe-Se,ee-_e)/ae)*p.value:0,ve=X*(1+(Ne-1)*le);g.ctx.fillStyle=N(g.inactive,g.active,le),a==="square"?g.ctx.fillRect(j-ve/2,J-ve/2,ve,ve):(g.ctx.beginPath(),g.ctx.arc(j,J,ve/2,0,Math.PI*2),g.ctx.fill())}}}function O(g=!1){let F=t[0].getBoundingClientRect();v.forEach(I=>(!g||I.visible)&&Q(I,F))}function z(g){if(B=null,!v.some(I=>I.visible))return;let F=Math.min((g-E)/1e3,.1);if(E=g,re(p,g),re(r,g),!l)i.cx=i.x,i.cy=i.y;else{let I=1-Math.exp(-F*6/l);i.cx+=(i.x-i.cx)*I,i.cy+=(i.y-i.cy)*I}O(!0),B=requestAnimationFrame(z)}function T(){P&&!B&&v.some(g=>g.visible)&&(E=performance.now(),B=requestAnimationFrame(z))}function w(){b=Math.min(devicePixelRatio||1,2),X=Y(e,t[0]),C=Y(n,t[0]),G=X+C,ae=G*R;let g=Y(m,t[0])+X/2,F=I=>{let ie=I-2*g,me=ie>=0?Math.floor(ie/G)+1:0;return{count:me,offset:g,step:me>1?ie/(me-1):G}};v.forEach(I=>{let ie=I.element.getBoundingClientRect();I.width=ie.width,I.height=ie.height;let me=F(ie.width),Se=F(ie.height);I.cols=me.count,I.ox=me.offset,I.sx=me.step,I.rows=Se.count,I.oy=Se.offset,I.sy=Se.step,I.canvas.width=Math.round(ie.width*b),I.canvas.height=Math.round(ie.height*b),I.ctx.setTransform(b,0,0,b,0,0)}),O(),T()}let h=(g,F)=>{i.x=g,i.y=F;let I=K();I!==i.active&&(i.active=I,ne(p,+I),I?(i.cx=i.x,i.cy=i.y):ne(r,0)),T()},s=null,u=()=>i.active&&ne(r,1),D=()=>ne(r,0);P&&(s=Ze(h),window.addEventListener("pointerdown",u),window.addEventListener("pointerup",D));let W=new IntersectionObserver(g=>{g.forEach(F=>{let I=v.find(ie=>ie.element===F.target);I&&(I.visible=F.isIntersecting)}),P?T():O(!0)}),H=new ResizeObserver(w);return t.forEach(g=>{W.observe(g),H.observe(g)}),window.addEventListener("resize",w),w(),function(){B&&cancelAnimationFrame(B),B=null,P&&(s&&s(),window.removeEventListener("pointerdown",u),window.removeEventListener("pointerup",D)),window.removeEventListener("resize",w),W.disconnect(),H.disconnect(),v.forEach(g=>g.canvas.remove()),v.length=0}}var ot={radius:4,ease:.12,followEase:.2,ragged:.6,maxSide:.85},En=o=>{let t=Math.sin(o*127.1+311.7)*43758.5453;return t-Math.floor(t)},vr=o=>{let t=Math.floor(o),n=o-t,e=n*n*(3-2*n);return En(t)*(1-e)+En(t+1)*e};function wn(o){let t=o.querySelector("[data-type-field]");if(!t||!window.matchMedia("(min-width: 992px)").matches)return;let n=t.getAttribute("data-text");if(!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=t.parentElement,a=[],c=null,S=0,f=18,A=0,R=0,l=0,m=-1e5,P=-1e5,i=!1,p=!1;function r(){c&&c.revert(),t.textContent="";let M=getComputedStyle(t);S=parseFloat(M.paddingTop),f=parseFloat(M.lineHeight),A=t.offsetHeight;let N=Math.max(1,Math.floor((A-S-parseFloat(M.paddingBottom))/f)),ne=document.createDocumentFragment();for(let re=0;re<N;re++){let K=document.createElement("div");K.className="type-field__row",K.textContent=n,ne.appendChild(K)}t.appendChild(ne),t.setAttribute("aria-hidden","true"),c=SplitText.create(t.children,{type:"chars",charsClass:"type-field__char",aria:"hidden",autoSplit:!0,onSplit(){a=[...t.children].map((re,K)=>({chars:re.querySelectorAll(".type-field__char"),cur:a[K]?a[K].cur:0,drawn:0}))}})}function v(M){let N=Math.max(0,Math.min(M.chars.length,Math.round(M.cur)));if(N===M.drawn)return;let ne=Math.min(N,M.drawn),re=Math.max(N,M.drawn);for(let K=ne;K<re;K++)M.chars[K].style.visibility=K<N?"visible":"hidden";M.drawn=N}function b(M,N){if(!a.length)return;let ne=Math.min(N,50)/16.667,re=w=>1-Math.pow(1-w,ne),K=Pe.scroll,Q=Math.min(Math.max(R-K,0),l-K-A);P+=(m-Q-S-P)*re(ot.followEase);let O=Math.floor(P/f),z=K*.004,T=i&&m>=R-K&&m<=l-K;for(let w=0;w<a.length;w++){let h=a[w],s=h.chars.length,u=Math.abs(w-O),D=0;if(T){if(u===0)D=s;else if(u<=ot.radius){let W=1-u/(ot.radius+1);D=1+Math.min(ot.maxSide,W*(1-ot.ragged/2+ot.ragged*vr(w*1.3+z)))*(s-1)}}h.cur+=(D-h.cur)*re(ot.ease),v(h)}}function X(){p||(gsap.ticker.add(b),p=!0)}function C(){p&&(gsap.ticker.remove(b),p=!1)}let G=Ze((M,N)=>{P<-1e4&&(P=N),m=N,i=!0}),ae=()=>{i=!1};document.documentElement.addEventListener("mouseleave",ae),r();let B=ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onRefresh(M){R=M.start+window.innerHeight,l=M.end},onToggle(M){M.isActive?X():C()}});B.isActive&&X();let E,Y=()=>{clearTimeout(E),E=setTimeout(()=>{Math.floor((t.offsetHeight-S-parseFloat(getComputedStyle(t).paddingBottom))/f)!==a.length&&(r(),ScrollTrigger.refresh())},150)};return window.addEventListener("resize",Y),function(){C(),clearTimeout(E),G(),document.documentElement.removeEventListener("mouseleave",ae),window.removeEventListener("resize",Y),B.kill(),c&&c.revert(),t.textContent="",t.removeAttribute("aria-hidden")}}var Sn={duration:.5,ease:"power3"};function Tn(o){let t=o.querySelectorAll("[data-cursor-label]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];if(t.forEach(e=>{let a=e.querySelector("[data-cursor-label-item]");if(!a)return;let c=gsap.quickTo(a,"x",Sn),S=gsap.quickTo(a,"y",Sn),f=0,A=0,R=!1,l=new ResizeObserver(()=>{f=a.offsetWidth,A=a.offsetHeight});l.observe(a),f=a.offsetWidth,A=a.offsetHeight;let P=Ze((p,r)=>{let v=e.getBoundingClientRect();if(!(p>=v.left&&p<=v.right&&r>=v.top&&r<=v.bottom)){R&&(R=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")));return}let X=gsap.utils.clamp(0,Math.max(0,v.width-f),p-v.left-f/2),C=gsap.utils.clamp(0,Math.max(0,v.height-A),r-v.top-A/2);if(!R){R=!0,c(X,X),S(C,C),e.dispatchEvent(new CustomEvent("cursorlabel:enter"));return}c(X),S(C)}),i=()=>{R&&(R=!1,e.dispatchEvent(new CustomEvent("cursorlabel:leave")))};document.documentElement.addEventListener("mouseleave",i),n.push(()=>{P(),document.documentElement.removeEventListener("mouseleave",i),l.disconnect(),gsap.killTweensOf(a),gsap.set(a,{clearProps:"transform"})})}),!!n.length)return()=>n.forEach(e=>e())}var fr=["#555555","#727272","#838383","#B1B1B1","#D3D3D3","#E5E5E5"],pr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","<",">","%","&","@","!","#","$","^","*","(",")","-","_","+","=","{","}","[","]","|","\\",":",";",'"',"?","/","~","`"],mr="#FFFFFF";var An="power3.out";function Cn(o){let t=o.querySelectorAll("[data-scramble-hover] [data-split]");if(!t.length||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let n=[];return t.forEach(e=>{let a=[],c=[],S=[];function f(){if(c.length&&c[0].isConnected)return;let m=e.querySelectorAll(":scope > div > div");a=(m.length?[...m]:[e]).map(i=>SplitText.create(i,{type:"chars"})),c=a.flatMap(i=>i.chars),S=m.length?[...e.children].map(i=>({el:i,overflow:i.style.overflow})):[],c.forEach(i=>{i.dataset.orig=i.textContent})}function A(m){m.textContent=m.dataset.orig,m.style.border=""}let R=()=>{f(),S.forEach(P=>{P.el.style.overflow="visible"});let m=(c.length-1)/2;c.forEach((P,i)=>{gsap.to(P,{color:mr,ease:An,duration:.3,delay:Math.abs(i-m)*.03,overwrite:"auto",onStart:()=>{let p=gsap.utils.random(["0","1"]),r=gsap.utils.random(["0","1","2"]);p==1&&(P.textContent=gsap.utils.random(pr)),r==1&&(P.style.border=`1px solid ${gsap.utils.random(fr)}`)}})})},l=()=>{if(!c.length)return;let m=getComputedStyle(e).color,P=(c.length-1)/2;S.forEach(i=>{i.el.style.overflow=i.overflow}),c.forEach((i,p)=>{gsap.to(i,{color:m,ease:An,duration:.3,delay:Math.abs(p-P)*.03,overwrite:"auto",onStart:()=>A(i)})})};e.addEventListener("mouseenter",R),e.addEventListener("mouseleave",l),n.push(()=>{e.removeEventListener("mouseenter",R),e.removeEventListener("mouseleave",l),gsap.killTweensOf(c),a.forEach(m=>m.revert()),a=[],c=[],S=[]})}),()=>n.forEach(e=>e())}function Rt(o,t){let n=null;pe(Wt(o)),pe(an(o)),pe(Cn(o)),pe(Pn(o)),pe(en(o)),pe(Nt(o)),pe(rn(o));let e=document.querySelector("[data-load-wrap]");return e&&(n=t&&!sessionStorage.getItem("visited")?Xt(o):null,n?pe(function(){n.kill()}):(gsap.set(e,{display:"none"}),gsap.set("[data-load-reset]",{autoAlpha:1}))),pe($t(o)),pe(Zt(o)),pe(jt(o)),pe(ft(o)),vt(o),Qt(o),n}function mt(o){pe(tn(o)),o.querySelector("[data-flip-element]")&&window.innerWidth>991&&pe(Jt(o)),pe(wn(o)),pe(Tn(o)),pe(cn(o)),pe(bn(o)),pe(yn(o)),ScrollTrigger.sort()}var hr={lines:{duration:.8,stagger:.08},words:{duration:.6,stagger:.06},chars:{duration:.4,stagger:.01}};function ht(o){var t=[];return o.querySelectorAll("[data-split]").forEach(function(n){var e=n.dataset.splitReveal||"lines",a=e==="lines"?"lines":e==="words"?"lines, words":"lines, words, chars";t.push(SplitText.create(n,{type:a,mask:"lines",autoSplit:!0,onSplit:function(c){gsap.set(n,{autoAlpha:1});var S=hr[e],f={yPercent:110,duration:S.duration,stagger:S.stagger,ease:"expo.out"};return n._splitInVP===void 0&&(n._splitInVP=ScrollTrigger.isInViewport(n)),n._splitInVP?f.delay=.5:f.scrollTrigger={trigger:n,start:"clamp(top 75%)",once:!0},gsap.from(c[e],f)}}))}),function(){t.forEach(function(n){n.revert()})}}var Mn=window.matchMedia("(prefers-reduced-motion: reduce)"),Ft=.9;function Rn(o){let t=document.querySelector("[data-transition-wrap]"),n=t&&t.querySelector("[data-transition-dark]"),e=gsap.timeline({onComplete:()=>{o.remove(),t&&gsap.set(t,{clearProps:"zIndex"})}});return Mn.matches||!n?e.set(o,{autoAlpha:0}):(e.set(t,{zIndex:2}),e.fromTo(n,{autoAlpha:0},{autoAlpha:dt,duration:Ft,ease:Ke},0),e.fromTo(o,{y:"0vh"},{y:"-25vh",duration:Ft,ease:Ke},0),e.set(n,{autoAlpha:0}),e)}function zt(o,t,n="100vh"){let e=gsap.timeline();return Mn.matches?e.set(o,{autoAlpha:1}):(e.set(o,{zIndex:3},0),e.fromTo(o,{y:n},{y:"0vh",duration:Ft,ease:Ke},0)),e.add("pageReady"),e.call(function(){gsap.set(o,{clearProps:"zIndex"}),t(o)},null,"pageReady"),new Promise(a=>{e.call(a,null,"pageReady")})}function Lt(o,t,n){let e=document.querySelector("[data-transition-wrap]"),a=e&&e.querySelector("[data-transition-dark]");return e&&gsap.set(e,{zIndex:2}),gsap.set(o,{position:"relative"}),zt(o,t,n).then(function(){a&&gsap.set(a,{autoAlpha:0}),e&&gsap.set(e,{clearProps:"zIndex"})})}var at=null,kt=!1;function Dt(o){gsap.set(o,{clearProps:"position,top,left,right,transform"}),window.scrollTo(0,0),Pe.scrollTo(0,{immediate:!0,force:!0}),Pe.resize()}var Fn={sync:!0,beforeLeave(){kt=Pt({keepCurtain:!0}),Pe.stop(),at||(at=yt())},beforeEnter(o){at||(at=yt()),gsap.set(o.next.container,{position:"fixed",top:0,left:0,right:0}),Bt(),Rt(o.next.container,!1)},leave(o){return Rn(o.current.container,o.next.container)},enter(o){return kt&&(Ut(),kt=!1),pe(ht(o.next.container)),zt(o.next.container,Dt)},afterLeave(){at&&(at(),at=null)},afterEnter(o){Ot(o),mt(o.next.container),Pe.start(),ScrollTrigger.refresh()}};document.addEventListener("DOMContentLoaded",function(){barba.init({preventRunning:!0,timeout:7e3,prevent:function({el:o}){if(!o||!o.href)return!1;let t=new URL(o.href,location.href);return!!t.hash&&t.pathname===location.pathname},transitions:[{name:"default",...Fn,once(o){let t=document.querySelector("[data-menu-status]");Ht(),_t(),t&&(vt(t),ft(t)),document.querySelector("[data-load-wrap]")||sessionStorage.setItem("visited","1");let n=o.next.container,e=Rt(n,!0);e?e.call(function(){let a=document.querySelector("[data-load-bg]");pe(ht(n)),Lt(n,function(c){Dt(c),mt(c),Pe.start(),ScrollTrigger.refresh()},a?a.offsetHeight:void 0)},null,"hideContent"):(Pe.stop(),requestAnimationFrame(function(){requestAnimationFrame(function(){gsap.ticker.lagSmoothing(50,17),pe(ht(n)),Lt(n,function(a){Dt(a),mt(a),ScrollTrigger.refresh(),gsap.delayedCall(0,function(){gsap.ticker.lagSmoothing(0),Pe.start()})})})}))}},{name:"self",...Fn}]}),window.addEventListener("pageshow",function(o){o.persisted&&ScrollTrigger.refresh()})});})();
//# sourceMappingURL=app.js.map

import{S as W,W as z,A as F,a as A,P as G,V as E,b as K,H as q,D as Y,c as B,C as b,F as J,d as $,M as H,e as R,B as V,f as L,g as X,h as Z,i as _,j as Q,T as ee,k as ae}from"./three-_RSbwbDE.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function D(){return window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function te(){return window.innerWidth>768&&window.innerWidth<=1024}function se(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function N(){return se()||D()?"LOW":te()?"MEDIUM":"HIGH"}class ne{constructor(a){this.canvas=a,this.tier=N(),this.scene=new W;const e=this.tier==="HIGH"?Math.min(window.devicePixelRatio,2):1;this.renderer=new z({canvas:this.canvas,antialias:this.tier!=="LOW",alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(e),this.renderer.toneMapping=F,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=A,this.onResize=this.onResize.bind(this),window.addEventListener("resize",this.onResize,{passive:!0})}onResize(){const a=window.innerWidth,e=window.innerHeight;this.renderer.setSize(a,e),this.camera&&(this.camera.aspect=a/e,this.camera.updateProjectionMatrix())}render(){this.camera&&this.renderer.render(this.scene,this.camera)}dispose(){window.removeEventListener("resize",this.onResize),this.renderer.dispose()}}function u(t,a,e){return(1-e)*t+e*a}function ie(t,a,e){return Math.min(Math.max(t,a),e)}class oe{constructor(){const a=D()?65:50,e=window.innerWidth/window.innerHeight;this.camera=new G(a,e,.1,1e3),this.camera.position.set(0,1.5,24),this.targetLookAt=new E(0,1,0),this.currentLookAt=new E(0,1,0),this.camera.lookAt(this.currentLookAt),this.waypoints=[{p:0,pos:[0,1.6,24],look:[0,1.2,0]},{p:.08,pos:[.3,1.8,21],look:[0,1.3,0]},{p:.16,pos:[-.6,1.4,18],look:[-.3,1.2,0]},{p:.24,pos:[.8,1.7,15.5],look:[.4,1.4,0]},{p:.32,pos:[-.5,1.3,13],look:[-.2,1.1,0]},{p:.4,pos:[0,1.5,10.5],look:[0,1.3,0]},{p:.48,pos:[.7,1.2,8.5],look:[.3,1.1,0]},{p:.56,pos:[-.4,1.6,7],look:[-.1,1.4,0]},{p:.64,pos:[.5,1.3,6],look:[.2,1.2,0]},{p:.72,pos:[-.3,1.7,5.2],look:[0,1.5,0]},{p:.8,pos:[.4,1.4,4.5],look:[.1,1.2,0]},{p:.88,pos:[-.2,1.5,3.8],look:[0,1.3,0]},{p:.94,pos:[.3,1.3,3.2],look:[.1,1.2,0]},{p:1,pos:[0,1.8,2.5],look:[0,1.6,-10]}]}update(a,e={x:0,y:0}){const s=Math.max(0,Math.min(1,a));let i=this.waypoints[0],n=this.waypoints[this.waypoints.length-1];for(let p=0;p<this.waypoints.length-1;p++)if(s>=this.waypoints[p].p&&s<=this.waypoints[p+1].p){i=this.waypoints[p],n=this.waypoints[p+1];break}const r=(s-i.p)/(n.p-i.p||1),l=r*r*(3-2*r),d=u(i.pos[0],n.pos[0],l)+e.x*.4,v=u(i.pos[1],n.pos[1],l)-e.y*.3,h=u(i.pos[2],n.pos[2],l);this.camera.position.x=u(this.camera.position.x,d,.08),this.camera.position.y=u(this.camera.position.y,v,.08),this.camera.position.z=u(this.camera.position.z,h,.08);const g=u(i.look[0],n.look[0],l)+e.x*.2,m=u(i.look[1],n.look[1],l)-e.y*.15,k=u(i.look[2],n.look[2],l);this.currentLookAt.x=u(this.currentLookAt.x,g,.08),this.currentLookAt.y=u(this.currentLookAt.y,m,.08),this.currentLookAt.z=u(this.currentLookAt.z,k,.08),this.camera.lookAt(this.currentLookAt)}}class re{constructor(a){this.scene=a,this.ambientLight=new K(14544632,1.2),this.scene.add(this.ambientLight),this.hemiLight=new q(9028313,2373676,.8),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.dirLight=new Y(16774102,1.5),this.dirLight.position.set(20,40,30),this.scene.add(this.dirLight),this.pointLight1=new B(16750899,2,25),this.pointLight1.position.set(-4,3,10),this.scene.add(this.pointLight1),this.pointLight2=new B(16756802,2,25),this.pointLight2.position.set(4,3,5),this.scene.add(this.pointLight2),this.colors={morningSky:new b(14544632),morningSun:new b(16774102),weddingSky:new b(16770754),weddingSun:new b(16764006),sunsetSky:new b(16742212),sunsetSun:new b(16729122)}}update(a,e=0){const s=Math.max(0,Math.min(1,a)),i=1.8+Math.sin(e*4)*.2+Math.sin(e*9)*.1,n=1.8+Math.cos(e*3.5)*.2+Math.cos(e*7)*.1;if(this.pointLight1.intensity=i,this.pointLight2.intensity=n,s<.4){const r=s/.4;this.ambientLight.color.lerpColors(this.colors.morningSky,this.colors.weddingSky,r),this.dirLight.color.lerpColors(this.colors.morningSun,this.colors.weddingSun,r),this.ambientLight.intensity=u(1.2,1.4,r)}else if(s<.8){const r=(s-.4)/.4;this.ambientLight.color.lerpColors(this.colors.weddingSky,this.colors.weddingSky,r),this.dirLight.color.lerpColors(this.colors.weddingSun,this.colors.sunsetSun,r),this.ambientLight.intensity=u(1.4,1.2,r)}else{const r=(s-.8)/.2;this.ambientLight.color.lerpColors(this.colors.weddingSky,this.colors.sunsetSky,r),this.dirLight.color.lerpColors(this.colors.weddingSun,this.colors.sunsetSun,r),this.ambientLight.intensity=u(1.2,.9,r),this.dirLight.intensity=u(1.5,2.2,r)}}}class le{constructor(a){this.scene=a,this.fogColor=new b(12113381),this.scene.fog=new J(this.fogColor,.025),this.colors={morning:new b(12638440),day:new b(14477292),sunset:new b(13204053)}}update(a){const e=Math.max(0,Math.min(1,a));if(e<.4){const s=e/.4;this.fogColor.lerpColors(this.colors.morning,this.colors.day,s),this.scene.fog.density=u(.022,.018,s)}else if(e<.75){const s=(e-.4)/.35;this.fogColor.lerpColors(this.colors.day,this.colors.sunset,s*.5),this.scene.fog.density=u(.018,.024,s)}else{const s=(e-.75)/.25;this.fogColor.lerpColors(this.colors.day,this.colors.sunset,s),this.scene.fog.density=u(.024,.032,s)}this.scene.fog.color.copy(this.fogColor)}}class ce{constructor(a){this.scene=a;const e=new $(120,160,48,48);e.rotateX(-Math.PI/2),this.material=new H({color:1194826,roughness:.15,metalness:.65,transparent:!0,opacity:.88,flatShading:!1}),this.mesh=new R(e,this.material),this.mesh.position.set(0,-1.2,0),this.mesh.receiveShadow=!0,this.scene.add(this.mesh),this.positionAttribute=e.attributes.position,this.initialY=new Float32Array(this.positionAttribute.count);for(let s=0;s<this.positionAttribute.count;s++)this.initialY[s]=this.positionAttribute.getY(s)}update(a=0,e=0){const s=this.positionAttribute.count,i=1.2;for(let n=0;n<s;n++){const r=this.positionAttribute.getX(n),l=this.positionAttribute.getZ(n),d=Math.sin(r*.2+a*i)*.08+Math.cos(l*.15+a*(i*.8))*.06+Math.sin((r+l)*.1+a*.5)*.04;this.positionAttribute.setY(n,this.initialY[n]+d)}if(this.positionAttribute.needsUpdate=!0,e>.7){const n=(e-.7)/.3;this.material.color.setHex(1194826).lerp(new b(6040352),n*.7)}else this.material.color.setHex(1194826)}}class de{constructor(a){this.scene=a,this.tier=N();const e=this.tier==="HIGH"?800:this.tier==="MEDIUM"?400:180;this.geometry=new V;const s=new Float32Array(e*3),i=new Float32Array(e*3),n=new Float32Array(e*3),r=new Float32Array(e),l=new b(16766720),d=new b(16051165),v=new b(16747586);for(let p=0;p<e;p++){s[p*3+0]=(Math.random()-.5)*35,s[p*3+1]=Math.random()*18-1,s[p*3+2]=Math.random()*32-4,i[p*3+0]=(Math.random()-.5)*.015,i[p*3+1]=Math.random()*.012+.004,i[p*3+2]=(Math.random()-.5)*.015;const S=Math.random(),w=S<.6?l:S<.85?d:v;n[p*3+0]=w.r,n[p*3+1]=w.g,n[p*3+2]=w.b,r[p]=Math.random()*4+1.5}this.geometry.setAttribute("position",new L(s,3)),this.geometry.setAttribute("color",new L(n,3)),this.geometry.setAttribute("size",new L(r,1)),this.velocities=i;const h=document.createElement("canvas");h.width=64,h.height=64;const g=h.getContext("2d"),m=g.createRadialGradient(32,32,0,32,32,30);m.addColorStop(0,"rgba(255, 255, 255, 1)"),m.addColorStop(.3,"rgba(244, 235, 221, 0.8)"),m.addColorStop(.8,"rgba(185, 154, 90, 0.2)"),m.addColorStop(1,"rgba(185, 154, 90, 0)"),g.fillStyle=m,g.beginPath(),g.arc(32,32,30,0,Math.PI*2),g.fill();const k=new X(h);this.material=new Z({size:.28,map:k,vertexColors:!0,transparent:!0,opacity:.85,blending:_,depthWrite:!1}),this.points=new Q(this.geometry,this.material),this.scene.add(this.points)}update(a=0,e=0){const s=this.geometry.attributes.position,i=s.count;for(let n=0;n<i;n++){let r=s.getX(n),l=s.getY(n),d=s.getZ(n);l+=this.velocities[n*3+1],r+=Math.sin(a+n)*.004,d+=Math.cos(a+n)*.004,l>18&&(l=-1),r>18&&(r=-18),r<-18&&(r=18),s.setXYZ(n,r,l,d)}s.needsUpdate=!0,e>.75?(this.material.opacity=.95,this.material.size=.35):(this.material.opacity=.8,this.material.size=.28)}}class ue{constructor(a){this.scene=a,this.loader=new ee,this.layers=[],this.initLayers()}createLayerPlane(a,e,s,i,n={}){const r=new $(e,s),l=new H({transparent:!0,opacity:n.opacity!==void 0?n.opacity:1,roughness:n.roughness!==void 0?n.roughness:.8,metalness:n.metalness!==void 0?n.metalness:.1,side:ae,depthWrite:n.depthWrite!==void 0?n.depthWrite:!1});this.loader.load(a,h=>{h.colorSpace=A,l.map=h,l.needsUpdate=!0},void 0,h=>{if(a.endsWith(".webp")){const g=a.replace(".webp",".jpg");this.loader.load(g,m=>{m.colorSpace=A,l.map=m,l.needsUpdate=!0})}});const d=new R(r,l);d.position.set(i.x||0,i.y||0,i.z||0),n.rotation&&d.rotation.set(n.rotation.x||0,n.rotation.y||0,n.rotation.z||0),this.scene.add(d);const v={mesh:d,material:l,initialPos:{...d.position},parallaxFactor:n.parallaxFactor||.1,fadeInProgress:n.fadeInProgress,fadeOutProgress:n.fadeOutProgress,baseOpacity:n.opacity!==void 0?n.opacity:1};return this.layers.push(v),v}initLayers(){this.skyMorning=this.createLayerPlane("assets/environment/lake-toba.webp",90,45,{x:0,y:10,z:-32},{parallaxFactor:.02,opacity:1}),this.skySunset=this.createLayerPlane("assets/environment/sunset.webp",90,45,{x:0,y:10,z:-31.5},{parallaxFactor:.02,opacity:0}),this.mountains=this.createLayerPlane("assets/environment/mountains.webp",65,32,{x:0,y:6,z:-18},{parallaxFactor:.05,opacity:.95}),this.hills=this.createLayerPlane("assets/nature/hill.webp",50,24,{x:-6,y:3,z:-12},{parallaxFactor:.08,opacity:.9}),this.batakHouseLeft=this.createLayerPlane("assets/culture/batak-house.webp",14,11,{x:-7.5,y:2.5,z:2},{parallaxFactor:.18,opacity:.98}),this.batakHouseRight=this.createLayerPlane("assets/culture/batak-house.webp",12,9.5,{x:8.5,y:2,z:-2},{parallaxFactor:.18,opacity:.95}),this.soluBoat=this.createLayerPlane("assets/culture/batak-boat.webp",11,6.2,{x:-3.5,y:-.2,z:8},{parallaxFactor:.15,opacity:.95}),this.weddingArch=this.createLayerPlane("assets/wedding/floral-decoration.webp",10,8,{x:3.2,y:2.2,z:9},{parallaxFactor:.22,opacity:.95}),this.stoneLeft=this.createLayerPlane("assets/nature/stone.webp",6.5,4.5,{x:-6,y:-.4,z:16},{parallaxFactor:.35,opacity:.95}),this.grassRight=this.createLayerPlane("assets/nature/tall-grass.webp",7.5,5,{x:5.5,y:-.2,z:18},{parallaxFactor:.4,opacity:.9})}update(a,e={x:0,y:0},s=0){const i=Math.max(0,Math.min(1,a));if(i>.65){const n=(i-.65)/.35;this.skySunset.material.opacity=u(0,1,n),this.skyMorning.material.opacity=u(1,.1,n)}else this.skySunset.material.opacity=0,this.skyMorning.material.opacity=1;this.soluBoat&&(this.soluBoat.mesh.position.y=this.soluBoat.initialPos.y+Math.sin(s*1.5)*.08,this.soluBoat.mesh.rotation.z=Math.sin(s*1.2)*.015),this.layers.forEach(n=>{const r=n.parallaxFactor,l=n.initialPos.x+e.x*r*2.5,d=n.initialPos.y+e.y*r*1.5;n.mesh.position.x=u(n.mesh.position.x,l,.08),n.mesh.position.y=u(n.mesh.position.y,d,.08)})}}class pe{constructor(){this.mouse={x:0,y:0},this.target={x:0,y:0},this.smooth=.05,this.onMouseMove=this.onMouseMove.bind(this),this.onTouchMove=this.onTouchMove.bind(this),window.addEventListener("mousemove",this.onMouseMove,{passive:!0}),window.addEventListener("touchmove",this.onTouchMove,{passive:!0})}onMouseMove(a){const e=window.innerWidth/2,s=window.innerHeight/2;this.target.x=(a.clientX-e)/e,this.target.y=(a.clientY-s)/s}onTouchMove(a){if(a.touches.length>0){const e=a.touches[0],s=window.innerWidth/2,i=window.innerHeight/2;this.target.x=(e.clientX-s)/s*.5,this.target.y=(e.clientY-i)/i*.5}}update(){return this.mouse.x=u(this.mouse.x,this.target.x,this.smooth),this.mouse.y=u(this.mouse.y,this.target.y,this.smooth),this.mouse}dispose(){window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove)}}class he{constructor({scene:a,camera:e,lighting:s,fog:i,water:n,particles:r,environment:l,parallax:d}){this.worldScene=a,this.worldCamera=e,this.worldLighting=s,this.worldFog=i,this.worldWater=n,this.worldParticles=r,this.worldEnvironment=l,this.parallax=d,this.currentScroll=0,this.targetScroll=0,this.scrollProgress=0,this.clock={start:performance.now()},this.isRunning=!1,this.onScroll=this.onScroll.bind(this),this.loop=this.loop.bind(this),window.addEventListener("scroll",this.onScroll,{passive:!0}),this.updateScrollTarget()}updateScrollTarget(){const a=window.scrollY||window.pageYOffset||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-window.innerHeight||1;this.targetScroll=ie(a/e,0,1)}onScroll(){this.updateScrollTarget()}start(){this.isRunning||(this.isRunning=!0,requestAnimationFrame(this.loop))}stop(){this.isRunning=!1}loop(a){if(!this.isRunning)return;const e=(a-this.clock.start)*.001;this.currentScroll=u(this.currentScroll,this.targetScroll,.08),this.scrollProgress=this.currentScroll;const s=this.parallax.update();this.worldCamera.update(this.scrollProgress,s),this.worldLighting.update(this.scrollProgress,e),this.worldFog.update(this.scrollProgress),this.worldWater.update(e,this.scrollProgress),this.worldParticles.update(e,this.scrollProgress),this.worldEnvironment.update(this.scrollProgress,s,e),this.worldScene.render(),this.updateDomElements(this.scrollProgress),requestAnimationFrame(this.loop)}updateDomElements(a){document.querySelectorAll(".wedding-section").forEach(n=>{const r=n.getBoundingClientRect();r.top<window.innerHeight*.85&&r.bottom>window.innerHeight*.15&&n.classList.add("visible")});const s=document.querySelectorAll(".nav-dot"),i=s.length;if(i>0){const n=Math.min(Math.floor(a*i),i-1);s.forEach((r,l)=>{l===n?r.classList.add("active"):r.classList.remove("active")})}}dispose(){this.stop(),window.removeEventListener("scroll",this.onScroll)}}const o={groom:{name:"Muhammad Rizky Siregar, S.T.",nickname:"Rizky",father:"Bpk. H. Syahrul Siregar",mother:"Ibu Hj. Nurhasanah Harahap",marga:"Siregar",bio:"Putra pertama dari keluarga besar Siregar yang mencintai alam Danau Toba dan seni budaya leluhur."},bride:{name:"Fathia Annisa Nasution, S.Ked.",nickname:"Fathia",father:"Bpk. Drs. H. Sofyan Nasution",mother:"Ibu Hj. Aminah Lubis",marga:"Nasution",bio:"Putri kedua yang mengabdi pada kesehatan dan menjunjung tinggi nilai-nilai kasih sayang keluarga."},wedding:{date:"2026-10-24",day:"Sabtu"},akad:{title:"Akad Nikah",date:"Sabtu, 24 Oktober 2026",time:"08:30 WIB - Selesai",venue:"Masjid Raya Al-Mashun Samosir",address:"Jl. Putri Lopian, Pangururan, Kabupaten Samosir, Sumatera Utara",mapsUrl:"https://maps.google.com/?q=Pangururan+Samosir"},reception:{title:"Resepsi Adat Batak & Syukuran",date:"Sabtu, 24 Oktober 2026",time:"11:00 WIB - 17:00 WIB",venue:"Sopo Bolon Heritage Garden Danau Toba",address:"Tuk-Tuk Siadong, Pulau Samosir, Danau Toba, Sumatera Utara",mapsUrl:"https://maps.google.com/?q=Tuk-Tuk+Siadong+Samosir"},story:[{year:"2021",title:"Pertama Bertemu",description:"Pertemuan pertama yang tak disengaja di sebuah simposium budaya di Medan, membuka lembaran kisah penuh keteduhan."},{year:"2022",title:"Mulai Mengenal",description:"Berbagi cerita, pandangan hidup, dan kecintaan yang sama terhadap keindahan Danau Toba serta nilai-nilai keluarga."},{year:"2023",title:"Memantapkan Hati",description:"Dengan izin Allah SWT dan restu kedua orang tua, kami berkomitmen untuk melangkah ke jenjang yang lebih bermakna."},{year:"2024",title:"Lamaran & Marhusip",description:"Prosesi silaturahmi keluarga besar dan lamaran adat penuh kehangatan, mengikat dua keluarga dalam kasih."},{year:"2026",title:"Menuju Janji Suci",description:"Insya Allah, janji suci pernikahan akan terucap di tepian Danau Toba yang damai dan penuh berkah."}],culture:{title:"A JOURNEY OF CULTURE",subtitle:"Warisan Budaya Batak Toba dalam Bingkai Syariat Islam",description:"Warisan budaya Batak Toba menjadi bagian dari perjalanan menuju hari bahagia kami. Tradisi Ulos yang melambangkan kehangatan, doa, dan perlindungan kasih sayang, berpadu dengan ketakwaan dan syariat Islam yang menjadi penuntun rumah tangga sakinah, mawaddah, warahmah.",quote:"Molo mangido gogo tu Debata, molo mangido pasupasu tu Tuhan (Memohon kekuatan dan keberkahan semata kepada Sang Pencipta)."},rsvp:{whatsapp:"6281234567890"},gift:{bank:"Bank Syariah Indonesia (BSI)",accountNumber:"7123456789",accountName:"Muhammad Rizky Siregar",bankSecondary:"Bank Central Asia (BCA)",accountNumberSecondary:"8450123456",accountNameSecondary:"Fathia Annisa Nasution"},music:{youtubeId:"06-XXOTP3Gc",volume:50}};let f=null,I=!1;function me(){const t=document.getElementById("music-toggle-btn");t&&t.addEventListener("click",()=>{ve()})}function j(){if(I){f&&typeof f.playVideo=="function"&&(f.playVideo(),x(!0));return}I=!0,ge()}function ge(){let t=document.getElementById("yt-player-container");t||(t=document.createElement("div"),t.id="yt-player-container",t.style.position="fixed",t.style.width="1px",t.style.height="1px",t.style.left="-9999px",t.style.top="-9999px",t.style.opacity="0",t.style.pointerEvents="none",t.style.zIndex="-9999",document.body.appendChild(t));const a=document.createElement("div");if(a.id="yt-player",t.appendChild(a),window.YT&&window.YT.Player)T();else{const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s),window.onYouTubeIframeAPIReady=()=>{T()}}}function T(){const t=o.music;f=new window.YT.Player("yt-player",{height:"1",width:"1",videoId:t.youtubeId,playerVars:{autoplay:1,controls:0,disablekb:1,enablejsapi:1,fs:0,loop:1,playlist:t.youtubeId,modestbranding:1,playsinline:1,rel:0,origin:window.location.origin},events:{onReady:a=>{a.target.setVolume(t.volume),a.target.playVideo(),x(!0)},onStateChange:a=>{a.data===1?x(!0):(a.data===2||a.data===0)&&x(!1)},onError:a=>{console.warn("YouTube Player notice (audio fallback active):",a)}}})}function ve(){if(!f||typeof f.getPlayerState!="function"){I||j();return}f.getPlayerState()===1?(f.pauseVideo(),x(!1)):(f.playVideo(),x(!0))}function x(t){const a=document.getElementById("music-toggle-btn");a&&(t?(a.classList.add("playing"),a.setAttribute("aria-label","Jeda Musik"),a.title="Jeda Musik"):(a.classList.remove("playing"),a.setAttribute("aria-label","Putar Musik"),a.title="Putar Musik"))}function be(){const t=document.getElementById("section-opening");if(!t)return;t.innerHTML=`
    <div class="opening-content">
      <div class="opening-ornament">
        <img src="assets/decorative/gorga-divider.svg" alt="Batak Gorga Divider" class="svg-divider" />
      </div>
      
      <p class="opening-subtitle">THE WEDDING OF</p>
      
      <h1 class="opening-title">
        <span class="groom-title">${o.groom.nickname}</span>
        <span class="ampersand">&amp;</span>
        <span class="bride-title">${o.bride.nickname}</span>
      </h1>
      
      <p class="opening-date">${o.wedding.day}, ${ye(o.wedding.date)}</p>
      <p class="opening-location">Danau Toba, Sumatera Utara</p>

      <div class="opening-btn-wrapper">
        <button id="btn-open-invitation" class="btn-primary" aria-label="Buka Undangan">
          <span class="btn-icon">💌</span>
          <span class="btn-text">BUKA UNDANGAN</span>
        </button>
      </div>

      <div class="scroll-hint">
        <span class="mouse-icon"></span>
        <span class="hint-text">GULIR KE BAWAH</span>
      </div>
    </div>
  `;const a=document.getElementById("btn-open-invitation");a&&a.addEventListener("click",()=>{j();const e=document.getElementById("section-quote");e&&e.scrollIntoView({behavior:"smooth"}),a.classList.add("opened")})}function ye(t){const[a,e,s]=t.split("-"),i=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];return`${parseInt(s,10)} ${i[parseInt(e,10)-1]} ${a}`}function fe(){const t=document.getElementById("section-quote");t&&(t.innerHTML=`
    <div class="glass-card quote-card">
      <div class="card-ornament-top">
        <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
      </div>

      <p class="arabic-quote" dir="rtl">
        وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
      </p>

      <blockquote class="quote-translation">
        &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.&rdquo;
      </blockquote>

      <p class="quote-source">QS. Ar-Rum : 21</p>

      <div class="card-ornament-bottom">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider-small" />
      </div>
    </div>
  `)}function ke(){const t=document.getElementById("section-couple");t&&(t.innerHTML=`
    <div class="section-header">
      <p class="section-tag">PASANGAN MEMPELAI</p>
      <h2 class="section-title">Sang Pengantin</h2>
      <p class="section-desc">
        Dengan memohon ridha dan rahmat Allah SWT, kami menyatukan dua hati dan dua keluarga dalam ikatan pernikahan yang suci.
      </p>
    </div>

    <div class="couple-grid">
      <!-- Groom Card -->
      <div class="glass-card couple-card groom-card">
        <div class="couple-avatar-wrapper">
          <img src="assets/gallery/groom.webp" alt="${o.groom.name}" class="couple-avatar" loading="lazy" />
          <div class="avatar-ring"></div>
        </div>
        
        <h3 class="couple-name">${o.groom.name}</h3>
        <p class="couple-marga">Marga: ${o.groom.marga}</p>
        
        <div class="couple-parents">
          <p class="parent-title">Putra Pertama dari:</p>
          <p class="parent-name">${o.groom.father}</p>
          <p class="parent-name">&amp; ${o.groom.mother}</p>
        </div>

        <p class="couple-bio">${o.groom.bio}</p>
      </div>

      <!-- Center Cultural Symbol -->
      <div class="couple-center-divider">
        <span class="heart-symbol">&amp;</span>
        <div class="vertical-gold-line"></div>
      </div>

      <!-- Bride Card -->
      <div class="glass-card couple-card bride-card">
        <div class="couple-avatar-wrapper">
          <img src="assets/gallery/bride.webp" alt="${o.bride.name}" class="couple-avatar" loading="lazy" />
          <div class="avatar-ring"></div>
        </div>
        
        <h3 class="couple-name">${o.bride.name}</h3>
        <p class="couple-marga">Marga: ${o.bride.marga}</p>
        
        <div class="couple-parents">
          <p class="parent-title">Putri Kedua dari:</p>
          <p class="parent-name">${o.bride.father}</p>
          <p class="parent-name">&amp; ${o.bride.mother}</p>
        </div>

        <p class="couple-bio">${o.bride.bio}</p>
      </div>
    </div>
  `)}function we(){const t=document.getElementById("section-culture");t&&(t.innerHTML=`
    <div class="culture-container">
      <div class="section-header">
        <p class="section-tag">${o.culture.title}</p>
        <h2 class="section-title">${o.culture.subtitle}</h2>
        <div class="section-divider">
          <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
        </div>
      </div>

      <div class="culture-content-grid">
        <div class="culture-text-block glass-card">
          <p class="culture-lead">${o.culture.description}</p>
          <blockquote class="culture-quote">&ldquo;${o.culture.quote}&rdquo;</blockquote>
        </div>

        <div class="culture-features-grid">
          <!-- Feature 1: Gorga -->
          <div class="culture-feature-card glass-card">
            <div class="feature-img-wrapper">
              <img src="assets/culture/batak-gorga.webp" alt="Gorga Batak" class="feature-img" loading="lazy" />
            </div>
            <h4 class="feature-title">Gorga Batak</h4>
            <p class="feature-text">Ukiran sakral penuh filosofi perlindungan (Singa-singa), kemakmuran (Boraspati), dan keindahan hidup yang bermartabat.</p>
          </div>

          <!-- Feature 2: Ulos -->
          <div class="culture-feature-card glass-card">
            <div class="feature-img-wrapper">
              <img src="assets/culture/ulos-pattern.webp" alt="Ulos Batak" class="feature-img" loading="lazy" />
            </div>
            <h4 class="feature-title">Ulos Hela &amp; Sadum</h4>
            <p class="feature-text">Simbol kehangatan cinta kasih, restu tulus orang tua, dan ikatan kekeluargaan yang tak lekang oleh waktu.</p>
          </div>

          <!-- Feature 3: Rumah Bolon -->
          <div class="culture-feature-card glass-card">
            <div class="feature-img-wrapper">
              <img src="assets/culture/batak-house.webp" alt="Rumah Bolon" class="feature-img" loading="lazy" />
            </div>
            <h4 class="feature-title">Rumah Bolon</h4>
            <p class="feature-text">Arsitektur megah peninggalan leluhur yang berdiri kokoh di tepian Danau Toba sebagai lambang persatuan dan keharmonisan.</p>
          </div>
        </div>
      </div>
    </div>
  `)}function xe(){const t=document.getElementById("section-story");if(!t)return;const a=o.story.map((e,s)=>`
      <div class="timeline-item ${s%2===0?"left":"right"}">
        <div class="timeline-node">
          <span class="node-pulse"></span>
          <span class="node-year">${e.year}</span>
        </div>
        <div class="timeline-card glass-card">
          <span class="timeline-badge">${e.year}</span>
          <h3 class="timeline-title">${e.title}</h3>
          <p class="timeline-desc">${e.description}</p>
        </div>
      </div>
    `).join("");t.innerHTML=`
    <div class="section-header">
      <p class="section-tag">KISAH KAMI</p>
      <h2 class="section-title">Perjalanan Dua Hati</h2>
      <p class="section-desc">Setiap langkah takdir menuntun kami menuju janji suci di hadapan Allah SWT.</p>
      <div class="section-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>
    </div>

    <div class="timeline-wrapper">
      <div class="timeline-line"></div>
      ${a}
    </div>
  `}function Se(){const t=document.getElementById("section-akad");t&&(t.innerHTML=`
    <div class="event-card-container">
      <div class="glass-card event-card sacred-card">
        <div class="card-badge">PROSESI SAKRAL</div>
        
        <div class="event-icon-top">
          <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
        </div>

        <h2 class="event-title">${o.akad.title}</h2>
        <p class="event-day-date">${o.akad.date}</p>
        <p class="event-time"><span class="clock-icon">🕒</span> ${o.akad.time}</p>

        <div class="card-gold-divider"></div>

        <div class="event-venue-block">
          <h4 class="venue-name">${o.akad.venue}</h4>
          <p class="venue-address">${o.akad.address}</p>
        </div>

        <div class="event-action-wrapper">
          <a href="${o.akad.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary btn-outline" aria-label="Lihat Lokasi Akad">
            <span class="btn-icon">📍</span>
            <span class="btn-text">LIHAT LOKASI AKAD</span>
          </a>
        </div>
      </div>
    </div>
  `)}function Le(){const t=document.getElementById("section-reception");t&&(t.innerHTML=`
    <div class="event-card-container">
      <div class="glass-card event-card cultural-event-card">
        <div class="card-badge cultural-badge">PESTA UNJUK &amp; SYUKURAN</div>
        
        <div class="event-icon-top">
          <img src="assets/decorative/gorga-divider.svg" alt="Gorga Motif" class="svg-divider-small" />
        </div>

        <h2 class="event-title">${o.reception.title}</h2>
        <p class="event-day-date">${o.reception.date}</p>
        <p class="event-time"><span class="clock-icon">🕒</span> ${o.reception.time}</p>

        <div class="card-gold-divider"></div>

        <div class="event-venue-block">
          <h4 class="venue-name">${o.reception.venue}</h4>
          <p class="venue-address">${o.reception.address}</p>
        </div>

        <p class="event-cultural-note">
          &ldquo;Horas! Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.&rdquo;
        </p>

        <div class="event-action-wrapper">
          <a href="${o.reception.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="Lihat Lokasi Resepsi">
            <span class="btn-icon">📍</span>
            <span class="btn-text">LIHAT LOKASI RESEPSI</span>
          </a>
        </div>
      </div>
    </div>
  `)}function Me(){const t=document.getElementById("section-cultural-journey");t&&(t.innerHTML=`
    <div class="journey-overlay glass-card">
      <p class="section-tag">CULTURAL JOURNEY</p>
      <h2 class="journey-title">Janji Suci di Tepian Danau Toba</h2>
      <p class="journey-text">
        Melintasi perbukitan hijau Samosir, diselimuti kabut pagi yang teduh, dan diiringi alunan doa restu dari para tetua adat dan keluarga besar.
      </p>
      <div class="journey-decor">
        <span class="decor-dot"></span>
        <span class="decor-line"></span>
        <span class="decor-dot"></span>
      </div>
    </div>
  `)}function Ae(){const t=document.getElementById("section-gallery");if(!t)return;const a=[{src:"assets/gallery/photo-01.webp",title:"Puncak Bukit Holbung Samosir",desc:"Menatap masa depan bersama di ketinggian Danau Toba"},{src:"assets/gallery/photo-02.webp",title:"Huta Siallagan",desc:"Menjunjung adat istiadat dan kearifan leluhur Batak"},{src:"assets/gallery/photo-03.webp",title:"Senja di Tepian Danau",desc:"Ketenangan dan kehangatan dalam setiap detik perjalanan"},{src:"assets/gallery/photo-04.webp",title:"Perahu Solu Tradisional",desc:"Berlayar menyusuri riak danau nan jernih"},{src:"assets/gallery/photo-05.webp",title:"Lembah Bakkara",desc:"Hamparan hijau yang menyejukkan hati"},{src:"assets/gallery/photo-06.webp",title:"Bunga Restu & Ulos",desc:"Rangkaian doa dan lambang perlindungan keluarga"},{src:"assets/gallery/photo-07.webp",title:"Tenun Ulos Sadum",desc:"Sentuhan benang emas yang sarat makna kemuliaan"},{src:"assets/gallery/photo-08.webp",title:"Gugusan Pegunungan Samosir",desc:"Saksi bisu janji suci ikatan cinta kami"}];let e=0;const s=a.map((c,y)=>`
    <div class="gallery-card glass-card" data-index="${y}" tabindex="0" role="button" aria-label="Lihat foto ${c.title}">
      <div class="gallery-img-container">
        <img src="${c.src}" alt="${c.title}" class="gallery-img" loading="lazy" />
        <div class="gallery-overlay-hover">
          <span class="view-icon">🔍</span>
          <p class="gallery-hover-title">${c.title}</p>
        </div>
      </div>
      <div class="gallery-card-footer">
        <span class="gallery-num">0${y+1}</span>
        <span class="gallery-caption">${c.title}</span>
      </div>
    </div>
  `).join("");t.innerHTML=`
    <div class="section-header">
      <p class="section-tag">GALERI MEMORI</p>
      <h2 class="section-title">Dokumentasi Cinta</h2>
      <p class="section-desc">Momen-momen indah yang terukir manis di sepanjang lanskap megah Danau Toba.</p>
      <div class="section-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>
    </div>

    <div class="gallery-grid">
      ${s}
    </div>

    <!-- Enhanced Responsive Lightbox Modal -->
    <div id="gallery-lightbox" class="lightbox-modal" aria-hidden="true" role="dialog" aria-modal="true">
      <div class="lightbox-dialog glass-card">
        <!-- Top Controls -->
        <div class="lightbox-header">
          <span id="lightbox-counter" class="lightbox-counter">01 / 08</span>
          <button id="lightbox-close-btn" class="lightbox-close-btn" aria-label="Tutup Galeri">✕</button>
        </div>

        <!-- Image & Nav Buttons -->
        <div class="lightbox-body">
          <button id="lightbox-prev-btn" class="lightbox-nav-btn prev" aria-label="Foto Sebelumnya">&#10094;</button>
          
          <div class="lightbox-img-wrapper">
            <img id="lightbox-img" src="" alt="Preview Foto Galeri" />
          </div>

          <button id="lightbox-next-btn" class="lightbox-nav-btn next" aria-label="Foto Selanjutnya">&#10095;</button>
        </div>

        <!-- Footer Info -->
        <div class="lightbox-footer">
          <h3 id="lightbox-title" class="lightbox-title"></h3>
          <p id="lightbox-desc" class="lightbox-desc"></p>
        </div>
      </div>
    </div>
  `;const i=document.getElementById("gallery-lightbox"),n=document.getElementById("lightbox-img"),r=document.getElementById("lightbox-title"),l=document.getElementById("lightbox-desc"),d=document.getElementById("lightbox-counter"),v=document.getElementById("lightbox-close-btn"),h=document.getElementById("lightbox-prev-btn"),g=document.getElementById("lightbox-next-btn");function m(c){c<0&&(c=a.length-1),c>=a.length&&(c=0),e=c;const y=a[e];n.src=y.src,r.textContent=y.title,l.textContent=y.desc,d.textContent=`0${e+1} / 0${a.length}`}function k(c){m(c),i.classList.add("active"),i.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function p(){i.classList.remove("active"),i.setAttribute("aria-hidden","true"),document.body.style.overflow=""}document.querySelectorAll(".gallery-card").forEach(c=>{c.addEventListener("click",()=>{const y=parseInt(c.getAttribute("data-index"),10);k(y)}),c.addEventListener("keydown",y=>{if(y.key==="Enter"||y.key===" "){y.preventDefault();const O=parseInt(c.getAttribute("data-index"),10);k(O)}})}),v&&v.addEventListener("click",p),h&&h.addEventListener("click",c=>{c.stopPropagation(),m(e-1)}),g&&g.addEventListener("click",c=>{c.stopPropagation(),m(e+1)}),i.addEventListener("click",c=>{c.target===i&&p()}),window.addEventListener("keydown",c=>{i.classList.contains("active")&&(c.key==="Escape"&&p(),c.key==="ArrowLeft"&&m(e-1),c.key==="ArrowRight"&&m(e+1))});let S=0,w=0;i.addEventListener("touchstart",c=>{S=c.changedTouches[0].screenX},{passive:!0}),i.addEventListener("touchend",c=>{w=c.changedTouches[0].screenX,U()},{passive:!0});function U(){const c=S-w;Math.abs(c)>45&&(c>0?m(e+1):m(e-1))}}let M=null;function Ie(){const t=document.getElementById("section-countdown");t&&(t.innerHTML=`
    <div class="countdown-card glass-card">
      <div class="card-ornament-top">
        <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
      </div>

      <p class="section-tag">MENUJU HARI BAHAGIA</p>
      <h2 class="section-title countdown-heading">Hitung Mundur</h2>
      <p class="countdown-date-badge">${o.wedding.day}, ${Te(o.wedding.date)}</p>

      <div class="countdown-timer-grid">
        <div class="timer-box">
          <span id="cd-days" class="timer-num">00</span>
          <span class="timer-label">HARI</span>
        </div>
        <div class="timer-colon">:</div>
        <div class="timer-box">
          <span id="cd-hours" class="timer-num">00</span>
          <span class="timer-label">JAM</span>
        </div>
        <div class="timer-colon">:</div>
        <div class="timer-box">
          <span id="cd-minutes" class="timer-num">00</span>
          <span class="timer-label">MENIT</span>
        </div>
        <div class="timer-colon">:</div>
        <div class="timer-box">
          <span id="cd-seconds" class="timer-num">00</span>
          <span class="timer-label">DETIK</span>
        </div>
      </div>

      <div class="calendar-btn-wrapper">
        <a id="btn-add-calendar" href="#" target="_blank" rel="noopener noreferrer" class="btn-primary btn-outline" aria-label="Simpan ke Google Calendar">
          <span class="btn-icon">📅</span>
          <span class="btn-text">SIMPAN DI GOOGLE CALENDAR</span>
        </a>
      </div>
    </div>
  `,Ee(),Be())}function Ee(){M&&clearInterval(M);const t=new Date(`${o.wedding.date}T08:30:00+07:00`).getTime();function a(){const e=new Date().getTime(),s=t-e,i=document.getElementById("cd-days"),n=document.getElementById("cd-hours"),r=document.getElementById("cd-minutes"),l=document.getElementById("cd-seconds");if(!i||!n||!r||!l)return;if(s<=0){i.textContent="00",n.textContent="00",r.textContent="00",l.textContent="00";return}const d=Math.floor(s/(1e3*60*60*24)),v=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(s%(1e3*60*60)/(1e3*60)),g=Math.floor(s%(1e3*60)/1e3);i.textContent=String(d).padStart(2,"0"),n.textContent=String(v).padStart(2,"0"),r.textContent=String(h).padStart(2,"0"),l.textContent=String(g).padStart(2,"0")}a(),M=setInterval(a,1e3)}function Be(){const t=document.getElementById("btn-add-calendar");if(!t)return;const a=encodeURIComponent(`Pernikahan ${o.groom.nickname} & ${o.bride.nickname}`),e=encodeURIComponent(`Pernikahan Adat Batak Islam ${o.groom.name} & ${o.bride.name} di Danau Toba`),s=encodeURIComponent(`${o.akad.venue}, ${o.akad.address}`),i=`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${a}&dates=20261024T013000Z/20261024T100000Z&details=${e}&location=${s}`;t.href=i}function Te(t){const[a,e,s]=t.split("-"),i=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];return`${parseInt(s,10)} ${i[parseInt(e,10)-1]} ${a}`}function Pe(){const t=document.getElementById("section-location");t&&(t.innerHTML=`
    <div class="section-header">
      <p class="section-tag">DENAH &amp; LOKASI</p>
      <h2 class="section-title">Lokasi Acara</h2>
      <p class="section-desc">Petunjuk menuju tempat pelaksanaan Akad Nikah dan Resepsi Pernikahan.</p>
      <div class="section-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>
    </div>

    <div class="location-grid">
      <!-- Akad Location -->
      <div class="glass-card location-card">
        <div class="location-card-header">
          <span class="location-badge">LOKASI 1</span>
          <h3 class="location-title">Akad Nikah</h3>
        </div>
        <p class="location-venue-name">${o.akad.venue}</p>
        <p class="location-address-text">${o.akad.address}</p>

        <div class="location-btn-wrapper">
          <a href="${o.akad.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="Buka Google Maps Akad">
            <span class="btn-icon">🗺️</span>
            <span class="btn-text">BUKA GOOGLE MAPS</span>
          </a>
        </div>
      </div>

      <!-- Reception Location -->
      <div class="glass-card location-card">
        <div class="location-card-header">
          <span class="location-badge cultural-badge">LOKASI 2</span>
          <h3 class="location-title">Resepsi Adat</h3>
        </div>
        <p class="location-venue-name">${o.reception.venue}</p>
        <p class="location-address-text">${o.reception.address}</p>

        <div class="location-btn-wrapper">
          <a href="${o.reception.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="Buka Google Maps Resepsi">
            <span class="btn-icon">🗺️</span>
            <span class="btn-text">BUKA GOOGLE MAPS</span>
          </a>
        </div>
      </div>
    </div>
  `)}function Ce(){const t=document.getElementById("section-rsvp");if(!t)return;t.innerHTML=`
    <div class="glass-card rsvp-card">
      <div class="section-header">
        <p class="section-tag">KONFIRMASI KEHADIRAN</p>
        <h2 class="section-title">RSVP</h2>
        <p class="section-desc">Mohon konfirmasikan kehadiran Anda untuk membantu kelancaran acara pernikahan kami.</p>
        <div class="section-divider">
          <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
        </div>
      </div>

      <form id="rsvp-form" class="rsvp-form">
        <div class="form-group">
          <label for="rsvp-name" class="form-label">Nama Lengkap</label>
          <input type="text" id="rsvp-name" class="form-input" placeholder="Masukkan nama lengkap Anda" required />
        </div>

        <div class="form-group">
          <label class="form-label">Konfirmasi Kehadiran</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="rsvp-attendance" value="Hadir" checked />
              <span class="radio-custom"></span>
              <span class="radio-text">Saya Akan Hadir</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="rsvp-attendance" value="Tidak Hadir" />
              <span class="radio-custom"></span>
              <span class="radio-text">Maaf, Tidak Bisa Hadir</span>
            </label>
          </div>
        </div>

        <div class="form-group">
          <label for="rsvp-message" class="form-label">Ucapan &amp; Doa Restu</label>
          <textarea id="rsvp-message" class="form-textarea" rows="4" placeholder="Tuliskan ucapan dan doa terbaik untuk kedua mempelai..."></textarea>
        </div>

        <div class="form-submit-wrapper">
          <button type="submit" class="btn-primary" aria-label="Kirim Konfirmasi via WhatsApp">
            <span class="btn-icon">💬</span>
            <span class="btn-text">KIRIM VIA WHATSAPP</span>
          </button>
        </div>
      </form>
    </div>
  `;const a=document.getElementById("rsvp-form");a&&a.addEventListener("submit",e=>{var g;e.preventDefault();const s=document.getElementById("rsvp-name").value.trim(),i=((g=document.querySelector('input[name="rsvp-attendance"]:checked'))==null?void 0:g.value)||"Hadir",n=document.getElementById("rsvp-message").value.trim()||"-";if(!s)return;const r=o.groom.nickname,l=o.bride.nickname,d=o.rsvp.whatsapp,v=`Halo, saya ${s}.

Konfirmasi kehadiran untuk pernikahan ${r} & ${l}.

Kehadiran: ${i}

Ucapan:
${n}`,h=`https://api.whatsapp.com/send?phone=${d}&text=${encodeURIComponent(v)}`;window.open(h,"_blank")})}function P(t,a=3e3){let e=document.getElementById("toast-container");e||(e=document.createElement("div"),e.id="toast-container",e.className="toast-container",document.body.appendChild(e));const s=document.createElement("div");s.className="toast-message",s.innerHTML=`
    <span class="toast-icon">✓</span>
    <span class="toast-text">${t}</span>
  `,e.appendChild(s),requestAnimationFrame(()=>{s.classList.add("active")}),setTimeout(()=>{s.classList.remove("active"),setTimeout(()=>{s.remove()},400)},a)}async function C(t,a="Nomor rekening berhasil disalin"){try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(t);else{const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),e.focus(),e.select(),document.execCommand("copy"),e.remove()}return P(a),!0}catch(e){return console.error("Clipboard copy failed:",e),P("Gagal menyalin. Silakan salin manual."),!1}}function $e(){const t=document.getElementById("section-gift");if(!t)return;t.innerHTML=`
    <div class="gift-container glass-card">
      <div class="section-header">
        <p class="section-tag">TANDA KASIH</p>
        <h2 class="section-title">Wedding Gift</h2>
        <p class="section-desc">
          Doa restu Anda merupakan karunia terindah bagi kami. Bagi Bapak/Ibu/Saudara/i yang ingin memberikan tanda kasih secara digital, dapat melalui rekening berikut:
        </p>
        <div class="section-divider">
          <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
        </div>
      </div>

      <div class="bank-cards-grid">
        <!-- Primary Bank -->
        <div class="bank-card">
          <div class="bank-card-chip"></div>
          <p class="bank-name">${o.gift.bank}</p>
          <p id="acc-num-1" class="bank-acc-num">${o.gift.accountNumber}</p>
          <p class="bank-holder">a.n. ${o.gift.accountName}</p>

          <button id="btn-copy-acc-1" class="btn-copy" aria-label="Salin Nomor Rekening 1">
            <span class="copy-icon">📋</span>
            <span class="copy-text">SALIN NOMOR REKENING</span>
          </button>
        </div>

        <!-- Secondary Bank (if configured) -->
        ${`
          <div class="bank-card bank-card-secondary">
            <div class="bank-card-chip"></div>
            <p class="bank-name">${o.gift.bankSecondary}</p>
            <p id="acc-num-2" class="bank-acc-num">${o.gift.accountNumberSecondary}</p>
            <p class="bank-holder">a.n. ${o.gift.accountNameSecondary}</p>

            <button id="btn-copy-acc-2" class="btn-copy" aria-label="Salin Nomor Rekening 2">
              <span class="copy-icon">📋</span>
              <span class="copy-text">SALIN NOMOR REKENING</span>
            </button>
          </div>
        `}
      </div>
    </div>
  `;const a=document.getElementById("btn-copy-acc-1");a&&a.addEventListener("click",()=>{C(o.gift.accountNumber,"Nomor rekening BSI berhasil disalin")});const e=document.getElementById("btn-copy-acc-2");e&&e.addEventListener("click",()=>{C(o.gift.accountNumberSecondary,"Nomor rekening BCA berhasil disalin")})}function He(){const t=document.getElementById("section-closing");t&&(t.innerHTML=`
    <div class="closing-content glass-card">
      <div class="card-ornament-top">
        <img src="assets/decorative/islamic-star.svg" alt="Islamic Star" class="svg-star" />
      </div>

      <p class="closing-thanks">
        Terima kasih telah menjadi bagian dari hari bahagia dan perjalanan suci kami.
      </p>

      <div class="closing-divider">
        <img src="assets/decorative/gorga-divider.svg" alt="Divider" class="svg-divider" />
      </div>

      <h2 class="closing-couple-names">
        <span>${o.groom.nickname}</span>
        <span class="amp">&amp;</span>
        <span>${o.bride.nickname}</span>
      </h2>

      <p class="closing-family-note">
        Keluarga Besar Siregar &amp; Keluarga Besar Nasution
      </p>

      <p class="closing-love-tag">WITH LOVE &amp; GRATITUDE</p>
      
      <div class="closing-footer-note">
        <p>Janji Suci di Tepian Danau Toba &bull; 2026</p>
      </div>
    </div>
  `)}document.addEventListener("DOMContentLoaded",()=>{be(),fe(),ke(),we(),xe(),Se(),Le(),Me(),Ae(),Ie(),Pe(),Ce(),$e(),He(),me();const t=document.getElementById("webgl-canvas"),a=new ne(t),e=new oe,s=new re(a.scene),i=new le(a.scene),n=new ce(a.scene),r=new de(a.scene),l=new ue(a.scene),d=new pe;a.camera=e.camera,new he({scene:a,camera:e,lighting:s,fog:i,water:n,particles:r,environment:l,parallax:d}).start(),Re(()=>{const h=document.getElementById("preloader");h&&h.classList.add("hidden")})});function Re(t){const a=document.getElementById("preloader-percent");let e=0;const s=setInterval(()=>{e+=Math.floor(Math.random()*15)+5,e>=100?(e=100,a&&(a.textContent="100%"),clearInterval(s),setTimeout(t,400)):a&&(a.textContent=`${e}%`)},50)}

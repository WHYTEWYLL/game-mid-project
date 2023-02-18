(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const l=document.getElementById("canvas"),u=l.getContext("2d"),y={x:l.width/2,y:l.height/2};class c{constructor(e={x:0,y:0}){this.position=e}update(e){}draw(e,t){}keyboardEventDown(e){}keyboardEventUp(e){}}class f extends c{constructor(e={x:10,y:35}){super(e)}draw(e,t){const i=(1/t).toFixed(0);e.font="35px Consolas",e.fillStyle="#000",e.fillText(`FPS: ${i}`,this.position.x,this.position.y)}}class g extends c{constructor(e){super(e.position),this.elapsed=e.elapsed||0}draw(e,t){e.translate(this.position.x,this.position.y);const i=this.elapsed+=t;e.font="35px Consolas",e.fillStyle="#000",e.fillText("Timer",0,0),e.fillText(`${i.toFixed(1)}s`,6,50)}}const x=o=>o.x>50&&o.x<l.width*.2&&o.y>200&&o.y<l.height-100;class b extends c{constructor(e,t=3.5){super(e.position),this.size=e.size,this.initialPosition=e.position,this.image=new Image,this.image.src="cowboy.png",this.speed={x:0,y:0},this.maxSpeed=t,this.ammunition=[]}draw(e,t){e.translate(this.position.x,this.position.y),this.speed.x===0&&this.speed.y===0&&e.drawImage(this.image,10,0,40,30,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h),(this.speed.x!==0||this.speed.y!==0)&&e.drawImage(this.image,70,0,40,30,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h)}update(){let e={x:this.position.x+this.speed.x,y:this.position.y+this.speed.y};x(e)?this.position=e:this.speed={x:0,y:0}}keyboardEventDown(e){switch(e){case"ArrowRight":console.log("right"),this.speed.y=0,this.speed.x=this.maxSpeed;break;case"ArrowLeft":console.log("left"),this.speed.y=0,this.speed.x=-this.maxSpeed;break;case"ArrowUp":console.log("up"),this.speed.x=0,this.speed.y=-this.maxSpeed;break;case"ArrowDown":console.log("down"),this.speed.x=0,this.speed.y=this.maxSpeed;break;case" ":this.speed.y=0,this.speed.x=0,console.log("space"),console.log(this.ammunition),console.log(...this.ammunition)}}keyboardEventUp(e){switch(e){case"ArrowUp":this.speed.y=0;break;case"ArrowDown":this.speed.y=0;break;case"ArrowLeft":this.speed.x=0;break;case"ArrowRight":this.speed.x=0;break}}restart(){this.position=this.initialPosition}}class z extends c{constructor(e){super(e.position),this.player=e.player,this.id=parseInt((Math.random()*1e4).toFixed(0)),this.expired=!1,this.position=this.player.position,this.size={w:100,h:100},this.speed=50,this.image=new Image,this.image.src="bullet.png",console.log("New Ammo")}update(e){let t={x:this.position.x+this.speed*(e+.5),y:this.position.y};this.position=t,this.position.x>1e3&&(this.expired=!0)}draw(e,t){e.translate(this.position.x,this.position.y),e.drawImage(this.image,0,0,2048,1365,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h)}}class k extends c{constructor(e){super(),this.player=e,this.ammo=[]}addBullet(){const e=new z({player:this.player});this.ammo.push(e),console.log(`Created bullet=${e.id}, current bullets ${this.ammo.length}`)}getAmmoActors(){return this.ammo}keyboardEventDown(e){e==" "&&this.addBullet()}update(e){const t=this.ammo.filter(i=>!i.expired);this.ammo=t}}const w=o=>Math.abs(o),A=(o,e)=>Math.hypot(o,e);class E extends c{constructor(e,t){super(e.position),this.to_delete=!1,console.log("New Enemy"),this.size={w:100,h:100},this.image=new Image,this.image.src="monster.png",this.ammo=t,this.to_delete=!1}draw(e){e.translate(this.position.x,this.position.y),e.drawImage(this.image,200,150,800,800,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h)}update(e){const t=this.ammo.getAmmoActors();t.length>0&&t.forEach(i=>{let s=i.position.x+i.size.w/2,n=i.position.y+i.size.h/2,r=this.position.x+this.size.w/2,d=this.position.y+this.size.h/2,a=w(r-s),h=w(d-n),m=A(a,h),p=i.size.w/2+this.size.w/2;m<=p&&(this.to_delete=!0)})}}class v extends c{constructor(e){super(),this.enemies=[];const t=l.width*.2,i=l.width,s=200,n=l.height-100,r=10;for(let d=0;d<r;d++){let a={x:Math.random()*(i-t)+t,y:Math.random()*(n-s)+s};const h=new E({position:a},e);this.enemies.push(h)}}getEnemies(){return this.enemies}update(e){this.enemies=this.enemies.filter(t=>!t.to_delete)}}window.onload=()=>{const o=new f,e=new g({position:{x:y.x-50,y:35}}),t=new b({position:{x:y.x-450,y:y.y},size:{w:150,h:150}}),i=new k(t),s=new v(i),n=[o,t,...t.ammunition,e,s,i];let r=0;const d=a=>{let h=(a-r)/1e3;const m=[...n,...s.getEnemies(),...i.getAmmoActors()];r=a,m.forEach(p=>{p.update(h)}),u.clearRect(0,0,l.width,l.height),m.forEach(p=>{u.save(),p.draw(u,h),u.restore()}),window.requestAnimationFrame(d)};window.requestAnimationFrame(d),document.body.addEventListener("keydown",a=>{n.forEach(h=>{h.keyboardEventDown(a.key)})}),document.body.addEventListener("keyup",a=>{n.forEach(h=>{h.keyboardEventUp(a.key)})})};

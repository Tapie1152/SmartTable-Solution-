/*==============================
SMARTTABLE SOLUTION
==============================*/

// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},1200);

});

// Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

navbar.style.background="rgba(10,10,10,.82)";

navbar.style.border="1px solid rgba(255,215,0,.28)";

navbar.style.boxShadow="0 0 30px rgba(255,215,0,.12)";

}else{

navbar.style.background="rgba(255,255,255,.05)";

navbar.style.boxShadow="none";

}

});

// Counter Animation

const counters=document.querySelectorAll(".counter-card h2");

let started=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".stats-section");

if(!section) return;

if(window.scrollY>section.offsetTop-600 && !started){

started=true;

counters.forEach(counter=>{

const target=Number(counter.innerText);

let count=0;

const speed=target/90;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});

}

});

// Back To Top

const topBtn=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

topBtn.style.display=window.scrollY>500?"flex":"none";

});

topBtn?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Floating Cards

document.querySelectorAll(".floating-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/8;

const y=e.offsetY/8;

card.style.transform=`translate(${x}px,${y}px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translate(0,0)";

});

});

// Button Ripple

document.querySelectorAll(".gold-btn,.demo-btn,.project-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".35s";

btn.style.transform="translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

// AI Demo

const chat=document.querySelector(".chat-message");

const replies=[

"Welcome to SmartTable Solution.",

"Wireless charging is safe and convenient.",

"QR Ordering improves customer experience.",

"Our AI can assist or transfer you to WhatsApp."

];

let i=0;

setInterval(()=>{

if(chat){

chat.innerHTML=replies[i];

i++;

if(i>=replies.length)i=0;

}

},4000);

// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(

".tech-card,.project-card,.counter-card,.contact-item"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(60px)";

el.style.transition=".8s";

observer.observe(el);

});

/*==========================
PREMIUM EFFECTS
==========================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

const particleContainer=document.createElement("div");

particleContainer.className="particles";

document.body.appendChild(particleContainer);

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=8+Math.random()*12+"s";

p.style.animationDelay=Math.random()*8+"s";

particleContainer.appendChild(p);

}

const reveal=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

reveal.observe(sec);

});

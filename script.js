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

/*======================================
SMARTTABLE SOLUTION PREMIUM EFFECTS
======================================*/

// Active Navigation

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Demo Button

const demoButtons=document.querySelectorAll(".project-btn,.gold-btn");

demoButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("🚀 SmartTable Solution Demo Coming Soon!");

});

});

// AI WhatsApp Transfer

document.querySelectorAll(".chat-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

window.open("https://wa.me/27638725468","_blank");

});

});

// Floating Logo Animation

const logo=document.querySelector(".logo");

setInterval(()=>{

if(logo){

logo.animate([

{transform:"translateY(0px)"},

{transform:"translateY(-4px)"},

{transform:"translateY(0px)"}

],{

duration:2500

});

}

},2600);

// Random Glow

setInterval(()=>{

document.querySelectorAll(".tech-card,.project-card,.vision-card").forEach(card=>{

card.style.boxShadow="0 0 "+(20+Math.random()*25)+"px rgba(255,215,0,.18)";

});

},3000);

/*======================================
SMARTTABLE AI CHAT
======================================*/

const aiMessages=[

"👋 Welcome to SmartTable Solution.",

"📱 Scan the QR code to browse the menu.",

"⚡ Wireless charging is available on compatible devices.",

"🤖 Need more help? I'll connect you to WhatsApp."

];

const aiBox=document.querySelector(".chat-message");

let msg=0;

function rotateAI(){

if(!aiBox) return;

aiBox.style.opacity="0";

setTimeout(()=>{

aiBox.innerHTML=aiMessages[msg];

aiBox.style.opacity="1";

msg++;

if(msg>=aiMessages.length){

msg=0;

}

},500);

}

setInterval(rotateAI,5000);

/*======================================
BATTERY PERCENTAGE
======================================*/

const battery=document.querySelector(".battery-fill");

let charge=20;

setInterval(()=>{

if(!battery) return;

charge++;

battery.style.width=charge+"%";

if(charge>=100){

charge=20;

}

},120);

/* =========================================================
   SMARTTABLE ORDERING DEMO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cart = [];

    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartItemsText = document.getElementById("cartItemsText");
    const cartTotal = document.getElementById("cartTotal");

    const placeOrderBtn = document.getElementById("placeOrderBtn");

    const receiptOverlay = document.getElementById("receiptOverlay");
    const receiptItems = document.getElementById("receiptItems");
    const receiptTotal = document.getElementById("receiptTotal");
    const receiptOrderNumber = document.getElementById("receiptOrderNumber");
    const receiptCode = document.getElementById("receiptCode");

    const closeReceipt = document.getElementById("closeReceipt");
    const receiptDone = document.getElementById("receiptDone");

   /* Receipt starts CLOSED */
if(receiptOverlay){
    receiptOverlay.classList.remove("active");
    receiptOverlay.style.display = "none";
}


    /* =====================================================
       ADD ITEMS
    ===================================================== */

    document.querySelectorAll(".add-food").forEach(button => {

        button.addEventListener("click", () => {

            const name = button.dataset.name;
            const price = Number(button.dataset.price);

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {

                existingItem.quantity++;

            } else {

                cart.push({
                    name: name,
                    price: price,
                    quantity: 1
                });

            }

            updateCart();

        });

    });


    /* =====================================================
       UPDATE CART
    ===================================================== */

    function updateCart(){

        cartItems.innerHTML = "";

        if(cart.length === 0){

            cartItems.innerHTML = `
                <p class="empty-cart">
                    Add an item to start your order.
                </p>
            `;

        } else {

            cart.forEach((item, index) => {

                const row = document.createElement("div");

                row.className = "cart-row";

                row.innerHTML = `

                    <div class="cart-row-info">

                        <strong>
                            ${item.name}
                        </strong>

                        <span>
                            R${item.price} × ${item.quantity}
                        </span>

                    </div>

                    <button
                        class="remove-item"
                        data-index="${index}">

                        ×

                    </button>

                `;

                cartItems.appendChild(row);

            });

        }


        const totalQuantity = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        const totalPrice = cart.reduce(
            (total, item) =>
                total + (item.price * item.quantity),
            0
        );


        cartCount.textContent = totalQuantity;

        cartItemsText.textContent =
            totalQuantity === 0
                ? "No items"
                : `${totalQuantity} item${totalQuantity > 1 ? "s" : ""}`;


        cartTotal.textContent = `R${totalPrice}`;


        /* REMOVE ITEM */

        document.querySelectorAll(".remove-item").forEach(button => {

            button.addEventListener("click", () => {

                const index = Number(button.dataset.index);

                if(cart[index].quantity > 1){

                    cart[index].quantity--;

                } else {

                    cart.splice(index, 1);

                }

                updateCart();

            });

        });

    }


    /* =====================================================
       PLACE ORDER
    ===================================================== */

    placeOrderBtn.addEventListener("click", () => {

        if(cart.length === 0){

            alert("Please add at least one item to your order.");

            return;

        }


        const orderNumber =
            "ST" +
            Math.floor(1000 + Math.random() * 9000);


        const totalPrice = cart.reduce(
            (total, item) =>
                total + (item.price * item.quantity),
            0
        );


        /* RECEIPT ITEMS */

        receiptItems.innerHTML = "";


        cart.forEach(item => {

            const receiptItem =
                document.createElement("div");

            receiptItem.className = "receipt-item";

            receiptItem.innerHTML = `

                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    R${item.price * item.quantity}
                </strong>

            `;

            receiptItems.appendChild(receiptItem);

        });


        /* RECEIPT INFORMATION */

        receiptTotal.textContent =
            `R${totalPrice}`;

        receiptOrderNumber.textContent =
            `#${orderNumber}`;

        receiptCode.textContent =
            orderNumber;


        /* SHOW RECEIPT */

        receiptOverlay.classList.add("active");

    });


    /* =====================================================
       CLOSE RECEIPT
    ===================================================== */

    function closeReceiptWindow(){

        receiptOverlay.classList.remove("active");

    }


    closeReceipt.addEventListener(
        "click",
        closeReceiptWindow
    );


    receiptDone.addEventListener(
        "click",
        closeReceiptWindow
    );


    /* =====================================================
       CLICK OUTSIDE RECEIPT
    ===================================================== */

    receiptOverlay.addEventListener("click", event => {

        if(event.target === receiptOverlay){

            closeReceiptWindow();

        }

    });


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener("keydown", event => {

        if(event.key === "Escape"){

            closeReceiptWindow();

        }

    });


    /* =====================================================
       INITIAL CART
    ===================================================== */

    updateCart();

});


/*======================================
CONTACT FORM
======================================*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! We'll contact you shortly.");

form.reset();

});

}

/*======================================
PHONE ROTATION
======================================*/

const phone=document.querySelector(".phone-card");

if(phone){

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/45;

const y=(window.innerHeight/2-e.clientY)/45;

phone.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

}

/*======================================
YEAR
======================================*/

const year=document.querySelector("#year");

if(year){

year.innerHTML=new Date().getFullYear();

}

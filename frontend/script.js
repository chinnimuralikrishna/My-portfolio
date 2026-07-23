/*==========================================================
        PORTFOLIO JAVASCRIPT
        By Chinni Muralikrishna
==========================================================*/

/*==============================
        LOADER
==============================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 600);

});

/*==============================
      TYPING EFFECT
==============================*/

const words = [

    "Full Stack Developer",

    "Angular Developer",

    "Python Developer",

    "Flask Backend Developer",

    "REST API Developer",

    "Software Engineer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        typing.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/*==============================
      SCROLL PROGRESS BAR
==============================*/

window.addEventListener("scroll",()=>{

    let scrollTop =
    document.documentElement.scrollTop;

    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop/height)*100;

    document.getElementById("progressBar").style.width =
    progress + "%";

});

/*==============================
     ACTIVE NAVBAR
==============================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});
/*==========================================================
        ANIMATED COUNTERS
==========================================================*/

const counters = document.querySelectorAll(".hero-stats h1");

const speed = 80;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = parseInt(counter.innerText);

            let count = 0;

            const updateCounter = () => {

                const increment = Math.ceil(target / speed);

                if(count < target){

                    count += increment;

                    counter.innerText = count + "+";

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{threshold:0.5});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*==========================================================
        SCROLL REVEAL
==========================================================*/

const reveals = document.querySelectorAll(

".about-container,.skill-card,.service-card,.project-card,.timeline-item,.certificate-card,.contact-box"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");
            entry.target.classList.add("active");

        }

    });

},{threshold:.2});

reveals.forEach(item=>{

    item.classList.add("fade-up");

    revealObserver.observe(item);

});


/*==========================================================
        SCROLL TO TOP
==========================================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==========================================================
        SMOOTH NAVIGATION
==========================================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const id = link.getAttribute("href");

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/*==========================================================
        NAVBAR SHADOW
==========================================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="rgba(15,23,42,.95)";

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

    }

    else{

        navbar.style.background="rgba(15,23,42,.8)";

        navbar.style.boxShadow="none";

    }

});


/*==========================================================
        PARALLAX HERO
==========================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const value = window.scrollY;

    hero.style.backgroundPositionY = value * 0.4 + "px";

});


/*==========================================================
        RIPPLE BUTTON EFFECT
==========================================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


/*==========================================================
        PAGE READY
==========================================================*/

console.log("Premium Portfolio Loaded Successfully 🚀");
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++) {

        const text =
            chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if(
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ){
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});



const text = `
> Initializing system...
> Loading portfolio...
> Authenticating user...
> Access Granted ✓

`;

const typing = document.getElementById("typing");
const btn = document.getElementById("enterBtn");

let i = 0;

function type() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(type, 40);
    } else {
        btn.style.display = "block";
    }
}

type();

btn.onclick = () => {
    window.location.href = "home.html";
};

// Automatic responsive scale manager
class ScaleManager {
    constructor() {
        this.canvas = document.getElementById("matrix");
        this.container = document.body;
        this.scaleFactors = {
            mobile: 0.8,
            tablet: 0.9,
            desktop: 1
        };
        
        this.init();
        this.setupAutoScale();
    }
    
    init() {
        this.applyScale();
    }
    
    getDeviceType() {
        const width = window.innerWidth;
        if (width < 768) return 'mobile';
        if (width < 1024) return 'tablet';
        return 'desktop';
    }
    
    applyScale() {
        const deviceType = this.getDeviceType();
        const scale = this.scaleFactors[deviceType];
        
        // Scale canvas
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Scale text elements
        const textElements = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, button');
        textElements.forEach(el => {
            if (deviceType === 'mobile') {
                el.style.fontSize = (parseFloat(window.getComputedStyle(el).fontSize) * 0.9) + 'px';
            } else if (deviceType === 'tablet') {
                el.style.fontSize = (parseFloat(window.getComputedStyle(el).fontSize) * 0.95) + 'px';
            }
        });
    }
    
    setupAutoScale() {
        // Auto-scale on window resize
        window.addEventListener('resize', () => {
            this.applyScale();
        });
        
        // Auto-scale on orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => this.applyScale(), 100);
        });
        
        // Auto-scale on page load
        window.addEventListener('load', () => {
            this.applyScale();
        });
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ScaleManager();
    });
} else {
    new ScaleManager();
}
// Start EmailJS
emailjs.init("bm4WdRGvHFXqu3GhT");

document
.getElementById("contact-form")
.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_1lml1ek",
        "template_po6c3sp",
        this
    )

    .then(function(){

        alert("Message Sent Successfully");

        document
        .getElementById("contact-form")
        .reset();

    })

    .catch(function(error){

        alert("Failed To Send Message");

        console.log(error);

    });

});
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
function enterPortfolio() {
    window.location.href = "home.html";
}
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
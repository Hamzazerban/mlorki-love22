const loader = document.getElementById("loader");

window.onload = () => {
setTimeout(() => {
loader.style.display = "none";
}, 1500);
};

// typing effect
const text = "A small story built for someone special...";
let i = 0;
function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type, 50);
}
}
type();

// floating particles
const particles = document.getElementById("particles");

for(let i=0;i<40;i++){
const dot = document.createElement("div");
dot.style.position="absolute";
dot.style.width="4px";
dot.style.height="4px";
dot.style.background="white";
dot.style.borderRadius="50%";
dot.style.top=Math.random()*100+"vh";
dot.style.left=Math.random()*100+"vw";
dot.style.opacity=Math.random();
particles.appendChild(dot);
}

// NO button runaway
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
noBtn.style.position = "absolute";
noBtn.style.top = Math.random()*80 + "vh";
noBtn.style.left = Math.random()*80 + "vw";
});

// YES button confetti
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
for(let i=0;i<150;i++){
const conf = document.createElement("div");
conf.innerHTML = "❤️";
conf.style.position = "absolute";
conf.style.left = Math.random()*100 + "vw";
conf.style.top = "-10px";
conf.style.fontSize = Math.random()*20 + 10 + "px";
conf.style.animation = "fall 3s linear forwards";
document.body.appendChild(conf);

setTimeout(()=>conf.remove(),3000);

}

document.getElementById("finalText").innerText =
"You just made my world brighter ❤️";
});

// confetti animation
const style = document.createElement("style");
style.innerHTML = "@keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }";
document.head.appendChild(style);

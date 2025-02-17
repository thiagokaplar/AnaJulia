let progress = 0;
let currentScreen = 1;

document.getElementById("spaceBtn").addEventListener("click", (event) => handleLove(event.clientX, event.clientY));
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        handleLove(window.innerWidth / 2, window.innerHeight / 2);
    }
});

function handleLove(x, y) {
    if (progress < 100) {
        progress += 10; 
        document.getElementById("progress-bar").style.width = progress + "%";
    }

    if (progress === 100) {
        setTimeout(() => {
            nextScreen();
        }, 500);
    }

    createHeartEffect(x, y);
}

function createHeartEffect(x, y) {
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";
        heart.style.left = `${x + (Math.random() * 30 - 15)}px`;
        heart.style.top = `${y + (Math.random() * 30 - 15)}px`;
        heart.style.fontSize = "16px";
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

function nextScreen() {
    document.getElementById(`screen${currentScreen}`).classList.add("hidden");
    currentScreen++;
    document.getElementById(`screen${currentScreen}`).classList.remove("hidden");
}

function avoidNo() {
    let btnNo = document.getElementById("no");
    btnNo.style.left = `${Math.random() * 90}%`;
    btnNo.style.top = `${Math.random() * 90}%`;
}

function showResponse() {
    alert("Sabia que você diria SIM! 💕🥰");
    nextScreen();
}

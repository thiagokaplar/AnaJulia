let progress = 0;
let currentScreen = 1;

document.getElementById("spaceBtn").addEventListener("click", (event) => handleLove(event.clientX, event.clientY));
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        let screen1 = document.getElementById("screen1");

        // Verifica se screen1 está visível (não tem a classe "hidden")
        if (window.getComputedStyle(screen1).display !== "none") {
            handleLove(window.innerWidth / 2, window.innerHeight / 2);
        }
    }
});



function handleLove(x, y) {
    if (progress < 100) {
        progress += 10; 
        document.getElementById("progress-bar").style.width = progress + "%";
    }

    if (progress === 100) {
      
       // setTimeout(() => {
            nextScreen();
      // }, 500);
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

function confettiEffect() {
    for (let i = 0; i < 100; i++) { // Criar 100 confetes
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);

        let x = Math.random() * window.innerWidth; // Posição horizontal aleatória
        let y = Math.random() * window.innerHeight; // Posição vertical aleatória

        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.backgroundColor = randomColor(); // Cor aleatória

        let angle = Math.random() * 360; // Direção aleatória
        let distance = Math.random() * 300 + 100; // Distância que vai percorrer

        confetti.animate([
            { transform: `translate(0, 0) rotate(${angle}deg)`, opacity: 1 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${angle + 360}deg)`, opacity: 0 }
        ], {
            duration: 1500 + Math.random() * 1000, // Duração aleatória entre 1.5s e 2.5s
            easing: 'ease-out',
            fill: 'forwards'
        });

        setTimeout(() => {
            confetti.remove();
        }, 2500); // Remover os confetes após a animação
    }
}

function randomColor() {
    const colors = ['#ff0000', '#ff7300', '#ffeb00', '#47ff00', '#00ffcc', '#004dff', '#9d00ff', '#ff00b3'];
    return colors[Math.floor(Math.random() * colors.length)];
}


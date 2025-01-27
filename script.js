// Countdown Timer
const countdownDate = new Date("Feb 21, 2025 00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    countdownElement.textContent = `${days} days`;

    if (timeLeft < 0) {
        countdownElement.textContent = "Happy Birthday! 🎉";
    }
}

setInterval(updateCountdown, 1000);

// Play Song on Click
function playSong(songPath) {
    const song = document.getElementById("background-song");
    song.src = songPath;
    song.play();
}

// Flying Hearts Trail Effect
document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.top = `${e.clientY}px`;
    heart.style.left = `${e.clientX}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});

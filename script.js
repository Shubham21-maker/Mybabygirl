// Countdown Timer Calculation
const countdownDate = new Date("Feb 21, 2025 00:00:00").getTime(); // Target date (Prachi's birthday)
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

// Image Modal Functionality
var modal = document.getElementById("myModal");
var images = document.getElementsByClassName("image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Close the Modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

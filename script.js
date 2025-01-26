// Countdown Timer Calculation
const countdownDate = new Date("Feb 21, 2025 00:00:00").getTime(); // Target date (Prachi's birthday)
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = countdownDate - now;

    // Time calculations
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display countdown in "DAYS:HH:MM:SS" format
    countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    // If the countdown reaches zero, display birthday message
    if (timeRemaining < 0) {
        countdownElement.textContent = "It's Your Birthday! 🎉";
    }
}

// Update Countdown every 1 second
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

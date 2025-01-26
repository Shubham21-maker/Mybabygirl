<<<<<<< HEAD
let countdownTimer;

function startCountdown() {
    // Show reasoning text
    document.getElementById('reasoning').style.display = 'block';

    // Show countdown timer
    document.getElementById('countdown').style.display = 'block';
    let countdownValue = 3;

    countdownTimer = setInterval(function() {
        document.getElementById('countdown').textContent = countdownValue;
        countdownValue--;

        // When countdown reaches 0, show the photos
        if (countdownValue < 0) {
            clearInterval(countdownTimer);
            showPhotos();
            document.getElementById('countdown').style.display = 'none'; // Hide countdown
        }
    }, 1000); // Update countdown every second
}

function showPhotos() {
    const photos = document.getElementById('photos');
    photos.style.display = 'block'; // Show the photos container

    // Add the "show" class to each photo for fade-in effect
    const allPhotos = photos.querySelectorAll('.photo');
    allPhotos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add('show');
        }, index * 500); // Delay the appearance of each photo
    });
}
=======
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
>>>>>>> b7dd529 (Initial commit with website files)

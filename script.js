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

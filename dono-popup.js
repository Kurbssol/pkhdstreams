document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById('popup');
    var closeButton = document.querySelector('.close-button');
    var donateButton = document.getElementById('donatePopButton');
    var lastInteractionTime = localStorage.getItem('lastInteractionTime');

    function hidePopup() {
        popup.classList.remove('show');
        // Store the current time as the last interaction time
        localStorage.setItem('lastInteractionTime', Date.now());
    }

    // Check if we should show the popup
    if (!lastInteractionTime || Date.now() > lastInteractionTime + 3 * 3600 * 1000) {
        // Show the popup after 1 second
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);
    }

    closeButton.addEventListener('click', function() {
        hidePopup();
    });

    donateButton.addEventListener('click', function() {
        window.location.href = "https://dd12streams.com/donate";
        hidePopup();
    });
});

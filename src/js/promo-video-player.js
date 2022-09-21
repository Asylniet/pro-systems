window.addEventListener('DOMContentLoaded', () => {

    const playButton = document.querySelector('[data-play-btn]');
    const promoVideo = document.querySelector('[data-promo-video]');
    const popupVideo = document.querySelector('[data-popup-video]');
    const popup = document.querySelector('[data-video-popup]');
    const popupClose = document.querySelector('[data-video-close]');

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
<<<<<<< HEAD
        if (popupVideo.paused == true) {
            // Play the popupVideo
            popupVideo.play();
            playButton.style.visibility = 'hidden';
            playButton.style.opacity = '0';
        } else {
            popupVideo.pause();
        }
=======
    if (popupVideo.paused == true) {
        // Play the popupVideo
        popupVideo.play();
        playButton.style.visibility = 'hidden';
        playButton.style.opacity = '0';
    }
>>>>>>> a2a79a9278b79dbef5dcdfbe6d5c2c856cafa67e
    }, {once : true});

    promoVideo.addEventListener('click', () => {
        popup.classList.add('promo__popup_active');
    });

    popupClose.addEventListener('click', () => {
        popup.classList.remove('promo__popup_active');
    });

})
if (jQuery(".full-slider").length > 0) {
    var splide_workspace_title_img = new Splide('.full-slider', {
        arrows: false,
        rewind: true,
        gap: 20,
        snap: true,
        type: 'fade',
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    // Listen to the 'mounted' event to get the slider instance
    splide_workspace_title_img.on('mounted', function () {
        // Get all video elements within the slider
        var fullvideos = document.querySelectorAll('.full-slider video');

        // Listen to the 'moved' event to play/pause fullvideos on slide change
        splide_workspace_title_img.on('moved', function (newIndex) {
            var currentSlideNumber = newIndex + 1;
            // Select all elements with the class 'splide_current'
            var elementsWithSplideCurrent = document.querySelectorAll('.splide_current');
            // Update the content of each selected element
            elementsWithSplideCurrent.forEach(function (element) {
                if (element) {
                    element.textContent = formatSlideNumber(currentSlideNumber);
                }
            });

            // Pause all fullvideos
            if (fullvideos && fullvideos.length > 0) {
                fullvideos.forEach(function (video, index) {
                    if (index !== newIndex) {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
                // Play the video in the current slide
                fullvideos[newIndex].play();
            }
        });
    });
    splide_workspace_title_img.mount();
    
    // Format slide number with leading zeros
    function formatSlideNumber(number) {
        return number < 10 ? '0' + number : number.toString();
    }
}
const triggerTabList = document.querySelectorAll('.feature-tabs .feature-tab')
triggerTabList.forEach(triggerEl => {

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        splide_workspace_title_img.destroy();
        var splide = new Splide('.full-slider').mount();
    })
})
jQuery(document).ready(function($) {
    let flag = 0;

    // Check if the popup has been shown before and if it has been 24 hours since the last show
    var popupShownCount = parseInt(localStorage.getItem('ICWpopupShownCount')) || 0;
    var lastPopupTime = localStorage.getItem('ICWlastPopupTime');
    var currentTime = new Date().getTime();

    // Check if 24 hours have passed and the popup has not been shown three times
    if ((currentTime - lastPopupTime) >= 24 * 60 * 60 * 1000 && popupShownCount < 1000) {
        // Open the popup after 60 seconds
        setTimeout(function() {
            if (flag === 0) {
                showPopup();
                flag = 1;
                // Update the lastPopupTime and popupShownCount in localStorage
                localStorage.setItem('ICWlastPopupTime', currentTime);
                localStorage.setItem('ICWpopupShownCount', popupShownCount);
            }
        }, 60000);
    }
    /*
    // Show the popup when the user scrolls 25% down the page
    $(window).scroll(function() {
        var scrollPercentage = (($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
        if (scrollPercentage > 25 && flag === 0) {
            if (flag === 0) {
                showPopup();
                flag = 1;
            }
        }
    });
    */

    // Close button click event
    $('#closeBtn').on('click', function() {
        popupShownCount++;
        localStorage.setItem('ICWpopupShownCount', popupShownCount);
    });

    $('#closeBg').on('click', function() {
        icwCloseModalBg();
        popupShownCount++;
        localStorage.setItem('ICWpopupShownCount', popupShownCount);
    });

    // Function to show the popup
    function showPopup() {
        $('.onLoadShowBtn').trigger("click");
    }

    function icwCloseModalBg() {
        document.querySelector('body').classList.remove('overflow-hidden');
        document.querySelector('.icw--modal-wrapper').style.cssText = `-webkit-animation:gzoomOut .5s ease;animation:gzoomOut .5s ease;`;
        setTimeout(function () {
            document.getElementById('icwLoadModal').classList.remove("show");
        }, 100);
    }
});
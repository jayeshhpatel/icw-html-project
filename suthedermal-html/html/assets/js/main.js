jQuery(document).ready(function($) {

    if ($('[data-bs-toggle=tooltip]').length) {
        $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });


    $('.btn-toggle-menu,.bg-overly').on('click', function (e) {
        $('.bg-overly,.btn-toggle-menu,body,.main-header').toggleClass('is-open');
        e.preventDefault();
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 10) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 10) {
            $(".main-header").addClass("fixed-header");
            } else {
            $(".main-header").removeClass("fixed-header");
            }
        });
    }
});
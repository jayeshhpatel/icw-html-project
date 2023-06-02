var $ = jQuery.noConflict();

jQuery(document).ready(function($) {

    $('[data-bs-toggle="tooltip"]').tooltip();

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 100) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                $(".main-header").addClass("fixed-header");
            } else {
                $(".main-header").removeClass("fixed-header");
            }
        });
    }
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            slidesToShow: 2,
            infinite: true,
            accessibility: false,
            responsive: [
                {
                breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots:true,
                    }
                }
            ]
        });
    };
})

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
                breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };
    if ($('.team-slider').length) {
        $('.team-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            slidesToShow: 4,
            infinite: true,
            accessibility: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };
    $(".collapse-item .collapse-title").click(function () {
        if ($(this).closest(".collapse-item").hasClass("is-open")) {
           $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
        } else {
           $(".collapse-item").removeClass("is-open");
           $(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
           $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown();
        }
        return false;
    });
})

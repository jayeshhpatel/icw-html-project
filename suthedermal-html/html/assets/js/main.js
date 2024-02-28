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
    if ($('.testimonials-splide').length) {
        var testimonialSplide = new Splide( '.testimonials-splide', {
            pagination: false,
            arrows: false,
            perPage: 3,
            perMove: 1,
            type    : 'loop',
            breakpoints: {
                992: {
                    perPage: 2,
                },
                575: {
                    perPage: 1,
                },
            }
        });
        testimonialSplide.mount();
    }
    if ($('.product-device').length) { 
        $(".product-device span").on({
            mouseenter: function () {
                var id = $(this).attr('id');
                console.log(id);
                $('.info-card[data-id='+ id +']').addClass('on-hover');
                $('.info-card').addClass('leave-hover');
            },
            mouseleave: function () {
                $('.info-card').removeClass('on-hover');
                $('.info-card').removeClass('leave-hover');
            }
        });
    }
});
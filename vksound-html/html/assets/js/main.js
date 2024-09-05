/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $('body').tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 100) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                $('.main-header').addClass('fixed-header');
            } else {
                $('.main-header').removeClass('fixed-header');
            }
        });
    }
    if ($('li.menu-item-has-children').length) {
        $('li.menu-item-has-children > a').after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children > .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().toggleClass('active');
        $(this).siblings('.sub-menu').first().slideToggle(300);
    });

    $(".counter").each(function () {
        var $this = $(this),
            countTo = $this.attr("data-countto");
            countDuration = parseInt($this.attr("data-duration"));
        $({ counter: $this.find('span').text() }).animate({
            counter: countTo
        }, {
            duration: countDuration,
            easing: "linear",
            step: function () {
                $this.find('span').text(Math.floor(this.counter));
            },
            complete: function () {
                $this.find('span').text(this.counter);
            }
        });
     });
});
if ($('.auto-width-slider').length) {
    var autoWidthSplide = new Splide( '.auto-width-slider', {
        type: 'loop',
        height: '400px',
        autoWidth: true,
        arrows: false,
        gap: '20px',
        classes: {
            pagination: 'splide__pagination icw-slide-dots',
        },
    });

    autoWidthSplide.mount();
}
if ($('.single-slider').length) {
    var singleSplide = new Splide( '.single-slider', {
        type: 'slide',
        arrows: false,
        classes: {
            pagination: 'splide__pagination icw-slide-dots',
        },
    });
    singleSplide.mount();
}
if ($('.gallery-slider').length) {
    var gallerySplide = new Splide( '.gallery-slider', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoplay: true,
        gap: '30px',
        pagination: false,
        breakpoints: {
            992: {
                perPage: 3,
            },
            767: {
                perPage: 2,
                gap: '20px',
            },
            575: {
                perPage: 1.5,
            },
        }
    });
    gallerySplide.mount();
}
var glightbox = GLightbox({
    selector: ".glightbox",
});
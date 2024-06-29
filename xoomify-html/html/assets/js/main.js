/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
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
    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
        $("li.menu-item-has-children").hover(
            function () {
              $('.bg-overlay').addClass("is-hover");
            },
            function () {
              $('.bg-overlay').removeClass("is-hover");
            }
        );
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    $('.menu-collapse .menu-title').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.menu-list-block').toggle(300);
    });
});
if($('.hero-slider').length){
    var herosplide = new Splide('.hero-slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        autoplay: true,
        speed: 600,
        gap: 30,
        omitEnd: true,
        classes: { pagination: 'icw-slide-dots', },
        breakpoints: {
            1400: {
                gap: 10,
                perPage: 2.5,
            },
            575: {
                gap: 10,
                perPage: 1.5,
            },
        }
    });
    herosplide.mount();
}


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
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    $('.menu-list-block .title').on('click',function(event){
        event.preventDefault();
        $(this).parent('.menu-list-block').toggleClass('is-active');
        // $(this).parent().find('.menu-list-block').toggle(300);
    });
    $('.tab-nav li a').on('click', function(){
        var target = $(this).attr('href');
        $(this).parents('.tab-nav').find('a').removeClass('active');
        $(this).addClass('active');
        $(target).fadeIn('fast').siblings(".tab-content-block").hide();
        return false;
    });
});
if($('.hero-slider').length){
    var herosplide = new Splide('.hero-slider', {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        arrows: false,
        classes: { pagination: 'icw-slide-dots', }
    });
    herosplide.mount();
}
// var splideOptions = {
//     perPage: 5,
//     autoWidth: true,
//     pagination: false,
//     arrows: false,
//     gap: 60,
//     type: 'loop',
//     focus: 'center',
//     autoScroll: {
//         speed: 1
//     },
//     breakpoints: {
//         767: {
//             perPage: 3,
//             arrows: false,
//             gap: 30,
//         },
//     },
// };
// if (jQuery('.logo-slider').length) {
//     new Splide('.logo-slider', splideOptions).mount(window.splide.Extensions);
// }
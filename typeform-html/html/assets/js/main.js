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
        $('.menu-item-has-children').hover(
            function(){               
                var overlay_height = $(this).find('.sub-menu').outerHeight();
                $(this).parents('.main-header').find('.megamenu-overlay').addClass('is-active');
                $('.megamenu-overlay').height( overlay_height + $('.main-header').height());
            },
            function () {
                $(this).parents('.main-header').find('.megamenu-overlay').removeClass('is-active');
                $('.megamenu-overlay').height('88');
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
});
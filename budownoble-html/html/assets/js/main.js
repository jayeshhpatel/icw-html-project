/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $('body').tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.navbar-toggler').on('click', function (e) {
        $('.toggle-sidebar, .megamenu-overlay, .main-header,.menu-list').toggleClass('is-visible');
        e.preventDefault();
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 150) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.main-header').addClass('fixed-header');                
                if ($('.main-header').hasClass('fixed-header')) {
                    // Check if the overlay has 'is-active' class
                    if ($('.megamenu-overlay').hasClass('is-active')) {
                        // Set height based on overlay_height (submenu height + header height)
                        $('.megamenu-overlay').height(overlay_height + $('.main-header').height());
                    } else {
                        $('.megamenu-overlay').height(100);
                    }
                }
            } else {
                // Remove 'fixed-header' class and set overlay height to 0
                $('.main-header').removeClass('fixed-header');
                if ($('.megamenu-overlay').hasClass('is-active')) {
                    $('.megamenu-overlay').height(overlay_height + $('.main-header').height());
                } else {
                    $('.megamenu-overlay').height(0);
                }
            }
        });
        $(window).on('resize', function () {
            if ($(window).width() > 992) {
                $('.mega-menu').hover(
                    function() {
                        overlay_height = $(this).find('.sub-menu').outerHeight()
                        updateMegaMenuOverlay(this, true);
                    },
                    function() {
                        updateMegaMenuOverlay(this, false);
                    }
                );
            }
        });
        if ($(window).width() > 992) {
            $('.mega-menu').hover(
                function() {
                    overlay_height = $(this).find('.sub-menu').outerHeight()
                    updateMegaMenuOverlay(this, true);
                },
                function() {
                    updateMegaMenuOverlay(this, false);
                }
            );
        }
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
var overlay_height = 0;
function updateMegaMenuOverlay(element, isHover) {
    var overlay = $(element).parents('.main-header').find('.megamenu-overlay');
    
    if (isHover) {
        overlay.addClass('is-active');
        overlay.height(overlay_height + $('.main-header').height());
    } else {
        overlay.removeClass('is-active');
        if ($(element).parents('.main-header').hasClass('fixed-header')) {
            overlay.height(100);
        } else {
            overlay.height(0);
        }
    }
}
function adjustMegamenuHeight() {
    if ($(window).width() > 1400) {
        $('.megamenu-overlay').height(180);
    } else if ($(window).width() > 1300) {
        $('.megamenu-overlay').height(160);
    } else {
        $('.megamenu-overlay').height(140);
    }
}
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
});
var isHidden = true;
$('.is-show-all').on('click', function(e) {
   e.preventDefault();
   $('.is-xs-none').toggleClass('is-show');
   isHidden = !isHidden;
   // Update button text based on the boolean value
   $(this).find('.is-text').text(isHidden ? "Show All" : "Hide All");
   
   if(isHidden){
    var offset_target = $(this).parents('.main-section').offset().top;
    $('html, body').animate({ 
        scrollTop: offset_target
    }, 50);
   } 
});
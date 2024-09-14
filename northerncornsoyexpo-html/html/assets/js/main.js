/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $('body').tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }
    
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

    $(".collapse-item .collapse-title").click(function () {
        if ($(this).closest(".collapse-item").hasClass("is-open")) {
           $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).hide("fast");
        } else {
           $(".collapse-item").removeClass("is-open");
           $(".collapse-item").find(".collapse-body").stop(true,true).hide();
           $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown("fast");
  
           var collapsetop = $(this);
              $('html,body').animate({
              scrollTop: collapsetop.offset().top-150
          }, 10);
        }
        return false;
    });
});
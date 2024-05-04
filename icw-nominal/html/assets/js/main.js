/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
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

    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    $('.header-note .close-btn').on('click',function(event){
        event.preventDefault();
        $(this).parents('.header-note').addClass('d-none');
        $(this).parents('.main-header').removeClass('is-note-show');
    });

    $(function(){
        var lastScrollTop = 0, delta = 15;
        $(window).scroll(function(event){
            var st = $(this).scrollTop();           
            if(Math.abs(lastScrollTop - st) <= delta) {            
                return;
            }
            if ((st > lastScrollTop) && (lastScrollTop>0)) {
                // downscroll code
                $('.main-header .navbar').css('transform','translateY(-100px)');    
            } else {
                $('.main-header .navbar').css('transform','translateY(0)');
            }
           lastScrollTop = st;
        });
    });
});
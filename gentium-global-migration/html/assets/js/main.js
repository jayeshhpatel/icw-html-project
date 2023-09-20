/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
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

    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
        $(this).parent().siblings().find('.sub-menu').hide(200);
        
        //Hide menu when clicked outside
        $(this).parent().find('.sub-menu').parent().mouseleave(function(){ 
            var thisUI = $(this);
            $('html').click(function(){
                thisUI.children(".sub-menu").hide();
                thisUI.children(".arrow").removeClass('is-active');
                $('html').unbind('click');
            });
        });
    });

    $(".collapse-item .collapse-title").click(function () {
        if ($(this).closest(".collapse-item").hasClass("is-open")) {
           $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp("fast");
        } else {
           $(".collapse-item").removeClass("is-open");
           $(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
           $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown("fast");
        }
        return false;
    });

    if ($('.customer-review-slider').length) { 
        var splide = new Splide( '.customer-review-slider', {
            perPage: 3,
            perMove: 1,
            gap: 30,
            breakpoints: {
                992: {
                    perPage: 2,
                },
                767: {
                    perPage: 1,
                },
                480: {
                    perPage: 1,
                },
            },
        });        
        splide.mount();
    }
    if ($('.team-slider').length) { 
        var splide = new Splide( '.team-slider', {
            perPage: 4,
            perMove: 1,
            gap: 30,
            classes: {
                pagination: 'splide__pagination dark-pagination',
            },
            breakpoints: {
                1200: {
                    perPage: 3,
                    autoWidth: true,
                },
                767: {
                    perPage: 2,
                    gap: 20,
                    autoWidth: true,
                },
                480: {
                    perPage: 1,
                },
            },
        });        
        splide.mount();
    }
});
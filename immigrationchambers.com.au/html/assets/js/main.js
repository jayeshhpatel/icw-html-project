var $ = jQuery.noConflict();

jQuery(document).ready(function($) {

    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="dropdown"]').dropdown();

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
    
    jQuery('body').bind('click', function(e) {
        if(jQuery(e.target).closest('.navbar').length == 0) {
            // click happened outside of .navbar, so hide
            var opened = jQuery('.country-dropdown').hasClass('show');
            if ( opened === true ) {
                jQuery('.country-dropdown').removeClass('show');
            } 
        }
    });
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
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'custom-animated', // default
        offset:      300,          // default
        mobile:       true,       // default
        live:         true,       // default
        callback:     function(box) {
            $( '.square-animate' ).addClass( 'square-initiate-animation' );
        }
    });
    wow.init();
    if ($('.testimonial-slider').length) {
        $('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            slidesToShow: 2,
            infinite: true,
            accessibility: false,
            responsive: [
                {
                breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };
    if ($('.team-slider').length) {
        $('.team-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            slidesToShow: 3,
            infinite: true,
            accessibility: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    };
    $(".collapse-item .collapse-title").click(function () {
        if ($(this).closest(".collapse-item").hasClass("is-open")) {
           $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
        } else {
           $(".collapse-item").removeClass("is-open");
           $(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
           $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
           $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown();
        }
        return false;
    });
})

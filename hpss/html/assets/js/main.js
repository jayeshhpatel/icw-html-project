/* Moblie Menu */
var $ = jQuery.noConflict();
jQuery(document).ready(function($) {

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if(windowWidth > 991){
            $('.bg-overly,.toggle-sidebar,body,.main-header').removeClass('is-visible');
        }
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
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().find('.sub-menu').first().toggle(300);
        
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
    if ($('[data-bs-toggle=tooltip]').length) {
        $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    var $grid = $(".masonry-grid-layout").masonry({
        itemSelector: ".masonry-card",
        columnWidth: ".masonry-card",
        gutter: 30,
        fitWidth: true
    });
});

if ($('.event-slider').length) {
    var eventSlider = new Splide( '.event-slider', {
        perPage: 2,
        perMove: 1,
        arrowPath: 'M11 2L28.949 19.9998L11 38',        
        pagination : false,
        gap    : '30px',
        padding: '1rem',
        snap   : true,
        breakpoints: {
            767: {
                perPage: 1,
                arrows: false,
                pagination: true,
                padding: '0',
                gap    : '15px',
            },
        },
    });  
    eventSlider.mount();
 };


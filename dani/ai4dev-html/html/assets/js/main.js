/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="popover"]').popover();
    $('[data-bs-toggle="tooltip"]').tooltip({ boundary: 'window' });

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
    if ($('.star-animation').length) {
        $(".star-animation.is-hover").hover(
            function () {
                $(this).removeClass("is-star-leave");
                $(this).addClass("is-star-hover");
            },
            function () {
                $(this).removeClass("is-star-hover");
                $(this).addClass("is-star-leave");
                setTimeout(() => {
                    $(this).removeClass("is-star-leave");
                }, 2000);
            }
        );
    }
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

if ($('.topic_splide').length) {
    var splide = new Splide( '.topic_splide', {
        type   : 'slide',
        perPage: 3,
        perMove: 1,
        gap: '48px',
        pagination: false,
        classes: {
            arrows: 'icw-splide-arrows',
        },
        breakpoints: {
            1200: {
                gap: '24px',
            },
            992: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    } );
    
    splide.mount();
}
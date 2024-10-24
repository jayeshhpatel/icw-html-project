/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('.navbar-toggler').on('click', function (e) {
        $('.navbar-toggler,body,.main-header').toggleClass('is-visible');
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
    if ($('.tab-block').length) {
        $('.nav-tabs .tab-link').on('click', function(){
            // get the data attribute
            var tab_id = $(this).attr('data-tab');
            // remove the default classes
            $('.nav-tabs .tab-link').removeClass('active');
            $('.tab-pane').hide();
            // add new classes on mouse click
            $(this).addClass('active');
            $('#'+tab_id).fadeIn();
        });
    }
});
if ($('.hero-splide-slider').length) {
    var heroSplide = new Splide('.hero-splide-slider', {
        type: 'slide',
        arrows: false,
        classes: {
            pagination: 'splide__pagination icw-pagination',
        },
    });
    heroSplide.mount();
}
if ($('.testimonials-splide-slider').length) {
    var testimonialSplide = new Splide('.testimonials-splide-slider', {
        type: 'fade',
        arrows: true,
        classes: {
            pagination: 'splide__pagination icw-pagination is-dark',
            arrows: 'splide__arrows icw-arrows'
        },
        breakpoints: {
            767: {
                pagination: false,
            },
    }
    });
    testimonialSplide.mount();
}
if ($('.use-case-splide-slider').length) {
    var useCaseSplide = new Splide('.use-case-splide-slider', {
        type: 'fade',
        arrows: false,
        classes: {
            pagination: 'splide__pagination icw-pagination is-dark',
            arrows: 'splide__arrows icw-arrows'
        },
    });
    useCaseSplide.mount();
}

if ($('.benefits-splide-slider').length) {
    new Splide('.benefits-splide-slider', {
        type: 'loop', 
        perPage: 1.2, 
        gap: '20px',
        arrows: false,
        autoplay: true,
        classes: {
            pagination: 'splide__pagination icw-pagination is-dark',
        },
        mediaQuery: 'min',
        breakpoints: {
                767: {
                    destroy: true,
                },
        }
    }).mount();
}

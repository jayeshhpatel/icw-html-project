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
    if ($('.collapse-block').length) {
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
                    scrollTop: collapsetop.offset().top-115
                }, 10);
            }
            return false;
        });
    }
    $(window).on('scroll', updateProgressBars);
    $('.progress-section').on('scroll', updateProgressBars);
});
function updateProgressBars() {
    var scrollPosition = $(window).scrollTop();

    // Loop through each section and check if it's in the viewport
    $('.progress-content').each(function (index) {
        var sectionTop = $(this).offset().top - $(window).height() / 2 + 50; // Mid-point trigger
        var sectionHeight = $(this).outerHeight();
        var sectionBottom = sectionTop + sectionHeight;
        var progressBarId = '#progress-bar-' + (index + 1); // Target progress bar by ID

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Animate progress bar height to 100%
            $(progressBarId).css('height', '100%');
        } else if (scrollPosition <= sectionTop) {
            // Reset progress bar height when section is not in view
            $(progressBarId).css('height', '0');
        }
    });
}
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
        },
    });
    useCaseSplide.mount();
}
if ($('.metrics-splide-slider').length) {
    var metricsSplide = new Splide('.metrics-splide-slider', {
        type: 'slide',
        arrows: false,
        autoWidth: true,
        perMove: 1,
        gap: '40px',
        classes: {
            pagination: 'splide__pagination icw-pagination',
        },
    });
    metricsSplide.mount();
}

if ($('.benefits-splide-slider').length) {
    new Splide('.benefits-splide-slider', {
        type: 'slide', 
        perPage: 1, 
        gap: '20px',
        arrows: false,
        autoplay: true,
        autoWidth: true,
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

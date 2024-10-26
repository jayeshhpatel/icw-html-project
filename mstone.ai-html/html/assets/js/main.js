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
    $(window).on('scroll', function() {
        updateProgressBars();

        if ($('.main-footer').length) {
            var is_footer = $('.main-footer');
            var window_offset = is_footer.offset().top - $(window).scrollTop() - is_footer.outerHeight(); 
                
            if ( window_offset < 100 ) {
                is_footer.find('.site-logo-block').addClass('is-animate');
            } else {
                is_footer.find('.site-logo-block').removeClass('is-animate');
            }
        }
    });
    $('.progress-section').on('scroll', updateProgressBars);
});
updateProgressBars()
function updateProgressBars() {
    var scrollPosition = $(window).scrollTop();
    // Loop through each section and check if it's in the viewport
    $('.progress-content-step').each(function (index) {
        var sectionTop = $(this).offset().top - $(window).height() / 2; // Mid-point trigger
        var sectionHeight = $(this).outerHeight();
        var sectionBottom = sectionTop + sectionHeight;
        var progressBarId = $(this).attr('id'); // Target progress bar by ID
        
        var sectionAnimateContentTop = $(this).offset().top - $(window).height() / 1.1;
        var sectionAnimateContentBottom = sectionAnimateContentTop + sectionHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Animate progress bar height to 100%
            $('.image-block').find('.progress-content-img').removeClass('is-active');
            $('[data-progress-id="' + progressBarId + '"]').css('height', '100%');
            $('.image-block').find('[data-id="' + progressBarId + '"]').addClass('is-active');
        } else if (scrollPosition >= sectionAnimateContentTop && scrollPosition < sectionAnimateContentBottom) {
            $('.progress-content-wrapper').find('[id="' + progressBarId + '"]').addClass('is-active');
            
        } else if (scrollPosition <= sectionTop) {
            // Reset progress bar height when section is not in view
            $('[data-progress-id="' + progressBarId + '"]').css('height', '0');
            
        } 
    });
}
if ($('.hero-splide-slider').length) {
    var heroSplide = new Splide('.hero-splide-slider', {
        type: 'slide',
        arrows: false,
        gap: '15px',
        classes: {
            pagination: 'splide__pagination icw-pagination',
        },
    });
    heroSplide.mount();
}
if ($('.testimonials-splide-slider').length) {
    var testimonialSplide = new Splide('.testimonials-splide-slider', {
        type: 'slide',
        arrows: true,
        gap: 30,
        classes: {
            pagination: 'splide__pagination icw-pagination is-dark',
            arrows: 'splide__arrows icw-arrows'
        },
        breakpoints: {
            992: {
                gap: 0,
            },
            767: {
                pagination: false,
                gap: 0,
            },
        }
    });
    testimonialSplide.mount();
}
if ($('.stories-splide-slider').length) {
    var storiesSplide = new Splide('.stories-splide-slider', {
        type: 'slide',
        arrows: false,
        classes: {
            pagination: 'splide__pagination icw-pagination is-dark',
        },
    });
    storiesSplide.mount();
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
if ($('.thumbnail-slider-block').length) {
    var main = new Splide( '.use-case-splide-slider', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
    } );
    
    var thumbnails = new Splide( '.useCase-thumbnail-splide-slider', {       
        gap         : 8,
        rewind      : true,
        pagination  : false,
        arrows  : false,
        isNavigation: true,
        autoWidth: true,
    } );
    
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
}
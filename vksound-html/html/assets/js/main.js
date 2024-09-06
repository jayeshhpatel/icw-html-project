/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $('body').tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });

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
    if ($('.counter').length) {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the element is visible
        };

        // Create a new observer
        let observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let $this = $(entry.target);
                    var countTo = $this.attr("data-countto");
                    var countDuration = parseInt($this.attr("data-duration"));

                    // Trigger counter animation
                    $({ counter: $this.find('span').text() }).animate({
                        counter: countTo
                    }, {
                        duration: countDuration,
                        easing: "linear",
                        step: function () {
                            $this.find('span').text(Math.floor(this.counter));
                        },
                        complete: function () {
                            $this.find('span').text(this.counter);
                        }
                    });

                    // Stop observing once the animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Target each element with the class .counter
        $('.counter').each(function () {
            observer.observe(this);
        });
    }
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
if ($('.auto-width-slider').length) {
    var autoWidthSplide = new Splide( '.auto-width-slider', {
        type: 'loop',
        height: '400px',
        autoWidth: true,
        arrows: false,
        gap: '20px',
        classes: {
            pagination: 'splide__pagination icw-slide-dots',
        },
        breakpoints: {
            992: {               
                height: '300px',
            },
        }
    });

    autoWidthSplide.mount();
}
if ($('.single-slider').length) {
    var singleSplide = new Splide( '.single-slider', {
        type: 'slide',
        arrows: false,
        classes: {
            pagination: 'splide__pagination icw-slide-dots',
        }, 
        breakpoints: {
            992: {               
                perPage: 1.5,
                gap: '20px',
            },
            767: {               
                perPage: 1,
                gap: '20px',
            },
        }
    });
    singleSplide.mount();
}
if ($('.card-img-slider').length) {
    var cardImgSplide = new Splide( '.card-img-slider', {
        type: 'slide',
        arrows: true,
        classes: {
            pagination: 'splide__pagination icw-slide-dots',
        }, 
    });
    cardImgSplide.mount();
}
if ($('.gallery-slider').length) {
    var gallerySplide = new Splide( '.gallery-slider', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        arrows: false,
        autoplay: true,
        gap: '30px',
        pagination: false,
        breakpoints: {
            992: {
                perPage: 3,
            },
            767: {
                perPage: 2,
                gap: '20px',
            },
            575: {
                perPage: 1.5,
            },
        }
    });
    gallerySplide.mount();
}
var glightbox = GLightbox({
    selector: ".glightbox",
});
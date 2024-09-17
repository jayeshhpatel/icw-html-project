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
});
if ($('.presentations-slider').length) {   
    const presentationsSplide = new Splide( '.presentations-slider', {
        type: 'slide',
        arrows: true,
        classes: {
            pagination: 'splide__pagination presentations-year-pagination',
        },
        breakpoints: {
            1200: {
                arrows: false,
            },
        }
    });
    presentationsSplide.on( 'pagination:mounted', function ( data ) {
        var paginationItems = document.querySelectorAll('.splide__pagination__page');
        var slides = document.querySelectorAll('.splide__slide');
        paginationItems.forEach(function (paginationItem, index) {
            var dataNumber = slides[index].getAttribute('data-number'); // Get data-number from the slide
            paginationItem.textContent = dataNumber; // Set the button text to the data-number
        });
    });
    presentationsSplide.mount();
}
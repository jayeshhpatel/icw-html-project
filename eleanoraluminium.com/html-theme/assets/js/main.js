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

    if ($('.collapse-item').length) {
        $(document).on("click", ".collapse-item .collapse-title", function () {
            var $this = $(this).closest(".collapse-item");
            
            if ($this.hasClass("is-open")) {
                $this.removeClass("is-open");
                $this.find(".collapse-body").stop(true, true).slideUp(300); // Slide up with a smooth animation (300ms)
            } else {
                $(".collapse-item").removeClass("is-open");
                $(".collapse-item").find(".collapse-body").stop(true, true).slideUp(300); // Slide up other items smoothly
                $this.addClass("is-open");
                $this.find(".collapse-body").stop(true, true).slideDown(300); // Slide down with a smooth animation (300ms)
                
                // var collapsetop = $this.find(".collapse-title");
                // $('html, body').animate({
                //     scrollTop: collapsetop.offset().top - 115
                // }, 300); // Smooth scroll to the item
            }
            return false;
        });
    }

    const $logoBlock = $('.site-logo-block');
    if ($logoBlock.length) {
        $(window).on('scroll', function() {
            const logoBlockTop = $logoBlock.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            // Toggle class based on footer visibility
            $logoBlock.toggleClass('is-animate', windowBottom >= logoBlockTop);
        });
    }
});


// Splide Slider
// if ($('.splide:not(.splide-js)').length) {
//     $('.splide:not(.splide-js)').each(function() {
//         new Splide(this).mount();
//         $(this).addClass('icw_splide-with-data'); // Mark as initialized
//     });
// }

// Counter
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
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Target each element with the class .counter
    $('.counter').each(function () {
        observer.observe(this);    
    });
    
}

if ($('.hero-splide-slider').length) {
    var heroSplide = new Splide( '.hero-splide-slider', {
        type: 'loop',           // Loop mode
        perPage: 1,             // Number of items per page
        pagination: true,       // Enable dots/pagination
        arrows: false,          // Disable navigation arrows
        autoplay: true,         // Enable autoplay
        interval: 5000,         // Autoplay interval (5000ms)
        speed: 1200,            // Transition speed
        pauseOnHover: true,     // Pause autoplay on hover
        classes: {
            pagination: 'splide__pagination icw-pagination', // Match Owl Carousel dots class
        },
    } );

    function updateProgressBar(splide) {
        let totalSlides = splide.length; // Total number of slides
        let currentIndex = splide.index + 1; // Current slide (1-based index)
        let progressPercentage = (currentIndex / totalSlides) * 100; // Calculate progress percentage
    
        // Update the numbers
        document.querySelector('.splide-current-slide').textContent =
            currentIndex < 10 ? '0' + currentIndex : currentIndex;
        document.querySelector('.splide-total-slide').textContent =
            totalSlides < 10 ? '0' + totalSlides : totalSlides;
    
        // Update the progress bar width
        document.querySelector('.splide-progress-bar .progress').style.width =
            progressPercentage + '%';
    }
    
    // Attach Splide event listeners
    heroSplide.on('mounted move', function () {
        updateProgressBar(heroSplide); // Update progress bar on slide change
    });
    

    // Mount Splide
    heroSplide.mount();
}
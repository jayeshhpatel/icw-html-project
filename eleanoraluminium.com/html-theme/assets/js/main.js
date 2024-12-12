/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();
    $('[data-bs-toggle="popover"]').popover();

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
        if ($(window).width() > 1080) {
            $('.mega-menu').hover(
                function () {
                    $('.bg-overly').addClass('is-visible');
                },
                function () {
                    $('.bg-overly').removeClass('is-visible');
                }
            );
        }
    }

    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
    }
    
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');        
        $(this).parent().find('.sub-menu').first().slideToggle(300);       
    });

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
    

    if ($(".icw-progress-goto").length > 0) {
        var progressPath = document.querySelector('.icw-progress-goto path');
        var pathLength = progressPath.getTotalLength();
    
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
    
        updateProgress();
        $(window).scroll(updateProgress);
    
        var offset = 200;
        var duration = 550;
    
        jQuery(window).on('scroll', function() {
            if(jQuery(this).scrollTop() > offset) {
                jQuery('.icw-progress-goto').addClass('active-progress');
            } else {
                jQuery('.icw-progress-goto').removeClass('active-progress');
            }
        });
    
        jQuery('.icw-progress-goto').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
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
    $('.category-card').hover(
        function () {
            let contentHeight = $(this).find('.sort-info').prop('scrollHeight');
            $(this).find('.sort-info').css('height', contentHeight + 'px');
        },
        function () {
            $(this).find('.sort-info').css('height', '0');
        }
    );
    
    if ($('.tab-block').length) {

        // Handle click and hover events
        $('.nav-tabs .tab-link').on('click mouseenter', function () {
            activateTab(this);
        });
    }
});

function activateTab(tab) {
    var tab_id = $(tab).attr('data-tab');
    // Remove active classes and hide all tabs
    $('.nav-tabs .tab-link').removeClass('active');
    $('.tab-pane').hide();
    // Add active class and show the selected tab
    $(tab).addClass('active');
    $('#' + tab_id).fadeIn();
}

$(window).resize(function(){ 
    if ($('.main-header').length) {
        if ($(window).width() > 1080) {
            $('.mega-menu').hover(
                function () {
                    $('.bg-overly').addClass('is-visible');
                },
                function () {
                    $('.bg-overly').removeClass('is-visible');
                }
            );
        }
    }
})

// Step Progress Section
if ($('.progress-section').length) {
    updateProgressBars();
}
function updateProgressBars() {
    var scrollPosition = $(window).scrollTop();
    // Loop through each section and check if it's in the viewport
    $('.progress-content-step').each(function (index) {
        var sectionTop = $(this).offset().top - $(window).height() / 1.2; // Mid-point trigger
        var sectionHeight = $(this).outerHeight();
        var sectionBottom = sectionTop + sectionHeight;
        var progressBarId = $(this).attr('id'); // Target progress bar by ID
        
        // var sectionAnimateContentTop = $(this).offset().top - $(window).height() / 1;
        // var sectionAnimateContentBottom = sectionAnimateContentTop + sectionHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Animate progress bar height to 100%
            $('.image-block').find('.progress-content-img').removeClass('is-active');
            $('[data-progress-id="' + progressBarId + '"]').css('height', '100%');
            $('.image-block').find('[data-id="' + progressBarId + '"]').addClass('is-active');
        // } else if (scrollPosition >= sectionAnimateContentTop && scrollPosition < sectionAnimateContentBottom) {
            $('.progress-content-wrapper').find('.progress-content-step').removeClass('is-active');
            $('.progress-content-wrapper').find('[id="' + progressBarId + '"]').addClass('is-active');
            
        } else if (scrollPosition <= sectionTop) {
            // Reset progress bar height when section is not in view
            $('[data-progress-id="' + progressBarId + '"]').css('height', '0');
            
        } 
    });
}

// if ($('.splide').length) {
//     var splide_sliders = $('.splide');
//     for (var i = 0; i < splide_sliders.length; i++) {
//         new Splide(splide_sliders[i]).mount();
//     }
// }

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
// function onPageLoad() {
//     if(jQuery('.square-vector').length) {
//         jQuery('.square-vector').removeClass('animated');
//         setTimeout(function() {
//             jQuery('.square-vector').addClass('animated');
//         }, 800);
//     }
// }
if(jQuery('.square-vector').length) {
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('animated');
                }
            });
        });

        // Observe each '.square-vector' element
        $('.square-vector').each(function () {
            observer.observe(this);
        });
        $('.card-image-block .img-text').each(function () {
            observer.observe(this);
        });
    }
}
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
    

    // Step Progress Section
    if ($('.progress-section').length) {
        $(window).on('scroll', function() {
            updateProgressBars();
        });
    }
    
    // Step Progress Section
    if ($('.progress-section').length) {
        $('.progress-section').on('scroll', updateProgressBars);
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
            if ($('.progress-section').length) {
                let targetDiv = $('.progress-content-block'); // Replace with your target div class
                let offsetTop = targetDiv.offset().top;
                let scrollPosition = $(window).scrollTop();

                if (scrollPosition >= offsetTop - 50) {
                    targetDiv.addClass('is-icon-sticky');
                } else {
                    targetDiv.removeClass('is-icon-sticky');
                }
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
});

/* WOW Animation - Init */
try {
    new WOW().init();
} catch (e) {
    //
};


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
            $('.image-block').find('.progress-content-img:not(.image-static)').removeClass('is-active');

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
if ($('.splide:not(.splide-js)').length) {
    $('.splide:not(.splide-js)').each(function() {
        new Splide(this).mount();
        $(this).addClass('icw_splide-with-data'); // Mark as initialized
    });
}
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


const tabsSectionImage = document.querySelectorAll('.tabs-section .image-block img');

const observerImage = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.complete) {
        img.closest('.image-block').classList.add('is-loaded');
      } else {
        img.onload = function() {
          img.closest('.image-block').classList.add('is-loaded');
        }
      }
      observer.unobserve(img);
    }
  });
}, { threshold: 0.1 });

tabsSectionImage.forEach(img => {
  observerImage.observe(img);
});

document.addEventListener("DOMContentLoaded", () => {
    function animateCount(element, start, end, duration) {
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        let current = start;
        const increment = end > start ? 1 : -1;

        const timer = setInterval(() => {
            current += increment;
            element.textContent = current + "%";
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const section = document.querySelector(".metrics-section");
    const countElements = document.querySelectorAll(".count");

    if (!section) { return; }

    let hasAnimated = false;

    const observerCount = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                countElements.forEach((el) => {
                    const target = parseInt(el.textContent, 10);
                    el.textContent = "0";
                    animateCount(el, 0, target, 2000);
                });
                observerCount.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observerCount.observe(section);
});
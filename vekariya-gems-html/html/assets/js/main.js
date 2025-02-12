/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

    // $('.navbar-toggler').on('click', function (e) {
    //     $('.navbar-toggler,body,.main-header').toggleClass('is-visible');
    //     e.preventDefault();
    // });

    $(".sidebar-toggler").click(function () {
        $(this).toggleClass("is-visible");
        $('body,.main-header').toggleClass('is-visible');

        if ($(this).hasClass("is-visible")) {
            setTimeout(() => {
                $(".header-collapse-menu").addClass("height-expanded").stop();
            }, 800);
        } else {
            $(".header-collapse-menu").removeClass("height-expanded").stop();
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
});

/* WOW Animation - Init */
try {
    new WOW().init();
} catch (e) {
    //
};



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

// Make ScrollTrigger available for use in GSAP animations
gsap.registerPlugin(ScrollTrigger);
if($('.scroll-content-animation-block').length) {            
    // Select the HTML elements needed for the animation
    const scrollSection = document.querySelectorAll(".scroll-content-animation-block");

    scrollSection.forEach((section) => {
        const wrapper = section.querySelector(".scroll-content-wrapper");
        const items = wrapper.querySelectorAll(".process-card");

        // Initialize
        let direction = null;

        if (section.classList.contains("vertical-section")) {
            direction = "vertical";
        } else if (section.classList.contains("horizontal-section")) {
            direction = "horizontal";
        }

        initScroll(section, items, direction);
    });

    function initScroll(section, items, direction) {
        // Initial states
        items.forEach((item, index) => {
            if (index !== 0) {
            direction == "horizontal"
                ? gsap.set(item, { xPercent: 100 })
                : gsap.set(item, { yPercent: 100 });
            }
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top 150px",
            end: () => `+=${items.length * 100}%`,
            scrub: 1,
            invalidateOnRefresh: true
            // markers: true,
            },
            defaults: { ease: "none" }
        });
        items.forEach((item, index) => {
            timeline.to(item, {
            scale: 0.9,
            borderRadius: "10px"
            });

            direction == "horizontal"
            ? timeline.to(
                items[index + 1],
                {
                    xPercent: 0
                },
                "<"
                )
            : timeline.to(
                items[index + 1],
                {
                    yPercent: 0
                },
                "<"
            );
        });
    }
}
if($('.animation-text').length) {            
    const textElements = document.querySelectorAll('.animation-text');
    textElements.forEach(textElement => {
        let lines = textElement.innerHTML.split("<br>").map(line =>
        `<span class="animation-line">${line.trim()}</span>`).join('<br>');

        textElement.innerHTML = lines;
        const lineElements = textElement.querySelectorAll('.animation-line');

        lineElements.forEach(line => {
            gsap.fromTo(line, 
                { backgroundSize: '0% 100%' }, 
                {
                    backgroundSize: '100% 100%', 
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                    }
                }
            );
        });
    });
}
if($('.swap-card').length) {
    gsap.to(".swap-card.is-left-card", {
        rotate: "-6deg", 
        scrollTrigger: {
            trigger: ".is-left-card",
            start: "top 60%",
            end: "top 20%",
            scrub: true,
        }
    });

    gsap.to(".swap-card.is-right-card", {
        rotate: "6deg", 
        scrollTrigger: {
            trigger: ".is-right-card",
            start: "top 60%",
            end: "top 20%",
            scrub: true,
        }
    });
}
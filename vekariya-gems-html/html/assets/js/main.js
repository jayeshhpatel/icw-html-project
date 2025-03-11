/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $(".sidebar-toggler").click(function () {
        $(this).toggleClass("is-visible");
        $('body,.main-header').toggleClass('is-visible');

        if ($(this).hasClass("is-visible")) {
            setTimeout(() => {
                $(".navbar-collapse").addClass("height-expanded").stop();
            }, 300);
        } else {
            $(".navbar-collapse").removeClass("height-expanded").stop();
        }
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 10) {
            $(".main-header").addClass("fixed-header");
        } else {
            $(".main-header").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 10) {
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
    if ($(".loader-content").length > 0) {
        $(window).on("load", function () {
            var $counterText = $(".loader-content .counter .number");
            var counter = 0;
            var i = setInterval(function () {
                if (counter <= 100) {
                    $counterText.html(counter + "%");                
                    counter++;
                } else {
                    clearInterval(i); 
                }
            }, 25); 
            $("body").addClass('overflow-hidden');
            setTimeout(function () {
                var $loader = $(".loader");            
                $loader.slideUp('300', function(){
                    $("body").removeClass('overflow-hidden');
                });    
                setTimeout(function () {
                    $loader.css("display", "none");
                    if ($(".img-overlay-block").length > 0) {
                        animateVisibleElements();
                    }
                    if ($(".animtext").length > 0) {
                        checkAnimations();
                    }
                }, 500);
            }, 3000);
        });
    }

    if ($(".img-overlay-block").length > 0) {
        for (let i = 0; i < 5; i++) {
            $(".img-overlay-block, .slideImg-overlay-block").append("<span></span>");
        }
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
    if ($(".img-overlay-block").length > 0 && !$(".loader-content").length > 0 ) {
        setTimeout(() => {
            animateVisibleElements();
        }, 100);
    }
    if ($(".animtext").length > 0 && !$(".loader-content").length > 0) {
        checkAnimations();
    }
});



$(window).on("scroll", function () {
    if ($(".img-overlay-block").length > 0) {
        animateVisibleElements();
    }
    if ($(".animtext").length > 0) {
        checkAnimations();
    }
});

// Helper function to check if element is in viewport
function isInViewport($el) {
    // var elementTop = $el.offset().top;
    // var elementHeight = $el.outerHeight();
    // var elementThreshold = elementTop + (elementHeight * 0.6); // 30% of the element

    // var viewportTop = $(window).scrollTop();
    // var viewportBottom = viewportTop + $(window).height();

    // return elementThreshold < viewportBottom && elementTop < viewportBottom;

    var elementTop = $el.offset().top;
    var elementBottom = elementTop + $el.outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Ensure the element is within viewport (not just partially visible)
    return elementBottom > viewportTop && elementTop < viewportBottom;
}

// Text Animation
if ($(".animtext").length > 0) {
    // Splitting text into lines and characters
    const animtextLine = Splitting({
        target: $(".animtext.line-up,.animtext.line-left,.animtext.word-up,.animtext.word-left"),
        by: "lines"
    });
    const animtextChar = Splitting({
        target: $(".animtext.char-up, .animtext.char-left"),
        by: "chars"
    });

    // Wrap split words into lines with spacing
    animtextLine.forEach((splitResult) => {
        const wrappedLines = splitResult.lines.map((wordsArr, i) =>
            `<div class="line" style="--line-index: ${i};">${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace"></span>`).join("")}</div>`
        ).join("");
        splitResult.el.innerHTML = wrappedLines;
    });   

    // Function to trigger animations when elements appear in viewport
    function checkAnimations() {
        $(".animtext").each(function () {
            var $this = $(this);
            if (isInViewport($this)) {                
                $this.addClass("animated");
                
            } 
            // else {
            //     $this.removeClass("animated");
            // }
        });
    }

    // Observe changes in styles of word elements
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutationRecord) {
            console.log("Style changed!", mutationRecord);
        });
    });

    var targets = document.getElementsByClassName("word");
    Array.from(targets).forEach((el) => {
        observer.observe(el, { attributes: true, attributeFilter: ["style"] });
    });  
   
}


// Image Overlay Animation
function animateVisibleElements() {
    $(".img-overlay-block").each(function () {
        if ($(this).is(":visible") && isInViewport($(this))) {
            $(this).addClass("is-animated");
            $(this).find("span").each(function (index) {
                $(this).css("transition-delay", index * 0.05 + "s"); // Adjust delay as needed
            });
            setTimeout(() => {
                $(this).css("z-index", "-1");
            }, 1000);
        }
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

/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('.navbar-toggler').on('click', function (e) {
        $('.navbar-toggler,body,.main-header').toggleClass('is-visible');
        $('.menu-sidebar').toggleClass('show');
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
            var tab_id = $(this).attr('data-tab');
            $('.nav-tabs .tab-link').removeClass('active');
            $('.tab-pane').hide();
            $(this).addClass('active');
            $('#'+tab_id).fadeIn();
        });
    }

    if ($('.collapse-item').length) {
        $(document).on("click", ".collapse-item .collapse-title", function () {
            var $this = $(this).closest(".collapse-item");
            
            if ($this.hasClass("is-open")) {
                $this.removeClass("is-open");
                $this.find(".collapse-body").stop(true, true).slideUp(300);
            } else {
                $(".collapse-item").removeClass("is-open");
                $(".collapse-item").find(".collapse-body").stop(true, true).slideUp(300);
                $this.addClass("is-open");
                $this.find(".collapse-body").stop(true, true).slideDown(300); 
                
                // var collapsetop = $this.find(".collapse-title");
                // $('html, body').animate({
                //     scrollTop: collapsetop.offset().top - 115
                // }, 300); // Smooth scroll to the item
            }
            return false;
        });
    }  
       
    
    // Step Progress Section
    if ($('.process-content-wrapper').length) {
        $(window).on('scroll', function() {
            updateProgressBars();
        });
    }
    
    // Step Progress Section
    if ($('.process-content-section').length) {
        $('.process-content-section').on('scroll', updateProgressBars);
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

    jQuery(window).on('scroll', function() {
        if ($('.process-content-section').length) {
            let targetDiv = $('.process-content-wrapper'); // Replace with your target div class
            let offsetTop = targetDiv.offset().top;
            let scrollPosition = $(window).scrollTop();

            if (scrollPosition >= offsetTop - 50) {
                targetDiv.addClass('is-icon-sticky');
            } else {
                targetDiv.removeClass('is-icon-sticky');
            }
        }
    });

    Splitting();
});

// Step Progress Section
function updateProgressBars() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var totalCards = $('.process-card').length;
    var activeCount = 0;

    $('.process-card').each(function (index) {
        var cardTop = $(this).offset().top - windowHeight * 0.4; // 40% from top trigger
        var cardHeight = $(this).outerHeight();
        var cardBottom = cardTop + cardHeight;

        if (scrollPosition >= cardTop) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active'); // Remove when scrolling up
        }
    });

    activeCount = $('.process-card.active').length;
    var progressHeight = (activeCount / totalCards) * 100;
    $('.progress-bar').css('height', progressHeight + '%');
}


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

// Menu Toggle Button Animation
const btnToggleBg = document.querySelector(".btn-toggle-bg");
const navbarToggler = document.querySelector(".navbar-toggler");
const btnToggleClose = document.querySelector(".btn-toggle-close");
const menuSidebar = document.querySelector(".menu-sidebar");
if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
        document.querySelector("body").classList.toggle("overflow-hidden");
        document.querySelector(".bg-overlay").classList.toggle("is-visible");
        if (!(menuSidebar.classList.contains("show"))) {
            setTimeout(() => {
                menuSidebar.classList.remove("is-text-animate"); 
            }, 300);
            if (menuSidebar.querySelector(".current-menu-item")) {
                setTimeout(() => {
                    menuSidebar.querySelector(".current-menu-item").classList.add("active");
                }, 1000);
            }
        } else {
            menuSidebar.classList.add("is-text-animate"); 
            menuSidebar.querySelector(".current-menu-item").classList.remove("active");
        }
    });
}

// Video Player
const playIcons = document.querySelectorAll(".is-play-icon");
if (playIcons.length) {
    document.querySelectorAll(".media-block").forEach((videoBlock) => {
        const video = videoBlock.querySelector("video");
        const playIcon = videoBlock.querySelector(".is-play-icon");

        if (!video || !playIcon) return;

        // Play/Pause when clicking the play icon
        playIcon.addEventListener("click", function () {
            if (video.paused) {
                video.play();
                playIcon.style.display = "none";
            } else {
                video.pause();
                playIcon.style.display = "flex";
            }
        });

        // Pause when clicking on the video itself
        video.addEventListener("click", function () {
            if (!video.paused) {
                video.pause();
                playIcon.style.display = "flex";
            }
        });

        // Show play icon when video ends
        video.addEventListener("ended", function () {
            playIcon.style.display = "flex";
        });
    });
}

// Play Video on Observer
document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".media-block.is-video video");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target;
            const playIcon = video.closest(".media-block").querySelector(".play-icon.is-play-icon");

            if (entry.intersectionRatio >= 0.5) {
                video.play();
                if (playIcon) playIcon.style.display = "none"; // Hide play icon
            } else {
                video.pause();
                if (playIcon) playIcon.style.display = "flex"; // Show play icon
            }
        });
    }, { threshold: [0.5] });

    videos.forEach((video) => observer.observe(video));
});

// Image Scroll on window scroll
letterCarousel('.is-left','.image-group', 'left');
letterCarousel('.is-right','.image-group', 'right');
	
function letterCarousel(parent_cls,child_cls,direction) {
    var e = jQuery(parent_cls+' '+child_cls);
    
    jQuery(window).on("scroll", function() {
        if (jQuery(parent_cls).length) {
            var t = jQuery(document).scrollTop() + jQuery(window).height(),
            n = jQuery(parent_cls).offset().top;
            dire = jQuery(direction);
            
            if (n <= t) {
                var i = jQuery(document).scrollTop() - n + jQuery(window).height();
                var scroll = i - 250;
                
                var scroll_slow = scroll + ((scroll/70)/100);
                var img_scroll = scroll_slow * 30 /100;
                
                var translateX = direction === "left" ? -img_scroll : img_scroll;

                e.css({
                    transform: "translateX(" + translateX + "px)"
                });
            }
        }
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
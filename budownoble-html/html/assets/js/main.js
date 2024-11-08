/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $('body').tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.navbar-toggler').on('click', function (e) {
        $('.toggle-sidebar, .megamenu-overlay, .main-header,.menu-list').toggleClass('is-visible');
        e.preventDefault();
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 50) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.main-header').addClass('fixed-header');                
                if ($('.main-header').hasClass('fixed-header')) {
                    // Check if the overlay has 'is-active' class
                    if ($('.megamenu-overlay').hasClass('is-active')) {
                        // Set height based on overlay_height (submenu height + header height)
                        $('.megamenu-overlay').height(overlay_height + $('.main-header').height());
                    } else {
                        $('.megamenu-overlay').height(100);
                    }
                }
            } else {
                // Remove 'fixed-header' class and set overlay height to 0
                $('.main-header').removeClass('fixed-header');
                if ($('.megamenu-overlay').hasClass('is-active')) {
                    $('.megamenu-overlay').height(overlay_height + $('.main-header').height());
                } else {
                    $('.megamenu-overlay').height(0);
                }
            }
        });
        $(window).on('resize', function () {
            if ($(window).width() > 1200) {
                $('.mega-menu').hover(
                    function() {
                        overlay_height = $(this).find('.sub-menu').outerHeight()
                        updateMegaMenuOverlay(this, true);
                    },
                    function() {
                        updateMegaMenuOverlay(this, false);
                    }
                );
            }
        });
        if ($(window).width() > 1200) {
            $('.mega-menu').hover(
                function() {
                    overlay_height = $(this).find('.sub-menu').outerHeight()
                    updateMegaMenuOverlay(this, true);
                },
                function() {
                    updateMegaMenuOverlay(this, false);
                }
            );
        }
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

    if ($('.collapse-block').length) {
        $(".collapse-item").first().addClass("is-open").find(".collapse-body").show();
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
    }
});

var overlay_height = 0;
function updateMegaMenuOverlay(element, isHover) {
    var overlay = $(element).parents('.main-header').find('.megamenu-overlay');
    
    if (isHover) {
        overlay.addClass('is-active');
        overlay.height(overlay_height + $('.main-header').height());
    } else {
        overlay.removeClass('is-active');
        if ($(element).parents('.main-header').hasClass('fixed-header')) {
            overlay.height(100);
        } else {
            overlay.height(0);
        }
    }
}
function adjustMegamenuHeight() {
    if ($(window).width() > 1400) {
        $('.megamenu-overlay').height(180);
    } else if ($(window).width() > 1300) {
        $('.megamenu-overlay').height(160);
    } else {
        $('.megamenu-overlay').height(140);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if '.bottom-curve-shape' exists in the DOM
    var bottomCurveShape = document.querySelector('.bottom-curve-shape');
    if (bottomCurveShape) {
        window.addEventListener('scroll', function() {
            var scrollPos = window.scrollY; // Get the current scroll position
            if (scrollPos >= 30) {
                bottomCurveShape.classList.add('scrolled');
            } else {
                bottomCurveShape.classList.remove('scrolled');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if '.top-curve-shape' exists in the DOM
    var topCurveShapes = document.querySelectorAll('.top-curve-shape');
    if (topCurveShapes.length > 0) {
        window.addEventListener('scroll', function() {
            var scrollPos = window.scrollY; // Get the current scroll position
            var windowHeight = window.innerHeight; // Get the height of the window
            
            topCurveShapes.forEach(function(element) {
                var elementTop = element.getBoundingClientRect().top + window.scrollY; // Get the element's position
                var elementHeight = element.offsetHeight; // Get the height of the element
                
                // Check if the element is visible in the viewport
                if (scrollPos + windowHeight >= elementTop && scrollPos <= elementTop + elementHeight) {
                    element.classList.add('scrolled');
                } else {
                    element.classList.remove('scrolled');
                }
            });
        });
    }
});


jQuery(document).ready(setMainMenuWidth); // Initial load
jQuery(window).on('resize', debounce(setMainMenuWidth, 200)); // Resize event with debounce

function setMainMenuWidth() {
    const mainMenuWidth = $('ul.mainMenu').outerWidth();

    if (mainMenuWidth >= 900) {
        jQuery(':root').css('--mainMenuWidth1200', (mainMenuWidth - 15) + 'px');
        jQuery(':root').css('--mainMenuWidth1400', (mainMenuWidth - 70) + 'px');
    } else {
        jQuery(':root').css('--mainMenuWidth1200', '690px'); // Reset if not meeting condition
        jQuery(':root').css('--mainMenuWidth1400', '990px');
    }
}

// Debounce function to limit resize event triggering
function debounce(func, delay) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}


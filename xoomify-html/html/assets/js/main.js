/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
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
        $("li.menu-item-has-children").hover(
            function () {
              $('.bg-overlay').addClass("is-hover");
            },
            function () {
              $('.bg-overlay').removeClass("is-hover");
            }
        );
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    $('.menu-collapse .menu-title').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        // $(this).parent().find('.menu-list-block').toggle(300);
    });
    if ($('.is-play-icon').length){
        $('.video-block').each(function() {
            var $videoBlock = $(this);
            var $video = $videoBlock.find('video');
            var $playIcon = $videoBlock.find('.is-play-icon');
    
            $playIcon.click(function() {
                if ($video.get(0).paused) {
                    $video.get(0).play();
                    $playIcon.hide();
                } else {
                    $video.get(0).pause();
                    $playIcon.show();
                }
            });
        });
    }
    const lightbox = GLightbox();
});
if($('.hero-slider').length){
    var herosplide = new Splide('.hero-slider', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        arrows: false,
        autoplay: true,
        speed: 600,
        gap: 30,
        omitEnd: true,
        classes: { pagination: 'icw-slide-dots', },
        breakpoints: {
            1400: {
                gap: 10,
                perPage: 2.5,
            },
            992: {
                perPage: 3.5,
                focus: 'center',
            },
            767: {
                perPage: 2.5,
            },
            420: {
                gap: 10,
                perPage: 2,
            },
        }
    });
    herosplide.mount();
}
if($('.post-slider').length){
    var postsplide = new Splide('.post-slider', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        pagination: false,
        arrows: true,
        autoplay: true,
        speed: 600,
        gap: 30,
        omitEnd: true,
        classes: { arrows: 'icw-slide-arrows', },
        breakpoints: {
            1400: {
                perPage: 3.5,
            },
            992: {
                gap: 20,
                perPage: 2.5,
            },
            575: {
                gap: 20,
                perPage: 1.5,
            },
        }
    });
    postsplide.mount();
}
document.addEventListener("DOMContentLoaded", function () {
    testimonial_slider_option();
});
function testimonial_slider_option() {
    var testimonial_slider = document.getElementsByClassName('testimonial-slider');
    for (var i = 0; i < testimonial_slider.length; i++) {
        new Splide(testimonial_slider[i], {
            type   : 'loop',
            drag   : 'free',
            focus  : 'center',
            arrows: false,
            pagination: false,
            gap: 20,
            perPage: 2.5,
            autoScroll: {
                speed: 1,
            },
            breakpoints: {
                992: {
                    perPage: 1.5,
                },
                767: {
                    perPage: 1,
                },
            }
        }).mount(window.splide.Extensions);
    }
}

/****** Tab & Collapse Change Autoplay Video Function */
// Function to pause all videos
function pauseAllVideos() {
    $('video').each(function () {
        this.pause();
        $(this).parents('.video-block').find('.play-icon').show();
    });
}
// Function to play the video in the active tab
function playActiveVideo(id) {
    var video = $(id).find('video').get(0);
    
    if (video) {
        setTimeout(() => {
            $(id).find('.play-icon').hide();
            video.play().catch(error => {
                console.error("Error playing video: ", error);
            }); 
        }, 500);
    }
}

// Handle tab shown event
if($('button[data-bs-toggle="tab"]').length) {
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (event) {
        pauseAllVideos();
        var activeTabContentId = $(event.target).attr('data-bs-target');
        playActiveVideo(activeTabContentId);
    });
    var initialActiveTab = $('.tab-pane.active');
    var initialVideo = initialActiveTab.find('video').get(0);
    // console.log(initialActiveTab);
    if (initialVideo) {
        initialVideo.play().catch(error => {
            console.error("Error playing video: ", error);
        });
    }
}
// Handle collapse shown event
if($('collapse').length) {
    $('.collapse').on('shown.bs.collapse', function (event) {
        pauseAllVideos();
        var activeCollapseId = '#' + $(event.target).attr('id');
        playActiveVideo(activeCollapseId);
    });
    // Handle collapse hidden event
    $('.collapse').on('hidden.bs.collapse', function (event) {
        pauseAllVideos();
    });
    // Play the video in the initially active collapse on page load
    var initialActiveCollapse = $('.collapse.show');
    var initialVideo = initialActiveCollapse.find('video').get(0);
    if (initialVideo) {
        initialVideo.play().catch(error => {
            console.error("Error playing video: ", error);
        });
    }
}
$('.collapse-content').on('show.bs.collapse', function () {
    $(this).parents('.collapse-item').addClass('active');
});

$('.collapse-content').on('hide.bs.collapse', function () {
    $(this).parents('.collapse-item').removeClass('active');
});
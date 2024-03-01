/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
   $('[data-bs-toggle="tooltip"]').tooltip();
   $('[data-bs-toggle="popover"]').popover();

//    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
//     const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

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
   }

   if ($('li.menu-item-has-children').length) {
    $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
   }
   $('li.menu-item-has-children .arrow').on('click',function(event){
      event.preventDefault();
      $(this).toggleClass('is-active');
      $(this).parent().find('.sub-menu').first().toggle(300);
      // $(this).parent().siblings().find('.sub-menu').hide(200);
      
      //Hide menu when clicked outside
      /*
      $(this).parent().find('.sub-menu').parent().mouseleave(function(){ 
         var thisUI = $(this);
         $('html').click(function(){
            thisUI.children(".sub-menu").hide();
            thisUI.children(".arrow").removeClass('is-active');
            $('html').unbind('click');
         });
      });
      */
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
            scrollTop: collapsetop.offset().top-85
        }, 10);
      }
      return false;
  });

  /* scroll page to top */
  if ($('.back-to-top').length) {
    $(window).scroll(function() {
       if($(this).scrollTop() > 200) {
          $('.back-to-top').addClass('visible');	
       } else {
          $('.back-to-top').removeClass('visible');
       }
    });
    $('.back-to-top').on('click', function(e){
       e.preventDefault();
       $('body,html').animate({scrollTop:0},50);
    });
 }

// $('a[href*=#]:not([href=#])').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ 
//         scrollTop: $($(this).attr('href')).offset().top
//     }, 50);
// });

var isHidden = true;
$('.is-show-all').on('click', function(e) {
   e.preventDefault();
   $('.is-xs-none').toggleClass('is-show');
   isHidden = !isHidden;
   // Update button text based on the boolean value
   $(this).find('.is-text').text(isHidden ? "View all" : "Hide all");
   
   if(isHidden){
    var offset_target = $(this).parents('.main-section').offset().top;
    $('html, body').animate({ 
        scrollTop: offset_target
    }, 50);
   } 
});
if ($('.founder-slider').length) { 
   var splide_founder = new Splide( '.founder-slider', {
       perPage: 6,
       perMove: 1,
       pagination: false,
       arrows: false,            
       gap: 40,       
       breakpoints: {
           992: {
               perPage: 3,
               arrows: true,
           },
           767: {
               perPage: 2,
               arrows: true,
               gap: 20, 
           },
       },
   });
   splide_founder.mount();
}
if ($('.blog-slider').length) { 
    var splide_blog = new Splide( '.blog-slider', {
        focus    : 'left',
        direction: 'ltr',
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: true,            
        gap: 30,     
        updateOnMove: true,
        autoWidth: true,
        breakpoints: {
            767: {
                perPage: 1.2,
                arrows: true,
                autoWidth: false,
                gap: 20,   
            },
        },
    });
    splide_blog.mount();
}


if ($('.play-iframe').length){
    $('.play-iframe').click(function(ev){	
        videourl = $(this).data('videosrc')+"?api=1&autoplay=1&muted=1&rel=0&enablejsapi=1";
        if($(this).data('ext') == 'mp4'){
            video = '<div class="video-wrap ratio ratio-16x9"><video class="embed-responsive-item" controls autoplay controlsList="nodownload" oncontextmenu="return false;"><source src="'+videourl+'" type="video/mp4"></video></div>';
        } else {
            video = '<div class="video-wrap ratio ratio-16x9"><iframe class="embed-responsive-item play-in_iframe" src="'+videourl+'" controls="0" scrolling="no" autoplay="false" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
        
        $(this).parents('.play-video-inline').html(video);
        ev.preventDefault();
    });
}

if ($('.is-play-icon').length){
    $('.video-player-block').each(function() {
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

$('.link-hash').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ 
        scrollTop: $($(this).attr('href')).offset().top -90
    }, 50);
    return false;
});

$(".is-lottie-hover").hover(
    function() {
        // On hover, play the lottie-player animation
        const lottiePlayer = $(this).find("lottie-player")[0];
        lottiePlayer.setDirection(1);
        lottiePlayer.play();
    },
    function() {
        // On hover out, stop the lottie-player animation
        const lottiePlayer = $(this).find("lottie-player")[0];
        lottiePlayer.setDirection(-1);
        lottiePlayer.play();
    }
);

});

//Since HubSpot forms are rendered after the DOM builds, you must trigger the manipulation after the window loads
window.onload = function () {
   if(jQuery('.form-with-slider-labels').length) {
       setTimeout(function(){
       hubspot_labels(); 
       }, 800);
   }  
}; 

function hubspot_labels() {
   //turn autocomplete off for forms on all browsers, except Chrome
   jQuery('form').attr('autocomplete','off');
   jQuery('input, .hs-input').attr('autocomplete','off');

   // jQuery('input, .hs-input').prop('readonly', true);

   //turn autocomplete off for forms for Chrome 
   //based on a browser bug noted here: https://bugs.chromium.org/p/chromium/issues/detail?id=370363#c7
   jQuery('html[data-useragent*="Chrome"] form').attr('autocomplete','false');
   jQuery('html[data-useragent*="Chrome"] form input').attr('autocomplete','false');

   jQuery(".form-with-slider-labels .hs-input").focus(function(){
       jQuery(this).closest(".hs-form-field").removeClass("not-focused");
       jQuery(this).closest(".hs-form-field").addClass("has-focus");

    //    jQuery(this).prop('readonly', false);
       console.log("jay-focus");

   }).blur(function(){
       if( !jQuery(this).val() ) { //check to see if the input has a value
           jQuery(this).closest(".hs-form-field").removeClass("has-focus");
           jQuery(this).closest(".hs-form-field").addClass("not-focused");
       } else {
           jQuery(this).closest(".hs-form-field").addClass("has-value");
       }
   })
   //on input change, if the value is empty, remove "has-value" class.
   jQuery(".form-with-slider-labels .hs-input").on("change paste keyup", function() {
       if( !jQuery(this).val() ) { //check to see if the input has a value
           jQuery(this).closest(".hs-form-field").removeClass("has-value");
       }
   });

   jQuery('.form-with-slider-labels .hs-input').on( 'focus', ':input', function(){
       jQuery(this).attr( 'autocomplete', 'off' );
   });

   // setTimeout(function(){
       jQuery(".form-with-slider-labels .hs-input").each(function(){
           var input_value=jQuery(this).val();
           if(input_value!='') {
              jQuery(this).parents(".hs-form-field").removeClass("not-focused");
               jQuery(this).parents(".hs-form-field").addClass("has-focus");
           }
         });
       jQuery(".form-with-slider-labels .hs-input").val();
       jQuery(".form-with-slider-labels .hs-input[name=firstname], .form-with-slider-labels .hs-input[name=lastname]").attr( 'pattern', '[A-Za-z]' );
   // }, 500);

   jQuery('.form-with-slider-labels .hs-input[name=\"firstname\"], .form-with-slider-labels .hs-input[name=\"lastname\"]').keydown(function (e) {
    if (e.ctrlKey || e.altKey) {
       e.preventDefault();
    } else {
       var key = e.keyCode;
       if (!((key == 9) || (key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
           e.preventDefault();
       }
   }
 });
}

;(function($, window, document, undefined) {
    'use strict';
    var $ripple = $('.js-ripple');
    $ripple.on('click.ui.ripple', function(e) {
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.c-ripple__circle');
  
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
  
      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
  
      $this.addClass('is-active');
  
    });
    $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });
})(jQuery, window, document);

function splideSlider(slideID) {
    var splide_workspace_title_img = new Splide('#' + slideID, {
        arrows: false,
        rewind: true,
        gap: 20,
        snap: true,
        autoplay: true,
        type: 'fade',
        pauseOnHover: false,
        pauseOnFocus: false,
        resetProgress: true,
    });

    // Listen to the 'mounted' event to get the slider instance  
    splide_workspace_title_img.on('mounted', function () {
        // Get all video elements within the slider
        var fullvideos = document.querySelectorAll('#'+slideID+'video');
        // Listen to the 'moved' event to play/pause fullvideos on slide change
        splide_workspace_title_img.on('moved', function (newIndex) {
            var currentSlideNumber = newIndex + 1;
            // Select all elements with the class 'splide_current'
            var elementsWithSplideCurrent = document.querySelectorAll('.splide_current');
            // Update the content of each selected element
            elementsWithSplideCurrent.forEach(function (element) {
                if (element) {
                    element.textContent = formatSlideNumber(currentSlideNumber);
                }
            });
            // Pause all fullvideos
            if (fullvideos && fullvideos.length > 0) {
                fullvideos.forEach(function (video, index) {
                    if (index !== newIndex) {
                        video.pause();
                        video.currentTime = 0;
                    }
                });
                // Play the video in the current slide
                fullvideos[newIndex].play();
            }
        });
    });

    splide_workspace_title_img.mount();
    // Format slide number with leading zeros
    function formatSlideNumber(number) {
        return number < 10 ? '0' + number : number.toString();
    }
}
function destroySplideForOtherTabs(currentTabId) {
    var tabContents = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < tabContents.length; i++) {
        var tabId = tabContents[i].id;
        // if (tabId !== currentTabId) {
            var splideContainer = document.querySelector('#' + tabId + '-pane .full-slider');
            if (splideContainer) {
                var splideInstance = splideContainer.Splide;
                if (splideInstance) {
                    splideInstance.destroy();
                }
            }
        // }
    }
}
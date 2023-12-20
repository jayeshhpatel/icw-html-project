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
         $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp("fast");
      } else {
         $(".collapse-item").removeClass("is-open");
         $(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
         $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown("fast");
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
});
/*
if ($('.review-slider').length) { 
    var splide_review = new Splide( '.review-slider', {
        perPage: 1,
        perMove: 1,
        pagination: false,
        arrows: false,           
        gap: 30, 
      //   type   : 'loop',
    });
    splide_review.mount();

    //attach events to custom buttons
    reviewNext.addEventListener('click', e => {
        splide_review.go('+1')
    })

    reviewPrev.addEventListener('click', e => {
        splide_review.go('-1')
    })
}
*/
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
   // }, 500);

   jQuery('.form-with-slider-labels .hs-input[name=\"firstname\"]').keydown(function (e) {
       if (e.ctrlKey || e.altKey) {
          e.preventDefault();
      } else {
          var key = e.keyCode;
          if (!((key == 9) || (key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key >= 186 && key <= 222) )) {
           // if (!((key == 9) || (key == 8) || (key == 32) || (e.shiftKey && key >= 48 && key <= 57)||(key >= 65 && key <= 90) || (key >= 186 && key <= 222))) { 
          e.preventDefault();
          }
      }
    });
}
/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {

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
});

   	 //Detect browser's user agent and add to HTML attribute.
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
  

//Since HubSpot forms are rendered after the DOM builds, you must trigger the manipulation after the window loads

window.onload = function () {
  
  //turn autocomplete off for forms on all browsers, except Chrome
  $('form').attr('autocomplete','off');
  $('input').attr('autocomplete','off');
  //turn autocomplete off for forms for Chrome 
  //based on a browser bug noted here: https://bugs.chromium.org/p/chromium/issues/detail?id=370363#c7
  $('html[data-useragent*="Chrome"] form').attr('autocomplete','false');
  $('html[data-useragent*="Chrome"] form input').attr('autocomplete','false');
  
  $(".form-with-slider-labels .hs-input").focus(function(){
     $(this).closest(".hs-form-field").removeClass("not-focused");
     $(this).closest(".hs-form-field").addClass("has-focus");
  }).blur(function(){
    if( !$(this).val() ) { //check to see if the input has a value
      $(this).closest(".hs-form-field").removeClass("has-focus");
      $(this).closest(".hs-form-field").addClass("not-focused");
    } else {
      $(this).closest(".hs-form-field").addClass("has-value");
    }
  })
  //on input change, if the value is empty, remove "has-value" class.
  $(".form-with-slider-labels .hs-input").on("change paste keyup", function() {
    if( !$(this).val() ) { //check to see if the input has a value
      $(this).closest(".hs-form-field").removeClass("has-value");
    }
  });
};   
/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();
jQuery(document).ready(function($) {

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



   if ($('.coresets-sticky').length) {
     $('.coresets-sticky a[href^="#"]').click(function(e) {
      e.preventDefault();
      var toppadding = '120';
      if($(window).width() < 575) {
         var toppadding = '430';  
      }

      $(".coresets-sticky").removeClass("scroll-down");
      $(".coresets-sticky").removeClass("scroll-up");
      
      var target = $(this).attr('href');
      var stop = $(target).offset().top - toppadding;
      $('html, body').animate({scrollTop: stop + 'px'}, 600);
    });
   }

   /* toggle */
   if ($('[data-toggle]').length) {
      $('[data-toggle]').on("click", function(e) {
         e.preventDefault();
         $("[id=" + $(this).attr("data-toggle") + "]").addClass("active");
         $("div.data-toggle-showhide").hide();
         $("[id=" + $(this).attr("data-toggle") + "]").show();
         return false;
   });
  }

  if ($('[data-bs-toggle=tooltip]').length) {
   $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
   }

});

if ($(".menu-item-has-children").length) {
   $('.menu-item-has-children').mouseenter(function () {
      $(this).find('.sub-menu').addClass("is-hover");
   }).mouseleave(function () {
      $(this).find('.sub-menu').removeClass("is-hover");
   });
}
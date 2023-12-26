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

   var isHidden = true;
   $('.is-show-all').on('click', function(e) {
      e.preventDefault();
      $('.is-xs-none').toggleClass('is-show');
      isHidden = !isHidden;
      // Update button text based on the boolean value
      $(this).find('.is-text').text(isHidden ? "View all" : "Hide all");
   });

  

});

$(".dropdown-menu a").click(function() {
   $(this).closest('.dropdown').find(".dropdown-menu a").removeClass('active');
   $(this).addClass('active');
   $(this).closest('.dropdown').find('button .toggle-text').text($(this).text());
}); 
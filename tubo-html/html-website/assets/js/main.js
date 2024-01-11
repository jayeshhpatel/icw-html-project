jQuery(document).ready(function($) {

$('[data-bs-toggle="tooltip"]').tooltip();

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
     
  });
  
});

var swiper = new Swiper(".hero-swiper", {
  effect: "cards",
  grabCursor: true,
  loop: "true",
  autoplay: {
   delay: 2500,
   disableOnInteraction: false
 },
 pagination: {
   el: ".swiper-pagination",
   clickable: true
 },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev"
 },

});

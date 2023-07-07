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
})


$('.menu-item-has-children .arrow').on('click',function(event){
   event.preventDefault();
   $(this).toggleClass('is-active');
   // $(this).next().toggleClass('d-none');
   $(this).parent().find('.sub-menu').first().toggle(300);
   $(this).parent().siblings().find('.sub-menu').hide(200);



   
});
var logoslider = new Splide( '.logo-slider', {
   type   : 'loop',
   drag   : 'free',
   pagination : false,
   arrows: false,
   perPage: 4,
   breakpoints: {
             991: {
                perPage:2,
                
             },
             425: {
                 perPage:1,
             }
            
          },
 } );
 
 logoslider.mount();
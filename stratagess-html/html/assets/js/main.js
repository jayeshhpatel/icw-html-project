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

   $(".counter").each(function () {
      var $this = $(this),
         countTo = $this.attr("data-countto");
         countDuration = parseInt($this.attr("data-duration"));
      $({ counter: $this.find('span').text() }).animate({
         counter: countTo
      },
      {
         duration: countDuration,
         easing: "linear",
         step: function () {
            $this.find('span').text(Math.floor(this.counter));
         },
         complete: function () {
            $this.find('span').text(this.counter);
         }
      });
   });
   $('.categories-btn').on('click', function(){
      $(this).toggleClass('active');
   })
})


$('.menu-item-has-children .arrow').on('click',function(event){
   event.preventDefault();
   $(this).toggleClass('is-active');
   // $(this).next().toggleClass('d-none');
   $(this).parent().find('.sub-menu').first().toggle(300);
   $(this).parent().siblings().find('.sub-menu').hide(200);
});

if ($('.logo-slider').length) {
   var logoslider = new Splide( '.logo-slider', {
      type   : 'loop',
      drag   : 'free',
      pagination : false,
      arrows: false,
      perPage: 4,
      breakpoints: {
         1200: {
            perPage:3,            
         },
         991: {
            perPage:2,                  
         },
         425: {
            perPage:1,
         }         
      },
   });
   
   logoslider.mount();
   };
 

    /* collapse */
    $(".collapse-item .collapse-title").click(function () {
      if ($(this).closest(".collapse-item").hasClass("is-open")) {
         $(this).closest(".collapse-item").stop().removeClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop().slideUp();
      } else {
         $(".collapse-item").removeClass("is-open");
         $(".collapse-item").find(".collapse-body").stop().slideUp();
         $(this).closest(".collapse-item").stop().addClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop().slideDown();
      }
  });
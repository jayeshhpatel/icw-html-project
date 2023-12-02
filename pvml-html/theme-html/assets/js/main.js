/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

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

$('a._target-popup').on('click', function(e) {
      e.preventDefault();
      $('.popup-action').trigger( "click" );
});

if ($('.customer-review-slider').length) { 
    var splide = new Splide( '.customer-review-slider', {
        perPage: 3,
        perMove: 1,
        gap: 30,
        breakpoints: {
            992: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
            480: {
                perPage: 1,
            },
        },
    });        
    splide.mount();
}
if ($('.team-slider').length) { 
    var splide = new Splide( '.team-slider', {
        perPage: 2,
        perMove: 1,
        arrows: false,
        gap: 30,
        classes: {
            pagination: 'splide__pagination dark-pagination',
        },
        breakpoints: {
            1200: {
                perPage: 2,
                autoWidth: true,
            },
            767: {
                perPage: 2,
                gap: 20,
                autoWidth: true,
            },
            480: {
                perPage: 1,
            },
        },
    });        
    splide.mount();
}

icw_cf7_labels();
});

function icw_cf7_labels() {
    var input = $('.form-group:not(.form-group-fixed) .form-control');
    if (input.length) {
 
       $(".form-group:not(.form-group-fixed) .form-control").each(function(){
          var input_value = $(this).val();
          if(input_value!='') {
              $(this).parents(".form-group").addClass("focused");
          }
        });
 
       input.focus(function () {
          // console.log("__focus");
          $(this).parents('.form-group').addClass('focused').removeClass('has-data');
       });
       input.focusout(function () {
          // console.log("__focusout");
          $(this).parents('.form-group').removeClass('focused');
          if (this.value == "") {
             $(this).parents('.form-group').removeClass('focused');
             $(this).parents('.form-group').removeClass('has-data');
          } else {
             $(this).parents('.form-group').removeClass('focused').addClass('has-data');
          }
       });
    }
 }
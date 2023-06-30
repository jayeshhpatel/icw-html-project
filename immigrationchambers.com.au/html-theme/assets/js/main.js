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
      $(this).parent().siblings().find('.sub-menu').hide(200);
      
      //Hide menu when clicked outside
      $(this).parent().find('.sub-menu').parent().mouseleave(function(){ 
         var thisUI = $(this);
         $('html').click(function(){
            thisUI.children(".sub-menu").hide();
            thisUI.children(".arrow").removeClass('is-active');
            $('html').unbind('click');
         });
      });
   });
   
   $(".collapse-item .collapse-title").click(function () {
      if ($(this).closest(".collapse-item").hasClass("is-open")) {
         $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
      } else {
         $(".collapse-item").removeClass("is-open");
         $(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
         $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
         $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown();
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

if ($('.hero-slider').length) {
    $('.hero-slider').slick({
        dots:true,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed:6000,
        lazyLoad:"progressive",
        speed:600,
        accessibility: false,
        fade: true,
        // lazyLoad: 'ondemand',
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    });
};
if ($('.testimonial-slider').length) {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        accessibility: false,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    arrows: false,
                    dots:true,
                }
            }
        ]
    });
};
if ($('.helper-slider').length) {
    $('.helper-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        accessibility: false,
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                    arrows: false,
                    dots:true,
                }
            },
            {
            breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: false,
                    dots:true,
                }
            }
        ]
    });
};
if ($('.team-slider').length) {
    $('.team-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 5,
        infinite: true,
        accessibility: false,
        lazyLoad: 'ondemand',
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    dots:true,
                    arrows: false,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    dots:true,
                    centerMode: true,
                    centerPadding: '80px',
                    arrows: false,
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '60px',
                    arrows: false,
                    dots:true,
                }
            }
        ]
    });
};

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
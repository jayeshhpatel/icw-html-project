/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
// var $ = jQuery.noConflict();
// jQuery(document).ready(function($) {
/*
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

// if ($('.testimonial-slider').length) {
    jQuery('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 1,
        infinite: true,
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
// };
if ($('.helper-slider').length) {
    $('.helper-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
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
};*/
if (jQuery('.team-slider').length > 0) {
    jQuery('.team-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToShow: 5,
        infinite: true,
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
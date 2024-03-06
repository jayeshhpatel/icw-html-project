
jQuery(document).ready(function($) {


   $(window).resize(function() {
      var windowWidth = $(window).width();
      if(windowWidth > 991){
         $('.toggle-sidebar,body,.main-header').removeClass('is-visible');
      }
  });
  $('.toggle-sidebar').on('click', function (e) {
      e.preventDefault();
      $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
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


   $('.counting').each(function () {
      var $this = $(this),
         countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate({
         countNum: countTo
      },
      {
         duration: 3000,
         easing: 'linear',
         step: function () {
            $this.text(Math.floor(this.countNum));
         },
         complete: function () {
            $this.text(this.countNum);
            //alert('finished');
         }
      });
   });

   $('.btnNext').click(function() {
      $('.nav-pills .active').parent().next('li').find('a').trigger('click');
  });
  
  $('.btnPrevious').click(function() {
      $('.nav-pills .active').parent().prev('li').find('a').trigger('click');
  });

  
  var splideOptions = {
   perPage: 5,
   autoWidth: true,
   pagination: false,
   arrows: false,
   gap: 50,
   breakpoints: {
       991: {
           perPage: 3,
           arrows: false,
           gap: 30,
           type: 'loop',
           focus: 'center',
           autoScroll: {
               speed: 1
           }
       },
   },
};
               // document.addEventListener('DOMContentLoaded', function () {
if (jQuery('.splide-loop').length) { 
new Splide('.splide-loop', splideOptions).mount(window.splide.Extensions);
}
// });

$(function () {
   $(".popup img").click(function () {
       let $src = $(this).attr("src");
       $(".show").fadeIn();
       $(".img-show img").attr("src", $src);
   });

   $("span.close").click(function () {
       $(".show").fadeOut();
     $('.img-show img').css({'width': '100%', 'height': '100%'});
   });
   
   $('.plus').on('click', function(){
let img_widht = $('.img-show img').width()
let new_widht = img_widht+100;
$('.img-show img').width(new_widht);
$('.img-show img').height('auto')
   })

   $('.minus').on('click', function(){
let img_widht = $('.img-show img').width()
let new_widht = img_widht-100;
if(new_widht < 500) {
 new_widht = 500;
}
$('.img-show img').width(new_widht);
$('.img-show img').height('auto')
   })

   $('.reset').on('click', function(){ 
$('.img-show img').css({'width': '100%', 'height': '100%', 'top': '0', 'left': '0'});
   });




});

var glightbox = GLightbox({
   loop: true,
   selector: ".glightbox",
   openEffect: "zoom",
   closeEffect: "fade",
   startAt: 0,
   closeOnOutsideClick: false,
   zoomable: true,
   height: "auto",
   width: "100vw",
   height: "100vh"
 });
 glightbox.replace();

  
});


var splide = new Splide( '.splide', {
   type   : 'loop',
   pagination : false,
 } );
 
 splide.mount();


var autoslider = new Splide( '.auto-slider', {
   type   : 'loop',
   padding: '5rem',
   perPage: 5,
   // perMove: 5,
   arrows: false,
   pagination: false,
   gap: '10px',
   autoplay : 'true',
   
   breakpoints: {
      1024: {
         perPage: 3,
       },
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
    autoScroll: {
      speed: 1,
    },
 } );
 
 autoslider.mount();
 

 if ($('.second-slider').length) {
   var secondslider = new Splide('.second-slider', {
       perPage: 5,
       perMove: 1,
       pagination: false,
       gap: '30px',
       height: '100%',
       breakpoints: {
           991: {
               perPage: 3,
               perMove: 3,
           }
       }
   });
   secondslider.mount();
};








(function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 



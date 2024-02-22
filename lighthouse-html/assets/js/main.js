/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
   $('[data-bs-toggle="tooltip"]').tooltip();
   $('[data-bs-toggle="popover"]').popover();

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


if ($('.play-iframe').length){
    $('.play-iframe').click(function(ev){	
        videourl = $(this).data('videosrc')+"?api=1&autoplay=1&muted=1&rel=0&enablejsapi=1";
        if($(this).data('ext') == 'mp4'){
            video = '<div class="video-wrap ratio ratio-16x9"><video class="embed-responsive-item" controls autoplay controlsList="nodownload" oncontextmenu="return false;"><source src="'+videourl+'" type="video/mp4"></video></div>';
        } else {
            video = '<div class="video-wrap ratio ratio-16x9"><iframe class="embed-responsive-item play-in_iframe" src="'+videourl+'" controls="0" scrolling="no" autoplay="false" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
        }
        
        $(this).parents('.play-video-inline').html(video);
        ev.preventDefault();
    });
}

$('.link-hash').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ 
        scrollTop: $($(this).attr('href')).offset().top -90
    }, 50);
    return false;
});

});
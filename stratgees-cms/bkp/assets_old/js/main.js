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


if ($('.logo-slider').length) {
   var logoslider = new Splide( '.logo-slider', {
      type   : 'loop',
      pagination : false,
      autoWidth: true,
      arrows: false,      
   });
   
   logoslider.mount();
};
 
// if($('.testimonail-card .sort-info').length){
//    var info_height = 0;
//    setTimeout(() => {
//       $('.testimonail-card .sort-info').each(function (item){
//          if($(this).outerHeight() > info_height){
//             console.log($(this).outerHeight(), 'height')
//             info_height = $(this).outerHeight();
//          }
//       });
//       $('.testimonail-card .sort-info').css('height', info_height+'px');
//    }, 1000);
// }

$(".result-progress").each(function(){
  
   var $bar = $(this).find(".bar");
   var $val = $(this).find("span");
   var perc = parseInt( $val.text(), 10);
 
   $({p:0}).animate({p:perc}, {
     duration: 3000,
     easing: "swing",
     step: function(p) {
       $bar.css({
         transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
         // 45 is to add the needed rotation to have the green borders at the bottom
       });
       $val.text(p|0);
     }
   });
 });

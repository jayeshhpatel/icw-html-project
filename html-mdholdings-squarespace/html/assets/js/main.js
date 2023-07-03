$('#icw-icon-slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: false,
    speed: 500,
    swipe: true,
    draggable: true,
    dots: true,
    appendDots: '#icw-icon-slider-control',
    arrows: false,
    customPaging : function(slider, i) {
        var slide = $(slider.$slides[i]);
        var label = slide.attr('data-label');
        return '<h3 class="dot"><b>'+label+'</b></h3>';
    }
});

$('.icw-slider-testimonial').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    autoplay: false, 
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
        },
    ]
}); 

$(".icw-slider-logo").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  pauseOnHover: true,
  responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
          ]
});
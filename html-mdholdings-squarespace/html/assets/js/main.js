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
    infinite: false,
    focusOnSelect: true,
    autoplay: false,
}); 
jQuery(document).ready(function($) {
   	$('[data-bs-toggle="tooltip"]').tooltip();
 
	$('.toggle-sidebar,.bg-overly, .navbar-collapse a').on('click', function (e) {
		$('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-toggle');
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
});

if (jQuery('.splide-loop').length) {
    var splideOptions = {
        perPage: 8,
        autoWidth: true,
        pagination: false,
        arrows: false,
        gap: 70,   
        type: 'loop',
        focus: 'center',
        autoScroll: {
            speed: 1
        },                   
        breakpoints: {
            991: {
                perPage: 3,
                arrows: false,
                gap: 30,                              
            },
        },
    };
    new Splide('.splide-loop', splideOptions).mount(window.splide.Extensions);
}
if (jQuery('.splide-testimonials').length) {
    var splideOptions = {
        perPage: 4,
        perMove: 1,
        pagination: true,
        arrows: false,
        focus  : 0,
        omitEnd: true,
        gap: 30,  
        type: 'loop',                       
        breakpoints: {
            991: {
                perPage: 3,
                arrows: false,
                gap: 20,                              
            },
            767: {
                perPage: 2,                     
            },
            575: {
                perPage: 1,                     
            },
        },
    };
    new Splide('.splide-testimonials', splideOptions).mount();
}
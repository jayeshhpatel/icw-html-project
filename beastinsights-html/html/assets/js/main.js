jQuery(document).ready(function($) {
   	$('[data-bs-toggle="tooltip"]').tooltip();
 
	$('.toggle-sidebar,.bg-overly').on('click', function (e) {
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
    if($('.navbar-collapse').length) {
        $('.navbar-collapse a').bind('click', function(e) {
            e.preventDefault(); 
            var target = $(this).attr("href"); 
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top                      
            }, 600, function() {
                location.hash = target;
            });
            return false;
        });
    }
});

$(window).scroll(function() {
    if($('.nav-section').length) {
        var scrollDistance = $(window).scrollTop();    
        $('.nav-section').each(function(i) {
            if ($(this).position().top - 150 <= scrollDistance) {
                $('.navbar-collapse li').removeClass('active');
                console.log($('.navbar-collapse a').eq(i).parent('li'));
                $('.navbar-collapse a').eq(i).parent('li').addClass('active');
            } else if($('.navbar-collapse').position().top > scrollDistance) {
                $('.navbar-collapse li').removeClass('active');
               
            }
        });
    }
}).scroll();
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
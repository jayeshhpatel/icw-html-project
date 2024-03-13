jQuery(document).ready(function($) {
    if ($('.hero-splide').length) {
        var heroSplide = new Splide( '.hero-splide', {
            type   : 'loop',
            autoplay: true,
            interval: 8000,
            perPage: 1,
            perMove: 1,
            pagination: true,
            pauseOnHover: false,
        });
        heroSplide.mount();
    }
    if ($('.sponsor-splide').length) {
        var sponsorSplide = new Splide( '.sponsor-splide', {
            type   : 'slide',
            perPage: 3,
            perMove: 1,
            autoWidth: true,
            pagination: false,
            breakpoints: {
                992: {
                  perPage: 2,
                  focus  : 'center',
                },
            },
        } );

        sponsorSplide.mount();
    }
    if ($('.member-splide').length) {
        var memberSplide = new Splide( '.member-splide', {
            type   : 'slide',
            perPage: 4,
            perMove: 1,
            pagination: false,
            breakpoints: {
                1360: {
                  perPage: 3,
                  focus  : 'center',
                },
                992: {
                  perPage: 2,
                  focus  : 'center',
                },
                767: {
                  perPage: 1,
                  focus  : 'center',
                  autoWidth: true,
                },
            },
        });

        memberSplide.mount();
    }
    if ($('.races-splide').length) {
        var racesSplide = new Splide( '.races-splide', {
            type   : 'slide',
            perPage: 4,
            perMove: 1,
            pagination: false,
            breakpoints: {
                1360: {
                  perPage: 3,
                  focus  : 'center',
                },
                992: {
                  perPage: 2,
                  focus  : 'center',
                },
                767: {
                  perPage: 1,
                  focus  : 'center',
                },
            },
        });

        racesSplide.mount();
    }
    if ($('.logo-navigation-slider-block').length) {
        var logoContent = new Splide( '.logo-content-splide', {
            type: 'fade',
            pagination: false,
            arrows: false,
        });
        
        var logoNav = new Splide( '.logo-nav-splide', {
            rewind: true,           
            isNavigation: true,
            focus: 'center',
            type   : 'loop',
            autoplay: true,
            speed: 10,
            pagination: false,
            perPage: 4,
            perMove: 1,
            arrows: false,
            autoWidth: true,
            breakpoints: {
                1360: {
                  perPage: 3,
                },
                992: {
                  perPage: 2,
                },
                767: {
                  perPage: 1,
                },
            },
        });        
        logoContent.sync( logoNav );
        logoContent.mount();
        logoNav.mount();
    }
    if($('.btn-hash').length) {
        $('.btn-hash').bind('click', function(e) {
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
    if($('.sticky-navigation-section').length) {
        var scrollDistance = $(window).scrollTop();    
        $('.nav-section').each(function(i) {
            if ($(this).position().top - 150 <= scrollDistance) {
                $('.sticky-navbar a.active').removeClass('active');
                $('.sticky-navbar a').eq(i).addClass('active');
            } else if($('.sticky-navbar').position().top > scrollDistance) {
                $('.sticky-navbar a.active').removeClass('active');
               
            }
        });
        if( scrollDistance > $('.sticky-navigation-section').height() ) {
            $('.sticky-navigation-section').addClass('is-sticky');
        } else {
            $('.sticky-navigation-section').removeClass('is-sticky');
        }
    }
}).scroll();
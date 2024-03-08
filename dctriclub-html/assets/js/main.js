jQuery(document).ready(function($) {
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
    if ($('.logo-navigation-slider-block').length) {
        var logoContent = new Splide( '.logo-content-splide', {
            type: 'fade',
            pagination: false,
            arrows: false,
        } );
        
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
        } );
        
        logoContent.sync( logoNav );
        logoContent.mount();
        logoNav.mount();
    }
});
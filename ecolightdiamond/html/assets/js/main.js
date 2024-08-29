/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    if ($('[data-bs-toggle=tooltip]').length) {
        $('body').tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });

    if ($('.main-header').length) {
        if (jQuery(this).scrollTop() > 100) {
            $('.main-header').addClass('fixed-header');
        } else {
            $('.main-header').removeClass('fixed-header');
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 100) {
                $('.main-header').addClass('fixed-header');
            } else {
                $('.main-header').removeClass('fixed-header');
            }
        });
    }
    if ($('li.menu-item-has-children').length) {
        $('li.menu-item-has-children > a').after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    $('.menu-list-block .title').on('click',function(event){
        event.preventDefault();
        $(this).parent('.menu-list-block').toggleClass('is-active');
        // $(this).parent().find('.menu-list-block').toggle(300);
    });
    $('.tab-nav li a').on('click', function(){
        var target = $(this).attr('href');
        $(this).parents('.tab-nav').find('a').removeClass('active');
        $(this).addClass('active');
        $(target).fadeIn('fast').siblings('.tab-content-block').hide();
        return false;
    });
    $('.collapse-item .collapse-title').click(function () {
        if ($(this).closest('.collapse-item').hasClass('is-open')) {
           $(this).closest('.collapse-item').stop(true,true).removeClass('is-open');
           $(this).closest('.collapse-item').find('.collapse-body').stop(true,true).hide('fast');
        } else {
           $('.collapse-item').removeClass('is-open');
           $('.collapse-item').find('.collapse-body').stop(true,true).hide();
           $(this).closest('.collapse-item').stop(true,true).addClass('is-open');
           $(this).closest('.collapse-item').find('.collapse-body').stop(true,true).slideDown('fast');
        }
        return false;
    }); 
    if ($('.range-slider').length) {
        $('.range-slider').each(function () {
            let $this = $(this),
            rangeInput = $this.find('.range-input input'),
            priceInput = $this.find('.price-input input'),
            range = $this.find('.slider .progress'),
            priceGap = 10;

            priceInput.each(function () {
                $(this).on('input', function (e) {
                let minPrice = parseFloat(priceInput.eq(0).val()).toFixed(2),
                    maxPrice = parseFloat(priceInput.eq(1).val()).toFixed(2);

                if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput.eq(1).attr('max')) {
                    if ($(this).hasClass('input-min')) {
                        rangeInput.eq(0).val(minPrice);
                        range.css('left', (minPrice / rangeInput.eq(0).attr('max')) * 100 + '%');
                    } else {
                        rangeInput.eq(1).val(maxPrice);
                        range.css('right', 100 - (maxPrice / rangeInput.eq(1).attr('max')) * 100 + '%');
                    }
                }
                });
            });

            rangeInput.each(function () {
                $(this).on('input', function (e) {
                    let minVal = parseFloat(rangeInput.eq(0).val()).toFixed(2),
                        maxVal = parseFloat(rangeInput.eq(1).val()).toFixed(2);

                    if (maxVal - minVal < priceGap) {
                        if ($(this).hasClass('range-min')) {
                            rangeInput.eq(0).val(maxVal - priceGap);
                        } else {
                            rangeInput.eq(1).val(minVal + priceGap);
                        }
                    } else {
                        priceInput.eq(0).val(minVal);                        
                        priceInput.eq(1).val(maxVal);
                        range.css('left', (minVal / rangeInput.eq(0).attr('max')) * 100 + '%');
                        range.css('right', 100 - (maxVal / rangeInput.eq(1).attr('max')) * 100 + '%');
                    }
                });
            });
        });
    }
});
if($('.hero-slider').length){
    var herosplide = new Splide('.hero-slider', {
        type: 'fade',
        perPage: 1,
        perMove: 1,
        arrows: false,
        classes: { pagination: 'icw-slide-dots', }
    });
    herosplide.mount();
}

if($('.jewelry-splide').length){
    var splide = new Splide( '.jewelry-splide', {
        pagination: false,
        arrows: false,
    });
        
    var thumbnails = document.getElementsByClassName( 'thumbnail' );
    var current;
    for ( var i = 0; i < thumbnails.length; i++ ) {
        initThumbnail( thumbnails[ i ], i );
    }  
    function initThumbnail( thumbnail, index ) {
        thumbnail.addEventListener( 'click', function () {
            splide.go( index );
        });
    }  
    splide.on( 'mounted move', function () {
        var thumbnail = thumbnails[ splide.index ];
        if ( thumbnail ) {
            if ( current ) {
            current.classList.remove( 'is-active' );
            }
            thumbnail.classList.add( 'is-active' );
            current = thumbnail;
        }
    } );   
    splide.mount();
}
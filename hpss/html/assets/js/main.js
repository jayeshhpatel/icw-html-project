/* Moblie Menu */
var $ = jQuery.noConflict();
jQuery(document).ready(function($) {

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if(windowWidth > 991){
            $('.bg-overly,.toggle-sidebar,body,.main-header').removeClass('is-visible');
        }
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
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().find('.sub-menu').first().toggle(300);
        
        //Hide menu when clicked outside
        $(this).parent().find('.sub-menu').parent().mouseleave(function(){ 
           var thisUI = $(this);
           $('html').click(function(){
              thisUI.children(".sub-menu").hide();
              thisUI.children(".arrow").removeClass('is-active');
              $('html').unbind('click');
           });
        });
    });
    if ($('[data-bs-toggle=tooltip]').length) {
        $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
        }
});

if ($('.event-slider').length) {
    var eventSlider = new Splide( '.event-slider', {
        perPage: 2,
        perMove: 1,
        arrowPath: 'M11 2L28.949 19.9998L11 38',        
        pagination : false,
        gap    : '30px',
        padding: '1rem',
        snap   : true,
        type   : 'loop',
        breakpoints: {
            767: {
                perPage: 1,
                arrows: false,
                pagination: true,
            },
        },
    });  
    eventSlider.mount();
 };

 /*
    Masonry Layout JS Vanilla
    https://github.com/Mathiew82/masonry-layout-vanilla
*/

var fecthMasonry = function (container, items, columns) {
    var CONTAINER_EL = document.querySelector("." + container);
    var WRAPPER_CONTAINER_EL = CONTAINER_EL.parentNode;
    var ITEMS_ELS = document.querySelectorAll("." + items);
    CONTAINER_EL.parentNode.removeChild(CONTAINER_EL);
    var NEW_CONTAINER_EL = document.createElement('div');
    NEW_CONTAINER_EL.setAttribute('id', container);
    NEW_CONTAINER_EL.classList.add('masonry-layout', "columns-" + columns);
    WRAPPER_CONTAINER_EL.appendChild(NEW_CONTAINER_EL);
    for (var i = 1; i <= columns; i++) {
        var COLUMN = document.createElement('div');
        COLUMN.classList.add("masonry-column-" + i);
        NEW_CONTAINER_EL.appendChild(COLUMN);
    }
    var countColumn = 1;
    ITEMS_ELS.forEach(function (item) {
        var col = document.querySelector("#" + container + " > .masonry-column-" + countColumn);
        col.appendChild(item);
        countColumn = countColumn < columns ? countColumn + 1 : 1;
    });
};
if ($('.masonry-grid-layout').length) {
    if ($(window).width() > 767) {
        fecthMasonry('masonry-grid-layout', 'card', 2);
    }
}
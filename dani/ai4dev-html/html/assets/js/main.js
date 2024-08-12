/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="popover"]').popover();
    $('[data-bs-toggle="tooltip"]').tooltip({ boundary: 'window' });

    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body,.main-header').toggleClass('is-visible');
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
        $("li.menu-item-has-children").hover(
            function () {
              $('.bg-overlay').addClass("is-hover");
            },
            function () {
              $('.bg-overlay').removeClass("is-hover");
            }
        );
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
    });
    if ($('.star-animation').length) {
        $(".star-animation.is-hover").hover(
            function () {
                $(this).removeClass("is-star-leave");
                $(this).addClass("is-star-hover");
            },
            function () {
                $(this).removeClass("is-star-hover");
                $(this).addClass("is-star-leave");
                setTimeout(() => {
                    $(this).removeClass("is-star-leave");
                }, 2000);
            }
        );
    }
});
var isHidden = true;
$('.is-show-all').on('click', function(e) {
    e.preventDefault();
    $('.is-xs-none').toggleClass('is-show');
    isHidden = !isHidden;
    // Update button text based on the boolean value
    $(this).find('.is-text').text(isHidden ? "Show All" : "Hide All");
   
    if(isHidden){
        var offset_target = $(this).parents('.main-section').offset().top;
        $('html, body').animate({ 
            scrollTop: offset_target
        }, 50);
    } 
});

if ($('.topic_splide').length) {
    var splide = new Splide( '.topic_splide', {
        type   : 'slide',
        perPage: 3,
        perMove: 1,
        gap: '48px',
        pagination: false,
        classes: {
            arrows: 'icw-splide-arrows',
        },
        breakpoints: {
            1200: {
                gap: '24px',
            },
            992: {
                perPage: 2,
            },
            767: {
                perPage: 1,
            },
        }
    } );
    
    splide.mount();
}

window.onload = function () {
    if(jQuery('.form-with-slider-labels').length) {
        setTimeout(function(){
        hubspot_labels(); 
        }, 800);
    }  
}; 

function hubspot_labels() {
    //turn autocomplete off for forms on all browsers, except Chrome
    jQuery('form').attr('autocomplete','off');
    jQuery('input, .hs-input').attr('autocomplete','off');

    // jQuery('input, .hs-input').prop('readonly', true);

    //turn autocomplete off for forms for Chrome 
    //based on a browser bug noted here: https://bugs.chromium.org/p/chromium/issues/detail?id=370363#c7
    jQuery('html[data-useragent*="Chrome"] form').attr('autocomplete','false');
    jQuery('html[data-useragent*="Chrome"] form input').attr('autocomplete','false');

    jQuery(".form-with-slider-labels .hs-input").focus(function(){
        jQuery(this).closest(".hs-form-field").removeClass("not-focused");
        jQuery(this).closest(".hs-form-field").addClass("has-focus");

        jQuery(this).prop('readonly', false);
        console.log("jay-focus");

    }).blur(function(){
        if( !jQuery(this).val() ) { //check to see if the input has a value
            jQuery(this).closest(".hs-form-field").removeClass("has-focus");
            jQuery(this).closest(".hs-form-field").addClass("not-focused");
        } else {
            jQuery(this).closest(".hs-form-field").addClass("has-value");
        }
    })
    //on input change, if the value is empty, remove "has-value" class.
    jQuery(".form-with-slider-labels .hs-input").on("change paste keyup", function() {
        if( !jQuery(this).val() ) { //check to see if the input has a value
            jQuery(this).closest(".hs-form-field").removeClass("has-value");
        }
    });

    jQuery('.form-with-slider-labels .hs-input').on( 'focus', ':input', function(){
        jQuery(this).attr( 'autocomplete', 'off' );
    });

    // setTimeout(function(){
        jQuery(".form-with-slider-labels .hs-input").each(function(){
            var input_value=jQuery(this).val();
            if(input_value!='') {
               jQuery(this).parents(".hs-form-field").removeClass("not-focused");
                jQuery(this).parents(".hs-form-field").addClass("has-focus");
            }
          });
        jQuery(".form-with-slider-labels .hs-input").val();
    // }, 500);

    jQuery('.form-with-slider-labels .hs-input[name=\"firstname\"]').keydown(function (e) {
        if (e.ctrlKey || e.altKey) {
           e.preventDefault();
       } else {
           var key = e.keyCode;
           if (!((key == 9) || (key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90) || (key >= 186 && key <= 222) )) {
            // if (!((key == 9) || (key == 8) || (key == 32) || (e.shiftKey && key >= 48 && key <= 57)||(key >= 65 && key <= 90) || (key >= 186 && key <= 222))) { 
           e.preventDefault();
           }
       }
     });

     jQuery('.form-with-slider-labels .hs-input[name=\"linkedin_url\"]').blur(function() {
        var input=jQuery(this);
        var re = /^((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/;
        var is_url=re.test(input.val());
        if(is_url){
            input.removeClass("invalid error").addClass("valid");
            return true;
        } else{
            input.val('');
            return false;
        }
    });	
}
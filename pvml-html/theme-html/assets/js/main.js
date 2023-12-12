/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

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

    if ($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children > a").after('<i class="arrow"></i>');
    }
    $('li.menu-item-has-children .arrow').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('is-active');
        $(this).parent().find('.sub-menu').first().toggle(300);
        // $(this).parent().siblings().find('.sub-menu').hide(200);
        
        //Hide menu when clicked outside
        /*
        $(this).parent().find('.sub-menu').parent().mouseleave(function(){ 
            var thisUI = $(this);
            $('html').click(function(){
                thisUI.children(".sub-menu").hide();
                thisUI.children(".arrow").removeClass('is-active');
                $('html').unbind('click');
            });
        });
        */
    });
   
    $(".collapse-item .collapse-title").click(function () {
        if ($(this).closest(".collapse-item").hasClass("is-open")) {
            $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
            $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp("fast");
        } else {
            $(".collapse-item").removeClass("is-open");
            $(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
            $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
            $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown("fast");
        }
        return false;
    });

    /* scroll page to top */
    if ($('.back-to-top').length) {
        $(window).scroll(function() {
        if($(this).scrollTop() > 200) {
            $('.back-to-top').addClass('visible');	
        } else {
            $('.back-to-top').removeClass('visible');
        }
        });
        $('.back-to-top').on('click', function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:0},50);
        });
    }

    // $('a[href*=#]:not([href=#])').on('click', function(e) {
    //     e.preventDefault();
    //     $('html, body').animate({ 
    //         scrollTop: $($(this).attr('href')).offset().top
    //     }, 50);
    // });

    $('a._target-popup').on('click', function(e) {
        e.preventDefault();
        $('.popup-action').trigger( "click" );
    });

    if ($('.customer-review-slider').length) { 
        var splide = new Splide( '.customer-review-slider', {
            perPage: 3,
            perMove: 1,
            gap: 30,
            breakpoints: {
                992: {
                    perPage: 2,
                },
                767: {
                    perPage: 1,
                },
                480: {
                    perPage: 1,
                },
            },
        });        
        splide.mount();
    }
    if ($('.team-slider').length) { 
        var splide_team = new Splide( '.team-slider', {
            perPage: 2,
            perMove: 1,
            arrows: false,
            gap: 30,       
            breakpoints: {
                575: {
                    perPage: 1,
                    gap: 20,  
                    autoWidth: true,
                },
            },
        });
        splide_team.mount();
    }
    if ($('.founder-slider').length) { 
        var splide_founder = new Splide( '.founder-slider', {
            perPage: 6,
            perMove: 1,
            pagination: false,
            arrows: false,            
            gap: 40,       
            breakpoints: {
                992: {
                    perPage: 3,
                    arrows: true,
                },
                767: {
                    perPage: 2,
                    arrows: true,
                    gap: 20, 
                },
            },
        });
        splide_founder.mount();
    }
    if ($('.blog-slider').length) { 
        var splide_blog = new Splide( '.blog-slider', {
            perPage: 3,
            perMove: 1,
            pagination: false,
            arrows: true,            
            gap: 30,     
            type   : 'loop',
            updateOnMove: true,
            autoWidth: true,
            breakpoints: {
                767: {
                    perPage: 1,
                    arrows: true,
                },
            },
        });
        splide_blog.mount();
    }
    if ($('.workspace-slider').length) { 
        var splide_workspace = new Splide( '.workspace-slider', {
            pagination: false,
            arrows: false, 
            autoplay: true, 
            type: 'loop',
            lazyLoad: true,
            gap: 20, 
        });
        var bar = splide_workspace.root.querySelector('.icw-slider-progress-bar');
        // Updates the bar width whenever the carousel moves:
        var window_width = window.innerWidth;
        if (window_width > 767) {
            splide_workspace.on( 'mounted move', function () {
                var end  = splide_workspace.Components.Controller.getEnd() + 1;
                var rate = Math.min( ( splide_workspace.index + 1 ) / end, 1 );
            
                bar.style.height = String( 100 * rate ) + '%'; console.log('here');
            });
        } else {
            
            splide_workspace.on( 'mounted move', function () {
                var end  = splide_workspace.Components.Controller.getEnd() + 1;
                var rate = Math.min( ( splide_workspace.index + 1 ) / end, 1 );
            
                bar.style.width = String( 100 * rate ) + '%'; console.log('there');
            });
                
        }
        window.addEventListener('resize', function(){
            if (window_width < 767) { 
                location.reload();
            }
        });
        splide_workspace.mount();
    }
    if ($('.review-slider').length) { 
        var splide_review = new Splide( '.review-slider', {
            perPage: 1,
            perMove: 1,
            pagination: false,
            arrows: true,            
            gap: 30, 
        });
        splide_review.mount();
    }

    icw_cf7_labels();

    $('.range-slider').on('change', function() {
        let val = $(this).val();
        $('.value').html(val);
        var newValue = ((val - $(this).attr('min')) * 100) / ($(this).attr('max') - $(this).attr('min'))
        var newPosition = 16 - newValue * 0.32;
        $('.range-slider-block').css("--range-progress","calc("+ newValue +"% + ("+ newPosition +"px))"); 
    });
});

function icw_cf7_labels() {
    var input = $('.form-group:not(.form-group-fixed) .form-control');
    if (input.length) {
 
       $(".form-group:not(.form-group-fixed) .form-control").each(function(){
          var input_value = $(this).val();
          if(input_value!='') {
              $(this).parents(".form-group").addClass("focused");
          }
        });
 
       input.focus(function () {
          // console.log("__focus");
          $(this).parents('.form-group').addClass('focused').removeClass('has-data');
       });
       input.focusout(function () {
          // console.log("__focusout");
          $(this).parents('.form-group').removeClass('focused');
          if (this.value == "") {
             $(this).parents('.form-group').removeClass('focused');
             $(this).parents('.form-group').removeClass('has-data');
          } else {
             $(this).parents('.form-group').removeClass('focused').addClass('has-data');
          }
       });
    }
 }

//Since HubSpot forms are rendered after the DOM builds, you must trigger the manipulation after the window loads
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
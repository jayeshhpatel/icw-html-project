/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();
jQuery(document).ready(function($) {

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

   if ($('.testimonial-slider').length) {
      $('.testimonial-slider').slick({
         arrows: true,
         slidesToShow: 2,
         infinite: true,
         dots: false,
         accessibility: false,
         responsive: [
            {
                  breakpoint: 992,
                  settings: {
                     slidesToShow: 1,
                  }
            }
         ]
      });
   };
   if ($('.blog-slider').length) {
      $('.blog-slider').slick({
         arrows: false,
         slidesToShow: 3,
         infinite: true,
         accessibility: false,
         responsive: [
            {
               breakpoint: 991,
               settings: {
                     slidesToShow: 3,
                     dots: true,
                     arrows: false,
               }
            },
            {
               breakpoint: 768,
               settings: {
                     slidesToShow: 2,
                     dots: true,
                     centerMode: true,
                     centerPadding: '80px',
                     arrows: false,
               }
            },
            {
               breakpoint: 480,
               settings: {
                     slidesToShow: 1,
                     centerMode: true,
                     centerPadding: '60px',
                     arrows: false,
                     dots: true,
               }
            }
         ]
   });
   };

   var currentPage = 1;
   $('#load-more').on('click', function(event) {
      event.preventDefault();
      currentPage++; 
   if (!($('#load-more').hasClass('is-loading') || $('#load-more').hasClass('no-posts'))) {
       $.ajax({
         type: 'POST',
         url: icw.ajax_url,
         dataType: 'html',
         data: {
            action: 'do_post_loadmore',
            nonce: icw.nonce,
            paged: currentPage,
         },
         beforeSend: function () {
            $('#load-more').addClass('is-loading');
         },
         success: function (res) {
            if (res.length) {
               $('#icw-ajaxposts').append(res);
               $('#load-more').removeClass('is-loading');
            } else {
               
               $('#load-more').removeClass('is-loading');
               $('#load-more').addClass('no-posts d-none');
               $('#load-more').parent().html('<p>No older posts found</p>');
            }
         }
      });
   }
   });

   // if ($('.clipboard-btn').length) {
   //    copykey();
   // }
   
   // Get VIP Access
   if ($('.email-input-block .btn').length) {
      $( ".email-input-block" ).submit(function( event ) {
         var email = $("input.email-get-early",this).val();
         var formtarget = $("input.form-target",this).val();
         localStorage.setItem("email-get-early", email);

         $(".email-input-block .btn").addClass('loader');
         var fields = [{ 'name' : 'email', 'value': email}];
         var url = 'https://api.hsforms.com/submissions/v3/integration/submit/23237715/dd752d91-e9a5-4e4e-a580-1fd18281a254';
         icw_hubspot_data_send(fields, url, window.location.origin + '');
         setTimeout(function() {
            window.location.href = formtarget;
            $(".email-input-block .btn").removeClass('loader');
          }, 2500);
         event.preventDefault();
      });
   }

   if ($('.coresets-sticky').length) {
     $('.coresets-sticky a[href^="#"]').click(function(e) {
      e.preventDefault();
      var toppadding = '120';
      if($(window).width() < 575) {
         var toppadding = '430';  
      }

      $(".coresets-sticky").removeClass("scroll-down");
      $(".coresets-sticky").removeClass("scroll-up");
      
      var target = $(this).attr('href');
      var stop = $(target).offset().top - toppadding;
      $('html, body').animate({scrollTop: stop + 'px'}, 600);
    });
   }

   if ($('#get-license-key').length) {
      var datakey = localStorage.getItem("data-key");
      if(datakey !== "" && datakey != undefined && datakey != null){
         $("#get-license-key").html(datakey);
      }
   }
   if ($('#show-license-key').length) {
      var emailgetearly = localStorage.getItem("email-get-early");
      console.log("emailgetearly", emailgetearly);
      if(emailgetearly !== "" && emailgetearly != undefined && emailgetearly != null){
         $("#show-license-key").html('<li>from dataheroes.utils import activate_account</li><li>activate_account("<a class="btn-link" href="mailto:'+emailgetearly+'"><strong class="text-darkred">'+emailgetearly+'</strong></a>")</li>');
      }
      // var datakey = localStorage.getItem("data-key");
      // if(datakey !== "" && datakey != undefined && datakey != null){
      //    $("#show-license-key").html('<li>from dataheroes.utils import DataHeroesConfiguration</li><li>DataHeroesConfiguration().add_params(licensing__license_key="<strong class="text-darkred">'+ datakey +'</strong>")</li>');
      // }
   }

   /* toggle */
   if ($('[data-toggle]').length) {
      $('[data-toggle]').on("click", function(e) {
         e.preventDefault();
         $("[id=" + $(this).attr("data-toggle") + "]").addClass("active");
         $("div.data-toggle-showhide").hide();
         $("[id=" + $(this).attr("data-toggle") + "]").show();
         return false;
   });
  }

  if ($('[data-bs-toggle=tooltip]').length) {
   $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
   }

});

if ($(".menu-item-has-children").length) {
   $('.menu-item-has-children').mouseenter(function () {
      $(this).find('.sub-menu').addClass("is-hover");
   }).mouseleave(function () {
      $(this).find('.sub-menu').removeClass("is-hover");
   });
}

var emailgetearly = localStorage.getItem("email-get-early");

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

   var emailgetearly = localStorage.getItem("email-get-early");

   jQuery(".form-with-slider-labels .hs-input").focus(function(){
       jQuery(this).closest(".hs-form-field").removeClass("not-focused");
       jQuery(this).closest(".hs-form-field").addClass("has-focus");

      jQuery(this).focus();
      //  jQuery(this).prop('readonly', false);
       console.log("jay-focus");

      // if(emailgetearly){
      //    $(".hs_email input[name='email']").val(emailgetearly).trigger('change');
      // }

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

   
   if(emailgetearly !== "" && emailgetearly != null && emailgetearly != undefined){
      jQuery(".hs_email input[name='email']").val(emailgetearly).trigger('change');
   }

   setTimeout(function(){
       jQuery(".form-with-slider-labels .hs-input").each(function(){
           var input_value=jQuery(this).val();
           if(input_value!='') {
              jQuery(this).parents(".hs-form-field").removeClass("not-focused");
               jQuery(this).parents(".hs-form-field").addClass("has-focus");
           }
         })

       jQuery(".form-with-slider-labels .hs-input").val();

      var emailgetearly = localStorage.getItem("email-get-early");
      if(emailgetearly !== "" && emailgetearly != null && emailgetearly != undefined){
         $(".hs_email input[name='email']").val(emailgetearly).trigger('change');
      }

      jQuery(".form-with-slider-labels .hs-input[name=firstname]").attr( 'pattern', '[A-Za-z]' );
   }, 700);

   jQuery('.form-with-slider-labels .hs-input[name=\"firstname\"]').keydown(function (e) {
      if (e.ctrlKey || e.altKey) {
         e.preventDefault();
      } else {
         var key = e.keyCode;
         if (!((key == 9) || (key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
             e.preventDefault();
         }
     }
   });

   jQuery('.form-with-slider-labels .hs-fieldtype-text label').click(function (e) {
      e.preventDefault();
      var inputId = jQuery(this).attr('for');
      var inputField = jQuery('#' + inputId);
      inputField.focus();
      console.log("focus", inputId);
   });
}

function icw_hubspot_data_send(fields, url, redirect){
   var data = {
      "fields": fields,
      "context": {
         "pageUri": window.location.href,
         "pageName": document.title
      },
      "legalConsentOptions": {
         "consent":{
            "consentToProcess":true,
            "text":"I agree to allow Dataheroes to store and process my personal data.",
            "communications":[
                  {
                     "value":true,
                     "subscriptionTypeId":999,
                     "text":"I agree to receive marketing communications from Dataheroes."
                  }
            ]
         }
      }
   },
   xhr = new XMLHttpRequest(),
   final_data = JSON.stringify(data);
   xhr.open('POST', url);
   xhr.setRequestHeader('Content-Type', 'application/json');
   xhr.onreadystatechange = function() {
      // console.log(xhr.responseText);
   }
   xhr.send(final_data);
}
/*
function ICWlogMomentNotification() {
   console.log("google-one-tap");
   jQuery("#credential_picker_container").hide();
   setTimeout(function(){
       jQuery("body.blog.show-google-one-tap #credential_picker_container").slideDown();
       jQuery("body.single-post.show-google-one-tap #credential_picker_container").slideDown();
   }, 30000);
} */

(function(jQuery) {
   jQuery.fn.visible = function(partial) {
   var $t            = $(this),
       $w            = $(window),
       viewTop       = $w.scrollTop(),
       viewBottom    = viewTop + $w.height(),
       _top          = $t.offset().top,
       _bottom       = _top + $t.height(),
       compareTop    = partial === true ? _bottom : _top,
       compareBottom = partial === true ? _top : _bottom;
   return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};
})(jQuery);
jQuery(window).scroll(function(event) {
   jQuery(".btn-shaking").each(function(i, el) {
   var el = jQuery(el);
   if (el.visible(true)) {el.addClass("is-shaking"); 
   } else {el.removeClass("is-shaking");}
});
});
jQuery(document).ready(function($) {

    if ($('[data-bs-toggle=tooltip]').length) {
        $("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
    }
    $('[data-toggle="popover"]').popover();
    $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });

    if ($('.collapse').length) {
        $('.collapse').collapse();
        $(".accordion .card").on("show.bs.collapse hide.bs.collapse", function(e) {
            if (e.type=='show'){
               $(this).addClass('active');
            }else{
               $(this).removeClass('active');
            }
         }); 
    }
  
    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });

    if ($('.header-nav-wrap').length) {
        if (jQuery(this).scrollTop() > 10) {
            $(".header-nav-wrap").addClass("fixed-header");
        } else {
            $(".header-nav-wrap").removeClass("fixed-header");
        }

        $(window).scroll(function () {
            if (jQuery(this).scrollTop() > 10) {
            $(".header-nav-wrap").addClass("fixed-header");
            } else {
            $(".header-nav-wrap").removeClass("fixed-header");
            }
        });
    }

    $('li.menu-item-has-children').hover(function() {
            $(this).find("ul.sub-menu").addClass("is-menu");
        }, function() {
            $(this).find("ul.sub-menu").removeClass("is-menu");
    });


    /* Fixed Header - light header */
	/*if ($('.sticky-header').length) {
        var wheight = $( window ).height();
        var hheight = $('.sticky-header').outerHeight();
        var dheight = $( document ).height();
        if(dheight > (wheight+hheight)) {
            var stickyHeaderTop = $('.sticky-header .menu-header').offset().top;
            $(window).scroll(function() {
                if($(this).scrollTop() > stickyHeaderTop){
                    $("body").addClass("is--fixed");
                    $(".sticky-header .menu-header").addClass("is-fixed");
                }
                else if($(this).scrollTop() <= stickyHeaderTop){
                    $("body").removeClass("is--fixed");
                    $(".sticky-header .menu-header").removeClass("is-fixed");
                }
            });
            $(window).scroll();
        }
    }*/

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

   

    // if($('.main-header').length) {  
    //     var header = $(".sub-header");
    //     $(window).scroll(function() {
    //         var scroll = $(window).scrollTop();
    //         if (scroll >= 5) {
    //             header.addClass("is-fixed");
    //         } else {
    //             header.removeClass('is-fixed');
    //         }
    //     });
        
    // }

    if($('.post-slider').length) {
        $('.post-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            accessibility: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
            ]
        });
    }
    if($('.data-slider').length) {
        $('.data-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            accessibility: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
            ]
        });
    }

    if($('.progress-slider').length) {
        $('.progress-slider').slick({
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
        
    var percentTime;
        var tick;
        var time = .1;
        var progressBarIndex = 0;

        $('.progress-slider-block .progress-bar-block .progressBar').each(function(index) {
            var progress = "<div class='inProgress inProgress" + index + "'></div>";
            $(this).html(progress);
        });

        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, 10);
        }

        function interval() {
            if (($('.progress-slider-block .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
                progressBarIndex = $('.progress-slider-block .slick-track div[aria-hidden="false"]').data("slickIndex");
                startProgressbar();
            } else {
                percentTime += 1 / (time + 5);
                $('.progress-slider-block .inProgress' + progressBarIndex).css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $('.progress-slider-block .single-item').slick('slickNext');
                    progressBarIndex++;
                    if (progressBarIndex > 2) {
                        progressBarIndex = 0;
                    }
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $('.progress-slider-block .inProgress').css({
                width: 0 + '%'
            });
            clearInterval(tick);
        }
        startProgressbar();

        $('.progress-slider-block .progress-bar-block .item').click(function () {
            clearInterval(tick);
            var goToThisIndex = $(this).find("span").data("slickIndex");
            $('.progress-slider-block .single-item').slick('slickGoTo', goToThisIndex, false);
            startProgressbar();
        });

    }

    if($('.progress-grid-slider-block').length) {
        $(".progress-grid-slider").slick({
            infinite: true,
            arrows: true,
            dots: true,
            appendDots: $('.slider-progressbar-dots'),
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide: true,
            draggable: false,
            asNavFor: '.slide-labels',
            responsive: [
                {
                    breakpoint: 992,                    
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,                    
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        draggable: true,
                        arrows: false,
                    }
                }
            ]
        });
        $('.slide-labels').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            variableWidth: true,
            asNavFor: '.progress-grid-slider',
            dots: false,
            responsive: [
                {
                    breakpoint: 767,                    
                    settings: {
                        slidesToShow: 3,
                        variableWidth: true,
                        draggable: true,
                        arrows: false,
                    }
                }
            ]
        });
        
        $('a.slide-label').click(function(e) {
            e.preventDefault();
            var slideno = $(this).data('slide');
            $('a.slide-label').removeClass('active');
            $(this).addClass('active');
            $('.progress-grid-slider').slick('slickGoTo', slideno);
        });
        $('.progress-grid-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('a.slide-label').removeClass('active');
            $('a.slide-label[data-slide="'+ nextSlide +'"]').addClass('active');
        }); 
    }

    if($('.progress-tab-slider').length) {
        $('.progress-tab-slider').slick({
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 1000,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false
        });
        
    var percentTimej;
        var tickj;
        var timej = .1;
        var progressBarIndexj = 0;

        $('.progress-tab-slider-section .progressBarj').each(function(index) {
            var progressj = "<div class='inProgressj inProgressj" + index + "'></div>";
            $(this).html(progressj);
        });

        function startProgressbarj() {
            resetProgressbarj();
            percentTimej = 0;
            tickj = setInterval(intervalj, 20);
            $('.progress-tab-slider-section .item .card-info').slideUp();
            $('.progress-tab-slider-section .item').removeClass('active-progress');
            $('.progress-tab-slider-section .item-code').slideUp();
        }

        function intervalj() {
            
            if (($('.progress-tab-slider .slick-track div[data-slick-index="' + progressBarIndexj + '"]').attr("aria-hidden")) === "true") {
                progressBarIndexj = $('.progress-tab-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
                startProgressbarj();
                // console.log(progressBarIndexj);
            } else {
                percentTimej += 1 / (timej + 5);
                $('.progress-tab-slider-section .inProgressj' + progressBarIndexj).css({
                    height: percentTimej + "%"
                });
                
                $('.progress-tab-slider-section .item-progress' + progressBarIndexj).find('.card-info').slideDown();
                $('.progress-tab-slider-section .item-progress' + progressBarIndexj).addClass('active-progress');
                $('.progress-tab-slider-section .item-code' + progressBarIndexj).slideDown();
                if (percentTimej >= 100) {
                    $('.progress-tab-slider-section .single-item').slick('slickNext');
                    progressBarIndexj++;
                    if (progressBarIndexj > 2) {
                        progressBarIndexj = 0;
                    }
                    startProgressbarj();
                }
            }
        }

        function resetProgressbarj() {
            $('.progress-tab-slider-section .inProgressj').css({
                height: 0 + '%'
            });
            clearInterval(tickj);
        }
        startProgressbarj();

        $('.progress-tab-slider-section .item').click(function () {
            if ( ! $(this).hasClass('active-progress') ) {
                clearInterval(tickj);
                var goToThisIndexj = $(this).find("span").data("slickIndex");
                $('.progress-tab-slider-section .single-item').slick('slickGoTo', goToThisIndexj, false);
                startProgressbarj();
            }

        });

    }

    if($('.tools-slider').length) {
        $('.tools-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            accessibility: false,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }

    if($('.text-vertical-slider').length) {
        $('.text-vertical-slider').slick({
            infinite: true,
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            centerMode: true,
            pauseOnHover: false,
            pauseOnFocus: false,
        });
    }

    $('#dp-newsletter-form').submit(function(e){
		e.preventDefault();
		var fields = [
				{
					'name' : 'email',
					'value': $('#dp-newsletter-email').val()
				}
			],
			url = 'https://api.hsforms.com/submissions/v3/integration/submit/8338627/2bcb106c-1919-468e-b98f-43da09f47453';
		hubspot_send(fields, url, window.location.origin + '/thank-you/');
	});

    $('#dp-news-form').submit(function(e){
		e.preventDefault();
		var fields = [
				{
					'name' : 'email',
					'value': $('#dp-news-email').val()
				}
			],
			url = 'https://api.hsforms.com/submissions/v3/integration/submit/8338627/2bcb106c-1919-468e-b98f-43da09f47453';
		hubspot_send(fields, url, window.location.origin + '/thank-you/');
	});

    if($('.step-card-content').length) {
        $(window).on('scroll', function() {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $('.step-card-content').offset().top;
            var elemBottom = elemTop + $('.step-card-content').height();
            
            if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
                $('.step-card-content.left-border').addClass('animated');
                setTimeout(function() {
                    $('.step-card-content.right-border').addClass('animated');
                    setTimeout(function() {
                        $('.step-card-content.bottom-left-border').addClass('animated');
                    }, 800);
                }, 800);
                
            }
        });
    }

    if ($('.play-iframe').length){
        $('.play-iframe').click(function(ev){	
            videourl = $(this).data('videosrc')+"?autoplay=1&cc_load_policy=1&api=1&muted=1&rel=0&enablejsapi=1";
            if($(this).data('ext') == 'mp4'){
                video = '<div class="video-wrap"><video class="embed-responsive-item" controls autoplay playsinline controlsList="nodownload" oncontextmenu="return false;"><source src="'+videourl+'" type="video/mp4"></video></div>';
            } else {
                video = '<div class="video-wrap"><iframe class="embed-responsive-item play-in_iframe" allow="autoplay" src="'+videourl+'" controls="0" scrolling="no" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe></div>';
            }
            
            $(this).parents('.play-video-block').html(video);
            ev.preventDefault();
        });
    }

    if ($('.is-hover-focus').length){
        $('.is-hover-focus').mouseenter(function() {
            $('.is-hover-focus').removeClass("hover-focus");
            $(this).addClass("hover-focus");
        });
    }

    setTimeout(function(){
        // console.log('DONE');
        docsdeepcheckscom_url(); 
    }, 10);
    
    if ($('a[href^="#"], .hash-scrol').length){
    $('a[href^="#"], .hash-scrol').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var stop = $(target).offset().top - 80;
        var delay = 300;
        // console.log(stop);
        $('html, body').animate({scrollTop: stop + 'px'}, delay);
      });
    }

    if ($('.is-hover-play').length){
        $('.is-hover-play').each(function() {
            var lottieAnimation = $(this)[0]; // Get the DOM element
    
            // Pause the animation initially
            lottieAnimation.pause();
    
            // Play animation on hover
            $(this).hover(function() {
                lottieAnimation.setDirection(1); // Set forward direction
                lottieAnimation.play(); // Play the animation
            }, function() {
                lottieAnimation.setDirection(-1); // Set reverse direction
                lottieAnimation.play(); // Pause the animation
            });
        });
    }
});

/* WOW Animation - Init */
// try {
// new WOW().init();
// } catch (e) {
// //
// };



//Detect browser's user agent and add to HTML attribute.
var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

//Since HubSpot forms are rendered after the DOM builds, you must trigger the manipulation after the window loads
window.onload = function () {
    if(jQuery('.form-with-slider-labels').length) {
        setTimeout(function(){
        hubspot_labels(); 
        }, 800);
    }  
}; 

jQuery(document).on('show.bs.modal','.modal-hbspt', function () {
    // alert('hi');
    //Detect browser's user agent and add to HTML attribute.
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);
    if(jQuery('.form-with-slider-labels').length) {
        hubspot_labels();
       
        setTimeout(function(){
            jQuery(".form-with-slider-labels .hs-input").val();
        }, 800);
    }
});

// jQuery(document).on('hidden.bs.modal','.modal-hbspt', function () {
//   // do something...
//   document.location.reload();
// })

function hubspot_labels() {
    //turn autocomplete off for forms on all browsers, except Chrome
    jQuery('form').attr('autocomplete','off');
    jQuery('input, .hs-input').attr('autocomplete','off');

    jQuery('input, .hs-input').prop('readonly', true);

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

function hubspot_send(fields, url, redirect){
    var data = {
            "fields": fields,
            "context": {
                "pageUri": window.location.href,
                "pageName": document.title
            },
            "legalConsentOptions": {
                "consent":{
                    "consentToProcess":true,
                    "text":"I agree to allow Deepchecks to store and process my personal data.",
                    "communications":[
                        {
                            "value":true,
                            "subscriptionTypeId":999,
                            "text":"I agree to receive marketing communications from Deepchecks."
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
        console.log(xhr.responseText);
        window.location.href = redirect;
        // if(xhr.readyState == 4 && xhr.status == 200) {
        // 	alert(xhr.responseText);
        // } else if (xhr.readyState == 4 && xhr.status == 400){
        // 	alert(xhr.responseText);
        // } else if (xhr.readyState == 4 && xhr.status == 403){
        // 	alert(xhr.responseText);
        // } else if (xhr.readyState == 4 && xhr.status == 404){
        // 	alert(xhr.responseText);
        // }
    }
    xhr.send(final_data);
}

// jQuery(window).on('load', function () {
//     setTimeout(function(){
//         // console.log('DONE');
//         docsdeepcheckscom_url(); 
//     }, 1);
// });
// https://blog.miguelbernard.com/how-to-dynamically-add-a-query-string-to-all-links-in-a-page
function docsdeepcheckscom_url() {
    jQuery('a[href^="https://docs.deepchecks.com"]').each(function() {
        // console.log('D2');
        var oldUrl = jQuery(this).attr("href"); // Get current url
        var newUrl = oldUrl+'?utm_campaign='+window.location.pathname+'&utm_medium=referral&utm_source=deepchecks.com';
        // console.log(oldUrl);
        // console.log(newUrl);
        jQuery(this).attr("href", newUrl); // Set herf value
      });
}

function ICWlogMomentNotification() {
    console.log("google-one-tap");
    jQuery("#credential_picker_container").hide();
    setTimeout(function(){
        jQuery("#credential_picker_container").slideDown();
    }, 30000);
}



// clipboard js
var allClipboardBtn = document.querySelectorAll('.clipboard-btn'); //Select all elements with the id starting by "table_"
var allClipboardBtnArray= Array.prototype.slice.call(allClipboardBtn);
allClipboardBtnArray.forEach(function(elm, indx) {
    const textElement = elm.previousElementSibling;
    function copyText(e) {
        window.getSelection().selectAllChildren(textElement);
        document.execCommand("copy");
        e.target.setAttribute("tooltip", "Copied! ✅");
    };
    function resetTooltip(e) {
        e.target.setAttribute("tooltip", "Copy to clipboard");
    };
    elm.addEventListener('click', function(e){
        copyText(e)
    });
    elm.addEventListener('mouseover', function(e){
        resetTooltip(e)
    });
});


window.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('.main-header');
    if (mainHeader) {
        updateHeaderHeight(mainHeader); // Call the function to set initial header height
        window.addEventListener('resize', () => updateHeaderHeight(mainHeader));
        window.addEventListener('orientationchange', () => updateHeaderHeight(mainHeader));
    }
});
function updateHeaderHeight(header) {
    const innerHeight = header.clientHeight;
    header.style.setProperty('--header-h', `${innerHeight}px`);
    header.style.setProperty('--vh', `${window.innerHeight/100}px`);
}
/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('.navbar-toggler').on('click', function (e) {
        $('.navbar-toggler,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });
    $('body').scrollspy({
        target: '#navbar-blog'
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
    });
    if ($('.tab-block').length) {
        $('.nav-tabs .tab-link').on('click', function(){
            // get the data attribute
            var tab_id = $(this).attr('data-tab');
            // remove the default classes
            $('.nav-tabs .tab-link').removeClass('active');
            $('.tab-pane').hide();
            // add new classes on mouse click
            $(this).addClass('active');
            $('#'+tab_id).fadeIn();
        });
    }
    if ($('.collapse-block').length) {
        $(".collapse-item .collapse-title").click(function () {
            if ($(this).closest(".collapse-item").hasClass("is-open")) {
                $(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
                $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).hide("fast");
            } else {
                $(".collapse-item").removeClass("is-open");
                $(".collapse-item").find(".collapse-body").stop(true,true).hide();
                $(this).closest(".collapse-item").stop(true,true).addClass("is-open");
                $(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown("fast");
        
                var collapsetop = $(this);
                    $('html,body').animate({
                    scrollTop: collapsetop.offset().top-115
                }, 10);
            }
            return false;
        });
    }
    $(window).on('scroll', function() {
        updateProgressBars();

        if ($('.main-footer').length) {
            var is_footer = $('.main-footer');
            var window_offset = is_footer.offset().top - $(window).scrollTop() - is_footer.outerHeight(); 
                
            if ( window_offset < 100 ) {
                is_footer.find('.site-logo-block').addClass('is-animate');
            } else {
                is_footer.find('.site-logo-block').removeClass('is-animate');
            }
        }
    });
    $('.progress-section').on('scroll', updateProgressBars);

    $(".post-search-btn").on("click", function(event) {
        if(event.preventDefault) { event.preventDefault(); }

        $(this).closest('.post-search').toggleClass('active');
        if($('.post-search').hasClass('active')){
            $('.post-search').find('#q-input').removeAttr('tabindex');
            $('.post-search').find('#q-input').focus();
        }else{
            $('.post-search').find('#q-input').val('');
            $('.post-search').find('#q-input').attr('tabindex', '-1');
            $("#q-input").trigger( 'keyup' );
        }
    }); 
});
updateProgressBars()
function updateProgressBars() {
    var scrollPosition = $(window).scrollTop();
    // Loop through each section and check if it's in the viewport
    $('.progress-content-step').each(function (index) {
        var sectionTop = $(this).offset().top - $(window).height() / 2; // Mid-point trigger
        var sectionHeight = $(this).outerHeight();
        var sectionBottom = sectionTop + sectionHeight;
        var progressBarId = $(this).attr('id'); // Target progress bar by ID
        
        var sectionAnimateContentTop = $(this).offset().top - $(window).height() / 1.1;
        var sectionAnimateContentBottom = sectionAnimateContentTop + sectionHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Animate progress bar height to 100%
            $('.image-block').find('.progress-content-img').removeClass('is-active');
            $('[data-progress-id="' + progressBarId + '"]').css('height', '100%');
            $('.image-block').find('[data-id="' + progressBarId + '"]').addClass('is-active');
        } else if (scrollPosition >= sectionAnimateContentTop && scrollPosition < sectionAnimateContentBottom) {
            $('.progress-content-wrapper').find('[id="' + progressBarId + '"]').addClass('is-active');
            
        } else if (scrollPosition <= sectionTop) {
            // Reset progress bar height when section is not in view
            $('[data-progress-id="' + progressBarId + '"]').css('height', '0');
            
        } 
    });
}
if ($('.splide').length) {
    var splide_sliders = $('.splide');
    for (var i = 0; i < splide_sliders.length; i++) {
        new Splide(splide_sliders[i]).mount();
    }
}


if ($('.counter').length) {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    // Create a new observer
    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let $this = $(entry.target);
                var countTo = $this.attr("data-countto");
                var countDuration = parseInt($this.attr("data-duration"));
                
                $({ counter: $this.find('span').text() }).animate({
                    counter: countTo
                }, {
                    duration: countDuration,
                    easing: "linear",
                    step: function () {
                        $this.find('span').text(Math.floor(this.counter));
                    },
                    complete: function () {
                        $this.find('span').text(this.counter);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Target each element with the class .counter
    $('.counter').each(function () {
        observer.observe(this);    
    });
    
}

if ($('.thumbnail-slider-block').length) {
    var main = new Splide( '.use-case-splide-slider', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
    } );
    
    var thumbnails = new Splide( '.useCase-thumbnail-splide-slider', {       
        gap         : 8,
        rewind      : true,
        pagination  : false,
        arrows  : false,
        isNavigation: true,
        autoWidth: true,
    } );
    
    main.sync( thumbnails );
    main.mount();
    thumbnails.mount();
}
jQuery(function($){

    $('#topmenu').affix();
    $('.has-easy-notification-bar #topmenu').affix({offset: {top: 70} });


    	// scroll to an element
	$('.scrollto').click(function(e) {
        e.preventDefault();
		var scrollto 	= $(this).attr('href'); 
		$("html, body").animate({ scrollTop: $(scrollto).offset().top + 100 }, 1000);
		window.location.hash = scrollto;
	});


    // add class to some button type for css effect
    $('.purple-circle-btn').hover(function() {
        $(this).addClass('hovered');
    })


    // mobile menu closer
    $('.mobile .mmenuCloser').click(function() {
        $('.mega-toggle-blocks-right > .mega-toggle-block-1 .mega-toggle-animated').click();
    });

    // Mobile menu - Jayesh Patel
    $('.toggle-sidebar,.bg-overly').on('click', function (e) {
        $('.navbar-collapse,.bg-overly,.toggle-sidebar,body,.main-header').toggleClass('is-visible');
        e.preventDefault();
    });

    if($('li.menu-item-has-children').length) {
        $("li.menu-item-has-children").each(function(i, el) {
            $(this).children('a').after('<em class="arrow-down"></em>');
        });
    }    
    // $(".menu-item-has-children .arrow-down").click(function () {       
    //     if ($(this).closest(".menu-item-has-children").hasClass("open")) {
    //         $(this).closest(".menu-item-has-children").removeClass("open");
    //         $(this).closest(".menu-item-has-children").find(".sub-menu").hide();
    //     } else {
    //         $(".menu-item-has-children").removeClass("open");
    //         $(".menu-item-has-children").find(".sub-menu").hide();
    //         $(this).closest(".menu-item-has-children").addClass("open");
    //         $(this).closest(".menu-item-has-children").find(".sub-menu").show();
    //     }
    // });
    $(".navbar-collapse .menu-item .arrow-down").click(function(e) {
        e.preventDefault();
        var toClose = $(".navbar-collapse ul").not($(this).parents("ul"));
        toClose.slideUp();       
        toClose.parent().removeClass("open");
      
        if(!$(this).next().is(":visible")) {
          var toOpen = $(this).next()
          
          toOpen.slideDown();
          toOpen.parent().not(".open").addClass("open");
        } 
        
        e.stopPropagation();
      });
});


jQuery(document).ready(function($) {
 

    /********************************************************
    **  FLOATING LABELS
    ********************************************************/
    $('.flbl .form-control').each(function() {
        $(this).val() ? $(this).parents('.form-group').addClass('active') : '';
    });

    $('.flbl .form-control').focusin(function() {
        $(this).parents('.form-group').addClass('active');
    });

    $('.flbl .form-control').focusout(function() {
        $(this).val() ? '' : $(this).parents('.form-group').removeClass('active');
    });




    /********************************************************
    **  FLOATING LABELS
    ********************************************************/
    $('.flbl .form-control').each(function() {
        $(this).val() ? $(this).parents('.form-group').addClass('active') : '';
    });


});


function ICWlogMomentNotification() {
    console.log("google-one-tap");
    jQuery("#credential_picker_container").hide();
    setTimeout(function(){
        jQuery("body.show-google-one-tap #credential_picker_container").slideDown();
    }, 30000);
}
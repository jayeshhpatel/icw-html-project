/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('.navbar-toggler,.bg-overly').on('click', function (e) {
        $('.bg-overly,.navbar-toggler,body,.main-header, .main-sidebar').toggleClass('is-open');
        e.preventDefault();
    });
    $('.sidebar-collapse-action').on('click', function (e) {
        
        if(!($('.main-sidebar').hasClass('is-minimize'))){
            $('.main-sidebar').removeClass('is-done');           
            setTimeout(() => {
                $('.main-sidebar').addClass('is-minimize');
                $('.main-content-wrapper').addClass('is-expand');
            }, 50);
        } else {
            $('.main-sidebar').removeClass('is-minimize');
            $('.main-content-wrapper').removeClass('is-expand');
            setTimeout(() => {
                $('.main-sidebar').addClass('is-done');
            }, 80);
        }
        e.preventDefault();
    });
})
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
})
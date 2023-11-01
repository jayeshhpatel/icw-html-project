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
        $('.main-sidebar').toggleClass('is-minimize');
        $('.main-content-wrapper').toggleClass('is-expand');
        e.preventDefault();
    });
    
    $('.dropdown-menu').on('click', function(e) {
        if($(this).hasClass('dropdown-menu-form')) {
            e.stopPropagation();
        }
    });
    

})
$('.toggleBtn').on('click', function(e) {
    if($(this).hasClass('btnView')){
        $(this).parents('.card').find('.input-box-block').slideUp();
        $(this).parents('.card').find('.result-box').slideDown();
        $(this).html('Add new <span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M7.9987 3.33337V12.6667M3.33203 8.00004H12.6654" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
        $(this).removeClass('btnView').addClass('addNew');
    } else if($(this).hasClass('addNew')){
        $(this).parents('.card').find('.input-box-block').slideDown();
        $(this).parents('.card').find('.result-box').slideUp();
        $(this).html('View');
        $(this).removeClass('addNew').addClass('btnView');
    }
});
$('.btn-view').on('click', function(e) {
   
});
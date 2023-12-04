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
        $(this).html('Add New <span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M7.9987 3.33337V12.6667M3.33203 8.00004H12.6654" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
        $(this).removeClass('btnView').addClass('addNew');
    } else if($(this).hasClass('addNew')){
        $(this).parents('.card').find('.input-box-block').slideDown();
        $(this).parents('.card').find('.result-box').slideUp();
        $(this).html('View');
        $(this).removeClass('addNew').addClass('btnView');
    }
});

$('.editable-btn').on('click', function(e) {      
    if($(this).hasClass('save-btn')) {
        console.log($(this).parents('.editable-block .info-block'));
        $(this).parents('.editable-block .form-group').css('display','none');
        $(this).parents('.editable-block').find('.info-block').css('display','flex');
    } else if($(this).hasClass('edit-btn')) {        
        $(this).parents('.editable-block .info-block').css('display','none');
        $(this).parents('.editable-block').find('.form-group').css('display','flex');
    }
});

// $('.card-header').each(function() { 
    //     $('.card-header').on('dblclick', function(event) {            
    //         $(this).parents('.card').find('.card-body .form-group-sm .editable-span').each(function() {          
    //             $(this).replaceWith($('<input type=text>').attr({ id: 'value', class: 'form-control sm-form-control', value: $(this).html() }));
    //         });
    //     }); 
    // });
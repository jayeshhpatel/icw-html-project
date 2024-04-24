/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
var $ = jQuery.noConflict();

jQuery(document).ready(function($) {

    $('.icw-tab-link').click( function() {
        var tabID = $(this).attr('data-tab');
        $(this).addClass('active').siblings().removeClass('active');
        $('#'+tabID).addClass('active').siblings().removeClass('active');
    });

    if ($(".collapse-item .collapse-title").length > 0) {
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
    }

if ($(".icw-progress-goto").length > 0) {
    var progressPath = document.querySelector('.icw-progress-goto path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function() {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 200;
    var duration = 550;

    jQuery(window).on('scroll', function() {
        if(jQuery(this).scrollTop() > offset) {
            jQuery('.icw-progress-goto').addClass('active-progress');
        } else {
            jQuery('.icw-progress-goto').removeClass('active-progress');
        }
    });

    jQuery('.icw-progress-goto').on('click', function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
}
    

});


jQuery(document).ready(function ($) {

/*-----------------------------------------------------------------------------------*/
/* Course
/*-----------------------------------------------------------------------------------*/
    $('#filter_button').on('click', function () {
        filterCourses();
    });

    $('#course_cat, #course_instructor, #course_search').on('change keyup', function () {
        filterCourses();
    });

    function filterCourses() {
        var cat_id = $('#course_cat').val();
        var instructor_id = $('#course_instructor').val();
        var search_term = $('#course_search').val();

        $('.is-course-search-loading .loading-action').show();

        $.ajax({
            //url: ajaxurl,
            url: icw.ajax_url,
            type: 'POST',
            data: {
                action: 'filter_courses',
                nonce: icw.nonce,
                cat_id: cat_id,
                instructor_id: instructor_id,
                search_term: search_term
            },
            success: function (response) {
                $('.is-course-search-loading .loading-action').hide();
                $('#filtered_courses').html(response);
            },
            error: function (xhr, status, error) {
                // Hide loader on error
                $('.is-course-search-loading .loading-action').hide();
                
                // Handle error
                console.error(error);
            }
        });
    }

/*-----------------------------------------------------------------------------------*/
/* Enroll Now
/*-----------------------------------------------------------------------------------*/
   // $('#enroll-now').on('click',function(){
    $(document).on('click', '#enroll-now', function(){ 
        //console.log($("#course_date option:selected").val());      

        if( $("#course_date option:selected").val() != "" ){   

            $('#enroll-now').prop("disabled","disabled");     

            $('#enroll-now .loading-action').show();
            
            jQuery.ajax({
                type: "POST",
                //url:ajaxurl,
                url: icw.ajax_url,
                data: {
                    action:'insert_enroll',
                    nonce: icw.nonce,
                    course_id: $("#purchase-course-id").val(),
                    course_title: $('#purchase-course-title').val(),
                   // course_venue: $('#purchase-course-venue').val(),
                    course_cost: $('#purchase-course-cost').val(),
                    course_voucher: $('#purchase-course-voucher').val(),
                    course_clin: $('#purchase-course-clin').val(),
                    course_slin: $('#purchase-course-slin').val(),
                    course_date: $("#course_date option:selected").val()
                },
                success: function( result ) {
                    //  jQuery('.dir-list').html( result ); 
                    $('#enroll-now .loading-action').hide();
                    $('.notice--date-error.error').hide();
                    console.log('result  '+result);

                    if( result > 20 ){
                        $('#enroll_btn_div').html('<button type="button" class="enroll_btn enroll_done button btn-danger btn-full" disabled="">Enrollment Waiting List</button><aside class="bp-feedback bp-messages error"><span class="bp-icon" aria-hidden="true"></span><p>Enrollment submitted and on Waiting List.</p></aside>');
                    }
                    else{
                        $('#enroll_btn_div').html('<button type="button" class="enroll_btn enroll_done button btn-warning btn-full" disabled="">Enrollment Pending Approval</button><aside class="bp-feedback bp-messages warning"><span class="bp-icon" aria-hidden="true"></span><p>Enrollment submitted and Pending Approval.</p></aside>');
                    }
                 
                    butterup.toast({
                        title:'Email Sent',
                        message: 'New enrollment email sent successfully.',
                        type:'success',
                        icon: true, // default: false
                    });
                },
                error: function (error) {
                    butterup.toast({
                        title:'Student Enroll '+error,
                        message: 'Error in enrollment',
                        type:'error',
                        icon: true, // default: false
                    });
                }
            });
        }
        else{
            $('.notice--date-error').remove();
            $('#enroll-now').after('<aside class="bp-feedback bp-messages error notice--date-error"><span class="bp-icon" aria-hidden="true"></span><p>Please select date.</p></aside>');
        }
        return false;
    });

    // Alert enroll-allowed-only-students
    $('.is--enroll-allowed-only-students').click(function(){
        butterup.toast({
            title:'Student Only',
            message: 'Enrollment is allowed for only Student\'s.',
            type:'warning',
            icon: true, // default: false
            // location: 'bottom-right',
            dismissable: true,
        });
        return false;
    });

    //fetch instructor based on date selected
    $('#course_date').on('change', function () {
        var sel_date = $("#course_date option:selected").val();
        var course_id = $("#purchase-course-id").val();

        jQuery.ajax({
            type: "POST",
            //url:ajaxurl,
            url: icw.ajax_url,
            data: {
                action:'single_instructor_by_date',
                nonce: icw.nonce,
                sel_date: sel_date,
                course_id: course_id                
            },
            success: function( data ) {
                var res = $.parseJSON(data);
                console.log(res);
    
              //console.log('instructor_div  '+res.instructor_div);
              //console.log('enroll_btn_div  '+res.enroll_btn_div);
                $('#instructor-single-course').html(res.instructor_div);
                $('#enroll_btn_div').html(res.enroll_btn_div);
                $('#enroll_venue').html(res.venue);
            }           
        });
    });
});
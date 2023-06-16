jQuery(document).ready(function ($) {

    $(document).on('click','.some-element',function(e){
        var input = $(this).find('input[name="input"]');
        var data = {
            action: 'action_name',
            input: input.val(),
            _timestamp: timestamp_field.val(),
            _wpnonce: wpnonce_field.val(),
        }
        if( 4===6 ){
            $.ajax({
                url: site_ajax_params.ajaxurl,
                data: data,
                type: 'POST',
                beforeSend: function ( xhr ) {
                },
                success: function( response ){
                    console.log(response);
                }
            });
        }
    });

});
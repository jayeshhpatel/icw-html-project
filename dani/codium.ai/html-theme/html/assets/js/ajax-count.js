jQuery(document).ready(function($) {
    // AJAX request to get the options on page load
    $.ajax({
        url: icw_download.ajax_url,
        type: 'POST',
        data: {
            action: 'icw_ajax_get_count_option'
        },
        success: function(response) {
            // Display the retrieved options
            // console.log('Options:', response);
            if(response.icw_vscode_download_count && $('span.vs--download').length){
                $('.marketplace-download span.vs--download').html(response.icw_vscode_download_count);
            }
            if(response.icw_jetbrains_download_count && $('span.jetbrains--download').length){
                $('.marketplace-download span.jetbrains--download').html(response.icw_jetbrains_download_count);
            }
            if(response.icw_github_download_count && $('span.github--download').length){
                $('.marketplace-download span.github--download').html(response.icw_github_download_count);
            }
            if(response.icw_vscode_rating_count && $('span.vscode--ratingcount').length){
                $('.vs-review-box span.vscode--ratingcount').html(response.icw_vscode_rating_count);
            }
        }
    });
});
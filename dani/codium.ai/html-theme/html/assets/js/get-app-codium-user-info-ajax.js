document.addEventListener('DOMContentLoaded', function () {
    function makeAjaxCall() {
        var cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('qodo_user='))
            ?.split('=')[1];
        console.log('icw-cookieValue (qodo_user) : ', cookieValue);
        if (cookieValue) {
            var xhr = new XMLHttpRequest();
            // xhr.open('POST', '/icw-api/codium-user-menu-ajax-hook.php', true); // Use the direct path to the PHP file
            xhr.open('POST', icw_download.ajax_url_app_codium_user_data, true)

            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // console.log('icw-xhr', xhr);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // document.getElementById('ajax-ajax-codium-user-data').innerHTML = xhr.responseText;

                    document.querySelectorAll('.ajax-codium-user-data-logout').forEach(element => {
                        element.innerHTML = '';
                        element.remove();
                    });
                    document.querySelectorAll('.ajax-codium-user-data').forEach(element => {
                        element.style.display = ''; // Removes display:none
                        element.innerHTML = xhr.responseText;
                    });
                } else {
                    document.querySelectorAll('.ajax-codium-user-data').forEach(element => {
                        element.style.display = 'none'; // Hide logout info on success
                        element.innerHTML = '';
                        element.remove();
                    });
                    document.querySelectorAll('.ajax-codium-user-data-logout').forEach(element => {
                        element.innerHTML = '<a href="https://app.qodo.ai/" target="_blank" class="btn btn-link text-uppercase" data-info="Ajax Invalid request or no cookie value provided.">LOG IN</a>';
                    });
                }
            };

            xhr.send('cookie_value=' + encodeURIComponent(cookieValue));
        } else {
            document.querySelectorAll('.ajax-codium-user-data').forEach(element => {
                element.style.display = 'none'; // Hide logout info on success
                element.innerHTML = '';
                element.remove();
            });
            document.querySelectorAll('.ajax-codium-user-data-logout').forEach(element => {
                element.innerHTML = '<a href="https://app.qodo.ai/" target="_blank" class="btn btn-link text-uppercase" data-info="Invalid request or no cookie value provided.">LOG IN</a>';
            });
        }
    }

    // Call AJAX immediately
    makeAjaxCall();
    // Call AJAX after 1 seconds
    setTimeout(function () {
        makeAjaxCall();
        // Call AJAX after another 1 seconds (5 seconds from the start)
        setTimeout(makeAjaxCall, 5000);
    }, 1000);
});
function signOut() {
    document.cookie = "qodo_user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // window.location.href = "http://app.qodo.ai/signout";
    window.open("http://app.qodo.ai/signout", "_blank");
}
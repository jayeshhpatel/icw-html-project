jQuery(document).ready(function($) {
        url = 'https://console.tasq.ai/annotations_counter.json',
        callback = function (data) {
            var content = [];
            $.each(data, function (i, val) {
				console.log(val);
                // content.push(val);
				annotationsCount = val;
            });
            $('#refresh').html(annotationsCount);
           // $.mobile.loading('hide');
        },
        fetchData = function () {
          //  $.mobile.loading('show');
            $.getJSON(url, callback);
        };
    fetchData();
    setInterval(fetchData, 4000);
});
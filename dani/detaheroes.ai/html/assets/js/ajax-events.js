(function($) {
	$doc = $(document);
	$doc.ready( function() {
		// Event
		var currentPage = 1;
		$(document).on('click', '#load-more-event', function(event) {
			event.preventDefault();
			currentPage++; 
		 if (!($('#load-more-event').hasClass('is-loading') || $('#load-more-event').hasClass('no-posts'))) {
			 $.ajax({
			   type: 'POST',
			   url: icw_event.ajax_url,
			   dataType: 'html',
			   data: {
				  action: 'do_event_loadmore',
				  nonce: icw_event.nonce,
				  paged: currentPage,
				  pid : $('#icw-ajaxevents').data('pid'),
				  per_page : $('#icw-ajaxevents').data('per_page'),
				  showevents : $('#icw-ajaxevents').data('show_events'),
			   },
			   beforeSend: function () {
				  $('#load-more-event').addClass('is-loading');
			   },
			   success: function (res) {
				  if (res.length) {
					 $('#icw-ajaxevents').append(res);
					 $('#load-more-event').removeClass('is-loading');
				  } else {
					 $('#load-more-event').removeClass('is-loading');
					 $('#load-more-event').addClass('no-posts d-none');
					 $('#load-more-event').parent().html('<p>No event found</p>');
				  }
			   }
			});
		 }
		 });
	});
})(jQuery);
(function($) {
	$doc = $(document);

	$doc.ready( function() {

		/**
		 * Retrieve posts
		 */
		function get_posts($params) {

			$container = $('#container-async');
			$content   = $container.find('.content');
			$status    = $container.find('.status');
			$pager     = $container.find('.infscr-pager a');

			$status.text('Loading posts ...');

			/**
			 * Reset Pager for infinite scroll
			 */
			if ( $params.page === 1 && $pager.length ) {
				$pager.removeAttr('disabled').html('<span class="arrow-icon"></span><span class="btn-text">More articles</span>');
			}

			if ( $pager.length ) {
				$method = 'infscr';
			}
			else {
				$method = 'pager';
			}

			/**
			 * Do AJAX
			 */
			// console.log($params);
			$.ajax({
				url: icw.ajax_url,
				data: {
					action: 'do_filter_posts',
					nonce: icw.nonce,
					params: $params,
					pager: $method
				},
				type: 'post',
				dataType: 'json',
				beforeSend: function(){
					$($pager).show();
					$('.q-loader').addClass('show');
					// console.log('q show');
				},
				success: function(data, textStatus, XMLHttpRequest) {					
					if (data.status === 200) {

						if (data.method === 'pager' || $params.page === 1 ) {
							$content.html(data.content);
						}
						/**
						 * Append content for infinite scroll
						 */
						else {
							$content.append(data.content);

							if (data.next !== 0) {
								$pager.attr('href', '#page-' + data.next);
							}
							$pager.text('Load Posts');
						}

						if ( data.loadmore ) {
							$pager.attr('disabled', 'disabled').text('You reached the end');
						}
					}
					else if (data.status === 201) {
						if (data.method === 'pager' ) {
							$content.html(data.message);
						} else if ( data.next === 0 ) {
							$content.html(data.content);
							$($pager).hide();
						} else {
							$pager.attr('disabled', 'disabled').text('You reached the end');
						}
					}
					else {
						$status.html(data.message);
					}

					/*console.log(data);
					console.log(textStatus);
					console.log(XMLHttpRequest);*/
				},
				error: function(MLHttpRequest, textStatus, errorThrown) {

					$status.html(textStatus);

					/*console.log(MLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);*/
				},
				complete: function(data, textStatus) {

					msg = textStatus;
					if (textStatus === 'success') {
						// msg = data.responseJSON.message;
						msg = data.responseJSON.message;
					}
					$status.html(msg);
					if (msg === 'No posts found') {
						$content.html('<div class="text-center pt-50 pb-50 w-100"><div class="alert alert-danger">No posts found</div></div>');
					}
					$('.q-loader').removeClass('show');
					// $('.post-search').removeClass('active');
					// console.log('q remove');

				
					/*console.log(data);
					console.log(textStatus);*/
				}
			});
		}

		/**
		 * Bind get_posts to tag cloud and navigation
		 */
		$(document).on('click', '#container-async a[data-filter], #container-async .pagination a', function(event) {
			if(event.preventDefault) { event.preventDefault(); }

			$this = $(this);

			/**
			 * Set filter active
			 */
			if ($this.data('filter')) {
				$page = 1;
				$pager = $('.infscr-pager a').attr('href', '#page-2');

				/**
				 * If all terms, then deactivate all other
				 */
				if ($this.data('term') === 'all-terms') {
					$this.closest('ul').find('.active').removeClass('active');
					$('#q').val('');
				}
				else {
					$('a[data-term="all-terms"]').parent('li').removeClass('active');
				}

				// Toggle current active
				$this.parent('li').toggleClass('active');
		
				/**
				 * Get All Active Terms
				 */
				$active = {};
				$terms  = $this.closest('ul').find('.active');
				// console.log($terms.length);
				if ($terms.length) {
					$.each($terms, function(index, term) {
						
						$a    = $(term).find('a');
						$tax  = $a.data('filter');
						$slug = $a.data('term');

						if ($tax in $active) {
							$active[$tax].push($slug);
						}
						else {
							$active[$tax]      = [];
							$active[$tax].push($slug);
						}						
					});
				} else {
					$('a[data-term="all-terms"]').trigger('click');
				}
			}
			else {
				/**
				 * Pagination
				 */
				$page = parseInt($this.attr('href').replace(/\D/g,''));
				$this = $('.nav-filter .active a');
			}

			if ($(this).data('infscr') === 'load') {
				$(this).html('<span class="arrow-icon icw-loading"></span><span class="btn-text">Load Posts</span>');
			}
			
			$params    = {
				'page'  : $page,
				'terms' : $active,
				'qty'   : $this.closest('#container-async').data('paged'),
				'q' 	: $('#q').val()
			};

			// Run query
			get_posts($params);
		});

		let typingTimer;
		$("#q").on("keyup", function(event) {
			$('.q-loader').addClass('show');
			// console.log('q change');
			clearTimeout(typingTimer);
			typingTimer = setTimeout(function() {
				$active = {};
				$terms  = $('ul.nav-filter').find('.active');

				if ($terms.length) {
					$.each($terms, function(index, term) {
						
						$a    = $(term).find('a');
						$tax  = $a.data('filter');
						$slug = $a.data('term');

						if ($tax in $active) {
							$active[$tax].push($slug);
						}
						else {
							$active[$tax]      = [];
							$active[$tax].push($slug);
						}						
					});
				}

				$params    = {
					'page'  : 1,
					'terms' : $active,
					'qty'   : $this.closest('#container-async').data('paged'),
					'q' 	: $('#q').val()
				};

				$('.q-loader').removeClass('show');
				// Run query
				get_posts($params);
			}, 700);
		});

		// if ($('#q').length) {
		// 	document.getElementById("q").addEventListener("search", function(event) {
		// 		$("#q").trigger( 'change' );
		// 	});
		// }

		// $('.q-search').click(function(event){
		$(".q-search").on("click", function(event) {
			// console.log("q-search event start");
			if(event.preventDefault) { event.preventDefault(); }

			$(this).closest('.post-search').toggleClass('active');
			if($('.post-search').hasClass('active')){
				$('.post-search').find('#q').removeAttr('tabindex');
				$('.post-search').find('#q').focus();
			}else{
				$('.post-search').find('#q').val('');
				$('.post-search').find('#q').attr('tabindex', '-1');
				$("#q").trigger( 'keyup' );
			}
		});            
		// $('#q').click(function(e){
		// 	$(this).closest('.post-search').addClass('active');
		// }); 

		/**
		 * Show all posts on page load
		 */
		$('a[data-term="all-terms"]').trigger('click');
	});
})(jQuery);
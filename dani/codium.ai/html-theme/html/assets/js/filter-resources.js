(function($) {
	$doc = $(document);

	$doc.ready( function() {

		/**
		 * Retrieve posts
		 */
		function get_posts($params) {

			$container = $('#container-resources-async');
			$content   = $container.find('.content');
			$status    = $container.find('.status');
			$pager     = $container.find('.infscr-pager a');

			$status.text('Loading resources ...');

			/**
			 * Reset Pager for infinite scroll
			 */
			if ( $params.page === 1 && $pager.length ) {
				$pager.removeAttr('disabled').html('Load Posts');
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
					action: 'do_filter_resources',
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
							$pager.text('Load resources');
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
					if (msg === 'No resource found') {
						$content.html('<li class="text-center pt-50 pb-50" style="grid-column: 1 / span 2;"><div class="alert alert-danger">No resource found</div></li>');
						$('.is-clear-filter').slideDown();
						$('.post-search').addClass('active');
					}
					$('.q-loader').removeClass('show');

					$('html, body').stop().animate({
						scrollTop: $('.resources-container').offset().top - 81
					}, 100);
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
		$(document).on('click', '#container-resources-async a[data-filter], #container-resources-async .pagination-pager a', function(event) {
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
					
					$('.is-clear-filter').slideUp();
				}
				else {
					$('a[data-term="all-terms"]').parent('li').removeClass('active');
					$('.is-clear-filter').slideDown();
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
				$(this).html('<span class="icw-loading"></span> Load Posts');
			}
			
			$params    = {
				'page'  : $page,
				'terms' : $active,
				'qty'   : $this.closest('#container-resources-async').data('paged'),
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
					'qty'   : $this.closest('#container-resources-async').data('paged'),
					'q' 	: $('#q').val()
				};

				$('.q-loader').removeClass('show');
				// Run query
				get_posts($params);
			}, 100);
		});

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

		/**
		 * Show all posts on page load
		 */
		// $('a[data-term="all-terms"]').trigger('click');

		$(".is-clear-filter button, .q-search .q-icon-close").on("click", function () {
			$('a[data-term="all-terms"]').trigger('click');
			$('.is-clear-filter').slideUp();
		});

		$(".is-collapse-toggle").on("click", function () {
			$(this).closest(".collapse-header").stop(true,true).toggleClass("active");
			$(this).closest(".collapse-item-block").find(".collapse-body").stop(true,true).slideToggle();
		});
	});
	setTimeout(function(){ 
		$('a[data-term="all-terms"]').trigger('click');
	}, 100);
	

	$(window).resize(function() {
        if ($(window).width() < 992) {
			$(".is-collapse-toggle").closest(".collapse-header").stop(true,true).removeClass("active");
			$(".is-collapse-toggle").closest(".collapse-item-block").find(".collapse-body").stop(true,true).slideUp();
        } else {
			$(".is-collapse-toggle").closest(".collapse-header").stop(true,true).addClass("active");
			$(".is-collapse-toggle").closest(".collapse-item-block").find(".collapse-body").stop(true,true).slideDown();
		}
      });
})(jQuery);
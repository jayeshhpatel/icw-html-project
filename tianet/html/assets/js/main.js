/*-----------------------------------------------------------------------------------*/
/* MAIN
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {

	jQuery('[data-toggle="tooltip"]').tooltip();

    $('.toggle-sidebar, .bg-overly').on('click', function (e) {
        $('.toggle-sidebar,body').toggleClass('is-visible');
        e.preventDefault();
    });

	if ($('.ads-slider').length) {
		$('.ads-slider').on('init', function (event, slick, direction) {
            // check to see if there are one or less slides
            if (slick.slideCount <= 1) {
                // remove dots
				$('.ads-slider').css("margin-bottom", "0px");
                $('.ads-slider .slick-dots').hide();
            } 
        });
		$('.ads-slider').slick({
			infinite: true,
			speed: 1000,
			autoplay: false,
			autoplaySpeed: 3000,
			slidesToShow: 3,
			slidesToScroll: 1,
			lazyLoad: 'ondemand',
			dots: true,
			responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
				  }
				}
			  ]
		});
	}
	if ($('.sponsors-feature-slider').length) {
		$('.sponsors-feature-slider').on('init', function (event, slick, direction) {
            // check to see if there are one or less slides
            if (slick.slideCount <= 1) {
                // remove dots
				$('.sponsors-feature-slider').css("margin-bottom", "0px");
                $('.sponsors-feature-slider .slick-dots').hide();
            } 
        });
		$('.sponsors-feature-slider').slick({
			infinite: true,
			speed: 1000,
			autoplay: false,
			autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			// fade: true
		});
	}

	/*
	$('.action-data-term').on('click', function (e) {
		e.preventDefault();
        var termslug = $(this).attr("data-term");
		// console.log(termslug);
		var stop = $('#container-async .sponsor-category-results');
		// console.log($('#container-async'));
        $('html,body').animate({
			scrollTop: stop.offset().top
		}, 800);

		$('#container-async .nav-filter a[data-term="' + termslug + '"]').trigger('click');
		return false;
    });
	*/

	$('#pills-tab div[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// e.target // newly activated tab
		// e.relatedTarget // previous active tab
		// var target = $(e.target).attr("href") // activated tab
		  var stop = $('section.tab-block .tab-wrapper');
		  $('html,body').animate({
			scrollTop: stop.offset().top
		}, 800);
	  })
});

(function($) {
	$doc = $(document);

	$doc.ready( function() {

		const currentURL = window.location.href;
		const site_url = icw.site_url;
		const currentTITLE = document.title;
		
		// V1
		/*
		================================================================================================ */

		/**
		 * Retrieve posts
		 */
		function get_posts($params) {

			$container = $('#container-async');
			$content   = $container.find('.content');
	        $status    = $container.find('.status');
			$getcatinfo    = $container.find('.get-category-info');

			$status.text('Loading resources ...');

			$.ajax({
	            		url: icw.ajax_url,
	            		data: {
	            			action: 'do_filter_posts',
                            nonce: icw.nonce,
                            params: $params
	            		},
	            		type: 'post',
	            		dataType: 'json',
	            		success: function(data, textStatus, XMLHttpRequest) {
	            	// console.log(data);

						if (data.status === 200) {
							$content.html(data.content);
						}
						else if (data.status === 201) {
							$content.html(data.message);	
						}
						else {
							$status.html(data.message);
						}

						msg = data.icwcatname;
						terminfo = data.icwcatinfo;
						
						// console.log(msg);
						if(msg == 'All' || msg == null || msg === undefined){
							// msg = 'All resources';	
							$status.html('Select Category Above');
						//	$content.html("");
							jQuery('#container-async .sponse-detail-warapper').html("");
							$getcatinfo.html("");
						} else {
							$status.html('Results for <span>' + msg + '</span>');
							$getcatinfo.html(terminfo);
						}
			         },
			         error: function(MLHttpRequest, textStatus, errorThrown) {

					$status.html(textStatus);
					// onsole.log(textStatus);
					/*console.log(MLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);*/
			         },
					complete: function(data, textStatus) {
						const $currentPost = jQuery('#container-async .sponse-detail-warapper').attr('data-get-post');
						
						if($currentPost.length){
							
							setTimeout(function(){
								var hash__sponserContent = jQuery('#container-async a[data-hash="' + $currentPost + '"]').next();
								
								jQuery('#container-async .sponse-detail-warapper').html(hash__sponserContent);
								$(hash__sponserContent).show();

								// START > hash
								const stop = jQuery('#container-async');
								jQuery('html,body').animate({
									scrollTop: stop.offset().top
								}, 300);

								var getPageTitle = jQuery('#container-async .sponse-detail-warapper .sponser-post-data').attr('data-sponsor-title');
								document.title = "Marketplace - " + getPageTitle + " - Home";
							}, 100);

							jQuery('#container-async .sponse-detail-warapper').attr('data-get-post', '');
						}
					// console.log(data);
					// console.log(textStatus);
						/*
						if(window.location.hash) {
							var hash = window.location.hash;
							// $(hash).modal('toggle');
							// console.log('#container-async .'+ hash.slice(1) +'');

							// START > hash 
							var hash__sponserContent = jQuery('#container-async .'+ hash.slice(1) +'').html();
							const stop = jQuery('#container-async');
							jQuery('html,body').animate({
									scrollTop: stop.offset().top
							}, 300);

							jQuery('#container-async .sponse-detail-warapper').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg><br>Loading Resource...</p>');

							

							setTimeout(function(){
								jQuery('#container-async .sponse-detail-warapper').html(hash__sponserContent);
								
								jQuery('#container-async li.li-reset').addClass('active');
								jQuery('#container-async .sponse-detail-warapper').html(" ");
							}, 1000);
							// END

							// console.log(hash);
						}
						*/
					}
	        });
		}

		/**
		 * Bind get_posts to tag cloud and navigation
		 */
		$('#container-async').on('click', 'a[data-filter], .icw-pagination a', function(event) {
			if(event.preventDefault) { event.preventDefault(); }

			$this = $(this);
			jQuery('#container-async .sponse-detail-warapper').html("");
			jQuery('#container-async .get-category-info').html("");

			const $currentPost = jQuery('#container-async .sponse-detail-warapper').attr('data-get-post');

			document.title = currentTITLE;
			if(!$currentPost.length){
				changeQueryString(currentURL, '', document.title);
			}
			
			/**
			 * Set filter active
			 */
			if ($this.data('filter')) {
				$this.closest('ul').find('.active').removeClass('active');
				$this.parent('li').addClass('active');
				$this.closest('ul').find('li.li-reset').addClass('active');
				$page = $this.data('page');
			}
			else {
				/**
				 * Pagination
				 */
				$page = parseInt($this.attr('href').replace(/\D/g,''));
				$this = $('.nav-filter .active a');
			}

			// if ($('#container-async .li-reset.active').length) {
			// 	var urlReplace = window.location.toString().split('#', 1)[0];
			// 	history.pushState(null, null, urlReplace); // push url without the hash as new history item

			// 	$('#container-async .sponse-detail-warapper').html(" ");
			// }
			
			$('#container-async .content').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg></p>');

	        $params    = {
	        	'page' : $page,
	        	'tax'  : $this.data('filter'),
	        	'term' : $this.data('term'),
				'termname' : $this.data('catname'),
	        	'qty'  : $this.closest('#container-async').data('paged'),
	        };

	        // Run query
	        get_posts($params);
		});

		$('#container-async').on('click', 'a.btn-reset', function(event) {
			if(event.preventDefault) { event.preventDefault(); }
			$this.closest('ul').find('li.li-reset').removeClass('active');
		});
		
		
		// V2
		/*
		================================================================================================ */

		function get_posts_gridv2($params) {

			$container_gridv2 = $('#container-async-gridv2');
			$content_gridv2   = $container_gridv2.find('.content');
	        $status_gridv2    = $container_gridv2.find('.status');
			$getcatinfo2    = $container.find('.get-category-info');

			$status_gridv2.text('Loading resources ...');

			$.ajax({
					url: icw.ajax_url,
					data: {
						action: 'do_filter_posts_gridv2',
						nonce: icw.nonce,
						params: $params
					},
					type: 'post',
					dataType: 'json',
					success: function(data, textStatus, XMLHttpRequest) {
	            	// console.log(data);

						if (data.status === 200) {
							$content_gridv2.html(data.content);
						}
						else if (data.status === 201) {
							$content_gridv2.html(data.message);	
						}
						else {
							$status_gridv2.html(data.message);
						}

						msg = data.icwcatname;
						terminfo = data.icwcatinfo;
						
						// console.log(msg);
						if(msg == 'All' || msg == null || msg === undefined){
							// msg = 'All resources';	
							$status_gridv2.html('Select Category Above');
						//	$content_gridv2.html("");
							jQuery('#container-async-gridv2 .sponse-detail-warapper').html("");
							$getcatinfo.html("");
						} else {
							$status_gridv2.html('Results for <span>' + msg + '</span>'); 
							$getcatinfo2.html(terminfo);
						}
			         },
			         error: function(MLHttpRequest, textStatus, errorThrown) {

					$status_gridv2.html(textStatus);
					// console.log(textStatus);
					/*console.log(MLHttpRequest);
					console.log(textStatus);
					console.log(errorThrown);*/
			         },
				complete: function(data, textStatus) {
					const $currentPost = jQuery('#container-async-gridv2 .sponse-detail-warapper').attr('data-get-post');
					
					if($currentPost.length){
						setTimeout(function(){
							var hash__sponserContent = jQuery('#container-async-gridv2 a[data-hash="' + $currentPost + '"]').next();

							jQuery('#container-async-gridv2 .sponse-detail-warapper').html(hash__sponserContent);
							$(hash__sponserContent).show();

							// START > hash
							const stop = jQuery('#container-async-gridv2');
							jQuery('html,body').animate({
								scrollTop: stop.offset().top
							}, 300);

							var getPageTitle = jQuery('#container-async .sponse-detail-warapper .sponser-post-data').attr('data-sponsor-title');
							document.title = "Marketplace - " + getPageTitle + " - Home";

							jQuery('#container-async-gridv2 .sponse-detail-warapper').attr('data-get-post', '');
						}, 100);
						
					}

	            	// console.log(data);
	            	// console.log(textStatus);
					/*
					if(window.location.hash) {
						var hash = window.location.hash;
						// $(hash).modal('toggle');
						// console.log('#container-async-gridv2 .'+ hash.slice(1) +'');

						// START > hash 
						var hash__sponserContent_v2 = jQuery('#container-async-gridv2 .'+ hash.slice(1) +'').html();
						const stop = jQuery('#container-async-gridv2');
						jQuery('html,body').animate({
								scrollTop: stop.offset().top
						}, 300);

						jQuery('#container-async-gridv2 .sponse-detail-warapper').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg><br>Loading Resource...</p>');

						setTimeout(function(){
							jQuery('#container-async-gridv2 .sponse-detail-warapper').html(hash__sponserContent_v2);

							jQuery('#container-async-gridv2 li.li-reset').addClass('active');
							jQuery('#container-async-gridv2 .content').html(" ");
						}, 1000);
						// END

						// console.log(hash);
					}
					*/
	            }
	        });
		}

		/**
		 * Bind get_posts to tag cloud and navigation
		 */
		$('#container-async-gridv2').on('click', 'a[data-filter], .icw-pagination a', function(event) {
			if(event.preventDefault) { event.preventDefault(); }

			$this = $(this);
			jQuery('#container-async-gridv2 .sponse-detail-warapper').html("");

			const $currentPost = jQuery('#container-async-gridv2 .sponse-detail-warapper').attr('data-get-post');

			if(!$currentPost.length){
				changeQueryString(currentURL, '', document.title);
			}

			/**
			 * Set filter active
			 */
			if ($this.data('filter')) {
				$this.closest('ul').find('.active').removeClass('active');
				$this.parent('li').addClass('active');
				$this.closest('ul').find('li.li-reset').addClass('active');
				$page = $this.data('page');
			}
			else {
				/**
				 * Pagination
				 */
				$page = parseInt($this.attr('href').replace(/\D/g,''));
				$this = $('#container-async-gridv2 .nav-filter .active a');
			}

			// if ($this.parents('.active').length != 0) {
			// 	//someone has this class
			// }

			// if ($this.parent('li.li-reset').hasClass('active')) {
			// 	console.log("reset.active");
			// 	var urlReplace = window.location.toString().split('#', 1)[0];
			// 	history.pushState(null, null, urlReplace); // push url without the hash as new history item
				
			// 	$('#container-async-gridv2 .sponse-detail-warapper').html(" ");
			// }

			$('#container-async-gridv2 .content').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg></p>');
			
			jQuery('#container-async .get-category-info').html('');

	        $params    = {
	        	'page' : $page,
	        	'tax'  : $this.data('filter'),
	        	'term' : $this.data('term'),
				'termname' : $this.data('catname'),
	        	'qty'  : $this.closest('#container-async-gridv2').data('paged'),
	        };

	        // Run query
	        get_posts_gridv2($params);
		});

		$('#container-async-gridv2').on('click', 'a.btn-reset', function(event) {
			if(event.preventDefault) { event.preventDefault(); }
			$this.closest('ul').find('li.li-reset').removeClass('active');
		});



		// 
		/* sponser-block-logo.php > add click to open detail info
		================================================================================================ */

		// // AJAX > container-async > sponser-block-logo.php > add click to open detail info
		$('#content').on('click', '.action-get-sponsor-info', function(event) {
			if(event.preventDefault) { event.preventDefault(); }

			$this = $(this);
			var getdataid = $(this).parent(".sponsor-post-item-grid").attr("data-id");
			var getPageTitle = $(this).parent(".sponsor-post-item-grid").attr("data-sponsor-title");
			document.title = "Marketplace - " + getPageTitle + " - Home";

			if(getdataid == 17364) {
				var urlSplit=( currentURL ).split( "?" );
				window.location = urlSplit[0] + '?sponsor-info=' + $this.attr('data-hash');
			}

			// console.log(termslug);
			// console.log(getdataid);
			var sponserContent = jQuery('#container-async .sponser-post-data[data-sponsordata="'+ getdataid +'"]').html();
        	const stop = jQuery('#container-async');
            jQuery('html,body').animate({
                    scrollTop: stop.offset().top
            }, 300);

			jQuery('#container-async .sponse-detail-warapper').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg><br>Loading Resource...</p>');

				setTimeout(function(){
					jQuery('#container-async .sponse-detail-warapper').html(sponserContent);

					jQuery('#container-async .nav-filter li.li-reset').addClass('active');
					jQuery('#container-async .content').html('');

				}, 1000);
		});



		// AJAX > container-async-gridv2 =  add click to open detail info
		$('#content').on('click', '.action-get-sponsor-info-v2', function(event) {
			if(event.preventDefault) { event.preventDefault(); }

			$this = $(this);
			var getdataid = $(this).parent(".sponsor-post-card-grid").attr("data-id");
			var getPageTitle = $(this).parent(".sponsor-post-item-grid").attr("data-sponsor-title");
			document.title = "Marketplace - " + getPageTitle + " - Home";
			// console.log(termslug);
			// console.log(getdataid);
			var sponserContent = jQuery('#container-async-gridv2 .sponser-post-data[data-sponsordata="'+ getdataid +'"]').html();
        	const stop = jQuery('#container-async-gridv2');
            jQuery('html,body').animate({
                    scrollTop: stop.offset().top
            }, 300);

			jQuery('#container-async-gridv2 .sponse-detail-warapper').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg><br>Loading Resource...</p>');

				setTimeout(function(){
					jQuery('#container-async-gridv2 .sponse-detail-warapper').html(sponserContent);

					jQuery('#container-async-gridv2 .nav-filter li.li-reset').addClass('active');
					jQuery('#container-async-gridv2 .content').html(" ");
				}, 1000);
		});




		// Sponsors-feature-slider slick  > Click Open details
		$('#content').on('click', '.action-filter-postid', function(event) {
			if(event.preventDefault) { event.preventDefault(); }

			$this = $(this);
			var getdatapid = $(this).attr("data-pid");
			// console.log(termslug);
		
			const sponserContent = jQuery('.sponser-post-data[data-sponsordata="'+ getdatapid +'"]').html();
        	const stop = jQuery('#container-async');
            jQuery('html,body').animate({
                    scrollTop: stop.offset().top
            }, 300);

			jQuery('.sponse-detail-warapper').html('<p class="text-center"><svg width="114px" height="114px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><defs><filter id="uil-ring-shadow" x="-100%" y="-100%" width="300%" height="300%"><feOffset result="offOut" in="SourceGraphic" dx="0" dy="0"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation="0"></feGaussianBlur><feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend></filter></defs><path d="M10,50c0,0,0,0.5,0.1,1.4c0,0.5,0.1,1,0.2,1.7c0,0.3,0.1,0.7,0.1,1.1c0.1,0.4,0.1,0.8,0.2,1.2c0.2,0.8,0.3,1.8,0.5,2.8 c0.3,1,0.6,2.1,0.9,3.2c0.3,1.1,0.9,2.3,1.4,3.5c0.5,1.2,1.2,2.4,1.8,3.7c0.3,0.6,0.8,1.2,1.2,1.9c0.4,0.6,0.8,1.3,1.3,1.9 c1,1.2,1.9,2.6,3.1,3.7c2.2,2.5,5,4.7,7.9,6.7c3,2,6.5,3.4,10.1,4.6c3.6,1.1,7.5,1.5,11.2,1.6c4-0.1,7.7-0.6,11.3-1.6 c3.6-1.2,7-2.6,10-4.6c3-2,5.8-4.2,7.9-6.7c1.2-1.2,2.1-2.5,3.1-3.7c0.5-0.6,0.9-1.3,1.3-1.9c0.4-0.6,0.8-1.3,1.2-1.9 c0.6-1.3,1.3-2.5,1.8-3.7c0.5-1.2,1-2.4,1.4-3.5c0.3-1.1,0.6-2.2,0.9-3.2c0.2-1,0.4-1.9,0.5-2.8c0.1-0.4,0.1-0.8,0.2-1.2 c0-0.4,0.1-0.7,0.1-1.1c0.1-0.7,0.1-1.2,0.2-1.7C90,50.5,90,50,90,50s0,0.5,0,1.4c0,0.5,0,1,0,1.7c0,0.3,0,0.7,0,1.1 c0,0.4-0.1,0.8-0.1,1.2c-0.1,0.9-0.2,1.8-0.4,2.8c-0.2,1-0.5,2.1-0.7,3.3c-0.3,1.2-0.8,2.4-1.2,3.7c-0.2,0.7-0.5,1.3-0.8,1.9 c-0.3,0.7-0.6,1.3-0.9,2c-0.3,0.7-0.7,1.3-1.1,2c-0.4,0.7-0.7,1.4-1.2,2c-1,1.3-1.9,2.7-3.1,4c-2.2,2.7-5,5-8.1,7.1 c-0.8,0.5-1.6,1-2.4,1.5c-0.8,0.5-1.7,0.9-2.6,1.3L66,87.7l-1.4,0.5c-0.9,0.3-1.8,0.7-2.8,1c-3.8,1.1-7.9,1.7-11.8,1.8L47,90.8 c-1,0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1,90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34,87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4,0-0.7,0-1.1c0-0.7,0-1.2,0-1.7C10,50.5,10,50,10,50z" fill="#85AC31" filter="url(#uil-ring-shadow)"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite" dur="1s"></animateTransform></path></svg><br>Loading Resource...</p>');
				setTimeout(function(){
					jQuery('.sponse-detail-warapper').html(sponserContent);
				}, 1000);
		});

		
		function changeQueryString(url, searchString, documentTitle){      
			documentTitle = typeof documentTitle !== 'undefined' ? documentTitle : document.title;      
			var urlSplit=( url ).split( "?" );
			
			var obj = { Title: documentTitle, Url: urlSplit[0] + searchString };  
			// console.log(searchString);    
			history.pushState(obj, obj.Title, obj.Url);      
		}


		$('#content').on('click', '.is-hash-open-sponsor-url', function(event) { // $('#content').on('click', '.open-modal-hash', function(event) {
			if(event.preventDefault) { event.preventDefault(); }
			$this = $(this);
			// console.log("hash-href");
			changeQueryString(currentURL, '?sponsor-info=' + $this.attr('data-hash'), document.title);
			// changeQueryString(site_url + '/sponser/', $this.attr('data-hash'), document.title);
			
			// window.location.hash = '?sponser=' + $this.attr('data-hash');
		});
		
		$('#content').on('click', '.close', function(event) {
			if(event.preventDefault) { event.preventDefault(); }
			var urlReplace = window.location.toString().split('#', 1)[0];
			history.pushState(null, null, urlReplace); // push url without the hash as new history item
		});


		$('.slider-hash-open-sponsor-url').on('click', function (e) {
			// e.preventDefault();
			// var termslug = $(this).attr("data-target");
			// window.location.reload();
			// return false;
		});

		

		$(document).on('click', '.clipboard', function(e) {
			e.preventDefault();
			var $temp = $("<input>");
			var $url = $(this).attr('href');
			$("body").append($temp);
			$temp.val($url).select();
			document.execCommand("copy");
			// $temp.remove();
			$(".clipboard-url .copied").text("");
			$(this).next(".copied").text("URL copied!");
			return false;
		});
		
		$('#container-async a[data-term="all-terms"]').trigger('click');
		$('#container-async-gridv2 a[data-term="all-terms"]').trigger('click');

	});
	

})(jQuery);


jQuery(document).ajaxComplete(function() {
    jQuery("[data-toggle=tooltip]").tooltip();
});

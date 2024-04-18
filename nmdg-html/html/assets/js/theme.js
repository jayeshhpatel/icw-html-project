"use strict";

is_visible_init ();
thegov_slick_navigation_init();

jQuery(document).ready(function($) {
	thegov_split_slider();
	thegov_sticky_init();
	thegov_search_init();
	thegov_side_panel_init();
	thegov_mobile_header();
	thegov_woocommerce_helper();
	thegov_woocommerce_login_in();
	thegov_init_timeline_appear();
	thegov_accordion_init();
	thegov_services_accordion_init();
	thegov_striped_services_init();
	thegov_progress_bars_init();
	thegov_carousel_slick();
	thegov_image_comparison();
	thegov_counter_init();
	thegov_countdown_init ();
	thegov_circuit_services();
	thegov_circuit_services_resize();
	thegov_img_layers();
	thegov_page_title_parallax();
	thegov_extended_parallax();
	thegov_portfolio_parallax();
	thegov_message_anim_init();
	thegov_scroll_up();
	thegov_link_scroll();
	thegov_skrollr_init();
	thegov_sticky_sidebar ();
	thegov_videobox_init ();
	thegov_parallax_video();
	thegov_tabs_init();
	thegov_select_wrap();
	jQuery( '.wgl_module_title .carousel_arrows' ).thegov_slick_navigation();
	jQuery( '.wgl-filter_wrapper .carousel_arrows' ).thegov_slick_navigation();
	jQuery( '.wgl-products > .carousel_arrows' ).thegov_slick_navigation();
	jQuery( '.thegov_module_custom_image_cats > .carousel_arrows' ).thegov_slick_navigation();
	thegov_scroll_animation();
	thegov_woocommerce_mini_cart();
	thegov_text_background();
	thegov_dynamic_styles();
});

jQuery(window).load(function() {
	thegov_isotope();
	thegov_blog_masonry_init();
	thegov_events_masonry_init();
	setTimeout(function(){
		jQuery('#preloader-wrapper').fadeOut();
	},1100);
	particles_custom();

	thegov_menu_lavalamp();
	jQuery(".wgl-currency-stripe_scrolling").each(function(){
    	jQuery(this).simplemarquee({
	        speed: 40,
	        space: 0,
	        handleHover: true,
	        handleResize: true
	    });
    })
});

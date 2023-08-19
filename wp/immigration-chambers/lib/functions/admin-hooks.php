<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly

/**
 * Creates a nicely formatted and more specific title element text
 * for output in head of document, based on current view.
 *
 * @param string $title Default title text for current view.
 * @param string $sep   Optional separator.
 * @return string Filtered title.
 */
function icw_wpdocs_filter_wp_title( $title, $sep ) {
  global $paged, $page;

  if ( is_feed() )
      return $title;

  // Add the site name.
  $title .= get_bloginfo( 'name' );

  // Add the site description for the home/front page.
  $site_description = get_bloginfo( 'description', 'display' );
  if ( $site_description && ( is_home() || is_front_page() ) )
      $title = "$title $sep $site_description";

  // Add a page number if necessary.
  if ( $paged >= 2 || $page >= 2 )
      $title = "$title $sep " . sprintf( __( 'Page %s', 'ICWTHEMENAME' ), max( $paged, $page ) );

  return $title;
}
add_filter( 'wp_title', 'icw_wpdocs_filter_wp_title', 10, 2 );


/*-----------------------------------------------------------------------------------*/
/* pr code  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
function pr($data){
	echo "<pre>";
	print_r($data);
	echo "</pre>";
}


/*-----------------------------------------------------------------------------------*/
/*  Disable Gutenberg via Code | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
// add_filter('use_block_editor_for_post', '__return_false', 10); // disable for posts 
// add_filter('use_block_editor_for_post_type', '__return_false', 10); // disable for post types
// add_filter('use_block_editor_for_page', '__return_false', 10); // disable for posts 

// Disables the block editor from managing widgets in the Gutenberg plugin.
add_filter( 'gutenberg_use_widgets_block_editor', '__return_false' );

// Disables the block editor from managing widgets.
add_filter( 'use_widgets_block_editor', '__return_false' );

function icw_gutenberg_filter( $use_block_editor, $post_type ) {
	if ( ('glossary' === $post_type) || ('post' === $post_type) ) {
		return false;
	}
	return $use_block_editor;
}
add_filter( 'use_block_editor_for_post_type', 'icw_gutenberg_filter', 10, 2 );


/*-----------------------------------------------------------------------------------*/
/*  Change wp_mail_from and wp_mail_from_name WordPress | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
// wp_mail_from
add_filter('wp_mail_from', 'icw_from_mail');
function icw_from_mail($original_email_address) {
    return 'wordpress@iclegal.co.nz';
}

// wp_mail_from_name
add_filter('wp_mail_from_name', 'icw_from_mail_name');
function icw_from_mail_name($original_email_address_name) {
    return 'Immigration Chambers';
}

// Admin footer modification
function icw_remove_footer_admin () {
    echo '<span id="footer-thankyou">Website Design &amp; Development <a href="https://increativeweb.com" target="_blank"><strong>www.InCreativeWeb.com</strong></a></span>';
}
add_filter('admin_footer_text', 'icw_remove_footer_admin');


/*-----------------------------------------------------------------------------------*/
/*  Disable Admin Bar for All Users Except for Administrators | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
add_action('after_setup_theme', 'remove_admin_bar');
function remove_admin_bar() {
	if (!current_user_can('administrator') && !is_admin()) {
		add_filter('show_admin_bar', '__return_false');
		//show_admin_bar(false);
	}
}


/*-----------------------------------------------------------------------------------*/
/* disable author query in WordPress  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
add_action('template_redirect', 'disableAuthorUrl');
function disableAuthorUrl(){
    if (is_author()) {
       wp_redirect(home_url());
       exit();
    }
}

/*-----------------------------------------------------------------------------------*/
/* Manually Disable Search Feature in WordPress  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
function wpb_filter_query( $query, $error = true ) {
	if ( is_search() ) {
		$query->is_search = false;
		$query->query_vars['s'] = false;
		$query->query['s'] = false;
	if ( $error == true )
		$query->is_404 = true;
	}
}
if ( !is_user_logged_in() ) {
	add_action( 'parse_query', 'wpb_filter_query' );
  add_filter( 'get_search_form', function($a) {return null;});
}
function remove_search_widget() {
	unregister_widget('WP_Widget_Search');
}
add_action( 'widgets_init', 'remove_search_widget' );

/*-----------------------------------------------------------------------------------*/
/* Admin Logo | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
add_action( 'login_enqueue_scripts', 'icw_login_logo' );
function icw_login_logo() { ?>
<style type="text/css">
body.login { background:#07bafe url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/wp-pattern.png') no-repeat top right fixed !important; background-size: cover!important; }
body.login div#login { position:absolute; width: 320px !important; background-color: #00339f; left: 50%;top:0;margin: 100px 0px 10px -160px !important; padding: 70px 0px 10px !important; -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19); box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);}
body.login div#login form { background-color: #fff; margin-top: 0px !important; padding: 20px 24px 25px !important; margin: 0px -15px; border-radius: 5px;    -webkit-box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15); box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15)}
body.login div#login h1 { position: absolute; left: 0; right: 0; top: 0; -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); transform: translateY(-50%); z-index: 1; }
body.login div#login h1 a { background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/wp-logo.svg'); background-repeat: no-repeat; background-size: cover; width: 120px; height: 120px; background-position: center; position: relative; top: 50%; left: 50%; -webkit-transform: translate(-50%); -moz-transform: translate(-50%); transform: translate(-50%); margin: 0; overflow: visible; display: table; background-color: #ffffff; background-size: 90%; border-radius: 300px; }
body.login div#login form input[type="text"], #login form input[type="password"], #login form input[type="email"] { background: #ffffff; border: 1px solid #e1e1e1; box-shadow: none; color: #adadad; padding: 8px; font-size: 16px; pointer-events: all; }
body.login div#login #wp-submit { width: 100%; margin-top: 16px; padding: 5px; height: auto; border: none; box-shadow: none; border-radius: 25px; -webkit-transition: all 0.3s ease; -moz-transition: all 0.3s ease; transition: all 0.3s ease; background-color: #00339f; font-family: Lato; font-size: 17.6px; color: #ffffff; font-weight: 400; text-shadow: none; }
body.login div#login #wp-submit:hover { background-color:#ffbd33;color: #ffffff; }
body.login div#login #backtoblog a, body.login #nav a {color: #ffffff!important;}
body.login div#login #nav a:hover {color: #9c7708 !important;}
@media(max-width:480px) { body.login div#login { width: 300px !important; margin: 80px 0px 10px -150px !important;}}
</style>
<?php }

//---------------------------------
// CF7  | InCreativeWeb
//---------------------------------

// add_filter( 'wpcf7_load_css', '__return_false' );
// add_filter( 'wpcf7_load_js', '__return_false' );

// remove_action( 'wp_enqueue_scripts','wpcf7_recaptcha_enqueue_scripts', 20 );
// add_action('wp_enqueue_scripts', 'enqueue_wpcf7_css_js_as_needed', 10, 2 );
// function enqueue_wpcf7_css_js_as_needed () {
//   if ( is_page('career') || is_page('contact-us') ) {
//       wpcf7_recaptcha_enqueue_scripts();
//       wpcf7_enqueue_scripts();
//   }
// }

/*-----------------------------------------------------------------------------------*/
/* Wordpress Disable Comments | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
add_action('admin_init', function () {
  // Redirect any user trying to access comments page
  global $pagenow;
  
  if ($pagenow === 'edit-comments.php') {
      wp_redirect(admin_url());
      exit;
  }

  // Remove comments metabox from dashboard
  remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

  // Disable support for comments and trackbacks in post types
  foreach (get_post_types() as $post_type) {
      if (post_type_supports($post_type, 'comments')) {
          remove_post_type_support($post_type, 'comments');
          remove_post_type_support($post_type, 'trackbacks');
      }
  }
});

// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

// Hide existing comments
add_filter('comments_array', '__return_empty_array', 10, 2);

// Remove comments page in menu
add_action('admin_menu', function () {
  remove_menu_page('edit-comments.php');
});

// Remove comments links from admin bar
add_action('init', function () {
  if (is_admin_bar_showing()) {
      remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
  }
});
/*-----------------------------------------------------------------------------------*/
/* End Wordpress Disable Comments | InCreativeWeb
/*-----------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/
/* Remove widgets from the WordPress Dashboard | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
function icw_remove_dashboard_meta() {
  remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal'); //Removes the 'incoming links' widget
  remove_meta_box('dashboard_plugins', 'dashboard', 'normal'); //Removes the 'plugins' widget
  remove_meta_box('dashboard_primary', 'dashboard', 'normal'); //Removes the 'WordPress News' widget
  remove_meta_box('dashboard_secondary', 'dashboard', 'normal'); //Removes the secondary widget
  remove_meta_box('dashboard_quick_press', 'dashboard', 'side'); //Removes the 'Quick Draft' widget
  remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side'); //Removes the 'Recent Drafts' widget
  remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal'); //Removes the 'Activity' widget
  remove_meta_box('dashboard_right_now', 'dashboard', 'normal'); //Removes the 'At a Glance' widget
  remove_meta_box('dashboard_activity', 'dashboard', 'normal'); //Removes the 'Activity' widget (since 3.8)
  remove_meta_box('aioseo-overview', 'dashboard', 'normal');
  remove_meta_box('aioseo-rss-feed', 'dashboard', 'normal');
  remove_action( 'welcome_panel', 'wp_welcome_panel' );
  // remove_meta_box( 'health_check_status', 'dashboard', 'normal' );
}
add_action('admin_init', 'icw_remove_dashboard_meta');


function icw_wp_welcome_panel() { ?>
	<div class="welcome-panel-content" style="min-height:220px">
	<div class="welcome-panel-header">
		<div class="welcome-panel-header-image">
			<svg width="780" height="550" viewBox="0 0 780 550" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><g opacity=".5" fill="#273FCC" stroke="#627EFF" stroke-width="2" stroke-miterlimit="10"><circle cx="434.757" cy="71.524" r="66.1"></circle><circle cx="432.587" cy="43.138" r="66.1"></circle><circle cx="426.277" cy="16.14" r="66.1"></circle><circle cx="416.143" cy="-9.165" r="66.1"></circle><circle cx="402.53" cy="-32.447" r="66.1"></circle><circle cx="385.755" cy="-53.376" r="66.1"></circle><circle cx="116.864" cy="-53.072" r="66.1"></circle><circle cx="99.984" cy="-32.183" r="66.1"></circle><circle cx="86.278" cy="-8.953" r="66.1"></circle><circle cx="76.078" cy="16.3" r="66.1"></circle><circle cx="69.714" cy="43.23" r="66.1"></circle><circle cx="67.518" cy="71.524" r="66.1"></circle><circle cx="67.518" cy="71.524" r="66.1"></circle><circle cx="67.518" cy="99.05" r="66.1"></circle><circle cx="67.518" cy="126.577" r="66.1"></circle><circle cx="67.518" cy="154.09" r="66.1"></circle><circle cx="67.518" cy="181.617" r="66.1"></circle><circle cx="67.518" cy="209.143" r="66.1"></circle><circle cx="67.518" cy="236.67" r="66.1"></circle><circle cx="67.518" cy="264.196" r="66.1"></circle><circle cx="67.518" cy="291.722" r="66.1"></circle><circle cx="67.518" cy="319.236" r="66.1"></circle><circle cx="67.518" cy="346.762" r="66.1"></circle><circle cx="67.518" cy="374.289" r="66.1"></circle><circle cx="67.518" cy="374.831" r="66.1"></circle><circle cx="68.471" cy="393.565" r="66.1"></circle><circle cx="71.249" cy="411.757" r="66.1"></circle><circle cx="75.76" cy="429.315" r="66.1"></circle><circle cx="81.925" cy="446.146" r="66.1"></circle><circle cx="89.651" cy="462.17" r="66.1"></circle><circle cx="411.579" cy="464.073" r="66.1"></circle><circle cx="423.208" cy="438.98" r="66.1"></circle><circle cx="430.986" cy="412.008" r="66.1"></circle><circle cx="434.558" cy="383.517" r="66.1"></circle><circle cx="433.831" cy="354.43" r="66.1"></circle><circle cx="428.777" cy="326.428" r="66.1"></circle><circle cx="419.635" cy="300.078" r="66.1"></circle><circle cx="406.763" cy="275.725" r="66.1"></circle><circle cx="390.491" cy="253.698" r="66.1"></circle><circle cx="371.189" cy="234.369" r="66.1"></circle><circle cx="349.188" cy="218.054" r="66.1"></circle><circle cx="324.846" cy="205.124" r="66.1"></circle><circle cx="298.506" cy="195.896" r="66.1"></circle><circle cx="270.512" cy="190.739" r="66.1"></circle><circle cx="241.368" cy="189.986" r="66.1"></circle><circle cx="213.003" cy="193.754" r="66.1"></circle><circle cx="186.147" cy="201.739" r="66.1"></circle><circle cx="161.157" cy="213.559" r="66.1"></circle><circle cx="138.389" cy="228.882" r="66.1"></circle><circle cx="118.174" cy="247.352" r="66.1"></circle><circle cx="100.857" cy="268.599" r="66.1"></circle><circle cx="86.794" cy="292.264" r="66.1"></circle><circle cx="76.316" cy="318.019" r="66.1"></circle><circle cx="69.781" cy="345.466" r="66.1"></circle><circle cx="67.518" cy="374.289" r="66.1"></circle><circle cx="712.577" cy="449.729" r="66.1"></circle><circle cx="712.577" cy="428.072" r="66.1"></circle><circle cx="712.577" cy="406.403" r="66.1"></circle><circle cx="712.577" cy="384.733" r="66.1"></circle><circle cx="712.577" cy="363.077" r="66.1"></circle><circle cx="712.577" cy="341.408" r="66.1"></circle><circle cx="712.577" cy="319.738" r="66.1"></circle><circle cx="712.577" cy="298.069" r="66.1"></circle><circle cx="712.577" cy="276.412" r="66.1"></circle><circle cx="712.577" cy="254.743" r="66.1"></circle><circle cx="712.577" cy="233.073" r="66.1"></circle><circle cx="712.577" cy="211.417" r="66.1"></circle><circle cx="712.577" cy="189.748" r="66.1"></circle><circle cx="712.577" cy="168.078" r="66.1"></circle><circle cx="712.577" cy="146.422" r="66.1"></circle><circle cx="712.577" cy="124.753" r="66.1"></circle><circle cx="712.577" cy="103.083" r="66.1"></circle><circle cx="712.577" cy="81.413" r="66.1"></circle><circle cx="712.577" cy="59.757" r="66.1"></circle><circle cx="712.577" cy="38.088" r="66.1"></circle><circle cx="712.577" cy="16.418" r="66.1"></circle><circle cx="712.577" cy="-5.238" r="66.1"></circle><circle cx="712.577" cy="-26.907" r="66.1"></circle><circle cx="712.577" cy="-48.577" r="66.1"></circle><circle cx="662.966" cy="-44.161" r="66.1"></circle><circle cx="646.429" cy="-21.024" r="66.1"></circle><circle cx="629.893" cy="2.113" r="66.1"></circle><circle cx="613.356" cy="25.25" r="66.1"></circle><circle cx="596.819" cy="48.387" r="66.1"></circle><circle cx="580.282" cy="71.524" r="66.1"></circle><circle cx="580.282" cy="465.515" r="66.1"></circle></g></svg>
		</div>
		<h2>Welcome to <?php echo esc_html( get_bloginfo( 'name' ) ); ?></h2>
		<p><?php echo esc_html( get_bloginfo( 'description' ) ); ?></p>
	</div>
	</div>
<?php }
add_action( 'welcome_panel', 'icw_wp_welcome_panel' );


/*-----------------------------------------------------------------------------------*/
/* Remove all default widgets | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
function icw_remove_default_widgets() {
	unregister_widget('WP_Widget_Media_Gallery');
	//unregister_widget('WP_Widget_Pages');
	unregister_widget('WP_Widget_Calendar');
	// unregister_widget('WP_Widget_Archives');
	unregister_widget('WP_Widget_Links');
	unregister_widget('WP_Widget_Meta');
	// unregister_widget('WP_Widget_Search');
	//unregister_widget('WP_Widget_Text');
	// unregister_widget('WP_Widget_Categories');
	unregister_widget('WP_Widget_Recent_Posts');
	unregister_widget('WP_Widget_Recent_Comments');
	unregister_widget('WP_Widget_RSS');
	unregister_widget('WP_Widget_Tag_Cloud');
	//unregister_widget('WP_Nav_Menu_Widget');
	//unregister_widget('Twenty_Eleven_Ephemera_Widget');
	unregister_widget('WP_Widget_Media_Audio');
	//unregister_widget('WP_Widget_Media_Image');
	unregister_widget('WP_Widget_Media_Video');
	//unregister_widget('WP_Widget_Custom_HTML');
}
add_action('widgets_init', 'icw_remove_default_widgets', 11);


function icw_mymodule_curl_before_request($curlhandle){
	session_write_close();
}
add_action( 'requests-curl.before_request','icw_mymodule_curl_before_request', 9999 );

add_action('after_setup_theme', function () {
	remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
	remove_action('wp_footer', 'wp_enqueue_global_styles', 1);
}, 10, 0);

add_action('wp_footer',function() {
  global $wp_filter;
  if(empty($wp_filter['wp_footer'][10])) return;
  foreach($wp_filter['wp_footer'][10] as $hook) {
          if(!is_object($hook['function']) || get_class($hook['function']) !== 'Closure') continue;
          $static=(new ReflectionFunction($hook['function']))->getStaticVariables();
          if(empty($static['svg'])) continue;
          if(!str_starts_with($static['svg'],'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" ')) continue;
          remove_action('wp_footer',$hook['function'],10);
  }
},9);
<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly

add_filter('nav_menu_css_class', 'icw_css_attributes_filter', 100, 1);
add_filter('nav_menu_item_id', 'icw_css_attributes_filter', 100, 1);
add_filter('page_css_class', 'icw_css_attributes_filter', 100, 1);
function icw_css_attributes_filter($var) {
  return is_array($var) ? array_intersect($var, array('current-menu-item','menu-item-has-children', 'menu-megamenu', 'menuinfo', 'current-menu-parent', 'menu-title', 'hash-menu', 'current-page-parent', 'is-post_type' )) : '';
}


add_filter('wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2);
function my_wp_nav_menu_objects( $items, $args ) {
	foreach( $items as &$item ) {
		// pr($item);
		if( !empty($item->url) && $item->url == '#menuinfo#' && !empty($item->description)) {
			$item->title = $item->description;
			$item->classes = 'menuinfo';
		}
    if( !empty($item->classes[0]) && $item->classes[0] == 'menu-megamenu') {
			$item->title = '<span class="menu-mask">'.$item->title.'</span>';
			// $item->classes = 'AAA';
		}
	}
	// return
	return $items;
}

remove_filter('nav_menu_description', 'strip_tags');
add_filter( 'wp_setup_nav_menu_item', 'cus_wp_setup_nav_menu_item' );
function cus_wp_setup_nav_menu_item($menu_item) {
    $menu_item->description = apply_filters('nav_menu_description',  $menu_item->post_content );
    return $menu_item;
}


// limit search to Posts
function certain_search_only_posts($query){
  if ($query->is_search)
  {
      $query->set('post_type', 'post');
  }
  return $query;
}
// add_filter('pre_get_posts', 'certain_search_only_posts');


if ( !function_exists( 'icw_move_comment_field_to_bottom' ) ) {
  function icw_move_comment_field_to_bottom( $fields ) {
    $comment_field = $fields[ 'comment' ];
    unset( $fields[ 'comment' ] );
    $fields[ 'comment' ] = $comment_field;

    return $fields;
  }

  add_filter( 'comment_form_fields', 'icw_move_comment_field_to_bottom' );
}

if ( !function_exists( 'icw_bootstrap_comment' ) ) {
  /**
   * Custom callback for comment output
   *
   */
  function icw_bootstrap_comment( $comment, $args, $depth ) {
    $GLOBALS[ 'comment' ] = $comment;

    $comment_link_args = array(
      'add_below' => 'comment',
      'respond_id' => 'respond',
      'reply_text' => esc_html__( 'Reply', 'ICWTHEME' ),
      'login_text' => esc_html__( 'Log in to Reply', 'ICWTHEME' ),
      'depth' => 1,
      'before' => '',
      'after' => '',
      'max_depth' => 5
    );
    ?>
<?php if ( $comment->comment_approved == '1' ): ?>
<li class="comment">
  <figure class="comment-avatar"><?php echo get_avatar( $comment ); ?></figure>
  <div class="comment-content">
    <h4>
      <?php comment_author_link() ?>
    </h4>
    <p>
      <?php comment_text() ?>
    </p>
    <small>
    <?php comment_date() ?>
    </small>
    <?php
    comment_reply_link( $comment_link_args );
    ?>
  </div>
</li>
<?php
endif;
}

}


if ( !function_exists( 'icw_pagination' ) ) {
  function icw_pagination() {
    global $wp_query;
    echo '<div class="icw-pagination">'. paginate_links().'</div>';
  }
}
  
  
if ( !function_exists( 'icw_get_post_thumbnail_url' ) ) {
  /**
   * Get Post Thumbnail URL
   */
  function icw_get_post_thumbnail_url() {
    if ( get_the_post_thumbnail_url() ) {
      return get_the_post_thumbnail_url( get_the_ID(), 'icw-post-thumb-small' );
    } else {
      return get_template_directory_uri() . '/images/no-post.jpg';
    }

    return false;
  }
}
  
if ( !function_exists( 'icw_get_page_title' ) ) {

  function icw_get_page_title() {
    $title = '';

    if ( is_category() ) {
      $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
      $title = single_term_title( "", false ) . esc_html__( 'Tag', 'ICWTHEME' );
    } elseif ( is_date() ) {
      $title = get_the_time( 'F Y' );
    } elseif ( is_author() ) {
      $title = esc_html__( 'Author:', 'ICWTHEME' ) . ' ' . esc_html( get_the_author() );
    } elseif ( is_search() ) {
      $title = esc_html__( 'Search Result', 'ICWTHEME' );
    } elseif ( is_404() ) {
      $title = esc_html__( 'Page not found', 'ICWTHEME' );
    } elseif ( is_archive() ) {
      $title = esc_html__( 'Archive', 'ICWTHEME' );
    } elseif ( is_home() || is_front_page() ) {
      if ( is_home() && !is_front_page() ) {
        $title = esc_html( single_post_title( '', false ) );
      } else {
        $title = ( icw_get_option( 'archive_blog_title' ) ) ? esc_html( icw_get_option( 'archive_blog_title' ) ) : esc_html__( 'Blog', 'ICWTHEME' );
      }
    } else {
      global $post;
      if ( !empty( $post ) ) {
        if ( $post->post_type == 'post' ) {
          // $title = ( icw_get_option( 'archive_blog_title' ) ) ? esc_html( icw_get_option( 'archive_blog_title' ) ) : esc_html__( 'Blog', 'ICWTHEME' );
          $id = $post->ID;
          $title = esc_html( get_the_title( $id ) );
        } else {
          $id = $post->ID;
          $title = esc_html( get_the_title( $id ) );
        }
      } else {
        $title = esc_html__( 'Post not found.', 'ICWTHEME' );
      }
    }

    return $title;
  }

}


if ( !function_exists( 'icw_posted_by' ) ):
  function icw_posted_by() {
    $author_id = get_post_field ('post_author', get_the_ID());
    echo '<div class="post-avatar"><img src="' . get_avatar_url( get_the_author_meta( "user_email", $author_id ) ) . '" alt="' . esc_attr( get_the_author_meta("display_name", $author_id) ) . '"></div>
    <div class="post-data">
      <div class="post-user-name">' . esc_html( get_the_author_meta("display_name", $author_id) ) . '</div>
      <span class="post-date">'.get_the_date('d<\s\u\p>S</\s\u\p> M, Y', get_the_ID()).'</span>
    </div>';
  }
endif;




//Remove the REST API endpoint.
remove_action('rest_api_init', 'wp_oembed_register_route');
 
// Turn off oEmbed auto discovery.
add_filter( 'embed_oembed_discover', '__return_false' );
 
//Don't filter oEmbed results.
remove_filter('oembed_dataparse', 'wp_filter_oembed_result', 10);
 
//Remove oEmbed discovery links.
remove_action('wp_head', 'wp_oembed_add_discovery_links');
 
//Remove oEmbed JavaScript from the front-end and back-end.
remove_action('wp_head', 'wp_oembed_add_host_js');

add_filter('json_enabled', '__return_false');
add_filter('json_jsonp_enabled', '__return_false');



/*-----------------------------------------------------------------------------------*/
/* Block Bad Queries start | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
if (!defined('ABSPATH')) die();
$request_uri_array  = apply_filters( 'request_uri_items',  array( 'eval\(', 'UNION\+SELECT', '\(null\)', 'base64_', '\/localhost', '\%2Flocalhost', '\/pingserver', '\/config\.', '\/wwwroot', '\/makefile', 'crossdomain\.', 'proc\/self\/environ', 'etc\/passwd', '\/https\:', '\/http\:', '\/ftp\:', '\/cgi\/', '\.cgi', '\.exe', '\.sql', '\.ini', '\.dll', '\.asp', '\.jsp', '\/\.bash', '\/\.git', '\/\.svn', '\/\.tar', ' ', '\<', '\>', '\/\=', '\.\.\.', '\+\+\+', '\:\/\/', '\/&&', '\/Nt\.', '\;Nt\.', '\=Nt\.', '\,Nt\.', '\.exec\(', '\)\.html\(', '\{x\.html\(', '\(function\(' ) );
$query_string_array = apply_filters( 'query_string_items', array( '\.\.\/', '127\.0\.0\.1', 'localhost', 'loopback', '\%0A', '\%0D', '\%00', '\%2e\%2e', 'input_file', 'execute', 'mosconfig', 'path\=\.', 'mod\=\.' ) );
$user_agent_array   = apply_filters( 'user_agent_items',   array( 'binlar', 'casper', 'cmswor', 'diavol', 'dotbot', 'finder', 'flicky', 'nutch', 'planet', 'purebot', 'pycurl', 'skygrid', 'sucker', 'turnit', 'vikspi', 'zmeu' ) );

$request_uri_string = false;
$query_string_string = false;
$user_agent_string = false;

if (isset($_SERVER['REQUEST_URI']) && !empty($_SERVER['REQUEST_URI'])) $request_uri_string = $_SERVER['REQUEST_URI'];
if (isset($_SERVER['QUERY_STRING']) && !empty($_SERVER['QUERY_STRING'])) $query_string_string = $_SERVER['QUERY_STRING'];
if (isset($_SERVER['HTTP_USER_AGENT']) && !empty($_SERVER['HTTP_USER_AGENT'])) $user_agent_string = $_SERVER['HTTP_USER_AGENT'];

if ($request_uri_string || $query_string_string || $user_agent_string) {
	if (
		// strlen( $_SERVER['REQUEST_URI'] ) > 255 || // optional
		preg_match( '/' . implode( '|', $request_uri_array )  . '/i', $request_uri_string ) ||
		preg_match( '/' . implode( '|', $query_string_array ) . '/i', $query_string_string ) ||
		preg_match( '/' . implode( '|', $user_agent_array )   . '/i', $user_agent_string )
	) {
		header('HTTP/1.1 403 Forbidden');
		header('Status: 403 Forbidden');
		header('Connection: Close');
		exit;
	}
}


/* Block Bad Queries End */
/*-----------------------------------------------------------------------------------*/
/* Remove Unnecessary Code From Your WordPress Blog Header | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
remove_action( 'wp_head', 'wlwmanifest_link');
remove_action ('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'feed_links_extra', 3); // Remove category feeds
remove_action('wp_head', 'feed_links', 2); // Remove Post and Comment Feeds
remove_action('wp_head', 'wp_resource_hints', 2 );
remove_action('wp_head', 'rest_output_link_wp_head'); // Remove REST API //api.w.org
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('template_redirect', 'rest_output_link_header', 11, 0);


 /*-----------------------------------------------------------------------------------*/
 /* Disable the emoji's | InCreativeWeb
 /*-----------------------------------------------------------------------------------*/
function disable_emojis() {
 remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
 remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
 remove_action( 'wp_print_styles', 'print_emoji_styles' );
 remove_action( 'admin_print_styles', 'print_emoji_styles' );
 remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
 remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
 remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
 add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
 add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}
add_action( 'init', 'disable_emojis' );

/**
 * Filter function used to remove the tinymce emoji plugin.
 *
 * @param array $plugins
 * @return array Difference betwen the two arrays
 */
function disable_emojis_tinymce( $plugins ) {
 if ( is_array( $plugins ) ) {
 return array_diff( $plugins, array( 'wpemoji' ) );
 } else {
 return array();
 }
}

/**
 * Remove emoji CDN hostname from DNS prefetching hints.
 *
 * @param array $urls URLs to print for resource hints.
 * @param string $relation_type The relation type the URLs are printed for.
 * @return array Difference betwen the two arrays.
 */
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
 if ( 'dns-prefetch' == $relation_type ) {
 /** This filter is documented in wp-includes/formatting.php */
 $emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

$urls = array_diff( $urls, array( $emoji_svg_url ) );
 }

return $urls;
}

/*-----------------------------------------------------------------------------------*/
/*   Remove query strings from static resources  |   InCreativeWeb @ 23 Feb 2017
Plugin URI: http://www.yourwpexpert.com/remove-query-strings-from-static-resources-wordpress-plugin/
/*-----------------------------------------------------------------------------------*/
function _remove_query_strings_1( $src ){
	$rqs = explode( '?ver', $src );
        return $rqs[0];
}
if ( is_admin() ) {
// Remove query strings from static resources disabled in admin
} else {
add_filter( 'script_loader_src', '_remove_query_strings_1', 15, 1 );
add_filter( 'style_loader_src', '_remove_query_strings_1', 15, 1 );
}

function _remove_query_strings_2( $src ){
	$rqs = explode( '&ver', $src );
        return $rqs[0];
}
if ( is_admin() ) {
// Remove query strings from static resources disabled in admin
} else {
add_filter( 'script_loader_src', '_remove_query_strings_2', 15, 1 );
add_filter( 'style_loader_src', '_remove_query_strings_2', 15, 1 );
}

// remove body SVG code
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );

//REMOVE GUTENBERG BLOCK LIBRARY CSS FROM LOADING ON FRONTEND
function remove_wp_block_library_css(){
  wp_dequeue_style( 'wp-block-library' );
  wp_dequeue_style( 'wp-block-library-theme' );
  wp_dequeue_style( 'wc-block-style' ); // REMOVE WOOCOMMERCE BLOCK CSS
  wp_dequeue_style( 'global-styles' ); // REMOVE THEME.JSON
  }
  add_action( 'wp_enqueue_scripts', 'remove_wp_block_library_css', 100 );

/*-----------------------------------------------------------------------------------*/
/* authentication | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
/*$username = 'demo';
$password = 'icl1@3';

if(!isset($_SERVER['PHP_AUTH_USER']) || ($_SERVER['PHP_AUTH_USER'] != $username) || ($_SERVER['PHP_AUTH_PW'] != $password))
{
	header('WWW-Authenticate: Basic realm="Authentication Required"');
	header('HTTP/1.0 401 Unauthorized');
	echo '<font color=red>Oppss!! Authentication was failed</font><br />Please try again or contact site administrator';
	exit();
}*/
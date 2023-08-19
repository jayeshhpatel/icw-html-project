<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly

/*-----------------------------------------------------------------------------------*/
/* icw_register_sidebar  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
function icw_widgets_init() {
  
    register_sidebar( array(
      'name' => esc_html__( 'Sidebar', 'ICWTHEME' ),
      'id' => 'sidebar-1',
      'description' => esc_html__( 'Add widgets here.', 'ICWTHEME' ),
      'before_widget' => '<div id="%1$s" class="widget %2$s">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="widget-title">',
      'after_title' => '</h3>',
    ) );
  
    register_sidebar( array(
      'name' => esc_html__( 'Footer Top', 'ICWTHEME' ),
      'id' => 'footer-widget-1',
      'before_widget' => '<div class="col-md-4 col-lg-5 menu-grid-2 footer-widget">',
      'after_widget' => '</div>',
      'before_title' => '<h3 class="widget-title">',
      'after_title' => '</h3>',
    ));
    // register_sidebar( array(
    //   'name' => esc_html__( 'Footer Center', 'ICWTHEME' ),
    //   'id' => 'footer-widget-2',
    //   'before_widget' => '<div class="col-md-4 col-lg-4 left-border menu-grid-2 footer-widget">',
    //   'after_widget' => '</div>',
    //   'before_title' => '<h3 class="widget-title">',
    //   'after_title' => '</h3>',
    // ));
    // register_sidebar( array(
    //   'name' => esc_html__( 'Footer Right', 'ICWTHEME' ),
    //   'id' => 'footer-widget-3',
    //   'before_widget' => '<div class="col-md-4 col-lg-3 left-border footer-widget">',
    //   'after_widget' => '</div>',
    //   'before_title' => '<h3 class="widget-title">',
    //   'after_title' => '</h3>',
    // ));
  }
add_action( 'widgets_init', 'icw_widgets_init' );


/*-------------------------------------------*
* icwTheme Setup | InCreativeWeb
*------------------------------------------*/
if(!function_exists('icwtheme_setup')):
	function icwtheme_setup() {
		// load textdomain
    load_theme_textdomain( 'ICWTHEME', get_template_directory() . '/languages' );

    // Add Wordpress Feature Support
    add_theme_support( 'menus' );
    add_theme_support( 'post-thumbnails' );
    // add_theme_support( 'html5' );
    add_theme_support( 'automatic-feed-links' );
    add_theme_support( 'title-tag' );

    add_theme_support('align-wide');

		// add_image_size( 'header-slide', 1500, 500, true );
    add_image_size( 'icw-post-thumb-small', 370, 198, true );
    add_image_size( 'icw-post-thumb', 930, 500, true );

      
		 // This theme uses wp_nav_menu() in one location.
    register_nav_menus( array(
        'primary'         => esc_html__( 'Main Menu',  'ICWTHEME' ),
        'footer'          => esc_html__( 'Footer Menu', 'ICWTHEME' ),
        'footer-inline'   => esc_html__( 'Footer Bottom Menu', 'ICWTHEME' ),
    ));

		// Apply filter do_shortcode
    add_filter('widget_text', 'do_shortcode');
		add_filter('widget_content', 'do_shortcode');

		add_editor_style('');
		// if ( ! isset( $content_width ) )
		//   $content_width = 900;
	  }
	add_action('after_setup_theme','icwtheme_setup');
endif;


function icw_content_width() {
// This variable is intended to be overruled from themes.
// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
$GLOBALS[ 'content_width' ] = apply_filters( 'icw_content_width', 1040 );
}
add_action( 'after_setup_theme', 'icw_content_width', 0 );


function icw_favicon() { ?>
<link rel="shortcut icon" href="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/favicon/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/favicon/favicon-16x16.png"><link rel="manifest" href="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/favicon/site.webmanifest"><link rel="mask-icon" href="<?php bloginfo( 'stylesheet_directory' ); ?>/assets/images/favicon/safari-pinned-tab.svg" color="#5bbad5"><meta name="apple-mobile-web-app-title" content="Immigration Chambers"><meta name="application-name" content="Immigration Chambers"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#308FCE"><?php }
add_action( 'wp_head', 'icw_favicon' );


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

if ( !function_exists( 'icw_get_archive_description' ) ) {
  function icw_get_archive_description() {
    $description = '';

    if ( is_home() || is_front_page() ) {
      $description = ( icw_get_option( 'archive_blog_description' ) ) ? esc_html( icw_get_option( 'archive_blog_description' ) ) : '';
    } elseif ( is_category() || is_tag() || is_author() || is_post_type_archive() || is_archive() ) {
      $description = get_the_archive_description();
    }

    return $description;
  }
}


if ( !function_exists( 'icw_render_page_header' ) ) {

  function icw_render_page_header( $type ) {

    $show_header = true;
    $header_style = '';
    $header_tagline = '';
    $header_title = '';
    $header_description = '';

    switch ( $type ) {
      case 'page':
        $show_header = false;
        if ( icw_get_field( 'hide_header' ) !== true ) {
          $show_header = true;

          $header_tagline = icw_get_field( 'header_tagline' );
          if (!empty($header_tagline)) {
            $header_tagline = $header_tagline;
          }
          $custom_title = icw_get_field( 'custom_title' );
          if (!empty($custom_title)) {
            $header_title = $custom_title;
          } else {
            $header_title = get_the_title();
          }
          
          $header_style_data = icw_get_field( 'header_style' );
          if(!empty($header_style_data)){
            $header_bg_color = $header_style_data['header_color'] ? $header_style_data['header_color'] : '';
            $header_bg_image = $header_style_data['header_bg'] ? $header_style_data['header_bg'] : '';
            
            if(!empty($header_bg_image)){
              $header_style .= 'background-image: url(' . esc_url( $header_bg_image ) . ');';
            } 
            if(!empty($header_bg_color)){
              $header_style .= 'background-color: ' . $header_bg_color . ';';
            }
          }
          
          $header_description = icw_get_field( 'header_sort_info' );
          $enable_social_icons = ( icw_get_field( 'disable_social_icons' ) ) ? false : true;
        }

        break;
      case 'archive':
        $header_top = "Blog";
        break;
      case 'single':
        $header_top = "Blog";
        break;
      case 'frontpage':
        $show_header = false;
        $posts_page_id = get_option( 'page_for_posts');
        
        if ( icw_get_field( 'hide_header', $posts_page_id ) !== true ) {
          $show_header = true;

          $header_tagline = icw_get_field( 'header_tagline', $posts_page_id );
          if (!empty($header_tagline)) {
            $header_tagline = $header_tagline;
          }
          $custom_title = icw_get_field( 'custom_title', $posts_page_id );
          if (!empty($custom_title)) {
            $header_title = $custom_title;
          } else {
            $header_title = get_the_title();
          }
          
          $header_style_data = icw_get_field( 'header_style', $posts_page_id );
          if(!empty($header_style_data)){
            $header_bg_color = $header_style_data['header_color'] ? $header_style_data['header_color'] : '';
            $header_bg_image = $header_style_data['header_bg'] ? $header_style_data['header_bg'] : '';
            
            if(!empty($header_bg_image)){
              $header_style .= 'background-image: url(' . esc_url( $header_bg_image ) . ');';
            } 
            if(!empty($header_bg_color)){
              $header_style .= 'background-color: ' . $header_bg_color . ';';
            }
          }
          
          $header_description = icw_get_field( 'header_sort_info', $posts_page_id );
          $enable_social_icons = ( icw_get_field( 'disable_social_icons', $posts_page_id ) ) ? false : true;
        } else {
          $header_description = icw_get_archive_description();
          $header_title = icw_get_page_title();
        }
        break;

      case '404':
        $header_title = icw_get_page_title();
        break;

      case 'search':

        break;
    }
    if ( $show_header ) { ?>
    <header class="page-header" <?php if ( $header_style !== '' ) { echo 'style="' . esc_attr( $header_style ) . '"'; } ?>>
      <div class="container">
        <?php if( $header_tagline ) { ?>
          <p><?php echo $header_tagline; ?></p>
        <?php } ?>
        <h1><?php echo $header_title; ?></h1>
        <?php if( $header_description ) { ?>
        <div class="sort-info"><?php echo $header_description; ?></div>
        <?php } ?>
      </div>
  </div>
    </header>
    <!-- end page-header -->
    <?php
    }
    
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

if ( !function_exists( 'icw_get_post_thumbnail_top_url' ) ) {
  /**
   * Get Post Thumbnail URL
   */
  function icw_get_post_thumbnail_top_url() {
    if ( get_the_post_thumbnail_url() ) {
      return get_the_post_thumbnail_url( get_the_ID(), 'icw-post-thumb' );
    } else {
      return get_template_directory_uri() . '/images/no-post.jpg';
    }

    return false;
  }
}
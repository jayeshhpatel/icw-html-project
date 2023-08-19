<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly

if ( !function_exists( 'icw_enqueue_styles_and_scripts' ) ) {
  function icw_enqueue_styles_and_scripts() {

    wp_enqueue_style( 'icw-google-fonts', '//fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap', array(), null );
    // wp_enqueue_style( 'icw-main', ICWCSS . 'main.css?v1' );
    wp_enqueue_style( 'icw-main', ICWCSS . 'main.css?v1' );

    wp_enqueue_script('icw-bootstrap-bundle', ICWJS.'bootstrap.bundle.min.js',array(),false,true);
    wp_enqueue_script( 'icw-lozad', ICWJS.'lozad.min.js', array('jquery'), false, true );
    wp_enqueue_script('icw-slick', ICWJS.'slick.min.js',array('jquery'),false,true);
    wp_enqueue_script( 'icw-main', ICWJS . 'main.min.js?v=2', array( 'jquery' ), false, true );
  }
  add_action( 'wp_enqueue_scripts', 'icw_enqueue_styles_and_scripts', 10 );
}

function icw_enqueue_admin() {
  // wp_enqueue_script( 'icw-lozad', ICWJS.'lozad.min.js', array('jquery'), false, true );
  wp_enqueue_script('icw-admin-slick', ICWJS.'slick.min.js',array('jquery'),false,true);
  wp_enqueue_script( 'icw-admin-blocks-js', ICWJS . 'admin-main.js',array('jquery'),false,true);
}
// add_action( 'admin_enqueue_scripts', 'icw_enqueue_admin' );

function icw_enqueue_block_admin() {
  wp_enqueue_style( 'icw-site-main', ICWCSS . 'main.css' );
  wp_enqueue_style( 'icw-admin-blocks', ICWCSS . 'admin-blocks.css' );

  // wp_enqueue_script( 'icw-lozad', ICWJS.'lozad.min.js', array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),'');
  wp_enqueue_script('icw-admin-slick', ICWJS.'slick.min.js', array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),'');
  // wp_enqueue_script( 'icw-admin-blocks-js', ICWJS . 'admin-main.js', array( 'jquery', 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),'');
}
add_action( 'enqueue_block_editor_assets', 'icw_enqueue_block_admin' );
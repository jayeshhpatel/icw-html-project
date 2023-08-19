<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly
/*-----------------------------------------------------------------------------------*/
/* Post type:  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
// Our Team
add_action( 'init', 'icw_team_init' );
function icw_team_init() {
	$labels = array(
		'name'                  => _x( 'Our Team', 'Post type general name', 'ICWTHEME' ),
		'singular_name'         => _x( 'Team', 'Post type singular name', 'ICWTHEME' ),
		'menu_name'             => _x( 'Our Team', 'Admin Menu text', 'ICWTHEME' ),
		'name_admin_bar'        => _x( 'Team', 'Add New on Toolbar', 'ICWTHEME' ),
		'add_new'               => __( 'Add New', 'ICWTHEME' ),
		'add_new_item'          => __( 'Add New', 'ICWTHEME' ),
		'new_item'              => __( 'New Team', 'ICWTHEME' ),
		'edit_item'             => __( 'Edit Team', 'ICWTHEME' ),
		'view_item'             => __( 'View Team', 'ICWTHEME' ),
		'all_items'             => __( 'All Our Team', 'ICWTHEME' ),
		'search_items'          => __( 'Search Our Team', 'ICWTHEME' ),
		'parent_item_colon'     => __( 'Parent Our Team:', 'ICWTHEME' ),
		'not_found'             => __( 'No Our Team found.', 'ICWTHEME' ),
		'not_found_in_trash'    => __( 'No Our Team found in Trash.', 'ICWTHEME' ),
	);     
	$args = array(
		'labels'             => $labels,
		'description'        => 'Our Team custom post type.',
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'rewrite'            => array( 'slug' => 'team' ),
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 20,
		'menu_icon'          => 'dashicons-cover-image',
		'supports'           => array( 'title', 'editor', 'page-attributes' ),
		'show_in_rest'       => true
	);

	register_post_type( 'team', $args );
}




/*-----------------------------------------------------------------------------------*/
/* Post type: testimonials  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
add_action('init', 'icw_init_testimonial');
function icw_init_testimonial(){
    $labels = array(
        'name'                  => __( 'Testimonials', 			'ICWTHEME' ),
        'singular_name'         => __( 'Testimonials',                'ICWTHEME' ),
        'menu_name'             => __( 'Testimonials', 			'ICWTHEME' ),
        'all_items'             => __( 'All Testimonials',			'ICWTHEME' ),
        'add_new'               => __( 'Add New',               'ICWTHEME' ),
        'add_new_item'          => __( 'Add New Testimonial',        'ICWTHEME' ),
        'edit_item'             => __( 'Edit Testimonial',           'ICWTHEME' ),
        'new_item'              => __( 'New Testimonial',            'ICWTHEME' ),
        'view_item'             => __( 'View Testimonial',           'ICWTHEME' ),
        'search_items'          => __( 'Search Testimonial',  	    'ICWTHEME' ),
        'not_found'             => __( 'No item found',         'ICWTHEME' ),
        'not_found_in_trash'    => __( 'No item found in Trash','ICWTHEME' )
        );

    $args = array(
        'labels'                => $labels,
        'hierarchical'        => false,
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
        'can_export'          => true,
        'menu_icon'          => 'dashicons-editor-quote',
        'rewrite'               => false,
        'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => false,
        'capability_type'       => 'page',
        'supports'              => array('title', 'editor','page-attributes')
        );
    register_post_type('testimonial', $args);
    flush_rewrite_rules();
}
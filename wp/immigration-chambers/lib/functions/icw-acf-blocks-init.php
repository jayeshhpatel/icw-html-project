<?php 
if(!defined('ABSPATH')) exit; // Exit if accessed directly

add_action( 'init', 'register_acf_blocks' );
function register_acf_blocks() {
    // register_block_type( __DIR__ . '/content_icon_gridlist' ); // 'acf/contenticongridlist'
    // register_block_type( __DIR__ . '/content_with_img' ); // 'acf/contentwithimg'
    // register_block_type( __DIR__ . '/hero_header' ); // 'acf/heroheader'

    $dirs = array_filter(glob(ICWBLOCkS .'*'), 'is_dir');
    // pr(ICWBLOCkS);
    if($dirs){
        foreach($dirs as $block){
            if($block){
                register_block_type( $block );
            }
        }
    }
}

add_filter( 'allowed_block_types_all', 'icw_allowed_block_types', 25, 2 );
function icw_allowed_block_types( $allowed_blocks, $editor_context ) {

	$allowed_page_blocks = array(
        'acf/cardinfosliderorlist',
        'acf/contenticongridlist',
		'acf/contentimg',
        'acf/faq',
        'acf/herocontact',
        'acf/heroheader',
        'acf/heroteam',
        'acf/partners',
        'acf/teamslider',
        'acf/testimonials',
        'acf/gridcards',
        'acf/text',
        'acf/heading',
        'acf/customhtml',
        'acf/team',
        'acf/infogrid',
	);

    $allowed_post_blocks = array(
		'core/image',
		'core/gallery',
		'core/heading',
		'core/quote',
		'core/list',
        'core/paragraph',
        'acf/text',
        'acf/heading',
        'acf/customhtml',
	);
 
	if( 'page' === $editor_context->post->post_type ) {
		// $allowed_blocks[] = 'core/shortcode';
        $allowed_blocks = $allowed_page_blocks;
	}
    if( 'post' === $editor_context->post->post_type ) {
		$allowed_blocks = $allowed_post_blocks;
	}
	return $allowed_blocks;
}
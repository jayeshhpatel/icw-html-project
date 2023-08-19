<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly

// Add custom ACF option pages
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> '<strong style="color:#08C50F">THEME</strong> <strong style="color:#f7931e">OPTIONS</strong>',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'manage_options',
		'redirect'		=> false
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Header Settings',
		'menu_title'	=> '- Header',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'manage_options',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Footer Settings',
		'menu_title'	=> '- Footer',
		'parent_slug'	=> 'theme-general-settings',
		'capability'	=> 'manage_options',
	));
	
}


function cpt_services_relationship_filter( $options ) {
	$options['post_status'] = array( 'publish' );
	return $options;
}
add_filter( 'acf/fields/relationship/query/name=select_custom_team', 'cpt_services_relationship_filter' );


if ( !function_exists( 'icw_get_option' ) ) {
	function icw_get_option( $slug ) {
	  if ( function_exists( 'get_field' ) ) {
		return get_field( $slug, 'option' );
	  }
	  return false;
	}
}
  
if ( !function_exists( 'icw_get_field' ) ) {
	function icw_get_field( $slug, $post_id = 0 ) {
		if ( function_exists( 'get_field' ) ) {
		return get_field( $slug, $post_id );
		}
		return false;
	}
}


/*-----------------------------------------------------------------------------------*/
/* ACF - Custom js script | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
function icw_custom_js_script() {
	$custom_js = get_field('custom_js_script');
	if($custom_js){
		echo html_entity_decode($custom_js);
	}
}
// add_action( 'wp_footer', 'icw_custom_js_script',9999999);


/*************************************************
** BTN FIELD
** includes a 'not empty' check & Applies filters
*************************************************/
function acfield_btn_group($data, $exclass="") {
	// pr($data);
	$btnhtml = '';
    if(!empty($data['btn']['title'])) {
			
		$link_url = $data['btn']['url'];
		$link_title = $data['btn']['title'];
		$link_target = $data['btn']['target'] ? $data['btn']['target'] : '_self';
			
		$btn_style = $data['btn_style'];
		$btn_class = $data['btn_class'];
		$btnclass = '';
		if(!empty($btn_style) && $btn_style != 'btn-link-arrow'){
			$btnclass .= 'btn '.esc_attr($btn_style);
		}
		if (!empty($btn_style) && $btn_style == 'btn-link-arrow'){
			$btnclass .= 'btn-link with-icon '.$btn_style;
		}
		if(!empty($btn_class)){
			$btnclass .= ' '.$btn_class;
		}
		if(!empty($exclass)){
			$btnclass .= ' '.esc_attr($exclass);
		}
		$btnhtml .= '<a href="'.esc_url($link_url).'" class="'.$btnclass.'" target="'.$link_target.'">'.$link_title.'</a>';
    }
	return $btnhtml;
}

function acfield_btn($data, $exclass="", $modal = FALSE) {
	$btnhtml = '';
    if(!empty($data)) {

		$link_url = $data['url'];
		$link_title = $data['title'];
		$link_target = $data['target'] ? $data['target'] : '_self';

		$btnclass = '';
		if(!empty($exclass)){
			$btnclass .= ' '.esc_attr($exclass);
		}

		$btnhtml .= '<a href="'.esc_url($link_url).'" class="'.$btnclass.'" target="'.$link_target.'">'.$link_title.'</a>';
    }
	return $btnhtml;
}

function acfield_btns($data, $modal = FALSE) {
	// pr($data);
	$btnhtml = '';
    if(!empty($data)) {
		foreach( $data as $cta ) {
			//pr($cta);
			$btn_text = $cta['cta_group']['btn_text'];
			$btn_icon = $cta['cta_group']['btn_icon'];
			$btnicon = '';
			
			if(!empty($btn_icon)){
				$btnicon = '<img class="btn-icon" src="'.$btn_icon.'" alt="'.esc_attr($btn_text).'"/>';
			}
			$btn_type = $cta['cta_group']['btn_type'];
			$btn_target = $cta['cta_group']['btn_target'];
			$btn_link_type = $cta['cta_group']['btn_link_type'];
			$btn_link = '';
			if($btn_link_type == '_internal') {
				$btn_link = $cta['cta_group']['btn_internal_link'];
			} else {
				$btn_link = $cta['cta_group']['btn_external_link'];
			}
			$btn_class = $cta['cta_group']['btn_class'];
			$btnclass = '';
			if(!empty($btn_class)){
				$btnclass = $btn_class;
			}

			$btnhtml .= '<a href="'.esc_url($btn_link).'" class="btn '.$btn_type.' '.$btnclass.'" target="'.$btn_target.'">'.$btnicon.do_shortcode($btn_text).'</a>';
		}
    }
	return $btnhtml;
}


function icw_add_acf_body_class($class) {
    $queried_object_id = get_queried_object_id();
    $value = get_field('body_class', $queried_object_id);
    $class[] = $value;
    return $class;
}
add_filter('body_class', 'icw_add_acf_body_class');
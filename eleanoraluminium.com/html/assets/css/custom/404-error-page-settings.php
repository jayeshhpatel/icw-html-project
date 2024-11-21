<?php

// ---------------------------- //
// ------ 404 Error Page ------ //
// ---------------------------- //

$error_text_color = !empty(industrium_get_theme_mod('error_text_color')) ? industrium_get_theme_mod('error_text_color') : industrium_get_theme_mod('contrast_default_text_color');
$error_title_color = !empty(industrium_get_theme_mod('error_title_color')) ? industrium_get_theme_mod('error_title_color') : industrium_get_theme_mod('contrast_dark_text_color');

if(!empty($error_title_color)) {
    $industrium_custom_css .= '
        .error-404-header .logo-link .logo-site-name,
        .error-404-container .error-404-title {
            color: ' . esc_attr($error_title_color) . ';
        }
    ';
}
if(!empty($error_text_color)) {
    $industrium_custom_css .= '
        .error-404-container .error-404-info-text {
            color: ' . esc_attr($error_text_color) . ';
        }
    ';
}

$error_background_color     = industrium_get_prepared_option('error_background_color', 'contrast_background_color', 'error_background_customize');
$error_background_position  = industrium_get_prepared_option('error_background_position', '', 'error_background_customize');
$error_background_repeat    = industrium_get_prepared_option('error_background_repeat', '', 'error_background_customize');
$error_background_size      = industrium_get_prepared_option('error_background_size', '', 'error_background_customize');
$error_background_image     = industrium_get_prepared_img_url('error_background_image');
if ( !empty($error_background_color) ) {
    $industrium_custom_css .= '
        .error-404-container {
            background-color: ' . esc_attr($error_background_color) . ';
        }
    ';
}
if ( !empty($error_background_position) || !empty($error_background_repeat) || !empty($error_background_size) || !empty($error_background_image) ) {
    $industrium_custom_css .= '
        @media only screen and (min-width: 768px) {
            .error-404-container {' .
                ( !empty($error_background_position) ? 'background-position: ' . esc_attr($error_background_position) . ';' : '' ) .
                ( !empty($error_background_repeat) ? 'background-repeat: ' . esc_attr($error_background_repeat) . ';' : '' ) .
                ( !empty($error_background_size) ? '-webkit-background-size: ' . esc_attr($error_background_size) . ';' : '' ) .
                ( !empty($error_background_size) ? 'background-size: ' . esc_attr($error_background_size) . ';' : '' ) .
                ( !empty($error_background_image) ? 'background-image: url("' . esc_attr($error_background_image) . '");' : '' ) .
            '}
        }
    ';
}
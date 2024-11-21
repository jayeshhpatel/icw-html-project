<?php

// ----------------------------- //
// ------ Footer Settings ------ //
// ----------------------------- //
$footer_background_position = industrium_get_prepared_option('footer_background_position', '', 'footer_customize');
$footer_background_repeat   = industrium_get_prepared_option('footer_background_repeat', '', 'footer_customize');
$footer_background_size     = industrium_get_prepared_option('footer_background_size', '', 'footer_customize');
$footer_background_image    = industrium_get_prepared_img_url('footer_background_image', 'footer_customize');
if ( !empty($footer_background_position) || !empty($footer_background_repeat) || !empty($footer_background_size) ) {
    $industrium_custom_css .= '
        .footer .footer-bg {' .
            ( !empty($footer_background_position) ? 'background-position: ' . esc_attr($footer_background_position) . ';' : '' ) .
            ( !empty($footer_background_repeat) ? 'background-repeat: ' . esc_attr($footer_background_repeat) . ';' : '' ) .
            ( !empty($footer_background_size) ? '-webkit-background-size: ' . esc_attr($footer_background_size) . ';' : '' ) .
            ( !empty($footer_background_size) ? 'background-size: ' . esc_attr($footer_background_size) . ';' : '' ) .
        '}
    ';
}
if ( !empty($footer_background_image) ) {
    $industrium_custom_css .= '
        @media only screen and (min-width: 768px) {
            .footer .footer-bg {' .
                ( !empty($footer_background_image) ? 'background-image: url("' . esc_attr($footer_background_image) . '");' : '' ) .
            '}
        }
    ';
}
<?php

// ----------------------------- //
// ------ Header Settings ------ //
// ----------------------------- //

# Header Menu
$header_menu_font       = industrium_get_prepared_option('header_menu_font', 'main_font', 'header_menu_customize');
$header_menu_font_array = json_decode($header_menu_font, true);
if (
    !empty($header_menu_font_array['font_family']) ||
    !empty($header_menu_font_array['font_size']) ||
    !empty($header_menu_font_array['line_height']) ||
    !empty($header_menu_font_array['text_transform']) ||
    !empty($header_menu_font_array['letter_spacing']) ||
    !empty($header_menu_font_array['word_spacing']) ||
    !empty($header_menu_font_array['font_style']) ||
    !empty($header_menu_font_array['font_weight'])
) {
    $industrium_custom_css .= '
        .header .main-menu > li > a,
        .footer .footer-menu li a {' .
            industrium_print_font_styles( $header_menu_font, array('font_family', 'font_size', 'line_height', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
        '}
        .mobile-header-menu-container .main-menu > li > a,
        .slide-extra .extra-menu > li > a {' .
            industrium_print_font_styles( $header_menu_font, array('font_family', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
        '}
    ';
}

# Header Sub Menu
$header_sub_menu_font       = industrium_get_prepared_option('header_sub_menu_font', 'main_font', 'header_menu_customize');
$header_sub_menu_font_array = json_decode($header_sub_menu_font, true);
if (
    !empty($header_sub_menu_font_array['font_family']) ||
    !empty($header_sub_menu_font_array['font_size']) ||
    !empty($header_sub_menu_font_array['line_height']) ||
    !empty($header_sub_menu_font_array['text_transform']) ||
    !empty($header_sub_menu_font_array['letter_spacing']) ||
    !empty($header_sub_menu_font_array['word_spacing']) ||
    !empty($header_sub_menu_font_array['font_style']) ||
    !empty($header_sub_menu_font_array['font_weight'])
) {
    $industrium_custom_css .= '
        .header .main-menu > li ul.sub-menu > li > a {' .
            industrium_print_font_styles( $header_sub_menu_font, array('font_family', 'font_size', 'line_height', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
        '}
        .mobile-header-menu-container .main-menu > li ul.sub-menu > li > a,
        .slide-extra .extra-menu > li ul.sub-menu > li > a {' .
            industrium_print_font_styles( $header_sub_menu_font, array('font_family', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
        '}
    ';
}

# Mobile Header Breakpoint
$mobile_header_breakpoint = industrium_get_prepared_option('mobile_header_breakpoint');
if (
    !empty($mobile_header_breakpoint)
) {
    $industrium_custom_css .= '
        @media only screen and (min-width: ' . esc_attr($mobile_header_breakpoint) . 'px) {
            .top-bar {
                display: block;
            }
            .header {
                display: block !important;
            }
            .mobile-header {
                display: none !important;
            }
        }
    ';
}
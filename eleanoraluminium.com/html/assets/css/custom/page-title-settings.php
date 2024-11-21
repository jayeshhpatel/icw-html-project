<?php

// --------------------------------- //
// ------ Page Title Settings ------ //
// --------------------------------- //

# General
$page_title_height              = industrium_get_prepared_option('page_title_height', '', 'page_title_customize');
$page_title_background_position = industrium_get_prepared_option('page_title_background_position', '', 'page_title_customize');
$page_title_background_repeat   = industrium_get_prepared_option('page_title_background_repeat', '', 'page_title_customize');
$page_title_background_size     = industrium_get_prepared_option('page_title_background_size', '', 'page_title_customize');

$hide_page_title_background_mobile = (bool)industrium_get_prepared_option('hide_page_title_background_mobile', '', 'page_title_customize');
$hide_page_title_background_tablet = (bool)industrium_get_prepared_option('hide_page_title_background_tablet', '', 'page_title_customize');

$page_title_background_image = industrium_get_prepared_img_url('page_title_background_image', 'page_title_customize');
if ( !empty($page_title_height) ) {
    $industrium_custom_css .= '
        @media only screen and (min-width: 992px) {
            .page-title-container,
            .edit-post-visual-editor__post-title-wrapper {' .
                ( !empty($page_title_height) ? 'min-height: ' . esc_attr($page_title_height) . 'px;' : '' ) .
            '}
        }
    ';
}
if ( !empty($page_title_background_position) || !empty($page_title_background_repeat) || !empty($page_title_background_size) ) {
    $industrium_custom_css .= '
        .page-title-container .page-title-bg,
        .edit-post-visual-editor__post-title-wrapper:before {' .
            ( !empty($page_title_background_position) ? 'background-position: ' . esc_attr($page_title_background_position) . ';' : '' ) .
            ( !empty($page_title_background_repeat) ? 'background-repeat: ' . esc_attr($page_title_background_repeat) . ';' : '' ) .
            ( !empty($page_title_background_size) ? '-webkit-background-size: ' . esc_attr($page_title_background_size) . ';' : '' ) .
            ( !empty($page_title_background_size) ? 'background-size: ' . esc_attr($page_title_background_size) . ';' : '' ) .
        '}
    ';
}
if ( !empty($page_title_background_image) ) {
    $industrium_custom_css .= '
        .page-title-container .page-title-bg,
        .edit-post-visual-editor__post-title-wrapper:before {' .
            ( !empty($page_title_background_image) ? 'background-image: url("' . esc_attr($page_title_background_image) . '");' : '' ) .
        '}';
    }
    if ( $hide_page_title_background_mobile ) {
        $industrium_custom_css .= '
            @media only screen and (max-width: 767px) {
                .page-title-container .page-title-bg,
                .edit-post-visual-editor__post-title-wrapper:before {
                    background-image: none;
                }
            }
        ';
    }
    if ( $hide_page_title_background_tablet ) {
        $industrium_custom_css .= '
            @media only screen and (min-width: 768px) and (max-width: 991px) {
                .page-title-container .page-title-bg,
                .edit-post-visual-editor__post-title-wrapper:before {
                    background-image: none;
                }
            }
        ';
    }

# Heading
$page_title_heading_font        = industrium_get_prepared_option('page_title_heading_font', '', 'page_title_heading_customize');
$page_title_heading_font_array  = json_decode($page_title_heading_font, true);
if (
    !empty($page_title_heading_font_array['font_family']) ||
    !empty($page_title_heading_font_array['text_transform']) ||
    !empty($page_title_heading_font_array['letter_spacing']) ||
    !empty($page_title_heading_font_array['word_spacing']) ||
    !empty($page_title_heading_font_array['font_style']) ||
    !empty($page_title_heading_font_array['font_weight'])
) {
    $industrium_custom_css .= '
        .page-title-container h1.page-title,
        .page-title-container .page-title-wrapper .page-title-box,
        .edit-post-visual-editor__post-title-wrapper .editor-post-title {' .
            industrium_print_font_styles( $page_title_heading_font, array('font_family', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
        '}
    ';
}
if (
    !empty($page_title_heading_font_array['font_size']) ||
    !empty($page_title_heading_font_array['line_height'])
) {
    if ( (int)$page_title_heading_font_array['font_size'] >= 50 ) {
        $industrium_custom_css .= '
            @media only screen and (min-width: 576px) {
                .body-container .page-title-container h1.page-title,
                .body-container .page-title-container .page-title-wrapper .page-title-box,
                .edit-post-visual-editor__post-title-wrapper .editor-post-title {
                    font-size: 45px;
                }
            }
            @media only screen and (min-width: 992px) {
                .body-container .page-title-container h1.page-title,
                .body-container .page-title-container .page-title-wrapper .page-title-box,
                .edit-post-visual-editor__post-title-wrapper .editor-post-title {' .
                    industrium_print_font_styles( $page_title_heading_font, array('font_size', 'line_height' ) ) .
                '}
            }
        ';
    } else {
        $industrium_custom_css .= '
            @media only screen and (min-width: 576px) {
                .body-container .page-title-container h1.page-title,
                .body-container .page-title-container .page-title-wrapper .page-title-box,
                .edit-post-visual-editor__post-title-wrapper .editor-post-title {' .
                    industrium_print_font_styles( $page_title_heading_font, array('font_size', 'line_height' ) ) .
                '}
            }
        ';
    }
}

# Additional
$page_title_additional_text_color = industrium_get_prepared_option('page_title_additional_text_color', '', 'page_title_additional_customize');
if ( !empty($page_title_additional_text_color) ) {
    $industrium_custom_css .= '
        .page-title-container .page-title-additional {
            color: ' . esc_attr($page_title_additional_text_color) . ';
        }
    ';
}
<?php

// -------------------------------- //
// ------ Page Title Colors ------- //
// -------------------------------- //
$page_title_default_text_color = industrium_get_prepared_option('page_title_default_text_color', 'contrast_default_text_color', 'page_title_customize');
if ( !empty($page_title_default_text_color) ) {
    $industrium_custom_css .= '
        .page-title-container .page-title-additional {
            color: ' . esc_attr($page_title_default_text_color) . ';
        }
    ';
}

$page_title_dark_text_color = industrium_get_prepared_option('page_title_dark_text_color', 'contrast_dark_text_color', 'page_title_customize');
if ( !empty($page_title_dark_text_color) ) {
    $industrium_custom_css .= '
        .page-title-wrapper,
        .body-container .page-title-wrapper a,
        .edit-post-visual-editor__post-title-wrapper,
        .edit-post-visual-editor__post-title-wrapper a {
            color: ' . esc_attr($page_title_dark_text_color) . ';
        }
        .breadcrumbs .delimiter,
        .page-title-container.page-title-decorated:before {
            background-color: ' . esc_attr($page_title_dark_text_color) . ';
        }
    ';
}

$page_title_light_text_color = industrium_get_prepared_option('page_title_light_text_color', 'contrast_light_text_color', 'page_title_customize');
if ( !empty($page_title_light_text_color) ) {
    $industrium_custom_css .= '';
}

$page_title_accent_text_color = industrium_get_prepared_option('page_title_accent_text_color', 'contrast_accent_text_color', 'page_title_customize');
if ( !empty($top_bar_accent_text_color) ) {
    $industrium_custom_css .= '
        .body-container .page-title-wrapper a:hover,
        .edit-post-visual-editor__post-title-wrapper a:hover {
            color: ' . esc_attr($page_title_accent_text_color) . ';
        }
    ';
}

$page_title_border_color = industrium_get_prepared_option('page_title_border_color', 'contrast_border_color', 'page_title_customize');
if ( !empty($page_title_border_color) ) {
    $industrium_custom_css .= '';
}

$page_title_border_hover_color = industrium_get_prepared_option('page_title_border_hover_color', 'contrast_border_hover_color', 'page_title_customize');
if ( !empty($page_title_border_hover_color) ) {
    $industrium_custom_css .= '';
}

$page_title_background_color = industrium_get_prepared_option('page_title_background_color', 'contrast_background_color', 'page_title_customize');
if ( !empty($page_title_background_color) ) {
    $industrium_custom_css .= '
        .page-title-container,
        .page-title-container.page-title-decorated:after,
        .edit-post-visual-editor__post-title-wrapper {
            background-color: ' . esc_attr($page_title_background_color) . ';
        }
    ';
}

$page_title_background_alter_color = industrium_get_prepared_option('page_title_background_alter_color', 'contrast_background_alter_color', 'page_title_customize');
if ( !empty($page_title_background_alter_color) ) {
    $industrium_custom_css .= '';
}

$page_title_button_background_color = industrium_get_prepared_option('page_title_button_background_color', 'contrast_button_background_color', 'page_title_customize');
if ( !empty($page_title_button_background_color) ) {
    $industrium_custom_css .= '';
}

$page_title_overlay_color = industrium_get_prepared_option('page_title_overlay_color', '', 'page_title_overlay_status');
if ( !empty($page_title_overlay_color) ) {
    $industrium_custom_css .= '
        .page-title-bg,
        .edit-post-visual-editor__post-title-wrapper:before {
            background-color: ' . esc_attr($page_title_overlay_color) . ';
        }
    ';
}
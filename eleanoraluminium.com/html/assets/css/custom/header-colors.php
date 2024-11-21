<?php

// ---------------------------- //
// ------ Header Colors ------- //
// ---------------------------- //
$header_default_text_color = industrium_get_prepared_option('header_default_text_color', 'standard_default_text_color', 'header_customize');
if ( !empty($header_default_text_color) ) {
    $industrium_custom_css .= '
        .header,
        .mobile-header,
        .callback .callback-title {
            color: ' . esc_attr($header_default_text_color) . ';
        }
    ';
}

$header_dark_text_color = industrium_get_prepared_option('header_dark_text_color', 'standard_dark_text_color', 'header_customize');
if ( !empty($header_dark_text_color) ) {
    $industrium_custom_css .= '
        .header a,
        .header .main-menu > li > a,
        .header .logo-link .logo-site-name,
        .header .header-icon,
        .mobile-header a,
        .mobile-header .logo-link .logo-site-name,
        .mobile-header .header-icon,
        .mobile-header-menu-container a,
        .mobile-header-menu-container .logo-link .logo-site-name,
        .mobile-header-menu-container .header-icon,
        .mini-cart .mini-cart-trigger,
        .mini-cart .mini-cart-trigger:hover,
        .mobile-header-menu-container,
        .header-type-2 .dropdown-trigger .dropdown-trigger-item:before,
        .header-type-3 .dropdown-trigger .dropdown-trigger-item:before,
        .callback .callback-text,
        .site-search .site-search-close:hover
        .mobile-header-menu-container .main-menu > li .sub-menu-trigger,
        .mobile-header-menu-container .header-mobile-contacts .contact-item.contact-item-email a:hover {
            color: ' . esc_attr($header_dark_text_color) . ';
        }
        .mobile-header .menu-trigger .hamburger span,
        .header .main-menu:not(.menu-checks) > li.menu-item-has-children > a:after {
            background-color: ' . esc_attr($header_dark_text_color) . ';
        }
        .header-callback-container {
            border-color: ' . esc_attr($header_dark_text_color) . ';
        }
    ';
}

$header_light_text_color = industrium_get_prepared_option('header_light_text_color', 'standard_light_text_color', 'header_customize');
if ( !empty($header_light_text_color) ) {
    $industrium_custom_css .= '
    	.mobile-header-menu-container .header-mobile-contacts .contact-item .contact-item-title {
    		color: ' . esc_attr($header_light_text_color) . ';
    	}
        .site-search .search-form .search-form-field::-webkit-input-placeholder {
            color: rgba(' . esc_attr(industrium_hex2rgb($header_light_text_color)) . ', 0.75);
        }
        .site-search .search-form .search-form-field:-moz-placeholder {
            color: rgba(' . esc_attr(industrium_hex2rgb($header_light_text_color)) . ', 0.75);
        }
        .site-search .search-form .search-form-field::-moz-placeholder {
            color: rgba(' . esc_attr(industrium_hex2rgb($header_light_text_color)) . ', 0.75);
        }
        .site-search .search-form .search-form-field:-ms-input-placeholder {
            color: rgba(' . esc_attr(industrium_hex2rgb($header_light_text_color)) . ', 0.75);
        }
    ';
}

$header_accent_text_color = industrium_get_prepared_option('header_accent_text_color', 'standard_accent_text_color', 'header_customize');
if ( !empty($header_accent_text_color) ) {
    $industrium_custom_css .= '
        .mobile-header-menu-container .header-mobile-contacts .contact-item:before,
        .mobile-header-menu-container .main-menu > li.active > .sub-menu-trigger,
        .header .main-menu > li > a:hover,
        .header .main-menu > li.current-menu-ancestor > a,
        .header .main-menu > li.current-menu-parent > a,
        .header .main-menu > li.current-menu-item > a,
        .mobile-header-menu-container .main-menu li.active > a,
        .mobile-header-menu-container .main-menu li.current-menu-ancestor > a,
        .mobile-header-menu-container .main-menu li.current-menu-parent > a,
        .mobile-header-menu-container .main-menu li.current-menu-item > a,
        .mobile-header-menu-container .main-menu li.active > .sub-menu-trigger,
        .mobile-header-menu-container .main-menu li.current-menu-ancestor > .sub-menu-trigger,
        .mobile-header-menu-container .main-menu li.current-menu-parent > .sub-menu-trigger,
        .header .dropdown-trigger .dropdown-trigger-item:hover:before,
        .callback:before,
        .site-search .site-search-close,
        .mobile-header-menu-container .header-mobile-contacts .contact-item.contact-item-email a {
            color: ' . esc_attr($header_accent_text_color) . ';
        }
        .header-icons-container .header-button-container .industrium-button,
        .header .main-menu > li > a:before,
        .header .main-menu:not(.menu-checks) > li.menu-item-has-children > a:hover:after,
        .header .main-menu:not(.menu-checks) > li.menu-item-has-children.current-menu-ancestor > a:after,
        .header .main-menu:not(.menu-checks) > li.menu-item-has-children.current-menu-parent > a:after,
        .header .main-menu:not(.menu-checks) > li.menu-item-has-children.current-menu-item > a:after {
            background-color: ' . esc_attr($header_accent_text_color) . ';
        }
    ';
}

$header_border_color = industrium_get_prepared_option('header_border_color', 'standard_border_color', 'header_customize');
if ( !empty($header_border_color) ) {
    $industrium_custom_css .= '
        .site-search,
        .header-type-3 .dropdown-trigger,
        .mini-cart .mini-cart-panel:before,
        .mobile-header-menu-container .main-menu > li > ul.sub-menu,
        .mobile-header-menu-container .main-menu > li {
            border-color: ' . esc_attr($header_border_color) . ';
        }
    ';
}

$header_border_hover_color = industrium_get_prepared_option('header_border_hover_color', 'standard_border_hover_color', 'header_customize');
if ( !empty($header_border_hover_color) ) {
    $industrium_custom_css .= '';
}

$header_background_color = industrium_get_prepared_option('header_background_color', 'standard_background_color', 'header_customize');
if ( !empty($header_background_color) ) {
    $industrium_custom_css .= '
        .header,
        .mobile-header,
        .site-search,
        .mobile-header-menu-container,
        .header.sticky-header-on.sticky-ready .sticky-wrapper,
        .mobile-header.sticky-header-on.sticky-ready .sticky-wrapper,
        .header-icons-container.icons-container-big {
            background-color: ' . esc_attr($header_background_color) . ';
        }
    ';
}

$header_background_alter_color = industrium_get_prepared_option('header_background_alter_color', 'standard_background_alter_color', 'header_customize');
if ( !empty($header_background_alter_color) ) {
    $industrium_custom_css .= '';
}

$header_button_text_color = industrium_get_prepared_option('header_button_text_color', 'standard_button_text_color', 'header_customize');
if ( !empty($header_button_text_color) ) {
    $industrium_custom_css .= ' 
        .mobile-header .industrium-button, 
        .mobile-header-menu-container .industrium-button,
        .mobile-header .industrium-button:hover, 
        .mobile-header-menu-container .industrium-button:hover {
            color: ' . esc_attr($header_button_text_color) . ';
        }
    ';
}

$header_button_border_color = industrium_get_prepared_option('header_button_border_color', 'standard_button_border_color', 'header_customize');
if ( !empty($header_button_border_color) ) {
    $industrium_custom_css .= '
        .mobile-header-menu-container .header-mobile-socials .mobile-menu-socials li {
            border-color: ' . esc_attr($header_button_border_color) . ';
        }
        .mobile-header .industrium-button, 
        .mobile-header-menu-container .industrium-button {
            background-image: linear-gradient(0deg, ' . esc_attr($header_button_border_color) . ' 0%, ' . esc_attr($header_button_border_color) . ' 100%);
        }
        .mobile-header-menu-container .header-mobile-socials .mobile-menu-socials li a:after {
        	background-color: ' . esc_attr($header_button_border_color) . ';
        }
    ';
}

$header_button_background_color = industrium_get_prepared_option('header_button_background_color', 'standard_button_background_color', 'header_customize');
if ( !empty($header_button_background_color) ) {
    $industrium_custom_css .= '        
        .header .industrium-button,        
        .header .industrium-button:hover {
            color: ' . esc_attr($header_button_background_color) . ';
        }
    ';
}

$header_button_text_hover = industrium_get_prepared_option('header_button_text_hover', 'standard_button_text_hover', 'header_customize');
if ( !empty($header_button_text_hover) ) {
    $industrium_custom_css .= '        
        .mobile-header-menu-container .header-mobile-socials .mobile-menu-socials li a:hover,
        .mobile-header-menu-container .header-mobile-socials .mobile-menu-socials li a {
            color: ' . esc_attr($header_button_text_hover) . ';
        }
    ';
}

$header_button_border_hover = industrium_get_prepared_option('header_button_border_hover', 'standard_button_border_hover', 'header_customize');
if ( !empty($header_button_border_hover) ) {
    $industrium_custom_css .= '
    ';
}

$header_button_background_hover = industrium_get_prepared_option('header_button_background_hover', 'standard_button_background_hover', 'header_customize');
if ( !empty($header_button_background_hover) ) {
    $industrium_custom_css .= '';
}
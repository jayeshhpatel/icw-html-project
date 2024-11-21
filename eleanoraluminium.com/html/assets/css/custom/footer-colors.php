<?php

// ---------------------------- //
// ------ Footer Colors ------- //
// ---------------------------- //
$footer_default_text_color = industrium_get_prepared_option('footer_default_text_color', 'contrast_default_text_color', 'footer_customize');
if ( !empty($footer_default_text_color) ) {
    $industrium_custom_css .= '    
        .footer,
        .footer .widget_text,
        .footer-widgets .widget_industrium_featured_posts_widget .featured-posts-item-link,
        .footer-widgets .widget_recent_entries ul li a,
        .footer-widgets .wp-block-latest-posts li a,
        .footer-widgets .widget_recent_comments ul .recentcomments,
        .footer-widgets .widget_nav_menu ul li a, 
        .footer-widgets .widget_industrium_nav_menu_widget ul li a,
        .footer-widgets .widget_tag_cloud .tagcloud .tag-cloud-link,
        .footer-widgets .widget_categories ul li:hover li {
            color: ' . esc_attr($footer_default_text_color) . ';
        }
    ';
}

$footer_dark_text_color = industrium_get_prepared_option('footer_dark_text_color', 'contrast_dark_text_color', 'footer_customize');
if ( !empty($footer_dark_text_color) ) {
    $industrium_custom_css .= '
        .footer h1,
        .footer h2,
        .footer h3,
        .footer h4,
        .footer h5,
        .footer h6,
        .footer .widget-title,
        .footer .wpforms-form .wpforms-title,
        .footer a:hover,
        .footer input,
        .footer textarea,
        .footer select,
        .footer .wrapper-socials a,
        .footer .widget_industrium_contacts_widget .industrium-contacts-widget-field,
        .footer .widget_industrium_banner_widget .banner-widget-wrapper,
        .footer .widget_industrium_banner_widget .banner-widget-wrapper .banner-title,
        .footer .widget_search .search-form .search-form-icon,
        .footer .widget_calendar .wp-calendar-nav a:hover, 
        .footer .wp-block-calendar .wp-calendar-nav a:hover,
        .footer .widget_archive .post-count,
        .footer .wp-block-archives .post-count,
        .footer .widget_categories .post-count, 
        .footer .wp-block-categories .post-count,
        .footer .widget_rss cite,
        .footer .wp-block-rss .wp-block-rss__item-author,
        .footer .widget_media_gallery .gallery .gallery-icon a:after,
        .footer .widget_media_audio .mejs-container .mejs-button > button,
        .footer .widget_media_audio .mejs-container .mejs-time,
        .footer .widget_media_audio .mejs-container .mejs-duration,
        .footer .wp-video .mejs-container .mejs-button > button,
        .footer .wp-video .mejs-container .mejs-time,
        .footer .wp-video .mejs-container .mejs-duration,
        .footer-widgets ul li a,
        .footer-widgets .widget_industrium_contacts_widget .industrium-contacts-widget-field,
        .footer-widgets input[type="text"],
        .footer-widgets input[type="email"],
        .footer-widgets input[type="url"],
        .footer-widgets input[type="password"],
        .footer-widgets input[type="search"],
        .footer-widgets input[type="number"],
        .footer-widgets input[type="tel"],
        .footer-widgets input[type="range"],
        .footer-widgets input[type="date"],
        .footer-widgets input[type="month"],
        .footer-widgets input[type="week"],
        .footer-widgets input[type="time"],
        .footer-widgets input[type="datetime"],
        .footer-widgets input[type="datetime-local"],
        .footer-widgets input[type="color"],
        .footer-widgets select,
        .footer-widgets .select2-container .select2-selection--single,
        .footer-widgets textarea,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form select,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form textarea,
        .footer-widgets .select2-container--default .select2-results__option.select2-results__option--highlighted[aria-selected], 
        .footer-widgets .select2-container--default .select2-results__option.select2-results__option--highlighted[data-selected],
        .footer-widgets .widget_search .search-form .search-form-icon,
        .footer-widgets .widget_industrium_featured_posts_widget .featured-posts-item-link,
        .footer-widgets .widget_recent_entries ul li a,
        .footer-widgets .wp-block-latest-posts li a,
        .footer-widgets .widget_recent_comments ul .recentcomments a,
        .footer-widgets .wp-block-latest-comments li a,
        .footer-widgets .widget_calendar .wp-calendar-nav a,
        .footer-widgets .wp-block-calendar .wp-calendar-nav a,        
        .footer-widgets .widget_calendar table thead th, 
        .footer-widgets .wp-block-calendar table thead th,        
        .footer-widgets .widget_calendar table tbody td#today, 
        .footer-widgets .wp-block-calendar table tbody td#today,
        .footer-widgets .widget_calendar table tbody td#today a, 
        .footer-widgets .wp-block-calendar table tbody td#today a,
        .footer-widgets .widget_rss cite,
        .footer-widgets .widget_rss ul a.rsswidget,
        .footer-widgets .wp-block-rss .wp-block-rss__item-title a,
        .footer-widgets .wp-block-rss .wp-block-rss__item-author,
        .footer-widgets .widget .widget-title a,        
        .footer-widgets .widget_pages .widget-wrapper > ul li > a,
        .footer-widgets .widget_meta ul li > a,
        .footer-widgets .widget_categories ul li > a, 
        .footer-widgets .widget_categories ul li .widget-archive-trigger, 
        .footer-widgets .widget_archive ul li > a,
        .footer-widgets .wp-block-archives li > a,
        .footer-widgets .wp-block-search .wp-block-search__label,
        .footer-widgets .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button.has-icon,
        .footer .footer-menu li a,
        .footer-widgets .wp-block-loginout,
        .footer-widgets .wp-block-loginout a,
        .footer-widgets .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-color) .wp-block-social-link svg,
        .footer-widgets .widget_industrium_contacts_widget .industrium-contacts-widget-link:before,
        .footer-widgets .widget_industrium_contacts_widget .industrium-contacts-widget-link a,
        .body-container .footer-scroll-top button,
        .footer-widgets .widget_calendar table tbody a, 
        .footer-widgets .wp-block-calendar table tbody a,
        .footer-widgets.mc4wp-form .mc4wp-form-fields input[type="submit"]:hover, 
        .footer-widgets .mc4wp-form .mc4wp-form-fields button:hover {
            color: ' . esc_attr($footer_dark_text_color) . ';
        }
        .footer .widget_media_audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, 
        .footer .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-loaded,
        .footer .wp-video .mejs-volume-current,
        .footer .wp-video .mejs-volume-handle,
        .footer-section + .footer-section:before,
        .footer.footer-decorated:after {
            background-color: ' . esc_attr($footer_dark_text_color) . ';
        }
        .footer .content-inner ul:not([class*="elementor"]) > li:not([class*="elementor"]):before,
        .footer .content-single-post ul:not([class*="elementor"]) > li:not([class*="elementor"]):before,
        .footer .single_portfolio_content ul:not([class*="elementor"]) > li:not([class*="elementor"]):before,
        .footer .industrium_comments__item-text ul:not([class*="elementor"]) > li:not([class*="elementor"]):before,
        .footer .single_recipe_content ul:not([class*="elementor"]) > li:not([class*="elementor"]):before {
            border-color: ' . esc_attr($footer_dark_text_color) . ';
        }
        .footer .widget_media_audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total, 
        .footer .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-total,
        .footer .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total, 
        .footer .mejs-controls .mejs-time-rail .mejs-time-total,
        .footer .mejs-volume-total {
            background-color: rgba(' . esc_attr(industrium_hex2rgb($footer_dark_text_color)) . ', 0.4);
        }
    ';
}

$footer_light_text_color = industrium_get_prepared_option('footer_light_text_color', 'contrast_light_text_color', 'footer_customize');
if ( !empty($footer_light_text_color) ) {
    $industrium_custom_css .= '        
        .footer .footer-additional-menu li a,
        .footer-widgets .widget_calendar table tbody td, 
        .footer-widgets .wp-block-calendar table tbody td,
        .footer .widget_categories li.cat-item-hierarchical, 
        .footer .wp-block-categories li.cat-item-hierarchical,
        .footer .widget_industrium_featured_posts_widget .featured-posts-item-date,
        .footer .widget_pages .widget-archive-trigger,
        .footer .widget_nav_menu .widget-menu-trigger,
        .footer .select2-container--default .select2-selection--single .select2-selection__placeholder,
        .footer-widgets .widget_industrium_featured_posts_widget .featured-posts-item-date,
        .footer-widgets .widget_recent_entries ul li .post-date,
        .footer-widgets .wp-block-latest-posts li .wp-block-latest-posts__post-date,
        .footer-widgets .widget_rss .rss-date,
        .footer-widgets .wp-block-rss .wp-block-rss__item-publish-date,
        .footer-widgets .widget_calendar .wp-calendar-nav a,
        .footer-widgets .widget_calendar table thead th,
        .footer-widgets .wp-block-latest-comments li .wp-block-latest-comments__comment-meta,
        .footer-widgets .widget_industrium_contacts_widget .field-label,
        .footer-copyrights-container,
        .footer-additional-menu li + li:before {
            color: ' . esc_attr($footer_light_text_color) . ';
        }
        .footer .input-floating-wrap .floating-placeholder,
        .footer input[type="text"]::-webkit-input-placeholder,
        .footer input[type="email"]::-webkit-input-placeholder,
        .footer input[type="url"]::-webkit-input-placeholder,
        .footer input[type="password"]::-webkit-input-placeholder,
        .footer input[type="search"]::-webkit-input-placeholder,
        .footer input[type="tel"]::-webkit-input-placeholder, 
        .footer input[type="number"]::-webkit-input-placeholder, 
        .footer input[type="date"]::-webkit-input-placeholder, 
        .footer input[type="month"]::-webkit-input-placeholder, 
        .footer input[type="week"]::-webkit-input-placeholder, 
        .footer input[type="time"]::-webkit-input-placeholder, 
        .footer input[type="datetime"]::-webkit-input-placeholder, 
        .footer input[type="datetime-local"]::-webkit-input-placeholder, 
        .footer textarea::-webkit-input-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]::-webkit-input-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]::-webkit-input-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]::-webkit-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form textarea::-webkit-input-placeholder {
             color: ' . esc_attr($footer_light_text_color) . ';
        }
        .footer input[type="text"]:-moz-placeholder,
        .footer input[type="url"]:-moz-placeholder,
        .footer input[type="email"]:-moz-placeholder,
        .footer input[type="password"]:-moz-placeholder,
        .footer input[type="search"]:-moz-placeholder,
        .footer input[type="tel"]:-moz-placeholder, 
        .footer input[type="number"]:-moz-placeholder, 
        .footer input[type="date"]:-moz-placeholder, 
        .footer input[type="month"]:-moz-placeholder, 
        .footer input[type="week"]:-moz-placeholder, 
        .footer input[type="time"]:-moz-placeholder, 
        .footer input[type="datetime"]:-moz-placeholder, 
        .footer input[type="datetime-local"]:-moz-placeholder, 
        .footer textarea:-moz-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]:-moz-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]:-moz-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]:-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form textarea:-moz-placeholder {
             color: ' . esc_attr($footer_light_text_color) . ';
        }
        .footer input[type="text"]::-moz-placeholder,
        .footer input[type="url"]::-moz-placeholder,
        .footer input[type="email"]::-moz-placeholder,
        .footer input[type="password"]::-moz-placeholder,
        .footer input[type="search"]::-moz-placeholder,
        .footer input[type="tel"]::-moz-placeholder, 
        .footer input[type="number"]::-moz-placeholder, 
        .footer input[type="date"]::-moz-placeholder, 
        .footer input[type="month"]::-moz-placeholder, 
        .footer input[type="week"]::-moz-placeholder, 
        .footer input[type="time"]::-moz-placeholder, 
        .footer input[type="datetime"]::-moz-placeholder, 
        .footer input[type="datetime-local"]::-moz-placeholder, 
        .footer textarea::-moz-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]::-moz-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]::-moz-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]::-moz-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form textarea::-moz-placeholder {
             color: ' . esc_attr($footer_light_text_color) . ';
        }
        .footer input[type="text"]:-ms-input-placeholder,
        .footer input[type="email"]:-ms-input-placeholder,
        .footer input[type="url"]:-ms-input-placeholder,
        .footer input[type="password"]:-ms-input-placeholder,
        .footer input[type="search"]:-ms-input-placeholder,
        .footer input[type="tel"]:-ms-input-placeholder, 
        .footer input[type="number"]:-ms-input-placeholder, 
        .footer input[type="date"]:-ms-input-placeholder, 
        .footer input[type="month"]:-ms-input-placeholder, 
        .footer input[type="week"]:-ms-input-placeholder, 
        .footer input[type="time"]:-ms-input-placeholder, 
        .footer input[type="datetime"]:-ms-input-placeholder, 
        .footer input[type="datetime-local"]:-ms-input-placeholder, 
        .footer textarea:-ms-input-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]:-ms-input-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]:-ms-input-placeholder,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]:-ms-input-placeholder, 
        .footer div.wpforms-container.wpforms-container-full .wpforms-form textarea:-ms-input-placeholder {
            color: ' . esc_attr($footer_light_text_color) . ';
        }
        .footer-widgets .widget_categories ul > li:before, 
        .footer-widgets ul.wp-block-categories > li:before,
        .footer-widgets .widget_archive ul li:before,
        .footer-widgets .wp-block-archives li:before,
        .footer-widgets .widget_recent_comments ul .recentcomments:before,
        .footer-widgets .widget_pages .widget-wrapper > ul > li:before,
        .footer-widgets .widget_meta ul li:before,
        .footer-widgets .wp-block-latest-comments li:before {
            background-color: rgba(' . esc_attr(industrium_hex2rgb($footer_light_text_color)) . ', 0.6);
        }
    ';
}

$footer_accent_text_color = industrium_get_prepared_option('footer_accent_text_color', 'contrast_accent_text_color', 'footer_customize');
if ( !empty($footer_accent_text_color) ) {
    $industrium_custom_css .= '    
        .footer a,
        .footer-widgets ul li a:hover,
        .footer .footer-additional-menu li a:hover,
        .footer .widget_recent_comments ul .recentcomments .comment-author-link a:hover,
        .footer .widget_media_audio .mejs-container .mejs-button > button:hover,
        .footer .wp-video .mejs-container .mejs-button > button:hover,
        .error-404-footer .wrapper-socials a:hover, 
        .footer-widgets .widget_industrium_banner_widget .industrium-contacts-widget-field:before,
        .footer-widgets .widget_search .search-form .search-form-icon:hover,
        .footer-widgets .widget_categories ul > li:hover, 
        .footer-widgets .widget_categories ul li:hover > a, 
        .footer-widgets ul.wp-block-categories li:hover:before,
        .footer-widgets ul.wp-block-categories li:hover > a,
        .footer-widgets .widget_industrium_featured_posts_widget .featured-posts-item-link:hover,
        .footer-widgets .widget_archive ul li:hover > a,
        .footer-widgets .widget_archive ul > li:hover,
        .footer-widgets .wp-block-archives li:hover > a,
        .footer-widgets .wp-block-archives > li:hover,
        .footer-widgets .widget_recent_entries ul li a:hover,
        .footer-widgets .wp-block-latest-posts li a:hover,
        .footer-widgets .widget_recent_comments ul .recentcomments a:hover,
        .footer-widgets .wp-block-latest-comments li a:hover,
        .footer-widgets .widget_pages .widget-wrapper > ul li:hover > a,
        .footer-widgets .widget_meta ul li:hover > a,
        .footer-widgets .widget_rss ul a.rsswidget:hover,
        .footer-widgets .wp-block-rss .wp-block-rss__item-title a:hover,
        .footer-widgets .widget .widget-title a:hover,
        .footer-widgets .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button.has-icon:hover,
        .footer .footer-menu li a:hover,
        .footer-widgets .wp-block-loginout a:hover,
        .footer-widgets .widget_calendar table caption, 
        .footer-widgets .wp-block-calendar table caption,
        .footer-widgets .widget_nav_menu ul li a:hover, 
        .footer-widgets .widget_nav_menu ul li.current-menu-item > a, 
        .footer-widgets .widget_nav_menu ul li.current-menu-ancestor > a, 
        .footer-widgets .widget_nav_menu ul li.current-menu-parent > a, 
        .footer-widgets .widget_nav_menu ul li.current_page_item > a, 
        .footer-widgets .widget_industrium_nav_menu_widget ul li a:hover, 
        .footer-widgets .widget_industrium_nav_menu_widget ul li.current-menu-item > a,
        .footer-widgets .widget_industrium_nav_menu_widget ul li.current-menu-ancestor > a,
        .footer-widgets .widget_industrium_nav_menu_widget ul li.current-menu-parent > a, 
        .footer-widgets .widget_industrium_nav_menu_widget ul li.current_page_item > a,
        .footer-widgets .widget_industrium_contacts_widget .industrium-contacts-widget-link a:hover,
        .footer-widgets.mc4wp-form .mc4wp-form-fields input[type="submit"], 
        .footer-widgets .mc4wp-form .mc4wp-form-fields button {
            color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer blockquote:before {
            color: rgba(' . esc_attr(industrium_hex2rgb($footer_accent_text_color)) . ', .3);
        }
        .footer .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-current,
        .footer .wp-video .mejs-controls .mejs-time-rail .mejs-time-current,
        .footer .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .footer .wp-video .mejs-controls .mejs-time-rail .mejs-time-handle-content, 
        .footer-widgets .widget_nav_menu ul li a:before, 
        .footer-widgets .widget_industrium_nav_menu_widget ul li a:before,
        .footer-widgets .widget_categories ul > li:hover:before, 
        .footer-widgets ul.wp-block-categories > li:hover:before,
        .footer-widgets .widget_archive ul li:hover:before,
        .footer-widgets .wp-block-archives li:hover:before,
        .footer-widgets .widget_recent_comments ul .recentcomments:hover:before,
        .footer-widgets .widget_pages .widget-wrapper > ul > li:hover:before,
        .footer-widgets .widget_meta ul li:hover:before,
        .footer-widgets .wp-block-latest-comments li:hover:before,
        .footer-widgets .wp-block-gallery .wp-block-image a:before,
        .footer.footer-decorated:before,
        .body-container .footer-scroll-top button,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"] {
            background-color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .footer .wp-video .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .footer-widgets .widget_calendar table tbody td#today:before, 
        .footer-widgets .wp-block-calendar table tbody td#today:before {
            border-color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]::-webkit-slider-thumb {
            background-color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]::-moz-range-thumb {
             background-color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]::-ms-thumb {
             background-color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]:focus::-ms-thumb {
             background-color: ' . esc_attr($footer_accent_text_color) . ';
        }
        .footer-special-text,
        .footer-special-text-container .footer-special-text {
            -webkit-text-stroke: 1px' . esc_attr($footer_accent_text_color) . ';
        }
    ';
}

$footer_border_color = industrium_get_prepared_option('footer_border_color', 'contrast_border_color', 'footer_customize');
if ( !empty($footer_border_color) ) {
    $industrium_custom_css .= '
        .footer-widgets input[type="text"],
        .footer-widgets input[type="email"],
        .footer-widgets input[type="url"],
        .footer-widgets input[type="password"],
        .footer-widgets input[type="search"],
        .footer-widgets input[type="number"],
        .footer-widgets input[type="tel"],
        .footer-widgets input[type="range"],
        .footer-widgets input[type="date"],
        .footer-widgets input[type="month"],
        .footer-widgets input[type="week"],
        .footer-widgets input[type="time"],
        .footer-widgets input[type="datetime"],
        .footer-widgets input[type="datetime-local"],
        .footer-widgets input[type="color"],
        .footer-widgets textarea,
        .footer-widgets .select2-container .select2-selection--single,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form select,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form textarea,
        .footer-widgets .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form .select-wrap,
        .footer-widgets .select-wrap,       
        .footer-widgets .select2-dropdown,
        .footer-widgets .select2-container--default .select2-search--dropdown .select2-search__field {
            border-color: ' . esc_attr($footer_border_color) . ';
        }
    ';
}

$footer_border_hover_color = industrium_get_prepared_option('footer_border_hover_color', 'contrast_border_hover_color', 'footer_customize');
if ( !empty($footer_border_hover_color) ) {
    $industrium_custom_css .= '        
        .footer-widgets input[type="text"]:focus,
        .footer-widgets input[type="email"]:focus,
        .footer-widgets input[type="url"]:focus,
        .footer-widgets input[type="password"]:focus,
        .footer-widgets input[type="search"]:focus,
        .footer-widgets input[type="number"]:focus,
        .footer-widgets input[type="tel"]:focus,
        .footer-widgets input[type="range"]:focus,
        .footer-widgets input[type="date"]:focus,
        .footer-widgets input[type="month"]:focus,
        .footer-widgets input[type="week"]:focus,
        .footer-widgets input[type="time"]:focus,
        .footer-widgets input[type="datetime"]:focus,
        .footer-widgets input[type="datetime-local"]:focus,
        .footer-widgets input[type="color"]:focus,
        .footer-widgets textarea:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"]:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form select:focus,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form textarea:focus,
        .footer-widgets .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper:focus-within,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form .select-wrap:focus-within,
        .footer-widgets .select-wrap:focus-within {
             border-color: ' . esc_attr($footer_border_hover_color) . ';
        }
        .footer .widget_media_audio .mejs-container, 
        .footer .widget_media_audio .mejs-container .mejs-controls, 
        .footer .widget_media_audio .mejs-embed, 
        .footer .widget_media_audio .mejs-embed body,
        .footer .wp-video .mejs-container, 
        .footer .wp-video .mejs-container .mejs-controls, 
        .footer .wp-video .mejs-embed, 
        .footer .wp-video .mejs-embed body,
        .footer .mejs-volume-button > .mejs-volume-slider {
            background-color: ' . esc_attr($footer_border_hover_color) . ';
        }
    ';
}

$footer_background_color = industrium_get_prepared_option('footer_background_color', 'contrast_background_color', 'footer_customize');
if ( !empty($footer_background_color) ) {
    $industrium_custom_css .= '
        .footer,
        .footer-widgets .widget_calendar table tbody td#today:before, 
        .footer-widgets .wp-block-calendar table tbody td#today:before,
        .footer-widgets .select-wrap select,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form .select-wrap select,
        .footer-widgets input[type="text"],
        .footer-widgets input[type="email"],
        .footer-widgets input[type="url"],
        .footer-widgets input[type="password"],
        .footer-widgets input[type="search"],
        .footer-widgets input[type="number"],
        .footer-widgets input[type="tel"],
        .footer-widgets input[type="range"],
        .footer-widgets input[type="date"],
        .footer-widgets input[type="month"],
        .footer-widgets input[type="week"],
        .footer-widgets input[type="time"],
        .footer-widgets input[type="datetime"],
        .footer-widgets input[type="datetime-local"],
        .footer-widgets input[type="color"],
        .footer-widgets textarea,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form select,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form textarea {
            background-color: ' . esc_attr($footer_background_color) . ';
        }        
        .footer .wrapper-socials a:hover,
        .footer .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-color) .wp-block-social-link a:hover svg,
        .body-container .footer-scroll-top button:hover {
            color: ' . esc_attr($footer_background_color) . ';
        }
    ';
}

$footer_background_alter_color = industrium_get_prepared_option('footer_background_alter_color', 'contrast_background_alter_color', 'footer_customize');
if ( !empty($footer_background_alter_color) ) {
    $industrium_custom_css .= '
        .footer-widgets input[type="checkbox"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="checkbox"],
        .woocommerce .footer-widgets form .form-row input[type="checkbox"].input-checkbox,
        .footer-widgets input[type="radio"],
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="radio"],
        .footer-widgets .wp-block-calendar,
        .footer-widgets .widget_calendar .calendar_wrap {
            background-color: ' . esc_attr($footer_background_alter_color) . ';
        }
    ';
}

$footer_button_text_color = industrium_get_prepared_option('footer_button_text_color', 'contrast_button_text_color', 'footer_customize');
if ( !empty($footer_button_text_color) ) {
    $industrium_custom_css .= '
        .footer-widgets .industrium-button,
        .footer-widgets .button,
        .footer-widgets input[type="submit"],
        .footer-widgets input[type="reset"],
        .footer-widgets input[type="button"],
        .footer-widgets button,
        .footer-widgets .widget_calendar table tbody td#today a,
        .footer-widgets .wp-block-gallery .blocks-gallery-grid .blocks-gallery-item a:after, 
        .footer-widgets .media_gallery .blocks-gallery-grid .blocks-gallery-item a:after,
        .footer-widgets .gallery .gallery-item .gallery-icon a:after,
        .footer .widget_calendar tbody td#today, 
        .footer .widget_calendar tbody td#today a, 
        .footer .wp-block-calendar tbody td#today,
        .footer .wp-block-calendar tbody td#today a,
        .footer input[type="checkbox"]:checked:before,
        .footer div.wpforms-container.wpforms-container-full .wpforms-form input[type="checkbox"]:checked:before,
        .woocommerce .footer form .form-row input[type="checkbox"].input-checkbox:checked:before,
        .footer-widgets .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color),
        .footer-widgets .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color),
        .footer-widgets div.wpforms-container-full .wpforms-form input[type=submit], 
        .footer-widgets div.wpforms-container-full .wpforms-form button[type=submit], 
        .footer-widgets div.wpforms-container-full .wpforms-form .wpforms-page-button {
            color: ' . esc_attr($footer_button_text_color) . ';
        }
        .footer-widgets input[type="radio"]:checked:before,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="radio"]:checked:before {
            background-color: ' . esc_attr($footer_button_text_color) . ';
        }
    ';
}

$footer_button_border_color = industrium_get_prepared_option('footer_button_border_color', 'contrast_button_border_color', 'footer_customize');
if ( !empty($footer_button_border_color) ) {
    $industrium_custom_css .= '
        .footer-widgets .industrium-button:after, 
        .footer-widgets button:not(.customize-partial-edit-shortcut-button):after, 
        .footer-widgets input[type="submit"]:after, 
        .footer-widgets input[type="button"]:after, 
        .footer-widgets input[type="reset"]:after,
        .footer-widgets .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background):after,
        .footer-widgets .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background):after {
            color: ' . esc_attr($footer_button_border_color) . ';
        }
        .footer-widgets input[type="radio"]:checked:before,
        .footer-widgets div.wpforms-container.wpforms-container-full .wpforms-form input[type="radio"]:checked:before,
        .footer-widgets .wrapper-socials a:after,
        .footer-widgets .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-background-color) .wp-block-social-link:after {
            background-color: ' . esc_attr($footer_button_border_color) . ';
        }
        .footer-widgets .wrapper-socials li,
        .footer-widgets .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-background-color) .wp-block-social-link {
            border-color: ' . esc_attr($footer_button_border_color) . ';
        }
        .footer-widgets .wp-block-gallery .blocks-gallery-grid .blocks-gallery-item a:before, 
        .footer-widgets .media_gallery .blocks-gallery-grid .blocks-gallery-item a:before,
        .footer-widgets .gallery .gallery-item .gallery-icon a:before {
             background-color: rgba(' . esc_attr(industrium_hex2rgb($footer_button_border_color)) . ', 0.5);
        }
        .footer-widgets button:not(.customize-partial-edit-shortcut-button),
        .footer-widgets .industrium-button,
        .footer-widgets .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background),
        .footer-widgets .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background),
        .footer-widgets div.wpforms-container-full .wpforms-form input[type=submit], 
        .footer-widgets div.wpforms-container-full .wpforms-form button[type=submit], 
        .footer-widgets div.wpforms-container-full .wpforms-form .wpforms-page-button {
            background-image: linear-gradient(0deg, ' . esc_attr($footer_button_border_color) . ' 0%, ' . esc_attr($footer_button_border_color) . ' 100%);
        }
        .footer-widgets button:not(.customize-partial-edit-shortcut-button) svg,
        .footer-widgets .industrium-button svg,
        .footer-widgets .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background) svg,
        .footer-widgets .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background) svg {
            stroke: ' . esc_attr($footer_button_border_color) . ';
        }
    ';
}

$footer_button_background_color = industrium_get_prepared_option('footer_button_background_color', 'contrast_button_background_color', 'footer_customize');
if ( !empty($footer_button_background_color) ) {
    $industrium_custom_css .= '
    ';
}

$footer_button_text_hover = industrium_get_prepared_option('footer_button_text_hover', 'contrast_button_text_hover', 'footer_customize');
if ( !empty($footer_button_text_hover) ) {
    $industrium_custom_css .= '
        .footer-widgets .industrium-button:hover,
        .footer-widgets .button:hover,
        .footer-widgets input[type="submit"]:hover,
        .footer-widgets input[type="reset"]:hover,
        .footer-widgets input[type="button"]:hover,
        .footer-widgets button:hover,
        .footer-widgets .widget_tag_cloud .tagcloud .tag-cloud-link:hover,
        .footer-widgets .select2-container--default .select2-results__option[aria-selected=true], 
        .footer-widgets .select2-container--default .select2-results__option[data-selected=true],
        .footer-widgets div.wpforms-container-full .wpforms-form input[type=submit]:hover, 
        .footer-widgets div.wpforms-container-full .wpforms-form button[type=submit]:hover, 
        .footer-widgets div.wpforms-container-full .wpforms-form .wpforms-page-button:hover,
        .footer-widgets .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color):hover,
        .footer-widgets .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color):hover,
        .footer-widgets div.wpforms-container-full .wpforms-form input[type=submit]:hover, 
        .footer-widgets div.wpforms-container-full .wpforms-form button[type=submit]:hover, 
        .footer-widgets div.wpforms-container-full .wpforms-form .wpforms-page-button:hover {
            color: ' . esc_attr($footer_button_text_hover) . ';
        }
    ';
}

$footer_button_border_hover = industrium_get_prepared_option('footer_button_border_hover', 'contrast_button_border_hover', 'footer_customize');
if ( !empty($footer_button_border_hover) ) {
    $industrium_custom_css .= '';
}

$footer_button_background_hover = industrium_get_prepared_option('footer_button_background_hover', 'contrast_button_background_hover', 'footer_customize');
if ( !empty($footer_button_background_hover) ) {
    $industrium_custom_css .= '
    ';
}

$footer_scrolltop_bg_color = industrium_get_prepared_option('footer_scrolltop_bg_color', 'footer_accent_text_color', 'footer_scrolltop_status');
if ( !empty($footer_scrolltop_bg_color) ) {
    $industrium_custom_css .= '
        .body-container .footer-scroll-top button {
           background-color: ' . esc_attr($footer_scrolltop_bg_color) . ';
        }
    ';
}

$footer_scrolltop_color = industrium_get_prepared_option('footer_scrolltop_color', 'footer_dark_text_color', 'footer_scrolltop_status');
if ( !empty($footer_scrolltop_color) ) {
    $industrium_custom_css .= '
        .body-container .footer-scroll-top button {
            color: ' . esc_attr($footer_scrolltop_color) . ';
        }
    ';
}

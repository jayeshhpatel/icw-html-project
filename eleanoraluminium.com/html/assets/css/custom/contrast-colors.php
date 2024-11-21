<?php

// ----------------------------- //
// ------ Contrast Colors ------ //
// ----------------------------- //

$contrast_default_text_color = industrium_get_prefered_option('contrast_default_text_color');
if ( !empty($contrast_default_text_color) ) {
    $industrium_custom_css .= '
        .header .main-menu > li ul.sub-menu > li.menu-item-has-children > a:after,
        .slide-sidebar-wrapper .slide-sidebar-content,
        .slide-sidebar-wrapper .widget_industrium_featured_posts_widget .featured-posts-item-link,
        .slide-sidebar-wrapper .widget_recent_entries ul li a,
        .slide-sidebar-wrapper .wp-block-latest-posts li a,
        .slide-sidebar-wrapper .widget_recent_comments ul .recentcomments,
        .slide-sidebar-wrapper .widget_nav_menu ul li a, 
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li a,
        .slide-sidebar-wrapper .widget_tag_cloud .tagcloud .tag-cloud-link,
        .slide-sidebar-wrapper .widget_calendar table tbody a:hover,
        .slide-sidebar-wrapper .widget_categories ul li:hover li {
            color: ' . esc_attr($contrast_default_text_color) . ';
        }
    ';
}

$contrast_dark_text_color = industrium_get_prefered_option('contrast_dark_text_color');
if ( !empty($contrast_dark_text_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper a,
        .error-404-container .wrapper-socials a,
        .portfolio-item .post-title,
        .industrium-price-item-widget .price-item.price-item-type-wide.active .price-item-description,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .post-title,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .project-item-categories,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .project-item-categories a,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .project-item-excerpt,
        .project-listing-wrapper.project-slider-listing .project-item-wrapper .project-item-excerpt,
        .header .main-menu ul.sub-menu > li > a,
        .header .main-menu > li ul.sub-menu > li.menu-item-has-children > a:hover:after,
        .widget_media_audio .mejs-container .mejs-button > button,
        .widget_media_audio .mejs-container .mejs-time,
        .widget_media_audio .mejs-container .mejs-duration,
        .mejs-audio.mejs-container .mejs-button > button,
        .mejs-audio.mejs-container .mejs-time,
        .mejs-audio.mejs-container .mejs-duration,
        .wp-video .mejs-container .mejs-button > button,
        .wp-video .mejs-container .mejs-time,
        .wp-video .mejs-container .mejs-duration,
        .widget_industrium_banner_widget .banner-widget-wrapper.banner-contrast-colors,
        .widget_industrium_banner_widget .banner-widget-wrapper.banner-contrast-colors .banner-title,
        .slide-sidebar-wrapper .wrapper-socials a,
        .slide-sidebar-wrapper .slide-sidebar-content h1, 
        .slide-sidebar-wrapper .slide-sidebar-content h2, 
        .slide-sidebar-wrapper .slide-sidebar-content h3, 
        .slide-sidebar-wrapper .slide-sidebar-content h4, 
        .slide-sidebar-wrapper .slide-sidebar-content h5, 
        .slide-sidebar-wrapper .slide-sidebar-content h6,
        .slide-sidebar-wrapper .slide-sidebar-close,
        .slide-sidebar-wrapper .slide-sidebar-close:hover,
        .slide-sidebar-wrapper .widget_industrium_contacts_widget .industrium-contacts-widget-field,
        .slide-sidebar-wrapper .widget_industrium_contacts_widget .industrium-contacts-widget-link:before,
        .slide-sidebar-wrapper .widget_industrium_contacts_widget .industrium-contacts-widget-email a:hover,
        .slide-sidebar-wrapper input[type="text"],
        .slide-sidebar-wrapper input[type="email"],
        .slide-sidebar-wrapper input[type="url"],
        .slide-sidebar-wrapper input[type="password"],
        .slide-sidebar-wrapper input[type="search"],
        .slide-sidebar-wrapper input[type="number"],
        .slide-sidebar-wrapper input[type="tel"],
        .slide-sidebar-wrapper input[type="range"],
        .slide-sidebar-wrapper input[type="date"],
        .slide-sidebar-wrapper input[type="month"],
        .slide-sidebar-wrapper input[type="week"],
        .slide-sidebar-wrapper input[type="time"],
        .slide-sidebar-wrapper input[type="datetime"],
        .slide-sidebar-wrapper input[type="datetime-local"],
        .slide-sidebar-wrapper input[type="color"],
        .slide-sidebar-wrapper select,
        .slide-sidebar-wrapper .select2-container .select2-selection--single,
        .slide-sidebar-wrapper textarea,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form select,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea,
        .slide-sidebar-wrapper .select2-container--default .select2-results__option.select2-results__option--highlighted[aria-selected], 
        .slide-sidebar-wrapper .select2-container--default .select2-results__option.select2-results__option--highlighted[data-selected],
        .slide-sidebar-wrapper .widget_search .search-form .search-form-icon,
        .slide-sidebar-wrapper .widget_industrium_featured_posts_widget .featured-posts-item-link,
        .slide-sidebar-wrapper .widget_recent_entries ul li a,
        .slide-sidebar-wrapper .wp-block-latest-posts li a,
        .slide-sidebar-wrapper .widget_recent_comments ul .recentcomments a,
        .slide-sidebar-wrapper .wp-block-latest-comments li a,
        .slide-sidebar-wrapper .widget_calendar caption,
        .slide-sidebar-wrapper .widget_calendar .wp-calendar-nav a,
        .slide-sidebar-wrapper .widget_calendar table tbody td,
        .slide-sidebar-wrapper .widget_rss cite,
        .slide-sidebar-wrapper .widget_rss ul a.rsswidget,
        .slide-sidebar-wrapper .wp-block-rss .wp-block-rss__item-title a,
        .slide-sidebar-wrapper .wp-block-rss .wp-block-rss__item-author,
        .slide-sidebar-wrapper .widget .widget-title a,
        .slide-sidebar-wrapper .widget_nav_menu ul li a:hover, 
        .slide-sidebar-wrapper .widget_nav_menu ul li.current-menu-item > a, 
        .slide-sidebar-wrapper .widget_nav_menu ul li.current-menu-ancestor > a, 
        .slide-sidebar-wrapper .widget_nav_menu ul li.current-menu-parent > a, 
        .slide-sidebar-wrapper .widget_nav_menu ul li.current_page_item > a, 
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li a:hover, 
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li.current-menu-item > a,
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li.current-menu-ancestor > a,
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li.current-menu-parent > a, 
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li.current_page_item > a,
        .slide-sidebar-wrapper .widget_pages .widget-wrapper > ul li > a,
        .slide-sidebar-wrapper .widget_meta ul li > a,
        .slide-sidebar-wrapper .widget_categories ul li > a, 
        .slide-sidebar-wrapper .widget_categories ul li .widget-archive-trigger,
        .slide-sidebar-wrapper .widget_archive ul li > a,
        .slide-sidebar-wrapper .wp-block-archives li > a,
        .industrium-content-slider-widget .content-item,        
        .owl-theme .owl-nav [class*="owl-"]:not(.disabled):hover:before,
        .industrium-content-slider-widget .owl-theme .owl-nav [class*="owl-"]:not(.disabled):hover:before,
        .industrium-content-slider-widget .bottom-area,
        .industrium-content-slider-widget .bottom-area .contacts .contact-item a,
        .slide-sidebar-wrapper .wp-block-search .wp-block-search__label,
        .slide-sidebar-wrapper .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button.has-icon,
        .slide-sidebar-wrapper .wp-block-loginout,
        .slide-sidebar-wrapper .wp-block-loginout a,        
        .widget_calendar .wp-calendar-nav a,
        .wp-block-calendar .wp-calendar-nav a,        
        .widget_calendar table thead th, 
        .wp-block-calendar table thead th,        
        .widget_calendar table tbody td#today, 
        .wp-block-calendar table tbody td#today,
        .widget_calendar table tbody td#today a, 
        .wp-block-calendar table tbody td#today a,
        .slide-sidebar-wrapper .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-color) .wp-block-social-link svg,
        .post-meta-header .post-meta-item .post-meta-item-month-year,
        .post-comment-buttons a.comment-edit-link,
        .post-comment-buttons a.comment-reply-link,
        .team-item .team-item-socials .team-socials.wrapper-socials a:hover,        
        .vacancy-post-meta .vacancy-occupation,
        .industrium-price-item-widget .price-item .price-item-best-label,
        .industrium-price-item-widget .price-item.active .price-item-button-container .industrium-button,
        .industrium-price-item-widget .price-item .price-item-button-container .industrium-button:hover,
        .content-wrapper .widget_calendar table tbody a, 
        .content-wrapper .wp-block-calendar table tbody a,
        .block-editor-block-list__layout .widget_calendar table tbody a,
        .block-editor-block-list__layout .wp-block-calendar table tbody a,
        .slide-sidebar-wrapper .widget_calendar table tbody a, 
        .slide-sidebar-wrapper .wp-block-calendar table tbody a,
        .slide-sidebar-wrapper .wpforms-form .wpforms-title,
        .elementor-widget-industrium_services_listing.view_type-2 .service-item-content,
        .elementor-widget-industrium_services_listing.view_type-2 .service-post-title:before,
        .elementor-widget-industrium_services_listing.view_type-2 .service-item-number,
        .industrium-content-slider-widget .content-slider-scroll-down,
        .industrium-content-slider-widget .industrium-content-wrapper-3 .industrium-button,
        .industrium-content-slider-widget .industrium-content-wrapper-3 .industrium-button:after,
        .slide-sidebar-wrapper.mc4wp-form .mc4wp-form-fields input[type="submit"]:hover, 
        .slide-sidebar-wrapper .mc4wp-form .mc4wp-form-fields button:hover,
        .project-slider-listing.view-type-2 .slider-item .project-item-link .post-title,
        .project-listing-wrapper.project-slider-listing.view-type-2 .slider-item .button-container .industrium-button,
        .project-listing-wrapper.project-slider-listing.view-type-2 .slider-item .button-container .industrium-button:after,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .industrium-button,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .industrium-button:after,
        .portfolio-slider-wrapper .archive-listing .slider-next-button-wrapper .slider-next-button:hover,
        .result-box .result-box-title,
        .results-boxes:before,
        .cursor_drag,
        .elementor-widget-image .elementor-image a .hovered-caption,
        .elementor-widget-industrium_services_listing.view_type-3 .service-item .service-slider-item-link,
        .elementor-widget-industrium_services_listing.view_type-3 .service-item .service-post-title:before,
        .elementor-widget-industrium_services_listing.view_type-4 .service-item .service-slider-item-link,
        .elementor-widget-industrium_services_listing.view_type-5 .service-item .service-slider-item-link,
        .elementor-widget-image .elementor-image .elementor-image-badge,
        .elementor-widget-industrium_button .industrium-button.button-type-2:after,
        .elementor-widget-industrium_button .industrium-button.button-type-2:hover {
            color: ' . esc_attr($contrast_dark_text_color) . ';
        }
        
        .widget_media_audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, 
        .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-loaded,
        .mejs-audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, 
        .mejs-audio .mejs-controls .mejs-time-rail .mejs-time-loaded,
        .wp-video .mejs-overlay-play .mejs-overlay-button:before,
        .elementor-widget-video .elementor-custom-embed-play:before,
        .wp-video .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current, 
        .wp-video .mejs-controls .mejs-time-rail .mejs-time-loaded,
        .wp-video .mejs-volume-current,
        .wp-video .mejs-volume-handle,
        .industrium-content-slider-widget .bottom-area .slider-progress-wrapper.progress-direction-horizontal .slider-progress-track,
        .industrium-content-slider-widget .industrium-video-button .elementor-custom-embed-play .eicon-play:before {
            background-color: ' . esc_attr($contrast_dark_text_color) . ';
        }
        .widget_media_audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total, 
        .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-total,
        .mejs-audio .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total, 
        .mejs-audio .mejs-controls .mejs-time-rail .mejs-time-total,
        .wp-video .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total, 
        .wp-video .mejs-controls .mejs-time-rail .mejs-time-total,
        .wp-video .mejs-volume-total {
            background-color: rgba(' . esc_attr(industrium_hex2rgb($contrast_dark_text_color)) . ', 0.4);
        }
        .wp-video .mejs-overlay-play .mejs-overlay-button .progress__circle,
        .elementor-widget-video .elementor-custom-embed-play .progress__circle,
        .wp-video .mejs-overlay-play .mejs-overlay-button .progress__path,
        .elementor-widget-video .elementor-custom-embed-play .progress__path,
        .industrium-content-slider-widget .industrium-video-button .elementor-custom-embed-play .eicon-play svg,
        .elementor-widget-video .elementor-custom-embed-play svg,
        .project-listing-wrapper.text-position-inside .project-item-wrapper .industrium-button svg {
            stroke: ' . esc_attr($contrast_dark_text_color) . ';
        }
        .industrium-content-slider-widget .owl-dots .owl-dot.active span:before {
            border-color: ' . esc_attr($contrast_dark_text_color) . ';
        }
        .project-listing-wrapper.text-position-inside .project-item-wrapper .industrium-button {
            background-image: linear-gradient(0deg, ' . esc_attr($contrast_dark_text_color) . ' 0%, ' . esc_attr($contrast_dark_text_color) . ' 100%);
        }        
    ';
}

$contrast_light_text_color = industrium_get_prefered_option('contrast_light_text_color');
if ( !empty($contrast_light_text_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper .input-floating-wrap .floating-placeholder,
        .slide-sidebar-wrapper input[type="text"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper input[type="email"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper input[type="url"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper input[type="password"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper input[type="search"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper input[type="tel"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper input[type="number"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper input[type="date"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper input[type="month"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper input[type="week"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper input[type="time"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper input[type="datetime"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper input[type="datetime-local"]::-webkit-input-placeholder, 
        .slide-sidebar-wrapper textarea::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]::-webkit-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea::-webkit-input-placeholder,
        .slide-sidebar-wrapper .widget_industrium_featured_posts_widget .featured-posts-item-date,
        .slide-sidebar-wrapper .widget_recent_entries ul li .post-date,
        .slide-sidebar-wrapper .wp-block-latest-posts li .wp-block-latest-posts__post-date,
        .slide-sidebar-wrapper .widget_rss .rss-date,
        .slide-sidebar-wrapper .wp-block-rss .wp-block-rss__item-publish-date,
        .slide-sidebar-wrapper .widget_calendar table thead th,
        .slide-sidebar-wrapper .wp-block-latest-comments li .wp-block-latest-comments__comment-meta,        
        .widget_calendar table tbody td, 
        .wp-block-calendar table tbody td,
        .slide-sidebar-wrapper .widget_industrium_contacts_widget .field-label {
             color: ' . esc_attr($contrast_light_text_color) . ';
        }
        
        .slide-sidebar-wrapper input[type="text"]:-moz-placeholder,
        .slide-sidebar-wrapper input[type="url"]:-moz-placeholder,
        .slide-sidebar-wrapper input[type="email"]:-moz-placeholder,
        .slide-sidebar-wrapper input[type="password"]:-moz-placeholder,
        .slide-sidebar-wrapper input[type="search"]:-moz-placeholder,
        .slide-sidebar-wrapper input[type="tel"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="number"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="date"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="month"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="week"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="time"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="datetime"]:-moz-placeholder, 
        .slide-sidebar-wrapper input[type="datetime-local"]:-moz-placeholder, 
        .slide-sidebar-wrapper textarea:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]:-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea:-moz-placeholder {
             color: ' . esc_attr($contrast_light_text_color) . ';
        }
        
        .slide-sidebar-wrapper input[type="text"]::-moz-placeholder,
        .slide-sidebar-wrapper input[type="url"]::-moz-placeholder,
        .slide-sidebar-wrapper input[type="email"]::-moz-placeholder,
        .slide-sidebar-wrapper input[type="password"]::-moz-placeholder,
        .slide-sidebar-wrapper input[type="search"]::-moz-placeholder,
        .slide-sidebar-wrapper input[type="tel"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="number"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="date"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="month"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="week"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="time"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="datetime"]::-moz-placeholder, 
        .slide-sidebar-wrapper input[type="datetime-local"]::-moz-placeholder, 
        .slide-sidebar-wrapper textarea::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]::-moz-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea::-moz-placeholder {
             color: ' . esc_attr($contrast_light_text_color) . ';
        }
        
        .slide-sidebar-wrapper input[type="text"]:-ms-input-placeholder,
        .slide-sidebar-wrapper input[type="email"]:-ms-input-placeholder,
        .slide-sidebar-wrapper input[type="url"]:-ms-input-placeholder,
        .slide-sidebar-wrapper input[type="password"]:-ms-input-placeholder,
        .slide-sidebar-wrapper input[type="search"]:-ms-input-placeholder,
        .slide-sidebar-wrapper input[type="tel"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="number"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="date"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="month"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="week"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="time"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="datetime"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper input[type="datetime-local"]:-ms-input-placeholder, 
        .slide-sidebar-wrapper textarea:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]:-ms-input-placeholder,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea:-ms-input-placeholder {
            color: ' . esc_attr($contrast_light_text_color) . ';
        }
        .industrium-content-slider-widget .slider-progress-wrapper.progress-direction-vertical .slider-progress-track {
            background-color: ' . esc_attr($contrast_light_text_color) . ';
        }
        .slide-sidebar-wrapper .widget_categories ul > li:before, 
        .slide-sidebar-wrapper ul.wp-block-categories > li:before,
        .slide-sidebar-wrapper .widget_archive ul li:before,
        .slide-sidebar-wrapper .wp-block-archives li:before,
        .slide-sidebar-wrapper .widget_recent_comments ul .recentcomments:before,
        .slide-sidebar-wrapper .widget_pages .widget-wrapper > ul > li:before,
        .slide-sidebar-wrapper .widget_meta ul li:before,
        .slide-sidebar-wrapper .wp-block-latest-comments li:before {
            background-color: rgba(' . esc_attr(industrium_hex2rgb($contrast_light_text_color)) . ', 0.6);
        }
    ';
}

$contrast_accent_text_color = industrium_get_prefered_option('contrast_accent_text_color');
if ( !empty($contrast_accent_text_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper a:hover,
        .header .main-menu ul.sub-menu > li > a:hover,
        .header .main-menu ul.sub-menu > li.current-menu-ancestor > a,
        .header .main-menu ul.sub-menu > li.current-menu-parent > a,
        .header .main-menu ul.sub-menu > li.current-menu-item > a,
        .widget_media_audio .mejs-container .mejs-button > button:hover,
        .mejs-audio.mejs-container .mejs-button > button:hover,
        .wp-video .mejs-container .mejs-button > button:hover,
        .slide-sidebar-wrapper .widget_industrium_banner_widget .industrium-contacts-widget-field:before,
        .slide-sidebar-wrapper .widget_search .search-form .search-form-icon:hover,
        .slide-sidebar-wrapper .widget_categories ul > li:hover, 
        .slide-sidebar-wrapper .widget_categories ul li:hover > a, 
        .slide-sidebar-wrapper ul.wp-block-categories li:hover:before,
        .slide-sidebar-wrapper ul.wp-block-categories li:hover > a,
        .slide-sidebar-wrapper .widget_industrium_featured_posts_widget .featured-posts-item-link:hover,
        .slide-sidebar-wrapper .widget_archive ul li:hover > a,
        .slide-sidebar-wrapper .widget_archive ul > li:hover,
        .slide-sidebar-wrapper .wp-block-archives li:hover > a,   
        .slide-sidebar-wrapper .wp-block-archives > li:hover,     
        .slide-sidebar-wrapper .widget_pages .widget-wrapper > ul li:hover > a,
        .slide-sidebar-wrapper .widget_meta ul li:hover > a,
        .slide-sidebar-wrapper .widget_recent_entries ul li a:hover,
        .slide-sidebar-wrapper .wp-block-latest-posts li a:hover,
        .slide-sidebar-wrapper .widget_recent_comments ul .recentcomments a:hover,
        .slide-sidebar-wrapper .wp-block-latest-comments li a:hover,
        .slide-sidebar-wrapper .widget_calendar .wp-calendar-nav a:hover,
        .slide-sidebar-wrapper .widget_rss ul a.rsswidget:hover,
        .slide-sidebar-wrapper .wp-block-rss .wp-block-rss__item-title a:hover,
        .slide-sidebar-wrapper .widget .widget-title a:hover,
        .industrium-content-slider-widget .bottom-area .contacts .contact-item a:hover,
        .industrium-content-slider-widget .bottom-area .contacts .contact-item:before,
        .slide-sidebar-wrapper .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button.has-icon:hover,        
        .industrium-testimonial-carousel-widget .testimonial-carousel-wrapper .testimonials-heading i,
        .slide-sidebar-wrapper .wp-block-loginout a:hover,        
        .widget_calendar table caption, 
        .wp-block-calendar table caption,        
        body .content-wrapper .widget_calendar table tbody td#today a:hover, 
        body .content-wrapper .wp-block-calendar table tbody td#today a:hover,
        .block-editor-block-list__layout .widget_calendar table tbody td#today a:hover, 
        .block-editor-block-list__layout .wp-block-calendar table tbody td#today a:hover,
        .slide-sidebar-wrapper .widget_industrium_contacts_widget .industrium-contacts-widget-email a,
        .industrium-content-slider-widget .content-slider-scroll-down:hover,
        .project-listing-wrapper .project-item-wrapper .project-item-content .project-item-button,
        .slide-sidebar-wrapper.mc4wp-form .mc4wp-form-fields input[type="submit"], 
        .slide-sidebar-wrapper .mc4wp-form .mc4wp-form-fields button,
        .project-listing-wrapper.project-slider-listing .project-item-button,
        .portfolio-listing-wrapper .portfolio-item-wrapper .post-categories .post-category-item {
            color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-current,
        .mejs-audio .mejs-controls .mejs-time-rail .mejs-time-current,
        .wp-video .mejs-controls .mejs-time-rail .mejs-time-current,
        .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .mejs-audio .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .wp-video .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .slide-sidebar-wrapper .widget_nav_menu ul li a:before, 
        .slide-sidebar-wrapper .widget_industrium_nav_menu_widget ul li a:before,
        .slide-sidebar-wrapper .widget_categories ul > li:hover:before, 
        .slide-sidebar-wrapper .widget_archive ul li:hover:before,
        .slide-sidebar-wrapper .wp-block-archives li:hover:before,
        .slide-sidebar-wrapper .widget_recent_comments ul .recentcomments:hover:before,
        .slide-sidebar-wrapper .widget_pages .widget-wrapper > ul > li:hover:before,
        .slide-sidebar-wrapper .widget_meta ul li:hover:before,
        .slide-sidebar-wrapper .wp-block-latest-comments li:hover:before,
        .slide-sidebar-wrapper .wp-block-gallery .wp-block-image a:before,
        .post-comment-buttons a.comment-edit-link:hover,
        .post-comment-buttons a.comment-reply-link,
        .team-item .team-item-socials .socials-trigger,
        .team-item .team-item-socials .team-socials.wrapper-socials,
        .industrium-price-item-widget .price-item .price-item-best-label,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"],
        .elementor-widget-industrium_services_listing.view_type-2 .service-item:hover .service-item-content,
        .industrium-content-slider-widget .bottom-area .slider-progress-wrapper .slider-progress-track .progress,
        .industrium-content-slider-widget .slider-progress-wrapper.progress-direction-vertical .slider-progress-track .progress,
        .project-masonry-listing.text-position-inside .project-item-link:hover .project-item-content,
        .project-grid-listing.text-position-inside .project-item-link:hover .project-item-content,
        .project-listing-wrapper.project-slider-listing.view-type-2 .slider-item .button-container,
        .portfolio-grid-listing .portfolio-item-wrapper .portfolio-item-link .portfolio-item-content-inner:before,
        .portfolio-masonry-listing .portfolio-item-wrapper .portfolio-item-link .portfolio-item-content-inner:before,
        .elementor-widget-image .elementor-image .elementor-image-badge {
            background-color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .mejs-audio .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        .wp-video .mejs-controls .mejs-time-rail .mejs-time-handle-content,
        body .content-wrapper .widget_calendar table tbody td#today:before, 
        body .content-wrapper .wp-block-calendar table tbody td#today:before,
        .block-editor-block-list__layout .widget_calendar table tbody td#today:before, 
        .block-editor-block-list__layout .wp-block-calendar table tbody td#today:before,
        .slide-sidebar-wrapper .widget_calendar table tbody td#today:before, 
        .slide-sidebar-wrapper .wp-block-calendar table tbody td#today:before {
            border-color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .widget_media_audio .mejs-controls .mejs-time-rail .mejs-time-hovered,
        .mejs-audio .mejs-controls .mejs-time-rail .mejs-time-hovered,
        .wp-video .mejs-controls .mejs-time-rail .mejs-time-hovered {
             background-color: rgba(' . esc_attr(industrium_hex2rgb($contrast_accent_text_color)) . ', 0.4);
        }
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]::-webkit-slider-thumb {
            background-color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]::-moz-range-thumb {
             background-color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]::-ms-thumb {
             background-color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .wpforms-field-number-slider input[type="range"]:focus::-ms-thumb {
             background-color: ' . esc_attr($contrast_accent_text_color) . ';
        }
        .wp-video .mejs-overlay-play .mejs-overlay-button:hover svg,
        .industrium-content-slider-widget .bottom-area .content-slider-video .elementor-custom-embed-play:hover .eicon-play svg {
            stroke: ' . esc_attr($contrast_accent_text_color) . ';
        }        
        .project-slider-listing.view-type-2 .slider-item .slide-counter-big,
        .result-box .result-box-value  {
            -webkit-text-stroke: 1px ' . esc_attr($contrast_accent_text_color) . ';
        }
    ';
}

$contrast_border_color = industrium_get_prefered_option('contrast_border_color');
if ( !empty($contrast_border_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper input[type="text"],
        .slide-sidebar-wrapper input[type="email"],
        .slide-sidebar-wrapper input[type="url"],
        .slide-sidebar-wrapper input[type="password"],
        .slide-sidebar-wrapper input[type="search"],
        .slide-sidebar-wrapper input[type="number"],
        .slide-sidebar-wrapper input[type="tel"],
        .slide-sidebar-wrapper input[type="range"],
        .slide-sidebar-wrapper input[type="date"],
        .slide-sidebar-wrapper input[type="month"],
        .slide-sidebar-wrapper input[type="week"],
        .slide-sidebar-wrapper input[type="time"],
        .slide-sidebar-wrapper input[type="datetime"],
        .slide-sidebar-wrapper input[type="datetime-local"],
        .slide-sidebar-wrapper input[type="color"],
        .slide-sidebar-wrapper textarea,
        .slide-sidebar-wrapper .select2-container .select2-selection--single,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form select,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea,
        .slide-sidebar-wrapper .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .select-wrap,
        .slide-sidebar-wrapper .select-wrap,
        .slide-sidebar-wrapper .select2-dropdown,
        .slide-sidebar-wrapper .select2-container--default .select2-search--dropdown .select2-search__field {
            border-color: ' . esc_attr($contrast_border_color) . ';
        }
    ';
}

$contrast_border_hover_color = industrium_get_prefered_option('contrast_border_hover_color');
if ( !empty($contrast_border_hover_color) ) {
    $industrium_custom_css .= '     
        .slide-sidebar-wrapper input[type="text"]:focus,
        .slide-sidebar-wrapper input[type="email"]:focus,
        .slide-sidebar-wrapper input[type="url"]:focus,
        .slide-sidebar-wrapper input[type="password"]:focus,
        .slide-sidebar-wrapper input[type="search"]:focus,
        .slide-sidebar-wrapper input[type="number"]:focus,
        .slide-sidebar-wrapper input[type="tel"]:focus,
        .slide-sidebar-wrapper input[type="range"]:focus,
        .slide-sidebar-wrapper input[type="date"]:focus,
        .slide-sidebar-wrapper input[type="month"]:focus,
        .slide-sidebar-wrapper input[type="week"]:focus,
        .slide-sidebar-wrapper input[type="time"]:focus,
        .slide-sidebar-wrapper input[type="datetime"]:focus,
        .slide-sidebar-wrapper input[type="datetime-local"]:focus,
        .slide-sidebar-wrapper input[type="color"]:focus,
        .slide-sidebar-wrapper textarea:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .select-wrap:focus-within,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"]:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form select:focus,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea:focus,
        .slide-sidebar-wrapper .wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper:focus-within,
        .slide-sidebar-wrapper .select-wrap:focus-within {
            border-color: ' . esc_attr($contrast_border_hover_color) . ';
        }  
        .slide-sidebar-wrapper .widget_media_audio .mejs-container, 
        .slide-sidebar-wrapper .widget_media_audio .mejs-container .mejs-controls, 
        .slide-sidebar-wrapper .widget_media_audio .mejs-embed, 
        .slide-sidebar-wrapper .widget_media_audio .mejs-embed body,
        .slide-sidebar-wrapper .wp-video .mejs-container, 
        .slide-sidebar-wrapper .wp-video .mejs-container .mejs-controls, 
        .slide-sidebar-wrapper .wp-video .mejs-embed, 
        .slide-sidebar-wrapper .wp-video .mejs-embed body,
        .slide-sidebar-wrapper .mejs-volume-button > .mejs-volume-slider {
            background-color: ' . esc_attr($contrast_border_hover_color) . ';
        }
    ';
}

$contrast_background_color = industrium_get_prefered_option('contrast_background_color');
if ( !empty($contrast_background_color) ) {
    $industrium_custom_css .= '
        .header .main-menu > li ul.sub-menu,
        .content-wrapper .widget_media_audio .mejs-container, 
        .content-wrapper .widget_media_audio .mejs-container .mejs-controls, 
        .content-wrapper .widget_media_audio .mejs-embed, 
        .content-wrapper .widget_media_audio .mejs-embed body,
        .content-wrapper .mejs-audio.mejs-container, 
        .content-wrapper .mejs-audio.mejs-container .mejs-controls, 
        .content-wrapper .mejs-audio .mejs-embed, 
        .content-wrapper .mejs-audio .mejs-embed body,
        .content-wrapper .wp-video .mejs-container, 
        .content-wrapper .wp-video .mejs-container .mejs-controls, 
        .content-wrapper .wp-video .mejs-embed, 
        .content-wrapper .wp-video .mejs-embed body,
        .content-wrapper .mejs-volume-button > .mejs-volume-slider,        
        body .content-wrapper .widget_calendar .calendar_wrap,
        body .content-wrapper .wp-block-calendar,

        .block-editor-block-list__layout .widget_media_audio .mejs-container, 
        .block-editor-block-list__layout .widget_media_audio .mejs-container .mejs-controls, 
        .block-editor-block-list__layout .widget_media_audio .mejs-embed, 
        .block-editor-block-list__layout .widget_media_audio .mejs-embed body,
        .block-editor-block-list__layout .mejs-audio.mejs-container, 
        .block-editor-block-list__layout .mejs-audio.mejs-container .mejs-controls, 
        .block-editor-block-list__layout .mejs-audio .mejs-embed, 
        .block-editor-block-list__layout .mejs-audio .mejs-embed body,
        .block-editor-block-list__layout .wp-video .mejs-container, 
        .block-editor-block-list__layout .wp-video .mejs-container .mejs-controls, 
        .block-editor-block-list__layout .wp-video .mejs-embed, 
        .block-editor-block-list__layout .wp-video .mejs-embed body,
        .block-editor-block-list__layout .mejs-volume-button > .mejs-volume-slider,        
        .block-editor-block-list__layout .widget_calendar .calendar_wrap,
        .block-editor-block-list__layout .wp-block-calendar,
        .slide-sidebar-wrapper,
        .slide-sidebar-wrapper .widget_calendar table tbody td#today:before, 
        .slide-sidebar-wrapper .wp-block-calendar table tbody td#today:before,
        .single-post .post-meta-footer:not(:first-child):before,
        .team-biography-wrapper .team-biography-text:before,
        .post-meta-header .post-meta-item .post-meta-item-month-year,
        .team-item .team-item-socials:before,
        .industrium-price-item-widget .price-item .price-item-button-container .industrium-button,
        .slide-sidebar-wrapper .select-wrap select,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form .select-wrap select,
        .slide-sidebar-wrapper input[type="text"],
        .slide-sidebar-wrapper input[type="email"],
        .slide-sidebar-wrapper input[type="url"],
        .slide-sidebar-wrapper input[type="password"],
        .slide-sidebar-wrapper input[type="search"],
        .slide-sidebar-wrapper input[type="number"],
        .slide-sidebar-wrapper input[type="tel"],
        .slide-sidebar-wrapper input[type="range"],
        .slide-sidebar-wrapper input[type="date"],
        .slide-sidebar-wrapper input[type="month"],
        .slide-sidebar-wrapper input[type="week"],
        .slide-sidebar-wrapper input[type="time"],
        .slide-sidebar-wrapper input[type="datetime"],
        .slide-sidebar-wrapper input[type="datetime-local"],
        .slide-sidebar-wrapper input[type="color"],
        .slide-sidebar-wrapper textarea,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="text"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="email"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="url"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="password"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="search"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="number"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="tel"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="date"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="month"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="week"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="time"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="datetime-local"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="color"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form select,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form textarea,
        .elementor-widget-industrium_services_listing.view_type-2 .service-item-content,
        .industrium-content-slider-widget .content-slider-scroll-down,
        .industrium-content-slider-widget .bottom-area .content-slider-contacts,
        .industrium-content-slider-widget .bottom-area .owl-dots-wrapper,
        .project-masonry-listing.text-position-inside .project-item-wrapper .project-item-content,
        .project-grid-listing.text-position-inside .project-item-wrapper .project-item-content,
        .project-listing-wrapper.project-slider-listing.view-type-2 .slider-item .project-item-content,
        .portfolio-listing-wrapper .portfolio-item-wrapper .post-categories .post-category-item,
        .portfolio-listing-wrapper .portfolio-item-wrapper .portfolio-item-link .portfolio-item-media:before,
        .portfolio-slider-wrapper .archive-listing .slider-next-button-wrapper .slider-next-button:hover,
        .results-wrapper .results-boxes,
        .results-boxes .result-boxes-decoration:before,
        .decoration-widget .decoration-container .industrium-decoration > div:nth-child(2n),
        .cursor_drag .cursor-bg,        
        .post-comment-buttons a.comment-reply-link:hover,                
        .post-comment-buttons a.comment-edit-link,
        .elementor-widget-image .elementor-image a .hovered-caption {
            background-color: ' . esc_attr($contrast_background_color) . ';
        }
        .slide-sidebar-wrapper .wrapper-socials a:hover,
        .error-404-container .wrapper-socials a:hover,
        .industrium-price-item-widget .price-item.active .price-item-button-container .industrium-button:hover,
        .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-color) .wp-block-social-link a:hover svg {
            color: ' . esc_attr($contrast_background_color) . ';
        }
        .mini-cart .mini-cart-panel,
        .mobile-header-menu-container,        
        .post-comments-list .post-comment-wrapper.depth-1,
        .post-comments-list > .comment-respond:not(:first-child),
        .single-service .help-item,
        .single-service .help-item:last-child,
        .industrium-price-item-widget .price-item,
        .elementor-widget-industrium_step_carousel .step-item,
        .portfolio-slider-listing .portfolio-item-wrapper .portfolio-item-content .portfolio-item-content-inner {
            border-color: ' . esc_attr($contrast_background_color) . ';
        }
        .wp-video .mejs-overlay-play .mejs-overlay-button svg,
        .industrium-content-slider-widget .bottom-area .content-slider-video .elementor-custom-embed-play .eicon-play svg {
            stroke: ' . esc_attr($contrast_background_color) . ';
        }
    ';
}

$contrast_background_alter_color = industrium_get_prefered_option('contrast_background_alter_color');
if ( !empty($contrast_background_alter_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper input[type="checkbox"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="checkbox"],
        .woocommerce .slide-sidebar-wrapper form .form-row input[type="checkbox"].input-checkbox,

        .slide-sidebar-wrapper .wp-block-calendar,
        .slide-sidebar-wrapper .widget_calendar .calendar_wrap,        
        .content-wrapper .widget_calendar table tbody td#today:before, 
        .content-wrapper .wp-block-calendar table tbody td#today:before,
        .block-editor-block-list__layout .widget_calendar table tbody td#today:before, 
        .block-editor-block-list__layout .wp-block-calendar table tbody td#today:before,
        .slide-sidebar-wrapper input[type="radio"],
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="radio"] {
            background-color: ' . esc_attr($contrast_background_alter_color) . ';
        }
    ';
}

$contrast_button_text_color = industrium_get_prefered_option('contrast_button_text_color');
if ( !empty($contrast_button_text_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper .industrium-button,
        .slide-sidebar-wrapper .button,
        .slide-sidebar-wrapper input[type="submit"],
        .slide-sidebar-wrapper input[type="reset"],
        .slide-sidebar-wrapper input[type="button"],
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form input[type=submit], 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form button[type=submit], 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form .wpforms-page-button,
        .slide-sidebar-wrapper button,
        .slide-sidebar-wrapper .widget_mc4wp_form_widget .mc4wp-form .mc4wp-form-fields button,
        .slide-sidebar-wrapper .widget .mc4wp-form .mc4wp-form-fields button,
        .slide-sidebar-wrapper .widget_calendar table tbody td#today:before,
        .slide-sidebar-wrapper .wp-block-gallery .blocks-gallery-grid .blocks-gallery-item a:after, 
        .slide-sidebar-wrapper .media_gallery .blocks-gallery-grid .blocks-gallery-item a:after,
        .slide-sidebar-wrapper .gallery .gallery-item .gallery-icon a:after,
        .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color),
        .slide-sidebar-wrapper .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color),
        .slide-sidebar-wrapper input[type="checkbox"]:checked:before,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="checkbox"]:checked:before,
        .woocommerce .slide-sidebar-wrapper form .form-row input[type="checkbox"].input-checkbox:checked:before,
        .industrium-price-item-widget .price-item .price-item-button-container .industrium-button,
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form input[type=submit], 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form button[type=submit], 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form .wpforms-page-button {
            color: ' . esc_attr($contrast_button_text_color) . ';
        }
        .slide-sidebar-wrapper input[type="radio"]:checked:before,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="radio"]:checked:before {
            background-color: ' . esc_attr($contrast_button_text_color) . ';
        }
    ';
}

$contrast_button_border_color = industrium_get_prefered_option('contrast_button_border_color');
if ( !empty($contrast_button_border_color) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper .industrium-button:after, 
        .slide-sidebar-wrapper button:not(.customize-partial-edit-shortcut-button):after, 
        .slide-sidebar-wrapper input[type="submit"]:after, 
        .slide-sidebar-wrapper input[type="button"]:after, 
        .slide-sidebar-wrapper input[type="reset"]:after,
        .wp-video .mejs-overlay-play .mejs-overlay-button:before,
        .elementor-widget-video .elementor-custom-embed-play:before,
        .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background):after,
        .slide-sidebar-wrapper .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background):after {
            color: ' . esc_attr($contrast_button_border_color) . ';
        }

        .error-404-container .wrapper-socials  a:after,
        .slide-sidebar-wrapper input[type="radio"]:checked:before,
        .slide-sidebar-wrapper div.wpforms-container.wpforms-container-full .wpforms-form input[type="radio"]:checked:before,
        .widget_industrium_banner_widget .banner-widget-wrapper.banner-contrast-colors,
        .slide-sidebar-wrapper .wrapper-socials a:after,
        .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-background-color) .wp-block-social-link:after,
        .industrium-price-item-widget .price-item.active .price-item-button-container .industrium-button,
        .industrium-content-slider-widget .industrium-content-wrapper-3 .industrium-button:before,
        .industrium-content-slider-widget .industrium-content-wrapper-3 .industrium-button .industrium-button-text:before {
            background-color: ' . esc_attr($contrast_button_border_color) . ';
        }
        .slide-sidebar-wrapper .wrapper-socials li,
        .wp-block-social-links:not(.is-style-logos-only):not(.is-style-pill-shape):not(.has-icon-background-color) .wp-block-social-link,
        .industrium-price-item-widget .price-item.active,
        .industrium-content-slider-widget .industrium-content-wrapper-3 .industrium-button,
        .error-404-container .wrapper-socials li {
            border-color: ' . esc_attr($contrast_button_border_color) . ';
        }
        .slide-sidebar-wrapper .wp-block-gallery .blocks-gallery-grid .blocks-gallery-item a:before, 
        .slide-sidebar-wrapper .media_gallery .blocks-gallery-grid .blocks-gallery-item a:before,
        .slide-sidebar-wrapper .gallery .gallery-item .gallery-icon a:before,
        .widget_instagram-feed-widget #sb_instagram #sbi_images .sbi_photo:before, 
        .widget_instagram-feed-widget#sb_instagram #sbi_images .sbi_photo:before, 
        .widget #sb_instagram #sbi_images .sbi_photo:before, 
        .widget#sb_instagram #sbi_images .sbi_photo:before {
             background-color: rgba(' . esc_attr(industrium_hex2rgb($contrast_button_border_color)) . ', 0.5);
        } 
        .slide-sidebar-wrapper button:not(.customize-partial-edit-shortcut-button),
        .slide-sidebar-wrapper .industrium-button,
        .sidebar .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background),
        .slide-sidebar-wrapper .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background),
        .slide-sidebar-wrapper .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background),
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form input[type=submit], 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form button[type=submit], 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form .wpforms-page-button {
            background-image: linear-gradient(0deg, ' . esc_attr($contrast_button_border_color) . ' 0%, ' . esc_attr($contrast_button_border_color) . ' 100%);
        }
        .slide-sidebar-wrapper button:not(.customize-partial-edit-shortcut-button) svg,
        .slide-sidebar-wrapper .industrium-button svg,
        .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background) svg,
        .slide-sidebar-wrapper .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-background) svg {
            stroke: ' . esc_attr($contrast_button_border_color) . ';
        }
    ';
}

$contrast_button_background_color = industrium_get_prefered_option('contrast_button_background_color');
if ( !empty($contrast_button_background_color) ) {
    $industrium_custom_css .= '
        
    ';
}

$contrast_button_text_hover = industrium_get_prefered_option('contrast_button_text_hover');
if ( !empty($contrast_button_text_hover) ) {
    $industrium_custom_css .= '
        .slide-sidebar-wrapper .industrium-button:hover,
        .slide-sidebar-wrapper .button:hover,
        .wp-block-cover .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color):hover,
        .slide-sidebar-wrapper input[type="submit"]:hover,
        .slide-sidebar-wrapper input[type="reset"]:hover,
        .slide-sidebar-wrapper input[type="button"]:hover,
        .slide-sidebar-wrapper button:hover,
        .slide-sidebar-wrapper .widget_tag_cloud .tagcloud .tag-cloud-link:hover,
        .slide-sidebar-wrapper .select2-container--default .select2-results__option[aria-selected=true], 
        .slide-sidebar-wrapper .select2-container--default .select2-results__option[data-selected=true],
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form input[type=submit]:hover, 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form button[type=submit]:hover, 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form .wpforms-page-button:hover,
        .slide-sidebar-wrapper .wp-block-button:not(.is-style-fill) .wp-block-button__link:not(.has-text-color):hover,
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form input[type=submit]:hover, 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form button[type=submit]:hover, 
        .slide-sidebar-wrapper div.wpforms-container-full .wpforms-form .wpforms-page-button:hover {
            color: ' . esc_attr($contrast_button_text_hover) . ';
        }
    ';
}

$contrast_button_border_hover = industrium_get_prefered_option('contrast_button_border_hover');
if ( !empty($contrast_button_border_hover) ) {
    $industrium_custom_css .= '
        
    ';
}

$contrast_button_background_hover = industrium_get_prefered_option('contrast_button_background_hover');
if ( !empty($contrast_button_background_hover) ) {
    $industrium_custom_css .= '
    ';
}

if ( !empty($contrast_button_background_hover) && !empty($contrast_button_background_color) ) {
    $industrium_custom_css .= '
    ';
}
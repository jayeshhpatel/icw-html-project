<?php

// --------------------------- //
// ------- WooCommerce ------- //
// --------------------------- //
if ( class_exists('WooCommerce') ) {

    # Header Colors
    $header_accent_text_color = industrium_get_prepared_option('header_accent_text_color', 'standard_accent_text_color', 'header_customize');
    if ( !empty($header_accent_text_color) ) {
        $industrium_custom_css .= '
            .header .mini-cart .mini-cart-count > span, 
            .mobile-header .mini-cart .mini-cart-count > span, 
            .mobile-header-menu-container .mini-cart .mini-cart-count > span {
                background-color: ' . esc_attr($header_accent_text_color) . ';
            }
        ';
    }

    $header_button_text_color = industrium_get_prepared_option('header_button_text_color', 'standard_button_text_color', 'header_customize');
    if ( !empty($header_button_text_color) ) {
        $industrium_custom_css .= '
            .header .woocommerce a.button, 
            .woocommerce .header a.button {
                color: ' . esc_attr($header_button_text_color) . ';
            }
        ';
    }

    $header_background_color = industrium_get_prepared_option('header_background_color', 'standard_background_color', 'header_customize');
    if ( !empty($header_background_color) ) {
        $industrium_custom_css .= '
            .mini-cart .mini-cart-count > span {
                color: ' . esc_attr($header_background_color) . ';
            }
            .mini-cart .mini-cart-count > span {
                border-color: ' . esc_attr($header_background_color) . ';
            }
        ';
    }

    $header_border_color = industrium_get_prepared_option('header_border_color', 'standard_border_color', 'header_customize');
    if ( !empty($header_border_color) ) {
        $industrium_custom_css .= '
            .header .mini-cart .mini-cart-panel .cart_list li {
                border-color: ' . esc_attr($header_border_color) . ';
            }
        ';
    }
            
    $header_button_border_color = industrium_get_prepared_option('header_button_border_color', 'standard_button_border_color', 'header_customize');
    if ( !empty($header_button_border_color) ) {
        $industrium_custom_css .= '        
            .header .woocommerce a.button:after, 
            .woocommerce .header a.button:after {
                color: ' . esc_attr($header_button_border_color) . ';
            }
            .header .woocommerce a.button, 
            .woocommerce .header a.button {
                background-image: linear-gradient(0deg, ' . esc_attr($header_button_border_color) . ' 0%, ' . esc_attr($header_button_border_color) . ' 100%);
            }
            .header .woocommerce a.button svg, 
            .woocommerce .header a.button svg {
                stroke: ' . esc_attr($header_button_border_color) . ';
            }
        ';
    }

    $header_button_background_color = industrium_get_prepared_option('header_button_background_color', 'standard_button_background_color', 'header_customize');
    if ( !empty($header_button_background_color) ) {
        $industrium_custom_css .= '';
    }

    $header_button_text_hover = industrium_get_prepared_option('header_button_text_hover', 'standard_button_text_hover', 'header_customize');
    if ( !empty($header_button_text_hover) ) {
        $industrium_custom_css .= '
            .header .mini-cart .mini-cart-panel .woocommerce-mini-cart-buttons a.button:not(.checkout) {
                color: ' . esc_attr($header_button_text_hover) . ';
            }
        ';
    }

    $header_button_border_hover = industrium_get_prepared_option('header_button_border_hover', 'standard_button_border_hover', 'header_customize');
    if ( !empty($header_button_border_hover) ) {
        $industrium_custom_css .= '
            .header .mini-cart .mini-cart-panel .woocommerce-mini-cart-buttons a.button:not(.checkout):after {
                color: ' . esc_attr($header_button_border_hover) . ';
            }
            .header .mini-cart .mini-cart-panel .woocommerce-mini-cart-buttons a.button:not(.checkout) {
                background-image: linear-gradient(0deg, ' . esc_attr($header_button_border_hover) . ' 0%, ' . esc_attr($header_button_border_hover) . ' 100%);
            }
            .header .mini-cart .mini-cart-panel .woocommerce-mini-cart-buttons a.button:not(.checkout) svg {
                stroke: ' . esc_attr($header_button_border_hover) . ';
            }
        ';
    }

    $header_button_background_hover = industrium_get_prepared_option('header_button_background_hover', 'standard_button_background_hover', 'header_customize');
    if ( !empty($header_button_background_hover) ) {
        $industrium_custom_css .= '';
    }


    # Footer Colors
    $footer_dark_text_color = industrium_get_prepared_option('footer_dark_text_color', 'contrast_dark_text_color', 'footer_customize');
    if ( !empty($footer_dark_text_color) ) {
        $industrium_custom_css .= '
            .footer .widget_product_search .woocommerce-product-search button,
            .footer .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button,
            .footer .widget_product_categories .post-count,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item .wc-block-product-categories-list-item-count,
            .footer ul.product_list_widget li .product-title,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item > a,
            .footer .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title {
                color: ' . esc_attr($footer_dark_text_color) . ';
            }
        ';
    }

    $footer_light_text_color = industrium_get_prepared_option('footer_light_text_color', 'contrast_light_text_color', 'footer_customize');
    if ( !empty($footer_light_text_color) ) {
        $industrium_custom_css .= '
            .footer .widget_product_categories li.cat-item-hierarchical,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item .wc-block-product-categories-list-item-count,
            .footer .widget ul.product_list_widget li .price_wrapper del,
            .footer-widgets .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__published-date {
                color: ' . esc_attr($footer_light_text_color) . ';
            }
        ';
    }

    $footer_accent_text_color = industrium_get_prepared_option('footer_accent_text_color', 'contrast_accent_text_color', 'footer_customize');
    if ( !empty($footer_accent_text_color) ) {
        $industrium_custom_css .= '
            .footer .widget ul.product_list_widget li .price_wrapper del,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item:hover,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item:hover > a,
            .footer .wc-block-product-categories-list .wc-block-product-categories-list-item:hover .wc-block-product-categories-list-item-count {
                color: ' . esc_attr($footer_accent_text_color) . ';
            }
        ';
    }

    $footer_border_color = industrium_get_prepared_option('footer_border_color', 'contrast_border_color', 'footer_customize');
    if ( !empty($footer_border_color) ) {
        $industrium_custom_css .= '
            .footer .widget ul.product_list_widget li a imgl,
            .footer-widgets .widget div[class*="wp-block-"].has-content .wc-block-review-list-item__item:not(:first-child) {
                border-color: ' . esc_attr($footer_border_color) . ';
            }
        ';
    }

    $footer_border_hover_color = industrium_get_prepared_option('footer_border_hover_color', 'contrast_border_hover_color', 'footer_customize');
    if ( !empty($footer_border_hover_color) ) {
        $industrium_custom_css .= '
            .footer .widget ul.product_list_widget li a:hover img {
                border-color: ' . esc_attr($footer_border_hover_color) . ';
            }
        ';
    }

    $footer_background_color = industrium_get_prepared_option('footer_background_color', 'contrast_background_color', 'footer_customize');
    if ( !empty($footer_background_color) ) {
        $industrium_custom_css .= '';
    }

    $footer_button_text_color = industrium_get_prepared_option('footer_button_text_color', 'contrast_button_text_color', 'footer_customize');
    if ( !empty($footer_button_text_color) ) {
        $industrium_custom_css .= '
            .footer .woocommerce a.button,
            .woocommerce .footer a.button,
            .footer .woocommerce button.button,
            .woocommerce .footer button.button,
            .footer .woocommerce input.button,
            .woocommerce .footer input.button,
            .footer .woocommerce #respond input#submit,
            .woocommerce .footer #respond input#submit,
            .footer .woocommerce .added_to_cart,
            .woocommerce .footer .added_to_cart {
                color: ' . esc_attr($footer_button_text_color) . ';
            }
        ';
    }

    $footer_button_border_color = industrium_get_prepared_option('footer_button_border_color', 'contrast_button_border_color', 'footer_customize');
    if ( !empty($footer_button_border_color) ) {
        $industrium_custom_css .= '
            .woocommerce .footer a.button, 
            .woocommerce .footer a.button.alt, 
            .woocommerce .footer button.button, 
            .woocommerce .footer button.button.alt, 
            .woocommerce .footer input.button, 
            .woocommerce .footer #respond input#submit, 
            .woocommerce .footer a.added_to_cart {
                background-image: linear-gradient(0deg, ' . esc_attr($standard_button_border_color) . ' 0%, ' . esc_attr($standard_button_border_color) . ' 100%);
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
            .footer .woocommerce a.button:hover,
            .woocommerce .footer a.button:hover,
            .footer .woocommerce button.button:hover,
            .woocommerce .footer button.button:hover,
            .footer .woocommerce input.button:hover,
            .woocommerce .footer input.button:hover,
            .footer .woocommerce #respond input#submit:hover,
            .woocommerce .footer #respond input#submit:hover,
            .footer .woocommerce .added_to_cart:hover,
            .woocommerce .footer .added_to_cart:hover {
                color: ' . esc_attr($footer_button_text_hover) . ';
            }
        ';
    }

    $footer_button_border_hover = industrium_get_prepared_option('footer_button_border_hover', 'contrast_button_border_hover', 'footer_customize');
    if ( !empty($footer_button_border_hover) ) {
        $industrium_custom_css .= '
        ';
    }

    $footer_button_background_hover = industrium_get_prepared_option('footer_button_background_hover', 'contrast_button_background_hover', 'footer_customize');
    if ( !empty($footer_button_background_hover) ) {
        $industrium_custom_css .= '
        ';
    }


    # Standard Colors
    $standard_default_text_color = industrium_get_prefered_option('standard_default_text_color');
    if ( !empty($standard_default_text_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget_product_tag_cloud .tagcloud .tag-cloud-link,
            .content-wrapper .widget_layered_nav_filters ul .chosen a,
            .block-editor-block-list__layout .widget_product_tag_cloud .tagcloud .tag-cloud-link,
            .block-editor-block-list__layout .widget_layered_nav_filters ul .chosen a,
            .woocommerce #review_form #respond .form-fields .form-cookies {
                color: ' . esc_attr($standard_default_text_color) . ';
            }
        ';
    }

    $standard_light_text_color = industrium_get_prefered_option('standard_light_text_color');
    if ( !empty($standard_light_text_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget ul.product_list_widget li .price_wrapper del,
            .block-editor-block-list__layout .widget ul.product_list_widget li .price_wrapper del,
            .woocommerce ul.products li.product .woocommerce-loop-product__wrapper .content-woocommerce-wrapper .price del, 
            .woocommerce-page ul.products li.product .woocommerce-loop-product__wrapper .content-woocommerce-wrapper .price del,
            .single-product.woocommerce div.product .price del,
            .commentlist li.review .comment_container .comment-date,
            .woocommerce div.product form.cart .group_table .price_wrapper del,
            .woocommerce form .show-password-input:after, 
            .woocommerce-page form .show-password-input:after,
            .wc-block-grid__product .wc-block-grid__product-price .price_wrapper del,
            .content-wrapper .widget_price_filter .price_slider_amount .price_label,
            .content-wrapper .product_list_widget li .reviewer,
            .content-wrapper .widget_layered_nav ul li,
            .block-editor-block-list__layout .widget_price_filter .price_slider_amount .price_label,
            .block-editor-block-list__layout .product_list_widget li .reviewer,
            .block-editor-block-list__layout .widget_layered_nav ul li,
            ul.products li.product .woocommerce-loop-product__wrapper .content-woocommerce-wrapper .woocommerce-loop-category-title mark,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__published-date,            
            .woocommerce .woocommerce-cart-form table.shop_table .product-price .amount, 
            .woocommerce-page .woocommerce-cart-form table.shop_table .product-price .amount,
            .woocommerce-checkout-review-order .checkout_cart_table .product-name .product-name-info {
                color: ' . esc_attr($standard_light_text_color) . ';
            }
            .widget_product_categories ul > li:before,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item:before {
                background-color: rgba(' . esc_attr(industrium_hex2rgb($standard_light_text_color)) . ', 0.6);
            }
        ';
    }

    $standard_dark_text_color = industrium_get_prefered_option('standard_dark_text_color');
    if ( !empty($standard_dark_text_color) ) {
        $industrium_custom_css .= '
            .woocommerce-info,
            .woocommerce-error,
            .woocommerce-message,
            .content-wrapper .widget_product_search .woocommerce-product-search button,
            .content-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button,
            .content-wrapper .widget_product_categories .post-count, 
            .content-wrapper ul.product_list_widget li .product-title,
            .content-wrapper .widget_shopping_cart .total,
            .block-editor-block-list__layout .widget_product_search .woocommerce-product-search button,
            .block-editor-block-list__layout .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button,
            .block-editor-block-list__layout .widget_product_categories .post-count, 
            .block-editor-block-list__layout ul.product_list_widget li .product-title,
            .block-editor-block-list__layout .widget_shopping_cart .total,
            .header .mini-cart .mini-cart-panel .total,
            .catalog-top-info-wrapper .woocommerce-result-count,
            .woocommerce-ordering select,
            .checkout_cart_table .product-name .product-name-title,
            .woocommerce-checkout-review-total .checkout_total_table td,
            .woocommerce .woocommerce-form-login .woocommerce-form-login__rememberme, 
            .woocommerce-page .woocommerce-form-login .woocommerce-form-login__rememberme,
            .woocommerce-account .form-attention, 
            .woocommerce .quantity-wrapper .quantity,
            .woocommerce .cart-collaterals .cart_totals table.shop_table th, 
            .woocommerce-page .cart-collaterals .cart_totals table.shop_table th,
            .woocommerce div.product .product_meta_item span,
            .woocommerce div.product .product_meta_item a,
            .single-product.woocommerce div.product .product_meta .tagged_as a,            
            .woocommerce div.product .woocommerce-tabs ul.tabs li a,
            .woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,
            .commentlist li.review .comment_container .woocommerce-review__author,
            .woocommerce #respond input#submit.alt.disabled, 
            .woocommerce #respond input#submit.alt.disabled:hover, 
            .woocommerce #respond input#submit.alt:disabled, 
            .woocommerce #respond input#submit.alt:disabled:hover, 
            .woocommerce #respond input#submit.alt:disabled[disabled], 
            .woocommerce #respond input#submit.alt:disabled[disabled]:hover, 
            .filter-control-wrapper .filter-control-list .filter-control-item,
            .woocommerce .comment-reply-title,
            .woocommerce .post-comments-title,
            .woocommerce form .show-password-input.display-password::after, 
            .woocommerce-page form .show-password-input.display-password::after,
            .woocommerce table.shop_table_responsive tr td::before, 
            .woocommerce-page table.shop_table_responsive tr td::before,
            .content-wrapper .widget_product_search .woocommerce-product-search button:before,
            .content-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button:before,
            .content-wrapper .widget_product_categories ul li > a,
            .content-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item > a,
            .content-wrapper .widget_layered_nav ul li a,

            .block-editor-block-list__layout .widget_product_search .woocommerce-product-search button:before,
            .block-editor-block-list__layout .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button:before,
            .block-editor-block-list__layout .widget_product_categories ul li > a,
            .block-editor-block-list__layout .wc-block-product-categories-list .wc-block-product-categories-list-item > a,
            .block-editor-block-list__layout .widget_layered_nav ul li a,
            .widget_shopping_cart .cart_list li a,
            .header .mini-cart .mini-cart-panel .cart_list li a,
            .woocommerce .catalog-top-info-wrapper .woocommerce-ordering:after,
            ul.products li.product .woocommerce-loop-product__wrapper .content-woocommerce-wrapper h3 a,
            .single-product.woocommerce .content-wrapper .woocommerce-tabs table.shop_attributes tr td, 
            .single-product.woocommerce .content-wrapper .woocommerce-tabs table.shop_attributes tr th,
            .woocommerce .woocommerce-cart-form table.shop_table .product-name a, 
            .woocommerce-page .woocommerce-cart-form table.shop_table .product-name a,
            .woocommerce-checkout-review-order .checkout_cart_table .product-name .product-name-title a,
            .woocommerce-checkout-review-order .shop_table.woocommerce-checkout-review-order-table th,
            .woocommerce .woocommerce-order table.shop_table thead th, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table thead th, 
            .woocommerce-page .woocommerce-order table.shop_table thead th, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table thead th,
            .woocommerce .woocommerce-customer-details address,
            .woocommerce .woocommerce-table--order-details .product-name a,
            .woocommerce .woocommerce-table--order-details tfoot th,
            .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__meta,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__meta a,            
            .header .mini-cart .mini-cart-panel .cart_list li .content-woocommerce-wrapper .quantity,
            .woocommerce .quantity-wrapper.styled .quantity .qty,
            .wc-block-price-filter .wc-block-components-price-slider__range-text,            
            ul.products li.product .woocommerce-loop-product__wrapper .product-buttons-wrapper a.button,
            .woocommerce-pagination .page-numbers,
            .woocommerce-pagination .post-page-numbers,          
            .woocommerce-pagination .page-numbers.current,
            .woocommerce-pagination .page-numbers:hover,
            .woocommerce-pagination .post-page-numbers.current,
            .woocommerce-pagination .post-page-numbers:hover,
            .woocommerce-checkout-review-order .shop_table.woocommerce-checkout-review-order-table th,            
            .single-product.woocommerce div.product .cart .button, 
            .single-product.woocommerce div.product .cart .added_to_cart {
                color: ' . esc_attr($standard_dark_text_color) . ';
            }
            .woocommerce .woocommerce-cart-form table.shop_table .product-remove .remove:hover, 
            .woocommerce-page .woocommerce-cart-form table.shop_table .product-remove .remove:hover,
            .woocommerce a.remove:hover,
            .mini-cart .mini-cart-panel .cart_list li a.remove_from_cart_button:hover,
            .woocommerce .checkout_cart_table .product-remove a.remove:hover {
                color: ' . esc_attr($standard_dark_text_color) . ' !important;
            }
            .woocommerce .quantity-wrapper.styled .btn-plus .icon:before, 
            .woocommerce .quantity-wrapper.styled .btn-plus .icon:after, 
            .woocommerce .quantity-wrapper.styled .btn-minus .icon:before,
            .woocommerce .quantity-wrapper.styled .btn-minus .icon:after,
            .filter-control-wrapper .filter-control-list .filter-control-item:after,            
            .woocommerce div.product .woocommerce-tabs ul.tabs li.active a,
            .woocommerce div.product .woocommerce-tabs ul.tabs li.active a:hover {
                background-color: ' . esc_attr($standard_dark_text_color) . ';
            }
            .widget_product_categories ul > li:before,
            .woocommerce div.product .woocommerce-tabs ul.tabs li.active a,
            .woocommerce div.product .woocommerce-tabs ul.tabs li.active a:hover,            
            .woocommerce .quantity-wrapper.styled .btn-plus:hover, 
            .woocommerce .quantity-wrapper.styled .btn-minus:hover {
                border-color: ' . esc_attr($standard_dark_text_color) . ';
            }
        ';
    }

    $standard_accent_text_color = industrium_get_prefered_option('standard_accent_text_color');
    if ( !empty($standard_accent_text_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget ul.product_list_widget li .price_wrapper,
            .block-editor-block-list__layout .widget ul.product_list_widget li .price_wrapper,
            .woocommerce ul.products li.product .price,
            .product-filters-trigger-wrapper,
            .checkout_cart_table .product-total .amount,
            .woocommerce .outer-form-wrapper form.login a, 
            .woocommerce .outer-form-wrapper form.register a,
            .woocommerce-account .form-attention span,
            .woocommerce-account .form-attention a, 
            .woocommerce-page .woocommerce-cart-form table.shop_table .product-subtotal .amount,
            .woocommerce .woocommerce-cart-form table.shop_table .product-subtotal .amount,
            .single-product.woocommerce div.product .price,
            .woocommerce div.product form.cart .group_table .price_wrapper,
            .wc-block-grid__product .wc-block-grid__product-price .price_wrapper,
            .wc-block-grid__product .wc-block-grid__product-price .price,
            .single-product.woocommerce .content-wrapper .woocommerce-tabs .woocommerce-Tabs-panel--description > ul > li:before,
            .content-wrapper .widget_product_search .woocommerce-product-search button:hover:before,
            .content-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button:hover:before,
            .block-editor-block-list__layout .widget_product_search .woocommerce-product-search button:hover:before,
            .block-editor-block-list__layout .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button:hover:before,
            .widget_product_categories ul > li:hover,
            .widget_product_categories ul li:hover > a,
            .content-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item:hover,
            .content-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item:hover > a,
            .content-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item:hover .wc-block-product-categories-list-item-count,
            .content-wrapper ul.product_list_widget li a:hover .product-title,
            .content-wrapper .widget_layered_nav ul li:hover,
            .content-wrapper .widget_layered_nav ul li:hover a,
            .block-editor-block-list__layout .wc-block-product-categories-list .wc-block-product-categories-list-item:hover,
            .block-editor-block-list__layout .wc-block-product-categories-list .wc-block-product-categories-list-item:hover > a,
            .block-editor-block-list__layout .wc-block-product-categories-list .wc-block-product-categories-list-item:hover .wc-block-product-categories-list-item-count,
            .block-editor-block-list__layout ul.product_list_widget li a:hover .product-title,
            .block-editor-block-list__layout .widget_layered_nav ul li:hover,
            .block-editor-block-list__layout .widget_layered_nav ul li:hover a,
            .widget_shopping_cart .cart_list li a:hover,
            .header .mini-cart .mini-cart-panel .cart_list li a:hover,
            ul.products li.product .woocommerce-loop-product__wrapper .content-woocommerce-wrapper h3 a:hover,
            .woocommerce .woocommerce-cart-form table.shop_table .product-name a:hover, 
            .woocommerce-page .woocommerce-cart-form table.shop_table .product-name a:hover,
            .woocommerce-checkout-review-order .checkout_cart_table .product-name .product-name-title a:hover,
            .woocommerce-checkout-review-order .checkout_cart_table .product-total,
            .woocommerce-account .woocommerce-MyAccount-navigation ul li:not(.is-active) a:hover,
            .woocommerce .woocommerce-table--order-details .product-name a:hover,
            .woocommerce .woocommerce-table--order-details .amount,
            .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title:hover,
            .sidebar .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-link:hover .wc-block-grid__product-title,
            .footer-widgets .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-link:hover .wc-block-grid__product-title,
            .slide-sidebar-content .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-link:hover .wc-block-grid__product-title,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__meta a:hover,
            .mini-cart .mini-cart-panel .cart_list li .subtotal,
            .mini-cart .mini-cart-panel .total .amount,
            .single-product.woocommerce div.product .product_meta .tagged_as a:hover,
            .woocommerce .checkout-columns .checkout-column-side #order_review_heading:before, 
            .woocommerce .checkout-columns .checkout-column-side #order_total_heading:before, 
            .woocommerce .checkout-columns .checkout-column-side .payment_method:before, 
            .woocommerce-page .checkout-columns .checkout-column-side #order_review_heading:before, 
            .woocommerce-page .checkout-columns .checkout-column-side #order_total_heading:before, 
            .woocommerce-page .checkout-columns .checkout-column-side .payment_method:before {
                color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .woocommerce .checkout_cart_table .product-remove a.remove,
            .woocommerce .woocommerce-cart-form table.shop_table .product-remove .remove, 
            .woocommerce-page .woocommerce-cart-form table.shop_table .product-remove .remove,
            .woocommerce a.remove {
                color: ' . esc_attr($standard_accent_text_color) . ' !important;
            }
            .content-wrapper .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle,
            .block-editor-block-list__layout .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle {
                border-color: ' . esc_attr($standard_accent_text_color) . ';
            }
             
            .widget_product_categories ul > li:hover:before,
            .content-wrapper .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle:before,
            .block-editor-block-list__layout .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle:before,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item:hover:before {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-price-filter .wc-block-components-price-slider__range-input-progress {
                --range-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-price-filter .wc-block-components-price-slider__range-input::-webkit-slider-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input::-moz-range-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input::-ms-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input:focus::-ms-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-price-filter .wc-block-components-price-slider__range-input::-webkit-slider-thumb:hover {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input::-moz-range-thumb:hover {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input::-ms-thumb:hover {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input:focus::-ms-thumb:hover {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input:focus::-webkit-slider-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input:focus::-moz-range-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input:focus::-ms-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
            .wc-block-components-price-slider__range-input:focus::-ms-thumb {
                background-color: ' . esc_attr($standard_accent_text_color) . ';
            }
        ';
    }

    $standard_border_color = industrium_get_prefered_option('standard_border_color');
    if ( !empty($standard_border_color) ) {
        $industrium_custom_css .= '
            .mobile-header .mini-cart .mini-cart-panel .cart_list li,
            .mobile-header .mini-cart .mini-cart-panel .cart_list li .thumbnail-woocommerce_wrapper img,
            .mobile-header-menu-container .mini-cart .mini-cart-panel .cart_list li,
            .mobile-header-menu-container .mini-cart .mini-cart-panel .cart_list li .thumbnail-woocommerce_wrapper img,
            .content-wrapper .widget ul.product_list_widget li a img,
            .content-wrapper .widget_shopping_cart .total,
            .block-editor-block-list__layout .widget ul.product_list_widget li a img,
            .block-editor-block-list__layout .widget_shopping_cart .total,
            .header .mini-cart .mini-cart-panel .total,
            .checkout_cart_table .product-thumbnail a img,
            .woocommerce form.checkout_coupon, 
            .woocommerce form.login, 
            .woocommerce form.register,
            .woocommerce .woocommerce-cart-form table.shop_table td, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td,
            .woocommerce .woocommerce-cart-form table.shop_table img, 
            .woocommerce-page .woocommerce-cart-form table.shop_table img,
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .coupon .input-text, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td.actions .coupon .input-text, 
            .single-product.woocommerce div.product .woocommerce-product-gallery .flex-viewport, 
            .single-product.woocommerce div.product .woocommerce-product-gallery .flex-control-nav.flex-control-thumbs li img,
            .woocommerce .woocommerce-cart-form table.shop_table tr:first-child td, 
            .woocommerce-page .woocommerce-cart-form table.shop_table tr:first-child td,
            .widget_shopping_cart .cart_list li:not(:first-child),            
            .woocommerce #reviews #comments ol.commentlist li.review,
            .woocommerce .cart-collaterals .cart_totals, 
            .woocommerce-page .cart-collaterals .cart_totals,
            .woocommerce .woocommerce-checkout-review-order .checkout_cart_table tr:not(:first-child) td, 
            .woocommerce-page .woocommerce-checkout-review-order .checkout_cart_table tr:not(:first-child) td,
            .woocommerce table.shop_table.checkout_cart_table tbody tr td,
            .woocommerce table.shop_table.checkout_cart_table tbody tr:first-child td,
            .woocommerce ul.order_details li:not(:first-child),
            .woocommerce .woocommerce-order table.shop_table td, 
            .woocommerce .woocommerce-order table.shop_table tbody th, 
            .woocommerce .woocommerce-order table.shop_table tfoot th, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table td, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table tbody th, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table tfoot th, 
            .woocommerce-page .woocommerce-order table.shop_table td, 
            .woocommerce-page .woocommerce-order table.shop_table tbody th, 
            .woocommerce-page .woocommerce-order table.shop_table tfoot th, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table td, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table tbody th, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table tfoot th,
            .woocommerce .woocommerce-order table.shop_table, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table,
            .woocommerce-page .woocommerce-order table.shop_table, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table,
            .woocommerce .woocommerce-order table.woocommerce-table--order-details tfoot tr:first-child th, 
            .woocommerce .woocommerce-order table.woocommerce-table--order-details tfoot tr:first-child td, 
            .woocommerce-page .woocommerce-order table.woocommerce-table--order-details tfoot tr:first-child th, 
            .woocommerce-page .woocommerce-order table.woocommerce-table--order-details tfoot tr:first-child td,
            .woocommerce-account .woocommerce-EditAccountForm fieldset,
            .widget div[class*="wp-block-"].has-content .wc-block-review-list-item__item:not(:first-child),
            .woocommerce div.product .woocommerce-tabs ul.tabs li a,
            .woocommerce div.product .woocommerce-tabs ul.tabs li a:hover,            
            .woocommerce .quantity-wrapper .quantity,
            .woocommerce .quantity-wrapper.styled .btn-plus, 
            .woocommerce .quantity-wrapper.styled .btn-minus {
                border-color: ' . esc_attr($standard_border_color) . ';
            }
            .woocommerce .woocommerce-cart-form table.shop_table, 
            .woocommerce-page .woocommerce-cart-form table.shop_table {
                border-color: ' . esc_attr($standard_border_color) . ' !important;
            }
            .content-wrapper .widget_price_filter .price_slider_wrapper .ui-widget-content,
            .block-editor-block-list__layout .widget_price_filter .price_slider_wrapper .ui-widget-content {
                background-color: ' . esc_attr($standard_border_color) . ';
            }
        ';
    }

    $standard_border_hover_color = industrium_get_prefered_option('standard_border_hover_color');
    if ( !empty($standard_border_hover_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget ul.product_list_widget li a:hover img,
            .block-editor-block-list__layout .widget ul.product_list_widget li a:hover img,
            .woocommerce .shop_mode_list .woocommerce-loop-product__wrapper:hover, 
            .woocommerce-page .shop_mode_list .woocommerce-loop-product__wrapper:hover,
            .checkout_cart_table .product-thumbnail a:hover img,
            .woocommerce .woocommerce-cart-form table.shop_table a:hover img, 
            .woocommerce-page .woocommerce-cart-form table.shop_table a:hover img,
            .single-product.woocommerce div.product .woocommerce-product-gallery .flex-control-nav.flex-control-thumbs li img.flex-active,
            .products-widget ul.products li.product .woocommerce-loop-product__wrapper .attachment-woocommerce_wrapper .attachment-woocommerce_link,
            .woocommerce .shop_mode_grid ul.products li.product .woocommerce-loop-product__wrapper .attachment-woocommerce_wrapper .attachment-woocommerce_link,
            .woocommerce-page .shop_mode_grid ul.products li.product .woocommerce-loop-product__wrapper .attachment-woocommerce_wrapper .attachment-woocommerce_link,
            .wc-block-grid__product .wc-block-grid__product-image:before,
            .content-wrapper .widget_product_search .woocommerce-product-search .search-field,
            .content-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__field,
            .content-wrapper .widget_layered_nav ul li a:before,   
            .block-editor-block-list__layout .widget_product_search .woocommerce-product-search .search-field,
            .block-editor-block-list__layout .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__field,
            .block-editor-block-list__layout .widget_layered_nav ul li a:before,                   
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .coupon .input-text:focus, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td.actions .coupon .input-text:focus  {
                border-color: ' . esc_attr($standard_border_hover_color) . ';
            }
            .content-wrapper .widget_product_search .woocommerce-product-search .search-field,
            .content-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__field,
            .content-wrapper .widget_product_tag_cloud .tagcloud .tag-cloud-link,
            .content-wrapper .widget_layered_nav ul li a:before,
            .content-wrapper .widget_layered_nav_filters ul .chosen a,
            .block-editor-block-list__layout .widget_product_search .woocommerce-product-search .search-field,
            .block-editor-block-list__layout .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__field,
            .block-editor-block-list__layout .widget_product_tag_cloud .tagcloud .tag-cloud-link,
            .block-editor-block-list__layout .widget_layered_nav ul li a:before,
            .block-editor-block-list__layout .widget_layered_nav_filters ul .chosen a,
            .woocommerce div.product .woocommerce-tabs ul.tabs,
            .woocommerce .woocommerce-order table.shop_table thead th, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table thead th, 
            .woocommerce-page .woocommerce-order table.shop_table thead th, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table thead th,
            .woocommerce .woocommerce-customer-details address,
            .woocommerce-product-gallery .flex-control-nav .slick-button {
                background-color: ' . esc_attr($standard_border_hover_color) . ';
            }
            .single-product.woocommerce div.product .woocommerce-product-gallery .flex-control-nav.flex-control-thumbs li:hover:before {
                border-color: ' . esc_attr($standard_border_hover_color) . ';
            }
        ';
    }

    $standard_background_color = industrium_get_prefered_option('standard_background_color');
    if ( !empty($standard_background_color) ) {
        $industrium_custom_css .= '
            .header .mini-cart .mini-cart-panel,
            .woocommerce .shop_mode_list .woocommerce-loop-product__wrapper, 
            .woocommerce-page .shop_mode_list .woocommerce-loop-product__wrapper,
            .content-wrapper .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle, 
            .content-wrapper .widget_product_search .woocommerce-product-search .search-field:focus,
            .content-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__field:focus,
            .block-editor-block-list__layout .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle, 
            .block-editor-block-list__layout .widget_product_search .woocommerce-product-search .search-field:focus,
            .block-editor-block-list__layout .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__field:focus,
            .woocommerce-pagination .page-numbers,
            .woocommerce-pagination .post-page-numbers,
            .woocommerce div.product .woocommerce-tabs ul.tabs li a,
            .woocommerce div.product .woocommerce-tabs ul.tabs li a:hover {
                background-color: ' . esc_attr($standard_background_color) . ';
            }
            .content-wrapper .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle,
            .block-editor-block-list__layout .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-handle {
                -webkit-box-shadow: 0 0 0 4px ' . esc_attr($standard_background_color) . ';
                -moz-box-shadow: 0 0 0 4px ' . esc_attr($standard_background_color) . ';
                box-shadow: 0 0 0 4px ' . esc_attr($standard_background_color) . ';
            }
        ';
    }

    $standard_background_alter_color = industrium_get_prefered_option('standard_background_alter_color');
    if ( !empty($standard_background_alter_color) ) {
        $industrium_custom_css .= '
            #add_payment_method #payment div.payment_box, 
            .woocommerce-cart #payment div.payment_box, 
            .woocommerce-checkout #payment div.payment_box {
                background-color: ' . esc_attr($standard_background_alter_color) . ';
            }
            #add_payment_method #payment div.payment_box:before, 
            .woocommerce-cart #payment div.payment_box:before, 
            .woocommerce-checkout #payment div.payment_box:before {
                border-bottom-color: ' . esc_attr($standard_background_alter_color) . ';
            }
        ';
    }

    $standard_button_text_color = industrium_get_prefered_option('standard_button_text_color');
    if ( !empty($standard_button_text_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .woocommerce a.button,
            .woocommerce .content-wrapper a.button,
            .content-wrapper .woocommerce button.button,
            .woocommerce .content-wrapper button.button,
            .content-wrapper .woocommerce input.button,
            .woocommerce .content-wrapper input.button,
            .content-wrapper .woocommerce #respond input#submit,
            .woocommerce .content-wrapper #respond input#submit,
            .content-wrapper .woocommerce .added_to_cart,
            .woocommerce .content-wrapper .added_to_cart,
            .block-editor-block-list__layout .woocommerce a.button,
            .woocommerce .block-editor-block-list__layout a.button,
            .block-editor-block-list__layout .woocommerce button.button,
            .woocommerce .block-editor-block-list__layout button.button,
            .block-editor-block-list__layout .woocommerce input.button,
            .woocommerce .block-editor-block-list__layout input.button,
            .block-editor-block-list__layout .woocommerce #respond input#submit,
            .woocommerce .block-editor-block-list__layout #respond input#submit,
            .block-editor-block-list__layout .woocommerce .added_to_cart,
            .woocommerce .block-editor-block-list__layout .added_to_cart,
            .woocommerce a.button.alt.disabled, 
            .woocommerce a.button.alt.disabled:hover, 
            .woocommerce a.button.alt:disabled, 
            .woocommerce a.button.alt:disabled:hover, 
            .woocommerce a.button.alt:disabled[disabled], 
            .woocommerce a.button.alt:disabled[disabled]:hover, 
            .woocommerce button.button.alt.disabled, 
            .woocommerce button.button.alt.disabled:hover, 
            .woocommerce button.button.alt:disabled, 
            .woocommerce button.button.alt:disabled:hover, 
            .woocommerce button.button.alt:disabled[disabled], 
            .woocommerce button.button.alt:disabled[disabled]:hover, 
            .woocommerce input.button.alt.disabled, 
            .woocommerce input.button.alt.disabled:hover, 
            .woocommerce input.button.alt:disabled, 
            .woocommerce input.button.alt:disabled:hover, 
            .woocommerce input.button.alt:disabled[disabled], 
            .woocommerce input.button.alt:disabled[disabled]:hover,
            .content-wrapper .widget_price_filter .price_slider_amount .button:hover,
            .content-wrapper .widget_rating_filter ul li a:after,
            .content-wrapper .widget_layered_nav ul li a:after,
            .content-wrapper .widget_shopping_cart .woocommerce-mini-cart-buttons a.button:not(.checkout):hover,
            .block-editor-block-list__layout .widget_price_filter .price_slider_amount .button:hover,
            .block-editor-block-list__layout .widget_rating_filter ul li a:after,
            .block-editor-block-list__layout .widget_layered_nav ul li a:after,
            .block-editor-block-list__layout .widget_shopping_cart .woocommerce-mini-cart-buttons a.button:not(.checkout):hover,
            .single-product.woocommerce div.product .cart .button:hover, 
            .single-product.woocommerce div.product .cart .added_to_cart:hover,
            .woocommerce #review_form #respond .submit:hover,
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .coupon .button:hover, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td.actions .coupon .button:hover,
            .woocommerce .cart-collaterals .cart_totals .wc-proceed-to-checkout .button:hover, 
            .woocommerce-page .cart-collaterals .cart_totals .wc-proceed-to-checkout .button:hover,
            .woocommerce #payment #place_order:hover, 
            .woocommerce-page #payment #place_order:hover,
            .content-wrapper .woocommerce .outer-form-wrapper .button:hover,
            .block-editor-block-list__layout .woocommerce .outer-form-wrapper .button:hover,
            .woocommerce-account .woocommerce-MyAccount-navigation ul li.is-active a,
            .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover,
            .sidebar .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover,
            .footer-widgets .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover,
            .slide-sidebar-wrapper .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover {
                color: ' . esc_attr($standard_button_text_color) . ';
            }
        ';
    }

    $standard_button_border_color = industrium_get_prefered_option('standard_button_border_color');
    if ( !empty($standard_button_border_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget_rating_filter ul li.chosen a:before,
            .content-wrapper .widget_layered_nav ul li.chosen a:before,
            .block-editor-block-list__layout .widget_rating_filter ul li.chosen a:before,
            .block-editor-block-list__layout .widget_layered_nav ul li.chosen a:before,
            .woocommerce-pagination .page-numbers,
            .woocommerce-pagination .post-page-numbers,
            .content-wrapper .widget_price_filter .price_slider_amount .button:hover,
            .block-editor-block-list__layout .widget_price_filter .price_slider_amount .button:hover,
            .single-product.woocommerce div.product .cart .button:hover, 
            .single-product.woocommerce div.product .cart .added_to_cart:hover,
            .woocommerce #review_form #respond .submit:hover,
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .coupon .button:hover, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td.actions .coupon .button:hover,
            .woocommerce .cart-collaterals .cart_totals .wc-proceed-to-checkout .button:hover, 
            .woocommerce-page .cart-collaterals .cart_totals .wc-proceed-to-checkout .button:hover,
            .woocommerce #payment #place_order:hover, 
            .woocommerce-page #payment #place_order:hover,
            .content-wrapper .woocommerce .outer-form-wrapper .button:hover,
            .block-editor-block-list__layout .woocommerce .outer-form-wrapper .button:hover,
            .woocommerce-account .woocommerce-MyAccount-navigation ul li.is-active a,
            .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover,
            .sidebar .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover,
            .footer-widgets .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover,
            .slide-sidebar-wrapper .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link:hover {
                border-color: ' . esc_attr($standard_button_border_color) . ';
            }
            .woocommerce-pagination .page-numbers:after,
            .woocommerce-pagination .post-page-numbers:after,
            .content-wrapper .widget_rating_filter ul li.chosen a:before,
            .content-wrapper .widget_layered_nav ul li.chosen a:before,
            .block-editor-block-list__layout .widget_rating_filter ul li.chosen a:before,
            .block-editor-block-list__layout .widget_layered_nav ul li.chosen a:before,
            .single-product.woocommerce div.product .cart .button:before, 
            .single-product.woocommerce div.product .cart .added_to_cart:before,
            .single-product.woocommerce div.product .cart .button .add-button-text:before, 
            .single-product.woocommerce div.product .cart .added_to_cart .add-button-text:before,
            .woocommerce-product-gallery .flex-control-nav .slick-button:not(.slick-disabled):hover {
                background-color: ' . esc_attr($standard_button_border_color) . ';
            }
            .content-wrapper .woocommerce a.button, 
            .content-wrapper .woocommerce a.button.alt, 
            .content-wrapper .woocommerce button.button, 
            .content-wrapper .woocommerce button.button.alt, 
            .content-wrapper .woocommerce input.button, 
            .content-wrapper .woocommerce #respond input#submit, 
            .content-wrapper .woocommerce a.added_to_cart,
            .woocommerce .content-wrapper a.button, 
            .woocommerce .content-wrapper a.button.alt, 
            .woocommerce .content-wrapper button.button, 
            .woocommerce .content-wrapper button.button.alt, 
            .woocommerce .content-wrapper input.button, 
            .woocommerce .content-wrapper #respond input#submit, 
            .woocommerce .content-wrapper a.added_to_cart,
            block-editor-block-list__layout .woocommerce a.button, 
            block-editor-block-list__layout .woocommerce a.button.alt, 
            block-editor-block-list__layout .woocommerce button.button, 
            block-editor-block-list__layout .woocommerce button.button.alt, 
            block-editor-block-list__layout .woocommerce input.button, 
            block-editor-block-list__layout .woocommerce #respond input#submit, 
            block-editor-block-list__layout .woocommerce a.added_to_cart,
            .woocommerce block-editor-block-list__layout a.button, 
            .woocommerce block-editor-block-list__layout a.button.alt, 
            .woocommerce block-editor-block-list__layout button.button, 
            .woocommerce block-editor-block-list__layout button.button.alt, 
            .woocommerce block-editor-block-list__layout input.button, 
            .woocommerce block-editor-block-list__layout #respond input#submit, 
            .woocommerce block-editor-block-list__layout a.added_to_cart {
                background-image: linear-gradient(0deg, ' . esc_attr($standard_button_border_color) . ' 0%, ' . esc_attr($standard_button_border_color) . ' 100%);
            }
            .woocommerce a.button svg, 
            .woocommerce a.button.alt svg, 
            .woocommerce button.button svg, 
            .woocommerce button.button.alt svg, 
            .woocommerce input.button svg, 
            .woocommerce #respond input#submit svg, 
            .woocommerce a.added_to_cart svg {
                stroke: ' . esc_attr($standard_button_border_color) . ';
            }
        ';
    }

    $standard_button_background_color = industrium_get_prefered_option('standard_button_background_color');
    if ( !empty($standard_button_background_color) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-range,
            block-editor-block-list__layout .widget_price_filter .price_slider_wrapper .ui-slider .ui-slider-range,
            .woocommerce-account .woocommerce-MyAccount-navigation ul li.is-active a {
                background-color: ' . esc_attr($standard_button_background_color) . ';
            }
        ';
    }

    $standard_button_text_hover = industrium_get_prefered_option('standard_button_text_hover');
    if ( !empty($standard_button_text_hover) ) {
        $industrium_custom_css .= '
            .content-wrapper .woocommerce a.button:hover,
            .woocommerce .content-wrapper a.button:hover,
            .content-wrapper .woocommerce button.button:hover,
            .woocommerce .content-wrapper button.button:hover,
            .content-wrapper .woocommerce input.button:hover,
            .woocommerce .content-wrapper input.button:hover,
            .content-wrapper .woocommerce #respond input#submit:hover,
            .woocommerce .content-wrapper #respond input#submit:hover,
            .content-wrapper .woocommerce .added_to_cart:hover,
            .woocommerce .content-wrapper .added_to_cart:hover,
            block-editor-block-list__layout .woocommerce a.button:hover,
            .woocommerce block-editor-block-list__layout a.button:hover,
            block-editor-block-list__layout .woocommerce button.button:hover,
            .woocommerce block-editor-block-list__layout button.button:hover,
            block-editor-block-list__layout .woocommerce input.button:hover,
            .woocommerce block-editor-block-list__layout input.button:hover,
            block-editor-block-list__layout .woocommerce #respond input#submit:hover,
            .woocommerce block-editor-block-list__layout #respond input#submit:hover,
            block-editor-block-list__layout .woocommerce .added_to_cart:hover,
            .woocommerce block-editor-block-list__layout .added_to_cart:hover,
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .button:disabled, 
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .button[disabled],
            .content-wrapper .widget_price_filter .price_slider_amount .button,
            .content-wrapper .widget_product_tag_cloud .tagcloud .tag-cloud-link:hover,
            .content-wrapper .widget_shopping_cart .woocommerce-mini-cart-buttons a.button:not(.checkout),
            .content-wrapper .widget_layered_nav_filters ul .chosen a:hover,
            block-editor-block-list__layout .widget_price_filter .price_slider_amount .button,
            block-editor-block-list__layout .widget_product_tag_cloud .tagcloud .tag-cloud-link:hover,
            block-editor-block-list__layout .widget_shopping_cart .woocommerce-mini-cart-buttons a.button:not(.checkout),
            block-editor-block-list__layout .widget_layered_nav_filters ul .chosen a:hover,
            ul.products li.product .woocommerce-loop-product__wrapper .product-buttons-wrapper a.button:hover,
            .woocommerce #review_form #respond .submit,
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .coupon .button, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td.actions .coupon .button,
            .woocommerce .cart-collaterals .cart_totals .wc-proceed-to-checkout .button, 
            .woocommerce-page .cart-collaterals .cart_totals .wc-proceed-to-checkout .button,
            .woocommerce #payment #place_order, 
            .woocommerce-page #payment #place_order,
            .content-wrapper .woocommerce .outer-form-wrapper .button,
            block-editor-block-list__layout .woocommerce .outer-form-wrapper .button,
            .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link,
            .sidebar .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link,
            .footer-widgets .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link,
            .slide-sidebar-wrapper .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link {
                color: ' . esc_attr($standard_button_text_hover) . ';
            }
        ';
    }

    $standard_button_border_hover = industrium_get_prefered_option('standard_button_border_hover');
    if ( !empty($standard_button_border_hover) ) {
        $industrium_custom_css .= '
            .single-product.woocommerce div.product .cart .button, 
            .single-product.woocommerce div.product .cart .added_to_cart,
            .woocommerce #review_form #respond .submit,
            .woocommerce .woocommerce-cart-form table.shop_table td.actions .coupon .button, 
            .woocommerce-page .woocommerce-cart-form table.shop_table td.actions .coupon .button,
            .woocommerce .cart-collaterals .cart_totals .wc-proceed-to-checkout .button, 
            .woocommerce-page .cart-collaterals .cart_totals .wc-proceed-to-checkout .button,
            .woocommerce #payment #place_order, 
            .woocommerce-page #payment #place_order,
            .content-wrapper .woocommerce .outer-form-wrapper .button,
            block-editor-block-list__layout .woocommerce .outer-form-wrapper .button,
            .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link,
            .sidebar .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link,
            .footer-widgets .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link,
            .slide-sidebar-wrapper .wc-block-grid__products .wc-block-grid__product .wp-block-button .wp-block-button__link {
                border-color: ' . esc_attr($standard_button_border_hover) . ';
            }
        ';
    }

    $standard_button_background_hover = industrium_get_prefered_option('standard_button_background_hover');
    if ( !empty($standard_button_background_hover) ) {
        $industrium_custom_css .= '
            .content-wrapper .widget_product_tag_cloud .tagcloud .tag-cloud-link:hover,
            .content-wrapper .widget_layered_nav_filters ul .chosen a:hover,
            block-editor-block-list__layout .widget_product_tag_cloud .tagcloud .tag-cloud-link:hover,
            block-editor-block-list__layout .widget_layered_nav_filters ul .chosen a:hover {
                background-color: ' . esc_attr($standard_button_background_hover) . ';
            }
        ';
    }

    # Contrast Colors
    $contrast_default_text_color = industrium_get_prefered_option('contrast_default_text_color');
    if ( !empty($contrast_default_text_color) ) {
        $industrium_custom_css .= '
            .woocommerce-store-notice,
            .woocommerce-store-notice.demo_store {
                color: ' . esc_attr($contrast_default_text_color) . ';
            }
        ';
    }

    $contrast_dark_text_color = industrium_get_prefered_option('contrast_dark_text_color');
    if ( !empty($contrast_dark_text_color) ) {
        $industrium_custom_css .= '
            .slide-sidebar-wrapper .widget_product_search .woocommerce-product-search button,
            .slide-sidebar-wrapper .wp-block-woocommerce-product-search .wc-block-product-search__fields .wc-block-product-search__button,
            .slide-sidebar-wrapper .widget_product_categories .post-count,
            .slide-sidebar-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item .wc-block-product-categories-list-item-count,
            .slide-sidebar-wrapper ul.product_list_widget li .product-title,
            .wc-block-grid__product .wc-block-grid__product-onsale,
            .woocommerce-store-notice .woocommerce-store-notice__dismiss-link:before,            
            .woocommerce div.product .woocommerce-tabs ul.tabs li.active a,
            .woocommerce div.product .woocommerce-tabs ul.tabs li.active a:hover,
            .attachment-woocommerce_flash .flash-item.sale,
            .slide-sidebar-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item > a,            
            .woocommerce .woocommerce-cart-form table.shop_table th, 
            .woocommerce-page .woocommerce-cart-form table.shop_table th,
            .slide-sidebar-wrapper .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-title,            
            .woocommerce-account .woocommerce-MyAccount-navigation ul li a,
            .single-product.woocommerce div.product .cart .button:after, 
            .single-product.woocommerce div.product .cart .added_to_cart:after,
            .single-product.woocommerce div.product .cart .button:hover, 
            .single-product.woocommerce div.product .cart .added_to_cart:hover,
            .woocommerce-product-gallery .flex-control-nav .slick-button {
                color: ' . esc_attr($contrast_dark_text_color) . ';
            }
        ';
    }

    $contrast_light_text_color = industrium_get_prefered_option('contrast_light_text_color');
    if ( !empty($contrast_light_text_color) ) {
        $industrium_custom_css .= '
            .slide-sidebar-wrapper .widget_product_categories li.cat-item-hierarchical,
            .slide-sidebar-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item,
            .slide-sidebar-wrapper .widget ul.product_list_widget li .price_wrapper del,
            .slide-sidebar-wrapper .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__published-date {
                color: ' . esc_attr($contrast_light_text_color) . ';
            }
        ';
    }

    $contrast_accent_text_color = industrium_get_prefered_option('contrast_accent_text_color');
    if ( !empty($contrast_accent_text_color) ) {
        $industrium_custom_css .= '
            .slide-sidebar-wrapper .widget ul.product_list_widget li .price_wrapper,            
            .slide-sidebar-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item:hover,
            .slide-sidebar-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item:hover > a,
            .slide-sidebar-wrapper .wc-block-product-categories-list .wc-block-product-categories-list-item:hover .wc-block-product-categories-list-item-count {
                color: ' . esc_attr($contrast_accent_text_color) . ';
            }
            .attachment-woocommerce_flash .flash-item.sale {
                background-color: ' . esc_attr($contrast_accent_text_color) . ';
            }
            .products-widget.view-type-compact ul.products li.product .woocommerce-loop-product__wrapper:hover .content-woocommerce-wrapper,
            .shop_mode_grid ul.products li.product .woocommerce-loop-product__wrapper:hover {
                border-color: ' . esc_attr($contrast_accent_text_color) . ';
            }
        ';
    }

    $contrast_border_color = industrium_get_prefered_option('contrast_border_color');
    if ( !empty($contrast_border_color) ) {
        $industrium_custom_css .= '
            .slide-sidebar-wrapper .widget ul.product_list_widget li a img,
            .slide-sidebar-wrapper .widget div[class*="wp-block-"].has-content .wc-block-review-list-item__item:not(:first-child) {
                border-color: ' . esc_attr($contrast_border_color) . ';
            }
        ';
    }

    $contrast_border_hover_color = industrium_get_prefered_option('contrast_border_hover_color');
    if ( !empty($contrast_border_hover_color) ) {
        $industrium_custom_css .= '
            .slide-sidebar-wrapper .widget ul.product_list_widget li a:hover img {
                border-color: ' . esc_attr($contrast_border_hover_color) . ';
            }
        ';
    }

    $contrast_background_color = industrium_get_prefered_option('contrast_background_color');
    if ( !empty($contrast_background_color) ) {
        $industrium_custom_css .= '
            .wc-block-grid__product .wc-block-grid__product-onsale,
            .woocommerce-store-notice,
            .woocommerce-store-notice.demo_store,
            .woocommerce .woocommerce-cart-form table.shop_table th, 
            .woocommerce-page .woocommerce-cart-form table.shop_table th,            
            .woocommerce-account .woocommerce-MyAccount-navigation ul {
                background-color: ' . esc_attr($contrast_background_color) . ';
            }
            .woocommerce #reviews #comments ol.commentlist li.review,
            .shop_mode_grid ul.products li.product .woocommerce-loop-product__wrapper,
            .woocommerce .cart-collaterals .cart_totals, 
            .woocommerce-page .cart-collaterals .cart_totals {
                border-color: ' . esc_attr($contrast_background_color) . ';
            }
        ';
    }

    $contrast_button_text_color = industrium_get_prefered_option('contrast_button_text_color');
    if ( !empty($contrast_button_text_color) ) {
        $industrium_custom_css .= '
            .slide-sidebar-wrapper .woocommerce a.button,
            .woocommerce .slide-sidebar-wrapper a.button,
            .slide-sidebar-wrapper .woocommerce button.button,
            .woocommerce .slide-sidebar-wrapper button.button,
            .slide-sidebar-wrapper .woocommerce input.button,
            .woocommerce .slide-sidebar-wrapper input.button,
            .slide-sidebar-wrapper .woocommerce #respond input#submit,
            .woocommerce .slide-sidebar-wrapper #respond input#submit,
            .slide-sidebar-wrapper .woocommerce .added_to_cart, 
            .woocommerce .slide-sidebar-wrapper .added_to_cart {
                color: ' . esc_attr($contrast_button_text_color) . ';
            }
        ';
    }

    $contrast_button_border_color = industrium_get_prefered_option('contrast_button_border_color');
    if ( !empty($contrast_button_border_color) ) {
        $industrium_custom_css .= '
            .woocommerce .slide-sidebar-wrapper a.button, 
            .woocommerce .slide-sidebar-wrapper a.button.alt, 
            .woocommerce .slide-sidebar-wrapper button.button, 
            .woocommerce .slide-sidebar-wrapper button.button.alt, 
            .woocommerce .slide-sidebar-wrapper input.button, 
            .woocommerce .slide-sidebar-wrapper #respond input#submit, 
            .woocommerce .slide-sidebar-wrapper a.added_to_cart {
                background-image: linear-gradient(0deg, ' . esc_attr($contrast_button_border_color) . ' 0%, ' . esc_attr($contrast_button_border_color) . ' 100%);
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
            .slide-sidebar-wrapper .woocommerce a.button:hover,
            .woocommerce .slide-sidebar-wrapper a.button:hover,
            .slide-sidebar-wrapper .woocommerce button.button:hover,
            .woocommerce .slide-sidebar-wrapper button.button:hover,
            .slide-sidebar-wrapper .woocommerce input.button:hover,
            .woocommerce .slide-sidebar-wrapper input.button:hover,
            .slide-sidebar-wrapper .woocommerce #respond input#submit:hover,
            .woocommerce .slide-sidebar-wrapper #respond input#submit:hover,
            .slide-sidebar-wrapper .woocommerce .added_to_cart:hover, 
            .woocommerce .slide-sidebar-wrapper .added_to_cart:hover {
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

    # Buttons
    $buttons_font       = industrium_get_prepared_option('buttons_font');
    $buttons_font_array = json_decode($buttons_font, true);
    if (
        !empty($buttons_font_array['font_family']) ||
        !empty($buttons_font_array['font_size']) ||
        !empty($buttons_font_array['text_transform']) ||
        !empty($buttons_font_array['letter_spacing']) ||
        !empty($buttons_font_array['word_spacing']) ||
        !empty($buttons_font_array['font_style']) ||
        !empty($buttons_font_array['font_weight'])
    ) {
        $industrium_custom_css .= '
            .woocommerce a.button,
            .woocommerce button.button,
            .woocommerce input.button,
            .woocommerce #respond input#submit,
            .woocommerce .added_to_cart,
            #add_payment_method .wc-proceed-to-checkout a.checkout-button,
            .woocommerce-cart .wc-proceed-to-checkout a.checkout-button,
            .woocommerce-checkout .wc-proceed-to-checkout a.checkout-button {' .
                industrium_print_font_styles( $buttons_font, array('font_family', 'font_size', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
            '}
        ';
    }

    # Main Font
    $main_font          = industrium_get_prepared_option('main_font');
    $main_font_array    = json_decode($main_font, true);
    if (
        !empty($main_font_array['font_family'])
    ) {
        $industrium_custom_css .= '
            h3#ship-to-different-address {' .
                industrium_print_font_styles( $main_font, array('font_family') ) .
            '}
        ';
    }

    # Typography Headings
    $headings_font          = industrium_get_prepared_option('headings_font');
    $headings_font_array    = json_decode($buttons_font, true);
    if (
        !empty($headings_font_array['font_family'])
    ) {
        $industrium_custom_css .= '
            .widget_product_categories ul li,
            ul.product_list_widget li .product-title,
            .widget_layered_nav_filters .tagcloud .tag-cloud-link,
            .widget_product_tag_cloud .tagcloud .tag-cloud-link,
            .attachment-woocommerce_flash .flash-item,
            .checkout_cart_table .product-name .product-name-title,
            .woocommerce-checkout-review-total .checkout_total_table td:first-child,
            .woocommerce .woocommerce-cart-form table.shop_table th,
            .woocommerce-page .woocommerce-cart-form table.shop_table th,
            .woocommerce .woocommerce-cart-form table.shop_table td.product-name,
            .woocommerce-page .woocommerce-cart-form table.shop_table td.product-name,
            .cart-collaterals .cart_totals table.shop_table th,
            .cart-collaterals .cart_totals table.shop_table td,
            .woocommerce-tabs ul.tabs li a,
            .commentlist li.review .comment_container .woocommerce-review__author,
            .commentlist li.review .comment_container .comment-date,
            .filter-control-wrapper .filter-control-list .filter-control-item,
            .wc-block-grid__product .wc-block-grid__product-title,
            .wc-block-grid__product .wc-block-grid__product-onsale,
            .product-category-widget .product-category-header,
            .content-wrapper .widget_price_filter .price_slider_amount .price_label,
            block-editor-block-list__layout .widget_price_filter .price_slider_amount .price_label,
            .price_wrapper,
            .widget_rating_filter ul li,
            .widget_layered_nav ul li,
            .product_list_widget li .reviewer,
            .widget_shopping_cart .cart_list li .content-woocommerce-wrapper .quantity,
            .header .mini-cart .mini-cart-panel .cart_list li .content-woocommerce-wrapper .quantity,
            .woocommerce-pagination .page-numbers,
            .woocommerce-pagination .post-page-numbers,
            .woocommerce .woocommerce-cart-form table.shop_table th, 
            .woocommerce-page .woocommerce-cart-form table.shop_table th,
            .woocommerce-cart-form table.shop_table td.product-price,
            .woocommerce-cart-form table.shop_table td.product-subtotal,
            .cart-collaterals table.shop_table tbody:first-child tr:first-child td, 
            .woocommerce table.shop_table tbody:first-child tr:first-child th,
            .woocommerce-checkout-review-order .checkout_cart_table .product-name .product-name-info,
            .woocommerce-checkout-review-order .checkout_cart_table .product-total,
            .woocommerce-checkout-review-order .shop_table.woocommerce-checkout-review-order-table th,
            .woocommerce-checkout-review-order .shop_table.woocommerce-checkout-review-order-table .amount,
            .woocommerce table.shop_table.checkout_cart_table td:before,
            .woocommerce-account .woocommerce-MyAccount-navigation ul li a,
            .woocommerce .woocommerce-order table.shop_table thead th, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table thead th, 
            .woocommerce-page .woocommerce-order table.shop_table thead th, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table thead th,
            .woocommerce .woocommerce-order table.shop_table .woocommerce-orders-table__cell-order-status, 
            .woocommerce .woocommerce-MyAccount-content table.shop_table .woocommerce-orders-table__cell-order-status, 
            .woocommerce-page .woocommerce-order table.shop_table .woocommerce-orders-table__cell-order-status, 
            .woocommerce-page .woocommerce-MyAccount-content table.shop_table .woocommerce-orders-table__cell-order-status,
            .woocommerce .woocommerce-table--order-details .product-name a,
            .woocommerce .woocommerce-table--order-details .amount,
            .woocommerce .woocommerce-table--order-details tfoot th,
            .wc-block-product-categories-list .wc-block-product-categories-list-item,
            .widget div[class*="wp-block-"] .wc-block-review-list-item__item .wc-block-review-list-item__meta {' .
                industrium_print_font_styles( $headings_font, array('font_family') ) .
            '}
        ';
    }

    $h4_font        = industrium_get_prepared_option('h4_font');
    $h4_font_array  = json_decode($h4_font, true);
    if (
        !empty($h4_font_array['font_size']) ||
        !empty($h4_font_array['line_height'])
    ) {
        $industrium_custom_css .= ' 
            @media screen and (min-width: 768px) {
                .woocommerce-checkout .checkout-column-main h3 {' .
                    industrium_print_font_styles( $h4_font, array('font_size','line_height') ) .
                '}
            }            
        ';
    }

    $h6_font        = industrium_get_prepared_option('h6_font');
    $h6_font_array  = json_decode($h6_font, true);
    if (
        !empty($h6_font_array['font_size']) ||
        !empty($h6_font_array['line_height'])
    ) {
        $industrium_custom_css .= ' 
            @media screen and (min-width: 768px) {
                .woocommerce-checkout .checkout-columns #order_review_heading {' .
                    industrium_print_font_styles( $h6_font, array('font_size','line_height') ) .
                '}
            }            
        ';
    }

    # Additional Font
    $additional_font = industrium_get_prepared_option('additional_font');
    $additional_font_array = json_decode($additional_font, true);
    if (
        !empty($additional_font_array['font_family']) ||
        !empty($additional_font_array['font_size']) ||
        !empty($additional_font_array['line_height']) ||
        !empty($additional_font_array['text_transform']) ||
        !empty($additional_font_array['letter_spacing']) ||
        !empty($additional_font_array['word_spacing']) ||
        !empty($additional_font_array['font_style']) ||
        !empty($additional_font_array['font_weight'])
    ) {
        $industrium_custom_css .= '
            .content-wrapper .woocommerce-error, 
            .content-wrapper .woocommerce-info, 
            .content-wrapper .woocommerce-message,
            block-editor-block-list__layout .woocommerce-error, 
            block-editor-block-list__layout .woocommerce-info, 
            block-editor-block-list__layout .woocommerce-message,
            .woocommerce-checkout {' .
                industrium_print_font_styles( $additional_font, array('font_family', 'font_size', 'line_height', 'text_transform', 'letter_spacing', 'word_spacing', 'font_style', 'font_weight') ) .
            '}
            
        ';
    }
}
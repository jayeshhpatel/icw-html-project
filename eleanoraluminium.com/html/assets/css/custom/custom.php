<?php
/*
 * Created by Artureanec
*/

global $industrium_custom_css;

if (class_exists('WooCommerce') && is_woocommerce()) {
    global $post;
    $page_id    = wc_get_page_id('shop');
    $post       = get_post($page_id);
}

require_once(get_template_directory() . "/css/custom/additional-fonts.php");
require_once(get_template_directory() . "/css/custom/top-bar-colors.php");
require_once(get_template_directory() . "/css/custom/header-colors.php");
require_once(get_template_directory() . "/css/custom/page-title-colors.php");
require_once(get_template_directory() . "/css/custom/footer-colors.php");
require_once(get_template_directory() . "/css/custom/standard-colors.php");
require_once(get_template_directory() . "/css/custom/contrast-colors.php");

require_once(get_template_directory() . "/css/custom/header-settings.php");
require_once(get_template_directory() . "/css/custom/page-title-settings.php");
require_once(get_template_directory() . "/css/custom/typography-settings.php");
require_once(get_template_directory() . "/css/custom/footer-settings.php");
require_once(get_template_directory() . "/css/custom/404-error-page-settings.php");

require_once(get_template_directory() . "/css/custom/woocommerce-colors-settings.php");

require_once(get_template_directory() . "/css/custom/elementor-styles.php");
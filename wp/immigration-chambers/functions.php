<?php
define('ICWTHEMENAME', wp_get_theme()->get( 'ICWTheme' ));
define('ICWCSS', get_template_directory_uri().'/assets/css/');
define('ICWJS', get_template_directory_uri().'/assets/js/');
define('ICWBLOCkS', __DIR__.'/blocks/');
define('lazyloading', wp_make_link_relative(get_template_directory_uri().'/assets/images/loader.svg'));


// Enqueue Scripts
include_once('lib/functions/enqueue-scripts.php');

// Core Registrations
include_once('lib/functions/theme-setup.php');
include_once('lib/functions/custom-post-types.php');

// ACF Options
include_once('lib/functions/acf-options.php');

// ACF Options
require_once ('lib/functions/icw-acf-blocks-init.php');

// Utility Functions
include_once('lib/functions/utility.php');

// Admin Functions
include_once('lib/functions/admin-hooks.php');

// icw-shortcode
require_once('lib/icw-shortcode.php');
// widgets
require_once('lib/widgets.php');
<!doctype html><html lang="en"><head><meta name="theme-color" content="#0f8ed6"><meta charset="utf-8"><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<?php wp_head(); ?>
<?php if(icw_get_option( 'after_head')) echo icw_get_option( 'after_head');?>
</head>
<body <?php body_class(); ?>>
<?php if(icw_get_option( 'after_body')) echo icw_get_option( 'after_body');?>
<?php wp_body_open(); ?>
<header class="main-header">
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <div class="header-first-block">
        <a class="header-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?> | <?php echo esc_html( get_bloginfo( 'description' ) ); ?>" rel="home"><img src="<?php echo wp_make_link_relative(get_template_directory_uri().'/assets/images/logo.svg');?>" alt="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" /></a>
            <div class="menu-list">
                <?php 
                    if ( has_nav_menu( 'primary' ) ) {
                        wp_nav_menu(  array(
                            'theme_location' => 'primary',
                            'container'     => false,
                            'menu_class' => 'mainMenu navbar-nav me-auto',
                            'depth'                => 3
                        ));
                    }
                    $header_cta = icw_get_option('cta_group');
                    if(!empty($header_cta)){
                        echo '<div class="action-btn d-block d-sm-none mt-3">'.acfield_btn_group($header_cta).'</div>';
                    }
                ?>
            </div>
            <?php 
                if(!empty($header_cta)){
                    echo '<div class="action-btn d-none d-sm-block">'.acfield_btn_group($header_cta).'</div>';
                }
            ?>
            <button class="sidebar-icon toggle-sidebar"><span></span><span></span><span></span></button>
        </div>
    </div>
</nav>
</header>
<div class="bg-overly"></div>
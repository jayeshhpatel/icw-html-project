<?php
/**
 * Hero Header Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or it's parent block.
 */
// $block_data = $block['data'];
if(!empty($block['data']['icw_preview'])){
    echo '<img src="'.get_template_directory_uri().'/blocks/hero_header/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

if ( ! is_admin() ) {
    $icwlazy = 'class="icw-lazy" src="'.esc_url(lazyloading).'" data-';
} else {
    $icwlazy = '';
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_link_call = get_field('button_call');
$group_hero_image = get_field('hero_image');
$group_hero_video = get_field('hero_video');
$group_hero_bg_image = get_field('hero_bg_image');
$group_hero_style = get_field('hero_style');

$gs_class = '';
$gs_anchor = '';
$gs_style = '';
$gs_style_xs = '';
if(!empty($gs_setting)){
    $gs_section_style = $gs_setting['section_setting']['section_style'];
    $gs_section_id = $gs_setting['section_setting']['section_id'];
    $gs_section_class = $gs_setting['section_setting']['section_class'];
    
    if ( ! empty( $gs_section_id ) ) {
        $gs_anchor = 'id="'. esc_attr( strtolower(preg_replace('/[^a-zA-Z0-9-]+/', '-', $gs_section_id))) . '" ';
    }
    
    if(!empty($gs_section_style) && $gs_section_style != 'custom-bg'){
        $gs_class .= esc_attr($gs_section_style);
    }
    if (!empty($gs_section_style) && $gs_section_style == 'custom-bg'){
        $gs_section_bg = $gs_setting['section_setting']['custom-bg'];
        $gs_class .= 'custom-bg';
        $gs_style = ' --gs-bg: '.esc_attr($gs_section_bg).';';
    }
    if(!empty($gs_section_class)){
        $gs_class .= ' '.$gs_section_class;
    }

    if(!empty($group_hero_style) && $group_hero_style == 'hero3' || $group_hero_style == 'hero4') {
        $gs_class .= ' hero-slider-section';
    }

    if(!empty($group_hero_bg_image)){
        $gs_style .= 'background-image: url('.wp_make_link_relative($group_hero_bg_image).');';
        $gs_style_xs = 'data-background-image="'.wp_make_link_relative($group_hero_bg_image).'"';
    }
}
?>
<section <?php echo $gs_anchor; ?> class="main-section hero-section <?php echo $gs_class; ?>" style="<?php echo $gs_style; ?>" >         
<div class="container">
    <?php if(!empty($group_hero_style) && $group_hero_style == 'hero2') { ?>
    <div class="row hero-style2">
        <div class="col-md-8">
            <div class="section-title">
                <?php 
                    if(!empty($group_title_info)){
                        $tagline        = $group_title_info['tagline'];
                        $title          = $group_title_info['title'] ?: '';
                        $info           = $group_title_info['info'] ?: '';
                        $link           = $group_title_info['cta_group'] ?: '';
                        if(!empty($tagline)){
                            echo '<span class="tagline">'.$tagline.'</span>';
                        }
                        if(!empty($title)){
                            echo '<h1>'.$title.'</h1>';
                        }
                        if(!empty($info)){
                            echo '<div class="sort-info">'.$info.'</div>';
                        }
                        
                        echo '<div class="action-block">';
                        if(!empty($link['btn'])){
                            echo acfield_btn_group($link, 'px-lg-5');
                        }
                        if(!empty($group_link_call)){
                            $link_label = $group_link_call['link_label'];
                            $link_url = $group_link_call['link_call']['url'];
                            $link_title = $group_link_call['link_call']['title'];
                            $link_target = $group_link_call['link_call']['target'] ? $group_link_call['link_call']['target'] : '_self';
                            echo '<a href="'.esc_url($link_url).'" class="icon-content-item" target="'.$link_target.'">
                            <div class="icon-with-bg">
                                <em class="icons icon-phone"></em>
                            </div>
                            <div class="card-details">
                                <div class="card-title">'.$link_label.'</div>
                                <div class="info-dec">'.$link_title.'</div>
                            </div>
                        </a>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>
        <?php 
            if(!empty($group_hero_image) && empty($group_hero_video)){
                $alt = esc_html( get_bloginfo( 'name' ) );
                echo '<div class="col-md-4">
                <div class="hero-image lozad-background" '. $gs_style_xs.'><img '.$icwlazy.'src="'.wp_make_link_relative($group_hero_image).'" alt="'.$alt.'"/></div>';
            }
            if(!empty($group_hero_video)){

                $group_is_video_mask = get_field('is_video_mask');
                $style_is_video_mask = "";
                if(!empty($group_is_video_mask) && $group_is_video_mask == 1 && !empty($group_hero_image)) {
                    $style_is_video_mask =  'style="-webkit-mask-image: url('.wp_make_link_relative($group_hero_image).'); -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;"';
                }

                echo '<div class="col-md-4">
                <div class="hero-image lozad-background" '. $gs_style_xs.'>
                <div class="video-wrapper-block" '.$style_is_video_mask.'>
                    <video poster="'.wp_make_link_relative($group_hero_image).'" autoplay loop playsinline muted><source src="'.wp_make_link_relative($group_hero_video).'" type="video/mp4"></video>
                </div></div>';
            }
        ?>
    </div>
    <?php } elseif(!empty($group_hero_style) && $group_hero_style == 'hero3') { // Hero With Silder Style V3 ?>
        <div class="row align-items-center hero-style3">
            <div class="col-md-6">
                <div class="section-title">
                    <?php 
                        if(!empty($group_title_info)){
                            $tagline        = $group_title_info['tagline'];
                            $title          = $group_title_info['title'] ?: '';
                            $info           = $group_title_info['info'] ?: '';
                            $link           = $group_title_info['cta_group'] ?: '';
                            if(!empty($tagline)){
                                echo '<span class="tagline">'.$tagline.'</span>';
                            }
                            if(!empty($title)){
                                echo '<h1>'.$title.'</h1>';
                            }
                            if(!empty($info)){
                                echo '<div class="sort-info">'.$info.'</div>';
                            }
                            
                            echo '<div class="action-block">';
                            if(!empty($link['btn'])){
                                echo acfield_btn_group($link, 'px-lg-5');
                            }
                            if(!empty($group_link_call)){
                                $link_label = $group_link_call['link_label'];
                                $link_url = $group_link_call['link_call']['url'];
                                $link_title = $group_link_call['link_call']['title'];
                                $link_target = $group_link_call['link_call']['target'] ? $group_link_call['link_call']['target'] : '_self';
                                echo '<a href="'.esc_url($link_url).'" class="icon-content-item" target="'.$link_target.'">
                                <div class="icon-with-bg">
                                    <em class="icons icon-phone"></em>
                                </div>
                                <div class="card-details">
                                    <div class="card-title">'.$link_label.'</div>
                                    <div class="info-dec">'.$link_title.'</div>
                                </div>
                            </a>';
                            }
                            echo '</div>';
                        }
                    ?>
                </div>
            </div>
                <?php
                $group_hero_slider = get_field('hero_slider');
                if( $group_hero_slider ): ?>
                    <div class="col-md-6 col-slider">
                        <div class="hero-slider icw-slick-loading">
                            <?php foreach( $group_hero_slider as $slide ): 
                                $alt = $slide['title'];
                                if(empty($slide['title'])){
                                    $alt = get_bloginfo( 'name' );
                                }
                                if($slide['type'] == 'video'){
                                    echo '<div class="video-wrap"><video class="embed-responsive-item" autoplay loop autoplay="autoplay" controlsList="nodownload" oncontextmenu="return false;"><source src="'.esc_url($slide['url']).'" type="video/mp4"></video></div>';
                                } else {
                                    echo '<div class="banner-slide"><img src="" data-lazy="'.esc_url($slide['url']).'" alt="'.esc_attr($alt).'"/></div>';   
                                }
                                /*
                                ?>
                                <div class="banner-slide">
                                    <img src="" data-lazy="<?php echo esc_url($slide['url']); ?>" alt="<?php echo esc_attr($alt); ?>"/>
                                </div>
                            <?php */ endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
        </div>
    <?php } elseif(!empty($group_hero_style) && $group_hero_style == 'hero4') { // Hero With Video Style V4 ?>
    <div class="row align-items-center hero-style4">
        <div class="col-md-6">
            <div class="section-title">
                <?php 
                    if(!empty($group_title_info)){
                        $tagline        = $group_title_info['tagline'];
                        $title          = $group_title_info['title'] ?: '';
                        $info           = $group_title_info['info'] ?: '';
                        $link           = $group_title_info['cta_group'] ?: '';
                        if(!empty($tagline)){
                            echo '<span class="tagline">'.$tagline.'</span>';
                        }
                        if(!empty($title)){
                            echo '<h1>'.$title.'</h1>';
                        }
                        if(!empty($info)){
                            echo '<div class="sort-info">'.$info.'</div>';
                        }
                        
                        echo '<div class="action-block">';
                        if(!empty($link['btn'])){
                            echo acfield_btn_group($link, 'px-lg-5');
                        }
                        if(!empty($group_link_call)){
                            $link_label = $group_link_call['link_label'];
                            $link_url = $group_link_call['link_call']['url'];
                            $link_title = $group_link_call['link_call']['title'];
                            $link_target = $group_link_call['link_call']['target'] ? $group_link_call['link_call']['target'] : '_self';
                            echo '<a href="'.esc_url($link_url).'" class="icon-content-item" target="'.$link_target.'">
                            <div class="icon-with-bg">
                                <em class="icons icon-phone"></em>
                            </div>
                            <div class="card-details">
                                <div class="card-title">'.$link_label.'</div>
                                <div class="info-dec">'.$link_title.'</div>
                            </div>
                        </a>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>
        <?php 
            if(!empty($group_hero_video)){
                $group_hero_image = get_field('hero_image');
                $groupheroimage = '';
                if(!empty($group_hero_image)){
                    $groupheroimage = $group_hero_image;
                }
                echo '<div class="col-md-6 col-video"><div class="video-wrapper-block"><video playsinline autoplay loop muted defaultmuted poster="'.$groupheroimage.'" controlsList="nodownload" preload="auto" oncontextmenu="return false;" onloadeddata="this.play();this.muted=false;"><source src="'.esc_url($group_hero_video).'" type="video/mp4"></video></div></div>';
            }
        ?>
    </div>
    <?php } else { ?>
        <div class="row hero-style1">
        <div class="col-md-6">
            <div class="section-title">
                <?php 
                    if(!empty($group_title_info)){
                        $tagline        = $group_title_info['tagline'];
                        $title          = $group_title_info['title'] ?: '';
                        $info           = $group_title_info['info'] ?: '';
                        $link           = $group_title_info['cta_group'] ?: '';
                        if(!empty($tagline)){
                            echo '<span class="tagline">'.$tagline.'</span>';
                        }
                        if(!empty($title)){
                            echo '<h1>'.$title.'</h1>';
                        }
                        if(!empty($info)){
                            echo '<div class="sort-info">'.$info.'</div>';
                        }
                        
                        echo '<div class="action-block">';
                        if(!empty($link['btn'])){
                            echo acfield_btn_group($link, 'px-lg-5');
                        }
                        if(!empty($group_link_call)){
                            $link_label = $group_link_call['link_label'];
                            $link_url = $group_link_call['link_call']['url'];
                            $link_title = $group_link_call['link_call']['title'];
                            $link_target = $group_link_call['link_call']['target'] ? $group_link_call['link_call']['target'] : '_self';
                            echo '<a href="'.esc_url($link_url).'" class="icon-content-item" target="'.$link_target.'">
                            <div class="icon-with-bg">
                                <em class="icons icon-phone"></em>
                            </div>
                            <div class="card-details">
                                <div class="card-title">'.$link_label.'</div>
                                <div class="info-dec">'.$link_title.'</div>
                            </div>
                        </a>';
                        }
                        echo '</div>';
                    }
                ?>
            </div>
        </div>
        <?php 
            if(!empty($group_hero_image)){
                $alt = esc_html( get_bloginfo( 'name' ) );
                echo '<div class="col-md-6">
                <div class="hero-image lozad-background" '. $gs_style_xs.'><img '.$icwlazy.'src="'.wp_make_link_relative($group_hero_image).'" alt="'.$alt.'"/></div>';
            }
        ?>
    </div>
    <?php } ?>
</div>
<?php /* ?><div class="down-action"><a class="icon-scroll" title="Scroll Down" href="#down"></a></div><?php */ ?>
</section>
<?php /* ?><div id="down"></div><?php */ ?>
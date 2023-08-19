<?php
/**
 * Content With Icon Grid list Block Template.
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
    echo '<img src="'.get_template_directory_uri().'/blocks/content_with_img/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

if ( ! is_admin() ) {
    $icwlazy = 'class="icw-lazy" src="'.esc_url(lazyloading).'" data-';
} else {
    $icwlazy = '';
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_content_right = get_field('content_right');
$group_content_img = get_field('content_img');
$group_grid_cards = get_field('grid_cards');
$group_section_align = get_field('section_align');
$group_section_sticky = get_field('is_section_sticky');

$gs_class = '';
$gs_anchor = '';
$gs_style = '';
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
        $gs_style = 'style="--gs-bg: '.esc_attr($gs_section_bg).'"';
    }
    if(!empty($gs_section_class)){
        $gs_class .= ' '.$gs_section_class;
    }
}

$row_center = ''; 
if(!empty($group_content_img)){
    $row_center = 'align-items-center'; 
}
$col_order_l = 'col-md-6 col-lg-6 ';
$col_order_r = 'col-md-6 col-lg-6 '; 
if(!empty($group_section_align) && $group_section_align == 'imgright'){
    $col_order_l .= 'order-md-2';
    $col_order_r .= 'order-md-1'; 
}
if(!empty($group_section_align) && $group_section_align == 'full'){
    $col_order_l = 'col-12 order-2';
    $col_order_r = 'col-12 order-1'; 
}

if(!empty($group_section_sticky) && $group_section_sticky == '1'){
  $gs_class  .= ' image-content-fixed';
  $row_center = ''; 
}
$gs_col_class  = '';
?>
<section <?php echo $gs_anchor; ?> class="main-section image-content-block <?php echo $gs_class; ?>" <?php echo $gs_style; ?> >         
<div class="container">
    <div class="row row-gap <?php echo $row_center; ?>">
        <div class="<?php echo $col_order_l; ?>">
            <?php 
                if(!empty($group_content_img)){
                    $size = 'large'; // (thumbnail, medium, large, full or custom size)
                    echo '<div class="card-image-block">'.wp_get_attachment_image( $group_content_img, $size ).'</div>';
                    $gs_col_class  = ' mb-lg-5';
                }
                if(!empty($group_content_right)){
                    echo '<div class="content-info">'.$group_content_right.'</div>';
                    $gs_col_class  = ' mb-lg-5';
                }
            ?>
        </div>
        <div class="<?php echo $col_order_r; ?>">
            <div class="section-title mb-0 <?php echo $gs_col_class; ?>">
                <?php 
                    if(!empty($group_title_info)){
                        $tagline        = $group_title_info['tagline'] ?: '';
                        $title          = $group_title_info['title'] ?: 'Enter Title Here';
                        $info           = $group_title_info['info'] ?: '';
                        $sc_link           = $group_title_info['cta_group'] ?: '';

                        if(!empty($link['btn'])){
                            echo '<div>'.acfield_btn_group($link).'</div>';
                        }
                        if(!empty($tagline)){
                            echo '<span class="tagline">'.$tagline.'</span>';
                        }
                        if(!empty($title)){
                            echo '<h2>'.$title.'</h2>';
                        }
                        if(!empty($info)){
                            echo '<div class="sort-info">'.$info.'</div>';
                        }

                        if( $group_grid_cards ) {
                            $grid_card_icon_style = get_field('grid_card_icon_style');
                            $grid_card_col = get_field('grid_card_col');

                            $infocard_class = 'xs-icon-left-card';
                            if(!empty($grid_card_icon_style) && $grid_card_icon_style == 'icon-left-card') {
                                $infocard_class = 'icon-left-card';
                            }
                            $infocard_col = '6';
                            if(!empty($grid_card_col)) {
                                $infocard_col = $grid_card_col;
                            }

                            echo '<div class="row g-3 mb-4 mb-lg-5">';
                            foreach( $group_grid_cards as $grid_card ) {
                                $title = $grid_card['title'];
                                if(!empty($title)){
                                    $icon = $grid_card['icon'];
                                    $info = $grid_card['info'];
                                    $link = $grid_card['link'];
        
                                    $alt = (!empty($title)) ? esc_attr($title) : esc_html( get_bloginfo( 'name' ) );
                                    echo '<div class="col-sm-'.$infocard_col.'"><div class="info-card '.$infocard_class.'">';
                                        if(!empty($icon)){
                                            echo '<div class="card-icon w-40"><img '.$icwlazy.'src="'.wp_make_link_relative($icon).'" alt="'.$alt.'"/></div>';
                                        }
                                        echo '<div class="card-content">';
                                            if(!empty($title)){
                                                if(empty($link['title']) && !empty($link['url'])){
                                                    echo '<h3><a href="'.esc_url($link['url']).'">'.$title.'</a></h3>';
                                                } else {
                                                    echo '<h3>'.$title.'</h3>';
                                                }
                                            }
                                            if(!empty($info)){
                                                echo '<div class="card-info">'.$info.'</div>';
                                            }
                                            // pr($link);
                                            if(!empty($link['title'])){
                                                echo '<div>'.acfield_btn($link, 'btn-link text-sm').'</div>';
                                            }
                                    echo '</div></div></div>';
                                }
                            }
                            wp_reset_postdata();
                            echo '</div>';
                        }
                        
                        if(!empty($sc_link)){
                            echo '<div>'.acfield_btn_group($sc_link).'</div>';
                        }
                    }
                ?>
            </div>
        </div>
    </div>
</div>
</section>
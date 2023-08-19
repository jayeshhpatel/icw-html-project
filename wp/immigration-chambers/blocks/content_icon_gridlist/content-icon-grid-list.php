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
    echo '<img src="'.get_template_directory_uri().'/blocks/content_icon_gridlist/'. $block['data']['icw_preview'].'" alt=""/>';
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
$group_grid_card_style = get_field('grid_card_style');
$group_grid_cards = get_field('grid_cards');

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
?>
<section <?php echo $gs_anchor; ?> class="main-section content-icon-grid-list <?php echo $gs_class; ?>" <?php echo $gs_style; ?> >
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title text-center">
                    <?php 
                        if(!empty($group_title_info)){
                            $tagline        = $group_title_info['tagline'] ?: '';
                            $title          = $group_title_info['title'] ?: '';
                            $info           = $group_title_info['info'] ?: '';
                            $link           = $group_title_info['cta_group'] ?: '';
                            
                            if(!empty($tagline)){
                                echo '<span class="tagline">'.$tagline.'</span>';
                            }
                            if(!empty($title)){
                                echo '<h2 class="h3">'.$title.'</h2>';
                            }
                            if(!empty($info)){
                                echo '<div class="sort-info">'.$info.'</div>';
                            }

                            // pr($link);
                            if(!empty($link['btn'])){
                                echo '<div class="mb-4">'.acfield_btn_group($link).'</div>';
                            }
                        }
                    ?>
                </div>
            </div>
            <div class="col-12">
                <?php 
                    // pr($group_grid_card_style);
                    if( (!empty($group_grid_card_style) && $group_grid_card_style == 'style-grid3' || !empty($group_grid_card_style) && $group_grid_card_style == 'style-grid4') && $group_grid_cards ) {
                        echo '<div class="row g-4 g-xl-5 justify-content-center">';
                        foreach( $group_grid_cards as $grid_card ) {
                            $title = $grid_card['title'];
                            if(!empty($title)){
                                $icon = $grid_card['icon'];
                                $info = $grid_card['info'];
                                $link = $grid_card['link'];
    
                                $alt = (!empty($title)) ? esc_attr($title) : esc_html( get_bloginfo( 'name' ) );
                                $if_link = (!empty($link) && !empty($link['url'])) ? 'if-link-hover' :  '';
                                echo '<div class="col-sm-6 col-md-3"><div class="info-card xs-icon-left-card '.$if_link.'">';
                                    if(!empty($icon)){
                                        echo '<div class="card-icon"><img '.$icwlazy.'src="'.wp_make_link_relative($icon).'" alt="'.$alt.'"/></div>';
                                    }
                                    echo '<div class="card-content">';
                                        if(!empty($title)){
                                            echo '<h3>'.$title.'</h3>';
                                        }
                                        if(!empty($info)){
                                            echo '<div class="card-info">'.$info.'</div>';
                                        }
                                        if(!empty($link['url'])){
                                            echo '<div>'.acfield_btn($link, 'btn-link text-sm').'</div>';
                                        }
                                echo '</div></div></div>';
                            }
                        }
                        echo '</div>';
                    }

                    if( (!empty($group_grid_card_style) && $group_grid_card_style == 'style-grid5') && $group_grid_cards ) {
                     echo '<div class="grid-info-card-box icon-box-col-5"><div class="row">';
                        foreach( $group_grid_cards as $grid_card ) {
                            $title = $grid_card['title'];
                            if(!empty($title)){
                                $icon = $grid_card['icon'];
                                $info = $grid_card['info'];
                                $link = $grid_card['link'];
    
                                $alt = (!empty($title)) ? esc_attr($title) : esc_html( get_bloginfo( 'name' ) );
                                $if_link = (!empty($link) && !empty($link['url'])) ? 'if-link-hover' :  '';
                                    echo '<div class="col"><div class="info-card-box '.$if_link.'">';
                                        if(!empty($icon)){
                                            echo '<div class="card-icon"><img '.$icwlazy.'src="'.wp_make_link_relative($icon).'" alt="'.$alt.'"/></div>';
                                        }
                                        echo '<div class="card-content">';
                                            if(!empty($title) && !empty($link['url'])){
                                                echo '<h3><a href="'.esc_url($link['url']).'">'.$title.'</a></h3>';
                                            } elseif(!empty($title)) {
                                                echo '<h3>'.$title.'</h3>';
                                            }
                                            if(!empty($info)){
                                                echo '<div class="card-info">'.$info.'</div>';
                                            }
                                    echo '</div></div></div>';
                            }
                        }  
                    echo '</div></div>';
                    }

                    if(!empty($group_content_right)){
                        echo '<div class="content-info">'.$group_content_right.'</div>';
                    }
                ?>
            </div>
        </div>
    </div>
</section>
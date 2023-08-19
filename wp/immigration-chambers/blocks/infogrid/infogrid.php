<?php
/**
 * FAQ Block Template.
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
    echo '<img src="'.get_template_directory_uri().'/blocks/infogrid/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_info_grid = get_field('info_grid');
$group_info_grid__image = get_field('info_grid__image');


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

// pr($group_info_grid__image);
?>
<section <?php echo $gs_anchor; ?> class="main-section infogrid-section <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>       
    <?php if(!empty($group_info_grid__image)) { ?>
        <div class="info-grid-bg-img"><?php echo wp_get_attachment_image( $group_info_grid__image, 'large') ?></div>
    <?php } ?>
    <div class="container">
        <div class="equal-col-block">
            <div class="row g-0">
                <div class="col-lg-4">
                    <div class="section-title">
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
                                echo '<h2>'.$title.'</h2>';
                            }
                            if(!empty($info)){
                                echo '<div class="sort-info">'.$info.'</div>';
                            }
                            if(!empty($link['btn'])){
                                echo '<div>'.acfield_btn_group($link).'</div>';
                            }
                        }
                    ?>
                    </div>
                </div>
                <div class="col-lg-8">
                    <?php 
                        if(!empty($group_info_grid)){
                            echo '<div class="content-box-block">
                                <div class="row">';
                                    foreach( $group_info_grid as $infogrid ) {
                                        $title = $infogrid['title'];
                                        $sort_info = $infogrid['sort_info'] ?: '-';
                                    
                                        echo '<div class="col-md-6">
                                            <div class="content-box">
                                                <h3>'.$title.'</h3>
                                                <div class="sort-info">'.wpautop( $sort_info ).'</div>
                                            </div> 
                                        </div>';                        
                                    }
                                echo '</div>
                            </div>';
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>
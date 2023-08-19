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
    echo '<img src="'.get_template_directory_uri().'/blocks/hero_contact/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_link_call = get_field('button_call');
$group_hero_image = get_field('hero_image');

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
<section <?php echo $gs_anchor; ?> class="main-section contact-enquiry-block <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>          
<div class="container">
    <div class="row align-items-center">
        <div class="col-md-6 col-lg-7">
            <div class="section-title mb-md-0">
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
                            echo '<h2 class="h3">'.$title.'</h2>';
                        }
                        if(!empty($info)){
                            echo '<div class="sort-info mb-0">'.$info.'</div>';
                        }
                    }
                ?>
            </div>
        </div>
        <?php
        if(!empty($group_title_info)){
            echo '<div class="col-md-6 col-lg-5 text-md-end"><div class="call-btn-block">';
            if(!empty($link['btn'])){
                echo acfield_btn_group($link, 'btn-white');
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
            echo '</div></div>';
        }
        ?>
    </div>
</div>
</section>
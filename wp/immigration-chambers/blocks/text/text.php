<?php
/**
 * Partner Block Template.
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
    echo '<h2>Classic Text Paragraph Block</h2>';
    return;
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_block_style = get_field('block_style');
$group_classic_content = get_field('classic_content');

$gs_class = '';
$gs_anchor = '';
$gs_style = '';
$gs_cal_l = 'col-lg-12';
$gs_cal_r = 'col-lg-12';
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
if(!empty($group_block_style)){
    if($group_block_style == "full" ) {
        $gs_cal_l = 'col-lg-12';
        $gs_cal_r = 'col-lg-12';
    } elseif($group_block_style == "c64") {
        $gs_cal_l = 'col-lg-7';
        $gs_cal_r = 'col-lg-5';
    } elseif($group_block_style == "c55") {
        $gs_cal_l = 'col-lg-6';
        $gs_cal_r = 'col-lg-6';
    } elseif($group_block_style == "c46") {
        $gs_cal_l = 'col-lg-5';
        $gs_cal_r = 'col-lg-7';
    } elseif($group_block_style == "c27") {
        $gs_cal_l = 'col-lg-4';
        $gs_cal_r = 'col-lg-8';
    } else {
        $gs_cal_l = 'col-lg-12';
        $gs_cal_r = 'col-lg-12';
    }
}
?>
<section <?php echo $gs_anchor; ?> class="main-section <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>          
<div class="container">
    <div class="row">
        <div class="col-12 <?php echo $gs_cal_l; ?>">
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
        <div class="col-12 <?php echo $gs_cal_r; ?>">
        <?php 
            if( $group_classic_content ) {
                echo $group_classic_content;
            } ?>
        </div>
    </div>
</div>
</section>
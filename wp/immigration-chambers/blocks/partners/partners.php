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
    echo '<img src="'.get_template_directory_uri().'/blocks/partners/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_our_partners = get_field('our_partners');

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
<section <?php echo $gs_anchor; ?> class="main-section partners-section <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>          
<div class="container">
    <div class="row">
        <div class="col-md-6 col-lg-5">
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
                        echo '<h2 class="h3">'.$title.'</h2>';
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
        <div class="col-md-6  col-lg-7">
        <?php 
            if( $group_our_partners ): 
                $partnersize = 'medium'; // (thumbnail, medium, large, full or custom size)
                $icount = '';
                $icount = count( $group_our_partners );
            ?>
                <div class="logo-block logo-col-<?php echo $icount; ?>">
                    <?php foreach( $group_our_partners as $image_id ):
                        ?>
                        <div class="logo-item">
                            <?php echo wp_get_attachment_image( $image_id, $partnersize ); ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>
</section>
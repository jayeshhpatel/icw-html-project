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
    echo '<img src="'.get_template_directory_uri().'/blocks/faq/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_faqs = get_field('faqs');


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
<section <?php echo $gs_anchor; ?> class="main-section faq-section <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>       
<div class="container">
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
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
        <div class="col-12 col-md-10 col-lg-8">
            <?php 
                if(!empty($group_faqs)){
                    echo '<div class="collapse-block">';
                    foreach( $group_faqs as $faq ) {
                        $question = $faq['question'];
                        $answer = $faq['answer'] ?: '-';
                        if(!empty($question)){
                            echo '<div class="collapse-item">
                            <button type="button" class="collapse-title"><h3>'.$question.'</h3></button>
                            <div class="collapse-body" style="display: none;">
                                <div class="card-content">'.wpautop( $answer ).'</div>
                            </div>
                        </div>';
                        }
                    }
                    echo '</div>';

                    if(is_admin()) { ?>
                        <script defer>
                        if (jQuery(".collapse-item .collapse-title").length > 0) {
                            jQuery(".collapse-item .collapse-title").click(function () {
                            if (jQuery(this).closest(".collapse-item").hasClass("is-open")) {
                                jQuery(this).closest(".collapse-item").stop(true,true).removeClass("is-open");
                                jQuery(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideUp("fast");
                            } else {
                                jQuery(".collapse-item").removeClass("is-open");
                                jQuery(".collapse-item").find(".collapse-body").stop(true,true).slideUp();
                                jQuery(this).closest(".collapse-item").stop(true,true).addClass("is-open");
                                jQuery(this).closest(".collapse-item").find(".collapse-body").stop(true,true).slideDown("fast");
                            }
                            return false;
                        });
                        }
                        </script>
                <?php } 
                }
            ?>
        </div>
    </div>
</div>
</section>
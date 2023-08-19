<?php
/**
 * Card-Info Slider OR List Block Template.
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
    echo '<img src="'.get_template_directory_uri().'/blocks/cardinfo-slider-or-list/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_info_cards = get_field('info_cards');

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
<section <?php echo $gs_anchor; ?> class="main-section helper-section <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>         
<div class="container">
    <div class="row">
        <div class="col-lg-10">
            <div class="section-title mb-lg-5">
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
    </div>

    <?php 
    // pr($group_info_cards);
    if( $group_info_cards ) {
        $group_info_cards_type = get_field('info_cards_type');
        if(!empty($group_info_cards_type) && $group_info_cards_type == 'is_grid') {
            $baseclass = 'row helper-item-block';
            $calclass = 'col-md-6 mb-4';
        } elseif(!empty($group_info_cards_type) && $group_info_cards_type == 'is_grid_icon') {
                $baseclass = 'row helper-grid-top-icon';
                $calclass = 'col-md-6 mb-4';
        } else {
            $baseclass = 'helper-slider slider-center-icon helper-item-block';
            $calclass = '';
        }
        echo '<div class="'.$baseclass.'">';
        foreach( $group_info_cards as $row ) {
            $infocard_image = $row['image'];
            $infocard_info = $row['title_group'];

            echo '<div class="helper-slide '.$calclass.'">
            <div class="helper-item">
                <div class="helper-img">';
                if(!empty($infocard_image)){
                    $size = 'large'; // (thumbnail, medium, large, full or custom size)
                    echo wp_get_attachment_image( $infocard_image, $size );
                }
                echo '</div>
                <div class="content-block">';
                if(!empty($infocard_info)){
                    $tagline        = $infocard_info['tagline'] ?: '';
                    $title          = $infocard_info['title'] ?: '';
                    $info           = $infocard_info['info'] ?: '';
                    $link           = $infocard_info['cta_group'] ?: '';
                    if(!empty($tagline)){
                        echo '<span class="tagline">'.$tagline.'</span>';
                    }
                    if(!empty($title)){
                        echo '<h3>'.$title.'</h3>';
                    }
                    if(!empty($info)){
                        echo '<div class="sort-info">'.$info.'</div>';
                    }
                    if(!empty($link['btn'])){
                        echo '<div>'.acfield_btn_group($link, 'btn-link with-icon').'</div>';
                    }
                }
            echo '</div>
            </div>
        </div>';
        }
        echo '</div>';

        if(is_admin()) { ?>
            <script defer>
            if (jQuery(".helper-slider").length > 0) {
                jQuery('.helper-slider').slick({
                    autoplay: true,
                    autoplaySpeed: 3000,
                    arrows: true,
                    slidesToShow: 2,
                    infinite: true,
                    responsive: [
                        {
                        breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                centerMode: true,
                                centerPadding: '60px',
                                arrows: false,
                                dots:true,
                            }
                        },
                        {
                        breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                centerMode: true,
                                centerPadding: '40px',
                                arrows: false,
                                dots:true,
                            }
                        }
                    ]
                });
            }
            </script>
    <?php } 
    }
    ?>
  
</div>
</section>
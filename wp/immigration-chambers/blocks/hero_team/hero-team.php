<?php
/**
 * hero Team Bio Block Template.
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
    echo '<img src="'.get_template_directory_uri().'/blocks/hero_team/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

if ( ! is_admin() ) {
    $icwlazy = 'class="icw-lazy" src="'.esc_url(lazyloading).'" data-';
} else {
    $icwlazy = '';
}

$gs_setting = get_field('section_setting');
$group_bio_image = get_field('bio_image');
$group_bio_info = get_field('bio_info');
$group_team_name = get_field('team_name');
$group_bio_detail = get_field('bio_detail');
$group_team_tille = get_field('team_tille');
$group_team_link = get_field('team_link');
$group_consultation_link = get_field('get_consultation_link');

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
<section <?php echo $gs_anchor; ?> class="main-section hero-bio-block <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>         
<div class="container">
    <div class="row align-items-center">
        <div class="col-md-6">
        <?php 
            if(!empty($group_bio_image)){
                $alt = (!empty($group_bio_image['alt'])) ? esc_attr($group_bio_image['alt']) : esc_html( get_bloginfo( 'name' ) );
               echo '<div class="card-image-block"><img '.$icwlazy.'src="'.wp_make_link_relative($group_bio_image['sizes']['large']).'" alt="'.$alt.'"/></div>';
            }
        ?>
        </div>
        <div class="col-md-6">
            <div class="user-content">
            <?php 
            $readmore = '';
                if(!empty($group_team_link)){
                    $readmore = '<small>'.acfield_btn($group_team_link, 'btn-link with-icon').'</small>';
                }
                if(!empty($group_bio_info)){
                    echo '<h2 class="h3">'.$group_bio_info.' '.$readmore.'</h2>';
                }
                echo '<div class="user-name">';
                    if(!empty($group_team_name)){
                        echo '<div class="user-title">'.$group_team_name.'</div>';
                    }
                    if(!empty($group_team_tille)){
                        echo '<p>'.$group_team_tille.'</p>';
                    }
                echo '</div>';
                if(!empty($group_bio_detail)){
                    echo '<div class="user-bio">'.$group_bio_detail.'</div>';
                }
            echo '</div>';
                echo '<div class="action-block gap-4 d-flex flex-wrap pt-2 mb-4">';
                
                if(!empty($group_consultation_link)){
                    echo acfield_btn($group_consultation_link, 'btn btn-secondary px-lg-4 px-lg-4');
                }
                if(empty($group_bio_info)){
                    echo acfield_btn($group_team_link, 'btn-link with-icon');
                }
                echo '</div>';
            ?>
        </div>
    </div>
</div>
</section>
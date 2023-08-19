<?php
/**
 * Team Sldier Block Template.
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
    echo '<img src="'.get_template_directory_uri().'/blocks/team-slider/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

if ( ! is_admin() ) {
    $icwlazy = 'class="icw-lazy" src="'.esc_url(lazyloading).'" data-';
} else {
    $icwlazy = '';
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_team_type = get_field('team_type');
$group_show_all_team = get_field('show_all_team');
$group_show_team = get_field('show_team_no');

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
<section <?php echo $gs_anchor; ?> class="main-section expect-team-section <?php echo $gs_class; ?>" <?php echo $gs_style; ?>>         
<div class="container">
    <div class="row g-2 g-lg-5">
        <div class="col-lg-4">
            <div class="section-title mb-0">
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
    
    <?php 
    if(!empty($group_show_team)){
        $teams_array = '';
        if(empty($group_show_all_team)) {
            $select_custom_team = get_field('select_custom_team');
            // pr($select_custom_team);
            $teams_array = $select_custom_team;
        } else {
            $args = array(
                'post_type' => 'team',
                'posts_per_page' => $group_show_team,
                'order'    => 'ASC',
                'post_status'    => 'publish'
            );  
            $teams_array = get_posts($args);
        }
        
        if( $teams_array ):
            
            if(!empty($group_team_type) && $group_team_type == 'is_details') {
                $baseclass = 'team-details';
                $calclass = '';

            } elseif(!empty($group_team_type) && $group_team_type == 'is_grid') {
                $baseclass = 'row team-grid';
                $calclass = 'col-6 col-sm-3 col-md-3 col-lg-2 mb-4';

            } else {
                $baseclass = 'team-slider';
                $calclass = '';
                ?>
                <script defer>
                    if (jQuery(".team-slider").length > 0) {
                        jQuery('.team-slider').slick({
                            autoplay: true,
                            autoplaySpeed: 3000,
                            arrows: true,
                            slidesToShow: 5,
                            infinite: true,
                            accessibility: false,
                            lazyLoad: 'ondemand',
                            responsive: [
                                {
                                breakpoint: 992,
                                    settings: {
                                        slidesToShow: 3,
                                        dots:true,
                                        arrows: false,
                                    }
                                },
                                {
                                breakpoint: 768,
                                    settings: {
                                        slidesToShow: 2,
                                        dots:true,
                                        centerMode: true,
                                        centerPadding: '80px',
                                        arrows: false,
                                    }
                                },
                                {
                                breakpoint: 480,
                                    settings: {
                                        slidesToShow: 1,
                                        centerMode: true,
                                        centerPadding: '60px',
                                        arrows: false,
                                        dots:true,
                                    }
                                }
                            ]
                        });
                    }
                </script>
                <?php
            }
            // pr($calclass);
            echo '<div class="col-lg-8"><div class="'.$baseclass.' slider-center-icon">';
                foreach( $teams_array as $team_post ){
                    $postID = $team_post->ID;
                    if ( get_post_status($postID) == 'publish' ){
                        $bio_image = get_field( 'bio_image', $postID );
                        $bio_title = get_field( 'bio_title', $postID );
                        $alt = esc_attr(get_the_title($postID));
                        if(!empty($bio_image)){
                            $img_atts = wp_get_attachment_image_src($bio_image, 'large');
                            $bio_image_src = $img_atts[0];
                        } else {
                            $bio_image_src = get_template_directory_uri().'/assets/images/no-bio.png';
                        }
                        if(!empty($group_team_type) && $group_team_type == 'is_details') {
                            $team_anchor = 'id="'.esc_attr($team_post->post_name) . '" ';
                            echo '<div '.$team_anchor.' class="row row-gap team-detail">
                                <div class="col-6 col-sm-4 col-md-4"> 
                                    <div class="card-img">
                                        <img '.$icwlazy.'src="'.$bio_image_src.'" alt="'.$alt.'"/>
                                    </div>
                                </div>
                                <div class="col-12 col-sm-8 col-md-8">
                                <div class="card-content">
                                    <h3>'.get_the_title($postID).'</h3>';
                                    if(!empty($bio_title)) {
                                        echo '<div class="position-text">'.$bio_title.'</div>';
                                    }
                                    if(!empty($team_post->post_content)) {
                                        echo '<div class="sort-info">'.$team_post->post_content.'</div>';
                                    }
                                echo '</div></div>
                            </div>';  
                        } else {
                            echo '<div class="slick-slide"><div class="expect-team-item '.$calclass.'">
                            <div class="card-img"><img data-lazy="'.$bio_image_src.'" alt="'.$alt.'"/></div>
                            <div class="card-content">
                                <h3><a href="'.get_the_permalink( $postID ).'" class="stretched-link">'.get_the_title($postID).'</a></h3>';
                                if(!empty($bio_title)) {
                                    echo '<div class="position-text">'.$bio_title.'</div>';
                                }
                            echo '</div>
                            </div></div>';  
                        }
                    }
                }
            echo '</div></div>';
        endif;  
    } wp_reset_postdata(); ?>
    </div>
</div>
</section>
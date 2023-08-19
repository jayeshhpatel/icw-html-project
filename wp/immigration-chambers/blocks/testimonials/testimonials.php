<?php
/**
 * Testimonials Sldier Block Template.
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
    echo '<img src="'.get_template_directory_uri().'/blocks/testimonials/'. $block['data']['icw_preview'].'" alt=""/>';
    return;
}

if ( ! is_admin() ) {
    $icwlazy = 'class="icw-lazy" src="'.esc_url(lazyloading).'" data-';
} else {
    $icwlazy = '';
}

$gs_setting = get_field('section_setting');
$group_title_info = get_field('title_group');
$group_testimonials_style = get_field('testimonials_style');
$group_show_testimonials = get_field('show_testimonials');

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
// pr($group_testimonials_style);

?>
<section <?php echo $gs_anchor; ?> class="main-section testimonial-section <?php echo $gs_class; ?> <?php if($group_testimonials_style == 'tstyle2') echo 'testimonial-style2-section'; ?>" <?php echo $gs_style; ?>>         
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-title text-center mb-4 mb-lg-5">
                <?php 
                    if(!empty($group_title_info)){
                        $tagline        = $group_title_info['tagline'] ?: '';
                        $title          = $group_title_info['title'] ?: 'Feedback From Our Clients';
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
            <div class="col-12">
                <?php                 
                    if(!empty($group_show_testimonials)){
                        $args = array(
                            'post_type' => 'testimonial',
                            'posts_per_page' => $group_show_testimonials,
                            'order'    => 'DESC',
                            'post_status'    => 'publish'
                        );
                        
                        $testimonials_array = get_posts($args);
                        if( $testimonials_array ):
                            echo '<div class="testimonial-slider slider-center-icon">';
                            foreach( $testimonials_array as $testi_post ){
                            $postID = $testi_post->ID;
                            $client_image = get_field( 'client_img', $postID );
                            $designation = $testi_post->post_content;
                            $client_title = get_field( 'client_title', $postID );
                            $alt = esc_attr(get_the_title($postID));

                            if(!empty($client_image)){
                                $client_image_src = $client_image;
                            } else {
                                $client_image_src = get_template_directory_uri().'/assets/images/no-client-img.png';
                            }
                            if(!empty($designation)){   
                                if (!empty($group_testimonials_style) && $group_testimonials_style == 'tstyle1'){ 
                                    echo '<div>
                                        <div class="client-slide">
                                            <div class="clinet-info-center">
                                                <div class="clinet-info">
                                                    <div class="img"><img '.$icwlazy.'src="'.$client_image_src.'" alt="'.$alt.'"></div>
                                                    <div class="name">
                                                        <div class="user-name">'.get_the_title($postID).'</div>';
                                                        if(!empty($client_title)) {
                                                            echo '<span>'.$client_title.'</span>';
                                                        }
                                                    echo '</div>
                                                </div>
                                            </div>
                                            <div class="client-msg">“'.$designation.'”</div>
                                        </div>
                                    </div>';
                                } else {
                                    echo '<div>
                                        <div class="testimonial-block">
                                            <div class="testimonial-info">
                                                <div class="user-img">
                                                    <img '.$icwlazy.'src="'.$client_image_src.'" alt="'.$alt.'">
                                                </div>
                                                <div class="user-msg">“'.$designation.'”</div>
                                            </div>
                                            <div class="user-name">
                                                <div class="name">'.get_the_title($postID).'</div>
                                                <div class="designation"> '.$client_title.' </div>
                                            </div>
                                        </div>
                                    </div>';
                                }                             
                                
                            }
                        }
                        echo '</div>';
                        
                        if(is_admin()) { ?>
                            <script defer>
                            if (jQuery(".testimonial-slider").length > 0) {
                                jQuery('.testimonial-slider').slick({
                                    autoplay: false,
                                    // autoplaySpeed: 3000,
                                    arrows: true,
                                    slidesToShow: 1,
                                    infinite: true,
                                    responsive: [
                                        {
                                        breakpoint: 992,
                                            settings: {
                                                arrows: false,
                                                dots:true,
                                            }
                                        }
                                    ]
                                });
                            }                        
                            </script>
                    <?php } 
                        endif;  
                    } wp_reset_postdata(); 
                ?>
                 
            </div>
                
        </div>
    </div>
</section>
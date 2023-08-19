<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package icw
 */

get_header();
?>
<main id="main-content" class="main-content-wrapper">
<?php 
  icw_render_page_header( 'frontpage' ); 

  if(is_home() && !is_front_page()): 
  $posts_page_id = get_option( 'page_for_posts');
  $post = get_post($posts_page_id);
  $the_content = apply_filters('the_content', $post->post_content);
    if ( !empty($the_content) ) {
      echo $the_content;
    }
  endif;
?>
<section class="main-section blog-section">
  <div class="container">
      <?php 
      // $i=0; 
        if ( have_posts() ): ?>
            <?php
              echo '<div class="row g-4">';
              while ( have_posts() ):
                the_post();

                echo '<div class="col-lg-3 col-md-6">';
                  get_template_part( 'template-parts/listing' );
                echo '</div>';
                
                // if ($i==0 || $i==1){ 
                //   echo '<div class="col-lg-6 mb-4">';
                //   get_template_part( 'template-parts/listing-top' );
                // } else {
                //   echo '<div class="col-lg-3 col-md-6">';
                //   get_template_part( 'template-parts/listing' );
                // }
                // echo '</div>';
                // $i ++;
              endwhile;
              echo '</div>';
              // show pagination
            icw_pagination();
            ?>
          </div>
      <?php else :
          get_template_part( 'template-parts/content', 'none' );
        endif;
      ?>
	</div>
</section>
</main>
<?php
get_footer();
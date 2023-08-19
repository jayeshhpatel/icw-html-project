<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package icw
 */

get_header();
// $page_for_posts = get_option( 'page_for_posts' );
?>
<?php
/*
$show_sidebar = ( icw_get_option( 'archive_show_sidebar' ) ) ? icw_get_option( 'archive_show_sidebar' ) : 'yes';
if ( !is_active_sidebar( 'sidebar-1' ) ) {
  $show_sidebar = 'no';
}
$wrapper_cols = '12';

if ( $show_sidebar === 'yes' ) {
  $wrapper_cols = '8';
}
*/
?>
<main class="main-content-wrapper">
<header class="page-header">
  <div class="container">
        <div class="post-header-title">News & Tips</div>
    </div>
</header>

<section class="blog-section blog-details-section">
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-10">
          <h1><?php echo get_the_title(); ?></h1>
            <?php 
              if ( get_the_post_thumbnail_url() ) {
                  echo '<figure class="post-image ratio ratio-16x9"><img loading="lazy" src="'.esc_url(lazyloading).'" srcset="'.get_the_post_thumbnail_url( get_the_ID(), 'icw-post-thumb' ).'" alt="'.esc_attr(get_the_title()).'" /></figure>';
              }  
            ?>
        </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div id="post-<?php the_ID(); ?>" class="single-post">

          <div class="post-meta-block mt-4 mb-4">
            <div class="post-meta"> 
              <?php icw_posted_by(); ?>
            </div>
            <div class="post-share-block">
            <?php get_template_part( 'lib/social-buttons' ); ?>
            </div>
          </div>

          <div class="post-content">
            <div class="inner">
              <?php
              while ( have_posts() ):
                the_post();
                the_content();
              // If comments are open or we have at least one comment, load up the comment template.
              // if ( comments_open() || get_comments_number() ):
              //   comments_template();
              // endif;
              ?>
              <div class="clearfix"></div>
              <div class="post-navigation">
                <?php
                // the_post_navigation(); 
                  the_post_navigation( array(
                    'screen_reader_text' => __( 'Continue Reading' ),
                  ) );
                ?>
              </div>
              <br>
              <?php
              endwhile; // End of the loop.
              ?>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

<?php 
$related = new WP_Query( array( 'post_type' => 'post', 'post__not_in' => array( get_the_id() ), 'posts_per_page' => 3 ) );
if ( $related->have_posts() ) { ?>
<div class="main-section bg-gray">
<div class="container">
  <div class="section-title">
    <span class="tagline">Explore</span>
    <h2>Related Articles</h2>
  </div>
  <div class="row g-4">
    <?php 
      foreach ( $related->posts as $post  ): 
        echo '<div class="col-12 col-sm-12 col-md-12 col-lg-4">';
          get_template_part( 'template-parts/listing-right' );
        echo '</div>';
      endforeach; wp_reset_query(); 
    ?>
  </div>
</div>
</div>
<?php } 
?>
</section>
</main>
<?php
get_footer();
<div class="blog-post blog-post-right">
    <a class="post-thumb-img" href="<?php the_permalink(); ?>">
      <img loading="lazy" src="<?php echo esc_url(lazyloading); ?>" srcset="<?php echo esc_url( icw_get_post_thumbnail_url() ); ?>" alt="<?php the_title_attribute(); ?>">
    </a>
    <div class="blog-post-inner">
      <div class="post-cat">
        <?php $categories = get_the_category();
        if ( ! empty( $categories ) ) {
          $terms_meta = [];
          foreach( $categories as $category) {
            $cname = $category->name;
            $category_link = get_category_link( $category->term_id );
            $terms_meta[] = '<a class="post-meta-cat" href="' . $category_link . '">' . esc_html( $cname ) . '</a>';
          }
          if ( ! empty( $terms_meta ) ) {
            $terms_string = implode( ', ', $terms_meta );
          } else {
            $terms_string = '';
          }
          echo $terms_string;
        } ?>
      </div>
      <div class="post-title">
        <a class="stretched-link" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      </div>
      <div class="post-meta-block">
        <div class="post-meta"> 
          <?php icw_posted_by(); ?>
        </div>
        <div class="post-action-block">
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.7099 5.66578L9.81678 9.89805C9.38918 10.2706 8.71332 9.96934 8.71332 9.38939V6.95143C4.40094 7.01305 2.54266 8.09142 3.8032 12.1528C3.94307 12.6035 3.40257 12.9528 3.02307 12.6744C1.80674 11.7831 0.706055 10.0801 0.706055 8.35751C0.706055 4.09443 4.24803 3.19251 8.71304 3.1393V0.899076C8.71304 0.320114 9.38807 0.0178887 9.8165 0.390418L14.7097 4.62269C15.0185 4.91512 15.0185 5.39688 14.7099 5.66578Z" fill="#69757A"/></svg>
        </div>
      </div>
    </div>
</div>
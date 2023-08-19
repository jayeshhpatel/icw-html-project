<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package icw
 */

?>
<div class="post-content">
    <?php
    the_content( sprintf('%s %s',
        esc_html__('Continue reading', 'ICWTHEME'),
        '<span class="screen-reader-text"> ' . get_the_title() . '</span>'
    ) );

    wp_link_pages( array(
        'before'      => '<div class="page-links"><h6>' . esc_html__( 'Pages:',  'ICWTHEME' ) . '</h6>',
        'after'       => '</div>',
        'link_before' => '<span>',
        'link_after'  => '</span>',
    ) );
    ?>
    <br>
    <div class="post-entry-footer">
        <?php icw_entry_footer(); ?>
    </div>
    <br>
</div>
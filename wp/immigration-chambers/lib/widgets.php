<?php
//register widgetS
function register_icw_widget() {
    register_widget( 'ICW_Recent_Posts_Widget' );
}
add_action( 'widgets_init', 'register_icw_widget' );

/**
 * Add ICW_Recent_Posts_Widget widget.
 */
class ICW_Recent_Posts_Widget extends WP_Widget {

    function __construct() {
        parent::__construct(
            'icw_recent_posts', // Base ID
            'ICW Recent Posts', // Name
            array( 'description' => __( 'Recent Posts Widget', 'ICWTHEME' ), ) // Args
            );
    }

    public function widget( $args, $instance ) {
        $title  = $instance['title'];
        $count  = $instance['count'];
        echo $args['before_widget'];
        echo $args['before_title'] . $title . $args['after_title'];

        $posts = get_posts( array( 'numberposts' => $count ) );
        foreach ($posts as $key => $value) {
            ?>
            <a href="<?php echo get_permalink( $value->ID ); ?>" class="media">
                <div class="pull-left">
                  <?php if ( has_post_thumbnail($value->ID) && ! post_password_required($value->ID) ) { ?>
                      <?php echo get_the_post_thumbnail( $value->ID, array(80,80) ); ?>
                    <?php } else { ?>
                          <img src="<?php echo get_template_directory_uri();?>/images/imgs/no-post-80.jpg" class="img-responsive" alt="">
                  <?php } //.entry-thumbnail ?>
                </div>
                <div class="media-body">
                    <span class="media-heading"><?php echo $value->post_title; ?></span>
                    <!-- small class="muted"><?php _e('Posted', 'ICWTHEME'); ?> <?php echo date( 'd F Y', strtotime($value->post_date) ); ?></small -->
                </div>
              </a>
            <?php }
            echo $args['after_widget'];
        }

        public function form( $instance ) {
            $title  = isset($instance[ 'title' ]) ? $instance[ 'title' ] : 'Recent Posts';
            $count  = isset($instance[ 'count' ]) ? $instance[ 'count' ] : 3;
            ?>
            <p>
                <label for="<?php echo $this->get_field_name( 'title' ); ?>"><?php _e( 'Title:', 'ICWTHEME' ); ?></label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
            </p>
            <p>
                <label for="<?php echo $this->get_field_name( 'count' ); ?>"><?php _e( 'Number of posts:', 'ICWTHEME' ); ?></label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'count' ); ?>" name="<?php echo $this->get_field_name( 'count' ); ?>" type="text" value="<?php echo esc_attr( $count ); ?>" />
            </p>
            <?php
        }

        public function update( $new_instance, $old_instance ) {
            $instance = array();
            $instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
            $instance['count'] = ( ! empty( $new_instance['count'] ) ) ? strip_tags( $new_instance['count'] ) : '';
            return $instance;
        }
    }
<?php
if(!defined('ABSPATH')) exit; // Exit if accessed directly

//*-----------------------------------------------------------------------------------*/
/* [ICW-SOCIAL fclass=""]  | InCreativeWeb
/*-----------------------------------------------------------------------------------*/
add_shortcode('ICW-SOCIAL', 'icw_social_shortcode');
function icw_social_shortcode($atts){
  extract( shortcode_atts( array (
      'fclass' => '',
  ), $atts ) );
  ob_start();
  ?>
  <div>
  <ul class="social-media-icons <?php echo $atts['fclass']; ?>">
      <?php if( icw_get_option( 'linkedin') ): ?>
          <li><a href="<?php echo icw_get_option( 'linkedin'); ?>" target="_blank" title="LinkedIn" data-bs-toggle="tooltip" data-bs-custom-class="bg-tooltip-primary"><em class="icons icon-linkedin"></em></a></li>
      <?php endif; 
      if( icw_get_option( 'instagram') ): ?>
          <li><a href="<?php echo icw_get_option( 'instagram'); ?>" target="_blank" title="Instagram" data-bs-toggle="tooltip" data-bs-custom-class="bg-tooltip-primary"><em class="icons icon-instagram"></em></a></li>
      <?php endif;
      if( icw_get_option( 'facebook') ): ?>
          <li><a href="<?php echo icw_get_option( 'facebook'); ?>" target="_blank" title="Facbook" data-bs-toggle="tooltip" data-bs-custom-class="bg-tooltip-primary"><em class="icons icon-facebook"></em></a></li>
      <?php endif;
      if( icw_get_option( 'twitter') ): ?>
          <li><a href="<?php echo icw_get_option( 'twitter'); ?>" target="_blank" title="Twitter" data-bs-toggle="tooltip" data-bs-custom-class="bg-tooltip-primary"><em class="icons icon-twitter"></em></a></li>
      <?php endif;
      if( icw_get_option( 'youtube') ): ?>
          <li><a href="<?php echo icw_get_option( 'youtube'); ?>" target="_blank" title="YouTube" data-bs-toggle="tooltip" data-bs-custom-class="bg-tooltip-primary"><em class="icons icon-youtube"></em></a></li>
      <?php endif; ?>
  </ul>
  </div>
  <?php
  $icwvariable = ob_get_clean();
  return $icwvariable;
}
?>
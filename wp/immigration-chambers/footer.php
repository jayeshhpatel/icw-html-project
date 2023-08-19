<footer class="main-footer">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3 order-2 order-sm-1">
                <div class="row align-align-items-center">
                    <div class="col-12 col-sm-3 col-lg-12 d-none d-sm-flex">
                        <div class="logo-block">
                        <a class="footer-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_html( get_bloginfo( 'name' ) ); ?> | <?php echo esc_html( get_bloginfo( 'description' ) ); ?>" rel="home"><img src="<?php echo get_template_directory_uri();?>/assets/images/logo-white.svg" alt="<?php echo esc_html( get_bloginfo( 'name' ) ); ?>" /></a>
                        </div>
                    </div>    
                    <div class="col-12 col-sm-9 col-lg-12">
                        <ul class="location-list">
                            <?php 
                            $address_info = icw_get_option('address_info');
                            if(!empty($address_info) && $address_info['mail_us']) {
                                echo '<li><a href="tel:'.esc_html($address_info['mail_us']).'"><span><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6801 7.67779C10.5328 7.7862 10.3591 7.84035 10.1854 7.84035C10.0116 7.84035 9.83792 7.7862 9.69062 7.67779L2.65568 2.4983L0.982478 1.26641L0.982422 13.1602C0.982478 13.6241 1.35701 14.0001 1.81905 14.0001L18.5517 14.0001C19.0138 14.0001 19.3883 13.624 19.3883 13.1602V1.26636L17.715 2.4983L10.6801 7.67779Z" fill="white"/><path d="M10.1823 5.95814L18.2745 5.59668e-05L2.08984 0L10.1823 5.95814Z" fill="white"/>
                                </svg></span>'.esc_html($address_info['mail_us']).'</a></li>'; 
                            }
                            if(!empty($address_info) && $address_info['call_us']) {
                                echo '<li><a href="tel:'.esc_html($address_info['call_us']).'"><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="white"/></svg></span>'.esc_html($address_info['call_us']).'</a></li>';
                            }
                            if(!empty($address_info) && $address_info['address']) {
                                echo '<li><a href="https://www.google.com/search?q='.wp_strip_all_tags($address_info['address']).'" target="_blank"><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="white"/></svg></span>'.$address_info['address'].'</a></li>';
                            }
                            ?>
                        </ul> 
                    </div> 
                </div>
            </div>
            <div class="col-12 col-lg-9  order-1 order-sm-2">
                <?php 
                    if(has_nav_menu('footer')):
                        echo '<div class="footer-grid-menu">';
                        wp_nav_menu( array( 
                            'theme_location' => 'footer', 
                            'container'  => false, 
                            'menu_class' => 'footer-menu', 
                            'depth' => 2 ) 
                        );
                        echo '</div>';
                    endif; 
                ?>  
            </div> 
        </div>   
        <div class="divider"></div>
        <div class="row align-items-center">
            <div class="col-sm">
                <?php 
                    if(has_nav_menu('footer-inline')):
                        wp_nav_menu( 
                            array( 'theme_location' => 'footer-inline', 'container'  => false, 'menu_class' => 'menu-list footer-menu-inline', 'depth' => 1 ) 
                        );
                    endif; 
                ?>
            </div>        
            <div class="col-sm-auto">
                <ul class="social-list">
                <?php if( icw_get_option( 'facebook') ): ?>
                    <li>
                        <a href="<?php echo icw_get_option( 'facebook'); ?>" target="_blank" title="Facebook" data-bs-toggle="tooltip" data-bs-title="Facebook"><svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.991995 8.08022H2.84902V14.6477C2.84902 14.7774 2.97133 14.8825 3.12227 14.8825H6.27092C6.42186 14.8825 6.54417 14.7774 6.54417 14.6477V8.11116H8.67897C8.81778 8.11116 8.93457 8.02168 8.95041 7.90323L9.27465 5.4854C9.28355 5.41888 9.25902 5.35226 9.20721 5.30236C9.15535 5.25241 9.08113 5.22382 9.00326 5.22382H6.54427V3.7082C6.54427 3.25132 6.83064 3.01964 7.39549 3.01964C7.47599 3.01964 9.00326 3.01964 9.00326 3.01964C9.1542 3.01964 9.2765 2.91453 9.2765 2.78491V0.56557C9.2765 0.435904 9.1542 0.330839 9.00326 0.330839H6.78752C6.77189 0.330181 6.73719 0.329102 6.68603 0.329102C6.30158 0.329102 4.96525 0.393934 3.90965 1.22817C2.74005 2.15264 2.90263 3.25954 2.94149 3.45145V5.22377H0.991995C0.841054 5.22377 0.71875 5.32884 0.71875 5.4585V7.84544C0.71875 7.97511 0.841054 8.08022 0.991995 8.08022Z" fill="white"/></svg></a>
                    </li>
                    <?php endif;
                    if( icw_get_option( 'linkedin') ): ?>
                    <li>
                        <a href="<?php echo icw_get_option( 'linkedin'); ?>" target="_blank" title="LinkedIn" data-bs-toggle="tooltip" data-bs-title="Linkedin"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.7279 5.00659H0.515877C0.373322 5.00659 0.257812 5.1117 0.257812 5.24132V14.6272C0.257812 14.7569 0.373322 14.8619 0.515877 14.8619H3.7279C3.87046 14.8619 3.98597 14.7569 3.98597 14.6272V5.24132C3.98597 5.1117 3.87046 5.00659 3.7279 5.00659Z" fill="white"/><path d="M2.11954 0.350098C0.950813 0.350098 0 1.214 0 2.27588C0 3.33823 0.950813 4.20246 2.11954 4.20246C3.28733 4.20246 4.23737 3.33818 4.23737 2.27588C4.23742 1.214 3.28733 0.350098 2.11954 0.350098Z" fill="white"/><path d="M11.8909 4.75098C10.6008 4.75098 9.64719 5.25541 9.06877 5.82858V5.21898C9.06877 5.08937 8.95326 4.98425 8.8107 4.98425H5.73463C5.59207 4.98425 5.47656 5.08937 5.47656 5.21898V14.6049C5.47656 14.7345 5.59207 14.8396 5.73463 14.8396H8.93963C9.08219 14.8396 9.1977 14.7345 9.1977 14.6049V9.96103C9.1977 8.39617 9.665 7.78652 10.8643 7.78652C12.1704 7.78652 12.2742 8.76385 12.2742 10.0415V14.6049C12.2742 14.7346 12.3897 14.8396 12.5323 14.8396H15.7384C15.881 14.8396 15.9965 14.7346 15.9965 14.6049V9.45659C15.9965 7.1297 15.5087 4.75098 11.8909 4.75098Z" fill="white"/></svg></a>
                    </li>
                    <?php endif; 
                    if( icw_get_option( 'instagram') ): ?>
                     <li>
                        <a href="<?php echo icw_get_option( 'instagram'); ?>" target="_blank" title="Instagram" data-bs-toggle="tooltip" data-bs-title="Instagram"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.48438 0.09375C2.5155 0.09375 0.09375 2.5155 0.09375 5.48438V12.5156C0.09375 15.4841 2.51541 17.9062 5.48438 17.9062H12.5156C15.4842 17.9062 17.9062 15.4842 17.9062 12.5156V5.48438C17.9062 2.51541 15.4841 0.09375 12.5156 0.09375H5.48438ZM5.48438 1.5H12.5156C14.724 1.5 16.5 3.27553 16.5 5.48438V12.5156C16.5 14.7239 14.7239 16.5 12.5156 16.5H5.48438C3.27553 16.5 1.5 14.724 1.5 12.5156V5.48438C1.5 3.27544 3.27544 1.5 5.48438 1.5ZM13.6875 3.375C13.1695 3.375 12.75 3.79453 12.75 4.3125C12.75 4.83047 13.1695 5.25 13.6875 5.25C14.2055 5.25 14.625 4.83047 14.625 4.3125C14.625 3.79453 14.2055 3.375 13.6875 3.375ZM9 4.3125C6.41961 4.3125 4.3125 6.41961 4.3125 9C4.3125 11.5804 6.41961 13.6875 9 13.6875C11.5804 13.6875 13.6875 11.5804 13.6875 9C13.6875 6.41961 11.5804 4.3125 9 4.3125ZM9 5.71875C10.8202 5.71875 12.2812 7.17976 12.2812 9C12.2812 10.8202 10.8202 12.2812 9 12.2812C7.17976 12.2812 5.71875 10.8202 5.71875 9C5.71875 7.17976 7.17976 5.71875 9 5.71875Z" fill="white"/></svg></a>
                    </li>
                    <?php endif;
                    if( icw_get_option( 'twitter') ): ?>
                        <li>
                        <a href="<?php echo icw_get_option( 'twitter'); ?>" target="_blank" title="Twitter" data-bs-toggle="tooltip" data-bs-title="Twitter"><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3554 3.2386C14.3655 3.3807 14.3655 3.5229 14.3655 3.665C14.3655 8 11.066 12.995 5.0356 12.995C3.1777 12.995 1.45179 12.4568 0 11.5229C0.26397 11.5533 0.51775 11.5635 0.79188 11.5635C2.3249 11.5635 3.736 11.0457 4.863 10.1625C3.4213 10.132 2.2132 9.1878 1.79695 7.8884C2 7.9188 2.203 7.9391 2.4163 7.9391C2.7107 7.9391 3.0051 7.8985 3.2792 7.8274C1.77666 7.5228 0.64972 6.2031 0.64972 4.6091V4.5685C1.08625 4.8122 1.59391 4.9645 2.1319 4.9848C1.24869 4.3959 0.67004 3.3909 0.67004 2.2538C0.67004 1.6447 0.83244 1.0863 1.11672 0.599C2.731 2.5888 5.1574 3.8883 7.8782 4.0305C7.8274 3.7868 7.797 3.533 7.797 3.2792C7.797 1.4721 9.2589 0 11.0761 0C12.0203 0 12.8731 0.3959 13.4721 1.0355C14.2132 0.8934 14.9239 0.6193 15.5533 0.2437C15.3096 1.0051 14.7919 1.6447 14.1117 2.0508C14.7716 1.9797 15.4112 1.7969 16 1.5432C15.5534 2.1929 14.995 2.7715 14.3554 3.2386Z" fill="white"/></svg></a>
                    </li>
                    <?php endif;
                    if( icw_get_option( 'youtube') ): ?>
                    <li>
                        <a href="<?php echo icw_get_option( 'youtube'); ?>" target="_blank" title="YouTube" data-bs-toggle="tooltip" data-bs-title="YouTube"><svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.677 0.456543H3.323C1.48775 0.456543 0 1.80978 0 3.47909V7.73232C0 9.40162 1.48775 10.7549 3.323 10.7549H12.677C14.5122 10.7549 16 9.40162 16 7.73232V3.47909C16 1.80978 14.5122 0.456543 12.677 0.456543ZM10.4297 5.81264L6.05451 7.71066C5.93793 7.76124 5.80327 7.68392 5.80327 7.56645V3.65177C5.80327 3.53263 5.94147 3.45541 6.05829 3.50927L10.4335 5.52593C10.5636 5.58588 10.5613 5.75556 10.4297 5.81264Z" fill="white"/></svg></a>
                    </li>
                    <?php endif; ?>
                    <li class="country-dropdown-list">
                        <div class="country-dropdown dropdown">
                            <a href="#!" class="country-name with-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><em class="flag flag-aus"></em><span>AUS</span></a>
                            <ul class="sub-menu dropdown-menu dropdown-menu-end">
                                <li><a href="https://iclegal.co.nz/" target="_blank"><em class="flag flag-nz"></em>New Zealand</a></li>
                                <li><a href="#"><em class="flag flag-in"></em>India</a></li>
                                <li class="current-menu-item"><a href="https://immigrationchambers.com.au"><em class="flag flag-aus"></em>Australia</a></li>
                            </ul>
                        </div>   
                    </li>
                </ul>
            </div>
        </div>
        <div class="copyright-block">
            <?php $footerinfo = icw_get_option('footer_info');
                if(!empty($footerinfo)){
                    echo '<div class="sort-info">'.$footerinfo.'</div>';
                } 
            ?> 
            <div class="copyright-text-block">
                <?php $copyright = icw_get_option('copyright');
                    if(!empty($copyright)){
                        echo '<div class="copyright-text">'.$copyright.'</div>';
                    } else { 
                        echo '<div class="copyright-text">Copyright &copy; '.esc_html(date_i18n("Y")).' <span class="txt-white">immigrationchambers.com.au</span> <span class="text-nowrap">All rights reserved.</span></div>';
                    } ?>  
                    <div class="design-by mt-2"><a href="https://increativeweb.com" target="_blank" rel="noopener">Website Design & Development <strong>InCreativeWeb.com</strong></a></div>
            </div>
        </div>
    </div>
</footer>
<a href="#top" class="back-to-top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.62 11.62" fill="white"><path d="M0 5.81l1 1 4.08-4.03v8.84h1.45V2.78l4.05 4.06 1-1L5.81 0z"/></svg></a>
<?php wp_footer(); ?>
<?php if(icw_get_option('before_body')) echo icw_get_option( 'before_body');?>
</body></html>
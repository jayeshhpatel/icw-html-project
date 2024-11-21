"use strict";

function initFloatPlaceholderInput() {
    const inputs = [
        '.widget_search input[placeholder]:not([placeholder=""])',
        '.wp-block-search input[placeholder]:not([placeholder=""])',
        '.wpforms-form input[placeholder]:not([placeholder=""])',
        '.wpforms-form textarea[placeholder]:not([placeholder=""])',
        '.woocommerce input[placeholder]:not([placeholder=""])',
        '.woocommerce textarea[placeholder]:not([placeholder=""])',
        '.post-comments-wrapper input[placeholder]:not([placeholder=""])',
        '.post-comments-wrapper textarea[placeholder]:not([placeholder=""])',
        '.mc4wp-form input[placeholder]:not([placeholder=""])',
        '.mc4wp-form textarea[placeholder]:not([placeholder=""])',
        '.site-search input[placeholder]:not([placeholder=""])',
        '.industrium-no-result-search-form input[placeholder]:not([placeholder=""])'
    ];
    const $inputs = jQuery(inputs.join(', '));
    $inputs.each(function() {
        if(!jQuery(this).parent('.input-floating-wrap').length) {             
            jQuery(this).wrap('<span class="input-floating-wrap"></span>');
            let placeholder = jQuery(this).attr('placeholder');
            jQuery(this).after('<span class="floating-placeholder">' + placeholder + '</span>');     
        }
    });
}

function side_panel_open() {
    jQuery('.dropdown-trigger').on('click', function() {
        jQuery('.slide-sidebar-wrapper, .body-overlay').addClass('active');
    });
    jQuery('.slide-sidebar-close, .body-overlay').on('click', function() {
        jQuery('.slide-sidebar-wrapper, .body-overlay').removeClass('active');
    });
}

function extra_panel_open() {
    jQuery('.extra-trigger').on('click', function() {
        jQuery('.slide-extra-wrapper, .body-overlay').addClass('active');
    });
    jQuery('.slide-extra-close, .body-overlay').on('click', function() {
        jQuery('.slide-extra-wrapper, .body-overlay').removeClass('active');
    });
}

function search_panel_open() {
    jQuery('.search-trigger').on('click', function() {
        jQuery('.site-search, .body-overlay').addClass('active');
        jQuery('.site-search .search-form .search-form-field').focus();
    });
    jQuery('.site-search-close, .body-overlay').on('click', function() {
        jQuery('.site-search, .body-overlay, .mobile-header-menu-container').removeClass('active');
    });
}

function switch_form_columns() {
    jQuery('.tab-columns-switcher').on('click', function() {
        jQuery('.tab-column', jQuery(this).parents('.tab-columns')).toggleClass('hidden');
    });
}

function sticky_menu_active (once){
    if ( jQuery('.sticky-header').length ) {
        jQuery('.sticky-header').each(function(){
            const obj = jQuery(this);
            const header = obj.next('.sticky-header-on');
            const el_offset = header.offset().top + header.innerHeight();

            if(once) {
                const st = jQuery(window).scrollTop();
                if(st <= el_offset) {
                    obj.removeClass('sticky-active');                   
                } 
                else {
                    obj.addClass('sticky-active');
                } 
            }
            
            jQuery(window).scroll(function() {
                const st = jQuery(this).scrollTop();
                if(st <= el_offset) {
                    obj.removeClass('sticky-active');                   
                } 
                else {
                    obj.addClass('sticky-active');
                } 
            });
        });
    }
}

function mobile_menu_open() {
    jQuery('.menu-trigger').on('click', function() {
        jQuery('.mobile-header-menu-container, .body-overlay').addClass('active');
    });
    jQuery('.menu-close, .body-overlay').on('click', function() {
        jQuery('.mobile-header-menu-container, .body-overlay').removeClass('active');
    });
}

function simple_sidebar_open() {
    jQuery('.simple-sidebar-trigger').on('click', function() {
        if (jQuery(window).width() < 992) {
            jQuery('.simple-sidebar, .body-overlay').addClass('active');
        }
    });
    jQuery('.shop-hidden-sidebar-close, .body-overlay').on('click', function() {
        jQuery('.simple-sidebar, .body-overlay').removeClass('active');
    });
}

function widget_list_hierarchy_init (){
    widget_archives_hierarchy_controller ( '.widget ul li', 'ul.children', 'parent-archive', 'widget-archive-trigger' );
    widget_archives_hierarchy_controller ( '.widget_nav_menu .menu li', 'ul.sub-menu', 'parent-archive', 'widget-menu-trigger' );
    widget_archives_hierarchy_controller ( '.widget_industrium_nav_menu_widget .menu li', 'ul.sub-menu', 'parent-archive', 'widget-menu-trigger' );
}

function widget_archives_hierarchy_controller ( list_item_selector, sublist_item_selector, parent_class, trigger_class ){
    jQuery( list_item_selector ).has( sublist_item_selector ).each( function (){
        jQuery( this ).addClass( parent_class );
        jQuery(this).append( "<span class='" + trigger_class + "'></span>" );
    });
    jQuery( list_item_selector + ">" + sublist_item_selector ).css( "display", "none" );
    jQuery( list_item_selector + ">.item-wrapper>" + sublist_item_selector ).css( "display", "none" );
    jQuery( document ).on( "click", list_item_selector + " ." + trigger_class, function (){
        var el = jQuery(this);
        var sublist = el.siblings( sublist_item_selector );
        var sublist_alt = el.siblings('.item-wrapper').children( sublist_item_selector );
        if ( !sublist.length && !sublist_alt.length ) return;
        sublist = sublist.first();
        sublist_alt = sublist_alt.first();
        if( !el.hasClass('active') ){
            var currentParents = el.parents('.menu-item');
            el.parents().siblings('.menu-item').find("." + trigger_class).removeClass('active');
            el.parents().siblings('.menu-item').find('.sub-menu').slideUp(300);
        }
        el.toggleClass('active');
        sublist.slideToggle( 300 );
        sublist_alt.slideToggle( 300 );
    });
}

function fix_responsive_iframe () {
    jQuery('.video-embed > div').each(function() {
        jQuery(this).unwrap('.video-embed');
    });
}

function elements_slider_init () {
    jQuery('.elementor-element .owl-carousel, .post-gallery-carousel.owl-carousel ').each( function() {
        let slider              =  jQuery(this),
            slider_options      = slider.data('slider-options'),            
            itemsMobile         = 1,
            itemsTablet         = 1,
            itemsDesktop        = 1,
            dotsContainer       = slider_options['dotsContainer'],
            dotsContainerMobile = '',
            progress            = slider_options['progress'],
            progress_position   = slider_options['progress_position'],
            view_type           = slider_options['view_type'];
            
        slider_options['rtl'] = !!theme.rtl;
        if ( slider_options['dotsContainerMobile'] ) {
            dotsContainerMobile = slider_options['dotsContainerMobile'];
        } else {
            dotsContainerMobile = slider_options['dotsContainer'];
        }

        switch (slider_options['items']) {
            case 2:
                itemsMobile     = 1;
                itemsTablet     = 2;
                itemsDesktop    = 2;
                break;
            case 3:
                itemsMobile     = 1;
                itemsTablet     = 2;
                itemsDesktop    = 3;
                break;
            case 4:
                itemsMobile     = 1;
                itemsTablet     = 2;
                itemsDesktop    = 4;
                break;
            case 5:
                itemsMobile     = 1;
                itemsTablet     = 2;
                itemsDesktop    = 5;
                break;
            case 6:
                itemsMobile     = 1;
                itemsTablet     = 3;
                itemsDesktop    = 6;
                break;
            default:
                break;
        }
        slider_options['navText'] = ['', ''];
        slider_options['responsive'] = {
            0:  {
                items: itemsMobile,
                dotsContainer: dotsContainerMobile
            },
            768:  {
                items: itemsTablet,
                dotsContainer: dotsContainerMobile
            },
            992:  {
                items: itemsDesktop,
                dotsContainer: dotsContainer
            }
        };
        if(slider.hasClass('project-slider-listing') && slider.hasClass('view-type-1')) {
            if(slider_options['items'] > 2) {
                itemsTablet = 3;
            }
            slider_options['responsive'][0] = {
                items: itemsMobile,
                dotsContainer: dotsContainer
            };
            slider_options['responsive'][768] = {
                items: slider_options['items'] > 5 ? 3 : 2,
                dotsContainer: dotsContainer
            };
            slider_options['responsive'][992] = {
                items: itemsTablet,
                dotsContainer: dotsContainer
            };
            slider_options['responsive'][1200] = {
                items: itemsDesktop,
                dotsContainer: dotsContainer
            };
        }
        if(slider.hasClass('image-carousel')) {
            if(slider_options['items'] > 3) {
                itemsTablet = 3;
            }
            slider_options['responsive'][992] = {
                items: itemsTablet,
                dotsContainer: dotsContainer
            };
            slider_options['responsive'][1200] = {
                items: itemsDesktop,
                dotsContainer: dotsContainer
            };
        }
        if(slider_options['view_type'] && (slider_options['view_type'] == 'type-2' || slider_options['view_type'] == 'type-5')) {
            slider_options = {...slider_options, onInitialized: function(event) {
               const sliderItems = slider.find('.service-item');             
               function handleExcerptHeight() {
                    sliderItems.each(function() {
                        const sliderItem = jQuery(this);
                        const excerpt = jQuery(this).find('.service-item-excerpt');
                        excerpt.css({
                            height: 'auto'
                        });
                        let height = excerpt.height();
                        excerpt.css({
                            height: 0
                        });
                        sliderItem.on('mouseenter', function() {
                            jQuery(this).find('.service-item-excerpt').height(height);
                        });
                        sliderItem.on('mouseleave', function() {
                            jQuery(this).find('.service-item-excerpt').height(0);
                        });
                   });
                }
                handleExcerptHeight();
                jQuery(window).on('resize', function () {
                    handleExcerptHeight();
                });
            }};
        }        
        if(slider.hasClass('project-slider-listing') && slider.hasClass('view-type-2')) {
            slider_options = {...slider_options, onInitialized: function(event) {
               const slide = slider.find('.owl-item.active')[0];
               const slideItem = jQuery(slide).find('.slider-item');
               const srcset = slideItem.data('srcset');
               const src = slideItem.data('src');
               const sizes = slideItem.data('sizes');
               slider.find('.owl-stage-outer').prepend('<img class="owl-stage-bg" srcset="' + srcset + '" sizes"=' + sizes + '" src="' + src + '"/>');
               slider.find('.slider-item .project-item-link').each(function() {
                    const stageImage = slider.find('.owl-stage-outer .owl-stage-bg');
                    jQuery(this).hover(function() {
                        const slideItem = jQuery(this).parents('.slider-item');                        
                        const srcset = slideItem.data('srcset');
                        const src = slideItem.data('src');
                        const sizes = slideItem.data('sizes');
                        if(stageImage.prop('src') !== src) {
                            stageImage.css('opacity', 0.3).css('transition-duration', '0.4s');
                            setTimeout(function() {
                                stageImage.prop('src', src);
                                stageImage.prop('srcset', srcset);
                                stageImage.prop('sizes', sizes);  
                                stageImage.css('opacity', 1);
                            }, 300);
                        }
                    });
               });
            }};
        }

        // if(slider.hasClass('project-slider-listing') && slider.hasClass('view-type-2')) {
        //     slider_options = {...slider_options, onInitialized: function(event) {
        //        const slide = slider.find('.owl-item.active')[0];
        //        const slideItem = jQuery(slide).find('.slider-item');
        //        const activeSrc = slideItem.data('src');
        //        const slides = slider.find('.owl-item:not(.cloned) .slider-item');
        //        var bgImages = '';
        //        for(let i = slides.length -1; i >= 0; i--) {
        //             const srcset = jQuery(slides[i]).data('srcset');
        //             const src = jQuery(slides[i]).data('src');
        //             const sizes = jQuery(slides[i]).data('sizes');
        //             bgImages += '<img class="owl-stage-bg ' + (src == activeSrc ? 'active' : '') + '" srcset="' + srcset + '" sizes"=' + sizes + '" src="' + src + '"/>';
        //        }
        //        slider.find('.owl-stage-outer').prepend('<div class="owl-stage-bg-wrapper">' + bgImages + '</div>');
        //        slider.find('.slider-item .project-item-link').each(function() {                    
        //             jQuery(this).hover(function() {
        //                 const activeImage = slider.find('.owl-stage-outer .owl-stage-bg.active');
        //                 const slideItem = jQuery(this).parents('.slider-item');
        //                 const src = slideItem.data('src');                      
        //                 if(activeImage.prop('src') !== src) {
        //                     const targetImage = slider.find('.owl-stage-outer .owl-stage-bg[src="' + src + '"]');
        //                     targetImage.addClass('active').css('transition-duration', '0s');
        //                     setTimeout(function() {
        //                         targetImage.addClass('active').css('opacity', 1);
        //                     }, 20);
        //                     const images = slider.find('.owl-stage-outer .owl-stage-bg');
        //                     images.each(function() {
        //                         if(targetImage.prop('src') !== jQuery(this).prop('src')) {
        //                             jQuery(this).removeClass('active');
        //                         }
        //                     });
        //                     activeImage.removeClass('active').css('transition-duration', '.3s');
        //                     setTimeout(function() {
        //                         activeImage.removeClass('active').css('opacity', 0);
        //                     }, 20);
        //                     setTimeout(function() {
        //                         targetImage.css('z-index', 0);
        //                         activeImage.css('z-index', -1);
        //                     }, 300);
        //                 }
        //             });
        //        });
        //     }};
        // }
        if(slider.hasClass('portfolio-slider-listing') && (slider_options['view_type'] && slider_options['view_type'] == 'type-2')) {
            slider_options = {...slider_options, onInitialized: function(event) {
                const nextButton = slider.parent().find('.slider-next-button');
                nextButton.click(function() {
                    slider.trigger('next.owl.carousel');
                });
            },
            onChanged: function(event) {
                if(slider_options['loop'] == false) {
                    const nextButton = slider.parent().find('.slider-next-button');
                    if(event.item.index == event.item.count - 1) {                    
                        nextButton.addClass('disabled');
                    } else {
                        nextButton.removeClass('disabled');
                    }
                }                
            }};
            
        }
        slider.owlCarousel(slider_options);
        if ( progress ) {
            slider.on('changed.owl.carousel', function(event) {
                let progress_wrapper = slider.parents('.elementor-widget-container'),
                progress_current = jQuery('.slider-progress-current', progress_wrapper),
                progress_all     = jQuery('.slider-progress-all', progress_wrapper),
                progress_line    = jQuery('.progress', progress_wrapper);
                progress_all.text(event.page.count < 10 ? '0' + event.page.count : event.page.count);
                progress_current.text((event.page.index + 1) < 10 ? '0' + (event.page.index + 1) : (event.page.index + 1));
                let progress_val = Math.round(((event.page.index + 1) / event.page.count) * 100);
                if(progress_position == 'pagination') {
                    progress_line.css('width', progress_val + '%');
                } else {
                    progress_line.css('height', progress_val + '%');
                }   
            });            
        }        
    });
}

function updatePortfolioSliderOffset() {
    if(jQuery('.industrium-portfolios-listing-widget.view-type-2').length > 0) {
        jQuery('.industrium-portfolios-listing-widget.view-type-2').each(function() {
            var $listing = jQuery(this);
            var $container = jQuery(this).closest('.elementor-widget-industrium_portfolio_listing');
            if($container.length) {
                if(!!theme.rtl) {
                    var marginRight = $container.offset().left;
                    $listing.css({'marginRight': 0 - marginRight});
                } else {
                    var marginLeft = $container.offset().left;
                    $listing.css({'marginLeft': 0 - marginLeft});
                }                
            } else {
                if(!!theme.rtl) {
                    $listing.css('marginRight', '');
                }
                $listing.css('marginLeft', '');
            }
        });
    }    
}

function priceItemBestheight() {
    jQuery('.price-item-type-wide').each(function() {
        if(jQuery(window).width() >= 768 && jQuery('.price-item-best-wrapper', jQuery(this)).length > 0) {
            const bestHeigth = jQuery(this).find('.price-item-inner').innerHeight();
            jQuery('.price-item-best-wrapper', jQuery(this)).width(bestHeigth);
        } else {
            jQuery('.price-item-best-wrapper', jQuery(this)).width('auto');
        }
    });
}

function handleProjectsExcerptHeight() {
    jQuery('.project-masonry-listing.text-position-inside .project-item, .project-grid-listing.text-position-inside .project-item').each(function() {
        const item = jQuery(this);
        const excerpt = jQuery(this).find('.project-item-excerpt');
        const button = jQuery(this).find('.post-more-button');
        // button.css({
        //     height: 'auto'
        // });
        // let button_height = button.height();
        // button.css({
        //     height: 0
        // });
        // excerpt.css({
        //     height: 'auto'
        // });
        // let height = excerpt.height();
        // excerpt.css({
        //     height: 0
        // });
        item.on('mouseenter', function() {
            // jQuery(this).find('.project-item-excerpt').height(height);
            // jQuery(this).find('.post-more-button').height(button_height);
            jQuery(this).find('.project-item-excerpt').slideDown(300, function() {
            	jQuery(this).css('display', 'block');
            });
            jQuery(this).find('.post-more-button').slideDown(300, function() {
            	jQuery(this).css('display', 'block');
            });
        });
        item.on('mouseleave', function() {
            // jQuery(this).find('.project-item-excerpt').height(0);
            // jQuery(this).find('.post-more-button').height(0);
            jQuery(this).find('.project-item-excerpt').slideUp(300);
            jQuery(this).find('.post-more-button').slideUp(300);
        });
   });
}
// Isotope init
function isotope_init() {
    if ( jQuery('.isotope').length > 0 ) {
        jQuery('.isotope-trigger').isotope({
            itemSelector:   '.isotope-item',
            gutter:         0
        });
    }
}

function help_item_acardeon() {
    jQuery('.help-item').each( function() {
        jQuery('.help-item-title', this).on('click', function() {
            jQuery(this).siblings('.help-item-content').slideToggle(300).parents('.help-item').toggleClass('active');
        });
    });
}

function custom_video_play_button() {
    jQuery('.mejs-overlay-button').each(function () {
        jQuery(this).html('<svg viewBox="0 0 23 27"><path d="M22,13.5L1,26V1L22,13.5z"/></svg>');
    });
}

function background_image_parallax(object, multiplier){
    if ( object.length > 0 ) {
        multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.5;
        multiplier = 1 - multiplier;
        var doc = jQuery(document);
        object.css({
            'background-attatchment': 'fixed'
        });
        jQuery(window).scroll(function () {
            if (jQuery(window).width() >= 992) {
                var from_top = doc.scrollTop() - object.offset().top,
                    bg_css = (multiplier * from_top) + 'px';
                object.css({
                    'background-position-y': bg_css
                });
            } else {
                object.css({
                    'background-position-y': ''
                });
            }
        });
    }
}

// Scroll To  Top
function scroll_to_top_init() {
    var scrollTop = jQuery(window).scrollTop();
    if (scrollTop > 600) {
        jQuery('.footer-scroll-top').addClass('show');
    } else {
        jQuery('.footer-scroll-top').removeClass('show');
    }
}

function footer_scroll_top() {
    jQuery('.footer-scroll-top button', '.body-container').on('click', function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 500);
    });
}

function wpFormsSubmitButtonSVG() {
    jQuery('.wpforms-form .wpforms-submit').html(jQuery('.wpforms-form .wpforms-submit').html() + '<svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5"></polyline></svg>');
}

// ---------------------- //
// --- Document Ready --- //
// ---------------------- //
jQuery(document).ready(function () {

    side_panel_open();
    extra_panel_open();
    search_panel_open();
    switch_form_columns();

    sticky_menu_active(true);
    mobile_menu_open();
    simple_sidebar_open();

    help_item_acardeon();
    scroll_to_top_init();

    onPageLoaderHidden();

    wpFormsSubmitButtonSVG();

    initFloatPlaceholderInput();

    footer_scroll_top();

    // footerDecorationAnimate();    
    // Parallax
    background_image_parallax(jQuery('[data-parallax="scroll"]'), 0.7);

    // Mobile Menu
    function mobile_menu(){
        jQuery('.mobile-header-menu-container .main-menu, .extra-menu').find('.menu-item').each(function(i, el){
            if( jQuery(el).find('.sub-menu').length != 0 && jQuery(el).find('.sub-menu-trigger').length == 0 ){
                jQuery(el).append('<span class="sub-menu-trigger"></span>');
            }
        });

        jQuery('.sub-menu-trigger').off();
        jQuery('.sub-menu-trigger').on('click', function() {
            if( jQuery(this).parent().hasClass('active') ){
                jQuery(this).prev().slideUp();
                jQuery(this).parent().removeClass('active');
            } else {
                var currentParents = jQuery(this).parents('.menu-item');
                jQuery('.sub-menu-trigger').parent().not(currentParents).removeClass('active');
                jQuery('.sub-menu-trigger').parent().not(currentParents).find('.sub-menu').slideUp(300);

                jQuery(this).prev().slideDown();
                jQuery(this).parent().addClass('active');
            }
        });
    }
    mobile_menu();

    // Scroll to Anchor
    function scroll_to_anchor() {
        jQuery('.pwb-az-listing-header a').on('click', function(){
            var target = jQuery(this).attr('href');
            jQuery('body, html').animate({scrollTop: jQuery(target).offset().top - 200 +'px'}, 600);
            return false;
        });
    }
    scroll_to_anchor();

    // Scroll Down
    jQuery('.content-slider-scroll-down').on('click', function(){
        let target = jQuery(this).parents('.elementor-section').next('.elementor-section');
        jQuery('body, html').animate({scrollTop: target.offset().top - 150 +'px'}, 600);
    });

    // Custom Video Play Button
    setTimeout(custom_video_play_button, 800);

    // Tilt
    function tilt_effect() {
        jQuery('.tilt-effect').tilt({
            maxTilt:        23,
            perspective:    2e3,
            easing:         "cubic-bezier(.22,.61,.36,1)"
        });
    }

    // Tilt alter
    document.addEventListener("mousemove", parallax);
    function parallax(e){
        var moving_value = -10;
        jQuery('.tilt-part img').each(function(){
            var x = (e.clientX * moving_value) / 250;
            var y = (e.clientY * moving_value) / 250;
            moving_value = moving_value + 4;
            jQuery(this).css({
                'transform': 'translate(' + x + 'px, ' + y + 'px)'
            }).attr('data-value', moving_value);
        });
    }

    tilt_effect();
    widget_list_hierarchy_init();
    handleProjectsExcerptHeight();
    setTimeout(updatePortfolioSliderOffset, 500);
    setTimeout(fix_responsive_iframe, 800);
    setTimeout(elements_slider_init, 500);
    setTimeout(isotope_init, 500);
    setTimeout(priceItemBestheight, 500);
    if(!jQuery('.page-loader').length) {
        jQuery('body').trigger('pageloader_hidden');
    }
});

// --------------------- //
// --- Window Resize --- //
// --------------------- //
jQuery(window).on('resize', function () {
    sticky_menu_active();
    mobile_menu_open();
    updatePortfolioSliderOffset();
    handleProjectsExcerptHeight();
    background_image_parallax(jQuery('[data-parallax="scroll"]'), 0.7);
    priceItemBestheight();
    animatePageTitleDecoration();
});

function footerDecorationAnimate() {
    const footer = jQuery('.footer.footer-decorated');
    if(footer.length > 0) {
        const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                setTimeout(function() {
                    footer.addClass('animated');
                }, 300);
                observer.unobserve(footer[0]);
              }
            });
        });
        observer.observe(footer[0]);
    }    
}

// --------------------- //
// --- Window Scroll --- //
// --------------------- //
jQuery(window).on('scroll', function () {
    scroll_to_top_init();
});

function animatePageTitleDecoration() {
    if(jQuery('.page-title-container.page-title-decorated').length && jQuery(window).innerWidth() > 1024) {
        jQuery('.page-title-container.page-title-decorated').addClass('animated');
    }
}

function onPageLoaderHidden() {
    jQuery('body').on( 'pageloader_hidden', function() {
        animatePageTitleDecoration();
        footerDecorationAnimate();
        if(jQuery('.industrium-content-slider-widget .slider-decoration').length) {
            setTimeout(function() {
                jQuery('.industrium-content-slider-widget .slider-decoration').addClass('animated');
            }, 300);
        }
    });
}

(function ($){

    // Page Preloader
    var loader;
    $.fn.start_loader = start_loader;
    $.fn.stop_loader = stop_loader;

    $( document ).ready(function (){
        page_loader_controller ();

        // AJAX Pagination for Elementor Post Listing
        $('.elementor-widget').on('click', '.content-pagination a', function(e){
            e.preventDefault();
            var paged           = null;
            var id              = $(this).parents('.elementor-widget').attr('data-id');
            if ( $(this).hasClass('prev') ) {
                paged = parseInt($(this).siblings('.current').text()) - 1;
            } else if ( $(this).hasClass('next') ) {
                paged = parseInt($(this).siblings('.current').text()) + 1;
            } else {
                paged = parseInt($(this).text());
            }
            var filter_term     = $('.filter-control-list .dot.active', $(this).parents('.archive-listing').siblings('.filter-control-wrapper')).attr('data-value');
            var filter_taxonomy = $('.filter-control-list', $(this).parents('.archive-listing').siblings('.filter-control-wrapper')).attr('data-taxonomy');

            genre_get_posts(paged, id, filter_term, filter_taxonomy);
        });

        // AJAX Filter for Elementor Post Listing
        $('.elementor-widget').on('click', '.filter-control-list .filter-control-item', function(e){
            e.preventDefault();
            var paged           = 1;
            var id              = $(this).parents('.elementor-widget').attr('data-id');
            var filter_term     = $(this).attr('data-value');
            var filter_taxonomy = $(this).parents('.filter-control-list').attr('data-taxonomy');
            if ( filter_term === 'all' ) {
                filter_term = null;
            }

            $(this).addClass('active').siblings('.filter-control-item').removeClass('active');

            genre_get_posts(paged, id, filter_term, filter_taxonomy);
        });
    });

    function page_loader_controller (){
        var page_loader, interval, timeLaps ;
        page_loader = $( '.page-loader' );
        timeLaps = 0;
        interval = setInterval( function (){
            var page_loaded = check_if_page_loaded ();
            timeLaps ++;
            if ( page_loaded ||  timeLaps == 12) {
                clearInterval ( interval );
                page_loader.stop_loader ();
            }
        }, 10);
    }

    function check_if_page_loaded (){
        var keys, key, i, r;
        if ( window.modules_state == undefined ) return false;
        r = true;
        keys = Object.keys( window.modules_state );
        for ( i = 0; i < keys.length; i++ ){
            key = keys[i];
            if ( !window.modules_state[key] ){
                r = false;
                break;
            }
        }
        return r;
    }

    function start_loader (){
        var loader_container;
        loader = jQuery( this );
        if ( !loader.length ) return;
        loader_container = loader[0].parentNode;
        if ( loader_container != null ){
            loader_container.style.opacity = 1;
            setTimeout( function (){
                loader_container.style.display = "block";
            }, 10);
        }
    }

    function stop_loader (){
        var loader_container;
        loader = jQuery( this );
        if ( !loader.length ) return;
        loader_container = loader[0].parentNode;
        if ( loader_container != null ){
        	setTimeout( function (){
	            loader_container.style.opacity = 0;
	            setTimeout( function (){
	                loader_container.style.display = "none";
	                jQuery('body').trigger('pageloader_hidden');
	            }, 200);
            }, 500);
        }
    }    

    // Main AJAX function
    function genre_get_posts(paged = 1, id = null, filter_term = null, filter_taxonomy = null) {
        var ajax_url    = ajax_params.ajax_url;
        var args        = $('.archive-listing', '.elementor-element-' + id).attr('data-ajax');
        var widget      = $('.archive-listing', '.elementor-element-' + id).attr('data-widget');
        var classes     = $('.archive-listing-wrapper', '.elementor-element-' + id).attr('class');

        $.ajax({
            type:       'POST',
            url:        ajax_url,
            data:       {
                action:             'pagination',
                args:               args,
                widget:             widget,
                paged:              paged,
                classes:            classes,
                id:                 id,
                filter_term:        filter_term,
                filter_taxonomy:    filter_taxonomy
            },
            beforeSend: function (){
                var height = $('.archive-listing', '.elementor-element-' + id).outerHeight();
                $('.archive-listing', '.elementor-element-' + id).height(height).addClass('loading');
            },
            success:    function(data){
                $('.archive-listing', '.elementor-element-' + id).html(data);
                if ($(window.wp.mediaelement).length > 0) {
                    $(window.wp.mediaelement.initialize);
                }
                setTimeout(function() {
                    $('.archive-listing', '.elementor-element-' + id).removeAttr('style').removeClass('loading');
                }, 500);
                setTimeout(elements_slider_init, 300);
                setTimeout(fix_responsive_iframe, 600);
                setTimeout(custom_video_play_button, 800);
                setTimeout(isotope_init, 500);
                setTimeout(handleProjectsExcerptHeight, 500);
            },
            error:      function(){
                $('.archive-listing', '.elementor-element-' + id).html('<p class="error">AJAX ERROR</p>');
            }
        });
    }

}(jQuery));
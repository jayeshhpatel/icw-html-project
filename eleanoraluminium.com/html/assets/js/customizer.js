"use strict";

function industrium_customizer_dependancy() {
    jQuery('.is-depend').each( function() {
        var dependency_array = jQuery(this).data('dependency');
        var is_visible = true;
        jQuery.each(dependency_array, function(i, value) {
            var depend_control      = value.control;
            var depend_operator     = value.operator;
            var depend_values       = value.value.toString().replace(/\s+/g, '').split(',');
            var observable_control  = jQuery('.customize-control').find('[data-customize-setting-link="' + depend_control + '"]');
            var observable_value    = '';

            if (
                observable_control.is(':checkbox')
            ) {
                if ( observable_control.is(':checked') ) {
                    observable_value = '1';
                } else {
                    observable_value = '0';
                }
            } else if ( observable_control.is(':radio') ) {
                observable_value = jQuery('.customize-control').find('[data-customize-setting-link="' + depend_control + '"]:checked').val();
            } else {
                observable_value = observable_control.val();
            }

            switch(depend_operator) {
                case '==':
                    if (
                        jQuery.inArray(observable_value, depend_values) === -1
                    ){
                        is_visible = false;
                    }
                    break;
                case '!=':
                    if (
                        jQuery.inArray(observable_value, depend_values) !== -1
                    ){
                        is_visible = false;
                    }
                    break;
                default:
                    if (
                        jQuery.inArray(observable_value, depend_values) === -1
                    ){
                        is_visible = false;
                    }
                    break;
            }

        });

        if ( is_visible ) {
            jQuery(this).removeClass('invisible');
        } else {
            jQuery(this).addClass('invisible');
        }
    });
}

function industrium_customizer_repeater_uniqid(prefix, more_entropy) {
    if (typeof prefix === 'undefined') {
        prefix = '';
    }

    var retId;
    var php_js;
    var formatSeed = function (seed, reqWidth) {
        seed = parseInt(seed, 10)
            .toString(16);
        if (reqWidth < seed.length) {
            return seed.slice(seed.length - reqWidth);
        }
        if (reqWidth > seed.length) {
            return new Array(1 + (reqWidth - seed.length))
                .join('0') + seed;
        }
        return seed;
    };

    // BEGIN REDUNDANT
    if (!php_js) {
        php_js = {};
    }
    // END REDUNDANT
    if (!php_js.uniqidSeed) {
        php_js.uniqidSeed = Math.floor(Math.random() * 0x75bcd15);
    }
    php_js.uniqidSeed++;

    retId = prefix;
    retId += formatSeed(parseInt(new Date()
        .getTime() / 1000, 10), 8);
    retId += formatSeed(php_js.uniqidSeed, 5);
    if (more_entropy) {
        retId += (Math.random() * 10)
            .toFixed(8)
            .toString();
    }

    return retId;
}

function industrium_customizer_repeater_refresh_social_icons(th) {
    var icons_repeater_values = [];
    th.find('.customizer-repeater-social-repeater-container').each(function () {
        var icon = jQuery(this).find('.icp').val();
        var link = jQuery(this).find('.customizer-repeater-social-repeater-link').val();
        var id = jQuery(this).find('.customizer-repeater-social-repeater-id').val();

        if (!id) {
            id = 'customizer-repeater-social-repeater-' + industrium_customizer_repeater_uniqid();
            jQuery(this).find('.customizer-repeater-social-repeater-id').val(id);
        }

        if (icon !== '' && link !== '') {
            icons_repeater_values.push({
                'icon': icon,
                'link': link,
                'id': id
            });
        }
    });

    th.find('.social-repeater-socials-repeater-colector').val(JSON.stringify(icons_repeater_values));
    industrium_customizer_repeater_refresh_general_control_values();
}

function industrium_customizer_repeater_refresh_general_control_values() {
    jQuery('.customizer-repeater-general-control-repeater').each(function () {
        var values = [];
        var th = jQuery(this);
        th.find('.customizer-repeater-general-control-repeater-container').each(function () {
            var icon_value = jQuery(this).find('.icp').val();
            var link = jQuery(this).find('.customizer-repeater-link-control').val();
            var title = jQuery(this).find('.customizer-repeater-title-control').val();
            var id = jQuery(this).find('.social-repeater-box-id').val();
            if (!id) {
                id = 'social-repeater-' + industrium_customizer_repeater_uniqid();
                jQuery(this).find('.social-repeater-box-id').val(id);
            }

            if ( title !== '' || icon_value !== '' || link !== '' ) {
                values.push({
                    'icon_value': icon_value,
                    'link': link,
                    'title': industrium_escape_html(title),
                    'id': id
                });
            }
        });
        th.find('.customizer-repeater-colector').val(JSON.stringify(values)).trigger('change');
    });
}

function industrium_get_resolution_value($element) {
    var selected_values = {
        width:   $element.find('.resolution-value-width').val(),
        height:  $element.find('.resolution-value-height').val()
    };
    $element.find('.customize-control-resolution-values').val(JSON.stringify(selected_values)).trigger('change');
}

function industrium_get_dimensions_value($element) {
    var selected_values = {
        top:    $element.find('.dimensions-value-top').val(),
        right:  $element.find('.dimensions-value-right').val(),
        bottom: $element.find('.dimensions-value-bottom').val(),
        left:   $element.find('.dimensions-value-left').val(),
        unit:   $element.find('.dimensions-value-unit').val()
    };
    $element.find('.customize-control-dimensions-values').val(JSON.stringify(selected_values)).trigger('change');
}

function industrium_get_font_value($element) {
    var selected_values = {
        font_family:            $element.find('.font-value-font-family').val(),
        font_backup:            $element.find('.font-value-font-backup').val(),
        font_styles:            $element.find('.font-value-font-styles').val(),
        font_subset:            $element.find('.font-value-font-subset').val(),
        font_size:              $element.find('.font-value-font-size').val(),
        font_size_unit:         $element.find('.font-value-font-size-unit').val(),
        line_height:            $element.find('.font-value-line-height').val(),
        line_height_unit:       $element.find('.font-value-line-height-unit').val(),
        text_transform:         $element.find('.font-value-text-transform').val(),
        letter_spacing:         $element.find('.font-value-letter-spacing').val(),
        letter_spacing_unit:    $element.find('.font-value-letter-spacing-unit').val(),
        word_spacing:           $element.find('.font-value-word-spacing').val(),
        word_spacing_unit:      $element.find('.font-value-word-spacing-unit').val(),
        font_style:             $element.find('.font-value-font-style').val(),
        font_weight:            $element.find('.font-value-font-weight').val()
    };
    $element.find('.customize-control-font-values').val(JSON.stringify(selected_values)).trigger('change');
}

function industrium_ctype_digit(text) {
    if (typeof text !== 'string') {
        return false;
    }
    this.setlocale('LC_ALL', 0);
    return text.search(this.php_js.locales[this.php_js.localeCategories.LC_CTYPE].LC_CTYPE.dg) !== -1;
}

var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;'
};

function industrium_escape_html(string) {
    string = String(string).replace(new RegExp('\r?\n', 'g'), '<br />');
    string = String(string).replace(/\\/g, '&#92;');
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });

}

jQuery(document).ready(function($) {

    $(document).on('change', '.customize-control select, .customize-control input, .customize-control textarea', function () {
        industrium_customizer_dependancy();
    });

    /**
     * Alpha Color Picker Custom Control
     */
    $( '.alpha-color-control' ).each( function() {

        // Scope the vars.
        var $control, startingColor, paletteInput, showOpacity, defaultColor, palette,
            colorPickerOptions, $container, $alphaSlider, alphaVal, sliderOptions;

        // Store the control instance.
        $control = $( this );

        // Get a clean starting value for the option.
        startingColor = $control.val().replace( /\s+/g, '' );

        // Get some data off the control.
        paletteInput = $control.attr( 'data-palette' );
        showOpacity  = $control.attr( 'data-show-opacity' );
        defaultColor = $control.attr( 'data-default-color' );

        // Process the palette.
        if ( paletteInput.indexOf( '|' ) !== -1 ) {
            palette = paletteInput.split( '|' );
        } else if ( 'false' == paletteInput ) {
            palette = false;
        } else {
            palette = true;
        }

        // Set up the options that we'll pass to wpColorPicker().
        colorPickerOptions = {
            change: function( event, ui ) {
                var key, value, alpha, $transparency;

                key = $control.attr( 'data-customize-setting-link' );
                value = $control.wpColorPicker( 'color' );

                // Set the opacity value on the slider handle when the default color button is clicked.
                if ( defaultColor == value ) {
                    alpha = acp_get_alpha_value_from_color( value );
                    $alphaSlider.find( '.ui-slider-handle' ).text( alpha );
                }

                // Send ajax request to wp.customize to trigger the Save action.
                wp.customize( key, function( obj ) {
                    obj.set( value );
                });

                $transparency = $container.find( '.transparency' );

                // Always show the background color of the opacity slider at 100% opacity.
                $transparency.css( 'background-color', ui.color.toString( 'no-alpha' ) );
            },
            palettes: palette // Use the passed in palette.
        };

        // Create the colorpicker.
        $control.wpColorPicker( colorPickerOptions );

        $container = $control.parents( '.wp-picker-container:first' );

        // Insert our opacity slider.
        $( '<div class="alpha-color-picker-container">' +
            '<div class="min-click-zone click-zone"></div>' +
            '<div class="max-click-zone click-zone"></div>' +
            '<div class="alpha-slider"></div>' +
            '<div class="transparency"></div>' +
            '</div>' ).appendTo( $container.find( '.wp-picker-holder' ) );

        $alphaSlider = $container.find( '.alpha-slider' );

        // If starting value is in format RGBa, grab the alpha channel.
        alphaVal = acp_get_alpha_value_from_color( startingColor );

        // Set up jQuery UI slider() options.
        sliderOptions = {
            create: function( event, ui ) {
                var value = $( this ).slider( 'value' );

                // Set up initial values.
                $( this ).find( '.ui-slider-handle' ).text( value );
                $( this ).siblings( '.transparency ').css( 'background-color', startingColor );
            },
            value: alphaVal,
            range: 'max',
            step: 1,
            min: 0,
            max: 100,
            animate: 300
        };

        // Initialize jQuery UI slider with our options.
        $alphaSlider.slider( sliderOptions );

        // Maybe show the opacity on the handle.
        if ( 'true' == showOpacity ) {
            $alphaSlider.find( '.ui-slider-handle' ).addClass( 'show-opacity' );
        }

        // Bind event handlers for the click zones.
        $container.find( '.min-click-zone' ).on( 'click', function() {
            acp_update_alpha_value_on_color_control( 0, $control, $alphaSlider, true );
        });
        $container.find( '.max-click-zone' ).on( 'click', function() {
            acp_update_alpha_value_on_color_control( 100, $control, $alphaSlider, true );
        });

        // Bind event handler for clicking on a palette color.
        $container.find( '.iris-palette' ).on( 'click', function() {
            var color, alpha;

            color = $( this ).css( 'background-color' );
            alpha = acp_get_alpha_value_from_color( color );

            acp_update_alpha_value_on_alpha_slider( alpha, $alphaSlider );

            // Sometimes Iris doesn't set a perfect background-color on the palette,
            // for example rgba(20, 80, 100, 0.3) becomes rgba(20, 80, 100, 0.298039).
            // To compensante for this we round the opacity value on RGBa colors here
            // and save it a second time to the color picker object.
            if ( alpha != 100 ) {
                color = color.replace( /[^,]+(?=\))/, ( alpha / 100 ).toFixed( 2 ) );
            }

            $control.wpColorPicker( 'color', color );
        });

        // Bind event handler for clicking on the 'Clear' button.
        $container.find( '.button.wp-picker-clear' ).on( 'click', function() {
            var key = $control.attr( 'data-customize-setting-link' );

            // The #fff color is delibrate here. This sets the color picker to white instead of the
            // defult black, which puts the color picker in a better place to visually represent empty.
            $control.wpColorPicker( 'color', '#ffffff' );

            // Set the actual option value to empty string.
            wp.customize( key, function( obj ) {
                obj.set( '' );
            });

            acp_update_alpha_value_on_alpha_slider( 100, $alphaSlider );
        });

        // Bind event handler for clicking on the 'Default' button.
        $container.find( '.button.wp-picker-default' ).on( 'click', function() {
            var alpha = acp_get_alpha_value_from_color( defaultColor );

            acp_update_alpha_value_on_alpha_slider( alpha, $alphaSlider );
        });

        // Bind event handler for typing or pasting into the input.
        $control.on( 'input', function() {
            var value = $( this ).val();
            var alpha = acp_get_alpha_value_from_color( value );

            acp_update_alpha_value_on_alpha_slider( alpha, $alphaSlider );
        });

        // Update all the things when the slider is interacted with.
        $alphaSlider.slider().on( 'slide', function( event, ui ) {
            var alpha = parseFloat( ui.value ) / 100.0;

            acp_update_alpha_value_on_color_control( alpha, $control, $alphaSlider, false );

            // Change value shown on slider handle.
            $( this ).find( '.ui-slider-handle' ).text( ui.value );
        });

    });

    /**
     * Override the stock color.js toString() method to add support for outputting RGBa or Hex.
     */
    Color.prototype.toString = function( flag ) {

        // If our no-alpha flag has been passed in, output RGBa value with 100% opacity.
        // This is used to set the background color on the opacity slider during color changes.
        if ( 'no-alpha' == flag ) {
            return this.toCSS( 'rgba', '1' ).replace( /\s+/g, '' );
        }

        // If we have a proper opacity value, output RGBa.
        if ( 1 > this._alpha ) {
            return this.toCSS( 'rgba', this._alpha ).replace( /\s+/g, '' );
        }

        // Proceed with stock color.js hex output.
        var hex = parseInt( this._color, 10 ).toString( 16 );
        if ( this.error ) { return ''; }
        if ( hex.length < 6 ) {
            for ( var i = 6 - hex.length - 1; i >= 0; i-- ) {
                hex = '0' + hex;
            }
        }

        return '#' + hex;
    };

    /**
     * Given an RGBa, RGB, or hex color value, return the alpha channel value.
     */
    function acp_get_alpha_value_from_color( value ) {
        var alphaVal;

        // Remove all spaces from the passed in value to help our RGBa regex.
        value = value.replace( / /g, '' );

        if ( value.match( /rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/ ) ) {
            alphaVal = parseFloat( value.match( /rgba\(\d+\,\d+\,\d+\,([^\)]+)\)/ )[1] ).toFixed(2) * 100;
            alphaVal = parseInt( alphaVal );
        } else {
            alphaVal = 100;
        }

        return alphaVal;
    }

    /**
     * Force update the alpha value of the color picker object and maybe the alpha slider.
     */
    function acp_update_alpha_value_on_color_control( alpha, $control, $alphaSlider, update_slider ) {
        var iris, colorPicker, color;

        iris = $control.data( 'a8cIris' );
        colorPicker = $control.data( 'wpWpColorPicker' );

        // Set the alpha value on the Iris object.
        iris._color._alpha = alpha;

        // Store the new color value.
        color = iris._color.toString();

        // Set the value of the input.
        $control.val( color );

        // Update the background color of the color picker.
        colorPicker.toggler.css({
            'background-color': color
        });

        // Maybe update the alpha slider itself.
        if ( update_slider ) {
            acp_update_alpha_value_on_alpha_slider( alpha, $alphaSlider );
        }

        // Update the color value of the color picker object.
        $control.wpColorPicker( 'color', color );
    }

    /**
     * Update the slider handle position and label.
     */
    function acp_update_alpha_value_on_alpha_slider( alpha, $alphaSlider ) {
        $alphaSlider.slider( 'value', alpha );
        $alphaSlider.find( '.ui-slider-handle' ).text( alpha.toString() );
    }

    /**
    * Resolution Custom Control
    */
    $('.customize-control-resolution input[type="number"]').on('change', function() {
        industrium_get_resolution_value( $(this).parents('.customize-control-resolution') );
    });
    $('.customize-control-resolution input[type="number"]').on('keyup', function() {
        if ( $(this).val() != '' ) {
            if ( parseInt( $(this).val() ) != 0 ) {
                $(this).val( Math.abs(parseInt( $(this).val() )) );
            } else {
                $(this).val(1);
            }
            if ( $(this).siblings('input[type="number"]').val() == '' || parseInt( $(this).siblings('input[type="number"]').val() ) == 0 ) {
                $(this).siblings('input[type="number"]').val(1);
            }
        } else {
            $(this).siblings('input[type="number"]').val('');
        }
    });

    /**
    * Dimensions Custom Control
    */
    $('.customize-control-dimensions select, .customize-control-dimensions input[type="number"]').on('change', function() {
        industrium_get_dimensions_value( $(this).parents('.customize-control-dimensions') );
    });

    /**
     * Google Font Custom Control
     */
    $('.industrium-google-fonts-list').on('change', function () {
        var elementWeightStyle = $(this).parent().parent().find('.industrium-google-font-styles');
        var elementSubset = $(this).parent().parent().find('.industrium-google-font-subset');
        var elementWeight = $(this).parent().parent().find('.industrium-google-font-weight');
        var selectedFont = $(this).val();
        var selectedWeightStyle = elementWeightStyle.val();
        var selectedSubset = elementSubset.val();
        var customizerControlName = $(this).attr('data-name');
        var elementWeightStyleCount = 0;
        var elementWeightCount = 0;
        var elementSubsetCount = 0;

        // Clear Weight/Style dropdowns
        elementWeightStyle.empty();
        elementWeight.empty();
        elementSubset.empty();
        // Make sure Weight & Subset dropdowns are enabled
        elementWeightStyle.prop('disabled', false);
        elementWeight.prop('disabled', false);
        elementSubset.prop('disabled', false);

        // Get the Google Fonts control object
        var bodyfontcontrol = _wpCustomizeSettings.controls[customizerControlName];

        // Find the index of the selected font
        var gflist = $.makeArray(bodyfontcontrol.googlefontlist.items);
        var indexes = $.map(gflist, function (obj, index) {
            if (obj.family === selectedFont) {
                return index;
            }
        });
        var index = indexes[0];

        // For the selected Google font show the available weight/style variants
        $.each(gflist[index].variants, function (val, text) {
            var optval = text.replace('regular', '400');
            text = text.replace('100', 'Thin 100 ');
            text = text.replace('200', 'Extra-Light 200 ');
            text = text.replace('300', 'Light 300 ');
            text = text.replace('400', 'Regular 400 ');
            text = text.replace('500', 'Medium 500 ');
            text = text.replace('600', 'Semi-Bold 600 ');
            text = text.replace('700', 'Bold 700 ');
            text = text.replace('800', 'Extra-Bold 800 ');
            text = text.replace('900', 'Black 900 ');
            text = text.replace('regular', 'Regular 400 ');
            text = text.replace('italic', 'Italic ');
            text = $.trim(text);
            if (optval === selectedWeightStyle) {
                elementWeightStyle.append(
                    $('<option></option>').val(optval).html(text).attr('selected', 'selected')
                ).val(optval).change();
            } else {
                elementWeightStyle.append(
                    $('<option></option>').val(optval).html(text)
                );
            }
            elementWeightStyleCount++;
        });
        $.each(gflist[index].weights, function (val, text) {
            var optval = text.replace('regular', '400');
            text = text.replace('regular', '400 ');
            text = $.trim(text);
            if (optval === selectedWeight && industrium_ctype_digit(optval)) {
                elementWeightStyle.append(
                    $('<option></option>').val(optval).html(text).attr('selected', 'selected')
                ).val(optval).change();
            } else if (industrium_ctype_digit(optval)) {
                elementWeightStyle.append(
                    $('<option></option>').val(optval).html(text)
                );
            }
            elementWeightCount++;
        });
        $.each(gflist[index].subsets, function (val, text) {
            var optval = text;
            text = text.replace('-ext', ' Extended');
            text = text.replace('-', ' ');
            text = text.toLowerCase().replace(/\b[a-z]/g, function (txtVal) {
                txtVal = txtVal.toUpperCase();
                return txtVal;
            });
            if (optval === selectedSubset) {
                elementSubset.append(
                    $('<option></option>').val(optval).html(text).attr('selected', 'selected')
                ).val(optval).change();
            } else {
                elementSubset.append(
                    $('<option></option>').val(optval).html(text)
                );
            }
            elementSubsetCount++;
        });
        if (elementWeightStyleCount <= 0) {
            elementWeightStyle.append(
                $('<option></option>').val('').html('Not Available')
            );
            elementWeightStyle.prop('disabled', 'disabled');
        }
        if (elementWeightCount <= 0) {
            elementWeight.append(
                $('<option></option>').val('').html('Not Available')
            );
            elementWeight.prop('disabled', 'disabled');
        }
        if (elementSubsetCount <= 0) {
            elementSubset.append(
                $('<option></option>').val('').html('Not Available')
            );
            elementSubset.prop('disabled', 'disabled');
        }
    });
    $('.customize-control-google-font select, .customize-control-google-font input[type="number"]').on('change', function() {
        industrium_get_font_value( $(this).parents('.customize-control-google-font') );
    });

});

jQuery(document).ready(function() {
    var theme_conrols = jQuery('#customize-theme-controls');
    theme_conrols.on('click', '.customizer-repeater-customize-control-title', function () {
        jQuery(this).next().slideToggle('medium', function () {
            if (jQuery(this).is(':visible')){
                jQuery(this).prev().addClass('repeater-expanded');
                jQuery(this).css('display', 'block');
            } else {
                jQuery(this).prev().removeClass('repeater-expanded');
            }
        });
    });

    theme_conrols.on('change', '.icp',function(){
        industrium_customizer_repeater_refresh_general_control_values();
        return false;
    });

    /**
     * This adds a new box to repeater
     */
    theme_conrols.on('click', '.customizer-repeater-new-field', function () {
        var th = jQuery(this).parent();
        var id = 'customizer-repeater-' + industrium_customizer_repeater_uniqid();
        if (typeof th !== 'undefined') {
            /* Clone the first box*/
            var field = th.find('.customizer-repeater-general-control-repeater-container:first').clone( true, true );

            if (typeof field !== 'undefined') {
                /*Empty title*/
                field.find('.customizer-repeater-customize-control-title').text('New Item');

                /*Show icon selector*/
                field.find('.social-repeater-general-control-icon').show();

                /*Show delete box button because it's not the first box*/
                field.find('.social-repeater-general-control-remove-field').show();

                /* Empty control for icon */
                field.find('.input-group-addon').find('.fab').attr('class', 'fab');


                /*Remove all repeater fields except first one*/

                field.find('.customizer-repeater-social-repeater').find('.customizer-repeater-social-repeater-container').not(':first').remove();
                field.find('.customizer-repeater-social-repeater-link').val('');
                field.find('.social-repeater-socials-repeater-colector').val('');

                /*Remove value from icon field*/
                field.find('.icp').val('');

                /*Remove value from link field*/
                field.find('.customizer-repeater-link-control').val('');

                /*Set box id*/
                field.find('.social-repeater-box-id').val(id);

                /*Remove value from title field*/
                field.find('.customizer-repeater-title-control').val('');

                // field.find('.customize-control-notifications-container').remove();

                /*Append new box*/
                th.find('.customizer-repeater-general-control-repeater-container:first').parent().append(field);

                /*Refresh values*/
                industrium_customizer_repeater_refresh_general_control_values();
            }

        }
        return false;
    });

    theme_conrols.on('click', '.social-repeater-general-control-remove-field', function () {
        if (typeof    jQuery(this).parent() !== 'undefined') {
            jQuery(this).parent().hide(500, function(){
                jQuery(this).parent().remove();
                industrium_customizer_repeater_refresh_general_control_values();
            });
        }
        return false;
    });

    theme_conrols.on('keyup', '.customizer-repeater-title-control', function () {
        var cont = jQuery(this).parents('.customizer-repeater-general-control-repeater-container');
        cont.find('.customizer-repeater-customize-control-title').text(jQuery(this).val());
        industrium_customizer_repeater_refresh_general_control_values();
    });

    theme_conrols.on('keyup', '.customizer-repeater-link-control', function () {
        industrium_customizer_repeater_refresh_general_control_values();
    });

    /*Drag and drop to change icons order*/
    jQuery('.customizer-repeater-general-control-droppable').sortable({
        axis: 'y',
        update: function () {
            industrium_customizer_repeater_refresh_general_control_values();
        }
    });

    /*--------------- Select2 ----------------*/
    jQuery('.dropdown_select2_control').each(function(){
        jQuery('.customize-control-select2', this).select2({
            allowClear: true
        });
    });

    jQuery('.customize-control-select2').on('change', function() {
        var select2Val = jQuery(this).val();
        jQuery(this).parent().find('.customize-control-dropdown-select2').val(select2Val).trigger('change');
    });

});
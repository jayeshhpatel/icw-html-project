<?php
    if (class_exists('\Elementor\Plugin')) {
        if (did_action('elementor/init')) {            
            $active_breakpoints = \Elementor\Plugin::$instance->breakpoints->get_active_breakpoints();
            if( !empty($active_breakpoints) ) {
                global $industrium_custom_css;
                $counter = 0;
                $prev_breakpoint = null;
                foreach ( $active_breakpoints as $breakpoint_key => $breakpoint ) {
                    $counter++;
                    if($breakpoint->get_name() === 'widescreen') {
                        $industrium_custom_css .= '
                        @media only screen and (min-width:' . $breakpoint->get_value() . 'px) {';
                            for ($i = 1, $j = 10; $i <= 10; $i++, $j--) {
                                $industrium_custom_css .= "\n.elementor-reverse-" . $breakpoint->get_name() . ' > .elementor-container > .elementor-row > ' . 
                                    ( $i == 1 ? ':first-child' : ':nth-child(' . $i . ')') . '{';
                                $industrium_custom_css .= 'order:' . $j . ';';
                                $industrium_custom_css .= '}';
                            }
                        $industrium_custom_css .= "\n}";
                        continue;
                    }
                    if($counter === 1) {
                        $industrium_custom_css .= '
                        @media only screen and (max-width:' . $breakpoint->get_value() . 'px) {';
                            for ($i = 1, $j = 10; $i <= 10; $i++, $j--) {
                                $industrium_custom_css .= "\n.elementor-reverse-" . $breakpoint->get_name() . ' > .elementor-container > .elementor-row > ' . 
                                    ( $i == 1 ? ':first-child' : ':nth-child(' . $i . ')') . '{';
                                $industrium_custom_css .= 'order:' . $j . ';';
                                $industrium_custom_css .= '}';
                            }
                        $industrium_custom_css .= "\n}";
                    } elseif ($counter !== 1 && $prev_breakpoint) {
                        $industrium_custom_css .= '
                        @media only screen and (min-width:' . ($prev_breakpoint + 1) . 'px) and (max-width:' . $breakpoint->get_value() . 'px) {';
                            for ($i = 1, $j = 10; $i <= 10; $i++, $j--) {
                                $industrium_custom_css .= "\n.elementor-reverse-" . $breakpoint->get_name() . ' > .elementor-container > .elementor-row > ' . 
                                    ( $i == 1 ? ':first-child' : ':nth-child(' . $i . ')') . '{';
                                $industrium_custom_css .= 'order:' . $j . ';';
                                $industrium_custom_css .= '}';
                            }
                        $industrium_custom_css .= "\n}";
                    }
                    $prev_breakpoint = $breakpoint->get_value();
                }
            }            
        }        
    }
?>
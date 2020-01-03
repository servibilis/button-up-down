<?php

/**
* Plugin Name: button up down
* Plugin URI: indi.site
* Description: button up down
* Version: 1.1
* Author: Andrii Kulyk
* Author URI: http://indi.site
*/

add_action("wp_enqueue_scripts", "button_up_down_js_script");
function button_up_down_js_script() {
	wp_register_script('button_up_down',plugin_dir_url(__FILE__).'button-up-down.js', array (),'1.1',true);
	wp_enqueue_script('button_up_down');
	}
?>

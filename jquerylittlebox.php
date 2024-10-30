<?php
  /*
  Plugin Name: jQuery Littlebox for WP
  Plugin URI: http://blog.ilooker.tk/
  Description: Modded from Joel Vardy's lightbox.
  Version: 1.0
  Author: Rufus
  Author URI: http://blog.ilooker.tk/
  */
function jquery_littlebox_load_headers() {
	$plugin_path = plugins_url('/', __FILE__);
	$boxurl = $plugin_path . 'js/littlebox.js';
	$jq_url = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', $jq_url, false, '1.6.1');
	wp_enqueue_script('jquerylittlebox', $boxurl,'jquery', '1.5.0');
}
add_action('wp_head', 'jquery_littlebox_load_headers',1);//I trid to add_action to wp_footer, and add_action to wp_head with priority 10, but they didn't work. I will be glad if someone helps me out.
?>
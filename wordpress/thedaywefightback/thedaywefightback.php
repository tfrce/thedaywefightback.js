<?php

/**
 * @package The_Day_We_Fight_Back
 * @version 0.1
 */
/*
  Plugin Name: The Day We Fight Back
  Plugin URI: http://thedaywefightback.org
  Description: Congress is trying to pass the FISA Improvements Act, a law that would essentially legalize complete surveilance by the NSA.  Fight back by adding a banner to your page on February 11th to show your support.
  Author: Public
  Version: 0.1
  Author URI: https://github.com/tfrce/thedaywefightback.js
 */

wp_enqueue_script('theDayWeFightBack', plugins_url('bodyScript.js', __FILE__), false, null, true);

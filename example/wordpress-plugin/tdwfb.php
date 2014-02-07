<?php
/*
Plugin Name: tdwfb
Plugin URI: https://thedaywefightback.org/
Description: Embed the script code for thedaywefightback.org (2014-02-11)
Author: Oliver Schneider
Version: 0.1
Author URI: http://windirstat.info
*/
///////////////////////////////////////////////////////////////////////////////
// How to use?
// This has been tested with WordPress 3.8.1, but the used hook existed already
// in WordPress 2.x.
// Copy this .php script into the folder wp-content/plugins/ underneath the
// root folder of your blog and then enable the script inside the admin
// dashboard (it is named tdwfb).
//
// Wie benutzt man's?
// Dieses Plugin wurde mit WordPress 3.8.1 getestet, aber die benutzte Funktion
// existierte auch schon in WordPress 2.x.
// Kopiert dieses .php-Skript in das Unterverzeichnis wp-content/plugins/ eures
// Blogs und aktiviert es dann in der Administrationsoberfläche (Name: tdwfb).
///////////////////////////////////////////////////////////////////////////////

function tdwfb_head()
{
	echo <<<EOT
<!--[if !(lte IE 8)]><!-->
<script type="text/javascript">
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
<!--<![endif]-->

EOT;
}
add_action('wp_head', 'tdwfb_head');
?>

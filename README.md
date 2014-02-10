# thedaywefightback.js

_Please feel free to make pull requests with any fixes, and leave suggestions and bugs on our [issue](http://github.com/tfrce/thedaywefightback.js/issues) page._

thedaywefightback.js is a javascript snippet that automatically activates at midnight of February 11th and adds a banner to your site for 26 hours in support of [thedaywefightback.org](https://thedaywefightback.org).

The goal is to drive as many phone calls and emails on the 11th. The calls are connected automatically by our call server for free thanks to Twilio.

**If you own a website, no matter how big or small, you can be part of this.**

<a href="http://tfrce.github.io/thedaywefightback.js/example/banner.html" target="_blank"><img src="screenshots/tdwfb-banner.png" alt="banner" /></a>


## Demo pages

* [US demo page](http://tfrce.github.io/thedaywefightback.js/example/banner.html) - Shown automatically to visitors from US IP addresses.
* [International demo page](http://tfrce.github.io/thedaywefightback.js/example/banner_international.html) - Shown automatically to visitors from non-US IP addresses.
* [Call-only version of the banner](http://tfrce.github.io/thedaywefightback.js/example/banner_callonly.html) - Shown if the callOnly flag is set to true, focusses people on the phone call action.

*Note: Please don't copy the code from the source files of the demo pages. Use the code below instead.* 

## Getting started

You can add the snippet to your site now - it won't be activated until midnight EST on February 11th and will remain active for 26 hours.

_Place the code below before `</body>` tag. The script loads asynchronously and won't affect page load times._

```html
<!--[if !(lt IE 8)]><!-->
<script type="text/javascript">
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
<!--<![endif]-->
```

The widget supports all screen sizes and platforms, if you encounter a bug please let us know on the [issues](http://github.com/tfrce/thedaywefightback.js/issues) page.

#### Other ways to install the banner:

* [Cloudflare app](https://www.cloudflare.com/apps/the_day_we_fight_back) - Allows you to add the banner with one click if you use Cloudflare.
* [Wordpress plugin](https://github.com/modemlooper/thedaywefightback.wp) - Adds the banner to a Wordpress site (also available [at Wordpress.org](http://wordpress.org/plugins/tdwfb/)).
* [Drupal 7.x plugin](https://github.com/mrjameshamilton/thedaywefightback.drupal) - Adds the banner to a Drupal 7.x site.
* [Octopress instructions](./OCTOPRESS.md) - Instructions for adding the banner to an Octopress blog
* [Subreddit instructions](./SUBREDDIT.md) - Add a static banner to your subreddit
* [Joomla plugin](https://github.com/betweenbrain/tdwfb/archive/master.zip) - Adds the banner to a Joomla 2.5/3.2 site.

## Configuration

You can configure the banner using a javascript object:

```html
<!--[if !(lt IE 8)]><!-->
<script type="text/javascript"> 
  // The defaults are set below
  var tdwfb_config = {
    greeting: 'Dear Internet', // Sets the salutation shown in the banner.
    disableDate: false, // If true, the banner shows even if the date is not yet 02/11/2014. Use for testing.
    callOnly: true // If true, the banner emphasizes calling congress over emailing.
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
<!--<![endif]-->
```

###Custom CSS

The body tag has a class of **"tdwfb-banner"**. You can use this to style elements if needed.

For example, to change the background from black to something lighter:

    .tdwfb-banner {
    	background: #111;
    }


## Let us know you're taking part

If you add the banner to your site, sign up at [TheDayWeFightBack.org](https://thedaywefightback.org) and let us know.

## Thanks

Built by [Taskforce.is](http://taskforce.is) members [Thomas Davis](https://twitter.com/neutralthoughts), [Sina Khanifar](https://github.com/sinak/), [Sam Mularczyk](https://twitter.com/sammularczyk) and [Beau Gunderson](https://twitter.com/beaugunderson).

Design by [Max Temkin](http://maxistentialism.com/).

**A big thank you to [Twilio](https://www.twilio.com/) for sponsoring calls.**


## Screenshots

### Main Banner
<img src="screenshots/tdwfb-banner.png" alt="banner" />

### Call Tool Pop-up
<img src="screenshots/call-tool.png" alt="call tool" />

### Email Tool Pop-up
<img src="screenshots/email-tool.png" alt="email tool" />

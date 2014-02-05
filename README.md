# thedaywefightback.js

_Please leave questions, suggestions and bugs on our [issue](http://github.com/tfrce/thedaywefightback.js/issues) page._

thedaywefightback.js is a javascript snippet that automatically activates at midnight of February 11th and adds a banner to your site for 24 hours in support of [thedaywefightback.org](https://thedaywefightback.org).

The goal is to drive as many phone calls and emails on the 11th. The calls are connected automatically by our servers and are free of cost for the users, thanks to the kind sponsorship of [Twilio](http://twilio.com).

<img src="screenshots/tdwfb-banner.png" alt="banner" />

View the [US demo page](http://tfrce.github.io/thedaywefightback.js/example/banner.html) or the [international demo page](http://tfrce.github.io/thedaywefightback.js/example/banner_international.html)(Unless explicitly set the banner generally determines what to show based off your location).

You can add it to your site now - it won't be activated until midnight EST on February 11th. You can also host the files locally. After 24 hours the banner de-activates and should be removed from your website code.

**If you own a website, no matter how big or small, you can be part of this.**

## Getting started

Simply copy and paste the code below into your website, right above the closing `<body>` tag.

_Place the code below before `</body>` tag. The script loads asynchronously and won't affect page load times._

```html
<script type="text/javascript"> 
  // @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt GPL-v3-or-Later
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
  // @license-end
</script>
```

The widget supports all screen sizes and platforms, if you encounter a bug please let us know on the [issues](http://github.com/tfrce/thedaywefightback.js/issues) page.

**Other ways to install include;**

* [Cloudflare app](#)
* [Wordpress plugin](#)
* [Drupal plugin](#)


## Customize the banner

You can choose a different banner style and customize the preferences using a javascript object:

```html
<script type="text/javascript"> 
  // @license magnet:?xt=urn:btih:0b31508aeb0634b347b8270c7bee4d411b5d4109&dn=agpl-3.0.txt GPL-v3-or-Later
  // The defaults are set below
  var tdwfb_config = {
    greeting: 'Dear Internet Users', // Sets the salutation at the top left.
    debug_mode: false // If true, the banner shows even if the date is not yet 02/11/2014
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
  // @license-end
</script>
```

## Questions


Please feel free to fork and submit pull requests for any bugs or quirks you might find. thedaywefightback.js's code is licensed under the terms of the [GNU Affero General Public License](https://gnu.org/licenses/agpl) version 3, or, at your option, any later version (See [./COPYING].)

Built by [Taskforce.is](http://taskforce.is) members [Thomas Davis](https://twitter.com/neutralthoughts) and [Sina Khanifar](https://twitter.com/sinak).

**A big thank you to [Twilio](https://www.twilio.com/) for sponsoring calls and [Rob Spectre](https://twitter.com/dN0t) for all his help.**

## List of participating sites:

- [cdnjs](http://cdnjs.com)
- [Backbone Tutorials](http://backbonetutorials.com/)

- Submit a pull request or <a href="https://twitter.com/home?status=@sinak Please add our XXX to the list of sites participating in Project Megaphone" target="_blank">tweet</a> to be added here.


## Screenshots

<img src="screenshots/tdwfb-banner.png" alt="banner" />
<img src="screenshots/call-tool.png" alt="banner" />
<img src="screenshots/email-tool.png" alt="banner" />

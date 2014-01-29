# Project Megaphone

Saturday October 26th is the 12th anniversary of the PATRIOT Act. 

To mark the law's anniversary, the EFF, ACLU, Demand Progress, Free Press and dozens of other public advocacy groups in the StopWatching.us coalition are planning [a rally to protest mass surveilance](https://rally.stopwatching.us) in Washington, DC. We've spent countless hours organizing buses to transport people from nearby cities, assembled a great lineup of speakers, and filed the relevant permits. 

**If you own a website, no matter how big or small, we need your help.**

Mass surveillance is a grave challenge to privacy on the Internet, and threatens our ability to communicate and conduct transactions privately online. **This is a critical moment:** If we don't convince Congress to make meaningful change now, while Snowden's leaks have the public's attention, we may never have another chance.

## How Project Megaphone works

Project Megaphone is a simple script that you can add to your site. The script checks the IP of each visitor, and if they are within a 700km radius of Washington, D.C., displays a banner informing the user of the rally.

A few important notes:

* The banners are not displayed on mobile devices.
* The script automatically stops displaying the banner after 12pm on October 26th.
* The script and geolocation server have been thoroughly load-tested and can handle millions of hits per day.


## Banner styles

The "view example page" links below display the banners even if you're not near D.C.

**Default style** - <a href="http://tfrce.github.io/project-megaphone/example/default.html" target="_blank">view example page</a><br />
<img src="screenshots/default.png" alt="modal"width="280" />


**Modal** - <a href="http://tfrce.github.io/project-megaphone/example/modal.html" target="_blank">view example page</a><br />
<img src="screenshots/modal.png" alt="modal"width="280" />


**Strip** - <a href="http://tfrce.github.io/project-megaphone/example/strip.html" target="_blank">view example page</a><br />
<img src="screenshots/strip.png" alt="modal"width="280" />

## WordPress Plugin

Installing the script is now super easy with our WordPress plugin. Search for 'Project Megaphone Banner' in your WordPress plugins area, download it and activate it, that's it!

http://wordpress.org/plugins/project-megaphone-banner/

## Getting started

Simply copy and paste the code below into your website.

_Place the code below before `</body>` tag. The script loads asynchronously and won't affect page load times._

```html
<!--[if !(lte IE 8)]><!-->
<script> 
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1ux67szpr7bp0.cloudfront.net/project-megaphone/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
<!--<![endif]-->
```

## Script defaults

* The script will run between the date that you add it to your site and 12pm on October 26th.
* We only display the widget for people in 700km radius of Washington DC, based off their IP address.
* If a user clicks to close the banner, the banner will not be shown to them for another 48 hours.
* We only display banners to desktop computers; mobile devices won't see it.

## Configuration


You can choose a different banner style and customize the preferences using a javascript object:
```html
<!--[if !(lte IE 8)]><!-->
<script> 
  var tfrce_config = {
    show_style: 'default', // The three available styles are 'default', 'modal', and 'strip' .

    disableGeo: false, // If true, will show to all visitors not just those around Washington DC
    cookieTimeout: 172800 // This is the amount of time before the banner will be shown to a user again. Default value is 172800 (two days)
  };
  (function(){
    var e = document.createElement('script'); e.type='text/javascript'; e.async = true;
    e.src = document.location.protocol + '//d1ux67szpr7bp0.cloudfront.net/project-megaphone/widget.min.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
  })();
</script>
<!--<![endif]-->
```

Please feel free to fork and submit pull requests for any bugs or quirks you might find.  Project Megaphone's code is licensed under the terms of the [GNU Affero General Public License](https://gnu.org/licenses/agpl) version 3, or, at your option, any later version (See [./COPYING].)

Built by [Taskforce.is](http://taskforce.is) members [Braunson Yager](https://twitter.com/braunshizzle), [Thomas Davis](https://twitter.com/neutralthoughts), [Tyler Morgan](https://twitter.com/digismack), [Beau Gunderson](https://twitter.com/beaugunderson) and [Sina Khanifar](https://twitter.com/sinak).

## List of participating sites:

- [cdnjs](http://cdnjs.com)
- [Backbone Tutorials](http://backbonetutorials.com/)
- [BitBin](http://bitbin.it/)
- [Access](https://www.accessnow.org/)
- [Free Press](https://www.freepress.net/)
- [Opentrackers.org](https://opentrackers.org/)
- [sina.is](http://sina.is/)
- [Flagger.io](http://flagger.io)
- [EsyBoard](http://www.esyboard.com/)
- [Open Web Platform Daily Digest](http://webplatformdaily.org/)
- [Wordsnipe](http://wordsnipe.com/)
- [PrideSites.com](http://pridesites.com/)
- [ChrisMacNaughton.com](http://chrismacnaughton.com/)
- [jomgegar.com](http://jomgegar.com)
- [NishKriya.com](http://nishkriya.com)
- [Restore the Fourth SF](http://restorethefourthsf.com)
- [flood.firetree.net](http://flood.firetree.net)
- [RubbingAlcoholic](http://blog.rubbingalcoholic.com)
- Submit a pull request, <a href="https://twitter.com/home?status=@sinak Please add our XXX to the list of sites participating in Project Megaphone" target="_blank">tweet</a> or <a href="mailto:sina.khanifar@gmail.com" target="_blank">email us</a> to be added here.

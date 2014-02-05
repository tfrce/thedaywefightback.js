/*
   _            _     __                    
  | |_ __ _ ___| | __/ _| ___  _ __ ___ ___ 
  | __/ _` / __| |/ / |_ / _ \| '__/ __/ _ \
  | || (_| \__ \   <|  _| (_) | | | (_|  __/
   \__\__,_|___/_|\_\_|  \___/|_|  \___\___|

  ===============================================================================

  A generic widget include script which we will use to show further campaigns etc

  <thomasalwyndavis@gmail.com> or http://taskforce.is for support

  ===============================================================================

  @source: https://raw.github.com/tfrce/project-megaphone/gh-pages/widget.js

  @licstart  The following is the entire license notice for the
             JavaScript code in this page.

  Copyright (C) 2013 Taskforce <http://taskforce.is>

  The JavaScript code in this page is free software: you can
  redistribute it and/or modify it under the terms of the GNU Affero
  General Public License (GNU GPL) as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any
  later version.  The code is distributed WITHOUT ANY WARRANTY;
  without even the implied warranty of MERCHANTABILITY or FITNESS FOR
  A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 
  As additional permission under GNU AGPL version 3 section 7, you may
  distribute non-source (e.g., minimized or compacted) forms of that
  code without the copy of the GNU AGPL normally required by section
  4, provided you include this license notice and a URL through which
  recipients can access the Corresponding Source.
 
 @licend  The above is the entire license notice for the JavaScript
          code in this page.

*/

// Wrap widget in function to protect scope
var _tfrce_config = (typeof tfrce_config  !== 'undefined') ? tfrce_config  : {};

(function(window, widget_config){

  // Do configuration

  widget_config.show_style = widget_config.show_style || 'banner';
  widget_config.greeting = widget_config.greeting || 'Dear Internet';
  widget_config.debug = widget_config.debug || false;
  widget_config.callOnly = widget_config.callOnly || false;
  widget_config.startAsMinimized = widget_config.startAsMinimized || false;
  widget_config.disableDate = widget_config.disableDate || false;
  widget_config.campaign = widget_config.campaign || 'thedaywefightback';
  widget_config.cookieTimeout = widget_config.cookieTimeout || 172800;
  widget_config.overrideLocation = widget_config.overrideLocation || false;

  // Setup
  var active_campaign;
  var ASSET_URL, COOKIE_TIMEOUT;

  if(widget_config.debug) {
    ASSET_URL = '../thedaywefightback/';
    COOKIE_TIMEOUT = 200000;
  } else {
    ASSET_URL = '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js/thedaywefightback/';
    COOKIE_TIMEOUT = widget_config.cookieTimeout;
  }

  // Cookie helpers, taken from w3schools
  function setCookie(c_name,value,seconds) {
    var exdate = new Date(new Date().getTime() + seconds*1000);
    var c_value=escape(value) + ((seconds==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
  }

  function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) { c_start = c_value.indexOf(c_name + "="); };
    if (c_start == -1) { 
      c_value = null; 
    } else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) { c_end = c_value.length; }
      c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
  }



  // Define checks

  var checks = {
    correctDate: function(callback) {
      window.tdwfbCheckDate = callback;
      var script = document.createElement('script');
      script.src = '//dznh7un1y2etk.cloudfront.net/time?callback=tdwfbCheckDate'
      document.getElementsByTagName('head')[0].appendChild(script);
      window.tdwfbDateCallBackFailSafe = setTimeout(function () {
        // TODO - Potentially better logic for this fallback
        if(new Date().getDate() === 3) {
          callback({thedaywefightback: true});
        } else {
          callback({thedaywefightback: false});
        }
      }, 5000);
    },
    location: function (callback) {
      window.tdwfbParseLocation = callback;
      var script = document.createElement('script');
      script.src = 'https://geoip.taskforce.is/?callback=tdwfbParseLocation'
      document.getElementsByTagName('head')[0].appendChild(script);
      window.tdwfbLocationCallBackFailSafe = setTimeout(function () {
        // Set location to US and pass to callback
        callback({country: {iso_code: 'us'}});
      }, 5000);
    }
  }

  // Define campaigns

  var campaign = {
    thedaywefightback: {
      cookieName: 'thedaywefightback_hasseen',
      styles: {
        banner: {
          campaign_container: 'background: #000;position:fixed;width:100%;bottom:0;left:0;z-index:100000; padding: 0;-webkit-box-sizing: border-box; -moz-box-sizing: border-box;',
          iframe_container: 'position: relative; height: 350px; width:100%; margin: 0; background: #000; z-index:1;',
          iframe: 'width: 100%;height: 100%;border: 0;margin:0;padding:0; background: #000;',
          footerOverlay: 'cursor: pointer;position: absolute; bottom: 0; height: 50px; width:100%; margin: 0; background: none;z-index:2;',
          closeButton: 'border: 0;height: 26px;width: 26px;cursor: pointer;position: absolute;top:20px;right:20px;background: url("' + ASSET_URL +'imgs/close-button.png");',
          mobileCloseButton: 'border: 0;height: 20px;width: 20px;cursor: pointer;position: absolute;top:10px;right:10px;background: url("' + ASSET_URL +'imgs/close-button-mobile.png");',
          openButton: 'border: 0;height: 26px;width: 26px;cursor: pointer;position: absolute;bottom:10px;right:20px;background: url("' + ASSET_URL +'imgs/open-button.png");'
        }
      },
      minimized: false,
      show: function (options) {
        var cookie = getCookie(active_campaign.cookieName);
        if(widget_config.startAsMinimized && cookie === null) {
          this.minimized = true;
        }
        var style = active_campaign.styles[active_campaign.config.show_style]
        
        if(style.overlay) {
          var overlay = document.createElement('div');
          overlay.style.cssText = style.overlay;
          document.body.appendChild(overlay);
        }

        // Create a container
        var campaign_container = document.createElement('div');
        window.tdwfbCampaignContainer = campaign_container;
        campaign_container.style.cssText = style.campaign_container;

        // Create a container for the iframe so we can do padding and border-radius properly
        var iframe_container = document.createElement('div');
        iframe_container.style.cssText = style.iframe_container;

        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        

        if(x< 767) {
          if(!this.minimized) {
            iframe_container.style.height = "100px";
          } else {
            iframe_container.style.height = "0px";
          }
        } else {
          // Find out if user has minimized via cookie
          if(this.minimized) {
            iframe_container.style.height = "50px";
          } else {
            iframe_container.style.height = "350px";
          };
        }
        // Append Iframe and campaign container to document
        var footerOverlay = document.createElement('div');
        footerOverlay.style.cssText = style.footerOverlay;
        campaign_container.appendChild(footerOverlay);
        campaign_container.appendChild(iframe_container);

        document.body.appendChild(campaign_container);


        var iframe = document.createElement('iframe');
        iframe.style.cssText = style.iframe;
        var selectedLocation = '';
        if(options.location.country.iso_code) {
          selectedLocation = options.location.country.iso_code;
        }
        var firstTime = true;
        if(cookie !== null) {
          firstTime = false;
        }
        // a Hack, if mobile set firsttime to false so splash page never shows
        if(x < 767) {
          firstTime = false;
        }
        if( (options.location && options.location.country.iso_code === 'us') || widget_config.overrideLocation == "usa") {
          // Set the source of the iframe to the configured show_style type
          iframe.src = ASSET_URL + active_campaign.config.show_style + '.html?firstTime='+firstTime+'&callOnly='+widget_config.callOnly+'&iso='+selectedLocation+'&greeting=' + widget_config.greeting;
        } else if ( (options.location && options.location.country.iso_code !== 'us') || widget_config.overrideLocation == "usa" ) {
          iframe.src = ASSET_URL + active_campaign.config.show_style + '_international.html?firstTime='+firstTime+'&iso='+selectedLocation+'&greeting=' + widget_config.greeting;
        }
        else {
          iframe.src = ASSET_URL + active_campaign.config.show_style + '.html?firstTime='+firstTime+'&callOnly='+widget_config.callOnly+'&iso='+selectedLocation+'&greeting=' + widget_config.greeting;
        }
        iframe_container.appendChild(iframe);
        var that = this;

        if(x > 767) {

          // Setup a close button
          var closeButton = document.createElement('button');
          closeButton.style.cssText = style.closeButton;
          iframe_container.appendChild(closeButton);
          // Setup a open button
          var openButton = document.createElement('button');
          openButton.style.cssText = style.openButton;
          iframe_container.appendChild(openButton);


          if(this.minimized) {
            openButton.style.display = 'block';
            closeButton.style.display = 'none';
            footerOverlay.style.display = 'block';
          } else {
            openButton.style.display = 'none';
            closeButton.style.display = 'block';
            footerOverlay.style.display = 'none';

          };
          var toggleDisplay = function () {
            if(!that.minimized) {
              iframe_container.style.height = "50px";
              that.minimized = true;
              footerOverlay.style.display = 'block';
              closeButton.style.display = 'none';
              openButton.style.display = 'block';
              setCookie(active_campaign.cookieName, '{"minimized": true}', COOKIE_TIMEOUT);
            } else {
              iframe_container.style.height = "350px";
              that.minimized = false;
              footerOverlay.style.display = 'none';
              openButton.style.display = 'none';
              closeButton.style.display = 'block';
              setCookie(active_campaign.cookieName, '{"minimized": false}', COOKIE_TIMEOUT);
            };
          };

          footerOverlay.onclick = toggleDisplay;
          closeButton.onclick = toggleDisplay
          
        } else {

          var mobileCloseButton = document.createElement('button');
          mobileCloseButton.style.cssText = style.mobileCloseButton;
          iframe_container.appendChild(mobileCloseButton);

          mobileCloseButton.onclick = function() {
              setCookie(active_campaign.cookieName, '{"minimized": true}', COOKIE_TIMEOUT);
              document.body.removeChild(campaign_container);        
          }
        }
    },

      init: function (config) {
        active_campaign.config = config;

        var cookie = getCookie(active_campaign.cookieName);
        if(cookie) {
          var cData = JSON.parse(cookie);
          this.minimized = cData.minimized;
        }

        checks.correctDate(function (response) {
          clearTimeout(window.tdwfbDateCallBackFailSafe);
          if(response && (response.thedaywefightback || widget_config.disableDate || widget_config.debug)) {
            checks.location(function (location) {
              window.tdwfbLocation = location;
              clearTimeout(window.tdwfbLocationCallBackFailSafe);
              active_campaign.show({location: location, widget_config: widget_config});
            });
          }
        });
        var that = this;
        window.onresize = function(event) {
          if(window.tdwfbResizeCallback) {
            clearTimeout(window.tdwfbResizeCallback);

          }
          window.tdwfbResizeCallback = setTimeout(function () {
            var w = window,
              d = document,
              e = d.documentElement,
              g = d.getElementsByTagName('body')[0],
              x = w.innerWidth || e.clientWidth || g.clientWidth,
              y = w.innerHeight|| e.clientHeight|| g.clientHeight;
              document.body.removeChild(window.tdwfbCampaignContainer);
              that.show({location: window.tdwfbLocation, widget_config: widget_config});        

          }, 50);

        };
      }
    }
  }

  // Load campaign if exist

  if(typeof campaign[widget_config.campaign] !== 'undefined') {
    active_campaign = campaign[widget_config.campaign];
    active_campaign.init(widget_config);
  } else {
    return false;
  }

})(window, _tfrce_config);

/*
   _            _     __
  | |_ __ _ ___| | __/ _| ___  _ __ ___ ___
  | __/ _` / __| |/ / |_ / _ \| '__/ __/ _ \
  | || (_| \__ \   <|  _| (_) | | | (_|  __/
   \__\__,_|___/_|\_\_|  \___/|_|  \___\___|

  =============================================================================

  A generic widget include script which we will use to show further campaigns

  <thomasalwyndavis@gmail.com> or http://taskforce.is for support

  =============================================================================

  @source: https://raw.github.com/tfrce/thedaywefightback.js/gh-pages/widget.js

  @licstart  The following is the entire license notice for the
             JavaScript code in this page.

  Copyright (C) 2014 Taskforce <http://taskforce.is>

  The JavaScript code in this page is free software: you can
  redistribute it and/or modify it under the terms of the GNU
  General Public License (GNU GPL) as published by the Free Software
  Foundation, either version 3 of the License, or (at your option) any
  later version.  The code is distributed WITHOUT ANY WARRANTY;
  without even the implied warranty of MERCHANTABILITY or FITNESS FOR
  A PARTICULAR PURPOSE.  See the GNU GPL for more details.

  As additional permission under GNU GPL version 3 section 7, you may
  distribute non-source (e.g., minimized or compacted) forms of that
  code without the copy of the GNU GPL normally required by section
  4, provided you include this license notice and a URL through which
  recipients can access the Corresponding Source.

 @licend  The above is the entire license notice for the JavaScript
          code in this page.

*/

// Wrap widget in function to protect scope
var _tdwfb_config = (typeof tdwfb_config  !== 'undefined') ? tdwfb_config  : {};

(function (window, widgetConfig) {
  var JSON;JSON||(JSON={});

  // Race against time hack to cache locations, need stringify to put in cookie cross browser

  // JSON2 - See http://www.JSON.org/js.html - Public Domain
  (function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
  e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
  "}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
  p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("",
  {"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();

  // Do configuration
  widgetConfig.show_style = widgetConfig.show_style || 'banner';
  widgetConfig.greeting = widgetConfig.greeting || 'Dear Internet';
  widgetConfig.debug = widgetConfig.debug || false;
  widgetConfig.localAssets = widgetConfig.localAssets || false;
  widgetConfig.callOnly = widgetConfig.callOnly || false;
  widgetConfig.startAsMinimized = widgetConfig.startAsMinimized || false;
  widgetConfig.disableDate = widgetConfig.disableDate || false;
  widgetConfig.campaign = widgetConfig.campaign || 'thedaywefightback';
  widgetConfig.cookieTimeout = widgetConfig.cookieTimeout || 172800;
  widgetConfig.overrideLocation = widgetConfig.overrideLocation || false;

  function debug() {
    if (widgetConfig.debug) {
      if (this.console) {
        console.log.apply(console, arguments);
      }
    }
  }

  // Setup
  var activeCampaign;
  var ASSET_URL;

  if (widgetConfig.localAssets) {
    ASSET_URL = '../thedaywefightback/';
  } else {
    ASSET_URL = '//d1agz031tafz8n.cloudfront.net/thedaywefightback.js' +
      '/thedaywefightback/';
  }

  // Cookie helpers, taken from w3schools
  function setCookie(c_name, value, seconds) {
    var exdate = new Date(new Date().getTime() + seconds * 1000);
    var c_value = escape(value) + ((seconds === null) ? '' : '; expires=' +
      exdate.toUTCString());
    document.cookie = c_name + '=' + c_value;
  }

  function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(' ' + c_name + '=');

    if (c_start === -1) {
      c_start = c_value.indexOf(c_name + '=');
    }

    if (c_start === -1) {
      c_value = null;
    } else {
      c_start = c_value.indexOf('=', c_start) + 1;
      var c_end = c_value.indexOf(';', c_start);
      if (c_end === -1) { c_end = c_value.length; }
      c_value = unescape(c_value.substring(c_start, c_end));
    }

    return c_value;
  }

  // Define checks
  var checks = {
    correctDate: function (callback) {
      debug('correctDate()');

      window.tdwfbCheckDate = function (data) {
        debug('tdwfbCheckDate()', data);

        callback(data);
      };

      var script = document.createElement('script');
      script.src = '//dznh7un1y2etk.cloudfront.net/time?callback=tdwfbCheckDate';
      document.getElementsByTagName('head')[0].appendChild(script);

      window.tdwfbDateCallBackFailSafe = setTimeout(function () {
        // TODO - Potentially better logic for this fallback
        if (new Date().getDate() === 11) {
          callback({thedaywefightback: true});
        } else {
          callback({thedaywefightback: false});
        }
      }, 5000);
    },
    location: function (callback) {
      debug('location()');

      window.tdwfbParseLocation = function (data) {
        debug('tdwfbParseLocation()', data);

        callback(data);
      };
      var locationCookie = getCookie(activeCampaign.locationCookieName);
      if(locationCookie === null) {
        var script = document.createElement('script');
        script.src = 'https://geoip.taskforce.is/?callback=tdwfbParseLocation';
        document.getElementsByTagName('head')[0].appendChild(script);

        window.tdwfbLocationCallBackFailSafe = setTimeout(function () {
          // Set location to US and pass to callback
          callback({country: {iso_code: 'US'}});
        }, 5000);
      } else {
        callback(JSON.parse(locationCookie));
      }
    }
  };

  // Define campaigns
  var campaign = {
    thedaywefightback: {
      cookieName: 'thedaywefightback_hasseen',
      locationCookieName: 'thedaywefightback_locationb',
      styles: {
        banner: {
          campaignSpacer: 'height: 50px; clear: both;',
          campaignContainer: 'background: #000; position: fixed; ' +
            'width: 100%; bottom: 0; left: 0; z-index: 100000; padding: 0; ' +
            '-webkit-box-sizing: border-box; -moz-box-sizing: border-box;',
          iframeContainer: 'position: relative; height: 350px; width: 100%; ' +
            'margin: 0; background: #000; z-index: 1;',
          iframe: 'width: 100%; height: 100%; border: 0; margin: 0; ' +
            'padding: 0; background: #000;',
          footerOverlay: 'cursor: pointer; position: absolute; bottom: 0; ' +
            'height: 50px; width: 100%; margin: 0; background: none; ' +
            'z-index: 2;',
          closeButton: 'border: 0; height: 26px; width: 26px; ' +
            'cursor: pointer; position: absolute; top: 20px; right: 20px; ' +
            'background: url("' + ASSET_URL + 'imgs/close-button.png") no-repeat right top;',
          mobileCloseButton: 'border: 0; height: 20px; width: 20px; ' +
            'cursor: pointer; position: absolute;top: 10px; right: 10px; ' +
            'background: url("' + ASSET_URL +
            'imgs/close-button-mobile.png") no-repeat right top;',
          openButton: 'border: 0; height: 26px; width: 26px; ' +
            'cursor: pointer; position: absolute; bottom: 10px; ' +
            'right: 20px; background: url("' + ASSET_URL +
            'imgs/open-button.png") no-repeat right top;'
        }
      },
      minimized: false,
      show: function (options) {
        debug('show()', options);

        var cookie = getCookie(activeCampaign.cookieName);

        if (widgetConfig.startAsMinimized && cookie === null) {
          this.minimized = true;
        }

        var style = activeCampaign.styles[activeCampaign.config.show_style];

        if (style.overlay) {
          var overlay = document.createElement('div');
          overlay.style.cssText = style.overlay;
          document.body.appendChild(overlay);
        }

        // Create a spacer to prevent the container from covering up
        // parts of the containing page when minimized

        if(document.getElementById("tdwfb-spacer")){
          document.body.removeChild(document.getElementById("tdwfb-spacer"));
        }

        if(document.getElementById("tdwfb-container")){
          document.body.removeChild(document.getElementById("tdwfb-container"));
        }

        var campaignSpacer = document.createElement('div');
        window.tdwfbCampaignSpacer = campaignSpacer;
        campaignSpacer.style.cssText = style.campaignSpacer;
        campaignSpacer.setAttribute("id", "tdwfb-spacer");
        campaignSpacer.setAttribute("class", "tdwfb-spacer");
        // Create a container
        var campaignContainer = document.createElement('div');
        window.tdwfbCampaignContainer = campaignContainer;
        campaignContainer.style.cssText = style.campaignContainer;
        campaignContainer.setAttribute("id", "tdwfb-container");
        campaignContainer.setAttribute("class", "tdwfb-container");

        // Create a container for the iframe so we can do padding and
        // border-radius properly
        var iframeContainer = document.createElement('div');

        iframeContainer.style.cssText = style.iframeContainer;

        var e = document.documentElement,
            g = document.getElementsByTagName('body')[0],
            x = window.innerWidth || e.clientWidth || g.clientWidth;

        if (x < 767) {
          if (!this.minimized) {
            iframeContainer.style.height = '100px';
          } else {
            iframeContainer.style.height = '0px';
          }
        } else {
          // Find out if user has minimized via cookie
          if (this.minimized) {
            iframeContainer.style.height = '50px';
          } else {
            iframeContainer.style.height = '350px';
          }
          var footerOverlay = document.createElement('div');
          footerOverlay.style.cssText = style.footerOverlay;
          campaignContainer.appendChild(footerOverlay);
        }

        // Append Iframe and campaign container to document
        campaignContainer.appendChild(iframeContainer);

        document.body.appendChild(campaignSpacer);
        document.body.appendChild(campaignContainer);

        var isoCode = options.location && options.location.country &&
          options.location.country.iso_code || 'unknown';
        var firstTime = true;

        if (cookie !== null) {
          firstTime = false;
        }

        // a Hack, if mobile set firsttime to false so splash page never shows
        if (x < 767) {
          firstTime = false;
        }

        var iframe = document.createElement('iframe');

        iframe.style.cssText = style.iframe;

        var us = iframe.src = ASSET_URL + activeCampaign.config.show_style +
          '.html?firstTime=' + firstTime + '&callOnly=' +
          widgetConfig.callOnly + '&iso=' + isoCode + '&greeting=' +
          widgetConfig.greeting;

        if ((isoCode === 'US' && !widgetConfig.overrideLocation) ||
            widgetConfig.overrideLocation === 'usa') {
          // Set the source of the iframe to the configured show_style type
          iframe.src = us;
        } else if ((isoCode !== 'US' && !widgetConfig.overrideLocation) ||
            widgetConfig.overrideLocation === 'international') {
          iframe.src = ASSET_URL + activeCampaign.config.show_style +
            '_international.html?firstTime=' + firstTime + '&iso=' + isoCode +
            '&greeting=' + widgetConfig.greeting;
        }

        iframeContainer.appendChild(iframe);

        var that = this;

        if (x > 767) {
          that.fullSize = true;
          // Setup a close button
          var closeButton = document.createElement('button');
          closeButton.style.cssText = style.closeButton;
          iframeContainer.appendChild(closeButton);

          // Setup a open button
          var openButton = document.createElement('button');
          openButton.style.cssText = style.openButton;
          iframeContainer.appendChild(openButton);

          if (this.minimized) {
            openButton.style.display = 'block';
            closeButton.style.display = 'none';
            footerOverlay.style.display = 'block';
          } else {
            openButton.style.display = 'none';
            closeButton.style.display = 'block';
            footerOverlay.style.display = 'none';
          }

          var toggleDisplay = function () {
            if (!that.minimized) {
              iframeContainer.style.height = '50px';
              that.minimized = true;
              footerOverlay.style.display = 'block';
              closeButton.style.display = 'none';
              openButton.style.display = 'block';
              setCookie(activeCampaign.cookieName, '{"minimized": true}',
                widgetConfig.cookieTimeout);
            } else {
              iframeContainer.style.height = '350px';
              that.minimized = false;
              footerOverlay.style.display = 'none';
              openButton.style.display = 'none';
              closeButton.style.display = 'block';
              setCookie(activeCampaign.cookieName, '{"minimized": false}',
                widgetConfig.cookieTimeout);
            }
          };

          footerOverlay.onclick = toggleDisplay;
          closeButton.onclick = toggleDisplay;
        } else {
          that.fullSize = false;
          var mobileCloseButton = document.createElement('button');
          mobileCloseButton.style.cssText = style.mobileCloseButton;
          iframeContainer.appendChild(mobileCloseButton);
          debug(that.minimized);
          if (that.minimized) {

            mobileCloseButton.style.display = 'none';
          } else {
            mobileCloseButton.style.display = 'block';
          }
          mobileCloseButton.onclick = function () {
            setCookie(activeCampaign.cookieName, '{"minimized": true}',
              widgetConfig.cookieTimeout);
            document.body.removeChild(campaignContainer);
          };
        }
      },
      init: function (config) {
        activeCampaign.config = config;

        var cookie = getCookie(activeCampaign.cookieName);
        var that = this;

        if (cookie) {
          this.minimized = JSON.parse(cookie).minimized;
        }

        checks.correctDate(function (response) {
          debug('correctDate() callback', response);

          clearTimeout(window.tdwfbDateCallBackFailSafe);

          if (response && (response.thedaywefightback ||
              widgetConfig.disableDate || widgetConfig.debug)) {
            checks.location(function (location) {
              debug('location() callback', location);

              window.tdwfbLocation = location;

              clearTimeout(window.tdwfbLocationCallBackFailSafe);

              var cookieLoc = {
                country: {
                  iso_code: location.country.iso_code
                }
              }
              setCookie(activeCampaign.locationCookieName, JSON.stringify(cookieLoc), widgetConfig.cookieTimeout );

              activeCampaign.show({
                location: location,
                widgetConfig: widgetConfig
              });
              if (window.addEventListener) window.addEventListener('resize', function() {
                  var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                 if((that.fullSize && x < 767) || (!that.fullSize && x > 767)) {
                    if(window.tdwfbResizeCallback) {
                      clearTimeout(window.tdwfbResizeCallback);
                    };
                    window.tdwfbResizeCallback = setTimeout(function () {
                        that.show({location: window.tdwfbLocation, widgetConfig: widgetConfig});
                        windowWidth = x;
                    }, 50);
                  }
              }, false);
            });
          }
        });
      }
    }
  };

  // Load campaign if it exists
  if (typeof campaign[widgetConfig.campaign] !== 'undefined') {
    activeCampaign = campaign[widgetConfig.campaign];
    activeCampaign.init(widgetConfig);
  } else {
    return false;
  }
})(window, _tdwfb_config);

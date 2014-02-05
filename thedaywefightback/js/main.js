// console log shim
/*global log:false*/// Tell IE9 to use its built-in console
Function.prototype.bind&&(typeof console=="object"||typeof console=="function")&&typeof console.log=="object"&&["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(method){console[method]=this.call(console[method],console)},Function.prototype.bind);window.log||(window.log=function(){var ua,winRegexp,script,i,args=arguments,isReallyIE8=!1,isReallyIE8Plus=!1;log.history=log.history||[];log.history.push(arguments);if(log.detailPrint&&log.needDetailPrint){ua=navigator.userAgent;winRegexp=/Windows\sNT\s(\d+\.\d+)/;console&&console.log&&/MSIE\s(\d+)/.test(ua)&&winRegexp.test(ua)&&parseFloat(winRegexp.exec(ua)[1])>=6.1&&(isReallyIE8Plus=!0)}if(isReallyIE8Plus||typeof console!="undefined"&&typeof console.log=="function")if(log.detailPrint&&log.needDetailPrint&&log.needDetailPrint()){console.log("-----------------");args=log.detailPrint(args);i=0;while(i<args.length){console.log(args[i]);i++}}else Array.prototype.slice.call(args).length===1&&typeof Array.prototype.slice.call(args)[0]=="string"?console.log(Array.prototype.slice.call(args).toString()):console.log(Array.prototype.slice.call(args));else if(!Function.prototype.bind&&typeof console!="undefined"&&typeof console.log=="object")if(log.detailPrint){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(["-----------------"]));args=log.detailPrint(args);i=0;while(i<args.length){Function.prototype.call.call(console.log,console,Array.prototype.slice.call([args[i]]));i++}}else Function.prototype.call.call(console.log,console,Array.prototype.slice.call(args));else if(!document.getElementById("firebug-lite")){script=document.createElement("script");script.type="text/javascript";script.id="firebug-lite";script.src="https://getfirebug.com/firebug-lite.js";document.getElementsByTagName("HEAD")[0].appendChild(script);setTimeout(function(){window.log.apply(window,args)},2e3)}else setTimeout(function(){window.log.apply(window,args)},500)});


// Countup.js
function countUp(a,b,c,d,e){for(var f=0,g=["webkit","moz","ms"],h=0;h<g.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[g[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g[h]+"CancelAnimationFrame"]||window[g[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-f)),e=window.setTimeout(function(){a(c+d)},d);return f=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var i=this;this.useEasing=!0,this.d=document.getElementById(a),i.startVal=Number(b),c=Number(c),this.countDown=b>c?!0:!1,d=Math.max(0,d||0),this.dec=Math.pow(10,d),this.duration=1e3*e||2e3,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=b,this.rAF=null,this.easeOutExpo=function(a,b,c,d){return 1024*c*(-Math.pow(2,-10*a/d)+1)/1023+b},this.count=function(a){null===i.startTime&&(i.startTime=a),i.timestamp=a;var e=a-i.startTime;if(i.remaining=i.duration-e,i.useEasing)if(i.countDown){var f=i.easeOutExpo(e,0,i.startVal-c,i.duration);i.frameVal=b-f}else i.frameVal=i.easeOutExpo(e,i.startVal,c-i.startVal,i.duration);else if(i.countDown){var f=(i.startVal-c)*(e/i.duration);i.frameVal=i.startVal-f}else i.frameVal=i.startVal+(c-i.startVal)*(e/i.duration);i.frameVal=Math.round(i.frameVal*i.dec)/i.dec,i.frameVal=i.countDown?i.frameVal<c?c:i.frameVal:i.frameVal>c?c:i.frameVal,i.d.innerHTML=i.addCommas(i.frameVal.toFixed(d)),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!=i.callback&&i.callback()},this.start=function(a){return i.callback=a,isNaN(c)||isNaN(b)?(console.log("countUp error: startVal or endVal is not a number"),i.d.innerHTML="--"):i.rAF=requestAnimationFrame(i.count),!1},this.stop=function(){cancelAnimationFrame(i.rAF)},this.reset=function(){cancelAnimationFrame(i.rAF),i.d.innerHTML=i.addCommas(b.toFixed(d))},this.resume=function(){i.startTime=null,i.duration=i.remaining,i.startVal=i.frameVal,requestAnimationFrame(i.count)},this.addCommas=function(a){a+="";var b,c,d,e;for(b=a.split("."),c=b[0],d=b.length>1?"."+b[1]:"",e=/(\d+)(\d{3})/;e.test(c);)c=c.replace(e,"$1,$2");return c+d},i.d.innerHTML=i.addCommas(b.toFixed(d))}

/* jRumble v1.3 - http://jackrugile.com/jrumble - MIT License */
(function(f){f.fn.jrumble=function(g){var a=f.extend({x:2,y:2,rotation:1,speed:15,opacity:false,opacityMin:0.5},g);return this.each(function(){var b=f(this),h=a.x*2,i=a.y*2,k=a.rotation*2,g=a.speed===0?1:a.speed,m=a.opacity,n=a.opacityMin,l,j,o=function(){var e=Math.floor(Math.random()*(h+1))-h/2,a=Math.floor(Math.random()*(i+1))-i/2,c=Math.floor(Math.random()*(k+1))-k/2,d=m?Math.random()+n:1,e=e===0&&h!==0?Math.random()<0.5?1:-1:e,a=a===0&&i!==0?Math.random()<0.5?1:-1:a;b.css("display")==="inline"&&(l=true,b.css("display","inline-block"));b.css({position:"relative",left:e+"px",top:a+"px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity="+d*100+")",filter:"alpha(opacity="+d*100+")","-moz-opacity":d,"-khtml-opacity":d,opacity:d,"-webkit-transform":"rotate("+c+"deg)","-moz-transform":"rotate("+c+"deg)","-ms-transform":"rotate("+c+"deg)","-o-transform":"rotate("+c+"deg)",transform:"rotate("+c+"deg)"})},p={left:0,top:0,"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",transform:"rotate(0deg)"};b.bind({startRumble:function(a){a.stopPropagation();clearInterval(j);j=setInterval(o,g)},stopRumble:function(a){a.stopPropagation();clearInterval(j);l&&b.css("display","inline");b.css(p)}})})}})(jQuery);

/* Retina.js - http://retinajs.com/ - MIT License */
(function(){function n(){}function r(e,t){this.path=e;if(typeof t!=="undefined"&&t!==null){this.at_2x_path=t;this.perform_check=false}else{this.at_2x_path=e.replace(/\.\w+$/,function(e){return"@2x"+e});this.perform_check=true}}function i(e){this.el=e;this.path=new r(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var t=this;this.path.check_2x_variant(function(e){if(e)t.swap()})}var e=typeof exports=="undefined"?window:exports;var t={check_mime_type:true,force_original_dimensions:true};e.Retina=n;n.configure=function(e){if(e==null)e={};for(var n in e)t[n]=e[n]};n.init=function(t){if(t==null)t=e;var n=t.onload||new Function;t.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,s;for(r=0;r<e.length;r++){s=e[r];t.push(new i(s))}n()}};n.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(e.devicePixelRatio>1)return true;if(e.matchMedia&&e.matchMedia(t).matches)return true;return false};e.RetinaImagePath=r;r.confirmed_paths=[];r.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};r.prototype.check_2x_variant=function(e){var n,i=this;if(this.is_external()){return e(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return e(true)}else if(this.at_2x_path in r.confirmed_paths){return e(true)}else{n=new XMLHttpRequest;n.open("HEAD",this.at_2x_path);n.onreadystatechange=function(){if(n.readyState!=4){return e(false)}if(n.status>=200&&n.status<=399){if(t.check_mime_type){var s=n.getResponseHeader("Content-Type");if(s==null||!s.match(/^image/i)){return e(false)}}r.confirmed_paths.push(i.at_2x_path);return e(true)}else{return e(false)}};n.send()}};e.RetinaImage=i;i.prototype.swap=function(e){function r(){if(!n.el.complete){setTimeout(r,5)}else{if(t.force_original_dimensions){n.el.setAttribute("width",n.el.offsetWidth);n.el.setAttribute("height",n.el.offsetHeight)}n.el.setAttribute("src",e)}}if(typeof e=="undefined")e=this.path.at_2x_path;var n=this;r()};if(n.isRetina()){n.init(e)}})()

/* Modified phone number formatting script */
/* via BootstrapFormHelpers - https://github.com/vlamanna/BootstrapFormHelpers - Apache License, Version 2.0 */

    function rumbleEl(el) {
        el.css('border', '1px solid #ff0000');
        el.jrumble({})
        el.trigger('startRumble');
        var demoTimeout = setTimeout(function(){el.trigger('stopRumble');
            el.css('border', 'none');
        }, 500) 
    }

    function isValidPhoneNumber(value) {
        if (!value) return false;
        var count = value.length;
        return count == 10 || count == 11;
    }
    function isValidEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
    }
$(document).ready( function () {
    if(getQueryVariable('callOnly') === 'true') {
      $('.phone-only-container').show();
    } else {
      $('.both-container').show();
    };
    var firstTime = getQueryVariable('firstTime') === 'true' ? true : false;

    if(firstTime) {
           $('#first-slide').show();
     setTimeout(function() {
           $('#first-slide').fadeOut(250, function() {
               $('#second-slide').fadeIn(250);
               $('.footer').fadeIn(250);

           })
       }, 1500);
   } else {
    $('#second-slide').show();
               $('.footer').show();
   }
    $('input, textarea').placeholder();
    $('#userPhone').focus(function(){
        +function ($) {

          'use strict';


          /* PHONE CLASS DEFINITION
           * ====================== */

          var BFHPhone = function (element, options) {
            this.options = $.extend({}, $.fn.bfhphone.defaults, options);
            this.$element = $(element);

            if (this.$element.is('input[type="text"]') || this.$element.is('input[type="tel"]')) {
              this.addFormatter();
            }

            if (this.$element.is('span')) {
              this.displayFormatter();
            }
          };

          BFHPhone.prototype = {

            constructor: BFHPhone,

            addFormatter: function() {
              var $country;

              if (this.options.country !== '') {
                $country = $(document).find('#' + this.options.country);

                if ($country.length !== 0) {
                  this.options.format = BFHPhoneFormatList[$country.val()];
                  $country.on('change', {phone: this}, this.changeCountry);
                } else {
                  this.options.format = BFHPhoneFormatList[this.options.country];
                }
              }
              
              this.$element.on('keyup.bfhphone.data-api', BFHPhone.prototype.change);

              this.loadFormatter();
            },

            loadFormatter: function () {
              var formattedNumber;

              formattedNumber = formatNumber(this.options.format, this.$element.val());

              this.$element.val(formattedNumber);
            },

            displayFormatter: function () {
              var formattedNumber;

              if (this.options.country !== '') {
                this.options.format = BFHPhoneFormatList[this.options.country];
              }

              formattedNumber = formatNumber(this.options.format, this.options.number);

              this.$element.html(formattedNumber);
            },

            changeCountry: function (e) {
              var $this,
                  $phone;

              $this = $(this);
              $phone = e.data.phone;

              $phone.$element.val(String($phone.$element.val()).replace(/\+\d*/g, ''));
              $phone.options.format = BFHPhoneFormatList[$this.val()];

              $phone.loadFormatter();
            },

            change: function(e) {
              var $this,
                  cursorPosition,
                  cursorEnd,
                  formattedNumber;

              $this = $(this).data('bfhphone');

              if ($this.$element.is('.disabled') || $this.$element.attr('disabled') !== undefined) {
                return true;
              }

              cursorPosition = getCursorPosition($this.$element[0]);

              cursorEnd = false;
              if (cursorPosition === $this.$element.val().length) {
                cursorEnd = true;
              }
              
              if (e.which === 8 && $this.options.format.charAt($this.$element.val().length) !== 'd') {
                $this.$element.val(String($this.$element.val()).substring(0, $this.$element.val().length - 1));
              }

              formattedNumber = formatNumber($this.options.format, $this.$element.val());
              
              if (formattedNumber === $this.$element.val()) {
                return true;
              }
              
              $this.$element.val(formattedNumber);

              if (cursorEnd) {
                cursorPosition = $this.$element.val().length;
              }

              setCursorPosition($this.$element[0], cursorPosition);

              return true;
            }

          };

          function formatNumber(format, number) {
            var formattedNumber,
                indexFormat,
                indexNumber,
                lastCharacter;

            formattedNumber = '';
            number = String(number).replace(/\D/g, '');

            for (indexFormat = 0, indexNumber = 0; indexFormat < format.length; indexFormat = indexFormat + 1) {
              if (/\d/g.test(format.charAt(indexFormat))) {
                if (format.charAt(indexFormat) === number.charAt(indexNumber)) {
                  formattedNumber += number.charAt(indexNumber);
                  indexNumber = indexNumber + 1;
                } else {
                  formattedNumber += format.charAt(indexFormat);
                }
              } else if (format.charAt(indexFormat) !== 'd') {
                if (number.charAt(indexNumber) !== '' || format.charAt(indexFormat) === '+') {
                  formattedNumber += format.charAt(indexFormat);
                }
              } else {
                if (number.charAt(indexNumber) === '') {
                  formattedNumber += '';
                } else {
                  formattedNumber += number.charAt(indexNumber);
                  indexNumber = indexNumber + 1;
                }
              }
            }
            
            lastCharacter = format.charAt(formattedNumber.length);
            if (lastCharacter !== 'd') {
              formattedNumber += lastCharacter;
            }

            return formattedNumber;
          }

          function getCursorPosition($element) {
            var position = 0,
                selection;

            if (document.selection) {
              // IE Support
              $element.focus();
              selection = document.selection.createRange();
              selection.moveStart ('character', -$element.value.length);
              position = selection.text.length;
            } else if ($element.selectionStart || $element.selectionStart === 0) {
              position = $element.selectionStart;
            }

            return position;
          }

          function setCursorPosition($element, position) {
            var selection;

            if (document.selection) {
              // IE Support
              $element.focus ();
              selection = document.selection.createRange();
              selection.moveStart ('character', -$element.value.length);
              selection.moveStart ('character', position);
              selection.moveEnd ('character', 0);
              selection.select ();
            } else if ($element.selectionStart || $element.selectionStart === 0) {
              $element.selectionStart = position;
              $element.selectionEnd = position;
              $element.focus ();
            }
          }

          /* PHONE PLUGIN DEFINITION
           * ======================= */

          var old = $.fn.bfhphone;

          $.fn.bfhphone = function (option) {
            return this.each(function () {
              var $this,
                  data,
                  options;

              $this = $(this);
              data = $this.data('bfhphone');
              options = typeof option === 'object' && option;

              if (!data) {
                $this.data('bfhphone', (data = new BFHPhone(this, options)));
              }
              if (typeof option === 'string') {
                data[option].call($this);
              }
            });
          };

          $.fn.bfhphone.Constructor = BFHPhone;

          $.fn.bfhphone.defaults = {
            format: '',
            number: '',
            country: ''
          };


          /* PHONE NO CONFLICT
           * ========================== */

          $.fn.bfhphone.noConflict = function () {
            $.fn.bfhphone = old;
            return this;
          };


          /* PHONE DATA-API
           * ============== */

          $(document).ready( function () {
            $('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function () {
              var $phone;

              $phone = $(this);

              $phone.bfhphone($phone.data());
            });
          });

        }(window.jQuery);
        });

    $('#userPhone').focusout(function(){
        if  ($('#userPhone').val() == "+1 ") {
            $('#userPhone').val("");
        }
    });


        /* $.ajax({
             type: "GET",
             url: 'https://thedaywefightback.org/blank.html',
             success: function(data, status, xhr) {
                 var serverDateTime = (xhr.getResponseHeader('Date'));
                 serverDate = new Date(serverDateTime);
                 liveDate = new Date(Date.UTC(2014, 1, 12, 8, 0));
                 var diff = liveDate - serverDate;
                console.log(diff);
             }
         });*/

        //         timeDiffObj = splitTime(diff);
        //         updateTimeOnSite(timeDiffObj);

        //         setInterval(function(){
        //             diff -= 1000;
        //             timeDiffObj = splitTime(diff);
        //             updateTimeOnSite(timeDiffObj);
        //         }, 1000);
        //     }
        // });


    /*
    $('.call-form').on('submit', function(ev) {
        var form = $(ev.currentTarget);

        if(isValidPhoneNumber(phoneNumber)) {
            window.open('call-tool.html', "Share on Facebook", "width=800,height=800");

        } else {
            phoneNumberEl.css('border', '1px solid #ff0000');
            phoneNumberEl.jrumble({})
            phoneNumberEl.trigger('startRumble');
            demoTimeout = setTimeout(function(){phoneNumberEl.trigger('stopRumble');
    phoneNumberEl.css('border', 'none');

        }, 500)

        }
        return false;
    })
    $('.email-form').on('submit', function(ev) {


        if(isValidEmail(userEmail)) {
            window.open('email-tool.html', "Share on Facebook", "width=800,height=800");
        } else {



        }
        return false;
    })*/


    $('.call-form').on('submit', function(ev) {
        var form = $(ev.currentTarget);

        var phoneNumberEl = $('#userPhone', form);
        var phoneNumber = phoneNumberEl.val().replace(/[^\d.]/g, '');

        if(!isValidPhoneNumber(phoneNumber)){
            rumbleEl(phoneNumberEl);
        } else {
            window.open('call-tool.html?phoneNumber=' + phoneNumber, "Share on Facebook", "width=800,height=800");
        }
        return false;
    });
    $('.email-form').on('submit', function(ev) {
        var form = $(ev.currentTarget);

        var userEmailEl = $('#userEmail', form);
        var userEmail = userEmailEl.val();

        if(!isValidEmail(userEmail)){
            rumbleEl(userEmailEl);
        } else {
            window.open('email-tool.html?email=' + userEmail, "Share on Facebook", "width=800,height=800");
        }
        return false;
    });

    /*
    $('.call-and-email-form').on('submit', function(ev) {
        var form = $(ev.currentTarget);

        var phoneNumberEl = $('#userPhone', form);
        var phoneNumber = phoneNumberEl.val().replace(/[^\d.]/g, '');

        var userEmailEl = $('#userEmail', form);
        var userEmail = userEmailEl.val();


        // Ugly thomas logic
        if(userEmail === '' && phoneNumber === '') {
            rumbleEl(phoneNumberEl);
            rumbleEl(userEmailEl);
            return false;
        }
        var errors = false;
        if(userEmail !== '' && !isValidEmail(userEmail)){
            errors = true;
            rumbleEl(userEmailEl);
        }
        if(phoneNumber !== '' && !isValidPhoneNumber(phoneNumber)){
            errors = true;
            rumbleEl(phoneNumberEl);
        }
        if(errors) {
            return false;
        }
        if(isValidEmail(userEmail) && isValidPhoneNumber(phoneNumber)) {
            window.open('call-and-email.html', "Share on Facebook", "width=800,height=800");
        } else if(isValidEmail(userEmail)) {
            window.open('email-tool.html', "Share on Facebook", "width=800,height=800");
        } else if(isValidPhoneNumber(phoneNumber)) {
            window.open('call-tool.html', "Share on Facebook", "width=800,height=800");
        }
        return false;
    });
    */

    // Call and email counters
    if($('#email-count').length > 0) {
        $.ajax('//dznh7un1y2etk.cloudfront.net/count', {
            success: function(res, err) {
              var demo = new countUp("email-count", 0, res.count, 0, 2);
            demo.start();
            },
            dataType: 'jsonp',
            cache         : true,
            jsonpCallback : 'myCallback'
        });
    }
    if($('#call-count').length > 0) {
        $.ajax('//dczwo4qqyofa4.cloudfront.net/count', {
            success: function(res, err) {
              var demo = new countUp("call-count", 0, res.count, 0, 2);
            demo.start();
            },
            dataType: 'jsonp',
            cache         : true,
            jsonpCallback : 'ccca'
        });
    }
    if($('#signatory-count').length > 0) {
        $.ajax('//dznh7un1y2etk.cloudfront.net/signature_count', {
            success: function(res, err) {
                var demo = new countUp("signatory-count", 0, res.count + 10000, 0, 2);
                demo.start();
            },
            dataType: 'jsonp',
            cache         : true,
            jsonpCallback : 'ccca'
        });
    }


    // Resize the scrolling text to fit

    $(document).ready(function() {

    /* Resizing the text size based on width */

    //     var resizeText = function () {
    //         // Standard height, for which the body font size is correct
    //         var preferredWidth = 1060;
    //         var preferredFontSize = 22;

    //         var displayWidth = $(window).width();
    //         if (displayWidth < preferredWidth) {
    //         var scalePercentage = displayWidth / preferredWidth;
    //         var newFontSize = preferredFontSize * scalePercentage;
    //             newFontSize -= 2;
    //         }
    //         else {newFontSize = 21};
    //         $(".scrolling-banner-text").css("font-size", newFontSize + 'px');
    //     };

    //     $(window).bind('resize', function() {
    //         resizeText();
    //     }).trigger('resize');
    // });

    /* Animating the bar above the logo */

    var timeperslide = 9000; // time between each slide
    var animationdelay = 1300; // time between each slide
    var dividerdelay = 1300; // time between each slide

    $(document).ready(function() {
        dividerFill();
        setInterval(function(){
            var $visibleslide = $(".scrolling-banner-text .animated.flipInX")
             $visibleslide.removeClass("flipInX").addClass("flipOutX");
            dividerReset();

            window.setTimeout(function(){
            $visibleslide.addClass("hidden");
            $visibleslide.removeClass("flipOutX");
            var factslides = $visibleslide.parent().children();
            var $nextslide = factslides.eq((factslides.index($visibleslide) + 1) % factslides.length);
             $nextslide.removeClass("hidden").addClass("animated").addClass("flipInX");
            },animationdelay)
            window.setTimeout(function(){dividerFill();},dividerdelay);
            
        },timeperslide);
    });
    function dividerFill() {
           $('.divider > div').animate({ width: "100%" }, timeperslide - animationdelay - dividerdelay);
    }
    function dividerReset() {
            $('.divider > div').css("width", 0);
    }

    var greeting = getQueryVariable('greeting');
    
    $('.greeting').text(greeting);
    var src = $('.switch-locale').attr('href')
    $('.switch-locale').attr('href', src + '?greeting=' + greeting);
    
    })
});


/* ==========================================================================
   Sharing buttons
   ==========================================================================*/

$( ".fblinkthis" ).click(function() {
    var url = $(this).attr("href");
    window.open(url, "Share on Facebook", "width=650,height=500");
    return false;
})
$( ".twlinkthis" ).click(function() {
    var url = $(this).attr("href");
    window.open(url,"Twitter","width=550,height=420");
    return false;
})
$( ".gpluslinkthis" ).click(function() {
    var url = $(this).attr("href");
    window.open(url,"Share on Google Plus","width=500,height=436");
    return false;
})


//safari  on mavericks is good
/*
Cross Browser bugs
firefox 26 seems good
doesn't seem to be running on mobile
opera is cool


*/






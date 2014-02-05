// console log shim
/*global log:false*/// Tell IE9 to use its built-in console
Function.prototype.bind&&(typeof console=="object"||typeof console=="function")&&typeof console.log=="object"&&["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach(function(method){console[method]=this.call(console[method],console)},Function.prototype.bind);window.log||(window.log=function(){var ua,winRegexp,script,i,args=arguments,isReallyIE8=!1,isReallyIE8Plus=!1;log.history=log.history||[];log.history.push(arguments);if(log.detailPrint&&log.needDetailPrint){ua=navigator.userAgent;winRegexp=/Windows\sNT\s(\d+\.\d+)/;console&&console.log&&/MSIE\s(\d+)/.test(ua)&&winRegexp.test(ua)&&parseFloat(winRegexp.exec(ua)[1])>=6.1&&(isReallyIE8Plus=!0)}if(isReallyIE8Plus||typeof console!="undefined"&&typeof console.log=="function")if(log.detailPrint&&log.needDetailPrint&&log.needDetailPrint()){console.log("-----------------");args=log.detailPrint(args);i=0;while(i<args.length){console.log(args[i]);i++}}else Array.prototype.slice.call(args).length===1&&typeof Array.prototype.slice.call(args)[0]=="string"?console.log(Array.prototype.slice.call(args).toString()):console.log(Array.prototype.slice.call(args));else if(!Function.prototype.bind&&typeof console!="undefined"&&typeof console.log=="object")if(log.detailPrint){Function.prototype.call.call(console.log,console,Array.prototype.slice.call(["-----------------"]));args=log.detailPrint(args);i=0;while(i<args.length){Function.prototype.call.call(console.log,console,Array.prototype.slice.call([args[i]]));i++}}else Function.prototype.call.call(console.log,console,Array.prototype.slice.call(args));else if(!document.getElementById("firebug-lite")){script=document.createElement("script");script.type="text/javascript";script.id="firebug-lite";script.src="https://getfirebug.com/firebug-lite.js";document.getElementsByTagName("HEAD")[0].appendChild(script);setTimeout(function(){window.log.apply(window,args)},2e3)}else setTimeout(function(){window.log.apply(window,args)},500)});

// Countup.js
function countUp(a,b,c,d,e){for(var f=0,g=["webkit","moz","ms"],h=0;h<g.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[g[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g[h]+"CancelAnimationFrame"]||window[g[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-f)),e=window.setTimeout(function(){a(c+d)},d);return f=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var i=this;this.useEasing=!0,this.d=document.getElementById(a),i.startVal=Number(b),c=Number(c),this.countDown=b>c?!0:!1,d=Math.max(0,d||0),this.dec=Math.pow(10,d),this.duration=1e3*e||2e3,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=b,this.rAF=null,this.easeOutExpo=function(a,b,c,d){return 1024*c*(-Math.pow(2,-10*a/d)+1)/1023+b},this.count=function(a){null===i.startTime&&(i.startTime=a),i.timestamp=a;var e=a-i.startTime;if(i.remaining=i.duration-e,i.useEasing)if(i.countDown){var f=i.easeOutExpo(e,0,i.startVal-c,i.duration);i.frameVal=b-f}else i.frameVal=i.easeOutExpo(e,i.startVal,c-i.startVal,i.duration);else if(i.countDown){var f=(i.startVal-c)*(e/i.duration);i.frameVal=i.startVal-f}else i.frameVal=i.startVal+(c-i.startVal)*(e/i.duration);i.frameVal=Math.round(i.frameVal*i.dec)/i.dec,i.frameVal=i.countDown?i.frameVal<c?c:i.frameVal:i.frameVal>c?c:i.frameVal,i.d.innerHTML=i.addCommas(i.frameVal.toFixed(d)),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!=i.callback&&i.callback()},this.start=function(a){return i.callback=a,isNaN(c)||isNaN(b)?(true,i.d.innerHTML="--"):i.rAF=requestAnimationFrame(i.count),!1},this.stop=function(){cancelAnimationFrame(i.rAF)},this.reset=function(){cancelAnimationFrame(i.rAF),i.d.innerHTML=i.addCommas(b.toFixed(d))},this.resume=function(){i.startTime=null,i.duration=i.remaining,i.startVal=i.frameVal,requestAnimationFrame(i.count)},this.addCommas=function(a){a+="";var b,c,d,e;for(b=a.split("."),c=b[0],d=b.length>1?"."+b[1]:"",e=/(\d+)(\d{3})/;e.test(c);)c=c.replace(e,"$1,$2");return c+d},i.d.innerHTML=i.addCommas(b.toFixed(d))}

/* jRumble v1.3 - http://jackrugile.com/jrumble - MIT License */
(function(f){f.fn.jrumble=function(g){var a=f.extend({x:2,y:2,rotation:1,speed:15,opacity:false,opacityMin:0.5},g);return this.each(function(){var b=f(this),h=a.x*2,i=a.y*2,k=a.rotation*2,g=a.speed===0?1:a.speed,m=a.opacity,n=a.opacityMin,l,j,o=function(){var e=Math.floor(Math.random()*(h+1))-h/2,a=Math.floor(Math.random()*(i+1))-i/2,c=Math.floor(Math.random()*(k+1))-k/2,d=m?Math.random()+n:1,e=e===0&&h!==0?Math.random()<0.5?1:-1:e,a=a===0&&i!==0?Math.random()<0.5?1:-1:a;b.css("display")==="inline"&&(l=true,b.css("display","inline-block"));b.css({position:"relative",left:e+"px",top:a+"px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity="+d*100+")",filter:"alpha(opacity="+d*100+")","-moz-opacity":d,"-khtml-opacity":d,opacity:d,"-webkit-transform":"rotate("+c+"deg)","-moz-transform":"rotate("+c+"deg)","-ms-transform":"rotate("+c+"deg)","-o-transform":"rotate("+c+"deg)",transform:"rotate("+c+"deg)"})},p={left:0,top:0,"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",transform:"rotate(0deg)"};b.bind({startRumble:function(a){a.stopPropagation();clearInterval(j);j=setInterval(o,g)},stopRumble:function(a){a.stopPropagation();clearInterval(j);l&&b.css("display","inline");b.css(p)}})})}})(jQuery);

/* Retina.js - http://retinajs.com/ - MIT License */
(function(){function n(){}function r(e,t){this.path=e;if(typeof t!=="undefined"&&t!==null){this.at_2x_path=t;this.perform_check=false}else{this.at_2x_path=e.replace(/\.\w+$/,function(e){return"@2x"+e});this.perform_check=true}}function i(e){this.el=e;this.path=new r(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var t=this;this.path.check_2x_variant(function(e){if(e)t.swap()})}var e=typeof exports=="undefined"?window:exports;var t={check_mime_type:true,force_original_dimensions:true};e.Retina=n;n.configure=function(e){if(e==null)e={};for(var n in e)t[n]=e[n]};n.init=function(t){if(t==null)t=e;var n=t.onload||new Function;t.onload=function(){var e=document.getElementsByTagName("img"),t=[],r,s;for(r=0;r<e.length;r++){s=e[r];t.push(new i(s))}n()}};n.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";if(e.devicePixelRatio>1)return true;if(e.matchMedia&&e.matchMedia(t).matches)return true;return false};e.RetinaImagePath=r;r.confirmed_paths=[];r.prototype.is_external=function(){return!!(this.path.match(/^https?\:/i)&&!this.path.match("//"+document.domain))};r.prototype.check_2x_variant=function(e){var n,i=this;if(this.is_external()){return e(false)}else if(!this.perform_check&&typeof this.at_2x_path!=="undefined"&&this.at_2x_path!==null){return e(true)}else if(this.at_2x_path in r.confirmed_paths){return e(true)}else{n=new XMLHttpRequest;n.open("HEAD",this.at_2x_path);n.onreadystatechange=function(){if(n.readyState!=4){return e(false)}if(n.status>=200&&n.status<=399){if(t.check_mime_type){var s=n.getResponseHeader("Content-Type");if(s==null||!s.match(/^image/i)){return e(false)}}r.confirmed_paths.push(i.at_2x_path);return e(true)}else{return e(false)}};n.send()}};e.RetinaImage=i;i.prototype.swap=function(e){function r(){if(!n.el.complete){setTimeout(r,5)}else{if(t.force_original_dimensions){n.el.setAttribute("width",n.el.offsetWidth);n.el.setAttribute("height",n.el.offsetHeight)}n.el.setAttribute("src",e)}}if(typeof e=="undefined")e=this.path.at_2x_path;var n=this;r()};if(n.isRetina()){n.init(e)}})()

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
    function isValidZip(value) {
        if (!value) return false;
        var count = value.length;
        return count == 5;
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

        /* Modified phone number formatting script */
        /* via BootstrapFormHelpers - https://github.com/vlamanna/BootstrapFormHelpers - Apache License, Version 2.0 */
        +function(e){"use strict";function n(e,t){var n,r,i,s;n="";t=String(t).replace(/\D/g,"");for(r=0,i=0;r<e.length;r=r+1){if(/\d/g.test(e.charAt(r))){if(e.charAt(r)===t.charAt(i)){n+=t.charAt(i);i=i+1}else{n+=e.charAt(r)}}else if(e.charAt(r)!=="d"){if(t.charAt(i)!==""||e.charAt(r)==="+"){n+=e.charAt(r)}}else{if(t.charAt(i)===""){n+=""}else{n+=t.charAt(i);i=i+1}}}s=e.charAt(n.length);if(s!=="d"){n+=s}return n}function r(e){var t=0,n;if(document.selection){e.focus();n=document.selection.createRange();n.moveStart("character",-e.value.length);t=n.text.length}else if(e.selectionStart||e.selectionStart===0){t=e.selectionStart}return t}function i(e,t){var n;if(document.selection){e.focus();n=document.selection.createRange();n.moveStart("character",-e.value.length);n.moveStart("character",t);n.moveEnd("character",0);n.select()}else if(e.selectionStart||e.selectionStart===0){e.selectionStart=t;e.selectionEnd=t;e.focus()}}var t=function(t,n){this.options=e.extend({},e.fn.bfhphone.defaults,n);this.$element=e(t);if(this.$element.is('input[type="text"]')||this.$element.is('input[type="tel"]')){this.addFormatter()}if(this.$element.is("span")){this.displayFormatter()}};t.prototype={constructor:t,addFormatter:function(){var n;if(this.options.country!==""){n=e(document).find("#"+this.options.country);if(n.length!==0){this.options.format=BFHPhoneFormatList[n.val()];n.on("change",{phone:this},this.changeCountry)}else{this.options.format=BFHPhoneFormatList[this.options.country]}}this.$element.on("keyup.bfhphone.data-api",t.prototype.change);this.loadFormatter()},loadFormatter:function(){var e;e=n(this.options.format,this.$element.val());this.$element.val(e)},displayFormatter:function(){var e;if(this.options.country!==""){this.options.format=BFHPhoneFormatList[this.options.country]}e=n(this.options.format,this.options.number);this.$element.html(e)},changeCountry:function(t){var n,r;n=e(this);r=t.data.phone;r.$element.val(String(r.$element.val()).replace(/\+\d*/g,""));r.options.format=BFHPhoneFormatList[n.val()];r.loadFormatter()},change:function(t){var s,o,u,a;s=e(this).data("bfhphone");if(s.$element.is(".disabled")||s.$element.attr("disabled")!==undefined){return true}o=r(s.$element[0]);u=false;if(o===s.$element.val().length){u=true}if(t.which===8&&s.options.format.charAt(s.$element.val().length)!=="d"){s.$element.val(String(s.$element.val()).substring(0,s.$element.val().length-1))}a=n(s.options.format,s.$element.val());if(a===s.$element.val()){return true}s.$element.val(a);if(u){o=s.$element.val().length}i(s.$element[0],o);return true}};var s=e.fn.bfhphone;e.fn.bfhphone=function(n){return this.each(function(){var r,i,s;r=e(this);i=r.data("bfhphone");s=typeof n==="object"&&n;if(!i){r.data("bfhphone",i=new t(this,s))}if(typeof n==="string"){i[n].call(r)}})};e.fn.bfhphone.Constructor=t;e.fn.bfhphone.defaults={format:"",number:"",country:""};e.fn.bfhphone.noConflict=function(){e.fn.bfhphone=s;return this};e(document).ready(function(){e('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function(){var t;t=e(this);t.bfhphone(t.data())})})}(window.jQuery)
        });

    $('#userPhone').focusout(function(){
        if  ($('#userPhone').val() == "+1 ") {
            $('#userPhone').val("");
        }
    });



    $('.call-form').on('submit', function(ev) {
        var form = $(ev.currentTarget);

        var phoneNumberEl = $('#userPhone', form);
        var phoneNumber = phoneNumberEl.val().replace(/[^\d.]/g, '');

        if(!isValidPhoneNumber(phoneNumber)){
            rumbleEl(phoneNumberEl);
        } else {
            if(typeof page !== 'undefined' && page === 'thankyou') {
              window.location = 'call-tool.html?phoneNumber=' + phoneNumber;
            } else {
              window.open('call-tool.html?phoneNumber=' + phoneNumber, "_blank", "width=786,height=920,scrollbars=yes");
            }
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
            window.open('email-tool.html?email=' + userEmail, "_blank", "width=786,height=920,scrollbars=yes");
        }
        return false;
    });

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



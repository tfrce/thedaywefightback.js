// Countup.js
function countUp(a,b,c,d,e){for(var f=0,g=["webkit","moz","ms"],h=0;h<g.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[g[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g[h]+"CancelAnimationFrame"]||window[g[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-f)),e=window.setTimeout(function(){a(c+d)},d);return f=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var i=this;this.useEasing=!0,this.d=document.getElementById(a),i.startVal=Number(b),c=Number(c),this.countDown=b>c?!0:!1,d=Math.max(0,d||0),this.dec=Math.pow(10,d),this.duration=1e3*e||2e3,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=b,this.rAF=null,this.easeOutExpo=function(a,b,c,d){return 1024*c*(-Math.pow(2,-10*a/d)+1)/1023+b},this.count=function(a){null===i.startTime&&(i.startTime=a),i.timestamp=a;var e=a-i.startTime;if(i.remaining=i.duration-e,i.useEasing)if(i.countDown){var f=i.easeOutExpo(e,0,i.startVal-c,i.duration);i.frameVal=b-f}else i.frameVal=i.easeOutExpo(e,i.startVal,c-i.startVal,i.duration);else if(i.countDown){var f=(i.startVal-c)*(e/i.duration);i.frameVal=i.startVal-f}else i.frameVal=i.startVal+(c-i.startVal)*(e/i.duration);i.frameVal=Math.round(i.frameVal*i.dec)/i.dec,i.frameVal=i.countDown?i.frameVal<c?c:i.frameVal:i.frameVal>c?c:i.frameVal,i.d.innerHTML=i.addCommas(i.frameVal.toFixed(d)),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!=i.callback&&i.callback()},this.start=function(a){return i.callback=a,isNaN(c)||isNaN(b)?(console.log("countUp error: startVal or endVal is not a number"),i.d.innerHTML="--"):i.rAF=requestAnimationFrame(i.count),!1},this.stop=function(){cancelAnimationFrame(i.rAF)},this.reset=function(){cancelAnimationFrame(i.rAF),i.d.innerHTML=i.addCommas(b.toFixed(d))},this.resume=function(){i.startTime=null,i.duration=i.remaining,i.startVal=i.frameVal,requestAnimationFrame(i.count)},this.addCommas=function(a){a+="";var b,c,d,e;for(b=a.split("."),c=b[0],d=b.length>1?"."+b[1]:"",e=/(\d+)(\d{3})/;e.test(c);)c=c.replace(e,"$1,$2");return c+d},i.d.innerHTML=i.addCommas(b.toFixed(d))}

// setTimeout(function() {
//     $('#first-slide').fadeOut(50, function() {
//         $('#second-slide').fadeIn(50);
//         $('.footer').fadeIn(50);

//     })
// }, 1000);
$('.call-form').on('submit', function(ev) {
    console.log('asdas');
    window.open('call-tool.html', "Share on Facebook", "width=800,height=800");
    return false;
})
$('.email-form').on('submit', function(ev) {
    console.log('asdas');
    window.open('email-tool.html', "Share on Facebook", "width=800,height=800");
    return false;
})

$.ajax('http://dznh7un1y2etk.cloudfront.net/count', {
    success: function(res, err) {
    	var demo = new countUp("email-count", 0, res.count, 0, 2);
		demo.start();
        //$('.email-count').text(res.count);
    },
    dataType: 'jsonp',
    cache         : true,
    jsonpCallback : 'myCallback'
});
$.ajax('http://dczwo4qqyofa4.cloudfront.net/count', {
    success: function(res, err) {
    	var demo = new countUp("call-count", 0, res.count, 0, 2);
		demo.start();
        //$('.email-count').text(res.count);
    },
    dataType: 'jsonp',
    cache         : true,
    jsonpCallback : 'ccc'
});


// jQuery.phone

(function() {
  var $, formatBackPhoneNumber, formatPhoneNumber,
    __slice = [].slice;
  $ = jQuery;
  $.telephone = {};
  $.telephone.fn = {};
  $.fn.telephone = function() {
    var args, method;
    method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    return $.telephone.fn[method].apply(this, args);
  };

  formatPhoneNumber = function(e) {
    var $target, digit, is_backspace, is_digit, length, unformatted_number, value;
    e.preventDefault();
    $target = $(e.currentTarget);
    value = $target.val();
    digit = String.fromCharCode(e.which);
    is_digit = /^\d+$/.test(digit);
    is_backspace = e.which === 8;
    if (!is_digit && !is_backspace) {
      return;
    }
    if (e.which === 8) {
      unformatted_number = value.replace('+1', '').replace(/\D/g, '').replace('+', '');
      unformatted_number = unformatted_number.substring(0, unformatted_number.length - 1);
    } else {
      unformatted_number = value.replace('+1', '').replace(/\D/g, '') + digit;
      length = unformatted_number.length;
    }
    if (unformatted_number === '') {
      return $target.val('');
    } else if (length <= 3) {
      return $target.val('+1 (' + unformatted_number + ')');
    } else if (length <= 10) {
      return $target.val('+1 (' + unformatted_number.slice(0, 3) + ')' + ' ' + unformatted_number.slice(3, 6) + ' ' + unformatted_number.slice(6, 10));
    } else {
      return $target.val(unformatted_number.substr(0, characters));
    }
  };

  formatBackPhoneNumber = function(e) {
    var $target, value;
    $target = $(e.currentTarget);
    value = $target.val();
    if (e.meta) {
      return;
    }
    if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
      return;
    }
    if (e.which === 8 && /\s\d?$/.test(value)) {
      e.preventDefault();
      return $target.val(value.replace(/\s\d?$/, ''));
    }
  };

  $.telephone.fn.formatPhoneNumber = function() {
    this.on('keypress', formatPhoneNumber);
    this.on('paste', formatPhoneNumber);
    this.on('keydown', formatBackPhoneNumber);
    return this;
  };

}).call(this);
$("#userPhone").telephone("formatPhoneNumber");
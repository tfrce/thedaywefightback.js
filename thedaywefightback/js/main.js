// Countup.js
function countUp(a,b,c,d,e){for(var f=0,g=["webkit","moz","ms"],h=0;h<g.length&&!window.requestAnimationFrame;++h)window.requestAnimationFrame=window[g[h]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[g[h]+"CancelAnimationFrame"]||window[g[h]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-f)),e=window.setTimeout(function(){a(c+d)},d);return f=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});var i=this;this.useEasing=!0,this.d=document.getElementById(a),i.startVal=Number(b),c=Number(c),this.countDown=b>c?!0:!1,d=Math.max(0,d||0),this.dec=Math.pow(10,d),this.duration=1e3*e||2e3,this.startTime=null,this.timestamp=null,this.remaining=null,this.frameVal=b,this.rAF=null,this.easeOutExpo=function(a,b,c,d){return 1024*c*(-Math.pow(2,-10*a/d)+1)/1023+b},this.count=function(a){null===i.startTime&&(i.startTime=a),i.timestamp=a;var e=a-i.startTime;if(i.remaining=i.duration-e,i.useEasing)if(i.countDown){var f=i.easeOutExpo(e,0,i.startVal-c,i.duration);i.frameVal=b-f}else i.frameVal=i.easeOutExpo(e,i.startVal,c-i.startVal,i.duration);else if(i.countDown){var f=(i.startVal-c)*(e/i.duration);i.frameVal=i.startVal-f}else i.frameVal=i.startVal+(c-i.startVal)*(e/i.duration);i.frameVal=Math.round(i.frameVal*i.dec)/i.dec,i.frameVal=i.countDown?i.frameVal<c?c:i.frameVal:i.frameVal>c?c:i.frameVal,i.d.innerHTML=i.addCommas(i.frameVal.toFixed(d)),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!=i.callback&&i.callback()},this.start=function(a){return i.callback=a,isNaN(c)||isNaN(b)?(console.log("countUp error: startVal or endVal is not a number"),i.d.innerHTML="--"):i.rAF=requestAnimationFrame(i.count),!1},this.stop=function(){cancelAnimationFrame(i.rAF)},this.reset=function(){cancelAnimationFrame(i.rAF),i.d.innerHTML=i.addCommas(b.toFixed(d))},this.resume=function(){i.startTime=null,i.duration=i.remaining,i.startVal=i.frameVal,requestAnimationFrame(i.count)},this.addCommas=function(a){a+="";var b,c,d,e;for(b=a.split("."),c=b[0],d=b.length>1?"."+b[1]:"",e=/(\d+)(\d{3})/;e.test(c);)c=c.replace(e,"$1,$2");return c+d},i.d.innerHTML=i.addCommas(b.toFixed(d))}

/* jRumble v1.3 - http://jackrugile.com/jrumble - MIT License */
(function(f){f.fn.jrumble=function(g){var a=f.extend({x:2,y:2,rotation:1,speed:15,opacity:false,opacityMin:0.5},g);return this.each(function(){var b=f(this),h=a.x*2,i=a.y*2,k=a.rotation*2,g=a.speed===0?1:a.speed,m=a.opacity,n=a.opacityMin,l,j,o=function(){var e=Math.floor(Math.random()*(h+1))-h/2,a=Math.floor(Math.random()*(i+1))-i/2,c=Math.floor(Math.random()*(k+1))-k/2,d=m?Math.random()+n:1,e=e===0&&h!==0?Math.random()<0.5?1:-1:e,a=a===0&&i!==0?Math.random()<0.5?1:-1:a;b.css("display")==="inline"&&(l=true,b.css("display","inline-block"));b.css({position:"relative",left:e+"px",top:a+"px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity="+d*100+")",filter:"alpha(opacity="+d*100+")","-moz-opacity":d,"-khtml-opacity":d,opacity:d,"-webkit-transform":"rotate("+c+"deg)","-moz-transform":"rotate("+c+"deg)","-ms-transform":"rotate("+c+"deg)","-o-transform":"rotate("+c+"deg)",transform:"rotate("+c+"deg)"})},p={left:0,top:0,"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",transform:"rotate(0deg)"};b.bind({startRumble:function(a){a.stopPropagation();clearInterval(j);j=setInterval(o,g)},stopRumble:function(a){a.stopPropagation();clearInterval(j);l&&b.css("display","inline");b.css(p)}})})}})(jQuery);





setTimeout(function() {
    $('#first-slide').fadeOut(50, function() {
        $('#second-slide').fadeIn(50);
        $('.footer').fadeIn(50);

    })
}, 1000);

$('.call-form').on('submit', function(ev) {
    var form = $(ev.currentTarget);
    var phoneNumberEl = $('#userPhone', form);
    var phoneNumber = phoneNumberEl.val().replace(/[^\d.]/g, '');
    function isValidPhoneNumber(value) {
        if (!value) return false;
        var count = value.length;
        return count == 10 || count == 11;
    }
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
    function isValidEmail(email) { 
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    } 

    var form = $(ev.currentTarget);
    var userEmailEl = $('#userEmail', form);
    var userEmail = userEmailEl.val().replace(/[^\d.]/g, '');
    if(isValidEmail(userEmail)) {
        window.open('email-tool.html', "Share on Facebook", "width=800,height=800");
    } else {

        userEmailEl.css('border', '1px solid #ff0000');
        userEmailEl.jrumble({})
        userEmailEl.trigger('startRumble');
        demoTimeout = setTimeout(function(){userEmailEl.trigger('stopRumble');
userEmailEl.css('border', 'none');
    }, 500)

    }
    return false;
})

// Call and email counters





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

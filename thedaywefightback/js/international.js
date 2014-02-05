  $.fn.serializeObject = function() {
     var o = {};
     var a = this.serializeArray();
     $.each(a, function() {
         if (o[this.name]) {
             if (!o[this.name].push) {
                 o[this.name] = [o[this.name]];
             }
             o[this.name].push(this.value || '');
         } else {
             o[this.name] = this.value || '';
         }
     });
     return o;
    };
    $('.nandp-form').on('submit', function (ev) {
        var form = $(ev.currentTarget);
        var data = form.serializeObject();

        var nameEl = $('#userName', form);
        var emailEl = $('#userEmail', form);

        var userName = nameEl.val();
        var userEmail = emailEl.val();

        var errors = false;
        if(!isValidEmail(userEmail)){
          errors = true;
          rumbleEl(emailEl);
        };
        if(userName === '') {
          errors = true;
          rumbleEl(nameEl);
        }
        if(errors) {
          return false;
        }
        var rpc = new easyXDM.Rpc({
            remote: "http://email-congress.herokuapp.com/xdm/cors/"
        },
        {
            remote: {
                request: {}
            }
        });

        rpc.request({
          url: "http://email-congress.herokuapp.com/signature",
          method: "POST",
          data: data
        }, function(response){
          $('.international .rightside.top.before').addClass('animate flipOutX');
          window.setTimeout(function(){
            $('.international .rightside.top.before').addClass("hidden");
            $('.international .rightside.top.thanks').removeClass("hidden").addClass("flipInX");
            ;}, 1000);


        });
        return false;
      });
   
  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&\/#]*)"),
          results = regex.exec(location.search);
      return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // ie shims
  if (!Object.keys) {
      Object.keys = function(o) {
          if (o !== Object(o))
              throw new TypeError('Object.keys called on a non-object');
          var k = [],
              p;
          for (p in o)
              if (Object.prototype.hasOwnProperty.call(o, p)) k.push(p);
          return k;
      }
  }

  (function() {

      var referalMap = {
          'org': {
              name: 'Open Rights Group',
              policy: 'https://www.openrightsgroup.org/privacy/'
          },
          'pi': {
              name: 'Privacy International',
              policy: 'https://www.privacyinternational.org/privacy-and-cookies-policy'
          },
          'eff': {
              name: 'EFF',
              policy: 'https://www.eff.org/policy'
          },
          'dc': {
              name: 'Digital Courage',
              policy: 'http://digitalcourage.de/ueber-uns/datenschutz-bei-digitalcourage'
          },
          'dg': {
              name: 'Digitale Gesellschaft',
              policy: 'https://digitalegesellschaft.de/uber-uns/datenschutzerklaerung/'
          },
          'sd': {
              name: 'Share Defense',
              policy: 'http://www.shareconference.net/sh/politika-privatnosti'
          },
          'oa': {
              name: 'Oficina Antivigilancia',
              policy: 'http://www.antivigilancia.tk/wiki/politica'
          },
          'om': {
              name: 'Open Media',
              policy: 'https://openmedia.ca/privacy'
          }
      };
      var referalKeys = Object.keys(referalMap);
      var referalParam = getParameterByName('r');
      var referalOrg;
      var slug;

      // Allows a page to have a selected org always
      if(typeof alwaysSelected !== 'undefined') {
          referalParam = alwaysSelected;
      }
      
      if (referalParam in referalMap) {
        referalOrg = referalMap[referalParam];
        slug = referalParam;
      } else {
        var randomOrgIndex = Math.floor(Math.random() * referalKeys.length);
        referalOrg = referalMap[referalKeys[randomOrgIndex]];
        slug = referalKeys[randomOrgIndex];
      }
      $('.org-name').text(referalOrg.name);
      $('.org-slug').val(slug);
      $('.org-privacy').attr('href', referalOrg.policy);
      if(slug === 'eff') {
        $('#subscriber-checkbox').removeAttr('checked');
      }
      /*

      var spans = label.getElementsByTagName('span');
      var link = label.getElementsByTagName('a')[0];
      spans[0].innerHTML = referalOrg.name;
      spans[1].innerHTML = referalOrg.name;
      link.href = referalOrg.policy;
      checkbox.onchange = function(e) {
          hiddenInput.value = checkbox.checked ? referalOrg.name : '';
      };
      */
})();
$(document).on('ready', function () {

var iso = getQueryVariable('iso');

$('#userCountry option[value="'+iso+'"]').attr("selected", "selected");
});  
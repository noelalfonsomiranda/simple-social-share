var width = 620;
var height = 360;
var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
var windowPosition = 'left=' + leftPosition + ',' + 'top=' + topPosition + ',' + 'width=550,' + 'height=450,' + 'personalbar=0,toolbar=0,scrollbars=0,resizable=0,screenX=' + leftPosition + ',' + 'screenY=' + topPosition;

// Facebook Share
function fbShare (item, fbAppId) {
  // It's a global so need to read it from window
  var FB = window.FB;

  var options = {
    appId: fbAppId, // facebook developer ID
    status: true,
    autoLogAppEvents: true,
    xfbml: true, // parse social plugins on this page
    version: 'v2.10'
  };

  FB.init(options);

  if (FB) {
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:url': window.location.href,
          'og:title': item.title,
          'og:description': item.description.replace(/(&nbsp;|<([^>]+)>)/ig, ' '),
          'og:image': item.image,
          'og:image:alt': item.title
        }
      })
    }, function () {
      console.log('error');
    });
  }
}

// Twitter
function twitterShare (item) {
  window.open('http://twitter.com/share?url=' + encodeURIComponent(item.url) + '&text=' + encodeURIComponent(item.text), + '', windowPosition);
}

// Google+
function googlePlusShare (item) {
  window.open('http://plus.google.com/share?url=' + encodeURIComponent(item.url) + '&text=' + encodeURIComponent(item.text), + '', windowPosition);
}

// LinkedIn
function linkedInShare (item) {
  window.open('http://www.linkedin.com/cws/share?url=' + encodeURIComponent(item.url), + '', windowPosition);
}

// Pinterest
function pinterestShare (item) {
  window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(item.url) + '&media=' + item.image + '&description=' + item.description, + '', windowPosition);
}

// Email
function emailShare (item) {
  window.location.href = 'mailto:?subject=' + item.subject + '&body=' + item.body;
}

// Viber
function viberShare (event, text) {
  window.location.href = 'https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=' + encodeURIComponent('viber://forward?text=' + encodeURIComponent(text + ' ' + window.location.href));
}

// WhatsApp
function whatsAppShare (text) {
  window.location.href = 'whatsapp://send?text=' + text + window.location.href;
}

// Facebook Messenger
function fbMessengerShare (appId) {
  window.location.href = 'fb-messenger://share?link=' + encodeURIComponent(window.location.href) + '&app_id=' + encodeURIComponent(appId);
}

// Skype for Web
function skypeShare () {
  (function(r, d, s) {
    r.loadSkypeWebSdkAsync = r.loadSkypeWebSdkAsync || function(p) {
      var js, sjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(p.id)) { return; }
      js = d.createElement(s);
      js.id = p.id;
      js.src = p.scriptToLoad;
      js.onload = p.callback
      sjs.parentNode.insertBefore(js, sjs);
    };
    var p = {
      scriptToLoad: 'https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js',
      id: 'skype_web_sdk'
    };
    r.loadSkypeWebSdkAsync(p);
  })(window, document, 'script');
}

module.exports = {
  fbShare,
  twitterShare,
  googlePlusShare,
  linkedInShare,
  pinterestShare,
  emailShare,
  viberShare,
  whatsAppShare,
  fbMessengerShare,
  skypeShare
}
const width = 620
const height = 360
const leftPosition = (window.screen.width / 2) - ((width / 2) + 10)
const topPosition = (window.screen.height / 2) - ((height / 2) + 50)
const windowPosition = `left=${leftPosition},top=${topPosition},width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0,screenX=${leftPosition},screenY=${topPosition}`

// Facebook Share
export const fbShare = (item, fbAppId) => {
  // It's a global so need to read it from window
  let FB = window.FB

  const options = {
    appId: fbAppId, // facebook developer ID
    status: true,
    autoLogAppEvents: true,
    xfbml: true, // parse social plugins on this page
    version: 'v2.10'
  }

  FB.init(options)

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
    }, () => {
      console.log('error')
    })
  }
}

// Twitter
export const twitterShare = (item) => {
  window.open(`http://twitter.com/share?url=${encodeURIComponent(item.url)}&text=${encodeURIComponent(item.text)}`, +'', windowPosition)
}

// Google+
export const googlePlusShare = (item) => {
  window.open(`http://plus.google.com/share?url=${encodeURIComponent(item.url)}&text=${encodeURIComponent(item.text)}`, +'', windowPosition)
}

// LinkedIn
export const linkedInShare = (item) => {
  window.open(`http://www.linkedin.com/cws/share?url=${encodeURIComponent(item.url)}`, +'', windowPosition)
}

// Pinterest
export const pinterestShare = (item) => {
  window.open(`http://pinterest.com/pin/create/button/?url=${encodeURIComponent(item.url)}&media=${item.image}&description=${item.description}`, +'', windowPosition)
}

// Email
export const emailShare = (item) => {
  window.location.href = `mailto:?subject=${item.subject}&body=${item.body}`
}

// Viber
export const viberShare = (event, text) => {
  window.location.href = 'https://3p3x.adj.st/?adjust_t=u783g1_kw9yml&adjust_fallback=https%3A%2F%2Fwww.viber.com%2F%3Futm_source%3DPartner%26utm_medium%3DSharebutton%26utm_campaign%3DDefualt&adjust_campaign=Sharebutton&adjust_deeplink=' + encodeURIComponent('viber://forward?text=' + encodeURIComponent(text + ' ' + window.location.href))
}

// WhatsApp
export const whatsAppShare = (text) => {
  window.location.href = `whatsapp://send?text=${text} ${window.location.href}`
}

// Facebook Messenger
export const fbMessengerShare = (appId) => {
  window.location.href = `fb-messenger://share?link=${encodeURIComponent(window.location.href)}&app_id=${encodeURIComponent(appId)}`
}

# simple-social-share
> Simple web sharing

---

#### Available social
- facebook
- twitter
- google+
- linkedIn
- pinterest
- email
- viber
- whatsapp
- messenger (facebook)
- skype

### Installation
`$ npm install simple-social-share`

## USAGE

### Facebook
*__Note:__ Add the script below before your `</head>` tag.*

```javascript
<script>
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pl_PL/all.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>
```

```javascript
  const { fbShare } = require('simple-social-share');

  const itemData = {
    title: 'Item title',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab nemo temporibus ex rerum at consequatur, eligendi, rem non quia odio! Quibusdam enim vero qui consequatur dicta doloremque aliquam. Quas.',
    image: 'https://thumb1.shutterstock.com/display_pic_with_logo/154447/235089946/stock-photo-cute-little-red-kitten-sleeps-on-fur-white-blanket-235089946.jpg'
  };
  const fbAppId = '01234567894561230'; // facebook developer ID, better to implement with .env if possible.
  
  <button onclick={() => fbShare(itemData, fbAppId)}>facebook icon</button>
```

### Twitter
```javascript
  const { twitterShare } = require('simple-social-share');

  const itemData = {
    url: 'http://google.com',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab nemo temporibus ex rerum at consequatur, eligendi, rem non quia odio! Quibusdam enim vero qui consequatur dicta doloremque aliquam. Quas.'
  };
  
  <button onclick={() => twitterShare(itemData)}>twitter icon</button>
```

### Google+
```javascript
  const { googlePlusShare } = require('simple-social-share');

  const itemData = {
    url: 'http://google.com',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab nemo temporibus ex rerum at consequatur, eligendi, rem non quia odio! Quibusdam enim vero qui consequatur dicta doloremque aliquam. Quas.'
  };
  
  <button onclick={() => googlePlusShare(itemData)}>google-plus icon</button>
```

### LinkedIn
```javascript
  const { linkedInShare } = require('simple-social-share');

  const itemData = {
    url: 'http://google.com'
  };
  
  <button onclick={() => linkedInShare(itemData)}>linkedIn icon</button>
```

### Pinterest
```javascript
  const { pinterestShare } = require('simple-social-share');

  const itemData = {
    url: 'http://google.com',
    image: 'https://thumb1.shutterstock.com/display_pic_with_logo/154447/235089946/stock-photo-cute-little-red-kitten-sleeps-on-fur-white-blanket-235089946.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab nemo temporibus ex rerum at consequatur, eligendi, rem non quia odio! Quibusdam enim vero qui consequatur dicta doloremque aliquam. Quas.'
  };
  
  <button onclick={() => pinterestShare(itemData)}>pinterest icon</button>
```

### Email
```javascript
  const { emailShare } = require('simple-social-share');

  const itemData = {
    subject: 'My email subject',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab nemo temporibus ex rerum at consequatur, eligendi, rem non quia odio! Quibusdam enim vero qui consequatur dicta doloremque aliquam. Quas.'
  };
  
  <button onclick={() => emailShare(itemData)}>email icon</button>
```

### Viber
```javascript
  const { viberShare } = require('simple-social-share');
  
  <button onclick={(e) => viberShare(e, 'Check this out:')}>viber icon</button>
```

### WhatsApp
```javascript
  const { viberShare } = require('simple-social-share');
  
  <button onclick={() => whatsAppShare('Check this out:')}>whatsapp icon</button>
```

### Facebook Messenger
```javascript
  const { viberShare } = require('simple-social-share');
  const fbAppId = '01234567894561230'; // facebook developer ID, better to implement with .env if possible.
  
  <button onclick={() => fbMessengerShare(fbAppId)}>messenger icon</button>
```

### Skype
```javascript
  const { skypeShare } = require('simple-social-share');
  skypeShare() // execute this function somewhere

  // Button Styles
  // - large
  // - small
  // - circle
  // - square
  // - custom // data-style should be empty then add inline-style or use the class for custom styling
  
  <div className='skype-share' data-href='www.skype.com' data-lang='en-US' data-text='some message' data-style='large'>skype icon</div>
```

#### Multiple Usage
const { fbShare, emailShare } = require('simple-social-share');

# ember-cli-simple-auth-kinvey

> Ember Simple Auth integration for Kinvey

## Installation

```
ember install:addon ember-cli-simple-auth-kinvey
```

## Configuration

```javascript
// config/environment.js
module.exports = function(environment) {
  var ENV = {
    // ...
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:kinvey',
      crossOriginWhitelist: ['https://baas.kinvey.com']
    },

    'simple-auth-kinvey': {
      appKey: 'appKey',
      appSecret: 'appSecret',
    }
    // ...
  },
  // ...
};
```

## Usage

### Login

```javascript
//...
this.get('session').authenticate('simple-auth-authenticator:kinvey', {
  username: username,
  password: password
});
```

### Signup

```javascript
//...
this.get('session').authenticate('simple-auth-authenticator:kinvey', {
  username: username,
  password: password,
  _isSignup: true
});
```

### Logout

```javascript
//...
this.get('session').invalidate();
```

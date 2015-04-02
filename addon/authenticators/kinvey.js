import Authenticator from 'simple-auth/authenticators/base';
import Configuration from 'ember-cli-simple-auth-kinvey/configuration';
import Ember from 'ember';
import ajax from 'ic-ajax';
var KinveyAuthenticator;


KinveyAuthenticator = Authenticator.extend({

  _baseUrl: Ember.computed(function() {
    return "https://baas.kinvey.com/user/" + Configuration.appKey;
  }),

  restore: Ember.RSVP.resolve,

  authenticate: function(data) {
    var isSignup
    isSignup = data._isSignup;
    delete data._isSignup;

    var url;
    if (isSignup) {
      url = this.get('_baseUrl')
    } else {
      url = this.get('_baseUrl') + "/login"
    }

    var options;
    options = {
      global: true,
      dataType: 'json',
      type: 'POST',
      url: url,
      data: JSON.stringify(data),
      contentType: 'application/json'
    };

    return ajax(options);
  },

  invalidate: function(data) {
    var url;
    url = this.get('_baseUrl') + "/_logout"

    var options;
    options = {
      global: true,
      dataType: 'json',
      type: 'POST',
      url: url
    };

    return ajax(options);
  }

});


export default KinveyAuthenticator;

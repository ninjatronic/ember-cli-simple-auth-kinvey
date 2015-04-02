import Authorizer from 'simple-auth/authorizers/base';
import Configuration from 'ember-cli-simple-auth-kinvey/configuration';
import Ember from 'ember';
import ajax from 'ic-ajax';
var KinveyAuthorizer;


KinveyAuthorizer = Authorizer.extend({

  _appHeader: Ember.computed(function() {
    var token;
    token = btoa(Configuration.appKey + ":" + Configuration.appSecret);
    return "Basic " + token;
  }),

  _userHeader: Ember.computed('session.token', function() {
    return "Kinvey " + this.get('session._kmd.authtoken');
  }),

  authorize: function(jqxhr, options) {
    var header;

    if (this.get('session.isAuthenticated')) {
      header = this.get('_userHeader');
    } else {
      header = this.get('_appHeader');
    }

    jqxhr.setRequestHeader('Authorization', header);
    options.xhrFields = {
      withCredentials: true
    };
  }

});


export default KinveyAuthorizer;

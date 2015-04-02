import KinveyConfiguration from
  'ember-cli-simple-auth-kinvey/configuration';
import KinveyAuthorizer from
  'ember-cli-simple-auth-kinvey/authorizers/kinvey';
import KinveyAuthenticator from
  'ember-cli-simple-auth-kinvey/authenticators/kinvey';
import ENV from '../config/environment';
var initializer;


initializer = {

  name: 'simple-auth-kinvey',
  before: 'simple-auth',

  initialize: function(container, application) {
    KinveyConfiguration.load(container, ENV['simple-auth-kinvey'] || {});
    container.register('simple-auth-authorizer:kinvey', KinveyAuthorizer);
    container.register('simple-auth-authenticator:kinvey', KinveyAuthenticator);
  }

};

export default initializer;

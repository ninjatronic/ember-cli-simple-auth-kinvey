import loadConfig from 'simple-auth/utils/load-config';
var config, defaults;

defaults = {
  appKey: '',
  appSecret: ''
};

config = {
  appKey: defaults.appKey,
  appSecret: defaults.appSecret,
  load: loadConfig(defaults)
};

export default config;

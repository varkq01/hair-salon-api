let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
} else {
  let config = require('./config.json');
  let conf = config['prod'];
  Object.keys(conf).forEach((key) => {
    process.env[key] = conf[key];
  });
}

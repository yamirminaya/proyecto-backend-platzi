const remote = require('./remote');
const config = require('../config');

module.exports = new remote(
  config.microservices.cache.host,
  config.microservices.cache.port
);

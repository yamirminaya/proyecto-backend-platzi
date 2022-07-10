const remote = require('./remote');
const config = require('../config');

module.exports = new remote(
  config.microservices.mysql.host,
  config.microservices.mysql.port
);

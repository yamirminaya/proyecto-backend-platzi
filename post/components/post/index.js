// const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');
const cache = require('../../../store/remote-cache');
const ctrl = require('./controller');

// Para convertir en función se añade PARÉNTESIS
module.exports = ctrl(store, cache);

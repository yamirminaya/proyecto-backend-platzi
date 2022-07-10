// const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');
const ctrl = require('./controller');

// Para convertir en función se añade PARÉNTESIS
module.exports = ctrl(store);

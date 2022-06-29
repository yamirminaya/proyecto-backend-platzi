const store = require('../../../store/dummy');
const ctrl = require('./controller');

// Para convertir en función se añade PARÉNTESIS
module.exports = ctrl(store);

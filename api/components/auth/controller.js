const bcrypt = require('bcrypt');
const auth = require('../../../auth');

const error = require('../../../utils/error');

const TABLA = 'auth';

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  async function login(username, password) {
    const data = await store.query(TABLA, { username });

    if (!data) throw error('1. Información inválida.', 401);

    const equals = await bcrypt.compare(password, data.password);

    if (!equals) throw error('2. Información inválida.', 401);

    // Generar TOKEN
    return auth.sign(data);
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 5);
    }

    return store.upsert(TABLA, authData);
  }

  return {
    upsert,
    login,
  };
};

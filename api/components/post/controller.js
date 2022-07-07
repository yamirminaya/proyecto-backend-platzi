const auth = require('../auth');
const { v4: uuidv4 } = require('uuid');

const TABLA = 'post';

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  function list() {
    return store.list(TABLA);
  }

  async function upsert(req) {
    const { body, user } = req;

    const post = {
      title: body.title,
      user: user.id,
    };

    if (body.id) {
      post.id = body.id;
    } else {
      post.id = uuidv4();
    }

    return store.upsert(TABLA, post);
  }

  return {
    list,
    upsert,
  };
};

const { v4: uuidv4 } = require('uuid');

const TABLA = 'post';

module.exports = function (injectedStore, injectedCache) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/dummy');
  }

  let cache = injectedCache;
  if (!cache) {
    cache = require('../../../store/dummy');
  }

  async function list() {
    let posts = await cache.list(TABLA);

    if (!posts) {
      console.log('POSTS: No estaba en caché. Buscando en DB');
      posts = await store.list(TABLA);
      cache.upsert(TABLA, posts);
    } else {
      console.log('POSTS: Nos traemos datos de cache');
    }

    return posts;
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

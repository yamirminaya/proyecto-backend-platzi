const auth = require('../auth');
const { v4: uuidv4 } = require('uuid');

const TABLA = 'user';

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
    let users = await cache.list(TABLA);

    if (!users) {
      console.log('USERS: No estaba en caché. Buscando en DB');
      users = await store.list(TABLA);
      cache.upsert(TABLA, users);
    } else {
      console.log('USERS: Nos traemos datos de cache');
    }

    return users;
  }

  function get(id) {
    return store.get(TABLA, id);
  }

  async function upsert(body) {
    const user = {
      name: body.name,
      username: body.username,
    };

    if (body.id) {
      user.id = body.id;
    } else {
      user.id = uuidv4();
    }

    if (body.username || body.password) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: body.password,
      });
    }

    return store.upsert(TABLA, user);
  }

  async function alreadyFollow(from, to) {
    const query = [{ user_from: from }, { user_to: to }];
    const result = await store.multipleQueries(TABLA + '_follow', query);
    return result.length > 0 ? true : false;
  }

  async function follow(from, to) {
    let result = await alreadyFollow(from, to);
    if (!result) {
      return await store.upsert(TABLA + '_follow', {
        user_from: from,
        user_to: to,
      });
    }
  }

  async function following(user) {
    const join = {};
    join[TABLA] = 'user_to'; // {user:'user_to}
    const query = { user_from: user };
    return await store.query(TABLA + '_follow', query, join);
  }

  return {
    list,
    get,
    upsert,
    follow,
    following,
  };
};

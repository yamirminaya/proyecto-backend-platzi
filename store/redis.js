// TODO REDIS
const redis = require('redis');
const config = require('../config');

const client = redis.createClient({
  //   host: config.redis.host,
  //   port: config.redis.port,
  //   password: config.redis.password,
  url: `redis://${config.redis.user}:${config.redis.password}@${config.redis.host}:${config.redis.port}`,
});

(async () => {
  await client.connect();
  console.log('Conectado a REDIS');
})();

module.exports = {
  async list(table) {
    const data = await client.get(table);
    return JSON.stringify(data);
  },

  async get(table, id) {
    const data = await client.get(`${table}_${id}`);
    return JSON.parse(data);
  },

  async upsert(table, data) {
    let key = table;
    if (data && data.id) {
      key = data + '_' + data.id;
    }

    await client.set(key, JSON.stringify(data));
    return true;
  },
};

// module.exports = { list, get, upsert };

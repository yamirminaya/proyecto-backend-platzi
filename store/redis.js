// TODO REDIS
const redis = require('redis');
const config = require('../config');

const client = redis.createClient({
  url: `redis://${config.redis.user}:${config.redis.password}@${config.redis.host}:${config.redis.port}`,
});

(async () => {
  await client.connect();
  console.log('Conectado a REDIS');
})();

module.exports = {
  async list(table) {
    const data = await client.get(table);
    return JSON.parse(data);
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

    await client.set(key, JSON.stringify(data), {
      EX: 10,
      NX: true,
    });
    return true;
  },
};

module.exports = {
  remoteDB: process.env.remoteDB || false,
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  redis: {
    user: 'default',
    host:
      process.env.REDIS_HOST ||
      'redis-17644.c11.us-east-1-3.ec2.cloud.redislabs.com',
    port: process.env.REDIS_PORT || '17644',
    password: 'xvz3e50ZQHgvWZl1dlkKXbZZenVSAprm',
  },
  microservices: {
    mysql: {
      host: process.env.MYSQL_SRV_HOST || 'localhost',
      port: process.env.MYSQL_SRV_PORT || 3001,
    },
    post: {
      host: process.env.POST_SRV_HOST || 'localhost',
      port: process.env.POST_SRV_PORT || 3002,
    },
    cache: {
      host: process.env.CACHE_SRV_HOST || 'localhost',
      port: process.env.CACHE_SRV_PORT || 3003,
    },
  },
};

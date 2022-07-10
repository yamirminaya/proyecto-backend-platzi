module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
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
  },
};

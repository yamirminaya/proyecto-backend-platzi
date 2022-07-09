module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysqlService: {
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
};

const express = require('express');
const config = require('../config.js');
const user = require('./components/user/network');
const app = express();

// ROUTER
app.use('/api/user', user);
// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(config.api.port, () =>
  console.log(`API escuchando en el puerto ${config.api.port}!`)
);

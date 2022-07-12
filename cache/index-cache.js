const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

// RUTAS
app.use('/', router);

app.listen(config.microservices.cache.port, () => {
  console.log(
    'Servicio de REDIS Caché escuchando en el puerto',
    config.microservices.cache.port
  );
});

const express = require('express');

const config = require('../config.js');
const router = require('./network');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RUTAS
app.use('/', router);

app.listen(config.mysqlService.port, () =>
  console.log(
    `Servicio MySQL escuchando en el puerto ${config.mysqlService.port}!`
  )
);

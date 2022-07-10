const express = require('express');

const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTER
app.use('/api/post', post);

app.use(errors);

app.listen(config.microservices.post.port, () =>
  console.log(
    `Servicio POST escuchando en el puerto ${config.microservices.post.port}!`
  )
);

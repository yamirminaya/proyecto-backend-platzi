const express = require('express');
const router = express.Router();

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

//* Routes
router.get('/', list);
router.post('/', secure('insert'), upsert);

//* Functions
function list(req, res, next) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  Controller.upsert(req)
    .then((post) => {
      response.success(req, res, post, 201);
    })
    .catch(next);
}

module.exports = router;

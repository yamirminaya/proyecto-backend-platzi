const jwt = require('jsonwebtoken');
const config = require('../config');
const error = require('../utils/error');

const secret = config.jwt.secret;

function sign(data) {
  return jwt.sign(data, secret);
}

function verify(token) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw error('No puedes hacer esto', 401);
  }
}

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    console.log(decoded);

    //COMPROBAR SI ES O NO PROPIO
    if (decoded.id !== owner) throw error('No puedes hacer esto', 401);
  },
};

function getToken(auth) {
  if (!auth) throw new Error('No viene token');
  if (auth.indexOf('Bearer') === -1) throw error('No viene Bearer', 401);
  let token = auth.replace('Bearer ', '');
  return token;
}

function decodeHeader(req) {
  const authorization = req.headers.authorization || '';
  const token = getToken(authorization);
  const decoded = verify(token);
  req.user = decoded;
  return decoded;
}

module.exports = { sign, check };

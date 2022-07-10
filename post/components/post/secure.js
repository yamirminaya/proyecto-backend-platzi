const auth = require('../../../auth');

module.exports = function checkAuth(action) {
  function middleware(req, res, next) {
    switch (action) {
      case 'insert':
        auth.check.logged(req);
        next();
        break;
      default:
        next();
    }
  }
  return middleware;
};

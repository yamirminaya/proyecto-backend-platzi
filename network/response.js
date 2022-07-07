const httpStatus = require('http-status-codes');

exports.success = (req, res, message = '', status = httpStatus.OK) => {
  return res.status(status).send({
    error: false,
    status,
    body: message,
  });
};

exports.error = (
  req,
  res,
  message = 'Internal Server Error',
  status = httpStatus.INTERNAL_SERVER_ERROR
) => {
  return res.status(status).send({
    error: true,
    status,
    body: message,
  });
};

const errorHandler = (err, req, res, next) => {
  const error = res.statusCode === 200 ? 500 : res.statusCode; // Error status can be 200 OK

  console.error(err.stack);

  res.status(error).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = { errorHandler };

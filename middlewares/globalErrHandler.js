const globalErrHandler = (err, req, res, next) => {
  //status
  //message
  //stack
  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : "failed";
  const statusCode = err?.statusCode ? err.statusCode : 500;
  //send the response
  res.status(statusCode).json({
    message,
    stack,
    status,
  });
};

//not found error
const notFoundErr = (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl} on this server`);
  err.status = "failed";
  err.statusCode = 404;
  next(err);
};

module.exports = globalErrHandler;

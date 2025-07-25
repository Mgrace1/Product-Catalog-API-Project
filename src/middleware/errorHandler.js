const errorHandler = (err, req, res, next) => {
  console.error(' Error:', err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Something went wrong!',
  });
};

module.exports = errorHandler;

// /src/middleware/errorMiddleware.js

// Generic error handling middleware
module.exports = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({
      error: 'Something went wrong!',
      message: err.message || 'Internal server error',
    });
  };
  
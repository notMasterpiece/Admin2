const toursRouter = require('./toursRoutes');
const userRouter = require('./userRoutes');
const reviewsRouter = require('./reviewsRouter');
const errorHandler = require('../controlles/errorController');

module.exports = (app) => {

  app.use('/api/v1/tours', toursRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/reviews', reviewsRouter);

  app.all('*', (req, res, next) => {
    const err = new Error(`Page ${req.originalUrl} not found...`);
    err.status = 'fail';
    err.statusCode = 404;
    next(err);
  });

  app.use(errorHandler);

};
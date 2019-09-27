const express = require('express');

const router = express.Router();
const toursControllers = require('../controlles/toursControllers');
const { auth } = require('../controlles/authController');
const { isAdmin } = require('../controlles/statusController');
const { uploadMultiple } = require('../middelwares/upload');
const { resizeAllImages } = require('../middelwares/images');

router
  .route('/best')
  .get(toursControllers.bestTours, toursControllers.getAllTours);

router
  .route('/cheapest')
  .get(toursControllers.cheapestTours, toursControllers.getAllTours);

router.route('/average').get(toursControllers.averageTours);

router
  .route('/')
  .get(toursControllers.getAllTours)
  .post(auth, isAdmin, toursControllers.createTour);

router
  .route('/:id')
  .get(toursControllers.getTour)
  .post(uploadMultiple, resizeAllImages, toursControllers.updateTour)
  .delete(toursControllers.deleteTour);

router.route('/:tourId/reviews').post(auth, toursControllers.getAllTours);

module.exports = router;

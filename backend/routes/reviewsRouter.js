const express = require('express');
const router = express.Router();
const reviewController = require('../controlles/reviewController');
const { auth } = require('../controlles/authController');


router.use(auth);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);


router
  .route('/:id')
  .delete(reviewController.deleteReview);


module.exports = router;
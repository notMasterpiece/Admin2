const Review = require('../models/reviewModel');
const withCatch = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getAllReviews = withCatch(async (req, res) => {
  // 1. Filtering query
  const filterQuery = { ...req.query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((field) => delete filterQuery[field]);

  //2.  Advanced filtering
  let queryStr = JSON.stringify(filterQuery);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Review.find(JSON.parse(queryStr));

  // 3. Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  // 4 Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  query.skip(skip).limit(limit);

  const reviews = await query;

  if (!reviews.length) {
    return res.json({
      message: 'Page not exist...',
    });
  }

  res.json({
    results: reviews.length,
    reviews,
  });
});

exports.createReview = withCatch(async (req, res) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  const newReview = await Review.create(req.body);
  res.status(202).json({
    review: newReview,
  });
});

exports.deleteReview = factory.deleteOne(Review);

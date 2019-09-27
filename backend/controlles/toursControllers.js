const Tour = require('../models/toursModel');
const withCatch = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

exports.getAllTours = withCatch(async (req, res, next) => {
  console.log(req.files);

  // 1. Filtering query
  const filterQuery = { ...req.query };
  const excludedFields = ['page', 'sort', 'limit', 'fields'];
  excludedFields.forEach((field) => delete filterQuery[field]);

  //2.  Advanced filtering
  let queryStr = JSON.stringify(filterQuery);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  let query = Tour.find(JSON.parse(queryStr)).populate({
    path: 'guides reviews',
    select: '-status',
  });

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

  const tours = await query;

  if (!tours.length) {
    return res.json({
      message: 'Page not exist...',
    });
  }

  res.json({
    results: tours.length,
    tours,
  });
});

exports.bestTours = (req, res, next) => {
  req.query.limit = '10';
  req.query.sort = '-price';
  next();
};

exports.cheapestTours = (req, res, next) => {
  req.query.limit = '10';
  req.query.sort = 'price';
  next();
};

exports.averageTours = withCatch(async (req, res, next) => {
  const stats = await Tour.aggregate([
    // {
    //   $match: { ratingsAverage: { $gte: 4.5 } }
    // },
    {
      $group: {
        _id: null,
        tours: { $sum: 1 },
        allPrice: { $sum: '$price' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
  ]);

  res.status(200).json(stats);
});

exports.getTour = factory.getOne(Tour, { path: 'reviews' });
exports.createTour = factory.createOne(Tour);
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

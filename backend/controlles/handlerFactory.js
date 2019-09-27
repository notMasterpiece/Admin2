const withCatch = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.deleteOne = (Model) =>
  withCatch(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError(`No doc found with ID ${req.params.id}`), 404);
    }

    res.status(200).json({ deleted: true });
  });

exports.updateOne = (Model) =>
  withCatch(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError(`No doc found with ID ${req.params.id}`), 404);
    }

    res.status(200).json(doc);
  });

exports.createOne = (Model) =>
  withCatch(async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(202).json(doc);
  });

exports.getOne = (Model, populate) =>
  withCatch(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populate) query = query.populate(populate);
    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`No document found with ID ${req.params.id}`),
        404,
      );
    }

    res.status(200).json(doc);
  });

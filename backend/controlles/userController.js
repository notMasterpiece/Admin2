const User = require('../models/userModel');
const withCatch = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');
const {cropFile, addWaterMark} = require('../middelwares/images');


exports.getViewerID = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};


exports.getUsers = withCatch(async (req, res, next) => {

  const users = await User
    .find({ isActive: true });

  res
    .status(200)
    .json({
      count: users.length,
      status: 'success',
      users
    });
});


exports.createUser = withCatch(async (req, res, next) => {
  const user = await User.create(req.body);
  res
    .status(202)
    .json({
      status: 'success',
      user
    });
});

exports.getViewer = factory.getOne(User);


exports.updateViewer = withCatch(async (req, res, next) => {

  if (req.file) {
    await addWaterMark(req, req.file.buffer);
    await cropFile(req, req.file.buffer);

    req.body.photo = `avatar-${req.user.id}.jpg`;
  }

  const doc = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!doc) {
    return next(new AppError(`No doc found with ID ${req.params.id}`), 404);
  }

  res
    .status(200)
    .json(doc);
});


exports.deleteUser = withCatch(async (req, res, next) => {
  const user = await User
    .findById(req.params.id)
    .select('+isActive');

  if (!user) return next(new AppError(`No user found with ID ${req.params.id}`), 404);

  user.isActive = false;
  await user.save();

  res
    .status(200)
    .json({ deleted: true });
});



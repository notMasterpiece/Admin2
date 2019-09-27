const multer = require('multer');
const AppError = require('../utils/appError');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image')) {
    return cb(new AppError('image file dont corrects', 400), false);
  }
  cb(null, true);
};


const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

const uploadSingle = upload.single('photo');

const uploadMultiple = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 5 }
]);


module.exports = {
  uploadSingle,
  uploadMultiple
};




// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'static/image/users');
//   },
//   filename: (req, file, cb) => {
//
//     const imageType = file.mimetype.split('/')[1];
//     cb(null, `userID-${req.user.id}.${imageType}`);
//   }
// });
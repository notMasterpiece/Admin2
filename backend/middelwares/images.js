const sharp = require('sharp');
const withCatch = require('../utils/catchAsync');

const addWaterMark = async (req, file, cb = () => {
}) => {

  const imageInfo = await sharp(file).metadata();

  sharp(file)
    .composite([{
      input: 'static/image/slg.png',
      left: imageInfo.width - 130,
      top: imageInfo.height - 60
    }])
    .toFormat('jpg')
    .jpeg({ quality: 70 })
    // .webp( { quality: 90 } )
    .toFile(`static/image/users/${req.user.id}.jpg`);

  cb();
};


const cropFile = async (req, file, width = 300, height = 300, cb = () => {
}) => {

  const imageInfo = await sharp(file).metadata();

  sharp(file)
    .resize(width, height, {
      fit: 'cover'
    })
    .extend({
      top: 4,
      bottom: 4,
      left: 4,
      right: 4,
      background: { r: 51, g: 51, b: 51, alpha: 1 }
    })
    .composite([{
      input: 'static/image/slg.png',
      left: 10,
      top: imageInfo.height - 60
    }])
    .toFormat('jpg')
    .jpeg({ quality: 70 })
    // .webp( { quality: 90 } )
    .toFile(`static/image/users/avatar-${req.user.id}.jpg`);


  cb();

};


const resizeAllImages = withCatch(async (req, res, next) => {
  if (!req.files) next();
  const { imageCover, images } = req.files;


  if (imageCover) {
    const imageCoverInfo = await sharp(imageCover[0].buffer).metadata();

    await sharp(imageCover[0].buffer)
      .before()
      .resize(2000, 1333, {withoutEnlargement: true})
      .composite([{
        input: 'static/image/slg.png',
        left: imageCoverInfo.width - 130,
        top: imageCoverInfo.height - 60
      }])
      .toFormat('jpg')
      .jpeg({ quality: 70 })
      .toFile(`static/image/tours/tourCoverImage-${req.params.id}.jpg`);

    req.body.imageCover = `tourCoverImage-${req.params.id}.jpg`;
  }

  // TODO images replased need to add
  req.body.images = [];
  if (images) {
    await Promise.all(
      images.map(async (image, index) => {
        const imageInfo = await sharp(image.buffer).metadata();
        const fileName = `tour-${req.params.id}-${index + 1}.jpg`;

        await sharp(image.buffer)
          .resize({
            width: 600,
            withoutEnlargement: true
          })
          .composite([{
            input: 'static/image/slg.png',
            left: imageInfo.width - 540,
            top: imageInfo.height - 70
          }])
          .toFormat('jpg')
          .jpeg({ quality: 70 })
          .toFile(`static/image/tours/${fileName}`);

        req.body.images.push(fileName);
      })
    );
  }

  next();
});


module.exports = {
  addWaterMark,
  cropFile,
  resizeAllImages
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tour = require('../models/toursModel');

const reviewSchema = new Schema({
  review: {
    type: String,
    required: [true, 'Review can not be empty'],
    trim: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 12
  },
  tour: {
    type: mongoose.Schema.ObjectId,
    ref: 'Tour',
    required: [true, 'Review must belong to a tour.']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user.']
  }
}, {
  versionKey: false,
  timestamps: true
});


reviewSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'user',
    select: 'name photo email'
  });

  next();
});


reviewSchema.statics.calcAverageRatings = async function(tourID) {

  const stats = await this.aggregate([
    {
      $match: { tour: tourID }
    },
    {
      $group: {
        _id: '$tour',
        reviews_count: { $sum: 1 },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);

  try {
    await Tour.findByIdAndUpdate(tourID, {
      ratingsAverage: stats[0].avgRating.toFixed(1),
      ratingsQuantity: stats[0].reviews_count
    });
  } catch (err) {
    console.log(err);
  }

};


reviewSchema.post('save', async function() {
  this.constructor.calcAverageRatings(this.tour);
});




reviewSchema.pre(/^findOneAnd/, async function(next) {
  this.r = await this.findOne();
  next()
  // this.constructor.calcAverageRatings(this.tour);
});


reviewSchema.post(/^findOneAnd/, async function() {
  await this.r.constructor.calcAverageRatings(this.r.tour);
});



module.exports = Review = mongoose.model('Review', reviewSchema);
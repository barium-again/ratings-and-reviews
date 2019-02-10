var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reviews');

var reviewSchema = new mongoose.Schema({
    username: String,
    ratingsNumber: Number, 
    eyeColor: String, 
    hairColor: String,
    skinTone: String,
    skinType: String,
    ageRange: String,
    skinConcerns: String,
    notHelpfulCount: Number,
    helpfulCount: Number,
    date: Date,
    review: String
})

var Review = mongoose.model('Review', reviewSchema);

var productSchema = new mongoose.Schema({
  id: Number,
  productName: String,
  fiveStarReviews: [reviewSchema],
  fourStarReviews: [reviewSchema],
  threeStarReviews: [reviewSchema],
  twoStarReviews: [reviewSchema],
  oneStarReviews: [reviewSchema]
})

var Product = mongoose.model('Product', productSchema);

module.exports = { Review, Product };


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/reviews');

// var reviewSchema = new mongoose.Schema({
//     username: String,
//     ratings: Number, 
//     eyeColor: String, 
//     hairColor: String,
//     skinTone: String,
//     skinType: String,
//     ageRange: String,
//     skinConcerns: String,
//     notHelpful: Number,
//     helpful: Number,
//     date: Date,
//     review: String
// })

// var Review = mongoose.model('Review', reviewSchema);






// module.exports = Review;
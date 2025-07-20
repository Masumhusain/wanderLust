const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

//review Schema
// review 
module.exports.reviewSchema = async(req , res)=> {
  let listing = await Listing.findById(req.params.id);
  // console.log(req.params.id);
  if(!listing) {
    throw new ExpressError(404, 'Listing not found');
  }
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  console.log(newReview);
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
   req.flash("success" , "review created!");
  res.redirect(`/listings/${listing._id}`);
}



//deletion in review
module.exports.delete = async (req, res) => {
    const { id, reviewId } = req.params;
    // Review ko delete karo
    await Review.findByIdAndDelete(reviewId);
    // Listing ke reviews array se review ka id hatao
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
     req.flash("success" , "review deleted!");
     res.redirect(`/listings/${id}`);
};
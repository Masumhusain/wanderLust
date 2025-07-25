const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("./schema.js");




module.exports.isLoggedIn = (req , res , next)=> {
   if(!req.isAuthenticated()) {
     req.session.redirectUrl = req.originalUrl;
     req.flash("error", "user must be logged in first");
     res.redirect("/login");
   }else{
    next();
   }
};


module.exports.saveRedirectUrl = (req , res , next) => {
  if(req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
   next();
}


module.exports.isOwner = async(req ,res , next) => {
  let {id} = req.params;
  let listing = await Listing.findById(id);
   if(!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error" , "you dont have permission to edit");
    return res.redirect(`/listings/${id}`);
}
next()
}

//Validation listing Schema
module.exports.ValidationSchema = (req , res , next)=> {
  let {error} = listingSchema.validate(req.body);
  if(error) {
    let errMsg = error.details.map((el)=> el.message).join(",");
    throw new ExpressError(400 , errMsg);
  }else {
    next();
  }
}


//validation review schema
module.exports.validationReviewSchema = (req , res , next)=> {
  let {error} = reviewSchema.validate(req.body);
  if(error) {
    let errorMsg = error.details.map((el)=> el.message).join(",");
    throw new ExpressError(400 , errorMsg);
  }else {
    next();
  }
}


//review author 
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review || !review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You don't have permission to edit");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
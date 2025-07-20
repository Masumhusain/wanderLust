const express  = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validationReviewSchema ,ValidationSchema, isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require('../controllers/review.js');



// review 
//review schema
router.post("/",validationReviewSchema,isLoggedIn,  wrapAsync(reviewController.reviewSchema));


//handline deletion in review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,   wrapAsync(reviewController.delete));



module.exports = router;
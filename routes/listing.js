const express  = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, ValidationSchema, isReviewAuthor} = require("../middleware.js") ;
const  listingController = require("../controllers/listing.js");
const { listingSchema } = require("../schema.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage})

// const { wrap } = require("module");

router.route("/search")
.get(wrapAsync(listingController.searchInput));
// .get(wrapAsync(listingController.searchInput))


//index and create route 
router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,ValidationSchema,upload.single('listing[image]'),  wrapAsync(listingController.create))





//new route
router.get("/new",isLoggedIn , (listingController.new));



router.route("/:id")
.put( ValidationSchema, upload.single('listing[image]'), isOwner , wrapAsync(listingController.update))
.delete(isLoggedIn,isOwner ,   wrapAsync(listingController.delete))
.get(isLoggedIn,  wrapAsync(listingController.show));


 //edit route
 router.get("/:id/edit",isLoggedIn,isOwner ,   wrapAsync(listingController.edit));




module.exports = router;
const Listing = require("../models/listing.js");
const mbxgeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingclient = mbxgeocoding({ accessToken: mapToken });


// 
module.exports.searchInput = async (req, res) => {
  const { country } = req.query;
  console.log("🔍 Raw Input:", country);

  const trimmedCountry = country?.trim(); // null/undefined safe
  const regex = new RegExp(trimmedCountry, "i");

  try {
    const all = await Listing.find({});
    console.log("📦 Total Listings in DB:", all.length);

    console.log("🔍 Searching with Regex:", regex);
    const listings = await Listing.find({ country: regex });
    console.log("✅ Matched Listings:", listings.length);
    console.error("error fetching listings: ");
    if (listings.length > 0) {
      console.log("🎯 First Match:", listings[0]);
    }

    res.render("listings/index.ejs", { allListings: listings, selectedCategory: null });

  } catch (err) {
    console.error("❌ Search Error:", err);
    res.send("Something went   wrong");
  }
};



//index route
module.exports.index = async (req, res) => {
  const { category } = req.query;
  console.log("Category filter received:", category);

  let allListings;
  try {
    if (category) {
      allListings = await Listing.find({
        category: { $regex: new RegExp(category, "i") }
      });
    } else {
      allListings = await Listing.find({});
    }
    res.render("listings/index.ejs", { allListings, selectedCategory: category });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).send("Something went  wrong.");
  }
};

//new router
module.exports.new = (req ,res)=> {
     res.render("listings/new.ejs")};

//create route
module.exports.create = async(req ,res , next)=> {
let response = await geocodingclient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send()




  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url , "..", filename);
   
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {url , filename}

  newListing.geometry = response.body.features[0].geometry;
  let savedListing = await newListing.save();
  console.log(savedListing);
  req.flash("success" , "new listings created successfully!");
  res.redirect("/listings");
 }

 //ecit route
 module.exports.edit = async(req , res)=> {
  let {id} = req.params;
  const listing = await Listing.findById(id);
   if(!listing) {
    req.flash("error" , "listing your requested for does not exist");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", {listing, originalImageUrl});
 }


 //update route
 module.exports.update = async(req , res)=> {
   let {id} = req.params;
   let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});

    if(typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename  = req.file.filename;
      listing.image = {url , filename};
     await listing.save();
    }
   req.flash("success" , "listing updated!");
   res.redirect(`/listings/${id}`);
  }

  //delete route
  module.exports.delete = async(req, res)=> {
  let {id} = req.params;
  let deleteListing = await Listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("success", "listing deleted successfully!");
  res.redirect("/listings");
 }


 //show route
 module.exports.show = async( req ,res)=> {
  let {id} = req.params;
  const listing  = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
  if(!listing) {
    req.flash("error" , "listing your requested for does not exist");
   return res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", {listing});
}



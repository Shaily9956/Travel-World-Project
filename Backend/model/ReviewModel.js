const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  username:String,
  review:String,
 
});

const review = mongoose.model("Review", reviewSchema);
module.exports = review;
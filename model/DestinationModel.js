const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  location: String,
  description: String,
  image:String,
  price: Number,
 
 
});

const Destination = mongoose.model("Destination", destinationSchema);
module.exports = Destination;
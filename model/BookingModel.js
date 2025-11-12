const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookingSchema = new Schema({
  Location: String,
 Leaving :String,
 Arrival:String,
 Persons:Number,
 Price:String
 
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
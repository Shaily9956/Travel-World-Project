const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const querySchema = new Schema({
  username:String,
  email:String,
  subject:String,
  message:String,
 
});

const UserQuery = mongoose.model("Query", querySchema);
module.exports = UserQuery;
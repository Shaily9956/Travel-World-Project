const mongoose = require("mongoose");
const initData = require("./data.js");
require('dotenv').config({ path: '../.env' });


const Destination = require("../model/DestinationModel.js");
main().then((res) => {
    console.log("connection successfully");
}).catch((err) => console.log(err));

async function main() {
  

   await mongoose.connect(process.env.MONGO_URI);
}
const initDB = async () => {
   await Destination.deleteMany({});
   await Destination.insertMany(initData.data);
   
    console.log("data was initialized");
  };
  
  initDB();
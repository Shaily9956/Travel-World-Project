const mongoose = require("mongoose");
const initData = require("./data.js");
const Destination = require("../model/DestinationModel.js");
main().then((res) => {
    console.log("connection successfully");
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/travelWorld');
}
const initDB = async () => {
   await Destination.deleteMany({});
   await Destination.insertMany(initData.data);
   
    console.log("data was initialized");
  };
  
  initDB();
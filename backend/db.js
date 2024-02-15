const mongoose = require("mongoose");
require("dotenv").config();


const connectedTOMongoDb = async () => 
{
  try {
    await mongoose.connect(process.env.MONGODB_URl);
    console.log("connected to mongodb");
  } catch (err) {
    console.log(err);
  }
};
mongoose.set("debug", true);


module.exports = connectedTOMongoDb;
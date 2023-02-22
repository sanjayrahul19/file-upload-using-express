const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/files";
mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log(`mongoDB connected:${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

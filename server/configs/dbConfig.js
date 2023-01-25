const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    mongoose.connect('mongodb+srv://georgevaz:Trashtalk123@1gurjts.mongodb.net/?retryWrites=true&w=majority');
  } catch (err) {
    console.log(err);
  }
};
module.exports = dbConnect;

const mongoose = require("mongoose");
module.exports = async () => {
  try {
    mongoose.connect("URI"); // dont forget to  add the uri
  } catch (error) {
    console.log(error);
  }
};

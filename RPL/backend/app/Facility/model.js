const mongoose = require("mongoose");

const facilitySchema = mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("Facility", facilitySchema);

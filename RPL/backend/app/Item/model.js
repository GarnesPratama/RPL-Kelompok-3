const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  imageUrl: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  fasilitas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
    },
  ],

  deskripsi: {
    type: String,
  },
  bus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bus",
  },
});

module.exports = mongoose.model("Item", itemSchema);

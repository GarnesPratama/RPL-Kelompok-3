const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  imageUrl: {
    type: String,
  },
  asalBank: {
    type: String,
    //ambil db bus
  },
  noRek: {
    type: String,
  },
  namaPengirim: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Ticket", paymentSchema);

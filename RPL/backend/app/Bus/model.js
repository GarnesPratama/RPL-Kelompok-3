const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Kode Harus Diisi"],
  },
  namaBus: {
    type: String,
    reqired: true,
  },
  noKursi: {
    type: Number,
    required: true,
  },
  tujuan: {
    type: String,
    reqired: true,
  },
  Agen: {
    type: String,
    required: true,
  },
  classBus: {
    type: String,
    reqired: true,
  },

  Agen: {
    type: String,
    required: true,
  },
  noKursi: {
    type: Number,
    required: true,
  },
  dateStart: {
    type: Date,
    reqired: true,
  },

  dateEnd: {
    type: Date,
    reqired: true,
  },
});

module.exports = mongoose.model("Bus", ticketSchema);

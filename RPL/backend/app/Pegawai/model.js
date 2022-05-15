const mongoose = require("mongoose");

const pegawaiSchema = mongoose.Schema({
  noPegawai: {
    type: Number,
    reqired: true,
  },
  name: {
    type: String,
    reqired: true,
  },
  gender: {
    type: String,
    reqired: true,
  },
  address: {
    type: String,
    reqired: true,
  },
  phoneNumber: {
    type: Number,
    reqired: true,
  },
  email: {
    type: String,
    reqired: true,
  },
  password: {
    type: String,
    reqired: true,
  },
});

module.exports = mongoose.model("Pegawai", pegawaiSchema);

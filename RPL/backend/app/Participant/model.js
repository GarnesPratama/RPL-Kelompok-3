const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({
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
  idCard: {
    type: Number,
    reqired: true,
  },

  phoneNumber: {
    type: Number,
    reqired: true,
  },
});

module.exports = mongoose.model("Participant", participantSchema);

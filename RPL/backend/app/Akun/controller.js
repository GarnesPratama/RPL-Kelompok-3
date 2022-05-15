const Akun = require("./model");
module.exports = {
  viewAkun: async (req, res) => {
    const akun = await Akun.find();
    res.status(200).json({ akun });
  },
  actionCreate: async (req, res) => {
    const { firstName, lastName, email } = req.body;
    const print = await Akun.create({
      firstName,
      lastName,
      email,
    });
    res.status(201).json({ print });
  },
};

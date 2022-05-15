const Pegawai = require("./model");

module.exports = {
  viewPegawai: async (req, res) => {
    const pegawai = await Pegawai.find();
    res.render("admin/Pegawai/view.ejs", { pegawai });
  },
  viewCreate: async (req, res) => {
    res.render("admin/Pegawai/viewCreate.ejs");
  },
  actionCreate: async (req, res) => {
    const { noPegawai, name, gender, address, phoneNumber, email, password } =
      req.body;
    const print = await Pegawai.create({
      noPegawai,
      name,
      gender,
      address,
      phoneNumber,
      email,
      password,
    });
    //console.log(print);
    res.redirect("/pegawai");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const pegawai = await Pegawai.findOne({ _id: id });
    res.render("admin/Pegawai/viewEdit.ejs", { pegawai });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const { noPegawai, name, gender, address, phoneNumber, email, password } =
      req.body;
    const print = await Pegawai.findOneAndUpdate(
      { _id: id },
      {
        noPegawai,
        name,
        gender,
        address,
        phoneNumber,
        email,
        password,
      }
    );
    //console.log(print);
    res.redirect("/pegawai");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const pegawai = await Pegawai.findOne({ _id: id });
    await pegawai.remove();
    res.redirect("/pegawai");
  },
};

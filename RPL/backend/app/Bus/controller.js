const Bus = require("./model");


module.exports = {
  viewBus: async (req, res) => {
    const bus = await Bus.find();
    res.render("admin/Bus/view.ejs", { bus });
  },
  viewCreate: async (req, res) => {
    res.render("admin/Bus/viewCreate.ejs");
  },
  actionCreate: async (req, res) => {
    const {
      namaBus,
      tujuan,
      Agen,
      jenis,
      classBus,
      dateStart,
      dateEnd,
      noKursi,
      code,
    } = req.body;
    const print = await Bus.create({
      code,
      namaBus,
      tujuan,
      Agen,
      jenis,
      classBus,
      dateStart,
      dateEnd,
      noKursi,
    });
    //console.log(print);
    res.redirect("/bus");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const bus = await Bus.findOne({ _id: id });
    res.render("admin/Bus/viewEdit.ejs", { bus });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const {
      namaBus,
      tujuan,
      Agen,
      jenis,
      classBus,
      dateStart,
      dateEnd,
      noKursi,
    } = req.body;
    const print = await Bus.findOneAndUpdate(
      { _id: id },
      {
        namaBus,
        tujuan,
        Agen,
        jenis,
        classBus,
        dateStart,
        dateEnd,
        noKursi,
      }
    );
    //console.log(print);
    res.redirect("/bus");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const bus = await Bus.findOne({ _id: id });
    await bus.remove();
    res.redirect("/bus");
  },
};

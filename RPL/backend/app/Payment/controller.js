const Payment = require("./model");

module.exports = {
  viewPayment: async (req, res) => {
    const payment = await Payment.find();

    res.render("admin/payment/view.ejs", { payment });
  },
  viewCreate: async (req, res) => {
    res.render("admin/payment/viewCreate.ejs");
  },
  actionCreate: async (req, res) => {
    const { asalBank, noRek, namaPengirim } = req.body;
    const print = await Payment.create({
      asalBank,
      noRek,
      namaPengirim,
    });
    //console.log(print);
    res.redirect("/payment");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const payment = await Payment.findOne({ _id: id });
    res.render("admin/Payment/viewEdit.ejs", { payment });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const { asalBank, noRek, namaPengirim } = req.body;
    const print = await Payment.findOneAndUpdate(
      { _id: id },
      {
        asalBank,
        noRek,
        namaPengirim,
      }
    );
    //console.log(print);
    res.redirect("/payment");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const payment = await Payment.findOne({ _id: id });
    await payment.remove();
    res.redirect("/payment");
  },
};

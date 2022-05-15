const Participant = require("./model");
module.exports = {
  viewParticipant: async (req, res) => {
    const participant = await Participant.find();
    res.render("admin/participant/view.ejs", { participant });
  },
  viewCreate: async (req, res) => {
    res.render("admin/Participant/viewCreate.ejs");
  },
  actionCreate: async (req, res) => {
    const { idCard, name, gender, address, phoneNumber } = req.body;
    const print = await Participant.create({
      idCard,
      name,
      gender,
      address,
      phoneNumber,
    });
    //console.log(print);
    res.redirect("/participant");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const participant = await Participant.findOne({ _id: id });
    res.render("admin/participant/viewEdit.ejs", { participant });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const { idCard, name, gender, address, phoneNumber } = req.body;
    const print = await Participant.findOneAndUpdate(
      { _id: id },
      {
        idCard,
        name,
        gender,
        address,
        phoneNumber,
      }
    );
    //console.log(print);
    res.redirect("/participant");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const participant = await Participant.findOne({ _id: id });
    await participant.remove();
    res.redirect("/participant");
  },
};

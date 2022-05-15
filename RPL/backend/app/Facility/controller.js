const Facility = require("./model");

module.exports = {
  viewFacility: async (req, res) => {
    const facility = await Facility.find();
    res.render("admin/Facility/view.ejs", { facility });
  },
  viewCreate: async (req, res) => {
    res.render("admin/Facility/viewCreate.ejs");
  },
  actionCreate: async (req, res) => {
    const { title } = req.body;
    await Facility.create({
      title,
      image: req.file.filename,
    });
    res.redirect("/facility");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const facility = await Facility.findOne({ _id: id });
    res.render("admin/Facility/viewEdit.ejs", { facility });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const print = await Facility.findOneAndUpdate(
      { _id: id },
      {
        title,
      }
    );
    //console.log(print);
    res.redirect("/facility");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const facility = await Facility.findOne({ _id: id });
    await facility.remove();
    res.redirect("/facility");
  },
};

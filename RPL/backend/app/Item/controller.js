const Item = require("./model");
const Facility = require("../Facility/model");
const Bus = require("../Bus/model");

module.exports = {
  viewItem: async (req, res) => {
    const item = await Item.find().populate("fasilitas").populate("bus");
    res.render("admin/Item/view.ejs", { item });
  },
  viewCreate: async (req, res) => {
    const bus = await Bus.find();
    const facility = await Facility.find();
    res.render("admin/Item/viewCreate.ejs", { bus, facility });
  },
  actionCreate: async (req, res) => {
    const { title, location, fasilitas, deskripsi, bus } = req.body;
    const print = await Item.create({
      title,
      location,
      fasilitas,
      deskripsi,
      bus,
    });
    //console.log(print);
    res.redirect("/item");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const item = await Item.findOne({ _id: id });
    const bus = await Bus.find();
    const facility = await Facility.find();
    res.render("admin/Item/viewEdit.ejs", { item,facility, bus });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const { title, location, fasilitas, deskripsi, bus } = req.body;
    const print = await Item.findOneAndUpdate(
      { _id: id },
      {
        title,
        location,
        fasilitas,
        deskripsi,
        bus,
      }
    );
    //console.log(print);
    res.redirect("/item");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const item = await Item.findOne({ _id: id });
    await item.remove();
    res.redirect("/item");
  },
};

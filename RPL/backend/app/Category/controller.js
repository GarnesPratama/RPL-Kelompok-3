const Category = require("./model");

module.exports = {
  viewCategory: async (req, res) => {
    const category = await Category.find();
    res.render("admin/category/view.ejs", { category });
  },
  viewCreate: async (req, res) => {
    res.render("admin/category/viewCreate.ejs");
  },
  actionCreate: async (req, res) => {
    const { name } = req.body;
    const print = await Category.create({ name });
    //console.log(print);
    res.redirect("/Category");
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    res.render("admin/category/viewEdit.ejs", { category });
  },
  actionEdit: async (req, res) => {
    const { id } = req.params;
    const { code, name, address, phoneNumber } = req.body;
    const print = await Category.findOneAndUpdate(
      { _id: id },
      {
        name,
      }
    );
    //console.log(print);
    res.redirect("/category");
  },
  actionDelete: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    await category.remove();
    res.redirect("/category");
  },
};

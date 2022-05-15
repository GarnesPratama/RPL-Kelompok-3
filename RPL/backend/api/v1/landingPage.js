const Category = require("../../app/Category/model");
const Item = require("../../app/Item/model");
const Bus = require("../../app/Bus/model");
const { path } = require("express/lib/application");
const { populate } = require("../../app/Category/model");
module.exports = {
  view: async (req, res) => {
    const category = await Category.find().select("name");
    const bus = await Bus.find().select("classBus namaBus").limit(5);
    res.status(200).json({
      category,
      bus,
    });
  },
};

const { viewFacility } = require("../../app/Facility/controller");
const Item = require("../../app/Item/model");

module.exports = {
  view: async (req, res) => {
    const item = await Item.find()
      .populate({
        path: "fasilitas",
      })
      .populate("bus");
    res.status(200).json({
      item,
    });
  },
};

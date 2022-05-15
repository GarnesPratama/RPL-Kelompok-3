const express = require("express");
const router = express.Router();
const bus = require("./controller");

router.get("/", bus.viewBus);
router.get("/create", bus.viewCreate);
router.post("/create", bus.actionCreate);
router.get("/edit:id", bus.viewEdit);
router.put("/edit:id", bus.actionEdit);
router.delete("/delete:id", bus.actionDelete);
module.exports = router;

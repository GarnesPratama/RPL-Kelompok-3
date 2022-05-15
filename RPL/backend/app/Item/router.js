const express = require("express");
const router = express.Router();
const item = require("./controller");

router.get("/", item.viewItem);
router.get("/create", item.viewCreate);
router.post("/create", item.actionCreate);
router.get("/edit:id", item.viewEdit);
router.put("/edit:id", item.actionEdit);
router.delete("/delete:id", item.actionDelete);
module.exports = router;

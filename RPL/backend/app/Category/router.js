const express = require("express");
const router = express.Router();
const agen = require("./controller");

router.get("/", agen.viewCategory);
router.get("/create", agen.viewCreate);
router.post("/create", agen.actionCreate);
router.get("/edit:id", agen.viewEdit);
router.put("/edit:id", agen.actionEdit);
router.delete("/delete:id", agen.actionDelete);
module.exports = router;

const express = require("express");
const router = express.Router();
const pegawai = require("./controller");

router.get("/", pegawai.viewPegawai);
router.get("/create", pegawai.viewCreate);
router.post("/create", pegawai.actionCreate);
router.get("/edit:id", pegawai.viewEdit);
router.put("/edit:id", pegawai.actionEdit);
router.delete("/delete:id", pegawai.actionDelete);
module.exports = router;

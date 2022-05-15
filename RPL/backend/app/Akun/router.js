const express = require("express");
const router = express.Router();
const akun = require("./controller");

router.get("/", akun.viewAkun);
router.post("/create", akun.actionCreate);

module.exports = router;

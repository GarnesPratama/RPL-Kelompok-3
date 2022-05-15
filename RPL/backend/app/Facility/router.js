const express = require("express");
const router = express.Router();
const facility = require("./controller");
const upload = require("../../middleware/multer");

router.get("/", facility.viewFacility);
router.get("/create", facility.viewCreate);
router.post("/create", upload.single("uploaded_file"), facility.actionCreate);
router.get("/edit:id", facility.viewEdit);
router.put("/edit:id", upload.single("uploaded_file"), facility.actionEdit);
router.delete("/delete:id", facility.actionDelete);
module.exports = router;

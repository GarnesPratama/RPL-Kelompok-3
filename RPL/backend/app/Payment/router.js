const express = require("express");
const router = express.Router();
const payment = require("./controller");

router.get("/", payment.viewPayment);
router.get("/create", payment.viewCreate);
router.post("/create", payment.actionCreate);
router.get("/edit:id", payment.viewEdit);
router.put("/edit:id", payment.actionEdit);
router.delete("/delete:id", payment.actionDelete);
module.exports = router;

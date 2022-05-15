const landingPage = require("./landingPage");
const detail = require("./detail");
const express = require("express");
const router = express.Router();

router.get("/landing-page", landingPage.view);
router.get("/detail-api", detail.view);

module.exports = router;

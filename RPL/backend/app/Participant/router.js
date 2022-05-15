const express = require("express");
const router = express.Router();
const participant = require("./controller");

router.get("/", participant.viewParticipant);
router.get("/create", participant.viewCreate);
router.post("/create", participant.actionCreate);
router.get("/edit:id", participant.viewEdit);
router.put("/edit:id", participant.actionEdit);
router.delete("/delete:id", participant.actionDelete);

module.exports = router;

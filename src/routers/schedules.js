const express = require("express");
const router = express.Router();

const {
  getScheduleDetails,
  saveSchedule,
} = require("../controllers/scheduleController");

router.post("/getScheduleDetails", getScheduleDetails);
router.post("/saveSchedule", saveSchedule);

module.exports = router;

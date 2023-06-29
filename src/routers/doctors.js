const express = require("express");
const router = express.Router();

const { getDoctorDetails, saveDoctor } = require('../controllers/doctorController');

router.post("/getDoctorDetails", getDoctorDetails);
router.post("/saveDoctor", saveDoctor);

module.exports = router;

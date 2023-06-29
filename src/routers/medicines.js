const express = require("express");
const router = express.Router();

const {
  getMedicineDetails,
  saveMedicine,
} = require("../controllers/medicineController");

router.post("/getMedicineDetails", getMedicineDetails);
router.post("/saveMedicine", saveMedicine);

module.exports = router;

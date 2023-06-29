const express = require("express");
const router = express.Router();

const {
  getRecipeById,
  getToken,
  saveReceipe,
} = require("../controllers");

// router.post("/getRecipeById", getRecipeById);
// router.post("/saveRecipeId", saveReceipe);
router.post('/getToken', getToken);

module.exports = router;

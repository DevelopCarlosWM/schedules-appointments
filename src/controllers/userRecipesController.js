const models = require("../../database/models");
const { messageOfError } = require("../constants");


const getRecipeById = async (req, res) => {
  try {
    if (!req.body.userID) {
      return res.json({
        isOk: false,
        error: messageOfError.messageOfError.thereIsAMissingParam,
      });
    }
    const recipes = await models.Recipe.findAll({
      where: {
        userID: req.body.userID
      }
    });
    if (!recipes) {
      return res.json({
        isOk: false,
        error: 'No records for this user',
      });
    }
    return res.status(200).json({
      isOk: true,
      recipes,
    });
  } catch (error) {
    res.json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};


const saveReceipe = async (req, res) => {
  const { ammount, medicine, doctorID, userID, dosage } = req.body;
  if (!ammount || !medicine || !doctorID || !userID || !dosage) {
    return res.json({
      isOk: false,
      error: messageOfError.messageOfError.thereIsAMissingParam,
    });
  }
  try {
    const doctor = await models.Doctor.findOne({
      where: {
        id: doctorID,
      }
    });
    if (!doctor) {
      return res.json({
        isOk: false,
        error: 'No registered doctor with requested ID',
      });
    }
    const recipe = await models.Recipe.build({ ...req.body });
    await recipe.save();
    return res.json({
      isOk: true,
      recipe: { ...req.body },
    })
  } catch (error) {
    return res.status(500).json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};

module.exports = {
  getRecipeById,
  saveReceipe,
};

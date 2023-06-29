const models = require("../../database/models");
const { messageOfError } = require("../constants");


const getMedicineDetails = async (req, res) => {
  try {
    if (!req.body.medicineID) {
      return res.json({
        isOk: false,
        error: messageOfError.messageOfError.thereIsAMissingParam,
      });
    }
    const medicine = await models.Medicines.findOne({
      where: {
        userID: req.body.medicineID
      }
    });
    if (!recipes) {
      return res.json({
        isOk: false,
        error: `No medicine with ID ${req.body.medicineID} where found`,
      });
    }
    return res.status(200).json({
      isOk: true,
      medicine,
    });
  } catch (error) {
    res.json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};


const saveMedicine = async (req, res) => {
  const { name, netContent, dateOfExpiry, labId } = req.body;
  if (!name || !netContent || !dateOfExpiry || !labId) {
    return res.json({
      isOk: false,
      error: messageOfError.messageOfError.thereIsAMissingParam,
    });
  }
  try {
    const medicine = await models.Medicines.build({ ...req.body });
    await medicine.save();
    return res.json({
      isOk: true,
      medicine: { ...req.body },
    })
  } catch (error) {
    return res.status(500).json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};

module.exports = {
  getMedicineDetails,
  saveMedicine,
};

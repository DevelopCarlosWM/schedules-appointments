const models = require("../../database/models");
const { messageOfError } = require("../constants");


const getDoctorDetails = async (req, res) => {
  try {
    if (!req.body.doctorID) {
      return res.json({
        isOk: false,
        error: messageOfError.messageOfError.thereIsAMissingParam,
      });
    }
    const doctor = await models.Doctor.findOne({
      where: {
        userID: req.body.doctorID
      }
    });
    if (!recipes) {
      return res.json({
        isOk: false,
        error: `No doctor with ID ${req.body.doctorID} where found`,
      });
    }
    return res.status(200).json({
      isOk: true,
      doctor,
    });
  } catch (error) {
    res.json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};


const saveDoctor = async (req, res) => {
  const { name, materno, paterno, doctorSpeciality, cedula, email, telefono } = req.body;
  if (!name || !materno || !paterno || !doctorSpeciality || !cedula || !email || !telefono) {
    return res.json({
      isOk: false,
      error: messageOfError.messageOfError.thereIsAMissingParam,
    });
  }
  try {
    const doctor = await models.Doctor.build({ ...req.body });
    await doctor.save();
    return res.json({
      isOk: true,
      doctor: { ...req.body },
    })
  } catch (error) {
    return res.status(500).json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};

module.exports = {
  getDoctorDetails,
  saveDoctor,
};

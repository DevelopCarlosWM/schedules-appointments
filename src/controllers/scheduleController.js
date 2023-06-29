const models = require("../../database/models");
const { messageOfError } = require("../constants");


const getScheduleDetails = async (req, res) => {
  try {
    if (!req.body.userId) {
      return res.json({
        isOk: false,
        error: messageOfError.messageOfError.thereIsAMissingParam,
      });
    }
    const schedule = await models.Schedule.findOne({
      where: {
        userId: req.body.userId
      },
      raw: true,
    });
    if (!schedule) {
      return res.json({
        isOk: false,
        error: `No schedule with ID ${req.body.userId} where found`,
      });
    }
    return res.status(200).json({
      isOk: true,
      schedule: {
        ...schedule,
        doctorID: schedule.doctorName,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      isOk: false,
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};


const saveSchedule = async (req, res) => {
  const { userId, scheduleDate, doctorID, doctorSpeciality, consultorio, estado, horario } = req.body;
  if (!userId || !scheduleDate || !doctorID || !doctorSpeciality || !consultorio || !estado || !horario) {
    return res.json({
      isOk: false,
      error: messageOfError.messageOfError.thereIsAMissingParam,
    });
  }
  try {
    const schedule = await models.Schedule.build({ ...req.body, doctorName: doctorID });
    await schedule.save();
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
  getScheduleDetails,
  saveSchedule,
};

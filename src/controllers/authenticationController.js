const { messageOfError } = require("../constants");
const { generateAccessToken } = require('../utils/index');

const getToken = (req, res) => {
  if (!req.body.email) {
    return res.status(500).json({
      error: messageOfError.messageOfError.thereIsAMissingParam
    })
  }
  try {
    return res.status(200).json({
      token: generateAccessToken(req.body.email),
    });
  } catch (error) {
    return res.status(500).json({
      error: messageOfError.messageOfError.somethingGoWrong,
    });
  }
};

module.exports = { getToken };

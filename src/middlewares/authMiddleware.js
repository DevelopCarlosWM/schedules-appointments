const { messageOfError } = require("../constants/messagesOfError");
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  if (!req.url.includes('getToken')) {
    if (!req.headers['authorization']) {
      return res.status(403).json({
        error: messageOfError.missingToken,
      });
    }
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json({
      error: messageOfError.missingToken,
    });
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({
        error: messageOfError.missingToken,
      });
      next();
    })
  } else if (req.url.includes('getToken')) next();
};

module.exports = { authMiddleware };

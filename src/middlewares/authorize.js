const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Not authorize' });
  }
  jwt.verify(token.split(' ')[1], process.env.TOKEN_KEY, (err, payload) => {
    if (err) {
      res.status(403).json({ message: 'access forbidden' });
    }
    if (payload) {
      if (payload.login === process.env.USER_LOGIN) {
        req.user = process.env.USER_LOGIN;
        next();
      }
    }
  });
};

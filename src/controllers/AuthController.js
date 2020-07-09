const jwt = require('jsonwebtoken');

class AuthController {
  static async auth(req, res) {
    if (req.body.login === process.env.USER_LOGIN
        && req.body.password === process.env.USER_PASSWORD) {
      return res.status(200).json({
        login: process.env.USER_LOGIN,
        token: jwt.sign({ login: process.env.USER_LOGIN }, process.env.TOKEN_KEY),
      });
    }
    return res.status(404).json({ message: 'User not found' });
  }
}

module.exports = AuthController;

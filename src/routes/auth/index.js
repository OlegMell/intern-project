const authRoute = require('express').Router();
const AuthController = require('../../controllers/AuthController');

authRoute.put('/', AuthController.auth);

module.exports = authRoute;

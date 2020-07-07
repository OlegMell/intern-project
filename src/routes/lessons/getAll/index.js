const getAllRoute = require('express').Router();
const lessonsController = require('../../../controllers/LessonsController');

getAllRoute.get('/', lessonsController.getAll);

module.exports = getAllRoute;

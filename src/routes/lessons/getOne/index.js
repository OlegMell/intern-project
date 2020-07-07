const getOneRoute = require('express').Router();
const lessonsController = require('../../../controllers/LessonsController');

getOneRoute.get('/', lessonsController.getOne);

module.exports = getOneRoute;

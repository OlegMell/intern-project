const createRoute = require('express').Router();
const lessonsController = require('../../../controllers/LessonsController');

createRoute.post('/', lessonsController.create);

module.exports = createRoute;

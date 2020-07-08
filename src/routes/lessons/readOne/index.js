const getOneRoute = require('express').Router();
const lessonsController = require('../../../controllers/LessonsController');

getOneRoute.get('/:id', lessonsController.getOne);

module.exports = getOneRoute;

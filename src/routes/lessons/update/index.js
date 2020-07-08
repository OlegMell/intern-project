const updateRoute = require('express').Router();
const LessonsController = require('../../../controllers/LessonsController');

updateRoute.put('/:id', LessonsController.update);

module.exports = updateRoute;

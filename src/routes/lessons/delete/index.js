const deleteRoute = require('express').Router();
const LessonsController = require('../../../controllers/LessonsController');

deleteRoute.delete('/:id', LessonsController.delete);

module.exports = deleteRoute;

const lessonsRoute = require('express').Router();
const getAllRoute = require('./getAll/index');
const getOneRoute = require('./getOne/index');

lessonsRoute.use('/', getAllRoute);
lessonsRoute.use('/:id', getOneRoute);

module.exports = lessonsRoute;

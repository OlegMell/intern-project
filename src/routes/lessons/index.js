const lessonsRoute = require('express').Router();
const getAllRoute = require('./readAll/index');
const getOneRoute = require('./readOne/index');
const createRoute = require('./create/index');
const deleteRoute = require('./delete/index');
const updateRoute = require('./update/index');

lessonsRoute.use('/', getAllRoute);
lessonsRoute.use('/', getOneRoute);
lessonsRoute.use('/', createRoute);
lessonsRoute.use('/', deleteRoute);
lessonsRoute.use('/', updateRoute);

module.exports = lessonsRoute;

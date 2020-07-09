const indexRoute = require('express').Router();
const lessonsRoute = require('./lessons/index');
const authRoute = require('./auth/index');
const authorize = require('../middlewares/authorize');
// indexRoute.get('/api/school', (req, res) => {
//   res.send('ok');
// });

indexRoute.use('/api/auth', authRoute);

indexRoute.use(authorize);
indexRoute.use('/api/school/lessons', lessonsRoute);

module.exports = indexRoute;

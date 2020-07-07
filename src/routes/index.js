const indexRoute = require('express').Router();
const lessonsRoute = require('./lessons/index');

indexRoute.get('/api/school', (req, res) => {
  res.send('ok');
});

indexRoute.use('/api/school/lessons', lessonsRoute);

module.exports = indexRoute;

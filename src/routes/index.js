const indexRoute = require('express').Router();

indexRoute.get('/api/school', (req, res) => {
  res.send('ok');
});

module.exports = indexRoute;

const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, 'config', '.env'),
});

const express = require('express');
// const authorize = require('./middlewares/authorize');
const indexRoute = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(authorize);
app.use('/', indexRoute);

app.listen(process.env.PORT || 3000, () => console.log('server was started'));
// require('./db/initialization')
//   .then(() => {
//   });

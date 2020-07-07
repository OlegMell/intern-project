const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config', '.env') });
const express = require('express');
const indexRoute = require('./routes/index');

const app = express();
app.use('/', indexRoute);

require('./db/connection')
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => console.log('server was started'));
  });

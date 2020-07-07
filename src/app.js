const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config', '.env') });
const indexRoute = require('./routes/index');
const express = require('express');


const app = express();
app.use('/', indexRoute);
app.listen(process.env.PORT || 3000, () => console.log('server was started'));

'use strict';

var express = require('express');
var app = express();


var routers = require('./routes/api/index');
app.use('/api', routers);

app.listen(3000);


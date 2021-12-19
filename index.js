const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());

app.listen(3000, ()=> console.log('server is running at port : 3000'));

app.use('/employees',employeeController);
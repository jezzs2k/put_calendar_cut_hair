const express = require('express');
const route = express.Router();

const CheckToken = require('../middleware/checkToken');
const { Set_Time_Controller } = require('../controller/time.controller');

route.post('/times', CheckToken, Set_Time_Controller);

module.exports = route;

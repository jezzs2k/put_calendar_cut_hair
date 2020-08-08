const express = require('express');
const route = express.Router();

const CheckToken = require('../middleware/checkToken');
const {
  Set_Calendar_Controller,
} = require('../controller/calendar.controller');

route.post('/calendar', CheckToken, Set_Calendar_Controller);

module.exports = route;

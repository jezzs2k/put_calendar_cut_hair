const express = require('express');

const route = express.Router();

const CheckToken = require('../middleware/checkToken');
const {
  Get_Calendar_Controller,
} = require('../controller/calendar.controller');

route.get('/calendar', CheckToken, Get_Calendar_Controller);

module.exports = route;

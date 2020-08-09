const express = require('express');
const route = express.Router();

const CheckToken = require('../middleware/checkToken');
const { Complete_Controller } = require('../controller/calendar.controller');

route.delete('/calendar/:id', CheckToken, Complete_Controller);

module.exports = route;

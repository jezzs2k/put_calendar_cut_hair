const express = require('express');

const route = express.Router();

const { get_something_controller } = require('../controller/start.controller');

route.get('/', get_something_controller);

module.exports = route;

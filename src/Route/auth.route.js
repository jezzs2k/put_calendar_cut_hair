const express = require('express');
const route = express.Router();

const { Login_Controller } = require('../controller/auth.controller');

route.post('/auth/login', Login_Controller);

module.exports = route;

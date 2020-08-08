const express = require('express');
const route = express.Router();

const { Register_Controller } = require('../controller/auth.controller');

route.post('/auth/register', Register_Controller);

module.exports = route;

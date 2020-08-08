const express = require('express');
const route = express.Router();

const {
  Register_Controller,
  Login_Controller,
} = require('../controller/auth.controller');

route.post('/auth/register', Register_Controller);
route.post('/auth/login', Login_Controller);

module.exports = route;

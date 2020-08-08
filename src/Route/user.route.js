const express = require('express');
const route = express.Router();

const CheckToken = require('../middleware/checkToken');

const { Get_User_Controller } = require('../controller/user.controller');

route.get('/user', CheckToken, Get_User_Controller);

module.exports = route;

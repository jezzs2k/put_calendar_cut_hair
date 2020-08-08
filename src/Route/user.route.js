const express = require('express');

const route = express.Router();

const { Get_User_Controller } = require('../controller/user.controller');

route.get('/user', Get_User_Controller);

module.exports = route;

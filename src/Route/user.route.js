const express = require('express');

const route = express.Router();

const { Delete_User_Controller } = require('../controller/user.controller');

route.delete('/user/:id', Delete_User_Controller);

module.exports = route;

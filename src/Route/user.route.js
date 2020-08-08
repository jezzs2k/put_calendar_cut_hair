const express = require('express');
const route = express.Router();

const CheckToken = require('../middleware/checkToken');
const {
  Delete_User_Controller,
  Get_User_Controller,
} = require('../controller/user.controller');

route.delete('/user/:id', CheckToken, Delete_User_Controller);
route.get('/user', CheckToken, Get_User_Controller);

module.exports = route;

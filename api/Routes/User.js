const express = require('express');
const route = express.Router();
const UserServices = require('../../Services/userService')
const middleware = require('../../utils/Middleware_validation')
/***************Routes************/


route.post('/signup',UserServices.SignUp);
route.post('/login',UserServices.Login);
route.post('/updatepassword', UserServices.UpdatePassword);

module.exports = route;
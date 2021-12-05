const express = require('express');
const route = express.Router();
const UserServices = require('../../Services/userService')
const middleware = require('../../utils/Middleware_validation')
/***************Routes************/


route.post('/signup',UserServices.SignUp);
route.post('/login',UserServices.Login);
route.post('/updatepassword', UserServices.UpdatePassword);
route.post('/adminsignup', UserServices.AdminSignUp);
route.post('/adminlogin', UserServices.Login);
route.post('/adminupdatepassword', UserServices.AdminUpdatePassword);

module.exports = route;
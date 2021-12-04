const express = require('express');
const route = express.Router();
const OrderServices = require('../../Services/OrderServices')
/***************Routes************/


route.post('/Add', OrderServices.Add);
route.post('/GetOrdersByUser', OrderServices.GetOrdersByUser);
route.post('/UpdateStatus', OrderServices.UpdateStatus);
route.get('/GetAll', OrderServices.GetAllOrders);

module.exports = route;
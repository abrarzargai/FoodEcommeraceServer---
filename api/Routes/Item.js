const express = require('express');
const route = express.Router();
const ItemService = require('../../Services/ItemService')
const middleware = require('../../utils/Middleware_validation')
/***************Routes************/


route.post('/Add', ItemService.Add);
route.post('/Update', ItemService.Update);
route.get('/GetAll', ItemService.GetAll);
route.post('/GetOne', ItemService.GetOne);
route.post('/Delete', ItemService.Delete);


module.exports = route;
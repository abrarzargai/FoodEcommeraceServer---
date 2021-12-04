const express = require('express');
const router = express.Router();

//Required api's 

const User = require('./Routes/User')
const Item = require('./Routes/Item')
const Order = require('./Routes/Order')
const Auth = require('./Routes/Auth')
const ImageUpload = require('./Routes/ImageUpload')
/*********Main Api**********/
router.use('/user',User);
router.use('/Item', Item);
router.use('/Order', Order);
router.use('/auth', Auth);
router.use('/upload', ImageUpload);


module.exports = router;
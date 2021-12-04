const express = require('express');
const route = express.Router();
const multer = require('multer')
var cloudinary = require('cloudinary')

/***************Routes************/
cloudinary.config({
    cloud_name: process.env.CLOUDNAME,
    api_key: process.env.CLOUDAPI,
    api_secret: process.env.CLOUDSECRET
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'image-' + Date.now() + file.originalname)
    }
})

var upload = multer({ storage: storage })

route.post('/image', upload.single('image'), async (req, res) => {

    const file = req.file;
    console.log("===>", req.file)
    if (!file) {
        const error = new Error('Please upload a file')
        console.log('no-file')
        return next(error)
    }
    cloudinary.v2.uploader.upload(file.path,
        function (error, result) { 
            
            console.log("result===>",result,"error==>", error)
            res.json({ Status: 'Image Uploaded', Imagename: result.url });
        
        });
    
});



module.exports = route;
const express = require('express');
const route = express.Router();
const MiddleWare = require('../../utils/Middleware_validation')
const stripe = require('stripe')(process.env.Stripe_Secret_key)
var elasticemail = require('elasticemail');
const { authenticate } = require('../Middleware/auth')
const nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
/***************Routes************/


route.post('/email', async (req, res,next) => {
     console.log("Email Hit")
    // var VerificationCode = Math.floor(1000 + Math.random() * 9000);
    // console.log(VerificationCode);
    
    try {
        var transporter = nodemailer.createTransport( {
            host: "smtp.gmail.com",
            secureConnection: false,
            port: 587,
            requiresAuth: true,
            domains: ["gmail.com", "googlemail.com"],
            auth: {
                user: 'EveSpiceapp@gmail.com',
                pass: 'EveSpiceapp@123'
            },
        });
            
        var mailOptions = {
            from: 'EveSpiceapp@gmail.com',
            to: req.body.Email,
            subject: 'EveSpice App VerificationCode',
            text: `
            
            Your Verification Code :${req.body.Code}
            `
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("error==>",error);
                throw new Error('Error! Please Enter Valid Email Address');
            } else {

                console.log('Email sent: ' + info.response);
                return res.status(200).json({
                    success: true, message: "Email Sent Successfully.Please Check Your Email for verification Code"
                })
            }
        }); 


       }catch(error) {
        
           throw new Error(error);
        } 

});



module.exports = route;
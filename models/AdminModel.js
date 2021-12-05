const mongoose = require("mongoose");
const argon2 = require('argon2');
const AdminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    Email: {
        type: String,
        required: [true, "Please Enter your email"],
        unique: true,
    },
    Password: {
        type: String,
        required: [true, "Please Enter your password"],
    },
    UserId: {
        type: Number
    },
    Address: {
        type: String,
        require: true
    },
    PhoneNumber: {
        type: String,
        required: [true, "Please Enter your Phone Number "],
    },
    Role: {
        type: String,
        enum: ['admin', 'customer'],
        required: [true, "Please Select Your Role as Driver or Customer"],
    },
    Order: [{
        type: mongoose.Types.ObjectId,
        ref: 'Order',
    }],
},
    {
        timestamps: true,
    });

AdminSchema.pre('save', async function (next) {
    this.Password = await argon2.hash(this.Password);
    next();
})
AdminSchema.pre('updateOne', async function (next) {
    this.getUpdate().Password = await argon2.hash(this.getUpdate().Password);
    next();
})


const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;

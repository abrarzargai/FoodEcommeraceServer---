const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        unique: true
    },
    Image: {
        type: String
    },
    Price: {
        type: Number,
        required: [true, "Please Price of Item"],
    },
    Description: {
        type: String
    },
    Category: {
        type: String
    },   
},
    {
        timestamps: true,
    });


const Item = mongoose.model("Item", ItemSchema);
module.exports = Item;

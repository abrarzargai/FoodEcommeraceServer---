const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  Status: {
    type: String,
    enum: ['Pending', 'Approved', 'Delivered'],
    default:"Pending"
  },
  Items: [{
    type: mongoose.Types.ObjectId,
    ref: 'Item',
  }],
  TotalPrice: {
    type: Number,
    require:true
  },
  User: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  Email: {
    type: String,
  },
  Image: {
    type: String,
  },
  Comments: {
    type: String
  },
},
  {
    timestamps: true,
  });


const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;

const mongoose = require("mongoose");

require("dotenv").config();

const orderSchema = new mongoose.Schema({
  // shippingInfo:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Address'},
  user:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'},
  orderItems:[
    {
    // product:{type:mongoose.Types.ObjectId,required:true,ref:'Product'},
    product:{type:String,required:true},
    name:{type:String,required:true},
    quantity:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:String,required:true},
    }
  ],
  paymentInfo:{
    id:{type:String,required:true},
    status:{type:String,required:true},
    amountPaid:{type:String,required:true},
  },
  orderStatus:{
    type:String,default:"Processing",
  }
},
{
  timestamps: true, //, adds createdAt and updatedAt fields automatically
}
);

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;

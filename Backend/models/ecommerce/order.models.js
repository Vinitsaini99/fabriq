import mongoose from "mongoose";

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true,
    }
})

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemSchema]
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    status:{
        type:String,
        enum: ["PENDING","PLACED","CANCELLED","DESPATCHING","DELIVERING","DELIVERED","RETURNED"],
        default:"PENDING"
    }


},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema)
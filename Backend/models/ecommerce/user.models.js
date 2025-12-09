import mongoose from "mongoose"



const addressSchema=new mongoose.Schema({
    country:{
        type:String,
        required:true,
        default:"india"
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    houseNumber:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true,
        maxLength:20 
    },
    landmark:{
        type:String,
        required:true
    }

},{timestamps:true})

export const Address=mongoose.model("Address",addressSchema)





const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


export const User =mongoose.model('User',userSchema);
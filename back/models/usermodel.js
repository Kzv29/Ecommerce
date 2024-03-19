const mongoose=require('mongoose')
const userSchema=mongoose.Schema({

   

username: { type: String, required: true, },
email: { type: String, required: true,  },
password: { type: String, required: true },
   
    address: { type: String},
    city: { type: String},
    country: { type: String},
    street: { type: String},
    zipcode: { type: String, },
    phone: { type: String,},
    state: { type: String},
    role:{type:String,required:true,default:'User'},

    })
//role-admmin/user

const usermodel=mongoose.model('User',userSchema)
module.exports=usermodel


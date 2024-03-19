const mongoose = require('mongoose')
const cartSchema= mongoose.Schema({
    

uid:{type: 'string', required: true},
name:{type: 'string', required: true},
image:{type: 'string', required: false},
description:{type:'string',required:false},
brand:{type:'string',required:true},
category:{type:'string',required:false},
price:{type: 'number', required: true},
countInStock:{type: 'number', required: false},
rating:{type: 'number', required: false},
numReviews:{type: 'number', required: false},
quantity: { type: 'number',default:1, },
total:{type:'number',required:false}

}
)

const cartmodel=mongoose.model('cart',cartSchema)
module.exports=cartmodel

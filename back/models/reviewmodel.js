const mongoose=require('mongoose')
const reviewSchema=mongoose.Schema({

uid: { type: String,type: mongoose.Types.ObjectId,ref: 'users', },
email: { type: String,   },
comments:{ type :String ,},
rating:{type:String},
name: { type: mongoose.Types.ObjectId, ref: 'products',  }



})
const reviewmodel=mongoose.model('Review',reviewSchema)
module.exports=reviewmodel

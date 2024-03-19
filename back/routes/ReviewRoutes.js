const express=require('express')
const reviewcontroller=require('../controller/reviewcontroller')
const app=express()
const routes=express.Router()

routes.post('/create/:id',reviewcontroller.createReview)
routes.get('/find',reviewcontroller.findReview)


module.exports=routes;
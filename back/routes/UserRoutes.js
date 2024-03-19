const express=require('express')
const usercontroller=require('../controller/usercontroller')
const app=express()
// const productcontroller=require('../controllers/productcontroller')
const routes=express.Router()



routes.post('/login',usercontroller.login)
routes.post('/register',usercontroller.register)
// routes.post('/addcart',productcontroller.login)
routes.post('/update',usercontroller.profile)
routes.get('/userprofile/:id',usercontroller.ProfileUser)
module.exports=routes;

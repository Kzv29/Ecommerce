const express = require('express')
const app = express()
const cartcontroller=require('../controller/cartcontroller')

const routes = express.Router()



   
routes.post('/create',cartcontroller.createcart)
routes.get('/find/:id',cartcontroller.cartInfo)
routes.delete('/cart/:id',cartcontroller.deleteFromCartById)
routes.get('/cart/:id',cartcontroller.findfromCart)


module.exports=routes;

const express=require('express') 
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
 app.use(cors())
const userRouter=require('../back/routes/UserRoutes')


const CartRouter=require('../back/routes/CartRoutes')
const ReviewRoutes=require('../back/routes/ReviewRoutes')
app.use(express.json());



// app.use('/'/productroute)
app.use('/user',userRouter)
app.use ('/cart',CartRouter)
app.use('/review',ReviewRoutes)

mongoose.connect('mongodb://localhost:27017/Ecommerce').then(()=>{
    console.log('database connected')
  app.listen(8080,()=>console.log('running on 8080'))
})
const cartmodel =require('../models/cartmodel')


const createcart = async (req, res) => {
    const {uid,name,image,brand}=req.body
    const alreadyexits=await cartmodel.find({uid,name})
    if (alreadyexits==''||!alreadyexits){
        const created = await cartmodel.create(req.body)
        console.log(req.body)
        res.json(created)

    }else{
        res.json({message:'failed'})
    }
    console.log(req.body)
 }


 
 const cartInfo=async(req,res)=>{
    const id=req.params.id

    const finduid=await cartmodel.find({uid:id})
    try {
        if (finduid) {
            res.json(finduid)
        } else {
            res.json('failed')
        }
    } catch (error) {
        
    }
}
const findfromCart=async(req,res)=> {
    uid=req.params.id
        try {
        const cart=await cartmodel.findOne({uid:uid})
        res.json(cart)

    } catch (error) {
        console.log(error)
    }
    }

 
    
    const deleteFromCartById = async (req, res) => {
        const cartId = req.params.id;
        try {
            const deletedCart = await cartmodel.deleteOne({ _id: cartId });
            if (deletedCart.deletedCount === 0) {
                return res.status(404).json({ message: "Cart item not found" });
            }
            res.json({ message: "Cart item deleted successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
      
    }
    }



module.exports ={createcart,cartInfo,findfromCart,deleteFromCartById};
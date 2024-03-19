
const usermodel = require('../models/usermodel');

// Register
const register = async (req, res) => {
  console.log(req.body) 
  const {username,email,password}=req.body
    const alreadyexist= await usermodel.find({email})
if (alreadyexist==''||!alreadyexist) {
  const data= await usermodel.create({email,password,username})
  res.json({userdetail:data})
} else {
  res.json({message:'failed'})
}



}

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  const data=await usermodel.findOne({ email,password})
  if(data=='' || !data){
    res.json({message:'failed'})
  }else{
    res.json({userdetail:data})
  }

  //profile
  

}





const profile = async (req, res) => {
  const { email, street, city, country, address,phone,state,zipcode } = req.body;

  try {
      // Find the user by email
      const emaildata = await usermodel.findOne({ email });

      if (!emaildata) {
          return res.status(404).send("User not found");
      }

      // Update the user's profile
      const response = await usermodel.updateOne({ email }, { street, city, country, address,state,phone,zipcode });

      res.json({message:'success'})
     
      
  } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).send("Internal server error");
  }
};
const ProfileUser=async (req, res) => {
  // const { email, street, city, country, address } = req.body;
  const id=req.params.id
  let data=await usermodel.findOne({_id:id});
  if(!data){ 
    res.json({message:'failed'})
  }else{
    res.json({userdetail:data})
  }
    
   
  



}

module.exports = { login, register,profile,ProfileUser };


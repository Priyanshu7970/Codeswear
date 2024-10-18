 
 import Product from "@/models/Product" 
 import connectDb  from "@/middileware/mongoose";  

const handler = async (req,res)=>{
  if(req.method == "POST"){  
    console.log(req.body)
    for(let i = 0;i<req.body.length;i++){
     let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])   
    }
    res.status(200).json({success:"Yess"})

  } 
  else{
    res.status(400).json({error:"The is the errror"})
  }
} 
export default connectDb(handler)
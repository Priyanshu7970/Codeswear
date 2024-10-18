const mongoose = require('mongoose'); 
const OrderSchema = new mongoose.Schema({
    userId: {type:String,required:true }, 
    products: [{
         productId:{type:String}, 
         quantity:{type:Number,default:1}
    }],  
   address:{type:String,require:true}, 
   amount:{type:Number,require:true}, 
   status:{type:String,default:'Pending',require:true}
    

  },{timestamps:true}); 
//   timestamps true means it will automatically create a createdAT and UpdatedAt  

mongoose.models = { }

export default mongoose.model('Order',OrderSchema);
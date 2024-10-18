const mongoose = require('mongoose'); 
const UserSchema = new mongoose.Schema({
    Name: {type:String,required:true }, 
    email: {type:String,required:true,unique:true}, 
    password: {type:String,required:true }
    
  },{timestamps:true}); 
//   timestamps true means it will automatically create a createdAT and UpdatedAt 
export default mongoose.model("User",UserSchema);
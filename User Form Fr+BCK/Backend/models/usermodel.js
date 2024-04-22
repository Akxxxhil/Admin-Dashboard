const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Company:{
        type:String,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model("User",userSchema)
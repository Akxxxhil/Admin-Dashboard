const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        enum:["Admin","Student","Teacher","Visitor"],
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model("User",UserSchema)
const mongoose=require("mongoose")
require('dotenv').config()
const dataconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log(" Database connected Successfully");
    })
    .catch(()=>{
        console.log("Database is not connecetd");
    })
}
module.exports=dataconnect
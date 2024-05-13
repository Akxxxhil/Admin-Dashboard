const express=require("express")
const app=express()
require("dotenv").config()


//middleWare
app.use(express.json())
const fileUpload=require("express-fileupload")
app.use(fileUpload())


const PORT=process.env.PORT

const routing=require("./routes/fileroute")
app.use("/api/v1",routing)

const database=require("./config/db")
database()


const cloudinary=require("./config/cloudinary")
cloudinary.cloudinaryConnect()




app.listen(PORT,()=>{
    console.log("server is started");
})

app.get("/",(req,res)=>{
    res.send("everything is ok")
})
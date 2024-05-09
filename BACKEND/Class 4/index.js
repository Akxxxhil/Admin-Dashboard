const express=require("express")
const app=express()
require("dotenv").config()


const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.json())
const PORT=process.env.PORT||5000

const Router=require("./Router/router")
app.use("/app/v1",Router)

const database=require("./db/db")
database()

app.listen(PORT,()=>{
    console.log("Serever is listening");
})

app.get("/",(req,res)=>{
    res.send("Everything is ok my buddy")
})
const express=require("express")
const cors = require("cors");
require("dotenv").config()
const app=express()

app.use(express.json())

app.use(cors());

const PORT=process.env.PORT

const Router=require("./routes/routes")
app.use("/",Router)

const database=require("./db/datanbase")
database()

app.listen(PORT,()=>{
    console.log("Server is perfect Boss");
})

app.get("/",(req,res)=>{
    res.send("everything ok ")
})
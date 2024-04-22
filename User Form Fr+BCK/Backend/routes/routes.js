const express=require("express")
const Router=express.Router()

const {userDetails}=require("../controlers/usercontrol")
const {allDetails}=require("../controlers/alldata")


Router.get("/allDetails",allDetails)
Router.post("/userDetails",userDetails)

module.exports=Router
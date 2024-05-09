const express=require("express")
const Router=express.Router()


const{Signup,login}=require("../controler/auth")

const{auth,isstudent,isAdmin}=require("../middleware/auth.js")


//normal route
Router.post("/signup",Signup)
Router.post("/login",login)


//Testing Rotes
Router.get("/test",auth, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to protected route for TESTS"
    })
})
//Protected Rote
Router.get("/student",auth,isstudent, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to protected route for students"
    })
})
Router.get("/admin",auth,isAdmin, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome to protected route for Admins"
    })
})

module.exports=Router
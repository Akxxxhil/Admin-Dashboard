const User=require("../model/User")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

exports.Signup=async(req,res)=>{
    try {
        const{Name,email,password,Role}=req.body;
        // We are trying to find out whther user exists or not
        const exisinguser=await User.findOne({email})
        if(exisinguser){
           return res.status(500).json({
                success:false,
                message:"User already exist"
            })
        }

        let hashpassowrd;
        try {
            hashpassowrd=await bcrypt.hash(password,10)
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Unable to Hash the Password"
            })
        }

        const user=await User.create({
            Name,email,password:hashpassowrd,Role
        })
        return res.status(200).json({
            success:true,
            data:user,
            message:"User Created Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User Unable to create"
        })
    }
}

//login a user

exports.login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        //if user not exist
        const userexist=await User.findOne({email})
        if(!userexist){
            return res.status(500).json({
                success:false,
                message:"Please sign Up first"
            })
        }

        const payload={
            email:userexist.email,
            id:userexist._id,
            Role:userexist.Role
        }

        /// comparing password and creating jwt
        if (await bcrypt.compare(password,userexist.password)){
            let token= jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h"
            })

           // userexist=userexist.toObject();
            userexist.token=token
            console.log(userexist);
            userexist.password=undefined

            const options={
                httpOnly:true,
                expires:new Date(Date.now()+ 3*24*60*60*1000)

            }

            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                userexist,
                message:"user loged in successfully"
            })

        }
        else{
            return res.status(500).json({
                success:false,
                message:"Password is not correct"
            })
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Failure"
        })
    }
}
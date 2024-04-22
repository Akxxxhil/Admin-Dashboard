const User=require("../models/usermodel")

exports.userDetails=async(req,res)=>{
    try {
        const{Name,Company,Salary}=req.body;
        const resposne=await User.create({Name,Company,Salary})
        res.status(200).json({
            Success:true,
            data:resposne,
            message:"Employee details added"
        })
    } catch (error) {
        console.error("error ",error);
        res.status(500).json({
            Success:false,
            message:"Unable to add Employee Details"
        })
    }
}
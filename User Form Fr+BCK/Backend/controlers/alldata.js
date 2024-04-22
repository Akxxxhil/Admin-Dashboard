const User=require("../models/usermodel")

exports.allDetails=async(req,res)=>{
    try {
        
        const resposne=await User.find({})
        res.status(200).json({
            Success:true,
            data:resposne,
            message:" ALL Employee details Visible"
        })
    } catch (error) {
        console.error("error ",error);
        res.status(500).json({
            Success:false,
            message:"ALL Employee details are not  Visible"
        })
    }
}
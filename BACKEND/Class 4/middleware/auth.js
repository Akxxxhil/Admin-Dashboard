
const jwt=require("jsonwebtoken")

require("dotenv").config()

exports.auth=(req,res,next)=>{
    try {
        //extract the token 
        console.log("cookie",req.cookies.token);
        console.log("body",req.body.token);

        const token=req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.json({
                success:false,
                message:"token is missing"
            })
        }

        //verify the token
        try {
            const payload=jwt.verify(token,process.env.JWT_SECRET)
            console.log(payload);
            req.user = payload;
        } catch (error) {
            return res.json({
                success:false,
                message:"token is invalid"
            })
        }
        next()
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong while veifying token"
        })
    }

}


exports.isstudent = (req, res, next) => {
    try {
        if (req.user.Role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is not for students, this is a protected route"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role does not match"
        });
    }
};


exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.Role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is not for admins, this is a protected route"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role does not match"
        });
    }
};




//students and admin for authorisation
// auth for authentication




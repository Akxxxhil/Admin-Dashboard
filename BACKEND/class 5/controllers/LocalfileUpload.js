const File=require("../models/fileschema")


exports.LocalfileUpload=async(req,res)=>{
    try {
        const file=req.files.file;
        console.log("ans",file);

        let path=__dirname+"/files/"+Date.now()
        console.log("path",path);

        file.mv(path ,(err)=>{
            console.log("error");
        })

        res.json({
            success:true,
            message:"LocalfileUpload succesfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"LocalfileUpload not not succesfully"
        })
    }
}
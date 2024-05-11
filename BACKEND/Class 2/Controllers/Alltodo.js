const Todo = require("../model/todoschema");

exports.allTodo=async (req,res)=>{
    try {
        const allTodo=await Todo.find({})
        res.status(200).json({
            success: true,
            data: allTodo,
            message: "All data visible success"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Data is not visible"
        });
    }
}
exports.getTodobyId=async(req,res)=>{
    try {
        const id=req.params.id;
        const todo=await Todo.findById({_id:id})
        
        //data not Found
        if(!todo){
            res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }

        //todo found
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo fetched Successfully"
        })


    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Data is not visible"
        });
    }
}
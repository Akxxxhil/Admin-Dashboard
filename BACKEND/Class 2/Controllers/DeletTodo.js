const Todo = require("../model/todoschema");

exports.DeletedTodo = async (req, res) => {
    try {
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo Deleted Successfully"
        })
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Data is not Deleted"
        });
    }
};

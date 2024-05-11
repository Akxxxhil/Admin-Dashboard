const Todo = require("../model/todoschema");

exports.UpdateTODO = async (req, res) => {
    try {
        const {id}=req.params;
        const { title, description } = req.body;
        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,UpdatedAt:Date.now()}
        )
        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo Updated Successfully"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Data is not Updated"
        });
    }
};

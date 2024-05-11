const Todo = require("../model/todoschema");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description });
        res.status(200).json({
            success: true,
            data: response,
            message: "entry success"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "entry caused an error"
        });
    }
};

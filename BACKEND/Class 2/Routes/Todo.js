const express = require("express");
const Router = express.Router();
const { createTodo } = require("../Controllers/CreateTodo"); 
const {allTodo,getTodobyId}=require("../Controllers/Alltodo")
const {UpdateTODO}=require("../Controllers/UpdateTodo")
const {DeletedTodo}=require("../Controllers/DeletTodo")

Router.post("/createtodo", createTodo); 
Router.get("/alltodo",allTodo)
Router.get("/allTodo/:id",getTodobyId)
Router.put("/updatedtodo/:id",UpdateTODO)
Router.delete("/deltetodo/:id",DeletedTodo)

module.exports = Router;

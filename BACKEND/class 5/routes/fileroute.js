const express=require("express");
const Router=express.Router();

const {LocalfileUpload}=require("../controllers/LocalfileUpload")

Router.post("/localfileUpload",LocalfileUpload)

module.exports=Router




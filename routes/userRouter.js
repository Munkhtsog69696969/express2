const express=require("express");

const userRouter=express.Router();

const {createUser}=require("../controller/userController");
const {loginUser}=require("../controller/userController");
const {updateUser}=require("../controller/userController");

userRouter
    .post("/createUser",createUser)
    .get("/loginUser",loginUser)
    .put("/updateUser/:id",updateUser);
module.exports=userRouter;
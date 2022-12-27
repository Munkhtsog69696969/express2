const express=require("express");

const router=express.Router();

const {getDatas}=require("../controller/controller");
const {createData}=require("../controller/controller");
const {updateData}=require("../controller/controller");
const {deleteData}=require("../controller/controller");
const {createNewData}=require("../controller/controller");
const {getSpecificData}=require("../controller/controller");

router
    .get("/",getDatas)
    .post("/post",createData)
    .put("/put/:id",updateData)
    .delete("/delete/:id",deleteData)
    .get("/datas/:id",getSpecificData)
    .post("/createNew",createNewData);

module.exports=router;


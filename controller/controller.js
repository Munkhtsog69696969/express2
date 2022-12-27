const express=require("express");

const ModelDb=require("../models/model");


exports.getDatas=async(req,res)=>{
    const data=await ModelDb.find({});
    res.send(data);
}

exports.createData=async(req,res)=>{
    const data=new ModelDb({name:"Eeeegcii"});
    data.save();
    res.send("created")
    res.send(data);
}

exports.updateData=async(req,res)=>{
    const id=req.params.id;
    const data=await ModelDb.findByIdAndUpdate(id,{name:"moony"});
    data.save();
    res.send("updated");
}

exports.deleteData=async(req,res)=>{
    const id=req.params.id;
    await ModelDb.deleteOne({_id:id});
    res.send("deleted");
}

exports.createNewData=async(req,res)=>{
    const body=req.body;
    const data=new ModelDb(body);
    await data.save();
    res.send("created new data");
}

exports.getSpecificData=async(req,res)=>{
    const id=req.params.id;
    const specificData=await ModelDb.findById(id)
    res.send(specificData);
}
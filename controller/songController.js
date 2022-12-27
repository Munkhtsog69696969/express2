const express=require("express");

const songDb=require("../models/songModel");


exports.getSongs=async(req,res)=>{
    const data=await songDb.find({});
    res.send(data);
}

exports.createSong=async(req,res)=>{
    const data=new songDb({name:"song"});
    data.save();
    res.send("created song")
    res.send(data);
}

exports.updateSong=async(req,res)=>{
    const id=req.params.id;
    const data=await songDb.findByIdAndUpdate(id,{name:"new song"});
    data.save();
    res.send("updated song");
}

exports.deleteSong=async(req,res)=>{
    const id=req.params.id;
    await songDb.deleteOne({_id:id});
    res.send("deleted song");
}

exports.createNewSong=async(req,res)=>{
    const body=req.body;
    const data=new songDb(body);
    await data.save();
    res.send("created new song");
}

exports.getSpecificSong=async(req,res)=>{
    const id=req.params.id;
    const specificData=await songDb.findById(id)
    res.send(specificData);
}
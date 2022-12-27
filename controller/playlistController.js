const express=require("express");

const playlistDb=require("../models/playlistModel");


exports.getPlaylists=async(req,res)=>{
    const data=await playlistDb.find({});
    res.send(data);
}

exports.createPlaylist=async(req,res)=>{
    const data=new playlistDb({name:"playlist"});
    data.save();
    res.send("created playlist")
    res.send(data);
}

exports.updatePlaylist=async(req,res)=>{
    const id=req.params.id;
    const data=await playlistDb.findByIdAndUpdate(id,{name:"playlist"});
    data.save();
    res.send("updated playlist");
}

exports.deletePlaylist=async(req,res)=>{
    const id=req.params.id;
    await playlistDb.deleteOne({_id:id});
    res.send("deleted playlist");
}

exports.createNewPlaylist=async(req,res)=>{
    const body=req.body;
    const data=new playlistDb(body);
    await data.save();
    res.send("created new playlist");
}

exports.getSpecificPlaylist=async(req,res)=>{
    const id=req.params.id;
    const specificData=await playlistDb.findById(id)
    res.send(specificData);
}
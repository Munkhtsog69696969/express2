const express=require("express");

const songRouter=express.Router();

const {getSongs}=require("../controller/songController");
const {updateSong}=require("../controller/songController");
const {deleteSong}=require("../controller/songController");
const {createNewSong}=require("../controller/songController");
const {createSong}=require("../controller/songController");
const {getSpecificSong}=require("../controller/songController");


songRouter
    .get("/songs",getSongs)
    .put("/updateSongs",updateSong)
    .delete("/deleteSong",deleteSong)
    .post(" /createNewSong",createNewSong)
    .post("/createSong",createSong)
    .get("/getSpecificSong",getSpecificSong)
    
module.exports=songRouter;
const express=require("express");

const playlistRouter=express.Router();

const {getPlaylists}=require("../controller/playlistController");
const {updatePlaylist}=require("../controller/playlistController");
const {deletePlaylist}=require("../controller/playlistController");
const {createNewPlaylist}=require("../controller/playlistController");
const {createPlaylist}=require("../controller/playlistController");
const {getSpecificPlaylist}=require("../controller/playlistController");


playlistRouter
    .get("/playlists",getPlaylists)
    .put("/updatePlaylists",updatePlaylist)
    .delete("/deletePlaylist",deletePlaylist)
    .post("/createNewPlaylist",createNewPlaylist)
    .post("/createPlaylist",createPlaylist)
    .get("/getSpecificPLaylist",getSpecificPlaylist)

module.exports=playlistRouter;
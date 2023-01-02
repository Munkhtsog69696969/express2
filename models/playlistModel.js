const {Schema, Types ,model}=require("mongoose");

const playlistSchema=new Schema({
    title:String,

    description:String,

    date:Date,
    
    songs:[{type:Schema.Types.ObjectId , ref:"Songs"}]
})

const playlistDb=model("Playlists",playlistSchema);

module.exports=playlistDb;
const {Schema,model,Types}=require("mongoose");

const playlistSchema=new Schema({
    title:String,
    
    songs:[{type:Schema.Types.ObjectId , ref:"Song"}]
})

const playlistDb=model("Playlists",playlistSchema);

module.exports=playlistDb;
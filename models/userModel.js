const {Schema,Types,model}=require("mongoose");

const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
    },
    userPassword:{
        type:String,
        required:true,
    },

    playlists:[{type:Schema.Types.ObjectId , ref:"Playlists"}]
})

const userDb=model("Users",userSchema);

module.exports=userDb;
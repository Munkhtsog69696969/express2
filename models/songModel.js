const {Schema,Types,model}=require("mongoose");

const songSchema=new Schema({
    name:String,

})

const songDb=model("Songs",songSchema);

module.exports=songDb;
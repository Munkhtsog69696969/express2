const {Schema,Types,model}=require("mongoose");

const modelSchema=new Schema({
    name:String,
    age:Number,
    status:String
});

const ModelDb=model("database1",modelSchema);

module.exports=ModelDb;
const userDb=require("../models/userModel");

exports.loginUser=async(req,res)=>{
    const userName=req.body.userName;
    const userData=await userDb.find({userName}).populate("playlists");
    
    if(userData[0].userPassword===req.body.userPassword){
        res.send(userData);
    }else{
        res.send("wrong username or password")
    }

}

exports.createUser=async(req,res)=>{
    const body=req.body;
    const data=new userDb(body);
    await data.save();
    res.send(data);
}

exports.updateUser=async(req,res)=>{
    const id=req.params.id;
    const playlistId=req.body.playlistId;
    const user=await userDb.findById(id);
    user.playlists.push(playlistId);
    user.save();
    res.send(user);
}

const express=require("express");

const cors=require("cors");

const mongoose=require("mongoose");

mongoose.set('strictQuery', true);

const port=8000;

const app=express();

app.use(cors());

app.use(express.json());

const connect=require("./helper/db.js");

const router=require("./routes/router");

const playlistRouter=require("./routes/playlistRouter");

const songRouter=require("./routes/songRouter");

connect();

app.use("/", router);

app.use("/",playlistRouter);

app.use("/",songRouter);


app.listen(port,()=>{
    console.log("Server listening at",port);
})
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute  = require("./routes/userRoute.js");
const cors = require("cors");
const multer  = require("multer")


mongoose.connect(
    "mongodb+srv://usamaahmed:usama1527@cluster0.9vjwpbn.mongodb.net/?retryWrites=true&w=majority",
    (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Mongo Db Connected successfully")
        }
    }
)
app.use(express.json());
app.use(cors());

//=====Mongodb Routes==========
app.use("/user",userRoute);


app.listen(5000);
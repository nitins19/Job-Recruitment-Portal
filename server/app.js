const dotenv=require("dotenv");
const mongoose=require("mongoose");
const express=require("express");
const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn.js');
const PORT=process.env.PORT;
const User=require("./model/userSchema");
const admin=require('./routes/admin');
const cookieParser =require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

app.use(admin);


app.listen(PORT,()=>{
console.log(`Server is running on port ${PORT}`);
});
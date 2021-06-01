const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
////A mongoose schema defines the structure of the document
const seekerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    JobRole:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
 //creating collection

const Seekers=new mongoose.model('Seekers',seekerSchema);
module.exports=Seekers;
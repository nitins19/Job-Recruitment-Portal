const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
////A mongoose schema defines the structure of the document
const jobsSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    jobrole:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    jobdescription:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
 //creating collection

const Postjobs=new mongoose.model('Postjobs',jobsSchema);
module.exports=Postjobs;
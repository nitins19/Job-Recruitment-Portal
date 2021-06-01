const User=require("../model/userSchema");
require("../db/conn");
const bcrypt=require("bcrypt");
const nodemailer=require('nodemailer');
const Admin=require('../model/adminSchema');

exports.postUserRegistration=async(req,res)=>{
  const {name,email,phone,work,location,password,cpassword}=req.body;
  if(!name || !email || !phone || !work || !location || !password || !cpassword)
  {
      return res.status(422).json({error:"Please fill the field details properly."});
  }
try{
    const Userexist=await User.findOne({email:email});
    console.log(Userexist);
    if(Userexist)
    {
        res.status(422).json({error:"Email already exists"});
    }
    const user= new User({name,email,phone,work,location,password,cpassword});
    await user.save();
    res.status(201).json({message:"User registered successfully"});

}
catch(err)
{
    console.log(err);
}
};

exports.postUserSignin=async(req,res)=>{
const {email,password}=req.body;
if(!email || !password)
{
    res.status(400).json({error:"Please fill all the fields"});
}

const userLogin=await User.findOne({email:email});
console.log(userLogin);
if(userLogin)
{
    const passMatch=await bcrypt.compare(password,userLogin.password);
    let token=await userLogin.generateAuthToken();
    console.log(token);
    res.cookie("jwtoken",token,{
        expires:new Date(Date.now()+ 25892000000),
        httpOnly:true
    })
    if(!passMatch)
    {
        res.status(400).json({error:"Invalid Credentials"});
    }else{
       res.json({message:"user logged in successfully"});
    }
}
else
{
  res.status(400).json({error:"Invalid credentials"});
}
};

exports.postContactDetails=async(req,res)=>{
    try{

        const{name, email, phone, message}=req.body;
        if(!name || !email || !phone || !message)
        {
            return res.json({error:'Entry is missing'});
        }
        const userContact= await User.findOne({_id: req.userID});
        const adminContact=await Admin.findOne({_id: req.adminID});
        if(userContact)
        {
          const userMessage= await userContact.addMessage(name,email,phone,message);
          await userContact.save();
          res.status(201).json({message:"Message Sent Successfully"});
        }
        if(adminContact)
        {
          const adminMessage= await adminContact.addMessage(name,email,phone,message);
          await adminContact.save();
          res.status(201).json({message:"Message Sent Successfully"});
        }

    }
    catch(err)
    {
        console.log(err);
    }
};



exports.getLogout=(req,res)=>{
    console.log("User Logged Out");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send('User Logged out');
};



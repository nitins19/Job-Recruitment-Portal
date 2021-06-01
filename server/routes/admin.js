const express=require("express");
const router=express.Router();
const mongoose=require("mongoose");
const nodemailer=require('nodemailer');
require("../db/conn");
const db=require("../db/conn");
const User=require("../model/userSchema");
const Postjobs=require('../model/jobsSchema');
const Seekers=require('../model/seekersSchema');
const authenticate=require('../middleware/authenticate');

const Userauthentication=require('../Cotrollers/Userauthentication');
const Adminauthentication=require('../Cotrollers/Adminauthentication');

router.post('/register', Userauthentication.postUserRegistration);

router.post('/adminregister', Adminauthentication.postadminRegistration);

router.post('/signin', Userauthentication.postUserSignin);

router.post('/adminsignin', Adminauthentication.postAdminSignin);

router.post('/postjob', Adminauthentication.postjobs);

router.get('/getdata',authenticate,(req,res)=>{
        res.send(req.Data);
});



router.get('/gettotalusersdata',async(req,res)=>{
    const total=await User.countDocuments();
res.send(total.toString());
});

//router.get('/gettotaljobs',async(req,res)=>{
 //   const totaljobs=await Postjobs.find().toArray();
//res.send(totaljobs.toString());
//});


router.post('/contact',authenticate,Userauthentication.postContactDetails);

router.get('/logout', Userauthentication.getLogout);

router.get('/gettotaljobs',async(req,res)=>{
    let cursors = await Postjobs.find();
  console.log(cursors);
  res.send(cursors);
});

router.get('/getspecificjob',authenticate,async(req,res)=>{
  let name=req.Data.name;
  let cursor = await Postjobs.find({companyName:name});
console.log(cursor);
res.send(cursor);
});

router.post('/seekers',async(req,res)=>{
  const {name,phone,email,companyName,JobRole,location}=req.body;
  if(!name || !email || !phone || !companyName || !JobRole || !location)
  {
      return res.status(422).json({error:"Invalid"});
  }
try{
  const Seekerexist=await Seekers.findOne({email:email,JobRole:JobRole});
  if(Seekerexist)
  {
     return res.status(422).json({error:"Already Applied"});
  }
    const seekers= new Seekers({name,phone,email,companyName,JobRole,location});
    await seekers.save();
    res.status(201).json({message:"Seeker Registered successfully"});

}
catch(err)
{
    console.log(err);
    return err;
}
})
router.get('/seekersdata',authenticate,async(req,res)=>{
let name=req.Data.name;
let cursor=await Seekers.find({companyName:name});
res.send(cursor);
})

router.post('/applicationstatus',authenticate,async(req,res)=>{
  let name=req.Data.name;
  const {email,jobrole}=req.body;
  const output=`
  <p>Congrats!</p>
  <h3>${name} has accepted your application in ${jobrole} role.</h3>
  <h3>You may be contacted soon!</h3>`;
  let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:process.env.EMAIL,
      pass:process.env.PASSWORD
    }
  });
  let mailOptions={
    from:process.env.EMAIL,
    to:email,
    subject:'Job Status',
    html:output
  };
  transporter.sendMail(mailOptions,(err,info)=>{
    if(err)
    {
      return console.log(err);
    }
    else
    {
      res.render({message:'Email sent successfully'});
      console.log('Email Sent'+info.resonse);
    }
  });
})
module.exports=router;

require("../db/conn");
const bcrypt=require("bcrypt");
const Admin=require('../model/adminSchema');
const Postjobs=require('../model/jobsSchema');
exports.postadminRegistration=async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error:"Please fill the field details properly."});
    }
  try{
      const Adminexist=await Admin.findOne({email:email});
      console.log(Adminexist);
      if(Adminexist)
      {
          return res.status(422).json({error:"Email already exists"});
      }
      const admin= new Admin({name,email,phone,work,password,cpassword});
      await admin.save();
      res.status(201).json({message:"Company registered successfully"});
  
  }
  catch(err)
  {
      console.log(err);
      return err;
  }
  };
  
  exports.postAdminSignin=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
    {
        res.status(400).json({error:"Please fill all the fields"});
    }
    
    const adminLogin=await Admin.findOne({email:email});
    console.log(adminLogin);
    if(adminLogin)
    {
        const passMatch=await bcrypt.compare(password,adminLogin.password);
        let token=await adminLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+ 25892000000),
            httpOnly:true
        })
        if(!passMatch)
        {
            res.status(400).json({error:"Invalid Credentials"});
        }else{
           res.json({message:"Admin logged in successfully"});
        }
    }
    else
    {
      res.status(400).json({error:"Invalid credentials"});
    }
    };
    
    exports.postjobs=async(req,res)=>{
        const {companyName,jobrole,experience,skills,jobdescription,jobtype}=req.body;
    if(!companyName|| !jobrole || !experience || !skills || !jobdescription || !jobtype)
    {
        return res.status(422).json({error:"Please fill the field details properly."});
    }
  try{
      const postjob= new Postjobs({companyName,jobrole,experience,skills,jobdescription,jobtype});
      await postjob.save();
      res.status(201).json({message:"job registered successfully"});
  
  }
  catch(err)
  {
      console.log(err);
  }
    }
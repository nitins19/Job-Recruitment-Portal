const jwt=require('jsonwebtoken');
const User=require('../model/userSchema');
const Admin=require('../model/adminSchema');
const authenticate=async(req,res,next)=>{
    try{
        let token=req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
        const rootAdmin=await Admin.findOne({_id:verifyToken._id,"tokens.token":token});
       if(rootUser)
       {
        req.Data=rootUser;
        req.userID=rootUser._id;
       }
       if(rootAdmin)
       {
           req.Data=rootAdmin;
           req.adminID=rootAdmin._id;
           req.name=rootAdmin._id;
       }
       if(!rootUser && !rootAdmin)
       {
           throw new Error('No record found');
       }
        next();
    }
    catch(err){
        res.status(401).send('Unauthorized:No token provided');
        console.log(err);
    }
}
module.exports=authenticate;
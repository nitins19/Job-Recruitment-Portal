const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
////A mongoose schema defines the structure of the document
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true,
                unique:true
            },
            phone:{
                type:Number,
                required:true,
                unique:true
            },
            message:{
                type:String,
                required:true
            }

        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});
//acting as a middleware function as before saving the document in database hashing of password is done 
adminSchema.pre('save', async function (next) {
   
    if (this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.password, 12);
    } 
    next();
  });

//we are generating token
adminSchema.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err)
    {
        console.log(err);
    }
}

//we are adding messages field
adminSchema.methods.addMessage=async function(name,email,phone,message)
{
    try{
    this.messages=this.messages.concat({name,email,phone,message});
    await this.save();
    return this.messages;
    }
    catch(err)
    {
        console.log(err);
    }
}
 //creating collection
const Admin=new mongoose.model('ADMIN',adminSchema);
module.exports=Admin;
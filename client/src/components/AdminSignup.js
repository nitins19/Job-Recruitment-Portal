import React,{useState} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import DigitalClock from './DigitalClock';
import 'bootstrap/dist/css/bootstrap.css';
function AdminSignup()
{
  const history=useHistory();
const[user,setUser]=useState({
  name:"",email:"",phone:"",work:"",password:"",cpassword:""});

  let name,value;
  function handleInput(e)
  {
  name=e.target.name;
  value=e.target.value;
  setUser({...user, [name]:value});
  } 

  async function SendData(e)
  {
    e.preventDefault();
    const {name,email,phone,work,password,cpassword}=user;
    const res=await fetch("/adminregister",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,work,password,cpassword})
    });
    const data=await res.json();
    if(data.status===422|| !data)
    {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      history.push('/adminlogin');
    }
  }
  return(<>
   <DigitalClock/>
  <div className="container mt-5" style={{backgroundColor:"white",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.26)"}}>
  
  <div className="signup-form">
  <form method="POST" className="register-form" id="register-form">
  <h2 className="form-title">Sign up</h2>
  <div className="form-group">
 <label htmlFor="name">
 <i class="zmdi zmdi-account material-icons-name"></i>
 </label>
 <input type="text" name="name" id="name" autoComplete="off" value={user.name} onChange={handleInput} placeholder="Your Company Name"/>
 
  </div>

  <div class="form-group">
 <label htmlFor="email">
 <i className="zmdi zmdi-email  material-icons-name"></i>
 </label>
 <input type="email" name="email" id="email" autoComplete="off" value={user.email} onChange={handleInput} placeholder="Your Company Email"/>
 
  </div>

  <div className="form-group">
 <label htmlFor="phone">
 <i class="zmdi zmdi-phone-in-talk"></i>
 </label>
 <input type="number" name="phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInput} placeholder="Your Company Contact"/>
 
 </div>

  <div className="form-group">
 <label htmlFor="work">
 <i class="zmdi zmdi-slideshow  material-icons-name"></i>
 </label>
 <input type="text" name="work" id="work" autoComplete="off" value={user.work} onChange={handleInput} placeholder="Work"/>
 
  </div>

  <div className="form-group">
 <label htmlFor="password">
 <i class="zmdi zmdi-lock  material-icons-name"></i>
 </label>
 <input type="password" name="password" id="password" autoComplete="off" value={user.password} onChange={handleInput} placeholder="Your Password"/>
 
  </div>

  <div className="form-group">
 <label htmlFor="cpassword">
 <i class="zmdi zmdi-lock  material-icons-name"></i>
 </label>
 <input type="password" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleInput} placeholder="Confirm Password"/>
 
  </div>

  <div className="form-group form-button">
  <input type="submit" name="signup" id="signup" className="form-submit" onClick={SendData} value="Register"/>
  </div>
  <NavLink to='/adminlogin'>I am already registered</NavLink>
  </form>

  </div>
  </div>

  </>);
}
export default AdminSignup;
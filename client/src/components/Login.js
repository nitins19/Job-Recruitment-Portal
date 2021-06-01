import React,{useContext, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import DigitalClock from './DigitalClock';
import 'bootstrap/dist/css/bootstrap.css';
import {UserContext} from '../App.js';
function Login()
{
const{state,dispatch}=useContext(UserContext);
  const history=useHistory();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  function handleEmail(e)
  {
    setEmail(e.target.value);
  }

  function handlePassword(e)
  {
    setPassword(e.target.value);
  }

  async function loginUser(e)
  {
    e.preventDefault();
    const res=await fetch('/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"},
        body:JSON.stringify({
          email,
          password
        })
    });
    const data=res.json();
    if(res.status ===400||!data)
    {
      window.alert('Invalid Credentials');
    }
    else{
      dispatch({type:"USER",payload:true})
      window.alert('LoggedIn Successfully');
      history.push('/');
    }
  }
  return(<>
  <DigitalClock/>
  <div className="container mt-5" style={{backgroundColor:"white",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.26)"}}>
  
  <div className="signin-form">
  <form method="POST" className="register-form" id="register-form">
  <h2 className="form-title">Sign in</h2>
 

  <div class="form-group">
 <label htmlFor="email">
 <i className="zmdi zmdi-email  material-icons-name"></i>
 </label>
 <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={handleEmail} placeholder="Your Email"/>
 
  </div>

  <div className="form-group">
 <label htmlFor="password">
 <i class="zmdi zmdi-lock  material-icons-name"></i>
 </label>
 <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={handlePassword} placeholder="Your Password"/>
 
  </div>

  

  <div className="form-group form-button">
  <input type="submit" name="signup" id="signup" onClick={loginUser} className="form-submit" value="Log In"/>
  </div>
  <NavLink to='/signup'>Create an account</NavLink>
  </form>

  </div>
  </div>

  </>);
}
export default Login;
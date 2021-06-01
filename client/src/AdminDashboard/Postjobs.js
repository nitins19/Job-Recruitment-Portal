import React,{useState} from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import DigitalClock from '../components/DigitalClock';
import 'bootstrap/dist/css/bootstrap.css';
function Postjobs()
{
  const history=useHistory();
const[job,setJob]=useState({
  companyName:"",jobrole:"",experience:"",skills:"",jobdescription:"",jobtype:""});

  let name,value;
  function handleInput(e)
  {
  name=e.target.name;
  value=e.target.value;
  setJob({...job, [name]:value});
  } 

  async function SendData(e)
  {
    e.preventDefault();
    const {companyName,jobrole,experience,skills,jobdescription,jobtype}=job;
    const res=await fetch("/postjob",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({companyName,jobrole,experience,skills,jobdescription,jobtype})
    });
    const data=await res.json();
    if(data.status===422|| !data)
    {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Job Posted");
      console.log("Job Posted");
      history.push('/');
    }
  }
  return(<>
   <DigitalClock/>
  <div className="container mt-5" style={{backgroundColor:"white",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.26)"}}>
  
  <div className="signup-form">
  <form method="POST" className="register-form" id="register-form">
  <h2 className="form-title">Post Job</h2>

  <div className="form-group">
 <label htmlFor="companyName">
 <i class="zmdi zmdi-phone-in-talk"></i>
 </label>
 <input type="text" name="companyName" id="companyName" autoComplete="off" value={job.name} onChange={handleInput} placeholder="Enter Company Name"/>
 
 </div>
  <div className="form-group">
 <label htmlFor="jobrole">
 <i class="zmdi zmdi-account material-icons-name"></i>
 </label>
 <input type="text" name="jobrole" id="jobrole" autoComplete="off" value={job.jobrole} onChange={handleInput} placeholder="Job Role"/>
 
  </div>

  <div class="form-group">
 <label htmlFor="experience">
 <i className="zmdi zmdi-email  material-icons-name"></i>
 </label>
 <input type="number" name="experience" id="experience" autoComplete="off" value={job.experience} onChange={handleInput} placeholder="Experience"/>
 
  </div>

  <div className="form-group">
 <label htmlFor="skills">
 <i class="zmdi zmdi-phone-in-talk"></i>
 </label>
 <input type="text" name="skills" id="skills" autoComplete="off" value={job.skills} onChange={handleInput} placeholder="Enter particular skills"/>
 
 </div>

  <div className="form-group">
 <label htmlFor="jobdescription">
 <i class="zmdi zmdi-slideshow  material-icons-name"></i>
 </label>
 <input type="text" name="jobdescription" id="jobdescription" autoComplete="off" value={job.jobdescription} onChange={handleInput} placeholder="Job Description"/>
 
  </div>

  <div className="form-group">
 <label htmlFor="jobtype">
 <i class="zmdi zmdi-lock  material-icons-name"></i>
 </label>
 <input type="text" name="jobtype" id="jobtype" autoComplete="off" value={job.jobtype} onChange={handleInput} placeholder="Job Type"/>

  </div>

  <div className="form-group form-button">
  <input type="submit" name="postjob" id="postjob" className="form-submit" onClick={SendData} value="Submit"/>
  </div>
  </form>

  </div>
  </div>

  </>);
}
export default Postjobs;
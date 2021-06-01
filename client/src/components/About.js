import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import DigitalClock from './DigitalClock';
function About()
{
  const history=useHistory();
  const[userdata,setUserdata]=useState({});
  async function callAboutPage()
  {
    try{
      const res=await fetch('/getdata',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        },
        credentials:"include"
      });
      const data=await res.json();
      console.log(data);
      setUserdata(data);
      if(!res.status===200)
      {
        throw new Error('User Not Found');
      }
    }
    catch(err){
      console.log(err);
      console.log("Hii");
      history.push('/login');
    }
  }


  useEffect(()=>{
    callAboutPage();
  });
  return(<>
  <DigitalClock/>
<div className="container mt-5" style={{backgroundColor:"white",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.26)"}}>
  
  <div className="signin-form">
  <form method="GET" className="register-form" id="register-form">
  <h2 className="form-title">Details</h2>
 
  <table  class="table  table-hover">
  <tbody>
  <tr>
      <th scope="row">UserId</th>
      <td>{userdata._id}</td>
    </tr>
    <tr>
     
      <th scope="col">Name</th>
      <td>{userdata.name}</td>
    </tr>
  
  
    <tr>
      <th scope="row">Email</th>
      <td>{userdata.email}</td>
    </tr>
    <tr>
      <th scope="row">Profession</th>
      <td>{userdata.work}</td>
    </tr>
    <tr>
      <th scope="row">Phone</th>
      <td>{userdata.phone}</td>
    </tr>
  </tbody>
</table>

  </form>

  </div>
  </div>


  </>);
}
export default About;
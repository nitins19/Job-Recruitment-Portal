import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import DigitalClock from '../components/DigitalClock';
import addNewLineElement from './addNewLineElement';
function ApplyJobs()
{
  
  async function callJobsPage()
  {
    const res=await fetch('/gettotaljobs',{
      method:"GET",
      headers:{
          Accept:"application/json",
        "Content-Type":"application/json",
      },
      credentials:"include"
    });
    const data=await res.json();
  
    for(let i=0;i<data.length;i++)
    {
      addNewLineElement(data[i]);
    }
  }
  <addNewLineElement/>
  
  useEffect(()=>{
    callJobsPage();
  });
  
    return(<>
    <DigitalClock/>
    <table class="table" id="table" >
    <tbody>
  <tr style={{backgroundColor:"lightblue"}}>
    <th>Company Name</th>
    <th>Job Role</th>
    <th>Skills</th>
    <th>Job Type</th>
    <th>Experience</th>
    <th></th>
  </tr>
  <tr style={{padding:"5px"}}>
    <td id="companyName"> </td>
    <td id="jobrole"></td>
    <td id="skills"></td>
    <td id="jobtype"> </td>
    <td id="exp"></td>
    <td id="button"></td>
  </tr>
  </tbody>
  
</table>



    </>)
}

export default ApplyJobs;
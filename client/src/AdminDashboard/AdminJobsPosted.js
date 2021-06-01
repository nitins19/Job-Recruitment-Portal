import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import DigitalClock from '../components/DigitalClock';
import addNewLineElement1 from './addNewLineElement1';
function AdminJobsPosted()
{
  
  async function callJobsPage()
  {
    const res=await fetch('/getspecificjob',{
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
      addNewLineElement1(data[i]);
    }
  }
  <addNewLineElement1/>
  
  useEffect(()=>{
    callJobsPage();
  });
  
    return(<>
    <DigitalClock/>
    <table class="table  table-striped" id="table">
    <tbody>
  <tr style={{backgroundColor:"lightblue"}}>
    <th>Company Name</th>
    <th>Job Role</th>
    <th>Job Type</th>
    <th>Experience</th>
    <th>Date</th>
    <th></th>
  </tr>
  <tr>
    <td id="companyName"> </td>
    <td id="jobrole"></td>
    <td id="jobtype"> </td>
    <td id="exp"></td>
    <td id="date"></td>
    <td id="button"></td>
  </tr>

  </tbody>
</table>



    </>)
}

export default AdminJobsPosted;
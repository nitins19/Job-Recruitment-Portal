import React,{useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import DigitalClock from '../../components/DigitalClock';
import addNewLineElement from './addNewLineElement';
function JobSeekers()
{
  
  async function callSeekerPage()
  {
    const res=await fetch('/seekersdata',{
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
    callSeekerPage();
  });
  
    return(<>
    <DigitalClock/>
    <table class="table" id="table" >
    <tbody>
  <tr style={{backgroundColor:"lightblue"}}>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Location</th>
    <th>Job Role</th>
    <th></th>
  </tr>
  <tr style={{padding:"5px"}}>
    <td id="userName"> </td>
    <td id="phone"></td>
    <td id="email"></td>
    <td id="location"></td>
    <td id="jobrole"></td>
    <td id="button"></td>
  </tr>
  </tbody>
  
</table>



    </>)
}

export default JobSeekers;
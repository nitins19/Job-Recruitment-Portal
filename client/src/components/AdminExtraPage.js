import React,{useState,useEffect} from 'react';
import DigitalClock from './DigitalClock';

 

function AdminExtraPage()
{
  const[userdata,setUserdata]=useState();
  async function callAdminExtraPage()
  {
    try{
      const res=await fetch('/gettotalusersdata',{
        method:"GET",
        headers:{
            Accept:"application/json",
          "Content-Type":"application/json",
        },
        credentials:"include"
      });
      const data=await res.json();
      setUserdata(data);
  
    }
    catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    callAdminExtraPage();
  });




  return(<>
  <DigitalClock/>
  <h className="home_2">Total Users Registered</h>
  <h1 className="countusers" >{userdata}</h1>
  </>);
}
export default AdminExtraPage;
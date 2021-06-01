import React,{useState,useEffect} from 'react';
import DigitalClock from './DigitalClock';

 

function Home()
{
  const[userdata,setUserdata]=useState({});
  const [show,setShow]=useState(false);
  async function callHomePage()
  {
    try{
      const res=await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        },
      });
      const data=await res.json();
      setUserdata(data);
      setShow(true);
  
    }
    catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    callHomePage();
  });




  return(<>
  <DigitalClock/>
  <p className="welcome">WELCOME</p>
  <p className="welcome_user">{userdata.name}</p>
  <h className="home_2">{show ? 'Happy to see you!  😃 ':'MERN DEVELOPER'}</h>

  </>);
}
export default Home;
import React,{useState,useEffect} from 'react';
import DigitalClock from './DigitalClock';
function Contact()
{
  const[userdata,setUserdata]=useState({name:"",email:"",phone:"",message:""});
  async function callContactPage()
  {
    try{
      const res=await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data=await res.json();
      setUserdata({...userdata,name:data.name,email:data.email,phone:data.phone});
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    callContactPage();
   
  },[]);
  const handleInputs=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserdata({...userdata, [name]:value});
  
  }
  
  async function sendcontactdetails(e)
  {
    e.preventDefault();
    const{name,email,phone,message}=userdata;
    const res=await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify({name,email,phone,message})
    });
    const data=await res.json();
    if(!data)
    {
      console.log("Message not sent!");
    }
    else{
      window.alert("Message Sent Successfully!");
      console.log(data);
      setUserdata({...userdata,message:''});
    }
  }


  return(<>
  <DigitalClock/>
  <div className="container">
  <div className="row ">

  <div className="col-sm" style={{boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.26)",marginRight:"80px"}} >
      <p >  <i class="zmdi zmdi-phone-in-talk"></i> Phone</p>
      <p>+91 965 307 8395</p>
    </div>

    <div className="col-sm" style={{boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.26)",marginRight:"90px"}}>
     <p ><i className="zmdi zmdi-email  material-icons-name"></i> Email</p>
     <p>nitinsaxena913@gmail.com</p>
    </div>

    <div className="col-sm" style={{boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.26)"}}>
      <p ><i class="zmdi zmdi-balance"></i> Address</p>
      <p>Lucknow,India</p>
    </div>

  </div>
  </div>
  <div className="container" style={{backgroundColor:"white",boxShadow:"0px 0px 0px rgba(0, 0, 0, 0.26)",marginTop:"10px"}}>
  
  <div className="contact-form">
  <form method="POST" id="contact-form">
  <h2 className="form-title">Get In Touch</h2>
 
<div className=" d-flex justify-content-between align-items-between">

<div className="form-group">
 <input type="name" name="name" autoComplete="off" value={userdata.name} onChange={handleInputs} placeholder="Your Name"/>
  </div>  

  <div className="form-group">
 <input type="email" name="email" autoComplete="off" value={userdata.email} onChange={handleInputs} placeholder="Your Email"/>
  </div>

  <div className="form-group">
 <input type="number" name="phone" autoComplete="off" value={userdata.phone} onChange={handleInputs} placeholder="Your Number"/>
  </div>

</div>

  <div className="form-group">
 <textarea type="text" name="message" value={userdata.message} onChange={handleInputs} placeholder="Message"  cols="80" rows="8"/>
  </div>

  <div className="form-group form-button">
  <button onClick={sendcontactdetails} type="submit"> Send Message</button>
  </div>
  </form>

  </div>
  </div>
  </>);
}
export default Contact;
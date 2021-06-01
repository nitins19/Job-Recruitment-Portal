import React,{useState} from 'react';

function DigitalClock()
{
  var d=new Date().toLocaleTimeString();
  const[time,setTime]=useState(d);
  function UpdatedTime()
  {
    setTime(new Date().toLocaleTimeString());
  }
  setInterval(UpdatedTime,1000);
  
  return(<>
  <h1 className="digital_clock">{time}</h1>
  </>);
}
export default DigitalClock;
import React,{useState,useEffect} from 'react';
import DigitalClock from './DigitalClock';

function Weather()
{
  const [city,setCity]=useState(null);
  const[search,setSearch]=useState();
  function handleInput(e)
  {
    const val=e.target.value;
    setSearch(val);
  }
  async function callWeatherPage()
  {
    const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7ac57bedc8a3b70067195306ff3fe3bb`;
    const response=await fetch(url);
    const resJson=await response.json();
    console.log(resJson);
    setCity(resJson.main);
  }

  useEffect(()=>{
    callWeatherPage();

  },[search]);
  return(<>
  <DigitalClock/>
  <div className="box">
    <div className="inputData">
    <input type="search" className="inputFeild" value={search} onChange={handleInput}/>
    </div>
    {!city?
    <p className="not_found">City Not Found</p>: 
    <div className="info">
    <h2 className="location">
    <i class="fas fa-street-view"></i>{search}
    </h2>
    <h1 className="temp">
    {city.temp}℃
    </h1>
    <h3 className="tempmin_max">
    Min: {city.temp_min}℃ | Max: {city.temp_max}℃
    </h3>
    </div>
    }
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
  </div>
  </>);
}
export default Weather;
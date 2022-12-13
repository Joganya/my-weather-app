import Header from "./components/header";
import Body from "./components/body";
import Nav from "./components/navigation";
import { useEffect,useState } from "react";
import React from 'react';

const API_URL=' http://api.weatherapi.com/v1/forecast.json?key=a6d6908b615748c59b1161232220312';

function App() {
  const [modal,setModal]=useState(false);
  const [value,setValue]=useState('');
  const [weather,setWeather]=useState([]);
  const [forecast,setForecast]=useState([]);
  const [dayforecast,setDayforecast]=useState([]);
  const [location,setLocation]=useState([]);
  const [weatherCondition,setWeathercondition]=useState([]);
  const [day,setDay]=useState([null]);

 
  const searchWeather = async (title) => {
    try {
      // Fetch weather data from the API
      const response = await fetch(`${API_URL}&q=${title}&days=6`);
      const data = await response.json();
      console.log(data); 
  
      // Format the date using the Date object and toLocaleDateString
      const date = new Date(data.forecast.forecastday[0].date);
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
  
      // Set state variables based on the data received from the API
      setForecast(
        data.forecast.forecastday.filter(
          (array, index) => (index !== 0 )
        )
      );
      setWeather(data.forecast.forecastday[0].day);
      setDayforecast(data.forecast.forecastday[0].day);
      setLocation(data.location);
      setWeathercondition(data.forecast.forecastday[0].day.condition);
      setDay(formattedDate);
    } catch (error) {
      // Handle any errors that may occur during the fetch operation
      console.error(error);
    }
    
  };




  useEffect(()=>{

    searchWeather('Bauchi');
    

  },[]);

 
  return (
    <div className="grid sm:flex sm:w-full font-raleway">
      {modal === true ? (
        <Nav
          value={value}
          setvalue={setValue}
          call={searchWeather}
          setmodal={setModal}
        />
      ) : (
        <Header
          weather={weather}
          day={day}
          setmodal={setModal}
          location={location}
          weatherCondition={weatherCondition}
        />
      )}
  
      <Body
           forecast={forecast}
           dayforecast={dayforecast}
           weatherCondition={weatherCondition}
       />
    </div>
  );
  
}

export default App;

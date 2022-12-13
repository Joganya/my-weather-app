import React from 'react';

  function Header({weather,setmodal,location,weatherCondition,day}){

    return(
         //Header div 
        
        <div className="bg-regal-black bg-cld-img bg-auto bg-no-repeat bg-top-4 sm:bg-top-6 h-auto sm:w-4/12 sm:h-screen">
          {/* search button */}
          <button onClick={() => setmodal(true)} className='bg-regal-blue w-40 sm:w-32 h-10 sm:h-8  sm:text-xs mt-4 ml-3 shadow-3xl'>Search for places</button>
      
          {/* weather icon */}
          <div className='h-56 grid place-items-center mt-6 sm:mt-1 lg:mt-6'>
            <img alt={weatherCondition.text} src={`/${weatherCondition.text}.png`}  className='ml-auto mr-auto w-40 h-40 sm:w-20 sm:h-20'/>
          </div>
      
          {/* temperature, weather condition, date, and location */}
          <div className='grid ml-auto mr-auto text-center mt-20 sm:mt-1 lg:mt-6 mb-28 sm:mb-auto'>
            {/* temperature */}
            <div className='mt-3'><span className='text-9xl sm:text-6xl font-medium text-regal-white'>{weather.avgtemp_c}</span><span className='text-5xl sm:text-3xl font-medium text-regal-blue'>°C</span></div>
            {/* weather condition */}
            <div className='text-5xl sm:text-3xl text-regal-blue mt-6'>{weatherCondition.text}<span></span></div>
            {/* date */}
            <div className='mt-12 sm:mt-3 lg:mt-9 text-lg text-regal-blue'><span className='mr-3'>Today</span><span></span>.<span className='ml-3'>{day}</span></div>
            {/* location */}
            <div className='mt-6 text-lg text-regal-blue font-semibold'>{location.name}</div>
          </div>
        </div>
          );
  }

  export default  Header;
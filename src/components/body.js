 

 function Body({forecast,dayforecast,weatherCondition}){
    return (
        <div className="bg-black text-regal-white sm:p-9 sm:w-full sm:h-screen">
            <div className="grid grid-cols-2 sm:flex sm:justify-between ">
               
{
forecast.map((forecaste, index) => {
    let formattedDate;
  
    // If this is the first element in the forecast array
    if (index === 0) {
      // Set the formatted date to "Tomorrow"
      formattedDate = "Tomorrow";
    } else {
      // Create a new Date object from the date string
      const date = new Date(forecaste.date);
      // Format the date using toLocaleDateString
      formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
    }
  
    return (
      <div
        key={index}
        className="ml-auto mr-auto sm:ml-2 sm:mr-2 bg-regal-black h-auto w-10/12 sm:w-3/12 mt-6 pt-6 pb-6  sm:text-xs text-center grid "
      >
        {/* Use the formatted date instead of the original date string */}
        <h6>{formattedDate}</h6>
        <img alt={weatherCondition.text} src={`/${weatherCondition.text}.png`}  className=" w-16 sm:w-3 h-16 sm:h-3 mt-6 ml-auto mr-auto"/>
        <div className="flex justify-evenly mt-9">
          <span><span>{forecaste.day.mintemp_c}</span><span>°C</span></span>
          <span><span>{forecaste.day.maxtemp_c}</span><span>°C</span></span>
        </div>
      </div>
    );
  })
  
  
  
}

            </div>
            <h3 className="text-2xl sm:text-1xl font-bold ml-5 mt-9 mb-6">Today's Highlights</h3>
<div className="grid sm:grid-cols-2 text-center mb-16 sm:mb-0 sm:mt-6">
  {/* wind status */}
  <div className="w-10/12 mt-6 sm:mt-3 ml-auto mr-auto bg-regal-black p-5 sm:p-3 sm:h-auto">
    <h5 className="text-base">Wind status</h5>
    <div className="mt-6 sm:mt-3">
      <span className="text-6xl sm:text-4xl">{dayforecast.maxwind_mph}</span>
      <span className="text-4xl sm:text-2xl">mph</span>
    </div>
  </div>

  {/* humidity */}
  <div className="w-10/12 mt-6 sm:mt-3 ml-auto mr-auto bg-regal-black p-5 sm:p-3 sm:h-auto">
    <h5 className="text-base">Humidity</h5>
    <div className="mt-6 sm:mt-3">
      <span className="text-6xl sm:text-4xl">{dayforecast.avghumidity}</span>
      <span className="text-4xl sm:text-2xl">%</span>
    </div>
    <progress value={dayforecast.avghumidity} max='100' className="mt-3 h-1 bg-yellow-300 w-full"/>
  </div>

  {/* visibility */}
  <div className="w-10/12 mt-6 sm:mt-3 ml-auto mr-auto bg-regal-black p-5 sm:p-3 sm:h-auto">
    <h5 className="text-base">Visibility</h5>
    <div className="mt-6 sm:mt-3">
      <span className="text-6xl sm:text-4xl">{dayforecast.avgvis_miles}</span>
      <span className="text-4xl sm:text-2xl">miles</span>
    </div>
  </div>

  {/* UV index */}
  <div className="w-10/12 mt-6 sm:mt-3 ml-auto mr-auto bg-regal-black p-5 sm:p-3 sm:h-auto">
    <h5 className="text-base">UV</h5>
    <div className="text-6xl sm:text-4xl mt-6 sm:mt-3">{dayforecast.uv}</div>
  </div>
</div>
 
            
        </div>

    )
 }
 export default Body;
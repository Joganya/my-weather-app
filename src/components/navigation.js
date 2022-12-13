import React from "react";


function Nav({ setvalue, value, call, setmodal }) {
  return (
    // navigation bar
    <div className="bg-regal-black bg-top-4 sm:bg-top-6 h-screen sm:w-4/12 sm:h-screen">
      {/* close button */}
      <div onClick={() => setmodal(false)} className='sm:ml-64 ml-72 mt-3 mb-6 mr-3 text-2xl text-regal-white'>X</div>

      {/* search form */}
      <form onSubmit={(e) => {
        e.preventDefault();
        call(value);
        setvalue('');
      }} className='flex justify-evenly'>
        {/* search input */}
        <input type='text' placeholder="search location" className="border bg-regal-black w-8/12 text-regal-white" value={value} onChange={(e) => setvalue(e.target.value)}/>
        {/* search submit button */}
        <input type='submit' value='search' className="bg-blue-600 w-3/12" />
      </form>
    </div>
  );
}


   export default Nav;
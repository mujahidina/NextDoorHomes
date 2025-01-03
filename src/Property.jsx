import React from "react";
import './Hero.css';

function Property() {
  return (
    <div className="krona-one-regular bg-white h-[100vh] flex flex-col justify-start items-center mt-28">
      <div className="flex flex-row w-full justify-center items-center gap-4 p-4 mt-12">
        <input 
          placeholder="Search for properties. eg. mainhouse, villas, apartments..."  
          className="border border-black text-xs w-2/5 p-3"
        />
        <button className="bg-blue-900 py-2 px-4 text-sm text-white">Search</button>
      </div>

     {/* lower part */}
     <div className="w-5/6 mt-10 h-3/4 flex flex-row">
  {/* lower left */}


        {/* lower right */}
        <div className="w-1/2 h-[100%] ">
          <img src="r5.jpeg" alt="R5" className="h-[95%]"/>
        </div>

        <div className="w-1/2 h-[100%] flex flex-col text-3xl gap-4 text-blue-950 pt-20 pl-8 mr-12 ">
         <h1>Discover Your Ideal Property</h1>
         <h1>Effortlessly Search and Find</h1>
         <h1>Homes, Apartments,</h1>
         <h1>and Villas</h1>
         <p className="text-sm text-gray-400 mt-6">
           Explore a wide range of premium properties tailored to meet your needs, whether you're seeking a luxury apartment, a cozy villa, or a spacious family home.
         </p>
         <p className="text-sm text-gray-400 ">
           Let us help you find the perfect space to call home. Your ideal property is just a search away.
         </p>
  
        </div>
      </div>
    </div>
  );
}

export default Property;








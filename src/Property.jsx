// import React from "react";
// import { useState } from "react";
// import './Hero.css';

// function Property() { 

//   const [showResults, setShowResults] = useState(false)


//   const handleShowResults = () => {
//     setShowResults(true)
//   }

//   const handleHideResults = () =>{
//     setShowResults(false)
//   }



//   return (
//     <div className="krona-one-regular bg-white h-[100vh] flex flex-col justify-start items-center mt-28">
//       <div className="flex flex-row w-full justify-center items-center gap-4 p-4 mt-12">
//         <input 
//           placeholder="Search for properties. eg. mainhouse, villas, apartments..."  
//           className="border border-black text-xs w-2/5 p-3"
//         />
//         <button className="bg-blue-900 py-2 px-4 text-sm text-white" onClick={handleShowResults}>Search</button>
//       </div>

//      {/* lower part */}
//      <div className="w-5/6 mt-10 h-3/4 flex flex-row">
//   {/* lower left */}


//         {/* lower right */}
//         <div className="w-1/2 h-[100%] ">
//           <img src="r5.jpeg" alt="R5" className="h-[95%]"/>
//         </div>

//         <div className="w-1/2 h-[100%] flex flex-col text-3xl gap-4 text-blue-950 pt-20 pl-8 mr-12 ">
//          <h1>Discover Your Ideal Property</h1>
//          <h1>Effortlessly Search and Find</h1>
//          <h1>Homes, Apartments,</h1>
//          <h1>and Villas</h1>
//          <p className="text-sm text-gray-400 mt-6">
//            Explore a wide range of premium properties tailored to meet your needs, whether you're seeking a luxury apartment, a cozy villa, or a spacious family home.
//          </p>
//          <p className="text-sm text-gray-400 ">
//            Let us help you find the perfect space to call home. Your ideal property is just a search away.
//          </p>
  
//         </div>
//       </div>




//       {showResults && (
//          <div className="results h-[100vh] inset w-full bg-red-300">
//            <p>Results will be displayed here.</p>
//          </div>
//       )}









//     </div>

//   );
// }

// export default Property;







// import React, { useState } from "react";
// import './Hero.css';
// import properties from "./Properties";


// function Property() { 
//   const [showResults, setShowResults] = useState(false);




//   const handleShowResults = () => {
//     setShowResults(true);
//   };

//   const handleHideResults = () => {
//     setShowResults(false);
//   };

//   return (
//     <div className="krona-one-regular bg-white h-[100vh] flex flex-col justify-start items-center mt-28">
//       <div className="flex flex-row w-full justify-center items-center gap-4 p-4 mt-12">
//         <input 
//           placeholder="Search for properties. eg. mainhouse, villas, apartments..."  
//           className="border border-black text-xs w-2/5 p-3"
//         />
//         {/* Button to show results */}
//         <button className="bg-blue-900 py-2 px-4 text-sm text-white" onClick={handleShowResults}>Search</button>
//       </div>

//       {/* lower part */}
//       <div className="w-5/6 mt-10 h-3/4 flex flex-row">
//         {/* lower left */}
        
//         {/* lower right */}
//         <div className="w-1/2 h-[100%]">
//           <img src="r5.jpeg" alt="R5" className="h-[95%]" />
//         </div>

//         <div className="w-1/2 h-[100%] flex flex-col text-3xl gap-4 text-blue-950 pt-20 pl-8 mr-12 ">
//           <h1>Discover Your Ideal Property</h1>
//           <h1>Effortlessly Search and Find</h1>
//           <h1>Homes, Apartments,</h1>
//           <h1>and Villas</h1>
//           <p className="text-sm text-gray-400 mt-6">
//             Explore a wide range of premium properties tailored to meet your needs, whether you're seeking a luxury apartment, a cozy villa, or a spacious family home.
//           </p>
//           <p className="text-sm text-gray-400 ">
//             Let us help you find the perfect space to call home. Your ideal property is just a search away.
//           </p>
//         </div>
//       </div>

//       {/* Results Section */}
//       {showResults && (
//         <div className="results fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center  backdrop-filter backdrop-blur-md">
//           <div className="text-white">
//             <button onClick={handleHideResults} className="bg-blue-700 text-white p-2">
//               Hide Results
//             </button>

            





//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Property;




import React, { useState } from "react";
import './Hero.css';
import properties from "./Properties";
import { GiBathtub } from "react-icons/gi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsDoorOpen } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";

function Property() {
  const [showResults, setShowResults] = useState(false);
  const [query, setQuery] = useState('')

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  const filteredProperties = Object.keys(properties).flatMap(category => {
    if (category.toLowerCase() === query.toLowerCase()) {
      return properties[category]; // Return the properties of the matched category
    }
    return []; // If no match, return an empty array
  });

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleHideResults = () => {
    setShowResults(false);
  };

  return (
    <div className="krona-one-regular bg-white h-[100vh] flex flex-col justify-start items-center mt-28" id="properties">
      <div className="flex flex-row w-full justify-center items-center gap-4 p-4 mt-12">
        <input
          placeholder="Search for properties. eg. mainhouse, villas, apartments..."
          className="border border-black text-xs w-2/5 p-3"
          value={query}
          onChange={handleQueryChange}  // Update query when user types
        />
        {/* Button to show results */}
        <button className="bg-blue-900 py-2 px-4 text-sm text-white" onClick={handleShowResults}>Search</button>
      </div>

      {/* lower part */}
      <div className="w-5/6 mt-10 h-3/4 flex flex-row">
        {/* lower left */}
        
        {/* lower right */}
        <div className="w-1/2 h-[100%]">
          <img src="r5.jpeg" alt="R5" className="h-[95%]" />
        </div>

        <div className="w-1/2 h-[100%] flex flex-col text-3xl gap-4 text-blue-950 pt-20 pl-8 mr-12 w-">
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

      {/* Results Section */}
      {showResults && (
        <div className="results fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center backdrop-filter backdrop-blur-md">
          <div className="text-white">
              <div className="bg-blue-600 w-9 rounded-full h-9 ml-6 mt-7 items-center justify-center flex">
              <IoMdArrowBack  onClick={handleHideResults} size={21}/>
              </div>

            {/* Make the container scrollable with a fixed height */} 
            <div className="overflow-y-auto h-[100vh] flex flex-wrap justify-center p-4 bg-black bg-opacity-15 backdrop-filter backdrop-blur-md w-[100vw] ">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property, index) => (
                  <div key={index} className="property-card bg-white text-gray-400 border border-slate-400 w-96 h-[380px] px-6 flex flex-col pt-6 mb-10 mx-5 text-xs ">
                    <img src={property.imageUrl} alt={property.name} className="w-full h-56 mb-4 object-cover" />
                    <h3 className="text-lg text-gray-500">{property.name}</h3>
                      <p>{property.location}</p>
                     <p>{property.price}</p>
                   <div className="flex flex-row w-52 h-8 items-center mt-2 border border-gray-400 pl-5"> 
                         <GiBathtub size={20} className="mr-2"/>
                         <p className="mr-5">{property.bathrooms}</p>
                         <TbToolsKitchen2 size={20} className="mr-2"/>
                        <p className="mr-5">{property.kitchen}</p>
                          <BsDoorOpen size={20} className="mr-2"/>
                        <p>{property.rooms}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No properties found for your search.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Property;

import React from "react";
import './Hero.css'

function Hero() {
  
  return (
    <div className="krona-one-regular h-[100vh] w-full flex flex-row big "> 
       <div className="hero-right  w-1/2 h-[100%] flex flex-col justify-center items-center text-4xl bg-black bg-opacity-10 backdrop-filter backdrop-blur-md " > 
          <div className="w-[80%] text-white pl-24 mt-12" >
          <h1 className="">Discover Your</h1>
          <h1 className="mt-3">Dream Properties</h1>
          <h1 className="mt-3">With A Simple </h1>
          <h1 className="mt-3">Search.</h1>
          <p className="text-sm  text-slate-300 mt-8 flex-wrap w-2/3">Explore a wide range of premium properties that cater to your every need and aspiration.</p>
          </div>
      </div>
         

      <div className="hero w-1/2 h-full pt-16 mt-auto object-cover bg-black bg-opacity-10 backdrop-filter backdrop-blur-md">
      </div>
       
    </div>
  );
}
 
export default Hero; 



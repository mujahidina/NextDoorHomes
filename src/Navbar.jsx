import React from "react";

function Navbar() {
  return (
    <div className="krona-one-regular fixed top-0 left-1/2 transform -translate-x-1/2 mt-5 w-3/4 z-10 flex justify-between items-center p-3 border  backdrop-blur-md text-white rounded-lg shadow-lg">
      <p className="font-bold">NextDoorHomes</p>
      <div className="flex flex-row gap-12 text-white text-sm cursor-pointer">
        {/* <p className="py-1">Properties</p>
        <p className="py-1">About Us</p>
        <p className="py-1">Testimonials</p> */}
        <a href="#properties" className="py-1">Properties</a>
        <a href="#faqs" className="py-1">FAQs</a>
        <a href="#testimonials" className="py-1">Testimonials</a>
        <button className="ml-4 text-sm text-white bg-blue-950 p-1.5 rounded-md">Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;

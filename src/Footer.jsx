import React from "react";

function Footer() {
  return (
    <div className="krona-one-regular bg-blue-950 text-white pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
        {/* Section 1: Company Info */}
        <div className="flex flex-col">
          <h3 className="font-bold text-sm mb-4">Company</h3>
          <div className="text-xs">
          <p className="mb-2">About Us</p>
          <p className="mb-2">Careers</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">Terms & Conditions</p>
          </div>
   
        </div>


        <div className="flex flex-col">
          <h3 className="font-bold text-sm mb-4">Services</h3>
          <div className="text-xs">
          <p className="mb-2">Property Listings</p>
          <p className="mb-2">Schedule a Viewing</p>
          <p className="mb-2">Financing Options</p>
          <p className="mb-2">Customer Support</p>
          </div>
 
        </div>

        {/* Section 3: Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-bold text-sm mb-4">Quick Links</h3>
          <div className="text-xs">
          <p className="mb-2">Gallery</p>
          <p className="mb-2">Blog</p>
          <p className="mb-2">FAQs</p>
          <p className="mb-2">Contact</p>
          </div>
        </div>

        {/* Section 4: Social Media */}
        <div className="flex flex-col">
          <h3 className="font-bold text-sm mb-4">Follow Us</h3>
            <div className="text-xs">
            <p className="mb-2">Instagram</p>
          <p className="mb-2">Facebook</p>
          <p className="mb-2">Twitter</p>
          <p className="mb-2">LinkedIn</p>
            </div>
        </div>
      </div>

      
      <div className="text-center mt-16 text-xs ">
        <p>All Rights Reserved &copy; Mujahid Abdi 2024</p>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";

function Testimonials(){
    return(
       <div className="bg-white krona-one-regular bg-grey-300 h-[80vh] flex flex-col gap-8 justify-center items-center my-10">

       <h1 className="mb-10 text-2xl">Customer says</h1>


             
        <div className="flex flex-row gap-24">

        <div className="bg-white w-80 h-96 px-6 flex -flex-col justify-centre items-center border border-slate-400 flexm flex-col  pt-6">
               <img src="r6.jpeg" className="w-20 h-20 object-cover bg-white rounded-full"/>
               <h1 className="mb-6 mt-3"> Sophia M.</h1>
               <p className="text-xs text-gray-400 mt-3">"I had an amazing experience finding my dream home with this agency! 
                The team really took the time to understand my needs and helped me explore 
                properties that fit both my budget and preferences. The online platform was 
                super easy to use, and I loved the virtual tours. From the first consultation 
                to closing, the process was smooth and stress-free. Highly recommend!"</p>
             </div>

             <div className="bg-white w-80 h-96 px-6 flex -flex-col justify-centre items-center flexm flex-col border border-slate-400  pt-6">
               <img src="r7.jpeg" className="w-20 h-20 object-cover bg-white rounded-full" alt="" />
               <h1 className="mb-6 mt-3">David L.</h1>
               <p className="text-xs text-gray-400 mt-3">"Great selection of homes in our area! The website was easy to navigate, 
                and I appreciated the detailed information provided for each listing. The only reason I'm giving it 4 stars instead 
                of 5 is that it took a little longer than expected to hear back from the agent at first, but afterwards, 
                everything went smoothly. Will definitely use again when buying my 
                next property."</p>
             </div>

             <div className="bg-white w-80 h-96 px-6 flex -flex-col justify-centre items-center flexm flex-col border border-slate-400  pt-6">
               <img src="r8.jpeg" className="w-20 h-20  object-cover bg-white rounded-full" alt="" />
               <h1 className="mb-6 mt-3"> Emily R.</h1>
               <p className="text-xs text-gray-400 mt-3">"As a first-time homebuyer, I was nervous about navigating the market, 
                but the team here made everything so simple! They walked me through every step, from financing to inspections, 
                and answered all my questions. I felt supported the entire time. The property I bought is perfect for my family, 
                and I couldn't be happier with the whole experience. Definitely 5 stars!"</p>
             </div>
      
        </div>
       </div>
    )
}

export default Testimonials;
import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="h-100vh w-full my-20 flex justify-center items-center py-16">
      <div className="w-4/5 lg:w-3/4 xl:w-2/3 flex flex-row justify-between gap-6">

        {/* Left Column with Title */}
        <div className="flex flex-col justify-center items-start w-1/2 krona-one-regular text-xl">
          <h1 className="text-blue-900 ">Here are some of</h1>
          <h1 className="text-blue-900 ">our Frequently</h1>
          <h1 className="text-blue-900 ">Asked Questions</h1>
        </div>

        {/* Right Column with FAQs */}
        <div className="faq_container w-full krona-one-regular p-8  ">

          {/* FAQ Item 1 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(0)} 
            >
              What types of properties do you offer?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 0 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 0 ? "10px 0" : "0",
                transition: "height 0.2`` AA`s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                We offer a variety of properties, including luxury apartments, villas, and main houses. Whether you're looking for a city apartment, a cozy villa by the beach, or a spacious family home, we have something for everyone.
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(1)}
            >
              How can I schedule a property viewing?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 1 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 1 ? "10px 0" : "0",
                transition: "height 0.5s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                To schedule a viewing, simply visit the property listing page and click on the "Schedule a Viewing" button. Alternatively, you can contact our team directly through the contact form, and we will assist you in arranging a suitable time.
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(2)}
            >
              Do you offer financing options?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 2 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 2 ? "10px 0" : "0",
                transition: "height 0.5s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                Yes, we offer a range of financing options to make your purchase easier. Our team can assist you in finding the best financing plans based on your budget and preferences. Please reach out to us for more information on the available options.
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(3)}
            >
              Can I make an offer on a property?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 3 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 3 ? "10px 0" : "0",
                transition: "height 0.5s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                Yes, you can make an offer on any of the properties listed on our website. We will review your offer and get back to you with the next steps. Please note that offers may be subject to approval based on the property's availability and seller's conditions.
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(4)}
            >
              What is the process for renting a property?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 4 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 4 ? "10px 0" : "0",
                transition: "height 0.5s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                Renting a property is a simple process. You can browse the available rental listings, select the one you are interested in, and contact us to schedule a viewing. If you decide to proceed, we will guide you through the necessary documentation and lease agreement.
              </div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(5)}
            >
              Are pets allowed in your properties?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 5 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 5 ? "10px 0" : "0",
                transition: "height 0.5s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                Pet policies vary by property. Some properties allow pets, while others may have restrictions. Be sure to check the individual listing for specific pet-related policies or contact us for more information about the property you are interested in.
              </div>
            </div>
          </div>

          {/* FAQ Item 7 */}
          <div className="faq mb-4">
            <div
              className="faq_question text-black text-sm cursor-pointer border border-slate-400 p-2 w-5/8"
              onClick={() => handleToggle(6)}
            >
              How can I contact customer support?
            </div>
            <div
              className="faq_answer_container"
              style={{
                height: openIndex === 6 ? "auto" : "0",
                overflow: "hidden",
                padding: openIndex === 6 ? "10px 0" : "0",
                transition: "height 0.5s ease",
              }}
            >
              <div className="faq_answer text-slate-400 text-xs">
                You can reach our customer support team by clicking on the "Contact Us" link at the bottom of our website. Alternatively, you can email us directly or call our support hotline for any inquiries or assistance.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;

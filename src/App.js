import React from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Property from "./Property";
import PopularList from "./PopularList";
import PartOfUs from "./PartOfUs";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Property/>
      <PopularList/>
      <PartOfUs/>
      <Faq/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

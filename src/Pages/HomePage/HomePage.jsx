import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Service";
import Offer from "./Components/Offer";
import OurValues from "./Components/OurValues";
import WhyChooseUs from "./Components/WhyUs";
import Partners from "./Components/Partners";
import Testimonials from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const HomePage = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Offer/>
    <OurValues/>
    <WhyChooseUs/>
    <Partners/>
    <Testimonials/>
    <Contact/>
    <Footer/>

    </>
  );
};

export default HomePage;
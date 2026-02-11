import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../sections/HeroSection";
import About from "../sections/about";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Landscape from "../sections/landscape";
import CTA from "../components/CTA";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Work />
      <Landscape />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;

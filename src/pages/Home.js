import React, { useState } from "react";
import HeroImage from "../components/HeroImage";
import SearchJob from "../components/SearchJob";
import LatestJobs from "../components/LatestJobs";
import TrustedClients from "../components/TrustedClients";
import AboutUsHome from "../components/AboutUsHome";
import ServicesOverview from "../components/ServicesOverview";
import FloatingSocials from "../components/FloatingSocials";
import TestimonialsSuccess from "../components/TestimonialsSuccess";
import FooterSection from "../components/FooterSection";
import ChatBot from "../components/ChatBot";

const Home = () => {
 

  return (
    <div className="Home">
      <HeroImage />
      <SearchJob  />
      <LatestJobs />
      <TrustedClients />
      <AboutUsHome />
      <ServicesOverview />
      <FloatingSocials />
      <TestimonialsSuccess />
      <FooterSection />
      <ChatBot />
    </div>
  );
};

export default Home;

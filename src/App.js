import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import FloatingSocials from "./components/FloatingSocials";
import ChatBot from "./components/ChatBot";
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import CvPortal from "./pages/CvPortal";
import ContactUs from "./pages/ContactUs";

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <FloatingSocials /> 
              <ChatBot />
            </>
          }
        />
        
        {/* Other Pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/cv-portal" element={<CvPortal />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;

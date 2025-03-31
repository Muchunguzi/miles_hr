import React , {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import HeroImage from './components/HeroImage';
import SearchJob from './components/SearchJob';
import LatestJobs from './components/LatestJobs';
import TrustedClients from './components/TrustedClients';
import AboutUsHome from './components/AboutUsHome';
import ServicesOverview from './components/ServicesOverview';
import FloatingSocials from './components/FloatingSocials';
import TestimonialsSuccess from './components/TestimonialsSuccess';
import FooterSection from './components/FooterSection';
import ChatBot from './components/ChatBot';


function App() {
  
  const [Job , getJob] = useState("")

  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <SearchJob Job = {Job}/>
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
}

export default App;

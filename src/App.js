import React , {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import HeroImage from './components/HeroImage';
import SearchJob from './components/SearchJob';
import LatestJobs from './components/LatestJobs';

function App() {
  
  const [Job , getJob] = useState("")

  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <SearchJob Job = {Job}/>
      <LatestJobs />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import SearchJob from "./components/SearchJob";
import LatestJobs from "./components/LatestJobs";

function App() {
  const [Job, getJob] = useState(""); // Note: getJob might be intended as setJob—I'll assume so

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroImage />
                <SearchJob Job={Job} />
                <LatestJobs />
              </>
            }
          />
          <Route path="/jobs" element={<SearchJob Job={Job} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
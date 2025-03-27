import React, { useState, useEffect } from "react";

const SearchJob = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("UAE");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Function to fetch autocomplete suggestions
  const fetchSuggestions = async (input) => {
    if (input.trim().length < 3) { 
      setSuggestions([]); 
      return; 
    } 

    try {
      const response = await fetch(`http://localhost:5000/jobs?q=${encodeURIComponent(input)}`);
      const data = await response.json();

      // Filter job titles that start with the input (not just contains)
      const jobTitles = [
        ...new Set(
          data
            .map((job) => job.title)
            .filter((title) => title.toLowerCase().startsWith(input.toLowerCase()))
        ),
      ];

      setSuggestions(jobTitles.slice(0, 5)); // Limit suggestions to top 5
      setShowSuggestions(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  // Handle typing in search input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    fetchSuggestions(value);
  };

  // Handle clicking a suggestion
  const handleSuggestionClick = (suggestion) => {
    setKeyword(suggestion);
    setShowSuggestions(false);
  };

  const handleSearch = async () => {
    if (keyword.trim().length < 3) { 
      setResults([]); 
      return; 
    } 

    let query = `http://localhost:5000/jobs?q=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`;

    setLoading(true);
    try {
      const response = await fetch(query);
      const data = await response.json();

      // Filter jobs that match from the beginning
      const filteredResults = data.filter((job) =>
        job.title.toLowerCase().startsWith(keyword.toLowerCase())
      );

      setResults(filteredResults);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SearchJob container mt-4">
      <h2 className="fw-bold mb-4">Find Jobs</h2>
      <div className="row g-3 mb-4">
        <div className="col-md-5 position-relative">
          <input
            type="text"
            placeholder="Search for a job..."
            value={keyword}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            className="form-control"
          />
          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="list-group position-absolute w-100 shadow" style={{ zIndex: 10 }}>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{ cursor: "pointer" }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-4">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-select"
          >
            <option value="UAE">UAE</option>
            <option value="Kenya">Kenya</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
        </div>
        <div className="col-md-3">
          <button onClick={handleSearch} className="btn btn-primary w-100">
            Search
          </button>
        </div>
      </div>

      <div>
        {loading ? (
          <p className="text-muted">Searching...</p>
        ) : results.length > 0 ? (
          <ul className="list-group">
            {results.map((job, index) => (
              <li key={index} className="list-group-item">
                <h3 className="fw-bold">{job.title}</h3>
                <p className="text-muted">
                  {job.employer_name} - {job.city}, {job.country}
                </p>
                <a
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-decoration-none"
                >
                  Apply Now
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs found or waiting for input...</p>
        )}
      </div>
    </div>
  );
};

export default SearchJob;

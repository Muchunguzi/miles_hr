import React, { useState } from "react";

const SearchJob = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("UAE");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    let query = "http://localhost:5000/jobs?";
    const filters = [];

    if (keyword) {
      filters.push(`title_like=${keyword}`);
    }

    if (location) {
      filters.push(`location_like=${location}`);
    }

    query += filters.join("&");

    setLoading(true);
    try {
      const response = await fetch(query);
      const data = await response.json();
      setResults(data || []);
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
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Search for a job..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-control"
          />
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

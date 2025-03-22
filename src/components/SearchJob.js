import React, { useState } from "react";

const SearchJob = () => {
  const [keyword, setkeyword] = useState("");
  const [location, setLocation] = useState("UAE");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const query = `https://jsearch.p.rapidapi.com/search?query=${keyword}&location=${location}&num_pages=1`;

    try {
      setLoading(true);
      const response = await fetch(query, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY, 
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST
        }
      });

      const data = await response.json();
      setResults(data.data || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    setLoading(false);
  };

  return (
    <div className="SearchJob p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Find Jobs</h2>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search for a job..."
          value={keyword}
          onChange={(e) => setkeyword(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="UAE">UAE</option>
          <option value="Kenya">Kenya</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <div>
        {loading ? (
          <p className="text-gray-500">Searching...</p>
        ) : results.length > 0 ? (
          <ul className="space-y-3">
            {results.map((job, index) => (
              <li key={index} className="border p-3 rounded shadow">
                <h3 className="font-bold text-lg">{job.job_title}</h3>
                <p className="text-sm text-gray-600">
                  {job.employer_name} - {job.job_city}, {job.job_country}
                </p>
                <a
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm underline"
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

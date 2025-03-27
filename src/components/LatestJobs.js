import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const [latestJobs, setLatestJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      console.log("Fetching jobs from http://localhost:5000/jobs...");
      try {
        const response = await fetch("http://localhost:5000/jobs");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log("Fetched data:", data);

        // Sort by posted_date (descending) and take the latest 5
        const sortedJobs = (data || [])
          .sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date))
          .slice(0, 5);
        
        console.log("Sorted jobs:", sortedJobs);
        setLatestJobs(sortedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLatestJobs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  console.log("Rendering LatestJobs - loading:", loading, "latestJobs:", latestJobs);

  return (
    <div className="LatestJobs container my-5">
      <h2 className="text-center fw-bold mb-5" style={{ color: "#1a1a1a", fontFamily: "'Poppins', sans-serif" }}>
        Explore the Latest Opportunities
      </h2>

      {loading ? (
        <div className="row g-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body placeholder-glow">
                  <h5 className="card-title placeholder col-6"></h5>
                  <p className="card-text placeholder col-8"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : latestJobs.length > 0 ? (
        <div className="row g-4">
          {latestJobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="card-body">
                  <h5 className="card-title fw-bold text-dark" style={{ fontSize: "1.25rem" }}>
                    {job.title}
                  </h5>
                  <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
                    {job.employer_name} - {job.city}, {job.country}
                  </p>
                  <p className="text-muted small">
                    Posted: {new Date(job.posted_date).toLocaleDateString()}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <a
                    href={job.job_apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-100"
                    style={{
                      background: "linear-gradient(90deg, #007bff, #0056b3)",
                      border: "none",
                      fontWeight: "500",
                    }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">No jobs available right now.</p>
      )}

      <div className="text-center mt-5">
        <Link
          to="/jobs"
          className="btn btn-outline-dark btn-lg px-5 py-2"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "500",
            borderRadius: "50px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a1a1a", e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = "#1a1a1a")}
        >
          More Jobs
        </Link>
      </div>
    </div>
  );
};

export default LatestJobs;
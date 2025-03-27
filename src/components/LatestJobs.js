import React, { useState, useEffect } from "react";

const LatestJobs = () => {
  const [latestJobs, setLatestJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/jobs?_sort=posted_at&_order=desc");
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging to see the fetched data
        setLatestJobs(data.slice(0, 5)); // Show latest 5 jobs only
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestJobs();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available"; // Fallback for missing date
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4 text-primary">🚀 Top Job Openings</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Fetching the latest jobs...</p>
        </div>
      ) : latestJobs.length > 0 ? (
        <div className="row g-4">
          {latestJobs.map((job, index) => (
            <div key={index} className="col-md-6">
              <div className="card shadow-lg border-0 p-3 job-card">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="fw-bold">{job.title}</h4>
                  {job.featured && <span className="badge bg-warning text-dark">Featured</span>}
                </div>
                <p className="text-muted mb-2">
                  <i className="bi bi-calendar-event text-primary"></i> Posted on: {formatDate(job.posted_at)}
                </p>
                <p className="text-muted">
                  <i className="bi bi-geo-alt-fill text-primary"></i> Location: {job.city || "City not available"}, {job.country || "Country not available"}
                </p>
                <p className="text-muted">
                  <i className="bi bi-briefcase-fill text-secondary"></i> Type: {job.type || "Job type not specified"}
                </p>
                <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">No jobs available at the moment.</p>
      )}

      <div className="text-center mt-4">
        <a href="/jobs" className="btn btn-success btn-lg px-4">
          View All Jobs
        </a>
      </div>
    </div>
  );
};

export default LatestJobs;

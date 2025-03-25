const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample job data
const jobs = [
  { id: 1, title: "Software Developer", company: "Techify", location: "UAE" },
  { id: 2, title: "Security Guard", company: "SecureX", location: "Kenya" },
  { id: 3, title: "Data Analyst", company: "DataWorks", location: "USA" },
];

// GET all jobs
app.get("/api/jobs", (req, res) => {
  const { keyword, location } = req.query;

  let filtered = jobs;

  if (keyword) {
    filtered = filtered.filter((job) =>
      job.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (location) {
    filtered = filtered.filter(
      (job) => job.location.toLowerCase() === location.toLowerCase()
    );
  }

  res.json({ data: filtered, success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// utils/fetchJobs.js



export const fetchJobsData = async () => {
    try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/jobs.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.jobs; // ✅ Return the actual jobs array
    } catch (error) {
      console.error("Job fetch error:", error);
      return []; // fail gracefully
    }
  };
  
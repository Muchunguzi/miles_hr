import React, { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./CvPortal.module.css";
import PlainWhiteTemplate from "../components/PlainWhiteTemplate";
import Template2 from "../components/Template2";

const jobTitles = [
  "Software Engineer", "Factory Worker", "Customer Service Representative", "Security Guard",
  "Office Administrator", "Graphic Designer", "Marketing Specialist", "Accountant",
  "Sales Executive", "Data Analyst"
];

const CVGenerator = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    nationality: "",
    experience: [
      { company: "", yearRange: "", details: "" }
    ],
    photo: "",
    jobPosition: "",
    education: [{ year: "", school: "", degree: "" }],
    objective: "",
    skills: "",
    languages: ""
  });

  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [autoJobs, setAutoJobs] = useState([]);
  const cvRef = useRef(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({ ...prev, objective: editor.getHTML() }));
    },
  });

  const Templates = [PlainWhiteTemplate, Template2];
  const ActiveTemplate = Templates[currentIndex];

  useEffect(() => {
    const fetchAutoJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/jobsAutoCompletions");
        const data = await res.json();
        setAutoJobs(data);
      } catch (err) {
        console.error("Auto-fill fetch error:", err);
      }
    };

    fetchAutoJobs();
  }, []);

  const handleAutoFillFromJob = (jobTitle) => {
    const match = autoJobs.find(job => job.title.toLowerCase() === jobTitle.toLowerCase());
    if (match) {
      setFormData((prev) => ({
        ...prev,
        skills: match.skills.join(", "),
        objective: match.objective,
        experience: [
          {
            company: "",
            yearRange: "",
            details: match.responsibilities.join("\n")
          }
        ]
      }));
      if (editor) editor.commands.setContent(match.objective);
    }
  };

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "My_CV",
    onPrintError: (location, error) => console.error("Print Error:", location, error),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleJobInput = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, jobPosition: value });
    setFilteredJobs(
      value.length > 1
        ? jobTitles.filter((job) =>
            job.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const selectJob = (job) => {
    setFormData({ ...formData, jobPosition: job });
    setFilteredJobs([]);
    handleAutoFillFromJob(job);
  };

  const handleEducationChange = (index, field, value) => {
    const updated = [...formData.education];
    updated[index][field] = value;
    setFormData({ ...formData, education: updated });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { year: "", school: "", degree: "" }],
    });
  };

  const removeEducation = (index) => {
    const updated = formData.education.filter((_, idx) => idx !== index);
    setFormData({ ...formData, education: updated });
  };

  const handleExperienceChange = (index, field, value) => {
    const updated = [...formData.experience];
    updated[index][field] = value;
    setFormData({ ...formData, experience: updated });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { company: "", yearRange: "", details: "" }],
    });
  };

  const removeExperience = (index) => {
    const updated = formData.experience.filter((_, idx) => idx !== index);
    setFormData({ ...formData, experience: updated });
  };

  const nextTemplate = () => setCurrentIndex((prev) => (prev + 1) % Templates.length);
  const prevTemplate = () => setCurrentIndex((prev) => (prev - 1 + Templates.length) % Templates.length);

  return (
    <div className="container-fluid px-3">
      <h2 className="text-center fw-bold my-4">CV Generator</h2>
      <div className="row g-4">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Photo</label>
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required />
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label">Job Position</label>
              <input type="text" name="jobPosition" value={formData.jobPosition} onChange={handleJobInput} className="form-control" placeholder="Type to get job suggestions" required />
              {filteredJobs.length > 0 && (
                <ul className="list-group position-absolute w-100 z-1">
                  {filteredJobs.map((job, index) => (
                    <li key={index} className="list-group-item list-group-item-action" onClick={() => selectJob(job)}>
                      {job}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {["email", "phone", "address", "nationality", "skills", "languages"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input type="text" name={field} value={formData[field]} onChange={handleChange} className="form-control" required />
              </div>
            ))}
            <div className="mb-3">
              <label className="form-label">Objective</label>
              <EditorContent editor={editor} className="border p-2 bg-white" />
            </div>
            <div className="mb-3">
              <label className="form-label">Professional Experience</label>
              {formData.experience.map((exp, index) => (
                <div key={index} className="border rounded p-3 mb-2">
                  <input type="text" className="form-control mb-2" placeholder="Company Name" value={exp.company} onChange={(e) => handleExperienceChange(index, "company", e.target.value)} />
                  <input type="text" className="form-control mb-2" placeholder="Year Range (e.g., 2021 - 2023)" value={exp.yearRange} onChange={(e) => handleExperienceChange(index, "yearRange", e.target.value)} />
                  <textarea className="form-control mb-2" rows={4} placeholder="Responsibilities (1 per line)" value={exp.details} onChange={(e) => handleExperienceChange(index, "details", e.target.value)} />
                  <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => removeExperience(index)}>Remove</button>
                </div>
              ))}
              <button type="button" className="btn btn-sm btn-primary mt-2" onClick={addExperience}>Add Experience</button>
            </div>
            <div className="mb-3">
              <label className="form-label">Education</label>
              {formData.education.map((edu, index) => (
                <div key={index} className="border rounded p-3 mb-2">
                  <input type="text" className="form-control mb-2" placeholder="Year" value={edu.year} onChange={(e) => handleEducationChange(index, "year", e.target.value)} />
                  <input type="text" className="form-control mb-2" placeholder="School" value={edu.school} onChange={(e) => handleEducationChange(index, "school", e.target.value)} />
                  <input type="text" className="form-control mb-2" placeholder="Degree" value={edu.degree} onChange={(e) => handleEducationChange(index, "degree", e.target.value)} />
                  <button type="button" onClick={() => removeEducation(index)} className="btn btn-sm btn-outline-danger">Remove</button>
                </div>
              ))}
              <button type="button" onClick={addEducation} className="btn btn-sm btn-primary mt-2">Add Education</button>
            </div>
            <button type="button" onClick={handlePrint} className="btn btn-success mb-4">Print CV</button>
          </form>
        </div>

        <div className="col-lg-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button className="btn btn-secondary" onClick={prevTemplate}>Previous Template</button>
            <button className="btn btn-primary" onClick={nextTemplate}>Next Template</button>
            <button className="btn btn-outline-dark" onClick={() => setShowThumbnails(true)}>See All Templates</button>
          </div>
          <div className="CVs_preview p-3 bg-light rounded shadow">
            <ActiveTemplate ref={cvRef} formData={formData} />
          </div>
        </div>
      </div>

      {showThumbnails && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center zindex-tooltip">
          <div className="bg-white p-4 rounded shadow-lg w-75" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <h4 className="mb-3 text-center">Select a Template</h4>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {Templates.map((Template, idx) => (
                <div
                  key={idx}
                  className="border p-2 rounded cursor-pointer bg-light"
                  style={{ width: 150, height: 200, overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setShowThumbnails(false);
                  }}
                >
                  <Template formData={formData} />
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-outline-danger" onClick={() => setShowThumbnails(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CVGenerator;

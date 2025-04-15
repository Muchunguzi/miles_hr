import React, { forwardRef } from "react";
import styles from "./Template2.module.css"; // Using CSS modules
import "bootstrap/dist/css/bootstrap.min.css";


const Template2CV = forwardRef(({ formData }, cvRef) => {
  const {
    photo,
    name,
    jobTitle,
    phone,
    email,
    address,
    website,
    education = [],
    skills,
    languages,
    experience = [],
    references = [],
    objective,
  } = formData;

  // Normalize skills and languages (if provided as a comma-separated string)
  const normalizedSkills = Array.isArray(skills)
    ? skills
    : typeof skills === "string" && skills
    ? skills.split(",").map((s) => s.trim())
    : [];

  const normalizedLanguages = Array.isArray(languages)
    ? languages
    : typeof languages === "string" && languages
    ? languages.split(",").map((l) => l.trim())
    : [];

  return (
  
     
    <div ref={cvRef} className={`${styles["resume-template-2"]} container-fluid my-4 shadow p-4`} >
      <div style={{display:"flex", flexDirection:"row"}} >
        {/* Left Side - Sidebar */}
        <div className="col-md-4 bg-primary text-white text-center py-4">
          <div className="mb-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center bg-light mx-auto mb-3"
              style={{
                width: "120px",
                height: "120px",
                border: "3px solid #fff",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {photo ? (
                <img
                  src={photo}
                  alt="Profile"
                  className="img-fluid"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <div className="text-muted" style={{ fontWeight: "bold" }}>
                  Photo
                </div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-0">{phone}</h5>
            <p className="mb-0">{email}</p>
            <p className="mb-0">{address}</p>
            <p className="mb-0">{website}</p>
          </div>

          <div className="mb-4">
            <h6 className="text-uppercase fw-bold border-bottom pb-1">Education</h6>
            {education.map((edu, idx) => (
              <div key={idx} className="text-start">
                <p className="mb-0 fw-bold">{edu.year}</p>
                <p className="mb-0">{edu.school}</p>
                <p className="mb-1">{edu.degree}</p>
              </div>
            ))}
          </div>

          <div className="mb-4 text-start">
            <h6 className="text-uppercase fw-bold border-bottom pb-1">Skills</h6>
            <ol className="ps-3">
              {normalizedSkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ol>
          </div>

          <div className="mb-4 text-start">
            <h6 className="text-uppercase fw-bold border-bottom pb-1">Languages</h6>
            <ul className={`ps-3 ${styles["languages-box"]}`}>
              {normalizedLanguages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="col-md-8 px-4 py-3">
          <h2 className="fw-bold">
            {name?.split(" ")[0]} <span className="text-primary">{name?.split(" ")[1]}</span>
          </h2>
          <h5 className="text-secondary">{jobTitle}</h5>

          <div className="my-4">
            <h6 className="fw-bold text-uppercase border-bottom pb-1">Profile</h6>
            <p>{objective}</p>
          </div>

          <div className="my-4">
          <h6 className="fw-bold text-uppercase border-bottom pb-1">Experience</h6>
          {Array.isArray(formData.experience) && formData.experience.length > 0 ? (
          formData.experience.map((exp, idx) => (
          <div key={idx} className="mb-3">
           <p className="font-semibold text-sm">{exp.company}</p>
           <p className="text-xs italic text-gray-600">{exp.yearRange}</p>
           <ol className="list-disc pl-5 text-sm text-gray-700 whitespace-pre-wrap break-words">
          {exp.details?.split('\n').map((line, i) =>
          line.trim() ? <li key={i}>{line}</li> : null
          )}
      </ol>
    </div>
  ))
) : (
  <p className="text-sm text-gray-500">No experience provided</p>
)}

          </div>

          <div className="my-4">
            <h6 className="fw-bold text-uppercase border-bottom pb-1">References</h6>
            <div className="row">
              {Array.isArray(references) &&
                references.map((refItem, idx) => (
                  <div key={idx} className="col-sm-6 mb-2">
                    <p className="mb-0 fw-bold">{refItem.name}</p>
                    <p className="mb-0">{refItem.position}</p>
                    <p className="mb-0">{refItem.email}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
});

export default Template2CV;
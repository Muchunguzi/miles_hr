import React from "react";
import "./Template2.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Template2CV = ({ formData }) => {
  const {
    photo,
    name,
    jobTitle,
    phone,
    email,
    address,
    website,
    education = [],
    skills = [],
    languages = [],
    experience = [],
    references = [],
    profile,
  } = formData;

  return (
    <div className="container-fluid my-4 shadow p-4 resume-template-2" style={{ backgroundColor: "#fff" }}>
      <div className="row">
        {/* Left Side - Sidebar */}
        <div className="col-md-4 bg-primary text-white text-center py-4">
          <div className="mb-3">
            {photo && (
              <img
                src={photo}
                alt="Profile"
                className="rounded-circle img-fluid"
                style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid #fff" }}
              />
            )}
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
                <p className="mb-0 fw-bold">{edu.yearRange}</p>
                <p className="mb-0">{edu.institution}</p>
                <p className="mb-1">{edu.course}</p>
              </div>
            ))}
          </div>

          <div className="mb-4 text-start">
            <h6 className="text-uppercase fw-bold border-bottom pb-1">Skills</h6>
            <ul className="ps-3">
              {Array.isArray(skills) && skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4 text-start">
            <h6 className="text-uppercase fw-bold border-bottom pb-1">Languages</h6>
            <ul className="ps-3">
              {Array.isArray(languages) && languages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="col-md-8 px-4 py-3">
          <h2 className="fw-bold">{name?.split(" ")[0]} <span className="text-primary">{name?.split(" ")[1]}</span></h2>
          <h5 className="text-secondary">{jobTitle}</h5>

          <div className="my-4">
            <h6 className="fw-bold text-uppercase border-bottom pb-1">Profile</h6>
            <p>{profile}</p>
          </div>

          <div className="my-4">
            <h6 className="fw-bold text-uppercase border-bottom pb-1">Work Experience</h6>
            {Array.isArray(experience) && experience.map((exp, idx) => (
              <div key={idx} className="mb-3">
                <p className="mb-0 fw-bold d-flex justify-content-between">
                  <span>{exp.company}</span>
                  <span>{exp.yearRange}</span>
                </p>
                <p className="mb-0">{exp.position}</p>
                <ul className="ps-3">
                  {exp.details && exp.details.split('\n').map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="my-4">
            <h6 className="fw-bold text-uppercase border-bottom pb-1">References</h6>
            <div className="row">
              {Array.isArray(references) && references.map((ref, idx) => (
                <div key={idx} className="col-sm-6 mb-2">
                  <p className="mb-0 fw-bold">{ref.name}</p>
                  <p className="mb-0">{ref.position}</p>
                  <p className="mb-0">{ref.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2CV;

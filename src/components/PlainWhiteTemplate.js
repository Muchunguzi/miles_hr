import React, { forwardRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import './PlainWhiteTemplate.css';

const PlainWhiteTemplate = forwardRef(({ formData }, cvRef) => {
  return (
    <div className="plain-white-template">
      <div
        ref={cvRef}
        className="cv_plain_white p-6"
        style={{ width: "210mm", height: "297mm" }}
      >
        {/* Profile Section */}
        <div className="text-center mb-6">
          <div className="profilePhoto mx-auto">
            {formData.photo ? (
              <img
                src={formData.photo}
                alt="Profile"
                className="object-cover rounded-full"
                style={{ height: "150px", width: "150px" }}
              />
            ) : (
              <FaUserCircle
                className="text-gray-400"
                style={{ height: "150px", width: "150px" }}
              />
            )}
          </div>
        </div>

        {/* Personal Info */}
        <section className="text-center mb-4">
          <h1 className="text-2xl font-bold">{formData.name}</h1>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Job Position:</strong> {formData.jobPosition}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Nationality:</strong> {formData.nationality}</p>
        </section>

        <hr className="my-3" />

        {/* Objective */}
        <section className="mb-4">
          <h3 className="font-semibold">Objective</h3>
          <p>{formData.objective}</p>
        </section>

        <hr className="my-3" />

        {/* Education */}
        <section className="mb-4">
          <h3 className="font-bold text-sm mb-2">EDUCATION</h3>
          {formData.education?.map((edu, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold text-xs">{edu.year}</p>
              <p className="text-xs">{edu.school}</p>
              <p className="text-xs italic">{edu.degree}</p>
            </div>
          ))}
        </section>

        <hr className="my-3" />

        {/* Experience */}
        <section className="mb-4">
          <h3 className="font-semibold">Professional Experience</h3>
          <p>{formData.professionalExperience}</p>
        </section>

        <hr className="my-3" />

        {/* Skills */}
        <section className="mb-4">
          <h3 className="font-semibold">Skills</h3>
          <p>{formData.skills}</p>
        </section>

        <hr className="my-3" />

        {/* Languages */}
        <section>
          <h3 className="font-semibold">Languages</h3>
          <p>{formData.languages}</p>
        </section>
      </div>
    </div>
  );
});

export default PlainWhiteTemplate;

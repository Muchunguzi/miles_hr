import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaBriefcase, FaTools } from "react-icons/fa";
import "./ServicesOverview.css";

const ServicesOverview = () => {
  return (
    <section className="container my-5 py-5 text-center">
      <h2 className="fw-bold mb-4">Our Services</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="service-card">
            <FaBriefcase className="service-icon" />
            <h4>HR Consultancy</h4>
            <p>HR system development, implementation & support.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <FaUsers className="service-icon" />
            <h4>Manpower Recruitment</h4>
            <p>Overseas & local recruitment solutions.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <FaTools className="service-icon" />
            <h4>Manpower Supply</h4>
            <p>Providing skilled & unskilled workers.</p>
          </div>
        </div>
      </div>
      <Link to="/services" className="btn btn-primary mt-4 px-4 py-2">
        Learn More
      </Link>
    </section>
  );
};

export default ServicesOverview;

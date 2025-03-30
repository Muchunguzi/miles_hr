import React from "react";
import { Link } from "react-router-dom";

const AboutUsHome = () => {
  return (
    <section className="container my-5 py-5 bg-light text-center rounded">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="lead text-muted">
            At <strong>Your HR Consultancy</strong>, we specialize in connecting top talent with leading employers. Our mission is to streamline the hiring process, ensuring a perfect match between job seekers and companies.
          </p>
          <Link to="/about" className="btn btn-primary mt-3 px-4 py-2">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
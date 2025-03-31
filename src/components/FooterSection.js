import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h2 className="company-name">Miles HR Consultancy</h2>
        </div>
        
        <div className="footer-content">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Find Jobs</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column contact-info">
            <h3>Contact Us</h3>
            <p><strong>Phone:</strong> +971507932066</p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/971542797932" target="_blank" rel="noopener noreferrer">+971542797932</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@mileshr.ae">info@mileshr.ae</a></p>
            <p><strong>Website:</strong> <a href="https://www.mileshr.ae" target="_blank" rel="noopener noreferrer">www.mileshr.ae</a></p>
          </div>

          <div className="footer-column social-icons">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><FaLinkedinIn /></a>
              <a href="https://wa.me/971542797932" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Miles HR Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
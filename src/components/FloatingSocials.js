import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./FloatingSocials.css";

const FloatingSocials = () => {
  return (
    <div className="floating-socials">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <FaInstagram />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <FaLinkedinIn />
      </a>
      <a href="https://wa.me/+971581182913" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FloatingSocials;
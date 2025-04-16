import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Include close icon

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optional: close menu when navigating
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={handleLinkClick}>
          <img src={logo} alt="Miles HR Logo" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={handleLinkClick}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/our-services" className="nav-link" onClick={handleLinkClick}>Our Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/cv-portal" className="nav-link" onClick={handleLinkClick}>CV Portal</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link" onClick={handleLinkClick}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react"
import Home from "./Home";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
import logo from "../assets/images/logo.png"

const Navbar = () => {
   
   return (
      <div className="Navbar">
          <img className="logo" src={logo} style={{width:"20%",height:"20%"}} alt="milesHR_logo_image" />
          <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/AboutUs">About Us</a>
            </li>
            <li>
                <a href="/OurServices">Our Services</a>
            </li>
            <li>
                <a href="/CvPortal">CV Portal</a>
            </li>
            <li>
            <a href="/ContactUs">Contact Us</a>
            </li>
          </ul>
      </div>
   )
}

export default Navbar 
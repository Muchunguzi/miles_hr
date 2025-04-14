import React from "react";
import heroVid from "../assets/videos/heroVid.mp4";


const HeroImage = () => {
  return (
    <div className="container text-center">
      <div className="heroImage position-relative mx-auto overflow-hidden rounded">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="heroVid w-100 h-auto d-block mx-auto"
        >
          <source src={heroVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Call-to-Action Button at Bottom Left */}
        <div className="cta-button">
          <a href="tel:+971581182913" className="btn">
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;

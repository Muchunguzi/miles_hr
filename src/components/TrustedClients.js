import React from "react";
import Marquee from "react-fast-marquee";
import "./TrustedClients.css";
import cleanco from "../assets/images/cleancoLogo.jpg";
import abcCorp from "../assets/images/abcCorpLogo.jpg";
import global from "../assets/images/globalSolutionsLogo.jpg";
import elite from "../assets/images/eliteStaffingLogo.jpg";
import prime from "../assets/images/primeRecruitersLogo.jpg";

const clients = [
  { name: "Cleanco", logo: cleanco },
  { name: "ABC Corp", logo: abcCorp },
  { name: "Global Solutions", logo: global},
  { name: "Elite Staffing", logo: elite},
  { name: "Prime Recruiters", logo: prime }
];

const TrustedClients = () => {
  return (
    <div className="trusted-clients-section text-center py-5">
      <h2 className="fw-bold mb-4">Trusted by Leading Companies</h2>
      <div className="marquee-container">
        <Marquee gradient={false} speed={80}>
          {clients.map((client, index) => (
            <div key={index} className="client-logo-container">
              <img src={client.logo} alt={client.name} className="client-logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedClients;

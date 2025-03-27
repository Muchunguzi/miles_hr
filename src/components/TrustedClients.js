import React from "react";
import Marquee from "react-fast-marquee";
import "./TrustedClients.css";

const clients = [
  { name: "Cleanco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cleanco_Logo.png" },
  { name: "ABC Corp", logo: "https://via.placeholder.com/150" },
  { name: "Global Solutions", logo: "https://via.placeholder.com/150" },
  { name: "Elite Staffing", logo: "https://via.placeholder.com/150" },
  { name: "Prime Recruiters", logo: "https://via.placeholder.com/150" }
];

const TrustedClients = () => {
  return (
    <div className="trusted-clients-section text-center py-5">
      <h2 className="fw-bold mb-4">Trusted by Leading Companies</h2>
      <div className="marquee-container">
        <Marquee gradient={false} speed={50}>
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
